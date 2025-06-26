<template>
<div class="control-section diagram-keyboard">
  <div class="col-lg-9 control-section">
    <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height'
     :layout='layout' :getNodeDefaults='getNodeDefaults'
      :contextMenuSettings='contextMenuSettings' 
     :dataSourceSettings='dataSourceSettings' :commandManager='commandManager'
     :snapSettings='snapSettings'></ejs-diagram>
  </div>
  <div class="col-lg-3 property-section">
    <div v-for="(table, index) in commandTables" :key="index">
      <h4 class="property-panel-header">{{ table.title }}</h4>
      <div class="property-panel-content">
        <table style="font-size: 12px;">
          <thead>
            <tr>
              <td style="width: 70%;"><h5>Command</h5></td>
              <td style="width: 30%;"><h5>Gesture</h5></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cmd, cmdIndex) in table.commands" :key="cmdIndex">
              <td style="width: 70%;">{{ cmd.command }}</td>
              <td style="width: 30%;">{{ cmd.gesture }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div id="action-description">
    <p>
      This sample illustrates interaction with diagram control using shortcut keys. Command Manager support is used to manage keyboard interactions.
    </p>
  </div>
  <div id="description">
    <p>
      This example shows how to interact with the diagram control using shortcut keys. The
      <code>commandManager</code> property can be used to map the commands with key gestures. In this example, along with the built-in commands a
      few custom commands are added and a few built-in commands (nudge) are overridden. That is, when the arrow keys are
      pressed, selection will be navigated instead of moving the selected objects. The different kinds of interactions
      and the corresponding key gestures are listed in the property panel.
    </p>
    <br>
  </div>
</div>
</template>

<style scoped>
/*To align the diagram */
  .diagram-keyboard .control-section {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
  }
/*To align the property panel */
  .diagram-keyboard .property-panel-header {
    padding-bottom: 0px;
  }

  .diagram-keyboard .property-panel-content {
    padding-top: 0px !important;
  }

  @media (max-width: 550px) {
    .diagram-keyboard .property-panel-content {
      padding-top: 0px !important;
    }
  }
</style>

<script>
import {
  DiagramComponent,
  UndoRedo,
  DataBinding,
  Keys,
  KeyModifiers,
  DiagramContextMenu,
  HierarchicalTree,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { keyBoardData } from "./diagram-data";

let shape = {
  type: "Basic",
  shape: "Ellipse",
  cornerRadius: 10
};
let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },  
  data: function() {
    return {
      //Initializes diagram control
      width: "100%",
      height: 645,
      snapSettings: { constraints: SnapConstraints.None },
      contextMenuSettings: { show: true },
      //Sets the default values of nodes
      getNodeDefaults: (node) => {
        if (!node.children) {
          node.shape = shape;
          node.width = 70;
          node.height = 70;
        }
        return node;
      },
      //Configrues hierarchical tree layout
      layout: {
        type: "HierarchicalTree"
      },
      //Configures data source
      dataSourceSettings: {
        id: "id",
        parentId: "ancestor",
        dataSource: new DataManager(keyBoardData),
        //binds the external data with node
        doBinding: (nodeModel, data) => {
          nodeModel.annotations = [
            {
              /* tslint:disable:no-string-literal */
              content: data["id"],
              style: { color: "white" }
            }
          ];
          nodeModel.style = {
            strokeColor: "transparent",
            /* tslint:disable:no-string-literal */
            fill: data["fill"]
          };
        }
      },
        commandManager: getCommandManagerSettings(),
        commandTables: [
            {
            title: "Built-In Commands",
            commands: [
                { command: "Select All", gesture: "Ctrl + A" },
                { command: "Cut", gesture: "Ctrl + X" },
                { command: "Copy", gesture: "Ctrl + C" },
                { command: "Paste", gesture: "Ctrl + V" },
                { command: "Undo", gesture: "Ctrl + Z" },
                { command: "Redo", gesture: "Ctrl + Y" },
                { command: "Delete", gesture: "Delete" },
            ],
            },
            {
            title: "Custom Commands",
            commands: [
                { command: "Group", gesture: "Ctrl + G" },
                { command: "Ungroup", gesture: "Ctrl + U" },
            ],
            },
            {
            title: "Modified Commands",
            commands: [
                { command: "Navigate to Parent Node", gesture: "Up Arrow" },
                { command: "Navigate to Child Node", gesture: "Down Arrow" },
                { command: "Navigate to Previous Child", gesture: "Left Arrow" },
                { command: "Navigate to Next Child", gesture: "Right Arrow" },
            ],
            },
        ],
    };
  },
  provide: {
    diagram: [UndoRedo, DiagramContextMenu, HierarchicalTree, DataBinding]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  }
}

