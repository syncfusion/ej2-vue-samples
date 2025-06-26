<template>
  <div class="control-section diagram-container-sample">
    <div class="diagram-toolbar-container">
      <ejs-toolbar
        id="toolbarEditor"
        ref="toolbarEditorobj"
        :clicked="toolbarclicked"
      >
        <e-items>
          <e-item
            :template="fontStyle"
            id="fontStyle"
            tooltipText="Font Style"
            type="Input"
            disabled="true"
          ></e-item>
          <e-item type="Separator" id="separator3"></e-item>
          <!-- Font size customization -->
          <e-item
            :template="fontSize"
            id="fontSize"
            tooltipText="Font Size"
            disabled="true"
          ></e-item>
          <!-- Text formatting buttons -->
          <e-item
            id="bold"
            prefixIcon="e-icons e-bold"
            tooltipText="Bold"
            type="Button"
            disabled="true"
          ></e-item>
          <e-item
            id="italic"
            prefixIcon="e-icons e-italic"
            tooltipText="Italic"
            type="Button"
            disabled="true"
          ></e-item>
          <e-item
            id="underline"
            prefixIcon="e-icons e-underline"
            tooltipText="Underline"
            type="Button"
            disabled="true"
          ></e-item>
          <!--Text Color dropdown  -->
          <e-item
            id="colorPicker"
            :template="colorPicker"
            disabled="true"
          ></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <div class="content-wrapper">
      <ejs-diagram
        style="display: block"
        ref="diagramObj"
        id="diagram"
        :width="width"
        :height="height"
        :nodes="nodes"
        :connectors="connectors"
        :constraints="constraints"
        :rulerSettings="rulerSettings"
        :selectionChange="selectionChange"
      ></ejs-diagram>
    </div>
  </div>
  <div id="action-description">
    <p>
      This sample visualizes a structured process flow by grouping related
      elements using built-in container shapes.
    </p>
  </div>
  <div id="description">
    <p>
      This sample demonstrates how a process can be organized using containers
      that group related elements together. Setting the
      <code>type</code> property of a shape to Container enables the grouping
      behavior. Nodes can be added inside the container using the
      <code>children</code> property. Additionally, containers can be created
      interactively by dragging container shapes from the symbol palette into
      the diagram.
    </p>
  </div>
</template>

<script>
import { createApp } from 'vue';
import {
  UndoRedo,
  DiagramComponent,
  ConnectorBridging,
  DiagramConstraints,
} from '@syncfusion/ej2-vue-diagrams';
import {
  NumericTextBox,
  NumericTextBoxComponent,
} from '@syncfusion/ej2-vue-inputs';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { ColorPicker, ColorPickerComponent } from '@syncfusion/ej2-vue-inputs';
import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
  Toolbar,
  ClickEventArgs,
} from '@syncfusion/ej2-vue-navigations';
import { ComboBoxComponent } from '@syncfusion/ej2-vue-dropdowns';
let diagramInstance;
let toolbarInstance;

const fontTypeCollection = [
  { type: 'Arial', text: 'Arial' },
  { type: 'Aharoni', text: 'Aharoni' },
  { type: 'Bell MT', text: 'Bell MT' },
  { type: 'Fantasy', text: 'Fantasy' },
  { type: 'Segoe UI', text: 'Segoe UI' },
  { type: 'Times New Roman', text: 'Times New Roman' },
  { type: 'Verdana', text: 'Verdana' },
];

