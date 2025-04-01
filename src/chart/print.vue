<template>
  <div>
    <div class="col-lg-9 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'
        :pointRender='pointRender' :chartArea='chartArea'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Profit' width=2 :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px; text-align: center">
            <td>
              <b>Print the chart</b>
            </td>
          </tr>
          <tr style="height: 50px; text-align: center">
            <td>
              <div>
                <ejs-button id='togglebtn' @click='print' cssClass="e-flat" :iconCss='iconCss'
                  isPrimary="true">Print</ejs-button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the print option in the charts.
      </p>
    </div>
    <div id="description">
      <p>
        By clicking the <b>Print</b> button, you can print a chart directly from the browser using the <code>PrintAsync()</code> method.
      </p>
      <p>
        More information on the print can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-print/#print" aria-label="Navigate to the documentation for Print in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>

<style>
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
 
    .e-view.bootstrap5 .e-print-icon::before, .e-view.bootstrap5-dark .e-print-icon::before {
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
</style>

<script>
import { Browser } from "@syncfusion/ej2-base";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { EmitType } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme, pointRenderEvent } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-button': ButtonComponent
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: 'John', y: 10, DataLabelMappingName: "$10k" }, { x: 'Jake', y: 12, DataLabelMappingName: "$12k" }, { x: 'Peter', y: 18, DataLabelMappingName: "$18k" },
        { x: 'James', y: 11, DataLabelMappingName: "$11k" }, { x: 'Mary', y: 9.7, DataLabelMappingName: "$9.7k" }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0
        }
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        minimum: 0,
        maximum: 20,
        interval: 4,
        labelFormat: '${value}k',
        lineStyle: { width: 0 },
        majorGridLines: { width: 2 },
        majorTickLines: { width: 0 },
      },

      tooltip: {
        enable: false
      },
      iconCss: 'e-icons e-print-icon',
      legendSettings: { visible: false },
      marker: {
        dataLabel: {
          visible: true,
          name : 'DataLabelMappingName',
          position: "Top",
          font: {
            fontWeight: "600",
            color: '#ffffff',
          }
        }
      },
      title: "Sales Comparision"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, DataLabel]
  },
  methods: {
    print: function (args) {
      this.$refs.chart.print();
    },
    pointRender: function (args) {
      pointRenderEvent(args);
    },

  },
};
</script>