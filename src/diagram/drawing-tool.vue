<template>
<div class="control-section">
  <div class="col-lg-9 control-section">
    <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :snapSettings='snapSettings' :rulerSettings='rulerSettings' :tool='tool'></ejs-diagram>
  </div>
  <div class="col-lg-3 property-section">
    <div class="property-panel-header">
      Properties
    </div>
    <div class="row  property-panel-content" id="appearance">
      <div class="row row-header" style="padding-top: 10px">
        Shapes
      </div>
      <div class="row" style="padding-top: 8px">
        <div title="Retangle" class="image-pattern-style e-selected-style" id="shape1" style="background-image: url(./src/diagram/Images/drawingTool/basicshape/DrawingTool_1.png); margin-right: 3px">
        </div>
        <div title="Ellipse" class="image-pattern-style" id="shape2" style="background-image: url(./src/diagram/Images/drawingTool/basicshape/DrawingTool_2.png); margin: 0px 3px">
        </div>
        <div title="Hexagon" class="image-pattern-style" id="shape3" style="background-image: url(./src/diagram/Images/drawingTool/basicshape/DrawingTool_3.png);">
        </div>
      </div>
      <div class="row" style="padding-top: 8px">
        <div title="Pentagon" class="image-pattern-style" id="shape4" style="background-image: url(./src/diagram/Images/drawingTool/basicshape/DrawingTool_4.png); margin-right: 3px">
        </div>
        <div title="Polygon" class="image-pattern-style" id="shape5" style="background-image: url(./src/diagram/Images/drawingTool/basicshape/DrawingTool_5.png); margin: 0px 3px">
        </div>
        <div title="Path" class="image-pattern-style" id="path" style="background-image: url(./src/diagram/Images/drawingTool/DrawingTool_6.png);">
        </div>
      </div>
      <div class="row" style="padding-top: 8px">
        <div title="Image" class="image-pattern-style" id="image" style="background-image: url(./src/diagram/Images/drawingTool/DrawingTool_7.png); margin-right: 3px">
        </div>
        <div title="SVG" class="image-pattern-style" id="svg" style="background-image: url(./src/diagram/Images/drawingTool/DrawingTool_8.png); margin-right: 3px">
        </div>
        <div title="Text" class="image-pattern-style" id="text" style="background-image: url(./src/diagram/Images/drawingTool/DrawingTool_9.png); margin-right: 3px">
        </div>
      </div>
      <div class="row row-header" style="padding-top: 10px">
        Connector
      </div>
      <div class="row" style="padding-top: 8px">
        <div class="image-pattern-style" id="straight" style="background-image: url(./src/diagram/Images/drawingTool/connector/Connectors_1.png); margin-right: 3px">
        </div>
        <div class="image-pattern-style" id="ortho" style="background-image: url(./src/diagram/Images/drawingTool/connector/Connectors_2.png); margin: 0px 3px">
        </div>
        <div class="image-pattern-style" id="cubic" style="background-image: url(./src/diagram/Images/drawingTool/connector/Connectors_3.png); ">
        </div>
      </div>
      <div class="row" style="padding-top: 10px">
        <ejs-checkbox id="checked"       
                      :label='checkedlabel'
                      :checked='checkedchecked'
                      :change='checkedchange'></ejs-checkbox>

      </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes how to build a diagram interactively using drawing tools. Continuous draw option, snapping, and undo/redo support are enabled to easily draw diagrams.
        Rulers, gridlines, and snapping options are enabled to easily align objects.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to draw shapes and connections interactively. In addition to that, rulers, gridlines, and snapping options are enabled to assist drawing. 
        
        The <code>tool</code> property can be used to enable drawing. Add <code>DrawOnce</code> or <code>ContinousDraw</code> option to the
        <code>tool</code> property of the diagram. The <code>drawingObject</code> property can be used to define a shape/connector to be drawn.
    </p>

    <p>
        Few shape and connector templates are added in the palette. To draw basic shapes and connectors, click the templates in the palette.
        For polygon shapes, a corner/point will be added to the polygon for each mouse left button click. Drawing will be completed either on mouse right button click or double click.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To enable undo and redo support, inject <code>UndoRedo</code> module using <code>provide: { diagram: [UndoRedo] }</code> method.
    </p>
    <br>
