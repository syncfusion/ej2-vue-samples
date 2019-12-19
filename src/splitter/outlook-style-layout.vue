<template>
  <div>
    <div class="col-lg-12 control-section outlook-style">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='splitter' ref="splitterObj" width='100%' height='498px' :resizing='onSplitterResize'>
                    <e-panes>
                        <e-pane size="28%" min="27%" :content='pane1Content'></e-pane>
                        <e-pane size="33%" min ="23%" :content='pane2Content'></e-pane>
                        <e-pane size="37%" min ="30%" :content='pane3Content'></e-pane>
                    </e-panes>
            </ejs-splitter>
            
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the splitter control that is used to design outlook-like application using multiple horizontal panes. 
            You can resize its panes horizontally to increase dimension. 
        </p>
    </div>

    <div id="description">
        <p>
            The splitter control is used to create outlook-like user interface application using multiple panes with horizontal orientation. 
            To create outlook-style user interface, use TreeView, ListView, and RichTextEditor controls within split panes. 
            The TreeView control is used to display mail folders at left pane and ListView to display details of mail items, and 
            RichTextEditor to create new mail.
        </p>
    </div>
</div>
</template>
<style>
    /* custom code start */
    .outlook-style #target {
        margin: 20px auto;
        max-width: 820px;
    }
    /* custom code end */
    .outlook-style #discard {
        margin-left: 7px;
    }
    .outlook-style table {
        width: 100%;
        border: none;
    }
    .outlook-style td {
        padding: 2px;
    }
    .outlook-style.control-section{            
        min-height: 370px;  
    }
    .outlook-style .e-treeview .e-list-text {
        width: 100%;
    }
    .outlook-style #groupedList.e-listview .e-list-group-item {
        height: 0;
    }
    .outlook-style #splitter1 .settings.e-list-wrapper.e-list-multi-line.e-list-avatar {
        padding: 15px;
    }
    .outlook-style #buttonSection {
        padding: 7px;
    }
    .outlook-style #createpostholder {
        padding-left: 3px;
        padding-right: 4px;
    }
	
	.outlook-style #splitter #template ul.e-list-parent.e-ul {
		padding: 0 0 0 16px;
	}
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { RichTextEditorPlugin, Link, Image, HtmlEditor, Toolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import pane1Content from "./outlook-pane1-content.vue";
import pane2Content from "./outlook-pane2-content.vue";

let rteobj = undefined;

Vue.use(TextBoxPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(ButtonPlugin);
Vue.use(SplitterPlugin);

var pane3Content = Vue.component("pane3", {
  template: `<div>
    <div style="width: 100%; padding: 15px;">
        <table>
            <tr>
                <td><ejs-button cssClass='e-flat e-outline' isprimary=true >To...</ejs-button></td>
                <td><ejs-textbox id="firstname" /></td>
            </tr>
            <tr>
                <td><ejs-button cssClass='e-flat e-outline'>Cc...</ejs-button></td>
                <td><ejs-textbox id="lastname" /></td>
            </tr>
            <tr>
                <td><div id="subject-text">Subject</div></td>
                <td><ejs-textbox id="subject" /></td>
            </tr>
        </table>
    </div>
    <div class="forum">
        <div id="createpostholder">
            <ejs-richtexteditor id="outlook_rte" ref="rteInstance" height='262px'></ejs-richtexteditor>
            <div id="buttonSection">
                <ejs-button :isPrimary="isPrimary" id="send" >Send</ejs-button>
                <ejs-button id="discard" >Discard</ejs-button>
            </div>
        </div>
    </div>
</div>`,
  data() {
    return {
      isPrimary: true
    };
  },
    mounted() {
        bus.$emit("rteInst", this.$refs.rteInstance);
        this.$nextTick(function () {
            this.$refs.rteInstance.ej2_instances.refresh();
        })
    },
    provide:{
        richtexteditor:[Link, Image, HtmlEditor, Toolbar]
    }
});

var bus = new Vue({});

export default Vue.extend({
    data: function() {
        return {
            pane1Content: function () {
                return { template : pane1Content }
            },
            pane2Content: function () {
                return { template : pane2Content }
            },
            pane3Content: function () {
                return { template : pane3Content }
            }
        }
    },
    mounted() {
        bus.$on('rteInst', instance => {
            rteobj = instance.ej2Instances;
        });
    },
    methods: {
        onSplitterResize: function() {
            rteobj.refreshUI();
        }
    }
});
</script>
