<template>
<div>
    <div class="control-section file-virtual">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :view='view' :enableVirtualization='enableVirtualization' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates the implementation of UI virtualization within the File Manager component, enhancing performance and user experience by dynamically loading folders and files as the user scrolls through the items. In both the details view and large icons view, the component efficiently handles extensive data sets, ensuring smooth navigation. Particularly, the <code>documents</code> and <code>text documents</code> folders in this example contain a substantial number of files, showcasing the capability of the File Manager to manage and display large volumes of data seamlessly.
        </p>
    </div>

    <div id="description">
        <p>In this demo, virtualization is enabled by setting the <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#enablevirtualization" target="_blank">enableVirtualization</a> property to <code>true</code>.</p>
        <p>To use the virtual scrolling feature, inject the virtualization module using the <code>FileManager.Inject(Virtualization)</code> section.</p>
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

