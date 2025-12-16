<template>
  <div class="control-section">
    <div style="width:100%" class="diagram-scroll">
        <div class="sb-mobile-palette-bar">
          <div id="palette-icon" ref="paletteIcon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
        </div>
        <div id="palette-space" ref="paletteSpace" class="sb-mobile-palette" style="width:20%;float:left">
          <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :expandMode='expandMode' :width='palettewidth' :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight'
          :symbolWidth='symbolWidth'></ejs-symbolpalette>
        </div>
  
        <div class="sb-mobile-diagram" style="width:59%;float:left">
            <ejs-diagram style='display:block' id="diagram" ref="diagramObject" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :rulerSettings='rulerSettings' :scrollSettings='scrollSettings' :pageSettings="pageSettings" :created='created' :dragEnter='dragEnter'></ejs-diagram>
        </div>
        <div id="properties" style="width:20%;float:right">
              <div class="property-panel-header">
                  Properties
              </div>
              <div class="row db-prop-row">        
                  <div class="col-xs-5 db-col-right db-prop-text-style" style="padding-top: 14px">
                      <span class="db-prop-text-style db-spacing-text">Scroll Limit</span>
                  </div>
                  <div class="col-xs-7 db-col-left" style="padding-top: 10px;padding-right: 0px;">
                      <div class="db-text-input">
                          <ejs-dropdownlist id='scrollableDiv' ref="scrollableDiv" :dataSource='scrollLimitDatasource' :change='scrollLimitChange' :placeholder='waterMark' ></ejs-dropdownlist>
                      </div>
                  </div>
              </div>
              <div id="scrollableArea" ref="scrollableArea">
                  <div class="property-panel-header">
                      Scrollable Area
                  </div>
                  <div class="row db-prop-row"  style="padding-top: 15px;">
                      <div class="col-xs-6" style="padding-right: 15px;width: 150px;">
                              <div style="width:40%;float:left;margin-top: 5px;">
                                  <span class="texstyle" style="display: block;">X</span>
                              </div>
                              <div style="width:60%;float:right;padding-left: 20px;">
                                  <ejs-textbox :value="10"  :change='scrollableX'></ejs-textbox>
                              </div>
                      </div>
                  </div>
  
                  <div class="row db-prop-row"  style="padding-top: 15px;">
                      <div class="col-xs-6" style="padding-right: 15px;width: 150px;">
                          <div style="width:40%;float:left;margin-top: 5px;">
                              <span class="texstyle" style="width: fit-content;">Y</span>
                          </div>
                          <div style="width:60%;float:right;padding-left: 20px;">
                              <ejs-textbox :value="10" :change='scrollableY'></ejs-textbox>
                          </div>
                      </div>
                  </div>
                  
                  <div class="row db-prop-row" style="padding-top: 15px;">
                      <div class="col-xs-6 db-col-left" style="width: 150px;">
                              <div style="width:40%;float:left;margin-top: 5px;">
                                  <span class="texstyle" >Width</span>
                              </div>
                              <div style="width:60%;float:right;padding-left: 20px;">
                                  <ejs-textbox :value="1500" :change='scrollableWidth'></ejs-textbox>
                              </div>
                      </div>
                  </div>
                  <div class="row db-prop-row" style="padding-top: 15px;">    
                      <div class="col-xs-6 db-col-right" style="width: 150px;">
                          <div style="width:40%;float:left;margin-top: 5px;">
                              <span class="texstyle">Height</span>
                          </div>
                          <div style="width:60%;float:right;padding-left: 20px">
                              <ejs-textbox :value="1500" :change='scrollableHeight'></ejs-textbox>
                          </div>
                      </div>
                  </div>
              </div>
              <div style="padding-top:5px;margin-top: 20px;" >
                  <div style="float:left">Enable AutoScroll</div>
                  <div style="float: left;margin-left: 10px;">
                      <ejs-checkbox :checked="true" :change="enableAutoSroll"></ejs-checkbox>
                  </div>
              </div>
              <div id="autoScrollDiv" ref="autoScrollDiv" style="margin-top: 30px">
                  <div class="property-panel-header">
                      AutoScroll border
                  </div>
                  <div class="row db-prop-row"  style="padding-top: 15px;">
                      <div class="col-xs-6 db-col-left" style="width: 150px;">
                              <div style="width:40%;float:left;margin-top: 5px;">
                                  <span>Left</span>
                              </div>
                              <div style="width:60%;float:right;padding-left: 20px;">
                                  <ejs-textbox :value="30" :change='autoScrollLeft'></ejs-textbox>
                              </div>
                      </div>
                  </div>
                  <div class="row db-prop-row"  style="padding-top: 15px;">
                      <div class="col-xs-6 db-col-right" style="width: 150px;">
                          <div style="width:40%;float:left;margin-top: 5px;">
                              <span>Top</span>
                          </div>
                          <div style="width:60%;float:right;padding-left: 20px;">
                              <ejs-textbox :value="30" :change='autoScrollTop'></ejs-textbox>
                          </div>
                      </div>
                  </div>
                  <div class="row db-prop-row" style="padding-top: 15px;">
                      <div class="col-xs-6 db-col-left" style="width: 150px;">
                              <div style="width:40%;float:left;margin-top: 5px;">
                                  <span>Right</span>
                              </div>
                              <div style="width:60%;float:right;padding-left: 20px;">
                                  <ejs-textbox :value="30" :change='autoScrollRight'></ejs-textbox>
                              </div>
                      </div>
                  </div>
                  <div class="row db-prop-row" style="padding-top: 15px;">
                      <div class="col-xs-6 db-col-right" style="width: 150px;">
                          <div style="width:40%;float:left;margin-top: 5px;">
                              <span>Bottom</span>
                          </div>
                          <div style="width:60%;float:right;padding-left: 20px;">
                              <ejs-textbox :value="30" :change='autoScrollBottom'></ejs-textbox>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    <div id="action-description">
      <p>
        This example illustrates how to scroll a diagram using vertical and horizontal scrollbars. The scroll limit property helps limit the scrolling area.
      </p>
    </div>
    <div id="description">
      <p> The scroll limit allows you to define the scrollable region of the Diagram while scrolling the page with a mouse.</p>
  
      <p>The scrollSettings <code>scrollLimit</code> property allows you to define the scrollable region of a Diagram. You may scroll inside the designated region if the scrollLimit is set to <code>limited</code>. When the scrollLimit is set to <code>Diagram</code>, you can scroll within the Diagram content. When the scrollLimit is set to <code>Infinity</code>, it allows infinite scrolling.</p>
  
      <p>The scrollSettings <code>autoScrollBorder</code> property is used to specify the distance from the edge of a control at which auto-scrolling should occur.</p>
    </div>
  </div>
