<template>

<div class="col-lg-12 control-section">
    <div id="wrapper" style="width:100%">
            <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height' :nodes='nodes' :snapSettings='snapSettings' :tool='tool'></ejs-diagram>
    </div>
<div id="action-description">
    <p>
        This sample visualizes classifications of data science using Venn diagrams. Diagram nodes and annotations are used to define Venn diagrams. Read only mode is enabled in this example.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to create a Venn diagram using diagram control. In this example, zoom and pan options are enabled.
        The <code>tool</code> property of the diagram control allows you to enable/disable zoom and pan options.
    </p>
    <br>
</div>
</div>

</template>
<style>
</style>
<script>
import Vue from "vue";
import {
  BasicShapeModel,
  SnapConstraints,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import {
  DiagramPlugin,
  Diagram,
  NodeModel
} from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
let diagramInstance;
//Initialize shape
let shape = { type: "Basic", shape: "Ellipse" };
//Initialize Diagram Nodes
let nodes = [
  {
    id: "datascience",
    offsetX: 450,
    offsetY: 232,
    width: 400,
    height: 400,
    annotations: [
      {
        content: "Data Science",
        offset: { x: 0.5, y: 0.1 }
      }
    ],
    shape: shape,
    style: { fill: "#f2f2f2", strokeColor: "#acacac", strokeWidth: 1 }
  },
  {
    id: "trignometry",
    offsetX: 515,
    offsetY: 205,
    width: 200,
    height: 200,
    shape: shape,
    annotations: [
      {
        content: "Trignometry",
        offset: { x: 0.5, y: 0.4 },
        horizontalAlignment: "Left"
      },
      { content: "Thesis", offset: { x: 0.45, y: 0.8 } }
    ],
    style: { fill: "#feb42f", opacity: 0.2, strokeColor: "#feb42f" }
  },
  {
    id: "expertise",
    offsetX: 445,
    offsetY: 290,
    width: 200,
    height: 200,
    shape: shape,
    annotations: [
      {
        content: "Expertise",
        offset: { x: 0.5, y: 0.7 },
        verticalAlignment: "Top"
      }
    ],
    style: { fill: "#6acbd4", opacity: 0.2, strokeColor: "#6acbd4" }
  },
  {
    id: "programming",
    offsetX: 388,
    offsetY: 205,
    width: 200,
    height: 200,
    annotations: [
      {
        content: "Programming ",
        offset: { x: 0.5, y: 0.4 },
        horizontalAlignment: "Right"
      },
      {
        content: "Assembly",
        offset: { x: 0.7, y: 0.35 },
        horizontalAlignment: "Left"
      },
      {
        content: "Horizon",
        offset: { x: 0.7, y: 0.6 },
        horizontalAlignment: "Left"
      },
      { content: "Middleware", offset: { x: 0.5, y: 0.8 } }
    ],
    shape: shape,
    style: { fill: "#ed1d79", opacity: 0.2, strokeColor: "#ed1d79" }
  }
];

export default Vue.extend({
  data: function() {
    return {
      //Initializes diagram control
      width: "100%",
      height: 580,
      nodes: nodes,
      snapSettings: { constraints: SnapConstraints.None },
      tool: DiagramTools.ZoomPan
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObject.ej2Instances;
    diagramInstance.fitToPage();
  }
});
</script>