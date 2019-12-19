<template>
  <div>
    <div class="col-lg-12 control-section code-editor">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='outerSplitter' ref="splitterObj" orientation='Vertical' class='splitterContent' width='100%' height='400px'>
                    <e-panes>
                        <e-pane size="53%" min ="30%" :content='paneContent' ></e-pane>
                        <e-pane :content='pane4Content'></e-pane>
                    </e-panes>
            </ejs-splitter>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the splitter control that is used to design code editor-like application using multiple panes.
            You can resize its panes vertically as well as horizontally. 
        </p>
    </div>

    <div id="description">
        <p>
            The Splitter is used to design code editor-like application using multiple panes.
            In this code editor layout, display HTML, CSS, and JavaScript (JS) code as horizontal panes at the top and output of 
            sample at the bottom pane.
        </p>
    </div>
</div>
</template>
<style>
        .code-editor #code-text {
            margin-left: 5px;
        }
        .code-editor .code-preview {
            margin-top: 15px;
            font-size: 12px;
        }
        /* custom code start */
        .code-editor #target {
            margin: 20px auto;
            max-width: 600px;
        }
        /* custom code end */
        .code-editor.control-section{            
            min-height: 370px;
            margin-bottom: 15px;
            margin-top: 10px;    
        }
    
        .code-editor .h3 {
            font-size: 14px;
            margin: 4px;
        }

        .code-editor .content {
            padding: 12px;
        }
        .code-editor .splitter-image {
            margin: 0 auto;
            display: flex;
            height: 115px;
            margin-top: 10px;
        }
        #Innersplitter {
            border: transparent;
        }
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { Splitter } from '@syncfusion/ej2-layouts';
import paneContent from "./code-editor-pane.vue";
import pane4Content from "./code-editor-pane4content.vue";

Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
            pane4Content: function () {
                return { template : pane4Content }
            },
            paneContent: function () {
                return { template : paneContent }
            }
        }
    }
});
</script>
