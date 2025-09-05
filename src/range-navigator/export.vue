<template>
<div>
<div id="action-description">
    <p>
        This sample illustrates the export feature in the range navigator. You can export the range navigator in PNG, SVG, PDF, or JPEG format by clicking <code>Export</code>.
    </p>
</div>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
            <br>
            <h1 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px; margin-top: 10px;"> Conns,Inc Stock Close Details</h1>
            <div align="center">
                <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerExport' :value='value' groupBy='Quarter'
                    valueType='DateTime' intervalType='Months' labelFormat='MMM' enableGrouping=true :dataSource='dataSource' xName='xDate'
                    yName='Close' :width='width' :changed='changed' :theme='themes' animationDuration=500>
                </ejs-rangenavigator>
            </div>
            <br>
            <br>
            <div align="center">
                <ejs-chart style='display:block;' ref='chart' id='chartExport' align='center' :chartArea='chartArea' :width='width' :primaryXAxis='primaryXAxis'
                    :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings' height='350' :theme='themes'>
                    <e-series-collection>
                        <e-series :dataSource='dataSource' name='Close' xName='xDate' yName='Close' width='2' type='SplineArea' :border='border' :fill='fill'></e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width: 40%">
                            <div>Export Type:</div>
                        </td>
                        <td style="width: 60%;">
                            <div>
                            <ejs-dropdownlist ref='dropdown' id='exporttype' index=0 :dataSource='dropDownData' width='90'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 40%">
                            <div id="filename">File Name:</div>
                        </td>
                        <td style="width: 40%;">
                            <div class="e-float-input" style='margin-top: 0px;  width: 100px;'>
                                <input type="text" value="Chart" id="fileName" aria-labelledby="Chart">
                            </div>
                        </td>
                    </tr>
                    <tr id="button-control" style="height: 50px" align='center'>
                        <td align='center'>
                            <div style="margin-left: 50%;">
                                <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click='onClick' id="rangeExportBtn">EXPORT</ejs-button>
                            </div>
                        </td>
                    </tr>
                    <tr id="button-control" style="height: 50px">
                            <td align='center'>
                                <div style="margin-left: 50%;">
                                     <ejs-button id="togglebtn" cssClass= 'e-flat' isPrimary=true :iconCss='iconCss' v-on:click='mode'>Print</ejs-button>
                                </div>
                            </td>
                        </tr>
                </table>
    </div>
</div>

<div id="description">
    <p>
        In this example, you can see how to render and configure the export feature. The rendered range navigator can be exported as either JPEG, PNG, or SVG format. It can be achieved using the Blob. It is supported only in modern browsers.
    </p>
    <p>
        More information on the export can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/range-navigator/export-print" aria-label="Navigate to the documentation for series in EJ2 TypeScript Chart component">documentation section</a>.
    </p>
</div>
</div>
</template>
<style>

    #button-control {
      width: 100%;
      text-align: center;
    }

    #control-containerExport {
      padding: 0px !important;
    }
  
    .e-print-icon::before {
        content: '\e34b';
    }
 
    .e-view.fabric .e-print-icon::before, .e-view.fabric-dark .e-print-icon::before {
        content: '\e7df';
    }
 
    .e-view.bootstrap .e-print-icon::before {
        content: '\ebd2';
    }
 
   .e-view.bootstrap4 .e-print-icon::before {
        content: '\e743';
    }
 
    .e-view.tailwind3 .e-print-icon::before, .e-view.tailwind3-dark .e-print-icon::before {
        content: '\e76c';
    }
 
    .e-view.highcontrast .e-print-icon::before {
        content: '\ebf9';
    }
 
    .e-view.bootstrap5\.3 .e-print-icon::before, .e-view.bootstrap5\.3-dark .e-print-icon::before {
        content: '\e75d';
    }
 
    .e-view.fluent .e-print-icon::before, .e-view.fluent-dark .e-print-icon::before {
        content: '\e75d';
    }
    .e-view.fluent2 .e-print-icon::before, .e-view.fluent2-dark .e-print-icon::before, .e-view.fluent2-highcontrast .e-print-icon::before {
        content: '\e75d';
    }
    .e-view.material3 .e-print-icon::before, .e-view.material3-dark .e-print-icon::before {
        content: '\e75d';
    }
    .e-export-icon::before {
        content: '\e728';
    }
 
    .e-view.fabric .e-export-icon::before, .e-view.fabric-dark .e-export-icon::before {
        content: '\e710';
    }
 
    .e-view.bootstrap4 .e-export-icon::before {
        content: '\e780';
    }
 
    .e-view.tailwind3-dark .e-export-icon::before, .e-view.tailwind3 .e-export-icon::before {
        content: '\e7bf';
    }
 
    .e-view.highcontrast .e-export-icon::before {
        content: '\e710';
    }
 
    .e-view.bootstrap5\.3 .e-export-icon::before, .e-view.bootstrap5\.3-dark .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.fluent .e-export-icon::before, .e-view.fluent-dark .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.fluent2 .e-export-icon::before, .e-view.fluent2-dark .e-export-icon::before, .e-view.fluent2-highcontrast .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.material3 .e-export-icon::before, .e-view.material3-dark .e-export-icon::before {
        content: '\e72e';
    }
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { RangeNavigatorComponent, ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineAreaSeries, StepLineSeries, DateTime, Crosshair,
  Tooltip, Export} from "@syncfusion/ej2-vue-charts";
