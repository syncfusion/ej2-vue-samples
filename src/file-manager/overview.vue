<template>
<div>
    <div class="control-section">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :view='view' >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the full features of the File Manager that includes toolbar, navigation pane and details view.
        </p>
    </div>
    <div id="description">
        <p>
            The <b>File Manager</b> component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete, refresh and so on.
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
            view:"Details"
        };
    },
    provide: {
            filemanager: [NavigationPane, Toolbar, DetailsView]
    }
});
</script>

