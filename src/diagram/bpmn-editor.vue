<template>
  <div class="control-section">
    <div style="width:100%;height:445px">
      <div id="palette-space" style="width:240px;height:445px; float:left">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight' :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
      </div>

      <div id="diagram-space" style="width:calc(100% - 242px);height:445px; float:left;border-color: rgba(0, 0, 0, 0.12);border-width: 1px 1px 0px 0px;
                      border-style: solid;
                      border-left: none;">
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :mode='mode' :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dragEnter='dragEnter' :snapSettings='snapSettings' :contextMenuSettings='contextMenuSettings' :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'></ejs-diagram>
      </div>

    </div>
    <div id="action-description">
      <p>
        This sample visualizes the hotel booking reservation system with built-in BPMN shapes.
      </p>
    </div>
    <div id="description">
      <p>
        This sample shows how to create a hotel booking reservation system using the diagram control. The nodes property can be used to define different stages of the process. To define the flow between different stages, the connectors property is used. </p>

      <p>
        This sample shows how to create a hotel booking reservation system using the diagram control. The nodes property can be used to define different stages of the process. To define the flow between different stages, the connectors property is used.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The diagram component’s features are segregated into individual feature-wise modules. To enable undo and redo features, inject UndoRedo module using
        <code>Diagram.Inject(UndoRedo)</code> method. To draw BPMN shapes, inject the BpmnDiagrams module. To customize BPMN shapes using context menu, inject DiagramContextMenu module using
        <code>(BpmnDiagrams, UndoRedo, DiagramContextMenu)</code>.
      </p>
      <br>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: 'e-bpmn-icons';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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cgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8AClN1YnByb2Nlc3MMQ2FsbEFjdGl2aXR5BFNlbmQGU2NyaXB0Bk91dHB1dAZTaWduYWwPRXZlbnRTdWJQcm9jZXNzB0NvbXBsZXgFRXZlbnQGQWQtSG9jClBhcmFsbGVsTUkEQ2FsbARMaW5rCUV4Y2x1c2l2ZQRMb29wBUVycm9yCE11bHRpcGxlDEludGVybWVkaWF0ZQxCdXNpbmVzc1J1bGUEVXNlcglUZXJtaW5hdGUHTWVzc2FnZQdEZWZhdWx0BkNhbmNlbBJQYXJhbGxlbEV2ZW50QmFzZWQHU2VydmljZQpFc2NhbGF0aW9uBFRhc2sTRXhjbHVzaXZlRXZlbnRCYXNlZAxTZXF1ZW50aWFsTUkJSW5jbHVzaXZlBVN0YXJ0BVRpbWVyCkV2ZW50QmFzZWQMQ29tcGVuc2F0aW9uA0VuZAtUcmFuc2FjdGlvbgZNYW51YWwETm9uZRBQYXJhbGxlbE11bHRpcGxlC0NvbmRpdGlvbmFsCFBhcmFsbGVsG05vbmludGVycnVwdGluZ0ludGVybWVkaWF0ZRROb25pbnRlcnJ1cHRpbmdzdGFydBRJbnN0YW50aWF0aW5nUmVjZWl2ZQAAAAAA) format('truetype');
  font-weight: normal;
  font-style: normal;
}


