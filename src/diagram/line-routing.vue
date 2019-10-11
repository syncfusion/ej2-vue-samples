<template>
<div class="control-section">
<div style="width:100%">
    <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :nodes='nodes' :connectors= connectors :getNodeDefaults='getNodeDefaults'
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

<style>
.image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 75px;
  width: calc((100% - 12px) / 3);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 13px;
  font-weight: 500;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}

.property-panel-header {
  color: rgba(0, 0, 0, 0.7);
}
</style>

<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  LineRouting,
  DiagramConstraints,
  PortVisibility
} from "@syncfusion/ej2-vue-diagrams";
import { Node, SnapConstraints } from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListPlugin,
  DropDownList,
  ChangeEventArgs as DropDownChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DiagramPlugin);
Vue.use(DropDownListPlugin);

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

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "499px",
      snapSettings: { constraints: SnapConstraints.None },
      nodes: nodes,
      connectors: connectors,
      constraints: DiagramConstraints.Default | DiagramConstraints.LineRouting,
      //Defines the default node and connector properties
      getNodeDefaults: (obj, diagram) => {
        obj.height = 50;
        if(obj.id === 'decision') {
          obj.height = 70;
        }
        obj.width = 120;
        obj.style = { strokeColor: 'transparent' };
        return obj;
      },
      getConnectorDefaults: (connector) => {
        connector.type = 'Orthogonal';
        connector.style = { strokeColor: '#707070 ', strokeWidth: 1.25 };
        connector.targetDecorator = { style: { fill: '#707070 ', strokeColor: '#707070 ' } };
        return connector;
      },

    };
  },
  provide: {
    diagram: [LineRouting]
  },
   mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
  }
});

</script>