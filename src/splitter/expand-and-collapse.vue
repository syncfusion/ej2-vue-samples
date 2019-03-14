<template>
  <div>
    <div class="col-lg-12 control-section splitter-expand">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='outerSplitter' ref="splitterObj" :separatorSize=3 :created='onCreate' class='splitterContent' width='100%' height='385px'>
                    <e-panes>
                        <e-pane size="48%" :collapsible = true :content='leftPaneContent'></e-pane>
                        <e-pane :collapsible = true></e-pane>
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
import { Splitter } from '@syncfusion/ej2-layouts';
import leftPaneContent from "./expand-collapse-content.vue";

Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
            leftPaneContent: function () {
                return { template : leftPaneContent }
            },
            topPaneContent: `<div class="content">
                    <a href="https://www.syncfusion.com/ebooks/data_capture_and_extraction_with_c_sharp_succinctly" target="_blank">Data Capture and Extraction with C# Succinctly</a>
                    <p>Capturing and extracting information is one of the most important tasks a developer can perform, and making this task more
                        engaging without relying entirely on specialized tools is an efficient way to improve productivity. 
                        In Data Capture and Extraction with C# Succinctly, author Ed Freitas guides readers toward getting more out of C# in minimal time.
                        Email has become a pillar of our modern and connected society, and it now serves as a primary means of communication. Because each email 
                        is filled with valuable information, data extraction has emerged as a worthwhile skill set for developers in today’s business world.
                    </p>
                </div>`,
            bottomPaneContent: `<div class="content">
                    <a href="https://www.syncfusion.com/ebooks/spark" target="_blank">Spark Succinctly</a>
                    <p>Mastering big data requires an aptitude at every step of information processing. 
                        Post-processing, one of the most important steps, is where you find Apache Spark frequently employed. 
                        Spark Succinctly, by Marko Svaljek, addresses Spark’s use in the ultimate step in handling big data. This e-book, the 
                        third installment in Svaljek’s IoT series, teaches the basics of using Spark and explores how to work with RDDs, Scala and
                        Python tasks, JSON files, and Cassandra.Many of the leading companies in the world today face the problem of big data.
                    </p>
                </div>`
        }
    },
    methods: {
        onCreate: function () {
            document.getElementById('outerSplitter').querySelectorAll('.e-pane-horizontal')[1].setAttribute('id', 'Innersplitter');
            this.splitterObj1 = new Splitter({
                paneSettings: [
                    { collapsible: true, size: '50%', content: this.topPaneContent },
                    { collapsible: true, content: this.bottomPaneContent }
                ],
                separatorSize: 3,
                orientation: 'Vertical'
            });
            this.splitterObj1.appendTo('#Innersplitter');
        }
    }
});
</script>
