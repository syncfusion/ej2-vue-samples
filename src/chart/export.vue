<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :pointRender='pointRender'
        :chartArea='chartArea' :width='width'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' xName='Country' yName='GigaWatts' :marker='marker'>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td>
              <div>Export Type
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist ref="dropdown" id='mode' :change='modeChange' :dataSource='exportdata' index=0
                  :width='exportwidth'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>File Name</div>
            </td>
            <td>
              <div>
                <input type="text" requires="" value='Chart' id="fileName" />
              </div>
            </td>
          </tr>
          <tr align='center'>
            <td>
              <div>
                <ejs-button id='togglebtn' @click.native='exportIcon' :iconCss='iconCss' cssClass="e-flat"
                  isPrimary="true">Export</ejs-button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This example demonstrates how to save the chart as a PDF file and in image formats including JPEG, PNG, and SVG.
      </p>
    </div>
    <div id="description">
      <p>
        By clicking on <b>Export</b> button, you can export the chart to the specific type using <code>ExportAsync</code> method. To be more precise, define parameters such as the export type and the file name while exporting.
      </p>
      <p>
        More information on the export can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-print/#export">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style>
.e-export-icon::before {
  content: '\e728';
}

.e-view.fabric .e-export-icon::before,
.e-view.fabric-dark .e-export-icon::before {
  content: '\e710';
}

.e-view.bootstrap4 .e-export-icon::before {
  content: '\e780';
}

.e-view.tailwind-dark .e-export-icon::before,
.e-view.tailwind .e-export-icon::before {
  content: '\e7bf';
}

.e-view.highcontrast .e-export-icon::before {
  content: '\e710';
}

.e-view.bootstrap5 .e-export-icon::before,
.e-view.bootstrap5-dark .e-export-icon::before {
  content: '\e72e';
}

.e-view.material .e-export-icon::before,
.e-view.material-dark .e-export-icon::before,
.e-view.bootstrap .e-export-icon::before,
.e-view.bootstrap-dark .e-export-icon::before {
  content: '\e728';
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { Button } from '@syncfusion/ej2-vue-buttons';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import {
  pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors,
  pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors
} from './theme-color';
import { EmitType } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, Legend, Export, DataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
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
      //Initializing Primary Y Axis
      primaryYAxis:
      {
        title: 'Measurements (in Gigawatt)',
        labelFormat: Browser.isDevice ? '{value}' : '{value}GW',
        minimum: 0,
        maximum: 40,
        interval: 10,
        lineStyle: { width: 0 },
        majorGridLines: { width: 2 },
        majorTickLines: { width: 0 },
      },
      width : Browser.isDevice ? '100%' : '75%',
      tooltip: {
        enable: true
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
      exportdata: ['JPEG', 'PNG', 'SVG', 'PDF'],
      exportwidth: 120,
      title: "Top 10 Countries Using Solar Power",
      iconCss: 'e-icons e-export-icon',
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
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      if (selectedTheme === 'material-dark') {
        args.fill = pointMaterialDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'material') {
        args.fill = pointMaterialColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
        args.fill = pointFabricColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = pointBootstrap5DarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap5') {
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
      else {
        args.fill = pointBootstrapColors[args.point.index % 10];
      }
    },

  },

});
</script>