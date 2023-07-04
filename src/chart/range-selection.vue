<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea'
        :legendSettings='legendSettings' :selectionMode='seriesMode' :width='width'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y' name='Product A' :marker='marker' opacity = 1>
          </e-series>
          <e-series :dataSource='seriesData1' type='Scatter' xName='x' yName='y' name='Product B' :marker='marker1' opacity = 1>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td>
              <div>Selection Mode</div>
            </td>
            <td>
              <ejs-dropdownlist id='selmode' :change='mode' :dataSource='selectdata' index=0
                :width='selectwidth'></ejs-dropdownlist>
            </td>
          </tr>
          <tr id='' style="height: 50px">
            <td style="width: 80%">
              <div> Enable Multi Selection:</div>
            </td>
            <td style="width: 50%; padding-left: 10px; padding-right:10px">
              <input type="checkbox" id="multiselect" @change='check'>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the range selection behavior and its mode in the charts.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to select points in a specific region. 
        You can change the <b>Selection Mode</b> in the properties panel. 
        You can also enable multiple selection.
      </p>
      <p>
        Click and drag to enable a rectangular selection and it will display the collection of points that are selected under the region.
      </p>
      <p>Rectangular selection can be set using the <code>SelectionMode</code> property, and it supports the following modes.
      </p>
      <ul>
        <li><code>DragXY</code> - Rectangular selection with respect to both axis.</li>
        <li><code>DragX</code> - Rectangular selection with respect to horizontal axis.</li>
        <li><code>DragY</code> - Rectangular selection with respect to vertical axis.</li>
      </ul>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use selection feature, we need
        to inject
        <code>Selection</code> module using <code>provide: { chart: [ Selection ] },</code> method.
      </p>
      <p>
        More information on the rectangular selection can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/selection/#rectangular-selection">documentation
          section</a>.
      </p>
    </div>

  </div>

</template>
<style scoped>
#multiselect:hover {
    cursor: pointer;
}
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { ChartPlugin, Selection, ScatterSeries, ColumnSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: 1971, y: 50 }, { x: 1972, y: 20 }, { x: 1973, y: 63 }, { x: 1974, y: 81 }, { x: 1975, y: 64 },
        { x: 1976, y: 36 }, { x: 1977, y: 22 }, { x: 1978, y: 78 }, { x: 1979, y: 60 }, { x: 1980, y: 41 },
        { x: 1981, y: 62 }, { x: 1982, y: 56 }, { x: 1983, y: 96 }, { x: 1984, y: 48 }, { x: 1985, y: 23 },
        { x: 1986, y: 54 }, { x: 1987, y: 73 }, { x: 1988, y: 56 }, { x: 1989, y: 67 }, { x: 1990, y: 79 },
        { x: 1991, y: 18 }, { x: 1992, y: 78 }, { x: 1993, y: 92 }, { x: 1994, y: 43 }, { x: 1995, y: 29 },
        { x: 1996, y: 14 }, { x: 1997, y: 85 }, { x: 1998, y: 24 }, { x: 1999, y: 61 }, { x: 2000, y: 80 },
        { x: 2001, y: 14 }, { x: 2002, y: 34 }, { x: 2003, y: 81 }, { x: 2004, y: 70 }, { x: 2005, y: 21 },
        { x: 2006, y: 70 }, { x: 2007, y: 32 }, { x: 2008, y: 43 }, { x: 2009, y: 21 }, { x: 2010, y: 63 },
        { x: 2011, y: 9 }, { x: 2012, y: 51 }, { x: 2013, y: 25 }, { x: 2014, y: 96 }, { x: 2015, y: 32 }

      ],
      seriesData1: [
        { x: 1971, y: 23 }, { x: 1972, y: 67 }, { x: 1973, y: 83 }, { x: 1974, y: 43 }, { x: 1975, y: 8 },
        { x: 1976, y: 41 }, { x: 1977, y: 56 }, { x: 1978, y: 31 }, { x: 1979, y: 29 }, { x: 1980, y: 87 },
        { x: 1981, y: 43 }, { x: 1982, y: 12 }, { x: 1983, y: 38 }, { x: 1984, y: 67 }, { x: 1985, y: 49 },
        { x: 1986, y: 67 }, { x: 1987, y: 83 }, { x: 1988, y: 16 }, { x: 1989, y: 89 }, { x: 1990, y: 18 },
        { x: 1991, y: 46 }, { x: 1992, y: 39 }, { x: 1993, y: 68 }, { x: 1994, y: 87 }, { x: 1995, y: 45 },
        { x: 1996, y: 42 }, { x: 1997, y: 28 }, { x: 1998, y: 82 }, { x: 1999, y: 13 }, { x: 2000, y: 83 },
        { x: 2001, y: 26 }, { x: 2002, y: 57 }, { x: 2003, y: 48 }, { x: 2004, y: 84 }, { x: 2005, y: 64 },
        { x: 2006, y: 24 }, { x: 2007, y: 82 }, { x: 2008, y: 37 }, { x: 2009, y: 68 }, { x: 2010, y: 37 },
        { x: 2011, y: 35 }, { x: 2012, y: 81 }, { x: 2013, y: 38 }, { x: 2014, y: 51 }, { x: 2015, y: 58 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        minimum: 1970,
        maximum: 2016,
        majorGridLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: 'Sales',
        labelFormat: '{value}%',
        interval: 25,
        minimum: 0,
        maximum: 100,
        lineStyle: { width: 0 },
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
      },
      chartArea: { border: { width: 0 } },
      selectdata: ['DragXY', 'DragX', 'DragY', 'Lasso'],
      selectwidth: 120,
      legendSettings: { visible: true, toggleVisibility: false },
      marker: {
        shape: 'Triangle',
        width: 7, height: 7
      },
      marker1: {
        shape: 'Pentagon',
        width: 7, height: 7
      },
      width : Browser.isDevice ? '100%' : '75%',
      seriesMode: 'DragXY',
      title: "Profit Comparision of A and B"
    };
  },
  provide: {
    chart: [Selection, Legend, ColumnSeries, Category, ScatterSeries]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    mode: function () {
      this.seriesMode = selmode.value;
    },
    check: function (e) {
      this.$refs.chart.ej2Instances.allowMultiSelection = e.target.checked;
      this.$refs.chart.ej2Instances.series[0].animation.enable = false;
      this.$refs.chart.ej2Instances.series[1].animation.enable = false;
      this.$refs.chart.ej2Instances.refresh();
    }
  },

});
</script>