<template>
<div class="control-section diagram-connector">
<div class="col-lg-8 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectionChange="selectionChange"  :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :setNodeTemplate='setNodeTemplate'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div class="row" id="appearance" ref="appearance">
        <div class="row row-header">
            <b>Connector types</b>
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
            <div class="image-pattern-style" id="cornerRadius" style="background-image: url(./src/diagram/Images/connector/Connectors_10.png); margin-right: 3px">
            </div>
            <div class="image-pattern-style" id="sourceDecorators" style="background-image: url(./src/diagram/Images/connector/Connectors_11.png); margin: 0px 3px">
            </div>
            <div class="image-pattern-style" id="sourceDecoratorWithDasharray" style="background-image: url(./src/diagram/Images/connector/Connectors_12.png); margin-left: 3px">
            </div>
        </div>
    </div>
    <div class="row " id="decorators"  style="padding-top: 10px">
              <div class="row row-header" style="padding-top: 8px">
                  <b>Decorators</b>
              </div>
              <div class="row" style="padding-top: 8px; display: flex;">
                  <label>Source Decorators</label>
                  <div>
                      <ejs-dropdownlist id='sourceDecorator' ref='sourceDecorator' :enabled=true :value='sourceDecoratorValue' :dataSource='decoratorShape' :change='sourceDecoratorShapeChange'/>
                  </div>
              </div>
              <div class="row" style="padding-top: 8px; display: flex;">
                  <label>Target Decorators</label>
                  <div>
                    <ejs-dropdownlist id='targetDecorator' ref='targetDecorator' :enabled=true :value='targetDecoratorValue' :dataSource='decoratorShape' :change='targetDecoratorShapeChange'/>
                  </div>
              </div>
              <div class="row" style="padding-top: 8px; display: flex;">
                  <label>Segment Decorators</label>
                  <div>
                    <ejs-dropdownlist id='segmentDecorator' :enabled=true :value='segmentValue' :dataSource='decoratorShape' :change='segmentDecoratorShapeChange'/>
                  </div>
              </div>
    </div>
    <div class="row " id="decorators"  style="padding-top: 10px">
    <div class="row row-header" style="padding-top: 8px">
        <b>Decorators Size</b>
    </div>
    <div class="row" style="padding-top: 8px; display: flex;">
        <label>Source Decorators Size</label>
        <div>
        <ejs-numerictextbox ref="sourceDecoratorsSizeObj"  id="sourceDecoratorsSize" :min="10" :max="20" :format="0o0" :step="1" :value="12"
                :change='sourceDecoratorsSizeChange'/>
        </div>
    </div>
    <div class="row" style="padding-top: 8px; display: flex;">
        <label>Target Decorators Size</label>
        <div>
        <ejs-numerictextbox ref="targetDecoratorsSizeObj"  id="targetDecoratorsSize" :min="10" :max="20" :format="0o0" :step="1" :value="12"
                :change='targetDecoratorsSizeChange'/>
        </div>
    </div>
    <div class="row" style="padding-top: 8px; display: flex;">
        <label>Segment Decorators Size</label>
        <div>
        <ejs-numerictextbox ref="segmentDecoratorsSizeObj"  id="segmentDecoratorsSize" :enabled=false :min="10" :max="20" :format="0o0" :step="1" :value="12"
                :change='segmentDecoratorsSizeChange'/>
        </div>
    </div>
    </div>
    <div class="row" id="color-tab" style="padding-top: 10px">
          <div class="row row-header">
              <b>Appearance</b>
          </div>
          <div class="row" style="padding-top: 8px; display: flex; margin-right: 50px;">
            <label>Line color</label>
            <ejs-colorpicker id="color" :mode='colorMode' :showButtons='colorShowButton' :modeSwitcher='colorModeSwitch' :value='fillColorValue' :change='colorChange'></ejs-colorpicker>
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
        To change the appearance, click on different styles in the property panel to modify the connector type, decorator shapes, and decorator sizes.
        The <code>type</code> property of the connector defines its segment type. The <code>shape</code> property specifies the shapes for the source, target, and segment decorators. You can adjust the size of the source and target decorators by setting their
        <code>width</code>and <code>height</code>. Additionally, the<code>segmentThumbSize</code>property allows you to modify the size of the segment decorator when the connector is selected.
    </p>

    <p>
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

