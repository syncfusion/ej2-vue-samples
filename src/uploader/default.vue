<template>
<div>
    <div class="col-lg-8 control-section default-sample">
        <div class="control_wrapper">
            <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path"
            :dropArea = "dropElement" :removing= "onFileRemove" ></ejs-uploader>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div id="property" title="Properties">
            <div style="margin-left: 50px; padding-top:25px;">
                <ejs-checkbox id="checkAutoUpload" label="Auto Upload" :change= "change" :checked="true" name="FileUploader"></ejs-checkbox>
            </div>
            <div style="margin-left: 50px; padding-top:25px;">
                <ejs-checkbox id="sequentialUpload" label="Sequential Upload" :change= "changed" :checked="false" name="FileUploader"></ejs-checkbox>
            </div>
        </div>
    </div>
    <div id="action-description">
      <p>This example demonstrates the default functionalities of the file upload component with auto upload and sequential upload options.
          Browse or drag-and-drop the files which you want to upload to the server and upload it.</p>
    </div>

    <div id="description">
        <p>The Uploader component is useful to upload images, documents, and other files. By default, the component allows to upload multiple files to browse and upload it to server.
            The selected files append to the file list that contains file details such as name, type, and size.</p>
        <p>You can manage the files in server after received the uploaded files. When the files are successfully uploaded to server, the remove button will be change to bin button.
            The uploaded files can be removed by click on the bin button.</p>
        <p>The progress bar displays for each file upload to denote its upload progress. 
            Once the file upload gets success, the progress bar disappear and corresponding upload status message will be displayed in same place.</p>
        <p>More information on the Uploader instantiation can be found in this
             <a href='https://ej2.syncfusion.com/vue/documentation/uploader/getting-started/' target="_blank">
             documentation </a> section.</p>
    </div>
</div>
</template>

<style>
.default-sample .control_wrapper {
    max-width: 450px;
    min-width: 245px;
    margin: auto;
}
#defaultfileupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}

</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(UploaderPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
    data: function(){
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid',
          change: (args) => {
            this.$refs.uploadObj.autoUpload = args.checked;
            this.$refs.uploadObj.clearAll();
        },
        changed: (args) => {
            this.$refs.uploadObj.sequentialUpload = args.checked;
            this.$refs.uploadObj.clearAll();
        }
        }
    },
    methods:{
        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
});
</script>