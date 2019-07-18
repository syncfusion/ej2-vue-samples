<template>
<div>
    <div class="control-section">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :allowDragAndDrop='allowDragAndDrop' >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the drag-and-drop feature of the File Manager. To drag and drop the file, select and drag a desired file or folder and drop it into the target folder. The File Manager component allows users to drag any file and drop it on any other folder in the same or different folder using the <code><a href="https://ej2.syncfusion.com/documentation/api/file-manager/#allowdraganddrop" target="_blank">allowDragAndDrop</a></code> property.</p>
    </div>
    <div id="description">
        <p>
            The <b>File Manager</b> component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete, refresh and so on.
        </p>
         <p>
            <b>Note: </b>File Manager's upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
            <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion Essential Studio </a>on your machine and run the demo.
        </p>
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
 * File Manager Drag and Drop feature sample
 */
let hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
export default Vue.extend ({
     data: function() {
        return {            
           ajaxSettings:
            {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            },
            allowDragAndDrop: true
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
});
</script>

