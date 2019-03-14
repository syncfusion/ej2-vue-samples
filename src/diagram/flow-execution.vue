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
                <div class="row property-panel-content" style="width:260px;">
                    <div class="row">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='UnhighlightAll' label="None" value="UnhighlightAll" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='LinksInto' label="Incoming connections" value="LinksInto" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='LinksOutOf' label='Outgoing connections' value="LinksOutOf" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='LinksConnected' label='Incoming and outgoing connections' value="LinksConnected" name='radio' :change='buttonChange' checked="true"></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='NodesInto' label='Incoming nodes' value="NodesInto" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='NodesOutOf' label='Outgoing nodes' value="NodesOutOf" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='NodesConnected' label='Incoming and outgoing nodes' value="NodesConnected" name='radio' :change='buttonChange'></ejs-radiobutton>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="col-xs-7">
                            <ejs-radiobutton id='NodesReachable' label='Adjacent nodes' value="NodesReachable" name='radio' :change='buttonChange'></ejs-radiobutton>
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
    <style>
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
import Vue from "vue";

import { Diagram, NodeModel, ConnectorModel, ShapeAnnotationModel, Segments, Node } from '@syncfusion/ej2-vue-diagrams';
import {
    DiagramPlugin,
    Direction,
    PathAnnotationModel,
    OrthogonalSegmentModel,
    PointPortModel,
    SnapConstraints,
    ISelectionChangeEventArgs
} from '@syncfusion/ej2-vue-diagrams';
import { radiobutton, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(DiagramPlugin);
Vue.use(RadioButtonPlugin);

function CreateConnector(
    name, source, target, content, type,
    direction, targePort, length) {
    let connector = {};
    connector.id = name;
    connector.sourceID = source;
    connector.targetID = target;
    connector.style = { strokeWidth: 2 };
    let annotation = {};
    annotation.content = content;
    annotation.style = { fill: 'white' };
    connector.annotations = [annotation];
    connector.style.strokeColor = '#8D8D8D';
    connector.targetDecorator = {};
    connector.targetDecorator.style = {};
    connector.targetDecorator.style.strokeColor = '#8D8D8D';
    connector.targetDecorator.style.fill = '#8D8D8D';
    if (targePort) {
        connector.targetPortID = targePort;
    }
    let segment = {};
    if (type) {
        connector.type = type;
        segment.direction = direction;
        segment.type = type;
        segment.length = length;
        connector.segments = [segment];
    }
    return connector;
}

function CreateNodes(
    name, offsetX, offsetY, shape, content,
    width, height, ports) {
    let node = {};
    node.id = name;
    node.offsetX = offsetX;
    node.width = 150;
    node.height = 50;
    node.offsetY = offsetY;
    let annotations = {};
    annotations.content = content;
    node.annotations = [annotations];
    node.shape = { type: 'Flow', shape: shape };
    node.style = { fill: '#FBF6E1', strokeColor: '#E8DFB6', strokeWidth: 2 };
    if (ports) {
        node.ports = ports;
    }
    return node;
}
let nodes = [];
let port1 = { id: 'port1', offset: { x: 0.5, y: 1 } };
let port = { id: 'port', offset: { x: 1, y: 0.5 } };
nodes.push(CreateNodes('node1', 100, 125, 'Terminator', 'Begin', 100, 35));
nodes.push(CreateNodes('node2', 300, 125, 'Process', 'Specify collection', 120, 25, [port]));
nodes.push(CreateNodes('node3', 500, 125, 'Decision', 'Particulars \n required?', 100, 50, [port1]));
nodes.push(CreateNodes('node4', 730, 125, 'Process', 'Specify particulars', 90, 25));
nodes.push(CreateNodes('node5', 500, 225, 'Process', 'Design collection', 100, 25, [port]));
nodes.push(CreateNodes('node6', 500, 320, 'Process', 'Cluster of events', 100, 25));
nodes.push(CreateNodes('node7', 500, 420, 'Process', 'Start the process', 100, 25));
nodes.push(CreateNodes('node8', 730, 320, 'Process', 'Record and analyze \n results', 170, 25, [port]));
nodes.push(CreateNodes('node9', 730, 420, 'Terminator', 'End ', 100, 35));
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

export default Vue.extend({
    data: function() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors: connectors,
            buttonChange: buttonChange,
            snapSettings: { constraints: SnapConstraints.None }
        };
    },
    mounted: function() {
        diagram = this.$refs.diagramObj.ej2Instances;
        diagram.selectionChange = (arg) => {
            applyChanges(selectedButton);
        };
        diagram.select([diagram.nodes[2]]);
    }
});

