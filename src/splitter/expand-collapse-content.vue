<template>
  <ejs-splitter id="innerSplitter" :separatorSize="3" :orientation="orient">
    <e-panes>
      <e-pane size="50%" :collapsible="true" :content="topPaneContent"></e-pane>
      <e-pane :collapsible="true" :content="bottomPaneContent"></e-pane>
    </e-panes>
  </ejs-splitter>
</template>
<script>
import { createApp } from "vue";
import { SplitterComponent, PanesDirective, PaneDirective } from "@syncfusion/ej2-vue-layouts";

var topContent = {
  template: `<div class="content">
                <a href="https://www.syncfusion.com/ebooks/data_capture_and_extraction_with_c_sharp_succinctly" target="_blank">Data Capture and Extraction with C# Succinctly<sup>®</sup></a>
                <p>Capturing and extracting information is one of the most important tasks a developer can perform, and making this task more
                    engaging without relying entirely on specialized tools is an efficient way to improve productivity. 
                    In Data Capture and Extraction with C# Succinctly<sup>®</sup>, author Ed Freitas guides readers toward getting more out of C# in minimal time.
                    Email has become a pillar of our modern and connected society, and it now serves as a primary means of communication. Because each email 
                    is filled with valuable information, data extraction has emerged as a worthwhile skill set for developers in today’s business world.
                </p>
            </div>`,
  data() {
    return {
      data: {}
    };
  }
};

var bottomContent = {
  template: `<div class="content">
                    <a href="https://www.syncfusion.com/ebooks/spark" target="_blank">Spark Succinctly<sup>®</sup></a>
                    <p>Mastering big data requires an aptitude at every step of information processing. 
                        Post-processing, one of the most important steps, is where you find Apache Spark frequently employed. 
                        Spark Succinctly<sup>®</sup>, by Marko Svaljek, addresses Spark’s use in the ultimate step in handling big data. This e-book, the 
                        third installment in Svaljek’s IoT series, teaches the basics of using Spark and explores how to work with RDDs, Scala and
                        Python tasks, JSON files, and Cassandra.Many of the leading companies in the world today face the problem of big data.
                    </p>
                </div>`,
  data() {
    return {
      data: {}
    };
  }
};

export default {
  components: {
    'ejs-splitter': SplitterComponent,
    'e-panes': PanesDirective,
    'e-pane': PaneDirective
  },
  data: function() {
    return {
      orient: "Vertical",
      topPaneContent: function() {
        return { template: createApp({}).component('pane1', topContent) };
      },
      bottomPaneContent: function() {
        return { template: createApp({}).component('pane2', bottomContent) };
      }
    };
  },
  methods: {}
};
</script>
