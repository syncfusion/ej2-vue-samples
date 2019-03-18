<template>
<div class="control-section">
  <div id="umlActivityDiagram" style="width: 100%; height: 521px">
    <div class="sb-mobile-palette-bar">
      <div id="palette-icon" role="button"  class="e-ddb-icons1 e-toggle-palette"></div>
    </div>
    <div id="palette-space" class="sb-mobile-palette">
      <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight'
      :symbolWidth='symbolWidth'></ejs-symbolpalette>
    </div>

    <div id="diagram-space" class="sb-mobile-diagram">
      <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dragEnter='dragEnter'
                    :snapSettings='snapSettings' :created='created'></ejs-diagram>
    </div>
  </div>
  <div id="action-description">
      <p>
          This sample represents the message flow from one activity to another in customer service using built-in UML activity shapes.
      </p>
  </div>
  <div id="description">
      <p>
         This example shows how to create activity shapes using diagram <code>UmlActivity</code> shapes. The <code>type</code> property of the <code>shape</code> can be used to create <code>UmlActivity</code> nodes. The <code>shape</code> property of the shape allows you to create UML
        activity shapes.
      </p>
      <br>
  </div>
</div>
</template>
<style>
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

    .container-fluid {
        padding-bottom: 15px;
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

        #palette-icon {
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

    .e-toggle-palette::before {
        content: "\e700"
    }

    .material #umlActivityDiagram #palette-space .e-accordion {
        border: none;
    }

    .material #umlActivityDiagram #palette-space {
        border: 1px solid rgba(0, 0, 0, 0.12);
    }

    .bootstrap #umlActivityDiagram .sb-mobile-diagram {
        height: calc(100% - 17px);
        margin-top: 5px;
        border-radius: 4px;
        border-left: 1px solid rgba(0, 0, 0, 0.12);
    }

    .fabric #umlActivityDiagram .sb-mobile-diagram {
        border-left: 1px solid rgba(0, 0, 0, 0.12);
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  SymbolPalette,
  DiagramContextMenu,
  StrokeStyleModel,
  DecoratorModel,
  PointModel,
  SymbolInfo,
  PortVisibility,
  SnapConstraints,
  PointPortModel,
  DiagramPlugin,
  SymbolPalettePlugin,
  ShapeStyleModel
} from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
let diagram;
let palette;
let isMobile;

