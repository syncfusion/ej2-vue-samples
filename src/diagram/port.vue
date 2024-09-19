<template>
<div class="control-section">
<div class="col-lg-8 control-section">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectionChange='selectionChange' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings'></ejs-diagram>
    </div>
    <div class="col-lg-4 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div id="propertypanel" class="e-remove-selection" ref="propertypanelInstance">
      <div class="property-section-content">
        <div class="row sb-child-row">
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Visibility
                </div>
                <div  style="width:80%;">
                    <!-- Enable or disable the visibility of the Port -->
                        <ejs-dropdownlist ref='portsVisiblityObj' id='portsVisiblity'
                                        :enabled='portsVisiblityenabled'
                                        :dataSource='portsVisiblitydataSource'
                                        :fields='portsVisiblityfields'
                                        :value='portsVisiblityValue'
                                        :change='portsVisiblitychange'/>
                </div>
            </div>
            <div class="col-xs-6">
                <div style="padding-bottom: 8px">
                    Shape
                </div>
                <div  style="width:80%;">
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
                <div style="padding-bottom: 8px;width:80%;">
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
                <div style="padding-bottom: 8px;width:80%;">
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

<style scoped>
/*To align property panel */
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

/* To disable pointer events when there is no selection in diagram */
.e-remove-selection .property-section-content {
  pointer-events: none;
}
</style>


<script>
import {
  DiagramComponent,
  PortVisibility,
  Node,
} from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListComponent,
  MultiSelectComponent,
} from "@syncfusion/ej2-vue-dropdowns";
import {
  NumericTextBoxComponent,
  ColorPickerComponent
} from "@syncfusion/ej2-vue-inputs";

let diagramInstance;
let portVisibilityDrop;
let portFillDrop;
let portBorderDrop;
let portShapeDrop;
let portSizeNum;
let portWidthNum;
let appearance;

//Function to Create connector by the parameters
function createPort(id, shape, offsetX, offsetY, text) {
    return {
        id: id,
        shape: shape,
        offset: { x: offsetX, y: offsetY },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
        text: text
    };
}

//Function to Create nodes by the parameters
function createNode(id, offsetX, offsetY, annotationContent, ports) {
    return {
        id: id,
        offsetX: offsetX,
        offsetY: offsetY,
        annotations: [{ content: annotationContent }],
        ports: ports
    };
}

//Function to Create connector by the parameters
function createConnector(id, sourceID, sourcePortID, targetID, targetPortID) {
    return {
        id: id,
        sourceID: sourceID,
        sourcePortID: sourcePortID,
        targetID: targetID,
        targetPortID: targetPortID
    }
}
//Initializes the ports for the diagram
let node1Port = [
  createPort('port1', 'Circle', 0, 0.5, 'In - 1'),
  createPort('port2', 'Circle', 1, 0.5, 'OUT - 1'),
  createPort('port3', 'Circle', 0.25, 1, 'In - 2'),
  createPort('port4', 'Circle', 0.5, 1, 'OUT - 2'),
  createPort('port5', 'Circle', 0.75, 1, 'In - 3')
];

let node2Port = [
  createPort('port6', 'Circle', 0, 0.5, 'In - 1'),
  createPort('port7', 'Circle', 1, 0.35, 'OUT - 1'),
  createPort('port8', 'Circle', 1, 0.70, 'In - 2'),
  createPort('port9', 'Circle', 0.5, 1, 'OUT - 2')
];

let node3Port = [
  createPort('port10', 'Circle', 0, 0.5, 'Out - 1'),
  createPort('port11', 'Circle', 0.5, 0, 'In - 1'),
  createPort('port12', 'Circle', 0.5, 1, 'OUT - 2')
];

let node4Port = [
  createPort('port13', 'Circle', 0, 0.5, 'In - 1'),
  createPort('port14', 'Circle', 0.5, 0, 'In - 2'),
  createPort('port15', 'Circle', 0.5, 1, 'OUT - 1')
];

let node5Port = [
  createPort('port16', 'Circle', 0, 0.5, 'out - 1'),
  createPort('port17', 'Circle', 0.5, 0, 'In - 1'),
  createPort('port18', 'Circle', 1, 0.5, 'OUT - 2')
];

let node6Port = [
  createPort('port19', 'Circle', 0, 0.35, 'In - 1'),
  createPort('port20', 'Circle', 0.5, 1, 'Out - 1')
];

let node7Port = [
  createPort('port21', 'Circle', 0.5, 0, 'In - 1'),
  createPort('port22', 'Circle', 0.5, 1, 'Out - 1')
];

let shape1 = { type: "Basic", shape: "Rectangle" };

