<template>
    <div>
        <div class="col-lg-8 control-section">
            <div id="historyControlSection" class="content-wrapper" style="width: 100%">
                <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :historyChange="historyChange" :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings'></ejs-diagram>
            </div>
        </div>
        <div id="historyPropertySection" class="col-lg-4 property-section" style="padding-right: 0px">
            <div class="property-panel-header">
                History manager settings
            </div>
            <div class="row property-panel-content" id="appearance">
                <div class="row property-panel-content">
                    <div class="row">
                        <div class="listbox" style="height:100%;border: 1px solid #e0e0e0">
                            <div class="heading" style="height:40px">
                                <span>
                                    Undo Stack
                                </span>
                                <div style="float: right; margin-top: -5px">
                                    <ejs-button ref="undo" id="undo" style="width:100%" disabled=true>
                                        Undo
                                    </ejs-button>
                                </div>
                            </div>
                            <ejs-listview ref="undoList" id='undoList' height="180px"></ejs-listview>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 8px">
                        <div class="listbox" style="height:100%;border: 1px solid #e0e0e0">
                            <div class="heading" style="height:40px">
                                <span>
                                    Redo Stack
                                </span>
                                <div style="float: right; margin-top: -5px">
                                    <ejs-button id="redo" ref="redo" style="width:100%" disabled=true>
                                        Redo
                                    </ejs-button>
                                </div>
                            </div>
                            <ejs-listview ref="redoList" id='redoList' height="180px"></ejs-listview>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 10px">
                        <div style="display: table;height: 35px; padding-left: 0px" class="col-xs-6">
                            <div style="display: table-cell; vertical-align: middle">Stack Limit</div>
                        </div>
                        <div class="col-xs-6" style="padding-left: 0px; padding-right: 0px">
                            <ejs-numerictextbox id="StackLimit" :value=0 :step=1 format='###.##' :change='setStackLimit'></ejs-numerictextbox>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 10px">
                        <div class="col-xs-6" style="padding-left: 0px">
                            <ejs-button ref="StartGroupAction" title="startGroupAction" id="StartGroupAction" style="width:100%;overflow: hidden;text-overflow: ellipsis" type="Button" isToggle=true >Start Group Action</ejs-button>
                        </div>
                        <div class="col-xs-6" style="padding-left: 0px; padding-right: 0px">
                            <ejs-button ref="ClearHistory" id="ClearHistory" title="clearHistory">Clear History</ejs-button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div id="action-description">
            <p>
                  This sample demonstrates viewing, deleting, limiting diagram history and groups diagram actions and stores it as
        a single entry in the history manager.
            </p>
        </div>
        <div id="description">
            <p>
               Diagram history are being handle all the diagram history. Using <code>stackLimit</code> property of the history manager
        we limit the no. of entries can be stored on the diagram history. Also, we can get the list of entries in the undo
        list and redo list using <code>undoStack</code> and <code>redoStack</code>. Also diagram history manager have the
        option to group the action as the single entry by the help of the <code>startGroupAction</code> and <code>endGroupAction</code> public Api. Also, we can add the custom entries to the diagram history. method can be used to print the diagrams.
            </p>
            <br>
        </div>
    </div>
</template>
<style scoped>
/* These are proprty panel CSS */
#historyPropertySection .row {
    margin-left: 0px;
    margin-right: 0px;
}

#historyControlSection.content-wrapper {
    border: 1px solid #D7D7D7;
}

#historyPropertySection .listbox {
    width: 100%;
    height: 50%;
}

#historyPropertySection .heading {
    color: #4e4949;
    font-size: 15px;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #d9dedd;
    padding: 10px;
}
</style>

