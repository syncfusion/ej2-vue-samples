<template>
        <div class="col-lg-12 control-section toast-default-section">
            <div class="e-sample-resize-container">
                <ejs-toast ref='toastRef' id='toast_default' :position='position' :created='created' :close='onclose' :beforeOpen='onbeforeOpen'></ejs-toast>
                <div class="col-lg-12 col-sm-12 col-md-12 center">
                    <div id="toastBtnDefault" style="margin: auto;text-align: center">
                        <ejs-button ref='showButtonRef' class="e-btn" id="toastBtnShow" v-on:click="showBtnClick">Show Toasts</ejs-button>
                        <ejs-button ref='hideButtonRef' v-if="ShowBtn" class="e-btn" id="toastBtnHide" v-on:click="hideBtnClick">Hide All</ejs-button>
                    </div>
                </div>
            </div>
             <div id="action-description">
                    <p>This sample demonstrates the basic layout of a Toast to show simple notification and hide them.</p>
                </div>
                <div id="description">
                    <p>The Toast is a notification pop-up used to display on the desired position with required message and header icons.</p>
                    <ul>
                        <li>The header text is set using <code>title</code> property.</li>
                        <li>Information to be displayed is set using <code>content</code> property.</li>
                    </ul>
                    <p>More information about Toast can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/toast/getting-started/">
        documentation section</a>.</p>
                </div>
     </div>
</template>
<style>
    #toast_default .e-meeting::before {
        content: "\e705";
        font-size: 17px;
    }
    .bootstrap4 #toast_default .e-meeting::before {
        content: "\e763";
        font-size: 20px;
    }
    .tailwind #toast_default .e-meeting::before,
    .tailwind3 #toast_default .e-meeting::before,
    .tailwind-dark #toast_default .e-meeting::before,
    .tailwind3-dark #toast_default .e-meeting::before,
    .bootstrap5 #toast_default .e-meeting::before,
    .bootstrap5-dark #toast_default .e-meeting::before {
        content: "\e7e9";
        font-size: 18px;
    }
    #toastBtnHide{
       margin-left: 10px;
    }
</style>

<script>
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    data: function(){
        return {
            position: {
                X: 'Right'
            },
            ShowBtn: false
        }
    },
    components: {
        'ejs-toast': ToastComponent,
        'ejs-button': ButtonComponent
    },
    mounted: function() {
        setTimeout(() => {
            this.$refs.toastRef.show({
                title: 'Adaptive Tiles Meeting', content: 'Conference Room 01 / Building 135 10:00 AM-10:30 AM',
                icon: 'e-meeting'
            });
        },200);
    },
    methods: {
        showBtnClick: function(){
            this.$refs.toastRef.show();
        },
        hideBtnClick: function(){
            this.$refs.toastRef.hide('All');
        },
        created: function(){
            document.addEventListener('click', function() {
               if (!isNullOrUndefined(this.$refs.toastRef) && !isNullOrUndefined(this.$refs.showButtonRef) && event.target !== this.$refs.showButtonRef.$el) {
                   this.$refs.toastRef.hide('All');
               }
            }.bind(this));
        },
        onclose: function(){
            if (this.$refs.toastRef.$el.childElementCount === 0 ) {
                this.ShowBtn = false;
            }
        },
        onbeforeOpen: function(){
            this.ShowBtn = true;
        }
    }
};
</script>
