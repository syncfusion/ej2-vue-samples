<template>
<div class="control-section">
<div>
 <ejs-toolbar id="toolbar_default" ref="toolbar_diagram"  :clicked='toolbarclicked'>
    <e-items>
       <e-item prefixIcon="e-icons e-group-1" tooltipText="Group" type="Button" disabled="true"></e-item>
        <e-item prefixIcon="e-icons e-ungroup-1" tooltipText="UnGroup" type="Button" disabled="true"></e-item>
          <e-item type="Separator"></e-item>
  
          <e-item prefixIcon="e-icons e-bring-forward" tooltipText="Bring Forward" type="Button" disabled="true" ></e-item>
          <e-item
            prefixIcon="e-icons e-bring-to-front"
            tooltipText="Bring To Front"
            type="Button"
            disabled="true"
          ></e-item>
          <e-item
            prefixIcon="e-icons e-send-backward"
            tooltipText="Send Backward"
            type="Button"
            disabled="true"
          ></e-item>
          <e-item
            prefixIcon="e-icons e-send-to-back"
            tooltipText="Send To Back"
            type="Button"
            disabled="true"
          ></e-item>
            <e-item type="Separator" id='separator'>
          </e-item>
            <e-item :template ="fontStyle" id="fontStyle" tooltipText="Font Style" type="Input" disabled="true" >
          </e-item>
           <e-item type="Separator">
          </e-item>
           <e-item :template ="fontSize" id='fontSize' tooltipText="Font Size" disabled="true"></e-item>
          <e-item prefixIcon="e-icons e-bold" tooltipText="Bold" type="Button" disabled="true" ></e-item>
          <e-item prefixIcon="e-icons e-italic" tooltipText="Italic" type="Button" disabled="true"></e-item>
          <e-item prefixIcon="e-icons e-underline" tooltipText="Underline" type="Button" disabled="true"></e-item>
           <e-item id="colorPicker" :template="colorPicker" disabled="true"></e-item>
    </e-items>
    </ejs-toolbar>
</div>
  <div style="width:100%">
    <div class="sb-mobile-palette-bar">
      <div id="palette-icon" role="button"  class="e-ddb-icons1 e-toggle-palette"></div>
    </div>
    <div id="palette-space" class="sb-mobile-palette">
       <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :width='palettewidth' :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight'
      :symbolWidth='symbolWidth'></ejs-symbolpalette>
    </div>

    <div id="diagram-space" class="sb-mobile-diagram">
       <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :rulerSettings='rulerSettings' :selectionChange='selectionChange' :getCustomTool='getCustomTool' :selectedItems='selectedItems' :drawingObject = 'drawingObject'></ejs-diagram>
    </div>
  </div>
  <div id="action-description">
    <p>
    This sample illustrates how to group, ungroup, and order commands with the diagram.
  </p>
  </div>
  <div id="description">
     <p>
    The <code>group</code> method groups diagram nodes and connectors into a single entity.</p>
    <p>The <code>unGroup</code> method ungroups nodes and/or connectors that have been previously grouped together using the group method.</p>

    <p>The <code>moveForward</code> and <code>bringToFront</code> methods adjust the visual order of nodes or connectors within a diagram. This method takes a single parameter that specifies the node or connector that you want to bring forward in the order.</p>

    <p>The <code>sendBackward</code> and <code>sendToBack</code> method allows you to send a selected object to the back of the z-order (the order in which objects are stacked on top of one another).</p>

   <p> In this sample, node annotation styles such as font family, font size, bold, italic, underline, and fontcolor can be customized.</p>
  </div>
</div>
</template>
<style scoped>
.sb-mobile-palette {
  width: 240px;
  height: 100%;
  float: left;
}

