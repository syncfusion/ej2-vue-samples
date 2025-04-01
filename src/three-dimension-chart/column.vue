<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :axisLabelRender='axisLabelRender' :load='load'
         :primaryYAxis='primaryYAxis' :rotation='rotation' :width='width' :tooltip='tooltip' :legendSettings='legendSettings'
         :wallColor='wallColor' :enableRotation='enableRotation' :pointRender='pointRender'
         :height='height' :tilt='tilt' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y' columnSpacing= 0.1 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the top-selling electric car in China using the default column series in the 3D chart. Data points are enhanced with tooltips.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a 3D column chart. The 3D column chart serves the purpose of comparing the frequency, count, total, or average of data across different categories.
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
import { Browser, EmitType } from '@syncfusion/ej2-base';
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, ChartTheme, Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D} from "@syncfusion/ej2-vue-charts";
import { load3DChartTheme, pointRenderEvent } from './theme-color';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData: [{ x: 'Tesla', y: 137429 },{ x: 'Aion', y: 80308 }, { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 }, { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 }, { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 } ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelRotation:  -45,
            labelPlacement: 'BetweenTicks'
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            maximum: 150000, interval: 30000
        },
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100,
        height: '400',
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Top Selling Electric Cars in China',
        tooltip: { enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' },
        legendSettings: { enableHighlight: true, visible: false },
        axisLabelRender: function(args){
            if (args.axis.name === "primaryYAxis") {
                let value = Number(args.text) / 1000;
                args.text = (typeof value === 'number' && !isNaN(value)) ? String(value) + 'k' : args.text;
            }
        },
        load: function (args) {
           load3DChartTheme(args);
        },
        pointRender: function(args){
            pointRenderEvent(args);
        }
    };
  },
  provide: {
    chart3d: [ChartTheme, Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D]
  },
  methods: {
  },
 
};
</script>