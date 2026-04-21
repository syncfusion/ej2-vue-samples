<template>
    <div class="control-pane" id="diagram-functionalities">
        <div class="control-section">
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
                        <ejs-toolbar id="toolbar" ref="toolbarObj" overflowMode="Scrollable"
                            style="width: 100%; height: 40;" :clicked="toolbarClick">
                            <e-items>
                                <e-item prefixIcon="e-icons e-circle-add" tooltipText="New Diagram"
                                    id="New_Diagram"></e-item>
                                <e-item prefixIcon="e-icons e-folder-open" tooltipText="Open Diagram"
                                    id="Open_diagram"></e-item>
                                <e-item prefixIcon="e-icons e-save" tooltipText="Save Diagram" id="Save"></e-item>
                                <e-item type="Separator"></e-item>
                                <e-item prefixIcon="e-print e-icons" tooltipText="Print Diagram" id="Print"></e-item>
                                <e-item type="Input" tooltipText="Export Diagram" id="Export"
                                    :template="exportImage"></e-item>
                                <e-item type="Separator"></e-item>
                                <e-item prefixIcon="e-pan e-icons" tooltipText="Pan Tool" id="Pan_tool"
                                    cssClass="tb-item-start pan-item"></e-item>
                                <e-item prefixIcon="e-mouse-pointer e-icons" tooltipText="Select Tool" id="Select_tool"
                                    cssClass="tb-item-middle tb-item-selected"></e-item>
                                <e-item type="Separator"></e-item>
                                <e-item :template="zoomDiagram" id="zoomDiagram"
                                    cssClass="tb-item-end tb-zoom-dropdown-btn" align="right"> </e-item>
                            </e-items>
                        </ejs-toolbar>
                    </div>
                </div>
                <div class="sb-mobile-palette-bar" ref="paletteIcon">
                    <div id="palette-icon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
                </div>
                <div id="ai-palette-space" class="sb-mobile-palette" ref="paletteSpace">
                    <ejs-symbolpalette expandMode='Multiple' :palettes="palettes" width='100%' height='900px'
                        :symbolHeight='60' :symbolWidth='60' :symbolMargin="{
                            left: 15, right: 15,
                            top: 15, bottom: 15
                        }" :getNodeDefaults='getSymbolDefaults' :getSymbolInfo='getSymbolInfo'></ejs-symbolpalette>
                </div>
                <div id="flow-diagram-space" class="sb-mobile-diagram">
                    <ejs-diagram ref="diagramObj" width='100%' height='900px' :drawingObject='{}' :tool='diagramTool'
                        :scrollSettings="{ scrollLimit: 'Diagram' }" :layout="diagramLayout" :rulerSettings="{ showRulers: true }"
                        :dataSourceSettings="dataSourceSettings" :scrollChange="diagramScrollChange"
                        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
                        :dragEnter='dragEnter'></ejs-diagram>
                </div>
            </div>
            <div id='container'>
                <ejs-dialog ref="dialog" header='headerTemplate' :showCloseIcon='true' :isModal='true'
                    content='contentTemplate' target='.control-section' width='540px' :visible='false' height='310px'>
                    <template #headerTemplate>
                        <span class="e-icons e-assistview-icon" style="color: black;width:20px; font-size: 16px;">
                        </span>
                        AI Assist
                    </template>
                    <template #contentTemplate>
                        <p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
                        <ejs-button id="btn1"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click="btnClick">
                            Flowchart for online shopping
                        </ejs-button>
                        <ejs-button id="btn2"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click="btnClick">
                            Flowchart for Mobile banking registration
                        </ejs-button>
                        <ejs-button id="btn3"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click="btnClick">
                            Flowchart for Bus ticket booking
                        </ejs-button>
                        <div style="display: flex; align-items: center; margin-top: 20px;">
                            <ejs-textbox ref='textBox' id="textBox" class="db-openai-textbox" style="flex: 1;"
                                placeholder='Please enter your prompt here...' width='450' :input='onTextBoxChange' />
                            <ejs-button id="diagram-db-send" iconCss='e-icons e-send' :isPrimary='true' :disabled='true'
                                style="margin-left: 2px; height: 32px; width: 32px;"
                                @click="dbSend"></ejs-button>
                        </div>
                    </template>
                </ejs-dialog>
            </div>
            <ejs-fab :isPrimary='true' iconCss='e-icons e-assistview-icon' target="#flow-diagram-space"
                @click='() => { $refs.dialog.show(); }'>AI Assist</ejs-fab>

            <!-- Loading indicator container -->
            <div ref="loadingContainer" id="loadingContainer" class="diagram-loading-container">
                <div class="loading-indicator"></div>
                <div class="loading-text">Generating Flowchart...</div>
            </div>
        </div>
        <AIToast />
        <div id="action-description">
            <p>
                This demo illustrates the creation of a flowchart diagram using the Vue Diagram control with the
                assistance
                of AI. The AI-powered flowchart is structured with nodes and connectors arranged in a flowchart layout,
                designed
                to visually represent processes and workflows. This sample is particularly effective for visualizing
                step-by-step procedures, workflows, and decision-making paths in a clear and interactive manner.
            </p>
            <p>To explore this and more Syncfusion Vue Smart AI integrations locally, check out our <a target='_blank'
                    href='https://github.com/syncfusion/smart-ai-samples/tree/master/vue'
                    aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub
                    repository</a>.</p>
        </div>
        <div id="description">
            <p>
                This sample leverages a specialized AI prompt to create a dynamic flowchart diagram by submitting a
                request to
                OpenAI. The AI-generated response is parsed to produce nodes and connectors arranged in a flowchart
                layout,
                visually representing the defined processes or workflows. Users can generate and visualize the flowchart
                content
                based on their input prompt, creating an interactive and organized depiction of processes and
                decision-making
                paths.
            </p>
        </div>
    </div>
