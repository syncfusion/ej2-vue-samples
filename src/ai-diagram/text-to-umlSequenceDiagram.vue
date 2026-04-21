<template>
    <div class="control-pane" id="diagram-functionalities">
        <div class="control-section">
            <link href="https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css"
                rel="stylesheet" />

            <div class="main .diagramUML">
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
                                    cssClass="tb-item-start pan-item tb-item-selected"></e-item>
                                <e-item prefixIcon="e-mouse-pointer e-icons" tooltipText="Select Tool" id="Select_tool"
                                    cssClass="tb-item-middle"></e-item>
                                <e-item type="Separator"></e-item>
                                <e-item :template="zoomDiagram" id="zoomDiagram"
                                    cssClass="tb-item-end tb-zoom-dropdown-btn" align="right"> </e-item>
                            </e-items>
                        </ejs-toolbar>
                    </div>
                </div>
                <div id="uml-diagram-space" class="sb-mobile-diagram" style="width: 100%;">
                    <ejs-diagram ref="diagramObj" width='100%' height='900px' :model='sequenceModel' :tool='diagramTool'
                        :scrollChange="diagramScrollChange" :rulerSettings="{ showRulers: true }"
                        :getNodeDefaults='getNodeDefaults'></ejs-diagram>
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
                            Sequence Diagram for ATM Transaction Process
                        </ejs-button>
                        <ejs-button id="btn2"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click="btnClick">
                            Sequence Diagram for User Authentication and Authorization
                        </ejs-button>
                        <ejs-button id="btn3"
                            style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;"
                            @click="btnClick">
                            Sequence Diagram for Medical Appointment Scheduling
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
            <ejs-fab :isPrimary='true' iconCss='e-icons e-assistview-icon' target="#uml-diagram-space"
                @click='() => { $refs.dialog.show(); }'>AI Assist</ejs-fab>

            <!-- Loading indicator container -->
            <div ref="loadingContainer" id="loadingContainer" class="diagram-loading-container">
                <div class="loading-indicator"></div>
                <div class="loading-text">Generating Sequence Diagram...</div>
            </div>
        </div>
        <AIToast />
        <div id="action-description">
            <p>This demo sample showcases the creation of a dynamic uml sequence diagram using the Vue Diagram component
                with
                the assistance of AI. The AI-powered diagram features nodes and connectors arranged in a uml sequence
                layout,
                designed to
                visually organize and represent ideas and concepts. This sample is ideal for brainstorming, organizing
                thoughts,
                and visually mapping out complex information.
            </p>
            <p>To explore this and more Syncfusion Vue Smart AI integrations locally, check out our <a target='_blank'
                    href='https://github.com/syncfusion/smart-ai-samples/tree/master/vue'
                    aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub
                    repository</a>.</p>
        </div>
        <div id="description">
            <p>
                This sample leverages a specialized AI prompt, allowing users to generate the content of the diagram by
                submitting a prompt to OpenAI. The AI's response is parsed and transformed into nodes and connectors,
                visually
                representing the generated ideas or concepts in a uml sequence diagram format. Users can also manually
                add child
                nodes using
                user handles to further expand and customize the uml sequence diagram, creating an interactive and
                personalized
                experience.
            </p>
        </div>
    </div>
</template>

<script>
/**
* Default UML Sequence sample
*/
import { createApp } from "vue";
import { UndoRedo, Node, FlowchartLayout, DataBinding, DiagramTools, PrintAndExport } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { DiagramComponent, SymbolPaletteComponent, UmlSequenceMessageType, UmlSequenceFragmentType, UmlSequenceParticipant, UmlSequenceFragment } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent, FabComponent } from '@syncfusion/ej2-vue-buttons';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-vue-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { serverAIRequest } from '../common/ai-service';

