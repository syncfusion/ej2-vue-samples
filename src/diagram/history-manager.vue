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
                            <ejs-numerictextbox id="StackLimit" value="0" step="1" format='###.##' :change='setStackLimit'></ejs-numerictextbox>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 10px">
                        <div class="col-xs-6" style="padding-left: 0px">
                            <ejs-button ref="StartGroupAction" title="startGroupAction" id="StartGroupAction" style="width:100%;overflow: hidden;text-overflow: ellipsis" type="Button" isToggle=true :v-on:click='btnClick'>Start Group Action</ejs-button>
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
<style>
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
    color: #807f7f;
    font-size: 15px;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #d9dedd;
    padding: 10px;
}
</style>

<script>
import Vue from "vue";
import {
    DiagramPlugin,
    Diagram,
    NodeModel,
    ConnectorModel,
    PointModel,
    NodeConstraints,
    SnapConstraints,
    GradientType,
    ShadowModel,
    GradientModel,
    LinearGradientModel,
    RadialGradientModel,
    ShapeAnnotationModel,
    UndoRedo,
    DataBinding
} from "@syncfusion/ej2-vue-diagrams";
import {
    CheckBox,
    CheckBoxPlugin,
    ChangeEventArgs as CheckBoxChangeEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { ListViewPlugin, ListView } from "@syncfusion/ej2-vue-lists";

Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(DiagramPlugin);
Vue.use(ButtonPlugin);
Vue.use(ListViewPlugin);

let nodes = [
    {
        id: 'node1', offsetX: 400, offsetY: 30, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{ id: 'label1', content: 'Start' }],
    },
    {
        id: 'node2', offsetX: 400, offsetY: 100, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        shape: { type: 'Flow', shape: 'Process' }, annotations: [{ id: 'label1', content: 'Design' }],
        ports: [{ id: 'designPort', offset: { x: 0, y: 0.5 } }]
    },
    {
        id: 'node3', offsetX: 400, offsetY: 180, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        annotations: [{ id: 'label1', content: 'Coding' }],
        shape: { type: 'Flow', shape: 'Process' }, ports: [{ id: 'codingPort', offset: { x: 0, y: 0.5 } }]
    },
    {
        id: 'node4', offsetX: 400, offsetY: 260, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        annotations: [{ id: 'label1', content: 'Testing' }], shape: { type: 'Flow', shape: 'Process' }
    },
    {
        id: 'node5', offsetX: 400, offsetY: 340, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, width: 80, height: 60,
        annotations: [{ id: 'label1', content: 'Errors?' }], shape: { type: 'Flow', shape: 'Decision' }
    },
    {
        id: 'node6', offsetX: 400, offsetY: 430, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,
        annotations: [{ id: 'label1', content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' }
    },
    {
        id: 'node7', width: 100, offsetX: 220, offsetY: 180, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, height: 60,
        annotations: [{ id: 'label1', content: 'Design Error?' }], shape: { type: 'Flow', shape: 'Decision' },
        ports: [
            { id: 'porterror', offset: { x: 0.5, y: 0 } },
            { id: 'portcoding', offset: { x: 1, y: 0.5 } },
            { id: 'portdesign', offset: { x: 0.5, y: 1 } }
        ]
    }
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
export default Vue.extend({
    data: function() {
        return {
            width: "500px",
            height: "580px",
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
            getValue();
        }
    }
});
function setStackLimit(args) {
    diagram.setStackLimit(args.value);
}
function historyChange(arg) {
    getValue();
};
function getNodeDefaults(obj) {
    obj.annotations[0].style.color = '#111111';
    return obj;
}
function getValue() {
    let undoStack = diagram.historyManager.undoStack;
    let redoStack = diagram.historyManager.redoStack;
    let undo = [];
    for (let i = 0; i < undoStack.length; i++) {
        undo.push({ 'text': undoStack[i].type, 'value': undoStack[i].type });
    }

    let redo = [];
    for (let i = 0; i < redoStack.length; i++) {
        redo.push({ 'text': redoStack[i].type, 'value': redoStack[i].type });
    }
    undoButton.disabled = undo.length ? false : true;
    redoButton.disabled = redo.length ? false : true;
    let itemsCount = diagram.historyManager.stackLimit ? diagram.historyManager.stackLimit : 0;
    undoList.dataSource = undo;
    undoList.fields = { text: 'text', value: 'text' };
    undoList.index = 0;
    undoList.dataBind();
    redoList.dataSource = redo;
    redoList.fields = { text: 'text', value: 'text' };
    redoList.index = 0;
    redoList.dataBind();
}
</script>