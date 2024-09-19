<!-- Sample for Grouping and Ordering -->

<!-- Template for Grouping and Ordering -->
<template>
  <div class="control-section">
    <div>
      <!-- Toolbar section -->
      <ejs-toolbar id="toolbar_default" ref="toolbar_diagram" :clicked='toolbarclicked'>
        <e-items>
          <!-- Group and Ungroup buttons -->
          <e-item id="Group" prefixIcon="e-icons e-group-1" tooltipText="Group" type="Button" disabled="true"></e-item>
          <e-item id="unGroup" prefixIcon="e-icons e-ungroup-1" tooltipText="UnGroup" type="Button" disabled="true"></e-item>
          <e-item type="Separator" id='separator1'></e-item>
          <!-- Order buttons -->
          <e-item id="bringForward" prefixIcon="e-icons e-bring-forward" tooltipText="Bring Forward" type="Button"
            disabled="true"></e-item>
          <e-item id="bringToFront" prefixIcon="e-icons e-bring-to-front" tooltipText="Bring To Front" type="Button"
            disabled="true"></e-item>
          <e-item id="sendBackward" prefixIcon="e-icons e-send-backward" tooltipText="Send Backward" type="Button"
            disabled="true"></e-item>
          <e-item id="sendToBack" prefixIcon="e-icons e-send-to-back" tooltipText="Send To Back" type="Button" disabled="true"></e-item>
          <e-item type="Separator" id='separator2'></e-item>
          <!-- Font style customization -->
          <e-item :template="fontStyle" id="fontStyle" tooltipText="Font Style" type="Input" disabled="true"></e-item>
          <e-item type="Separator" id='separator3'></e-item>
          <!-- Font size customization -->
          <e-item :template="fontSize" id='fontSize' tooltipText="Font Size" disabled="true"></e-item>
          <!-- Text formatting buttons -->
          <e-item id="bold" prefixIcon="e-icons e-bold" tooltipText="Bold" type="Button" disabled="true"></e-item>
          <e-item id="italic"  prefixIcon="e-icons e-italic" tooltipText="Italic" type="Button" disabled="true"></e-item>
          <e-item id="underline" prefixIcon="e-icons e-underline" tooltipText="Underline" type="Button" disabled="true"></e-item>
          <!--Text Color dropdown  -->
          <e-item id="colorPicker" :template="colorPicker" disabled="true"></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <!-- Diagram and Symbol Palette sections -->
    <div style="width:100%">
      <div class="sb-mobile-palette-bar">
        <div id="palette-icon" ref="palette_icon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
      </div>
      <!-- Symbol Palette component -->
      <div id="palette-space" ref="palette_space" class="sb-mobile-palette">
        <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :width='palettewidth' :height='paletteheight'
          :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin'
          :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
      </div>
      <!-- Diagram component -->
      <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height'
          :nodes='nodes' :getNodeDefaults='getNodeDefaults' :rulerSettings='rulerSettings' 
          :selectionChange='selectionChange' :getCustomTool='getCustomTool'
          :selectedItems='selectedItems' :drawingObject='drawingObject'></ejs-diagram>
      </div>
    </div>
    <!-- Descriptions for the Action and the Diagram -->
    <div id="action-description">
      <p>
        This sample illustrates how to group, ungroup, and order commands with the diagram.
      </p>
    </div>
    <div id="description">
      <p>
        The <code>group</code> method groups diagram nodes and connectors into a single entity.</p>
      <p>The <code>unGroup</code> method ungroups nodes and/or connectors that have been previously grouped
        together
        using the group method.</p>
      <p>The <code>moveForward</code> and <code>bringToFront</code> methods adjust the visual order of nodes or
        connectors within a diagram. This method takes a single parameter that specifies the node or connector
        that you
        want to bring forward in the order.</p>
      <p>The <code>sendBackward</code> and <code>sendToBack</code> method allows you to send a selected object to
        the
        back of the z-order (the order in which objects are stacked on top of one another).</p>
      <p> In this sample, node annotation styles such as font family, font size, bold, italic, underline, and
        fontcolor
        can be customized.</p>
    </div>
  </div>
</template>

<style scoped>
/*To align palette */
.sb-mobile-palette {
  width: 240px;
  height: 100%;
  float: left;
}

.sb-mobile-palette-bar {
  display: none;
}

