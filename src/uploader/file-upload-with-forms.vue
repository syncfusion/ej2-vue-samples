<template>
  <div >
  <div class="col-lg-12 control-section form-support">
    <h4 class="form-title">Photo Contest</h4>
        <div class="control_wrapper" id="control_wrapper">
            <!-- Initialize Uploader -->          
            <form id="form1" action="saveFiles.ashx" method="post">
                <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input">
                            <input type="text" id="name" name="Name" data-required-message="* Enter your name" required="" data-msg-containerid="nameError">
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="name">Name</label>
                        </div>   
                        <div id="nameError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                            <div class="e-float-input">
                                <input type="email" id="email" name="Email" data-validation="email" data-required-message="* Please enter valid email" required="" data-msg-containerid="mailError">
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="email">Email</label>
                            </div>
                            <div id="mailError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                            <div class="e-float-input">
                                <input type="text" id="mobileno" name="MobileNo" data-required-message="* Enter your mobile number" required="" data-msg-containerid="noError">
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="mobileno">Mobile No</label>
                            </div>   
                            <div id="noError"></div>                     
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                            <div class="e-float-input upload-area">
                                <input type="text" id="upload" name="upload" readonly="" data-required-message="* Select any file" required="" data-msg-containerid="uploadError"> 
                                <ejs-uploader id='fileupload' name="UploadFiles" :autoUpload= "isAuto" :selected= "onFileSelect"
                                 allowedExtensions= "image/*" :dropArea = "dropElement" :multiple= 'false' ></ejs-uploader>
                                <button id="browse" class="e-control e-btn e-info">Browse...</button>
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="upload">Choose a file</label>
                            </div>   
                            <div id="uploadError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                            <div class="e-float-input">
                                <textarea class="address-field" rows="4" id="Address" name="Address"></textarea>
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="address">Address</label>
                            </div>
                    </div>
                </form> 
                <div class="submitBtn">
                    <button class="submit-btn e-btn" id="submit-btn">Submit</button>
                    <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                </div>
                <ejs-dialog id='uploadAlert' :header='header' showCloseIcon=true :width= 'width' :content= 'dlgContent' :target= 'dlgTarget'
                :isModal= 'Modal' :visible="false" :animationSettings= 'animation' ref="dialogObj" >
                </ejs-dialog>
        </div>
    </div> 

    <div id="action-description">
        <p>This example demonstrates the Uploader component supported with HTML form upload. Fill the mandatory details in a form and click the submit button.</p>
    </div>

    <div id="description">    
        <p>The Uploader component works in synchronous mode using HTML form. When the end-user submits the form, the selected files are submitted to server with
        the <code>name</code> attribute of input element.</p>
        
        <p>More information on the form support can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/uploader/form-support/" target="_blank"> documentation</a> section.</p>
    </div>
</div>
</template>

<style>

      .form-support .control_wrapper {
            max-width: 400px;
            margin: auto;
        }
        .form-support .address-field {
            max-height: 50px;
            resize: none;
        }
        .form-support #control_wrapper {
                max-width: 500px;
                margin: auto;
                border: 0.5px solid #BEBEBE;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.36);
                padding: 1% 4% 2%;
                background: #f9f9f9;
        }

        .highcontrast .form-support #control_wrapper {
            background: #000000;
        }
        .form-support .upload-area, .e-bigger .form-support .upload-area {
            width: 73%;
        }
        .form-support .e-error {
            padding-top:3px;
        }
        .form-support .e-upload {
            width: 100%;
            position: relative;
            margin-top: 15px;
        }
        .form-support .control_wrapper .e-upload .e-upload-drag-hover {
            margin: 0;
        }

        .form-support .submit-btn {
            margin-top: 15px;
        }
        .form-support .submitBtn .desc {
            margin: 2% 20% 0% 18%;
        }
        @media only screen and (max-width: 500px) {
            .form-support .submitBtn .desc {
                margin: 12px;
            }
            .form-support .upload-area, .e-bigger .upload-area {
                width: 60%;
            }
        }
        .form-support .submitBtn {
            position: relative;
            text-align: center;
        }
        .form-support .success .successmsg {
            border: 0.5px solid green;
            padding: 10%;
            color: green;
        }
        .form-support form#form1 {
            position: relative;
            top: 14%;
        }        
        .form-support .e-upload {
            display: none;
        }
        .form-support input.choose-file{
            width: 60%;
        }
        .form-support button#browse {
            float: right;
            margin-right: -115px;
            margin-top: -29px;
            position: relative;
        }      
        .bootstrap4 .form-support button#browse {
			margin-top: -33px;
        }  
        .e-bigger.bootstrap .form-support button#browse {
            top: -12px;
        }
        .e-bigger.material .form-support  button#browse {
            top: -8px;
        }
        .e-bigger.fabric .form-support button#browse, .e-bigger.highcontrast .form-support button#browse {
            top: -11px;
            left: 2%;
        }
        .fabric .form-support #browse, .highcontrast .form-support #browse {
            top: -3px;
        }
        .bootstrap .form-support #browse {
            top: -6px;
        }
        .form-support .form-title {
            text-align: center;
        }
        #form1 .e-float-input:not(.e-input-group), #form1 .e-float-input.e-control-wrapper:not(.e-input-group) {
            display: inherit;
        }
</style>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FormValidator  } from '@syncfusion/ej2-inputs';
import { DialogPlugin  } from '@syncfusion/ej2-vue-popups';

Vue.use(UploaderPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
    data: function() {
        return {
          path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid',
          extensions: '.jpg, .png',
          isAuto: false,
          formObj: '',
          header: 'Success',
          animation: {effect: 'zoom'},
          Modal: true,
          dlgTarget: '.control_wrapper',
          dlgContent: 'Your details have been updated successfully, Thank you.',
          width: '335px',
          options : {
        //Initialize the CustomPlacement.
            customPlacement: function(inputElement, errorElement) {
                inputElement = inputElement.closest('.form-group').querySelector('.error');
                inputElement.parentElement.appendChild(errorElement);
            },
                rules: {
                    'Name': {
                        required: true
                    },
                    'Email': {
                        required: true
                    },
                    'upload': {
                        required: true
                    }
                }
            }
        }
    },
    mounted: function () {
        document.getElementById('browse').onclick = () => {
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click(); 
            return false;
        };
        let localObj = this;
        document.getElementById('submit-btn').onclick = function() {
            localObj.onFormSubmit();
        };
        this.formObj = new FormValidator('#form1', this.options);
    },
    methods:{
        onFormSubmit: function() {
            let formStatus = this.formObj.validate();
            if (formStatus) {
                this.formObj.element.reset();
                this.$refs.dialogObj.show();
            }
        },
        onFileSelect: function(args) {
            let inputElement = document.getElementById('upload');
            inputElement.value = args.filesData[0].name;
        },
    }
});
</script>
