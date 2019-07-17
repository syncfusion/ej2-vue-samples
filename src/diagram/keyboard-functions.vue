<template>
<div class="control-section">
  <div class="col-lg-9 control-section">
    <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height'
     :layout='layout' :getNodeDefaults='getNodeDefaults'
     :getConnectorDefaults='getConnectorDefaults' :contextMenuSettings='contextMenuSettings' 
     :dataSourceSettings='dataSourceSettings' :commandManager='commandManager'
     :snapSettings='snapSettings'></ejs-diagram>
  </div>
  <div class="col-lg-3 property-section">
    <div>
        <h4 class="property-panel-header">Built-In Commands</h4>
        <div class="property-panel-content">
            <table id="property1" style="font-size: 12px;">
                <tbody>
                    <tr>
                        <td style="width:60%;">
                            <h5>Command</h5>
                        </td>
                        <td style="width:40%;">
                            <h5>Gesture</h5>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:61%;">Select All </td>
                        <td style="width:39%;">Ctrl + A</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Cut</td>
                        <td style="width:40%;">Ctrl + X</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Copy</td>
                        <td style="width:40%;">Ctrl + C</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Paste</td>
                        <td style="width:40%;">Ctrl + V</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Undo</td>
                        <td style="width:40%;">Ctrl + Z</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Redo</td>
                        <td style="width:40%;">Ctrl + Y</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Delete</td>
                        <td style="width:40%;">Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <h4 class="property-panel-header">Custom Commands</h4>
        <div class="property-panel-content">
            <table id="property2" style="font-size: 12px;">
                <tbody>
                    <tr>
                        <td style="width:60%;">
                            <h5>Command</h5>
                        </td>
                        <td style="width:40%;">
                            <h5>Gesture</h5>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Group</td>
                        <td style="width:40%;">Ctrl + G</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Ungroup</td>
                        <td style="width:40%;">Ctrl + U</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <h4 class="property-panel-header">Modified Commands</h4>
        <div class="property-panel-content">
            <table id="property3" style="font-size: 12px;">
                <tbody>
                    <tr>
                        <td style="width:70%;">
                            <h5>Command</h5>
                        </td>
                        <td style="width:30%;">
                            <h5>Gesture</h5>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Navigate to Parent Node </td>
                        <td style="width:40%;">Up Arrow</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Navigate to Child Node </td>
                        <td style="width:40%;">Down Arrow</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Navigate to Previous Child </td>
                        <td style="width:40%;">Left Arrow</td>
                    </tr>
                    <tr>
                        <td style="width:60%;">Navigate to Next Child </td>
                        <td style="width:40%;">Right Arrow</td>
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

<style>
  .control-section {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
  }

  .container-fluid {
    padding-left: 0px;
  }

  .property-panel-header {
    padding-bottom: 0px;
  }

  .property-panel-content {
    padding-top: 0px !important;
  }

  @media (max-width: 550px) {
    .property-panel-content {
      padding-top: 0px !important;
    }
  }
</style>

<script>
import Vue from "vue";
import {
  DiagramPlugin,
  NodeModel,
  UndoRedo,
  Node,
  DataBinding,
  Keys,
  KeyModifiers,
  DiagramContextMenu,
  BasicShapeModel,
  HierarchicalTree,
  CommandManagerModel,
  ConnectorModel,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { keyBoardData } from "./diagram-data";

Vue.use(DiagramPlugin);
let shape = {
  type: "Basic",
  shape: "Ellipse",
  cornerRadius: 10
};
let diagramInstance;

export default Vue.extend({
  data: function() {
    return {
      //Initializes diagram control
      width: "100%",
      height: 645,
      snapSettings: { constraints: SnapConstraints.None },
      contextMenuSettings: { show: true },
      //Sets the default values of nodes
      getNodeDefaults: (obj) => {
        if (!obj.children) {
          obj.shape = shape;
          obj.width = 70;
          obj.height = 70;
        }
        return obj;
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
      commandManager: getCommandManagerSettings()
    };
  },
  provide: {
    diagram: [UndoRedo, DiagramContextMenu, HierarchicalTree, DataBinding]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  }
});

//Custom command for Diagraming elements.
function getCommandManagerSettings() {   
    let commandManager = {
        commands: [{
            name: 'customGroup',
            canExecute: () => {
                if (diagramInstance.selectedItems.nodes.length > 0 || diagramInstance.selectedItems.connectors.length > 0) {
                    return true;
                }
                return false;
            },
            execute: () => {
                diagramInstance.group();
            },
            gesture: {
                key: Keys.G,
                keyModifiers: KeyModifiers.Control
            }
        },
        {
            name: 'customUnGroup',
            canExecute: () => {
                if (diagramInstance.selectedItems.nodes[0].children) {
                    return true;
                }
                return false;
            },
            execute: () => {
                diagramInstance.unGroup();
            },
            gesture: {
                key: Keys.U,
                keyModifiers: KeyModifiers.Control
            }
        },
        {
            name: 'navigationDown',
            canExecute: () => {
                return true;
            },
            execute: () => {
                navigateLevels(true);
            },
            gesture: { key: Keys.Down },
        },
        {
            name: 'navigationUp',
            canExecute: () => {
                return true;
            },
            execute: () => {
                navigateLevels(false);
            },
            gesture: { key: Keys.Up },
        },
        {
            name: 'navigationLeft',
            canExecute: () => {
                return true;
            },
            execute: () => {
                navigateToSiblings(true);
            },
            gesture: { key: Keys.Right },
        },
        {
            name: 'navigationRight',
            canExecute: () => {
                return true;
            },
            execute: () => {
                navigateToSiblings(false);
            },
            gesture: { key: Keys.Left },
        }]
    };
    return commandManager;
}

//Navigation for Child Node or parent Node
function navigateLevels(isParent) {
    let node = diagramInstance.selectedItems.nodes[0];
    if (node) {
        let connectorId = isParent ? node.outEdges[0] : node.inEdges[0];
        let altNode = isParent ? getNode(connectorId, false) : getNode(connectorId, true);
        selectNode(altNode);
    }
}
//Navigate to left or right Sibling Node 
function navigateToSiblings(isRightSibling) {
    let child = diagramInstance.selectedItems.nodes[0];
    if (child) {
        let connectorId = child.inEdges[0];
        let altConnectorId = '';
        let parent = getNode(connectorId, true);
        if (parent && parent.length > 0) {
            for (let i = 0; i < (parent[0]).outEdges.length; i++) {
                if ((parent[0]).outEdges[i] === connectorId) {
                    altConnectorId = isRightSibling ? (parent[0]).outEdges[i + 1] : (parent[0]).outEdges[i - 1];
                }
            }
            let sibling = getNode(altConnectorId, false);
            selectNode(sibling);
        }
    }
}
//Get node elements
function getNode(name, isParent) {
    let node = [];
    let connector= diagramInstance.getObject(name);
    if (connector) {
        node.push(diagramInstance.getObject(isParent ? (connector.sourceID) : (connector.targetID)));
    }
    return node;
}
//draw selector.
function selectNode(node) {
    if (node && node.length > 0) {
        diagramInstance.clearSelection();
        diagramInstance.select(node);
    }
}


</script>
