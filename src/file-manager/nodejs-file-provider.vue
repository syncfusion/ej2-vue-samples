<template>
<div>
    <div class="control-section file-nodejs">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem">NodeJS file system provider</a> with File Manager component. The <code>ej2-filemanager-node-filesystem</code> is an NPM package for file system provider which is available in npmjs, refer this <a target="_blank" href="https://www.npmjs.com/package/@syncfusion/ej2-filemanager-node-filesystem">link</a> to download package.</p>
    </div>
    <div id="description">
        <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>

       <p><b>Note: </b>File Manager’s upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem">NodeJS File Provider</a> from the GitHub repository.</p>
    </div>
</div>
</template>
<style>
.file-nodejs .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView, ContextMenu } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager sample with Node.js service
 */
let hostUrl = 'https://ej2-nodejs-service.azurewebsites.net/';

export default {
     components: {
      'ejs-filemanager': FileManagerComponent
     },
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl,
                getImageUrl: hostUrl + 'GetImage',
                uploadUrl: hostUrl + 'Upload',
                downloadUrl: hostUrl + 'Download'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar, ContextMenu]
    }
}
</script>
