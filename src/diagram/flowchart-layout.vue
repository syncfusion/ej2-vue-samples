<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper" style="width:100%;background: white">
            <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height'
                :rulerSettings='rulerSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool' :getNodeDefaults='getNodeDefaults'
                :getConnectorDefaults='getConnectorDefaults' :scrollSettings='scrollSettings'></ejs-diagram>
        </div>
        </div>
        <div class="flow-property-section">
            <div class="property-panel-header">
                <p>Properties</p>
            </div>
            <div class="row property-panel-content" style="padding-top: 5px;">
                <div class="row">
                    <label>Orientation</label>
                    <div class="input-element">
                        <ejs-dropdownlist id='orientation' :enabled=true :value="'Top to bottom'"
                            :dataSource='orientationData' :change='orientationChange' />
                    </div>
                </div>
                <div class="row">
                    <label>Yes branch direction</label>
                    <div class="input-element">
                        <ejs-dropdownlist id='yesBranchDirection' :enabled=true :value="'Left in flow'"
                            :dataSource='branchData' :change='yesBranchDirectionChange' />
                    </div>
                </div>
                <div class="row">
                    <label>No branch direction</label>
                    <div class="input-element">
                        <ejs-dropdownlist id='noBranchDirection' :enabled=true :value="'Right in flow'"
                            :dataSource='branchData' :change='noBranchDirectionChange' />
                    </div>
                </div>
                <div class="row">
                    <label>Horizontal spacing</label>
                    <div class="input-element">
                        <ejs-numerictextbox ref="horizontalSpacingObj" id="horizontalSpacing" :min="20" :max="120"
                            :format="'n'" :step="1" :value="50" style="width: 100%;" :change='horizontalSpacingChange' />
                    </div>
                </div>
                <div class="row">
                    <label>Vertical spacing</label>
                    <div class="input-element">
                        <ejs-numerictextbox ref="verticalSpacingObj" id="verticalSpacing" :min="30" :max="120"
                            :format="'n'" :step="1" :value="50" style="width: 100%;" :change='verticalSpacingChange' />
                    </div>
                </div>
            </div>

        </div>
        <div id="action-description">
            <p>
                This sample illustrates the flowchart layout algorithm that is used to automatically arrange the flow
                shapes.
            </p>
        </div>
        <div id="description">
            <p>
                This sample illustrates the flowchart layout algorithm that is used to automatically arrange the flow
                shapes.
            </p>
            <p>
                This example shows how to generate a flowchart layout from an external data source. The spacing between
                the objects
                can also be customized in the chart. The
                <code>horizontalSpacing</code> and
                <code>verticalSpacing</code> properties of
                <code>layout</code> can be used to customize the space between objects in a tree. The
                <code>orientation</code> property of
                <code>layout</code> can be used to change the orientation of the chart. The
                <code>flowchartLayoutSettings</code> property of
                <code>layout</code> can be used to configure the flow chart layout settings. The
                <code>yesBranchDirection</code> and <code>noBranchDirection</code> properties of the flowchartLayoutSettings
                is used to define the flow direction of the yes and no branch connectors.
            </p>

            <p style="font-weight: 500">Injecting Module</p>
            <p>
                The diagram component’s features are segregated into individual feature-wise modules. To generate
                diagrams from
                an external
                data source, inject
                <code>DataBinding</code> module using
                <code>Diagram.Inject(DataBinding)</code> method. To automatically arrange the objects in a flowchart
                layout
                format, inject
                <code>FlowchartLayout</code> module using
                <code>Diagram.Inject(FlowchartLayout)</code> method.
            </p>
            <br>
        </div>
    </div>
</template>
<style scoped>
/* Container for diagram and property panel */
.control-section {
    width: 75%;
    float: left;
    border-right: 1px solid #D5D5D5;
    /* Keep the diagram section on the left */
}

.property-panel-header {
    font-size: larger;
}

.input-element {
        margin-left: 10px;
        width: 50%;
}

/* Diagram content style */
.content-wrapper {
    width: 100%;
    background: white;
    border: 1px solid #D5D5D5;
}

/* Property panel style */
.flow-property-section {
    width: 24%;
    /* Adjusted to fill the remaining space */
    float: right;
    /* Ensure the property panel is on the right */
    padding: 10px;
    background: white;
}

/* Align labels and inputs within the property panel */
.row {
    margin-left: 0;
    margin-right: 0;
    padding-top: 8px;
}

