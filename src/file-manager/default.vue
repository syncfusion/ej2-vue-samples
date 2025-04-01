<template>
	<div class="file-api">
		<div class="col-lg-8 control-section">
			<div class="sample-container">
			   <ejs-filemanager id="file" ref="fileObject" :ajaxSettings='ajaxSettings' :view='view'
					 :navigationPaneSettings='navigationPaneSettings'
					 :toolbarSettings='toolbarSettings'
					 :contextMenuSettings="contextMenuSettings"
					 :enableRangeSelection='enableRangeSelection'>
				</ejs-filemanager>
			</div>
		</div>
		<div class="col-lg-4 property-section">
			<div id="property" title="Properties">
				<table id="property" title="Properties">
					<tbody>
						<tr id="rangeSelectionRow">
						   <td style="width: 55%;">
							<div class="checkboxElement">Enable Range Selection</div>
						   </td>
						   <td style="width: 45%; padding-right: 10px;">
							<ejs-checkbox id="rangeSelection" :checked="true" :change="selectionChange"></ejs-checkbox> 
						   </td>
						</tr>
					    	<tr>
						   <td style="width: 55%;">
							<div class="checkboxElement">Toolbar</div>
						   </td>
						   <td style="width: 45%; padding-right: 10px;">
							<ejs-checkbox id="toolbar" :checked="true" :change="toolbarChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 55%;">
							<div class="checkboxElement">Show File Extension</div>
						   </td>
						   <td style="width: 45%; padding-right: 10px;">
							<ejs-checkbox id="fileExtension" :checked="true" :change="fileExtensionChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 55%;">
							<div class="checkboxElement">Show Thumbnail</div>
						   </td>
						   <td style="width: 45%; padding-right: 10px;">
							<ejs-checkbox id="thumbnail" :checked="true" :change="thumbnailChange"></ejs-checkbox> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 55%;">
							<div class="checkboxElement">Disable Toolbar Item</div>
						   </td>
						   <td style="width: 45%; padding-left: 10px;">
							<ejs-dropdownlist ref='disableDropDownList' id='disable' :dataSource='items' placeholder='Select item' :change="onDisableItemChange"></ejs-dropdownlist> 
						   </td>
						</tr>
						<tr>
						   <td style="width: 55%;">
							<div class="checkboxElement">Enable Toolbar Item</div>
						   </td>
						   <td style="width: 45%; padding-left: 10px;">
							<ejs-dropdownlist ref='enableDropDownList' id='enable' :dataSource='items' placeholder='Select item' :change="onEnableItemChange"></ejs-dropdownlist> 
						   </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div id="action-description">
			<p>The property pane in this sample displays the features available in the File Manager component. The visibility of the toolbar, file extensions, range selection, and image thumbnails can be easily controlled by checking or unchecking the respective checkboxes. Additionally, specific toolbar items can be enabled or disabled by selecting values in the Dropdown List.</p>                
        </div>

		<div id="description">
                <p>In this demo, the above mentioned requirements are achieved by using the following API properties and method of the File Manager component. </p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarsettings'>toolbarSettings</a> defines the group of items in the toolbar that are aligned horizontally.</p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/file-manager/#showfileextension'>showFileExtension</a> property shows or hides the file extension in the File Manager.</p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/file-manager/#showthumbnail'>showThumbnail</a> property shows or hides thumbnail images in the large icons view. . </p>
                <p><a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/file-manager/#enableRangeSelection'>enableRangeSelection</a> property allows multiple items selection with mouse dragging. </p>
				<p><code>enableToolbarItems</code> specifies which items should be enabled in the toolbar.</p>
                <p><code>disableToolbarItems</code> specifies which items should be disabled in the toolbar.</p>
                <p>
                    <b>Note: </b>File Manager's upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install 
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
   .checkboxElement {
	font-size:14px;
   }

   @media (max-width: 550px) {
        #rangeSelectionRow {
            display: none;
        }
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
			items:  ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details'],
			enableRangeSelection: true
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
		fileExtensionChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.showFileExtension = args.checked ? true : false
		},
		thumbnailChange: function(args) {
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.showThumbnail = args.checked ? true : false
		},
		selectionChange: function(args){
			var fileObj = this.$refs.fileObject;
			fileObj.ej2Instances.enableRangeSelection = args.checked ? true : false
		},
	    	onDisableItemChange: function(args) {
			var fileObj = this.$refs.fileObject;
			if(args.itemData != null) {
				fileObj.ej2Instances.disableToolbarItems([args.itemData.value]);
				if(args.value === this.$refs.enableDropDownList.ej2Instances.value) {
					this.$refs.enableDropDownList.ej2Instances.value = null;
				}
			}
		},
		onEnableItemChange: function(args) {
			var fileObj = this.$refs.fileObject;
			if(args.itemData != null) {
				fileObj.ej2Instances.enableToolbarItems([args.itemData.value]);
				if(args.value === this.$refs.disableDropDownList.ej2Instances.value) {
					this.$refs.disableDropDownList.ej2Instances.value = null;
				}
			}
		}
	}
};
</script>

