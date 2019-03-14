<template>
<div class="control-section">
<div class="col-lg-8 control-section">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectionChange='selectionChange' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings'></ejs-diagram>
    </div>
    <div class="col-lg-4 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div id="propertypanel" class="e-remove-selection">
      <div class="property-section-content">
        <div class="row sb-child-row">
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Visibility
                </div>
                <div>
                    <!-- Enable or disable the visibility of the Port -->
                        <ejs-multiselect ref='portsVisiblityObj' id='portsVisiblity'
                                        :enabled='portsVisiblityenabled'
                                        :dataSource='portsVisiblitydataSource'
                                        :fields='portsVisiblityfields'
                                        :showSelectAll='portsVisiblityshowSelectAll'
                                        :showDropDownIcon='portsVisiblityshowDropDownIcon'
                                        :popupHeight='portsVisiblitypopupHeight'
                                        :popupWidth='portsVisiblitypopupWidth'
                                        :change='portsVisiblitychange'/>
                </div>
            </div>
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Shape
                </div>
                <div>
                     <!-- DropDownList is used to apply the shape of the Port. -->
                        <ejs-dropdownlist ref='shapeObj' id='shape' 
                                          :enabled='shapeenabled'
                                          :placeholder='shapeplaceholder'
                                          :dataSource='shapedataSource'
                                          :fields='shapefields'
                                          :change='shapechange'/>
                </div>
            </div>
        </div>
        <div class="row sb-child-row">
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Fill Color
                </div>
                <div style="padding-bottom: 8px">
                    <!-- colorpicker is used to apply the fill color of the Port. -->
                     <ejs-colorpicker ref="fillObj" id="fill"       
                                 :value='fillcolorvalue'
                                 :change='fillchange'></ejs-colorpicker>
                </div>
            </div>
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Stroke Color
                </div>
                <div style="padding-bottom: 8px">
                    <!-- colorpicker is used to apply the Stroke color of the Port. -->
                    <ejs-colorpicker ref="borderObj" id="border" :value='strokecolorvalue' :change='borderchange'></ejs-colorpicker>
                </div>
            </div>
        </div>
        <div class="row sb-child-row">
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Stroke Width
                </div>
                <div style="padding-bottom: 8px">
                    <!-- NumericTextBox is used to apply the StrokeWidth of the Port. -->
                        <ejs-numerictextbox ref='widthObj' id='width' 
                                            :enabled='widthenabled'
                                            :format='widthformat'
                                            :value='widthvalue'
                                            :step='widthstep'
                                            :change='widthchange'/>
                </div>
            </div>
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Size
                </div>
                <div style="padding-bottom: 8px">
                     <!-- NumericTextBox is used to apply the size of the Port. -->
                        <ejs-numerictextbox ref= 'sizeObj' id='size' 
                                            :enabled='sizeenabled'
                                            :format='sizeformat'
                                            :value='sizevalue'
                                            :min='sizemin'
                                            :step='sizestep'
                                            :change='sizechange'/>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes the process flow of publishing a book using connection points. Connection points are static points
        over the shapes that allow creating connections to the shapes. Customizing the size and appearance of the connection points is illustrated in this example.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to add connection ports to shapes. The <code>ports</code> property of the node defines the static connection ports. The <code>offset</code>,
        <code>horizontalAlignment</code>, <code>verticalAlignment</code> and <code>margin</code> properties of the ports define its position.
    </p>
    <p>
        The <code>style</code> property of the port can be used to customize its appearance. The <code>visibility</code> property can also be used to define when the connection ports should be visible.
    </p>

    <p>
        In this example, the appearance and visibility of the ports can be customized using the options added to the property panel.
    </p>
</div>
</div>
</template>

<style>
.sb-child-row {
  margin-top: 8px;
}

.property-panel-header {
  padding-top: 15px;
  padding-bottom: 15px;
}

.property-section .e-remove-selection {
  cursor: not-allowed;
}

.row-header {
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
}

.e-remove-selection .property-section-content {
  pointer-events: none;
}
</style>


<script>
import Vue from "vue";
import {
  DiagramPlugin,
  NodeModel,
  ConnectorModel,
  PointPortModel,
  PortVisibility,
  BasicShapeModel,
  Node,
  Connector,
  PortShapes
} from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownList,
  DropDownListPlugin,
  ChangeEventArgs as DropDownChangeEventArgs,
  MultiSelect,
  MultiSelectPlugin,
  MultiSelectChangeEventArgs,
  CheckBoxSelection
} from "@syncfusion/ej2-vue-dropdowns";
import {
  NumericTextBox,
  NumericTextBoxPlugin,
  ChangeEventArgs as NumericChangeEventArgs,
  ColorPicker,
  ColorPickerPlugin,
  ColorPickerEventArgs
} from "@syncfusion/ej2-vue-inputs";

