<template>
  <div>
    <div class="control-section">
      <div style="display: flex">
        <label for="checked" style="margin: 0px 5px 0px 0px; font-size: 15px">
          AutoFit in Pdf Export
        </label>
        <div>
          <ejs-switch id="checked" v-on:change="autoFit"></ejs-switch>
        </div>
      </div>
      <div class="content-wrapper">
        <ejs-gantt
          ref="gantt"
          id="GanttExport"
          :dataSource="data"
          :dateFormat="dateFormat"
          :taskFields="taskFields"
          :toolbar="toolbar"
          :allowSelection="true"
          :allowExcelExport="true"
          :gridLines="gridLines"
          :height="height"
          :treeColumnIndex="1"
          :toolbarClick="toolbarClick"
          :resourceFields="resourceFields"
          :resources="resources"
          :highlightWeekends="true"
          :timelineSettings="timelineSettings"
          :labelSettings="labelSettings"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="columns"
          :allowPdfExport="true"
          :holidays= "holidays"
          :eventMarkers= "eventMarkers"
          :splitterSettings="splitterSettings"
        >
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
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#toolbarclick">toolbarClick</a></code>
        event to export the Gantt data using the
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#excelexport">excelExport</a></code>,
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#pdfexport">pdfExport</a></code>
        and
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#csvexport">csvExport</a></code> methods.
      </p>
      <p>In addition we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width using 
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/gantt/pdf-export/pdf-export">fitToWidthSettings</a></code>
         in <code>PdfExportProperties</code> and also it includes the functionality allowing the PDF export of <code>holidays</code> and <code>eventMarkers</code>.</p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        To use Excel and CSV export features, we need to inject
        <code>ExcelExport</code> into the <code>provide</code> section.
      </p>
      <p>
        To use PDF feature, we need to inject <code>PdfExport</code> module using the
        <code>PdfExport</code> into the <code>provide</code> section.
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
        child: "subtasks",
        resourceInfo: "resources",
      },
      eventMarkers: [
            {
                day: new Date('04/02/2019'),               
            }, {
                day: new Date('04/09/2019'),
                label: 'Design phase'
            }, {
                day: new Date('04/19/2019'),
                label: 'Research phase'
            }, {
                day: new Date('05/23/2019'),
                label: 'Production phase'
            }, {
                day: new Date('06/20/2019'),
                label: 'Sales and marketing phase'
            }
        ],
      holidays: [
            {
                from: new Date('04/04/2019'),
                to: new Date('04/04/2019'),
                label: 'Local Holiday'
            }, {
                from: new Date('04/19/2019'),
                to: new Date('04/19/2019'),
                label: 'Good Friday'
            }, {
                from: new Date('04/30/2019'),
                to: new Date('04/30/2019'),
                label: 'Release Holiday'
            }, 
        ],
      toolbar: ["ExcelExport", "CsvExport", "PdfExport"],
      gridLines: "Both",
      height: "450px",
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
      projectStartDate: new Date("03/25/2019"),
      projectEndDate: new Date("07/28/2019"),
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
        var exportProperties = {
          fitToWidthSettings: {
            isFitToWidth: isFitToWidth
          },
        };
        this.$refs.gantt.ej2Instances.pdfExport(exportProperties);
      }
    },
    autoFit: function (args) {
      if (args.checked) {
        isFitToWidth = true;
      } else {
        isFitToWidth = false;
      }
    },
  },
};
</script>
