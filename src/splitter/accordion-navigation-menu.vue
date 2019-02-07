<template>
  <div>
    <div class="col-lg-12 control-section accordion-view">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='splitter' ref="splitterObj" width='100%' height='288px'>
                    <e-panes>
                        <e-pane size="39%" min="30%" :content='pane1Content'></e-pane>
                        <e-pane size="65%" min="45%" ></e-pane>
                    </e-panes>
            </ejs-splitter>
            
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the Accordion control that can be integrated within the split pane.
            Select the product from the left pane to display the corresponding product details on the right pane.
        </p>
    </div>

    <div id="description">
        <p>
            The Splitter is the layout user interface (UI) control and allows integrating other JavaScript UI controls within its pane.
            In this sample, the Splitter control is used to design navigation menu-like application using JavaScript Accordion control.
            The Accordion control is integrated within left pane to display the product menu and selected product details on right pane.               
        </p>
    </div>
</div>
</template>
<style>
    .accordion-view #content {
        padding: 18px;
    }
    .accordion-view #target {
        margin: 20px auto;
        max-width: 600px;
    }
    .accordion-view.control-section{            
        min-height: 370px;   
    }
    .accordion-view .content {
        padding: 9px;
    }
    .accordion-view #splitter .e-accordion .e-acrdn-item .e-acrdn-panel .e-acrdn-content {
        padding: 0px;
    }
    .accordion-view #splitter .e-accordion, .accordion-view #splitter .e-accordion .e-acrdn-item.e-select, .accordion-view #splitter .e-accordion .e-acrdn-item.e-selected.e-select > .e-acrdn-header {
        border: none;
    }
    .accordion-view #splitter .e-acrdn-header-content {
        display: block;
        text-decoration: none;
    }
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import pane1Content from "./accordion-pane1-content.vue";

Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
            pane1Content: function () {
                return { template : pane1Content }
            },
        }
    }
});
</script>