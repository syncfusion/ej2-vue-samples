<template>
  <div>
        <div class="col-lg-8 control-section file-preview">
            <div class="control_wrapper">
                <!-- Initialize Uploader -->
                <div id="dropArea" style="height: auto; overflow: auto">
                    <span id="dropPreview"> Drop image (JPG, PNG) files here or <a href="" id="browse"><u>Browse</u></a></span>
                     <ejs-uploader id='imagePreview' name="UploadFiles" :asyncSettings= "path" ref="uploadObj" :allowedExtensions= 'extensions'
                         :dropArea= "dropElement" :selected= "onFileSelect" :progress= "onFileUpload"
                         :success= "onUploadSuccess" :failure= "onUploadFailed" :removing= "onFileRemove">
                    </ejs-uploader>
                </div>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <div id="property" title="Properties">
                <div style="margin-left: 50px; padding-top:25px;">
                    <ejs-button id="clearbtn" style="width:130px">Clear All</ejs-button>
                </div>
                <div style="margin-left: 50px; padding-top:25px;">
                    <ejs-button id="uploadbtn" style="width:130px">Upload All</ejs-button>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This example demonstrates how to add an image preview of the uploaded files.
                Browse or drag-and-drop image files (PNG, JPG) to display preview for the selected files.</p>
        </div>

        <div id="description">
            <p>The Uploader component allows to create preview images after uploaded it. The preview images created by reading the file using success event.  Also, the user can create preview images before uploading to server using select event.</p>
                
            <p>For more information, you can refer to the
                <a href='https://ej2.syncfusion.com/vue/documentation/uploader/how-to/preview-images-before-uploading/' target="_blank">
                 Image Preview </a> section from the documentation.</p>
        </div>
</div>
</template>