<style scoped>
/* Css for images in property panel  */
.diagram-connector .image-pattern-style {
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

.diagram-connector .image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.diagram-connector .row {
  margin-left: 0px;
  margin-right: 0px;
}

.diagram-connector .row-header {
  font-size: 13px;
  font-weight: 500;
}

/* Selection indicator */
.diagram-connector .e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}
/* Align the names in property panel */
.diagram-connector label{
      display: inline-block;
      font-size: 13px;
      font-weight: 400;
      width: 100%;
      margin-top: auto;
};

</style>

<script>
import {
  TextElement,
  HierarchicalTree,
  ConnectorConstraints,
  SnapConstraints,
  ConnectorEditing,
  StackPanel,
  SelectorConstraints,
  DiagramComponent,
  randomId,
  PortVisibility,
} from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListComponent,
} from "@syncfusion/ej2-vue-dropdowns";
import {
  ColorPickerComponent,
  NumericTextBoxComponent
} from "@syncfusion/ej2-vue-inputs";

let diagramInstance;
let connectorObject;
let sourceDecoratorInstance;
let targetDecoratorInstance;
let segmentDecoratorInstance;

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
  { id: "node6", offsetX: 545, offsetY: 340, excludeFromLayout: true }
];

//Initialize Diagram connectors
let connectors = [
  { id: "connector", sourceID: "node1", targetID: "node2" },
  {
    id: "connector1",
    sourceID: "node2",
    sourcePortID: "port1",
    targetID: "node3",
    targetPortID: "portIn"
  },
  {
    id: "connector2",
    sourceID: "node2",
    sourcePortID: "port2",
    targetID: "node4",
    targetPortID: "portIn"
  },
  {
    id: "connector3",
    sourceID: "node2",
    sourcePortID: "port3",
    targetID: "node5",
    targetPortID: "portIn"
  },
  {
    id: "connector4",
    sourceID: "node6",
    sourcePortID: "port4",
    targetID: "node3",
    targetPortID: "portOut"
  },
  {
    id: "connector5",
    sourceID: "node6",
    sourcePortID: "port5",
    targetID: "node4",
    targetPortID: "portOut"
  },
  {
    id: "connector7",
    sourceID: "node6",
    sourcePortID: "port6",
    targetID: "node5",
    targetPortID: "portOut"
  }
];

//Collection of decorator shapes
let decoratorShapeSource = [
  { shape: 'None', text: 'None' },
  { shape: 'Square', text: 'Square' },
  { shape: 'Circle', text: 'Circle' },
  { shape: 'Diamond', text: 'Diamond' },
  { shape: 'Arrow', text: 'Arrow' },
  { shape: 'OpenArrow', text: 'Open Arrow' },
  { shape: 'Fletch', text: 'Fletch' },
  { shape: 'OpenFetch', text: 'Open Fetch' },
  { shape: 'IndentedArrow', text: 'Indented Arrow' },
  { shape: 'OutdentedArrow', text: 'Outdented Arrow' },
  { shape: 'DoubleArrow', text: 'Double Arrow' }
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
  },
  data: function() {
    return {
      //Initializes diagram control
      width: "100%",
      height: 680,
      nodes: nodes,
      connectors: connectors,
      selectionChange: () => {
        if (diagramInstance.selectedItems.connectors.length > 0) {
          segmentDecoratorInstance.enabled = true;
        }
        else{
          segmentDecoratorInstance.enabled = false;
        }
      },
      //Configrues hierarchical tree layout
      layout: {
        type: "HierarchicalTree",
        orientation: "LeftToRight",
        verticalSpacing: 75,
        margin: { left: 30, right: 0, top: 0, bottom: 0 }
      },
      snapSettings: { constraints: SnapConstraints.None },
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
        obj.segments = [
          {
            type: 'Bezier',
          }
        ];
        obj.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      },

      sourceDecoratorValue:"None",
      targetDecoratorValue:"Arrow",
      segmentValue:"Circle",
      fillColorValue: "#6f409f",
      segmentDecoratorShapeChange: onsegmentDecoratorShapeChange,
      targetDecoratorShapeChange: ontargetDecoratorShapeChange,
      sourceDecoratorShapeChange: onsourceDecoratorShapeChange,
      sourceDecoratorsSizeChange: onsourceDecoratorSizeChange,
      segmentDecoratorsSizeChange: onsegmentDecoratorSizeChange,
      targetDecoratorsSizeChange: ontargetDecoratorSizeChange,
      decoratorShape: decoratorShapeSource,
      colorChange: onColorChange,
      colorMode: true,
      colorShowButton: false,
      colorModeSwitch: true,
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
    };
  },
  provide: {
    diagram: [HierarchicalTree, ConnectorEditing]
  },
  mounted: function() {
    //let diagramObj = document.getElementById("diagram");
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
    diagramInstance.updateViewPort();
    connectorObject = this.$refs.appearance;
    sourceDecoratorInstance = this.$refs.sourceDecorator.ej2Instances;
    targetDecoratorInstance= this.$refs.targetDecorator.ej2Instances;
    segmentDecoratorInstance= this.$refs.segmentDecoratorsSizeObj.ej2Instances;
    //Click event to change the connector type.
    connectorObject.onclick = (args) => {
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
          case "cornerRadius":
            applyConnectorStyle(false, false, true, "Orthogonal", target);
            break;
          case "sourceDecorators":
            applyConnectorStyle(false, true, false, "Straight", target);
            break;
          case "sourceDecoratorWithDasharray":
            applyConnectorStyle(true, true, false, "Straight", target);
            break;
        }
      }
    };
  }
}

