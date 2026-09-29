<template>
  <div class="control-section">
    <div style="width: 100%">
      <ejs-diagram
        ref="diagramObject"
        style="display: block"
        id="diagram"
        :width="width"
        :height="height"
        :nodes="nodes"
        :getNodeDefaults="getNodeDefaults"
        :snapSettings="snapSettings"
      ></ejs-diagram>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates basic built-in shapes, such as basic shapes,
        flow shapes, and BPMN shapes.
      </p>
    </div>
    <div id="description">
      <p>
        This example shows how to define built-in shapes that are used to
        visualize geometric information, work flow, or a business flow diagrams.
        The <code>shape</code> property can be used to define the category of
        built-in shapes. Additionally, the <code>type</code> property of the
        <code>shape</code> allows you to choose the type of the shape.
      </p>
      <p style="font-weight: 500">Injecting Module</p>

      <p>
        The diagram component’s features are segregated into individual
        feature-wise modules. To use the BPMN shapes, inject
        <code>BpmnDiagrams</code> module using
        <code>provide: { diagram: [BpmnDiagrams] }</code> method.
      </p>
      <br />
    </div>
  </div>
</template>

<script>
import {
  DiagramComponent,
  Diagram,
  BpmnDiagrams,
} from "@syncfusion/ej2-vue-diagrams";
import { Node, SnapConstraints } from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListComponent,
  ChangeEventArgs as DropDownChangeEventArgs,
} from "@syncfusion/ej2-vue-dropdowns";

// Function to create shape model objects
function createBasicShapeModel(shape, content) {
  return {
    shape: { type: "Basic", shape: shape },
    annotations: [{ content: content }],
  };
}

//Initialzise basic shape models
let basicShapeModel = [{
    shape: { type: "Text", content: "Basic Shapes" },
    style: {fontSize: 16,fill: "None",fontFamily: "sans-serif",bold:true,strokeWidth: 0,}},
  createBasicShapeModel("Rectangle", "Rectangle"),
  createBasicShapeModel("Ellipse", "Ellipse"),
  createBasicShapeModel("Triangle", "Triangle"),
  createBasicShapeModel("Plus", "Plus"),
  createBasicShapeModel("Star", "Star"),
  createBasicShapeModel("Pentagon", "Pentagon"),
  createBasicShapeModel("Heptagon", "Heptagon"),
  createBasicShapeModel("Octagon", "Octagon"),
  createBasicShapeModel("Trapezoid", "Trapezoid"),
  createBasicShapeModel("Decagon", "Decagon"),
  createBasicShapeModel("RightTriangle", "Right Triangle"),
  createBasicShapeModel("Parallelogram", "Parallelogram"),
];

// Function to create flow shape model objects
function createFlowShapeModel(shape, content) {
  return {
    shape: { type: "Flow", shape: shape },
    annotations: [{ content: content }]
  };
}

// To Initialize Flow shape models
let flowShapeModel = [
  {
  shape: { type: "Text", content: "Flow Shapes" },
  style: {fontSize: 16,fill: "None",fontFamily: "sans-serif",bold: true,strokeWidth: 0}
  },
  createFlowShapeModel("Terminator", "Terminator"),
  createFlowShapeModel("Process", "Process"),
  createFlowShapeModel("Decision", "Decision"),
  createFlowShapeModel("Document", "Document"),
  createFlowShapeModel("PreDefinedProcess", "Predefined Process"),
  createFlowShapeModel("PaperTap", "Paper Tape"),
  createFlowShapeModel("DirectData", "Direct Data"),
  createFlowShapeModel("SequentialData", "Direct Data"),
  createFlowShapeModel("Sort", "Sort"),
  createFlowShapeModel("MultiDocument", "Multi-Document"),
  createFlowShapeModel("Collate", "Collate"),
  createFlowShapeModel("SummingJunction", "Summing Junction"),
  createFlowShapeModel("Or", "Or"),
  createFlowShapeModel("InternalStorage", "Internal Storage"),
  createFlowShapeModel("Extract", "Extract"),
  createFlowShapeModel("ManualOperation", "Manual Operation"),
  createFlowShapeModel("Merge", "Merge"),
  createFlowShapeModel("OffPageReference", "Off-Page Reference"),
  createFlowShapeModel("SequentialAccessStorage", "Sequential Access Storage"),
  createFlowShapeModel("Data", "Data"),
  createFlowShapeModel("Card", "Card")
];

