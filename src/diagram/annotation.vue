<template>
<div class="control-section">
<div class="col-lg-8 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramControl" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
        :selectionChange='selectionChange' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div id="propertypanel" class="e-remove-selection">
        <div class="property-section-content">

            <div class="row" id="appearance">
            <div class="row row-header">
                Alignment
            </div>
            <div class="row">
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="left" style="background-image: url(./src/diagram/Images/annotation/Annotation_1.png); margin-right: 4px">
                    </div>
                    <div class="image-pattern-style" id="right" style="background-image: url(./src/diagram/Images/annotation/Annotation_2.png); margin: 0px 4px">
                    </div>
                    <div class="image-pattern-style" id="bottoml" style="background-image: url(./src/diagram/Images/annotation/Annotation_3.png);margin-left: 4px">
                    </div>
                </div>
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="bottomr" style="background-image: url(./src/diagram/Images/annotation/Annotation_4.png); margin-right: 4px">
                    </div>
                    <div class="image-pattern-style" id="center" style="background-image: url(./src/diagram/Images/annotation/Annotation_5.png); margin: 0px 4px">
                    </div>
                    <div class="image-pattern-style" id="bottomcenter_top" style="background-image: url(./src/diagram/Images/annotation/Annotation_6.png);margin-left: 4px">
                    </div>
                </div>
            </div>
        </div>
        </div>
    <div class="row" style="padding-top: 10px">
        <div class="row row-header">
            Appearance
        </div>
          <div class="row" style="padding-top: 8px">
              <div class="col-xs-4 column-style">
                  <ejs-button ref="boldObj" id="bold" style="width:100%"
                              :iconCss='boldiconCss'></ejs-button>
              </div>
              <div class="col-xs-4 column-style">
                  <ejs-button ref= "italicObj" id="italic" style="width:100%"
                              :iconCss='italiciconCss'></ejs-button>
              </div>
              <div class="col-xs-4 column-style">
                  <ejs-button ref="underlineObj" id="underline" style="width:100%"
                              :iconCss='underlineiconCss'></ejs-button>
              </div>
          </div>
        <div class="row" style="padding-top: 8px">
            <div class="col-xs-4 column-style">
                <ejs-colorpicker ref="fontcolorObj" id="fontcolor"       
                                 :value='fontcolorvalue'
                                 :change='fontcolorchange'></ejs-colorpicker>
            </div>
            <div class="col-xs-4 column-style">
                <ejs-numerictextbox ref="fontSizeObj"  id="fontSize" :min="0" :max="50" :step="1" :value="12"
                :change='fontSizechange'/>
            </div>
            <div class="col-xs-4 column-style">
                <ejs-dropdownlist ref="fontfamilyObj" id="fontfamily" 
                  :dataSource='fontfamilydataSource'
                  :fields='fontfamilyfields' 
                  :popupWidth='fontfamilypopupWidth'
                  :width='fontfamilywidth'
                  :placeholder='fontfamilyplaceholder'
                  :index='fontfamilyindex'
                  :change='fontfamilychange'/>
            </div>
        </div>
    </div>
    <div class="row" style="padding-top: 10px">
       <div class="row row-header">
          Templates
       </div>
       <div class="row col-xs-8" style="padding-left: 0px; padding-top: 8px">
           <ejs-dropdownlist ref = "templatelistObj" id="template"
             :dataSource='templatelistdataSource'
             :fields='templatefields'
             :popupWidth='templatepopupwidth'
             :width='templatewidth'
             :placeholder='templateplaceholder' 
             :change='templatechange'>
           </ejs-dropdownlist>
       </div>
       </div>
       <div class="row" style="padding-top: 10px">
         <div class="row row-header">
             Behaviour
          </div>
          <div class="row" style="padding-top: 8px">
             <ejs-checkbox id="labelConstraints" label='Label interaction' :checked="false" :change="checkboxchange">
             </ejs-checkbox>
           </div>
       </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates the competitive environment of a business through five forces chart. The elements of the five force chart is described using nodes and annotations. Customizing the position and appearance of the annotation is illustrated in this example.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to add textual descriptions to shapes and how to position them over the shapes. The
        <code>annotations</code> property of the node can be used to add descriptions.
    </p>

    <p>
        The <code>offset</code>, <code>horizontalAlignment</code>, and<code>verticalAlignment</code> properties of the annotation can be used to customize the position of the descriptions. The <code>bold</code>,<code>italic</code>, <code>fontSize</code>, and <code>fontFamily</code> properties can be used to customize the appearance of the descriptions.
    </p>

    <p>
        To change the position of the descriptions, select a node and choose the template in the property panel.
    </p>
    <br>
</div>
</div>
</template>

<style>
.image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: calc((100% - 18px) / 3);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.e-remove-selection .property-section-content {
  pointer-events: none;
}

