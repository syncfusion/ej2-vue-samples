<template>
    <div class="col-lg-12 control-section">
        <div class="content-wrapper">


            <ejs-gantt  ref="gantt"
          id="ConstraintGantt"
          :dataSource="data"
          :dateFormat="dateFormat"
          :taskFields="taskFields"
          :toolbar="toolbar"
          :editSettings = "editSettings"
          :allowSelection="true"
          :gridLines="gridLines"
          :height="height"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :timelineSettings="timelineSettings"
          :labelSettings="labelSettings"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="columns"
          :eventMarkers="eventMarkers"
          :splitterSettings="splitterSettings">

                <template v-slot:rightLabel="{ data }">
                    <div>{{ getConstraintText(data.ganttProperties.constraintType) }}</div>
                </template>
            </ejs-gantt>
        </div>

        <div style="float: right; margin: 10px;">Source:
            <a href="https://en.wikipedia.org/wiki/Construction" target="_blank">https://en.wikipedia.org/</a>
        </div>
    </div>
     
    <div id="action-description">
    <p>
        This sample illustrates how to apply and visualize task constraints in a Gantt Chart. Task constraints define specific scheduling rules that determine when a task can start or finish, based on project requirements or dependencies.
    </p>
</div>

<div id="description">
    <p>
	        In Gantt Chart, task constraints define the rules that limit a task start or end date based on project scheduling needs. The following constraint types are supported:
        <ul>
	            <li><code>As Soon As Possible</code> - Task starts as early as possible. Default for auto-scheduled tasks.</li>
	            <li><code>As Late As Possible</code> - Task finishes as late as possible without delaying dependent tasks.</li>
	            <li><code>Must Start On</code> - Task must start on the specified date.</li>
	            <li><code>Must Finish On</code> - Task must finish on the specified date.</li>
	            <li><code>Start No Earlier Than</code> - Task cannot start before the specified date.</li>
	            <li><code>Start No Later Than</code> - Task must start on or before the specified date.</li>
	            <li><code>Finish No Earlier Than</code> - Task cannot finish before the specified date.</li>
	            <li><code>Finish No Later Than</code> - Task must finish on or before the specified date.</li>
        </ul>
        <br />
        <p>
            You can assign constraints to a task using the <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFieldsModel/#constraintType">taskFields.constraintType</a></code> and <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFieldsModel/#constraintDate">taskFields.constraintDate</a></code> properties.
            Constraints can also be updated interactively through the task edit dialog.
        </p>
    </p>
<p><strong>Handling constraint violation popup:</strong></p>
<p>
    To control or suppress the constraint violation dialog, handle the <code>actionBegin</code> event with <code>requestType</code> as <code>validateTaskViolation</code>. 
    Use <code>args.validateMode</code> to specify how to respond to constraint conflicts. Available properties include:
</p>
<ul>
    <li><code>respectMustStartOn</code></li>
    <li><code>respectMustFinishOn</code></li>
    <li><code>respectStartNoLaterThan</code></li>
    <li><code>respectFinishNoLaterThan</code></li>
</ul>
<p>
    These options are false by default, which means the violation popup appears. To suppress the popup and cancel conflicting changes silently, set the relevant flag(s) to <strong>true</strong>.
</p>
</div>
</template>

<script>
import {
    GanttComponent,
    Edit,
    Toolbar,
    DayMarkers,
    Selection,
    Filter,
    Sort,
    ContextMenu
} from "@syncfusion/ej2-vue-gantt";

import { constraintData } from "./data-source";

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: constraintData,
            dateFormat: "MMM dd, y",
            taskFields: {
                 id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                endDate: "EndDate",
                duration: "Duration",
                progress: "Progress",
                constraintDate:"ConstraintDate",
                constraintType:"ConstraintType",
                dependency: "Predecessor",
                parentID: 'ParentID',
                notes: 'info'
            },
           
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: [
                'Add', 'Edit', 'Update', 'Delete', 'Cancel',
                'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'
            ],
            allowSelection: true,
            gridLines: 'Both',
            height: '450px',
            highlightWeekends: true,
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'MMM dd, y',
                },
                bottomTier: {
                    unit: 'Day',
                },
            },
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', headerText: 'Job Name', width: 250, clipMode: 'EllipsisWithTooltip' },
                { field: 'ConstraintType', width: 180 },
                { field: 'ConstraintDate' },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' }
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'rightLabel'
            },
            height: "450px",
            splitterSettings: {
                columnIndex: 4
            },
            eventMarkers: [
              {
                day: new Date('03/25/2025'),
                label: 'Project StartDate'
              }, {
                day: new Date('08/28/2025'),
                label: 'Project EndDate'
              }
           ],
            projectStartDate: new Date('03/25/2025'),
            projectEndDate: new Date('09/28/2025')
        };
    },
    methods: {
        getConstraintText(props) {
            const map = {
                0: 'As Soon As Possible',
                1: 'As Late As Possible',
                2: 'Must Start On',
                3: 'Must Finish On',
                4: 'Start No Earlier Than',
                5: 'Start No Later Than',
                6: 'Finish No Earlier Than',
                7: 'Finish No Later Than'
            };
            return map[props] || '';
        }
    },
    provide: {
        gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]
    }
};
</script>
