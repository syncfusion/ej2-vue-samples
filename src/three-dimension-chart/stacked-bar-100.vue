<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :load='load'
           :rotation='rotation' :width='width' :height='height' :tooltip='tooltip' :legendSettings='legendSettings' :enableRotation='enableRotation' :depth='depth' >
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y' name='General Motors' columnWidth= 0.5 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y1' name='Honda' columnWidth= 0.5 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y2' name='Suzuki' columnWidth= 0.5 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y3' name='BMW' columnWidth= 0.5 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
      This example of a 100% 3D stacked bar chart visualizes motor vehicle production by manufacturer using a stacked bar series. The legend in the sample provides information about these series.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the 100% 3D stacked bar chart. The 100% 3D stacked bar chart displays multiple series of data as stacked bars, ensuring that the cumulative proportion of each stacked element always totals 100%.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        3D chart component features are segregated into individual feature-wise modules. To use 100% stacking bar series,
        we need to
        inject
        <code>StackingBarSeries3D</code> module using <code>provide: { chart3d: [StackingBarSeries3D] }</code> method.
    </p>
    </div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, StackingBarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D} from "@syncfusion/ej2-vue-charts";
import { load3DChartTheme } from './theme-color';
export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData: [
    { x: '2013', y: 9628912, y1: 4298390, y2: 2842133, y3: 2006366 },
    { x: '2014', y: 9609326, y1: 4513769, y2: 3016710, y3: 2165566 },
    { x: '2015', y: 7485587, y1: 4543838, y2: 3034081, y3: 2279503 },
    { x: '2016', y: 7793066, y1: 4999266, y2: 2945295, y3: 2359756 },
    { x: '2017', y: 6856880, y1: 5235842, y2: 3302336, y3: 2505741 }
    ],
                
      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category'
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
          edgeLabelPlacement: 'Shift', interval: Browser.isDevice ? 20 : 10
        },
              //Initializing Chart title
        title: 'Olympic Gold Medal Comparison',
        tooltip: {
            enable: true
        },
        width: Browser.isDevice ? '100%' : '70%',
        //Initializing Chart Title
        enableRotation: true,
        rotation: 22,
        depth: 100,
        height: '400',
        title: 'Motor Vehicle Production by Manufacturer',
        legendSettings: {
            enableHighlight: true
        },
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
        },
        load: function (args) {
          load3DChartTheme(args);
        },
    };
  },
  provide: {
    chart3d: [StackingBarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D]
  },
  methods: {
  },
 
};
</script>