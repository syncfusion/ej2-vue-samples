<template>
<div class="control-section">
  <div id="custom-diagram" class="control-section">
    <ejs-diagram style='display:block' ref='diagramObj' id="diagram" :width='width' :backgroundColor='backgroundColor' :nodeTemplate='nodeTemplate' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
  <div id="action-description">
    <p>
       This sample shows how to host an element of HTML within a node. The expense tracker application can be created using chart and grid components.
    </p>
  </div>
  <div id="description">
    <p>
     This example illustrates how an HTML control is hosted inside a node. By setting <code>HTML</code> to the type property of the shape, the template node can be enabled. You can define the content to be hosted by using <code>NodeTemplate</code>.
    </p>
    <br>
  </div>
</div>
</template>
<style scoped>
/* custom code start*/
#custom-diagram .e-diagram-resize-handle.e-disabled {
  fill: #ced4da;
  opacity: 1;
  stroke: #fff;
  visibility: hidden;
}
#custom-diagram .e-grid .e-gridheader {
border: none;
}
/* custom code end*/
</style>
<script>
import { createApp } from "vue";
import {
  Diagram,
  DiagramComponent,
  NodeModel,NodeConstraints,
  HtmlModel
} from "@syncfusion/ej2-vue-diagrams";
import NodeTemplate from "./complex-template.vue";

let diagramInstance;
let shape = { type: 'HTML' };
  let constraints = NodeConstraints.Default & ~NodeConstraints.Resize & ~NodeConstraints.Rotate;
let nodes = [
{
            id: "node1Template",offsetX: 950, offsetY: 50, width: 250, height: 30, shape: shape, constraints: constraints
 },
{
           id: "node2Template",offsetX: 845, offsetY: 770, width: 512, height: 408, shape: shape, constraints: constraints
 },
{
           id: "node3Template",offsetX: 305, offsetY: 770, width: 512, height: 408, shape: shape, constraints: constraints
 },
{
           id: "node4Template", offsetX: 575, offsetY: 320, width: 1050, height: 450, shape: shape, constraints: constraints
 },
 {
    id: 'node5', offsetX: 150, offsetY: 50, width: 250, height: 30, style: { fill: 'transparent', strokeColor: 'transparent' },
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
    annotations: [{
      content: "EXPENSE TRACKER",
      style: { fontSize: 16, color: "#797979", bold: true }
    }]
  }
]

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
      nodeTemplate: function () {
        return { template: createApp({}).component('nodeTemplate', NodeTemplate) };
      },
      width: "100%",
      height: "1000px",
      nodes: nodes,
      backgroundColor:'#f5f5f5'
    };
  }
}

</script>