// Function to create BPMN shapes
function createBpmnShapeModel(shape, content, event=undefined) {
    return {
        shape: { type: 'Bpmn', shape: shape, event: event },
        annotations: [{ content: content }]
    };
}

// To Initialize Flow shape models
let bpmnShapeModel = [
    {
      shape: { type: "Text", content: "BPMN Shapes" },
      style: {fontSize: 16,fill: "none",fontFamily: "sans-serif",bold: true,strokeWidth: 0,},
    },
    createBpmnShapeModel('Event', 'Start Event', { event: 'Start', trigger: 'None' }),
    createBpmnShapeModel('Event', 'Intermediate Event', { event: 'Intermediate', trigger: 'None' }),
    createBpmnShapeModel('Event', 'End Event', { event: 'End', trigger: 'None' }),
    createBpmnShapeModel('Gateway', 'Gateway'),
    createBpmnShapeModel('Activity', 'Task', { activity: 'Task' }),
    {shape: {type: "Bpmn",shape: "Activity",activity: { activity: "SubProcess",
        subProcess: {
          type: "Transaction",
          transaction: {
            success: { visible: false },
            failure: { visible: false },
            cancel: { visible: false },
          }}}
     },
     annotations: [{ content: "Transaction" }],
    },
    createBpmnShapeModel('Message', 'Message'),
    createBpmnShapeModel('DataObject', 'Data Object'),
    createBpmnShapeModel('DataSource', 'Data Source'),
    createBpmnShapeModel('Group', 'Group'),
    createBpmnShapeModel('TextAnnotation', 'Text Annotation')
];


export default {
  components: {
    "ejs-diagram": DiagramComponent,
    "ejs-dropdownlist": DropDownListComponent,
  },
  data: function () {
    return {
      width: "100%",
      height: "800px",
      snapSettings: { constraints: SnapConstraints.None },
      nodes: getNodes(),
      //Defines the default node and connector properties
      getNodeDefaults: (node, diagram) => {
        return node;
      },
    };
  },
  provide: {
    diagram: [BpmnDiagrams],
  },
  mounted: function () {
    let diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage();
  },
};

function getNodes() {

  var nodes = basicShapeModel.concat(flowShapeModel).concat(bpmnShapeModel);
  var offsetx = 60;
  var offsety = 60;
  var count = 1;
  const shapeTypeHeight = {
    Process: 20,
    Terminator: 20,
    Decision: 35,
    Document: 30,
    DirectData: 30,
    MultiDocument: 30,
    PreDefinedProcess: 30
  };
    nodes.forEach(node => {
    node.width = 40;
    node.height = 40;
    if (node.shape && node.shape.type === "Flow") {
      let shapeType = node.shape.shape;
      node.height = shapeTypeHeight[shapeType] || 40; // Default height if not found in lookup
     
    }
    node.offsetX = offsetx;
    node.offsetY = offsety;

    if (node.shape && !(node.shape.type === "Text") && node.annotations) {
      var label = node.annotations[0];
      label.verticalAlignment = "Top";
      label.offset = { y: 1 };
      label.margin = { top: 10 };

      offsetx += 90;
      //After 10 nodes 11th node will go next line
      if (count % 10 === 0) {
        offsety = offsety + 100;
        offsetx = 60;
      }
      count++;
    }
    if (node.shape && node.shape.type === "Text") {
      offsetx = 60;
      offsety += 50;
      count = 1;
      node.width = 150;
      node.height = 100;
      node.offsetX = 90;
      if (!(node.shape.content === "Basic Shapes")) {
        node.offsetX = 90;
        node.offsetY = offsety + 50;
        offsety +=  100;
      }
    }
  });
  return nodes;
}
</script>