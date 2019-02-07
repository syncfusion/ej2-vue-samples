<template>
  <div>
    <div class="col-lg-12 control-section uploader-preload validation">
        <div class="control_wrapper">
            <ejs-uploader id='validation' name="UploadFiles" :autoUpload= "autoUpload" :asyncSettings= "path" ref="uploadObj" :allowedExtensions = "extensions" :dropArea= "dropElement"  minFileSize=10000 maxFileSize=4000000
            :selected= "onFileSelect" :removing= "onFileRemove"> 
            </ejs-uploader>
        </div>
    </div>
    <div id="action-description">
      <p>This example demonstrates how to validate the files before uploading it to server. Only document files (DOC, DOCX, XLS, XLSX), and the files should contain minimum 10 KB and maximum 28 MB sizes to upload it into server.This sample limits maximum files count as 5 to upload.</p>
    </div>

    <div id="description">
        <p>The Uploader component allows to validate the file’s type, and limit the file size using
            <a href='https://ej2.syncfusion.com/vue/documentation/api/uploader/#allowedextensions' target="_blank"> allowedExtensions </a>,
            <a href='https://ej2.syncfusion.com/vue/documentation/api/uploader/#minfilesize' target="_blank"> minFileSize </a> , and
            <a href= 'https://ej2.syncfusion.com/vue/documentation/api/uploader/#maxfilesize' target="_blank"> maxFileSize </a>
            properties. You can also achieve limit the files count before uploading it using 
            <a href='https://ej2.syncfusion.com/vue/documentation/api/uploader/#selected' target="_blank">select</a>
            event.
        </p>
        <p>For more information, you can refer to the <a href='https://ej2.syncfusion.com/vue/documentation/uploader/validation/' target="_blank">
         Validation </a> section from the documentation.</p>
    </div>
</div>
</template>

<style>
.validation .control_wrapper {
    max-width: 450px;
    min-width: 245px;
    margin: auto;
}
#validation .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}

.control-section .uploader-preload.col-lg-8 {
    padding: 20px;
}

</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';

Vue.use(UploaderPlugin);

export default Vue.extend({
    data: function(){
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid',
          extensions: '.doc, .docx, .xls, .xlsx',
          autoUpload: false
        }
    },
    methods: {
        onFileSelect: function(args) {
            args.filesData.splice(5);
            let filesData = this.$refs.uploadObj.getFilesData();
            let allFiles = filesData.concat(args.filesData);
            if (allFiles.length > 5) {
                for (let i = 0; i < allFiles.length; i++) {
                    if (allFiles.length > 5) {
                        allFiles.shift();
                    }
                }
                args.filesData = allFiles;
                args.modifiedFilesData = args.filesData;
            }
            args.isModified = true;
        },

        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
});
</script>