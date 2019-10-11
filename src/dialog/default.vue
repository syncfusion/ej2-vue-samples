<template>
  <div>
    <div class="col-lg-12 control-section">
        <!-- Render Button to open the Dialog -->
        <ejs-button id='dlgbtn' v-if="OpenBtn" v-on:click.native="BtnClick">Open</ejs-button>

        <ejs-dialog :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='content' showCloseIcon=true :target='target' width='500px' :open="dialogOpen"
            :close="dialogClose">
        </ejs-dialog>
    </div> 
    <div id="action-description">
        <p>
            This example demonstrates the default rendering of the dialog component with minimum configuration. 
            Click close or press ESC  to close the dialog. Click “open” to show the dialog again, if it is closed.
        </p>
    </div>
    <div id="description">
        <p>The dialog component is used to display information and get input from the user. The dialog component is classified as modal and non-modal dialog depend on its interaction with parent application.</p>  
        <div>
            <ul>
                <li>Modal - It creates overlay that disable interaction with the parent application, and user should respond with modal before continuing with other applications.</li>
                <li>Non-modal - It does not prevent user interaction with parent application.</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style>
    .e-btn-hide {
	    display: none;
	}
    /* custom code start */
	#defaultDialog {
	    left:23%;
	}
    .control-section {
        height: 100%;
        min-height: 350px;
    }
    
    .dlgbtn {
        margin-right: 10px;
    }
    #target {
        height: 100%;
        min-height: 350px;
    }
    @media screen and (min-width: 150px) and (max-width: 480px) {
        .control-section {
            margin-bottom: 30px;
        }
        .control-wrapper {
            margin-bottom: 0px;
        }
    }
    /* custom code end */
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);
let OpenBtn = undefined;
export default Vue.extend({
    data: function() {
        return {
            target: '.control-section',
            header: 'About SYNCFUSION Succinctly Series',
            content: '<p>In the Succinctly series, Syncfusion created a robust, free library of more than 130 technical e-books formatted for PDF, Kindle, and EPUB. <br>'
            + '<br> The Succinctly series was born in 2012 out of a desire to provide concise technical e-books for software developers'
            + 'Each title in the Succinctly series is written by a carefully chosen expert and provides essential content in about 100 pages.</p>',
            animationSettings: { effect: 'None' },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'Learn More' } }],
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
            window.open('https://www.syncfusion.com/company/about-us');
        }
    }
});
</script>