</div>
</div>
</template>

<style>
.image-pattern-style {
  background-color: white;
  background-size: 70%;
  background-repeat: no-repeat;
  height: 45px;
  width: calc((100% - 12px) / 3);
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
  font-size: 12px;
  font-weight: 500;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.property-panel-header {
  padding-top: 15px;
  padding-bottom: 5px;
}

.e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}

.control-section {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
}

.container-fluid {
  padding-left: 0px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>

<script>
import Vue from "vue";
import {
  DiagramPlugin,
  NodeModel,
  BasicShapes,
  Segments,
  SnapSettingsModel,
  SnapConstraints,
  TextModel,
  PathModel,
  ImageModel,
  DiagramTools,
  UndoRedo,
  GridlinesModel,
  Snapping,
  FlowShapes,
  ConnectorModel,
  Connector,
  PointPortModel,
  PortConstraints,
  PortVisibility,
  PointModel,
  BasicShape
} from "@syncfusion/ej2-vue-diagrams";
import { CheckBox, ChangeEventArgs } from "@syncfusion/ej2-vue-buttons";

Vue.use(DiagramPlugin);

let shape = [
  { shapeName: "BasicShape", shapeId: "Basic" },
  { shapeName: "FlowShape", shapeId: "Flow" },
  { shapeName: "Connector", shapeId: "Segment" },
  { shapeName: "Path", shapeId: "Path" },
  { shapeName: "Image", shapeId: "Image" },
  { shapeName: "SVG", shapeId: "SVG" },
  { shapeName: "Text", shapeId: "Text" }
];
let basic = [
  "Rectangle",
  "Ellipse",
  "Hexagon",
  "Parallelogram",
  "Triangle",
  "Plus",
  "Star",
  "Pentagon",
  "Heptagon",
  "Octagon",
  "Trapezoid",
  "Decagon",
  "RightTriangle",
  "Cylinder",
  "Diamond"
];
let flow = [
  "Process",
  "Decision",
  "Document",
  "PreDefinedProcess",
  "Terminator",
  "PaperTap",
  "DirectData",
  "SequentialData"
];
let connector = ["Straight", "Orthogonal"];
let node;
let diagramInstance;
let interval;
interval = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];
let gridlines = {
  lineColor: "#e0e0e0",
  lineIntervals: interval
};
let snapSettings = {
  snapObjectDistance: 5,
  constraints:
    SnapConstraints.SnapToObject |
    SnapConstraints.SnapToLines |
    SnapConstraints.ShowLines,
  horizontalGridlines: gridlines,
  verticalGridlines: gridlines
};

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "540px",
      snapSettings: snapSettings,
      rulerSettings: {
        showRulers: true,
        dynamicGrid: false
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        let obj = node;
        let basicShape = node.shape;
        if (
          basicShape.shape === "Rectangle" ||
          basicShape.shape === "Ellipse"
        ) {
          obj.ports = getPorts(node);
        } else if (basicShape.shape === "Hexagon") {
          obj.ports = getHexagonPorts(node);
        } else if (basicShape.shape === "Pentagon") {
          obj.ports = getPentagonPorts(node);
        } else if (basicShape.type === "Path") {
          obj.ports = getPathPorts(node);
        }
      },
      tool:DiagramTools.ContinuousDraw,
      checkedlabel: "Continous Draw",
      checkedchecked: true,
      checkedchange: onChange
    };
  },
  provide: {
    diagram: [UndoRedo, Snapping]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    SetShape("Rectangle");
    let appearanceObj = document.getElementById("appearance");
    //Click Event used to decide the drawing object.
    appearanceObj.onclick = (args) => {
      let target = args.target;
      let selectedElement = document.getElementsByClassName(
        "e-selected-style"
      );
      if (
        selectedElement.length &&
        target.id !== "" &&
        target.id !== "checked"
      ) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      if (!target.classList.contains("e-selected-style")) {
        target.classList.add("e-selected-style");
      }
      if (target.className === "image-pattern-style e-selected-style") {
        switch (target.id) {
          case "shape1":
            SetShape("Rectangle");
            break;
          case "shape2":
            SetShape("Ellipse");
            break;
          case "shape3":
            SetShape("Hexagon");
            break;
          case "shape4":
            SetShape("Pentagon");
            break;
          case "shape5":
            SetShape("Polygon");
            break;
          case "straight":
            setdrawobject(null, { type: "Straight" });
            break;
          case "ortho":
            setdrawobject(null, { type: "Orthogonal" });
            break;
          case "cubic":
            setdrawobject(null, { type: "Bezier" });
            break;
          case "path":
            getPathShape();
            target.classList.add("e-selected-style");
            break;
          case "image":
            getImageNode();
            break;
          case "svg":
            getSVGNode();
            break;
          case "text":
            getTextNode();
            break;
          default:
            if (
              selectedElement.length &&
              target.id !== "" &&
              target.id !== "checked"
            ) {
              selectedElement[0].classList.remove("e-selected-style");
            }
        }
      }
    };
  }
});

