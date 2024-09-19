<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :load='load'
           :rotation='rotation' :width='width' :height='height' :tooltip='tooltip' :legendSettings='legendSettings' :enableRotation='enableRotation' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData1' type='StackingBar' xName='x' yName='y' name='America' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='StackingBar' xName='x' yName='y' name='Canada' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='StackingBar' xName='x' yName='y' name='France' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='StackingBar' xName='x' yName='y' name='Germany' columnWidth= 0.6 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
      This 3D stacked bar chart example visualizes a comparison of several Olympic medal-winning countries using the stacked bar series. The legend in the sample provides additional information about the series.
    </p>
</div>
<div id="description">
      <p>
        In this example, you can see how to render and configure a 3D stacked bar chart. The 3D stacked bar chart stacks points in the series horizontally. Additionally, the <code>stackingGroup</code> property can be used to group stacked collections based on category.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        3D chart component features are segregated into individual feature-wise modules. To use stacking bar series, we
        need to inject
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

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData1: [{ x: 'Sochi 2014', y: 9 },
                    { x: 'Rio 2016', y: 46 },
                    { x: Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 9 },
                    { x: 'Tokyo 2020', y: 39 },
                    { x: 'Beijing 2022', y: 8 },],
      seriesData2: [{ x: 'Sochi 2014', y: 10 },
                    { x: 'Rio 2016', y: 4 },
                    { x: Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 11 },
                    { x: 'Tokyo 2020', y: 7 },
                    { x: 'Beijing 2022', y: 4 },],
      seriesData3: [{ x: 'Sochi 2014', y: 4 },
                    { x: 'Rio 2016', y: 10 },
                    { x: Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 5 },
                    { x: 'Tokyo 2020', y: 10 },
                    { x: 'Beijing 2022', y: 5 },],
      seriesData4: [{ x: 'Sochi 2014', y: 8 },
                    { x: 'Rio 2016', y: 17 },
                    { x: Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 14 },
                    { x: 'Tokyo 2020', y: 10 },
                    { x: 'Beijing 2022', y: 12 },],
                
      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category',
          labelPlacement: 'BetweenTicks',
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
        enableRotation: true,
        rotation: 22,
        height: '400',
        depth: 100,
        width: Browser.isDevice ? '100%' : '75%',
        legendSettings: {
            enableHighlight: true
        },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
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