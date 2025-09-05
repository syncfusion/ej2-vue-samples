<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="gantt" id="GanttExport" :dataSource="data" :dateFormat="dateFormat" :taskFields="taskFields"
          :toolbar="toolbar" :allowSelection="true" :allowExcelExport="true" :gridLines="gridLines" :height="height"
          :rowHeight="46" :taskbarHeight="25" :treeColumnIndex="1" :toolbarClick="toolbarClick"
          :resourceFields="resourceFields" :resources="resources" :highlightWeekends="true"
          :timelineSettings="timelineSettings" :labelSettings="labelSettings" :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate" :columns="columns" :allowPdfExport="true" :holidays="holidays"
          :eventMarkers="eventMarkers" :splitterSettings="splitterSettings">
        </ejs-gantt>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates client-side exporting of the Gantt, which
        allows you to export Gantt data to Excel, PDF and CSV formats. Using the
        Gantt toolbar buttons, you can export Gantt data to the desired format.
      </p>
    </div>

    <div id="description">
      <p>
        Gantt supports client-side exporting, which allows you to export its
        data to the Excel, PDF and CSV formats.
      </p>
      <p>
        In this demo, we have defined actions in the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#toolbarclick">toolbarClick</a>
        event to export the Gantt data using the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#excelexport">excelExport</a>,
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#pdfexport">pdfExport</a>
        and
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#csvexport">csvExport</a>methods.
      </p>

      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        To use Excel and CSV export features, we need to inject
        <code>ExcelExport</code> into the <code>provide</code> section.
      </p>
      <p>
        To use PDF feature, we need to inject <code>PdfExport</code> module using the
        <code>PdfExport</code> into the <code>provide</code> section.
      </p>
      <br>
      <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/excel-export/excel-export">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Selection, Toolbar, ExcelExport, PdfExport, PdfExportProperties, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from "./data-source";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
var isFitToWidth;
export default {
  components: {
    "ejs-gantt": GanttComponent,
    "ejs-switch": SwitchComponent,
  },
  data: function () {
    return {
      data: editingData,
      dateFormat: "MMM dd, y",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: 'ParentId',
        resourceInfo: "resources",
      },

      toolbar: ["ExcelExport", "CsvExport", "PdfExport"],
      gridLines: "Both",
      height: "650px",
      resourceFields: {
        id: "resourceId",
        name: "resourceName",
      },
      resources: editingResources,
      timelineSettings: {
        topTier: {
          unit: "Week",
          format: "MMM dd, y",
        },
        bottomTier: {
          unit: "Day",
        },
      },
      labelSettings: {
        leftLabel: "TaskName"
      },
      projectStartDate: new Date('03/26/2025'),
      projectEndDate: new Date('09/01/2025'),
      columns: [
        { field: "TaskID" },
        { field: "TaskName", width: "250" },
      ],
      splitterSettings: {
        columnIndex: 2,
      },
    };
  },
  provide: {
    gantt: [Selection, Toolbar, ExcelExport, PdfExport, DayMarkers],
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === "GanttExport_excelexport") {
        this.$refs.gantt.ej2Instances.excelExport();
      } else if (args.item.id === "GanttExport_csvexport") {
        this.$refs.gantt.ej2Instances.csvExport();
      } else if (args.item.id === "GanttExport_pdfexport") {
        this.$refs.gantt.ej2Instances.pdfExport();
      }
    },
  },
};
</script>

<style scoped>
.fluent2 #gantt-export1 /deep/,
.fluent2-dark #gantt-export1 /deep/ {
  margin: 6px 5px 0px 0px;
}
</style>