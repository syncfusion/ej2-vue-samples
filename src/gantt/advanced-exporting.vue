<template>
  <div>
    <div class="control-section">
      <div style="display: flex">
        <label id="gantt-export1" for="checked" style="margin: 0px 5px 0px 0px; font-size: 15px">
          AutoFit in Pdf Export
        </label>
        <div>
          <ejs-switch id="checked" v-on:change="autoFit"></ejs-switch>
        </div>
      </div>
      <div class="content-wrapper">
        <ejs-gantt
          ref="gantt"
          id="advanceExport"
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
          :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" 
          :holidays="holidays"
          :eventMarkers="eventMarkers"
          :splitterSettings="splitterSettings"
          :enableCriticalPath="true"
           :queryTaskbarInfo="queryTaskbarInfo"
        >
        <template v-slot:leftLabelTemplate="{data}">
            <span style="marginLeft:5px;marginRight:5px">{{ data.TaskName }}</span>
        </template>
        <template v-slot:rightLabelTemplate="{data}">
          <div v-if="data.ganttProperties.resourceInfo">
            <span v-for="resource in data.ganttProperties.resourceInfo">
              <img :src="'src/gantt/images/' + resource.resourceName + '.png'"
              style="height: 40px;" :alt="resource.resourceName"/>
              <span style="marginLeft:5px;marginRight:5px">{{ resource.resourceName }}</span>
            </span>
          </div>
        </template>
        </ejs-gantt>
      </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the advanced PDF export features of the Gantt Chart, allowing customization of various
          elements such as headers, footers, task labels, event markers, holidays, and taskbars. These customizations can
          be configured using the
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/">pdfExportProperties</a>
          and
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs/">pdfQueryTaskbarInfo</a>
          event.
        </p>
    </div>

    <div id="description">
        <p>In this sample, the Gantt Chart's PDF export functionality
           is enhanced with various customization options:
        </p>

        <ul>
          <li>
            <strong>Custom Headers and Footers</strong>: The headers and footers in the exported PDF can be
            customized using the
            <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/#header">header</a>
            and
            <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/#footer">footer</a>
            properties,which allowing us to include relevant information of exported PDF.
          </li>
          <li>
            <strong>Taskbar and Task Label Styling</strong>:Taskbar and Task Label appearance can be customized in
            the exported PDF using the
            <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs">pdfQueryTaskbarInfoEvent</a>.
          </li>
          <li>
            <strong> Event marker and holiday</strong>:Event marker and holiday can be cusotmized in exported PDF
            using
            <a target="_blank"
              href="https://helpej2.syncfusion.com/documentation/api/gantt/pdfExportProperties/#ganttstyle">ganttstyle</a>
            in <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties">pdfExportProperties</a>.
          </li>
          <li>
            <strong>Fit-to-Width Support</strong>: This feature allows the Gantt component's rows to be auto-fitted
            to the width of the PDF document's page using the
            <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/#fittowidthsettings">fitToWidthSettings</a>
            in <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties">pdfExportProperties</a>.
          </li>
        </ul>

        <p>More information about advanced PDF exporting features in Gantt can be found in the <a target="_blank"
          href="https://ej2.syncfusion.com/javascript/documentation/gantt/pdf-export/pdf-export">documentation
          section</a>.</p>

      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        To use PDF feature, we need to inject <code>PdfExport</code> module using the
        <code>PdfExport</code> into the <code>provide</code> section.
      </p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Selection, Toolbar, ExcelExport, PdfExport, PdfExportProperties, DayMarkers, CriticalPath } from "@syncfusion/ej2-vue-gantt";
import {  editingResources , pdfExportdata} from "./data-source";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import {
    PdfColor,
    PdfFontStyle,
    PdfPen,
    PdfDashStyle,
  } from '@syncfusion/ej2-pdf-export';