.e-bpmn-icons {
  font-family: 'e-bpmn-icons' !important;
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

.e-Order:before {
  content: "\e700";
}

.e-InBOCatchMessage:before {
  content: "\e701";
}

.e-NoneEnd:before {
  content: "\e723";
}

.e-DataObjectCollection:before {
  content: "\e703";
}

.e-DataOutput:before {
  content: "\e704";
}

.e-EscalationEnd:before {
  content: "\e705";
}

.e-Activity:before {
  content: "\e706";
}

.e-EventBasedGateway:before {
  content: "\e714";
}

.e-CatchParallelMultiple:before {
  content: "\e708";
}

.e-CatchMultipleIn:before {
  content: "\e709";
}

.e-BoCatchCompensation:before {
  content: "\e70a";
}

.e-TimerIntermediate:before {
  content: "\e70b";
}

.e-UserCall:before {
  content: "\e70c";
}

.e-NonInBoCatchParallelMultiple:before {
  content: "\e70d";
}

.e-NonInBoTimerIntermediate:before {
  content: "\e70e";
}

.e-ParallelEventBasedGatewaytostart:before {
  content: "\e718";
}

.e-NonInMultiple:before {
  content: "\e710";
}

.e-CompensationEnd:before {
  content: "\e711";
}

.e-InError:before {
  content: "\e70f";
}

.e-NonCatchMultipleIn:before {
  content: "\e713";
}

.e-InCompensation:before {
  content: "\e722";
}

.e-NonInEscalation:before {
  content: "\e716";
}

.e-ThrowMultipleIn:before {
  content: "\e717";
}

.e-InMessage:before {
  content: "\e715";
}

.e-NonInThrowMessage:before {
  content: "\e719";
}

.e-EvBaseGateTostartProcess:before {
  content: "\e71a";
}

.e-InterruptingNone:before {
  content: "\e711";
}

.e-DataOutputCollection:before {
  content: "\e71c";
}

.e-ThrowEscalationIn:before {
  content: "\e71d";
}

.e-ExclusiveGatewayWithMarker:before {
  content: "\e70d";
}

.e-ErrorEnd:before {
  content: "\e71f";
}

.e-ComplexGateway:before {
  content: "\e707";
}

.e-NonInParallelMultiple:before {
  content: "\e721";
}

.e-InSignal:before {
  content: "\e705";
}

.e-NonInBoCatchEscalation:before {
  content: "\e723";
}

.e-InclusiveGateway:before {
  content: "\e71e";
}

.e-MultipleEnd:before {
  content: "\e725";
}

.e-ThrowLinkin:before {
  content: "\e70c";
}

.e-ParallelGateway:before {
  content: "\e729";
}

.e-SignalEnd:before {
  content: "\e728";
}

.e-TerminateEnd:before {
  content: "\e714";
}

.e-BoCatchCompensationIn:before {
  content: "\e72a";
}

.e-InTimer:before {
  content: "\e720";
}

.e-ThrowCompensationIn:before {
  content: "\e72c";
}

.e-InConditional:before {
  content: "\e728";
}

.e-ScriptCall:before {
  content: "\e713";
}

.e-BoCatchCancelIn:before {
  content: "\e72f";
}

.e-ThrowMessage:before {
  content: "\e730";
}

.e-CatchLinkIn:before {
  content: "\e731";
}

.e-Gateway:before {
  content: "\e732";
}

.e-DataInputCollection:before {
  content: "\e733";
}

.e-NonInSignal:before {
  content: "\e734";
}

.e-DataInput:before {
  content: "\e70c";
}

.e-InMultiple:before {
  content: "\e710";
}

.e-InEscalation:before {
  content: "\e71a";
}

.e-CancelEnd:before {
  content: "\e717";
}

.e-DataObject:before {
  content: "\e739";
}

.e-NonInBOCatchMessage:before {
  content: "\e73a";
}

.e-ManualCall:before {
  content: "\e725";
}

.e-InParallelMultiple:before {
  content: "\e727";
}

.e-Flow:before {
  content: "\e73d";
}

.e-DataStore:before {
  content: "\e73e";
}

.e-NoneStart:before {
  content: "\e71f";
}

.e-ServiceTask:before {
  content: "\e719";
}

.e-InBoCatchEscalation:before {
  content: "\e741";
}

.e-NonInConditional:before {
  content: "\e742";
}

.e-BusinessRule:before {
  content: "\e712";
}

.e-NonInTimer:before {
  content: "\e744";
}

.e-MessageEnd:before {
  content: "\e745";
}

.e-None:before {
  content: "\e726";
}

.e-SequentialMI:before {
  content: "\e71d";
}

.e-ParallelMI:before {
  content: "\e70a";
}

.e-Loop:before {
  content: "\e70e";
}

.e-Compensation:before {
  content: "\e722";
}

.e-SubProcess:before {
  content: "\e700";
}

.e-Task:before {
  content: "\e71b";
}

.e-Call:before {
  content: "\e70b";
}

.e-adhoc:before {
  content: "\e709";
}

.e-Default:before {
  content: "\e71b";
}

.e-Event:before {
  content: "\e708";
}

.e-CallActivity:before {
  content: "\e701";
}

.e-ExclusiveEventBased:before {
  content: "\e71c";
}

.e-Noninterruptingstart:before {
  content: "\e72b";
}

.e-NoninterruptingIntermediate:before {
  content: "\e72a";
}

.e-InstantiatingReceive:before {
  content: "\e72c";
}

.container-fluid {
  padding-bottom: 15px;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  Diagram,
  DiagramPlugin,
  NodeModel,
  UndoRedo,
  BpmnActivityModel,
  ConnectorModel,
  PointPortModel,
  Connector,
  SymbolPalettePlugin,
  SymbolInfo,
  IDragEnterEventArgs,
  BpmnDataObjects,
  BpmnTasks,
  BpmnGateways,
  GridlinesModel,
  BpmnLoops,
  BpmnTaskModel,
  BpmnTriggers,
  BpmnBoundary,
  NodeConstraints,
  BpmnGatewayModel,
  BpmnShapeModel,
  ContextMenuSettingsModel,
  DiagramBeforeMenuOpenEventArgs,
  SnapConstraints,
  BpmnShape,
  BpmnDiagrams,
  DiagramContextMenu,
  BpmnEvents,
  DataBinding,
} from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

let diagram;
let nodes = [
  {
    id: "start",
    width: 40,
    height: 40,
    offsetX: 35,
    offsetY: 180,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start" }
    }
  },
  {
    id: "subProcess",
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 180,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      shape: "Activity",
      type: "Bpmn",
      activity: {
        activity: "SubProcess",
        subProcess: {
          type: "Transaction",
          collapsed: false,
          processes: [
            "processesStart",
            "service",
            "compensation",
            "processesTask",
            "error",
            "processesEnd",
            "user",
            "subProcessesEnd"
          ]
        }
      }
    } 
  },
  {
    id: "hazardEnd",
    width: 40,
    height: 40,
    offsetX: 305,
    offsetY: 370,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    } ,
    annotations: [
      {
        id: "label2",
        content: "Hazard",
        style: { fill: "white", color: "black" },
        verticalAlignment: "Top",
        margin: { top: 20 }
      }
    ]
  },
  {
    id: "cancelledEnd",
    width: 40,
    height: 40,
    offsetX: 545,
    offsetY: 370,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    },
    annotations: [
      {
        id: "cancelledEndLabel2",
        content: "Cancelled",
        style: { fill: "white", color: "black" },
        verticalAlignment: "Top",
        margin: { top: 20 }
      }
    ]
  },
  {
    id: "end",
    width: 40,
    height: 40,
    offsetX: 665,
    offsetY: 180,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    }
  },
  {
    id: "processesStart",
    width: 30,
    height: 30,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start" }
    },
    margin: { left: 40, top: 80 }
  },
  {
    id: "service",
    style: { fill: "#6FAAB0" },
    width: 95,
    height: 70,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "Task",
        task: {
          type: "Service",
          loop: "ParallelMultiInstance"
        } 
      }
    },
    annotations: [
      {
        id: "serviceLabel2",
        content: "Book hotel",
        offset: { x: 0.5, y: 0.5 },
        style: { color: "white" }
      }
    ],
    margin: { left: 110, top: 20 }
  },
  {
    id: "compensation",
    width: 30,
    height: 30,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Intermediate", trigger: "Compensation" }
    },
    margin: { left: 170, top: 100 }
  },
  {
    id: "processesTask",
    style: { fill: "#F6B53F" },
    width: 95,
    height: 70,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "Task",
        task: {
          type: "Service"
        }
      }
    },
    annotations: [
      {
        id: "serviceLabel2",
        content: "Charge credit card",
        offset: { x: 0.5, y: 0.6 },
        style: { color: "white" }
      }
    ],
    margin: { left: 290, top: 20 }
  },
  {
    id: "error",
    width: 30,
    height: 30,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: {
        event: "Intermediate",
        trigger: "Error"
      }
    },
    margin: { left: 350, top: 100 }
  },
  {
    id: "processesEnd",
    width: 30,
    height: 30,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    },
    margin: { left: 440, top: 80 }
  },
  {
    id: "user",
    style: { fill: "#E94649" },
    width: 90,
    height: 80,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "Task",
        task: {
          type: "User",
          Compensation: true,
          offset: { x: 0.5, y: 1 }
        }
      }
    },
    annotations: [
      {
        id: "serviceLabel2",
        content: "Cancel hotel reservation",
        offset: { x: 0.5, y: 0.6 },
        style: { color: "white" }
      }
    ],
    margin: { left: 240, top: 160 }
  },
  {
    id: "subProcessesEnd",
    width: 30,
    height: 30,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    },
    margin: { left: 440, top: 210 }
  }
];
let connectors = [
  { id: "connector1", sourceID: "start", targetID: "subProcess" },
  {
    id: "connector2",
    sourceID: "subProcess",
    sourcePortID: "success",
    targetID: "end"
  },
  {
    id: "connector3",
    sourceID: "subProcess",
    sourcePortID: "failure",
    targetID: "hazardEnd",
    type: "Orthogonal",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }],
    annotations: [
      {
        id: "connector3Label2",
        content: "Booking system failure",
        offset: 0.5,
        style: { fill: "white" }
      }
    ]
  },
  {
    id: "connector4",
    sourceID: "subProcess",
    sourcePortID: "cancel",
    targetID: "cancelledEnd",
    type: "Orthogonal",
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  },
  {
    id: "connector5",
    sourceID: "processesStart",
    targetID: "service",
    type: "Orthogonal"
  },
  { id: "connector6", sourceID: "service", targetID: "processesTask" },
  {
    id: "connector7",
    sourceID: "processesTask",
    targetID: "processesEnd",
    type: "Orthogonal"
  },
  {
    id: "connector8",
    sourceID: "compensation",
    targetID: "user",
    type: "Orthogonal",
    shape: {
      type: "Bpmn",
      flow: "association",
      association: "Directional"
    },
    style: {
      strokeDashArray: "2,2"
    },
    segments: [
      { type: "Orthogonal", length: 30, direction: "Bottom" },
      { type: "Orthogonal", length: 80, direction: "Right" }
    ]
  },
  {
    id: "connector9",
    sourceID: "error",
    targetID: "subProcessesEnd",
    type: "Orthogonal",
    annotations: [
      {
        id: "connector9Label2",
        content: "Cannot charge card",
        offset: 0.5,
        style: { fill: "white", color: "black" }
      }
    ],
    segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
  }
];
let bpmnShapes = [
  {
    id: "Start",
    width: 35,
    height: 35,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start" }
    }
  },
  {
    id: "NonInterruptingIntermediate",
    width: 35,
    height: 35,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "NonInterruptingIntermediate" }
    }
  },
  {
    id: "End",
    width: 35,
    height: 35,
    offsetX: 665,
    offsetY: 230,
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End" }
    }
  },
  {
    id: "Task",
    width: 35,
    height: 35,
    offsetX: 700,
    offsetY: 700,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "Task"
      }
    }
  },
  {
    id: "Transaction",
    width: 35,
    height: 35,
    offsetX: 300,
    offsetY: 100,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "SubProcess",
        subProcess: {
          type: "Transaction",
          transaction: {
            cancel: { visible: false },
            failure: { visible: false },
            success: { visible: false }
          }
        }
      }
    }
  },
  {
    id: "Task_Service",
    width: 35,
    height: 35,
    offsetX: 700,
    offsetY: 700,
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "Task",
        task: { type: "Service" }
      }
    }
  },
  {
    id: "Gateway",
    width: 35,
    height: 35,
    offsetX: 100,
    offsetY: 100,
    shape: {
      type: "Bpmn",
      shape: "Gateway",
      gateway: { type: "Exclusive" }
    }
  },
  {
    id: "DataObject",
    width: 35,
    height: 35,
    offsetX: 500,
    offsetY: 100,
    shape: {
      type: "Bpmn",
      shape: "DataObject",
      dataObject: { collection: false, type: "None" }
    }
  },
  {
    id: "subProcess",
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      shape: "Activity",
      type: "Bpmn",
      activity: {
        activity: "SubProcess",
        subProcess: {
          type: "Transaction",
          collapsed: false,
          processes: [],
          transaction: {
            cancel: { visible: false },
            failure: { visible: false },
            success: { visible: false }
          }
        }
      }
    }
  }
];
let contextMenu = {
  show: true,
  items: [
    {
      text: 'Ad-Hoc', id: 'Adhoc',
      items: [{ text: 'None', iconCss: 'e-adhocs e-bpmn-event e-bpmn-icons e-None', id: 'AdhocNone' },
      { iconCss: 'e-adhocs e-bpmn-icons e-adhoc', text: 'Ad-Hoc', id: 'AdhocAdhoc' }]
    }, {
      text: 'Loop', id: 'Loop',
      items: [{ text: 'None', iconCss: 'e-loop e-bpmn-icons e-None', id: 'LoopNone' },
      { text: 'Standard', iconCss: 'e-loop e-bpmn-icons e-Loop', id: 'Standard' },
      { text: 'Parallel Multi-Instance', iconCss: 'e-loop e-bpmn-icons e-ParallelMI', id: 'ParallelMultiInstance' },
      { text: 'Sequence Multi-Instance', iconCss: 'e-loop e-bpmn-icons e-SequentialMI', id: 'SequenceMultiInstance' }]
    }, {
      text: 'Compensation', id: 'taskCompensation',
      items: [{ text: 'None', iconCss: 'e-compensation e-bpmn-icons e-None', id: 'CompensationNone' },
      { iconCss: 'e-compensation e-bpmn-icons e-Compensation', text: 'Compensation', id: 'CompensationCompensation' }]
    }, {
      text: 'Activity-Type', id: 'Activity-Type',
      items: [{ text: 'Collapsed sub-process', iconCss: 'e-bpmn-icons e-SubProcess', id: 'CollapsedSubProcess' },
      { iconCss: 'e-bpmn-icons e-Task', text: 'Expanded sub-process', id: 'ExpandedSubProcess' }]
    }, {
      text: 'Boundry', id: 'Boundry',
      items: [{ text: 'Default', iconCss: 'e-boundry e-bpmn-icons e-Default', id: 'Default' },
      { text: 'Call', iconCss: 'e-boundry e-bpmn-icons e-Call', id: 'BoundryCall' },
      { text: 'Event', iconCss: 'e-boundry e-bpmn-icons e-Event', id: 'BoundryEvent' }]
    }, {
      text: 'Data Object', id: 'DataObject',
      items: [{ text: 'None', iconCss: 'e-data e-bpmn-icons e-None', id: 'DataObjectNone' },
      { text: 'Input', iconCss: 'e-data e-bpmn-icons e-DataInput', id: 'Input' },
      { text: 'Output', iconCss: 'e-data e-bpmn-icons e-DataOutput', id: 'Output' }]
    }, {
      text: 'Collection', id: 'collection',
      items: [{ text: 'None', iconCss: 'e-collection e-bpmn-icons e-None', id: 'collectionNone' },
      { text: 'Collection', iconCss: 'e-collection e-bpmn-icons e-ParallelMI', id: 'Collectioncollection' }]
    }, {
      text: 'Call', id: 'DeftCall',
      items: [{ text: 'None', iconCss: 'e-call e-bpmn-icons e-None', id: 'CallNone' },
      { text: 'Call', iconCss: 'e-call e-bpmn-icons e-CallActivity', id: 'CallCall' }]
    }, {
      text: 'Trigger Result', id: 'TriggerResult',
      items: [{ text: 'None', id: 'TriggerNone', iconCss: 'e-trigger e-bpmn-icons e-None' },
      { text: 'Message', id: 'Message', iconCss: 'e-trigger e-bpmn-icons e-InMessage' },
      { text: 'Multiple', id: 'Multiple', iconCss: 'e-trigger e-bpmn-icons e-InMultiple' },
      { text: 'Parallel', id: 'Parallel', iconCss: 'e-trigger e-bpmn-icons e-InParallelMultiple' },
      { text: 'Signal', id: 'Signal', iconCss: 'e-trigger e-bpmn-icons e-InSignal' },
      { text: 'Timer', id: 'Timer', iconCss: 'e-trigger e-bpmn-icons e-InTimer' },
      { text: 'Cancel', id: 'Cancel', iconCss: 'e-trigger e-bpmn-icons e-CancelEnd' },
      { text: 'Escalation', id: 'Escalation', iconCss: 'e-trigger e-bpmn-icons e-InEscalation' },
      { text: 'Error', id: 'Error', iconCss: 'e-trigger e-bpmn-icons e-InError' },
      { text: 'Compensation', id: 'triggerCompensation', iconCss: 'e-trigger e-bpmn-icons e-InCompensation' },
      { text: 'Terminate', id: 'Terminate', iconCss: 'e-trigger e-bpmn-icons e-TerminateEnd' },
      { text: 'Conditional', id: 'Conditional', iconCss: 'e-trigger e-bpmn-icons e-InConditional' },
      { text: 'Link', id: 'Link', iconCss: 'e-trigger e-bpmn-icons e-ThrowLinkin' }
      ]
    },
    {
      text: 'Event Type', id: 'EventType',
      items: [{ text: 'Start', id: 'Start', iconCss: 'e-event e-bpmn-icons e-NoneStart', },
      { text: 'Intermediate', id: 'Intermediate', iconCss: 'e-event e-bpmn-icons e-InterruptingNone' },
      { text: 'NonInterruptingStart', id: 'NonInterruptingStart', iconCss: 'e-event e-bpmn-icons e-Noninterruptingstart' },
      { text: 'ThrowingIntermediate', id: 'ThrowingIntermediate', iconCss: 'e-event e-bpmn-icons e-InterruptingNone' },
      {
        text: 'NonInterruptingIntermediate', id: 'NonInterruptingIntermediate',
        iconCss: 'e-event e-bpmn-icons e-NoninterruptingIntermediate'
      },
      { text: 'End', id: 'End', iconCss: 'e-event e-bpmn-icons e-NoneEnd' }]
    }, {
      text: 'Task Type', id: 'TaskType',
      items: [
        { text: 'None', id: 'TaskNone', iconCss: 'e-task e-bpmn-icons e-None' },
        { text: 'Service', id: 'Service', iconCss: 'e-task e-bpmn-icons e-ServiceTask' },
        { text: 'BusinessRule', id: 'BusinessRule', iconCss: 'e-task e-bpmn-icons e-BusinessRule' },
        { text: 'InstantiatingReceive', id: 'InstantiatingReceive', iconCss: 'e-task e-bpmn-icons e-InstantiatingReceive' },
        { text: 'Manual', id: 'Manual', iconCss: 'e-task e-bpmn-icons e-ManualCall' },
        { text: 'Receive', id: 'Receive', iconCss: 'e-task e-bpmn-icons e-InMessage' },
        { text: 'Script', id: 'Script', iconCss: 'e-task e-bpmn-icons e-ScriptCall' },
        { text: 'Send', id: 'Send', iconCss: 'e-task e-bpmn-icons e-InMessage' },
        { text: 'User', id: 'User', iconCss: 'e-task e-bpmn-icons e-UserCall' },
      ]
    }, {
      text: 'GateWay', id: 'GateWay',
      iconCss: 'e-bpmn-icons e-Gateway', items: [
        { text: 'None', id: 'GatewayNone', iconCss: 'e-gate e-bpmn-icons e-None' },
        { text: 'Exclusive', iconCss: 'e-gate e-bpmn-icons e-ExclusiveGatewayWithMarker', id: 'Exclusive' },
        { text: 'Inclusive', iconCss: 'e-gate e-bpmn-icons e-InclusiveGateway', id: 'Inclusive' },
        { text: 'Parallel', iconCss: 'e-gate e-bpmn-icons e-ParallelGateway', id: 'GatewayParallel' },
        { text: 'Complex', iconCss: 'e-gate e-bpmn-icons e-ComplexGateway', id: 'Complex' },
        { text: 'EventBased', iconCss: 'e-gate e-bpmn-icons e-EventBasedGateway', id: 'EventBased' },
        { text: 'ExclusiveEventBased', iconCss: 'e-gate e-bpmn-icons e-ExclusiveEventBased', id: 'ExclusiveEventBased' },
        { text: 'ParallelEventBased', iconCss: 'e-gate e-bpmn-icons e-ParallelEventBasedGatewaytostart', id: 'ParallelEventBased' }
      ]
    },
  ],
  showCustomMenuOnly: true
};
export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "100%",
      mode: "SVG",
      nodes: nodes,
      connectors: connectors,
      snapSettings: { constraints: SnapConstraints.None },
      contextMenuSettings: contextMenu,
      // tslint:disable-next-line:max-func-body-length

      contextMenuOpen: contextMenuOpen,
      // tslint:disable-next-line:max-func-body-length
      contextMenuClick: contextMenuClick,
      dragEnter: (args) => {
        let obj = args.element;
        if (obj instanceof Node) {
          if (
            obj &&
            obj.shape &&
            (obj.shape).activity &&
            (obj.shape).activity.subProcess
          ) {
            let activity = (obj.shape).activity;
            if (
              activity &&
              activity.subProcess &&
              !activity.subProcess.collapsed
            ) {
              if (activity.subProcess.transaction) {
                if (activity.subProcess.transaction.cancel) {
                  activity.subProcess.transaction.cancel.visible = true;
                }
                if (activity.subProcess.transaction.failure) {
                  activity.subProcess.transaction.failure.visible = true;
                }
                if (activity.subProcess.transaction.success) {
                  activity.subProcess.transaction.success.visible = true;
                }
              }
            } else {
              if (obj) {
                let oWidth = (obj.width) || 0;
                let oHeight = (obj.height) || 0;

                obj.width = 100;
                obj.offsetX = obj.offsetX || 0;
                obj.offsetY = obj.offsetY || 0;
                obj.height = obj.height || 0;
                obj.height *= (100 / (obj.width) || 1);
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
              }
            }
          }
        }
      },
      expandMode: "Multiple",
      palettes: [
        {
          id: "bpmn",
          expanded: true,
          symbols: bpmnShapes,
          iconCss: "shapes",
          title: "Bpmn Shapes"
        },
        {
          id: "connectors",
          expanded: true,
          symbols: getConnectors(),
          iconCss: "shapes",
          title: "Connectors"
        }
      ],
      palettewidth: "400",
      paletteheight: "550px",
      symbolHeight: 60,
      symbolWidth: 60,
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      }
    };
  },
  provide: {
    diagram: [BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding],
    SymbolPalette: [BpmnDiagrams, DataBinding],


  }, mounted: function() {
    diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage({ mode: "Width" });
  }
});

