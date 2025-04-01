<template>
<div class="control-section">
<div class="col-lg-8 control-section" id="palette-space">
    <ejs-symbolpalette ref="paletteObj" id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :enableAnimation='enableAnimation' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
</div>
<div class="col-lg-4 property-section">
    <table id="property" title="Properties">
        <tr>
            <td>
                <div>Expandable: </div>
            </td>
            <td>
                <!-- DropDownList is used to change the expandMode of the Symbolpallete. -->
                <ejs-dropdownlist ref="expandObj" id="expand" :index='expandIndex' :dataSource='expandDataSource' :change='expandChange'/>
            </td>
        </tr>
        <tr>
            <td>
                <div>Symbol Size: </div>
            </td>
            <td>
                <!-- NumericTextBox is used to apply the size of the Symbol. -->
                <ejs-numerictextbox ref='sizeObj' id='size' :value='sizeValue' :min='sizeMinimum' :max='sizeMaximum' :width='sizeWidth' :step='sizeStep' :format='sizeFormat' :change='sizeChange'></ejs-numerictextbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Animation: </div>
            </td>
            <td>
                <!-- enable or disable the animation of the symbol palette. -->
                <ejs-checkbox id="animation" :checked='animationChecked' :change='animationChange'></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Item Text: </div>
            </td>
            <td>
                <ejs-checkbox id="itemtext" :change='itemTextChange'></ejs-checkbox>
            </td>
        </tr>
    </table>
</div>
<div id="action-description">
    <p>
        This example illustrates predefining shapes in a palette that can be easily dragged and dropped into the drawing area. Customizable options of the symbol palette are also illustrated in this example.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to add shapes to symbol palette and how to customize it. The   <code>symbols</code> property can be used to add shapes to the symbol palette. The <code>symbolWidth</code> and <code>symbolHeight</code> properties allow you to define the size of the symbols.
    </p>
    <p>
        In this example, options to enable/disable animation, show/hide symbol descriptions, and show header icons are provided.
    </p>
    <br>
</div>
</div>
</template>

<script>
import {
  DiagramComponent,
  Diagram,
  UndoRedo,
 
  SymbolPaletteComponent,
  
} from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownList,
  DropDownListComponent
} from "@syncfusion/ej2-vue-dropdowns";
import {
  CheckBox,
  ChangeEventArgs,
  CheckBoxComponent
} from "@syncfusion/ej2-vue-buttons";
import {
  NumericTextBox,
  NumericTextBoxComponent
} from "@syncfusion/ej2-vue-inputs";

