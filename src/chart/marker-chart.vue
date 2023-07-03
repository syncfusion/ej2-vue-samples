<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
        :tooltip='tooltip' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Line' xName='Country' yName='FBUser_07' name='2007' width=2
            :marker='marker'> </e-series>
          <e-series :dataSource='seriesData' type='Line' xName='Country' yName='FBUser_08' name='2008' width=2
            :marker='marker1'> </e-series>
          <e-series :dataSource='seriesData' type='Line' xName='Country' yName='FBUser_09' name='2009' width=2
            :marker='marker2'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates Facebook users in a chart for different countries over several years. 
        In a line-based series, data points can be annotated using symbols.
      </p>
    </div>
    <div id="description">
      <p>
        Each data point in a series can be represented by a symbol as a marker. 
        You can customize the shape, size, and color of the symbol through <code>marker</code> properties.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p>
        More information on the marker can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/data-markers/#marker">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, Category, Legend, Tooltip, Highlight } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Country: "World Wide", FBUser_07: 12, FBUser_08: 22, FBUser_09: 38.3, TooltipMappingName: "World Wide" },
        { Country: "Europe", FBUser_07: 9.9, FBUser_08: 26, FBUser_09: 45.2, TooltipMappingName: "Europe" },
        { Country: "Asia Pacific", FBUser_07: 6.4, FBUser_08: 9.6, FBUser_09: 18.2, TooltipMappingName: "Asia Pacific" },
        { Country: "Latin America", FBUser_07: 4.4, FBUser_08: 28, FBUser_09: 46.7, TooltipMappingName: "Latin America" },
        { Country: "Middle East Africa", FBUser_07: 30, FBUser_08: 45.7, FBUser_09: 61.5, TooltipMappingName: "Middle East Africa" },
        { Country: "North America", FBUser_07: 25.3, FBUser_08: 35.9, FBUser_09: 64, TooltipMappingName: "North America" },
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: 1, labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
        majorGridLines: { width: 0 }, majorTickLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis:
      {
        rangePadding: 'None', title: 'Penetration',
        labelFormat: '{value}%', minimum: 0,
        lineStyle: { width: 0 },
        maximum: 75, interval: 15,
        majorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? '100%' : "75%",
      marker: {
        visible: true, width: 8, height: 8,
        isFilled: true,
        shape: 'Diamond', dataLabel: { name: 'TooltipMappingName' }
      },
      marker1: {
        visible: true, width: 8, height: 8,
        isFilled: true,
        shape: 'Pentagon', dataLabel: { name: 'TooltipMappingName' }
      },
      marker2: {
        visible: true,
        width: 8, height: 8,
        shape: 'Triangle',
        isFilled: true,
        dataLabel: { name: 'TooltipMappingName' }
      },
      tooltip: {
        enable: true,
        header: '',
        format: '<b>${point.x}</b> <br> ${series.name} : <b>${point.y}</b>'
      },
      legendSettings: { visible: true, enableHighlight: true },

      title: "FB Penetration of Internet Audience"
    };
  },
  provide: {
    chart: [LineSeries, Legend, Category, Tooltip, Highlight]
  },
  methods: {
    load: function (args) {
      let selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },

});
</script>