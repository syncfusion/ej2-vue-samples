<template>
  <div>
    <div class="col-lg-12 control-section splitter-expand">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='outerSplitter' :separatorSize=3 class='splitterContent' width='100%' height='385px'>
                    <e-panes>
                        <e-pane size="48%" :collapsible = true :content='leftPaneContent'></e-pane>
                        <e-pane :collapsible = true :content='rightPaneContent'></e-pane>
                    </e-panes>
            </ejs-splitter>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the expand and collapse functionalities of the Splitter control. To expand or collapse the panes,
            hover the mouse over the separator (divider) bar and click the corresponding icon to expand or collapse pane. 
        </p>
    </div>

    <div id="description">
        <p>
            The splitter (split container) allows expanding and collapsing its split panes. 
            You can control this behavior using the paneSettings Collapsible property. 
            The collapsible behavior can be enabled for specific pane alone. 
        </p>
        <p>
            When you hover the mouse over the pane's separator (divider), the expand and collapse icons will be visible. 
            While clicking the icon, the corresponding pane is expanded or collapsed. 
            The remaining panes automatically adjust its dimension based on the expanded or collapsed panes. 
            These icons are visible by default in mobile devices.
        </p>
    </div>
</div>
</template>
<style>
    .splitter-expand #target {
        margin: 20px auto;
        max-width: 600px;
    }
    .splitter-expand.control-section{            
        min-height: 370px;
        margin-bottom: 15px;
        margin-top: 10px;    
    }
    .splitter-expand .content {
        padding: 12px;
    }
    /* styles to hide scroll bars */
    .splitter-expand .e-pane.e-pane-horizontal.e-scrollable::-webkit-scrollbar,
    .splitter-expand .e-pane.e-pane-vertical.e-scrollable::-webkit-scrollbar {
        display: none; 
    }

    .splitter-expand .e-pane.e-pane-horizontal.e-scrollable, .splitter-expand .e-pane.e-pane-vertical.e-scrollable {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import rightPaneContent from "./expand-collapse-content.vue";

Vue.use(SplitterPlugin);

var leftPaneContent = Vue.component("lpane1", {
  template: `<div class="content">
        <a href="https://www.syncfusion.com/ebooks/neuralnetworks" target="_blank">Neural Networks Using C# Succinctly</a>
        <p>Neural networks are an exciting field of software development used to calculate outputs from input data. 
        While the idea seems simple enough, the implications of such networks are staggering—think optical character recognition, 
        speech recognition, and regression analysis. With Neural Networks Using C# Succinctly by James McCaffrey, you’ll learn 
        how to create your own neural network to solve classification problems, or problems where the outcomes can only be one of 
        several values. <br/><br/>Learn about encoding and normalizing data, activation functions and how to choose the right one, and ultimately 
        how to train a neural network to find weights and bias values that provide accurate predictions.
        An artificial neural network (sometimes abbreviated ANN, or shortened to just "neural network" when the context is clear) is 
        a software system that loosely models biological neurons and synapses. Before explaining exactly how neural networks work, it is 
        useful to understand what types of problems they can solve.
    </p>
    </div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default Vue.extend({
    data: function() {
        return {
            leftPaneContent: function () {
                return { template : leftPaneContent }
            },
            rightPaneContent: function () {
                return { template : rightPaneContent }
            }
        }
    }
});
</script>
