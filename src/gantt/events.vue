<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-gantt ref='gantt' id="Events" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'
        :allowSelection= 'true'
        :allowReordering= 'true'
        :allowSorting= 'true'
        :allowResizing= 'true'
        :enableContextMenu= 'true'
        :showColumnMenu= 'true'        
        :taskFields= "taskFields"
        :columns= "columns"
        :labelSettings= "labelSettings"
        :splitterSettings="splitterSettings"
        :treeColumnIndex= "1"
        :toolbar= "toolbar"
        :editSettings= "editSettings"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate"
        :created= "created"
        :load= "load"
        :dataBound= "dataBound"
        :toolbarClick= "toolbarClick"
        :beforeTooltipRender= "beforeTooltipRender"
        :actionBegin= "actionBegin"
        :actionComplete= "actionComplete"
        :cellEdit= "cellEdit"
        :endEdit= "endEdit"
        :taskbarEditing= "taskbarEditing"
        :taskbarEdited= "taskbarEdited"
        :rowSelecting= "rowSelecting"
        :rowSelected= "rowSelected"
        :rowDeselecting= "rowDeselecting"
        :rowDeselected= "rowDeselected"
        :columnDragStart= "columnDragStart"
        :columnDrag= "columnDrag"
        :columnDrop= "columnDrop"
        :expanding= "expanding"
        :expanded= "expanded"
        :collapsing= "collapsing"
        :collapsed= "collapsed"
        :columnMenuClick= "columnMenuClick"
        :columnMenuOpen= "columnMenuOpen"
        :contextMenuClick= "contextMenuClick"
        :contextMenuOpen= "contextMenuOpen"
        :resizeStart= "resizeStart"
        :resizing= "resizing"
        :resizeStop= "resizeStop"
        :splitterResizeStart= "splitterResizeStart"
        :splitterResizing= "splitterResizing"
        :splitterResized= "splitterResized"
        :recordDoubleClick= "recordDoubleClick"
        :onTaskbarClick= "onTaskbarClick">
        </ejs-gantt>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Event Trace">
                    <tr>
                        <td>
                            <div class="eventarea" style="height: 346px;overflow: auto;">
                                <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="evtbtn" style="width: 50%;padding: 20px 10px 10px 75px;">
                               <ejs-button v-on:click.native="clear">Clear</ejs-button>
                            </div>
                        </td>
                    </tr>
                </table>
        </div>
    </div>

   <div id="action-description">
            <p>This sample demonstrates all the events that occur on all the Gantt operations with the help of Event Trace panel.
    </p>
        </div>
        <div id="description">
            <p>The Gantt triggers events based on its actions. The events can be used as an extension point to perform custom operations.
    </p>
    <p>In this demo, perform Gantt actions such as load, created, dataBound, toolbarClick, beforeTooltipRender, actionBegin, actionComplete, cellEdit,
        endEdit, taskbarEditing, taskbarEdited, rowSelecting, rowSelected, rowDeselecting, rowDeselected, columnDragStart, columnDrag,
        columnDrop, expanding, expanded, collapsing, collapsed, columnMenuClick, columnMenuOpen, contextMenuClick, contextMenuOpen, resizeStart,
        resizing, resizeStop, splitterResizeStart, splitterResizing, splitterResized, recordDoubleClick, onTaskbarClick and
        see the <strong>Event Trace</strong> panel for the events emitted.
    </p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use a sorting, inject the
        <code>Sort</code> module using the <code>Gantt.Inject(Sort)</code> method.To reorder column, inject the
        <code>Reorder</code> module using the <code>Gantt.Inject(Reorder)</code> method.To resize column width, inject
        the <code>Resize</code> module using the <code>Gantt.Inject(Resize)</code> method.To use a contextmenu, inject the
        <code>Contextmenu</code> module using the <code>Gantt.Inject(Contextmenu)</code> method.To use a columnmenu,
        inject the <code>ColumnMenu</code> module using the <code>Gantt.Inject(ColumnMenu)</code> method.To use a toolbar, inject
        the <code>Toolbar</code> module using the <code>Gantt.Inject(Toolbar)</code> method.To use a edit, inject the
        <code>Edit</code> module using the <code>Gantt.Inject(Edit)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
        </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers, Reorder, Sort, Resize, ContextMenu, ColumnMenu, Toolbar, Edit, Filter, GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);


