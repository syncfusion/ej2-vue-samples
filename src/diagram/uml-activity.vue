<!-- Sample for UML Activity -->

<!-- Template for UML Activity -->
<template>
  <div class="control-section">
    <!-- Container for UML Activity Diagram -->
    <div id="umlActivityDiagram" style="width: 100%; height: 521px">

      <!-- Palette Bar for mobile view -->
      <div class="sb-mobile-palette-bar">
        <div id="palette-icon" ref="palette_icon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
      </div>

      <!-- Symbol Palette Component -->
      <div id="palette-space" ref="palette_space" class="sb-mobile-palette">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth'
          :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo'
          :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
      </div>

      <!-- Diagram Component -->
      <div id="diagram-space" ref="diagram_space" class="sb-mobile-diagram">
        <ejs-diagram style='display:block' id="diagram" ref="diagramObject" :width='width' :height='height' :nodes='nodes'
          :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
          :snapSettings='snapSettings' :created='created'></ejs-diagram>
      </div>
    </div>

    <!-- Descriptions for the Action and the Diagram -->
    <div id="action-description">
      <p>
        This sample represents the message flow from one activity to another in customer service using built-in UML activity shapes.
      </p>
    </div>
    <div id="description">
      <p>
         This example shows how to create activity shapes using diagram <code>UmlActivity</code> shapes. The
        <code>type</code> property of the <code>shape</code> can be used to create <code>UmlActivity</code> nodes. The
        <code>shape</code> property of the shape allows you to create UML
        activity shapes.
      </p>
      <br>
    </div>
  </div>
</template>

<!-- Scoped CSS for the template -->
<style scoped>
/**To align palette */
#umlActivityDiagram .sb-mobile-palette {
  width: 210px;
  height: 100%;
  float: left;
}

#umlActivityDiagram .sb-mobile-palette-bar {
  display: none;
}

#umlActivityDiagram .sb-mobile-diagram {
  width: calc(100% - 212px);
  height: 100%;
  float: left;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-left: none;
}

@media (max-width: 550px) {

  #umlActivityDiagram .sb-mobile-palette {
    z-index: 19;
    position: absolute;
    display: none;
    transition: transform 300ms linear, visibility 0s linear 300ms;
    width: 39%;
    height: 100%;
  }

  #umlActivityDiagram .sb-mobile-palette-bar {
    display: block;
    width: 100%;
    background: #fafafa;
    padding: 10px 10px;
    border: 0.5px solid #e0e0e0;
    min-height: 40px;
  }

  #umlActivityDiagram .sb-mobile-diagram {
    width: 100%;
    height: 100%;
    float: left;
    left: 0px;
  }

  #umlActivityDiagram #palette-icon {
    font-size: 20px;
  }
}

#umlActivityDiagram .sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}

@font-face {
  font-family: 'e-ddb-icons1';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmdC1P4gAAAcgAAAAwaGVhZBJhohMAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAYAAAAAAHAAAAABm1heHABDgAUAAABCAAAACBuYW1lm+wy9gAAAfgAAAK1cG9zdLnsYngAAASwAAAAMAABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAgNcenF8PPPUACwQAAAAAANelrs4AAAAA16WuzgAAAAAD+AN6AAAACAACAAAAAAAAAAEAAAACAAgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAGAAAAAIAAAAAA/gDegACAAcAACUhCQEhATUhAQQC9P6G/YoBMQFF/YqGAjf+hgH0QwAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEAEwABAAEAAAAAAAIABwAUAAEAAAAAAAMAEwAbAAEAAAAAAAQAEwAuAAEAAAAAAAUACwBBAAEAAAAAAAYAEwBMAAEAAAAAAAoALABfAAEAAAAAAAsAEgCLAAMAAQQJAAAAAgCdAAMAAQQJAAEAJgCfAAMAAQQJAAIADgDFAAMAAQQJAAMAJgDTAAMAAQQJAAQAJgD5AAMAAQQJAAUAFgEfAAMAAQQJAAYAJgE1AAMAAQQJAAoAWAFbAAMAAQQJAAsAJAGzIERpYWdyYW1fU2hhcGVzX0ZPTlRSZWd1bGFyRGlhZ3JhbV9TaGFwZXNfRk9OVERpYWdyYW1fU2hhcGVzX0ZPTlRWZXJzaW9uIDEuMERpYWdyYW1fU2hhcGVzX0ZPTlRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AUwBoAGEAcABlAHMAXwBGAE8ATgBUAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAVgBlAHIAcwBpAG8AbgAgADEALgAwAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMABlNoYXBlcwAA) format('truetype');
  font-weight: normal;
  font-style: normal;
}

