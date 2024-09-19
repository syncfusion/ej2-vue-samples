<template>
    <div class="control-section">
        <div class='control-wrapper'>
            <link href="https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css"
                rel="stylesheet" />

            <div class="main">
                <div class="diagram-upload-file">
                    <ejs-uploader :asyncSettings="{
                        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
                    }" :success='onUploadSuccess' :showFileList='false' />
                </div>
                <div class="db-toolbar-editor">
                    <div class="db-toolbar-container">
                        <ejs-toolbar ref="toolbarObj" :clicked="function (args: any) { toolbarClick(args); }"
                            :created="toolbarCreated" :items='toolbarItems()' overflowMode='Scrollable' width='100%'
                            :height="40"></ejs-toolbar>
                    </div>
                </div>
                <div class="sb-mobile-palette-bar">
                    <div id="palette-icon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
                </div>
                <div id="palette-space" class="sb-mobile-palette">
                    <ejs-symbolpalette expandMode='Multiple' :palettes="palettes" width='100%' height='900px'
                        :symbolHeight='60' :symbolWidth='60' :symbolMargin="{
                            left: 15, right: 15,
                            top: 15, bottom: 15
                        }" :getNodeDefaults='getSymbolDefaults' :getSymbolInfo='getSymbolInfo'></ejs-symbolpalette>
                </div>
                <div id="diagram-space" class="sb-mobile-diagram">
                    <ejs-diagram ref="diagram" width='100%' height='900px' :drawingObject='{}'
                        :selectionChange='selectionChange' :historyChange='historyChange' :tool='diagramTool'
                        :snapSettings='{ horizontalGridlines: gridlines, verticalGridlines: gridlines }'
                        :scrollSettings="{ scrollLimit: 'Infinity' }" :layout="diagramLayout"
                        :dataSourceSettings="dataSourceSettings" :scrollChange="diagramScrollChange"
                        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
                        :dragEnter='dragEnter'></ejs-diagram>
                </div>
            </div>
            <div id='container'>
                <ejs-dialog ref="dialog" header='headerTemplate' :showCloseIcon='true' :isModal='true'
                    content='contentTemplate' target='.control-section' width='540px' :visible='false' height='310px'>
                    <template #headerTemplate>
                        <span class="e-icons e-aiassist-chat" style="color: black;width:20px; font-size: 16px;">
                        </span>
                        AI Assist
                    </template>
                    <template #contentTemplate>
                        <p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
                        <ejs-button id="btn2"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click='(e) => { $refs.dialog.hide(); convertTextToFlowChart(e.target.value); }'>
                            Flowchart for online shopping
                        </ejs-button>
                        <ejs-button id="btn1"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click='(e) => { $refs.dialog.hide(); convertTextToFlowChart(e.target.value); }'>
                            Flowchart for Mobile banking registration
                        </ejs-button>
                        <ejs-button id="btn3"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click='(e) => { $refs.dialog.hide(); convertTextToFlowChart(e.target.value); }'>
                            Flowchart for Bus ticket booking
                        </ejs-button>
                        <div style="display: flex; align-items: center; margin-top: 20px;">
                            <ejs-textbox ref='textbox' id="textBox" class="db-openai-textbox" style="flex: 1;"
                                placeholder='Please enter your prompt here...' width='450' :input='onTextBoxChange' />
                            <ejs-button id="db-send" iconCss='e-icons e-send' :isPrimary='true' :disabled='true'
                                style="margin-left: 2px; height: 32px; width: 32px;"
                                @click='() => { $refs.dialog.hide(); convertTextToFlowChart($refs.textbox.value); }'></ejs-button>
                        </div>
                    </template>
                </ejs-dialog>
            </div>
            <ejs-fab :isPrimary='true' iconCss='e-icons e-aiassist-chat'>AI Assist</ejs-fab>

            <!-- Loading indicator container -->
            <div ref="loadingContainer" id="loadingContainer" class="loading-container">
                <div class="loading-indicator"></div>
                <div class="loading-text">Generating Flowchart...</div>
            </div>
        </div>
    </div>
</template>

<script>
/**
* Default FlowShape sample
*/

