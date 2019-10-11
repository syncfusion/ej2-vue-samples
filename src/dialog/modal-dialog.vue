<template>
  <div>
    <div class="control-section" style="padding:10px;position:relative;">
        <div id="modalTarget" class="col-md-8 control-section" style="height:350px;">
            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='modalbtn' v-if="ShowBtn" v-on:click.native="modalBtnClick">Open</ejs-button>
            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog" :isModal='isModal' :header='header' :overlayClick='isoverlay' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :content='content' :open="modalDlgOpen" :close="modalDlgClose" >
            </ejs-dialog>
        </div>
        <div class="col-md-4 property-section">
            <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div style="font-size: 13px;">Close on overlay click</div>
                    </td>
                    <td>                        
                        <!-- Checkbox to enable / disable the overlay click -->
                        <ejs-checkbox ref="checkBoxObj" checked="true"></ejs-checkbox>                   
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
        <p>
        This example demonstrates that the modal behavior of Dialog component.
        Choose "Close on overlay" option from property panel to decide whether the Dialog will be closed on click on the overlay.
        Click on “Open” button to show the Dialog again if it is closed.
        </p>
    </div>
    <div id="description">
        <p>
            A modal prevents the access to the parent application, so that the user should interact with the Dialog compulsory before continuing
            the parent application.
        </p>
        <p>More information on the modal behavior of Dialog can be found in the
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/dialog/getting-started/#modal-dialog">
            documentation section</a>.</p>
    </div>
  </div>
</template>

<style>
	/* custom code start */
    .control-section {
        height: 100%;
        min-height: 350px;
     }
    /* custom code end */
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
let ShowBtn = undefined;
Vue.use(DialogPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            target: "#modalTarget",
            width: '335px',
            header: 'Software Update',
            content: 'Your current software version is up to date.',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } }],
            isModal: true,
            animationSettings: { effect: 'None' },
            ShowBtn: false
        }
    },
    methods: {
        modalBtnClick: function() {
            this.$refs.modalDialog.show();
        },
        isoverlay: function() {
            if (this.$refs.checkBoxObj.ej2Instances.checked) {
                this.$refs.modalDialog.hide();
            }
            else {
                this.$refs.modalDialog.show();
            }
        },
        modalDlgClose: function() {
            this.ShowBtn = true;
        },
        modalDlgOpen: function() {
            this.ShowBtn = false;
        },
        dlgButtonClick: function() {
            this.$refs.modalDialog.hide();
        }
    }
});
</script>