<template>
  <div>
    <div id="target" class="col-lg-12 control-section" style="padding:10px;position:relative;">
        <ejs-button id='dlgbtn' v-if="ShowBtn" v-on:click.native="buttonClick">Open Dialog</ejs-button>

        <ejs-dialog ref='dialogObj' :visible="true" header='First Dialog' showCloseIcon='true' :animationSettings='animationSettings' width='330px'
            target='#target' content='<p>This is the first dialog and acts as a parent dialog, you can open the second (child) dialog by clicking "Next".</p>' :buttons='dlgButton' :open='dialogOpen' :close='dialogClose'>
        </ejs-dialog>

        <ejs-dialog ref='secondDialog' :visible="false" header='Second Dialog' :isModal='isModal' showCloseIcon='true' :animationSettings='animationSettings' width='285px'
            target='#target' content='<p>This is the second dialog and act as a child dialog.</p>' :buttons='secondDlgButton'>
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates how to display multiple dialogs one over the other. The second dialog is configured with draggable behavior to adjust its position. You can invoke the second dialog from first dialog's button. Enable the <code>open dialog</code> button to reopen the dialog if the first dialog is closed.
        </p>
    </div>
    <div id="description">
        <p>
            You can configure the dialog as a parent and child, and invoke the child dialog from its parent dialog. In addition, multiple dialogs can be shown at a time in a page. The Z- index order will be controlled automatically in the browser and manually using the <code>zIndex</code> property. 
        </p>
    </div>
  </div>
</template>

<style>
    /* custom code start */
	#dlgbtn {
	    margin-right: 5%;
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
            dlgButton: [{'click': () => { this.$refs.secondDialog.show();}, buttonModel: { isPrimary:'true', content: 'Next' }}],
            secondDlgButton: [{ 'click': () => { this.$refs.secondDialog.hide(); },buttonModel: { isPrimary:'true', content: 'Close' }}],
            animationSettings: { effect: 'None' },
            isModal: true,
            ShowBtn: false
        }
    },
    methods: {
        buttonClick: function(args){
            this.$refs.dialogObj.show();
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