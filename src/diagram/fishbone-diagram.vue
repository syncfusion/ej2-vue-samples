<!-- Sample for Fishbone -->

<!-- Template for Fishbone -->
<template>
    <!-- Diagram Component -->
    <div class="control-section">
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :mode='mode' :width='width' :tool='tool'
            :height='height' :connectors='connectors' :nodes='nodes' :snapSettings='snapSettings'
            :getConnectorDefaults='getConnectorDefaults'>
        </ejs-diagram>
        
        <!-- Descriptions for the Action and the Diagram -->
        <div id="action-description">
            <p>
                This sample visually represents a simple fishbone diagram (Ishikawa). Diagram nodes and annotations are
                used to define fishbone diagrams. Read-only mode is enabled here.
            </p>
        </div>
        <div id="description">
            <p>
                This sample shows how to create a fishbone diagram (Ishikawa) using diagram control. Here, zoom and pan
                options are enabled. The tool property of the diagram control allows you to enable or disable zoom and
                pan options.
            </p>
            <br>
        </div>
    </div>
</template>

<style scoped>
.control-section {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
}
</style>

<script>
//Importing needed dependencies for diagram
import {
    DiagramComponent,
    UndoRedo,
    DataBinding,
    DiagramTools,
    SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";

let diagramInstance;

// Function to create a node
function createNode(id, height, width, offsetX, offsetY, content) {
    return {
        id,
        height,
        width,
        offsetX,
        offsetY,
        annotations: [{ content: content, style: { color: 'white' } }],
        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' },
        style: { fill: '#39AFA9', strokeColor: 'black' }
    }
};

// Function to create an ellipse
function createEllipseNode(id, height, width, offsetX, offsetY, content = "", fill = "white", strokeColor = '#A52A2A') {
    return {
        id,
        width,
        height,
        offsetX,
        offsetY,
        annotations: [{ content: content, style: { color: 'white' } }],
        shape: { type: 'Basic', shape: 'Ellipse' },
        style: { fill: fill, strokeColor: strokeColor }
    }
};

// Function to create an Text Node
function createTextNode(id, height, width, offsetX, offsetY, content) {
    return {
        id: id,
        height: height,
        width: width,
        offsetX: offsetX,
        offsetY: offsetY,
        style: { fill: 'transparent', strokeWidth: 0 },
        shape: { type: 'Text', content: content }
    }
};

//Initializes the nodes for the diagram.
let nodes = [
    createNode('Equipment', 40, 120, 300, 80, 'Equipment'),
    createNode('Environment', 40, 120, 450, 80, 'Environment'),
    createNode('Person', 40, 120, 600, 80, 'Person'),
    createNode('Materials', 40, 120, 300, 600, 'Materials'),
    createNode('Machine', 40, 120, 450, 600, 'Machine'),
    createNode('Methods', 40, 120, 600, 600, 'Methods'),
    createEllipseNode('ellipse1', 20, 20, 290, 130),
    createEllipseNode('ellipse2', 20, 20, 323, 183),
    createEllipseNode('ellipse3', 20, 20, 354, 237),
    createEllipseNode('ellipse4', 20, 20, 440, 130),
    createEllipseNode('ellipse5', 20, 20, 470, 182),
    createEllipseNode('ellipse6', 20, 20, 590, 130),
    createEllipseNode('ellipse7', 20, 20, 622, 179),
    createEllipseNode('ellipse8', 20, 20, 660, 221),
    createEllipseNode('ellipse9', 20, 20, 694, 264),
    createEllipseNode('ellipse10', 20, 20, 354, 460),
    createEllipseNode('ellipse11', 20, 20, 590, 530),
    createEllipseNode('ellipse12', 20, 20, 660, 460),
    createEllipseNode('ellipse13', 20, 20, 440, 530),
    createEllipseNode('ellipse14', 20, 20, 510, 460),
    createEllipseNode('ellipse15', 20, 20, 290, 530),
    createEllipseNode('Colorellipse1', 50, 50, 717, 310),
    createEllipseNode('Colorellipse2', 50, 50, 560, 310),
    createEllipseNode('Colorellipse3', 50, 50, 390, 310),
    createEllipseNode('Colorellipse4', 50, 50, 220, 310),
    createEllipseNode('Colorellipse5', 90, 140, 900, 310, 'Productivity Increase', "#39AFA9", 'black'),
    createTextNode('TextPrograms', 20, 90, 189, 130, 'Text Programs'),
    createTextNode('VentilatorsSound', 20, 120, 359, 130, 'Ventilators Sound'),
    createTextNode('Education', 20, 70, 500, 130, 'Education'),
    createTextNode('DataBooks', 20, 70, 213, 183, 'DataBooks'),
    createTextNode('Fixtures', 20, 70, 240, 237, 'Fixtures'),
    createTextNode('Noise', 20, 70, 390, 182, 'Noise'),
    createTextNode('Motivation', 20, 70, 535, 182, 'Motivation'),
    createTextNode('Tiredness', 20, 70, 565, 224, 'Tiredness'),
    createTextNode('Storer', 20, 70, 606, 264, 'Storer'),
    createTextNode('Computer', 20, 70, 260, 460, 'Computer'),
    createTextNode('Quality', 20, 120, 417, 460, 'Quality of Element'),
    createTextNode('Order', 20, 70, 562, 460, 'Order'),
    createTextNode('Software', 20, 70, 225, 530, 'Software'),
    createTextNode('Procurement', 20, 70, 358, 530, 'Procurement'),
    createTextNode('Standardization', 20, 90, 501, 530, 'Standardization')
];


// Function to create a connector model.
function createConnector(id, lineDashArray, source, target, strokeColor) {
    return {
        id: id,
        sourceID: source,
        targetID: target,
        style: {
            strokeColor: strokeColor,
            strokeWidth: 2,
            strokeDashArray: lineDashArray
        }
    }
};

//Initializes the Connectors for the diagram
let connectors = [
    createConnector('connector01', '5,5', 'Equipment', 'ellipse1', '#A52A2A'),
    createConnector('connector02', '5,5', 'ellipse1', 'ellipse2', '#A52A2A'),
    createConnector('connector03', '5,5', 'ellipse2', 'ellipse3', '#A52A2A'),
    createConnector('connector04', '5,5', 'ellipse3', 'Colorellipse3', '#A52A2A'),
    createConnector('connector05', '5,5', 'Environment', 'ellipse4', '#A52A2A'),
    createConnector('connector06', '5,5', 'ellipse4', 'ellipse5', '#A52A2A'),
    createConnector('connector07', '5,5', 'ellipse4', 'ellipse5', '#A52A2A'),
    createConnector('connector08', '5,5', 'ellipse5', 'Colorellipse2', '#A52A2A'),
    createConnector('connector09', '5,5', 'Person', 'ellipse6', '#A52A2A'),
    createConnector('connector10', '5,5', 'ellipse6', 'ellipse7', '#A52A2A'),
    createConnector('connector11', '5,5', 'ellipse7', 'ellipse8', '#A52A2A'),
    createConnector('connector12', '5,5', 'ellipse8', 'ellipse9', '#A52A2A'),
    createConnector('connector13', '5,5', 'ellipse9', 'Colorellipse1', '#A52A2A'),
    createConnector('connector14', '5,5', 'Materials', 'ellipse15', '#A52A2A'),
    createConnector('connector15', '5,5', 'ellipse15', 'ellipse10', '#A52A2A'),
    createConnector('connector16', '5,5', 'ellipse10', 'Colorellipse3', '#A52A2A'),
    createConnector('connector17', '5,5', 'Machine', 'ellipse13', '#A52A2A'),
    createConnector('connector18', '5,5', 'ellipse13', 'ellipse14', '#A52A2A'),
    createConnector('connector19', '5,5', 'ellipse14', 'Colorellipse2', '#A52A2A'),
    createConnector('connector20', '5,5', 'Methods', 'ellipse11', '#A52A2A'),
    createConnector('connector21', '5,5', 'ellipse11', 'ellipse12', '#A52A2A'),
    createConnector('connector22', '5,5', 'ellipse12', 'Colorellipse1', '#A52A2A'),
    createConnector('connector23', '', 'Colorellipse4', 'Colorellipse3', '#000000'),
    createConnector('connector24', '', 'Colorellipse3', 'Colorellipse2', '#000000'),
    createConnector('connector25', '', 'Colorellipse2', 'Colorellipse1', '#000000'),
    createConnector('connector26', '', 'Colorellipse1', 'Colorellipse5', '#000000'),
    createConnector('connector27', '5,5', 'TextPrograms', 'ellipse1', '#A52A2A'),
    createConnector('connector28', '5,5', 'DataBooks', 'ellipse2', '#A52A2A'),
    createConnector('connector29', '5,5', 'Fixtures', 'ellipse3', '#A52A2A'),
    createConnector('connector30', '5,5', 'VentilatorsSound', 'ellipse4', '#A52A2A'),
    createConnector('connector31', '5,5', 'Noise', 'ellipse5', '#A52A2A'),
    createConnector('connector32', '5,5', 'Education', 'ellipse6', '#A52A2A'),
    createConnector('connector33', '5,5', 'Motivation', 'ellipse7', '#A52A2A'),
    createConnector('connector34', '5,5', 'Tiredness', 'ellipse8', '#A52A2A'),
    createConnector('connector35', '5,5', 'Storer', 'ellipse9', '#A52A2A'),
    createConnector('connector36', '5,5', 'Software', 'ellipse15', '#A52A2A'),
    createConnector('connector37', '5,5', 'Computer', 'ellipse10', '#A52A2A'),
    createConnector('connector38', '5,5', 'Procurement', 'ellipse13', '#A52A2A'),
    createConnector('connector39', '5,5', 'Quality', 'ellipse14', '#A52A2A'),
    createConnector('connector40', '5,5', 'Order', 'ellipse12', '#A52A2A'),
    createConnector('connector41', '5,5', 'Standardization', 'ellipse11', '#A52A2A')
];

// Exporting the default object for Vue component
export default {
    components: {
        'ejs-diagram': DiagramComponent
    },
    data: function () {
        return {
            //Initializes diagram control
            width: "100%",
            height: "700px",
            mode: "SVG",
            nodes: nodes,
            connectors: connectors,
            tool: DiagramTools.ZoomPan,
            snapSettings: { constraints: SnapConstraints.None },
            getConnectorDefaults: getConnectorDefaults
        };
    },
    provide: {
        diagram: [UndoRedo, DataBinding]
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObject.ej2Instances;
        diagramInstance.fitToPage("Width");
    }
}

//function to Sets the default values of a connector
function getConnectorDefaults(connector) {
    connector.targetDecorator = { shape: 'Arrow', width: 5, height: 5 };
    if (connector.id !== 'connector23' && connector.id !== 'connector24' &&
        connector.id !== 'connector25' && connector.id !== 'connector26') {
        connector.targetDecorator.style = { strokeColor: '#A52A2A', fill: '#A52A2A' };
    }
}
</script>