function getConnectors(){
  let connectorSymbols = [
    {
      id: "Link1",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: "Arrow" },
      style: { strokeWidth: 2 }
    },
    {
      id: "Link2",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: "Arrow" },
      style: { strokeWidth: 2, strokeDashArray: "4 4" }
    },
    {
      id: "Link3",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: "Arrow" },
      style: { strokeWidth: 2 }
    },
    {
      id: "link4",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      type: "Orthogonal",
      shape: {
        type: "Bpmn",
        flow: "Association",
        association: "Directional"
      },
      style: {
        strokeDashArray: "2,2"
      }
    }
    //  {
    //     id: 'link5', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, type: 'Orthogonal',
    //     shape: {
    //         type: 'Bpmn',
    //         flow: 'Message',
    //         association: 'Directional'
    //     }, style: {
    //         strokeDashArray: '2,2'
    //     },
    // }, {
    //     id: 'link6', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, type: 'Orthogonal',
    //     shape: {
    //         type: 'Bpmn',
    //         flow: 'Sequence',
    //         association: 'Directional'
    //     }, style: {
    //         strokeDashArray: '2,2'
    //     },
    // }, {
    //     id: 'link10', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, type: 'Orthogonal',
    //     shape: {
    //         type: 'Bpmn',
    //         flow: 'Sequence',
    //         association: 'Directional',
    //         sequence: 'Conditional'
    //     }, style: {
    //         strokeDashArray: '2,2'
    //     },
    // }
  ];
  return connectorSymbols;
}
function contextMenuClick(args) {
  let diagram = this.$refs.diagramObject.ej2Instances;
  if (diagram && diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {
    let node = diagram.selectedItems.nodes[0];
    let bpmnShape = diagram.selectedItems.nodes[0].shape;
    if (args.item.iconCss.indexOf('e-adhocs') > -1 && bpmnShape.activity && bpmnShape.activity.subProcess) {
      bpmnShape.activity.subProcess.adhoc = args.item.id === 'AdhocNone' ? false : true;
    }
    if (args.item.iconCss.indexOf('e-event') > -1 && bpmnShape.event) {
      bpmnShape.event.event = (args.item.id);
    }

    if (args.item.iconCss.indexOf('e-trigger') > -1) {

      let trigger= args.item.id;
      trigger = (args.item.id === 'TriggerNone') ? 'None' :
        (args.item.id === 'triggerCompensation') ? 'Compensation' : args.item.id;
      if (bpmnShape.event) {
        bpmnShape.event.trigger = (args.item.text );
      }
    }
    if (bpmnShape.activity) {
      if (args.item.iconCss.indexOf('e-loop') > -1) {
        let loop = (args.item.id === 'LoopNone') ? 'None' : args.item.id;

        if (bpmnShape.activity.activity === 'Task' && bpmnShape.activity.task) {
          bpmnShape.activity.task.loop = loop;
        }
        if (bpmnShape.activity.activity === 'SubProcess' && bpmnShape.activity.subProcess) {
          bpmnShape.activity.subProcess.loop = loop;
        }

      }
      if (args.item.iconCss.indexOf('e-compensation') > -1) {
        let compensation= (args.item.id === 'CompensationNone') ? false : true;
        if (bpmnShape.activity.activity === 'Task' && bpmnShape.activity.task) {
          bpmnShape.activity.task.compensation = compensation;
        }
        if (bpmnShape.activity.activity === 'SubProcess' && bpmnShape.activity.subProcess) {
          bpmnShape.activity.subProcess.compensation = compensation;

        }
      }
      if (args.item.iconCss.indexOf('e-call') > -1) {
        let compensation = (args.item.id === 'CallNone') ? false : true;
        if (bpmnShape.activity.activity === 'Task' && bpmnShape.activity.task) {
          bpmnShape.activity.task.call = compensation;
        }
      }
      if ((args.item.id === 'CollapsedSubProcess' || args.item.id === 'ExpandedSubProcess') && bpmnShape.activity.subProcess) {
        if (args.item.id === 'ExpandedSubProcess') {
          bpmnShape.activity.activity = 'SubProcess';
          bpmnShape.activity.subProcess.collapsed = false;
        } else {
          bpmnShape.activity.activity = 'SubProcess';
          bpmnShape.activity.subProcess.collapsed = true;
        }
      }
      if (args.item.iconCss.indexOf('e-boundry') > -1 && bpmnShape.activity.subProcess) {
        let call = args.item.id;
        if (args.item.id !== 'Default') {
          call = (args.item.id === 'BoundryEvent') ? 'Event' : 'Call';
        }
        bpmnShape.activity.subProcess.boundary = call;
      }
      if (args.item.iconCss.indexOf('e-task') > -1) {
        let task = args.item.id;
        if (task === 'TaskNone') { task = 'None'; }
        if (bpmnShape.activity.activity === 'Task' && bpmnShape.activity.task) {
          bpmnShape.activity.task.type = task;
        }
      }
    }
    if (args.item.iconCss.indexOf('e-data') > -1 && bpmnShape.dataObject) {
      let call = args.item.id;
      if (args.item.id === 'DataObjectNone') {
        call = 'None';
      }
      bpmnShape.dataObject.type = call;
    }
    if (args.item.iconCss.indexOf('e-collection') > -1 && bpmnShape.dataObject) {
      let call= (args.item.id === 'Collectioncollection') ? true : false;
      bpmnShape.dataObject.collection = call;
    }

    if (args.item.iconCss.indexOf('e-gate') > -1 && bpmnShape.gateway) {
      let task= args.item.id;
      if (task === 'GateWayNone') { task = 'None'; }
      if (task === 'GatewayParallel') { task = 'Parallel'; }
      if (bpmnShape.shape === 'Gateway') {
        bpmnShape.gateway.type = task;
      }
    }
    diagram.dataBind();
  }
}
function contextMenuOpen(args) {
  let hiddenId = [];
  if (args.element.className !== "e-menu-parent e-ul ") {
    hiddenId = [
      "Adhoc",
      "Loop",
      "taskCompensation",
      "Activity-Type",
      "Boundry",
      "DataObject",
      "collection",
      "DeftCall",
      "TriggerResult",
      "EventType",
      "TaskType",
      "GateWay"
    ];
  }
  
  let diagram= this.$refs.diagramObject.ej2Instances;
  for (let item of args.items) {
    if (
      item &&
      item.id &&
      diagram &&
      diagram.selectedItems &&
      diagram.selectedItems.nodes &&
      diagram.selectedItems.nodes
    ) {
      let node = diagram.selectedItems.nodes[0].shape;
      if (node.shape !== "DataObject" && node.shape !== "Gateway") {
        if (item.text === "Ad-Hoc") {
          if (node.activity.activity === "SubProcess") {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (
          item.text === "Loop" ||
          item.text === "Compensation" ||
          item.text === "Activity-Type"
        ) {
          if (
            (diagram.selectedItems.nodes[0].shape).shape ===
            "DataObject" ||
            node.shape === "Activity" ||
            (diagram.selectedItems.nodes[0].shape).shape ===
            "Gateway"
          ) {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === "Boundry") {
          if (node.activity.activity === "SubProcess") {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
      }
      if (item.text === "Data Object") {
        if (node.shape === "DataObject") {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "Collection") {
        if (node.shape === "DataObject") {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "Call") {
        if (
          node.shape === "Activity" &&
          node.activity.activity === "Task"
        ) {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "Trigger Result") {
        if (node.shape === "Event") {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "Event Type") {
        if (node.shape === "Event") {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "Task Type") {
        if (
          node.shape === "Activity" &&
          node.activity.activity === "Task"
        ) {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === "GateWay") {
        if (node.shape === "Gateway") {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (
        diagram.selectedItems.nodes.length > 0 &&
        args.parentItem &&
        args.parentItem.id === "TriggerResult" &&
        node.shape === "Event"
      ) {
        let shape = node;

        if (
          item.text !== "None" &&
          (item.text === shape.event.event ||
            item.text === shape.event.trigger)
        ) {
          hiddenId.push(item.id);
        }
        if (shape.event.event === "Start") {
          if (
            item.text === "Cancel" ||
            item.text === "Terminate" ||
            item.text === "Link"
          ) {
            hiddenId.push(item.id);
          }
        }
        if (
          shape.event.event === "NonInterruptingStart" ||
          item.text === "Link"
        ) {
          if (
            item.text === "Cancel" ||
            item.text === "Terminate" ||
            item.text === "Compensation" ||
            item.text === "Error" ||
            item.text === "None"
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === "Intermediate") {
          if (item.text === "Terminate") {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === "NonInterruptingIntermediate") {
          if (
            item.text === "Cancel" ||
            item.text === "Terminate" ||
            item.text === "Compensation" ||
            item.text === "Error" ||
            item.text === "None" ||
            item.text === "Link"
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === "ThrowingIntermediate") {
          if (
            item.text === "Cancel" ||
            item.text === "Terminate" ||
            item.text === "Timer" ||
            item.text === "Error" ||
            item.text === "None" ||
            item.text === "Pareller" ||
            item.text === "Conditional"
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === "End") {
          if (
            item.text === "Parallel" ||
            item.text === "Timer" ||
            item.text === "Conditional" ||
            item.text === "Link"
          ) {
            hiddenId.push(item.id);
          }
        }
      }
      if (
        diagram.selectedItems.nodes.length > 0 &&
        args.parentItem &&
        args.parentItem.id === "EventType" &&
        node.shape === "Event"
      ) {
        if (item.text === node.event.event) {
          hiddenId.push(item.id);
        }
      }
    }
  }
  args.hiddenItems = hiddenId;
}

</script>