<template>
<div class="control-section">
<div style="width:100%">
    <ejs-diagram style='display:block'  ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors= connectors :getNodeDefaults='getNodeDefaults'
                 :snapSettings='snapSettings' :constraints= 'constraints' :getConnectorDefaults= 'getConnectorDefaults'></ejs-diagram>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the connectors that are automatically re-routing or moving away if any shape found on the connectors path.
    </p>
</div>
<div id="description">
    <p>
        This example shows how the connectors are automatically re-routing or moving away on dragging a shape near it. This can be achieved by the constraints property of the diagram and connector.
    </p>
    <br>
</div>
</div>
</template>

<script>
import {
  DiagramComponent,
  LineRouting,
  ConnectorBridging,
  DiagramConstraints,
  PortVisibility
} from "@syncfusion/ej2-vue-diagrams";
import { Node, SnapConstraints } from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListComponent,
  DropDownList,
  ChangeEventArgs as DropDownChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";

let nodes = [
  {
    id: 'start', offsetX: 115, offsetY: 110,
    shape: { type: 'Flow', shape: 'Terminator' },
    style: { fill: '#D5535D' },
    ports: [{ id: 'port1', offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Hidden }],
    annotations: [{
      content: 'Start'
    }]
  },
  {
    id: 'process', offsetX: 115, offsetY: 255,
    shape: { type: 'Flow', shape: 'Process' },
    style: { fill: "#65B091" },
    annotations: [{
      content: 'Process'
    }]
  },
  {
    id: 'document', offsetX: 115, offsetY: 400,
    shape: { type: 'Flow', shape: 'Document' },
    style: { fill: "#5BA5F0" },
    ports: [{ id: 'port1', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Hidden }],
    annotations: [{
      content: 'Document'
    }]
  },
  {
    id: 'decision', offsetX: 390, offsetY: 110,
    shape: { type: 'Flow', shape: 'Decision' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'Decision'

    }]
  },
  {
    id: 'document2', offsetX: 390, offsetY: 255,
    shape: { type: 'Flow', shape: 'Document' },
    style: { fill: "#5BA5F0" },
    annotations: [{
      content: 'Document'

    }]
  },
  {
    id: 'end', offsetX: 390, offsetY: 400,
    shape: { type: 'Flow', shape: 'Terminator' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'End'

    }]
  },
  {
    id: 'process2', offsetX: 640, offsetY: 110,
    shape: { type: 'Flow', shape: 'Process' },
    style: { fill: "#65B091" },
    annotations: [{
      content: 'Process'
    }]
  },
  {
    id: 'card', offsetX: 640, offsetY: 255,
    shape: { type: 'Flow', shape: 'Card' },
    style: { fill: "#9A8AF7" },
    annotations: [{
      content: 'Card',
    }],
    ports: [
      { id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Hidden },
      { id: 'port2', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Hidden }
    ],
  }
];

let connectors = [
  {
    id: 'Connector1', sourceID: 'start', targetID: 'process',
  },
  {
    id: 'Connector2', sourceID: 'process', targetID: 'document'
  },
  {
    id: 'Connector3', sourceID: 'document', targetID: 'end',
  },
  {
    id: 'Connector4', sourceID: 'start', targetID: 'decision'
  },
  {
    id: 'Connector5', sourceID: 'decision', targetID: 'process2',
  },
  {
    id: 'Connector6', sourceID: 'process2', targetID: 'card',
  },
  {
    id: 'Connector7', sourceID: 'process', targetID: 'document2'
  },
  {
    id: 'Connector8', sourceID: 'document2', targetID: 'card',
  },
  {
    id: 'Connector9', sourceID: 'start', sourcePortID: "port1",
    targetID: 'card', targetPortID: 'port1'
  },
  {
    id: 'Connector10', sourceID: 'card', sourcePortID: 'port2',
    targetID: 'document', targetPortID: 'port1'
  },
];



let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
  return {
    // Define the width and height of the diagram
    width: "100%",
    height: "499px",
    // Snap settings to disable snapping
    snapSettings: { constraints: SnapConstraints.None },
    // Initial nodes and connectors data
    nodes: nodes,
    connectors: connectors,
    // Diagram constraints including bridging and line routing
    constraints: DiagramConstraints.Default | (DiagramConstraints.Bridging | DiagramConstraints.LineRouting),
    // Defines default properties for nodes
    getNodeDefaults: (obj, diagram) => {
      obj.height = 50;
      if (obj.id === 'decision') {
        obj.height = 70; // Adjust height for specific node types
      }
      obj.width = 120;
      obj.style = { strokeColor: 'transparent' }; // Node style with transparent stroke
      return obj;
    },
    // Defines default properties for connectors
    getConnectorDefaults: (connector) => {
      connector.type = 'Orthogonal'; // Connector type as Orthogonal
      connector.style = { strokeColor: '#707070 ', strokeWidth: 1.25 }; // Connector style with specific stroke
      connector.targetDecorator = { style: { fill: '#707070 ', strokeColor: '#707070 ' } }; // Connector target decorator style
      return connector;
    },
  };
},
provide: {
  diagram: [LineRouting, ConnectorBridging]
},
mounted: function() {
  // Initialize diagram instance and related components
  diagramInstance = this.$refs.diagramObj.ej2Instances;
  diagramInstance.fitToPage();
}
}

</script>