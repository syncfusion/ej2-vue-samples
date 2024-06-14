<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :width='width' :height='height' :load="load"
         :primaryYAxis='primaryYAxis' :enableRotation='enableRotation' :rotation='rotation' :tooltip='tooltip' :legendSettings='legendSettings' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Bar' xName='x' yName='y' name='GDP' columnSpacing= 0.1> </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='Bar' xName='x' yName='y' name="Share in World's GDP" columnSpacing= 0.1> </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
      This sample visualizes the GDP data by country for the year 2017 using bar series in a 3D chart. Data points are enhanced with tooltips.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a 3D bar chart. The 3D bar chart, similar to the 3D column chart, differs in that the orientation of the y-axis is horizontal rather than vertical.
    </p>
    <p>
         <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            3D chart component features are segregated into individual feature-wise modules. To use bar series, we need to inject
            <code>BarSeries3D</code> module using <code>provide: { chart3d: [BarSeries3D] }</code> method.
        </p>
    </div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, BarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D, ChartTheme } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData: [
                    { x: 'Japan', y: 1.71 }, { x: 'France', y: 1.82 },
                    { x: 'India', y: 6.68 }, { x: 'Germany', y: 2.22 }, { x: 'Italy', y: 1.50 }, { x: 'Canada', y: 3.05 }
                ],
      seriesData2: [
                    { x: 'Japan', y: 6.02 }, { x: 'France', y: 3.19 },
                    { x: 'India', y: 3.28 }, { x: 'Germany', y: 4.56 }, { x: 'Italy', y: 2.40 }, { x: 'Canada', y: 2.04 }
                ],

      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category',
          labelPlacement: 'BetweenTicks'
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
          labelFormat: '{value}%',
          maximum: Browser.isDevice ? 8 : 7, interval: Browser.isDevice ? 2 : 1,
          edgeLabelPlacement: 'Shift'
        },
              // Initializing the tooltip
        tooltip: {
            enable: true
        },
        rotation: 22,
        depth: 100,
        height: '400',
        enableRotation: true,
        width: Browser.isDevice ? '100%' : '70%',
        legendSettings: { enableHighlight: true },
        //Initializing Chart title
        title: 'GDP Percentage by Country in 2017',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    };
  },
  provide: {
    chart3d: [BarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D, ChartTheme]
  },
  methods: {
  },
 
};
</script>