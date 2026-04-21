<template>
    <div class="control-pane" id="diagram-functionalities">
        <div class="control-section">
            <div class='control-wrapper'>
                <div class="main diagramMindmap">
                    <div class="db-toolbar-editor">
                        <div class="db-toolbar-container">
                            <ejs-toolbar ref="toolbar" :clicked='function (args) { toolbarClick(args); }'
                                :created='toolbarCreated' :items='toolbarItems()' overflowMode='Scrollable' width='100%'
                                :height='40'>
                                <template #btnZoomIncrement>
                                    <ejs-dropdownbutton id="btnZoomIncrement" ref='btnZoomIncrement'
                                        :items='zoomMenuItems' :select='zoomChange'>{{ ddbContent
                                        }}</ejs-dropdownbutton>
                                </template>
                            </ejs-toolbar>
                        </div>
                    </div>

                    <div style="margin-top: 5px;margin-left: 5px;margin-right: 5px; border: 1px solid #b0b0b0;"
                        id="mindmap-diagram-space">
                        <ejs-diagram ref="diagram" width='100%' height='900px' :selectionChange='selectionChange'
                            :scrollSettings="{ scrollLimit: 'Diagram' }" :layout="diagramLayout" :onUserHandleMouseDown='onUserHandleMouseDown'
                            :selectedItems='selectedItems' :dataSourceSettings="{
                                id: 'id',
                                parentId: 'parentId',
                                dataSource: items,
                                root: String(1),
                            }" :rulerSettings="{ showRulers: true }" :scrollChange="scrollChange"
                            :getNodeDefaults="getNodeDefaults" :historyChange='historyChange'
                            :getConnectorDefaults="getConnectorDefaults"></ejs-diagram>
                    </div>
                </div>

                <div id='container'>
                    <ejs-dialog ref='dialog' header='header' :showCloseIcon='true' :isModal='true' content='content'
                        target='.control-section' width='540px' :visible='false' height='310px'>
                        <template #header>
                            <span class="e-icons e-assistview-icon"
                                style="color: black;width:20px; font-size: 16px;"></span>
                            AI
                            Assist
                        </template>
                        <template #content>
                            <p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
                            <ejs-button id="btn1" @click="btnClick"
                                style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for
                                top
                                tourist places in the world</ejs-button>
                            <ejs-button id="btn2" @click="btnClick"
                                style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for
                                categories of topics in science</ejs-button>
                            <ejs-button id="btn3" @click="btnClick"
                                style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for
                                different components in syncfusion</ejs-button>
                            <div style="display: flex; align-items: center; margin-top: 20px;">
                                <ejs-textbox type="text" ref="textBox" id="textBox" class="db-openai-textbox"
                                    style="flex: 1;" placeholder='Please enter your prompt here...'
                                    :input='onTextBoxChange' />
                                <ejs-button ref="sendButton" iconCss='e-icons e-send' :isPrimary='true' :disabled='true'
                                    id="diagram-db-send" style="margin-left: 5px; height: 32px; width: 32px;"
                                    @click='dbSend'></ejs-button>
                            </div>
                        </template>
                    </ejs-dialog>
                </div>
                <ejs-fab :isPrimary='true' iconCss='e-icons e-assistview-icon' @click='aiOnClick'
                    target="#mindmap-diagram-space">AI
                    Assist</ejs-fab>

                <!-- Loading indicator container -->
                <div id="loadingContainer" class="diagram-loading-container">
                    <div class="loading-indicator"></div>
                    <div class="loading-text">Generating Mindmap...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
* Default MindMap sample
*/
import { UndoRedo, Node, DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent, FabComponent } from '@syncfusion/ej2-vue-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ConnectorConstraints, DataBinding, DiagramTools, MindMap, NodeConstraints, PointPort, PortVisibility, PrintAndExport, randomId, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { ToolbarComponent } from '@syncfusion/ej2-vue-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
import { serverAIRequest } from '../common/ai-service';

let leftarrow = 'M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z';
let rightarrow = 'M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z';
let devareicon = 'M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76' +
    '96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04' +
    '91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z';