.column-style {
  display: table;
  height: 35px;
  padding-right: 4px;
  padding-left: 0px;
  width: calc((100% - 12px) / 3);
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 15px;
  font-weight: 500;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}

.property-section .e-remove-selection {
  cursor: not-allowed;
}

@font-face {
  font-family: "e-ddb-icons";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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);
  font-weight: normal;
  font-style: normal;
}

.e-ddb-icons {
  font-family: "e-ddb-icons";
  speak: none;
  font-size: 55px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.e-bold::before {
  content: "\e712";
}

.e-italic::before {
  content: "\e717";
}

.e-underline::before {
  content: "\e716";
}

.material .e-bold::before {
  content: "\e707";
}

.material .e-italic::before {
  content: "\e70b";
}

.material .e-underline::before {
  content: "\e702";
}

.bootstrap .e-bold::before {
  content: "\e71f";
}

.bootstrap .e-italic::before {
  content: "\e723";
}

.bootstrap .e-underline::before {
  content: "\e71a";
}

.e-btn {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0), 0 2px 2px 0 rgba(0, 0, 0, 0),
    0 1px 5px 0 rgba(0, 0, 0, 0);
}

.e-bigger .e-btn.e-small.e-icon-btn {
  padding: 0px;
}
</style>



<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  ShapeAnnotationModel,
  ConnectorModel,
  Connector,
  TextStyleModel,
  ISelectionChangeEventArgs,
  ConnectorConstraints,
  PointModel,
  SnapConstraints,
  VerticalAlignment,
  HorizontalAlignment,
  Node,
  AnnotationConstraints
} from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownList,
  DropDownListPlugin
} from "@syncfusion/ej2-vue-dropdowns";
import { Button, ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import {
  NumericTextBox,
  ColorPicker,
  NumericTextBoxPlugin,
  ColorPickerPlugin,
  ColorPickerEventArgs
} from "@syncfusion/ej2-vue-inputs";

Vue.use(DiagramPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(ColorPickerPlugin);
Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);

let diagramInstance;

let fontFamily;
let fontSize;
let fontColor;
let bold;
let italic;
let underLine;
let templateData;

//Initializes the nodes for the diagram
let nodes = [
  {
    id: "industry",
    offsetX: 280,
    offsetY: 250,
    annotations: [{ content: "Industry Competitors" }]
  },
  {
    id: "potential",
    offsetX: 280,
    offsetY: 110,
    annotations: [{ content: "Potential Entrants" }]
  },
  {
    id: "suplier",
    offsetX: 90,
    offsetY: 250,
    annotations: [{ content: "Suppliers" }]
  },
  {
    id: "substitutes",
    offsetX: 280,
    offsetY: 390,
    annotations: [{ content: "Substitutes" }]
  },
  {
    id: "buyers",
    offsetX: 470,
    offsetY: 250,
    annotations: [{ content: "Buyers" }]
  }
];

//Initializes the connector for the diagram
let connectors = [
  {
    id: "connector1",
    sourceID: "potential",
    targetID: "industry"
  },
  {
    id: "connector2",
    sourceID: "suplier",
    targetID: "industry"
  },
  {
    id: "connector3",
    sourceID: "substitutes",
    targetID: "industry"
  },
  {
    id: "connector4",
    sourceID: "buyers",
    targetID: "industry"
  },
  {
    id: "connector5",
    sourceID: "potential",
    targetID: "buyers",
    segments: [{ type: "Orthogonal", direction: "Right", length: 60 }],
    targetDecorator: { shape: "None" }
  },
  {
    id: "connector6",
    sourceID: "buyers",
    targetID: "substitutes",
    segments: [{ type: "Orthogonal", direction: "Bottom", length: 100 }],
    targetDecorator: { shape: "None" }
  },
  {
    id: "connector7",
    targetID: "suplier",
    sourceID: "substitutes",
    segments: [{ type: "Orthogonal", direction: "Left", length: 60 }],
    targetDecorator: { shape: "None" }
  },
  {
    id: "connector9",
    sourceID: "suplier",
    targetID: "potential",
    segments: [{ type: "Orthogonal", direction: "Top", length: 100 }],
    targetDecorator: { shape: "None" }
  }
];

//FontType Collection
let fontType= [
  { type: "Arial", text: "Arial" },
  { type: "Aharoni", text: "Aharoni" },
  { type: "Bell MT", text: "Bell MT" },
  { type: "Fantasy", text: "Fantasy" },
  { type: "Times New Roman", text: "Times New Roman" },
  { type: "Segoe UI", text: "Segoe UI" },
  { type: "Verdana", text: "Verdana" }
];

let templateList = [
  { value: "none", text: "None" },
  { value: "industry", text: "Industry Competitors" },
  { value: "suppliers", text: "Suppliers" },
  { value: "potential", text: "Potential Entrants" },
  { value: "buyers", text: "Buyers" },
  { value: "substitutes", text: "Substitutes" }
];

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "645px",
      nodes: nodes,
      connectors: connectors,
      selectionChange: (arg) => {
        if (arg.state === "Changed") {
          let selectedElement = document.getElementsByClassName(
            "e-selected-style"
          );
          if (selectedElement.length) {
            selectedElement[0].classList.remove("e-selected-style");
          }
          if (arg.newValue[0]) {
            let node = arg.newValue[0];
            let annotations = node.annotations;
            let offset = annotations[0].offset;
            if (
              offset.x === 0 &&
              offset.y === 0 &&
              annotations[0].verticalAlignment === "Top" &&
              annotations[0].horizontalAlignment === "Left"
            ) {
              updatePosition("left");
            } else if (
              offset.x === 1 &&
              offset.y === 0 &&
              annotations[0].verticalAlignment === "Top" &&
              annotations[0].horizontalAlignment === "Right"
            ) {
              updatePosition("right");
            } else if (
              offset.x === 1 &&
              offset.y === 0 &&
              annotations[0].verticalAlignment === "Top" &&
              annotations[0].horizontalAlignment === "Right"
            ) {
              updatePosition("right");
            } else if (
              offset.x === 0 &&
              offset.y === 1 &&
              annotations[0].verticalAlignment === "Bottom" &&
              annotations[0].horizontalAlignment === "Left"
            ) {
              updatePosition("bottoml");
            } else if (
              offset.x === 1 &&
              offset.y === 1 &&
              annotations[0].verticalAlignment === "Bottom" &&
              annotations[0].horizontalAlignment === "Right"
            ) {
              updatePosition("bottomr");
            } else if (
              offset.x === 0.5 &&
              offset.y === 0.5 &&
              annotations[0].verticalAlignment === "Center" &&
              annotations[0].horizontalAlignment === "Center"
            ) {
              updatePosition("center");
            } else if (
              offset.x === 0.5 &&
              offset.y === 1 &&
              annotations[0].verticalAlignment === "Top" &&
              annotations[0].horizontalAlignment === "Center"
            ) {
              updatePosition("bottomcenter_top");
            }
          }
          enableOptions(arg);
        }
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        let obj = {
          width: 150,
          height: 50,
          style: { fill: "#D5EDED", strokeColor: "#7DCFC9", strokeWidth: 1 },
          shape: { cornerRadius: 5 }
        };
        return obj;
      },
      //Sets the default values of a connector
      getConnectorDefaults: (obj) => {
        obj.type = "Orthogonal";
        obj.constraints = ConnectorConstraints.None;
      },
      snapSettings: { constraints: SnapConstraints.None },
      boldiconCss: "e-ddb-icons e-bold",
      italiciconCss: "e-ddb-icons e-italic",
      underlineiconCss: "e-ddb-icons e-underline",

      fontcolorvalue: "#000",
      fontcolorchange: (arg) => {
        if (diagramInstance.selectedItems.nodes) {
          for (
            let i = 0;
            i < diagramInstance.selectedItems.nodes.length;
            i++
          ) {
            let node = diagramInstance.selectedItems.nodes[i];
            if (node.annotations) {
              for (let j = 0; j < node.annotations.length; j++) {
                (node.annotations[j].style).color =
                  arg.currentValue.rgba;
              }
            }
          }
        }
      },

      fontSizechange: () => {
        changed("fontsize");
      },

      fontfamilydataSource: fontType,
      fontfamilyfields: { value: "type", text: "text" },
      fontfamilypopupWidth: 150,
      fontfamilywidth: "100%",
      fontfamilyplaceholder: "select a font type",
      fontfamilyindex: 0,
      fontfamilychange: () => {
        changed("fontfamily");
      },

      templatelistdataSource: templateList,
      templatefields: { value: "value", text: "text" },
      templatepopupwidth:200,
      templatewidth: "100%",
      templateplaceholder: 'select a template',
      templatechange: () => {
        changed("template");
      },

      checkboxchange: () => {
         changed("interaction");
      }
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramControl.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
    bold = this.$refs.boldObj.ej2Instances;
    italic = this.$refs.italicObj.ej2Instances;
    underLine = this.$refs.underlineObj.ej2Instances;
    fontFamily = this.$refs.fontfamilyObj.ej2Instances;
    fontSize = this.$refs.fontSizeObj.ej2Instances;
    fontColor = this.$refs.fontcolorObj.ej2Instances;
    templateData = this.$refs.templatelistObj.ej2Instances;

    let appearance = document.getElementById(
      "propertypanel"
    ) ;
    let selectedElement = document.getElementsByClassName(
      "e-remove-selection"
    );

    bold.element.onclick = () => {
      changed("bold");
    };
    italic.element.onclick = () => {
      changed("italic");
    };
    underLine.element.onclick = () => {
      changed("underline");
    };
    let obj = document.getElementById("appearance") ;
    //Click event for Appearance of the Property Panel
    obj.onclick = (args) => {
      let target = args.target;
      let selectedElement = document.getElementsByClassName(
        "e-selected-style"
      );
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      if (target.className === "image-pattern-style") {
        updatePosition(target.id);
      }
    };
  }
});