//Initialize the flowShapes for the symbol palatte
let flowShapes = [
  { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
  { id: "Process", shape: { type: "Flow", shape: "Process" } },
  { id: "Sort", shape: { type: "Flow", shape: "Sort" } },
  { id: "Document", shape: { type: "Flow", shape: "Document" } },
  {
    id: "PreDefinedProcess",
    shape: { type: "Flow", shape: "PreDefinedProcess" }
  },
  { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" } },
  { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
  { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" } }
];
//Initialize the basichapes for the symbol palatte
let basicShapes = [
  { id: "Rectangle", shape: { type: "Basic", shape: "Rectangle" } },
  { id: "Ellipse", shape: { type: "Basic", shape: "Ellipse" } },
  { id: "Parallelogram", shape: { type: "Basic", shape: "Parallelogram" } },
  { id: "Triangle", shape: { type: "Basic", shape: "Triangle" } },
  { id: "Hexagon", shape: { type: "Basic", shape: "Hexagon" } },
  { id: "Pentagon", shape: { type: "Basic", shape: "Pentagon" } },
  { id: "Cylinder", shape: { type: "Basic", shape: "Cylinder" } },
  { id: "Star", shape: { type: "Basic", shape: "Star" } }
];
//Initializes connector symbols for the symbol palette
let connectorSymbols = [
  {
    id: "Link1",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow", style: { fill: "#757575", strokeColor: "#757575" } },
    style: { strokeWidth: 2, strokeColor: "#757575" }
  },
  {
    id: "link3",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2, strokeColor: "#757575" },
    targetDecorator: { shape: "None" }
  },
  {
    id: "Link21",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow", style: { fill: "#757575", strokeColor: "#757575" } },
    style: { strokeWidth: 2, strokeColor: "#757575" }
  },
  {
    id: "link23",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2, strokeColor: "#757575" },
    targetDecorator: { shape: "None" }
  },
  {
    id: "link33",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2, strokeColor: "#757575" },
    targetDecorator: { shape: "None" }
  }
];

//Collection of expandMode
let expandMode = [
  { type: "Single", text: "Single" },
  { type: "Multiple", text: "Multiple" }
];

let palette;
let size;
let expand;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data: function() {
    return {
      expandMode: "Multiple",
      allowDrag: true,
      //Initialize palette
      palettes: [
        {
          id: "flow",
          iconCss: 'e-ddb-icons e-flow', 
          expanded: true,
          symbols: flowShapes,
          title: "Flow Shapes"
        },
        {
          id: "basic",
          iconCss: 'e-ddb-icons e-basic',
          expanded: true,
          symbols: basicShapes,
          title: "Basic Shapes"
        },
        {
          id: "connectors",
          expanded: true,
          iconCss: 'e-ddb-icons e-diagram-connector',
          symbols: connectorSymbols,
          title: "Connectors"
        }
      ],
      enableAnimation: true,
      width: "100%",
      height: "700px",
      symbolHeight: 80,
      symbolWidth: 80,
      //set Node default value
      getNodeDefaults: (symbol) => {
        if (symbol.id === "Terminator" || symbol.id === "Process") {
          symbol.width = 80;
          symbol.height = 40;
        } else if (
          symbol.id === "Document" ||
          symbol.id === "PreDefinedProcess" ||
          symbol.id === "PaperTap" ||
          symbol.id === "DirectData"
        ) {
          symbol.width = 50;
          symbol.height = 40;
        }
        symbol.style = { strokeWidth: 2, strokeColor: "#757575" };
      },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      //Change the expandMode of the Symbolpallete.
      expandDataSource: expandMode,
      expandIndex: 1,
      expandChange: () => {
        palette.expandMode = expand.value;
        palette.dataBind();
      },
      //Apply the size of the Symbol.
      sizeValue: 80,
      sizeMinimum: 60,
      sizeMaximum: 100,
      sizeWidth: 120,
      sizeStep: 5,
      sizeFormat: "##.##",
      sizeChange: () => {
        palette.symbolHeight = size.value;
        palette.symbolWidth = size.value;
      },

      animationChecked: true,
      animationChange: onAnimationChange,

      itemTextChange: onItemTextChange,

      headerIconchange: onHeaderIconChange
    };
  },
  provide: {
    diagram: [UndoRedo]
  },
  mounted: function() {
    palette = this.$refs.paletteObj.ej2Instances;
    size = this.$refs.sizeObj.ej2Instances;
    expand = this.$refs.expandObj.ej2Instances;
    palette.dataBind();
  }
}

//Add the header icon for palette.
function onHeaderIconChange(args) {
  for (let i= 0; i < palette.palettes.length; i++) {
    if (args.checked) {
      palette.palettes[i].iconCss = "shapes";
    } else {
      palette.palettes[i].iconCss = "";
    }
  }
}

//Enable or disable the animation for symbol palette
function onAnimationChange(args) {
  palette.enableAnimation = args.checked;
}

//Add or Remove the Text for Symbol palette item.
function onItemTextChange(args) {
  if (args.checked) {
    palette.getSymbolInfo = (symbol) => {
      if (symbol.text !== undefined) {
        return { description: { text: symbol.text, overflow: "Wrap" } };
      }
      return { description: { text: symbol.id } };
    };
  } else {
    palette.getSymbolInfo = (symbol) => {
      return { description: { text: "" } };
    };
  }
  palette.dataBind();
}

</script>