var isFitToWidth;
export default {
  components: {
    "ejs-gantt": GanttComponent,
    "ejs-switch": SwitchComponent,
  },
  data: function () {
    return {
      data: pdfExportdata,
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
                    day: new Date('04/09/2025'),
                    label: 'Research phase'
                }, 
                {
                    day: new Date('06/20/2025'),
                    label: 'Sales and marketing phase'
                }
            ],
        holidays: [
            {
                from: new Date('04/04/2025'),
                to: new Date('04/04/2025'),
                label: 'Local Holiday'
            }, {
                from: new Date('04/19/2025'),
                to: new Date('04/19/2025'),
                label: 'Good Friday'
            }, {
                from: new Date('04/30/2025'),
                to: new Date('04/30/2025'),
                label: 'Release Holiday'
            },
        ],
      toolbar: ["PdfExport"],
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
        leftLabel: "leftLabelTemplate",
        rightLabel: "rightLabelTemplate"
        },
      projectStartDate: new Date("03/25/2025"),
      projectEndDate: new Date("06/25/2025"),
      columns: [
        { field: "TaskID" },
        { field: "TaskName", width: "250" },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Progress' },
      ],
      splitterSettings: {
        columnIndex: 2,
      },
    };
  },
  provide: {
    gantt: [Selection, Toolbar, ExcelExport, PdfExport, DayMarkers, CriticalPath],
  },
  methods: {
    toolbarClick: function (args) {
    if (args.item.id === "advanceExport_pdfexport") {
        var borderWidth = 1;
        var borderColor = new PdfColor(227, 22, 91);
        var pdfpen = new PdfPen(borderColor, borderWidth);
        pdfpen.dashStyle = PdfDashStyle.Dash;
        var exportProperties = {
            pageSize: 'A2',
          fileName: "Product Development Report.pdf",
          ganttStyle: {
            eventMarker: {
              label: { fontColor: new PdfColor(33, 33, 33), 
                fontStyle: PdfFontStyle.Bold, 
                backgroundColor: new PdfColor(253, 191, 100) },
              lineStyle: pdfpen,
            },
            holiday: {
              fontColor: new PdfColor(33, 33, 33),
              backgroundColor: new PdfColor(243, 244, 246),
            },
          },
          header: {
            fromTop: 0,
            height: 150,
            contents: [
              { type: 'Text', value: 'Product Development Lifecycle Gantt Chart Report March 2025 - June 2025', position: { x: 20, y: 20 }, style: { textBrushColor: '#00008B', fontSize: 24 } },
              { type: 'Line', style: { penColor: '#00008B', penSize: 2, dashStyle: 'Solid' }, points: { x1: 20, y1: 70, x2: 755, y2: 70 } }
            ]
          },
          footer: {
            fromBottom: 160,
            height: 100,
            contents: [
              { type: 'Text', value: "© 2024 Syncfusion Inc. All Rights Reserved.\n" + "Generated on: " + new Date().toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }), position: { x: 1950, y: 40 }, style: { textBrushColor: '#3a435e', fontSize: 20 } }
            ]
          },
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
    pdfQueryTaskbarInfo: function (args)  {
        args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName;
        if (args.data.ganttProperties.resourceNames) {
            args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
            args.labelSettings.rightLabel.image = [{
                base64: args.data.taskData.resourcesImage, width: 20, height: 20
            }];
            if(args.data.ganttProperties.taskId === 7){
                args.labelSettings.leftLabel.value = 'Custom Label';
                args.labelSettings.leftLabel.fontStyle.fontColor = new PdfColor(142,36,64);
            }
        }
        var theme = document.body.classList.contains('tailwind3-dark') || document.body.classList.contains('fluent2-dark') ||
        document.body.classList.contains('material3-dark') || document.body.classList.contains('bootstrap5.3-dark') ||
        document.body.classList.contains('fluent2-highcontrast') || document.body.classList.contains('fluent2-dark');
        if( theme && args.data.isCritical) {
            args.taskbar.progressColor = new PdfColor(172, 6, 136);
            args.taskbar.taskColor =  args.taskbar.taskBorderColor = new PdfColor(73, 4, 58);
        }
        else if(!theme && args.data.isCritical){
            args.taskbar.progressColor = new PdfColor(176, 0, 138);
            args.taskbar.taskColor = new PdfColor(255, 206, 244);
        }
    },
     queryTaskbarInfo : function (args) {
        var theme = document.body.classList.contains('tailwind3-dark') || document.body.classList.contains('fluent2-dark') ||
        document.body.classList.contains('material3-dark') || document.body.classList.contains('bootstrap5.3-dark') ||
        document.body.classList.contains('fluent2-highcontrast') || document.body.classList.contains('fluent2-dark');
        if(theme && args.data.isCritical){
            args.taskbarBgColor = "#49043A";
            args.progressBarBgColor = "#AC0688";
        }else if(!theme && args.data.isCritical){
            args.progressBarBgColor = "#B0008A";
            args.taskbarBgColor = "#FFCEF4";
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