.e-ddb-icons1 {
  font-family: 'e-ddb-icons1';
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.e-toggle-palette::before {
  content: "\e700"
}
</style>

<script>

//Importing needed dependencies for diagram
import {
  Diagram,
  PortVisibility,
  SnapConstraints,
  DiagramComponent,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-vue-diagrams";

let diagram;
let palette;
let isMobile;
let paletteSpaceInstance;
let paletteIconInstance;
let diagramInstance;
let diagramSpaceInstance;



// Function to create a node with default settings
function getDefaultNode(id, height, width, offsetX, offsetY, type, shapeType, annotations = []) {
  return {
    id: id,
    height: height,
    width: width,
    offsetX: offsetX,
    offsetY: offsetY,
    shape: { type: type, shape: shapeType },
    annotations
  }
};

//Initializes the nodes for the diagram.
let nodes = [
  getDefaultNode("Start", 40, 40, 300, 20, "UmlActivity", "InitialNode", []),
  getDefaultNode("ReceiveCall", 40, 105, 300, 100, "UmlActivity", "Action", [{ content: "Receive Customer Call" }]),
  getDefaultNode("ForkNode", 10, 70, 300, 170, "UmlActivity", "ForkNode"),
  getDefaultNode("Determine", 40, 105, 190, 250, "UmlActivity", "Action", [{ content: "Determine Type of Call" }]),
  getDefaultNode("Log", 40, 105, 410, 250, "UmlActivity", "Action", [{ content: "Customer Logging a Call" }]),
  getDefaultNode("Decision", 50, 50, 190, 350, "UmlActivity", "Decision"),
  getDefaultNode("transfer_sales", 40, 105, 100, 450, "UmlActivity", "Action", [{ content: "Transfer the Call to Sales" }]),
  getDefaultNode("transfer_desk", 40, 105, 280, 450, "UmlActivity", "Action", [{ content: "Transfer the Call to Help Desk" }]),
  getDefaultNode("MergeNode", 50, 50, 190, 540, "UmlActivity", "MergeNode"),
  getDefaultNode("JoinNode", 10, 70, 300, 630, "UmlActivity", "JoinNode"),
  getDefaultNode("CloseCall", 40, 105, 300, 710, "UmlActivity", "Action", [{ content: "Close Call", margin: { left: 25, right: 25 } }]),
  getDefaultNode("FinalNode", 40, 40, 300, 800, "UmlActivity", "FinalNode")
];

// Function to create a Connector with default settings
function getDefaultConnector(id, sourceID, targetID, additionalProps = {}) {
  return {
    id: id,
    sourceID: sourceID,
    targetID: targetID,
    ...additionalProps
  }
};

//Initializes the connector for the diagram.
let connectors = [
  getDefaultConnector("connector1", "Start", "ReceiveCall"),
  getDefaultConnector("connector2", "ReceiveCall", "ForkNode"),
  getDefaultConnector("connector3", "ForkNode", "Determine", {
    sourcePortID: "port1",
    targetPortID: "portTop",
    segments: [
      { type: "Orthogonal", length: 20, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Left" }
    ]
  }),
  getDefaultConnector("connector4", "ForkNode", "Log", {
    sourcePortID: "port2",
    targetPortID: "portTop",
    segments: [
      { type: "Orthogonal", length: 20, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Right" }
    ]
  }),
  getDefaultConnector("connector5", "Determine", "Decision"),
  getDefaultConnector("connector6", "Decision", "transfer_sales", {
    sourcePortID: "portLeft",
    targetPortID: "portTop",
    shape: { type: "UmlActivity", flow: "Association" },
    annotations: [{
      id: "connector6Label", content: "type=New Customer", offset: 0.715,
      style: { fill: "white", color: "black", textWrapping: 'NoWrap' }
    }]
  }),
  getDefaultConnector("connector7", "Decision", "transfer_desk", {
    sourcePortID: "portRight",
    targetPortID: "portTop",
    shape: { type: "UmlActivity", flow: "Association" },
    annotations: [{
      id: "connector7Label", content: "type=Existing Customer", offset: 0.75,
      style: { fill: "white", color: "black", textWrapping: 'NoWrap' }
    }]
  }),
  getDefaultConnector("connector8", "transfer_sales", "MergeNode", {
    sourcePortID: "portBottom",
    targetPortID: "portLeft",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  }),
  getDefaultConnector("connector9", "transfer_desk", "MergeNode", {
    sourcePortID: "portBottom",
    targetPortID: "portRight",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  }),
  getDefaultConnector("connector10", "MergeNode", "JoinNode", {
    sourcePortID: "portBottom",
    targetPortID: "port3"
  }),
  getDefaultConnector("connector11", "Log", "JoinNode", {
    sourcePortID: "portBottom",
    targetPortID: "port4",
    segments: [
      { type: "Orthogonal", length: 265, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Left" }
    ]
  }),
  getDefaultConnector("connector12", "JoinNode", "CloseCall"),
  getDefaultConnector("connector13", "CloseCall", "FinalNode")
];

// Initializes the uml activity symbols to the UML Shapes in the symbol palette
let umlActivityShapes = [
  { id: "Action", shape: { type: "UmlActivity", shape: "Action" } },
  { id: "Decision", shape: { type: "UmlActivity", shape: "Decision" } },
  { id: "MergeNode", shape: { type: "UmlActivity", shape: "MergeNode" } },
  { id: "InitialNode", shape: { type: "UmlActivity", shape: "InitialNode" } },
  { id: "FinalNode", shape: { type: "UmlActivity", shape: "FinalNode" } },
  { id: "ForkNode", shape: { type: "UmlActivity", shape: "ForkNode" } },
  { id: "JoinNode", shape: { type: "UmlActivity", shape: "JoinNode" } },
  { id: "TimeEvent", shape: { type: "UmlActivity", shape: "TimeEvent" } },
  { id: "AcceptingEvent", shape: { type: "UmlActivity", shape: "AcceptingEvent" } },
  { id: "SendSignal", shape: { type: "UmlActivity", shape: "SendSignal" } },
  { id: "ReceiveSignal", shape: { type: "UmlActivity", shape: "ReceiveSignal" } },
  { id: "StructuredNode", shape: { type: "UmlActivity", shape: "StructuredNode" } },
  { id: "Note", shape: { type: "UmlActivity", shape: "Note" } }
];

// Exporting the default object for Vue component
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data: function () {
    return {
      //Initializes diagram control
      width: "100%",
      height: "100%",
      nodes: nodes,
      connectors: connectors,
      snapSettings: {
        constraints: SnapConstraints.None
      },
      created: (args) => {
        addEvents();
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        let style = node.style;
        node.ports = getNodePorts(node);
        if (node.ports) {
          for (var i = 0; i < node.ports.length; i++) {
            node.ports[i].visibility = PortVisibility.Hidden;
          }
        }
        if (node.id === 'Start' || node.id === 'ForkNode' || node.id === 'JoinNode' || node.id === 'FinalNode') {
          style.fill = '#444';
        }
        style.strokeColor = '#444';
        return node;
      },
      // sets the default values of a Connector.
      getConnectorDefaults: (connector) => {
        if (connector && connector.id && connector.id.indexOf('connector') !== -1) {
          connector.type = 'Orthogonal'; connector.cornerRadius = 10;
          connector.targetDecorator = { shape: 'OpenArrow', style: { strokeColor: '#444', fill: '#444' } };
        }
      },
      expandMode: "Multiple",

      //Initialize a default shape in symbol palettes
      palettes: [
        {
          id: "umlActivity",
          expanded: true,
          symbols: umlActivityShapes,
          title: "UML Shapes"
        },
        {
          id: "Connector",
          expanded: true,
          symbols: getConnectors(),
          title: "Connectors"
        }
      ],
      palettewidth: "100%",
      paletteheight: "100%",
      symbolHeight: 60,
      symbolWidth: 60,
      palettegetNodeDefaults: (symbol) => {
        if (symbol.id === 'JoinNode') {
          symbol.width = 20; symbol.height = 50;
        } else if (symbol.id === 'ForkNode') {
          symbol.width = 50; symbol.height = 20;
        } else if (symbol.id === 'Decision' || symbol.id === 'MergeNode') {
          symbol.width = 50; symbol.height = 40;
        } else {
          symbol.width = 50; symbol.height = 50;
        }
        if (symbol.id === 'InitialNode' || symbol.id === 'FinalNode' || symbol.id === 'JoinNode' || symbol.id === 'ForkNode') {
          symbol.style.fill = '#757575';
        }
        symbol.style.strokeColor = '#757575';
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      }
    };
  },
  mounted: function () {
    paletteIconInstance = this.$refs.palette_icon;
    paletteSpaceInstance = this.$refs.palette_space;
    diagramSpaceInstance = this.$refs.diagram_space;
    diagramInstance = this.$refs.diagramObject.ej2Instances;
    let rect = diagramSpaceInstance.getBoundingClientRect();
    let panX = (rect.width - rect.x) / 2;
    diagramInstance.pan(panX, 0);
  }
}

// Function to define ports for a node based on its ID
function getNodePorts(node) {
  if (node.id === "ForkNode" || node.id === "JoinNode") {
    let node2Ports = [
      { id: "port1", offset: { x: 0.2, y: 1 } },
      { id: "port2", offset: { x: 0.8, y: 1 } },
      { id: "port3", offset: { x: 0.2, y: 0 } },
      { id: "port4", offset: { x: 0.8, y: 0 } }
    ];
    return node2Ports;
  } else {
    let ports = [
      { id: "portLeft", offset: { x: 0, y: 0.5 } },
      { id: "portRight", offset: { x: 1, y: 0.5 } },
      { id: "portBottom", offset: { x: 0.5, y: 1 } },
      { id: "portTop", offset: { x: 0.5, y: 0 } }
    ];
    return ports;
  }
}


// Function to generate connector style for the symbol palette
function getConnectorStyle(dashArrayed) {
  let style = {};
  if (dashArrayed) {
    style = { strokeWidth: 2, strokeColor: "#757575", strokeDashArray: "4 4" };
  } else {
    style = { strokeWidth: 2, strokeColor: "#757575" };
  }
  return style;
}

// Function to generate connector symbols for the symbol palette
function getConnectors() {
  let sourcePoint = { x: 0, y: 0 };
  let targetPoint = { x: 40, y: 40 };
  let targetDecorator = {
    shape: "Arrow",
    style: { fill: "#757575", strokeColor: "#757575" }
  };

  // Define connector symbols with different styles and types
  let connectorSymbols = [
    {
      id: "Link2", sourcePoint: sourcePoint, targetPoint: targetPoint,
      type: "Orthogonal", style: getConnectorStyle(true), targetDecorator: targetDecorator
    },
    {
      id: "Link1", sourcePoint: sourcePoint, targetPoint: targetPoint,
      type: "Orthogonal", style: getConnectorStyle(), targetDecorator: targetDecorator
    },
    {
      id: "Link3", sourcePoint: sourcePoint, targetPoint: targetPoint,
      type: "Straight", style: getConnectorStyle(), targetDecorator: targetDecorator
    }
  ];
  return connectorSymbols;
}

// Function to add mobile events
function addEvents() {
  isMobile = window.matchMedia("(max-width:550px)").matches;
  // Check if device is mobile
  if (isMobile) {
    if (paletteIconInstance) {
      paletteIconInstance.addEventListener("click", openPalette, false);
    }
  }
}

// Function to open/close palette
function openPalette() {
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpaceInstance.classList.contains("sb-mobile-palette-open")) {
      // Open palette
      paletteSpaceInstance.classList.add("sb-mobile-palette-open");
    } else {
      // Close palette
      paletteSpaceInstance.classList.remove("sb-mobile-palette-open");
    }
  }
}
</script>