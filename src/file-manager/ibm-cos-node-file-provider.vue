<template>
<div>
    <div class="control-section file-ibm">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :rootAliasName='rootAliasName' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to use the <a target="_blank" href="https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider">IBM Cloud Object Storage file provider</a> with the File Manager component. The IBM Cloud Object Storage file provider module provides support for working with the IBM Cloud Object Storage and enables various file actions such as creating a new folder, renaming files, and deleting files. The <code>ej2-filemanager-ibm-cos-node-file-provider</code> is an NPM package for file provider which is available in npmjs, refer to this <a target="_blank" href="https://www.npmjs.com/package/@syncfusion/ej2-filemanager-ibm-cos-node-file-provider">link</a> to download the package.</p>
    </div>

    <div id="description">
        <p>This file provider serves as a source for the File Manager component when using the IBM Cloud Object Storage.</p>
        <p>To run the service, create an IBM Cloud Object Storage for accessing and storing the cloud objects as files or folders. Create an <a target="_blank" href="https://cloud.ibm.com/docs/cloud-object-storage/basics?topic=cloud-object-storage-provision"> IBM Cloud account </a> and Cloud Object Storage bucket to perform file operations. Then, define the server credentials details such as <code>bucketname</code>, <code>endpoint</code>, <code>apiKeyId</code>, and <code>serviceInstanceId</code> within the <code>config/default.json</code> file found in the config folder.</p>
        <p>Checkout this <a target="_blank" href="https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider"> IBM Cloud Object Storage file provider </a> from the GitHub repository.</p>
        
        <p><b>Note: </b>File Manager’s upload functionality is restricted in online demos for security reasons. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider">IBM Cloud Object Storage file provider</a> from the GitHub repository.</p>
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
                file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
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
