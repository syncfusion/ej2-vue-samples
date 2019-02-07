<template>
<div>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='chunkupload' name="UploadFiles" :autoUpload= "isAuto" :asyncSettings= "path" ref="uploadObj" :dropArea= "dropElement" maxFileSize=104857600
            :removing= "onFileRemove" :pausing= 'onPausing' :resuming= 'onResuming' :chunkFailure= "onBeforeFailure">
            </ejs-uploader>
        </div>
    </div>
    <div class="col-lg-4 property-section">
    <table id="property" title="Properties" style="width: 100%;">
        <tbody><tr>
            <td class="left-side">Chunk size :</td>
                <td>
                    <div id="default">
                        <ejs-dropdownlist id="chunk-sizes" :fields = "fields" :index = "currentIndex" :dataSource = "items" :popupHeight= "popupHeight" :change= "change">
                        </ejs-dropdownlist>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
    <div id="action-description">
      <p>This example demonstrates the chunk upload functionalities of the Uploader component.
          Browse or drag-and-drop a large file to upload with pause, resume, and retry options. </p>
          <p>Also, configured property panel to change the chunk size dynamically.</p>
    </div>

    <div id="description">
        <p>When the file size is large or transfer the file with slow network connection, the chunk upload feature slices the files and upload the sliced chunks to server in sequential order
           using the <a href="https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel/#chunksize"
            target="_blank">&nbsp;chunkSize</a> API. It will slice the files and upload it in sequential order.</p>
          
          <p>The sample is configured with the following options:</p>

          <ul>
            <li>While uploading, you can pause the upload and resume it later.</li>
            <li> If the upload fails, retry option will be enabled.</li>
            <li> The sample is configured with maximum file size as `100 MB` to upload.</li>
          </ul>
          <h4>Automatic pause and resume</h4>
          <p>
            If the application lost its connection (<code>offline</code>), the upload component pauses the process automatically. After the connection is up (<code>online</code>), the upload component will resume its process.
          </p>
          <p>More information on the Uploader instantiation can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/uploader/chunk-upload/">documentation section</a>.</p>
    </div>
</div>
</template>

<style>
.chunk .control_wrapper {
    max-width: 450px;
    min-width: 245px;
    margin: auto;
}
#chunkupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}

.control-section .uploader.col-lg-8 {
    padding: 20px;
}

</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(UploaderPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
    data: function(){
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
            chunkSize: 500000
          },
		  isAuto: false,
          dropElement: '.control-fluid',
          currentIndex: 0,
          isInteraction: false,
        items: [
            { sizeVal: '500000' , sizeTxt: '500 KB' },
            { sizeVal: '1000000' , sizeTxt: '1 MB' },
            { sizeVal: '2000000' , sizeTxt: '2 MB' },
        ],
        fields: { text: 'sizeTxt', value: 'sizeVal' },
          popupHeight: 200,
          change: (args) => {
            this.$refs.uploadObj.asyncSettings.chunkSize = parseInt(args.itemData.value, 10);
          }
        }
    },
    methods:{
        // to update flag variable value for automatic pause and resume
        onPausing: function(args) {
            if (args.event !== null && !navigator.onLine) {
                this.isInteraction = true;
            } else {
                this.isInteraction = false;
            }
        },
        // to update flag variable value for automatic pause and resume
        onResuming: function(args) {
            if (args.event !== null && !navigator.onLine) {
                this.isInteraction = true;
            } else {
                this.isInteraction = false;
            }
        },
        onFileRemove: function (args) {
            args.postRawFile = false;
        },
        // to prevent triggering chunk-upload failure event and to pause uploading on network failure
        onBeforeFailure: function (args) {
            let proxy = this;
            args.cancel = !this.isInteraction;
            /* tslint:disable */
            // interval to check network availability on every 500 milliseconds
            let clearTimeInterval = setInterval(() => {
                if (navigator.onLine && !isNullOrUndefined(proxy.$refs.uploadObj.getFilesData()[0]) && proxy.$refs.uploadObj.getFilesData()[0].statusCode == 4) {
                    proxy.$refs.uploadObj.resume(proxy.$refs.uploadObj.getFilesData());
                    clearSetInterval();
                } else {
                    if (!proxy.isInteraction && !isNullOrUndefined(proxy.$refs.uploadObj.getFilesData()[0]) && proxy.$refs.uploadObj.getFilesData()[0].statusCode == 3) {
                        proxy.$refs.uploadObj.pause(proxy.$refs.uploadObj.getFilesData());
                    }
                }
            }, 500);
            // clear Interval after when network is available.
            function clearSetInterval() {
                clearInterval(clearTimeInterval);
            }
        }
    }
});
</script>