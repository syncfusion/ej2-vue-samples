<template>
<div>
    <div class="control-section file-ftp">
         <div class="sample-container">
            <ejs-filemanager id="ftpfilemanager" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
       <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/ftp-aspcore-file-provider">File Transfer Protocol file system provider</a> to manage the files in the File Manager component.
            To run the service, create a FTP connection, and then configure the FTP details such as <i><b>host name</b></i>, <i><b>user name</b></i>, and <i><b>password</b></i> in the <code>SetFTPConnection</code> method to perform the file operations.</p>
    </div>
    <div id="description">
         <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>
         <b>Note: </b>File Manager's upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/ftp-aspcore-file-provider">ftp-aspcore-file-provider</a> from the GitHub repository.
    </div>
</div>
</template>
<style>
.file-ftp .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager sample with File Transfer Protocol
 */
let hostUrl = 'https://ej2-ftp-aspcore-service.azurewebsites.net/';

export default {
     components: {
      'ejs-filemanager': FileManagerComponent
     },
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/FTPProvider/FTPFileOperations',
                getImageUrl: hostUrl + 'api/FTPProvider/FTPGetImage',
                uploadUrl: hostUrl + 'api/FTPProvider/FTPUpload',
                downloadUrl: hostUrl + 'api/FTPProvider/FTPDownload'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
}
</script>