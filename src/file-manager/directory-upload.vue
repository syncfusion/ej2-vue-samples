<template>
<div>
    <div class="control-section folder-upload">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" ref="filemanagerInstance" :ajaxSettings='ajaxSettings' :contextMenuSettings="contextMenuSettings" >
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
        <p>This sample demonstrates the folder (directory) upload feature. Select <code>Folder</code> from the <code>Upload</code> toolbar item to select and upload a folder in the File Manager component.</p>
    </div>
    <div id="description">
        <p>In this demo, a folder upload is enabled by setting <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadSettingsModel/#directoryupload" target="_blank"> directoryUpload </a> to <code>true</code>. It allows users to select or drag and drop a folder to upload its contents including hierarchy folders and files in the File Manager component.</p>
        <p>The folder (directory) upload is supported for the following file system providers,</p>
        <ul>
            <li> Physical provider</li>
            <li> NodeJS provider</li>
            <li> Azure provider</li>
            <li> Amazon S3 provider</li>
        </ul>

         <p>
            <b>Note: </b>File Manager's upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install
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
            items: [{ text: "Folder" }, { text: "Files" }],
            contextMenuSettings: {
				file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                visible: true
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    },
    methods: {
        onSelect: function (args) {
            var fileObj = this.$refs.filemanagerInstance;
            if (args.item.text === "Folder") {
                fileObj.ej2Instances.uploadSettings.directoryUpload = true;
            } else {
                fileObj.ej2Instances.uploadSettings.directoryUpload = false;
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
