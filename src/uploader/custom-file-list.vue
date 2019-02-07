<template>
  <div>
    <div class="col-lg-8 control-section uploader template-view">
        <div class="control_wrapper">
            <div class="sample_wrapper">
                <div id="dropTarget">
                    <span id="dropElement" class="droparea">Drop files here or <a href="" id="browse"><u>Browse</u></a> </span>
                    <ejs-uploader id='template' name="UploadFiles" :asyncSettings= "path" ref="uploadObj"
                        :dropArea= "dropElement" :selected= "onFileSelect" :progress= "onFileUpload"
                        :success= "onUploadSuccess" :failure= "onUploadFailed" :removing= "onFileRemove">
                    </ejs-uploader>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div id="property" title="Properties">
            <div style="margin-left: 50px; padding-top:25px;">
                <ejs-button id="clearbtn">CLEAR ALL</ejs-button>
            </div>
        </div>
    </div>
      <div id="action-description">
      <p>This example demonstrates how to customize the file list with template. Browse or select the files to view the file list template.</p>
    </div>

    <div id="description">
       <p>The Uploader component allows to customize its file list using
           <a href='https://ej2.syncfusion.com/vue/documentation/api/uploader/#template' target="_blank"> template</a>  property.
         The template used for each file in file list.</p>
       <p>For more information, you can refer to the 
           <a href= 'https://ej2.syncfusion.com/vue/documentation/uploader/template/' target="_blank">
           Template </a> section from the documentation.</p>
    </div>
</div>
</template>

<style>

    #dropTarget {
            min-height: 50px;
            padding-top: 15px;
            position: relative;
    }

    #dropElement {
        padding: 3% 30% 3%;
        display: inherit;
        border: 1px dashed #c3c3cc
    }

    .template-view .droparea {
       font-size: 13px;
    } 

    .e-bigger .template-view .droparea {
       font-size: 14px;
    } 

    .template-view .control_wrapper {
        max-width: 400px;
        margin: auto;
    }

    .template-view .e-file-select-wrap {
        display: none;
    }

    .template-view .e-upload {
        float: none;
        border: none;
    }

    .template-view .ul-element {
        list-style: none;
        width: 100%;
        padding-left: 0;
    }

    .template-view .file-name {
        padding: 8px 6px 8px 0;
        font-size: 13px;
        width: 46%;
        display: inline-block;
        position: relative;
        top: 4px;
    }

    .e-bigger .template-view .file-name {
        font-size: 14px;
    }

    .template-view .file-size {
        padding: 4px;
        font-size: 13px;
        width: 18%;
        display: inline-block;
        position: relative;
    }

    .e-bigger .template-view .file-size {
        font-size: 14px;
    }

    .template-view .file-lists {
        border: 1px solid lightgray;
        padding: 0 6px 0 14px;
        margin-top: 15px;
        position: relative;
        background: rgba(0, 0, 0, 0.04);
    }

    .template-view .file-size, .template-view .file-name {
        font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .template-view span.progress-bar-container {
        display: block;
        float: right;
        height: 20px;
        right: 13%;
        top: 14px;
        position: relative;
        width: 20%;
    }

    .template-view .progress{
        width: 100%;
        height: 15px;
        -webkit-appearance: none;
    }

    .template-view .close-icon-container
    {
        cursor: pointer;
        font-size: 11px;
        height: 24px;
        margin: 0 12px 0 22px;
        padding: 0;
        position: absolute;
        right: 0;
        width: 24px;
        top: 6px;
    }
    .template-view .close-icon-container.remove-btn {
       display: none;
    }

    .template-view .close-icon-container.e-icons::before {
        left: 7px;
        position: inherit;
        top: 7px;
        content: '\e932';
    }

    .template-view .close-icon-container.delete-icon::before {
        content: '\e94a';
    }

    .template-view .close-icon-container:hover {
        background-color: rgba(0, 0, 0, 0.12);
        border-color: transparent;
        border-radius: 50%;
        box-shadow: 0 0 0 transparent;
    }

    .highcontrast .template-view .close-icon-container:hover {
        background-color: #ffd939;
        color: black;
    }

    .highcontrast .template-view .close-icon-container {
        color: #ffffff;
    }

    .template-view .upload-success {
       color: #2bc700;
    }

    .template-view .upload-fails {
        color: #f44336;
    }
    
    .template-view progress::-webkit-progress-bar {
        border: 1px solid lightgrey;
        background-color: #ffffff;
        border-radius: 2px;
    }
    #dropTarget progress {
        border: 1px solid lightgrey;
        background-color: #ffffff;
        border-radius: 2px;
    }
    .highcontrast #dropTarget progress {
        background-color: #000000;
    }
    .highcontrast .template-view progress::-webkit-progress-bar {
        background-color: #000000;
    }
    .material .template-view progress::-webkit-progress-value {
        border-radius: 2px; 
        background-color: #ff4081;
    }
    .bootstrap .template-view progress::-webkit-progress-value {
        border-radius: 2px; 
        background-color: #1f496e;
    }
    .fabric .template-view progress::-webkit-progress-value {
        background-color: #1763ff;
        border-radius: 2px; 
        top: -66px;
    }
    .highcontrast .template-view progress::-webkit-progress-value {
        background-color: #ffd939;
        border-radius: 2px; 
    }
    .material .template-view progress::-moz-progress-bar {
        border-radius: 2px; 
        background-color: #ff4081;
    }
    .bootstrap .template-view progress::-moz-progress-bar {
        border-radius: 2px; 
        background-color: #1f496e;
    }
    .fabric .template-view progress::-moz-progress-bar {
        background-color: #1763ff;
        border-radius: 2px; 
        top: -66px;
    }
    .highcontrast .template-view progress::-moz-progress-bar {
        background-color: #ffd939;
        border-radius: 2px; 
    }
    .material #dropTarget span a {
        color:#ff4081;
    }
    .fabric #dropTarget span a {
        color: #1763ff;
    }
    .bootstrap #dropTarget span a {
        color: #1f496e;
    }
    .highcontrast #dropTarget span a {
        color: #ffd939;
    }

