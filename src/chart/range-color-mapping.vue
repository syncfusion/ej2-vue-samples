<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='USA' :animation='animation' :cornerRadius='cornerRadius' > </e-series>
            </e-series-collection>
            <e-rangecolorsettings>
                <e-rangecolorsetting label="1°C to 10°C" start="1" end="10" :colors="colors1"></e-rangecolorsetting>
                <e-rangecolorsetting label="11°C to 20°C" start="11" end="20" :colors="colors2"></e-rangecolorsetting>
                <e-rangecolorsetting label="21°C to 30°C" start="21" end="30" :colors="colors3"></e-rangecolorsetting>
            </e-rangecolorsettings>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates the USA climate with the month-wise data. Columns are differentiated using color codes based on
        the temperature ranges for better visualization. By toggling the legend items you can control the visibility of the
        columns within the ranges.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing
        the frequency, count, total or average of data in different categories. Column segment color is applied based on their <code>y</code>
        value ranges by using <code>rangeColorSettings</code>.
    </p>
    <p><code>rangeColorSettings</code> properties are,</p>
        <p><code>label</code> - Specify the name for the range mapping which will be displayed in the legend item.</p>
        <p><code>start</code> - Specify the start value of the color mapping range.</p>
        <p><code>end</code> - Specify the end value of the color mapping range.</p>
        <p><code>colors</code> - Specify the fill colors of point those lies on the given range, if multiple colors mentioned, then gradient will be applied.</p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>Legend</code>, <code>Tooltip</code> and <code>Category</code>
        <code>ColumnSeries</code>, module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
        More information on the range column series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { x: "Jan", y: 6.96 },
                { x: "Feb", y: 8.9 },
                { x: "Mar", y: 12 },
                { x: "Apr", y: 17.5 },
                { x: "May", y: 22.1 },
                { x: "June", y: 25 },
                { x: "July", y: 29.4 },
                { x: "Aug", y: 29.6 },
                { x: "Sep", y: 25.8 },
                { x: "Oct", y: 21.1 },
                { x: "Nov", y: 15.5 },
                { x: "Dec", y: 9.9 }

              ],

      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 }, title: 'Months'
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
            title: 'Temperature'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
       width : Browser.isDevice ? '100%' : '60%',
        tooltip: { 
            enable: true
         },
      
      title: "USA CLIMATE - WEATHER BY MONTH",
      legendSettings: {
        mode: 'Range'
    },
    animation: {
        enable: false
    },
    cornerRadius: {
        topLeft: 10, topRight: 10
    },
    colors1: ["#FFFF99"],
    colors2: ["#FFA500"],
    colors3: ["#FF4040"]
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category, Tooltip]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },
 
});
</script>