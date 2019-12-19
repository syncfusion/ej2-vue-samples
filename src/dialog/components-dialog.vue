<template>
  <div>
    <div class="col-lg-12 control-section">
        <!-- Render Button to open the Dialog -->
        <ejs-button id='dlgbtn' v-if="OpenBtn" v-on:click.native="BtnClick">Open</ejs-button>

        <ejs-dialog id="componentsDialog" :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='contenttemplateVue' showCloseIcon=true :target='target' width='700px' :open="dialogOpen"
            :close="dialogClose">
        </ejs-dialog>
    </div> 
    <div id="action-description">
        <p>
            This example demonstrates how to integrate other Vue UI components within the dialog control. In the below example, The dialog component renders with the Grid, Schedule, Chart, Rich Text Editor, Tabs and Form components.
        </p>
    </div>
    <div id="description">
        <p>Since the dialog is container component, you can integrate other Vue UI components within the dialog. The dialog can be renders with simple plain-text, HTML string, or Vue UI components. In the above sample, used major components such as Grid, Schedule, Chart, and Rich Text Editor inside dialog.</p>  
      </div>
  </div>
</template>

<style>
     .control-section {
	left: 0px! important;
    top:0%! important;
	}
    .dlgbtn {
        margin-right: 10px;
    }
    .control-section {
        height: 100%;
        min-height: 500px;
    }
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import TabTemplateVue from "./tab-template-vue.vue";
Vue.use(DialogPlugin);
let OpenBtn = undefined;
export default Vue.extend({
    data: function() {
        return {
            target: '.control-section',
            header: 'Syncfusion Components inside Dialog',
            contenttemplateVue: function () {
                return { template : TabTemplateVue }
            },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } },
            { click: this.dlgBtnClick, buttonModel: { content: 'Cancel' } }
            ],
            animationSettings: { effect: 'Zoom' },
            OpenBtn: false
        }
    },
    methods: {
        BtnClick : function() {
            this.$refs.dialogObj.show();
        },
        dialogClose: function() {
            this.OpenBtn = true;
        },
        dialogOpen: function() {
            this.OpenBtn = false;
        },
        dlgBtnClick: function() {
            this.$refs.dialogObj.hide()
        }
    }
});
</script>