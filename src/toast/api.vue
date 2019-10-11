<template>
<div class="toast-api-section">
 <div class="col-lg-12 control-section">
    <div class="e-sample-resize-container">
        <ejs-toast ref='apiRef' id='toastApi' :position='position' :animation='showAnimation' :beforeOpen='onBeforeOpen' :close='onclose' newestOnTop=true :created='created'></ejs-toast>
        <div class="row">
            <div class='col-lg-6 padding'>
                <div class="input-form">
                    <div class="e-float-input">
                        <input class="e-input" id="toast_input_title" required="">
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Enter the title</label>
                    </div>
                </div>
                <div class="input-form">
                    <div class="e-float-input">
                        <textarea class="e-input" id="toast_input_content" rows="3" required=""></textarea>
                        <label class="e-float-text">Enter the content</label>
                    </div>
                </div>
                <div class="group-form e-group">
                     <ejs-checkbox id='closeButton' label='Show Close Button' :change="closeOnChange"></ejs-checkbox>
                </div>
                <div class="group-form">
                    <ejs-checkbox id='progressBar' label='Show Progress Bar' :change="OnProgressChange"></ejs-checkbox>
                </div>
                <div class="group-form">
                    <ejs-checkbox id='newestOnTop' checked="true" label='Newest On Top' :change="closeNewestOnChange"></ejs-checkbox>
                </div>
                <div class="group-form">
                    <ejs-checkbox id='prevDuplicates' label='Prevent Duplicates' :change="OnPrevDubChange"></ejs-checkbox>
                </div>
                <div class="group-form">
                    <ejs-checkbox id='actionButtons' label='Action Buttons' :change="OnactionBtnChange"></ejs-checkbox>
                </div>
                <div class="input-form">
                    <div class="e-float-input e-input-group">
                        <input class="e-input" id="timeOut" name="Digits" value="5000" digits="true" data-digits-message="Please enter digits only." required="">
                        <span class="e-float-line"></span>
                        <label class="e-float-text" for="Digits">TimeOut</label>
                    </div>
                </div>
            </div>
            <div class='col-lg-6 padding'>
                <div class="input-form">
                    <h4> Show Animation</h4>
                    <div class="e-float-input">
                        <input class="e-input" id="showDuration" value="400" required="">
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Duration</label>
                    </div>
                </div>
                <div class="input-form">
                       <ejs-dropdownlist ref='showEasingRef' id='ShowEasing' :dataSource='easeData' :fields='easeFields'
                        placeholder='Select an Easing' :change='onShowEase' :value='easeValue'></ejs-dropdownlist>
                </div>
                <div class="input-form">
                       <ejs-dropdownlist ref='showAnimationRef' id='ShowAnimation' :dataSource='animationData' :fields='easeFields'
                        placeholder='Select an Animation' :change='showChange' :value='animationValue'></ejs-dropdownlist>
                </div>
                <div class="input-form e-group">
                    <h4> Hide Animation</h4>
                    <div class="e-float-input">
                        <input class="e-input" id="hideDuration" value="400" required="">
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Duration</label>
                    </div>
                </div>
                <div class="input-form">
                    <ejs-dropdownlist ref='hideEasingRef' id='HideEasing' :dataSource='easeData' :fields='easeFields'
                        placeholder='Select an Easing' :change='onHideEase' :value='easeValue'></ejs-dropdownlist>
                </div>
                <div class="input-form">
                       <ejs-dropdownlist ref='hideAnimationRef' id='HideAnimation' :dataSource='animationData1' :fields='easeFields'
                        placeholder='Select an Animation' :change='hideChange' :value='animationHideValue'></ejs-dropdownlist>
                </div>
            </div>
        </div>
        <div class="row center">
            <ejs-button ref='buttonShowRef' id="toastBtnShow" class="e-btn e-primary" v-on:click.native='showClicked'>Show Toasts</ejs-button>
            <ejs-button ref='hideButtonRef' id="toastBtnHide" v-if="ShowBtn" class="e-btn e-primary" v-on:click.native='hideClicked'>Hide all</ejs-button>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates all the API functionalities available in <code>Toast.</code></p>
     </div>
     <div id="description">
        <p>In this sample, with help of text inputs toast header <code>title</code> and <code>content</code> text can be provided.</p>
        <ul>
            <li><code>Action Buttons</code> – Provide support to add a button inside toast to interact with it.</li>
            <li><code>Prevent Duplicates</code> – Disable the user to create same toast message multiple times.</li>
            <li><code>TimeOut</code> – Allows to set time in millisecond to close toast.</li>
            <li><code>Progress Bar</code> – Visualizes the time out of toast as an indicator.</li>
            <li><code>Animation</code> – Enables to define the toast show and hide animation.</li>
            <li><code>Close button</code> – Show close button to hide toast irrespective of time out.</li>
        </ul>
        <p>More information about Toast can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/toast/getting-started/">
        documentation section</a>.</p>
     </div>
 </div>
 </div>
