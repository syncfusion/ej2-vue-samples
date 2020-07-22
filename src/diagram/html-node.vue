<template>
<div class="control-section">
  <div class="control-section">
    <ejs-diagram style='display:block' ref='diagramObj' id="diagram" :width='width' :nodeTemplate='nodeTemplate'  :height='height' :nodes='nodes' :snapSettings='snapSettings'></ejs-diagram>
  </div>
  <div id="action-description">
    <p>
      This sample demonstrates how to host a HTML element inside a node. In this example, a Gauge control is hosted inside a Html Node.
    </p>
  </div>
  <div id="description">
    <p>
      This example shows how to host a control inside a node. The <code>shape</code> property of the node can be used to host HTML content inside a node. The
      <code>content</code> property of the shape allows you to define the content to be hosted.
    </p>
    <br>
  </div>
</div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import {
  Diagram,
  DiagramPlugin,
  NodeModel,
  HtmlModel
} from "@syncfusion/ej2-vue-diagrams";
import {
  CircularGauge,
  ILoadedEventArgs,
  GaugeTheme,
  CircularGaugePlugin
} from "@syncfusion/ej2-vue-circulargauge";
import NodeTemplate from "./complex-template.vue";

Vue.use(DiagramPlugin);
Vue.use(CircularGaugePlugin);

let diagramInstance;

let node1 =   {
            id: "node1Template",
           width: 300,
           height: 300,
            offsetX: 600,
            offsetY: 200,
            shape: {
                type: 'HTML'
            }
    }

export default Vue.extend({
  data: function() {
    return {
      nodeTemplate: function () {
        return { template: NodeTemplate };
      },
      width: "100%",
      height: "450px",
      nodes: [node1],
      snapSettings: { constraints: 0 }
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
  }
});


</script>
