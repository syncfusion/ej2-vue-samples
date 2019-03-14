<template>
<div class="control-section">
<div class="col-lg-8 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :selectedItems='selectedItems' :getCustomTool='getCustomTool'
                     :getCustomCursor='getCustomCursor' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div class="property-panel-header">
      Properties
    </div>
    <div class="row property-panel-content" id="appearance">
        <div class="row row-header">
            Appearance
        </div>
        <div class="row">
            <div class="row row-header1">
                Alignment
            </div>
            <div class="row" style="padding-top: 8px">
                <div class="image-pattern-style e-selected-style" id="left" style="background-image: url(./src/diagram/Images/user-handle/bottoml.png); margin-right: 4px">
                </div>
                <div class="image-pattern-style" id="right" style="background-image: url(./src/diagram/Images/user-handle/bottomr.png); margin: 0px 4px">
                </div>
                <div class="image-pattern-style" id="topr" style="background-image: url(./src/diagram/Images/user-handle/topr.png);">
                </div>
            </div>
        </div>
    </div>
    <div class="row property-panel-content" id="pattern">
            <div class="row">
                <div class="row row-header1">
                    pattern
                </div>
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="pattern1" style="background-image: url(./src/diagram/Images/user-handle/pattern1.png); margin-right: 4px">
                    </div>
                    <div class="image-pattern-style" id="pattern2" style="background-image: url(./src/diagram/Images/user-handle/pattern2.png); margin: 0px 4px">
                    </div>
                    <div class="image-pattern-style" id="pattern3" style="background-image: url(./src/diagram/Images/user-handle/pattern3.png);">
                    </div>
                </div>
            </div>
        </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes a simple flow diagram along with options to execute the frequently used commands using user handles.
    </p>
</div>
<div id="description">
    <p>
        User handles are icons that are placed around the node to run the frequently used commands. This example shows how to render
        and configure user handles and how to interact with the diagram using user handles. The <code>userHandles</code> property of the <code>selectedItems</code> can be used to add user handles to the diagram. Click the templates in the property
        panel, to customize the size, position, and appearance of the user handles.
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
  height: 50px;
  width: calc((100% - 18px) / 3);
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
  margin: 10px 0px 0px 0px;
}

.e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}

.row-header {
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
}

.property-panel-header {
  padding-top: 2px;
  padding-bottom: 5px;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.control-section {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-left: 0px;
}

.container-fluid {
  padding-left: 0px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}
</style>

<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  ConnectorModel,
  DataBinding,
  UserHandleModel,
  SelectorConstraints,
  ToolBase,
  MouseEventArgs,
  NodeModel,
  MindMap,
  HierarchicalTree,
  MoveTool,
  Node,
  IElement,
  cloneObject,
  randomId,
  SnapConstraints,
  Side
} from "@syncfusion/ej2-vue-diagrams";

Vue.use(DiagramPlugin);
let diagramInstance;

//Defines the nodes collection in diagram
let nodes = [
  {
    id: "NewIdea",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ content: "New idea identified" }]
  },
  {
    id: "Meeting",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 155,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Meeting with board" }]
  },
  {
    id: "BoardDecision",
    width: 150,
    height: 110,
    offsetX: 300,
    offsetY: 280,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Board decides \n whether to proceed" }]
  },
  {
    id: "Project",
    width: 150,
    height: 100,
    offsetX: 300,
    offsetY: 430,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Find Project manager" }]
  },
  {
    id: "End",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 555,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Implement and Deliver" }]
  },
  {
    id: "Decision",
    width: 250,
    height: 60,
    offsetX: 550,
    offsetY: 60,
    shape: { type: "Flow", shape: "Card" },
    annotations: [{ content: "Decision process for new software ideas" }]
  },
  {
    id: "Reject",
    width: 150,
    height: 60,
    offsetX: 550,
    offsetY: 280,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Reject" }]
  },
  {
    id: "Resources",
    width: 150,
    height: 60,
    offsetX: 550,
    offsetY: 430,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Hire new resources" }]
  }
];

//Defines the connectors collection in diagram
let connectors = [
  {
    id: "connector1",
    type: "Straight",
    sourceID: "NewIdea",
    targetID: "Meeting"
  },
  {
    id: "connector2",
    type: "Straight",
    sourceID: "Meeting",
    targetID: "BoardDecision"
  },
  {
    id: "connector3",
    type: "Straight",
    sourceID: "BoardDecision",
    targetID: "Project"
  },
  { id: "connector4", type: "Straight", sourceID: "Project", targetID: "End" },
  {
    id: "connector5",
    type: "Straight",
    sourceID: "BoardDecision",
    targetID: "Reject"
  },
  {
    id: "connector6",
    type: "Straight",
    sourceID: "Project",
    targetID: "Resources"
  }
];

