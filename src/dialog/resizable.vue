<template>
  <div>
     <div id="target" class="col-lg-12 control-section resizable">
        <ejs-button id='dlgbtn' v-if="ShowBtn" v-on:click.native="buttonClick">Open Dialog</ejs-button>

        <ejs-dialog header='Resize Me!!!' ref="dialogObj" :resizeHandles='resizeHandles' allowDragging='true' :animationSettings='animationSettings' content='This is a dialog with resizable support.' enableResize='true' showCloseIcon='true' :target='target' :width='width' :open="dialogOpen"
            :close="dialogClose">
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the resize operation of the dialog control in all directions. To resize the modal dialog, select and resize a dialog using its handle (grip) or hover on any of the edges or border of the dialog within the sample container.
            The "open dialog" button is used to reopen the dialog if it is closed.
        </p>
    </div>
    <div id="description">
        <p>
            Users can create resizable modal dialog by setting the enableResize property to true, which is used to change the size of a dialog dynamically and view its content with expanded mode.
            The resizeHandles property can also be configured for which directions the dialog should resize.
            When you configure the target property along with enableResize property, the dialog can be resized within its specified target container.
        </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);
let ShowBtn = undefined;
export default Vue.extend({
    data: function() {
        return {
            target: '#target',
            animationSettings:  { effect: 'None' },
            resizeHandles: ['All'],
            width:  '300px',
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

<style scoped>
    /* custom code start */
    .control-section{
        min-height: 350px;    
    }
    /* custom code end */
    .material .resizable .e-dialog, .bootstrap .resizable .e-dialog, 
    .bootstrap4 .resizable .e-dialog {
        min-height: 125px;
    }
    .fabric .resizable .e-dialog, .highcontrast .resizable .e-dialog {
        min-height: 135px;
    }
</style>
