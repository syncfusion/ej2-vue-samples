<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'  :annotations='annotations'>
            <e-series-collection>
                <e-series :dataSource='Compact' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Download' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Streaming' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Casette' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Vinyl' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Track' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
                <e-series :dataSource='Other' type='Area' xName='Period' yName='USD' marker='marker' :border='border'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Vue Area Chart example visualizes the music sales data by format in US by using default area series in the chart. 
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how the area type chart can be rendered and configured. It is like the line chart, which represents time-dependent data and shows trends at equal intervals, but the area is closed and filled with the color of the series.
     </p>     
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
          More information about the area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/area#area" aria-label="Navigate to the documentation for Area Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>

</template>
<style scoped>
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, AreaSeries, Legend, DateTime, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
       theme: theme,      
      Other: [
        { Period : new Date(1988, 1, 1), USD : -0.16 },
        { Period : new Date(1989, 1, 1), USD : -0.17 },
        { Period : new Date(1990, 1, 1), USD : -0.08 },
        { Period : new Date(1992, 1, 1), USD : 0.08 },
        { Period : new Date(1996, 1, 1), USD : 0.161 },
        { Period : new Date(1998, 1, 1), USD : 0.48 },
        { Period : new Date(1999, 1, 1), USD : 1.16 },
        { Period : new Date(2001, 1, 1), USD : 0.40 },
        { Period : new Date(2002, 1, 1), USD : 0.32 },
        { Period : new Date(2003, 1, 1), USD : 0.807 },
        { Period : new Date(2005, 1, 1), USD : 1.12 },
        { Period : new Date(2006, 1, 1), USD : 1.614 },
        { Period : new Date(2008, 1, 1), USD : 1.210 },
        { Period : new Date(2009, 1, 1), USD : 1.12 },
        { Period : new Date(2011, 1, 1), USD : 0.64 },
        { Period : new Date(2013, 1, 1), USD : 0.161 },
        { Period : new Date(2018, 1, 1), USD : 0.080 }
      ],
      Track: [
        { Period : new Date(1973, 1, 1), USD : 2.58 },
        { Period : new Date(1975, 1, 1), USD : 2.25 },
        { Period : new Date(1977, 1, 1), USD : 3.55 },
        { Period : new Date(1978, 1, 1), USD : 2.42 },
        { Period : new Date(1981, 1, 1), USD : -0.24 },
        { Period : new Date(1982, 1, 1), USD : -0 }
      ],
      Streaming: [
        { Period : new Date(2011, 1, 1), USD : 0.48 },
        { Period : new Date(2013, 1, 1), USD : 1.61 },
        { Period : new Date(2015, 1, 1), USD : 2.17 },
        { Period : new Date(2017, 1, 1), USD : 7.18 },
      ],
      Download: [
        { Period : new Date(2004, 1, 1), USD : 0.48 },
        { Period : new Date(2007, 1, 1), USD : 1.45 },
        { Period : new Date(2012, 1, 1), USD : 2.82 },
        { Period : new Date(2013, 1, 1), USD : 2.58 },
        { Period : new Date(2015, 1, 1), USD : 2.01 },
        { Period : new Date(2016, 1, 1), USD : 1.61 },
        { Period : new Date(2017, 1, 1), USD : 0.80 }
      ],
      Compact: [
        { Period : new Date(1990, 1, 1), USD : 0.69 },
        { Period : new Date(1992, 1, 1), USD : 2.86 },
        { Period : new Date(1995, 1, 1), USD : 10.2 },
        { Period : new Date(1996, 1, 1), USD : 13.0 },
        { Period : new Date(1997, 1, 1), USD : 14.35 },
        { Period : new Date(1998, 1, 1), USD : 15.17 },
        { Period : new Date(1999, 1, 1), USD : 14.89 },
        { Period : new Date(2000, 1, 1), USD : 18.96 },
        { Period : new Date(2001, 1, 1), USD : 18.78 },
        { Period : new Date(2004, 1, 1), USD : 14.25 },
        { Period : new Date(2005, 1, 1), USD : 14.24 },
        { Period : new Date(2006, 1, 1), USD : 12.34 },
        { Period : new Date(2007, 1, 1), USD : 9.34 },
        { Period : new Date(2008, 1, 1), USD : 4.45 },
        { Period : new Date(2010, 1, 1), USD : 1.46 },
        { Period : new Date(2011, 1, 1), USD : 0.64 }
      ],
      Casette : [
        { Period : new Date(1976, 1, 1), USD : 0.08 },
        { Period : new Date(1979, 1, 1), USD : 1.85 },
        { Period : new Date(1980, 1, 1), USD : 2.0 },
        { Period : new Date(1982, 1, 1), USD : 3.55 },
        { Period : new Date(1984, 1, 1), USD : 5.40 },
        { Period : new Date(1985, 1, 1), USD : 5.24 },
        { Period : new Date(1988, 1, 1), USD : 6.94 },
        { Period : new Date(1989, 1, 1), USD : 6.85 },
        { Period : new Date(1990, 1, 1), USD : 7.02 },
        { Period : new Date(1992, 1, 1), USD : 5.81 },
        { Period : new Date(1993, 1, 1), USD : 5.32 },
        { Period : new Date(1994, 1, 1), USD : 4.03 },
        { Period : new Date(1997, 1, 1), USD : 2.25 },
        { Period : new Date(1998, 1, 1), USD : 2.01 },
        { Period : new Date(1999, 1, 1), USD : 0.80 },
        { Period : new Date(2001, 1, 1), USD : 0.40 }
      ],
      Vinyl: [
        { Period : new Date(1973, 1, 1), USD : 7.74 },
        { Period : new Date(1974, 1, 1), USD : 7.58 },
        { Period : new Date(1976, 1, 1), USD : 8.23 },
        { Period : new Date(1977, 1, 1), USD : 9.68 },
        { Period : new Date(1978, 1, 1), USD : 10.16 },
        { Period : new Date(1979, 1, 1), USD : 8.15 },
        { Period : new Date(1981, 1, 1), USD : 6.77 },
        { Period : new Date(1982, 1, 1), USD : 5.64 },
        { Period : new Date(1984, 1, 1), USD : 4.35 },
        { Period : new Date(1985, 1, 1), USD : 2.50 },
        { Period : new Date(1989, 1, 1), USD : 0.64 },
        { Period : new Date(1990, 1, 1), USD : 0 },
      ],
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'yyyy',
            maximum: new Date(1973, 1, 1),
            minimum: new Date(2018, 1, 1),
            majorGridLines: { width: 0 },
            minorTickLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift'
        },
      //Initializing Primary Y Axis
       primaryYAxis:
        {
          title: 'In Billions (USD)',
          maximum: 25,
          minimum: 0,
          interval: 5,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 }
        },
      chartArea: {
        border: {
          width: 0
        }
      },
       marker: {
        visible: false,
      },
      annotations:[{
        content: Browser.isDevice ? '<div style="color:white; font-size: 8px; font-weight: bold">OTHERS</div>' : '<div style="color:white; font-size: 11px; font-weight: bold">OTHERS</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2006, 1, 1),
        y: 0.50
       },
       {
        content: Browser.isDevice ? '<div style="color:white; font-size: 6px; font-weight: bold"></div>' : '<div style="color:white; font-size: 11px; font-weight: bold">STREAMING</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2015, 1, 1),
        y: Browser.isDevice ? 1.3 : 1.2
       },
       {
        content: Browser.isDevice ? '<div style="color:white; font-size: 8px; font-weight: bold">DOWNLOAD</div>': '<div style="color:white; font-size: 11px; font-weight: bold">DOWNLOAD</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2011, 6, 1),
        y: 1.8
       },
       {
        content: Browser.isDevice ?  '<div style="color:white; font-size: 8px; font-weight: bold">COMPACT DISC</div>' : '<div style="color:white; font-weight: bold; font-size: 11px;">COMPACT DISC</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2001, 1, 1),
        y: 10
       },
       {
        content: Browser.isDevice ? '<div style="color:white; font-size: 8px; font-weight: bold">CASSETTE</div>': '<div style="color:white; font-size: 11px; font-weight: bold">CASSETTE</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(1990, 1, 1),
        y: 3
       },
       {
        content: Browser.isDevice ? '<div style="color:white; font-size: 8px; font-weight: bold">VINYL</div>' : '<div style="color:white; font-size: 11px; font-weight: bold">VINYL</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(1977, 1, 1),
        y: 6
       },
       {
        content: Browser.isDevice ? '<div style="color:white; font-size: 8px; font-weight: bold">8-TRACK</div>' : '<div style="color:white; font-size: 11px; font-weight: bold">8-TRACK</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(1976, 1, 1),
        y: 1.5
       },
      ],
      width : Browser.isDevice ? '100%' : '75%',
      title: "US Music Sales By Format",
      border: { width: 1.5 , color: 'white'},
    };
  },
  provide: {
    chart: [AreaSeries, Legend, DateTime, ChartAnnotation]
  },
  methods: {
   }
 
};
</script>