//Defines the user handle collection for nodes in diagram
let handles= [
  {
    name: "clone",
    pathData:
      "M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3," +
      "0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z " +
      "M68.5,72.5h-30V34.4h30V72.5z",
    visible: true,
    offset: 0,
    side: "Bottom",
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  }
];

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "600px",
      nodes: nodes,
      connectors: connectors,
      selectedItems: {
        constraints: SelectorConstraints.UserHandle,
        userHandles: handles
      },
      snapSettings: { constraints: SnapConstraints.None },
      //set Node default value
      getNodeDefaults: (node) => {
        return {
          style: { fill: "#578CA9", strokeColor: "none" },
          annotations: [{ style: { color: "white" } }]
        };
      },
      //set CustomTool
      getCustomTool: getTool
    };
  },
  provide: {
    diagram: [DataBinding, MindMap, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
    diagramInstance.select([diagramInstance.nodes[0]]);
    let appearanceObj = document.getElementById("appearance");
    let patternObj= document.getElementById("pattern");
    //Change the postion of the UserHandle
    appearanceObj.onclick = (args) => {
    let target = args.target ;
    let appearanceBlock = document.getElementById('appearance');
    let selectedElement = appearanceBlock.getElementsByClassName('e-selected-style');
    if (selectedElement.length) {
      selectedElement[0].classList.remove('e-selected-style');
    }
    if (target.className === 'image-pattern-style') {
      switch (target.id) {
        case 'left':
          setuserhandleposition(0, 'Bottom', target);
          break;
        case 'right':
          setuserhandleposition(1, 'Bottom', target);
          break;
        case 'topr':
          setuserhandleposition(0, 'Right', target);
          break;
      }
    }
    diagramInstance.dataBind();
    };
    //Change the Appearence of the UserHandle
    patternObj.onclick = (args) => {
    let target = args.target;
    let patternBlock = document.getElementById('pattern');
    let selectedElement = patternBlock.getElementsByClassName('e-selected-style');
    if (selectedElement.length) {
      selectedElement[0].classList.remove('e-selected-style');
    }
    if (target.className === 'image-pattern-style') {
      switch (target.id) {
        case 'pattern1':
          applyuserhandlestyle('#1E90FF', target);
          break;
        case 'pattern2':
          applyuserhandlestyle('#3CB371', target);
          break;
        case 'pattern3':
          applyuserhandlestyle('#FF6347', target);
          break;
      }
    }
      diagramInstance.dataBind();
    };
  }
});

//Enable the clone Tool for UserHandle.
function getTool(action) {
  let tool;
  if (action === "clone") {
    tool = new CloneTool(diagramInstance.commandHandler);
  }
  return tool;
}

//set the position of the userhandle.
function setuserhandleposition(
  offset,
  side,
  target
) {
  if (diagramInstance.selectedItems.userHandles) {
    diagramInstance.selectedItems.userHandles[0].offset = offset;
    diagramInstance.selectedItems.userHandles[0].side = side;
  }
  target.classList.add("e-selected-style");
}
//set the style of the userhandle.
function applyuserhandlestyle(bgcolor, target) {
  if (diagramInstance.selectedItems.userHandles) {
    diagramInstance.selectedItems.userHandles[0].backgroundColor = bgcolor;
    diagramInstance.selectedItems.userHandles[0].pathColor = "White";
  }
  target.classList.add("e-selected-style");
}

//Defines the clone tool used to copy Node/Connector
class CloneTool extends MoveTool {
   mouseDown(args) {
    let newObject;
    if (
      diagramInstance.selectedItems.nodes &&
      diagramInstance.selectedItems.connectors
    ) {
      if (diagramInstance.selectedItems.nodes.length > 0) {
        newObject = cloneObject(
          diagramInstance.selectedItems.nodes[0]
        );
      } else {
        newObject = cloneObject(
          diagramInstance.selectedItems.connectors[0]
        );
      }
    }
    newObject.id += randomId();
    diagramInstance.paste([newObject]);
    args.source = diagramInstance.nodes[
      diagramInstance.nodes.length - 1
    ];
    args.sourceWrapper = args.source.wrapper;
    super.mouseDown(args);
    this.inAction = true;
  }
}
</script>
