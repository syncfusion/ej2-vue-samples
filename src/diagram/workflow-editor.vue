<template>
  <div class="control-section diagram-workflow">
    <div style="width: 100%">
      <!-- Toolbar component -->
      <div id="diagramtoolbarContainer" class="db-toolbar-container">
        <ejs-toolbar
          id="diagramtoolbarObj"
          ref="toolbarObj"
          :items="toolbarItems"
          :enableToggle="true"
          @clicked="onToolbarClicked"
          overflowMode="Popup"
        ></ejs-toolbar>
        <ejs-toolbar
          id="diagramtoolbarWithToggleSwitch"
          ref="toolbarWithToggleSwitch"
          :items="toolbarWithToggleItem"
          :enableToggle="true"
        ></ejs-toolbar>
        <input
          type="file"
          id="fileInput"
          ref="fileInput"
          style="display: none"
          @change="onFileChange"
        />
      </div>
      <!-- Diagram component -->
      <ejs-diagram
        style="display: block"
        ref="diagramObj"
        id="diagram"
        :width="width"
        :height="height"
        :connectors="connectors"
        :nodes="nodes"
        :getNodeDefaults="getNodeDefaults"
        :getConnectorDefaults="getConnectorDefaults"
        :tool="tool"
        :created="created"
        :selectionChange="onSelectionChange"
        :selectedItems="selectedItems"
        :getCustomTool="getCustomTool"
      ></ejs-diagram>
      <!-- Symbol Palette -->
      <aside id="symbolPalette"></aside>
    </div>
    <!-- Description section -->
    <div id="action-description">
      <p>
        This sample provides a visual representation of a streamlined workflow
        diagram built using the Syncfusion<sup>®</sup> EJ2 Diagram control with
        BPMN shapes.
      </p>
    </div>
    <div id="description">
      <p>
        This sample demonstrates how to build an animated workflow diagram using
        BPMN nodes, connectors, and annotations. The diagram simulates a
        workflow execution process, where clicking the
        <code>Execute</code> button triggers animated connectors and loading
        indicators on nodes that transition to checkmarks upon successful
        completion. The sample also includes options to pause, resume, stop, and
        reset the workflow. The <code>Reset</code> button restores the diagram
        to its initial state. Users can enhance the workflow by dragging BPMN
        elements from the symbol palette, with zoom and pan functionalities
        enabled for interactive navigation.
      </p>
      <br />
    </div>
  </div>
</template>

<style>
/*To display icons */
/* CSS styles for icons, loading indicators, and animations */
#diagramtoolbarContainer {
  display: flex;
  align-items: center;
  height: 62px !important;
  width: 100% !important;
  position: relative;
}

#diagramtoolbarObj {
  width: 80% !important;
  height: 62px !important;
}

#diagramtoolbarWithToggleSwitch {
  width: 20% !important;
  height: 62px !important;
}

#diagramtoolbarObj .e-toolbar-item {
  padding: 0px !important;
}

#diagramtoolbarWithToggleSwitch .e-toolbar-item {
  padding: 0px !important;
}

#symbolPalette {
  overflow: hidden !important;
  height: 100%;
  display: flex;
  align-items: center;
}

#symbolPalette_container {
  border: none !important;
}

#symbolPalette .e-acrdn-header {
  display: none;
}

#symbolPalette .e-acrdn-content {
  padding: 0;
  background-color: transparent !important;
}

#symbolPalette .e-remove-palette {
  background-color: transparent !important;
}

#symbolPalette .e-accordion {
  background-color: transparent !important;
}

#symbolPalette .e-accordion .e-acrdn-item.e-selected.e-select.e-active {
  background-color: transparent !important;
}

#diagramContainer {
  flex: 1;
}

#diagram {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
}

#switch-container {
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 10px;
}

