<template>
  <div class="col-lg-12 control-section">
    <div id="wrapper-diagram" style="width: 100%">
      <div style="display: flex; justify-content: center; align-items: center; margin: 20px;">
        <ejs-switch id="graphSwitch" :checked="true" :change="onGraphTypeChanged" />
        <label for="graphSwitch" class="switch-label"
          style="margin-left: 10px; font-size: 18px; font-weight: 500;">Directed Graph</label>
      </div>
      <ejs-diagram style="display: block" ref="diagram" id="diagram" :width="'100%'" :height="'700px'" :nodes="nodes"
        :connectors="connectors" :constraints="constraints" :snapSettings="snapSettings" :mouseEnter="onMouseEnter" :mouseLeave="onMouseLeave"
        :click="onNodeClicked" :load="onDiagramLoad" :created="onDiagramCreated"/>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates an interactive shortest path algorithm visualization using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component, featuring a dynamic graph where users select source and destination nodes to view animated optimal paths.
      </p>
    </div>
    <div id="description">
      <p>
        Users can interactively find the shortest path by selecting a <b>source</b> node and hovering over a <b>destination.</b> The optimal path is dynamically highlighted using animated, dashed connectors and numerical labels. Tooltip instantly display the path sequence or show a <b>"No path found"</b> warning. A toggle allows seamless switching between directed and undirected graph modes.
      </p>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { DiagramComponent, Node, NodeConstraints, AnnotationConstraints, ConnectorConstraints, SnapConstraints, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

const dashIntervals = new Map();

// Constants for colors and styles
const nodeHighlightFill = '#6495ED';
const nodeHighlightStroke = '#4472C4';
const nodeDefaultFill = 'white';
const nodeDefaultStroke = '#333333';
const nodeErrorFill = '#FF6565';
const nodeErrorStroke = '#EE3636';
const connectorHighlightStroke = '#4472C4';
const connectorDefaultStroke = '#333333';


let diagram;
let graph = new Map();
let selectedNode = 'A';
let highlightedNodes = [];
let highlightedConnectors = [];
let isDirectedGraph = true;
let previousNode = null;

buildGraph();
const nodes = [
  createNode('A', 75, 75),
  createNode('B', 384, 300),
  createNode('C', 700, 200),
  createNode('D', 100, 300),
  createNode('E', 825, 20),
  createNode('F', 90, 440),
  createNode('G', 460, 660),
  createNode('H', 270, 530),
  createNode('I', 750, 350),
  createNode('J', 1000, 450),
  createNode('K', 750, 450),
  createNode('L', 929, 210),
  createNode('X', 420, 100),
  createNode('Y', 850, 620)
];
const connectors = [
  createConnector('A', 'B'),
  createConnector('A', 'D'),
  createConnector('A', 'X'),
  createConnector('B', 'D'),
  createConnector('B', 'H'),
  createConnector('B', 'X'),
  createConnector('C', 'L'),
  createConnector('C', 'X'),
  createConnector('D', 'F'),
  createConnector('E', 'X'),
  createConnector('G', 'H'),
  createConnector('G', 'Y'),
  createConnector('H', 'F'),
  createConnector('I', 'J'),
  createConnector('I', 'K'),
  createConnector('I', 'L'),
  createConnector('J', 'L'),
  createConnector('K', 'Y'),
  createConnector('B', 'K'),
  createConnector('B', 'C'),
  createConnector('G', 'K'),
  createConnector('H', 'I')
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-switch': SwitchComponent
  },
  data: function () {
    return {
      onGraphTypeChanged: onGraphTypeChanged,
      nodes: nodes,
      connectors: connectors,
      snapSettings: { constraints: SnapConstraints.None },
      constraints: DiagramConstraints.Default & ~DiagramConstraints.UndoRedo,
      diagramCreated: false,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onNodeClicked: onNodeClicked,
    };
  },
  methods:{
     onDiagramCreated() {
      this.diagramCreated = true;
      this.$refs.diagram.ej2Instances.fitToPage();
    },

    onDiagramLoad() {
      if (this.diagramCreated) {
        setTimeout(() => this.$refs.diagram.ej2Instances.fitToPage(), 100);
      }
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      diagram = this.$refs.diagram.ej2Instances;
      diagram.fitToPage();
    });
  },
};

