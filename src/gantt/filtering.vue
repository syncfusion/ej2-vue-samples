<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer"  
            :dataSource= "dataSource"
            :dateFormat= "dateFormat"
            :taskFields= "taskFields"
            :columns= "columns"
            :treeColumnIndex= "0"
            :toolbar= "toolbar"
            :allowFiltering= "true"
            :includeWeekend= "true"
            :height= "height"
            :timelineSettings= "timelineSettings"
            :splitterSettings= "splitterSettings"
            :durationUnit= 'Hour'
            :dayWorkingTime= "dayWorkingTime"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :actionComplete= "actionComplete"
        >
        </ejs-gantt>
        <div style="float: right; margin: 10px;">Source:
            <a href="https://en.wikipedia.org/wiki/Apollo_11#Launch_and_flight_to_lunar_orbit"
                target='_blank'>https://en.wikipedia.org/</a>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample visualizes the manned lunar mission, which landed the first human on the Moon using the Apollo 11
        spacecraft in the year 1969. It also demonstrates the filtering feature available in the Gantt chart. You can filter
        a particular column using the filter menu available in the columns. This sample is also enabled with the toolbar
        searching option to filter the Gantt content across all the columns.</p>
</div>

<div id="description">
    <p>
        The filtering feature enables the user to view reduced amount of records based on filter criteria. The column
        menu filtering can be enabled by setting <code>allowFiltering</code> property as <code>true</code> and toolbar
        search box can
        be enabled
        by including the search item in the <code>toolbar</code> property.
        Gantt chart also provides support for a set of filtering modes with <code>hierarchyMode</code> property. The
        below are the
        type of filter mode available in Gantt chart.
        <li><code>Parent</code> - This is the default filter hierarchy mode in Gantt chart. The filtered records are
            displayed with its
            parent records, if the filtered records not have any parent record then the filtered record alone will be
            displayed.</li>
        <li><code>Child</code> - The filtered records are displayed with its child record, if the filtered records do
            not have any
            child record then only the filtered records are displayed.</li>
        <li><code>Both</code> - The filtered records are displayed with its both parent and child record. If the
            filtered records do
            not have any parent and child record then only the filtered records are displayed.</li>
        <li><code>None</code> - Only the filtered records are displayed.</li>
    </p>

    <p>
        Gantt component features are segregated into individual feature-wise modules. To use filtering feature, we need
        to inject <code>Filter</code> module, and use the toolbar support we need to inject <code>Toolbar</code> module.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Filter, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { filteredData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            dataSource: filteredData,
            dateFormat: 'MM/dd/yyyy hh:mm:ss',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'subtasks',
            },
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: '250' , clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'EndDate', headerText: 'End Date' },
                { field: 'Predecessor', headerText: 'Predecessor' }
            ],
            toolbar: ['Search'],
            height: '450px',
            timelineSettings: {
                timelineUnitSize: 60,
                topTier: {
                    format: 'MMM dd, yyyy',
                    unit: 'Day',
                },
                bottomTier: {
                    unit: 'Hour',
                    format: 'h.mm a'
                },
            },
            splitterSettings: {
                columnIndex: 3
            },
            dayWorkingTime: [{ from: 0, to: 24 }],
            labelSettings: {
                rightLabel: 'TaskName',
            },
            projectStartDate: new Date('07/16/1969 01:00:00 AM'),
            projectEndDate: new Date('07/25/1969')
        };
    },
    methods: {
            actionComplete: function(args) {
                if (args.requestType == "filterafteropen" && (args.columnName === "StartDate" || args.columnName === "EndDate")) {
                    args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].min = new Date(1969, 5, 1);
                    args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].max = new Date(1969, 8, 30);
                    args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].showTodayButton = false;
                    args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].dataBind();
                }
              }
    },
  provide: {
      gantt: [Filter, Toolbar, Selection]
  }
});
</script>