import { exportData } from "./data-source";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

import {  loadRangeNavigatorTheme } from "./theme-color";

let theme = loadRangeNavigatorTheme();

let themes = ['Material', 'Fabric', 'Bootstrap', 'HighContrast', 'Bootstrap5', 'Tailwind', 'MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Bootstrap5Dark', 'Bootstrap4', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark', 'Fluent2', 'Fluent2HighContrast', 'Fluent2Dark', 'Tailwind3', 'Tailwind3Dark'];
let borderColor = ['#FF4081', '#007897', '#428BCA', '#FFD939', '#FD7E14', '#4F46E5', '#FF4081', '#007897', '#428BCA', '#22D3EE', '#FD7E14', '#FFD939', '#614570', '#8AB113', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
let regionColor = ['rgba(255, 64, 129, 0.3)', ' rgba(0, 120, 151, 0.3)', 'rgba(66, 139, 202, 0.3)', 'rgba(255, 217, 57, 0.3)', 'rgba(47, 64, 116, 0.3)',
    'rgba(79, 70, 229, 0.3)', 'rgba(255, 64, 129, 0.3)', 'rgba(0, 120, 151, 0.3)', 'rgba(66, 139, 202, 0.3)', 'rgba(34, 211, 238, 0.3)',
    'rgba(173,181,189,0.3)', 'rgba(255, 217, 57, 0.3)', 'rgba(97,69,112,0.3)', 'rgba(138,177,19,0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-rangenavigator': RangeNavigatorComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      //Chart Properties
      primaryXAxis: {
         valueType: 'DateTime', crosshairTooltip: { enable: true },
         edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
      },
      fill: regionColor[themes.indexOf(theme)],
      border: { width: 2, color: borderColor[themes.indexOf(theme)] },
      primaryYAxis: {
          minimum: 81, maximum: 87, interval: 2,
            majorTickLines: { width: 0 }, lineStyle: { width: 0 },
            labelFormat: '{value}M', title: 'Million in USD'
      },
      chartArea: { border: { width: 0 } },
      tooltip: { enable: true, shared: true },
      legendSettings: { visible: false },
      
      //Range Navigator Properties
      value: [new Date('2013-05-01'), new Date('2013-08-01')],
      dataSource: exportData,
      width: "100%",
      navigatorBorder: { width: 0 },
      dropDownData: ["JPEG", "PNG", "SVG", "PDF"],
      themes: theme,
      iconCss: 'e-icons e-print-icon',
    };
  },
  provide: {
    rangeNavigator: [DateTime],
    chart: [SplineAreaSeries, DateTime, Crosshair, Tooltip, Export]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
   changed: function(args) {
     if(document.getElementById('chartExport').children.length && !document.getElementById('chartExport').querySelector('div.e-directive')) {
        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
        this.$refs.chart.ej2Instances.dataBind();
     }
    },
    onClick: function(args) {
      let fileName = document.getElementById("fileName").value;
      let rangeComponent = this.$refs.range.ej2Instances;
      let chart = this.$refs.chart.ej2Instances;
      let dropDown = this.$refs.dropdown.ej2Instances;
      chart.exportModule.export(dropDown.value, fileName, null, [rangeComponent, chart]);
    },
    mode: function(args) {
      this.$refs.range.ej2Instances.print(["containerExport", "chartExport"]);
    }
  }
};
</script>