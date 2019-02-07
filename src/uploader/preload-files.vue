<template>
  <div>
    <div class="col-lg-8 control-section uploader-preload preloadfiles">
        <div class="control_wrapper">
            <ejs-uploader id='preloadFiles' ref="uploadObj" name="UploadFiles" :asyncSettings= "path"
            :dropArea = "dropElement" :removing= "onFileRemove" >
                 <e-files>
                    <e-uploadedfiles name='Nature' size=11000 type='.png'></e-uploadedfiles>
                    <e-uploadedfiles name='TypeScript Succinctly' size=20000 type='.pdf'></e-uploadedfiles>
                    <e-uploadedfiles name='ASP.NET Webhooks' size=35000 type='.docx'></e-uploadedfiles>
                </e-files>
            </ejs-uploader>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div id="property" title="Properties">
            <div style="margin-left: 50px; padding-top:25px;">
                <ejs-button id="clearbtn" style="width:130px">Clear All</ejs-button>
            </div>
        </div>
    </div>
    <div id="action-description">
      <p>This example demonstrates how to pre-load the files of the Uploader. The already uploaded files are configured in file list to view and remove them.</p>
    </div>

    <div id="description">
        <p>The Uploader component allows to load initial list of files which are already uploaded in server. The preload files are useful to view and remove from server.
            Also, you can achieve state persistence on page refresh.</p>
        <p>For more information, you can refer to the 
           <a href='https://ej2.syncfusion.com/vue/documentation/uploader/async/#preload-files' target="_blank"> Preload Files
           </a> section from the documentation</p>
    </div>
</div>
</template>

<style>
.preloadfiles .control_wrapper {
    max-width: 450px;
    min-width: 245px;
    margin: auto;
}
#preloadFiles .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}

.control-section.preloadfiles .uploader-preload.col-lg-8 {
    padding: 20px;
}

</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(UploaderPlugin);

export default Vue.extend({
    data: function(){
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid'
        }
    },
     mounted: function () {
        document.getElementById('clearbtn').onclick = () => {
            this.$refs.uploadObj.clearAll();
        };
    },
    methods:{
        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
});
</script>