.diagram-workflow .loading-indicator {
  border: 4px solid #e6ffe6;
  border-top: 4px solid green;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

.diagram-workflow .tick {
  display: none;
  animation: showTick 0.5s forwards;
  width: 14px;
  height: 14px;
  padding: 1px;
  line-height: 1;
  color: white;
  border-radius: 50%;
  background-color: green;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes showTick {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

<script>
// Import necessary components from Syncfusion Vue library
import {
  DiagramComponent,
  SymbolPaletteComponent,
  NodeConstraints,
  SelectorConstraints,
  BpmnDiagrams,
  SymbolPalette,
  Node,
  DataBinding,
} from '@syncfusion/ej2-vue-diagrams';
import { DiagramTools } from '@syncfusion/ej2-vue-diagrams';
import { ToolbarComponent, Toolbar } from '@syncfusion/ej2-vue-navigations';
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { Switch } from '@syncfusion/ej2-buttons';

// Global variables to hold instances and data
let diagramInstance;
let toolbarInstance;
let paletteInstance;
let drawingNode;
// Initialize nodes and connectors for the diagram
let nodes = [
  {
    id: 'start',
    offsetX: 100,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start', trigger: 'None' },
    },
    annotations: [{ content: 'Start' }],
  },
  {
    id: 'liquidInput',
    offsetX: 300,
    offsetY: 280,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Liquid Input' }],
  },
  {
    id: 'dryInput',
    offsetX: 300,
    offsetY: 480,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Dry Input' }],
  },
  {
    id: 'condensed',
    offsetX: 500,
    offsetY: 180,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Condensed' }],
  },
  {
    id: 'cream',
    offsetX: 500,
    offsetY: 260,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Cream' }],
  },
  {
    id: 'caneSugar',
    offsetX: 500,
    offsetY: 340,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Cane Sugar' }],
  },
  {
    id: 'water',
    offsetX: 500,
    offsetY: 420,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Water' }],
  },
  {
    id: 'ingredients',
    offsetX: 500,
    offsetY: 500,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Ingredients' }],
  },
  {
    id: 'flavour',
    offsetX: 500,
    offsetY: 580,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Flavour' }],
  },
  {
    id: 'fruitsAndNuts',
    offsetX: 500,
    offsetY: 660,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Fruits and Nuts' }],
  },
  {
    id: 'blending',
    offsetX: 700,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Blending' }],
  },
  {
    id: 'coolingAging',
    offsetX: 840,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Cooling/Aging' }],
  },
  {
    id: 'packaging',
    offsetX: 980,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Packaging' }],
  },
  {
    id: 'storageDistribution',
    width: 140,
    offsetX: 1130,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: { activity: 'Task' },
    },
    annotations: [{ content: 'Storage/Distribution' }],
  },
  {
    id: 'end',
    offsetX: 1260,
    offsetY: 380,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End', trigger: 'None' },
    },
    annotations: [{ content: 'End' }],
  },
];

