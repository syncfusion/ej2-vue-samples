<template>
  <ejs-splitter id="innerSplitter" :separatorSize="3" :orientation="orient">
    <e-panes>
      <e-pane size="50%" :collapsible="true" :content="topPaneContent"></e-pane>
      <e-pane :collapsible="true" :content="bottomPaneContent"></e-pane>
    </e-panes>
  </ejs-splitter>
</template>
<script>
import Vue from "vue";
import { SplitterPlugin } from "@syncfusion/ej2-vue-layouts";
Vue.use(SplitterPlugin);

var topContent = Vue.component("pane1", {
  template: `<div class="content">
                <a href="https://www.syncfusion.com/ebooks/data_capture_and_extraction_with_c_sharp_succinctly" target="_blank">Data Capture and Extraction with C# Succinctly</a>
                <p>Capturing and extracting information is one of the most important tasks a developer can perform, and making this task more
                    engaging without relying entirely on specialized tools is an efficient way to improve productivity. 
                    In Data Capture and Extraction with C# Succinctly, author Ed Freitas guides readers toward getting more out of C# in minimal time.
                    Email has become a pillar of our modern and connected society, and it now serves as a primary means of communication. Because each email 
                    is filled with valuable information, data extraction has emerged as a worthwhile skill set for developers in today’s business world.
                </p>
            </div>`,
  data() {
    return {
      data: {}
    };
  }
});

var bottomContent = Vue.component("pane2", {
  template: `<div class="content">
                    <a href="https://www.syncfusion.com/ebooks/spark" target="_blank">Spark Succinctly</a>
                    <p>Mastering big data requires an aptitude at every step of information processing. 
                        Post-processing, one of the most important steps, is where you find Apache Spark frequently employed. 
                        Spark Succinctly, by Marko Svaljek, addresses Spark’s use in the ultimate step in handling big data. This e-book, the 
                        third installment in Svaljek’s IoT series, teaches the basics of using Spark and explores how to work with RDDs, Scala and
                        Python tasks, JSON files, and Cassandra.Many of the leading companies in the world today face the problem of big data.
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
      orient: "Vertical",
      topPaneContent: function() {
        return { template: topContent };
      },
      bottomPaneContent: function() {
        return { template: bottomContent };
      }
    };
  },
  methods: {}
});
</script>
