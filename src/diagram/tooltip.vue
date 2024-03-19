<template>
    <div>
        <div class="col-lg-8 control-section">
            <div id="tooltipDiagramSection" class="content-wrapper" style="width: 100%">
                <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :snapSettings='snapSettings' :constraints='constraints' :getNodeDefaults='getNodeDefaults' :tooltip='tooltip'></ejs-diagram>
            </div>
        </div>
        <div id="tooltipPropertySection" class="col-lg-4 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td>
                        <div>
                            Relative Mode
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='mode' :index='selectedIndex' :dataSource='modeValue' :fields='fields' :popupWidth='popupWidth' :width='dropdownWidth' :placeholder='relativeWaterMark' :change='relativeModeChange'>
                            </ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            Position
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='position' :index='selectedIndex' :dataSource='positionValue' :fields='fields' :popupWidth='popupWidth' :width='dropdownWidth' :placeholder='positionWaterMark' :change='positionChange'>
                            </ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div id="textContentDiv" class="row" style="display: none">
                            <div>
                                <ejs-textbox id="textContent" floatLabelType="Auto" placeholder="Enter text content" :change="textChange"></ejs-textbox>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            Animation
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-numerictextbox id="duration" :value="duration" :min="min" :max="max" :step="step" :width='textboxWidth' :change="animationChange"></ejs-numerictextbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            Effect
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='effect' :index='selectedIndex' :dataSource='effectValue' :fields='fields' :popupWidth='popupWidth' :width='dropdownWidth' :placeholder='effectWaterMark' :change='effectChange'>
                            </ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            Sticky Mode
                        </div>
                    </td>
                    <td>
                        <div >
                        <ejs-checkbox id="isStickyBox" :checked=false :change='isStickyChange'/>
                        </div>
                    </td>
                </tr>
            </table>
       
        </div>
        
        
        <div id="action-description">
            <p>
                  This sample demonstrates how to add the extra information to the nodes and connectors and how to show the information through
        the common graphical user interface element.
            </p>
        </div>
        <div id="description">
            <p>
               Using diagram’s <code>tooltip</code> we can define the tooltip for the diagram nodes as well as connector. We can control the <code>animation</code>,
        <code>position</code>, <code>effects</code> of the tooltip using <code>tooltip</code> property of the diagram. Also, we can define the custom tooltip
        as either text or HTML element using <code>content</code> property of the tooltip. We can control the different tooltip settings
        to each connector and node.
            </p>
            <br>
        </div>
    </div>
</template>

 <style scoped>

/*To align the property panel */
#tooltipDiagramSection .row {
    margin-left: 0px;
    margin-right: 0px;
}

table{
    border-collapse: separate;
}

</style>

<script>
import {
    DiagramComponent,
    Diagram,
    DiagramConstraints,
    BpmnDiagrams,
    NodeConstraints
} from "@syncfusion/ej2-vue-diagrams";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
Diagram.Inject(BpmnDiagrams);

let diagramInstance;
// FontType Collection
let modeValue = [
    { type: 'Object', text: 'Object' },
    { type: 'Mouse', text: 'Mouse' },
];

