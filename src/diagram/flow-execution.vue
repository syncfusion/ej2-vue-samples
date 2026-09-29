<template>
    <div>
        <div class="col-lg-8 control-section">
            <div id="flowExecitionControlSection" class="content-wrapper" style="width: 100%;">
                <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :snapSettings='snapSettings'></ejs-diagram>
            </div>
        </div>
        <div id="flowExecitionPropertySection" class="col-lg-4 property-section">
            <div class="property-panel-header">
                Show flow execution
            </div>
            <div class="row property-panel-content" id="appearance">
                <div class="row property-panel-content" style="width:260px;overflow: hidden;">
                  <div
                        v-for="(button, index) in radioButtons"
                        :key="index"
                        :style="{ paddingTop: index === 0 ? '0px' : '8px' }">
                        <div class="row">
                        <div class=" col-xs-7">
                            <ejs-radiobutton
                                :id="button.id"
                                :label="button.label"
                                :value="button.value"
                                name="radio"
                                :change="buttonChange"
                                :checked="button.checked"
                            ></ejs-radiobutton>
                         </div>
                        </div>
                  </div>   
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates how we can process and get the consecutive nodes and connectors respectively.
            </p>
        </div>
        <div id="description">
            <p>
                We can get the inward connections and outward connections of the node using <code>inEdges</code> and <code>outEdges</code>        properties of the node. By using this connector’s name collection, we can find the node using <code>getObject</code>.
        And also, we can get the nodes connected on the connector using <code>sourceNode</code> and <code>targetNode</code>        properties of the connector. method can be used to print the diagrams.
            </p>
            <br>
        </div>
    </div>
</template>
<style scoped>
     /* Proprty panel CSS */
#flowExecitionPropertySection .row {
    margin-left: 0px;
    margin-right: 0px;
}

#flowExecitionPropertySection .col-xs-7 {
    width: 300px;
}

#flowExecitionPropertySection .col-xs-7 {
    padding-left: 0px;
    padding-right: 0px;
}

#flowExecitionControlSection.content-wrapper {
    border: 1px solid #D7D7D7;
}
</style>

<script>
import { Diagram, NodeModel, ConnectorModel, ShapeAnnotationModel, Segments, Node } from '@syncfusion/ej2-vue-diagrams';
import {
    DiagramComponent,
    SnapConstraints,
} from '@syncfusion/ej2-vue-diagrams';
import { radiobutton, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';

//Function to create connector object with basic properties.
function CreateConnector(
    name, source, target, content, type,
    direction, targePort, length) {
    let connector = {};
    connector.id = name;
    connector.sourceID = source;
    connector.targetID = target;
    if (targePort) {
        connector.targetPortID = targePort;
    }
    connector.style = { strokeWidth: 2 ,strokeColor :'#8D8D8D'};
    let annotation = {content: content, style: { fill: 'white' }};
    connector.annotations = [annotation];
    connector.targetDecorator = {style: { strokeColor: '#8D8D8D', fill: '#8D8D8D' }};
    let segment = {type,direction,length};
    if (type) {
        connector.type = type;
        connector.segments = [segment];
    }
    return connector;
}

//Function to create node object with basic properties.
function CreateNodes(id, offsetX, offsetY, shape, content,ports) {
    let node = {
        id,
        offsetX,
        offsetY,
        width: 150,
        height: 50,
        shape: { type: 'Flow', shape: shape },
        style : { fill: '#FBF6E1', strokeColor: '#E8DFB6', strokeWidth: 2 },
    };
    let annotations = {content: content };
    node.annotations = [annotations];
    if (ports) {
        node.ports = ports;
    }
    return node;
}

let port1 = { id: 'port1', offset: { x: 0.5, y: 1 } };
let port = { id: 'port', offset: { x: 1, y: 0.5 } };

//Initialize diagram Nodes
let nodes = [];
nodes.push(CreateNodes('node1', 100, 125, 'Terminator', 'Begin'));
nodes.push(CreateNodes('node2', 300, 125, 'Process', 'Specify collection', [port]));
nodes.push(CreateNodes('node3', 500, 125, 'Decision', 'Particulars \n required?',[port1]));
nodes.push(CreateNodes('node4', 730, 125, 'Process', 'Specify particulars'));
nodes.push(CreateNodes('node5', 500, 225, 'Process', 'Design collection', [port]));
nodes.push(CreateNodes('node6', 500, 320, 'Process', 'Cluster of events',));
nodes.push(CreateNodes('node7', 500, 420, 'Process', 'Start the process',5));
nodes.push(CreateNodes('node8', 730, 320, 'Process', 'Record and analyze \n results', [port]));
nodes.push(CreateNodes('node9', 730, 420, 'Terminator', 'End ',));

//Initialize diagram connectors
let connectors = [];
connectors.push(CreateConnector('connector1', 'node1', 'node2', ''));
connectors.push(CreateConnector('connector2', 'node2', 'node3', ''));
connectors.push(CreateConnector('connector3', 'node3', 'node4', 'Yes'));
connectors.push(CreateConnector('connector4', 'node3', 'node5', 'No'));
connectors.push(CreateConnector('connector5', 'node5', 'node6', ''));
connectors.push(CreateConnector('connector6', 'node6', 'node7', ''));
connectors.push(CreateConnector('connector7', 'node8', 'node6', ''));
connectors.push(CreateConnector('connector8', 'node7', 'node9', ''));
connectors.push(CreateConnector('connector10', 'node4', 'node5', '', 'Orthogonal', 'Bottom', 'port', 220));

let node;
let element;
let diagram;
let highLightedObjects = [];
let selectedButton = 'LinksConnected';

export default {
    components: {
        'ejs-diagram': DiagramComponent,
        'ejs-radiobutton': RadioButtonComponent
    }, 
    data: function() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors: connectors,
            buttonChange: buttonChange,
            snapSettings: { constraints: SnapConstraints.None },
            radioButtons: [
                { id: 'UnhighlightAll', label: 'None', value: 'UnhighlightAll' },
                { id: 'LinksInto', label: 'Incoming connections', value: 'LinksInto' },
                { id: 'LinksOutOf', label: 'Outgoing connections', value: 'LinksOutOf' },
                { id: 'LinksConnected', label: 'Incoming and outgoing connections', value: 'LinksConnected', checked: true },
                { id: 'NodesInto', label: 'Incoming nodes', value: 'NodesInto' },
                { id: 'NodesOutOf', label: 'Outgoing nodes', value: 'NodesOutOf' },
                { id: 'NodesConnected', label: 'Incoming and outgoing nodes', value: 'NodesConnected' },
                { id: 'NodesReachable', label: 'Flow of Execution', value: 'NodesReachable' }
            ]
        };
    },
    mounted: function() {
        diagram = this.$refs.diagramObj.ej2Instances;
        diagram.selectionChange = (arg) => {
            applyChanges(selectedButton);
        };
        diagram.select([diagram.nodes[2]]);
    }
}

