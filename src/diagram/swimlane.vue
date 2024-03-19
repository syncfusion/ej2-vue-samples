<template>
  <div class="control-section">
    <link href="https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css" rel="stylesheet">
    <div id="swimlaneDiagram" style="width: 100%;">
      <div class="sb-mobile-palette-bar">
        <div id="palette-icon" style="float: right;" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
      </div>
      <div id="palette-space" class="sb-mobile-palette">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
      </div>
      <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'  :snapSettings='snapSettings' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample visualize the sales processing flow chart with the help of built-in swimlane shapes.
      </p>
    </div>
    <div id="description">
      <p>
        This sample shows how an sales process works with each entity involved in the process assigned a lane that contains all the activities for which they are responsible. The <code>type</code> property of the <code>shape</code> allows us to choose the swimlane shape type. Using the <code>children</code> property of the lane, we can add the nodes inside the lanes. We can also create the swimlane interactively using the swimlane shapes from the symbol palette.
      </p>
    </div>
  </div>
</template>
    <style scoped>
        .e-toggle-palette::before {
            content: "\e700"
        }

    /* These styles are used for aligning palette and diagram */
        .sb-mobile-palette {
            width: 195px;
            height: 559px;
            float: left;
        }

        .sb-mobile-palette-bar {
            display: none;
        }

        .sb-mobile-diagram {
            width: calc(100% - 197px);
            height: 559px;
            float: left;
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-left: none;
        }

        @media (max-width: 550px) {
            .sb-mobile-palette {
                z-index: 19;
                position: absolute;
                display: none;
                transition: transform 300ms linear, visibility 0s linear 300ms;
                width: 39%;
                height: 100%;
            }
            .sb-mobile-diagram {
                width: 100%;
                height: 100%;
                float: left;
                left: 0px;
            }
            .sb-mobile-palette-bar {
                display: block;
                width: 100%;
                background: #fafafa;
                padding: 10px 10px;
                border: 0.5px solid #e0e0e0;
                min-height: 40px;
            }
            #palette-icon {
                font-size: 20px;
            }
        }
    </style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  DiagramComponent,
  SymbolPaletteComponent,
  SnapConstraints,
  Node,
  PortVisibility,
  PortConstraints,
  SelectorConstraints
} from "@syncfusion/ej2-vue-diagrams";

let isMobile;

let middle;
let darkColor = '#C7D4DF';
let lightColor = '#f5f5f5';
let pathData = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
  ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
  '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';