let nodes = [
    {
        id: 'node1', width: 60, height: 60, offsetX: 35, offsetY: 120,
        annotations: [{ content: 'Customer query', offset: { x: 0.5, y: 1 }, margin: { top: 15 } }],
        tooltip: { content: 'Queries from the customer' },
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'Message' } }
    },
    {
        id: 'node2', width: 75, height: 70, offsetX: 140, offsetY: 120,
        annotations: [{ content: 'Enough details?', offset: { x: 0.50, y: 0.50 } }],
        tooltip: { content: 'Whether the provided information is enough?' }, shape: { type: 'Bpmn', shape: 'Gateway' }
    },
    {
        id: 'node3', width: 60, height: 50, offsetX: 270, offsetY: 120,
        annotations: [{ content: 'Analyse', offset: { x: 0.50, y: 0.50 } }],
        tooltip: { content: 'Analysing the query' },
        shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } },
    },
    {
        id: 'node4', width: 75, height: 70, offsetX: 370, offsetY: 120, shape: {
            type: 'Bpmn', shape: 'Gateway',
            gateway: { type: 'Exclusive' }
        },
        tooltip: { content: 'proceed to validate?' },
    },
    {
        id: 'node5', width: 75, height: 70, offsetX: 570, offsetY: 120,
        annotations: [{ content: 'Validate', offset: { x: 0.50, y: 0.50 } }],
        tooltip: { content: 'Whether the reported/requested bug/feature is valid?' }, shape: { type: 'Bpmn', shape: 'Gateway' }
    },
    {
        id: 'node6', width: 60, height: 60, offsetX: 720, offsetY: 120,
        tooltip: { content: 'Send the invalid message to customer' },
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
    },
    {
        id: 'node7', width: 60, height: 50, offsetX: 140, offsetY: 280,
        annotations: [{ content: 'Request', offset: { x: 0.50, y: 0.50 }, margin: { top: 5 } }],
        tooltip: { content: 'Requesting for more information' },
        shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task', task: { type: 'Send' } } }
    },
    {
        id: 'node8', width: 60, height: 60, offsetX: 370, offsetY: 280,
        tooltip: { content: 'Share the User Guide/Knowledge Base link' },
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'Message' } }
    },
    {
        id: 'node9', width: 70, height: 50, offsetX: 570, offsetY: 280,
        annotations: [{ content: 'Log bug/feature', offset: { x: 0.50, y: 0.50 } }], tooltip: { content: 'Log the bug/feature' },
        shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } }
    },
    {
        id: 'node10', width: 75, height: 55, offsetX: 390, offsetY: 430,
        annotations: [{ content: 'Implement', offset: { x: 0.50, y: 0.50 } }], tooltip: { content: 'Fix the bug/Add the feature' },
        shape: {
            type: 'Bpmn', shape: 'Activity', activity: {
                activity: 'SubProcess', subProcess: {
                    collapsed: false,
                    events: [{ event: 'Intermediate', trigger: 'Timer', offset: { x: 0.5, y: 1 }, width: 25, height: 25 }]
                }
            }
        }
    },
    {
        id: 'node12', width: 60, height: 60, offsetX: 265, offsetY: 430, tooltip: { content: 'Provide the solution' },
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
    },
    {
        id: 'node13', width: 60, height: 60, offsetX: 720, offsetY: 430, tooltip: { content: 'Share the task details' },
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
    },
    {
        id: 'node14', width: 60, height: 60, offsetX: 570, offsetY: 430, shape: {
            type: 'Bpmn', shape: 'Gateway',
            gateway: { type: 'Parallel' }
        },
        tooltip: { content: 'can log?' },
    },
];

