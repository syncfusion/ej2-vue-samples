<template>
  <div>
     <div id="target" class="col-lg-12 control-section">
        <ejs-button id='dlgbtn' v-if="ShowBtn" v-on:click.native="buttonClick">Open Dialog</ejs-button>

        <ejs-dialog header='Drag Me!!!' :isModal='isModal' ref="dialogObj" :animationSettings='animationSettings' content='This is a dialog with draggable support.' allowDragging='true' showCloseIcon='true' :target='target' :width='width' :open="dialogOpen"
            :close="dialogClose">
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
           This example demonstrates the drag-and-drop operation of the dialog component. To begin drag-and-drop operation, select a dialog's header using mouse and dropping them in the desired location. The dialog can be draggable within the sample container.  Enable the `open dialog` button to reopen the dialog if it is closed. 
        </p>
    </div>
    <div id="description">
        <p>
            A drag-and-drop operation is enabled using the <code>allowDragging</code> property. when you configure the target property, the dialog can be draggable within its target container alone. The drag-and-drop feature is used to reposition the dialog dynamically.
        </p>
        More information on the draggable operation of Dialog can be found in 
        the <a href="https://ej2.syncfusion.com/vue/documentation/dialog/getting-started/#draggable" target="_blank"> documentation section</a>.
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
            isModal: true,
            width: '300px',
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

<style>
    /* custom code start */
    .control-section{
        min-height: 350px;    
    }
    /* custom code end */
</style>
