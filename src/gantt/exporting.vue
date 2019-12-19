<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttExport"
            :dataSource= "data"
            :dateFormat= "dateFormat"
            :taskFields= "taskFields"
            :toolbar= "toolbar"
            :allowSelection= "true"
            :allowExcelExport= "true"
            :gridLines= "gridLines"
            :height= "height"
            :treeColumnIndex= "1"
            :toolbarClick= "toolbarClick"
            :resourceNameMapping= "resourceNameMapping"
            :resourceIDMapping= "resourceIdMapping"
            :resources= "resources"
            :highlightWeekends= "true"
            :timelineSettings= "timelineSettings"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :columns = "columns"
            :splitterSettings= "splitterSettings">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates client-side exporting of the Gantt, which allows you to export Gantt data to Excel and CSV formats. Using the Gantt toolbar buttons, you can export Gantt data to the desired format. </p>
</div>

<div id="description">
    <p>Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. </p>
    <p>In this demo, we have defined actions in the <code>toolbarClick</code> event to export the Gantt data using the <code>excelExport</code> and <code>csvExport</code> methods.</p>

    <p style="font-weight: 500">Injecting Module:</p>
    <p>To use Excel and CSV export features, inject the <code>ExcelExport</code> module using the <code>Gantt.Inject(ExcelExport)</code> method. </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: editingData,
            dateFormat: 'MMM dd, y',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                resourceInfo: 'resources'
            },
            toolbar: ['ExcelExport', 'CsvExport'],
            gridLines: 'Both',
            height: '450px',
            resourceNameMapping: 'resourceName',
            resourceIdMapping: 'resourceId',
            resources: editingResources,
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'MMM dd, y',
                },
                bottomTier: {
                    unit: 'Day',
                },
            },
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
            },
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('07/28/2019'),
            columns: [
                { field: 'TaskID'},
                { field: 'TaskName', width: '250' },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
                { field: 'resources' }
            ],
            splitterSettings: {
                columnIndex: 2
            }
      };
  },
  provide: {
      gantt: [Selection, Toolbar, ExcelExport]
  },
  methods:{
      toolbarClick:function (args) {
        if (args.item.id === 'GanttExport_excelexport') {
           this.$refs.gantt.ej2Instances.excelExport();
        }
        if (args.item.id === 'GanttExport_csvexport') {
            this.$refs.gantt.ej2Instances.csvExport();
        }  
    }
  }
});
</script>