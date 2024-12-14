<template>
<div>
    <div class="control-section file-drag">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :allowDragAndDrop='allowDragAndDrop' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This example demonstrates the <code>drag-and-drop</code> feature. To drag and drop a file in the File Manager, select and drag it to the target folder. The File Manager component allows users to drag file and drop it into any folder, whether it is located in the same directory or a different one, using the <code><a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowdraganddrop" target="_blank">allowDragAndDrop</a></code> property.</p>
    </div>
    <div id="description">
        <p>In this sample, the <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowdraganddrop" target="_blank"> allowDragAndDrop </a> property enables users to move files or folders from one folder to another. Additionally, it supports file upload by dragging and dropping files from Windows Explorer and Mac onto the File Manager component.</p>
        <p>
            <b>Note: </b>File Manager's upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install 
            <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> </a>on your machine and run the demo.
        </p>
    </div>
</div>
</template>
<style>
.file-drag .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager Drag and Drop feature sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
     components: {
      'ejs-filemanager': FileManagerComponent
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
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
            allowDragAndDrop: true
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
}
</script>