</template>
<style>
    /* custom code start */
    .toast-api-section {
        padding-top: 0;
    }
    .toast-api-section .input-form {
        margin: 33px 0;
    }

    .toast-api-section .group-form {
        margin: 25px 0;
    }

    .toast-api-section .group-form.e-group {
        margin-top: 35px;
    }
    .toast-api-section .row .padding {
        padding: 0 15px;
    }
    .toast-api-section .row.center {
        text-align: center;
    }
    .toast-api-section .row {
        padding: 0 15px;
    }
    /* custom code end */
</style>
<script>
import Vue from "vue";
import { ToastPlugin,Toast, ToastBeforeOpenArgs, ToastCloseArgs } from "@syncfusion/ej2-vue-notifications";
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { DropDownList, ChangeEventArgs as dropdownsChange } from '@syncfusion/ej2-dropdowns';
import { Effect, isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(ToastPlugin);
let ShowBtn = undefined;
export default Vue.extend({
    data: function(){
        return {
            position: { X: 'Right', Y :'Bottom' },
            easeData: [
                { Id: 'ease', Text: 'Ease' },
                { Id: 'linear', Text: 'Linear' }
            ],
            easeFields: { text: 'Text', value: 'Id' },
            animationData: [
                { Id: 'SlideBottomIn', Text: 'Slide Bottom In' },
                { Id: 'FadeIn', Text: 'Fade In' },
                { Id: 'FadeZoomIn', Text: 'Fade Zoom In' },
                { Id: 'FadeZoomOut', Text: 'Fade Zoom Out' },
                { Id: 'FlipLeftDownIn', Text: 'Flip Left Down In' },
                { Id: 'FlipLeftDownOut', Text: 'Flip Left Down Out' },
                { Id: 'FlipLeftUpIn', Text: 'Flip Left Up In' },
                { Id: 'FlipLeftUpOut', Text: 'Flip Left Up Out' },
                { Id: 'FlipRightDownIn', Text: 'Flip Right Down In' },
                { Id: 'FlipRightDownOut', Text: 'Flip Right Down Out' },
                { Id: 'FlipRightUpIn', Text: 'Flip Right Up In' },
                { Id: 'FlipRightUpOut', Text: 'Flip Right Up Out' },
                { Id: 'SlideBottomOut', Text: 'Slide Bottom Out' },
                { Id: 'SlideLeftIn', Text: 'Slide Left In' },
                { Id: 'SlideLeftOut', Text: 'Slide Left Out' },
                { Id: 'SlideRightIn', Text: 'Slide Right In' },
                { Id: 'SlideRightOut', Text: 'Slide Right Out' },
                { Id: 'SlideTopIn', Text: 'Slide Top In' },
                { Id: 'SlideTopOut', Text: 'Slide Top Out' },
                { Id: 'ZoomIn', Text: 'Zoom In' },
                { Id: 'ZoomOut', Text: 'Zoom Out' }
            ],
             animationData1: [
                { Id: 'SlideBottomOut', Text: 'Slide Bottom Out' },
                { Id: 'FadeIn', Text: 'Fade In' },
                { Id: 'FadeZoomIn', Text: 'Fade Zoom In' },
                { Id: 'FadeZoomOut', Text: 'Fade Zoom Out' },
                { Id: 'FlipLeftDownIn', Text: 'Flip Left Down In' },
                { Id: 'FlipLeftDownOut', Text: 'Flip Left Down Out' },
                { Id: 'FlipLeftUpIn', Text: 'Flip Left Up In' },
                { Id: 'FlipLeftUpOut', Text: 'Flip Left Up Out' },
                { Id: 'FlipRightDownIn', Text: 'Flip Right Down In' },
                { Id: 'FlipRightDownOut', Text: 'Flip Right Down Out' },
                { Id: 'FlipRightUpIn', Text: 'Flip Right Up In' },
                { Id: 'FlipRightUpOut', Text: 'Flip Right Up Out' },
                { Id: 'SlideBottomIn', Text: 'Slide Bottom In' },
                { Id: 'SlideLeftIn', Text: 'Slide Left In' },
                { Id: 'SlideLeftOut', Text: 'Slide Left Out' },
                { Id: 'SlideRightIn', Text: 'Slide Right In' },
                { Id: 'SlideRightOut', Text: 'Slide Right Out' },
                { Id: 'SlideTopIn', Text: 'Slide Top In' },
                { Id: 'SlideTopOut', Text: 'Slide Top Out' },
                { Id: 'ZoomIn', Text: 'Zoom In' },
                { Id: 'ZoomOut', Text: 'Zoom Out' }
            ],
            easeValue: 'ease',
            animationValue: 'SlideBottomIn',
            animationHideValue: 'SlideBottomOut',
            showAnimation: { show : { effect: 'SlideBottomIn' }, hide : { effect: 'SlideBottomOut'} },
            ShowBtn: false
        }
    },
    mounted: function(){
        this.prevDuplicates = false;
        this.apiObj = this.$refs.apiRef.ej2Instances;
    },
    methods: {
      onBeforeOpen: function(args) {
         this.ShowBtn = true;
         if (this.prevDuplicates) {
            args.cancel = this.preventDuplicate(args);
        }
       },
       preventDuplicate: function(e) {
           let toastEle = e.element;
           let toasts = e.toastObj.element.children;
           for (let i = 0; i < toasts.length; i++) {
               let toastTitle = (toasts[i]).querySelector('.e-toast-title');
               let toastMessage = (toasts[i]).querySelector('.e-toast-message');
            if (toastTitle && toastTitle.isEqualNode(toastEle.querySelector('.e-toast-title'))) {
                return true;
            }
            if (!toastTitle && toastMessage && toastMessage.isEqualNode(toastEle.querySelector('.e-toast-message'))) {
                return true;
            }
        }
        return false;
       },
       closeOnChange: function(args){
          var checkObj = args.event.target.ej2_instances[0];
          checkObj.checked ? this.apiObj.showCloseButton = true : this.apiObj.showCloseButton = false;
       },
       OnProgressChange: function(args){
           var checkObj1 = args.event.target.ej2_instances[0];
           checkObj1.checked ? this.apiObj.showProgressBar = true : this.apiObj.showProgressBar = false;
       },
       closeNewestOnChange: function(args){
           var checkObj2 = args.event.target.ej2_instances[0];
           checkObj2.checked ? this.apiObj.newestOnTop = true : this.apiObj.newestOnTop = false;
       },
       OnPrevDubChange: function(args){
           var checkObj3 = args.event.target.ej2_instances[0];
           this.prevDuplicates = checkObj3.checked;
       },
       OnactionBtnChange: function(args){
           var checkObj4 = args.event.target.ej2_instances[0];
           if (checkObj4.checked) {
               this.apiObj.buttons = [{ model: { content: '<div class="e-toast-btn"> Click Here </div>' }, click: this.onActionBtnClick }];
        } else { this.apiObj.buttons = []; }
       },
       onActionBtnClick: function(args){
           alert('Action button is clicked');
       },
       showClicked: function(args){
           this.showToast();
       },
       hideClicked: function(args){
           this.$refs.apiRef.hide('All'); 
       },
       showToast: function(args){
        let title = (document.getElementById('toast_input_title')).value;
        let content = (document.getElementById('toast_input_content')).value;
        if (title === '' && content === '') {
            content = 'You have created a Toast message';
        }
        let showDuration = parseInt((document.getElementById('showDuration')).value, 10);
        let hideDuration = parseInt((document.getElementById('hideDuration')).value, 10);
        let timeOut = parseInt((document.getElementById('timeOut')).value, 10);
        this.$refs.apiRef.show(
            {
                title: title, content: content, timeOut: timeOut,
                animation: {
                    show: { duration: showDuration },
                    hide: { duration: hideDuration }
                }
            });
       },
       showChange: function(args){
            this.apiObj.animation.show.effect = args.value;
       },
       hideChange: function(args){
            this.apiObj.animation.hide.effect = args.value;
       },
       onShowEase: function(args){
            this.apiObj.animation.show.easing = args.value.toString();
       },
       onHideEase: function(args){
            this.apiObj.animation.hide.easing = args.value.toString();
       },
       created: function(args){
            this.apiObj = this.$refs.apiRef.ej2Instances;
            this.apiObj.animation.show.effect = this.$refs.showAnimationRef.value;
            this.apiObj.animation.hide.effect = this.$refs.hideAnimationRef.value;
            document.addEventListener('click', function() {
               if (!isNullOrUndefined(this.$refs.apiRef) && !isNullOrUndefined(this.$refs.buttonShowRef) && event.target !== this.$refs.buttonShowRef.$el) {
                   this.$refs.apiRef.hide('All');
               }
            }.bind(this));
       },
        onclose: function(e){
            if (e.toastContainer.childElementCount === 0 ) {
                this.ShowBtn = false;
            }
        },
    }
});

</script>