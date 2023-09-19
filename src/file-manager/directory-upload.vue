<template>
<div>
    <div class="control-section folder-upload">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" ref="filemanagerInstance" :ajaxSettings='ajaxSettings' >
                <e-toolbaritems>
                    <e-toolbaritem name="NewFolder"></e-toolbaritem>
                    <e-toolbaritem :template="'uploadTemplate'" name="Upload">
                        <template v-slot:uploadTemplate>
                            <div><ejs-dropdownbutton id="dropButton" ref="dropButtonInstance" cssClass="e-tbar-btn e-tbtn-txt" iconCss="e-icons e-fe-upload" :items='items' :select="onSelect" :onClick="uploadClick"> <span className="e-tbar-btn-text">Upload</span></ejs-dropdownbutton></div>
                        </template>
                    </e-toolbaritem>
                    <e-toolbaritem name="SortBy"></e-toolbaritem>
                    <e-toolbaritem name="Refresh"></e-toolbaritem>
                    <e-toolbaritem name="Cut"></e-toolbaritem>
                    <e-toolbaritem name="Copy"></e-toolbaritem>
                    <e-toolbaritem name="Paste"></e-toolbaritem>
                    <e-toolbaritem name="Delete"></e-toolbaritem>
                    <e-toolbaritem name="Download"></e-toolbaritem>
                    <e-toolbaritem name="Rename"></e-toolbaritem>
                    <e-toolbaritem name="Selection"></e-toolbaritem>
                    <e-toolbaritem name="View"></e-toolbaritem>
                    <e-toolbaritem name="Details"></e-toolbaritem>
                </e-toolbaritems>
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the folder (directory) upload feature of FileManager component. Select <b>Folder</b> from toolbar item to select and upload a folder.</p>
    </div>
    <div id="description">
        <p>In this demo, a folder upload enabled by setting <code>directoryUpload</code> as true. It allows to select or drop a folder to upload all its contents including hierarchy folders and files.</p>
        <p>The folder (directory) upload is supported for the following file system providers,
            <li> Physical provider</li>
            <li> NodeJS provider</li>
            <li> Azure provider</li>
            <li> Amazon S3 provider</li>
        </p>
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
.folder-upload .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView,ToolbarItemDirective,ToolbarItemsDirective} from "@syncfusion/ej2-vue-filemanager";
import { DropDownButtonComponent, ItemModel } from "@syncfusion/ej2-vue-splitbuttons";
/**
 * File Manager directory upload feature sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
export default {
    components: {
        'ejs-filemanager': FileManagerComponent,
        'ejs-dropdownbutton': DropDownButtonComponent,
        'e-toolbaritem': ToolbarItemDirective,
        'e-toolbaritems': ToolbarItemsDirective
    },
     data: function() {
        return {
           ajaxSettings:
            {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            },
            items: [{ text: "Folder" }, { text: "Files" }]
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    },
    methods: {
        onSelect: function (args) {
            var fileObj = this.$refs.filemanagerInstance;
            if (args.item.text === "Folder") {
                fileObj.ej2Instance.uploadSettings.directoryUpload = true;
            } else {
                fileObj.ej2Instance.uploadSettings.directoryUpload = false;
            }
            setTimeout(function () {
                var uploadBtn = document.querySelector(".e-file-select-wrap button");
                uploadBtn.click();
            }, 100);
        },
        uploadClick: function(args){
             args.stopPropagation();
        }
    },
};
</script>
