<template>
    <div align='center'>
        <ejs-chart style='display:block' ref="chartObj" :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Germany' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='England' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
 </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series': SeriesDirective,
    'e-series-collection': SeriesCollectionDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: new Date(2005, 0, 1), y: 21 },
        { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 },
        { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 },
        { x: new Date(2010, 0, 1), y: 57 },
        { x: new Date(2011, 0, 1), y: 70 }
      ],
      seriesData1: [
        { x: new Date(2005, 0, 1), y: 28 },
        { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 },
        { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 },
        { x: new Date(2010, 0, 1), y: 78 },
        { x: new Date(2011, 0, 1), y: 84 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        labelFormat: "y",
        intervalType: "Years",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}%",
        rangePadding: "None",
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width : Browser.isDevice ? '100%' : '60%',
      marker: {
        visible: true,
        height: 10,
        width: 10
      },
      tooltip: {
        enable: true
      },
      title: "Inflation - Consumer Price"
    };
  },
  provide: {
    chart: [LineSeries, Legend, Tooltip, DateTime]
  },
}
</script>
