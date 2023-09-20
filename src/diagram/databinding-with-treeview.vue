<template>
<div class="control-section">
    <div>
        <div style="width: 100%;height: 50px;margin-bottom: 5px;">
            <div class="btn-group" style="float:left;width:70%">
            <ejs-button  :isPrimary = true id="addbtn" :disabled= "true"  v-on:click="addButton1"  >Add Node</ejs-button>
            <ejs-button :isPrimary="true" id="deletebtn" :disabled= "true"  v-on:click="deleteButton1" >Delete Node</ejs-button>
            </div>
            <div class="icon" style="width:30%;float:right;font-size: 16px;">
                    <span >Diagram Binding with Treeview</span>
                    <svg height="45" width="47">
                        <path d="M27.573,21.885726 C26.039659,21.885726 24.796639,23.128786 24.796639,24.662178 L24.796639,37.3311 C24.796639,38.864491 26.039659,40.107552 27.573,40.107552 L40.064701,40.107552 C41.598042,40.107552 42.841061,38.864491 42.841061,37.3311 L42.841061,24.662178 C42.841061,23.128786 41.598042,21.885726 40.064701,21.885726 z M3.9060001,2.3436508 C2.9710598,2.3436508 2.2131386,3.1015863 2.2131386,4.0365477 L2.2131386,11.76122 C2.2131386,12.69618 2.9710598,13.454117 3.9060001,13.454117 L11.522699,13.454117 C12.457641,13.454117 13.21556,12.69618 13.21556,11.76122 L13.21556,4.0365477 C13.21556,3.1015863 12.457641,2.3436508 11.522699,2.3436508 z M2.7341995,0 L12.8898,0 C14.399857,0 15.624,1.2241688 15.624,2.7342587 L15.624,12.737741 C15.624,14.247831 14.399857,15.472 12.8898,15.472 L8.75,15.472 8.75,29.653 21.167,29.653 21.167,22.526347 C21.167,20.049711 23.174645,18.042 25.6512,18.042 L42.306801,18.042 C44.783356,18.042 46.791,20.049711 46.791,22.526347 L46.791,38.932653 C46.791,41.40929 44.783356,43.417 42.306801,43.417 L25.6512,43.417 C23.174645,43.417 21.167,41.40929 21.167,38.932653 L21.167,32.403 7.3190002,32.403 C6.5596085,32.403 5.9440002,31.787392 5.9440002,31.028 5.9440002,30.933076 5.953619,30.840399 5.9719353,30.75089 L6,30.641743 6,15.472 2.7341995,15.472 C1.2241421,15.472 0,14.247831 0,12.737741 L0,2.7342587 C0,1.2241688 1.2241421,0 2.7341995,0 z" fill="#FF8FABCA"></path>
                    </svg>
            </div>
        </div>
        <div style="width: 100%;">
            <div  id="palette-space" style="width:27%;float:left;height: 700px;overflow: hidden;">
            <ejs-treeview id='treeview' :fields='fields' :allowEditing=true :allowDragAndDrop=true :keyPress='keyPress' :nodeEdited='nodeEdited' :nodeSelected='nodeSelected' :nodeClicked ='nodeClicked'></ejs-treeview>
            </div>
            <div id="diagram-space" style="width:72%;float:right">
                <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings' :click='click' :selectionChange='selectionChange' :textEdit='textEdit' :dragEnter='dragEnter' :drop='drop' :snapSettings='snapSettings'></ejs-diagram>
            </div>
        </div>
    </div>
<div id="action-description">
    <p>
      This example illustrates how to create a tree view and a diagram with a datasource. It provides support for selecting, adding, deleting, dragging and dropping, and editing annotations of the nodes during runtime. These actions will be reflected in the corresponding nodes of the tree view component.
    </p>
</div>
<div id="description">
   <p>When a node is added or removed in a Diagram during runtime, the added or removed node is reflected in the tree view component. When an annotation in the diagram is changed it should also be updated in the treeView by using treeview updateNode method. When editing a text in a treeview, use selectedItems to update it in the diagram. You can drag text from the treeview and drop it onto the node in the diagram. Also, you can perform drag and drop operations in the diagram.</p>
