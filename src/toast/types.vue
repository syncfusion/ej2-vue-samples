<template>
        <div class="control-section toast-type-section">
            <div class="e-sample-resize-container">
                <ejs-toast ref='toastRef' id='toast_type' :position='position' :created='created' :close='onclose' :beforeOpen='onbeforeOpen'>
                </ejs-toast>
            </div>
            <div id="toast_types">
                <div>
                    <ejs-button ref='infoRef' class="e-btn e-control e-info" id="info_Toast" v-on:click.native="infoClick"> Info Message </ejs-button>
                    <ejs-button ref='successRef' class="e-btn e-control e-success" id="success_Toast" v-on:click.native='successClick'> Success Message </ejs-button>
                    <ejs-button ref='warningRef' class="e-btn e-control e-warning" id="warning_Toast" v-on:click.native="warningClick"> Warning Message </ejs-button>
                    <ejs-button ref='errorRef' class="e-btn e-control e-danger" id="error_Toast" v-on:click.native="errorClick">Danger Message</ejs-button>
                </div>
                <div style="padding-top: 15px">
                    <ejs-button ref='hideButtonRef' v-if="ShowBtn" class="e-btn e-control" id="hideToast" v-on:click.native="hideClick"> Hide All </ejs-button>
                </div>
            </div>
              <div id="action-description">
                    <p>This sample demonstrates 4-predefined toast colors for various scenarios which can be using CSS class.</p>
                </div>
                <div id="description">
                    <p>The toast supports the following 4 different essential colors for various situations. Here we have achieved success, danger, warning, info notifications with corresponding icon and text message. All the classes should be added with .e-toast class.</p>
                    <ul>
                        <li>Information -  The <code>e-toast-info</code> class applies the color and background for showing toast information.</li>
                        <li>Success -  The <code>e-toast-success</code> class applies the color and background for notifying success action.</li>
                        <li>Warning -  The <code>e-toast-warning</code> class applies the color and background for showing warning message.</li>
                        <li>Danger -  The <code>e-toast-danger</code> class applies the color and background for showing error/failure toast.</li>
                    </ul>
                    <p>More information about Toast can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/toast/getting-started/">
        documentation section</a>.</p>
                </div>
        </div>
</template>
<style>
 @font-face {
    font-family: 'Toast_icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  #toast_types button {
    margin: 5px;
    min-width: 160px;
    max-width: 160px;
  }

  /* custom code start */
  #toast_types {
    text-align: center;
  }
  /* custom code end */

  .toast-icons {
    font-family: 'Toast_icons' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #toast_type .e-toast-icon.e-icons {
    height: auto;
    font-size: 30px;
  }

  .toast-icons.e-success::before {
    content: "\e701";
  }

  .toast-icons.e-error::before {
    content: "\e700";
  }

  .toast-icons.e-info::before {
    content: "\e704";
  }

  .toast-icons.e-warning::before {
    content: "\e703";
  }
</style>
<script>
import Vue from "vue";
import { ToastPlugin, ToastCloseArgs } from "@syncfusion/ej2-vue-notifications";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(ToastPlugin);
let ShowBtn = undefined;
export default Vue.extend({
   data: function(){
        return {
            position: { X: 'Right' },
            ShowBtn: false
        }
   },
   mounted: function() {
     this.toasts = [
                { title: 'Warning!', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning', icon: 'e-warning toast-icons' },
                { title: 'Success!', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success', icon: 'e-success toast-icons' },
                { title: 'Error!', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' },
                { title: 'Information!', content: 'Please read the comments carefully.', cssClass: 'e-toast-info', icon: 'e-info toast-icons' }];    
      setTimeout(() => {
            this.$refs.toastRef.show(this.toasts[3]);
         },200);
   },
    methods: {
       hideClick: function(args){
           this.$refs.toastRef.hide('All');
       },
       infoClick: function(args){
          this.$refs.toastRef.show(this.toasts[3]);
       },
       warningClick: function(args){
          this.$refs.toastRef.show(this.toasts[0]);
       },
       successClick: function(args){
          this.$refs.toastRef.show(this.toasts[1]);
       },
       errorClick: function(args){
           this.$refs.toastRef.show(this.toasts[2]);
       },
       created: function(args){
            document.addEventListener('click', function() {
               if (!isNullOrUndefined(this.$refs.toastRef) && !isNullOrUndefined(this.$refs.successRef) && !isNullOrUndefined(this.$refs.errorRef) && !isNullOrUndefined(this.$refs.infoRef) && !isNullOrUndefined(this.$refs.warningRef) && event.target !== this.$refs.infoRef.$el && event.target !== this.$refs.warningRef.$el && event.target !== this.$refs.successRef.$el && event.target !== this.$refs.errorRef.$el) {
                   this.$refs.toastRef.hide('All');
               }
            }.bind(this));
        },
        onclose: function(e){
            if (this.$refs.toastRef.$el.childElementCount === 0 ) {
              this.ShowBtn = false;
            }
        },
        onbeforeOpen: function(e){
            this.ShowBtn = true;
        }
    }
});

</script>