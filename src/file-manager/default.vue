<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="sample-container">
           <ejs-filemanager id="file" ref="fileObject" :ajaxSettings='ajaxSettings' :view='view'
                :toolbarSettings='toolbarSettings' :navigationPaneSettings='navigationPaneSettings'>
            </ejs-filemanager>
        </div>
    </div>
   <div class="col-lg-4 property-section" id="all-option-table">
        <table id="property" title="Properties">
            <tbody>         
                <tr>
                    <td style="width: 50%">
                        <div>Toolbar</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <ejs-checkbox id="toolbar" :checked="true" :change="onChange"></ejs-checkbox>            
                        </div>
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
    </div>

</div>
</template>

<style>
    .property-panel-table div {
        padding-left: 0;
        padding-top: 0;
    }

      #all-option-table .property-panel-section .property-panel-content table#property tr {
        height: 50px;
    }


</style>

<script>
import Vue from "vue";
import { FileManagerPlugin ,NavigationPane, Toolbar, DetailsView, ContextMenu, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(CheckBoxPlugin);
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
            view:"LargeIcons",        
            toolbarSettings:
            {
                visible: true
            },           
            navigationPaneSettings:
            {
                visible: false
            },          
        };
    },   
    provide: {
            filemanager: [NavigationPane, Toolbar, DetailsView, ContextMenu]
    },
    methods: {
        onChange: function(args) {    
        if (args.event.currentTarget.id === "toolbar") {
                if (args.checked) {
                    this.$refs.fileObject.toolbarSettings = { visible: true};
                } else {
                    this.$refs.fileObject.toolbarSettings = { visible: false};
                }
            }
    }   
  }
});
</script>

