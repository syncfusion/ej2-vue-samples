<template>
<div class="control-section">
<div class="col-lg-8 control-section" id="palette-space">
    <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :enableAnimation='enableAnimation' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight'
                       :symbolWidth='symbolWidth'></ejs-symbolpalette>
</div>
<div class="col-lg-4 property-section">
    <table id="property" title="Properties">
        <tr>
            <td>
                <div>Expandable: </div>
            </td>
            <td>
                <!-- DropDownList is used to change the expandMode of the Symbolpallete. -->
                <ejs-dropdownlist id="expand" :index='expandindex'
                                  :dataSource='expanddataSource'
                                  :change='expandchange'/>
            </td>
        </tr>
        <tr>
            <td>
                <div>Symbol Size: </div>
            </td>
            <td>
                <!-- NumericTextBox is used to apply the size of the Symbol. -->
                <ejs-numerictextbox id='size' 
                                    :value='sizevalue'
                                    :min='sizemin'
                                    :max='sizemax'
                                    :width='sizewidth'
                                    :step='sizestep'
                                    :format='sizeformat'
                                    :change='sizechange'></ejs-numerictextbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Animation: </div>
            </td>
            <td>
                <!-- enable or disable the animation of the symbol palette. -->
                <ejs-checkbox id="animation" 
                              :checked='animationchecked'
                              :change='animationchange'></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Item Text: </div>
            </td>
            <td>
                <ejs-checkbox id="itemtext" :change='itemtextchange'></ejs-checkbox>
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

<style>
.property-panel-table div {
  padding-left: 0px;
}
</style>

<script lang="ts">
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  Node,
  Connector,
  SymbolPalette,
  SymbolInfo,
  ShapeModel
} from "@syncfusion/ej2-vue-diagrams";
import { ExpandMode } from "@syncfusion/ej2-vue-navigations";
import {
  DropDownList,
  DropDownListPlugin
} from "@syncfusion/ej2-vue-dropdowns";
import {
  CheckBox,
  ChangeEventArgs,
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
import {
  NumericTextBox,
  NumericTextBoxPlugin
} from "@syncfusion/ej2-vue-inputs";

Vue.use(DiagramPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);

//Initialize the flowshapes for the symbol palatte
let flowshapes: NodeModel[] = [
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
let basicShapes: NodeModel[] = [
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
let connectorSymbols: ConnectorModel[] = [
  {
    id: "Link1",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow" },
    style: { strokeWidth: 2 }
  },
  {
    id: "link3",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  },
  {
    id: "Link21",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow" },
    style: { strokeWidth: 2 }
  },
  {
    id: "link23",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  },
  {
    id: "link33",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  }
];

let expandMode: { [key: string]: Object }[] = [
  { type: "Single", text: "Single" },
  { type: "Multiple", text: "Multiple" }
];

let palette: any;
let size: any;
let expand: any;

export default Vue.extend({
  data: function() {
    return {
      expandMode: "Multiple",
      allowDrag: true,
      palettes: [
        {
          id: "flow",
          expanded: true,
          symbols: flowshapes,
          title: "Flow Shapes"
        },
        {
          id: "basic",
          expanded: true,
          symbols: basicShapes,
          title: "Basic Shapes"
        },
        {
          id: "connectors",
          expanded: true,
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
      getNodeDefaults: (symbol: NodeModel): void => {
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
        symbol.style = { strokeWidth: 2 };
      },
      getSymbolInfo: (symbol: Symbol): SymbolInfo => {
        return { fit: true };
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },

      expanddataSource: expandMode,
      expandindex: 1,
      expandchange: () => {
        palette.expandMode = expand.value as ExpandMode;
        palette.dataBind();
      },

      sizevalue: 80,
      sizemin: 40,
      sizemax: 100,
      sizewidth: 120,
      sizestep: 5,
      sizeformat: "##.##",
      sizechange: () => {
        palette.symbolHeight = size.value;
        palette.symbolWidth = size.value;
      },

      animationchecked: true,
      animationchange: onAnimationChange,

      itemtextchange: onItemTextChange,

      headericonchange: onHeaderIconChange
    };
  },
  provide: {
    diagram: [UndoRedo]
  },
  mounted: function() {
    let paletteObj: any = document.getElementById("symbolpalette");
    palette = paletteObj.ej2_instances[0];
    let sizeObj: any = document.getElementById("size");
    size = sizeObj.ej2_instances[0];
    let expandObj: any = document.getElementById("expand");
    expand = expandObj.ej2_instances[0];
    palette.dataBind();
  }
});

//Add or Remove the Text for Symbol palette item.
function onHeaderIconChange(args: ChangeEventArgs): void {
  for (let i: number = 0; i < palette.palettes.length; i++) {
    if (args.checked) {
      palette.palettes[i].iconCss = "shapes";
    } else {
      palette.palettes[i].iconCss = "";
    }
  }
}

function onAnimationChange(args: ChangeEventArgs): void {
  palette.enableAnimation = args.checked;
}

//Add or Remove the Text for Symbol palette item.
function onItemTextChange(args: ChangeEventArgs): void {
  if (args.checked) {
    palette.getSymbolInfo = (symbol: Symbol): SymbolInfo => {
      if (symbol.text !== undefined) {
        return { description: { text: symbol.text, overflow: "Wrap" } };
      }
      return { description: { text: symbol.id } };
    };
  } else {
    palette.getSymbolInfo = (symbol: Node | Connector): SymbolInfo => {
      return { description: { text: "" } };
    };
  }
  palette.dataBind();
}

interface Symbol extends NodeModel {
  text?: string;
}
interface Shapes extends ShapeModel {
  shape?: string;
}
</script>