<style>

    .file-preview .control_wrapper {
        max-width: 505px;
        margin: auto;
    }
    .file-preview  #uploadicon {    
        cursor: pointer;
        top: 5px;
        left: 20px;
        position: relative;
    }
    .file-preview  .e-file-select-wrap {
        display: none;
    }
    .file-preview  .e-upload {
        border: none;
        margin-top: 10px;
        width: 100%;
    }
    .file-preview  #dropPreview {
        font-size: 14px;
    }
    .e-bigger .file-preview  #drop {
        font-size: 15px;
    }
    .file-preview  #dropArea {
        border: 1px dashed #c3c3cc;
        position: relative;
        text-align: center;
        padding: 20px 0 10px;
    }
    .file-preview  #dropArea .e-upload .e-upload-files {
        text-align: initial;
        border-top: none;
    }
    #dropArea .e-upload-files .e-file-delete-btn.e-icons,
    #dropArea .e-upload-files .e-file-remove-btn.e-icons {
        top: 120px;
        background-color: white;
        border-radius: 50%;
        font-size: 12px;
        left: 80px;
    }
    #dropArea .e-upload-files li .e-file-remove-btn.e-icons.e-upload-icon {
        font-size: 14px;
        left: 20px;
    }
    #dropArea .e-upload-files li:hover .e-icons {
        visibility: visible;
    }
    #dropArea .e-upload-files li .e-icons {
        visibility: hidden;
    }
    @font-face {
        font-family: 'Uploader_Icon';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmoZcPvgAAAcgAAABAaGVhZBLQTSUAAADQAAAANmhoZWEINQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAgAAAAAAHAAAAABm1heHABDgAdAAABCAAAACBuYW1lQySinQAAAggAAAIxcG9zdLfl0usAAAQ8AAAAMgABAAAEAAAAAFwEAAAAAAAD2AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAA2vKJUF8PPPUACwQAAAAAANftBBgAAAAA1+0EGAAAAAAD2AP4AAAACAACAAAAAAAAAAEAAAACABEAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAIAAAAAIAAAAAA9gD+AAHABAAADchESMVITUjEzM3ETMRFzMBKAOwPvzMPp1mtUC1Zv7FCAF6vb0BO7X+EAHwtQE7AAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBVcGxvYWRlclJlZ3VsYXJVcGxvYWRlclVwbG9hZGVyVmVyc2lvbiAxLjBVcGxvYWRlckZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAVQBwAGwAbwBhAGQAZQByAFIAZQBnAHUAbABhAHIAVQBwAGwAbwBhAGQAZQByAFUAcABsAG8AYQBkAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAVQBwAGwAbwBhAGQAZQByAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAgEDAAhVcGxvYWRlcgAAAAA=) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    #dropArea .e-upload .e-upload-files .e-icons.e-upload-icon{
        font-family: 'Uploader_Icon';
        speak: none;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #dropArea .e-upload .e-upload-files .e-icons.e-upload-icon::before{
        content: '\e700';
    }
    #dropArea .e-upload .e-upload-files .e-icons:not(.e-uploaded):hover{
        background-color: #e6e6e6;
        border-color: #adadad;
        color: #333;
    }
    .highcontrast #dropArea .e-upload-files .e-file-remove-btn.e-icons,
    .highcontrast #dropArea .e-upload-files .e-file-delete-btn.e-icons {
        background-color: #ffd939;
    }
    .highcontrast #dropArea .e-upload .e-upload-files .e-file-delete-btn.e-icons::before,
    .highcontrast #dropArea .e-upload .e-upload-files .e-file-remove-btn.e-icons::before{
        color: black;
    }
    #dropArea .e-upload .e-upload-files .e-upload-file-list {
        border: 0;
        display: inline-block;
        width: 165px;
    }
    .file-preview .upload-image {
        width: 150px;
        height: 150px;
        display: inline-flex;
        background-size: contain;
        margin: 7px;
        text-align: center;
        line-height: 10;
        border-radius: 5px;
    }
    .file-preview  .upload-image:after {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        width: inherit;
        height: inherit;
        background: lightgray url('http://via.placeholder.com/300?text=Loading...') no-repeat center;
        color: transparent;
        border-radius: 5px;
    }
    .highcontrast .file-preview  div.file-name {
        color: white;
    }
    .file-preview  div.file-name {
        color: rgba(0, 0, 0, 0.87);
        font-size: 14px;
        padding: 3px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 90%;
        white-space: nowrap;
    }
    .highcontrast .file-preview  div.file-size {
        color: white;
    }
    .file-preview  div.file-size {
        font-size: 13px;
        padding: 3px 10px;
        overflow: hidden;
    }
    .file-preview  .progressbar {
        background: #ff4081;
        border: none;
        border-radius: 10px;
        height: 4px;
        margin-left: 7px;
        width: 90%;
        top: -60px;
        position: relative;
    }
    #dropArea progress {
        border: none;
        background: #fff;
   }
   .highcontrast #dropArea progress {
        border: none;
        background: black;
   }
    .file-preview  progress::-webkit-progress-bar {
        border: none;
        background-color: #ffffff;
    }
    .highcontrast .file-preview  progress::-webkit-progress-bar {
        border: none;
        background-color: #000000;
    }
    .material .file-preview  progress::-webkit-progress-value {
        border-radius: 2px; 
        background-color: #ff4081;
    }
    .bootstrap .file-preview  progress::-webkit-progress-value {
        border-radius: 2px; 
        background-color: #1f496e;
    }
    .fabric .file-preview  progress::-webkit-progress-value {
        background-color: #1763ff;
        border-radius: 2px; 
        top: -66px;
    }
    .highcontrast .file-preview  progress::-webkit-progress-value {
        background-color: #ffd939;
        border-radius: 2px; 
    }
    .material .file-preview  progress::-moz-progress-bar {
        border-radius: 2px; 
        background-color: #ff4081;
    }
    .bootstrap .file-preview  progress::-moz-progress-bar {
        border-radius: 2px; 
        background-color: #1f496e;
    }
    .fabric .file-preview  progress::-moz-progress-bar {
        background-color: #1763ff;
        border-radius: 2px; 
        top: -66px;
    }
    .highcontrast .file-preview  progress::-moz-progress-bar {
        background-color: #ffd939;
        border-radius: 2px; 
    }
    .material #dropArea span a {
        color:#ff4081;
    }
    .fabric #dropArea span a {
        color: #1763ff;
    }
    .bootstrap #dropArea span a {
        color: #1f496e;
    }
    .highcontrast #dropArea span a {
        color: #ffd939;
    }
	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		#dropArea .e-upload .e-upload-files .e-file-remove-btn.e-icons, #dropArea .e-bigger .e-upload .e-upload-files .e-file-remove-btn.e-icons {
		   padding: 18px 25px 18px 12px;
		}
	}
