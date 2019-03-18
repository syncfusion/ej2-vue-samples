<template>
  <div>
    <div class="col-lg-12 control-section outlook-style">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='splitter' ref="splitterObj" width='100%' height='498px'>
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
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import pane1Content from "./outlook-pane1-content.vue";
import pane2Content from "./outlook-pane2-content.vue";
import pane3Content from "./outlook-pane3-content.vue";


Vue.use(SplitterPlugin);

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
    }
});
</script>