function createNode(id, x, y) {
  const isSelected = id === 'A';
  return {
    id: id,
    offsetX: x,
    offsetY: y,
    width: 50,
    height: 50,
    constraints: (NodeConstraints.Default | NodeConstraints.Tooltip) & ~NodeConstraints.Select,
    tooltip: {
      openOn: 'Custom',
      relativeMode: 'Object'
    },
    shape: {
      type: 'Basic',
      shape: 'Ellipse'
    },
    style: isSelected ? {
      strokeColor: nodeHighlightStroke,
      strokeWidth: 3,
      fill: nodeHighlightFill
    } : {
      fill: nodeDefaultFill,
    },
    annotations: [{
      content: id,
      constraints: AnnotationConstraints.ReadOnly,
      style: {
        color: 'black',
        fontSize: 16
      }
    }]
  };
}

function createConnector(sourceId, targetId) {
  return {
    id: `${sourceId}${targetId}`,
    sourceID: sourceId,
    targetID: targetId,
    type: 'Straight',
    style: {
      strokeColor: connectorDefaultStroke,
      strokeWidth: 2,
      strokeDashArray: '5,5'
    },
    annotations: [{
      content: '',
      style: {
        color: 'white',
        fontSize: 12,
        bold: true,
        fill: 'transparent'
      },
      offset: 0.5,
      constraints: AnnotationConstraints.ReadOnly,
      alignment: 'Center',
      width: 20,
      height: 20
    }],
    constraints: ConnectorConstraints.ReadOnly,
    targetDecorator: {
      shape: 'Arrow'
    }
  };
}

function buildGraph() {
  const nodeIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X', 'Y'];

  // Initialize graph
  nodeIds.forEach(nodeId => {
    graph.set(nodeId, []);
  });

  const edges = [
    { from: 'A', to: 'B' }, { from: 'A', to: 'D' }, { from: 'A', to: 'X' },
    { from: 'B', to: 'D' }, { from: 'B', to: 'H' }, { from: 'B', to: 'X' },
    { from: 'B', to: 'C' }, { from: 'B', to: 'K' }, { from: 'C', to: 'L' },
    { from: 'C', to: 'X' }, { from: 'D', to: 'F' }, { from: 'E', to: 'X' },
    { from: 'F', to: 'H' }, { from: 'G', to: 'H' }, { from: 'G', to: 'Y' },
    { from: 'G', to: 'K' }, { from: 'H', to: 'I' }, { from: 'I', to: 'J' },
    { from: 'I', to: 'K' }, { from: 'I', to: 'L' }, { from: 'J', to: 'L' },
    { from: 'K', to: 'Y' }
  ];

  // Build bidirectional adjacency list
  edges.forEach(edge => {
    graph.get(edge.from)?.push(edge.to);
    graph.get(edge.to)?.push(edge.from);
  });
}

function onGraphTypeChanged(args) {
  isDirectedGraph = args.checked;

  diagram.connectors.forEach(connector => {
    // Update stroke style & decorator
    if (isDirectedGraph) {
      connector.targetDecorator.shape = 'Arrow';
      connector.style.strokeWidth = 2;
      connector.style.strokeDashArray = '5,5';
      connector.style.strokeColor = connectorDefaultStroke;
    }
    else {
      connector.targetDecorator.shape = 'None';
      connector.style.strokeColor = connectorDefaultStroke;
      connector.style.strokeDashArray = '';
      connector.style.strokeWidth = 2;
      // Stop animation for undirected graph
      removeConnectorDash(connector.id + '_path');
    }
  });

  diagram.dataBind();
}