</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { createElement, isNullOrUndefined, detach, EventHandler } from '@syncfusion/ej2-base';

Vue.use(UploaderPlugin);

export default Vue.extend({
    data: function() {
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid',
          extensions: '.jpg, .png',
          fileList: [],
          filesDetails: [],
          parentElement: '',
          progressbarContainer: ''
        }
    },
    mounted: function () {
    document.getElementById('browse').onclick = function() {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementById('clearbtn').onclick = () => {
        if (!isNullOrUndefined(this.$el.querySelector('ul'))) {
            detach(this.$el.querySelector('ul'));
            this.$refs.uploadObj.filesData = [];
            this.$refs.uploadObj.fileList = [];
        }
    };
    document.getElementById('uploadbtn').onclick = () => {
        if (this.$el.querySelector('ul') && this.filesDetails.length > 0) {
            this.$refs.uploadObj.upload(this.filesDetails, true);
        }
    }
    },
    methods:{
        onFileSelect: function (args) {
            if (!document.querySelector(this.dropElement).querySelector('li')) { 
                this.filesDetails = [];
            }
            if (isNullOrUndefined(document.getElementById('dropArea').querySelector('.e-upload-files'))) {
                this.parentElement = createElement('ul', { className: 'e-upload-files' });
                document.getElementsByClassName('e-upload')[0].appendChild(this.parentElement);
            }
            for (let i = 0; i < args.filesData.length; i++) {
                this.formSelectedData(args.filesData[i], this); 
            }
            this.filesDetails = this.filesDetails.concat(args.filesData);
            args.cancel = true;
        },

        formSelectedData: function (file) {
            let liEle = createElement('li',  {className: 'e-upload-file-list', attrs: {'data-file-name': file.name}});
            let imageTag = createElement('IMG',  {className: 'upload-image', attrs: {'alt': 'Image'}});
            let wrapper = createElement('span', {className: 'wrapper'});
            wrapper.appendChild(imageTag); liEle.appendChild(wrapper);
            liEle.appendChild(createElement('div', {className: 'name file-name', innerHTML: file.name, attrs: {'title': file.name}}));
            liEle.appendChild(createElement('div', {className: 'file-size', innerHTML: this.$refs.uploadObj.bytesToSize(file.size) }));
            let clearbtn, uploadbtn;
            clearbtn = createElement('span', {id: 'removeIcon', className: 'e-icons e-file-remove-btn', attrs: {'title': 'Remove'}});
            let localObj = this;
            clearbtn.addEventListener('click', function(e) {
                localObj.removeFiles(e);
            })
            liEle.setAttribute('title', 'Ready to Upload');
            uploadbtn = createElement('span', {className: 'e-upload-icon e-icons e-file-remove-btn', attrs: {'title': 'Upload'}});
            uploadbtn.setAttribute('id', 'iconUpload');
            uploadbtn.addEventListener('click', function(e) {
               localObj.uploadFile(e);
            });
            this.progressbarContainer = createElement('progress', {className: 'progressbar', id: 'progressBar', attrs: {value: '0', max: '100'}});
            liEle.appendChild(clearbtn);
            liEle.appendChild(uploadbtn);
            liEle.appendChild(this.progressbarContainer);
            this.readURL(liEle, file);
            document.querySelector('.e-upload-files').appendChild(liEle);
            this.fileList.push(liEle);
        },

        uploadFile: function(args) {
            this.$refs.uploadObj.upload([this.filesDetails[this.fileList.indexOf(args.currentTarget.parentElement)]], true);
        },

        removeFiles(args) {
            let fileInfo =  this.filesDetails[this.fileList.indexOf(args.currentTarget.parentElement)];
            let li = document.getElementById('dropArea').querySelector('[data-file-name="' + fileInfo.name + '"]');
            let statusCode = fileInfo.statusCode;
            if (statusCode === '2') {
                this.$refs.uploadObj.remove(fileInfo);
                document.getElementById('imagePreview').value = '';
            }
            if(statusCode === '1' || statusCode === '0') {
                this.filesDetails.splice(this.fileList.indexOf(li), 1);
                this.fileList.splice(this.fileList.indexOf(li), 1);
                detach(args.currentTarget.parentElement);
            }
        },

        onFileUpload(args) {
            let li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
            let iconEle = li.querySelector('#iconUpload');
            iconEle.style.cursor = 'not-allowed';
            iconEle.classList.add('e-uploaded');
            let localObj = this;
            li.querySelector('#iconUpload').removeEventListener('click', function(e) {
                localObj.uploadFile(e)
            });        
            let progressValue = Math.round((args.e.loaded / args.e.total) * 100);
            if (!isNaN(progressValue) && li.querySelector('.progressbar')) {
                li.getElementsByTagName('progress')[0].value = progressValue;
            }
        },

        onUploadSuccess(args) {
            let spinnerElement = document.getElementById('dropArea');
            let localObj = this;
            let li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
            if (li && !isNullOrUndefined(li.querySelector('.progressbar'))) {
                (li.querySelector('.progressbar')).style.visibility = 'hidden';
            }
            if (args.operation === 'upload') {
                li.querySelector('#iconUpload').removeEventListener('click', function(e) {
                    localObj.uploadFile(e);
                });
                (li.querySelector('.file-name')).style.color = 'green';
                (li.querySelector('.e-icons')).onclick =  function() { 
                    let spinnerTarget = li.querySelector('.e-file-remove-btn');
                    if (isNullOrUndefined(spinnerTarget)) {
                        spinnerTarget = li.querySelector('.e-file-delete-btn');
                    }
                    localObj.generateSpinner(spinnerTarget);
                };
                li.setAttribute('title', args.e.currentTarget.statusText);
            } else {
                let spinnerTarget = li.querySelector('.e-file-remove-btn');
                this.filesDetails.splice(this.fileList.indexOf(li), 1);
                this.fileList.splice(this.fileList.indexOf(li), 1);
                if (isNullOrUndefined(spinnerTarget)) {
                    spinnerTarget = li.querySelector('.e-file-delete-btn');
                }
            if (!isNullOrUndefined(spinnerTarget)) {
                    hideSpinner(spinnerTarget);
                    detach(li); 
                }
            }
        li.querySelector('#removeIcon').removeAttribute('.e-file-remove-btn');
        li.querySelector('#removeIcon').setAttribute('class', 'e-icons e-file-delete-btn');
        },
        generateSpinner: function(targetElement) {
            createSpinner({ target: targetElement, width: '25px' });
            showSpinner(targetElement);
        },

        onUploadFailed(args) {
            let li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
            (li.querySelector('.file-name')).style.color = 'red';
            li.setAttribute('title', args.e.currentTarget.statusText);
            let localObj = this;
            if (args.operation === 'upload') {
                (li.querySelector('.progressbar')).style.visibility = 'hidden';
            } else {
                this.filesDetails.splice(this.fileList.indexOf(li), 1);
                this.fileList.splice(this.fileList.indexOf(li), 1);
                detach(li);
            }
        },

        readURL: function(li, args) {
            let preview = li.querySelector('.upload-image');
            let file = args.rawFile; 
            let reader = new FileReader();
            reader.addEventListener('load', function() {
                preview.src = reader.result;
            }, false);
            if (file) { 
                reader.readAsDataURL(file); 
            }
        },

        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
});
</script>