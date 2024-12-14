<template>
  <div>
     <!-- Left section: Symbol Palette -->
    <div class="col-lg-8 control-section">
      <div id="diagramEventsControlSection" class="content-wrapper diagramEvents-ControlSection" style="width:100%;background: white">
        <div id="palette-space" class="sb-mobile-palette">
          <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight'  :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth' :getNodeDefaults='palettegetNodeDefaults' :getConnectorDefaults='getConnectorDefaults'></ejs-symbolpalette>
        </div>
         <!-- Diagram Component -->
        <div id="diagram-space" class="sb-mobile-diagram">
          <ejs-diagram ref="diagramControl" id="diagram" width="100%" height="700px" :contextMenuSettings="contextMenu" :snapSettings='snapSettings' :dragEnter="dragEnter" :dragLeave="dragLeave" :dragOver="dragOver" :click="click" :historyChange="historyChange" :doubleClick="doubleClick" :textEdit="textEdit" :scrollChange="scrollChange" :selectionChange="selectionChange" :sizeChange="sizeChange" :connectionChange="connectionChange" :sourcePointChange="sourcePointChange" :targetPointChange="targetPointChange" :propertyChange="propertyChange" :positionChange="positionChange" :rotateChange="rotateChange" :collectionChange="collectionChange" :mouseEnter="mouseEnter" :mouseLeave="mouseLeave" :mouseOver="mouseOver" :contextMenuOpen="contextMenuOpen" :contextMenuBeforeItemRender="contextMenuBeforeItemRender" :contextMenuClick="contextMenuClick">
          </ejs-diagram>
        </div>
      </div>
    </div>
     <!-- Right section: Property Panel -->
    <div class="col-lg-4 property-section">
      <div id="diagramEventsPropertySection" style="height:100%;border: 1px solid #e0e0e0">
         <!-- Listview for event selection -->
        <div class="listbox">
          <div class="heading" style="height:40px">
            <span>Client-side events</span>
          </div>
          <ejs-listview id='listview-def' ref="listView" :dataSource='data' showCheckBox='true' height="calc(100% - 40px)"></ejs-listview>
        </div>
        <!-- Event Log panel -->
        <div class="prop-grid content" style="height:50%; border-top: 1px solid #e0e0e0">
          <div class="heading">
            <span style="display: inline-block;margin-top: 5px;">Event Trace</span>
            <div class="evtbtn">
              <ejs-button id="clearButton" ref="clearButton">Clear</ejs-button>
            </div>
          </div>
          <div id="EventLog" ref="EventLog">
          </div>
        </div>
      </div>
    </div>
     <!-- Description sections -->
    <div id="action-description">
      <p>
        This sample visualize what are the client side events are available in the diagram.
      </p>
    </div>
    <div id="description">
      <p>
         Diagram events are the actions that can be detected by <code>JavaScript</code> and the event argument are the information
    about the event that has occurred. Some time we want to execute some JavaScript when and event occurs, such as when the
    user clicks on the node. We can achieve this scenario using <code>click</code> event of the diagram. So, in this shows
    how to hook all the diagram events and how to handle its <code>arguments</code>.
      </p>
      <br>
    </div>
  </div>
</template>

  <style scoped>
  /* Symbol palette alignment CSS */
#diagramEventsControlSection .sb-mobile-palette {
  width: 200px;
  height: 100%;
  float: left;
}

#diagramEventsControlSection .sb-mobile-palette-bar {
  display: none;
}
/* Diagram alignment CSS */
#diagramEventsControlSection .sb-mobile-diagram {
  width: calc(100% - 200px);
  height: 100%;
  float: left;
  border: 1px solid #d9dedd;
}

@media (max-width: 550px) {
  #diagramEventsControlSection .sb-mobile-palette {
    z-index: 19;
    position: absolute;
    display: none;
    transition: transform 300ms linear, visibility 0s linear 300ms;
    width: 39%;
    height: 100%;
  }

  #diagramEventsControlSection .sb-mobile-palette-bar {
    display: block;
    width: 100%;
    background: #fafafa;
    padding: 10px 10px;
    border: 0.5px solid #e0e0e0;
    min-height: 40px;
  }

  #diagramEventsControlSection .sb-mobile-diagram {
    width: 100%;
    height: 100%;
    float: left;
    left: 0px;
  }

  #diagramEventsControlSection #palette-icon {
    font-size: 20px;
  }
}

