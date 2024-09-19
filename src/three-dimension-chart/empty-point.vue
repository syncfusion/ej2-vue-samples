<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart3d style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tilt='tilt' :load='load'
           :rotation='rotation' :width='width' :height='height' :tooltip='tooltip' :legendSettings='legendSettings' :enableRotation='enableRotation' 
           :pointRender='pointRender' :depth='depth' :wallColor='wallColor' >
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Gold' columnSpacing= 0.1 > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
    <div id="action-description">
     <p>
        This example of a 3D column chart visualizes the medal count from the Tokyo Olympics using the default column series in the 3D chart.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a 3D column chart, accommodating null and zero values. The null points represent missing data, while zero is considered a valid value in the 3D chart.
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
import { pointFabricColors, pointMaterialDarkColors, pointMaterialColors, pointBootstrap5DarkColors, pointBootstrap5Colors, pointBootstrapColors, pointHighContrastColors, pointFluentDarkColors, pointFluentColors, pointTailwindDarkColors, pointTailwindColors, pointMaterial3Colors, pointMaterial3DarkColors, pointFluent2Colors, pointFluent2HighContrastColors } from './theme-color';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data: function() {
    return {
      seriesData: [{ x: 'Italy', y: 10 }, { x: 'Kenya', y: 4 },{ x: 'France', y: 10 }, { x: 'Hungary', y: 0 }, { x: 'Australia', y: 17 }, { x: 'Brazil', y: 7 },  { x: 'Netherlands', y: 10 }, { x: 'Unspecified', y: null }, { x: 'Germany', y: 10 }, { x: 'Serbia', y: 3 }],

      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category', labelPlacement: 'BetweenTicks', interval: 1, labelRotation: -45
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
          maximum: 20, interval: 4
        },
        height: '400',
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100,
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Olympic Gold Medal Counts - Tokyo 2020',
        tooltip: { enable: true, header: '${point.x}', format: 'Gold Medal : <b>${point.y}' },
        legendSettings: { enableHighlight: true, visible: false },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        pointRender: function(args){
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = pointFabricColors[args.point.index % 10];
    } else if (selectedTheme === 'material-dark') {
        args.fill = pointMaterialDarkColors[args.point.index % 10];
    } else if (selectedTheme === 'material') {
        args.fill = pointMaterialColors[args.point.index % 10];
    } else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = pointBootstrap5DarkColors[args.point.index % 10];
    } else if (selectedTheme === 'bootstrap5') {
        args.fill = pointBootstrap5Colors[args.point.index % 10];
    } else if (selectedTheme === 'bootstrap') {
        args.fill = pointBootstrapColors[args.point.index % 10];
    } else if (selectedTheme === 'bootstrap4') {
        args.fill = pointBootstrapColors[args.point.index % 10];
    } else if (selectedTheme === 'bootstrap-dark') {
        args.fill = pointBootstrapColors[args.point.index % 10];
    } else if (selectedTheme === 'highcontrast') {
        args.fill = pointHighContrastColors[args.point.index % 10];
    } else if (selectedTheme === 'fluent-dark') {
        args.fill = pointFluentDarkColors[args.point.index % 10];
    } else if (selectedTheme === 'fluent') {
        args.fill = pointFluentColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
    } else if (selectedTheme === 'material3') {
        args.fill = pointMaterial3Colors[args.point.index % 10];
    } else if (selectedTheme === 'material3-dark') {
        args.fill = pointMaterial3DarkColors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2') {
        args.fill = pointFluent2Colors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = pointFluent2HighContrastColors[args.point.index % 10];
    }
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