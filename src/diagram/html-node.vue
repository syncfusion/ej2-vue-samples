<template>
<div class="control-section">
  <div class="control-section">
    <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :nodes='nodes' :snapSettings='snapSettings' :created='created'></ejs-diagram>
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

<style>
</style>

<script lang="ts">
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

Vue.use(DiagramPlugin);
Vue.use(CircularGaugePlugin);

let diagramInstance: any;

let htmlcontent: string =
  '<div id="gauge" style="height:100%; width:100%; overflow:hidden;"> </div>';
let shape: HtmlModel = { type: "HTML", content: htmlcontent };
let node1: NodeModel = {
  id: "node",
  offsetX: 450,
  offsetY: 200,
  width: 300,
  height: 300,
  shape: shape
};

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "450px",
      nodes: [node1],
      created: (args: Object): void => {
        diagramInstance.fitToPage();
      },
      snapSettings: { constraints: 0 }
    };
  },
  mounted: function() {
    let diagramObj: any = document.getElementById("diagram");
    diagramInstance = diagramObj.ej2_instances[0];
    getHtmlContent();
  }
});

//Add Gauge control to Diagram.
function getHtmlContent(): HTMLElement {
  let div: HTMLElement = document.getElementById("gauge") as HTMLElement;
  let circularGauge: CircularGauge = new CircularGauge({
    load: (args?: ILoadedEventArgs) => {
      let selectedTheme: string = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      if (args)
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1));
    },
    axes: [
      {
        lineStyle: { width: 10, color: "transparent" },
        labelStyle: {
          position: "Inside",
          useRangeColor: false,
          font: { size: "12px", fontFamily: "Roboto", fontStyle: "Regular" }
        },
        majorTicks: { height: 10, offset: 5, color: "#9E9E9E" },
        minorTicks: { height: 0 },
        annotations: [
          {
            content:
              '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
            radius: "30%",
            angle: 0,
            zIndex: "1"
          },
          {
            content:
              '<div><span style="font-size:20px; color:#424242; font-family:Regular">65 MPH</span></div>',
            radius: "40%",
            angle: 180,
            zIndex: "1"
          }
        ],
        startAngle: 210,
        endAngle: 150,
        minimum: 0,
        maximum: 120,
        radius: "80%",
        ranges: [
          { start: 0, end: 40, color: "#30B32D" },
          { start: 40, end: 80, color: "#FFDD00" },
          { start: 80, end: 120, color: "#F03E3E" }
        ],
        pointers: [
          {
            value: 65,
            radius: "60%",
            color: "#757575",
            pointerWidth: 8,
            cap: { radius: 7, color: "#757575" },
            needleTail: { length: "18%", color: "#757575" }
          }
        ]
      }
    ]
  });
  circularGauge.appendTo("#gauge");
  return div;
}
</script>