export default Vue.extend({
  data: () => {
    return {
      data: projectNewData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', width: 70 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
    };
  },
  provide: {
      gantt: [DayMarkers, Selection, Reorder, Sort, Resize, ContextMenu, ColumnMenu, Toolbar, Edit, Filter]
    },
    methods:{
    appendElement(html: string): void {
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = html;
        let log: HTMLElement = <HTMLElement>document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    },
    created(): void {
        this.appendElement('Gantt <b>created</b> event called<hr>');
    },
    load(): void {
        this.appendElement('Gantt <b>load</b> event called<hr>');
    },
    dataBound(): void {
        this.appendElement('Gantt <b>dataBound</b> event called<hr>');
    },
    toolbarClick(): void {
        this.appendElement('Gantt <b>toolbarClick</b> event called<hr>');
    },
    beforeTooltipRender(): void {
        this.appendElement('Gantt <b>beforeTooltipRender</b> event called<hr>');
    },
    actionBegin(): void {
        this.appendElement('Gantt <b>actionBegin</b> event called<hr>');
    },
    actionComplete(): void {
        this.appendElement('Gantt <b>actionComplete</b> event called<hr>');
    },
    cellEdit(): void {
        this.appendElement('Gantt <b>cellEdit</b> event called<hr>');
    },
    endEdit(): void {
        this.appendElement('Gantt <b>endEdit</b> event called<hr>');
    },
    taskbarEditing(): void {
        this.appendElement('Gantt <b>taskbarEditing</b> event called<hr>');
    },
    taskbarEdited(): void {
        this.appendElement('Gantt <b>taskbarEdited</b> event called<hr>');
    },
    rowSelecting(): void {
        this.appendElement('Gantt <b>rowSelecting</b> event called<hr>');
    },
    rowSelected(): void {
        this.appendElement('Gantt <b>rowSelected</b> event called<hr>');
    },
    rowDeselecting(): void {
        this.appendElement('Gantt <b>rowDeselecting</b> event called<hr>');
    },
    rowDeselected(): void {
        this.appendElement('Gantt <b>rowDeselected</b> event called<hr>');
    },
    columnDragStart(): void {
        this.appendElement('Gantt <b>columnDragStart</b> event called<hr>');
    },
    columnDrag(): void {
        this.appendElement('Gantt <b>columnDrag</b> event called<hr>');
    },
    columnDrop(): void {
        this.appendElement('Gantt <b>columnDrop</b> event called<hr>');
    },
    expanding(): void {
        this.appendElement('Gantt <b>expanding</b> event called<hr>');
    },
    expanded(): void {
        this.appendElement('Gantt <b>expanded</b> event called<hr>');
    },
    collapsing(): void {
        this.appendElement('Gantt <b>collapsing</b> event called<hr>');
    },
    collapsed(): void {
        this.appendElement('Gantt <b>collapsed</b> event called<hr>');
    },
    columnMenuClick(): void {
        this.appendElement('Gantt <b>columnMenuClick</b> event called<hr>');
    },
    columnMenuOpen(): void {
        this.appendElement('Gantt <b>columnMenuOpen</b> event called<hr>');
    },
    contextMenuClick(): void {
        this.appendElement('Gantt <b>contextMenuClick</b> event called<hr>');
    },
    contextMenuOpen(): void {
        this.appendElement('Gantt <b>contextMenuOpen</b> event called<hr>');
    },
    resizeStart(): void {
        this.appendElement('Gantt <b>resizeStart</b> event called<hr>');
    },
    resizing(): void {
        this.appendElement('Gantt <b>resizing</b> event called<hr>');
    },
    resizeStop(): void {
        this.appendElement('Gantt <b>resizeStop</b> event called<hr>');
    },
    splitterResizeStart(): void {
        this.appendElement('Gantt <b>splitterResizeStart</b> event called<hr>');
    },
    splitterResizing(): void {
        this.appendElement('Gantt <b>splitterResizing</b> event called<hr>');
    },
    splitterResized(): void {
        this.appendElement('Gantt <b>splitterResized</b> event called<hr>');
    },
    recordDoubleClick(): void {
        this.appendElement('Gantt <b>recordDoubleClick</b> event called<hr>');
    },
    onTaskbarClick(): void {
        this.appendElement('Gantt <b>onTaskbarClick</b> event called<hr>');
    },
    clear(): void {
        (<HTMLElement>document.getElementById('EventLog')).innerHTML = '';
    }
  }
});
</script>