<template>
  <div>
     <div class="col-lg-12 control-section dialog-template">
        <ejs-button id='dlgbtn' v-if="ShowBtn" v-on:click.native="BtnClick">Open</ejs-button>
        <ejs-dialog :header="'headerTemplate'" ref="dialogObj" :footerTemplate="'footerTemplate'" :content="'contentTemplate'" :height='height' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :target='target' :width='width' :open="dialogOpen"
            :close="dialogClose">
            <template v-slot:headerTemplate>
            <span id="container">
                <div class="e-avatar template-image e-avatar-xsmall e-avatar-circle"></div>
                <div id="dlg-template" title="Nancy" class="e-icon-settings"> Nancy </div>
            </span>
            </template>
            <template v-slot:footerTemplate>
            <div id="container">
                <input id="inVal" class="e-input" type="text" placeholder="Enter your message here!"/>
                <button id="sendButton" class="e-control e-btn e-primary sendButton" data-ripple="true">Send</button>
            </div>
            </template>
            <template v-slot:contentTemplate>
            <div id="container">
                <div class="dialogContent">
                <span class="dialogText">Greetings Nancy! When will you share me the source files of the project?</span></div>
            </div>
            </template>
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the template functionalities of the dialog component. The dialog's header and footer is configured with HTML template. The typed content will be replaced every time when clicking the "send" button.
        </p>
    </div>
    <div id="description">
        <p>
            The dialog component displays HTML template content on the header and footer. The user can set any HTML element as header and footer with the usage of content and footer template properties.
        </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(DialogPlugin);

export default Vue.extend({
    data: function() {
        return {
            proxy: this,
            showCloseIcon: true,
            height: '75%',
            target: '.control-section',
            animationSettings:  { effect: 'None' },
            width:  '435px',
            ShowBtn: false            
        }
    },
    methods: {
        dialogClose: function() {
            this.ShowBtn = true;
        },    
        BtnClick: function() {
            this.$refs.dialogObj.show();
        },
        dialogOpen: function() {
            this.ShowBtn = false;
            document.getElementById('sendButton').keypress = (e) => {
                if (e.keyCode === 13) { this.updateTextValue(); }
            };    
            document.getElementById('inVal').onkeydown = (e) => {
                if (e.keyCode === 13) { this.updateTextValue(); }
            };    
            document.getElementById('sendButton').onclick = () => {
                this.updateTextValue();
            };
        },
        changePosition: function(event) {
            this.$refs.dialogObj.position = { X: event.value.split(" ")[0], Y: event.value.split(" ")[1] };
            document.getElementById('posvalue').innerHTML = 'Position: {X: "' + event.value.split(" ")[0] + '", Y: "' + event.value.split(" ")[1] + '"}'
            var txt = event.target.parentElement.querySelector('.e-label').innerText.split(" ");
            document.getElementById('posvalue').innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
        },
        updateTextValue: function() {
            var enteredVal = document.getElementById('inVal');
            var dialogTextElement = document.getElementsByClassName('dialogText')[0];
            if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
                detach(document.getElementsByClassName('contentText')[0]);
            }
            if (enteredVal.value !== '') {
                dialogTextElement.innerHTML = enteredVal.value;
            }
            enteredVal.value = '';
        }
    }
});
</script>

