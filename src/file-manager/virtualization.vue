<template>
<div>
    <div class="control-section file-virtual">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :view='view' :virtualizationSettings='virtualizationSettings'>
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
         <p>This sample demonstrates UI virtualization of the File Manager component. Scroll the items in details view or large icons view to load the folders/files dynamically. The folder 'Documents' and 'Text Documents' has large set of files in below sample.</p>
    </div>

    <div id="description">
        <p>In the demo, enabled virtualization by using <code>virtualizationSettings.enable</code> property as true. Specify the number of files/folders to render on initial rendering through following APIs.
            <ul>
                <li>For details view, specify count by using<code>virtualizationSettings.detailsViewItemsCount</code></li>
                <li>For large icons view, specify count by using <code>virtualizationSettings.largeIconsViewItemsCount</code></li>
            </ul>
        </p>
        <p>To use virtual scrolling feature, inject Virtualization module using the <code>FileManager.Inject(Virtualization)</code> section.</p>
        <p><b>Note: </b>File Manager’s upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
            <a target="_blank" href="https://www.syncfusion.com/downloads">Syncfusion Essential Studio </a>on your machine and run the demo.</p>
    </div>
</div>
</template>
<style>
.file-virtual .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent, Virtualization } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
/**
 * File Manager virtualization feature sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
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
            view:"Details",  
            virtualizationSettings: {
                enable: true,
                detailsViewItemsCount: 30,
                largeIconsViewItemsCount: 50
            }
        };
    },
    provide: {
        filemanager: [NavigationPane, DetailsView, Toolbar, Virtualization]
    }
});
</script>

