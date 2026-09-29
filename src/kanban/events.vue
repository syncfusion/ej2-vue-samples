<template>
  <div>
    <div class="col-md-8 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
           :cardSettings="cardSettings" :swimlaneSettings='swimlaneSettings'  :created= 'OnCreate' :actionBegin= 'OnActionBegin'
            :actionComplete= 'OnActionComplete' :actionFailure= 'OnActionFailure' :dataBinding= 'OnDataBinding' :dataBound= 'OnDataBound'
            :cardRendered= 'OnCardRendered' :queryCellInfo= 'OnQueryCellInfo' :cardClick= 'OnCardClick' :cardDoubleClick= 'OnCardDoubleClick'
            :dragStart= 'OnDragStart' :drag= 'OnDrag' :dragStop= 'OnDragStop'>
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
    <div class="col-lg-4 property-section">
    <table id="property" title="Event Trace">
        <tbody>
            <tr>
                <td>
                    <div class="eventarea">
                        <span class="EventLog" id="EventLog"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="evtbtn">
                    <ejs-button id='clear' class="e-btn" v-on:click="onClear">Clear</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div> 
   <div id="action-description">
    <p>
        This sample demonstrates the client-side event capabilities of the Kanban component, providing insights into user interactions and component lifecycle activities through real-time event monitoring.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the client-side events available in the Kanban component and how they can be used to monitor user interactions, data operations, rendering processes, and drag-and-drop actions.
        All events triggered by the board are logged in the event tracer panel for easy tracking and debugging.
    </p>
    <p>The following events are showcased in this sample:</p>
    <ol>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#created" target="_blank">created</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#actionbegin" target="_blank">actionBegin</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#actioncomplete" target="_blank">actionComplete</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#actionfailure" target="_blank">actionFailure</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#databinding" target="_blank">dataBinding</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#databound" target="_blank">dataBound</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#cardrendered" target="_blank">cardRendered</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#querycellinfo" target="_blank">queryCellInfo</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#cardclick" target="_blank">cardClick</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#carddoubleclick" target="_blank">cardDoubleClick</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#dragstart" target="_blank">dragStart</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#drag" target="_blank">drag</a></li>
        <li><a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#dragstop" target="_blank">dragStop</a></li>
    </ol>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns#header-template" target="_blank">header template</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>
</div>
</template>
<style>
    .eventarea {
        height: 245px;
        overflow: auto
    }

    .EventLog {
        word-break: normal;
    }

    .evtbtn {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    #EventLog b {
        color:#018607;
    }
    .fluent-dark .e-kanban #EventLog b, .bootstrap5-dark .e-kanban #EventLog b,.bootstrap5\.3-dark .e-kanban #EventLog b, .tailwind-dark .e-kanban #EventLog b, .tailwind3-dark .e-kanban #EventLog b, .material-dark .e-kanban #EventLog b, .fabric-dark .e-kanban #EventLog b, .bootstrap-dark .e-kanban #EventLog b, .highcontrast .e-kanban #EventLog b, .material3-dark .e-kanban #EventLog b {
        color:#21A32E;
    }

    hr {
        margin: 1px 10px 1px 0px;
        border-top: 1px solid #eee;
    }
</style>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      swimlaneSettings: {
        keyField: "Assignee",
      }
    };
  },
  provide: {
    kanban: []
  },
   methods: {
    appendElement: function(html) {
        let span = document.createElement('span');
        span.innerHTML = html;
        let log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    },
    onClear: function() {
        document.getElementById('EventLog').innerHTML = '';
    },
    OnCreate: function() {
        this.appendElement('Kanban <b>Load</b> event called<hr>');
    },
    OnActionBegin: function() {
        this.appendElement('Kanban <b>Action Begin</b> event called<hr>');
    },
    OnActionComplete: function() {
        this.appendElement('Kanban <b>Action Complete</b> event called<hr>');
    },
    OnActionFailure: function() {
        this.appendElement('Kanban <b>Action Failure</b> event called<hr>');
    },
    OnDataBinding: function() {
        this.appendElement('Kanban <b>Data Binding</b> event called<hr>');
    },
    OnDataBound: function() {
        this.appendElement('Kanban <b>Data Bound</b> event called<hr>');
    },
    OnCardRendered: function (args) {
        this.appendElement('Kanban - ' + args.data.Id + ' - <b>Card Rendered</b> event called<hr>');
    },
    OnQueryCellInfo: function() {
        this.appendElement('Kanban <b>Query Cell Info</b> event called<hr>');
    },
    OnCardClick: function (args) {
        this.appendElement('Kanban - ' + args.data.Id + ' - <b>Card Click</b> event called<hr>');
    },
    OnCardDoubleClick: function (args) {
        this.appendElement('Kanban - ' + args.data.Id + ' - <b>Card Double Click</b> event called<hr>');
    },
    OnDragStart: function() {
        this.appendElement('Kanban <b>Drag Start</b> event called<hr>');
    },
    OnDrag: function() {
        this.appendElement('Kanban <b>Drag</b> event called<hr>');
    },
    OnDragStop: function() {
        this.appendElement('Kanban <b>Drag Stop</b> event called<hr>');
    }
    }
};
</script>



