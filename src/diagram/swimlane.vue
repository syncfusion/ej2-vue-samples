<template>
  <div class="control-section diagram-swimlane">
    <link href="https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css" rel="stylesheet">
    <div id="swimlaneDiagram" style="width: 100%;">
      <div class="sb-mobile-palette-bar">
        <div id="palette-icon" style="float: right;" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
      </div>
      <div id="palette-space" class="sb-mobile-palette">
        <!-- Configures the symbolpalette with dynamic properties and settings -->
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth' :getConnectorDefaults='getConnectorDefaults' :getNodeDefaults='getNodeDefaults'></ejs-symbolpalette>
      </div>
      <div id="diagram-space" class="sb-mobile-diagram">
          <!-- Configures the diagram with dynamic properties and settings -->
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'  :snapSettings='snapSettings' :getNodeDefaults='getNodeDefaults'  :contextMenuSettings='contextMenuSettings' :dragEnter='dragEnter'  :contextMenuOpen='contextMenuOpen'
      :contextMenuClick='contextMenuClick'></ejs-diagram>
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
        .diagram-swimlane .e-toggle-palette::before {
            content: "\e700"
        }

    /* These styles are used for aligning palette and diagram */
        .diagram-swimlane .sb-mobile-palette {
            width: 195px;
            height: 559px;
            float: left;
        }

        .diagram-swimlane .sb-mobile-palette-bar {
            display: none;
        }

        .diagram-swimlane .sb-mobile-diagram {
            width: calc(100% - 197px);
            height: 559px;
            float: left;
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-left: none;
        }

        @media (max-width: 550px) {
            .diagram-swimlane .sb-mobile-palette {
                z-index: 19;
                position: absolute;
                display: none;
                transition: transform 300ms linear, visibility 0s linear 300ms;
                width: 39%;
                height: 100%;
            }
            .diagram-swimlane .sb-mobile-diagram {
                width: 100%;
                height: 100%;
                float: left;
                left: 0px;
            }
            .diagram-swimlane .sb-mobile-palette-bar {
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
  SelectorConstraints,
  //private method
   randomId,
  cloneObject,
} from "@syncfusion/ej2-vue-diagrams";

let pathData = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
  ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
  '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';
//Create and add ports for node.
let port = [
    { id:'Port1', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port2',offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port3',offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw },
    { id:'Port4',offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Default |  PortConstraints.Draw }
]
let diagram;
//Initialize nodes for the diagram.
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
//Initialize connectors for the diagram.
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
//Define custom menu items
let contextMenuSettings = {
  show: true, items: [
    {
      text: 'Clone', id: 'Clone', target: '.e-diagramcontent', iconCss: 'e-menu-icon e-icons e-copy'
    },
    {
      text: 'Cut', id: 'Cut', target: '.e-diagramcontent',iconCss: 'e-menu-icon e-icons e-cut'
    },
    {
      text: 'Paste', id: 'Paste', target: '.e-diagramcontent', iconCss: 'e-menu-icon e-icons e-paste'
    },
    {
      text: 'InsertLaneBefore', id: 'InsertLaneBefore', target: '.e-diagramcontent',
    },
    {
      text: 'InsertLaneAfter', id: 'InsertLaneAfter', target: '.e-diagramcontent',
    }],
  showCustomMenuOnly: true,
}
//Handle click event for menu items.
function contextMenuClick(args) {
  if (args.item.id === 'InsertLaneBefore' || args.item.id === 'InsertLaneAfter') {
    if (diagram.selectedItems.nodes.length > 0 && (diagram.selectedItems.nodes[0]).isLane) {
      let index;
      let node = diagram.selectedItems.nodes[0];
      let swimlane = diagram.getObject((diagram.selectedItems.nodes[0]).parentId);
      let shape = swimlane.shape;
      let existingLane = cloneObject(shape.lanes[0]);

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
  }else if (args.item.id === 'Paste') {
    diagram.paste();
  }
}
//Open the context menu 
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
// Initializes the palettes to be displayed in the symbol palette.
let palettes = [
     {
            id: 'flow', expanded: true, title: 'Flow Shapes', symbols: [
                {
                    id: 'Terminator', addInfo: { tooltip: 'Terminator' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Terminator' }, ports: port
                },
                {
                    id: 'Process',  addInfo: { tooltip: 'Process' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Process' },  ports: port
                },
                {
                    id: 'Decision', addInfo: { tooltip: 'Decision' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Decision' },  ports: port
                },
                {
                    id: 'Document', addInfo: { tooltip: 'Document' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Document' },  ports: port
                },
                {
                    id: 'Predefinedprocess', addInfo: { tooltip: 'Predefined process' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'PreDefinedProcess' }, ports: port
                },
                {
                    id: 'Data', addInfo: { tooltip: 'Data' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Data' }, ports: port
                },
            ]
        },
  {
    id: 'swimlaneShapes', expanded: true,
    title: 'Swimlane Shapes',
    symbols: [
      {
        id: 'horizontalSwimlane', addInfo: { tooltip: 'Horizontal swimlane' },
        shape: {
          type: 'SwimLane', lanes: [
            {
              id: 'lane1',
               height: 60, width: 150,
              header: { width: 50, height: 50, style: { fontSize: 11 } },
            }
          ],
          orientation: 'Horizontal', isLane: true
        },
        height: 60,
        width: 140,
        offsetX: 70,
        offsetY: 30,
      }, {
        id: 'verticalSwimlane', addInfo: { tooltip: 'Vertical swimlane' },
        shape: {
          type: 'SwimLane',
          lanes: [
            {
              id: 'lane1',
               height: 150, width: 60,
              header: { width: 50, height: 50, style: { fontSize: 11 } },
            }
          ],
          orientation: 'Vertical', isLane: true
        },
        height: 140,
        width: 60,
        offsetX: 70,
        offsetY: 30,
      }, {
        id: 'verticalPhase', addInfo: { tooltip: 'Vertical phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' }, }],
          annotations: [{ text: '' }],
          orientation: 'Vertical', isPhase: true
        },
        height: 60,
        width: 140,
        
      }, {
        id: 'horizontalPhase', addInfo: { tooltip: 'Horizontal phase' },
        shape: {
          type: 'SwimLane',
          phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' }, }],
          annotations: [{ text: '' }],
          orientation: 'Horizontal', isPhase: true
        },
        height: 60,
        width: 140,
        
      }
    ]
  },
  {
    id: 'connectors', expanded: true, symbols: [
      {
        id: 'orthogonal', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }
      },
      {
        id: 'orthogonaldashed', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
        style: {  strokeDashArray: '4 4' }
      },
       {
         id: 'straight', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }
       },
       {
         id: 'straightdashed', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
         style: {strokeDashArray: '4 4'}
       }
      ], title: 'Connectors'
  }
];
 //Sets the node properties for DragEnter element.
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
//Set the default values for a node.
function getNodeDefaults(node) {
  node.style.strokeColor = "#717171";
  return node;
}
//Set the default values for a Connector.
function getConnectorDefaults(connector) {
  if ((connector.id.indexOf("straight") !== -1) || (connector.id.indexOf("straightdashed") !== -1)) {
      connector.type = 'Straight';
  }
  else {
      connector.type = 'Orthogonal';
  }
  setConnectorStyles(connector, '#717171');
  return connector;
}
    //set styles for connector
    function setConnectorStyles(connector, color) {
      connector.targetDecorator.style.strokeColor = color;
      connector.targetDecorator.style.fill = color;
      connector.style.strokeColor = color;
      connector.style.strokeWidth = 1;
  } 

function getSymbolInfo(symbol) {
  return { tooltip: symbol.addInfo ? symbol.addInfo.tooltip : symbol.id };
}

export default {
  components: {
    // Defines components for the diagram and symbol palette
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data: function() {
    return {
      // Initialize component data
      width: "100%",
      height: "100%",
      nodes: nodes,
      connectors: connectors,
      getConnectorDefaults: getConnectorDefaults,
      getNodeDefaults: getNodeDefaults,
      snapSettings: {
        constraints: SnapConstraints.All & ~SnapConstraints.ShowLines
      },
      contextMenuSettings: contextMenuSettings,
      contextMenuOpen: contextMenuOpen,
      contextMenuClick: contextMenuClick,
      getSymbolInfo:getSymbolInfo,
      dragEnter:dragEnter,
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