let leftuserhandle = setUserHandle('leftHandle', leftarrow, 'Left', 0.5, { top: 10, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');
let rightuserhandle = setUserHandle('rightHandle', rightarrow, 'Right', 0.5, { top: 10, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
let devareuserhandle = setUserHandle('devare', devareicon, 'Top', 0.5, { top: 0, bottom: 0, left: 0, right: 0 }, 'Center', 'Center');
let handle = [leftuserhandle, rightuserhandle, devareuserhandle];

function setUserHandle(name, pathData, side, offset, margin, halignment, valignment) {
    var userhandle = {
        name: name,
        pathData: pathData,
        backgroundColor: 'black',
        pathColor: 'white',
        side: side,
        offset: offset,
        margin: margin,
        horizontalAlignment: halignment,
        verticalAlignment: valignment,
    };
    return userhandle;
};

export default {
    components: {
        'ejs-diagram': DiagramComponent,
        'ejs-fab': FabComponent,
        'ejs-toolbar': ToolbarComponent,
        'ejs-dropdownbutton': DropDownButtonComponent,
        'ejs-uploader': UploaderComponent,
        'ejs-dialog': DialogComponent,
        'ejs-button': ButtonComponent,
        'ejs-textbox': TextBoxComponent
    },
    data() {
        return {
            data: [
                { id: "1", Label: "Business Planning", parentId: "", branch: "Root", fill: "#D0ECFF", hasChild: true, level: 0, strokeColor: "#D0ECFF", orientation: "Root" },
                { id: "2", Label: "Expectation", parentId: "1", branch: "Left", fill: "#C4F2E8", hasChild: true, level: 1, strokeColor: "#C4F2E8", orientation: "Left" },
                { id: "3", Label: "Requirements", parentId: "1", branch: "Right", fill: "#F7E0B3", hasChild: true, level: 1, strokeColor: "#F7E0B3", orientation: "Right" },
                { id: "4", Label: "Marketing", parentId: "1", branch: "Left", fill: "#E5FEE4", hasChild: true, level: 1, strokeColor: "#E5FEE4", orientation: "Left" },
                { id: "5", Label: "Budgets", parentId: "1", branch: "Right", fill: "#E9D4F1", hasChild: true, level: 1, strokeColor: "#E9D4F1", orientation: "Right" },
                { id: "6", Label: "Situation in Market", parentId: "1", branch: "Left", fill: "#90C8C2", hasChild: true, level: 1, strokeColor: "#90C8C2", orientation: "Left" },
                { id: "7", Label: "Product Sales", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "8", Label: "Strategy", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "9", Label: "Contacts", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "10", Label: "Customer Groups", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "11", Label: "Branding", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "12", Label: "Advertising", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "13", Label: "Competitors", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
                { id: "14", Label: "Location", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
                { id: "15", Label: "Director", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "16", Label: "Accounts Department", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "17", Label: "Administration", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "18", Label: "Development", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "19", Label: "Estimation", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
                { id: "20", Label: "Profit", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
                { id: "21", Label: "Funds", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" }
            ],
            workingData: [
                { id: "1", Label: "Business Planning", parentId: "", branch: "Root", fill: "#D0ECFF", hasChild: true, level: 0, strokeColor: "#D0ECFF", orientation: "Root" },
                { id: "2", Label: "Expectation", parentId: "1", branch: "Left", fill: "#C4F2E8", hasChild: true, level: 1, strokeColor: "#C4F2E8", orientation: "Left" },
                { id: "3", Label: "Requirements", parentId: "1", branch: "Right", fill: "#F7E0B3", hasChild: true, level: 1, strokeColor: "#F7E0B3", orientation: "Right" },
                { id: "4", Label: "Marketing", parentId: "1", branch: "Left", fill: "#E5FEE4", hasChild: true, level: 1, strokeColor: "#E5FEE4", orientation: "Left" },
                { id: "5", Label: "Budgets", parentId: "1", branch: "Right", fill: "#E9D4F1", hasChild: true, level: 1, strokeColor: "#E9D4F1", orientation: "Right" },
                { id: "6", Label: "Situation in Market", parentId: "1", branch: "Left", fill: "#90C8C2", hasChild: true, level: 1, strokeColor: "#90C8C2", orientation: "Left" },
                { id: "7", Label: "Product Sales", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "8", Label: "Strategy", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "9", Label: "Contacts", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
                { id: "10", Label: "Customer Groups", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "11", Label: "Branding", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "12", Label: "Advertising", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
                { id: "13", Label: "Competitors", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
                { id: "14", Label: "Location", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
                { id: "15", Label: "Director", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "16", Label: "Accounts Department", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "17", Label: "Administration", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "18", Label: "Development", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
                { id: "19", Label: "Estimation", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
                { id: "20", Label: "Profit", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
                { id: "21", Label: "Funds", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" }
            ],
            currentBranch: 'Left',
            lastFillIndex: 0,
            fillColorCode: ['#C4F2E8', '#F7E0B3', '#E5FEE4', '#E9D4F1', '#D4EFED', '#DEE2FF'],
            borderColorCode: ['#8BC1B7', '#E2C180', '#ACCBAA', '#D1AFDF', '#90C8C2', '#BBBFD6'],

            diagramTool: DiagramTools.Default,
            selectedItems: { constraints: SelectorConstraints.UserHandle, userHandles: handle },
            diagramLayout: {
                type: 'MindMap', horizontalSpacing: 80,
                verticalSpacing: 50,
                getBranch: function (node) {
                    if (node.addInfo) {
                        var addInfo = node.addInfo;
                        return (addInfo).orientation.toString();
                    }
                    return 'Left';
                }
            },

            items: undefined,
            ddbContent: '',
            index: 1,
            zoomMenuItems: [
                { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
                { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' },
            ],
        }
    },
    methods: {
        getConnectorDefaults: function (connector) {
            const diagram = this.$refs.diagram.ej2Instances;
            connector.type = 'Bezier';
            connector.targetDecorator = { shape: 'None' };
            connector.bezierSettings.allowSegmentsReset = false;
            connector.segments = [{ type: 'Bezier' }];
            var sourceNode = diagram.getObject(connector.sourceID);
            var targetNode = diagram.getObject(connector.targetID);

            if (!sourceNode.data) {
                sourceNode.data = {};
                sourceNode.data.id = sourceNode.id;
                sourceNode.data.branch = 'Root';
                sourceNode.data.orientation = 'Root';
                sourceNode.data.level = 0;
                sourceNode.data.parentId = '';
                sourceNode.data.Label = sourceNode.annotations[0] ? sourceNode.annotations[0].content : "Node";
                sourceNode.addInfo = sourceNode.data;
                let nodeData = this.getMindMapShape(sourceNode);
                sourceNode.data.fill = nodeData.node.style.fill;
                sourceNode.data.strokeColor = nodeData.node.style.strokeColor;
                sourceNode.addInfo = sourceNode.data;
                sourceNode.style.fill = sourceNode.data.fill;
                sourceNode.style.strokeColor = sourceNode.data.strokeColor;
            }
            if (!targetNode.data) {
                targetNode.data = {};
                targetNode.data.id = targetNode.id;
                targetNode.data.branch = sourceNode.data.branch === 'Root'
                    ? this.currentBranch
                    : (sourceNode.data.branch === 'Left' || sourceNode.data.branch === 'subLeft' || sourceNode.data.branch === 'SubLeft' ? 'subLeft' : 'subRight');

                targetNode.data.orientation = targetNode.data.branch === 'Left' || targetNode.data.branch === 'subLeft' ? 'Left' : 'Right';
                targetNode.data.level = sourceNode.data.level + 1;
                targetNode.data.parentId = sourceNode.data.id;
                targetNode.data.Label = targetNode.annotations[0] ? targetNode.annotations[0].content : "Node";
                targetNode.addInfo = targetNode.data;
                let nodeData = this.getMindMapShape(sourceNode);
                targetNode.data.fill = nodeData.node.style.fill;
                targetNode.data.strokeColor = nodeData.node.style.strokeColor;
                targetNode.addInfo = targetNode.data;
                targetNode.style.fill = targetNode.data.fill;
                targetNode.style.strokeColor = targetNode.data.strokeColor;
                this.currentBranch = sourceNode.data.branch === 'Root' ? this.currentBranch === 'Left' ? 'Right' : 'Left' : this.currentBranch;
            }
            if (targetNode.data && (targetNode.data.branch === 'Right' || targetNode.data.branch === 'subRight' || targetNode.data.branch === 'SubRight')) {
                connector.sourcePortID = sourceNode.ports[0].id;
                connector.targetPortID = targetNode.ports[1].id;
                connector.style = { strokeWidth: 1, strokeColor: '#8c8c8c' };
            }
            else if (targetNode.data && (targetNode.data.branch === 'Left' || targetNode.data.branch === 'subLeft' || targetNode.data.branch === 'SubLeft')) {
                connector.sourcePortID = sourceNode.ports[1].id;
                connector.targetPortID = targetNode.ports[0].id;
                connector.style = { strokeWidth: 1, strokeColor: '#8c8c8c' };
            }
            connector.constraints &= ~ConnectorConstraints.Select;
            return connector;
        },
        getMindMapShape: function (parentNode) {
            var sss = {};
            var node = {};
            var connector = {};
            var addInfo = parentNode.addInfo;
            node = {
                minWidth: 100, maxWidth: 100, shape: { type: 'Basic', shape: 'Rectangle' },
                annotations: [{ content: '' }],
                style: { fill: '#000000', strokeColor: '#000000' },
                addInfo: { level: (addInfo).level + 1 },
                offsetX: 200, offsetY: 200
            };
            connector = { type: 'Bezier', style: { strokeColor: '#000000' } };
            if ((addInfo).level < 1) {
                (node).style.fill = this.fillColorCode[this.lastFillIndex];
                (node).style.strokeColor = this.borderColorCode[this.lastFillIndex];
                ;
                if (this.lastFillIndex + 1 >= this.fillColorCode.length) {
                    this.lastFillIndex = 0;
                }
                else {
                    this.lastFillIndex++;
                }
            }
            else {
                (node).style.strokeColor = (node).style.fill = (parentNode).style.fill;
            }
            connector.type = 'Bezier';
            (connector).style.strokeColor = (node).style.fill;
            connector.targetDecorator = { shape: 'None' };
            //connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select | ConnectorConstraints.Delete;
            (node).constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
            (node).ports = [
                { id: 'leftPort', offset: { x: 0, y: 0.5 } },
                { id: 'rightPort', offset: { x: 1, y: 0.5 } },
                { id: 'topPort', offset: { x: 0.5, y: 0 } },
                { id: 'bottomPort', offset: { x: 0.5, y: 1 } }];
            (sss).node = node;
            (sss).connector = connector;
            return sss;
        },
        setUserHandle: function (name, pathData, side, offset, margin, halignment, valignment) {
            var userhandle = {
                name: name,
                pathData: pathData,
                backgroundColor: 'black',
                pathColor: 'white',
                side: side,
                offset: offset,
                margin: margin,
                horizontalAlignment: halignment,
                verticalAlignment: valignment,
            };
            return userhandle;
        },
        scrollChange: function (args) {
            const diagram = this.$refs.diagram.ej2Instances;
            if (args.panState !== 'Start') {
                this.ddbContent = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
                let zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
                if (zoomCurrentValue) {
                    zoomCurrentValue.content = this.ddbContent;
                }
            }
        },

        onUserHandleMouseDown: function (args) {
            const diagram = this.$refs.diagram.ej2Instances;
            if (args.element.name === 'leftHandle') {
                this.addNode('Right');
            }
            else if (args.element.name === 'rightHandle') {
                this.addNode('Left');
            }
            else if (args.element.name === 'devare') {
                if (diagram.selectedItems.nodes.length > 0) {
                    diagram.historyManager.startGroupAction();
                    this.removeSubChild(diagram.selectedItems.nodes[0]);
                    diagram.historyManager.endGroupAction();
                    diagram.doLayout();
                }
            }
        },
        removeSubChild: function (node) {
            const diagram = this.$refs.diagram.ej2Instances;
            // Process outgoing edges
            for (let i = node.outEdges.length - 1; i >= 0; i--) {
                const connector = this.getConnector(diagram.connectors, node.outEdges[i]);
                const childNode = this.getNode(diagram.nodes, connector.targetID);

                if (childNode && childNode.outEdges.length > 0) {
                    this.removeSubChild(childNode);
                } else {
                    for (let x = this.workingData.length - 1; x >= 0; x--) {
                        if (this.workingData[x].id === (childNode.data).id) {
                            this.workingData.splice(x, 1);
                        }
                    }
                    diagram.remove(childNode);
                }
            }

            // Process incoming edges
            for (let j = node.inEdges.length - 1; j >= 0; j--) {
                const connector = this.getConnector(diagram.connectors, node.inEdges[j]);
                const childNode = this.getNode(diagram.nodes, connector.sourceID);
                let index = childNode.outEdges.indexOf(connector.id);

                if (childNode.outEdges.length > 1 && index === 0) {
                    index = childNode.outEdges.length;
                }

                if (index > 0) {
                    const node1 = childNode.outEdges[index - 1];
                    const connector1 = diagram.getObject(node1);
                    const node2 = this.getNode(diagram.nodes, connector1.targetID);
                    diagram.select([node2]);
                } else {
                    diagram.select([childNode]);
                }
            }

            // Remove the node from workingData
            for (let x = this.workingData.length - 1; x >= 0; x--) {
                if (this.workingData[x].id === (node.data).id) {
                    this.workingData.splice(x, 1);
                }
            }

            // Remove the node from the diagram
            diagram.remove(node);
        },
        toolbarCreated: function () {
            const diagram = this.$refs.diagram.ej2Instances;
            if (diagram !== undefined) {
                this.ddbContent = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
                // refreshOverflow();
            }
        },
        addSibilingChild: function () {
            const diagram = this.$refs.diagram.ej2Instances;
            var selectedNode = diagram.selectedItems.nodes[0];
            if (selectedNode.data.branch !== 'Root') {
                var selectedNodeOrientation = selectedNode.addInfo.orientation.toString();
                var orientation_3 = selectedNodeOrientation;
                var connector1 = this.getConnector(diagram.connectors, selectedNode.inEdges[0]);
                diagram.startGroupAction();
                var mindmapData = this.getMindMapShape(this.getNode(diagram.nodes, connector1.sourceID));
                var node = mindmapData.node;
                this.index = this.index + 1;
                node.id = this.index.toString();
                if (node.addInfo) {
                    node.addInfo.orientation = orientation_3;
                }
                else {
                    node.addInfo = { 'orientation': orientation_3 };
                }
                var nodeData = {
                    id: node.id,
                    Label: 'Node',
                    fill: node.style.fill,
                    branch: orientation_3,
                    strokeColor: node.style.strokeColor,
                    parentId: selectedNode.data.id,
                    level: node.addInfo.level,
                    orientation: node.addInfo.orientation,
                    hasChild: false,
                };
                node.data = {
                    id: node.id,
                    Label: 'Node',
                    fill: node.style.fill,
                    strokeColor: node.style.strokeColor,
                    orientation: node.addInfo.orientation,
                    branch: orientation_3,
                    parentId: selectedNode.data.id,
                    level: node.addInfo.level,
                    hasChild: false,
                };
                var tempData = this.workingData.filter(
                    (a) => a.id === selectedNode.data.id
                );
                tempData[0].hasChild = true;
                this.workingData.push(nodeData);
                diagram.add(node);
                var connector = this.setConnectorDefault(diagram, orientation_3, mindmapData.connector, connector1.sourceID, node.id);
                diagram.add(connector);
                var node1 = this.getNode(diagram.nodes, node.id);
                diagram.doLayout();
                diagram.endGroupAction();
                diagram.select([node1]);
            }
        },
        addNode: function (orientation, label, canSelect) {
            const diagram = this.$refs.diagram.ej2Instances;
            var selectedNode = diagram.selectedItems.nodes[0];
            if (selectedNode.data.branch !== 'Root') {
                var selectedNodeOrientation = selectedNode.addInfo.orientation.toString();
                orientation = selectedNodeOrientation;
            }
            diagram.startGroupAction();
            var mindmapData = this.getMindMapShape(selectedNode);
            var node = mindmapData.node;
            // addMindMapLevels('Level' + node.addInfo.level);
            this.index = this.index + 1;
            node.id = this.index.toString();
            if (node.addInfo) {
                node.addInfo.orientation = orientation;
            }
            else {
                node.addInfo = { 'orientation': orientation };
            }
            // selectedNode.expandIcon.shape = isExpanded ? 'Minus' : 'None';
            // selectedNode.collapseIcon.shape = isExpanded ? 'Plus' : 'None';
            var nodeData = {
                id: node.id,
                Label: label ? label : "Node",
                fill: node.style.fill,
                branch: orientation,
                strokeColor: node.style.strokeColor,
                parentId: selectedNode.data.id,
                level: node.addInfo.level,
                orientation: node.addInfo.orientation,
                hasChild: false,
            };
            node.data = {
                id: node.id,
                Label: label ? label : "Node",
                fill: node.style.fill,
                strokeColor: node.style.strokeColor,
                orientation: node.addInfo.orientation,
                branch: orientation,
                parentId: selectedNode.data.id,
                level: node.addInfo.level,
                hasChild: false,
            };
            var tempData = this.workingData.filter(
                (a) => a.id === selectedNode.data.id
            );
            tempData[0].hasChild = true;
            this.workingData.push(nodeData);
            diagram.add(node);
            var connector = this.setConnectorDefault(diagram, orientation, mindmapData.connector, selectedNode.id, node.id);
            diagram.add(connector);
            var node1 = this.getNode(diagram.nodes, node.id);
            diagram.doLayout();
            diagram.endGroupAction();
            if (!canSelect) {
                diagram.select([node1]);
            }
        },
        getConnector: function (connectors, name) {
            for (var i = 0; i < connectors.length; i++) {
                if (connectors[i].id === name) {
                    return connectors[i];
                }
            }
            return null;
        },
        getNode: function (nodes, name) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].id === name) {
                    return nodes[i];
                }
            }
            return null;
        },
        setConnectorDefault: function (diagram, orientation, connector, sourceID, targetID) {
            connector.id = 'connector' + randomId();
            connector.sourceID = sourceID;
            connector.targetID = targetID;
            connector.sourcePortID = 'rightPort';
            connector.targetPortID = 'leftPort';
            if (orientation === 'Right') {
                connector.sourcePortID = 'leftPort';
                connector.targetPortID = 'rightPort';
            }
            connector.style.strokeWidth = 3;
            return connector;
        },
        toolbarItems: function () {
            let items = [
                { prefixIcon: 'e-icons e-undo e-icons', tooltipText: 'Undo', disabled: true },
                { prefixIcon: 'e-icons e-redo e-icons', tooltipText: 'Redo', disabled: true },
                {
                    type: 'Separator'
                },
                { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-selected' },
                { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: '' },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'ai-sf-icon-add-child', tooltipText: 'Add Child', disabled: true
                },
                {
                    prefixIcon: 'ai-sf-icon-add-sibling', tooltipText: 'Add Sibling', disabled: true
                },
                {
                    type: 'Separator'
                },
                {
                    cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: 'btnZoomIncrement', align: "Right",
                }

            ];
            return items;
        },
        selectionChange: function (args) {
            const diagram = this.$refs.diagram.ej2Instances;
            if (args.state === 'Changing') {
                if (args.type === "Addition") {
                    if (args.newValue[0] instanceof Node && args.newValue[0].addInfo) {
                        for (var _i = 0, _a = diagram.selectedItems.userHandles; _i < _a.length; _i++) {
                            var handle_1 = _a[_i];
                            handle_1.visible = true;
                        }
                        if ((args.newValue[0].addInfo).orientation === 'Left' ||
                            (args.newValue[0].addInfo).orientation === 'subLeft' ||
                            (args.newValue[0].addInfo).orientation === 'SubLeft') {
                            this.hideUserHandle('leftHandle');
                            this.changeUserHandlePosition('leftHandle');
                            this.changeUserHandlePosition('devare');
                        }
                        else if ((args.newValue[0].addInfo).orientation === 'Right' ||
                            (args.newValue[0].addInfo).orientation === 'subRight' ||
                            (args.newValue[0].addInfo).orientation === 'SubRight') {
                            this.hideUserHandle('rightHandle');
                            this.changeUserHandlePosition('rightHandle');
                            this.changeUserHandlePosition('devare');

                        }
                        else if ((args.newValue[0].data).branch === 'Root') {
                            this.hideUserHandle('devare');
                        }
                        this.onClickDisable(false, args.newValue[0]);
                    }
                    else {
                        this.hideUserHandle('leftHandle');
                        this.hideUserHandle('rightHandle');
                        this.hideUserHandle('devare');
                        this.onClickDisable(true, args.newValue[0]);
                    }
                }
            }
            if (args.newValue.length === 0) {
                this.onClickDisable(true);
            }
        },
        onClickDisable: function (args, node) {
            const toolbarObj = this.$refs.toolbar.ej2Instances;
            if (args === false) {
                toolbarObj.items[6].disabled = false;
                toolbarObj.items[7].disabled = false;
                if (((node).addInfo).level !== 0) {
                    toolbarObj.items[7].disabled = false;
                } else {
                    toolbarObj.items[7].disabled = true;
                }
            }
            else if (args === true) {
                toolbarObj.items[6].disabled = true;
                toolbarObj.items[7].disabled = true;
            }
        },
        hideUserHandle: function (name) {
            const diagram = this.$refs.diagram.ej2Instances;
            for (let i = 0; i < diagram.selectedItems.userHandles.length; i++) {
                var handle = diagram.selectedItems.userHandles[i];
                if (handle.name === name) {
                    handle.visible = false;
                }
            }
        },
        applyHandle: function (handle, side, offset, margin, halignment, valignment) {
            handle.side = side;
            handle.offset = offset;
            handle.margin = margin;
            handle.horizontalAlignment = halignment;
            handle.verticalAlignment = valignment;
        },
        //Change the Position of the UserHandle.
        changeUserHandlePosition: function (change) {
            const diagram = this.$refs.diagram.ej2Instances;
            for (var i = 0; i < diagram.selectedItems.userHandles.length; i++) {
                var handle = diagram.selectedItems.userHandles[i];
                if (handle.name === 'devare' && change === 'leftHandle') {
                    this.applyHandle(handle, 'Left', 1, { top: 0, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');

                } else if (handle.name === 'devare' && change === 'rightHandle') {
                    this.applyHandle(handle, 'Right', 1, { top: 0, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
                }
            }
        },
        historyChange: function () {
            const diagram = this.$refs.diagram.ej2Instances;
            const toolbarObj = this.$refs.toolbar.ej2Instances;
            if (diagram.historyManager.undoStack.length > 0) {
                toolbarObj.items[0].disabled = false;
            } else {
                toolbarObj.items[0].disabled = true;
            }
            if (diagram.historyManager.redoStack.length > 0) {
                toolbarObj.items[1].disabled = false;
            } else {
                toolbarObj.items[1].disabled = true;
            }
        },
        //Sets the default values of a node
        getNodeDefaults: function (obj) {
            if (obj.id !== 'textNode' && obj.data) {
                obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
                var empInfo = obj.data;
                obj.style = {
                    fill: (obj.data).fill, strokeColor: (obj.data).strokeColor,
                    strokeWidth: 1
                };
                if (empInfo.branch === 'Root') {
                    obj.addInfo = { level: 0 };
                    (obj.data).level = (obj.addInfo).level;
                    (obj.data).orientation = empInfo.branch;
                }
                obj.addInfo = { level: (obj.data).level, orientation: (obj.data).orientation };
                // if ((obj.data).orientation === "Left") {
                //     obj.expandIcon = { shape: isExpanded ? 'Minus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                //     obj.collapseIcon = { shape: isExpanded ? 'Plus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                // } else if ((obj.data).orientation === "Root") {
                //     obj.expandIcon = { shape: isExpanded ? 'Minus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                //     obj.collapseIcon = { shape: isExpanded ? 'Plus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                // } else {
                //     obj.expandIcon = { shape: isExpanded ? 'Minus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                //     obj.collapseIcon = { shape: isExpanded ? 'Plus' : 'None', height: 10, width: 10, fill: 'white', borderColor: 'black'};
                // }
                (obj.shape).cornerRadius = empInfo.branch === 'Root' ? 5 : 0;
                obj.shape = { type: 'Basic', shape: 'Ellipse' };
                obj.width = empInfo.branch === 'Root' ? 150 : 100;
                obj.height = empInfo.branch === 'Root' ? 75 : 50;
                obj.annotations = [{
                    content: empInfo.Label,

                }];
            }
            var port = this.getPort();
            if (!(obj).ports.length) {
                for (var i = 0; i < port.length; i++) {
                    (obj).ports.push(new PointPort(obj, 'ports', port[i], true));
                }
            }

            return obj;
        },
        //creation of the Ports
        getPort: function () {
            var port =
                [{
                    id: 'leftPort', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'rightPort', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'topPort', offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'bottomPort', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Hidden,
                    style: { fill: 'black' }
                }
                ];
            return port;
        },

        toolbarClick: function (args) {
            const diagram = this.$refs.diagram.ej2Instances;
            let item = args.item.tooltipText;
            switch (item) {
                case 'Undo':
                    diagram.undo();
                    break;
                case 'Redo':
                    diagram.redo();
                    break;
                case 'Select Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.Default;
                    this.changeToolbarSelection('Select Tool');
                    break;
                case 'Pan Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.ZoomPan;
                    this.changeToolbarSelection('Pan Tool');
                    break;
                case 'Add Child':
                    var orientation = this.getOrientation();
                    this.addNode(orientation);
                    break;
                case 'Add Sibling':
                    this.addSibilingChild();
                    break;
            }
            diagram.dataBind();
        },
        getOrientation: function () {
            const diagram = this.$refs.diagram.ej2Instances;
            var leftChildCount = 0;
            var rightChildCount = 0;
            var orientation;
            if (diagram.selectedItems.nodes[0].data.branch === "Root") {
                for (var i = 0; i < diagram.nodes.length; i++) {
                    if (diagram.nodes[i].addInfo && diagram.nodes[i].addInfo.level === 1) {
                        if (diagram.nodes[i].addInfo.orientation === "Left") {
                            leftChildCount++;
                        } else {
                            rightChildCount++;
                        }
                    }
                }
                orientation = leftChildCount > rightChildCount ? "Right" : "Left";
            } else {
                var selectedNodeOrientation = diagram.selectedItems.nodes[0].addInfo.orientation.toString();
                orientation = selectedNodeOrientation;
            }
            return orientation;

        },
        changeToolbarSelection: function (tool) {
            const diagram = this.$refs.diagram.ej2Instances;
            const toolbarObj = this.$refs.toolbar.ej2Instances;
            let items = toolbarObj.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].tooltipText === tool) {
                    items[i].cssClass = 'tb-item-selected';
                } else {
                    items[i].cssClass = '';
                }
            }
            setTimeout(() => {
                this.ddbContent = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }, 10);

        },
        zoomChange: function (args) {
            const diagram = this.$refs.diagram.ej2Instances;
            let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
            let currentZoom = diagram.scrollSettings.currentZoom;
            let zoom = {};
            switch (args.item.text) {
                case 'Zoom In':
                    diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                    if (zoomCurrentValue) {
                        zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    }
                    break;
                case 'Zoom Out':
                    diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                    if (zoomCurrentValue) {
                        zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    }
                    break;
                case 'Zoom to Fit':
                    diagram.fitToPage();
                    break;
                case 'Zoom to 50%':
                    if (currentZoom === 0.5) {
                        currentZoom = 0;
                        zoom.zoomFactor = (0.5 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (0.5 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 100%':
                    if (currentZoom === 1) {
                        currentZoom = 0;
                        zoom.zoomFactor = (1 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (1 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 200%':
                    if (currentZoom === 2) {
                        currentZoom = 0;
                        zoom.zoomFactor = (2 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (2 / currentZoom - 1);
                        diagram.zoomTo(zoom);
                    }
                    break;
            }
            if (zoomCurrentValue) {
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }

        },

        convertTextToMindmap: async function (inputText) {
            const diagram = this.$refs.diagram.ej2Instances;
            const toolbarObj = this.$refs.toolbar.ej2Instances;
            this.showLoading();
            const options = {
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant tasked with generating mermaid mindmap diagram data source based on user queries with space indentation'
                    },
                    {
                        role: 'user',
                        content: `Generate only the Mermaid mindmap code for the subject titled "${inputText}".
                    Use the format provided in the example below, but adjust the steps, shapes, and indentation according to the new title:
                    
                    **Example Title:** Organizational Research
                    
                    **Example Steps and Mermaid Code:**

                        mindmap
                        root(Mobile Banking Registration)
                            User(User)
                            PersonalInfo(Personal Information)
                                Name(Name)
                                DOB(Date of Birth)
                                Address(Address)
                            ContactInfo))Contact Information((
                                Email(Email)
                                Phone(Phone Number)
                            Account[Account]
                                AccountType[Account Type]
                                    Savings[Savings]
                                    Checking[Checking]
                                AccountDetails(Account Details)
                                    AccountNumber(Account Number)
                                    SortCode(Sort Code)
                            Security{{Security}}
                                Authentication(Authentication)
                                    Password(Password)
                                    Biometrics(Biometrics)
                                    Fingerprint(Fingerprint)
                                    FaceID(Face ID)
                                Verification)Verification(
                                    OTP)OTP(
                                    SecurityQuestions)Security Questions(
                            Terms(Terms & Conditions)
                                AcceptTerms(Accept Terms)
                                PrivacyPolicy(Privacy Policy)

                    
                    
                    Note: Please ensure the generated code matches the title "${inputText}" and follows the format given above. Provide only the Mermaid mindmap code, without any additional explanations, comments, or text.
                    `


                    }
                ],
            }

            try {
                let jsonResponse = await serverAIRequest(options);
                if (jsonResponse) {
                    jsonResponse = jsonResponse.replace('```mermaid', '').replace('```', '');
                    diagram.loadDiagramFromMermaid(jsonResponse);
                    diagram.clearHistory();
                    this.pushWorkingData();
                    toolbarObj.items[0].disabled = true;
                    toolbarObj.items[1].disabled = true;
                }
                this.hideLoading();
            } catch (error) {
                console.error('Error:', error);
                this.convertTextToMindmap(inputText);

            }
        },

        pushWorkingData: function () {
            const diagram = this.$refs.diagram.ej2Instances;
            this.workingData = [];
            for (var i = 0; i < diagram.nodes.length; i++) {
                var node = diagram.nodes[i];
                var nodeData = {
                    id: node.id,
                    Label: node.annotations ? node.annotations[0].content : 'Node',
                    fill: node.style.fill,
                    branch: node.addInfo.orientation,
                    strokeColor: node.style.strokeColor,
                    parentId: node.data.parentId,
                    level: node.addInfo.level,
                    orientation: node.addInfo.orientation,
                    hasChild: false,
                };
                this.workingData.push(nodeData);
            }
            // Create a Set of parentIds to quickly check which ids have children
            const parentIds = new Set(this.workingData.map(item => item.parentId).filter(id => id !== null));

            // Iterate over the data array and set hasChild to true if id is in parentIds
            this.workingData.forEach(item => {
                if (parentIds.has(item.id)) {
                    item.hasChild = true;
                }
            });
        },
        // Function to show loading indicator
        showLoading: function () {
            (document.getElementById('loadingContainer')).style.display = 'block';
        },
        // Function to hide loading indicator
        hideLoading: function () {
            (document.getElementById('loadingContainer')).style.display = 'none';
        },

        aiOnClick: function () {
            this.$refs.dialog.ej2Instances.show();
        },
        dbSend: function () {
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToMindmap(this.$refs.textBox.ej2Instances.value);
        },
        keyPressHandler: function (event) {
            if (event.key === 'Enter' && document.activeElement === this.$refs.textBox.ej2Instances.element) {
                if (this.$refs.textBox.ej2Instances.value) {
                    this.$refs.dialog.ej2Instances.hide();
                    this.convertTextToMindmap(this.$refs.textBox.ej2Instances.value);
                }
            }
        },
        onTextBoxChange: function (args) {
            if (args.value !== '') {
                this.$refs.sendButton.ej2Instances.disabled = false;
            } else {
                this.$refs.sendButton.ej2Instances.disabled = true;
            }
        },
        btnClick: function (e) {
            let element = e.target;
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToMindmap(element.innerText);
        }
    },
    created() {
        this.items = new DataManager(this.data, new Query().take(7));
        this.leftuserhandle = this.setUserHandle('leftHandle', this.leftarrow, 'Left', 0.5, { top: 10, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');
        this.rightuserhandle = this.setUserHandle('rightHandle', this.rightarrow, 'Right', 0.5, { top: 10, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
        this.devareuserhandle = this.setUserHandle('devare', this.devareicon, 'Top', 0.5, { top: 0, bottom: 0, left: 0, right: 0 }, 'Center', 'Center');
        this.handle = [this.leftuserhandle, this.rightuserhandle, this.devareuserhandle];

    },
    mounted() {
        this.ddbContent = Math.round(this.$refs.diagram.ej2Instances.scrollSettings.currentZoom * 100) + ' %';
        document.addEventListener('keypress', this.keyPressHandler);
    },
    provide: {
        diagram: [UndoRedo, DataBinding, PrintAndExport, MindMap]
    }
}

</script>
<style>
/* These styles are used for toolbar icons*/
@font-face {
    font-family: 'e-ddb-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Bootstrap5 Diagram Builder';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

[class^='sf-icon-'],
[class*=' sf-icon-'] {
    font-family: 'Bootstrap5 Diagram Builder' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.sf-icon-align-left-1:before {
    content: '\e8bc';
}

.sf-icon-align-middle-1:before {
    content: '\e8bd';
}

.sf-icon-align-right-1:before {
    content: '\e8be';
}

.sf-icon-align-top-1:before {
    content: '\e8bf';
}

.sf-icon-align-center-1:before {
    content: '\e8c0';
}

.sf-icon-align-bottom-1:before {
    content: '\e8c1';
}

.sf-icon-distribute-vertical:before {
    content: '\e8c2';
}

.sf-icon-distribute-horizontal:before {
    content: '\e8c3';
}

.sf-icon-elipse:before {
    content: '\e8c4';
}

.sf-icon-line-1:before {
    content: '\e8c5';
}

.sf-icon-orthogonal:before {
    content: '\e8c6';
}

.sf-icon-bezier:before {
    content: '\e8c7';
}

.sf-icon-same-width:before {
    content: '\e8c8';
}

.sf-icon-same-height:before {
    content: '\e8c9';
}

.sf-icon-same-size:before {
    content: '\e8ca';
}

.e-ddb-icons {
    font-family: 'e-ddb-icons';
    speak: none;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Icon css in dropdown */
.e-basic::before {
    content: '\e726';
}

.e-flow::before {
    content: '\e724';
}


#diagram-functionalities .e-connector::before {
    content: '\e725';
}

.e-export::before {
    content: '\e711';
}

.material .e-export::before {
    content: '\e706';
}

.bootstrap .e-export::before {
    content: '\e71e';
}

/* Toolbar width */
.db-toolbar-editor {
    width: 100%;
}

/* Overall div width */
.main .diagramMindmap{
    width: 100%;
}

.diagram-upload-file {
    display: none;
}

/* Center the loading indicator and text */
.diagram-loading-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

/* Circular loading indicator styles */
.loading-indicator {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    /* Light grey background */
    border-top: 4px solid #357BD2;
    /* Blue border color */
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

/* Default style for the send button */
#diagram-db-send .send-button {
    cursor: pointer;
    transition: fill 0.2s ease;
}

/* Hover style for the send button */
#diagram-db-send .send-button:hover {
    fill: #0345fc;
    /* Change this to your desired hover color */
}

/* Spin animation */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Loading text styles */
.loading-text {
    margin-top: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #000;
}

/* Toolbar Selected State - Start */

.db-toolbar-container .e-toolbar .e-toolbar-items .e-toolbar-item.tb-item-selected .e-tbar-btn.e-btn,
.db-toolbar-container .e-toolbar .e-toolbar-items .e-toolbar-item .e-dropdown-btn.tb-item-selected {
    background: #0078D4;
}

.db-toolbar-container .e-toolbar .e-toolbar-items .e-toolbar-item.tb-item-selected .e-tbar-btn .e-icons.e-btn-icon,
.db-toolbar-container .e-toolbar .e-toolbar-items .e-toolbar-item .e-dropdown-btn.tb-item-selected .e-btn-icon {
    color: #ffffff;
}


/* Toolbar Selected State - End */

.db-toolbar-container.e-toolbar-left,
.db-toolbar-container .e-toolbar-right {
    padding-top: 3px !important;
}


@font-face {
    font-family: 'Diagram_Builder_Icon';
    src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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CQgHBgUEAgECAwMFBQYGBQYFBgUFBAUDATcBAQICBQYHCAQICAgMAQIEBQYIBwkICAcHBQQBAgIBAwMDBQQFBgUGBQYFBUgEBAQDAgECHlQICAcHBQQBAgECBAUHBwgICAgHBwUEAQIqCAgHBwUEAgEBAgQFBwcIASyaCAgHBwUEAgEBAgQFBwcECJ4ICAcHBQQCAQECBAUHBwgmAQECAgUGBwgECAgIpgQEBAMCAgEBAgMFBgcIBAgICKYEBAQDAgEC/nQBtb8CAwUFBQcGB1QJBwgGBQQCAQEDBAYCAgQFBgcIBAgICEwEBAQDAgIBFP2KBQYFBQYFBgUEBQMDAwIBAQIEBQcHBAgCegcHBgUFBQMCAgECAgMEBAAABwAAAAADZAP3ADMAXQCMAK8A2wDeAQgAADcdAR8JOwE/CC8HIw8CNS8HDwYlIw8IFR8JPwk1Lwg3FR8DBxUfCDsBPwk1LwcrAg8FBRUfCD8HLwcrAQ8GFR8HPwc1Mz8HLwcrAQ8FJSERJw8GFREfByEzPwc1LwUBLwMPAZsBAgMDAwUEBQUGBQYFBgVIBgYEAwEBAgMFBgcIBAgICAwBAgQFBwcICAkHCAYFBAIBswUFBQWiBwUEAwEBAwUEBAUFBQUFBgUGBaIHBQQDAQEDBQQEBAUFBWYBAwQGAgIEAwQEBQUFBQUGBQYFSAUFBAMCAQICAwUFBQYHB1QICAcHBQQC/ssBAgQFBwcECJ4ICAgGBQQCAQECBAUGCAMJnggIBwcFBALvAQIEBQcHCAgICAgGBQQBAioICAgGBQQCAQECBAUGCAMJWAgIBwcFBAICCP5LPwQFAwMDAgEBAgQFBwcECAJ6BwcGBQUFAwICAQIDBAUF/YoFBgULBQaGVAYFBQUFBAMEAgIBAgEDKwYGBwcICAgIBwUFAgEBAwcKCAgHBwUEAgEBAgQFBggHvAIBA2IFBgcIAwkICAgEAwMDAQEBAQECAmIFBgcIBAgICAgEBAMCAgFjBAUIBwcICQgJBAQEAwICAQIBAysFBAYGBgcHBwYGBQUDAwIDBAUGBwgJBAQIBwYFBAIBAQEDBAUGBwgICQgHBgUEAgEDBAUGBwgJVAgIBwYFBAMBAQMEBQYHBAguAQMEBQYHCAgJCAcGBQQCAQMEBQYHCMUBCG8DBAQFBQUFBv6ECQgHBgUEAQICAwMFBQYG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c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABEAGkAYQBnAHIAYQBtAF8AQgB1AGkAbABkAGUAcgBfAEkAYwBvAG4AUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AQgB1AGkAbABkAGUAcgBfAEkAYwBvAG4ARABpAGEAZwByAGEAbQBfAEIAdQBpAGwAZABlAHIAXwBJAGMAbwBuAFYAZQByAHMAaQBvAG4AIAAxAC4AMABEAGkAYQBnAHIAYQBtAF8AQgB1AGkAbABkAGUAcgBfAEkAYwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0AA25ldwRvcGVuBHNhdmUHc2F2ZS1hcwZleHBvcnQFcHJpbnQEdW5kbwRyZWRvA2N1dARjb3B5BXBhc3RlBmRlbGV0ZQd6b29tLWluCHpvb20tb3V0BmxheWVycwxzZW5kLXRvLWJhY2sOYnJpbmctdG8tZnJvbnQNc2VuZC1iYWNrd2FyZA1icmluZy1mb3J3YXJkA3Bhbgdwb2ludGVyC2RyYXdfc2hhcGVzCXJlY3RhbmdsZQZlbGlwc2UHcG9seWdvbg1zdHJhaWdodF9saW5lD29ydGhvZ29uYWxfbGluZQZiZXppZXIJZnJlZV9oYW5kCmZpbF9jb2xvdXINYm9yZGVyX2NvbG91cgVncm91cAd1bmdyb3VwBnJvdGF0ZQtpbnNlcnRfbGluawxpbnNlcnRfaW1hZ2UKYWxpZ25fbGVmdAxhbGlnbl9jZW50ZXILYWxpZ25fcmlnaHQJYWxpZ25fdG9wDGFsaWduX21pZGRsZQxhbGlnbl9ib3R0b20TZGlzdHJpYnV0ZV92ZXJ0aWNhbBVkaXN0cmlidXRlX2hvcml6b250YWwEbG9jawZ1bmxvY2sEdGV4dAVnbG9iZQd2aXNpYmxlCXVuZGVybGluZQRib2xkEWNoZXZyb24tZG93bi1maWxsD2NoZXZyb24tdXAtZmlsbAxjaGV2cm9uLWRvd24KY2hldnJvbi11cA1mbGlwLXZlcnRpY2FsD2ZsaXAtaG9yaXpvbnRhbBhyb3RhdGUtY291bnRlci1jbG9ja3dpc2UQcm90YXRlLWNsb2Nrd2lzZQphbGlnbi1sZWZ0DGFsaWduLWNlbnRlcgthbGlnbi1yaWdodAZpdGFsaWMKY2hlY2stdGljawVvcmRlchBwYWdlX29yaWVudGF0aW9uCWFkZC1jaGlsZAthZGQtc2libGluZwpmb250LWNvbG9yDm11bHRpcGxlLWNoaWxkCWxhbmRzY2FwZQhwb3J0cmFpdAVsaWdodARkYXJrCnByb3BlcnRpZXMEaGlkZQpsZWZ0LXJpZ2h0CnJpZ2h0LWxlZnQKYm90dG9tLXRvcAp0b3AtYm90dG9tDGdyYXBoaWNfdmlldwl0ZXh0LXZpZXcKcGFnZS1icmVhaw9hbGlnbi10ZXh0LWxlZnQQYWxpZ24tdGV4dC1yaWdudA5hbGlnbi10ZXh0LXRvcBFhbGlnbi10ZXh0LWJvdHRvbRxhbGlnbi10ZXh0LWhvcml6b250YWwtY2VudGVyGmFsaWduLXRleHQtdmVydGljYWwtY2VudGVyBWNsb3NlEmdyYWRpZW50LWFsaWdubWVudAAAAAAA) format('truetype');
    font-weight: normal;
    font-style: normal;
}

[class^="ai-sf-icon-"],
[class*="ai-sf-icon-"] {
    font-family: 'Diagram_Builder_Icon' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ai-sf-icon-add-child:before {
    content: "\e746";
}

.ai-sf-icon-add-sibling:before {
    content: "\e747";
}
</style>