.sb-mobile-palette-bar {
  display: none;
}

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
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  DiagramPlugin,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  PointPortModel,
  Connector,
  SymbolPalettePlugin,
  SelectorConstraints,
  SymbolInfo,
  IDragEnterEventArgs,
  DiagramTools,
} from "@syncfusion/ej2-vue-diagrams";
import {
  ToolbarPlugin,
  Toolbar,
  ClickEventArgs
} from "@syncfusion/ej2-vue-navigations";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(ColorPickerPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
Vue.use(ToolbarPlugin);
Vue.use(ComboBoxPlugin);
let isMobile;

//Initializes the nodes for the diagram
var nodes = [
    {
    id:"Diamond",
    // Position of the node
    offsetX: 350,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: { type: 'Basic', shape: 'Diamond' },
    annotations: [{
    content: 'Decision'
    }]
    },
    {
    id:"ellipse",
    // Position of the node
    offsetX: 150,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 60,
    shape: { type: 'Basic', shape: 'Ellipse' },
    annotations: [{
        content: 'Start/Stop'
    }]
    },
    {
    id:"node1",
    // Position of the node
    offsetX: 150,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 55,
    shape: { type: 'Basic', shape: 'Rectangle' },
    },
    {
    id:"node2",
    // Position of the node
    offsetX: 350,
    offsetY: 100,
    // Size of the node
    width: 90,
    height: 55,
    // style: { fill: '#6BA5D7', strokeColor: 'white' },
      shape: { type: 'Basic', shape: 'Rectangle' ,cornerRadius:5},
    },
    {
    id: 'group',
    children: ['node1', 'node2'],
    padding:{left:10,right:10,top:10,bottom:10},
    annotations: [{
    content: 'Group 1'
  },
],
    style : { strokeWidth : 0, fill : 'white', strokeColor : 'transparent'}
},
  {
    id:"rectangle",
    // Position of the node
    offsetX: 150,
    offsetY: 400,
    // Size of the node
    width: 100,
    height: 60,
    shape: { type: 'Basic', shape: 'Rectangle' },
    annotations: [{
      content: 'Process'
    }]
  },
  ];

//Initialize the flowshapes for the symbol palatte
  let basicShapes = [
   {
      id: 'rectangle', shape: { type: 'Basic', shape: 'Rectangle' }
  },
  {
      id: 'ellipse', shape: { type: 'Basic', shape: 'Ellipse' }
  },
  {
      id: 'triangle', shape: { type: 'Basic', shape: 'Triangle' }
  },
  {
      id: 'plus', shape: { type: 'Basic', shape: 'Plus' }
  },
  {
      id: 'star', shape: { type: 'Basic', shape: 'Star' }
  },
  {
      id: 'pentagon', shape: { type: 'Basic', shape: 'Pentagon' }
  },
  {
      id: 'heptagon', shape: { type: 'Basic', shape: 'Heptagon' }
  },
  {
      id: 'octagon', shape: { type: 'Basic', shape: 'Octagon' }
  },
  {
      id: 'trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' }
  },
  {
      id: 'decagon', shape: { type: 'Basic', shape: 'Decagon' }
  },
  {
      id: 'rightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' }
  },
  {
      id: 'parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' }
  },
];

   let handles = [
       {
           name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',tooltip:{content:'Clone'},
           visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
       {
           name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',tooltip:{content:'Delete'},
           visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
       {
           name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',tooltip:{content:'Draw'},
           visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
    ];


export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "700px",
      nodes: nodes, 
      created: (args) => {
        addEvents();
      },
      //Sets the default values of a node
      getNodeDefaults: (obj) => {
        obj.height = 50;
        obj.style = { fill: "transparent", strokeWidth: 2 };
        return obj;
      },
        selectedItems : {
        userHandles : handles
      },
      drawingObject : { type : 'Orthogonal'},
      getCustomTool : getTool,
      rulerSettings : {
          showRulers : true
      },
        selectionChange: (args) => {
            let diagram = this.$refs.diagramObject.ej2Instances;
           let toolbar = this.$refs.toolbar_diagram.ej2Instances;
          if(args.state === "Changed")
          {
        var selectedItems = diagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
        if(selectedItems.length===0){
          toolbar.items[0].disabled = true;
          toolbar.items[1].disabled = true;
          toolbar.items[3].disabled = true;
          toolbar.items[4].disabled = true;
          toolbar.items[5].disabled = true;
          toolbar.items[6].disabled = true;
          toolbar.items[8].disabled = true;
          toolbar.items[10].disabled = true;
          toolbar.items[11].disabled = true;
          toolbar.items[12].disabled = true;
          toolbar.items[13].disabled = true;
          toolbar.items[14].disabled = true;
          }
          if(selectedItems.length === 1){
            enableItems();
            disableMultiselectedItems(selectedItems);
            
          if(selectedItems[0].children !== undefined && selectedItems[0].children.length>0){
            toolbar.items[1].disabled = false;
            disableMultiselectedItems(selectedItems);
          }
          else{
            toolbar.items[1].disabled = true;
          }
          
          }
          if(selectedItems.length > 1){
            enableItems();
            toolbar.items[0].disabled = false; 
            toolbar.items[1].disabled = true;
            disableMultiselectedItems(selectedItems);
          }
        if(args.newValue.length>0 && args.newValue[0] instanceof Node){
          diagram.selectedItems = { constraints: SelectorConstraints.All| SelectorConstraints.UserHandle, userHandles: handles };
            if(diagram.selectedItems.nodes.length>0){
                drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];
            }
          }
        else
        {
          diagram.selectedItems = { constraints: SelectorConstraints.All&~ SelectorConstraints.UserHandle };
        }
      }
    },  
      fontStyle: function() {
        return {
          template: Vue.component("fontStyle", {
            template:
              ' <ejs-combobox id="fontStyle" :dataSource="fontTypeList" :select="fontFamily" :fields="fontfamilyfields" :index="fontfamilyindex"></ejs-combobox>',
              data() {
                return{
                fontTypeList : [
                  { type: "Arial", text: "Arial" },
                  { type: "Aharoni", text: "Aharoni" },
                  { type: "Bell MT", text: "Bell MT" },
                  { type: "Fantasy", text: "Fantasy" },
                  { type: "Segoe UI", text: "Segoe UI" },
                  { type: "Times New Roman", text: "Times New Roman" },
                  { type: "Verdana", text: "Verdana" }
                ],
                 fontFamily: function(args) {
                  updateAnnotationValue("fontfamily", null, args.itemData.text);
                },
                fontfamilyfields: { value: "type", text: "text" },
                fontfamilyindex: 1,
              }
            }
          })
        };
      },
  
    fontSize: function() {
        return {
          template: Vue.component("fontSize", {
            template:
              '<ejs-numerictextbox id="range" :value="12" format="##.##" :step="2" :min="1" :max="30" width="90px" :change="fontSizeChange"></ejs-numerictextbox>',
              data() {
                return{
                    fontSizeChange: function(args){
                      updateAnnotationValue('fontsize', args.value);
                    },
                }
              }
          })
        };
      },
      colorPicker : function(){
         return{
            template: Vue.component("colorPicker", {
            template:
              '<ejs-colorpicker id="color-picker" type="color" value="#000" :change="colorChange"></ejs-colorpicker>',
              data() {
                return{
                  colorChange : function(args){
                      let diagram = document.getElementById('diagram').ej2_instances[0];
                        for (let i = 0; i < diagram.selectedItems.nodes.length; i++) {
                            var nodes = diagram.selectedItems.nodes[i];
                          for (let j = 0; j < nodes.annotations.length; j++) {
                              nodes.annotations[j].style.color = args.currentValue.rgba;
                            diagram.dataBind();
                          }
                        }
                  },
               }
              }
          })
         };
      },
   
    
    toolbarclicked: (args) => {
        let diagram = this.$refs.diagramObject.ej2Instances;
         let toolbarEditor = this.$refs.toolbar_diagram.ej2Instances;
          let item = args.item.tooltipText;
       switch (item) {
         case 'Group':
          diagram.group();
          toolbar.items[0].disabled = true;
          toolbar.items[1].disabled = false;
          break;
      case 'UnGroup':
          diagram.unGroup();
          break;
      case 'Bring Forward':
          diagram.moveForward();
          break;
      case 'Bring To Front':
        diagram.bringToFront();
          break;
      case 'Send Backward':
        diagram.sendBackward();
          break;
      case 'Send To Back':
        diagram.sendToBack();
          break;
      case 'Bold':
          updateAnnotationValue('bold',args.value,null,11,true);
      break;
      case 'Italic':
          updateAnnotationValue('italic',args.value,null,12, true);  
      break;
      case 'Underline':
          updateAnnotationValue('underline',args.value,null,13, true);
      break;
    }
    diagram.dataBind();
    },
      //Sets the default values of a connector
      getConnectorDefaults: (connector) => {
        if (connector.targetDecorator) connector.targetDecorator.shape = "None";
        connector.type = "Orthogonal";
        if (connector.style) connector.style.strokeColor = "gray";
        return connector;
      },
      //Sets the Node style for DragEnter element.
      dragEnter: (args) => {
        let obj = args.element;
        if (obj && obj.width && obj.height) {
          let oWidth = obj.width;
          let oHeight = obj.height;
          let ratio = 100 / obj.width;
          obj.width = 100;
          obj.height *= ratio;
          if (obj.offsetX) obj.offsetX += (obj.width - oWidth) / 2;
          if (obj.offsetY) obj.offsetY += (obj.height - oHeight) / 2;
          obj.style = { fill: "#357BD2", strokeColor: "white" };
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
       var obj = symbol;
    if (obj.id === 'terminator' || obj.id === 'process') {
        obj.width = 80;
        obj.height = 40;
    }
    else if (obj.id === 'decision' || obj.id === 'document' || obj.id === 'preDefinedProcess' ||
        obj.id === 'paperTap' || obj.id === 'directData' || obj.id === 'multiDocument' || obj.id === 'data') {
        obj.width = 50;
        obj.height = 40;
    }
    else {
        obj.width = 50;
        obj.height = 50;
    }
     obj.style.strokeColor = '#757575';
      },
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
    },
    };
    },

  mounted: function() {
    let diagram = this.$refs.diagramObject.ej2Instances;
  },
 
});

