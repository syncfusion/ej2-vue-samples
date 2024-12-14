<template>
  <div>
    <div class="col-lg-9 control-section sb-property-border">
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :pointRender='pointRender'
        :chartArea='chartArea' :width='width' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' xName='Country' yName='GigaWatts' :marker='marker' name='Measurements (in Gigawatt)'>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
      <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -10px">
          <tr style="height: 50px">
            <td style="width: 40%">
              <div>Export Type
              </div>
            </td>
            <td  style="width: 60%;">
              <div style="margin-left: -10px;">
                <ejs-dropdownlist ref="dropdown" id='mode' :change='modeChange' :dataSource='exportdata' index=0
                  :width='exportwidth'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 40%">
              <div id="exportFile">File Name</div>
            </td>
            <td>
              <div style="margin-left: -10px; margin-top: -10px;" class="e-float-input">
                <input style="width: 90px;" type="text" requires="" value='Chart' id="fileName" aria-labelledby="Chart"/>
              </div>
            </td>
          </tr>
          <tr align='center'>
            <td>
              <div style="margin-left:50%;">
                <ejs-button id='togglebtn' @click='exportIcon' :iconCss='iconCss'
                  isPrimary="true">Export</ejs-button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    <div id="action-description">
      <p>
        This sample demonstrates client-side exporting of the chart, enabling you to export its data to Excel, PDF, and CSV formats. Additionally, it allows you to save the chart in image formats such as JPEG, PNG, and SVG.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how the export functionality is configured. The rendered chart can be exported in JPEG, PNG, SVG, and PDF file types. Data from the chart can also be exported to Excel and CSV files.
      </p>
          <p style="font-weight: 500"><b>Injecting Module</b></p>
          <p>
            Chart component features are segregated into individual feature-wise modules. To use export, we need to inject
              <code>Export</code> module using <code>provide: { chart: [Export] }</code> method.
          </p>
      <p>
        More information on the export can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-print/#export" aria-label="Navigate to the documentation for Export in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style>
.e-icons.e-chart-export::before {
        content: '\e728';
    }
 
    .e-view.fabric .e-icons.e-chart-export::before, .e-view.fabric-dark .e-icons.e-chart-export::before {
        content: '\e710';
    }
 
    .e-view.bootstrap4 .e-icons.e-chart-export::before {
        content: '\e780';
    }
 
    .e-view.tailwind3-dark .e-icons.e-chart-export::before, .e-view.tailwind3 .e-icons.e-chart-export::before {
        content: '\e7bf';
    }
 
    .e-view.highcontrast .e-icons.e-chart-export::before {
        content: '\e710';
    }
 
    .e-view.bootstrap5 .e-icons.e-chart-export::before, .e-view.bootstrap5-dark .e-icons.e-chart-export::before {
        content: '\e72e';
    }
    .e-view.fluent .e-icons.e-chart-export::before, .e-view.fluent-dark .e-icons.e-chart-export::before {
        content: '\e72e';
    }
    .e-view.fluent2 .e-icons.e-chart-export::before, .e-view.fluent2-dark .e-icons.e-chart-export::before, .e-view.fluent2-highcontrast .e-icons.e-chart-export::before {
        content: '\e72e';
    }
    .e-view.material3 .e-icons.e-chart-export::before, .e-view.material3-dark .e-icons.e-chart-export::before {
        content: '\e72e';
    }
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { ButtonComponent} from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, pointFluent2Colors, pointFluent2HighContrastColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';
import { EmitType } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Legend, Export, DataLabel } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Country: "India", GigaWatts: 35.5, DataLabelMappingName: Browser.isDevice ? "35.5" : "35.5GW" },
        { Country: "China", GigaWatts: 18.3, DataLabelMappingName: Browser.isDevice ? "18.3" : "18.3GW" },
        { Country: "Italy", GigaWatts: 17.6, DataLabelMappingName: Browser.isDevice ? " 17.6" : " 17.6GW"  },
        { Country: "Japan", GigaWatts: 13.6, DataLabelMappingName: Browser.isDevice ? "13.6" : "13.6GW" },
        { Country: "United state", GigaWatts: 12, DataLabelMappingName: Browser.isDevice ? "12" : "12GW"  },
        { Country: "Spain", GigaWatts: 5.6, DataLabelMappingName: Browser.isDevice ? "5.6" : "5.6GW"  },
        { Country: "France", GigaWatts: 4.6, DataLabelMappingName: Browser.isDevice ? "4.6" : "4.6GW"  },
        { Country: "Australia", GigaWatts: 3.3, DataLabelMappingName: Browser.isDevice ? "3.3" : "3.3GW"  },
        { Country: "Belgium", GigaWatts: 3, DataLabelMappingName: Browser.isDevice ? "3" : "3GW"  },
        { Country: "United Kingdom", GigaWatts: 2.9, DataLabelMappingName: Browser.isDevice ? "2.9" : "2.9GW"  },

      ],
      exporttype: 'JPEG',
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
        labelRotation: -45,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }

      },
      chartArea: {
        border: {
          width: 0
        }
      },
      legendSettings: { visible: false },
      //Initializing Primary Y Axis
      primaryYAxis:
      {
        labelFormat: '{value}GW',
        minimum: 0,
        maximum: 40,
        interval: 10,
        lineStyle: { width: 0 },
        majorGridLines: { width: 2 },
        majorTickLines: { width: 0 },
      },
      width : Browser.isDevice ? '100%' : '95%',
      tooltip: {
        enable: false
      },
      marker: {
        dataLabel: {
          visible: true,
          enableRotation: Browser.isDevice ? true : false,
          angle: Browser.isDevice ? -90 : 0,
          name: 'DataLabelMappingName',
          position: "Top",
          font: {
            fontWeight: "600",
            size: '9px',
            color: '#ffffff',
          }
        }
      },
      exportdata: ['JPEG', 'PNG', 'SVG', 'PDF', 'XLSX', 'CSV'],
      exportwidth: 90,
      title: "Top 10 Countries Using Solar Power",
      iconCss: 'e-icons e-chart-export icon',
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Export, DataLabel]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    modeChange: function (args) {
      this.exporttype = mode.value;
    },
    exportIcon: function (args) {
      let fileName = ((document.getElementById('fileName'))).value;
      this.$refs.chart.ej2Instances.exportModule.export(this.exporttype, fileName);
    },
    pointRender: function (args) {
      let selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
      if (selectedTheme === 'material-dark') {
        args.fill = pointMaterialDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'material') {
        args.fill = pointMaterialColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
        args.fill = pointFabricColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap5' || selectedTheme === 'bootstrap5-dark') {
        args.fill = pointBootstrap5Colors[args.point.index % 10];
      } 
      else if (selectedTheme === 'fluent-dark') {
        args.fill = pointFluentDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fluent') {
        args.fill = pointFluentColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
        args.fill = pointBootstrapColors[args.point.index % 10];
      }
      else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
      }
      else if (selectedTheme === 'highcontrast') {
        args.fill = pointHighContrastColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fluent2') {
        args.fill = pointFluent2Colors[args.point.index % 10];
      } 
      else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = pointFluent2HighContrastColors[args.point.index % 10];
      }
      else if (selectedTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
      } 
      else if (selectedTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
      } 
      else {
        args.fill = pointBootstrapColors[args.point.index % 10];
      }
    },

  },

};
</script>