function onMouseEnter(args) {
  if (args.actualObject && args.actualObject instanceof Node) {
    const hoverNode = args.actualObject;
    previousNode = hoverNode;

    if (hoverNode.id !== selectedNode) {
      removeStepNumbers();
      resetStyles();
      const path = findShortestPath(selectedNode, hoverNode.id);

      if (path.length > 0) {
        const pathString = path.map(p => getNodeLabel(p)).join(" → ");
        // Update tooltip
        hoverNode.tooltip.content = pathString;
        diagram.showTooltip(hoverNode);
        highlightNodes(path);
        addStepNumbersToConnectors(path);
        highlightPath(path);
      }
      else {
        hoverNode.tooltip.content = 'No path found';
        diagram.showTooltip(hoverNode);
        // Show error state
        hoverNode.style.fill = nodeErrorFill;
        hoverNode.style.strokeColor = nodeErrorStroke;
        if (!highlightedNodes.some((node) => node.id === hoverNode.id)) {
          highlightedNodes.push(hoverNode);
        }
        const rootNode = diagram.getObject(selectedNode);
        if (rootNode) {
          rootNode.style.fill = nodeErrorFill;
          rootNode.style.strokeColor = nodeErrorStroke;
        }
      }
      diagram.dataBind();
    }
  }
}

function onMouseLeave() {
  if (previousNode) {
    diagram.hideTooltip(previousNode);

    const selectedNodeObj = diagram.getObject(selectedNode);
    if (selectedNodeObj) {
      selectedNodeObj.style.strokeColor = nodeHighlightStroke;
      selectedNodeObj.style.fill = nodeHighlightFill;
      selectedNodeObj.style.strokeWidth = 4;
    }

    resetStyles();
    removeStepNumbers();
    diagram.dataBind();
  }
}

function onNodeClicked(args) {
  if (args.element && args.element instanceof Node) {
    const clickedNode = args.element;

    previousSelectedNodeUpdated();
    selectedNode = clickedNode.id;

    clickedNode.style.strokeColor = nodeHighlightStroke;
    clickedNode.style.strokeWidth = 3;

    resetStyles();
    removeStepNumbers();
    diagram.dataBind();
  }
}

function previousSelectedNodeUpdated() {
  const previousSelectedNode = diagram.nodes.find((node) => node.id === selectedNode);
  if (previousSelectedNode) {
    previousSelectedNode.style.strokeColor = nodeDefaultStroke;
    previousSelectedNode.style.strokeWidth = 2;
    previousSelectedNode.style.fill = nodeDefaultFill;
  }
}

function resetStyles() {
  // Reset highlighted connectors
  highlightedConnectors.forEach(connector => {
    connector.style.strokeColor = connectorDefaultStroke;
    connector.style.strokeWidth = 2;
    if (isDirectedGraph) {
      connector.style.strokeDashArray = '5,5';
      removeMovingDash(connector.id + '_path');
    }
  });
  highlightedConnectors = [];

  // Reset highlighted nodes
  highlightedNodes.forEach(node => {
    if (node.id !== selectedNode) {
      node.style.fill = nodeDefaultFill;
      node.style.strokeColor = nodeDefaultStroke;
      node.style.strokeWidth = 2;
    }
  });
  highlightedNodes = [];
}

function getNeighbors(nodeId, directed) {
  if (!directed) {
    // For undirected graph, return all connected nodes
    return graph.get(nodeId) || [];
  } else {
    // For directed graph, only return nodes that this node points to
    const neighbors = [];
    const outgoingConnectors = diagram.connectors.filter((connector) => connector.sourceID === nodeId);
    outgoingConnectors.forEach(connector => {
      if (connector.targetID) {
        neighbors.push(connector.targetID);
      }
    });
    return neighbors;
  }
}