</template>
<style scoped>
/*To align palette */
 .diagram-scroll .sb-mobile-palette {
        width:240px;
        height:100%;
        float:left;
    }
    
    .diagram-scroll .sb-mobile-palette-bar {
        display: none;
    }
    /*To align diagram */
    .diagram-scroll .sb-mobile-diagram {
        width:calc(100% - 242px);
        height: 100%;
        float: left;
    }
    
    @media (max-width: 550px) {
    
        .diagram-scroll .sb-mobile-palette {
            z-index: 19;
            position: absolute;
            display: none;
            transition: transform 300ms linear, visibility 0s linear 300ms;
            width:39%;
            height:100%;
        }
        
        .diagram-scroll .sb-mobile-palette-bar {
            display: block;
            width: 100%;
            background:#fafafa;
            padding: 10px 10px;
            border:0.5px solid #e0e0e0;
            min-height: 40px;
        }
        
        .diagram-scroll .sb-mobile-diagram {
            width: 100%;
            height: 100%;
            float: left;
            left: 0px;
        }
    
        .diagram-scroll #palette-icon {
            font-size: 20px; 
        }
    }
        
    .diagram-scroll .sb-mobile-palette-open {
        position: absolute;
        display: block;
        right: 15px;
    }
            .e-export::before {
                    content: "\e711";
            }
            
            

                .e-diagram-btn, .e-css.e-btn {
                background-color: transparent ;
                border-color: transparent ;
                }
                
        .diagram-scroll .texstyle {	
            display: table;	
            /* height: 35px; */	
            padding-right: 10px;	
            padding-left: 0px;	
            width: 50%;	
            padding-top: 5px;	
            float: left;	
            position: relative;	
            min-height: 1px;	
        }	
        .diagram-scroll .text{	
            text-align: center;	
        }
        .diagram-scroll .db-text {
            float: left;
            width: 20px;
            text-align: center;
            height: auto;
            margin-top: 4px;
            color: #8C8C8C;
        }

        .diagram-scroll .db-text-input {
            width: calc(100% - 25px);
            padding: 2px 2px 0px 0px;
        }

        .diagram-scroll .db-text-input input {
            width: 100%;
            height: 100%;
            border: none;
        }

        .diagram-scroll .disabledbutton {
            pointer-events: none;
            opacity: 0.4;
        }
</style>

<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  DiagramComponent,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-vue-diagrams";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

let isMobile;
let interval;
let diagramInstance;
let autoScrollDivInstance;
let paletteIconInstance;
let paletteSpaceInstance;
interval = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];

