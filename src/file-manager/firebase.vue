<template>
<div>
    <div class="control-section file-firebase">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings" >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
       <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider">Firebase Realtime Database file system provider</a> with File Manager component. It supports all basic file operations such as create, rename, delete, cut, copy, paste, upload, download, and more.</p>
    </div>
    <div id="description">
        <p>To run the service, create a <a target="_blank" href="https://console.firebase.google.com/">firebase realtime database</a> and then register the database's <code>Rest API link</code>, <code>root node name</code>, and <code>service account key path </code> in the <code>RegisterFirebaseRealtimeDB</code> method to perform the file operations.</p>
        <p>Checkout this <a target="_blank" href="https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider">Firebase Realtime Database file system provider</a> from the GitHub repository to connect with <code>RegisterFirebaseRealtimeDB</code> method.</p>
        
        <b>Note: </b>File Manager's upload functionality is restricted in online demos for security reasons. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider">firebase-realtime-database-aspcore-file-provider</a> from the GitHub repository.
    </div>
</div>
</template>
<style>
.file-firebase .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager sample with firebase realtime database service
 */
let hostUrl = 'https://realtime-firebase.azurewebsites.net/';

export default {
     components: {
      'ejs-filemanager': FileManagerComponent
     },
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeFileOperations',
                getImageUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeGetImage',
                uploadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeUpload',
                downloadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeDownload'
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