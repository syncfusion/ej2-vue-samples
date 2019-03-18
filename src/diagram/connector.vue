<template>
<div class="control-section">
<div class="col-lg-9 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width'
         :height='height' :nodes='nodes' :connectors='connectors' :layout='layout'
         :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
         :snapSettings='snapSettings' :setNodeTemplate='setNodeTemplate'></ejs-diagram>
    </div>
</div>
<div class="col-lg-3 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div class="row" id="appearance">
        <div class="row row-header">
            Appearance
        </div>
        <div class="row" style="padding-top: 8px">
            <div class="image-pattern-style" id="straightConnector" style="background-image: url(./src/diagram/Images/connector/Connectors_1.png); margin-right: 3px">
            </div>
            <div class="image-pattern-style" id="orthogonalConnector" style="background-image: url(./src/diagram/Images/connector/Connectors_2.png); margin: 0px 3px">
            </div>
            <div class="image-pattern-style" id="bezierConnector" style="background-image: url(./src/diagram/Images/connector/Connectors_3.png); margin-left: 3px">
            </div>
        </div>
        <div class="row" style="padding-top: 8px">
            <div class="image-pattern-style" id="straightConnectorWithStroke" style="background-image: url(./src/diagram/Images/connector/Connectors_4.png); margin-right: 3px">
            </div>
            <div class="image-pattern-style" id="orthogonalConnectorWithStroke" style="background-image: url(./src/diagram/Images/connector/Connectors_5.png); margin: 0px 3px">
            </div>
            <div class="image-pattern-style" id="bezierConnectorWithStroke" style="background-image: url(./src/diagram/Images/connector/Connectors_6.png); margin-left: 3px">
            </div>
        </div>
        <div class="row" style="padding-top: 8px">
            <div class="image-pattern-style" id="straightConnectorWithDasharray" style="background-image: url(./src/diagram/Images/connector/Connectors_7.png); margin-right: 3px">
            </div>
            <div class="image-pattern-style" id="orthogonalConnectorWithDasharray" style="background-image: url(./src/diagram/Images/connector/Connectors_8.png); margin: 0px 3px">
            </div>
            <div class="image-pattern-style" id="bezierConnectorWithDasharray" style="background-image: url(./src/diagram/Images/connector/Connectors_9.png); margin-left: 3px">
            </div>
        </div>
        <div class="row" style="padding-top: 8px">
            <div class="image-pattern-style" id="cornerRadious" style="background-image: url(./src/diagram/Images/connector/Connectors_10.png); margin-right: 3px">
            </div>
            <div class="image-pattern-style" id="sourceDecorator" style="background-image: url(./src/diagram/Images/connector/Connectors_11.png); margin: 0px 3px">
            </div>
            <div class="image-pattern-style" id="sourceDecoratorWithDasharray" style="background-image: url(./src/diagram/Images/connector/Connectors_12.png); margin-left: 3px">
            </div>
        </div>
    </div>
    <div class="row" style="padding-top: 10px">
        <div class="row" style="padding-top: 8px">
          <!-- checkbox is used to enable or disable the connector interaction. -->
          <ejs-checkbox id="checked" :checked=false :label='label' :change='change'></ejs-checkbox>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes the data flow in a marketing process using predefined shapes and connectors. Different types of connectors and decorators are used to customize the appearance, path, and direction of the data flow.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to add connectors to connect the shapes and how to customize the appearance of the connectors.
        You can use the <code>style</code> property of the connector to customize its stroke style. You can use the
        <code>cornerRadius</code> property to add connectors with rounded corners.
    </p>

    <p>
        To change the appearance, click different styles in the property panel.
    </p>

    <p>
        Additionally, you can see how to lock the connectors to disable editing. The
        <code>constraints</code> property of connector enables/disables editing. 
        In this example, the shapes are automatically arranged using hierarchical tree layout.
    </p>

    <p style="font-weight: 500">Injecting Module</p>

    <p>
        Diagram component's features are segregated into individual feature-wise modules. To automatically arrange the shapes, we need to Inject <code>HierarchicalTree</code> module using <code>provide: { diagram: [HierarchicalTree] }</code> method.
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
  height: 45px;
  width: calc((100% - 13px) / 3);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 13px;
  font-weight: 500;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
}

.e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}
</style>

