<template>
	<div class="file-api">
		<div class="col-lg-8 control-section">
			<div class="sample-container">
			   <ejs-filemanager id="file" ref="fileObject" :ajaxSettings='ajaxSettings' :view='view'
					 :navigationPaneSettings='navigationPaneSettings'>
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
						   		<ejs-checkbox id="toolbar" :checked="true" :change="onChange"></ejs-checkbox> 
						   </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div id="action-description">
			<p>This sample demonstrates the properties of FileManager component from the property pane. Select any properties from the property pane to customize the FileManager.</p>
		</div>

		<div id="description">
			<p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports the basic file operations such as create, rename, delete.</p>
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
import Vue from "vue";
import { FileManagerPlugin ,NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(CheckBoxPlugin);
Vue.use(FileManagerPlugin);
/**
 * File Manager API sample
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
            view:"LargeIcons",   			
            navigationPaneSettings:
            {
                visible: false
            },          
        };
    },   
    provide: {
            filemanager: [NavigationPane, Toolbar, DetailsView]
    },
    methods: {
        onChange: function(args) {
            var fileObj = document.getElementById("file").ej2_instances[0];				
	    fileObj.toolbarSettings.visible = args.checked;
        }
    }
});
</script>

