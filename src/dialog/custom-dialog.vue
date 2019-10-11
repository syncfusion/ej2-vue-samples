<template>
  <div>
    <div class="col-lg-12 control-section" style="padding:10px;position:relative;">
        <ejs-button class='dlgbtn' id='alertbtn' v-if="ShowBtn" v-on:click.native="alertBtnClick">Alert</ejs-button>

        <ejs-button class='dlgbtn' v-if="ShowBtn" v-on:click.native="confirmBtnClick">Confirm</ejs-button>

        <ejs-button class='dlgbtn' v-if="ShowBtn" v-on:click.native="promptBtnClick">Prompt</ejs-button>

        <ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :open="dialogOpen" :close="dialogClose" :target='target'
            :width='alertWidth'>
        </ejs-dialog>

        <ejs-dialog :buttons='confirmDlgButtons' ref="confirmDialog" v-bind:visible="false" :header='confirmHeader' :animationSettings='animationSettings' :content='confirmContent' :showCloseIcon='confirmCloseIcon' :open="dialogOpen" :close="dialogClose" :target='target'
            :width='confirmWidth'>
        </ejs-dialog>

        <ejs-dialog :buttons='promptDlgButtons' ref="promptDialog" v-bind:visible="false" :header='promptHeader' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :target='target' :open="dialogOpen" :close="dialogClose" :width='promptWidth'>

            <table style="border-collapse: separate;border-spacing: 10px;width:85%;margin: 0px -5px 0px;">
                <tr>
                    <td>SSID:</td>
                </tr>
                <tr>
                    <td><b>AndroidAP</b></td>
                </tr>
                <tr>
                    <td>Password:</td>
                </tr>
                <tr>
                    <td><span class="e-input-group">
                    <input type="password" id="password" name="Required" class="e-input" />
                    </span></td>
                </tr>
            </table>
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates that you can create different types of custom dialogs such as alert, confirm, and prompt dialogs.
            The buttons “alert”, “confirm”, and “prompt” are used to open the corresponding dialogs. 
        </p>
    </div>
    <div id="description">
            The dialog control is used to create alert, prompt, and confirmation dialogs using content, and buttons property. 
            The content property accepts both string and HTML element as content.
        <ul>
            <li>Alert - Used to show errors, warnings, and information that needs user awareness.</li>
            <li>Prompt - Used to get input from the user.</li>
            <li>Confirmation - Used to get approval from user that appears before any critical action.</li>
        </ul>
        <p>
        More information on the Dialog instantiation can be found in the <a target="_blank" 
            href="https://ej2.syncfusion.com/vue/documentation/dialog/getting-started/">
            documentation section</a>.
        </p>
    </div>
  </div>
</template>

<style>
	.e-btn-hide {
		display: none;
	}
    /* custom code start */
	.dlgbtn {
	    margin-right: 2%;
    }
    .control-section {
        height: 100%;
        min-height: 350px;
     }
    /* custom code end */
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);
let ShowBtn = undefined;
export default Vue.extend({
    data: function() {
        return {
            alertHeader: 'Low Battery',
            confirmHeader: 'Delete Multiple Items',
            promptHeader: 'Join Wi-Fi network',
            alertContent: '10% of battery remaining',
            confirmContent: '<span>Are you sure you want to permanently delete these items ?</span>',
            showCloseIcon: false,
            confirmCloseIcon: true,
            target: '.control-section',
            alertWidth: '250px',
            confirmWidth: '400px',
            promptWidth: '330px',
            animationSettings: { effect: 'None' },
            alertDlgButtons: [{ click: this.alertDlgBtnClick, buttonModel: { content: 'Dismiss', isPrimary: true } }],
            confirmDlgButtons: [{ click: this.confirmDlgBtnClick, buttonModel: { content: 'Yes', isPrimary: true } }, { click: this.confirmDlgBtnClick, buttonModel: { content: 'No' } }],
            promptDlgButtons: [{ click: this.promptDlgBtnClick, buttonModel: { content: 'Connect', isPrimary: true } }, { click: this.promptDlgBtnClick, buttonModel: { content: 'Cancel' } }],
            ShowBtn: true
        }
    },
    mounted: function(){
        document.getElementById('alertbtn').focus();
    },
    methods: {
        alertDlgBtnClick: function() {
            this.$refs.alertDialog.hide();
        },
        confirmDlgBtnClick: function() {
            this.$refs.confirmDialog.hide();
        },
        promptDlgBtnClick: function() {
            this.$refs.promptDialog.hide();
        },
        alertBtnClick: function() {
            this.$refs.alertDialog.show();
        },
        confirmBtnClick: function() {
            this.$refs.confirmDialog.show();
        },
        promptBtnClick: function() {
            this.$refs.promptDialog.show();
        },
        dialogClose: function() {
            this.ShowBtn = true;
        },
        dialogOpen: function() {
            this.ShowBtn = false;
        }
    }
});
</script>