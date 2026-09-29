<template>
  <div class="col-lg-12 control-section">
    <div id="wrapper-diagram" style="width:100%">
      <ejs-diagram
        ref="diagramObject"
        id="diagram"
        :width="width"
        :height="height"
        :nodes="nodes"
        :connectors="connectors"
        :snapSettings="snapSettings"
        :tool="tool"
        :load="load"
        :created="created"
      ></ejs-diagram>
    </div>
    <div id="action-description">
      <p>
        This sample provides an interactive visualization of a neural network architecture using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component. It displays multi-layered networks with configurable neurons, connections, and data flow patterns.
      </p>
    </div>
    <div id="description">
      <p>
        This multi-layered neural network visualizer allows users to explore input, hidden, and output layers with configurable neurons. Connections clearly display weight values—positive in blue, negative in red—with thickness indicating magnitude. Interactive tooltip provide detailed information.
      </p>
    </div>
  </div>
</template>

<script>
import {
  SnapConstraints,
  DiagramTools,
  NodeConstraints,
  ConnectorConstraints,
} from "@syncfusion/ej2-vue-diagrams";
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

// --- Neural net diagram utility functions ---

const layerSizes = [3, 5, 4, 2];
const layerNames = [
  "Input Layer",
  "Hidden Layer 1",
  "Hidden Layer 2",
  "Output Layer",
];
const layerColors = ["#0087EA", "#FE871F", "#7925E5", "#04AE45"];
const strokeColors = layerColors;
const nodeLabels = [
  ["Feature 1", "Feature 2", "Feature 3"],
  ["H1-1", "H1-2", "H1-3", "H1-4", "H1-5"],
  ["H2-1", "H2-2", "H2-3", "H2-4"],
  ["Output 1", "Output 2"],
];

// Utility for connection styling based on weight
function getConnectionColor(weight) {
  return weight >= 0 ? "#2196f3" : "#f44336";
}
function getConnectionWidth(absWeight) {
  return Math.max(1, Math.min(3, absWeight * 3));
}

// Returns array of label panel nodes
function makeLayerLabelNode(i) {
  var color = layerColors[i];
  return {
    id: "label_" + i,
    offsetX: 100 + i * 250,
    offsetY: 50,
    width: 150,
    height: 40,
    style: { fill: "transparent", strokeColor: "transparent" },
    annotations: [
      {
        template:
          `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;">` +
          `<div style="width:12px;height:12px;border-radius:6px;background:${color};margin-right:10px;"></div>` +
          `<span style="font-weight:bold;font-size:14px;color:#495057;">${layerNames[i]}</span>` +
          `</div>`,
      },
    ],
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
  };
}

// Returns a single neuron node (ellipse)
function makeNeuronNode(l, n) {
  var layerName = layerNames[l];
  var nodeLabel = nodeLabels[l][n];
  return {
    id: "neuron_" + l + "_" + n,
    width: 70,
    height: 70,
    offsetX: 100 + l * 250,
    offsetY: 120 + ((5 - layerSizes[l]) * 100) / 2 + n * 100,
    style: { fill: layerColors[l], strokeColor: strokeColors[l], strokeWidth: 2 },
    shape: { type: "Basic", shape: "Ellipse" },
    annotations: [
      {
        content: nodeLabel,
        style: { fontSize: 12, color: "white", bold: true },
      },
    ],
    tooltip: {
      content:
        `<div style="padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;">
          <div style="font-weight:bold;font-size:13px;margin-bottom:4px;">
            🧠 Neuron Information
          </div>
          <hr style="margin:2px 0 5px 0;"/>
          <div style="font-size:13px;margin-bottom:2px;">
            <span style="font-weight:bold;">Layer:</span>
            <span>${layerName}</span>
          </div>
          <div style="font-size:13px;">
            <span style="font-weight:bold;">Neuron:</span>
            <span>${nodeLabel}</span>
          </div>
        </div>`,
      position: "TopCenter",
    },
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
  };
}

// Returns a single connector with tooltip
function makeConnector(l, n, m, weight) {
  var absWeight = Math.abs(weight);
  var weightColor = weight >= 0 ? "#2ecc71" : "#e74c3c";
  var src = "neuron_" + l + "_" + n;
  var tgt = "neuron_" + (l + 1) + "_" + m;
  return {
    id: "conn_" + l + "_" + n + "_" + m,
    sourceID: src,
    targetID: tgt,
    type: "Straight",
    style: {
      strokeColor: getConnectionColor(weight),
      strokeWidth: getConnectionWidth(absWeight),
      opacity: 0.7,
    },
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: getConnectionColor(weight),
        strokeColor: getConnectionColor(weight),
      },
    },
    annotations: [
      {
        content: String(weight),
        style: { fontSize: 13, color: "#495057", fill: "white" },
      },
    ],
    tooltip: {
      content:
        `<div style="padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;">
          <div style="font-weight:bold;font-size:13px;margin-bottom:4px;">
            🔗 Connection Details
          </div>
          <hr style="margin:2px 0 5px 0;"/>
          <div style="font-size:13px;margin-bottom:2px;">
            <span style="font-weight:bold;">Weight:</span>
            <span style="color:${weightColor};font-weight:bold;">${weight}</span>
          </div>
          <div style="font-size:13px;margin-bottom:1px;">
            <span style="font-weight:bold;">From:</span>
            <span>${src}</span>
          </div>
          <div style="font-size:13px;">
            <span style="font-weight:bold;">To:</span>
            <span>${tgt}</span>
          </div>
        </div>`,
      position: "TopCenter",
    },
    constraints: ConnectorConstraints.Default | ConnectorConstraints.Tooltip,
  };
}

// Deterministic random for demo weights
function seededRandom() {
  let s = 42;
  return function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
}

export default {
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data: function () {
    // Build neural net node and connector arrays
    let nodes = [];
    let connectors = [];

    // Layer labels
    for (let i = 0; i < layerNames.length; i++) nodes.push(makeLayerLabelNode(i));
    // Neurons
    for (let l = 0; l < layerSizes.length; l++)
      for (let n = 0; n < layerSizes[l]; n++) nodes.push(makeNeuronNode(l, n));

    // Reproducible weights
    let random = seededRandom();
    for (let l = 0; l < layerSizes.length - 1; l++) {
      for (let n = 0; n < layerSizes[l]; n++) {
        for (let m = 0; m < layerSizes[l + 1]; m++) {
          let weight = Math.round((random() * 2 - 1) * 100) / 100;
          connectors.push(makeConnector(l, n, m, weight));
        }
      }
    }

    return {
      width: "100%",
      height: 590,
      nodes: nodes,
      connectors: connectors,
      snapSettings: { constraints: SnapConstraints.None },
      tool: DiagramTools.ZoomPan,
      diagramCreated: false,
    };
  },
  methods:{
    created() {
      this.diagramCreated = true;
    },
    load() {
      if (this.diagramCreated) {
        let diagram = this.$refs.diagramObject.ej2Instances;
        diagram.fitToPage();
      }
    },
  },
  mounted () {
    // Diagram fit-to-page on mount
    this.$nextTick(() => {
        let diagram = this.$refs.diagramObject.ej2Instances;
        diagram.fitToPage();
    });
  },
};
</script>