<template>
  <div>
    <div class="col-md-10 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea'>
        <e-series-collection>
          <e-series :dataSource='GDP_2015' :type='seriesType' xName='Country' yName='GDPGrowthRate' name='2015' width=2
            :marker='marker'> </e-series>
          <e-series :dataSource='GDP_2016' :type='seriesType' xName='Country' yName='GDPGrowthRate' name='2016' width=2
            :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div class="col-md-2 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div id="indexed">Indexed
              </div>
            </td>
            <td>
              <div>
                <input type="checkbox" id="box" checked=true @change='indexed' :width='datawidth' aria-labelledby="Checkbox checked">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample shows an indexed category axis in a chart with details about GDP growth across different countries.
      </p>
    </div>
    <div id="description">
      <p>
        The category axis is also rendered on the basis of the index values in the data source. 
        To render the indexed category axis, set <code>ValueType</code> to <b>Category</b> and <code>IsIndexed</code> property to <b>true</b>.
      </p>
      <p>
        More information on the indexed axis can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/category-axis/#indexed-category-axis" aria-label="Navigate to the documentation for Indexed category axis in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>

<style >
#box:hover {
    cursor: pointer;
}
</style>

<script>
import { Browser, extend } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective, 
  SeriesCollectionDirective,
  ColumnSeries,
  LineSeries,
  Legend,
  Tooltip,
  Crosshair,
  Category, DataLabel,
} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      GDP_2015: [
        { Country: "India", GDPGrowthRate: 7.9 },
        { Country: "Myanmar", GDPGrowthRate: 7.3 },
        { Country: "Bangladesh", GDPGrowthRate: 6.0 },
        { Country: "Cambodia", GDPGrowthRate: 7.0 },
        { Country: "China", GDPGrowthRate: 6.9 },
      ],

      GDP_2016: [
        { Country: "Australia", GDPGrowthRate: 2.5 },
        { Country: "Poland", GDPGrowthRate: 2.7 },
        { Country: "Singapore", GDPGrowthRate: 2.0 },
        { Country: "Canada", GDPGrowthRate: 1.4 },
        { Country: "Germany", GDPGrowthRate: 1.8 },
      ],
      seriesType: "Column",
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        isIndexed: true,
        edgeLabelPlacement: 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
        majorTickLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}%",
        majorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      marker: {
        height: 10,
        width: 10,
        dataLabel: {
          visible: true,
          position: Browser.isDevice ? 'Outer' : "Top",
          font: { size : Browser.isDevice ? '8px' : '11px'}
        }
      },
      datatype: ["Line", "Column"],
      datawidth: 120,
      title: "GDP by Countries",
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category, DataLabel, Legend, Tooltip, Crosshair]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    indexed: function (args) {
      let element = document.getElementById("box");
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.isIndexed = element.checked;
      this.primaryXAxis = primaryXAxis;
      if (this.primaryXAxis.isIndexed) {
        this.seriesType = 'Column';
        this.marker.visible = false;
        let primaryXAxis = extend({}, this.primaryXAxis);
        primaryXAxis.labelRotation = 0;
        this.primaryXAxis = primaryXAxis;
      } else {
        this.seriesType = 'Line';
        this.marker.visible = true;
        let primaryXAxis = extend({}, this.primaryXAxis);
        primaryXAxis.labelRotation = 90;
        this.primaryXAxis = primaryXAxis;
      }
    }
  }
};
</script>
