<template>
<div>
    <div class="control-section file-overview">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :toolbarSettings="toolbarSettings" :contextMenuSettings="contextMenuSettings">
            </ejs-filemanager>
        </div>
    </div>
	<div id="action-description">
		<p>The File Manager that gives you complete control over who can access your folders and files. With this essential feature, you can define access permissions and create a secure and organized digital environment.
			This File Manager sample demonstrates that the enabled access permission will permit only read action and will not allow the user to perform any write action on the <code>documents</code>, <code>music</code> folders, and the <code>bird image</code> file inside the <code>pictures/nature</code> folder.</p>
	</div>
    <div id="description">
		<p>The access control feature allows you to define access permissions for folders and files using a set of access rule properties based on user’s role.
			Refer to the <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/file-manager/access-control#access-rules'>Access Rules</a> and <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/file-manager/access-control#permissions'>Permissions</a> UG for more details on this.</p>

		<p><b>Note: </b>File Manager’s upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install 
			<a target="_blank" href="https://www.syncfusion.com/downloads">Syncfusion Essential Studio </a>on your machine and run the demo.</p>
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
                url: hostUrl + 'api/FileManagerAccess/FileOperations',
                getImageUrl: hostUrl + 'api/FileManagerAccess/GetImage',
                uploadUrl: hostUrl + 'api/FileManagerAccess/Upload',
                downloadUrl: hostUrl + 'api/FileManagerAccess/Download'
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