import {
    NodeModel, UndoRedo, ConnectorModel, SymbolPalette, SymbolInfo, IDragEnterEventArgs,
    FlowShapes, Node, FlowchartLayout
} from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import {
    Connector, ConnectorConstraints, DataBinding, DiagramTools, FileFormats, FlowShapeModel, IExportOptions,
    IScrollChangeEventArgs, ISelectionChangeEventArgs, NodeConstraints, PrintAndExport, Rect, SelectorModel
} from '@syncfusion/ej2-diagrams';
import { InputEventArgs, TextBox, TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { ClickEventArgs, ItemModel } from '@syncfusion/ej2-navigations';
import { DropDownButton, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { DataSourceModel, DiagramComponent, SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent, FabComponent } from '@syncfusion/ej2-vue-buttons';
import { ToolbarComponent } from '@syncfusion/ej2-vue-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';


type FlowChartNode = {
    id: string;
    name: string;
    shape: string;
    color: string;
    parentId: string[] | null;
    arrowType?: string;
    label?: string | string[];
    stroke: string;
    strokeWidth: number;
};

const flowChartData: FlowChartNode[] = [
    { id: "A", name: "Start", shape: "Terminator", color: "#90EE90", parentId: null, stroke: "#333", strokeWidth: 2 },
    {
        id: "B", name: "Open the browser and go to Amazon site", shape: "Rectangle", color: "#1759B7", parentId: ["A"],
        arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "C", name: "Already a customer?", shape: "Decision", color: "#2F95D8", parentId: ["B"], arrowType:
            "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "D", name: "Create an account", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["No"], arrowType:
            "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "E", name: "Enter login information", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["Yes"],
        arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "F", name: "Search for the book in the search bar", shape: "Predefined Process", color: "#1759B7", parentId: ["E",
            "D"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2
    },
    {
        id: "G", name: "Select the preferred book", shape: "Rectangle", color: "#1759B7", parentId: ["F"], arrowType:
            "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "H", name: "Is the book new or used?", shape: "Rectangle", color: "#2F95D8", parentId: ["G"], arrowType:
            "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "I", name: "Select the new book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["Yes"],
        arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "J", name: "Select the used book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["No"],
        arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "K", name: "Add to Cart & Proceed to Checkout", shape: "Rectangle", color: "#1759B7", parentId: ["I", "J"],
        arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2
    },
    {
        id: "L", name: "Enter shipping and payment details", shape: "Rectangle", color: "#1759B7", parentId: ["K", "M"],
        arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2
    },
    {
        id: "M", name: "Is the information correct?", shape: "Decision", color: "#2F95D8", parentId: ["L"], arrowType:
            "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "N", name: "Review and place the order", shape: "Rectangle", color: "#1759B7", parentId: ["M"], label: ["True"],
        arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2
    },
    {
        id: "O", name: "End", shape: "Terminator", color: "#8E44CC", parentId: ["N"], arrowType: "single-line-arrow", stroke:
            "#333", strokeWidth: 2
    }
];
let bounds = {
    x: 240,
    y: 122,
    width: 719,
    height: 700,
    top: 122,
    right: 959,
    bottom: 822,
    left: 240
};
let interval = [
    1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
];

export default {
    components: {
        'ejs-button': ButtonComponent,
        'ejs-diagram': DiagramComponent,
        'ejs-fab': FabComponent,
        'ejs-toolbar': ToolbarComponent,
        'ejs-uploader': UploaderComponent,
        'ejs-symbolpalette': SymbolPaletteComponent,
        'ejs-dialog': DialogComponent,
        'ejs-textbox': TextBoxComponent
    },
    data() {
        return {
            diagramTool: DiagramTools.Default,
            centerX: bounds.width / 2,
            gridlines: { lineColor: '#e0e0e0', lineIntervals: interval },
            dataSourceSettings: {
                id: 'id',
                parentId: 'parentId',
                dataManager: new DataManager(flowChartData)
            } as any,
            diagramLayout: {
                type: 'Flowchart',
                orientation: 'TopToBottom',
                flowChartSettings: {
                    yesBranchDirection: 'LeftInFlow',
                    noBranchDirection: 'RightInFlow',
                    yesBranchValues: ['Yes', 'True'],
                    noBranchValues: ['No', 'False']
                } as any,
                verticalSpacing: 50,
                horizontalSpacing: 50
            } as any,
            rotateItems: [
                { iconCss: 'e-icons e-transform-right', text: 'Rotate Clockwise' },
                { iconCss: 'e-icons e-transform-left', text: 'Rotate Counter-Clockwise' }
            ],
            flipItems: [
                { iconCss: 'e-icons e-flip-horizontal', text: 'Flip Horizontal' },
                { iconCss: 'e-icons e-flip-vertical', text: 'Flip Vertical' }
            ],
            alignItems: [
                {
                    iconCss: 'sf-icon-align-left-1', text: 'Align Left',
                },
                {
                    iconCss: 'sf-icon-align-center-1', text: 'Align Center',
                },
                {
                    iconCss: 'sf-icon-align-right-1', text: 'Align Right',
                },
                {
                    iconCss: 'sf-icon-align-top-1', text: 'Align Top',
                },
                {
                    iconCss: 'sf-icon-align-middle-1', text: 'Align Middle',
                },
                {
                    iconCss: 'sf-icon-align-bottom-1', text: 'Align Bottom',
                },
            ],
            distributeItems: [
                { iconCss: 'sf-icon-distribute-vertical', text: 'Distribute Objects Vertically', },
                { iconCss: 'sf-icon-distribute-horizontal', text: 'Distribute Objects Horizontally', },
            ],
            orderItems: [
                { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward' },
                { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front' },
                { iconCss: 'e-icons e-send-backward', text: 'Send Backward' },
                { iconCss: 'e-icons e-send-to-back', text: 'Send To Back' }
            ],
            zoomMenuItems: [
                { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
                { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' },
            ],
            conTypeItems: [
                { text: 'Straight', iconCss: 'e-icons e-line' },
                { text: 'Orthogonal', iconCss: 'sf-icon-orthogonal' },
                { text: 'Bezier', iconCss: 'sf-icon-bezier' }
            ],
            shapesItems: [
                { text: 'Rectangle', iconCss: 'e-rectangle e-icons' },
                { text: 'Ellipse', iconCss: ' e-circle e-icons' },
                { text: 'Polygon', iconCss: 'e-line e-icons' }
            ],
            exportItems: [
                { text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }
            ],
            groupItems: [
                { text: 'Group', iconCss: 'e-icons e-group-1' }, { text: 'Ungroup', iconCss: 'e-icons e-ungroup-1' }
            ],
            flowShapes: [
                this.getFlowShape('Terminator', 'Terminator'),
                this.getFlowShape('Process', 'Process'), this.getFlowShape('Decision', 'Decision'), this.getFlowShape('Document', 'Document'),
                this.getFlowShape('PreDefinedProcess', 'PreDefinedProcess'), this.getFlowShape('PaperTap', 'PaperTap'),
                this.getFlowShape('DirectData', 'DirectData'), this.getFlowShape('SequentialData', 'SequentialData'),
                this.getFlowShape('Sort', 'Sort'), this.getFlowShape('MultiDocument', 'MultiDocument'), this.getFlowShape('Collate', 'Collate'),
                this.getFlowShape('Or', 'Or'), this.getFlowShape('Extract', 'Extract'), this.getFlowShape('Merge', 'Merge'),
                this.getFlowShape('OffPageReference', 'OffPageReference'),
                this.getFlowShape('SequentialAccessStorage', 'SequentialAccessStorage'), this.getFlowShape('Annotation', 'Annotation'),
                this.getFlowShape('Annotation2', 'Annotation2'), this.getFlowShape('Data', 'Data'), this.getFlowShape('Card', 'Card'),
                this.getFlowShape('Delay', 'Delay')
            ],
            connectorSymbols: [{
                id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }, style: {
                    strokeWidth: 1,
                    strokeColor: '#757575'
                }
            }, {
                id: 'link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: {
                    x: 60,
                    y: 60
                }, style: { strokeWidth: 2, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow' }
            }, {
                id: 'Link3',
                type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }, targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' }
                }, style: {
                    strokeWidth: 1, strokeDashArray: '5,2',
                    strokeColor: '#757575'
                }
            }, {
                id: 'Link4', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: {
                    x: 60,
                    y: 60
                }, targetDecorator: { shape: 'None', style: { strokeColor: '#757575', fill: '#757575' } }, style: {
                    strokeWidth: 1, strokeDashArray: '5,2', strokeColor: '#757575'
                }
            }],
            palettes: [{
                id: 'flow',
                expanded: true, symbols: this.flowShapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes'
            }, {
                id: 'connectors',
                expanded: true, symbols: this.connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors'
            }] as any
        }
    },
    methods: {
        //Sets the default values of a connector
        getConnectorDefaults: function (obj: Connector): ConnectorModel {
            obj.type = 'Orthogonal';
            return obj;
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args: IDragEnterEventArgs): void {
            let obj: NodeModel = args.element as NodeModel;
            if (obj instanceof Node) {
                let oWidth: number = obj.width;
                let oHeight: number = obj.height;
                let ratio: number = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
                obj.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        },
        getFlowShape: function (id: string, shapeType: FlowShapes): NodeModel {
            let flowshape: NodeModel = { id: id, shape: { type: 'Flow', shape: shapeType } };
            return flowshape;
        },
        getSymbolDefaults: function (symbol: NodeModel): void {
            symbol.style = { strokeColor: '#757575' };
            if (symbol.id === 'Terminator' || symbol.id === 'Process' || symbol.id === 'Delay') {
                symbol.width = 80;
                symbol.height = 40;
            } else if (symbol.id === 'Decision' || symbol.id === 'Document' || symbol.id === 'PreDefinedProcess' ||
                symbol.id === 'PaperTap' || symbol.id === 'DirectData' || symbol.id === 'MultiDocument' || symbol.id === 'Data') {
                symbol.width = 50;
                symbol.height = 40;
            } else {
                symbol.width = 50;
                symbol.height = 50;
            }
        },
        getSymbolInfo: function (symbol: NodeModel): SymbolInfo {
            return { fit: true };
        },
        toolbarCreated: function () {
            const diagram = this.$refs.diagram;
            if (diagram !== undefined) {
                let conTypeBtn: DropDownButton = new DropDownButton({
                    items: this.conTypeItems, iconCss: 'e-ddb-icons e-connector e-icons',
                    select: function (args) { this.onConnectorSelect(args); }
                });
                conTypeBtn.appendTo('#conTypeBtn');
                let btnZoomIncrement: DropDownButton = new DropDownButton({
                    items: this.zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: this.zoomChange,
                });
                btnZoomIncrement.appendTo('#btnZoomIncrement');
                let shapesBtn: DropDownButton = new DropDownButton({
                    items: this.shapesItems, iconCss: 'e-shapes e-icons',
                    select: function (args) { this.onShapesSelect(args); }
                });
                shapesBtn.appendTo('#shapesBtn');
                let exportBtn: DropDownButton = new DropDownButton({
                    items: this.exportItems, iconCss: 'e-ddb-icons e-export', select: function (args) { this.onselectExport(args); },
                });
                exportBtn.appendTo('#exportBtn');

                let groupBtn: DropDownButton = new DropDownButton({
                    items: this.groupItems, iconCss: 'e-icons e-group-1', select: function (args) { this.onSelectGroup(args); }
                });
                groupBtn.appendTo('#groupBtn');
                let alignBtn: DropDownButton = new DropDownButton({
                    items: this.alignItems, iconCss: 'sf-icon-align-center-1', select: function (args) { this.onSelectAlignObjects(args); }
                });
                alignBtn.appendTo('#alignBtn');

                let distributeBtn: DropDownButton = new DropDownButton({
                    items: this.distributeItems, iconCss: 'sf-icon-distribute-vertical', select: function (args) {
                        this.onSelectDistributeObjects(args);
                    }
                });
                distributeBtn.appendTo('#distributeBtn');
                let orderBtn: DropDownButton = new DropDownButton({
                    items: this.orderItems, iconCss: 'e-icons e-order', select: function (args) { this.onSelectOrder(args); }
                });
                orderBtn.appendTo('#orderBtn');
                let rotateBtn: DropDownButton = new DropDownButton({
                    items: this.rotateItems, iconCss: 'e-icons e-repeat', select: function (args) { this.onSelectRotate(args); }
                });
                rotateBtn.appendTo('#rotateBtn');
                let flipBtn: DropDownButton = new DropDownButton({
                    items: this.flipItems, iconCss: 'e-icons e-flip-horizontal', select: function (args) { this.onSelectFlip(args); }
                });
                flipBtn.appendTo('#flipBtn');
            }
            this.refreshOverflow();
        },
        toolbarItems: function () {
            let items: ItemModel[] = [
                { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' },
                { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', },
                { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' },
                { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram' },
                { type: 'Input', tooltipText: 'Export Diagram', template: '<button id="exportBtn" style="width:100%;"></button>' },
                { type: 'Separator' },
                { disabled: true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut', cssClass: 'tb-item-middle tb-item-lock-category' },
                { disabled: true, prefixIcon: 'e-copy e-icons', tooltipText: 'Copy', cssClass: 'tb-item-middle tb-item-lock-category' },
                { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', disabled: true },
                { type: 'Separator' },
                { disabled: true, prefixIcon: 'e-icons e-undo tb-icons', tooltipText: 'Undo', cssClass: 'tb-item-start tb-item-undo' },
                { disabled: true, prefixIcon: 'e-icons e-redo tb-icons', tooltipText: 'Redo', cssClass: 'tb-item-end tb-item-redo' },
                { type: 'Separator', },
                { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: 'tb-item-start pan-item' },
                { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-middle tb-item-selected' },
                {
                    tooltipText: 'Draw Connectors', template: '<button id="conTypeBtn" style="width:100%;"></button>', cssClass:
                        'tb-item-middle'
                },
                {
                    tooltipText: 'Draw Shapes', template: '<button id="shapesBtn" style="width:100%;"></button>', cssClass:
                        'tb-item-middle'
                },
                { prefixIcon: 'e-caption e-icons', tooltipText: 'Text Tool', cssClass: 'tb-item-end' },
                { type: 'Separator', },
                { disabled: true, prefixIcon: 'e-icons e-lock', tooltipText: 'Lock', cssClass: 'tb-item-middle tb-item-lock-category' },
                {
                    disabled: true, prefixIcon: 'e-trash e-icons', tooltipText: 'Delete', cssClass: 'tb-item-middle tb-item-lock-category'
                },
                { type: 'Separator', align: 'Center' },

                {
                    disabled: true, type: 'Input', tooltipText: 'Align Objects', template: '<button id="alignBtn" style="width:100%;" > </button> ', cssClass: 'tb - item - middle tb - item - align - category'
                },
                {
                    disabled: true, type: 'Input', tooltipText: 'Distribute Objects', template: '<button id="distributeBtn" style="width:100%;" > </button> ', cssClass: 'tb - item - middle tb - item - space - category'
                },
                { type: 'Separator', },
                {
                    disabled: true, type: 'Input', tooltipText: 'Order Commands', template: '<button id="orderBtn" style="width:100%;" > </button> ', cssClass: 'tb - item - middle tb - item - lock - category'
                },
                { type: 'Separator' },
                {
                    disabled: true, type: 'Input', tooltipText: 'Group/Ungroup', template: '<button id="groupBtn" style="width:100%;" > </button> ', cssClass: 'tb - item - middle tb - item - align - category'
                },
                { type: 'Separator' },
                {
                    disabled: true, type: 'Input', tooltipText: 'Rotate', template: '<button id="rotateBtn" style="width:100%;" > </button> ', cssClass: 'tb - item - middle tb - item - lock - category'
                },
                { type: 'Separator' },
                {
                    disabled: true, type: 'Input', tooltipText: 'Flip', template: '<button id="flipBtn" style="width:100%;"></button>',
                    cssClass: 'tb-item-middle tb-item-lock-category'
                },
                { type: 'Separator' },
                {
                    cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>',
                },
            ];
            return items;
        },
        refreshOverflow: function () {
            const toolbarObj = this.$refs.toolbarObj;
            setTimeout(() => {
                toolbarObj.refreshOverflow();
            }, 100);
        },
        selectionChange: function (args: ISelectionChangeEventArgs) {
            const diagram = this.$refs.diagram;
            const toolbarObj = this.$refs.toolbarObj;
            if (args.state === 'Changed') {
                let selectedItems: NodeModel[] = diagram.selectedItems.nodes;
                selectedItems = selectedItems.concat(
                    (diagram.selectedItems as any).connectors
                );
                if (selectedItems.length === 0) {
                    toolbarObj.items[6].disabled = true;
                    toolbarObj.items[7].disabled = true;
                    toolbarObj.items[19].disabled = true;
                    toolbarObj.items[20].disabled = true;
                    toolbarObj.items[25].disabled = true;
                    toolbarObj.items[29].disabled = true;
                    toolbarObj.items[31].disabled = true;
                    this.disableMultiselectedItems();
                }
                if (selectedItems.length === 1) {
                    this.enableItems();
                    this.disableMultiselectedItems();

                    if (
                        selectedItems[0].children !== undefined &&
                        selectedItems[0].children.length > 0
                    ) {
                        toolbarObj.items[27].disabled = false;
                    } else {
                        toolbarObj.items[27].disabled = true;
                    }
                }

                if (selectedItems.length > 1) {
                    this.enableItems();
                    toolbarObj.items[22].disabled = false;
                    toolbarObj.items[23].disabled = false;
                    toolbarObj.items[27].disabled = false;
                    if (selectedItems.length > 2) {
                        toolbarObj.items[23].disabled = false;
                    } else {
                        toolbarObj.items[23].disabled = true;
                    }
                }
            }
        },
        historyChange: function () {
            const diagram = this.$refs.diagram;
            const toolbarObj = this.$refs.toolbarObj;
            if (diagram.historyManager.undoStack.length > 0) {
                toolbarObj.items[10].disabled = false;
            } else {
                toolbarObj.items[10].disabled = true;
            }
            if (diagram.historyManager.redoStack.length > 0) {
                toolbarObj.items[11].disabled = false;
            } else {
                toolbarObj.items[11].disabled = true;
            }
        },
        getNodeDefaults: function (node: NodeModel): NodeModel {
            if (node.width === undefined) {
                node.width = 145;
            } if ((node.shape as FlowShapeModel).type === 'Flow' && (node.shape as FlowShapeModel).shape === 'Decision') {
                node.height = 80;
            }
            return node;
        },
        printDiagram: function () {
            const diagram = this.$refs.diagram;
            let options: IExportOptions = {};
            options.mode = 'Download';
            options.region = 'Content';
            options.multiplePage = diagram.pageSettings.multiplePage;
            options.pageHeight = diagram.pageSettings.height;
            options.pageWidth = diagram.pageSettings.width;
            diagram.print(options);
        },
        enableItems: function () {
            const toolbarObj = this.$refs.toolbarObj;
            toolbarObj.items[6].disabled = false;
            toolbarObj.items[7].disabled = false;
            toolbarObj.items[19].disabled = false;
            toolbarObj.items[20].disabled = false;
            toolbarObj.items[25].disabled = false;
            toolbarObj.items[29].disabled = false;
            toolbarObj.items[31].disabled = false;
        },
        disableMultiselectedItems: function () {
            const toolbarObj = this.$refs.toolbarObj;
            toolbarObj.items[22].disabled = true;
            toolbarObj.items[23].disabled = true;
            toolbarObj.items[27].disabled = true;
        },
        toolbarClick: function (args: ClickEventArgs) {
            const diagram = this.$refs.diagram;
            const toolbarObj = this.$refs.toolbarObj;
            let item = args.item.tooltipText;
            switch (item) {
                case 'Undo':
                    diagram.undo();
                    break;
                case 'Redo':
                    diagram.redo();
                    break;
                case 'Lock':
                    this.lockObject();
                    break;
                case 'Cut':
                    diagram.cut();
                    toolbarObj.items[8].disabled = false;
                    break;
                case 'Copy':
                    diagram.copy();
                    toolbarObj.items[8].disabled = false;
                    break;
                case 'Paste':
                    diagram.paste();
                    break;
                case 'Delete':
                    diagram.remove();
                    break;
                case 'Select Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.Default;
                    break;
                case 'Text Tool':
                    diagram.clearSelection();
                    diagram.selectedItems.userHandles = [];
                    diagram.drawingObject = { shape: { type: 'Text' } };
                    diagram.tool = DiagramTools.ContinuousDraw;
                    break;
                case 'Pan Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.ZoomPan;
                    break;
                case 'New Diagram':
                    diagram.clear();
                    this.historyChange();
                    break;
                case 'Print Diagram':
                    this.printDiagram();
                    break;
                case 'Save Diagram':
                    this.download(diagram.saveDiagram());
                    break;
                case 'Open Diagram':
                    (document.getElementsByClassName('e-file-select-wrap') as any)[0]
                        .querySelector('button')
                        .click();
                    break;
            }
            diagram.dataBind();
        },
        zoomChange: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            let zoomCurrentValue: DropDownButton = (document.getElementById("btnZoomIncrement") as any).ej2_instances[0];
            let currentZoom: number = diagram.scrollSettings.currentZoom;
            let zoom: any = {};
            switch (args.item.text) {
                case 'Zoom In':
                    diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                    zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    break;
                case 'Zoom Out':
                    diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                    zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    break;
                case 'Zoom to Fit':
                    zoom.zoomFactor = 1 / currentZoom - 1;
                    diagram.zoomTo(zoom);
                    zoomCurrentValue.content = diagram.scrollSettings.currentZoom;
                    break;
                case 'Zoom to 50%':
                    if (currentZoom === 0.5) {
                        currentZoom = 0;
                        zoom.zoomFactor = (0.5 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (0.5 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 100%':
                    if (currentZoom === 1) {
                        currentZoom = 0;
                        zoom.zoomFactor = (1 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (1 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 200%':
                    if (currentZoom === 2) {
                        currentZoom = 0;
                        zoom.zoomFactor = (2 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (2 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
            }
            zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
        },
        onConnectorSelect: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            diagram.clearSelection();
            diagram.drawingObject = { type: args.item.text };
            diagram.tool = DiagramTools.ContinuousDraw;
            diagram.selectedItems.userHandles = [];
            diagram.dataBind();
        },
        onShapesSelect: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            diagram.clearSelection();
            diagram.drawingObject = { shape: { shape: args.item.text } };
            diagram.tool = DiagramTools.ContinuousDraw;
            diagram.selectedItems.userHandles = [];
            diagram.dataBind();
        },
        onselectExport: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            let exportOptions: IExportOptions = {};
            exportOptions.format = args.item.text as FileFormats;
            exportOptions.mode = 'Download';
            exportOptions.region = 'PageSettings';
            exportOptions.fileName = 'Export';
            exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
            diagram.exportDiagram(exportOptions);
        },
        onSelectGroup: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            if (args.item.text === 'Group') {
                diagram.group();
            }
            else if (args.item.text === 'Ungroup') {
                diagram.unGroup();
            }
        },
        onSelectAlignObjects: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            let item: string = args.item.text as string;
            let alignType = item.replace('Align', '');
            let alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
            diagram.align(alignType1.trim());
        },
        onSelectDistributeObjects: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            if (args.item.text === 'Distribute Objects Vertically') {
                diagram.distribute('BottomToTop');
            }
            else {
                diagram.distribute('RightToLeft');
            }
        },
        onSelectOrder: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            switch (args.item.text) {
                case 'Bring Forward':
                    diagram.moveForward();
                    break;
                case 'Bring To Front':
                    diagram.bringToFront();
                    break;
                case 'Send Backward':
                    diagram.sendBackward();
                    break;
                case 'Send To Back':
                    diagram.sendToBack();
                    break;
            }
        },
        onSelectRotate: function (args: MenuEventArgs) {
            const diagram = this.$refs.diagram;
            if (args.item.text === 'Rotate Clockwise') {
                diagram.rotate(diagram.selectedItems, 90);
            }
            else {
                diagram.rotate(diagram.selectedItems, -90);
            }
        },
        onSelectFlip: function (args: MenuEventArgs) {
            this.flipObjects(args.item.text as string);
        },
        flipObjects: function (flipType: string) {
            const diagram = this.$refs.diagram;
            let selectedObjects = diagram.selectedItems.nodes.concat((diagram.selectedItems as any).connectors);
            for (let i: number = 0; i < selectedObjects.length; i++) {
                selectedObjects[i].flip = flipType === 'Flip Horizontal'
                    ? 'Horizontal' : 'Vertical';
            } diagram.dataBind();
        },
        onUploadSuccess: function (args: any) {
            let file = args.file;
            let rawFile = file.rawFile;
            let reader = new FileReader();
            reader.readAsText(rawFile);
            reader.onloadend = this.loadDiagram;
        },
        loadDiagram: function (event: any) {
            const diagram = this.$refs.diagram;
            diagram.loadDiagram(event.target.result);
        },
        download: function (data: string) {
            if ((window.navigator as any).msSaveBlob) {
                let blob: Blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
                (window.navigator as any).msSaveOrOpenBlob(blob, 'Diagram.json');
            } else {
                let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
                let ele = document.createElement('a');
                ele.href = dataString; ele.download = 'Diagram.json';
                document.body.appendChild(ele);
                ele.click();
                ele.remove();
            }
        },
        lockObject: function () {
            const diagram = this.$refs.diagram;
            for (let i: number = 0; i < diagram.selectedItems.nodes.length; i++) {
                let node = diagram.selectedItems.nodes[i]; if (node.constraints & NodeConstraints.Drag) {
                    node.constraints = NodeConstraints.PointerEvents | NodeConstraints.Select;
                } else {
                    node.constraints = NodeConstraints.Default;
                }
            } for (let j: number = 0; j < diagram.selectedItems.connectors.length;
                j++) {
                let connector = diagram.selectedItems.connectors[j]; if (connector.constraints & ConnectorConstraints.Drag) {
                    connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select;
                } else {
                    connector.constraints = ConnectorConstraints.Default;
                }
            } diagram.dataBind();
        },
        onTextBoxChange: function (args: InputEventArgs) {
            if (args.value !== '') {
                sendButton.disabled = false;
            } else {
                sendButton.disabled = true;
            }
        },
        convertTextToFlowChart: async function (inputText: string) {
            const diagram = this.$refs.diagram;
            this.showLoading();
            const options = {
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant tasked with generating mermaid flow chart diagram data sources based on user queries'
                    },
                    {
                        role: 'user',
                        content: `
    Generate only the Mermaid flowchart code for the process titled "${inputText}".
    Use the format provided in the example below, but adjust the steps, conditions, and styles according to the new
    title:

    **Example Title:** Bus Ticket Booking

    **Example Steps and Mermaid Code:**

    graph TD
    A([Start]) --> B[Choose Destination]
    B --> C{Already Registered?}
    C -->|No| D[Sign Up]
    D --> E[Enter Details]
    E --> F[Search Buses]
    C --> |Yes| F
    F --> G{Buses Available?}
    G -->|Yes| H[Select Bus]
    H --> I[Enter Passenger Details]
    I --> J[Make Payment]
    J --> K[Booking Confirmed]
    G -->|No| L[Set Reminder]
    K --> M([End])
    L --> M
    style A fill:#90EE90,stroke:#333,stroke-width:2px;
    style B fill:#4682B4,stroke:#333,stroke-width:2px;
    style C fill:#32CD32,stroke:#333,stroke-width:2px;
    style D fill:#FFD700,stroke:#333,stroke-width:2px;
    style E fill:#4682B4,stroke:#333,stroke-width:2px;
    style F fill:#4682B4,stroke:#333,stroke-width:2px;
    style G fill:#32CD32,stroke:#333,stroke-width:2px;
    style H fill:#4682B4,stroke:#333,stroke-width:2px;
    style I fill:#4682B4,stroke:#333,stroke-width:2px;
    style J fill:#4682B4,stroke:#333,stroke-width:2px;
    style K fill:#FF6347,stroke:#333,stroke-width:2px;
    style L fill:#FFD700,stroke:#333,stroke-width:2px;
    style M fill:#FF6347,stroke:#333,stroke-width:2px;


    Note: Please ensure the generated code matches the title "${inputText}" and follows the format given above. Provide
    only the Mermaid flowchart code, without any additional explanations, comments, or text.
    `


                    }
                ],
            }

            try {
                const jsonResponse = await (window as any).getAzureChatAIRequest(options);
                diagram.loadDiagramFromMermaid(jsonResponse);
                this.hideLoading();

            } catch (error) {
                console.error('Error:', error);
                this.convertTextToFlowChart(inputText);
            }
        },
        // Function to show loading indicator
        showLoading: function () {
            (this.$refs.loadingContainer as HTMLInputElement).style.display = 'block';
        },
        // Function to hide loading indicator
        hideLoading: function () {
            (this.$refs.loadingContainer as HTMLInputElement).style.display = 'none';
        },
        diagramScrollChange: function (args: IScrollChangeEventArgs) {
            const diagram = this.$refs.diagram;
            if (args.panState !== 'Start') {
                let zoomCurrentValue: any = (document.getElementById(" btnZoomIncrement") as
                    any).ej2_instances[0]; zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom *
                        100) + ' %';
            }
        }
    },
    mounted() {
        const textbox = this.$refs.textbox;
        const dialog = this.$refs.dialog;
        const convertTextToFlowChart = this.convertTextToFlowChart;

        // Add keypress event listener to the document
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && document.activeElement === textbox.element) {
                if (textbox.value !== '') {
                    dialog.hide();
                    convertTextToFlowChart(textbox.value);
                }
            }
        });
    },
    provide: {
        diagram: [UndoRedo, DataBinding, PrintAndExport, FlowchartLayout],
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


.e-connector::before {
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

.e-file-select-wrap {
    display: none;
}

/* Toolbar width */
.db-toolbar-editor {
    width: 100%;
}

/* symbolpalette width */
#symbolpalette {
    width: 90%;
}

/* Overall div width */
.main {
    width: 100%;
}

.diagram-upload-file {
    display: none;
}

/* Center the loading indicator and text */
.loading-container {
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
.send-button {
    cursor: pointer;
    transition: fill 0.2s ease;
}

/* Hover style for the send button */
.send-button:hover {
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
</style>