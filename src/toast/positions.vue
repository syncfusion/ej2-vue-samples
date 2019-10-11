<template>
   <div>
     <div class="col-lg-12 control-section toast-pos-section">
       <div class="e-sample-resize-container" id="toast_pos_target">
        <ejs-toast ref='toastRef' id='toast_pos' :position='position' :target='target' title='Matt sent you a friend request' content='You have a friend request yet to accept.' icon='e-laura' :created='created' :close='onclose' :beforeOpen='onbeforeOpen'></ejs-toast>
          <div id="toast_pos_property">
            <table style="width: 100%">
                <tbody><tr>
                    <td>
                        <div style="padding:25px 0 0 0;">
                            <ejs-radiobutton id='dropdownRadio' ref="dropdownRef" label="Position" name="toastPos" value="Position" checked="true" :change='checkboxChange2' ></ejs-radiobutton>
                        </div>
                    </td>
                    <td>
                        <div style="padding:25px 0 0 0;">
                         <ejs-radiobutton id='customRedio' ref="customRef" label="Custom" name="toastPos" value="Custom" :change='checkboxChange3' ></ejs-radiobutton>
                         </div>
                    </td>
                </tr>
                <tr>
                    <td id="dropdownChoose" colspan="2">
                        <div id="dropdown" style="padding-top:25px;">
                         <ejs-dropdownlist ref='positionDropRef' id='position' :dataSource='dropData' :fields='dropFields'
                        placeholder='Select a position' :change='valueChange' :value='dropValue' popupHeight='200px' index=5></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" id="customChoose" style="display: none">
                        <form id="formId" class="form-horizontal">
                            <div class="e-row">
                                <div class="e-float-input">
                                    <input class="e-input" id="xPos" name="Digits" value="50" digits="true" data-digits-message="Please enter digits only." required="">
                                    <span class="e-float-line"></span>
                                    <label class="e-float-text" for="Digits">X Position</label>
                                </div>
                            </div>
                            <div class="e-row">
                                <div class="e-float-input">
                                    <input class="e-input" id="yPos" name="Digits" value="50" digits="true" data-digits-message="Please enter digits only." required="">
                                    <span class="e-float-line"></span>
                                    <label class="e-float-text" for="Digits">Y Position</label>
                                </div>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="padding:25px 0 0 0;">
                            <ejs-radiobutton id='radio1' ref="targetRef" label="Target" name="toast" value="Target" :change='checkboxChange' ></ejs-radiobutton>
                        </div>
                    </td>
                    <td>
                        <div style="padding:25px 0 0 0;">
                             <ejs-radiobutton id='radio2' ref="globalRef" label="Global" name="toast" value="Global" checked="true" :change='checkboxChange1' ></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
            </tbody></table>
            <div id="toast_btn" style="padding-top: 25px">
                <ejs-button ref='showButtonRef' class="e-btn e-control" id="show_Toast" style="margin-right: 15px" v-on:click.native="showClicked">Show Toasts</ejs-button>
                <ejs-button ref='hideButtonRef' v-if="ShowBtn" class="e-btn e-control" id="hideToast" v-on:click.native="hideClicked">Hide All</ejs-button>
            </div>
        </div>
        </div>
        <div id="action-description">
                    <p>This sample demonstrates the different positioning of the <code>Toast</code> based on the target given.</p>
                </div>
                <div id="description">
                    <p>Based on the use case toast can take the body element or any specific element as target. In this sample, with help of custom inputs toast can be positioned based on the target.</p>
                    <ul>
                        <li>Toast can be positioned in the 8 pre-defined places.</li>
                        <li>Custom option will enable to give X and Y values to align the toast based on the given inputs.</li>
                    </ul>
                    <p>More information about Toast can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/toast/getting-started/">
        documentation section</a>.</p>
                </div>
    </div>   
    </div>
    </template>
<style>
    /* custom code start */
     .toast-pos-section #toast_pos_property {
        height: 500px;
        border: none;
        margin: auto;
    }
    /* custom code end */

    #toast_pos_property td {
        width: 50%;
    }

    .e-toast-icon.e-laura.e-icons {
        border-radius: 50%;
        background-image: url('./resource/laura.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: 50px !important;
		width: 68px !important;
		background-size: 50px 50px;
		margin-right: 15px;
    }


    @media (min-width: 740px) {
        #toast_pos_property {
            width: 450px;
        }
    }

