<template>
<div class="col-lg-8 control-section">
    <div class="content-wrapper">
        <!-- Configures the diagram with dynamic properties and settings -->
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :selectedItems='selectedItems' :getCustomTool='getCustomTool'
         :selectionChange='selectionChange' :fixedUserHandleClick='fixedUserHandleClick' :fixedUserHandleTemplate="fixedUserHandleTemplate" :snapSettings='snapSettings'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4 property-section diagram-property">
    <div class="property-panel-header">
      Properties
    </div>
    <div id="propertypanel" class="e-remove-selection">
    <div class="property-section-content">
    <div class="row property-panel-content" id="appearance" ref="appearance">
        <div class="row row-header">
            Appearance
        </div>
        <div class="row">
            <div class="row row-header">
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
    <div class="row property-panel-content" id="pattern" ref="pattern">
            <div class="row">
                <div class="row row-header">
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
        and configure user handles and how to interact with the diagram using user handles. The <code>userHandles</code> property of the <code>selectedItems</code> can be used to add user handles to the diagram.<code> fixedUserHandleTemplate</code> property of the diagram provides template support for customizing fixed user handles and we provide the HTML  button to delete the node.Click the templates in the property
        panel, to customize the size, position, and appearance of the user handles.
    </p>
    <br>
</div>
</template>

<style scoped>
.diagram-property .image-pattern-style {
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

.diagram-property .image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.diagram-property .row {
  margin: 10px 0px 0px 0px;
}

.diagram-property .e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}

.diagram-property .row-header {
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
}

.diagram-property .e-checkbox-wrapper .e-label {
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
 .property-section .e-remove-selection {
  cursor: not-allowed;
}
.e-remove-selection .property-section-content {
  pointer-events: none;
}
</style>

<script>
import { createApp } from "vue";
import {
  DiagramComponent,
  Diagram,
  ConnectorModel,
  UserHandleModel,
  SelectorConstraints,
  NodeModel,
  Node,
  Connector,
  MoveTool,
  cloneObject,
  randomId,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";

let diagramInstance;
let appearanceInstance;
let patternInstance;

// Defines the collection of nodes in the diagram.
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
    annotations: [{ content: "Decision process for new software ideas" }],
    fixedUserHandles: [{ padding: { left: 2, right: 2, top: 2, bottom: 2 }, offset:{x:1.1,y:0.5}, width: 20, height: 20,}],
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

// Defines the collection of connectors in the diagram.
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

// Defines the collection of user handles for nodes in the diagram.
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

let itemVue = createApp({}).component("fixedUserHandleTemplate", {
  template: `<div style="width:100%;height:100%">
        <button style="background-color:black; border-radius:50%; width:25px; height:25px; border:none; cursor:context-menu; padding:0; display:flex; align-items:center; justify-content:center; background-image:url(./src/diagram/Images/user-handle/delete.png); background-size:cover; background-position:center;">
        </button>
    </div> `,
  data() {
    return {};
  }
});

export default {
  components: {
    // Defines components for the diagram
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
      // Initialize component data
      width: "100%",
      height: "600px",
      nodes: nodes,
      connectors: connectors,
      selectedItems: {
        constraints: SelectorConstraints.UserHandle,
        userHandles: handles
      },
      snapSettings: { constraints: SnapConstraints.None },
      fixedUserHandleTemplate: function () {
      return { template: itemVue };
      },
     // Set the default value for Node.
      getNodeDefaults: (node) => {
        return {
          style: { fill: "#578CA9", strokeColor: "none" },
          annotations: [{ style: { color: "white" } }]
        };
      },
      // Set up the CustomTool.
      getCustomTool: getTool,
      // Enable or disable the property panel based on the selection.
      selectionChange:function (arg) {
            var propertyAppearance = document.getElementById('propertypanel');
            var getSelectedElement = document.getElementsByClassName('e-remove-selection');
            if (arg.newValue) {
              // Check if the item in newValue is either a Node or Connector
                if ((arg.newValue[0] instanceof Node) || (arg.newValue[0] instanceof Connector)) {
                    if (getSelectedElement.length) {
                        getSelectedElement[0].classList.remove('e-remove-selection');
                    }
                } else {
                    if (!propertyAppearance.classList.contains('e-remove-selection')) {
                        propertyAppearance.classList.add('e-remove-selection');
                    }
        
                }
            }
        },
      fixedUserHandleClick:function(){
        diagramInstance.select([diagramInstance.nameTable['Decision']]);
        diagramInstance.remove();
      }
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    appearanceInstance = this.$refs.appearance;
    patternInstance=this.$refs.pattern;
    diagramInstance.fitToPage();
    diagramInstance.select([diagramInstance.nodes[0]]);
    //Change the postion of the UserHandle
    appearanceInstance.onclick = (args) => {
    let target = args.target ;
    let appearanceBlock = appearanceInstance;
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
    };
    //Change the appearence of the UserHandle
    patternInstance.onclick = (args) => {
    let target = args.target;
    let patternBlock = patternInstance;
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
    };
  }
}
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

//Defines the clone tool used to copy Node and Connector
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
     if (diagramInstance.selectedItems.connectors.length > 0)
     {
      args.source = diagramInstance.connectors[
      diagramInstance.connectors.length - 1
    ];
     }
     else
     {
       args.source = diagramInstance.nodes[
      diagramInstance.nodes.length - 1
    ];
     }
    args.sourceWrapper = args.source.wrapper;
    super.mouseDown(args);
    this.inAction = true;
  }
}
</script>