Vue.use(DiagramPlugin);
Vue.use(MultiSelectPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ColorPickerPlugin);

let diagramInstance;
let portVisibilityDrop;
let portFillDrop;
let portBorderDrop;
let portShapeDrop;
let portSizeNum;
let portWidthNum;

//Initializes the ports for the diagram
let node1Port = [
  {
    id: "port1",
    shape: "Circle",
    offset: { x: 0, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port2",
    shape: "Circle",
    offset: { x: 1, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 1"
  },
  {
    id: "port3",
    shape: "Circle",
    offset: { x: 0.25, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 2"
  },
  {
    id: "port4",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 2"
  },
  {
    id: "port5",
    shape: "Circle",
    offset: { x: 0.75, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 3"
  }
];

let node2Port = [
  {
    id: "port6",
    shape: "Circle",
    offset: { x: 0, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port7",
    shape: "Circle",
    offset: { x: 1, y: 0.35 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 1"
  },
  {
    id: "port8",
    shape: "Circle",
    offset: { x: 1, y: 0.7 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 2"
  },
  {
    id: "port9",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 2"
  }
];

let node3Port = [
  {
    id: "port10",
    shape: "Circle",
    offset: { x: 0, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "Out - 1"
  },
  {
    id: "port11",
    shape: "Circle",
    offset: { x: 0.5, y: 0 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port12",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 2"
  }
];

let node4Port = [
  {
    id: "port13",
    shape: "Circle",
    offset: { x: 0, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port14",
    shape: "Circle",
    offset: { x: 0.5, y: 0 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 2"
  },
  {
    id: "port15",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 1"
  }
];

let node5Port = [
  {
    id: "port16",
    shape: "Circle",
    offset: { x: 0, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "out - 1"
  },
  {
    id: "port17",
    shape: "Circle",
    offset: { x: 0.5, y: 0 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port18",
    shape: "Circle",
    offset: { x: 1, y: 0.5 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "OUT - 2"
  }
];

let node6Port = [
  {
    id: "port19",
    shape: "Circle",
    offset: { x: 0, y: 0.35 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port20",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "Out - 1"
  }
];

let node7Port = [
  {
    id: "port21",
    shape: "Circle",
    offset: { x: 0.5, y: 0 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "In - 1"
  },
  {
    id: "port22",
    shape: "Circle",
    offset: { x: 0.5, y: 1 },
    height: 8,
    width: 8,
    visibility: PortVisibility.Visible,
    text: "Out - 1"
  }
];

let shape1 = { type: "Basic", shape: "Rectangle" };

let shape2 = { type: "Basic", shape: "Diamond" };

let nodes = [
  {
    id: "node1",
    offsetX: 100,
    offsetY: 100,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "Publisher" }],
    ports: node1Port
  },
  {
    id: "node2",
    offsetX: 300,
    offsetY: 100,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "Completed Book", margin: { left: 5, right: 5 } }],
    ports: node2Port
  },
  {
    id: "node3",
    offsetX: 300,
    offsetY: 200,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "1st Review" }],
    ports: node3Port
  },
  {
    id: "node4",
    offsetX: 300,
    offsetY: 300,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "Legal Terms" }],
    ports: node4Port
  },
  {
    id: "node5",
    offsetX: 300,
    offsetY: 400,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "2nd Review" }],
    ports: node5Port
  },
  {
    id: "node6",
    offsetX: 500,
    offsetY: 100,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "Board" }],
    ports: node6Port
  },
  {
    id: "node7",
    offsetX: 500,
    offsetY: 200,
    style: { fill: "#82E0AA" },
    annotations: [{ content: "Approval" }],
    ports: node7Port
  }
];
let connectors = [
  {
    id: "connector1",
    sourceID: "node1",
    sourcePortID: "port2",
    targetID: "node2",
    targetPortID: "port6",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector2",
    sourceID: "node1",
    sourcePortID: "port4",
    targetID: "node4",
    targetPortID: "port13",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector3",
    sourceID: "node2",
    sourcePortID: "port9",
    targetID: "node3",
    targetPortID: "port11",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector4",
    sourceID: "node2",
    sourcePortID: "port7",
    targetID: "node6",
    targetPortID: "port19",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector5",
    sourceID: "node3",
    sourcePortID: "port10",
    targetID: "node1",
    targetPortID: "port5",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector6",
    sourceID: "node3",
    sourcePortID: "port12",
    targetID: "node4",
    targetPortID: "port14",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector7",
    sourceID: "node4",
    sourcePortID: "port15",
    targetID: "node5",
    targetPortID: "port17",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector8",
    sourceID: "node5",
    sourcePortID: "port18",
    targetID: "node2",
    targetPortID: "port8",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector9",
    sourceID: "node5",
    sourcePortID: "port16",
    targetID: "node1",
    targetPortID: "port3",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector10",
    sourceID: "node6",
    sourcePortID: "port20",
    targetID: "node7",
    targetPortID: "port21",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  },
  {
    id: "connector11",
    sourceID: "node7",
    sourcePortID: "port22",
    targetID: "node1",
    targetPortID: "port1",
    style: { strokeColor: "#5D6D7E", strokeWidth: 2 },
    targetDecorator: { style: { fill: "#5D6D7E" } }
  }
];

//Visibility collection of the Port.
let visibility = [
  { PortVisibility: PortVisibility.Visible, text: "Visible" },
  { PortVisibility: PortVisibility.Hidden, text: "Hidden" },
  { PortVisibility: PortVisibility.Hover, text: "Hover" },
  { PortVisibility: PortVisibility.Connect, text: "Connect" }
];

//Color collection of the Port.
let color = [
  { text: "White", color: "white" },
  { text: "#008080", color: "#008080" },
  { text: "#E4B123", color: "#E4B123" },
  { text: "#F05023", color: "#F05023" },
  { text: "#3CB549", color: "#3CB549" },
  { text: "#D572AD", color: "#D572AD" },
  { text: "Black", color: "black" },
  { text: "Goldenrod", color: "goldenrod" },
  { text: "Indigo", color: "indigo" },
  { text: "Chocolate", color: "chocolate" },
  { text: "DarkGoldenRod", color: "darkgoldenrod" },
  { text: "FireBrick", color: "firebrick" },
  { text: "DarkRed", color: "darkred" }
];

//Shape collection of the Port.
let shape = [
  { shape: "X", text: "X" },
  { shape: "Circle", text: "Circle" },
  { shape: "Square", text: "Square" },
  { shape: "Custom", text: "Custom" }
];

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: 580,
      nodes: nodes,
      connectors: connectors,
      selectionChange: selectChange,
      snapSettings: { constraints: 0 },
      //Sets the default values of nodes
      getNodeDefaults: (obj) => {
        //Initialize shape
        if (
          obj.id === "node1" ||
          obj.id === "node2" ||
          obj.id === "node4" ||
          obj.id === "node6"
        ) {
          obj.shape = shape1;
        } else if (
          obj.id === "node3" ||
          obj.id === "node5" ||
          obj.id === "node7"
        ) {
          obj.shape = shape2;
        }
        //sets height and width for nodes
        obj.height = 65;
        obj.width = 100;
        obj.style = { fill: "#ebf8fb", strokeColor: "#baeaf5" };
        for (let i = 0; i < obj.ports.length; i++) {
          //sets styles for the ports
          obj.ports[i].style = {
            fill: "#366f8c",
            strokeColor: "#366f8c"
          };
          obj.ports[i].width = 6;
          obj.ports[i].height = 6;
        }
        obj.annotations[0].style = {
          fontSize: 13,
          color: "black"
        };
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector) => {
        //defines type of the connectors
        connector.type = "Orthogonal";
        connector.style = { strokeColor: "#8cdcef", strokeWidth: 1 };
        connector.targetDecorator = {
          width: 5,
          height: 5,
          style: { fill: "#8cdcef", strokeColor: "#8cdcef" }
        };
      },
      portsVisiblityenabled: true,
      portsVisiblitydataSource: visibility,
      portsVisiblityfields: { value: "PortVisibility", text: "text" },
      portsVisiblitymode: "CheckBox",
      portsVisiblityshowSelectAll: true,
      portsVisiblityshowDropDownIcon: true,
      portsVisiblitypopupHeight: "280px",
      portsVisiblitypopupWidth: "180px",
      portsVisiblitychange: portVisibilityDropOnChange,

      fillcolorvalue: "#000",
      fillchange: (args) => {
        applyPortStyle("fill", args.currentValue.rgba);
      },

      strokecolorvalue: "#000",
      borderchange: (args) => {
        applyPortStyle("strokecolor", args.currentValue.rgba);
      },

      shapeenabled: true,
      shapeplaceholder: "Select a Shape",
      shapedataSource: shape,
      shapefields: { value: "shape", text: "text" },
      shapechange: portShapeDropOnChange,

      sizeenabled: true,
      sizeformat: "###.##",
      sizemin: 1,
      sizevalue: 6,
      sizestep: 1,
      sizechange: (args) => {
        applyPortStyle("size", args.value);
      },

      widthenabled: true,
      widthformat: "###.##",
      widthvalue: 1,
      widthstep: 0.5,
      widthchange: (args) => {
        applyPortStyle("strokewidth", args.value);
      }
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
    portVisibilityDrop = this.$refs.portsVisiblityObj.ej2Instances;
    portFillDrop = this.$refs.fillObj.ej2Instances;
    portBorderDrop = this.$refs.borderObj.ej2Instances;
    portShapeDrop = this.$refs.shapeObj.ej2Instances;
    portSizeNum = this.$refs.sizeObj.ej2Instances;
    portWidthNum = this.$refs.widthObj.ej2Instances;
  }
});

//get the port for the selected node.
function getPort() {
  let node = diagramInstance.selectedItems.nodes[0];
  let port;
  if (node) {
    port = node.ports;
  }
  return port;
}

//enable or disable the property panel based on the Selection.
function selectChange(args) {
  if (args.state === "Changed") {
    let appearance = document.getElementById(
      "propertypanel"
    );
    let selectedElement = document.getElementsByClassName(
      "e-remove-selection"
    );
    if (args.newValue) {
      if (!appearance.classList.contains("e-remove-selection")) {
        appearance.classList.add("e-remove-selection");
      }
      if (args.newValue[0] instanceof Node && selectedElement.length) {
        selectedElement[0].classList.remove("e-remove-selection");
        let port = getPort()[0];
        portVisibilityDrop.value = [];
          if (PortVisibility.Visible & port.visibility) {
                        portVisibilityDrop.value.push(PortVisibility.Visible);
                    }
          if (PortVisibility.Hidden & port.visibility) {
                        portVisibilityDrop.value.push(PortVisibility.Hidden);
                    }
          if (PortVisibility.Hover & port.visibility) {
                        portVisibilityDrop.value.push(PortVisibility.Hover);
                    }
          if (PortVisibility.Connect & port.visibility) {
                        portVisibilityDrop.value.push(PortVisibility.Connect);
                    }
          if (portVisibilityDrop.value.length === 0) {
                        portVisibilityDrop.placeholder = 'Select Visibility';
                    }
        portVisibilityDrop.dataBind();
        portFillDrop.value = port.style.fill;
        portFillDrop.dataBind();
        portBorderDrop.value = port.style.strokeColor;
        portBorderDrop.dataBind();
        portShapeDrop.value = port.shape;
        portShapeDrop.dataBind();
        portSizeNum.value = port.height;
        portSizeNum.dataBind();
        portWidthNum.value = port[0].style.strokeWidth;
        portWidthNum.dataBind();
      }
    }
  }
}
//set the appearence of the Port.
function applyPortStyle(propertyName, propertyValue) {
  let ports = getPort();
  for (let j = 0; j < ports.length; j++) {
    let port = ports[j];
    if (propertyName === "fill") {
      port.style.fill = propertyValue.toString();
    } else if (propertyName === "strokecolor") {
      port.style.strokeColor = propertyValue.toString();
    } else if (propertyName === "size") {
      port.width = port.height = Number(propertyValue);
    } else if (propertyName === "strokewidth") {
      port.style.strokeWidth = Number(propertyValue);
    } else if (propertyName === "visibility") {
      port.visibility = 0;
      let propertyValue1 = propertyValue;
      for (let i = 0; i < propertyValue1.length; i++) {
        port.visibility += propertyValue1[i];
      }
    } else if (propertyName === "shape") {
      port.shape = propertyValue;
    }
    diagramInstance.dataBind();
  }
}
//change the Visibility of the Port.
function portVisibilityDropOnChange(args) {
  let port = getPort();
  if (port) {
    for (let j = 0; j < port.length; j++) {
      port[j].visibility = 0;
      for (let i = 0; i < args.value.length; i++) {
        port[j].visibility += args.value[i];
      }
      diagramInstance.dataBind();
    }
  }
}
//change the shape of the Port.
function portShapeDropOnChange(args) {
  let port = getPort();
  for (let j = 0; j < port.length; j++) {
    switch (portShapeDrop.value) {
      case "X":
        port[j].shape = "X";
        break;
      case "Circle":
        port[j].shape = "Circle";
        break;
      case "Square":
        port[j].shape = "Square";
        break;
      case "Custom":
        port[j].shape = "Custom";
        port[j].pathData = "M6.805,0L13.61,10.703L0,10.703z";
        break;
    }
    diagramInstance.dataBind();
  }
}

</script>