</style>
<script>
import Vue from "vue";
import { ToastPlugin, Toast, ToastCloseArgs } from "@syncfusion/ej2-vue-notifications";
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { RadioButton, ChangeEventArgs as CheckBoxChange } from '@syncfusion/ej2-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(ToastPlugin);
let ShowBtn = undefined;
export default Vue.extend({
     data: function(){
        return {
            position:  { X: 'Right', Y: 'Bottom' },
            target: document.body,
            dropData: [
                { Id: 'topleft', Text: 'Top Left' },
                { Id: 'topright', Text: 'Top Right' },
                { Id: 'topcenter', Text: 'Top Center' },
                { Id: 'topfullwidth', Text: 'Top Full Width' },
                { Id: 'bottomleft', Text: 'Bottom Left' },
                { Id: 'bottomright', Text: 'Bottom Right' },
                { Id: 'bottomcenter', Text: 'Bottom Center' },
                { Id: 'bottomfullwidth', Text: 'Bottom Full Width' }
            ],
            dropFields: { text: 'Text', value: 'Id' },
            dropValue: 'bottomright',
            ShowBtn: false
        }
    },
    mounted: function(){
         setTimeout(() => {
            this.toastShow(200);
        },200);
        this.initialWid = this.$refs.toastRef.ej2Instances.width.toString();
        this.customFlag = false;
        this.obj = this.$refs.toastRef.ej2Instances;
    },
    methods: {
      valueChange: function(e){
         this.$refs.toastRef.hide('All'); 
         this.setToastPosValue(e.value.toString());
         this.toastShow(1000);
       },
       toastShow: function(args){
         setTimeout(() => {
             this.$refs.toastRef.show();
            },args);
       },
       checkboxChange: function(args){
            if (this.$refs.targetRef.ej2Instances.checked) {
                this.$refs.toastRef.hide('All');
                this.obj.target = '#toast_pos_target';
                this.toastShow(1000);
            }
       },  
       checkboxChange1: function(args){
            if (this.$refs.globalRef.ej2Instances.checked) {
                this.$refs.toastRef.hide('All');
                this.obj.target = document.body;
                this.toastShow(1000);
            }
       },  
       checkboxChange2: function(args){
            if (this.$refs.dropdownRef.ej2Instances.checked) {
                this.$refs.toastRef.hide('All');
                document.getElementById('dropdownChoose').style.display = 'table-cell';
                document.getElementById('customChoose').style.display = 'none';
                this.setToastPosValue(this.$refs.positionDropRef.value.toString()); 
                this.customFlag = false; 
                this.toastShow(1000);
        }
       },  
       checkboxChange3: function(args){
            if (this.$refs.customRef.ej2Instances.checked) {
            this.$refs.toastRef.hide('All');
            document.getElementById('dropdownChoose').style.display = 'none';
            document.getElementById('customChoose').style.display = 'table-cell';
            this.setcustomPosValue(); 
            this.customFlag = true; 
            this.toastShow(1000);
        }
       },
       showClicked: function(args){
           if (this.customFlag) {
              this.setcustomPosValue();
        }
        this.$refs.toastRef.show();
       },
       hideClicked: function(args){
           this.$refs.toastRef.hide('All');
       },
        setcustomPosValue: function(args){
           this.obj.width = this.initialWid;
           this.obj.position.X = parseInt(document.getElementById('xPos').value, 10);
           this.obj.position.Y = parseInt(document.getElementById('yPos').value, 10);
       },
       setToastPosValue: function(value){
           this.obj.width = this.initialWid;
           switch (value) {
            case 'topleft':
                this.obj.position.X = 'Left'; this.obj.position.Y = 'Top'; break;
            case 'topright':
                this.obj.position.X = 'Right'; this.obj.position.Y = 'Top'; break;
            case 'topcenter':
                this.obj.position.X = 'Center'; this.obj.position.Y = 'Top'; break;
            case 'topfullwidth':
                this.obj.width = '100%'; this.obj.position.X = 'Center'; this.obj.position.Y = 'Top'; break;
            case 'bottomleft':
                this.obj.position.X = 'Left'; this.obj.position.Y = 'Bottom'; break;
            case 'bottomright':
                this.obj.position.X = 'Right'; this.obj.position.Y = 'Bottom'; break;
            case 'bottomcenter':
                this.obj.position.X = 'Center'; this.obj.position.Y = 'Bottom'; break;
            case 'bottomfullwidth':
                this.obj.width = '100%'; this.obj.position.X = 'Center'; this.obj.position.Y = 'Bottom'; break;
        }
       },
       created: function(args){
            document.addEventListener('click', function() {
               if (!isNullOrUndefined(this.$refs.toastRef) && event.target !== this.$refs.showButtonRef.$el &&  this.$refs.toastRef.target === document.body) {
                   this.$refs.toastRef.hide('All');
               }
            }.bind(this));
        },
        onclose: function(e){
            if (e.toastContainer.childElementCount === 0 ) {
                this.ShowBtn = false;
            }
        },
        onbeforeOpen: function(e){
             this.ShowBtn = true;
        }
    }
});

</script>