let diagramInstance;

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
            diagramTool: DiagramTools.ZoomPan,
            sequenceModel: {
                // Space between each participant in the diagram
                spaceBetweenParticipants: 250,
                // List of participants in the sequence diagram
                participants: [
                    {
                        id: "User",
                        content: "User",
                        // Indicates that User is an actor
                        isActor: true
                    },
                    {
                        id: "Transaction",
                        content: "Transaction",
                        // Activation periods for the Transaction participant
                        activationBoxes: [
                            { id: "act1", startMessageID: 'msg1', endMessageID: 'msg4' }
                        ]
                    },
                    {
                        id: "FraudDetectionSystem",
                        content: "Fraud Detection System",
                        // Activation periods for the Fraud Detection System participant
                        activationBoxes: [
                            { id: "act2", startMessageID: 'msg2', endMessageID: 'msg3' },
                            { id: "act3", startMessageID: 'msg5', endMessageID: 'msg6' }
                        ]
                    }
                ],
                // List of messages exchanged between participants
                messages: [
                    { id: 'msg1', content: "Initiate Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous },
                    { id: 'msg2', content: "Send Transaction Data", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: UmlSequenceMessageType.Synchronous },
                    { id: 'msg3', content: "Validate Transaction", fromParticipantID: "FraudDetectionSystem", toParticipantID: "Transaction", type: UmlSequenceMessageType.Reply },
                    { id: 'msg4', content: "Transaction Approved", fromParticipantID: "Transaction", toParticipantID: "User", type: UmlSequenceMessageType.Asynchronous },
                    { id: 'msg5', content: "Flag Transaction", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: UmlSequenceMessageType.Synchronous },
                    { id: 'msg6', content: "Fraud Detected", fromParticipantID: "FraudDetectionSystem", toParticipantID: "User", type: UmlSequenceMessageType.Reply },
                    { id: 'msg7', content: "Cancel Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous },
                    { id: 'msg8', content: "Complete Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous }
                ],
                // Conditional fragments within the sequence
                fragments: [
                    {
                        id: 1,
                        // Represents alternative fragment
                        type: UmlSequenceFragmentType.Alternative,
                        conditions: [
                            // Condition when fraud is detected
                            {
                                // Content of condition
                                content: "Fraud Detected",
                                // Messages part of this condition
                                messageIds: ['msg5', 'msg6', 'msg7']
                            },
                            {
                                content: "No Fraud Detected",
                                messageIds: ['msg8']
                            }
                        ]
                    }
                ]
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
        }
    },
    methods: {

        getNodeDefaults: function (node) {
            if (node.data instanceof UmlSequenceParticipant) {
                if (!(node.data.isActor)) {
                    if (node.annotations && node.annotations[0] && node.annotations[0].style) {
                        node.annotations[0].style.color = 'white';
                    }
                }
            }    // fragment node
            else if (node.data instanceof UmlSequenceFragment) {
                node.style = { strokeColor: 'cornflowerblue' };
            }
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
        convertTextToUmlSequence: async function (inputText) {
            this.showLoading();
            const options = {
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant responsible for generating Mermaid syntax for UML sequence diagrams in response to user queries.'
                    },
                    {
                        role: 'user',
                        content: `
                        Generate only the Mermaid UML sequence diagrams code for the process titled "${inputText}".
                        based on the guidelines below. The output should strictly adhere to these rules and must not include any markdown code fences, blank space or the string 'mermaid' at the beginning
                        1.	Start with sequenceDiagram.
                        2.	Declare all participants with actor or participant; user types must be actor.
                        3.	Use specific arrows only: ->>, -), --), and for self-messages also ->>.
                        4.	Mark activations (activate) and deactivations (deactivate) for all interactions.
                        5.	Include at least one alt, opt, or loop block.
                        6.	Add at least one create and destroy message.
                        7.	Include at least 10 interaction steps, building a complex flow.
                        8.	Follow proper indentation and do not add extra comments or markdown syntax.

                        Basic simple examples for your context, but you try to create a complex diagram with all the given elements:

                        Example 1: All Types of Messages
                        sequenceDiagram
                        actor Client
                        participant Server
                        Client ->> Server: Sync Request
                        Server -) Client: Async Notification
                        Client -->> Server: Reply Message
                        Client ->> Client: Self Check
                        Server ->> Client: Delete Record

                        Example 2: With Activations
                        sequenceDiagram
                        participant User
                        participant Service
                        User ->> Service: Start Process
                        activate Service
                        Service -->> User: Process Acknowledged
                        deactivate Service

                        Example 3: With Fragments
                        sequenceDiagram
                        participant User
                        participant System
                        alt Successful Login
                            User ->> System: Enter Credentials
                            activate System
                            System -->> User: Login Successful
                            deactivate System
                        else Failed Login
                            loop Retry up to 3 times
                                User ->> System: Re-enter Credentials
                            end
                        end

                        Example 4: With Create/Destroy Messages
                        sequenceDiagram
                        actor Admin
                        create participant Worker as DataProcessor
                        Admin -) Worker: Initialize Service
                        activate Worker
                        Worker ->> Admin: Service Ready
                        deactivate Worker
                        destroy Worker

                        Return only the structured Mermaid sequence diagram syntax.
                
                        Note: Please ensure the generated code matches the title "${inputText}" and follows the guidelines & format given above.
                        Provide only the Mermaid UML sequence diagram code, without any additional explanations, comments, or text.
                        `
                    }
                ],
            }

            try {
                const jsonResponse = await serverAIRequest(options);
                if (jsonResponse) {
                    diagramInstance.loadDiagramFromMermaid(jsonResponse);
                }
                this.hideLoading();
            } catch (error) {
                console.error('Error:', error);
                this.convertTextToUmlSequence(inputText);
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
                    this.convertTextToUmlSequence(this.$refs.textBox.ej2Instances.value);
                }
            }
        },
        dbSend: function () {
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToUmlSequence(this.$refs.textBox.ej2Instances.value);
        },
        btnClick: function (e) {
            let element = e.target;
            this.$refs.dialog.ej2Instances.hide();
            this.convertTextToUmlSequence(element.innerText);
        }
    },
    mounted() {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
        document.addEventListener('keypress', this.keyPressHandler);
    },
    provide: {
        diagram: [UndoRedo, DataBinding, PrintAndExport],
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

/* symbolpalette width */
#symbolpalette {
    width: 90%;
}

/* Overall div width */
.main .diagramUML{
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
</style>