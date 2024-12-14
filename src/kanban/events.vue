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
        The sample showcases the client-side events of JavaScript Kanban. For every action in a Kanban board,
        corresponding
        events will be displayed in the event tracer panel.
    </p>
</div>
<div id="description">
    <p>
        The demo is showcased to list-out the client-side events of Kanban. The events are useful to customize the
        Kanban board
        from the application end.
    </p>
    <p>The following events are bounded in this demo.</p>
    <ol>
        <li>Created</li>
        <li>Action begin</li>
        <li>Action complete</li>
        <li>Action failure</li>
        <li>Data binding</li>
        <li>Data bound</li>
        <li>Card rendered</li>
        <li>Query cell info</li>
        <li>Card click</li>
        <li>Card double click</li>
        <li>Drag start</li>
        <li>Drag</li>
        <li>Drag stop</li>
    </ol>
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
        padding-bottom: 10px
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