let connectors = [
    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
    { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
    { id: 'connector3', sourceID: 'node3', targetID: 'node4' },
    {
        id: 'connector4', sourceID: 'node4', targetID: 'node5',
        annotations: [{ content: 'Feature/Bug', offset: 0.5, style: { fill: 'white', textWrapping: 'Wrap' } }]
    },
    {
        id: 'connector5', sourceID: 'node5', targetID: 'node6',
        annotations: [{ content: 'Invalid', offset: 0.5, style: { fill: 'white' } }]
    },
    { id: 'connector6', sourceID: 'node2', targetID: 'node7' },
    {
        id: 'connector7', sourceID: 'node4', targetID: 'node8',
        annotations: [{ content: 'How to?', offset: 0.5, style: { fill: 'white' } }]
    },
    { id: 'connector8', sourceID: 'node5', targetID: 'node9' },
    { id: 'connector9', sourceID: 'node14', targetID: 'node13' },
    {
        id: 'connector10', sourceID: 'node7', targetID: 'node3', type: 'Orthogonal',
        segments: [{ type: 'Orthogonal', length: 100, direction: 'Right' }, { type: 'Orthogonal', length: 100, direction: 'Top' }]
    },
    { id: 'connector11', sourceID: 'node14', targetID: 'node10' },
    { id: 'connector12', sourceID: 'node10', targetID: 'node12' },
    { id: 'connector13', sourceID: 'node9', targetID: 'node14' },
];

// FontType Collection
let positionValue = [
    { type: 'TopLeft', text: 'Top Left' },
    { type: 'TopCenter', text: 'Top Center' },
    { type: 'TopRight', text: 'Top Right' },
    { type: 'BottomLeft', text: 'Bottom Left' },
    { type: 'BottomCenter', text: 'Bottom Center' },
    { type: 'BottomRight', text: 'Bottom Right' },
    { type: 'LeftTop', text: 'Left Top' },
    { type: 'LeftCenter', text: 'Left Center' },
    { type: 'LeftBottom', text: 'Left Bottom' },
    { type: 'RightTop', text: 'Right Top' },
    { type: 'RightCenter', text: 'Right Center' },
    { type: 'RightBottom', text: 'Right Bottom' },
];

//FontType Collection
let effectValue = [
    { type: 'FadeIn', text: 'Fade In' },
    { type: 'FadeOut', text: 'Fade Out' },
    { type: 'FadeZoomIn', text: 'Fade ZoomIn' },
    { type: 'FadeZoomOut', text: 'Fade ZoomOut' },
    { type: 'FlipXDownIn', text: 'Flip X DownIn' },
    { type: 'FlipXDownOut', text: 'Flip X DownOut' },
    { type: 'FlipXUpIn', text: 'Flip X UpIn' },
    { type: 'FlipXUpOut', text: 'Flip X UpOut' },
    { type: 'FlipYLeftIn', text: 'Flip Y LeftIn' },
    { type: 'FlipYLeftOut', text: 'Flip Y LeftOut' },
    { type: 'FlipYRightIn', text: 'Flip Y RightIn' },
    { type: 'FlipYRightOut', text: 'Flip Y RightOut' },
    { type: 'ZoomIn', text: 'Zoom In' },
    { type: 'ZoomOut', text: 'Zoom Out' },
    { type: 'None', text: 'None' },
];

let contentValue = [
    { type: 'HTML Element', text: 'HTML Element' },
    { type: 'Text', text: 'Text' },
];
let temp = '<div style="background-color: #f4f4f4; color: black; border-width:1px;' +
    'border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;">' +
    ' <span style="margin: 10px;">';

export default {
    components: {
       'ejs-diagram': DiagramComponent,
       'ejs-dropdownlist': DropDownListComponent,
       'ejs-numerictextbox': NumericTextBoxComponent,
       'ejs-textbox': TextBoxComponent,
       'ejs-checkbox': CheckBoxComponent
    },
    data: function() {
        return {
            //Initializes diagram control
            width: "100%",
            height: 700,
            nodes: nodes,
            connectors: connectors,
            snapSettings: { constraints: 0 },
            constraints: DiagramConstraints.Default,
            tooltip: {
                content: getcontent(), position: 'TopLeft', relativeMode: 'Object',
                animation: { open: { effect: 'FadeZoomIn', delay: 0 }, close: { effect: 'FadeZoomOut', delay: 0 } }
            },

            // initialize dropdown control
            fields: { value: 'type', text: 'text' },
            popupWidth: '150',
            dropdownWidth: '75%',
            textboxWidth:'75%',

            // watermark for drodown control
            relativeWaterMark: 'select a mode',
            positionWaterMark: 'select a position',
            contentWaterMark: 'select a content',
            effectWaterMark: 'select a effect type',

            // datasource for dropdown control
            modeValue: modeValue,
            positionValue: positionValue,
            contentValue: contentValue,
            effectValue: effectValue,

            //numerictextbox initialization
            duration: '1000',
            min: '1000',
            max: '6000',
            step: '100',

            selectedIndex: 0,
            isStickyChange: (args) => {
                if (args.checked) {
                    diagramInstance.tooltipObject.isSticky = true;
                } else {
                    diagramInstance.tooltipObject.isSticky = false;
                }
                diagramInstance.dataBind();
            },
            //change events
            effectChange: (args) => {
                diagramInstance.tooltip.animation.open.effect = args.value;
                diagramInstance.tooltip.animation.close.effect = args.value;
                diagramInstance.dataBind();
            },
            animationChange: (args) => {
                diagramInstance.tooltip.animation.close.duration = args.value;
                diagramInstance.tooltip.animation.open.duration = args.value;
                diagramInstance.dataBind();
            },
            textChange: (args) => {
                diagramInstance.tooltip.content = args.value.toString();
                diagramInstance.dataBind();
            },
            htmlChange: (args) => {
                let tooltipContent = document.createElement('div');
                let Description = args.value.toString();
                tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;corner-radius:2px;white-space: nowrap;"> <span style="margin: 10px;"> ' + Description + ' </span>';
                diagramInstance.tooltip.content = tooltipContent;
                diagramInstance.dataBind();
            },
            getNodeDefaults: (obj) => {
                obj.offsetX += 0.5;
                obj.offsetY += 0.5;
                obj.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
                obj.style = { strokeWidth:2 };
                return obj;
            },
            relativeModeChange: (args) => {
                if (args.value === 'Mouse') {
                    diagramInstance.tooltip.relativeMode = 'Mouse';
                } else {
                    diagramInstance.tooltip.relativeMode = 'Object';
                }
                diagramInstance.dataBind();
            },
            positionChange: (args) => {
                let nodes = diagramInstance.nodes;
                for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i].tooltip) {
                        nodes[i].tooltip.position = args.value;
                        diagramInstance.dataBind();
                    }
                }
            }
        };
    },

    mounted: function() {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
        diagramInstance.fitToPage({ mode: 'Width' });
    }
}
function getcontent() {
    let tooltipContent = document.createElement('div');
    tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
    return tooltipContent;
}
</script>