let connectors = [
  { id: 'c1', sourceID: 'start', targetID: 'liquidInput' },
  { id: 'c2', sourceID: 'start', targetID: 'dryInput' },
  { id: 'c3', sourceID: 'liquidInput', targetID: 'condensed' },
  { id: 'c4', sourceID: 'liquidInput', targetID: 'cream' },
  { id: 'c5', sourceID: 'liquidInput', targetID: 'caneSugar' },
  { id: 'c6', sourceID: 'liquidInput', targetID: 'water' },
  { id: 'c7', sourceID: 'liquidInput', targetID: 'ingredients' },
  {
    id: 'c8',
    sourceID: 'dryInput',
    targetID: 'flavour',
    
  },
  {
    id: 'c9',
    sourceID: 'dryInput',
    targetID: 'fruitsAndNuts',

  },
  { id: 'c10', sourceID: 'condensed', targetID: 'blending' },
  { id: 'c11', sourceID: 'cream', targetID: 'blending' },
  { id: 'c12', sourceID: 'caneSugar', targetID: 'blending' },
  { id: 'c13', sourceID: 'water', targetID: 'blending' },
  { id: 'c14', sourceID: 'ingredients', targetID: 'blending' },
  { id: 'c15', sourceID: 'flavour', targetID: 'blending' },
  { id: 'c16', sourceID: 'fruitsAndNuts', targetID: 'blending' },
  { id: 'c17', sourceID: 'blending', targetID: 'coolingAging' },
  { id: 'c18', sourceID: 'coolingAging', targetID: 'packaging' },
  { id: 'c19', sourceID: 'packaging', targetID: 'storageDistribution' },
  { id: 'c20', sourceID: 'storageDistribution', targetID: 'end' },
];
let userHandles = [
  {
    name: 'delete',
    pathData:
      'M0.97,3.04 L12.78,3.04 L12.78,12.21 C12.78,12.64,12.59,13,12.2,13.3 C11.82,13.6,11.35,13.75,10.8,13.75 L2.95,13.75 C2.4,13.75,1.93,13.6,1.55,13.3 C1.16,13,0.97,12.64,0.97,12.21 Z M4.43,0 L9.32,0 L10.34,0.75 L13.75,0.75 L13.75,2.29 L0,2.29 L0,0.75 L3.41,0.75 Z',
    tooltip: { content: 'Delete Node' },
    side: 'Bottom',
    offset: 0.5,
    margin: { bottom: 5 },
    disableConnectors: true,
  },
  {
    name: 'drawConnector',
    pathData:
      'M6.09,0 L13.75,6.88 L6.09,13.75 L6.09,9.64 L0,9.64 L0,4.11 L6.09,4.11 Z',
    tooltip: { content: 'Draw Connector' },
    side: 'Right',
    offset: 0.5,
    margin: { right: 5 },
    disableConnectors: true,
  },
  {
    name: 'stopAnimation',
    pathData: 'M4.75,0.75 L9.25,0.75 L9.25,9.25 L4.75,9.25 Z', // Stop icon
    tooltip: { content: 'Enable Animation' },
    disableNodes: true,
  },
];
function getTool(action) {
  // Remove selected elements
  if (action == 'delete') {
    diagramInstance.remove(diagramInstance.selectedItems.nodes[0]);
  }
  // Clone selected elements
  else if (action == 'stopAnimation') {
    var connector = diagramInstance.selectedItems.connectors[0];
    if (connector) {
      if (!connector.addInfo) connector.addInfo = {};
      connector.addInfo.stopAnimation = !connector.addInfo.stopAnimation;

      // Update path and tooltip
      var handle = diagramInstance.selectedItems.userHandles.find(function (h) {
        return h.name === 'stopAnimation';
      });
      if (handle) {
        var isStopped = connector.addInfo.stopAnimation;

        if (isStopped) {
          handle.pathData = 'M2,0 L10,8 L2,16 L2,0 Z'; // Play icon
          handle.tooltip.content = 'Enable Animation';
        } else {
          handle.pathData = 'M4.75,0.75 L9.25,0.75 L9.25,9.25 L4.75,9.25 Z'; // Stop icon
          handle.tooltip.content = 'Disable Animation';
        }
      }
    }
  }
  // Sets drawing mode and source ID for drawing elements
  else if (action == 'drawConnector') {
    var sourceNode = diagramInstance.selectedItems.nodes[0];
    if (!sourceNode) return;
    diagramInstance.drawingObject = {
      type: 'Straight',
      sourceID: sourceNode.id,
    };
    diagramInstance.tool = DiagramTools.DrawOnce;
  }
}
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-toolbar': ToolbarComponent,
    'ejs-tooltip': TooltipComponent,
    'ejs-symbolpalette': SymbolPaletteComponent,
  },

  data: function () {
    return {
      width: '100%',
      height: '645px',
      mode: 'SVG',
      nodes: nodes,
      connectors: connectors,
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      isPaused: false,
      flowTimeOut1: null,
      flowTimeOut2: null,
      animationIntervals: [],
      connectorBeforeAnimationColor: '#B0B0B0',
      connectorDuringAnimationColor: '#FF7F50',
      connectorAfterAnimationColor: 'green',
      connectorAnnotationColor: '#32CD32',
      nodeStrokeBeforeAnimationColor: 'black',
      nodeStrokeAfterAnimationColor: 'green',
      selectedItems: {
        userHandles: userHandles,
      },
      getNodeDefaults: (obj, diagram) => {
        return nodeDefaults(obj, diagram);
      },
      getConnectorDefaults: (connector, diagram) => {
        return this.connectorDefaults(connector, diagram);
      },
      created: (args) => {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
        diagramInstance.fitToPage({ region: 'Content', mode: 'Width' });
      },
      getCustomTool: getTool,
      toolbarItems: [
        {
          id: 'New',
          text: 'New',
          tooltipText: 'New Diagram',
          prefixIcon: 'e-icons e-circle-add',
        },
        {
          id: 'Open',
          text: 'Open',
          tooltipText: 'Open Diagram',
          prefixIcon: 'e-icons e-folder-open',
        },
        {
          id: 'Save',
          text: 'Save',
          tooltipText: 'Save Diagram',
          prefixIcon: 'e-icons e-save',
        },
        { type: 'Separator' },
        {
          id: 'Execute',
          width: 90,
          text: 'Execute',
          tooltipText: 'Start Workflow',
          prefixIcon: 'e-icons e-play',
          overflow: 'Show',
        },
        {
          id: 'Reset',
          text: 'Reset',
          tooltipText: 'Reset View/State',
          prefixIcon: 'e-icons e-reset',
          overflow: 'Show',
        },
        {
          id: 'Delete',
          text: 'Delete',
          tooltipText: 'Delete Selected',
          prefixIcon: 'e-icons e-trash',
        },
        { type: 'Separator' },
        {
          id: 'Select',
          text: 'Select',
          tooltipText: 'Select Tool',
          prefixIcon: 'e-icons e-mouse-pointer',
          overflow: 'Show',
        },
        {
          id: 'Pan',
          text: 'Pan',
          tooltipText: 'Pan Tool',
          prefixIcon: 'e-icons e-pan',
          overflow: 'Show',
        },
        { type: 'Separator' },
        {
          id: 'palette',
          template: '<aside id="symbolPalette"></aside>',
          overflow: 'Show',
        },
      ],
      toolbarWithToggleItem: [
        {
          template: `
                <div id="switch-container" onclick="event.stopPropagation()">
                  <span id="editLabel" style="font-size: 14px; margin-right: 6px;">Edit</span>
                  <input type="checkbox" id="switchMode" />
                </div>
              `,
        },
      ],
    };
  },
  provide: {
    diagram: [BpmnDiagrams],
    SymbolPalette: [BpmnDiagrams],
  },
  mounted: function () {
    //fit the diagram to the page with respect to mode and region
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage({ region: 'Content', mode: 'Width' });
    toolbarInstance = this.$refs.toolbarObj.ej2Instances;

    var toolbarObjForToggleSwitch = new Toolbar({
      enableToggle: true,
      items: this.toolbarWithToggleItem,
    });
    toolbarObjForToggleSwitch.appendTo('#diagramtoolbarWithToggleSwitch');

    this.$nextTick(() => {
      // 1. Set the Edit label color to match the toolbar button
      var toolbarButton = document.querySelector('.e-toolbar-item button');
      if (toolbarButton) {
        var buttonStyle = window.getComputedStyle(toolbarButton);
        var buttonColor = buttonStyle.color;
        var editLabel = document.getElementById('editLabel');
        if (editLabel) {
          editLabel.style.color = buttonColor;
        }
      }

      // 2. Initialize the Syncfusion Toggle Switch
      if (window && document.getElementById('switchMode')) {
        var toggleSwitch = new Switch({
          checked: false,
          cssClass: 'custom-switch',
          change: (args) => {
            // You can define applyModeState and updateTooltipContent as methods or global functions
            this.applyModeState(args.checked);
            this.updateTooltipContent(args.checked);
          },
        });
        toggleSwitch.appendTo('#switchMode');
      }
      // 3. Initialize the Syncfusion Tooltip imperatively
      if (
        window &&
        window.ej &&
        window.ej.popups &&
        document.getElementById('switch-container')
      ) {
        var switchTooltip = new ej.popups.Tooltip({
          content: 'Enable Editing',
          target: '#switch-container',
          position: 'TopCenter',
          opensOn: 'Hover',
        });
        switchTooltip.appendTo('#switch-container');
      }
      // Initialize toggle state
      this.applyModeState(false);
      this.updateTooltipContent(false);
    });
    paletteInstance = new SymbolPalette({
      enableAnimation: false,
      showHeader: false,
      width: '100%',
      height: '100%',
      symbolHeight: 45,
      symbolWidth: 45,
      palettes: [
        {
          id: 'bpmn',
          expanded: true,
          symbols: [
            {
              id: 'Start',
              shape: { type: 'Bpmn', shape: 'Event' },
              annotations: [{ content: 'Start' }],
              tooltip: { content: 'Start', relativeMode: 'Object' },
              constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
            {
              id: 'Decision',
              shape: { type: 'Bpmn', shape: 'Gateway' },
              annotations: [{ content: 'Decision' }],
              tooltip: { content: 'Decision', relativeMode: 'Object' },
              constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
            {
              id: 'Task',
              shape: { type: 'Bpmn', shape: 'Activity' },
              annotations: [{ content: 'Task' }],
              tooltip: { content: 'Task', relativeMode: 'Object' },
              constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
            {
              id: 'End',
              shape: {
                type: 'Bpmn',
                shape: 'Event',
                event: { event: 'End', trigger: 'None' },
              },
              annotations: [{ content: 'End' }],
              tooltip: { content: 'End', relativeMode: 'Object' },
              constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
          ],
          iconCss: '',
        },
      ],
      getSymbolInfo: function (symbol) {
        return { fit: true };
      },
      paletteExpanding: function (args) {
        args.cancel = true;
      },
    });
    SymbolPalette.Inject(BpmnDiagrams);
    paletteInstance.appendTo('#symbolPalette');
  },
  methods: {
    onToolbarClicked(args) {
      if (!args.item || !args.item.id) return;
      const diagramInstance = this.$refs.diagramObj.ej2Instances;
      switch (args.item.id) {
        case 'New':
          this.updateExecuteButton('Execute');
          this.clearAnimationIntervals();
          diagramInstance.clear();
          break;
        case 'Open':
          this.$refs.fileInput.click();
          break;
        case 'Save':
          this.saveDiagram();
          break;
        case 'Execute':
        case 'Pause':
        case 'Resume':
          diagramInstance.clearSelection();
          this.startWorkflow();
          break;
        case 'Reset':
          this.resetWorkflow();
          this.updateExecuteButton('Execute');
          break;
        case 'Delete':
          diagramInstance.remove();
          break;
        case 'Select':
          diagramInstance.tool = DiagramTools.MultipleSelect;
          break;
        case 'Pan':
          diagramInstance.tool = DiagramTools.ZoomPan;
          break;
      }
    },
    connectorDefaults(connector, diagram) {
      // Configure the connector with a straight type
      connector.type = 'Straight';
      // connector initial color style, before animation
      connector.style.strokeColor =
        connector.targetDecorator.style.strokeColor =
        connector.targetDecorator.style.fill =
          this.connectorBeforeAnimationColor;
      // connector annotation, that will be animated during the workflow animation
      connector.annotations = [
        {
          content: '',
          height: 16,
          width: 16,
          offset: 0,
          style: { fill: 'transparent', fontSize: 24 },
        },
      ];
      return connector;
    },
    onSelectionChange(args) {
      if (args.state !== 'Changed') return;
      const diagram = this.$refs.diagramObj.ej2Instances;
      const connector = diagram.selectedItems.connectors[0];
      let handle = null;
      for (let i = 0; i < diagram.selectedItems.userHandles.length; i++) {
        if (diagram.selectedItems.userHandles[i].name === 'stopAnimation') {
          handle = diagram.selectedItems.userHandles[i];
          break;
        }
      }
      if (connector && handle) {
        const isStopped =
          connector.addInfo && connector.addInfo.stopAnimation === true;
        handle.pathData = isStopped
          ? 'M2,0 L10,8 L2,16 L2,0 Z' // Play icon
          : 'M5.25,1.25 L8.75,1.25 L8.75,8.75 L5.25,8.75 Z'; // Stop icon
        handle.tooltip.content = isStopped
          ? 'Enable Animation'
          : 'Disable Animation';
        handle.visible = true;
      } else if (handle) {
        handle.visible = false;
      }
    },
    updateTooltipContent(isChecked) {
      this.switchTooltipContent = isChecked
        ? 'Disable Editing'
        : 'Enable Editing';
      if (this.switchTooltip) {
        this.switchTooltip.content = this.switchTooltipContent;
      }
    },
    applyModeState(isEditMode) {
      this.isEditMode = isEditMode;
      const buttonsToToggle = ['Select', 'Delete', 'Save'];
      if (this.$refs.toolbarObj && this.$refs.toolbarObj.ej2Instances) {
        const toolbarInstance = this.$refs.toolbarObj.ej2Instances;
        buttonsToToggle.forEach((id) => {
          // Check if the item exists before enabling/disabling
          const itemIndex = toolbarInstance.items.findIndex(
            (item) => item.id === id
          );
          if (itemIndex !== -1) {
            toolbarInstance.enableItems(itemIndex, isEditMode); // Use index, not selector
          }
        });
        // Hide last separator in toolbar if palette is hidden
        const items = toolbarInstance.items;
        const lastSepIndex = items.findIndex(
          (item, idx) => item.type === 'Separator' && idx > 7
        );
        if (lastSepIndex !== -1) {
          items[lastSepIndex].visible = isEditMode;
        }
      }
      // Show/hide stencil palette
      const palette = document.getElementById('symbolPalette');
      if (palette) {
        palette.style.display = isEditMode ? 'flex' : 'none';
      }
      // Set tool to Pan in view mode
      if (diagramInstance) {
        diagramInstance.tool = isEditMode
          ? DiagramTools.MultipleSelect
          : DiagramTools.ZoomPan;
      }
    },
    updateExecuteButton(state) {
      // Adjust index as needed
      const toolbarObj = this.$refs.toolbarObj.ej2Instances;
      const btn = toolbarObj.items[4];
      const states = {
        Pause: {
          id: 'Pause',
          text: 'Pause',
          tooltipText: 'Pause Workflow',
          prefixIcon: 'e-icons e-pause',
        },
        Resume: {
          id: 'Resume',
          text: 'Resume',
          tooltipText: 'Resume Workflow',
          prefixIcon: 'e-icons e-play',
        },
        Execute: {
          id: 'Execute',
          text: 'Execute',
          tooltipText: 'Start Workflow',
          prefixIcon: 'e-icons e-play',
        },
      };
      const newState = states[state] || states.Execute;
      Object.assign(btn, newState);
      toolbarObj.dataBind();
    },
    startWorkflow() {
      if (!this.isPaused && this.animationIntervals.length) {
        this.isPaused = true;
        this.updateExecuteButton('Resume');
        this.clearAnimationIntervals();
        return;
      }
      if (this.isPaused) {
        this.isPaused = false;
        this.updateExecuteButton('Pause');
        this.resumeWorkflow();
        return;
      }
      this.isPaused = false;
      this.resetWorkflow();
      this.updateExecuteButton('Pause');
      // find the "start" nodes in the diagram
      const startNodes = diagramInstance.nodes.filter(
        (node) =>
          node.shape &&
          node.shape.type === 'Bpmn' &&
          node.shape.shape === 'Event' &&
          node.shape.event.event === 'Start'
      );
      if (startNodes.length === 0) {
        console.error('No start nodes found.');
        return;
      }
      startNodes.forEach((startNode) => {
        this.animateNode(startNode.id);
      });
    },
    clearAnimationIntervals() {
      this.animationIntervals.forEach(clearInterval);
      this.animationIntervals.length = 0;
    },
    saveDiagram() {
      const fileName = 'Diagram.json';
      const diagram = this.$refs.diagramObj.ej2Instances;
      const jsonData = diagram.saveDiagram();
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    resumeWorkflow() {
      diagramInstance.connectors.forEach((connector) => {
        const lastAnn = connector.annotations[connector.annotations.length - 1];
        if (lastAnn && lastAnn.offset > 0 && lastAnn.offset < 0.9) {
          lastAnn.content = '●';
          if (lastAnn.style)
            lastAnn.style.color = this.connectorAnnotationColor;
          const sourceNode = diagramInstance.getObject(connector.sourceID);
          const isStartNode =
            sourceNode &&
            sourceNode.shape &&
            sourceNode.shape.type === 'Bpmn' &&
            sourceNode.shape.shape === 'Event' &&
            sourceNode.shape.event &&
            sourceNode.shape.event.event === 'Start';
          if (
            isStartNode ||
            (sourceNode &&
              sourceNode.style.strokeColor ===
                this.nodeStrokeAfterAnimationColor)
          ) {
            this.animateConnector(connector, (targetId) => {
              const targetNode = diagramInstance.getObject(targetId);
              if (targetNode) {
                this.createLoadingAnimation(targetNode);
                setTimeout(() => {
                  this.completeNodeAnimation(targetNode);
                  this.animateNode(targetId);
                }, 1000);
              }
            });
          }
        }
      });
    },
    resetWorkflow() {
      // Set pause state to false
      this.isPaused = false;
      clearTimeout(this.flowTimeOut1);
      clearTimeout(this.flowTimeOut2);
      this.clearAnimationIntervals();
      document
        .querySelectorAll('.loading-indicator, .tick')
        .forEach((el) => el.remove());

      diagramInstance.nodes.forEach((node) => {
        if (node.style)
          node.style.strokeColor = this.nodeStrokeBeforeAnimationColor;
      });
      diagramInstance.connectors.forEach((connector) => {
        connector.style.strokeColor =
          connector.targetDecorator.style.strokeColor =
          connector.targetDecorator.style.fill =
            this.connectorBeforeAnimationColor;
        connector.annotations.forEach((ann) => {
          ann.offset = 0;
          ann.content = '';
          ann.style.color = this.connectorAnnotationColor;
        });
      });
      diagramInstance.dataBind();
    },
    animateNode(nodeId) {
      // Filter connectors originating from the node
      var currentConnectors = diagramInstance.connectors.filter(
        (conn) => conn.sourceID === nodeId
      );

      currentConnectors.forEach((connector) => {
        // <-- use arrow function here!
        // Check if additional info contains "stopAnimation"
        if (!(connector.addInfo && connector.addInfo.stopAnimation === true)) {
          this.animateConnector(connector, (targetNodeId) => {
            var targetNode = diagramInstance.getObject(targetNodeId);

            // Start loading animation for the target node
            if (targetNode) {
              this.createLoadingAnimation(targetNode);

              this.flowTimeOut1 = setTimeout(() => {
                // Hide all loading indicators
                Array.prototype.slice
                  .call(document.getElementsByClassName('loading-indicator'))
                  .forEach((el) => {
                    el.style.display = 'none';
                  });
                // Show all tick indicators
                Array.prototype.slice
                  .call(document.getElementsByClassName('tick'))
                  .forEach((el) => {
                    el.style.display = 'block';
                  });

                targetNode.style.strokeColor =
                  this.nodeStrokeAfterAnimationColor;
                diagramInstance.dataBind();

                // Check if the target node is a BPMN "End" event node
                if (
                  targetNode.shape &&
                  targetNode.shape.type === 'Bpmn' &&
                  targetNode.shape.shape === 'Event' &&
                  targetNode.shape.event &&
                  targetNode.shape.event.event === 'End'
                ) {
                  this.updateExecuteButton('Execute');
                  this.animationIntervals.length = 0;
                } else {
                  this.animateNode(targetNodeId);
                }
              }, 1000);
            }
          });
        }
      });
    },
    animateConnector(connector, callback) {
      var lastAnn = connector.annotations[connector.annotations.length - 1];
      lastAnn.offset = lastAnn.offset || 0.02;
      lastAnn.content = '●';
      lastAnn.style.color = this.connectorAnnotationColor;
      diagramInstance.dataBind();

      // Use arrow function here!
      var flowInterval = setInterval(() => {
        if (this.isPaused) {
          return;
        }
        if (lastAnn.offset < 0.9) {
          lastAnn.offset += 0.025;
          connector.style.strokeColor =
            connector.targetDecorator.style.strokeColor =
            connector.targetDecorator.style.fill =
              this.connectorDuringAnimationColor;
          diagramInstance.dataBind();
        } else {
          clearInterval(flowInterval);
          lastAnn.style.color = 'transparent';
          connector.style.strokeColor =
            connector.targetDecorator.style.strokeColor =
            connector.targetDecorator.style.fill =
              this.connectorAfterAnimationColor;
          diagramInstance.dataBind();
          callback(connector.targetID);
        }
      }, 120);

      this.animationIntervals.push(flowInterval);
    },
    createLoadingAnimation(targetNode) {
      if (!targetNode || !targetNode.annotations) {
        return;
      }
      // HTML template for the loading animation and a hidden tick indicator
      var htmlTemplate =
        '<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; margin-left: -3px; margin-top: -3px;"><div class="loading-indicator"></div><div class="tick" style="display: none;"><i class="e-icons e-check"></i></div></div>';

      // adding annotation with the template to the node
      var annotation = {
        template: htmlTemplate,
        offset: { x: 0, y: 0 },
        verticalAlignment: 'Top',
        horizontalAlignment: 'Left',
        style: { fill: 'transparent' },
      };

      diagramInstance.addLabels(targetNode, [annotation]);
    },
    completeNodeAnimation(node) {
      // Hide all loading indicators
      document.querySelectorAll('.loading-indicator').forEach(function (el) {
        el.style.display = 'none';
      });

      // Display all tick elements as visible
      document.querySelectorAll('.tick').forEach(function (el) {
        el.style.display = 'block';
      });

      // Update the stroke color for the node to indicate completion
      if (node.style) {
        node.style.strokeColor = this.nodeStrokeAfterAnimationColor;
      }

      // Update the diagram to reflect changes
      diagramInstance.dataBind();
    },
    onFileChange(event) {
      const diagram = this.$refs.diagramObj.ej2Instances;
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const json = JSON.parse(evt.target.result);
        diagram.loadDiagram(json);
        diagram.fitToPage({ region: 'Content', mode: 'Width' });
        this.updateExecuteButton('Execute');
        this.clearAnimationIntervals();
        diagram.tool = DiagramTools.ZoomPan;
        this.$refs.fileInput.value = '';
      };
      reader.readAsText(file);
    },
  },
};
//sets node default value
function nodeDefaults(node, diagram) {
  node.constraints =
    (NodeConstraints.Default & ~NodeConstraints.Rotate) |
    NodeConstraints.HideThumbs;
  // Set default width and height
  if (typeof node.width === 'undefined' || typeof node.height === 'undefined') {
    var dimensions = {
      Event: { width: 60, height: 60 },
      Gateway: { width: 90, height: 70 },
      Activity: { width: 90, height: 50 },
    };
    var shapeType = node.shape.shape;
    if (typeof node.width === 'undefined') {
      node.width = dimensions[shapeType].width;
    }
    if (typeof node.height === 'undefined') {
      node.height = dimensions[shapeType].height;
    }
  }
  return node;
}
</script>