//Initializes the nodes for the diagram
let nodes = [
  {
     id: 'Start', height: 40, width: 40, offsetX: 300, offsetY: 20,
        shape: { type: 'UmlActivity', shape: 'InitialNode' }
  },{
        id: 'ReceiveCall', height: 40, width: 105, offsetX: 300, offsetY: 100,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Receive Customer Call' }]
    }, {
        id: 'node2', height: 10, width: 70, offsetX: 300, offsetY: 170,
        shape: { type: 'UmlActivity', shape: 'ForkNode' }
    }, {
        id: 'Determine', height: 40, width: 105, offsetX: 190, offsetY: 250,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Determine Type of Call' }]
    }, {
        id: 'Log', height: 40, width: 105, offsetX: 410, offsetY: 250,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Customer Logging a Call' }]
    }, {
        id: 'node5', height: 50, width: 50, offsetX: 190, offsetY: 350,
        shape: { type: 'UmlActivity', shape: 'Decision' }
    }, {
        id: 'transfer_sales', height: 40, width: 105, offsetX: 100, offsetY: 450,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Transfer the call to Sales' }]
    }, {
        id: 'transfer_desk', height: 40, width: 105, offsetX: 280, offsetY: 450,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Transfer the call to Help Desk' }]
    }, {
        id: 'node8', height: 50, width: 50, offsetX: 190, offsetY: 540,
        shape: { type: 'UmlActivity', shape: 'MergeNode' }
    }, {
        id: 'node9', height: 10, width: 70, offsetX: 300, offsetY: 630,
        shape: { type: 'UmlActivity', shape: 'JoinNode' }
    }, {
        id: 'CloseCall', height: 40, width: 105, offsetX: 300, offsetY: 710,
        shape: { type: 'UmlActivity', shape: 'Action' },
        annotations: [{ content: 'Close Call', margin: { left: 25, right: 25 } }]
    }, {
        id: 'node11', height: 40, width: 40, offsetX: 300, offsetY: 800,
        shape: { type: 'UmlActivity', shape: 'FinalNode' }
    }
];
//Initializes the connector for the diagram
let connectors = [
  { id: "connector1", sourceID: "Start", targetID: "ReceiveCall" },
  { id: "connector2", sourceID: "ReceiveCall", targetID: "node2" },
  {
    id: "connector3",
    sourceID: "node2",
    targetID: "Determine",
    sourcePortID: "port1",
    targetPortID: "portTop",
    segments: [
      { type: "Orthogonal", length: 20, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Left" }
    ]
  },
  {
    id: "connector4",
    sourceID: "node2",
    targetID: "Log",
    sourcePortID: "port2",
    targetPortID: "portTop",
    segments: [
      { type: "Orthogonal", length: 20, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Right" }
    ]
  },
  { id: "connector5", sourceID: "Determine", targetID: "node5" },
  {
    id: "connector6",
    sourceID: "node5",
    targetID: "transfer_sales",
    sourcePortID: "portLeft",
    targetPortID: "portTop",
    shape: { type: "UmlActivity", flow: "Object" },
    annotations: [
      {
        id: "connector6Label",
        content: "type=New Customer",
        offset: 0.715,
        style: { fill: "white", color: "black", textWrapping: "NoWrap" }
      }
    ]
  },
  {
    id: "connector7",
    sourceID: "node5",
    targetID: "transfer_desk",
    sourcePortID: "portRight",
    targetPortID: "portTop",
    shape: { type: "UmlActivity", flow: "Object" },
    annotations: [
      {
        id: "connector7Label",
        content: "type=Existing Customer",
        offset: 0.75,
        style: { fill: "white", color: "black", textWrapping: "NoWrap" }
      }
    ]
  },
  {
    id: "connector8",
    sourceID: "transfer_sales",
    targetID: "node8",
    sourcePortID: "portBottom",
    targetPortID: "portLeft",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  },
  {
    id: "connector9",
    sourceID: "transfer_desk",
    targetID: "node8",
    sourcePortID: "portBottom",
    targetPortID: "portRight",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  },
  {
    id: "connector10",
    sourceID: "node8",
    targetID: "node9",
    sourcePortID: "portBottom",
    targetPortID: "port3"
  },
  {
    id: "connector11",
    sourceID: "Log",
    targetID: "node9",
    sourcePortID: "portBottom",
    targetPortID: "port4",
    segments: [
      { type: "Orthogonal", length: 213, direction: "Bottom" },
      { type: "Orthogonal", length: 50, direction: "Left" }
    ]
  },
  { id: "connector12", sourceID: "node9", targetID: "CloseCall" },
  { id: "connector13", sourceID: "CloseCall", targetID: "node11" }
];

let umlActivityShapes = [
  { id: "Action", shape: { type: "UmlActivity", shape: "Action" } },
  { id: "Decision", shape: { type: "UmlActivity", shape: "Decision" } },
  { id: "MergeNode", shape: { type: "UmlActivity", shape: "MergeNode" } },
  { id: "InitialNode", shape: { type: "UmlActivity", shape: "InitialNode" } },
  { id: "FinalNode", shape: { type: "UmlActivity", shape: "FinalNode" } },
  { id: "ForkNode", shape: { type: "UmlActivity", shape: "ForkNode" } },
  { id: "JoinNode", shape: { type: "UmlActivity", shape: "JoinNode" } },
  { id: "TimeEvent", shape: { type: "UmlActivity", shape: "TimeEvent" } },
  {
    id: "AcceptingEvent",
    shape: { type: "UmlActivity", shape: "AcceptingEvent" }
  },
  { id: "SendSignal", shape: { type: "UmlActivity", shape: "SendSignal" } },
  {
    id: "ReceiveSignal",
    shape: { type: "UmlActivity", shape: "ReceiveSignal" }
  },
  {
    id: "StructuredNode",
    shape: { type: "UmlActivity", shape: "StructuredNode" }
  },
  { id: "Note", shape: { type: "UmlActivity", shape: "Note" } }
];

export default Vue.extend({
  data: function() {
    return {
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
      getNodeDefaults: (obj) => {
        let style = obj.style;
        obj.ports = getNodePorts(obj);
        if (obj.ports) {
          for (var i = 0; i < obj.ports.length; i++) {
            obj.ports[i].visibility = PortVisibility.Hidden;
          }
        }
        if (obj.id === 'Start' || obj.id === 'node2' || obj.id === 'node9' || obj.id === 'node11') {
                style.fill = '#444';
            }
        style.strokeColor = '#444';
        return obj;
      },
      // sets the default values of a Connector.
      getConnectorDefaults: (obj) => {
       if (obj && obj.id && obj.id.indexOf('connector') !== -1) {
          obj.type = 'Orthogonal'; obj.cornerRadius = 10;
          obj.targetDecorator = { shape: 'OpenArrow', style: { strokeColor: '#444', fill: '#444' } };
       }
      },
      expandMode: "Multiple",
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
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      }
    };
  }
});

// create and add ports for node.
function getNodePorts(obj) {
  if (obj.id === "node2" || obj.id === "node9") {
    let node2Ports= [
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

function setPaletteNodeDefaults(symbol) {
  let style = symbol.style;
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
        style.fill = '#444';
    }
    style.strokeColor = '#444';
    return symbol;
}

function getConnectorStyle(dashArrayed) {
  let style = {};
  if (dashArrayed) {
    style = { strokeWidth: 2, strokeColor: "#444", strokeDashArray: "4 4" };
  } else {
    style = { strokeWidth: 2, strokeColor: "#444" };
  }
  return style;
}

// initializes connector symbols to the connector palette in the symbol palette
function getConnectors(){
  let sourcePoint = { x: 0, y: 0 };
  let targetPoint = { x: 40, y: 40 };
  let targetDecorator = {
    shape: "Arrow",
    style: { fill: "#444", strokeColor: "#444" }
  };
  let connectorSymbols = [
    {
      id: "Link2",
      sourcePoint: sourcePoint,
      targetPoint: targetPoint,
      type: "Orthogonal",
      style: getConnectorStyle(true),
      targetDecorator: targetDecorator
    },
    {
      id: "Link1",
      sourcePoint: sourcePoint,
      targetPoint: targetPoint,
      type: "Orthogonal",
      style: getConnectorStyle(),
      targetDecorator: targetDecorator
    },
    {
      id: "Link3",
      sourcePoint: sourcePoint,
      targetPoint: targetPoint,
      type: "Straight",
      style: getConnectorStyle(),
      targetDecorator: targetDecorator
    }
  ];
  return connectorSymbols;
}

function addEvents() {
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    let paletteIcon = document.getElementById(
      "palette-icon"
    );
    if (paletteIcon) {
      paletteIcon.addEventListener("click", openPalette, false);
    }
  }
}

function openPalette() {
  let paletteSpace = document.getElementById(
    "palette-space"
  );
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
      paletteSpace.classList.add("sb-mobile-palette-open");
    } else {
      paletteSpace.classList.remove("sb-mobile-palette-open");
    }
  }
}
</script>