</div>
</div>
</template>
<style>
.btn-group button{ 
    margin-right:16px;
    }
.btn-group button:last-child{
    margin-right:0px;
    }

#palette-space {
    border-style: solid;
    border-color: #f2f2f2;
}

#diagram-space {
    border-color: #f2f2f2;
    border-style: solid;
}
</style>

<script>
import {
  OverviewPlugin,
  Diagram,
  DiagramComponent,
  ConnectorModel,
  Node,
  SnapConstraints,
  Container,
  TextElement,
  StackPanel,
  ImageElement,
  DataBinding,
  NodeConstraints,
  HierarchicalTree,
  TreeInfo,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { DataManager } from "@syncfusion/ej2-data";
import { dataBindingTreeView } from "./diagram-data";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;
let addButton = document.getElementById("addbtn");
let deleteButton = document.getElementById("deletebtn");
var index = 1;
var targetNodeId;
var elementNodeId;

let data = [
  { Name: "Plant Manager", Id: "1", hasChild: true, expanded: true },
  { Name: "Production Manager", Id: "2", ParentId: "1", hasChild: true, expanded: true },
  { Name: "Control Room", Id: "3", ParentId: "2", hasChild: true, expanded: true },
  { Name: "Foreman1", Id: "4", ParentId: "3", hasChild: true, expanded: true },
  { Name: "Craft Personnel5", Id: "5", ParentId: "4" },
  { Name: "Craft Personnel6", Id: "6", ParentId: "4" },
  { Name: "Plant Operator", Id: "7", ParentId: "2", hasChild: true, expanded: true },
  { Name: "Foreman2", Id: "8", ParentId: "7", hasChild: true, expanded: true },
  { Name: "Craft Personnel7", Id: "9", ParentId: "8" },
  { Name: "Administrative Officer", Id: "10", ParentId: "1" },
  { Name: "Maintenance Manager", Id: "11", ParentId: "1", hasChild: true, expanded: true },
  { Name: "Electrical Supervisor", Id: "12", ParentId: "11", hasChild: true, expanded: true },
  { Name: "Craft Personnel1", Id: "13", ParentId: "12" },
  { Name: "Craft Personnel2", Id: "14", ParentId: "12" },
  { Name: "Mechanical Supervisor", Id: "15", ParentId: "11", hasChild: true, expanded: true },
  { Name: "Craft Personnel3", Id: "16", ParentId: "15" },
  { Name: "Craft Personnel4", Id: "17", ParentId: "15" }
];

let workingData = data;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-treeview': TreeViewComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "610px",
      fields: { dataSource: data , id: 'Id', text: 'Name', parentID: 'ParentId', hasChildren: 'hasChild' },
      layout: {
       type: 'HierarchicalTree',
       verticalSpacing: 50, horizontalSpacing: 40,
        enableAnimation: true
        },
      dataSourceSettings: {
        id: 'Id', parentId: 'ParentId',
        dataSource: new DataManager(dataBindingTreeView),
         doBinding: (nodeModel, data, diagram) => {
         nodeModel.id = (data).Id;
        }
      },
      snapSettings: { constraints: SnapConstraints.None },
      //Sets the default values of Node
      getNodeDefaults: (node, diagram) => {
        node.width = 100;
        node.height = 40;
        node.style = { strokeWidth: 1, strokeColor: 'whitesmoke', fill: 'CornflowerBlue' };
        node.annotations = [{ content: (node.data).Name, style: { color: 'white' } }];
        node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
        return node;
      },
      //Sets the default values of connector
      getConnectorDefaults: (obj, diagram) => {
     obj.type = 'Orthogonal';
     obj.style = { strokeColor: 'CornflowerBlue' };
     obj.targetDecorator = { shape: 'Arrow', height: 10, width: 10, style: { fill: 'CornflowerBlue', strokeColor: 'white' } };
     return obj;
     },
     click : (args)=>{
       var treeObj = document.getElementById("treeview").ej2_instances[0];
        treeObj.selectedNodes = [args.element.data.Id];
     },
     selectionChange : (args)=>{
      let addButton = document.getElementById("addbtn");
      let deleteButton = document.getElementById("deletebtn");
        if (args.state === 'Changed') {
            if (args.type === "Addition") {
                deleteButton.disabled = false;
                addButton.disabled = false;
            } else {
                deleteButton.disabled = true;
                addButton.disabled = true;
            }
        }
     },
     keyPress : keyPress,
     nodeEdited : nodeEdited,
     nodeSelected : nodeSelected,
     nodeClicked : nodeClicked,
     dragEnter : (args) =>{
      var lable = '';
        if (args.dragData) {
            lable = args.dragData.text;
        }
        var node =
        {
            id: 'node' + index,
            data: { Name: lable, Id: 'node' + index },
            annotations: [{ content: lable }]
        };
        args.dragItem = node;
     },
     textEdit : (args)=>{
      var treeObj = document.getElementById("treeview").ej2_instances[0];
        setTimeout(function () {
            if (args.annotation) {
                elementNodeId = args.element.id;
                var tempData = workingData.filter(checkElementData);
                var node = treeObj.getNode(tempData[0].Id);
                treeObj.updateNode(tempData[0].Id, args.annotation.content);
            }
        }, 0);
     },
     drop : (args) =>{
      var diagram = document.getElementById("diagram").ej2_instances[0];
      var treeObj = document.getElementById("treeview").ej2_instances[0];
        var connector;
        var tempData;
        setTimeout(function () {
            targetNodeId = args.target.id;
            tempData = workingData.filter(checkData);
            tempData[0].hasChild = true;
            tempData[0].expanded = true;
            if (args.element.inEdges.length === 0) {
                var id = args.element.id;
                var item = {
                    Name: args.element.annotations[0].content, Id: args.element.id, ParentId: targetNodeId, hasChild: false, expanded: false
                };
                treeObj.addNodes([item], targetNodeId, null);
                connector = { sourceID: targetNodeId, targetID: id };
                diagram.add(connector);
                diagram.doLayout();
                index++;
                workingData.push(item);
            } else {
                connector = diagram.getObject(args.element.inEdges[0]);
                connector.sourceID = targetNodeId;
                diagram.dataBind();
                diagram.doLayout();
                elementNodeId = args.element.id;
                tempData = workingData.filter(checkElementData);
                tempData[0].ParentId = targetNodeId;
                treeObj.fields = {
                    dataSource: workingData,
                    id: 'Id',
                    text: 'Name',
                    parentID: 'ParentId',
                    hasChildren: 'hasChild',
                };
                treeObj.refresh();
            }
        }, 0);
     }
  };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;

  },
  methods : {
       addButton1 : function(event) {
        add();
    },
    deleteButton1 : function(event) {
       var diagram = document.getElementById("diagram").ej2_instances[0];
        if (diagram.selectedItems.nodes[0].data.Id !== "1") {
            remove();
        }
    },
  },
};

  function nodeSelected(args) {
    let addButton = document.getElementById("addbtn");
    let deleteButton = document.getElementById("deletebtn");
        deleteButton.disabled = false;
        addButton.disabled = false;
    }

    function nodeClicked(args) {
       var diagram = document.getElementById("diagram").ej2_instances[0];
      var treeObj = document.getElementById("treeview").ej2_instances[0];
        var node = diagram.getObject(treeObj.selectedNodes[0]);
        diagram.select([node]);
    }

    // Key Press Event
    function keyPress(args) {
        if (args.event.key === 'Enter') {
            add();
        }
    }

    function nodeEdited(args) {
       var diagram = document.getElementById("diagram").ej2_instances[0];
         var treeObj = document.getElementById("treeview").ej2_instances[0];
        var node = diagram.getObject(args.nodeData.id);
        node.annotations[0].content = args.newText;
        treeObj.selectedNodes = [args.nodeData.id];
    }

    function remove() {
        var nodeId;
         var diagram = document.getElementById("diagram").ej2_instances[0];
         var treeObj = document.getElementById("treeview").ej2_instances[0];
        if (diagram.selectedItems.nodes.length > 0) {
            nodeId = diagram.selectedItems.nodes[0].id;
            removeSubChild(diagram.selectedItems.nodes[0], true);
            diagram.doLayout();
        } else if (treeObj.selectedNodes.length > 0) {
            nodeId = treeObj.selectedNodes[0];
            treeObj.removeNodes([nodeId]);
            var node = diagram.getObject(nodeId);
            removeSubChild(node, false);
        }
        for (var i = workingData.length - 1; i >= 0; i--) {
            if (workingData[i].id === nodeId) {
                workingData.splice(i, 1);
            }
        }
        diagram.doLayout();

    }

    function removeSubChild(node, canDelete) {
        var childNode;
        var connector;
        var diagram = document.getElementById("diagram").ej2_instances[0];
        var treeObj = document.getElementById("treeview").ej2_instances[0];
        for (var i = node.outEdges.length - 1; i >= 0; i--) {
            connector = diagram.getObject(node.outEdges[i]);
            childNode = diagram.getObject(connector.targetID);
            if (childNode != null && childNode.outEdges.length > 0) {
                removeSubChild(childNode, canDelete);
            }
            else {
                diagram.remove(childNode);
                if (canDelete) {
                    treeObj.removeNodes([childNode.id]);
                }
                for (var j = workingData.length - 1; j >= 0; j--) {
                    if (workingData[j].id === childNode.id) {
                        workingData.splice(j, 1);
                    }
                }
            }
        }
        for (var k = node.inEdges.length - 1; k >= 0; k--) {
            connector = diagram.getObject(node.inEdges[k]);
            childNode = diagram.getObject(connector.sourceID);
            var index = childNode.outEdges.indexOf(connector.id);
            if (childNode.outEdges.length > 1 && index === 0) {
                index = childNode.outEdges.length;
            }
            if (index > 0) {
                var node1 = childNode.outEdges[index - 1];
                var connector1 = diagram.getObject(node1);
                var node2 = diagram.getObject(connector1.targetID);
                diagram.select([node2]);
            }
            else {
                diagram.select([childNode]);
            }
        }
        diagram.remove(node);
        if (canDelete) {
            treeObj.removeNodes([node.id]);
        }
        for (var t = workingData.length - 1; t >= 0; t--) {
            if (workingData[t].id === node.id) {
                workingData.splice(t, 1);
            }
        }
    }
        function checkData(a) {
        return a.Id === targetNodeId;
    }

    function checkElementData(a) {
        return a.Id === elementNodeId;
    }

    function add() {
      var diagram = document.getElementById("diagram").ej2_instances[0];
      var treeObj = document.getElementById("treeview").ej2_instances[0];
        var nodeId;
        if (diagram.selectedItems.nodes.length > 0) {
            nodeId = diagram.selectedItems.nodes[0].id;
            addNode(nodeId);
        } else if (treeObj.selectedNodes.length > 0) {
            nodeId = treeObj.selectedNodes[0];
            addNode(nodeId);
        }
    }

    function filterNodeData(a) {
        return a.data.Id === targetNodeId;
    }

    function addNode(nodeId) {
       var diagram = document.getElementById("diagram").ej2_instances[0];
      var treeObj = document.getElementById("treeview").ej2_instances[0];
        targetNodeId = nodeId ? nodeId : treeObj.selectedNodes[0];
        var tempData = workingData.filter(checkData);
        tempData[0].hasChild = true;
        tempData[0].expanded = true;
        var id = 'tree_' + index;
        var item = {
            Name: "Node", Id: id, ParentId: targetNodeId, hasChild: false, expanded: false
        };
        treeObj.addNodes([item], targetNodeId, null);
        treeObj.beginEdit(id);
        var node = { id: id, data: item };
        var targetId;
        if (diagram.selectedItems.nodes.length > 0) {
            targetId = diagram.selectedItems.nodes[0].id;
        } else {
            var temp = diagram.nodes.filter(filterNodeData);
            targetId = temp[0].id;
        }
        var connector = { sourceID: targetId, targetID: id };
        diagram.add(node);
        diagram.add(connector);
        diagram.doLayout();
        index++;
        workingData.push(item);
    }

</script>