//Creation of TextElement for node
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
function applyConnectorStyle(dashedLine, sourceDec, isRounded, type, target, strokeWidth) {
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
                    strokeColor: connector.style.strokeColor,
                    fill: connector.style.strokeColor, strokeWidth: 2
                }, shape: 'Circle'
            };
            sourceDecoratorInstance.value='Circle';
        } else {
            connector.sourceDecorator = { shape: 'None' };
            sourceDecoratorInstance.value='None';
        }
        connector.targetDecorator = {
            style: {
                strokeColor: connector.style.strokeColor,
                fill: connector.style.strokeColor, strokeWidth: 2
            }, shape: 'Arrow'
        };
        targetDecoratorInstance.value='Arrow';
        diagramInstance.dataBind();
        diagramInstance.updateSelector();
    }
    target.classList.add('e-selected-style');
}
//Change the connector color
function onColorChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.connectors[i].style.strokeColor = args.currentValue.hex;
    diagramInstance.connectors[i].targetDecorator.style.strokeColor = args.currentValue.hex;
    diagramInstance.connectors[i].targetDecorator.style.fill = args.currentValue.hex;
    diagramInstance.connectors[i].sourceDecorator.style.strokeColor = args.currentValue.hex;
    diagramInstance.connectors[i].sourceDecorator.style.fill = args.currentValue.hex;
  }
  diagramInstance.dataBind();
}
//Change source decorator shape
function onsourceDecoratorShapeChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.connectors[i].sourceDecorator = {
      shape: args.itemData.shape,
      style: {
        strokeColor: diagramInstance.connectors[i].style.strokeColor,
        fill: diagramInstance.connectors[i].style.strokeColor,
      }
    };
  }
  diagramInstance.dataBind();

}
//Change target decorator shape
function ontargetDecoratorShapeChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.connectors[i].targetDecorator = {
      shape: args.itemData.shape,
      style: {
        strokeColor: diagramInstance.connectors[i].style.strokeColor,
        fill: diagramInstance.connectors[i].style.strokeColor,
      }
    };
    diagramInstance.dataBind();
  }
}
//Change segment decorator shape
function onsegmentDecoratorShapeChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.segmentThumbShape = args.itemData.shape;
  }
  diagramInstance.dataBind();
}
//Change source decorator size
function onsourceDecoratorSizeChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.connectors[i].sourceDecorator.width = args.value;
    diagramInstance.connectors[i].sourceDecorator.height = args.value;
  }
  diagramInstance.dataBind();
}
//Change target decorator size
function ontargetDecoratorSizeChange(args) {
  for (let i = 0; i < diagramInstance.connectors.length; i++) {
    diagramInstance.connectors[i].targetDecorator.width = args.value;
    diagramInstance.connectors[i].targetDecorator.height = args.value;
    }
    diagramInstance.dataBind();
}
//Change segment decorator size
function onsegmentDecoratorSizeChange(args) {
  var connector=diagramInstance.selectedItems.connectors[0];
  diagramInstance.segmentThumbSize = args.value;
  diagramInstance.clearSelection();
  diagramInstance.select([diagramInstance.nameTable[connector.id]]);
  diagramInstance.dataBind();
}
</script>