let port = [
    { id:'Port1', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port2',offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port3',offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port4',offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw }
]
let diagram;
//Initializes the nodes for the diagram.
let nodes = [
  {
   id: 'swimlane',
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                header: {
                    annotation: { content: 'SALES PROCESS FLOW CHART', style: { fill: 'transparent' } },
                    height: 50, style: { fontSize: 11 },
                },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        header: {
                            annotation: { content: 'Consumer' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node1',
                                annotations: [
                                    {
                                        content: 'Consumer learns \n of product',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 60, top: 30 },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node2',
                                shape: { type: 'Flow', shape: 'Decision' },
                                annotations: [
                                    {
                                        content: 'Does \nConsumer want \nthe product',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 200, top: 20 },
                                height: 60, width: 120, ports: port
                            },
                            {
                                id: 'node3',
                                annotations: [
                                    {
                                        content: 'No sales lead',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 370, top: 30 }, shape: { type: 'Path', data: pathData },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node4',
                                annotations: [
                                    {
                                        content: 'Sell to consumer',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 510, top: 30 },
                                height: 40, width: 100, ports: port
                            },
                        ],
                    },
                    {
                        id: 'stackCanvas2',
                        header: {
                            annotation: { content: 'Marketing' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node5',
                                annotations: [{ content: 'Create marketing campaigns' }],
                                margin: { left: 60, top: 20 },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node6',
                                annotations: [{ content: 'Marketing finds sales leads' }],
                                margin: { left: 210, top: 20 },
                                height: 40, width: 100, ports: port
                            }
                        ],
                    },
                    {
                        id: 'stackCanvas3',
                        header: {
                            annotation: { content: 'Sales' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node7',
                                annotations: [{ content: 'Sales receives lead' }],
                                margin: { left: 210, top: 30 },
                                height: 40, width: 100, ports: port
                            }
                        ],
                    },
                    {
                        id: 'stackCanvas4',
                        header: {
                            annotation: { content: 'Success' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node8',
                                annotations: [{ content: 'Success helps \n retain consumer \n as a customer' }],
                                margin: { left: 510, top: 20 },
                                height: 50, width: 100, ports: port
                            }
                        ],
                    },
                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                    },
                ],
                phaseSize: 20,
            },
            offsetX: 440, offsetY: 320,
            height: 100,
            width: 650
        },
];

//Initializes the connectors for the diagram.
let connectors = [
  {
            id: 'connector1', sourceID: 'node1',
            targetID: 'node2'
        },
        {
            id: 'connector2', sourceID: 'node2',
            targetID: 'node3', annotations: [{content:'No', style: {fill: 'white'}}]
        },
        {
            id: 'connector3', sourceID: 'node4',
            targetID: 'node8'
        },
        {
            id: 'connector4', sourceID: 'node2',
            targetID: 'node6', annotations: [{content:'Yes', style: {fill: 'white'}}]
        },
        {
            id: 'connector5', sourceID: 'node5',
            targetID: 'node1'
        },
        {
            id: 'connector6', sourceID: 'node6',
            targetID: 'node7'
        },
        {
            id: 'connector7', sourceID: 'node4',
            targetID: 'node7', sourcePortID: 'Port1', targetPortID: 'Port3'
        },
];

let selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate }
let contextMenuSettings = {
  show: true, items: [
    {
      text: 'Clone', id: 'Clone', target: '.e-diagramcontent',
    },
    {
      text: 'Cut', id: 'Cut', target: '.e-diagramcontent',
    },
    {
      text: 'InsertLaneBefore', id: 'InsertLaneBefore', target: '.e-diagramcontent',
    },
    {
      text: 'InsertLaneAfter', id: 'InsertLaneAfter', target: '.e-diagramcontent',
    }],
  showCustomMenuOnly: true,
}
function contextMenuClick(args) {
  if (args.item.id === 'InsertLaneBefore' || args.item.id === 'InsertLaneAfter') {
    if (diagram.selectedItems.nodes.length > 0 && (diagram.selectedItems.nodes[0]).isLane) {
      let index;
      let node = diagram.selectedItems.nodes[0];
      let swimlane = diagram.getObject((diagram.selectedItems.nodes[0]).parentId);
      let shape = swimlane.shape;
      let existingLan = cloneObject(shape.lanes[0]);

      let newLane = {
        id: randomId(),
        header: {
          width: existingLane.header.width, height: existingLane.header.height,
          style: existingLane.header.style
        },
        style: existingLane.style,
        height: existingLane.height, width: existingLane.width,
      };

      if (shape.orientation === 'Horizontal') {
        let exclude = 0;
        exclude += (shape.header) ? 1 : 0;
        exclude += (shape.phases.length) ? 1 : 0;
        index = node.rowIndex - exclude;
        newLane.header.width = existingLane.header.width;
        newLane.header.height = existingLane.height;
      } else {
        index = node.columnIndex - (shape.phases.length) ? 1 : 0;
        newLane.header.width = existingLane.width;
        newLane.header.height = existingLane.header.height;
      }
      if (args.item.id === 'InsertLaneBefore') {
        diagram.addLanes(swimlane, [newLane], index);
      } else {
        diagram.addLanes(swimlane, [newLane], index + 1);
      }
      diagram.clearSelection();
    }
  } else if (args.item.id === 'Cut') {
    diagram.cut();
  } else if (args.item.id === 'Clone') {
    diagram.copy();
    diagram.paste();
  }
}
function contextMenuOpen(args) {
  for (let item of args.items) {
    if ((diagram.selectedItems.connectors.length + diagram.selectedItems.nodes.length) > 0) {
      if (item.id === 'InsertLaneBefore' || item.id === 'InsertLaneAfter') {
        if (diagram.selectedItems.connectors.length || (diagram.selectedItems.nodes.length && !(diagram.selectedItems.nodes[0]).isLane)) {
          args.hiddenItems.push(item.text);
        }
      }
    } else {
      args.hiddenItems.push(item.text);
    }
  }
}
let interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
let gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };

// Initializes the palettes to be displayed in the symbol palette.
let palettes = [
     {
            id: 'flow', expanded: true, title: 'Flow Shapes', symbols: [
                {
                    id: 'Terminator', addInfo: { tooltip: 'Terminator' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Terminator' }, style: { strokeWidth: 1, strokeColor: "#757575" }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ]
                },
                {
                    id: 'Process',  addInfo: { tooltip: 'Process' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Process' }, style: { strokeWidth: 1, strokeColor: "#757575" }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ]
                },
                {
                    id: 'Decision', addInfo: { tooltip: 'Decision' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Decision' }, style: { strokeWidth: 1, strokeColor: "#757575" }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ]
                },
                {
                    id: 'Document', addInfo: { tooltip: 'Document' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Document' }, style: { strokeWidth: 1, strokeColor: "#757575" }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ]
                },
                {
                    id: 'Predefinedprocess', addInfo: { tooltip: 'Predefined process' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'PreDefinedProcess' }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ], style: { strokeWidth: 1, strokeColor: "#757575" }
                },
                {
                    id: 'Data', addInfo: { tooltip: 'Data' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Data' }, ports: [
                        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
                    ], style: { strokeWidth: 1, strokeColor: "#757575" }
                },
            ]
        },
  {
    id: 'swimlaneShapes', expanded: true,
    title: 'Swimlane Shapes',
    symbols: [
      {
        id: 'stackCanvas1', addInfo: { tooltip: 'Horizontal swimlane' },
        shape: {
          type: 'SwimLane', lanes: [
            {
              id: 'lane1',
              style: { strokeColor: "#757575" }, height: 60, width: 150,
              header: { width: 50, height: 50, style: { strokeColor: "#757575", fontSize: 11 } },
            }
          ],
          orientation: 'Horizontal', isLane: true
        },
        height: 60,
        width: 140,
        offsetX: 70,
        offsetY: 30,
      }, {
        id: 'stackCanvas2', addInfo: { tooltip: 'Vertical swimlane' },
        shape: {
          type: 'SwimLane',
          lanes: [
            {
              id: 'lane1',
              style: { strokeColor: "#757575" }, height: 150, width: 60,
              header: { width: 50, height: 50, style: { strokeColor: "#757575", fontSize: 11 } },
            }
          ],
          orientation: 'Vertical', isLane: true
        },
        height: 140,
        width: 60,
        // style: { fill: '#f5f5f5' },
        offsetX: 70,
        offsetY: 30,
      }, {
        id: 'verticalPhase', addInfo: { tooltip: 'Vertical phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: "#757575" }, }],
          annotations: [{ text: '' }],
          orientation: 'Vertical', isPhase: true
        },
        height: 60,
        width: 140,
        style: { strokeColor: "#757575" }
      }, {
        id: 'horizontalPhase', addInfo: { tooltip: 'Horizontal phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: "#757575" }, }],
          annotations: [{ text: '' }],
          orientation: 'Horizontal', isPhase: true
        },
        height: 60,
        width: 140,
        style: { strokeColor: "#757575" }
      }
    ]
  },
  {
    id: 'connectors', expanded: true, symbols: [
      {
        id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
        targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }, style: { strokeWidth: 1, strokeColor: "#757575" }
      },
      {
        id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
        targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }, style: { strokeWidth: 1, strokeDashArray: '4 4', strokeColor: "#757575" }
      },
       {
         id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
         targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }, style: { strokeWidth: 1, strokeColor: "#757575" }
       },
       {
         id: 'Link22', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
         targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }, style: { strokeWidth: 1, strokeDashArray: '4 4', strokeColor: "#757575" }
       }
      ], title: 'Connectors'
  }
];

function dragEnter(arg) {
  if (arg.element instanceof Node) {
    let shape = arg.element.shape;
    if (shape.isLane) {
      if (shape.orientation === 'Horizontal') {
        shape.lanes[0].height = 100;
        shape.lanes[0].width = 500;
      } else if (shape.orientation === 'Vertical') {
        shape.lanes[0].height = 500;
        shape.lanes[0].width = 100;
      }
    }
  }
};
function getNodeDefaults(node) {
  node.style.strokeColor = "#717171";
  return node;
}

function getConnectorDefaults(connector) {
   if (connector.id.indexOf("Link21") !== -1) {
    connector.type = 'Straight';
   }
   else if (connector.id.indexOf("Link22") !== -1) {
     connector.type = 'Straight';
    }
   else {
    connector.type = 'Orthogonal';
  }
  connector.style.strokeColor = "#717171";
  connector.sourceDecorator.style.strokeColor = "#717171";
  connector.targetDecorator.style.strokeColor = "#717171";
  connector.sourceDecorator.style.fill = "#717171";
  connector.targetDecorator.style.fill = "#717171";
  return connector;
}

function getSymbolInfo(symbol) {
  return { tooltip: symbol.addInfo ? symbol.addInfo.tooltip : symbol.id };
}

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "100%",
      nodes: nodes,
      connectors: connectors,
      getConnectorDefaults: getConnectorDefaults,
      getNodeDefaults: getNodeDefaults,
      snapSettings: {
        horizontalGridlines: gridlines,
        verticalGridlines: gridlines,
        constraints: SnapConstraints.All & ~SnapConstraints.ShowLines
      },
      contextMenuSettings: contextMenuSettings,
      contextMenuOpen: contextMenuOpen,
      contextMenuClick: contextMenuClick,
      selectedItems, selectedItems,
      expandMode: "Multiple",
      palettes: palettes,
      palettewidth: "100%",
      paletteheight: '100%',
      symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },
      symbolHeight: 48, symbolWidth: 48,
    };
  }, mounted: function() {
    diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage();
  }
}
</script>