let gridlines = {
  lineColor: "#e0e0e0",
  lineIntervals: interval
};
//Initialize the flowshapes for the symbol palatte
let flowshapes = [
  { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
  { id: "Process", shape: { type: "Flow", shape: "Process" } },
  { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
  { id: "Document", shape: { type: "Flow", shape: "Document" } },
  {
    id: "PreDefinedProcess",
    shape: { type: "Flow", shape: "PreDefinedProcess" }
  },
  { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" } },
  { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
  { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" } },
  { id: "Sort", shape: { type: "Flow", shape: "Sort" } },
  { id: "MultiDocument", shape: { type: "Flow", shape: "MultiDocument" } },
  { id: "Collate", shape: { type: "Flow", shape: "Collate" } },
  { id: "SummingJunction", shape: { type: "Flow", shape: "SummingJunction" } },
  { id: "Or", shape: { type: "Flow", shape: "Or" } },
  { id: "InternalStorage", shape: { type: "Flow", shape: "InternalStorage" } },
  { id: "Extract", shape: { type: "Flow", shape: "Extract" } },
  { id: "ManualOperation", shape: { type: "Flow", shape: "ManualOperation" } },
  { id: "Merge", shape: { type: "Flow", shape: "Merge" } },
  {
    id: "OffPageReference",
    shape: { type: "Flow", shape: "OffPageReference" }
  },
  {
    id: "SequentialAccessStorage",
    shape: { type: "Flow", shape: "SequentialAccessStorage" }
  },
  { id: "Annotation", shape: { type: "Flow", shape: "Annotation" } },
  { id: "Annotation2", shape: { type: "Flow", shape: "Annotation2" } },
  { id: "Data", shape: { type: "Flow", shape: "Data" } },
  { id: "Card", shape: { type: "Flow", shape: "Card" } },
  { id: "Delay", shape: { type: "Flow", shape: "Delay" } }
];

//Initializes basicShapes symbols for the symbol palette
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
//Initialize the connector for the symbol palatte
let connectorSymbols = [
    {
        id: 'orthogonal', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }
    },
    {
        id: 'orthogonalConnector', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
         targetDecorator: { shape: 'None' }
    },
    {
        id: 'straight', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }
    },
    {
        id: 'straightConnector', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
    },
    {
        id: 'bezier', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
    },
];

export default {
  components: {
   'ejs-textbox': TextBoxComponent,
   'ejs-diagram': DiagramComponent,
   'ejs-symbolpalette': SymbolPaletteComponent,
   'ejs-dropdownlist': DropDownListComponent,
   'ejs-checkbox': CheckBoxComponent
  },
   mounted: function() {
    diagramInstance = this.$refs.diagramObject.ej2Instances;
    autoScrollDivInstance = this.$refs.autoScrollDiv;
    paletteIconInstance = this.$refs.paletteIcon;
    paletteSpaceInstance = this.$refs.paletteSpace;
  },
  data: function() {
    return {
      width: "100%",
      height: "770px",
      snapSettings: {
        horizontalGridlines: gridlines,
        verticalGridlines: gridlines
      },  
      created: (args) => {
        addEvents();
      },    
      created: (args) => {
        var scrollElement = this.$refs.scrollableArea;
        scrollElement.className = "disabledbutton";
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        let obj = {};
        if (obj.width === undefined) {
          obj.width = 145;
        } else {
          let ratio = 100 / obj.width;
          obj.width = 100;
          if (obj.height) {
            obj.height *= ratio;
          }
        }
        obj.style = { fill: "#357BD2", strokeColor: "white" };
        obj.annotations = [{ style: { color: "white", fill: "transparent" } }];

        //Set ports
        obj.ports = getPorts();
        return obj;
      },
      //Sets the default values of a connector
      getConnectorDefaults:getConnectorDefaults,
    rulerSettings : {
        showRulers : true
      },
      scrollSettings : {
        scrollLimit : 'Infinity',
        canAutoScroll: true,
        autoScrollBorder: { left: 30, right: 30, top: 30, bottom: 30 },
        scrollableArea: { x: 0, y: 0, width: 1500, height: 1500 }
      },
      pageSettings: { width: 1500, height: 1500 },
      waterMark : "Infinity",
      scrollLimitDatasource : [{ text: 'Infinity', value: 'Infinity' }, { text: 'Diagram', value: 'Diagram' },
       { text: 'Limited', value: 'Limited' }
      ],
      //Initializes a dropdown for scrollLimit
      scrollLimitChange :(args)=>{
        var element = this.$refs.scrollableArea;
        element.className = args.value === "Limited" ? "" : "disabledbutton";
        diagramInstance.scrollSettings.scrollLimit = args.value;
      },
      // Sets the horizontal scroll position of the diagram's scrollable area.
      scrollableX: (args)=>{
        diagramInstance.scrollSettings.scrollableArea.x = Number(args.value);
      },
      // Sets the vertical scroll position of the diagram's scrollable area.
      scrollableY: (args)=>{
        diagramInstance.scrollSettings.scrollableArea.y = Number(args.value);
      },
      // Sets the width of the diagram's scrollable area.
      scrollableWidth: (args)=>{
        diagramInstance.scrollSettings.scrollableArea.width = Number(args.value);
      },
      // Sets the height of the diagram's scrollable area.
      scrollableHeight: (args)=>{
       diagramInstance.scrollSettings.scrollableArea.height = Number(args.value);
      },
      // Sets the left auto-scroll border based on the provided value.
      autoScrollLeft: (args)=>{
       diagramInstance.scrollSettings.autoScrollBorder.left = Number(args.value);
      },
      // Sets the right auto-scroll border based on the provided value.
      autoScrollRight: (args)=>{
       diagramInstance.scrollSettings.autoScrollBorder.right = Number(args.value);
      },
      // Sets the top auto-scroll border based on the provided value.
      autoScrollTop: (args)=>{
      diagramInstance.scrollSettings.autoScrollBorder.top = Number(args.value);
      },
      // Sets the bottom auto-scroll border based on the provided value.
      autoScrollBottom: (args)=>{
      diagramInstance.scrollSettings.autoScrollBorder.bottom = Number(args.value);
      },
       //Initializes a checkbox to enable or disable autoscroll
      enableAutoSroll : (args)=>{
       let autoScrollElement = autoScrollDivInstance;
        if (args.checked) {
            autoScrollElement.className = '';
            diagramInstance.scrollSettings.canAutoScroll = true;
        } else {
            autoScrollElement.className = 'disabledbutton';
            diagramInstance.scrollSettings.canAutoScroll = false;
        }
      },
      //Sets the node style for DragEnter element.
      dragEnter: (args) => {
        let obj = args.element;
        if (obj && obj.width && obj.height) {
          let nodeWidth = obj.width;
          let nodeHeight = obj.height;
          let ratio = 100 / obj.width;
          obj.width = 100;
          obj.height *= ratio;
          if (obj.offsetX) obj.offsetX += (obj.width - nodeWidth) / 2;
          if (obj.offsetY) obj.offsetY += (obj.height - nodeHeight) / 2;
          obj.style = { fill: "#357BD2", strokeColor: "white" };
        }
      },
      expandMode: "Single",
      palettes: [
           {
          id: "basic",
          expanded: true,
          symbols: basicShapes,
          iconCss: "shapes",
          title: "Basic Shapes"
        },
        {
          id: "flow",
          expanded: false,
          symbols: flowshapes,
          iconCss: "shapes",
          title: "Flow Shapes"
        },
         { id: 'connectors',
          expanded: false,
          symbols: connectorSymbols,
          iconCss: 'e-ddb-icons e-diagram-connector',
          title: 'Connectors'
         }
      ],
      palettewidth: "100%",
      paletteheight: "770px",
      symbolHeight: 60,
      symbolWidth: 60,
      palettegetNodeDefaults: (symbol) => {
     var obj = symbol;
       if (obj.id === 'Terminator' || obj.id === 'Process') {
        obj.width = 80;
        obj.height = 40;
    }
    else if (obj.id === 'Decision' || obj.id === 'Document' || obj.id === 'PreDefinedProcess' ||
        obj.id === 'PaperTap' || obj.id === 'DirectData' || obj.id === 'MultiDocument' || obj.id === 'data') {
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
      }
      },
 
}
// Creates and initializes ports for nodes.
function getPorts() {
  let ports = [
    { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
    { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
    { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
    { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } }
  ];
  return ports;
}
//set default values for the connectors
function getConnectorDefaults(connector){
    setConnectorStyles(connector, '#757575');
    return connector;
}
    //set styles for connector
    function setConnectorStyles(connector, color) {
    connector.style.strokeWidth = 1;
    connector.style.strokeColor = color;
    connector.targetDecorator.style.fill = color;
    connector.targetDecorator.style.strokeColor = color;
    }
//To enhance the functionality of a webpage for mobile devices by adding a click event listener 
function addEvents() {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        let paletteIcon = paletteIconInstance;
        if (paletteIcon){
            paletteIcon.addEventListener('click', openPalette, false);
        }
    }
}
//To manage the visibility state of the palette space on a webpage for mobile devices
function openPalette() {
  let paletteSpace = paletteSpaceInstance;
  isMobile = window.matchMedia('(max-width:550px)').matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
      paletteSpace.classList.add('sb-mobile-palette-open');
    } else {
      paletteSpace.classList.remove('sb-mobile-palette-open');
    }
  }
} 
</script>