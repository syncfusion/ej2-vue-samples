<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :width='width' :height='height' :load="load"
         :primaryYAxis='primaryYAxis' :enableSideBySidePlacement='enableSideBySidePlacement' :rotation='rotation' :depth='depth' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Grapes' columnSpacing= 0.1 columnWidth=0.2 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Orange' columnSpacing= 0.1 columnWidth=0.2 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='Column' xName='x' yName='y' name='Apple' columnSpacing= 0.1 columnWidth=0.2 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='Column' xName='x' yName='y' name='Total' columnSpacing= 0.1 columnWidth=0.2 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
      This sample displays four series of 3D column chart, with each column positioned behind the preceding one.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a 3D column chart with each column positioned behind the preceding one. The 3D column chart serves the purpose of comparing the frequency, count, total, or average of data across different categories. The <code>enableSideBySidePlacement</code> property is used to position the column behind another.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        3D chart component features are segregated into individual feature-wise modules. To use column series, we need to
        inject
        <code>ColumnSeries3D</code> module using <code>provide: { chart3d: [ColumnSeries3D] }</code> method.
    </p>
    </div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, ChartTheme, Category3D, BarSeries3D, ColumnSeries3D, Legend3D, Tooltip3D, Highlight3D} from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData1: [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }, { x: 'Jack', y: 1 }, { x: 'Lucas', y: 1 }],
      seriesData2: [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }, { x: 'Jack', y: 2 }, { x: 'Lucas', y: 3 }],
      seriesData3: [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }, { x: 'Jack', y: 5 }, { x: 'Lucas', y: 6 }],
      seriesData4: [{ x: 'Jamesh', y: 10, text: 'Total 10' },{ x: 'Michael', y: 9, text: 'Total 9' }, { x: 'John', y: 11, text: 'Total 11' }, { x: 'Jack', y: 8, text: 'Total 8' }, { x: 'Lucas', y: 10, text: 'Total 10' }],

      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category', interval: 1,
          labelPlacement: 'BetweenTicks',
          labelRotation: -45
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
          interval: Browser.isDevice ? 4 : 2
        },
        enableSideBySidePlacement: false,
        rotation: Browser.isDevice ? 5 : 25,
        depth: 500,
        height: '400',
        tooltip: { enable: true },
        legendSettings: { visible: true, enableHighlight: true },
        width: Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
      title: "Fruit Consumption by Individuals",
    };
  },
  provide: {
    chart3d: [ChartTheme, Category3D, ColumnSeries3D, Legend3D, Tooltip3D, Highlight3D]
  },
  methods: {
  },
 
};
</script>