<script>
import Vue from "vue";
import {
  Node,
  TextElement,
  HierarchicalTree,
  ConnectorConstraints,
  Segments,
  StackPanel,
  PointPortModel,
  Connector,
  BasicShapeModel,
  SelectorConstraints,
  DiagramPlugin,
  Diagram,
  NodeModel,
  ConnectorModel,
  randomId,
  PortVisibility,
StrokeStyleModel
} from "@syncfusion/ej2-vue-diagrams";
import {
  CheckBox,
  ChangeEventArgs as CheckBoxChangeEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons/src/check-box/checkbox.component";

Vue.use(DiagramPlugin);
Vue.use(CheckBoxPlugin);

let diagramInstance;
let node;
let connector;

//Initialize shape
let shape = {
  type: "Basic",
  shape: "Rectangle",
  cornerRadius: 10
};
//Initialize Diagram Nodes
let nodes = [
  { id: "node1", annotations: [{ content: "Promotion" }] },
  { id: "node2", annotations: [{ content: "Lead" }] },
  { id: "node3", annotations: [{ content: "Account" }] },
  { id: "node4", annotations: [{ content: "Information" }] },
  { id: "node5", annotations: [{ content: "Opportunity" }] },
  { id: "node6", offsetX: 540, offsetY: 290, excludeFromLayout: true }
];

//Initialize Diagram connectors
let connectors = [
  { id: "connectr", sourceID: "node1", targetID: "node2" },
  {
    id: "connectr1",
    sourceID: "node2",
    sourcePortID: "port1",
    targetID: "node3",
    targetPortID: "portIn"
  },
  {
    id: "connectr2",
    sourceID: "node2",
    sourcePortID: "port2",
    targetID: "node4",
    targetPortID: "portIn"
  },
  {
    id: "connectr3",
    sourceID: "node2",
    sourcePortID: "port3",
    targetID: "node5",
    targetPortID: "portIn"
  },
  {
    id: "connectr4",
    sourceID: "node6",
    sourcePortID: "port4",
    targetID: "node3",
    targetPortID: "portOut"
  },
  {
    id: "connectr5",
    sourceID: "node6",
    sourcePortID: "port5",
    targetID: "node4",
    targetPortID: "portOut"
  },
  {
    id: "connectr7",
    sourceID: "node6",
    sourcePortID: "port6",
    targetID: "node5",
    targetPortID: "portOut"
  }
];

export default Vue.extend({
  data: function() {
    return {
      //Initializes diagram control
      width: "100%",
      height: 580,
      nodes: nodes,
      connectors: connectors,
      selectedItems: {
        constraints:
          SelectorConstraints.ConnectorSourceThumb |
          SelectorConstraints.ConnectorTargetThumb
      },
      //Configrues hierarchical tree layout
      layout: {
        type: "HierarchicalTree",
        orientation: "LeftToRight",
        verticalSpacing: 75,
        margin: { left: 30, right: 0, top: 0, bottom: 0 }
      },
      snapSettings: { constraints: 0 },
      //Sets the default values of nodes
      getNodeDefaults: (obj) => {
        if (obj.id !== "node1") {
          //Set ports
          obj.ports = getPorts(obj);
        }
        if (obj.id !== "node6") {
          obj.shape = shape;
          obj.width = 80;
          obj.style.strokeWidth = 2;
          obj.style.strokeColor = "#6F409F";
          obj.height = 35;
        }
      },
      //Sets the default values of connector
      getConnectorDefaults: (obj) => {
        obj.type = "Bezier";
        obj.style.strokeColor = "#6f409f";
        obj.style.strokeWidth = 2;
        obj.targetDecorator = {
          style: {
            strokeColor: "#6f409f",
            fill: "#6f409f"
          }
        };
      },
      //Customizes the content of the node
      setNodeTemplate: (obj) => {
        if (obj.id === "node6") {
          let canvas = new StackPanel();
          canvas.children = [];
          canvas.id = randomId();
          canvas.style.strokeWidth = 0;
          canvas.style.fill = "#e6e0eb";
          canvas.children.push(getTextElement("Events", "#a6a1e0"));
          canvas.children.push(getTextElement("Emails", "#db8ec9"));
          canvas.children.push(getTextElement("Calls", "#db8ec9"));
          canvas.children.push(getTextElement("Smart Contents", "#db8ec9"));
          return canvas;
        }
        return null;
      },
      change: (args) => {
        for (let i = 0; i < diagramInstance.connectors.length; i++) {
          connector = diagramInstance.connectors[i];
          if (connector.constraints) {
            if (args.checked) {
              connector.constraints &= ~(
                ConnectorConstraints.DragSourceEnd |
                ConnectorConstraints.DragTargetEnd |
                ConnectorConstraints.DragSegmentThumb
              );
              connector.constraints |= ConnectorConstraints.ReadOnly;
            } else {
              connector.constraints |=
                ConnectorConstraints.Default & ~ConnectorConstraints.ReadOnly;
            }
          }
          diagramInstance.dataBind();
        }
      },
      label: "Lock"
    };
  },
  provide: {
    diagram: [HierarchicalTree]
  },
  mounted: function() {
    //let diagramObj = document.getElementById("diagram");
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.updateViewPort();
    let obj = document.getElementById("appearance");
    //Click Event for Appearance of the layout.
    obj.onclick = (args) => {
      let target = args.target;
      let selectedElement = document.getElementsByClassName(
        "e-selected-style"
      );
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      if (target.className === "image-pattern-style") {
        switch (target.id) {
          case 'straightConnector':
            applyConnectorStyle(false, false, false, 'Straight', target, 1);
            break;
          case 'orthogonalConnector':
            applyConnectorStyle(false, false, false, 'Orthogonal', target, 1);
            break;
          case 'bezierConnector':
            applyConnectorStyle(false, false, false, 'Bezier', target, 1);
            break;
          case "straightConnectorWithStroke":
            applyConnectorStyle(false, false, false, "Straight", target);
            break;
          case "orthogonalConnectorWithStroke":
            applyConnectorStyle(false, false, false, "Orthogonal", target);
            break;
          case "bezierConnectorWithStroke":
            applyConnectorStyle(false, false, false, "Bezier", target);
            break;
          case "straightConnectorWithDasharray":
            applyConnectorStyle(true, false, false, "Straight", target);
            break;
          case "orthogonalConnectorWithDasharray":
            applyConnectorStyle(true, false, false, "Orthogonal", target);
            break;
          case "bezierConnectorWithDasharray":
            applyConnectorStyle(true, false, false, "Bezier", target);
            break;
          case "cornerRadious":
            applyConnectorStyle(false, false, true, "Orthogonal", target);
            break;
          case "sourceDecorator":
            applyConnectorStyle(false, true, false, "Straight", target);
            break;
          case "sourceDecoratorWithDasharray":
            applyConnectorStyle(true, true, false, "Straight", target);
            break;
        }
      }
    };
  }
});

//creation of the TextElement.
function getTextElement(text, color) {
  let textElement = new TextElement();
  textElement.width = 80;
  textElement.id = randomId();
  textElement.height = 35;
  textElement.content = text;
  textElement.style.fill = "#6f409f";
  textElement.style.color = "white";
  textElement.style.strokeColor = "#6f409f";
  textElement.cornerRadius = 5;
  textElement.margin = { top: 10, bottom: 10, left: 10, right: 10 };
  textElement.relativeMode = "Object";
  return textElement;
}

//creation of Port for Node.
function getPorts(obj)  {
  if (obj.id === "node2") {
    let node2Ports  = [
      {
        id: "port1",
        offset: { x: 1, y: 0.25 },
        visibility: PortVisibility.Hidden
      },
      {
        id: "port2",
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Hidden
      },
      {
        id: "port3",
        offset: { x: 1, y: 0.75 },
        visibility: PortVisibility.Hidden
      }
    ];
    return node2Ports;
  } else if (obj.id === "node6") {
    let node6Ports = [
      {
        id: "port4",
        offset: { x: 0, y: 0.46 },
        visibility: PortVisibility.Hidden
      },
      {
        id: "port5",
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Hidden
      },
      {
        id: "port6",
        offset: { x: 0, y: 0.54 },
        visibility: PortVisibility.Hidden
      }
    ];
    return node6Ports;
  } else {
    let ports = [
      {
        id: "portIn",
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Hidden
      },
      {
        id: "portOut",
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Hidden
      }
    ];
    return ports;
  }
}

//ConnectorStyle customization
function applyConnectorStyle(
  dashedLine,
  sourceDec,
  isRounded,
  type,
  target, strokeWidth
) {
    let connector;
    for (let i = 0; i < diagramInstance.connectors.length; i++) {
        connector = diagramInstance.connectors[i];
        (connector.style).strokeWidth = !strokeWidth ? 2 : strokeWidth;
        connector.type = type;
        connector.cornerRadius = isRounded ? 5 : 0;
        (connector.style).strokeDashArray = dashedLine ? '5,5' : '';
        if (sourceDec) {
            connector.sourceDecorator = {
                style: {
                    strokeColor: '#6f409f',
                    fill: '#6f409f', strokeWidth: 2
                }, shape: 'Circle'
            };
        } else {
            connector.sourceDecorator = { shape: 'None' };
        }
        connector.targetDecorator = {
            style: {
                strokeColor: '#6f409f',
                fill: '#6f409f', strokeWidth: 2
            }, shape: 'Arrow'
        };
        diagramInstance.dataBind();
    }
    target.classList.add('e-selected-style');
}
</script>
