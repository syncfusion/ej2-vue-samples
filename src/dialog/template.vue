<template>
  <div>
     <div class="col-lg-12 control-section template">
        <ejs-button id='dlgbtn' v-on:click.native="BtnClick">Open</ejs-button>

        <ejs-dialog :header='header' ref="dialogObj" :footerTemplate='footer' :content='contenttemplateVue' :height='height' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :target='target' :width='width' :open="dialogOpen"
            :close="dialogClose">
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
import headerTemplateVue from "./header-template.vue";
import footerTemplateVue from "./footer-template.vue";
import contentTemplateVue from "./content-template.vue";

export default Vue.extend({
    data: function() {
        return {
            proxy: this,
            footer: function () {
                return { template : footerTemplateVue }
            },
            header: function () {
                return { template : headerTemplateVue }
            },
            showCloseIcon: true,
            height: '75%',
            contenttemplateVue: function () {
                return { template : contentTemplateVue }
            },
            target: '.control-section',
            animationSettings:  { effect: 'None' },
            width:  '435px'            
        }
    },
    methods: {
        dialogClose: function() {
            document.getElementById('dlgbtn').style.display = '';
        },    
        BtnClick: function() {
            this.$refs.dialogObj.show();
        },
        dialogOpen: function() {
            document.getElementById('dlgbtn').style.display = 'none';
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
            var dialogTextWrap = document.getElementsByClassName('dialogContent')[0];
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
    .highcontrast .template .e-dialog .e-dlg-header-content {
        background-color: #ffd939;
    }
    .fabric .template .e-dialog .e-dlg-header-content {
        background-color: #0078d7;
    }
    .material .template .e-dialog .e-dlg-header-content{
        background-color: #3f51b5;
    }
    .bootstrap .template .e-dialog .e-dlg-header-content {
        background-color: #428bca;
    }
    .bootstrap4 .template .e-dialog .e-dlg-header-content {
        background-color: #007bff;
    }
    .template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 5px;
        left: -11px;
    }
    .e-bigger .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 3px;
        left: -11px;
    }
    .bootstrap4 .template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn,
    .bootstrap4.e-bigger .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {
        top: 8px;
    }

    .template .e-dialog .e-dlg-header {
        position: relative;
    }
    .template .e-dialog .e-footer-content {
        padding: 10px 13px 13px;
    }
    .template .e-dialog .e-dlg-content {
        padding: 0;
    }
    button#sendButton, .highcontrast button#sendButton {
        position: relative;
    }

    button#sendbtn, .highcontrast button#sendbtn {
        top: -2px;
    }

    .template input.e-input {
        width: 62%;
        float: left;
    }
    .template .e-dialog .e-dlg-header-content {
        padding: 6px;
    }
    .template .e-open-icon::before {
        content: '\e782';
    }
    .template img.img2 {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        vertical-align: middle;
    }
    #dlg-template {
        display: inline-block;
        padding: 0px 10px;
        vertical-align: middle;
        height: 40px;
        line-height: 40px;
    }
    .template input.e-input {
        width: 75%;
        float: left;
    }
    .template .e-icon-settings.e-icons {
        float: left;
        position: relative;
        left: 14%;
        top: -33px;
    }
    .template .e-icon-settings.e-icons {
        top: -37px;
    }
    .template .dialogContent .dialogText {
        font-size: 13px;
        padding: 5%;
        word-wrap: break-word;
        border-radius: 6px;
        text-align: justify;
        font-style: initial;
        display: block;
    }
    .template .e-dlg-header .e-icon-settings, .e-icon-btn {
        color: #fff;
    }
    .material .template .e-dialog .e-footer-content, .fabric .template .e-dialog .e-footer-content {
        border-top: 0.5px solid rgba(0, 0, 0, 0.42);
    }
    .highcontrast .template .e-dialog .e-footer-content{
        border-top: 0.5px solid #fff;
    }
    .bootstrap4 .template .e-dialog .e-footer-content{
        border-top: 1px solid #e9ecef;
    }
    .highcontrast .template .dialogContent .dialogText{
        background-color: #bfbfbf;
    }
    .template .dialogContent .dialogText, .template .dialogContent .dialogText  {
        background-color: #f5f5f5;
    }
    .template .dialogContent {
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
    .control-wrapper .e-control.e-dialog {
        width: 30%;
    }
    .fabric .template .e-dialog .e-btn.e-dlg-closeicon-btn:hover span {
        color: #8ECBFF;
    }
    .template .e-dialog .e-dlg-header-content .e-icon-dlg-close {
        color: #fff;
    }
    .material .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .material .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {
        background-color: rgba(255,255,255, 0.10);
    }
    .bootstrap4 .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,
    .bootstrap4 .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {
        background-color : transparent;
    }

    .material .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:active .e-icon-dlg-close,
    .material .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus .e-icon-dlg-close,
    .material .template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover .e-icon-dlg-close {
        color: #fff;
    }
    .template .e-dialog .e-dlg-header-content .e-dlg-header .e-avatar.template-image {
        background-image: url('./images/dialog-img1.png');
        vertical-align: middle;
        display: inline-block;
        width: 36px;
        height: 36px;
    }
</style>