let highLightedObjects = [];
let selectedButton = 'LinksConnected';

function buttonChange(args) {
    applyChanges(args.event.srcElement.id);
    selectedButton = args.event.srcElement.id;
}

function applyChanges(id) {
    Unhighlight();
    switch (id) {
        case 'LinksInto':
            linkedIn();
            break;
        case 'LinksOutOf':
            LinksOut();
            break;
        case 'LinksConnected':
            LinksConnector();
            break;
        case 'NodesInto':
            NodesIn();
            break;
        case 'NodesOutOf':
            NodesOut();
            break;
        case 'NodesConnected':
            NodesConnect();
            break;
        case 'NodesReachable':
            NodeReachable();
            break;
    }
}
function linkedIn() {
    if (diagram.selectedItems.nodes.length) {
        var node = diagram.selectedItems.nodes[0].inEdges;
        for (var i = 0; i < node.length; i++) {
            var index = diagram.connectors.indexOf(diagram.nameTable[node[i]]);
            highLightedObjects.push(node[i]);
            diagram.connectors[index].style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';
            diagram.dataBind();
        }
    }
}
function LinksOut() {
    if (diagram.selectedItems.nodes.length) {
        var node = diagram.selectedItems.nodes[0].outEdges;
        for (var i = 0; i < node.length; i++) {
            var index = diagram.connectors.indexOf(diagram.nameTable[node[i]]);
            highLightedObjects.push(node[i]);
            diagram.connectors[index].style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';
            diagram.dataBind();
        }
    }
}
function LinksConnector() {
    LinksOut();
    linkedIn();
}
function NodesIn() {
    if (diagram.selectedItems.nodes.length) {
        var node = diagram.selectedItems.nodes[0].inEdges;
        for (var i = 0; i < node.length; i++) {
            var nodeId = diagram.nameTable[node[i]].sourceID;
            highLightedObjects.push(nodeId);
            var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);
            diagram.nodes[index].style.strokeColor = '#1413F8';
            diagram.dataBind();
        }
    }
}
function NodesOut() {
    if (diagram.selectedItems.nodes.length) {
        var node = diagram.selectedItems.nodes[0].outEdges;
        for (var i = 0; i < node.length; i++) {
            var nodeId = diagram.nameTable[node[i]].targetID;
            highLightedObjects.push(nodeId);
            var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);
            diagram.nodes[index].style.strokeColor = '#1413F8';
            diagram.dataBind();
        }
    }
}
function NodesConnect() {
    NodesOut();
    NodesIn();
}
function NodeReachable() {
    if (diagram.selectedItems.nodes.length) {
        var connectors_1 = diagram.selectedItems.nodes[0].outEdges;
        var nodeList = foundNode(connectors_1, []);
        for (var i = 0; i < nodeList.length; i++) {
            var index = diagram.connectors.indexOf(diagram.nameTable[nodeList[i]]);
            highLightedObjects.push(nodeList[i]);
            diagram.connectors[index].style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';
            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';
            diagram.dataBind();
        }
    }
}
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
function Unhighlight() {
    for (var i = highLightedObjects.length - 1; i >= 0; i--) {
        if (diagram.nameTable[highLightedObjects[i]] instanceof Node) {
            var index = diagram.nodes.indexOf(diagram.nameTable[highLightedObjects[i]]);
            diagram.nodes[index].style.strokeColor = '#E8DFB6';
            diagram.dataBind();
        }
        else {
            var index = diagram.connectors.indexOf(diagram.nameTable[highLightedObjects[i]]);
            diagram.connectors[index].style.strokeColor = '#8D8D8D';
            diagram.connectors[index].targetDecorator.style.strokeColor = '#8D8D8D';
            diagram.connectors[index].targetDecorator.style.fill = '#8D8D8D';
            diagram.dataBind();
        }
    }
    highLightedObjects = [];
}



</script>