</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { createElement, isNullOrUndefined, detach, EventHandler } from '@syncfusion/ej2-base';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(UploaderPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid',
          filesList: [],
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
            if(!isNullOrUndefined(document.getElementById('dropTarget').querySelector('.upload-list-root'))) {
                this.$refs.uploadObj.$el.value = '';
                detach(document.getElementById('dropTarget').querySelector('.upload-list-root')); 
                this.$refs.uploadObj.filesDetails=[];
                this.$refs.uploadObj.filesList=[];
            }
        };
    },
    methods:{

        onFileSelect: function (args) {
            if (isNullOrUndefined(document.getElementById('dropTarget').querySelector('.upload-list-root'))) {
                this.parentElement = createElement('div', { className: 'upload-list-root' });
                this.parentElement.appendChild(createElement('ul', {className: 'ul-element' }));
                document.getElementById('dropTarget').appendChild(this.parentElement);
            }
            for (let i = 0; i < args.filesData.length; i++) {
                this.formSelectedData(args.filesData[i]); 
            }
            this.filesDetails = this.filesDetails.concat(args.filesData);
            this.$refs.uploadObj.upload(args.filesData, true);
            args.cancel = true;
        },

        formSelectedData: function ( selectedFiles) {
            let liEle = createElement('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });
            liEle.appendChild(createElement('span', {className: 'file-name ', innerHTML: selectedFiles.name }));
            liEle.appendChild(createElement('span', {className: 'file-size ', innerHTML: this.$refs.uploadObj.bytesToSize(selectedFiles.size) }));
            if (selectedFiles.statusCode === '1') {
                this.progressbarContainer = createElement('span', {className: 'progress-bar-container'});
                this.progressbarContainer.appendChild(createElement('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));
                liEle.appendChild(this.progressbarContainer);
            } else { liEle.querySelector('.file-name').classList.add('upload-fails'); }
            let closeIconContainer = createElement('span', {className: 'e-icons close-icon-container'});
            let localObj = this;
            closeIconContainer.addEventListener( 'click', function(e) {
                localObj.removeFiles(e);
            });
            liEle.appendChild(closeIconContainer); document.querySelector('.ul-element').appendChild(liEle);
            this.filesList.push(liEle);
        },
           
        onFileUpload: function(args) {
            let li = document.getElementById('dropTarget').querySelector('[data-file-name="' + args.file.name + '"]');
            let localObj = this;
            let progressValue = Math.round((args.e.loaded / args.e.total) * 100);
            if (!isNaN(progressValue)) { 
                li.getElementsByTagName('progress')[0].value = progressValue;
            }
        },

        onUploadSuccess: function(args) {
            let spinnerElement = document.getElementById('dropTarget');
            let li= document.getElementById('dropTarget').querySelector('[data-file-name="' + args.file.name + '"]');
            if (!isNullOrUndefined(li.querySelector('.progress-bar-container'))) { 
                detach(li.querySelector('.progress-bar-container')); 
            }
            let localObj = this;
            if (args.operation === 'upload') {
                li.querySelector('.file-name').classList.add('upload-success');
                li.querySelector('.close-icon-container').classList.remove('remove-btn');
                li.querySelector('.close-icon-container').classList.add('delete-icon');
                (li.querySelector('.close-icon-container')).onclick = function() {
                    localObj.generateSpinner(li.querySelector('.close-icon-container')); 
                };
                (li.querySelector('.close-icon-container')).onkeydown = function(e) {
                    if (e.keyCode === 13) { 
                        localObj.generateSpinner(e.target.closest('.e-upload')); 
                    }
                };
            }
            if (args.operation === 'remove') {
                this.filesDetails.splice(this.filesList.indexOf(li), 1);
                this.filesList.splice(this.filesList.indexOf(li), 1);
                detach(li);
                hideSpinner(li.querySelector('.close-icon-container'));
                detach(li.querySelector('.e-spinner-pane'));
            }
        },

        generateSpinner: function(targetElement) {
            createSpinner({ target: targetElement, width: '25px' });
            showSpinner(targetElement);
        },

        onUploadFailed: function(args) {
            let li = document.getElementById('dropTarget').querySelector('[data-file-name="' + args.file.name + '"]');
            let localObj = this;
            li.querySelector('.file-name').classList.add('upload-fails');
            li.querySelector('.close-icon-container').classList.remove('remove-btn');
            if (args.operation === 'remove') {
                if (!isNullOrUndefined(li)) {
                    this.filesDetails.splice(this.filesList.indexOf(li), 1);
                    this.filesList.splice(this.filesList.indexOf(li), 1);
                    detach(li);
                }
            }
            if (args.operation === 'upload') {
                detach(li.querySelector('.progress-bar-container')); 
            }
        },

        removeFiles: function(args) {
            if (!isNullOrUndefined(args.currentTarget)) {
                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode === '3') { return;}
                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode === '2' ) {
                    this.$refs.uploadObj.remove(this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)]);
                } else  { 
                    this.onFileRemove(args); 
                }
            }
        },

        onFileRemove: function(args) {
            args.postRawFile = false;
            if (!isNullOrUndefined(args.currentTarget)) {
                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode !== '2') {
                    detach(args.currentTarget.parentElement);
                    this.filesList.splice(this.filesList.indexOf(args.currentTarget.parentElement), 1);
                }
            }
        }
    }
});
</script>