function findShortestPath(start, end) {
  if (!graph.has(start) || !graph.has(end)) {
    return { path: [], distance: 0 };
  }

  if (start === end) {
    return { path: [start], distance: 0 };
  }

  const queue = [start];
  const visited = new Set([start]);
  const previous = new Map();
  const distances = new Map();
  distances.set(start, 0);

  while (queue.length > 0) {
    const current = queue.shift();
    const neighbors = getNeighbors(current, isDirectedGraph);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        previous.set(neighbor, current);
        distances.set(neighbor, distances.get(current) + 1);
        queue.push(neighbor);

        if (neighbor === end) {
          break;
        }
      }
    }

    if (visited.has(end)) {
      break;
    }
  }

  const path = [];
  if (visited.has(end)) {
    let currentNode = end;
    while (currentNode !== undefined) {
      path.unshift(currentNode);
      currentNode = previous.get(currentNode);
    }
  }

  return path;
}

function highlightNodes(path) {
  path.forEach(nodeId => {
    const node = diagram.getObject(nodeId);
    if (node) {
      node.style.fill = nodeHighlightFill;
      node.style.strokeColor = nodeHighlightStroke;
      node.style.strokeWidth = 3;
      highlightedNodes.push(node);
    }
  });
}

function findConnector(sourceId, targetId) {
  return diagram.connectors.find((connector) =>
    (connector.sourceID === sourceId && connector.targetID === targetId) ||
    (!isDirectedGraph && connector.sourceID === targetId && connector.targetID === sourceId)
  );
}

function highlightPath(path) {
  for (let i = 0; i < path.length - 1; i++) {
    const connector = findConnector(path[i], path[i + 1]);
    if (connector) {
      connector.style.strokeColor = connectorHighlightStroke;
      connector.style.strokeWidth = 4;
      highlightedConnectors.push(connector);

      if (isDirectedGraph) {
        connector.style.strokeDashArray = '8,4';
        applyMovingDash(connector.id + '_path');
      }
    }
  }
}

function addStepNumbersToConnectors(path) {
  for (let i = 0; i < path.length - 1; i++) {
    const connector = findConnector(path[i], path[i + 1]);
    if (connector && connector.annotations && connector.annotations.length > 0) {
      connector.annotations[0].content = (i + 1).toString();
      connector.annotations[0].style.fill = nodeHighlightStroke;
    }
  }
}

function removeStepNumbers() {
  diagram.connectors.forEach(connector => {
    if (connector.annotations && connector.annotations.length > 0) {
      connector.annotations[0].content = '';
      connector.annotations[0].style.fill = 'transparent';
    }
  });
}

function getNodeLabel(nodeId) {
  const node = diagram.nodes.find(n => n.id === nodeId);
  return node?.annotations?.[0]?.content ?? nodeId;
}

function applyMovingDash(pathId) {
  // Wait for the path to exist in the DOM
  const applyAnimationInterval = setInterval(() => {
    const element = document.getElementById(pathId);
    if (element && typeof element.setAttribute === 'function') {
      let offset = 0;
      // Store the interval reference for this pathId
      const interval = setInterval(() => {
        // Double-check element still exists before setAttribute
        if (element && typeof element.setAttribute === 'function') {
          offset -= 1;
          element.setAttribute('stroke-dashoffset', offset.toString());
        }
      }, 50);
      dashIntervals.set(pathId, interval);
      clearInterval(applyAnimationInterval);
    }
  }, 10);
}

function removeMovingDash(pathId) {
  // Wait for the path to exist in the DOM for cleanup
  const removeAnimationInterval = setInterval(() => {
    const element = document.getElementById(pathId);
    if (element && typeof element.removeAttribute === 'function') {
      // Clear dash animation interval if it exists
      const interval = dashIntervals.get(pathId);
      if (interval) {
        clearInterval(interval);
        dashIntervals.delete(pathId);
      }
      element.removeAttribute('stroke-dashoffset');
      clearInterval(removeAnimationInterval);
    }
  }, 10);
}

function removeConnectorDash(pathId) {
  const element = document.querySelector(`[id='${pathId}']`);
  if (element && typeof element.removeAttribute === 'function') {
    const interval = dashIntervals.get(pathId);
    if (interval) {
      clearInterval(interval);
      dashIntervals.delete(pathId);
    }
    if (typeof element.removeAttribute === 'function') {
      element.removeAttribute('stroke-dashoffset');
    }
  }
}
</script>
