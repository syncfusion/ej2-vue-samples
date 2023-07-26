<template>
<div>
    <div class="control-section folder-upload">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" ref="fileObject" :ajaxSettings='ajaxSettings' :success='onSuccess' >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the folder (directory) upload feature of FileManager component. Select <b>Folder</b> from toolbar item to select and upload a folder.</p>
    </div>
    <div id="description">
        <p>In this demo, a folder upload enabled by setting <code>directoryUpload</code> as true. It allows to select or drop a folder to upload all its contents including hierarchy folders and files.</p>
        <p>The folder (directory) upload is supported for the following file system providers,
            <li> Physical provider</li>
            <li> NodeJS provider</li>
            <li> Azure provider</li>
            <li> Amazon S3 provider</li>
        </p>
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
.folder-upload .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";
Vue.use(FileManagerPlugin);
/**
 * File Manager directory upload feature sample
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
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    },
    methods: {
        onSuccess: function (args) {
            if (!document.getElementById("filemanager_tb_upload").classList.contains("e-dropdown-btn")) {
            var customBtn = document.getElementById("filemanager_tb_upload");
            customBtn.onclick = (e) => {
                e.stopPropagation();
            };
            //DropDownButton items definition
            var items = [{ text: "Folder" }, { text: "Files" }];
            var drpDownBtn = new DropDownButton({
                items: items,
                select: (args) => {
                    var fileObj = document.getElementById("filemanager").ej2_instances[0];
                    if (args.item.text === "Folder") {
                        fileObj.uploadSettings.directoryUpload = true;
                    } else {
                        fileObj.uploadSettings.directoryUpload = false;
                    }
                    setTimeout(function () {
                        var uploadBtn = document.querySelector(".e-file-select-wrap button");
                        uploadBtn.click();
                    }, 100);
                },
            },"#filemanager_tb_upload"
            );
            }
        },
  },
});
</script>