/*To align diagram */
.sb-mobile-diagram {
  width: calc(100% - 242px);
  height: 100%;
  float: left;
}

.sb-bpmn-editor {
  border-color: rgba(0, 0, 0, 0.12);
  border-width: 1px 1px 1px 0px;
  border-style: solid;
}

@media (max-width: 550px) {
  .sb-bpmn-editor {
    border-width: 0px 1px 1px;
  }

  .sb-mobile-palette {
    z-index: 19;
    position: absolute;
    display: none;
    transition: transform 300ms linear, visibility 0s linear 300ms;
    width: 39%;
    height: 100%;
  }

  .sb-mobile-palette-bar {
    display: block;
    width: 100%;
    background: #fafafa;
    padding: 10px 10px;
    border: 0.5px solid #e0e0e0;
    min-height: 40px;
  }

  .sb-mobile-diagram {
    width: 100%;
    height: 100%;
    float: left;
    left: 0px;
  }

  #palette-icon {
    font-size: 20px;
  }
}

.sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}
</style>

<script>
// Import necessary components and modules
import { createApp } from "vue";
import {
  DiagramComponent,
  SymbolPaletteComponent,
  SelectorConstraints,
  Node
} from "@syncfusion/ej2-vue-diagrams";
import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
  Toolbar,
  ClickEventArgs
} from "@syncfusion/ej2-vue-navigations";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { ColorPickerComponent } from "@syncfusion/ej2-vue-inputs";

let isMobile;
let drawingNode;
let diagramInstance;
let toolbarInstance;
let paletteIconInstance;
let paletteSpaceInstance;
// Function to create a node with default settings
function createNode(id, offsetX, offsetY, width, height, shape, annotations = [], cornerRadius = 0) {
  return {
    id: id,
    offsetX: offsetX,
    offsetY: offsetY,
    width: width,
    height: height,
    shape: { type: "Basic", shape, cornerRadius: cornerRadius },
    annotations: annotations,
  }
};

// Function to create a group node with default settings
function groupNode(id, children, padding, annotations) {
  return {
    id: id,
    children: children,
    padding: padding,
    annotations: annotations,
    style: { strokeWidth: 0, fill: 'white', strokeColor: 'transparent' }
  }
};

// Initialize nodes for the diagram.
let nodes = [
  createNode('Diamond', 350, 250, 100, 100, 'Diamond', [{ content: 'Decision' }]),
  createNode('ellipse', 150, 250, 100, 60, 'Ellipse', [{ content: 'Start/Stop' }]),
  createNode('rectangle', 150, 400, 100, 60, 'Rectangle', [{ content: 'Process' }]),
  createNode('node1', 150, 100, 100, 60, 'Rectangle'),
  createNode('node2', 350, 100, 90, 60, 'Rectangle', [], 5),
  groupNode('group', ['node1', 'node2'], { left: 10, right: 10, top: 10, bottom: 10 }, [{ content: 'Group 1' }])
];

// Function to create a Basic Shapes with default settings
function createBasicShape(id, shape) {
  return {
    id: id,
    shape: { type: "Basic", shape },
    style: { strokeWidth: 2 }
  }
};

// Initialize basic shapes for the diagram.
let basicShapes = [
  createBasicShape('Rectangle', 'Rectangle'),
  createBasicShape('Ellipse', 'Ellipse'),
  createBasicShape('Hexagon', 'Hexagon'),
  createBasicShape('Parallelogram', 'Parallelogram'),
  createBasicShape('Triangle', 'Triangle'),
  createBasicShape('Plus', 'Plus'),
  createBasicShape('Star', 'Star'),
  createBasicShape('Pentagon', 'Pentagon'),
  createBasicShape('Heptagon', 'Heptagon'),
  createBasicShape('Octagon', 'Octagon'),
  createBasicShape('Trapezoid', 'Trapezoid'),
  createBasicShape('Decagon', 'Decagon'),
  createBasicShape('RightTriangle', 'RightTriangle'),
  createBasicShape('Cylinder', 'Cylinder'),
  createBasicShape('Diamond', 'Diamond')
];

//Initializes the user handles for the diagram.
let handles = [
  {
    name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z', tooltip: { content: 'Clone' },
    visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
  },
  {
    name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z', tooltip: { content: 'Delete' },
    visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
  },
  {
    name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z', tooltip: { content: 'Draw' },
    visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
  },
];

