<template>
    <div class="control-section">
        <div align='center'>
            <ejs-accumulationchart style='display:block' :theme='theme' id='pie-border-container' :chartArea='chartArea'
                :pointRender='pointRender' :annotations='annotations' :tooltip='tooltip' :subTitle='subtitle'
                :enableBorderOnMouseMove='false' :enableAnimation='enableAnimation' :width='width' :title='title' :legendSettings='legend'>
                <e-accumulation-series-collection>
                    <e-accumulation-series type='Pie' :dataSource='seriesData' xName='x' yName='y' name="Project" :radius='radius' startAngle='120' innerRadius='50%'
                        :dataLabel='dataLabel' :border='border' :animation='animation'
                        :borderRadius='borderRadius'></e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the global usage share of operating systems across all platforms in 2024 using a donut chart with rounded corners.

            </p>
        </div>
        <div id="description">
                <p>In this example, you can see how to render and configure a donut chart with customized corners for each slice. By specifying a value for <code>borderRadius</code>, you can create rounded corners for each slice, giving the chart a modern and polished look.</p>
                <p>
                <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a slice or tap
                on it in touch-enabled devices.
            </p>
            <p>
                More information about the donut series can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart"
                    aria-label="Navigate to the documentation for Doughnut Chart in Vue Accumulation Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>
/* Add your styles here */
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation } from "@syncfusion/ej2-vue-charts";
import { loadChartTheme, roundedCornnerPointRender } from "./theme-color";
export default {
    components: {
        'ejs-accumulationchart': AccumulationChartComponent,
        'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
        'e-accumulation-series': AccumulationSeriesDirective
    },
    data() {

      let theme = loadChartTheme();
        return {
            theme: theme,
            seriesData: [
                { x: 'Android', y: 45.49, text: 'Android: 45.49%' },
                { x: 'Windows', y: 25.35, text: 'Windows: 25.35%' },
                { x: 'iOS', y: 18.26, text: 'iOS: 18.26%' },
                { x: 'macOS', y: 5.06, text: 'macOS: 5.06%' },
                { x: 'Linux', y: 1.48, text: 'Linux: 1.48%' },
                { x: 'Others', y: 4.36, text: 'Others: 4.36%' }
            ],
            chartArea: {
                border: { width: 0 }
            },
            dataLabel: {
                visible: true,
                position: 'Outside',
                name: 'text',
                font: { size: '12px', fontWeight: '600' },
                connectorStyle: { length: '20px', type: 'Curve' }
            },
            border: { width: 0.5, color: '#ffffff' },
            borderRadius: 8,
            radius: Browser.isDevice ? '25%' : '70%',
            animation: { enable: true },
            tooltip: {
                enable: true,
                header: '',
                format: '<b>${point.x}</b><br>Operating System Usage: <b>${point.y}%</b>',
                enableHighlight: true,
            },
            width: Browser.isDevice ? '100%' : '75%',
            enableAnimation: true,
            legend: {visible: false},
            title: 'Global Operating System Usage Share - 2024',
            subtitle: 'Source: wikipedia.org'
        };
    },
    provide: {
        accumulationchart: [PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]
    },
    methods: {
        pointRender: function (args) {
           roundedCornnerPointRender(args);
        }
    }
};
</script>
  

  