function addEvents() {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        let paletteIcon = document.getElementById('palette-icon');
        if (paletteIcon){
            paletteIcon.addEventListener('click', openPalette, false);
        }
    }
}

function openPalette() {
  let paletteSpace = document.getElementById('palette-space');
  isMobile = window.matchMedia('(max-width:550px)').matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
      paletteSpace.classList.add('sb-mobile-palette-open');
    } else {
      paletteSpace.classList.remove('sb-mobile-palette-open');
    }
  }
} 
  function enableItems()
  {
 let toolbar = document.getElementById("toolbar_default").ej2_instances[0];
  toolbar.items[3].disabled = false;
  toolbar.items[4].disabled = false;
  toolbar.items[5].disabled = false;
  toolbar.items[6].disabled = false;
  }
 function disableMultiselectedItems (selectedItems){
let toolbar = document.getElementById("toolbar_default").ej2_instances[0];
  for(let i = 0 ;i < selectedItems.length;i++){
    if(selectedItems[i].annotations[0] !== undefined){
      toolbar.items[8].disabled = false;
      toolbar.items[10].disabled = false;
      toolbar.items[11].disabled = false;
      toolbar.items[12].disabled = false;
      toolbar.items[13].disabled = false;
      toolbar.items[14].disabled = false;
    }
    else{
      toolbar.items[8].disabled = true;
      toolbar.items[10].disabled = true;
      toolbar.items[11].disabled = true;
      toolbar.items[12].disabled = true;
      toolbar.items[13].disabled = true;
      toolbar.items[14].disabled = true;
    }
  }
}

