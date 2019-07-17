<template>
<div>
    <div class="control-section">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/ej2-sql-server-database-aspcore-file-provider">SQL server file system provider</a> with File Manager component. To run the service, configure the SQL server database connection using the <code>SetSQLConnection</code> method to set the connection name, table name and rootId of the SQL table.</p>
    </div>
    <div id="description">
        <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>

        <p><b>Note: </b>File Manager’s upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
        <a target="_blank" href="https://www.syncfusion.com/downloads">Syncfusion Essential Studio </a>on your machine and run the demo.</p>
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
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, ContextMenu, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
/**
 * File Manager sample with SQL service
 */
let hostUrl = 'https://ng2jq.syncfusion.com/ej2-sql-service/';
export default Vue.extend ({
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/FileManager/Fileoperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar, ContextMenu]
    }
});
</script>