function onChange(args) {
  diagramInstance.tool = args.checked
    ? DiagramTools.ContinuousDraw
    : DiagramTools.DrawOnce;
}

//Enable drawing object.
function setdrawobject(node, connector) {
  let continuousDraw = document.getElementById("checked");
  if (!continuousDraw.checked) {
    diagramInstance.tool = DiagramTools.DrawOnce;
  }
  if (connector == null) {
    diagramInstance.drawingObject = node;
  } else {
    diagramInstance.drawingObject = connector;
  }
  diagramInstance.dataBind();
}
//Enable drawing Tool.
function enableTool() {
  let continuousDraw = document.getElementById("checked");
  if (!continuousDraw.checked) {
    diagramInstance.tool = DiagramTools.DrawOnce;
  }
  diagramInstance.dataBind();
}

//Set the Shape of the drawing Object.
function SetShape(obj) {
  let drawingshape;
  drawingshape = { type: "Basic", shape: obj} ;
  node = {
    shape: drawingshape
  };
  diagramInstance.drawingObject = node;
  enableTool();
}
//Set TextNode Shape.
function getTextNode() {
  let drawingshape;
  drawingshape = { type: "Text" };
  node = {
    shape: drawingshape
  };
  setdrawobject(node, null);
}
//Set SVG Node
function getSVGNode() {
  // tslint:disable-next-line:max-line-length
  let drawingshape;
  drawingshape = {
    type: "Native",
    content: getPath()
  };
  node = {
    shape: drawingshape
  };
  setdrawobject(node, null);
}

