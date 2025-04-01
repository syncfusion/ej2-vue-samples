<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :load='load' :axisLabelRender='axisLabelRender'
         :primaryYAxis='primaryYAxis' :enableRotation='enableRotation' :tooltip='tooltip' :rotation='rotation' :width='width' :legendSettings='legendSettings'
         :height='height' :tilt='tilt' :depth='depth' :wallColor='wallColor' >
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData1' type='StackingColumn' xName='x' yName='y' name='Iran' stackingGroup='Asia' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='StackingColumn' xName='x' yName='y' name='Indonesia' stackingGroup='Asia' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='StackingColumn' xName='x' yName='y' name='Italy' stackingGroup='Europe' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='StackingColumn' xName='x' yName='y' name='France' stackingGroup='Europe' columnWidth= 0.6 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
    <p>
        This example of a 3D stacked column chart visualizes the steel production of countries, grouped by continent. The legend in the sample provides information about these series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a 3D stacked column chart. The 3D stacked column chart stacks points in the series vertically. Additionally, the <code>stackingGroup</code> property can be used to group stacked collections based on category.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        3D chart component features are segregated into individual feature-wise modules. To use stacking column series,
        we need to inject
        <code>StackingColumnSeries3D</code> module using <code>provide: { chart3d: [StackingColumnSeries3D] }</code> method.
    </p>
    </div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, StackingColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D} from "@syncfusion/ej2-vue-charts";
import { load3DChartTheme } from './theme-color';
export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData1: [
                    { x: '2018', y: 24.5 },
                    { x: '2019', y: 25.6 },
                    { x: '2020', y: 29 },
                    { x: '2021', y: 28.5 },
                    { x: '2022', y: 30.6 },
                ],
      seriesData2: [
                    { x: '2018', y: 6.2 },
                    { x: '2019', y: 15.6 },
                    { x: '2020', y: 14.3 },
                    { x: '2021', y: 9.3 },
                    { x: '2022', y: 7.8 },
                ],
      seriesData3: [
                    { x: '2018', y: 24.5 },
                    { x: '2019', y: 23.2 },
                    { x: '2020', y: 20.4 },
                    { x: '2021', y: 23.2 },
                    { x: '2022', y: 24.5 },
                ],
      seriesData4: [
                    { x: '2018', y: 15.4 },
                    { x: '2019', y: 21.1 },
                    { x: '2020', y: 13.9 },
                    { x: '2021', y: 11.6 },
                    { x: '2022', y: 14.4 },
                ],

      //Initializing Primary X Axis
        primaryXAxis: {
            interval: 1,
            valueType: 'Category'
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            maximum: Browser.isDevice ? 50 : 60,
            interval: 10
        },
      
        //Initializing Chart title
        title: 'Steel Production by Countries, Grouped by Continent',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, format: '${point.x} : <b>${point.y} Mmt'
        },
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100,
        height: '400',
        width: Browser.isDevice ? '100%' : '75%',
        legendSettings: {
            enableHighlight: true
        },
        load: function (args) {
            load3DChartTheme(args);
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                args.text = args.text + ' Mmt';
            }
        }
    };
  },
  provide: {
    chart3d: [StackingColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D]
  },
  methods: {
  },
 
};
</script>