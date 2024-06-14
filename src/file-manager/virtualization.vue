<template>
<div>
    <div class="control-section file-virtual">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :view='view' :enableVirtualization='enableVirtualization' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
         <p>This sample demonstrates UI virtualization of the File Manager component. Scroll the items in details view or large icons view to load the folders/files dynamically. The folder 'Documents' and 'Text Documents' has large set of files in below sample.</p>
    </div>

    <div id="description">
        <p>In the demo, enabled virtualization by using <code>enableVirtualization</code> property as true.</p>
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
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView, Virtualization } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager virtualization feature sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    components: {
      'ejs-filemanager': FileManagerComponent
    },
    data: function() {
        return {            
           ajaxSettings:
            {
                url: hostUrl + 'api/Virtualization/FileOperations',
                getImageUrl: hostUrl + 'api/Virtualization/GetImage',
                uploadUrl: hostUrl + 'api/Virtualization/Upload',
                downloadUrl: hostUrl + 'api/Virtualization/Download'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'View', 'Details']},
            contextMenuSettings: {
                file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
            view: "Details",  
            enableVirtualization: true
        };
    },
    provide: {
        filemanager: [NavigationPane, DetailsView, Toolbar, Virtualization]
    }
}
</script>

