<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :axisLabelRender='axisLabelRender' :load='load'
         :primaryYAxis='primaryYAxis' :width='width' :height='height' :rotation='rotation' :tooltip='tooltip' :legendSettings='legendSettings' :tilt='tilt' :depth='depth' :pointRender='pointRender' :wallColor='wallColor' >
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' columnFacet= 'Cylinder' xName='x' yName='y' name='Gold' columnWidth=0.9 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the passenger car production in selected countries for 2021, using a cylindrical column in 3D chart.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see the rendering and configuration of a 3D cylindrical column chart. The 3D cylindrical column chart is similar to a 3D column chart but features a distinct cylindrical shape.
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
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, ColumnSeries3D, Category3D, Tooltip3D, Legend3D} from "@syncfusion/ej2-vue-charts";
import { load3DChartTheme, pointRenderEvent } from './theme-color';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
        seriesData: [{ x: 'Czechia', y: 1.11 }, { x: 'Spain', y: 1.66 },  { x: 'USA', y: 1.56 },{ x: 'Germany', y: 3.1 }, { x: 'Russia', y: 1.35 },   { x: 'Slovakia', y: 1 }, { x: 'South Korea', y: 3.16 },{ x: 'France', y: 0.92 }],

      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category', interval: 1, 
            labelPlacement: 'BetweenTicks', 
            labelRotation: -45
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            maximum: 4,
            interval: 1
        },
        rotation: 7,
        tilt: 10,
        depth: 100,
        height: '400',
        wallColor: 'transparent',
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Passenger Car Production in Selected Countries – 2021',
        tooltip: { enable: true, header: "${point.x}", format: 'Car Production : <b>${point.y}M' },
        legendSettings: { visible: false },
        axisLabelRender: function(args){
             if (args.axis.name === 'primaryYAxis') {
                args.text = args.text + 'M';
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
    chart3d: [ ColumnSeries3D, Category3D, Legend3D, Tooltip3D]
  },
  methods: {
  },
 
};
</script>