//Custom command for Diagraming elements.
function getCommandManagerSettings() {   
    return {
        commands: [
          createCommand("customGroup", Keys.G, KeyModifiers.Control, () => groupItems(), canGroupItems),
          createCommand("customUnGroup", Keys.U, KeyModifiers.Control, () => unGroupItems(), canUnGroupItems),
          createCommand("navigationDown", Keys.Down, undefined, () => navigateLevels(true), alwaysTrue),
          createCommand("navigationUp", Keys.Up, undefined, () => navigateLevels(false), alwaysTrue),
          createCommand("navigationLeft", Keys.Left, undefined, () => navigateToSiblings(false), alwaysTrue),
          createCommand("navigationRight", Keys.Right, undefined, () => navigateToSiblings(true), alwaysTrue)
        ]
    };
}
// Create a command with common properties
function createCommand(name, key, keyModifiers, execute, canExecute){
    return { name, gesture: { key, keyModifiers }, canExecute, execute };
}

// Check if grouping items is possible
function canGroupItems() {
    return diagramInstance.selectedItems.nodes.length > 0 || diagramInstance.selectedItems.connectors.length > 0;
}

// Group selected items
function groupItems() {
    diagramInstance.group();
}

// Check if ungrouping items is possible
function canUnGroupItems() {
    return diagramInstance.selectedItems.nodes[0]?.children !== undefined;
}

// Ungroup selected items
function unGroupItems() {
    diagramInstance.unGroup();
}

// Always return true for command execution
function alwaysTrue() {
    return true;
}

//Navigation for Child Node or parent Node
function navigateLevels(isParent) {
    let selectedNode = diagramInstance.selectedItems.nodes[0];
    if (selectedNode) {
        let connectorId = isParent ? selectedNode.outEdges[0] : selectedNode.inEdges[0];
        let altNode = isParent ? getNode(connectorId, false) : getNode(connectorId, true);
        selectNode(altNode);
    }
}
//Navigate to left or right Sibling Node 
function navigateToSiblings(isRightSibling) {
    let selectedNode = diagramInstance.selectedItems.nodes[0];
    if (selectedNode) {
        let connectorId = selectedNode.inEdges[0];
        let altConnectorId = '';
        let parentNode = getNode(connectorId, true)[0];
        if (parentNode) {
            for (let i = 0; i < (parentNode).outEdges.length; i++) {
                if ((parentNode).outEdges[i] === connectorId) {
                    altConnectorId = isRightSibling ? (parentNode).outEdges[i + 1] : (parentNode).outEdges[i - 1];
                }
            }
            let sibling = getNode(altConnectorId, false);
            selectNode(sibling);
        }
    }
}
// Get node elements by connector ID
function getNode(name, isParent) {
    let node = [];
    let connector= diagramInstance.getObject(name);
    if (connector) {
        node.push(diagramInstance.getObject(isParent ? (connector.sourceID) : (connector.targetID)));
    }
    return node;
}
// Select and highlight the specified node
function selectNode(node) {
    if (node && node.length > 0) {
        diagramInstance.clearSelection();
        diagramInstance.select(node);
    }
}
</script>
