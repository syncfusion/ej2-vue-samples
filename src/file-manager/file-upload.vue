<template>
<div>
    <div class="control-section">
        <div id='uploadFileManager' class="fileupload">
            <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles">
            </ejs-uploader>
            <ejs-button id="openBtn" v-on:click.native="btnClick">File Browser</ejs-button>
        </div>
        <div id='target' class="control-section">
            <ejs-dialog ref="uploadDialog" id="dialog" v-bind:visible="false" :header='dialogHeader' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :open="dialogOpen" :close="dialogClose" :target='target'
            :width='dialogWidth'>
                <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :contextMenuSettings="contextMenuSettings" :toolbarSettings="toolbarSettings" v-bind:allowMultiSelection="false" :fileOpen="onFileOpen" >
                </ejs-filemanager>
            </ejs-dialog>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the real-time use case of File Manager in a web application. Dialog and Uploader components are integrated with the File Manager. Click the browse button in the Uploader element to open the File Manager inside the Dialog control. </p>
    </div>
    <div id="description">
        <p>
            The <b>File Manager</b> component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete, refresh and so on.
        </p>
         <p>
            <b>Note: </b>File Manager's upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
            <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion Essential Studio </a>on your machine and run the demo.
        </p>
    </div>
</div>
</template>

<style>

    .fileupload {
        max-width: 500px;
        margin: auto;
    }
    #openBtn {
        position: absolute;
        top: 34px;
        left: 43%;
    }
    #target {
        height: 550px;
    }
    #dialog {
        top: 20px !important;
        max-height: 500px !important;
        left: 30px !important;
    }

    #uploadFileManager .e-file-drop, #uploadFileManager .e-css.e-btn {
        display: none;
    }

</style>

<script>
    import Vue from "vue";
    import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
    import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
    import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";
    Vue.use(FileManagerPlugin);
    Vue.use(DialogPlugin);
    Vue.use(UploaderPlugin);
    Vue.use(ButtonPlugin);
    /**
    * File Manager real time use case sample
     */
    let hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    let contextmenuItems = ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'];

    export default Vue.extend({
        data: function(){
            return {
                dialogHeader: 'Select a file',
                showCloseIcon: true,
                target: '#target',
                animationSettings: { effect: 'None' },
                dialogWidth: '850px',
                ajaxSettings:  {
                    url: hostUrl + 'api/FileManager/FileOperations',
                    getImageUrl: hostUrl + 'api/FileManager/GetImage',
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                },
                toolbarSettings: {items: ["NewFolder", "Upload", 'Cut', 'Copy', "Delete", "Rename", "SortBy", "Refresh", "Selection", "View", "Details"]},
                contextMenuSettings: {
                    file: this.contextmenuItems,
                    folder: this.contextmenuItems
                }
            }
        },
        provide: {
                filemanager: [NavigationPane, DetailsView, Toolbar]
        },
        methods:{
            btnClick: function(event) {
                this.$refs.uploadDialog.show();
                let fileObj = document.getElementById('filemanager').ej2_instances[0];
                fileObj.path = "/";
                fileObj.selectedItems = [];
                fileObj.refresh();
            },
            // Uploader will be hidden, if Dialog is opened
            dialogOpen: function() {
                document.getElementById('uploadFileManager').style.display = 'none';
            },
            // Uploader will be shown, if Dialog is closed
            dialogClose: function() {
                document.getElementById('uploadFileManager').style.display = 'block';
            },
            // File Manager's fileOpen event function
            onFileOpen: function(args) {
                let file = args.fileDetails;
                if (file.isFile) {
                    args.cancel = true;
                    this.$refs.uploadObj.files = [{name: file.name, size: file.size, type: file.type }];
                    this.$refs.uploadDialog.hide();
                }
            }
        }
    });
</script>
