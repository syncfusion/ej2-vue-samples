<template>
<div>
    <div class="control-section">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :searchSettings='searchSettings'>
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/ej2-amazon-s3-aspcore-file-provider">Amazon S3 file system provider</a> to manage the files in File Manager component. To run the service, create an Amazon S3 account and a S3 bucket and then register your amazon S3 client account details like <b>bucketName</b>,  <b>awsAccessKeyId</b>, <b>awsSecretKeyId</b> and <b>awsRegion</b> details in <code>RegisterAmazonS3</code> method to perform the file operations.</p>
    </div>
    <div id="description">
         <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>
         <p><b>Note: </b>File Manager’s upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/ej2-amazon-s3-aspcore-file-provider">Amazon S3 File Provider</a> from the GitHub repository.</p>
    </div>
</div>
</template>
<style>
.sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
/**
 * File Manager sample with Amazon S3 service
 */
let hostUrl = 'https://amazons3.azurewebsites.net/api/AmazonS3Provider/';
export default Vue.extend ({
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'AmazonS3FileOperations',
                getImageUrl: hostUrl + 'AmazonS3GetImage',
                uploadUrl: hostUrl + 'AmazonS3Upload',
                downloadUrl: hostUrl + 'AmazonS3Download'
            },
            searchSettings: {allowSearchOnTyping: false}
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
});
</script>