//Apply the appearence of the Annotation
function changed(value) {
  if (diagramInstance.selectedItems.nodes) {
    for (let i = 0; i < diagramInstance.selectedItems.nodes.length; i++) {
      let node = diagramInstance.selectedItems.nodes[i];
      if (node.annotations) {
        for (let j = 0; j < node.annotations.length; j++) {
          if (value === "fontsize") {
            (node.annotations[j].style).fontSize =
              fontSize.value;
          } else if (value === "underline") {
            (node.annotations[j].style).textDecoration =
              "Underline";
          } else if (value === "fontfamily") {
            (node.annotations[j]
              .style).fontFamily = fontFamily.value.toString();
          } else if (value === "bold") {
            (node.annotations[j].style).bold = true;
          } else if (value === "italic") {
            (node.annotations[j].style).italic = true;
          } else if (value === 'template') {
              if (templateData.value.toString() === 'none') {
                  node.annotations[j].template = '';
                  node.annotations[j].width = undefined;
                  node.annotations[j].height = undefined;
              } else {
                   node.annotations[j].width = 25;
                   node.annotations[j].height = 25;
                   node.annotations[j].template =
                       '<img src="src/diagram/Images/annotation/' + templateData.value.toString() + '.svg" style="width:100%;height:100%" />';
                }
            } else if (value === 'interaction') {
              let annot = node.annotations[j];
              if (annot && annot.constraints) {
                annot.constraints = annot.constraints ^ AnnotationConstraints.Interaction;
              }
            }
      }
      diagramInstance.dataBind();
    }
  }
}
}
//Update the Annotation Position based on the selection
function updatePosition(id) {
  let target = document.getElementById(id);
  if (diagramInstance.selectedItems.nodes) {
    for (
      let i= 0;
      i < diagramInstance.selectedItems.nodes.length;
      i++
    ) {
      let node = diagramInstance.selectedItems.nodes[i];
      if (node.annotations) {
        //we can refactor this code using a method
        for (let j = 0; j < node.annotations.length; j++) {
          let annotation = node.annotations[j];
          switch (target.id) {
            case "left":
              setAnnotationPosition(annotation, 0, 0, "Top", "Left", target);
              break;
            case "right":
              setAnnotationPosition(annotation, 1, 0, "Top", "Right", target);
              break;
            case "bottoml":
              setAnnotationPosition(annotation, 0, 1, "Bottom", "Left", target);
              break;
            case "bottomr":
              setAnnotationPosition(annotation, 1, 1, "Bottom", "Right", target);
              break;
            case "center":
              setAnnotationPosition(annotation, 0.5, 0.5, "Center", "Center", target);
              break;
            case "bottomcenter_top":
              setAnnotationPosition(annotation, 0.5, 1, "Top", "Center", target);
              break;
          }
        }
      }
    }
  }
}
//set the Annotation Position
function setAnnotationPosition( //it is in dedicated line here.
  annotation,
  offsetX,
  offsetY,
  vAlignment,
  hAlignment,
  target
) {
  let offset = annotation.offset;
  offset.x = offsetX;
  offset.y = offsetY;
  annotation.verticalAlignment = vAlignment;
  annotation.horizontalAlignment = hAlignment;
  if (vAlignment === "Top" && hAlignment === "Left") {
    annotation.margin = { left: 3, top: 3 };
  } else if (vAlignment === "Top" && hAlignment === "Right") {
    annotation.margin = { right: 3, top: 3 };
  } else if (vAlignment === "Bottom" && hAlignment === "Left") {
    annotation.margin = { left: 3, bottom: 3 };
  } else if (vAlignment === "Bottom" && hAlignment === "Right") {
    annotation.margin = { right: 3, bottom: 3 };
  }
  target.classList.add("e-selected-style");
}
//Enable or disable the property panel
function enableOptions(arg) {
  let appearance = document.getElementById(
    "propertypanel"
  ) ;
  let selectedElement = document.getElementsByClassName(
    "e-remove-selection"
  );
  if (arg.newValue) {
    if (arg.newValue[0] instanceof Node) {
      if(selectedElement.length > 0) {
         selectedElement[0].classList.remove("e-remove-selection");
      }
    } else {
      if (!appearance.classList.contains("e-remove-selection")) {
        appearance.classList.add("e-remove-selection");
      }
    }
  }
}
</script>