#diagramEventsControlSection .sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}

 /* Event property panel CSS */
 /* Styles for Event Property Panel */
#diagramEventsPropertySection .event-tracer {
  width: 240px;
  height: 700px;
  min-height: 700px;
  float: left;
}

#diagramEventsPropertySection .heading {
  color: #807f7f;
  font-size: 15px;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #d9dedd;
  padding: 10px;
}
 /* This color is to indicate the event name in specific color */
 #EventLog b {
      color: #388e3c;
    }

    hr {
      margin: 1px 10px 1px 0px;
      border-top: 1px solid #eee;
    }
  /* Property panel CSS */
.property-section {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 740px;
  padding-right: 0px;
}

#diagramEventsPropertySection .evtbtn {
  float: right;
}

#diagramEventsPropertySection .listbox {
  width: 100%;
  height: 50%;
}

#diagramEventsPropertySection .event-tracer .prop-grid {
  width: 100%;
  height: 50%;
}

.diagramEvents-ControlSection{
  display: flex;
}

#diagramEventsPropertySection #EventLog {
  height: calc(100% - 50px);
  padding: 15px;
  overflow: auto;
  width: 100%;
}
</style>

<script>
// Import necessary Vue components and Syncfusion libraries
import {
  DiagramComponent,
  SymbolPaletteComponent,
  Diagram, DiagramContextMenu, NodeConstraints
} from "@syncfusion/ej2-vue-diagrams";
import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;
let  listviewInstance;
let eventlogInstance;
let clearButtonInstance;
// Symbol palette items: Basic shapes and connectors
let basicShapes = [
  { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
  { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
  { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
  { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
  { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
  { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
  { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },
  { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } },
  { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
  { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },
  { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' } },
  { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' } },
  { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' } },
  { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
  { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }
];

let connectorSymbols = [
  {
    id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }
  },
  {
    id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
     targetDecorator: { shape: 'None' }
  },
  {
    id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: {strokeColor: "#757575", fill: "#757575"} }
  },
  {
    id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'None' }
  },
  {
    id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'None' }
  },
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent,
    'ejs-listview': ListViewComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      // listview data
      data: [
        { text: 'Drag enter', id: 'dragEnter' },
        { text: 'Drag leave', id: 'dragLeave' },
        { text: 'Drag over', id: 'dragOver' },
        { text: 'Click', id: 'click', isChecked: true },
        { text: 'History change', id: 'historyChange', isChecked: true },
        { text: 'Double click', id: 'doubleClick' },
        { text: 'Text edit', id: 'textEdit', isChecked: true },
        { text: 'Scroll change', id: 'scrollChange' },
        { text: 'Selection change', id: 'selectionChange', isChecked: true },
        { text: 'Size change', id: 'sizeChange', isChecked: true },
        { text: 'Connection change', id: 'connectionChange', isChecked: true },
        { text: 'SourcePoint change', id: 'sourcePointChange' },
        { text: 'TargetPoint change', id: 'targetPointChange' },
        { text: 'Position change', id: 'positionChange', isChecked: true },
        { text: 'Rotate change', id: 'rotateChange', isChecked: true },
        { text: 'Collection change', id: 'collectionChange', isChecked: true },
        { text: 'Mouse enter', id: 'mouseEnter' },
        { text: 'Mouse leave', id: 'mouseLeave' },
        { text: 'Mouse over', id: 'mouseOver' },
        { text: 'Context menu open', id: 'contextMenuOpen' },
        { text: 'Context menu before item render', id: 'contextMenuBeforeItemRender' },
        { text: 'Context menu click', id: 'contextMenuClick' }
      ],

      //Initializes diagram control
      width: "100%",
      height: 700,
      snapSettings: { constraints: 0 },
      contextMenu: { show: true },

      //diagram events
      dragEnter: (args) => {
        getEventDetails(args);
      },
      dragLeave: (args) => {
        getEventDetails(args);
      },
      dragOver: (args) => {
        if (args.target) {
          getEventDetails(args);
        }
      },
      click: (args) => {
        getEventDetails(args);
      },
      historyChange: (args) => {
        getEventDetails(args);
      },
      doubleClick: (args) => {
        getEventDetails(args);
      },
      textEdit: (args) => {
        getEventDetails(args);
      },
      scrollChange: (args) => {
        getEventDetails(args);
      },
      selectionChange: (args) => {
        if (args.state === "Changed") {
          getEventDetails(args);
        }
      },
      sizeChange: (args) => {
        if (args.state === "Completed") {
          getEventDetails(args);
        }
      },
      connectionChange: (args) => {
        if (args.state === "Changed") {
          getEventDetails(args);
        }
      },
      sourcePointChange: (args) => {
        if (args.state === "Completed") {
          getEventDetails(args);
        }
      },
      targetPointChange: (args) => {
        if (args.state === "Completed") {
          getEventDetails(args);
        }
      },
      propertyChange: (args) => {
        getEventDetails(args);
      },
      positionChange: (args) => {
        if (args.state === "Completed") {
          getEventDetails(args);
        }
      },
      rotateChange: (args) => {
        if (args.state === "Completed") {
          getEventDetails(args);
        }
      },
      collectionChange: (args) => {
        if (args.state === "Changed") {
          getEventDetails(args);
        }
      },
      mouseEnter: (args) => {
        getEventDetails(args);
      },
      mouseLeave: (args) => {
        getEventDetails(args);
      },
      mouseOver: (args) => {
        getEventDetails(args);
      },
      contextMenuOpen: (args) => {
        getEventDetails(args);
      },
      contextMenuBeforeItemRender: (args) => {
        let listViewComponent = listviewInstance ? listviewInstance: null;
        if(listViewComponent) {          
         getEventDetails(args);
        }
      },
      contextMenuClick: (args) => {
        getEventDetails(args);
      },
      // Initialize palette
      expandMode: "Multiple",
      palettes: [
        {
          id: "basic",
          expanded: true,
          symbols: basicShapes,
          iconCss: "shapes",
          title: "Basic Shapes"
        },
        {
          id: "connectors",
          expanded: true,
          symbols: connectorSymbols,
          iconCss: "shapes",
          title: "Connectors"
        }
      ],
      palettewidth: "100%",
      paletteheight: "700px",
      palettegetNodeDefaults: (symbol) => {
        symbol.style = {strokeColor: "#757575"};
        symbol.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
      },
      symbolHeight: 60,
      symbolWidth: 60,
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      },
      getConnectorDefaults: function (connector) {
            connector.style = { strokeWidth: 1 , strokeColor: '#757575' };
        },
      };
  },
  provide: {
    diagram: [DiagramContextMenu]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramControl.ej2Instances;
    listviewInstance = this.$refs.listView.ej2Instances;
    eventlogInstance = this.$refs.EventLog;
    clearButtonInstance = this.$refs.clearButton.ej2Instances.element;
    //Click Event for Appearance of the layout.
    clearEventLog();
    clearButtonInstance.onclick = (args) => {
      clearEventLog();
    }
  }
}
// Function to clear the event log
function clearEventLog() {
  let data = eventlogInstance;
  data.innerHTML = '';
}
// Function to get event details based on selected items
function getEventDetails(args) {
    let listViewComponent = listviewInstance;
    let selectedItems = listViewComponent.getSelectedItems();
    if (selectedItems.data.length > 0) {
      let elementName = getName(selectedItems, args);
      if (elementName) {
        eventInformation(args);
      }
    }
   
}
// Function to check if the event name matches any selected item
function getName(selectedItems, args) {
  for (let i = 0; i < selectedItems.data.length; i++) {
    let eventName = selectedItems.data[i].id;
    if (eventName === args.name) {
      return true;
    }
  }
  return false;
}
// tslint:disable-next-line:max-func-body-length
// Function to display event information in the event log
function eventInformation(args) {
  let span = document.createElement('span');
  span.innerHTML = 'Diagram ' + args.name.bold() + ' event called' + '<hr>';
  let log = eventlogInstance;
  log.insertBefore(span, log.firstChild);
}

</script>