//  Export the default object for Vue component
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-combobox': ComboBoxComponent,
    'ejs-numerictextbox': NumericTextBoxComponent
  },
  data: function () {
    return {
      width: "100%",
      height: "700px",
      nodes: nodes,
      created: (args) => {
        addEvents();
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        node.height = 50;
        return node;
      },
      
      selectedItems: {
        userHandles: handles
      },
      drawingObject: { type: 'Orthogonal' },
      getCustomTool: getTool,
      rulerSettings: {
        showRulers: true
      },
      // Handles the selection change event in the diagram.
      selectionChange: (args) => {
        if (args.state === "Changed") {
          var selectedItems = diagramInstance.selectedItems.nodes;
          selectedItems = selectedItems.concat(diagramInstance.selectedItems.connectors);

          // Disabling toolbar items when no items are selected
          if (selectedItems.length === 0) {
            for (var i = 0; i < toolbarInstance.items.length; i++) {
              var itemId = toolbarInstance.items[i].id;
              if (itemId === "Group" || itemId === "unGroup" || itemId === "bringForward" || itemId === "bringToFront" ||
                itemId === "sendBackward" || itemId === "sendToBack" || itemId === "bold" || itemId === "italic" ||
                itemId === "underline" || itemId === "fontStyle" || itemId === "fontSize" || itemId === "colorPicker") {
                toolbarInstance.items[i].disabled = true;
              }
            }
          }

          // Handling single item selection
          if (selectedItems.length === 1) {
            enableItems();
            disableMultiselectedItems(selectedItems);

            // Enabling or disabling specific toolbar items based on selection type
            if (selectedItems[0].children !== undefined && selectedItems[0].children.length > 0) {
              toolbarInstance.items.find(item => item.id === 'unGroup').disabled = false;
              disableMultiselectedItems(selectedItems);
            }
            else {
              toolbarInstance.items.find(item => item.id === 'unGroup').disabled = true;
            }
          }

          // Handling multiple items selection
          if (selectedItems.length > 1) {
            enableItems();
            toolbarInstance.items.find(item => item.id === 'Group').disabled = false;
            toolbarInstance.items.find(item => item.id === 'unGroup').disabled = true;
            disableMultiselectedItems(selectedItems);
          }

          // Handling specific scenarios when nodes are selected
          if (args.newValue.length > 0 && args.newValue[0] instanceof Node) {
            diagramInstance.selectedItems = { constraints: SelectorConstraints.All | SelectorConstraints.UserHandle, userHandles: handles };

            // Manipulating selected nodes and their properties
            if (diagramInstance.selectedItems.nodes.length > 0) {
              drawingNode = diagramInstance.selectedItems.nodes[diagramInstance.selectedItems.nodes.length - 1];
            }
          }

          // Resetting selection constraints when other types are selected
          else {
            diagramInstance.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle };
          }
        }
      },

      // Function Renders a dropdown component for selecting font Style.
      fontStyle: function () {
        return {
          template: createApp({}).component("fontStyle", {
            template:
              ' <ejs-combobox id="fontStyle" :dataSource="fontTypeList" :select="fontFamily" :fields="fontfamilyfields" :index="fontfamilyindex"></ejs-combobox>',
            components: {
              'ejs-combobox': ComboBoxComponent
            },
            data() {
              return {
                fontTypeList: [
                  { type: "Arial", text: "Arial" },
                  { type: "Aharoni", text: "Aharoni" },
                  { type: "Bell MT", text: "Bell MT" },
                  { type: "Fantasy", text: "Fantasy" },
                  { type: "Segoe UI", text: "Segoe UI" },
                  { type: "Times New Roman", text: "Times New Roman" },
                  { type: "Verdana", text: "Verdana" }
                ],
                fontFamily: function (args) {
                  updateAnnotationValue("fontfamily", null, args.itemData.text);
                },
                fontfamilyfields: { value: "type", text: "text" },
                fontfamilyindex: 1,
              }
            }
          })
        };
      },

      //Function Renders a numeric text box component for selecting font size.
      fontSize: function () {
        return {
          template: createApp({}).component("fontSize", {
            template:
              '<ejs-numerictextbox id="range" :value="12" format="##.##" :step="2" :min="1" :max="30" width="110px" :change="fontSizeChange"></ejs-numerictextbox>',
            components: {
              'ejs-numerictextbox': NumericTextBoxComponent
            },
            data() {
              return {
                fontSizeChange: function (args) {
                  updateAnnotationValue('fontsize', args.value);
                },
              }
            }
          })
        };
      },

      //Function Renders a Color selector component for selecting font color.
      colorPicker: function () {
        return {
          template: createApp({}).component("colorPicker", {
            template:
              '<ejs-colorpicker id="color-picker" type="color" value="#000" :change="colorChange"></ejs-colorpicker>',
            components: {
              'ejs-colorpicker': ColorPickerComponent
            },
            data() {
              return {
                colorChange: function (args) {
                  for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
                    var nodes = diagramInstance.selectedItems.nodes[i];
                    for (let j = 0; j < nodes.annotations.length; j++) {
                      nodes.annotations[j].style.color = args.currentValue.rgba;
                      diagramInstance.dataBind();
                    }
                  }
                },
              }
            }
          })
        };
      },

      // Method to handle toolbar item clicks
      toolbarclicked: (args) => {
        let item = args.item.tooltipText;
        switch (item) {
          // Group selected items
          case 'Group':
          diagramInstance.group();
            toolbarInstance.items.find(item => item.id === 'Group').disabled = true;
            toolbarInstance.items.find(item => item.id === 'unGroup').disabled = false;
            break;
          // Ungroup selected items
          case 'UnGroup':
          diagramInstance.unGroup();
            break;
          // Bring selected item(s) forward
          case 'Bring Forward':
          diagramInstance.moveForward();
            break;
          // Bring selected item(s) to front
          case 'Bring To Front':
          diagramInstance.bringToFront();
            break;
          // Send selected item(s) backward
          case 'Send Backward':
          diagramInstance.sendBackward();
            break;
          // Send selected item(s) to back
          case 'Send To Back':
          diagramInstance.sendToBack();
            break;
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
    
      //Sets the Node style for DragEnter element.
      dragEnter: (args) => {
        let node = args.element;
        if (node && node.width && node.height) {
          let width = node.width;
          let height = node.height;
          let ratio = 100 / node.width;
          node.width = 100;
          node.height *= ratio;
          if (node.offsetX) node.offsetX += (node.width - width) / 2;
          if (node.offsetY) node.offsetY += (node.height - height) / 2;
          node.style = { fill: "#357BD2", strokeColor: "white" };
        }
      },
      expandMode: "Multiple",
      palettes: [
        {
          id: "basic",
          expanded: true,
          symbols: basicShapes,
          iconCss: "shapes",
          title: "Basic Shapes"
        },
      ],
      palettewidth: "100%",
      paletteheight: "700px",
      symbolHeight: 60,
      symbolWidth: 60,
      palettegetNodeDefaults: (symbol) => {
        var node = symbol;
        if (node.id === 'terminator' || node.id === 'process') {
          node.width = 80;
          node.height = 50;
        }
        else if (node.id === 'decision' || node.id === 'document' || node.id === 'preDefinedProcess' ||
          node.id === 'paperTap' || node.id === 'directData' || node.id === 'multiDocument' || node.id === 'data') {
          node.width = 50;
          node.height = 50;
        }
        else {
          node.width = 50;
          node.height = 50;
        }
        node.style.strokeColor = '#757575';
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      },
    };
  },

  mounted: function () {
    diagramInstance = this.$refs.diagramObject.ej2Instances;
    toolbarInstance = this.$refs.toolbar_diagram.ej2Instances;
    paletteIconInstance = this.$refs.palette_icon.ej2Instances;
    paletteSpaceInstance = this.$refs.palette_space.ej2Instances;

  },

};
// Function to add events
function addEvents() {
  // Check if device is mobile
  isMobile = window.matchMedia('(max-width:550px)').matches;
  if (isMobile) {
    if (paletteIconInstance) {
      paletteIconInstance.addEventListener('click', openPalette, false);
    }
  }
}
// Function to open palette
function openPalette() {
  isMobile = window.matchMedia('(max-width:550px)').matches;
  if (isMobile) {
    if (!paletteSpaceInstance.classList.contains('sb-mobile-palette-open')) {
      // Open palette
      paletteSpaceInstance.classList.add('sb-mobile-palette-open');
    } else {
      // Close palette
      paletteSpaceInstance.classList.remove('sb-mobile-palette-open');
    }
  }
}
//Enable toolbar items for specific functionalities.
function enableItems() {
  toolbarInstance.items.find(item => item.id === 'bringForward').disabled = false;
  toolbarInstance.items.find(item => item.id === 'bringToFront').disabled = false;
  toolbarInstance.items.find(item => item.id === 'sendBackward').disabled = false;
  toolbarInstance.items.find(item => item.id === 'sendToBack').disabled = false;
}
//Disable toolbar items for multi-selected elements based on their annotations.
function disableMultiselectedItems(selectedItems) {
  // Iterate through selected items
  for (let i = 0; i < selectedItems.length; i++) {
    // Check if the selected item has annotations
    if (selectedItems[i].annotations[0] !== undefined) {
      // Enable toolbar items for annotation-related functionalities
      toolbarInstance.items.find(item => item.id === 'fontStyle').disabled = false;
      toolbarInstance.items.find(item => item.id === 'fontSize').disabled = false;
      toolbarInstance.items.find(item => item.id === 'bold').disabled = false;
      toolbarInstance.items.find(item => item.id === 'italic').disabled = false;
      toolbarInstance.items.find(item => item.id === 'underline').disabled = false;
      toolbarInstance.items.find(item => item.id === 'colorPicker').disabled = false;
    }
    else {
      // Disable toolbar items for annotation-related functionalities
      toolbarInstance.items.find(item => item.id === 'fontStyle').disabled = true;
      toolbarInstance.items.find(item => item.id === 'fontSize').disabled = true;
      toolbarInstance.items.find(item => item.id === 'bold').disabled = true;
      toolbarInstance.items.find(item => item.id === 'italic').disabled = true;
      toolbarInstance.items.find(item => item.id === 'underline').disabled = true;
      toolbarInstance.items.find(item => item.id === 'colorPicker').disabled = true;
    }
  }
}
// Function to Handles user interactions with custom handles
function getTool(action) {
  // Remove selected elements
  if (action == "Delete") {
    diagramInstance.remove();
  }
  // Clone selected elements
  else if (action == "Clone") {
    diagramInstance.paste(diagramInstance.selectedItems.selectedObjects);
  }
  // Sets drawing mode and source ID for drawing elements
  else if (action == "Draw") {
    (diagramInstance.drawingObject).type = (diagramInstance.drawingObject).type ? (diagramInstance.drawingObject).type : 'Orthogonal';
    (diagramInstance.drawingObject).sourceID = drawingNode.id;
    diagramInstance.dataBind();
  }
}
//Update annotation style attributes such as font size, font family, bold, italic, and underline.
function updateAnnotationValue(value, fontSize, fontFamily, index, isSelected) {
  // Iterate through selected nodes in the diagram
  for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
    let node = diagramInstance.selectedItems.nodes[i];
    // Iterate through annotations of each node
    for (var j = 0; j < node.annotations.length; j++) {
      var annotationstyle = node.annotations[j].style;
      // Update style attributes based on the provided value
      if (value === 'fontsize') {
        annotationstyle.fontSize = fontSize;
      } else if (value === 'fontfamily') {
        annotationstyle.fontFamily = fontFamily.toString();
      }
      else if (value === 'bold') {
        annotationstyle.bold = !annotationstyle.bold;
        isSelected = annotationstyle.bold;
      }
      else if (value === 'italic') {
        annotationstyle.italic = !annotationstyle.italic;
        isSelected = annotationstyle.italic;
      }
      else if (value === 'underline') {
        if (annotationstyle.textDecoration === "None") {
          annotationstyle.textDecoration = 'Underline';
          isSelected = true;
        }
        else {
          annotationstyle.textDecoration = 'None';
          isSelected = false;
        }
      }
      if ((toolbarInstance).items[index] !== undefined) {
        var cssClass = (toolbarInstance).items[index].cssClass;
        (toolbarInstance).items[index].cssClass = isSelected ? cssClass + ' tb-item-selected' : cssClass.replace(' tb-item-selected', '');
        (toolbarInstance).dataBind();
      }
      diagramInstance.dataBind();
    }
  }
}
</script>