let shape2 = { type: "Basic", shape: "Diamond" };
//Initialize Diagram Nodes
let nodes = [
  createNode('node1', 100, 100, 'Publisher', node1Port),
  createNode('node2', 300, 100, 'Completed Book', node2Port),
  createNode('node3', 300, 200, '1st Review', node3Port),
  createNode('node4', 300, 300, 'Legal Terms', node4Port),
  createNode('node5', 300, 400, '2nd Review', node5Port),
  createNode('node6', 500, 100, 'Board', node6Port),
  createNode('node7', 500, 200, 'Approval', node7Port)
];
//Initialize Diagram Connectors
let connectors = [
  createConnector('connector1', 'node1', 'port2', 'node2', 'port6'),
  createConnector('connector2', 'node1', 'port4', 'node4', 'port13'),
  createConnector('connector3', 'node2', 'port9', 'node3', 'port11'),
  createConnector('connector4', 'node2', 'port7', 'node6', 'port19'),
  createConnector('connector5', 'node3', 'port10', 'node1', 'port5'),
  createConnector('connector6', 'node3', 'port12', 'node4', 'port14'),
  createConnector('connector7', 'node4', 'port15', 'node5', 'port17'),
  createConnector('connector8', 'node5', 'port18', 'node2', 'port8'),
  createConnector('connector9', 'node5', 'port16', 'node1', 'port3'),
  createConnector('connector10', 'node6', 'port20', 'node7', 'port21'),
  createConnector('connector11', 'node7', 'port22', 'node1', 'port1')
];
//Visibility collection of the Port.
let visibility = [
  { PortVisibility: PortVisibility.Visible, text: "Visible" },
  { PortVisibility: PortVisibility.Hidden, text: "Hidden" },
  { PortVisibility: PortVisibility.Hover, text: "Hover" },
  { PortVisibility: PortVisibility.Connect, text: "Connect" }
];
//Shape collection of the Port.
let shape = [
  { shape: "X", text: "X" },
  { shape: "Circle", text: "Circle" },
  { shape: "Square", text: "Square" },
  { shape: "Custom", text: "Custom" }
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-multiselect': MultiSelectComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-colorpicker': ColorPickerComponent
  },
  data: function() {
    return {
      width: "100%",
      height: 580,
      nodes: nodes,
      connectors: connectors,
      selectionChange: selectionChange,
      snapSettings: { constraints: 0 },
      //Sets the default values of nodes
      getNodeDefaults: (node) => {
        //Initialize shape
        if (
          node.id === "node1" ||
          node.id === "node2" ||
          node.id === "node4" ||
          node.id === "node6"
        ) {
          node.shape = shape1;
        } else if (
          node.id === "node3" ||
          node.id === "node5" ||
          node.id === "node7"
        ) {
          node.shape = shape2;
        }
        //sets height and width for nodes
        node.height = 65;
        node.width = 100;
        node.style = { fill: "#ebf8fb", strokeColor: "#baeaf5" };
        for (let i = 0; i < node.ports.length; i++) {
          //sets styles for the ports
          node.ports[i].style = {
            fill: "#366f8c",
            strokeColor: "#366f8c"
          };
          node.ports[i].width = 6;
          node.ports[i].height = 6;
        }
        node.annotations[0].style = {
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
      portsVisiblitychange: portVisibilityDropOnChange,
      portsVisiblityValue:"Visible",
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
    diagramInstance.fitToPage();
    portVisibilityDrop = this.$refs.portsVisiblityObj.ej2Instances;
    portFillDrop = this.$refs.fillObj.ej2Instances;
    portBorderDrop = this.$refs.borderObj.ej2Instances;
    portShapeDrop = this.$refs.shapeObj.ej2Instances;
    portSizeNum = this.$refs.sizeObj.ej2Instances;
    portWidthNum = this.$refs.widthObj.ej2Instances;
    appearance=this.$refs.propertypanelInstance;
    diagramInstance.select([diagramInstance.nodes[0]]);
  }
}

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
function selectionChange(args) {
  if (args.state === "Changed") {
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
        portVisibilityDrop.value = port.visibility;
        portVisibilityDrop.dataBind();
        portFillDrop.value = port.style.fill;
        portFillDrop.dataBind();
        portBorderDrop.value = port.style.strokeColor;
        portBorderDrop.dataBind();
        portShapeDrop.value = port.shape;
        portShapeDrop.dataBind();
        portSizeNum.value = port.height;
        portSizeNum.dataBind();
        portWidthNum.value = port.style.strokeWidth;
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
        port[j].visibility = portVisibilityDrop.value ;
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