function getPath() {
  let str =
    '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="350.000000pt" ' +
    'height="229.000000pt" viewBox="0 0 350.000000 229.000000" ' +
    'preserveAspectRatio="xMidYMid meet"> <metadata>' +
    " Created by potrace 1.11, written by Peter Selinger 2001-2013" +
    ' </metadata> <g transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"' +
    ' fill="#de6ca9" stroke="none"><path d="M0 1145 l0 -1145 1750 0 1750 0 0 1145 0 1145' +
    " -1750 0 -1750 0 0 -1145z m1434 186 c19 -8 26 -18 26 -37 0 -24 -3 -26" +
    " -27 -19 -16 3 -58 9 -94 12 -63 5 -67 4 -88 -23 -23 -29 -21 -60 6 -81 8" +
    " -6 47 -19 86 -29 55 -13 80 -25 106 -51 31 -31 33 -37 29 -88 -8 -94 -69" +
    " -133 -193 -122 -90 7 -115 20 -115 58 0 26 3 30 18 24 91 -38 168 -41 204" +
    " -8 23 21 23 75 1 96 -10 8 -49 23 -88 33 -88 22 -135 63 -135 118 0 92 67 140" +
    " 181 131 31 -2 68 -9 83 -14z m854 -6 c38 -15 42 -21 42 -51 l0 -33 -47 25" +
    " c-41 22 -58 25 -115 22 -58 -3 -72 -8 -97 -32 -79 -75 -59 -259 32 -297 35" +
    " -15 106 -18 150 -6 26 7 27 10 27 67 l0 60 -50 0 c-47 0 -50 2 -50 25 0 25" +
    " 1 25 80 25 l81 0 -3 -97 -3 -98 -40 -20 c-22 -10 -65 -21 -95 -23 -153 -11" +
    " -242 74 -243 230 0 145 93 235 233 224 30 -2 74 -12 98 -21z m-638 -169 l67" +
    " -178 40 103 c22 57 53 139 69 182 28 75 29 77 62 77 19 0 32 -4 30 -9 -1 -5" +
    " -39 -104 -83 -220 l-80 -211 -37 0 c-35 0 -37 2 -56 53 -11 28 -48 124 -81 " +
    '211 -34 87 -61 163 -61 168 0 5 14 8 32 6 31 -3 32 -5 98 -182z" />' +
    "</g> </svg>";
  return str;
}
function getImageNode() {
  let drawingshape;
  drawingshape = { type: "Image", source: "./src/diagram/employee.png" };
  node = {
    shape: drawingshape
  };
  setdrawobject(node, null);
}
function getPathShape() {
  // tslint:disable-next-line:max-line-length
  let drawingshape;
  drawingshape = {
    type: "Path",
    data:
      "M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z"
  };
  node = {
    shape: drawingshape
  };
  setdrawobject(node, null);
}
function getPorts(obj) {
  let ports = [
    createPort("port1", { x: 0, y: 0.5 }),
    createPort("port2", { x: 0.5, y: 1 }),
    createPort("port3", { x: 1, y: 0.5 }),
    createPort("port4", { x: 0.5, y: 0 })
  ];
  return ports;
}
function getPathPorts(obj) {
  let ports = [
    createPort("port1", { x: 0.5, y: 0 }),
    createPort("port2", { x: 0, y: 0.39 }),
    createPort("port3", { x: 1, y: 0.39 }),
    createPort("port4", { x: 0.2, y: 1 }),
    createPort("port5", { x: 0.8, y: 1 })
  ];
  return ports;
}
function getHexagonPorts(obj) {
  let ports = [
    createPort("port1", { x: 0, y: 0.5 }),
    createPort("port2", { x: 0.5, y: 0 }),
    createPort("port3", { x: 0.3, y: 0 }),
    createPort("port4", { x: 0.7, y: 0 }),
    createPort("port5", { x: 1, y: 0.5 }),
    createPort("port6", { x: 0.5, y: 1 }),
    createPort("port7", { x: 0.3, y: 1 }),
    createPort("port8", { x: 0.7, y: 1 })
  ];
  return ports;
}
function getPentagonPorts(obj) {
  let ports = [
    createPort("port1", { x: 0.5, y: 0 }),
    createPort("port2", { x: 0, y: 0.4 }),
    createPort("port3", { x: 1, y: 0.4 }),
    createPort("port4", { x: 0.2, y: 1 }),
    createPort("port5", { x: 0.85, y: 1 })
  ];
  return ports;
}
function createPort(id, offset) {
  let port = {
    id: id,
    shape: "Square",
    offset: offset,
    constraints: PortConstraints.Draw,
    visibility: PortVisibility.Hover
  };
  return port;
}
</script>
