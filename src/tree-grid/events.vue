<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :editSettings='editSettings' :allowSorting='true' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'
           :load='load' :created='create' :actionBegin='actionBegin' :expanded='expanded' :collapsed='collapsed'
                :actionComplete='actionComplete' :rowSelecting='rowSelecting' 
                :rowSelected='rowSelected' :rowDeselected='rowDeselected' :columnDragStart='columnDragStart' :columnDrag='columnDrag'
                :columnDrop='columnDrop' :beginEdit='beginEdit' :dataBound='dataBound'>
            <e-columns>
                 <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
                 <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
                 <e-column field='startDate' headerText='Start Date' width='100' format="yMd"  editType='datepickeredit' textAlign='Right' :validationRules='startdaterules'></e-column>
                 <e-column field='duration' headerText='Duration' width='90' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Event Trace">
                    <tr>
                        <td>
                            <div class="eventarea" style="height: 245px;overflow: auto;width: 100%;padding-right: 10px;">
                                <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="evtbtn" style="padding-bottom: 10px">
                               <ejs-button v-on:click.native="clear">Clear</ejs-button>
                            </div>
                        </td>
                    </tr>
                </table>
        </div>
    </div>

   <div id="action-description">
            <p>This sample demonstrates all the events that have been triggered on all the TreeGrid operations with the help of Event Trace
                panel.
            </p>
        </div>
        <div id="description">
            <p>The TreeGrid triggers events based on its actions. The events can be used as an extension
                point to perform custom operations.
            </p>
            <p>In this demo, perform TreeGrid actions like paging, sorting, reordering, filtering etc. and see
                the <strong>Event Trace</strong> panel for the events emitted.
            </p>
            <p>More information on the Grid events can be found in the documentation section.
            </p>
        </div>
</div>
</template>
<!-- custom code start -->
<style>
        #EventLog b{
            color: #388e3c;
        }
        hr {
            margin: 1px 10px 1px 0px;
            border-top: 1px solid #eee;
        }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageCount: 4, pageSize: 10 },
       editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
    appendElement(html: string): void {
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = html;
        let log: HTMLElement = <HTMLElement>document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    },
    beginEdit(): void {
        this.appendElement('TreeGrid <b>beginEdit</b> event called<hr>');
    },
    columnDragStart(): void {
        this.appendElement('TreeGrid <b>columnDragStart</b> event called<hr>');
    },
    columnDrop(): void {
        this.appendElement('TreeGrid <b>columnDrop</b> event called<hr>');
    },
    columnDrag(): void {
        this.appendElement('TreeGrid <b>columnDrag</b> event called<hr>');
    },
    load(): void {
        this.appendElement('TreeGrid <b>load</b> event called<hr>');
    },
    create(): void {
        this.appendElement('TreeGrid <b>create</b> event called<hr>');
    },
    actionBegin(): void {
        this.appendElement('TreeGrid <b>actionBegin</b> event called<hr>');
    },
    actionComplete(): void {
        this.appendElement('TreeGrid <b>actionComplete</b> event called<hr>');
    },
    dataBound(): void {
        this.appendElement('TreeGrid <b>dataBound</b> event called<hr>');
    },
    rowSelecting(): void {
        this.appendElement('TreeGrid <b>rowSelecting</b> event called<hr>');
    },
    rowSelected(): void {
        this.appendElement('TreeGrid <b>rowSelected</b> event called<hr>');
    },
    rowDeselecting(): void {
        this.appendElement('TreeGrid <b>rowDeselecting</b> event called<hr>');
    },
    rowDeselected(): void {
        this.appendElement('TreeGrid <b>rowDeselected</b> event called<hr>');
    },
    expanded(): void {
        this.appendElement('TreeGrid <b>expanded</b> event called<hr>');
    },
    collapsed(): void {
        this.appendElement('TreeGrid <b>collapsed</b> event called<hr>');
    },
    clear(): void {
        (<HTMLElement>document.getElementById('EventLog')).innerHTML = '';
    }
   
  }

});
</script>