//Disable toolbar items for multi-selected elements based on their annotations.
function disableMultiselectedItems(selectedItems) {
  // Iterate through selected items
  for (let i = 0; i < selectedItems.length; i++) {
    // Check if the selected item has annotations
    if (selectedItems[i].annotations[0] !== undefined || selectedItems[i].shape.header.annotation) {
      // Enable toolbar items for annotation-related functionalities
      toolbarInstance.items.find(
        (item) => item.id === 'fontStyle'
      ).disabled = false;
      toolbarInstance.items.find(
        (item) => item.id === 'fontSize'
      ).disabled = false;
      toolbarInstance.items.find((item) => item.id === 'bold').disabled = false;
      toolbarInstance.items.find(
        (item) => item.id === 'italic'
      ).disabled = false;
      toolbarInstance.items.find(
        (item) => item.id === 'underline'
      ).disabled = false;
      toolbarInstance.items.find(
        (item) => item.id === 'colorPicker'
      ).disabled = false;
    } else {
      // Disable toolbar items for annotation-related functionalities
      toolbarInstance.items.find(
        (item) => item.id === 'fontStyle'
      ).disabled = true;
      toolbarInstance.items.find(
        (item) => item.id === 'fontSize'
      ).disabled = true;
      toolbarInstance.items.find((item) => item.id === 'bold').disabled = true;
      toolbarInstance.items.find(
        (item) => item.id === 'italic'
      ).disabled = true;
      toolbarInstance.items.find(
        (item) => item.id === 'underline'
      ).disabled = true;
      toolbarInstance.items.find(
        (item) => item.id === 'colorPicker'
      ).disabled = true;
    }
  }
}
// Function to initialize a node
function createNode(id, x, y, height, width, content, marginX, marginY) {
  let ports = [];

  if (id === 'node5') {
    ports.push({ id: 'port1', offset: { x: 0.9, y: 0 } });
  }
  if (id === 'node6') {
    ports.push({ id: 'port1', offset: { x: 0.9, y: 0 } });
  }
  if (id === 'node13') {
    ports.push({ id: 'port2', offset: { x: 1, y: 0.5 } });
  }
  if (id === 'node15') {
    ports.push({ id: 'port2', offset: { x: 1, y: 0.5 } });
  }
  if (id === 'node3') {
    ports.push(
      { id: 'port3', offset: { x: 0.25, y: 1 } },
      { id: 'port4', offset: { x: 0.5, y: 1 } },
      { id: 'port5', offset: { x: 0.75, y: 1 } }
    );
  }
  if (id === 'node7') {
    ports.push(
      { id: 'port1', offset: { x: 0, y: 0.5 } },
      { id: 'port2', offset: { x: 1, y: 0.5 } }
    );
  }
  if (id === 'node8') {
    ports.push(
      { id: 'port3', offset: { x: 0.25, y: 1 } },
      { id: 'port5', offset: { x: 0.75, y: 1 } }
    );
  }

  return {
    id: id,
    offsetX: x,
    offsetY: y,
    margin: { left: marginX || 0, top: marginY || 0 },
    width: width,
    height: height,
    style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
    shape: {
      type: 'Basic',
      shape: 'Rectangle',
      cornerRadius: 4,
    },
    annotations: [
      {
        content: content,
        style: { color: '#343434' },
        horizontalAlignment: 'Center',
      },
    ],
    ports: ports,
  };
}
// Function to create connectors
function createConnector(
  id,
  sourceID,
  targetID,
  sourcePortID,
  targetPortID,
  sourceDecorator
) {
  return {
    id: id,
    type: 'Orthogonal',
    sourceID: sourceID,
    targetID: targetID,
    sourcePortID: sourcePortID,
    targetPortID: targetPortID,
    style: { strokeColor: '#5E5E5E', strokeWidth: 1 },
    sourceDecorator: sourceDecorator,
    targetDecorator: {
      style: {
        fill: '#5E5E5E',
        strokeColor: '#5E5E5E',
        strokeWidth: 1,
      },
    },
  };
}
//Initializes the nodes for the diagram.
let nodes = [
  createNode('node1', 300, 300, 60, 100, 'HTTP Traffic'),
  createNode('node2', 500, 300, 60, 100, 'Ingestion service', 50, 30),
  createNode('node3', 650, 300, 60, 100, 'Workflow service', 200, 30),
  createNode('node4', 500, 415, 60, 100, 'Package service', 50, 150),
  createNode('node5', 650, 415, 60, 150, 'Drone Scheduler service', 175, 150),
  createNode('node6', 800, 415, 60, 100, 'Delivery service', 350, 150),
  createNode('node7', 580, 130, 60, 90, 'Azure Service Bus'),
  createNode('node8', 815, 130, 60, 100, 'Managed Identities'),
  createNode('node9', 1000, 130, 60, 100, 'Azure Key Vault'),
  createNode('node10', 500, 550, 60, 100, 'Azure Cosmos DB for MongoDB API'),
  createNode('node11', 650, 550, 60, 100, 'Azure Cosmos DB'),
  createNode('node12', 800, 550, 60, 100, 'Azure Cache for Redis'),
  createNode('node13', 1040, 255, 60, 100, 'Azure Application Insights'),
  createNode('node14', 1140, 350, 60, 100, 'Azure Monitor'),
  createNode('node15', 1040, 445, 60, 100, 'Azure Log Analytics workspace'),
  {
    id: 'container',
    width: 520,
    height: 300,
    offsetX: 660,
    offsetY: 350,
    shape: {
      type: 'Container',
      header: {
        annotation: {
          content: 'Azure Container Apps Environment',
          style: {
            fontSize: 18,
            bold: true,
            fill: 'transparent',
            strokeColor: 'transparent',
          },
        },
        height: 40,
        style: {
          fontSize: 18,
          bold: true,
          fill: 'transparent',
          strokeColor: 'transparent',
        },
      },
      children: ['node2', 'node3', 'node4', 'node5', 'node6'],
    },
    style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 },
  },
];
const sourceDecorator = {
  shape: 'Arrow',
  style: {
    fill: '#5E5E5E',
    strokeColor: '#5E5E5E',
    strokeWidth: 1,
  },
};
let connectors = [
  createConnector('connector1', 'node1', 'node2'),
  createConnector('connector2', 'node4', 'node10'),
  createConnector('connector3', 'node5', 'node11'),
  createConnector('connector4', 'node6', 'node12'),
  createConnector('connector5', 'node8', 'node9'),
  createConnector('connector6', 'container', 'node13'),
  createConnector('connector7', 'container', 'node15'),
  createConnector('connector8', 'node3', 'node4', 'port3'),
  createConnector('connector9', 'node3', 'node5', 'port4'),
  createConnector('connector10', 'node3', 'node6', 'port5'),
  createConnector('connector11', 'node2', 'node7', '', 'port1'),
  createConnector('connector12', 'node7', 'node3', 'port2'),
  createConnector('connector13', 'node13', 'node14', 'port2'),
  createConnector('connector14', 'node15', 'node14', 'port2'),
  createConnector(
    'connector16',
    'node8',
    'node5',
    'port3',
    'port1',
    sourceDecorator
  ),
  createConnector(
    'connector17',
    'node8',
    'node6',
    'port5',
    'port1',
    sourceDecorator
  ),
];
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-combobox': ComboBoxComponent,
  },
  data: function () {
    return {
      width: '100%',
      height: '700px',
      nodes: nodes,
      connectors: connectors,
      constraints: DiagramConstraints.Default | DiagramConstraints.Bridging,
      rulerSettings: {
        showRulers: true,
      },
      selectionChange: (args) => {
        if (args.state === 'Changed') {
          var selectedItems = diagramInstance.selectedItems.nodes;
          selectedItems = selectedItems.concat(
            diagramInstance.selectedItems.connectors
          );
          // Disabling toolbar items when no items are selected
          if (selectedItems.length === 0) {
            for (var i = 0; i < toolbarInstance.items.length; i++) {
              var itemId = toolbarInstance.items[i].id;
              if (
                itemId === 'bold' ||
                itemId === 'italic' ||
                itemId === 'underline' ||
                itemId === 'fontStyle' ||
                itemId === 'fontSize' ||
                itemId === 'colorPicker'
              ) {
                toolbarInstance.items[i].disabled = true;
              }
            }
          }
          if (selectedItems.length === 1) {
            disableMultiselectedItems(selectedItems);
          }
          // Handling multiple items selection
          if (selectedItems.length > 1) {
            disableMultiselectedItems(selectedItems);
          }
        }
      },
      // Function Renders a dropdown component for selecting font Style.
      fontStyle: function () {
        return {
          template: createApp({}).component('fontStyle', {
            template:
              ' <ejs-combobox id="fontStyle" :dataSource="fontTypeList" :select="fontFamily" :fields="fontfamilyfields" :index="fontfamilyindex"></ejs-combobox>',
            components: {
              'ejs-combobox': ComboBoxComponent,
            },
            data() {
              return {
                fontTypeList: [
                  { type: 'Arial', text: 'Arial' },
                  { type: 'Aharoni', text: 'Aharoni' },
                  { type: 'Bell MT', text: 'Bell MT' },
                  { type: 'Fantasy', text: 'Fantasy' },
                  { type: 'Segoe UI', text: 'Segoe UI' },
                  { type: 'Times New Roman', text: 'Times New Roman' },
                  { type: 'Verdana', text: 'Verdana' },
                ],
                fontFamily: function (args) {
                  updateAnnotationValue('fontfamily', null, args.itemData.text);
                },
                fontfamilyfields: { value: 'type', text: 'text' },
                fontfamilyindex: 1,
              };
            },
          }),
        };
      },

      //Function Renders a numeric text box component for selecting font size.
      fontSize: function () {
        return {
          template: createApp({}).component('fontSize', {
            template:
              '<ejs-numerictextbox id="range" :value="12" format="##.##" :step="2" :min="1" :max="30" width="110px" :change="fontSizeChange"></ejs-numerictextbox>',
            components: {
              'ejs-numerictextbox': NumericTextBoxComponent,
            },
            data() {
              return {
                fontSizeChange: function (args) {
                  updateAnnotationValue('fontsize', args.value);
                },
              };
            },
          }),
        };
      },

      //Function Renders a Color selector component for selecting font color.
      colorPicker: function () {
        return {
          template: createApp({}).component('colorPicker', {
            template:
              '<ejs-colorpicker id="color-picker" type="color" value="#000" :change="colorChange"></ejs-colorpicker>',
            components: {
              'ejs-colorpicker': ColorPickerComponent,
            },
            data() {
              return {
                colorChange: function (args) {
                  const selectedItems = [
                    ...diagramInstance.selectedItems.nodes,
                    ...diagramInstance.selectedItems.connectors,
                  ];
                  for (let i = 0; i < selectedItems.length; i++) {
                    var node = selectedItems[i];
                    const annotations =
                    node.shape.type === 'Container'
                      ? [node.shape.header.annotation]
                      : node.annotations || [];
                    for (let j = 0; j < annotations.length; j++) {
                     annotations[j].style.color = args.currentValue.rgba;
                      diagramInstance.dataBind();
                    }
                  }
                },
              };
            },
          }),
        };
      },
      // Method to handle toolbar item clicks
      toolbarclicked: (args) => {
        let item = args.item.tooltipText;
        switch (item) {
          // Group selected items
          // Toggle bold style for selected annotation(s)
          case 'Bold':
            updateAnnotationValue('bold', args.value, null, 11, true);
            break;
          // Toggle italic style for selected annotation(s)
          case 'Italic':
            updateAnnotationValue('italic', args.value, null, 12, true);
            break;
          // Toggle underline style for selected annotation(s)
          case 'Underline':
            updateAnnotationValue('underline', args.value, null, 13, true);
            break;
        }
        diagramInstance.dataBind();
      },
    };
  },
  provide: {
    diagram: [UndoRedo, ConnectorBridging],
  },
  mounted: function () {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    toolbarInstance = this.$refs.toolbarEditorobj.ej2Instances;
    diagramInstance.fitToPage();
  },
};
function updateAnnotationValue(
  value,
  fontSizeChange,
  fontType,
  index,
  isSelected
) {
  const selectedItems = [
    ...diagramInstance.selectedItems.nodes,
    ...diagramInstance.selectedItems.connectors,
  ];
  for (let i = 0; i < selectedItems.length; i++) {
    const node = selectedItems[i];

    const annotations =
      node.shape.type === 'Container'
        ? [node.shape.header.annotation]
        : node.annotations || [];
    for (let j = 0; j < annotations.length; j++) {
      var annotationstyle = annotations[j].style;
      if (value === 'fontsize') {
        annotationstyle.fontSize = fontSizeChange;
      } else if (value === 'fontfamily') {
        annotationstyle.fontFamily = fontType.toString();
      } else if (value === 'bold') {
        annotationstyle.bold = !annotationstyle.bold;
        isSelected = annotationstyle.bold;
      } else if (value === 'italic') {
        annotationstyle.italic = !annotationstyle.italic;
        isSelected = annotationstyle.italic;
      } else if (value === 'underline') {
        if (annotationstyle.textDecoration === 'None') {
          annotationstyle.textDecoration = 'Underline';
          isSelected = true;
        } else {
          annotationstyle.textDecoration = 'None';
          isSelected = false;
        }
      }
      if (toolbarInstance.items[index] !== undefined) {
        var cssClass = toolbarInstance.items[index].cssClass;
        toolbarInstance.items[index].cssClass = isSelected
          ? cssClass + ' tb-item-selected'
          : cssClass.replace(' tb-item-selected', '');
        toolbarInstance.dataBind();
      }
    }

    diagramInstance.dataBind();
  }
}
</script>
<style>
/* For toolbar width and height */
.diagram-toolbar-container {
  width: 100%;
  height: 50px;
}
</style>