.property-panel-content .row {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.property-panel-content label {
    flex: 1;
    font-weight: normal;
}

.property-panel-content input {
    flex: 2;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
<script>
import {
    DiagramComponent,
    FlowchartLayout,
    DataBinding,DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import {DataManager } from '@syncfusion/ej2-data';
import {
  NumericTextBoxComponent,
} from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
const orientationData = [
    { text: 'Top to bottom', value: 'TopToBottom' }, { text: 'Left to right', value: 'LeftToRight' }
];

const branchData = [
    { text: 'Left in flow', value: 'LeftInFlow' }, { text: 'Right in flow', value: 'RightInFlow' }, { text: 'Same as flow', value: 'SameAsFlow' }
];

  //Initializes the data source for the layout
  const flowchartData = [
        { id: "A", name: "Start", shape: "Terminator", color: "#90EE90", parentId: null, stroke: "#333", strokeWidth: 1 },
        { id: "B", name: "Open the browser and go to Amazon site", shape: "Rectangle", color: "#1759B7", parentId: ["A"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "C", name: "Already a customer?", shape: "Decision", color: "#2F95D8", parentId: ["B"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "D", name: "Create an account", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "E", name: "Enter login information", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "F", name: "Search for the book in the search bar", shape: "Predefined Process", color: "#1759B7", parentId: ["E", "D"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "G", name: "Select the preferred book", shape: "Rectangle", color: "#1759B7", parentId: ["F"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "H", name: "Is the book new or used?", shape: "Rectangle", color: "#2F95D8", parentId: ["G"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "I", name: "Select the new book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "J", name: "Select the used book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "K", name: "Add to Cart & Proceed to Checkout", shape: "Rectangle", color: "#1759B7", parentId: ["I", "J"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "L", name: "Enter shipping and payment details", shape: "Rectangle", color: "#1759B7", parentId: ["K", "M"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "M", name: "Is the information correct?", shape: "Decision", color: "#2F95D8", parentId: ["L"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "N", name: "Review and place the order", shape: "Rectangle", color: "#1759B7", parentId: ["M"], label: ["True"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "O", name: "End", shape: "Terminator", color: "#8E44CC", parentId: ["N"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 }
    ];
let diagramInstance;

export default {
    components: {
        'ejs-diagram': DiagramComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-numerictextbox': NumericTextBoxComponent,
    },
    data: function () {
        return {
            width: "100%",
            height: "750px",
            tool:DiagramTools.ZoomPan,
            branchData:branchData,
            orientationData:orientationData,
            //Setting default nodes values
            getNodeDefaults: (node) => {
                node.width = 150;
                node.height = 50;
                if ((node.shape).shape === 'Decision') {
                    node.width = 120;
                    node.height = 100;
                }
                return node;
            },
            //Setting default connector values
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                if(connector.annotations && connector.annotations.length > 0) {
                    connector.annotations[0].style.fill = 'white';
                    connector.annotations[0].style.color = 'black';
                }
                return connector;
            },
            rulerSettings: {
                showRulers: true
            },
            scrollSettings: {
                scrollLimit: 'Infinity'
            },
            layout: {
                type: 'Flowchart',
                orientation: 'TopToBottom',
                flowchartLayoutSettings: {
                    yesBranchDirection: 'LeftInFlow',
                    noBranchDirection: 'RightInFlow'
                },
                horizontalSpacing: 50,
                verticalSpacing: 50
            },
            dataSourceSettings:{
                id:'id',
                parentId:'parentId',
                dataSource: new DataManager(flowchartData),
            },
        orientationChange: function (args) {
        let value = args.value;
        diagramInstance.layout.orientation = value === 'Top to bottom' ? 'TopToBottom' : 'LeftToRight';
        diagramInstance.dataBind();
        },
        yesBranchDirectionChange: (args) =>{
            let value = args.value;
            diagramInstance.layout.flowchartLayoutSettings.yesBranchDirection = value === 'Same as flow' ? 'SameAsFlow' : value === 'Right in flow' ? 'RightInFlow' : 'LeftInFlow';
            diagramInstance.doLayout();
        },
        noBranchDirectionChange: (args) => {
            let value = args.value;
            diagramInstance.layout.flowchartLayoutSettings.noBranchDirection = value === 'Same as flow' ? 'SameAsFlow' : value === 'Right in flow' ? 'RightInFlow' : 'LeftInFlow';
            diagramInstance.doLayout();

        },
        horizontalSpacingChange: function (args) {
            let value = args.value;
            diagramInstance.layout.horizontalSpacing = value;
            diagramInstance.dataBind();
        },
        verticalSpacingChange: function (args) {
            let value = args.value;
            diagramInstance.layout.verticalSpacing = value;
            diagramInstance.dataBind();
        }

        }
    },
    provide: {
    diagram: [DataBinding, FlowchartLayout]
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
}

</script>