</template>

<script>
/**
* Default FlowShape sample
*/
import { createApp } from "vue";
import { UndoRedo, Node, FlowchartLayout, DataBinding, DiagramTools, PrintAndExport, NodeConstraints } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { DiagramComponent, SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent, FabComponent } from '@syncfusion/ej2-vue-buttons';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-vue-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { serverAIRequest } from '../common/ai-service';

let diagramInstance;
let paletteSpace;
let paletteIcon;
const flowChartData = [
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
        id: "F", name: "Search for the book in the search bar", shape: "Rectangle", color: "#1759B7", parentId: ["E",
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

let flowShapes = [
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" }, tooltip: {content: "Terminator"} },
    { id: "Process", shape: { type: "Flow", shape: "Process" }, tooltip: {content: "Process"} },
    { id: "Decision", shape: { type: "Flow", shape: "Decision" }, tooltip: {content: "Decision"} },
    { id: "Document", shape: { type: "Flow", shape: "Document" }, tooltip: {content: "Document"} },
    { id: "PreDefinedProcess", shape: { type: "Flow", shape: "PreDefinedProcess" }, tooltip: {content: "Predefined Process"} },
    { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" }, tooltip: {content: "Paper Tap"} },
    { id: "DirectData", shape: { type: "Flow", shape: "DirectData" }, tooltip: {content: "Direct Data"} },
    { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" }, tooltip: {content: "Sequential Data"} },
    { id: "Sort", shape: { type: "Flow", shape: "Sort" }, tooltip: {content: "Sort"} },
    { id: "MultiDocument", shape: { type: "Flow", shape: "MultiDocument" }, tooltip: {content: "Multi Document"} },
    { id: "Collate", shape: { type: "Flow", shape: "Collate" }, tooltip: {content: "Collate"} },
    { id: "SummingJunction", shape: { type: "Flow", shape: "SummingJunction" }, tooltip: {content: "Summing Junction"} },
    { id: "Or", shape: { type: "Flow", shape: "Or" }, tooltip: {content: "Or"} },
    { id: "InternalStorage", shape: { type: "Flow", shape: "InternalStorage" }, tooltip: {content: "Internal Storage"} },
    { id: "Extract", shape: { type: "Flow", shape: "Extract" }, tooltip: {content: "Extract"} },
    { id: "ManualOperation", shape: { type: "Flow", shape: "ManualOperation" }, tooltip: {content: "Manual Operation"} },
    { id: "Merge", shape: { type: "Flow", shape: "Merge" }, tooltip: {content: "Merge"} },
    { id: "OffPageReference", shape: { type: "Flow", shape: "OffPageReference" }, tooltip: {content: "Off‑Page Reference"} },
    { id: "SequentialAccessStorage", shape: { type: "Flow", shape: "SequentialAccessStorage" }, tooltip: {content: "Sequential Access Storage"} },
    { id: "Annotation", shape: { type: "Flow", shape: "Annotation" }, tooltip: {content: "Annotation"} },
    { id: "Annotation2", shape: { type: "Flow", shape: "Annotation2" }, tooltip: {content: "Annotation2"} },
    { id: "Data", shape: { type: "Flow", shape: "Data" }, tooltip: {content: "Data"} },
    { id: "Card", shape: { type: "Flow", shape: "Card" }, tooltip: {content: "Card"} },
    { id: "Delay", shape: { type: "Flow", shape: "Delay" }, tooltip: {content: "Delay"} },
];
let connectorSymbols = [{
    id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }, style: {
        strokeWidth: 1,
        strokeColor: '#757575'
    }
}, {
    id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: {
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
}];

//To get default values for nodes in symbol palette
function palettegetNodeDefaults(symbol) {
    symbol.style = { strokeColor: "#757575" };
    if (symbol.id === "Terminator" || symbol.id === "Process") {
        symbol.width = 80;
        symbol.height = 40;
    } else if (
        symbol.id === "Decision" ||
        symbol.id === "Document" ||
        symbol.id === "PreDefinedProcess" ||
        symbol.id === "PaperTap" ||
        symbol.id === "DirectData" ||
        symbol.id === "MultiDocument" ||
        symbol.id === "Data"
    ) {
        symbol.width = 50;
        symbol.height = 40;
    } else {
        symbol.width = 50;
        symbol.height = 50;
    }
    symbol.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
}
export default {
    components: {
        'ejs-button': ButtonComponent,
        'ejs-diagram': DiagramComponent,
        'ejs-fab': FabComponent,
        'ejs-toolbar': ToolbarComponent,
        'ejs-uploader': UploaderComponent,
        'ejs-symbolpalette': SymbolPaletteComponent,
        'ejs-dialog': DialogComponent,
        'ejs-textbox': TextBoxComponent,
        "ejs-splitbutton": SplitButtonComponent,
        "e-items": ItemsDirective,
        "e-item": ItemDirective,
    },
    data() {
        return {
            diagramTool: DiagramTools.Default,
            dataSourceSettings: {
                id: 'id',
                parentId: 'parentId',
                dataSource: new DataManager(flowChartData)
            },
            diagramLayout: {
                type: 'Flowchart',
                orientation: 'TopToBottom',
                flowchartLayoutSettings: {
                    yesBranchDirection: 'LeftInFlow',
                    noBranchDirection: 'RightInFlow',
                    yesBranchValues: ['Yes', 'True'],
                    noBranchValues: ['No', 'False']
                },
                verticalSpacing: 50,
                horizontalSpacing: 50
            },
            getSymbolDefaults: (symbol) => {
                return palettegetNodeDefaults(symbol);
            },
            //To provide zoom options
            zoomDiagram: function () {
                return {
                    template: createApp({}).component("zoomDiagram", {
                        template:
                            '<ejs-splitbutton id="btnZoom" :items="zoomMenuItems" content="100%" :select="zoomChange"></ejs-splitbutton>',
                        components: {
                            "ejs-splitbutton": SplitButtonComponent,
                        },
                        data() {
                            return {
                                zoomMenuItems: [
                                    { text: "Zoom In" },
                                    { text: "Zoom Out" },
                                    { text: "Zoom to Fit" },
                                    { text: "Zoom to 50%" },
                                    { text: "Zoom to 100%" },
                                    { text: "Zoom to 200%" },
                                ],
                                zoomChange: function (args) {
                                    var zoomCurrentValue = document.getElementById("btnZoom").ej2_instances[0];
                                    if (!zoomCurrentValue) {
                                        return;
                                    }
                                    var currentZoom = diagramInstance.scrollSettings.currentZoom;
                                    var zoom = {};
                                    switch (args.item.text) {
                                        case "Zoom In":
                                            diagramInstance.zoomTo({ type: "ZoomIn", zoomFactor: 0.2 });
                                            zoomCurrentValue.content = (diagramInstance.scrollSettings.currentZoom * 100).toFixed() + "%";
                                            break;
                                        case "Zoom Out":
                                            diagramInstance.zoomTo({ type: "ZoomOut", zoomFactor: 0.2 });
                                            zoomCurrentValue.content = (diagramInstance.scrollSettings.currentZoom * 100).toFixed() + "%";
                                            break;
                                        case "Zoom to Fit":
                                            diagramInstance.fitToPage();
                                            break;
                                        case "Zoom to 50%":
                                            if (currentZoom === 0.5) {
                                                currentZoom = 0;
                                                zoom.zoomFactor = 0.5 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            } else {
                                                zoom.zoomFactor = 0.5 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            }
                                            break;
                                        case "Zoom to 100%":
                                            if (currentZoom === 1) {
                                                currentZoom = 0;
                                                zoom.zoomFactor = 1 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            } else {
                                                zoom.zoomFactor = 1 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            }
                                            break;
                                        case "Zoom to 200%":
                                            if (currentZoom === 2) {
                                                currentZoom = 0;
                                                zoom.zoomFactor = 2 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            } else {
                                                zoom.zoomFactor = 2 / (currentZoom - 1);
                                                diagramInstance.zoomTo(zoom);
                                            }
                                            break;
                                    }
                                    zoomCurrentValue.content = Math.round(diagramInstance.scrollSettings.currentZoom * 100) + " %";
                                },
                            };
                        },
                    }),
                };
            },
            //To export diagram
            exportImage: function () {
                return {
                    template: createApp({}).component("export", {
                        template:
                            ' <ejs-splitbutton :items="items" iconCss="e-export e-icons" :select="exportOptions"></ejs-splitbutton>',
                        components: {
                            "ejs-splitbutton": SplitButtonComponent,
                        },
                        data() {
                            return {
                                items: [{ text: "JPG" }, { text: "PNG" }, { text: "SVG" }],
                                exportOptions: function (args) {
                                    let exportOptions = {};
                                    exportOptions.format = args.item.text;
                                    exportOptions.mode = 'Download';
                                    exportOptions.region = 'PageSettings';
                                    exportOptions.fileName = 'Export';
                                    exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
                                    diagramInstance.exportDiagram(exportOptions);
                                },
                            };
                        },
                    }),
                };
            },
            palettes: [{
                id: 'flow',
                expanded: true, symbols: flowShapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes'
            }, {
                id: 'connectors',
                expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors'
            }]
        }
    },
    methods: {
        //Sets the default values of a connector
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            return connector;
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            let obj = args.element;
            if (obj instanceof Node) {
                let oWidth = obj.width;
                let oHeight = obj.height;
                let ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
                obj.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        },

        getSymbolInfo: function (symbol) {
            return { fit: true };
        },

        getNodeDefaults: function (node) {
            if (node.width === undefined) {
                node.width = 145;
            } if ((node.shape).type === 'Flow' && (node.shape).shape === 'Decision') {
                node.height = 80;
            }
            node.constraints = NodeConstraints.Default;
            node.tooltip.content = "";
            return node;
        },
        printDiagram: function () {
            let options = {};
            options.mode = 'Download';
            options.region = 'Content';
            options.multiplePage = diagramInstance.pageSettings.multiplePage;
            options.pageHeight = diagramInstance.pageSettings.height;
            options.pageWidth = diagramInstance.pageSettings.width;
            diagramInstance.print(options);
        },
        changeToolbarSelection: function (tool) {
            const toolbarObj = this.$refs.toolbarObj.ej2Instances;
            let items = toolbarObj.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].tooltipText === tool) {
                    items[i].cssClass = 'tb-item-selected';
                } else {
                    items[i].cssClass = '';
                }
            }
        },

        toolbarClick: function (args) {
            let item = args.item.tooltipText;
            switch (item) {
                case 'Select Tool':
                    diagramInstance.clearSelection();
                    diagramInstance.tool = DiagramTools.Default;
                    this.changeToolbarSelection('Select Tool');
                    break;
                case 'Pan Tool':
                    diagramInstance.clearSelection();
                    diagramInstance.tool = DiagramTools.ZoomPan;
                    this.changeToolbarSelection('Pan Tool');
                    break;
                case 'New Diagram':
                    diagramInstance.clear();
                    break;
                case 'Print Diagram':
                    this.printDiagram();
                    break;
                case 'Save Diagram':
                    this.download(diagramInstance.saveDiagram());
                    break;
                case 'Open Diagram':
                    (document.getElementsByClassName('e-file-select-wrap'))[0]
                        .querySelector('button')
                        .click();
                    break;
            }
            diagramInstance.dataBind();
        },

        onUploadSuccess: function (args) {
            let file = args.file;
            let rawFile = file.rawFile;
            let reader = new FileReader();
            reader.readAsText(rawFile);
            reader.onloadend = this.loadDiagram;
        },
        loadDiagram: function (event) {
            diagramInstance.loadDiagram(event.target.result);
        },
        download: function (data) {
            if ((window.navigator).msSaveBlob) {
                let blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
                (window.navigator).msSaveOrOpenBlob(blob, 'Diagram.json');
            } else {
                let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
                let ele = document.createElement('a');
                ele.href = dataString; ele.download = 'Diagram.json';
                document.body.appendChild(ele);
                ele.click();
                ele.remove();
            }
        },

        onTextBoxChange: function (args) {
            let sendButton = (document.getElementById('diagram-db-send'));
            if (args.value !== '') {
                sendButton.disabled = false;
            } else {
                sendButton.disabled = true;
            }
        },
        convertTextToFlowChart: async function (inputText) {
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
                let jsonResponse = await serverAIRequest(options);
                if (jsonResponse) {
                    jsonResponse = jsonResponse.replace('```mermaid', '').replace('```', '');
                    diagramInstance.loadDiagramFromMermaid(jsonResponse);
                }
                this.hideLoading();

            } catch (error) {
                console.error('Error:', error);
                this.convertTextToFlowChart(inputText);
            }
        },
        // Function to show loading indicator
        showLoading: function () {
            (this.$refs.loadingContainer).style.display = 'block';
        },
        // Function to hide loading indicator
        hideLoading: function () {
            (this.$refs.loadingContainer).style.display = 'none';
        },
        diagramScrollChange: function (args) {
            if (args.panState !== 'Start') {
                let zoomCurrentValue = document.getElementById("btnZoom").ej2_instances[0];
                if (zoomCurrentValue) {
                    zoomCurrentValue.content = Math.round(diagramInstance.scrollSettings.currentZoom * 100) + ' %';
                }
            }
        },
        keyPressHandler: function (event) {
            if (event.key === 'Enter' && document.activeElement === this.$refs.textBox.ej2Instances.element) {
                if (this.$refs.textBox.ej2Instances.value) {
                    this.$refs.dialog.ej2Instances.hide();
                    this.convertTextToFlowChart(this.$refs.textBox.ej2Instances.value);
                }
            }
        },
        dbSend: function () {
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToFlowChart(this.$refs.textBox.ej2Instances.value);
        },
        btnClick: function (e) {
            let element = e.target;
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToFlowChart(element.innerText);
        }
    },
    mounted() {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
        document.addEventListener('keypress', this.keyPressHandler);
        paletteIcon = this.$refs.paletteIcon;
        paletteSpace = this.$refs.paletteSpace;
        addEvents();
        
    },
    provide: {
        diagram: [UndoRedo, DataBinding, PrintAndExport, FlowchartLayout],
    }
}

//Adds EventListener based on device's viewport width.
function addEvents() {
  var isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (paletteIcon) {
      paletteIcon.addEventListener("click", openPalette, false);
    }
  }
}

//Toggles the visibility of the palette space on mobile devices when the palette icon is clicked.
function openPalette() {
  var isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
      paletteSpace.classList.add("sb-mobile-palette-open");
    } else {
      paletteSpace.classList.remove("sb-mobile-palette-open");
    }
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
.main {
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

#ai-palette-space {
    width: 20%;
    float: left;
}

#flow-diagram-space {
    width: 80%;
    float: left;
}

</style>