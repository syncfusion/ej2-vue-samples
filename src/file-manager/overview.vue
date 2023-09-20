<template>
<div>
    <div class="control-section file-overview">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :view='view' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the full features of the File Manager that includes <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarsettings" target="_blank"> toolbar</a>, <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#navigationpanesettings" target="_blank"> navigation pane</a> and <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/#detailsviewsettings" target="_blank"> details view.</a>
        </p>
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
.file-overview .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager full functionalities sample
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
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
            view:"Details",
            detailsViewSettings: {
                columns: [
                    {
                        field: 'name', headerText: 'Name', customAttributes: { class: 'e-fe-grid-name' }
                    },
                    {
                        field: '_fm_modified', headerText: 'DateModified', format: 'MM/dd/yyyy hh:mm a'
                    },
                    {
                        field: 'size', headerText: 'Size', template: '<span class="e-fe-size">${size}</span>', format: 'n2'
                    }
                ]
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
}
</script>

