<template>
<div>
    <div class="control-section file-azure">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the Azure blob storage with File Manager component. To run the service, create the Azure blob storage account and register the Azure storage details like <i><b>account name</b></i>, <i><b>password</b></i>, and <i><b>blob name</b></i> details within the <code>RegisterAzure</code> method.</p>
    </div>
    <div id="description">
        <p>
            The <b>File Manager</b> component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete, refresh and so on.
        </p>
         <p><b>Note: </b>File Manager’s upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/azure-aspcore-file-provider">Azure Blob Provider</a> from the GitHub repository.</p>

         <p><b>NuGet Package:</b> NuGet package of <a target="_blank" href="https://www.nuget.org/packages/Syncfusion.EJ2.FileManager.AzureFileProvider.AspNet.Core"><b>ASP.NET Core Azure file system provider</b></a> is now available on <a target="_blank" href="https://www.nuget.org/">nuget.org</a>.</p>
    </div>
</div>
</template>
<style>
.file-azure .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";


/**
 * File Manager sample with azure service
 */
let hostUrl = 'https://ej2-azure-aspcore-service.azurewebsites.net/';

export default {
     components: {
      'ejs-filemanager': FileManagerComponent
     },
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/AzureFileManager/AzureFileoperations',
                getImageUrl: hostUrl + 'api/AzureFileManager/AzureGetImage',
                uploadUrl: hostUrl + 'api/AzureFileManager/AzureUpload',
                downloadUrl: hostUrl + 'api/AzureFileManager/AzureDownload'
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