function buttonChange(args) {
    applyChanges(args.event.srcElement.id);
    selectedButton = args.event.srcElement.id;
}

//Function To call respective methods based on user selection.
function applyChanges(id) {
    Unhighlight();
    switch (id) {
        case 'LinksInto':
            highlightIncomingConnections();
            break;
        case 'LinksOutOf':
            highlightOutgoingConnections();
            break;
        case 'LinksConnected':
            highlightIncomingConnections();
            highlightOutgoingConnections();
            break;
        case 'NodesInto':
            highlightIncomingNodes();
            break;
        case 'NodesOutOf':
            highlightOutgoingNodes();
            break;
        case 'NodesConnected':
           highlightIncomingNodes();
           highlightOutgoingNodes();
            break;
        case 'NodesReachable':
            highlightReachableNodes();
            break;
    }
}

//To highlight connectors
function highlightConnectors(edges) {
    edges.forEach(edge => {
        let index = diagram.connectors.indexOf(diagram.nameTable[edge]);
        highLightedObjects.push(edge);
        let connector = diagram.connectors[index];
        connector.style.strokeColor = '#1413F8';
        connector.targetDecorator.style.strokeColor = '#1413F8';
        connector.targetDecorator.style.fill = '#1413F8';
        diagram.dataBind();
    });
};

// Function to Highlight the incoming connectors.
function highlightIncomingConnections() {
if (diagram.selectedItems.nodes.length) {
    var node = diagram.selectedItems.nodes[0].inEdges;
    highlightConnectors(node);
    }
}

// Function to Highlight the outgoing connectors.
function highlightOutgoingConnections() {
if (diagram.selectedItems.nodes.length) {
    var node = diagram.selectedItems.nodes[0].outEdges;
    highlightConnectors(node);
}
}

//To highlight nodes
function highlightNodes(edges, edgeType) {
    edges.forEach(edge => {
        let nodeId = diagram.nameTable[edge][edgeType];
        highLightedObjects.push(nodeId);
        let index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);
        diagram.nodes[index].style.strokeColor = '#1413F8';
        diagram.dataBind();
    });
};

//Function to Highlight the incoming Nodes.
function highlightIncomingNodes() {
if (diagram.selectedItems.nodes.length) {
    var node = diagram.selectedItems.nodes[0].inEdges;
    highlightNodes(node, 'sourceID');

  }
}

//Function to Highlight the outgoing Nodes.
function highlightOutgoingNodes(){
if (diagram.selectedItems.nodes.length) {
    var node = diagram.selectedItems.nodes[0].outEdges;
    highlightNodes(node, 'targetID');
 }
}

//Function to display the flow of execution.
function highlightReachableNodes() {
if (diagram.selectedItems.nodes.length) {
    var connectors_1 = diagram.selectedItems.nodes[0].outEdges;
    var nodeList = foundNode(connectors_1, []);
    highlightConnectors(nodeList);
}
}

//Function to find the connected nodes.
function foundNode(list, nodeList) {
for (var i = 0; i < list.length; i++) {
    var connector = diagram.nameTable[list[i]];
    if (nodeList.indexOf(connector.id) > -1) {
        break;
    }
    if (!connector.annotations[0] || (connector.annotations[0] && connector.annotations[0].content !== 'No')) {
        nodeList.push(connector.id);
    }
    if (diagram.nameTable[connector.targetID].outEdges.length) {
        if (list.indexOf(connector.targetID) === -1) {
            foundNode(diagram.nameTable[connector.targetID].outEdges, nodeList);
        }
    }
}
 return nodeList;
}

//Function To unhighlight highlighted objects.
function Unhighlight() {
for (var i = highLightedObjects.length - 1; i >= 0; i--) {
    if (diagram.nameTable[highLightedObjects[i]] instanceof Node) {
        var index = diagram.nodes.indexOf(diagram.nameTable[highLightedObjects[i]]);
        diagram.nodes[index].style.strokeColor = '#E8DFB6';
        diagram.dataBind();
    }
    else {
        var index = diagram.connectors.indexOf(diagram.nameTable[highLightedObjects[i]]);
        var connector = diagram.connectors[index];
        connector.style.strokeColor = '#8D8D8D';
        connector.targetDecorator.style.strokeColor = '#8D8D8D';
        connector.targetDecorator.style.fill = '#8D8D8D';
        diagram.dataBind();
    }
}
highLightedObjects = [];
}


</script>
