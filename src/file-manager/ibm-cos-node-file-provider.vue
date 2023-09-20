<template>
<div>
    <div class="control-section file-ibm">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :rootAliasName='rootAliasName' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider">IBM Cloud Object Storage file provider</a> with File Manager component. The <code>ej2-filemanager-ibm-cos-node-file-provider</code> is an NPM package for file provider which is available in npmjs, refer this <a target="_blank" href="https://www.npmjs.com/package/@syncfusion/ej2-filemanager-ibm-cos-node-file-provider">link</a> to download package.</p>
    </div>

    <div id="description">
        <p>The File Manager component is used to explore a file through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>

        <p><b>Note: </b>File Manager’s upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider">IBM Cloud Object Storage file provider</a> from the GitHub repository.</p>
    </div>
</div>
</template>
<style>
.file-ibm .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView, ContextMenu } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager sample with IBM Cloud Object Storage service
 */
let hostUrl = 'https://ej2-ibm-cos-node-file-provider.azurewebsites.net/';

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
            },
            rootAliasName:"Files"
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar, ContextMenu]
    }
}
</script>