<style>
    .highcontrast .dialog-template .e-dialog .e-dlg-header-content {
        background-color: #ffd939;
    }
    .fabric .dialog-template .e-dialog .e-dlg-header-content {
        background-color: #0078d7;
    }

	.tailwind .dialog-template .e-dialog .e-dlg-header-content,
    .tailwind-dark .dialog-template .e-dialog .e-dlg-header-content,
    .bootstrap5 .dialog-template .e-dialog .e-dlg-header-content,
    .bootstrap5-dark .dialog-template .e-dialog .e-dlg-header-content,
    .material .dialog-template .e-dialog .e-dlg-header-content {
        background-color: #3f51b5;
    }
    .bootstrap .dialog-template .e-dialog .e-dlg-header-content {
        background-color: #428bca;
    }
    .bootstrap4 .dialog-template .e-dialog .e-dlg-header-content {
        background-color: #007bff;
    }
    .dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 5px;
        left: -11px;
    }
    .fluent .dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 3px;
        left: 0px;
    }
    .e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 3px;
        left: -11px;
    }
    .bootstrap4 .dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn,
    .bootstrap4.e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 8px;
    }

    .dialog-template .e-dialog .e-dlg-header {
        position: relative;
    }
    .dialog-template .e-dialog .e-footer-content {
        padding: 10px 13px 13px;
    }
    .dialog-template .e-dialog .e-dlg-content {
        padding: 0;
    }
    .dialog-template button#sendButton, .dialog-template .highcontrast button#sendButton {
        top: -2px;
        position: relative;
    }

    .dialog-template button#sendbtn, .dialog-template .highcontrast button#sendbtn {
        top: -2px;
    }

    .dialog-template input.e-input {
        width: 62%;
        float: left;
    }
    .dialog-template .e-dialog .e-dlg-header-content {
        padding: 6px;
    }
    .dialog-template .e-open-icon::before {
        content: '\e782';
    }
    .dialog-template img.img2 {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .dialog-template #dlg-template {
        display: inline-block;
        padding: 0px 10px;
        vertical-align: middle;
        height: 40px;
        line-height: 40px;
    }
    .dialog-template input.e-input {
        width: 75%;
        float: left;
    }
    .dialog-template .e-icon-settings.e-icons {
        float: left;
        position: relative;
        left: 14%;
        top: -33px;
    }
    .dialog-template .e-icon-settings.e-icons {
        top: -37px;
    }
    .dialog-template .dialogContent .dialogText {
        font-size: 13px;
        padding: 5%;
        word-wrap: break-word;
        border-radius: 6px;
        text-align: justify;
        font-style: initial;
        display: block;
    }
    .dialog-template .e-dlg-header .e-icon-settings, .dialog-template .e-icon-btn {
        color: #fff;
    }
    .material .dialog-template .e-dialog .e-footer-content, .fabric .dialog-template .e-dialog .e-footer-content {
        border-top: 0.5px solid rgba(0, 0, 0, 0.42);
    }
    .highcontrast .dialog-template .e-dialog .e-footer-content{
        border-top: 0.5px solid #fff;
    }
    .bootstrap4 .dialog-template .e-dialog .e-footer-content{
        border-top: 1px solid #e9ecef;
    }
    .bootstrap5 .dialog-template .e-dialog .e-footer-content {
        border-top: 1px solid #dee2e6;
    }
    .bootstrap5-dark .dialog-template .e-dialog .e-footer-content {
        border-top: 1px solid #444c54;
    }
    .highcontrast .dialog-template .dialogContent .dialogText{
        background-color: #bfbfbf;
    }
    .dialog-template .dialogContent .dialogText, .dialog-template .dialogContent .dialogText  {
        background-color: #f5f5f5;
    }
    .material-dark .dialog-template .dialogContent .dialogText,
    .fabric-dark .dialog-template .dialogContent .dialogText,
    .bootstrap-dark .dialog-template .dialogContent .dialogText,
    .bootstrap5-dark .dialog-template .dialogContent .dialogText,
    .tailwind-dark .dialog-template .dialogContent .dialogText,
    .fluent-dark .dialog-template .dialogContent .dialogText {
        background-color: rgba(255,255,255,0.20);
        color: #ffff;
    }
    .dialog-template .dialogContent {
        display: block;
        font-size: 15px;
        word-wrap: break-word;
        text-align: center;
        font-style: italic;
        border-radius: 6px;
        padding: 3%;
        position: relative;
        top: 25px;
    }
    .control-wrapper .dialog-template .e-control.e-dialog {
        width: 30%;
    }
    .fabric .dialog-template .e-dialog .e-btn.e-dlg-closeicon-btn:hover span {
        color: #8ECBFF;
    }
    .dialog-template .e-dialog .e-dlg-header-content .e-icon-dlg-close {
        color: #fff;
    }
    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {
        background-color: rgba(255,255,255, 0.10);
    }
    .bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {
        background-color : transparent;
    }

    .tailwind .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .tailwind .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus,
    .tailwind-dark .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .tailwind-dark .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus,
    .bootstrap5 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .bootstrap5 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus,
    .bootstrap5-dark .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .bootstrap5-dark .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {
        background-color : transparent;
    }

    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:active .e-icon-dlg-close,
    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus .e-icon-dlg-close,
    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover .e-icon-dlg-close {
        color: #fff;
    }
    .dialog-template .e-dialog .e-dlg-header-content .e-dlg-header .e-avatar.template-image {
        background-image: url('./images/dialog-img1.png');
        vertical-align: middle;
        display: inline-block;
        width: 36px;
        height: 36px;
    }
</style>
