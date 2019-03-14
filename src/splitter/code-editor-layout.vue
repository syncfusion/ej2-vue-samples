<template>
  <div>
    <div class="col-lg-12 control-section code-editor">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='outerSplitter' ref="splitterObj" :created='onCreate' orientation='Vertical' class='splitterContent' width='100%' height='400px'>
                    <e-panes>
                        <e-pane size="53%" min ="30%" ></e-pane>
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
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { Splitter } from '@syncfusion/ej2-layouts';
import pane4Content from "./code-editor-pane4content.vue";

Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
            pane4Content: function () {
                return { template : pane4Content }
            },
            pane1Content: '<div><div class="content"><h3 class="h3">HTML</h3><div class="code-preview">&lt;<span>!DOCTYPE html></span><div>&lt;<span>html></span></div>' +
            '<div>&lt;<span>body></span></div>&lt;<span>div</span> id="custom-image"><div style="margin-left: 5px">&lt;<span>img</span> src="src/albert.png"></div>' +
            "<div>&lt;<span>div</span>&gt;</div><div>&lt;<span>/body></span></div><div>&lt;<span>/html></span></div></div></div></div>",
            pane2Content: '<div><div class="content"><h3 class="h3">CSS</h3><div class="code-preview"><span>img {</span><div id="code-text">margin:<span>0 auto;</span></div>' +
            '<div id="code-text">display:<span>flex;</span></div><div id="code-text">height:<span>70px;</span></div><span>}</span></div></div></div>',
            pane3Content: '<div><div class="content"><h3 class="h3">JavaScript</h3><div class="code-preview"><span>var </span>'
            + 'image = document.getElementById("custom-image");<div>image.addEventListener("click", function() {</div>'
            + '<div style="padding-left: 20px;">// Code block for click action</div><span> }</span></div></div></div>'
        }
    },
    methods: {
        onCreate: function () {
            document.getElementById('outerSplitter').querySelector('.e-pane-vertical').setAttribute('id', 'Innersplitter');
            this.splitterObj1 = new Splitter({
                height: '220px',
                paneSettings: [
                    { size: '29%', min: '23%', content: this.pane1Content },
                    { size: '20%', min: '15%', content: this.pane2Content },
                    { size: '35%', min: '35%', content: this.pane3Content }
                ],
                width: '100%'
            });
            this.splitterObj1.appendTo('#Innersplitter');
        }
    }
});
</script>