<script>
import {
    DiagramComponent,
    Diagram,
    SnapConstraints,
    UndoRedo,
    DataBinding
} from "@syncfusion/ej2-vue-diagrams";
import {
    CheckBox,
    CheckBoxComponent,
    ChangeEventArgs as CheckBoxChangeEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { ListViewComponent, ListView } from "@syncfusion/ej2-vue-lists";

// Helper function to create a NodeModel with default parameters
function createNode(
    id,
    offsetX,
    offsetY,
    fill,
    strokeColor,
    shape,
    content,
    width = 70,
    height = 40,
    ports = []) {
    return {
        id,
        offsetX,
        offsetY,
        style: { fill, strokeColor },
        width,
        height,
        shape: { type: 'Flow', shape: shape },
        annotations: [{ content: content }],
        ports
    };
}
// Initialize Diagram Nodes using the createNode function
let nodes = [
    createNode('node1', 400, 30, '#FFB2B2', '#FFB2B2', 'Terminator', 'Start'),
    createNode('node2', 400, 100, '#DCDCDC', '#DCDCDC', 'Process', 'Design', undefined, undefined, [{ id: 'designPort', offset: { x: 0, y: 0.5 } }]),
    createNode('node3', 400, 180, '#DCDCDC', '#DCDCDC', 'Process', 'Coding', undefined, undefined, [{ id: 'codingPort', offset: { x: 0, y: 0.5 } }]),
    createNode('node4', 400, 260, '#DCDCDC', '#DCDCDC', 'Process', 'Testing'),
    createNode('node5', 400, 340, '#A2D8B0', '#A2D8B0', 'Decision', 'Errors?', 80, 60),
    createNode('node6', 400, 430, '#FFB2B2', '#FFB2B2', 'Terminator', 'End'),
    createNode('node7', 220, 180, '#A2D8B0', '#A2D8B0', 'Decision', 'Design Error?', 100, 60, [
        { id: 'porterror', offset: { x: 0.5, y: 0 } },
        { id: 'portcoding', offset: { x: 1, y: 0.5 } },
        { id: 'portdesign', offset: { x: 0.5, y: 1 } }
    ])
];

let connectors = [
    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
    { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
    { id: 'connector3', sourceID: 'node3', targetID: 'node4' },
    { id: 'connector4', sourceID: 'node4', targetID: 'node5' },
    {
        id: 'connector5', sourceID: 'node5', targetID: 'node6',
        annotations: [{ content: 'No', style: { fill: 'white' } }]
    },
    {
        id: 'connector6', sourceID: 'node5', targetID: 'node7', type: 'Orthogonal',
        segments: [{ type: 'Orthogonal', length: 150, direction: 'Left' }],
        annotations: [{ content: 'Yes', style: { fill: 'white' } }]
    },
    {
        id: 'connector7', sourceID: 'node7', targetID: 'node3', sourcePortID: 'portcoding',
        targetPortID: 'codingPort', type: 'Orthogonal',
        segments: [{ type: 'Orthogonal', length: 10, direction: 'left' }],
        annotations: [{ content: 'No', style: { fill: 'white' } }]
    },
    {
        id: 'connector8', sourceID: 'node7', targetID: 'node2', sourcePortID: 'porterror',
        targetPortID: 'designPort', type: 'Orthogonal',
        annotations: [{ content: 'Yes', style: { fill: 'white' } }]
    }
];
let field = { value: 'value', text: 'text' };
let node;
let diagram;
let undoList;
let redoList;
let start;
let clear;
let end;
let undoButton;
let redoButton;
export default {
    components: {
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-diagram': DiagramComponent,
    'ejs-button': ButtonComponent,
    'ejs-listview': ListViewComponent
    },
    data: function() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors: connectors,
            getNodeDefaults: getNodeDefaults,
            historyChange: historyChange,
            setStackLimit: setStackLimit,
            snapSettings: { constraints: SnapConstraints.None },
            getConnectorDefaults: (obj) => {
                obj.style.fill = '#707070';
                obj.targetDecorator.style.fill = '#707070';
                obj.targetDecorator.style.strokeColor = '#707070';
            },
            snapSettings: { constraints: SnapConstraints.None },
        };
    },
    provide: {
        diagram: [UndoRedo, DataBinding]
    },
    mounted: function() {
        diagram = this.$refs.diagramObj.ej2Instances;
        diagram.fitToPage();
        undoList = this.$refs.undoList.ej2Instances;
        redoList = this.$refs.redoList.ej2Instances;
        undoButton = this.$refs.undo.ej2Instances;
        redoButton = this.$refs.redo.ej2Instances;
        start = this.$refs.StartGroupAction.ej2Instances;
        clear = this.$refs.ClearHistory.ej2Instances;
        redoButton.element.onclick = () => {
            diagram.redo();
        };
        undoButton.element.onclick = () => {
            diagram.undo();
        };
        start.element.onclick = () => {
            if (start.element.classList.contains('e-active')) {
                start.content = 'End Group Action';
                diagram.startGroupAction();
            } else {
                start.content = 'Start Group Action';
                diagram.endGroupAction();
            }
        };
        clear.element.onclick = () => {
            diagram.clearHistory();
            updateHistoryLists();
        }
    }
}
// Function to handle stack limit setting
function setStackLimit(args) {
    diagram.setStackLimit(args.value);
}
// Function called on history change
function historyChange(arg) {
    updateHistoryLists();
};
function getNodeDefaults(obj) {
    obj.annotations[0].style.color = '#111111';
    return obj;
}
function updateHistoryLists() {
    const { undoStack, redoStack, stackLimit } = diagram.historyManager;

    // Utility function to transform stack data
    const transformStack = (stack) => stack.map(item => ({ text: item.type, value: item.type }));

    // Transform undo and redo stacks
    const undo = transformStack(undoStack);
    const redo = transformStack(redoStack);

    // Update button states
    undoButton.disabled = !undo.length;
    redoButton.disabled = !redo.length;

    // Update lists
    const updateList = (list, data) => {
        list.dataSource = data;
        list.fields = { text: 'text', value: 'text' };
        list.index = 0;
        list.dataBind();
    };

    updateList(undoList, undo);
    updateList(redoList, redo);
}

</script>