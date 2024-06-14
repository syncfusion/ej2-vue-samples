<template>
	<div class="file-api">
		<div class="col-lg-8 control-section">
			<div class="sample-container">
			   <ejs-filemanager id="file" ref="fileObject" :ajaxSettings='ajaxSettings' :view='view'
					 :navigationPaneSettings='navigationPaneSettings'
					 :toolbarSettings='toolbarSettings'
					 :contextMenuSettings="contextMenuSettings">
				</ejs-filemanager>
			</div>
		</div>
		<div class="col-lg-4 property-section">
			<div id="property" title="Properties">
				<table id="property" title="Properties">
					<tbody>
				    	<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">Toolbar</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-checkbox id="toolbar" :checked="true" :change="toolbarChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">allowMultiSelection</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-checkbox id="multiSelect" :checked="true" :change="multiSelectChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">showFileExtension</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-checkbox id="fileExtension" :checked="true" :change="fileExtensionChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">showThumbnail</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-checkbox id="thumbnail" :checked="true" :change="thumbnailChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">Disable</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-dropdownlist id='disable' :dataSource='items' placeholder='Select item' :change="itemChange"></ejs-dropdownlist> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 50%;">
						   		<div id="checkboxElement">Enable</div>
						   </td>
						   <td style="width: 50%; padding-right: 10px;">
						   		<ejs-dropdownlist id='enable' :dataSource='items' placeholder='Select item' :change="itemChange"></ejs-dropdownlist> 
						   </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div id="action-description">
                    <p>The File Manager component in the property pane displays its features in this sample. The visibility of the toolbar, multi-selection, file extensions,
                        and image thumbnails can all be easily controlled by checking or unchecking the respective checkboxes. Additionally, specific toolbar items can be
                        enabled or disabled by selecting values in the Dropdown List.
                    </p>                
        </div>

		<div id="description">
                <p>In this demo, the above mentioned requirements are achieved by using the following API properties and method of the File Manager component. </p>
                <p><code>toolbarSettings</code> defines the group of items in the toolbar that are aligned horizontally.</p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/react/documentation/api/file-manager/#allowmultiselection'>allowMultiSelection</a> property enables or disables the File Manager's multiple folder or file selection.  </p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/react/documentation/api/file-manager/#showfileextension'>showFileExtension</a> property shows or hides the file extension in the File Manager.</p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/react/documentation/api/file-manager/#showthumbnail'>showThumbnail</a> property shows or hides thumbnail images in the large icons view. . </p>
                <p><code>enableToolbarItems</code> specifies which items should be enabled in the toolbar.</p>
                <p><code>disableToolbarItems</code> specifies which items should be disabled in the toolbar.</p>
                <p>
                    <b>Note: </b>File Manager's upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
                    <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion Essential Studio </a>on your machine and run the demo.
                    </p>
        </div>

	</div>
</template>

<style>
    .file-api .property-panel-table div {
        padding-top: 0;
    }

    .file-api #tool {
        padding-top: 5px;
    }

    .file-api #tool_toggle {
        width: 100px;
    }
	#checkboxElement{
		font-size:14px;
	}


</style>

<script>
import { FileManagerComponent ,NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

/**
 * File Manager API sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    components: {
      'ejs-filemanager': FileManagerComponent,
      'ejs-checkbox': CheckBoxComponent,
      'ejs-dropdownlist': DropDownListComponent
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
				file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
            view:"LargeIcons",   			
            navigationPaneSettings:
            {
                visible: false
            }, 
			items:  ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details']
        };
    },   
    provide: {
            filemanager: [NavigationPane, Toolbar, DetailsView]
    },
    methods: {
		toolbarChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.toolbarSettings.visible = args.checked ? true : false
		},
		multiSelectChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.allowMultiSelection = args.checked ? true : false
		},
		fileExtensionChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.showFileExtension = args.checked ? true : false
		},
		thumbnailChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.showThumbnail = args.checked ? true : false
		},
		itemChange: function(args) {
			var fileObj = this.$refs.fileObject;
        	var changedItem = args.itemData.value;
        	if (args.element.id == 'enable') {
            	fileObj.ej2Instances.enableToolbarItems([changedItem]);
        	} else {
            	fileObj.ej2Instances.disableToolbarItems([changedItem]);
        	}
    	}
	}
};
</script>

