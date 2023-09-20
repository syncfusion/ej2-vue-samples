<template>
  <div class="control-section">
    <div style="width:100%">
        <div class="sb-mobile-palette-bar">
          <div id="palette-icon" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
        </div>
        <div id="palette-space" class="sb-mobile-palette" style="width:20%;float:left">
          <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :expandMode='expandMode' :width='palettewidth' :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight'
          :symbolWidth='symbolWidth'></ejs-symbolpalette>
        </div>
  
        <div class="sb-mobile-diagram" style="width:59%;float:left">
            <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :rulerSettings='rulerSettings' :scrollSettings='scrollSettings' :created='created'></ejs-diagram>
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
                          <ejs-dropdownlist id='scrollableDiv' #scrollableDiv :dataSource='scrollLimitDatasource' :change='scrollLimitChange' :placeholder='waterMark' ></ejs-dropdownlist>
                      </div>
                  </div>
              </div>
              <div id="scrollableArea">
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
              <div id="autoScrollDiv" style="margin-top: 30px">
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
<style >
        .texstyle {	
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
        .text{	
            text-align: center;	
        }
        .db-text {
            float: left;
            width: 20px;
            text-align: center;
            height: auto;
            margin-top: 4px;
            color: #8C8C8C;
        }

        .db-text-input {
            width: calc(100% - 25px);
            padding: 2px 2px 0px 0px;
        }

        .db-text-input input {
            width: 100%;
            height: 100%;
            border: none;
        }

        .disabledbutton {
            pointer-events: none;
            opacity: 0.4;
        }
</style>

<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  DiagramComponent,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  PointPortModel,
  Connector,
  SymbolPaletteComponent,
  SymbolInfo,
  IDragEnterEventArgs,
  DiagramTools,
  GridlinesModel,
  Rect
} from "@syncfusion/ej2-vue-diagrams";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

let isMobile;
let interval;

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

//Initializes connector symbols for the symbol palette
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

let connectorSymbols = [
    {
        id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
        style: { strokeWidth: 1, strokeColor: '#757575' }
    },
    {
        id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'None' }
    },
    {
        id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
        style: { strokeWidth: 1, strokeColor: '#757575' }
    },
    {
        id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'None' }
    },
    {
        id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'None' }
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
  data: function() {
    return {
      width: "100%",
      height: "770px",
      snapSettings: {
        horizontalGridlines: gridlines,
        verticalGridlines: gridlines
      },      
      created: (args) => {
        var element2 = document.getElementById('scrollableArea');
        element2.className = "disabledbutton";
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
      getConnectorDefaults: (obj) => {
        if (obj.id.indexOf("connector") !== -1) {
          obj.type = "Orthogonal";
          obj.targetDecorator = { shape: "Arrow", width: 10, height: 10 };
        }
      },
    rulerSettings : {
        showRulers : true
      },
      scrollSettings : {
        scrollLimit : 'Infinity',
        canAutoScroll: true,
        autoScrollBorder: { left: 30, right: 30, top: 30, bottom: 30 },
        scrollableArea: { x: 0, y: 0, width: 1500, height: 1500 }
      },
      waterMark : "Infinity",
      scrollLimitDatasource : [{ text: 'Infinity', value: 'Infinity' }, { text: 'Diagram', value: 'Diagram' },
       { text: 'Limited', value: 'Limited' }
      ],
      scrollLimitChange :(args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        var element = document.getElementById('scrollableArea');
        element.className = args.value === "Limited" ? "" : "disabledbutton";
        diagram.scrollSettings.scrollLimit = args.value;
      },
      scrollableX: (args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.scrollSettings.scrollableArea.x = Number(args.value);
      },
      scrollableY: (args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.scrollSettings.scrollableArea.y = Number(args.value);
      },
      scrollableWidth: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.scrollSettings.scrollableArea.width = Number(args.value);
      },
      scrollableHeight: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
       diagram.scrollSettings.scrollableArea.height = Number(args.value);
      },
      autoScrollLeft: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
       diagram.scrollSettings.autoScrollBorder.left = Number(args.value);
      },
      autoScrollRight: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
       diagram.scrollSettings.autoScrollBorder.right = Number(args.value);
      },
      autoScrollTop: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
      diagram.scrollSettings.autoScrollBorder.top = Number(args.value);
      },
      autoScrollBottom: (args)=>{
          var diagram = document.getElementById("diagram").ej2_instances[0];
      diagram.scrollSettings.autoScrollBorder.bottom = Number(args.value);
      },
      enableAutoSroll : (args)=>{
      let diagram = document.getElementById("diagram").ej2_instances[0];
       let element4 = document.getElementById('autoScrollDiv');
        if (args.checked) {
            element4.className = '';
            diagram.scrollSettings.canAutoScroll = true;
        } else {
            element4.className = 'disabledbutton';
            diagram.scrollSettings.canAutoScroll = false;
        }
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
          expanded: true,
          symbols: flowshapes,
          iconCss: "shapes",
          title: "Flow Shapes"
        },
         { id: 'connectors',
          expanded: false,
          symbols: connectorSymbols,
          iconCss: 'e-ddb-icons e-connector',
          title: 'Connectors'
         }
      ],
      palettewidth: "100%",
      paletteheight: "770px",
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
      }
      },
  mounted: function() {
    let diagram = this.$refs.diagramObject.ej2Instances;
  }
}

function getPorts() {
  let ports = [
    { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
    { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
    { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
    { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } }
  ];
  return ports;
}

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
</script>