function getTool(action){
     var diagram = document.getElementById("diagram").ej2_instances[0];
    if (action == "Delete") {
        diagram.remove();
    }
    else if (action == "Clone"){
        diagram.paste(diagram.selectedItems.selectedObjects);
    }
   else if (action == "Draw"){
     (diagram.drawingObject).type = (diagram.drawingObject).type?(diagram.drawingObject).type: 'Orthogonal';
     (diagram.drawingObject).sourceID = diagram.selectedItems.nodes[0].id;
     diagram.dataBind();
    }
}

function updateAnnotationValue(value, fontSize, fontFamily,index,isSelected) {
  let diagram = document.getElementById('diagram').ej2_instances[0];
  for (let i = 0; i < diagram.selectedItems.nodes.length; i++) {
      let node = diagram.selectedItems.nodes[i];
      for (var j = 0; j < node.annotations.length; j++) {
          var annotationstyle = node.annotations[j].style;
          if (value === 'fontsize') {
              annotationstyle.fontSize = fontSize;
          } else if (value === 'fontfamily') {
              annotationstyle.fontFamily = fontFamily.toString();
          }
          else if (value === 'bold') {
            annotationstyle.bold = !annotationstyle.bold;
            isSelected=annotationstyle.bold;
         }
         else if (value === 'italic') {
          annotationstyle.italic = !annotationstyle.italic;
          isSelected= annotationstyle.italic;
        } 
        else if (value === 'underline') {
          if(annotationstyle.textDecoration ==="None"){
            annotationstyle.textDecoration = 'Underline';
            isSelected = true;
          }
          else{
            annotationstyle.textDecoration = 'None';
            isSelected =false;
            }
          }
        var toolbarTextStyle = document.getElementById("toolbar_default");
        if (toolbarTextStyle) {
          toolbarTextStyle = (toolbarTextStyle ).ej2_instances[0];
        }
        if ((toolbarTextStyle ).items[index] !== undefined) {
          var cssClass = (toolbarTextStyle ).items[index].cssClass;
          (toolbarTextStyle ).items[index].cssClass = isSelected ? cssClass + ' tb-item-selected' : cssClass.replace(' tb-item-selected', '');
          (toolbarTextStyle ).dataBind();
        }
        diagram.dataBind(); 
      }
    }
  }
</script>