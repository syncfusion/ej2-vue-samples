<template>
    <div class="control-section">
        <div align='center'>
            <ejs-accumulationchart style='display:block' :theme='theme' id='pie-border-container' :chartArea='chartArea'
                :pointRender='pointRender' :annotations='annotations' :tooltip='tooltip'
                :enableBorderOnMouseMove='false' :width='width' :enableSmartLabels='true' :title='title' :legendSettings='legend'>
                <e-accumulation-series-collection>
                    <e-accumulation-series type='Pie' :dataSource='seriesData' xName='x' yName='y' innerRadius='50%'
                        :dataLabel='dataLabel' :border='border' :animation='animation'
                        :borderRadius='borderRadius'></e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the company's budget distribution over a year using a donut chart with rounded
                corners.

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
                { x: 'Operations', y: 30.0, text: '30.0%' },
                { x: 'Miscellaneous', y: 10.0, text: '10.0%' },
                { x: 'Human Resources', y: 15.0, text: '15.0%' },
                { x: 'Research and Development', y: 20.0, text: '20.0%' },
                { x: 'Marketing', y: 25.0, text: '25.0%' }
            ],
            chartArea: {
                border: { width: 0 }
            },
            dataLabel: {
                visible: true,
                position: 'Outside',
                name: 'x',
                connectorStyle: { width: 0 },
            },
            border: { width: 3 },
            borderRadius: 8,
            animation: { enable: true },
            tooltip: {
                enable: true,
                header: '<b>Budget</b>',
                format: '${point.x}: <b>${point.y}%</b>',
                enableHighlight: true,
            },
            annotations: [
                { content: `<div style=" padding: 5px 5px 5px 5px; font-size: ${Browser.isDevice ? '10px' : '14px'}; color: #FFFFFF;">30%</div>`, region: 'Series', coordinateUnits: 'Point', x: 'Operations', y: 30.0 },
                { content: `<div style=" padding: 5px 5px 5px 5px; font-size: ${Browser.isDevice ? '10px' : '14px'}; color: #FFFFFF;">10%</div>`, region: 'Series', coordinateUnits: 'Point', x: 'Miscellaneous', y: 10.0 },
                { content: `<div style=" padding: 5px 5px 5px 5px; font-size: ${Browser.isDevice ? '10px' : '14px'}; color: #FFFFFF;">15%</div>`, region: 'Series', coordinateUnits: 'Point', x: 'Human Resources', y: 15.0 },
                { content: `<div style=" padding: 5px 5px 5px 5px; font-size: ${Browser.isDevice ? '10px' : '14px'}; color: #FFFFFF;">20%</div>`, region: 'Series', coordinateUnits: 'Point', x: 'Research and Development', y: 20.0 },
                { content: `<div style=" padding: 5px 5px 5px 5px; font-size: ${Browser.isDevice ? '10px' : '14px'}; color: #FFFFFF;">25%</div>`, region: 'Series', coordinateUnits: 'Point', x: 'Marketing', y: 25.0 }
            ],
            width: Browser.isDevice ? '100%' : '75%',
            enableSmartLabels: true,
            legend: {visible: false},
            title: 'Company Budget Distribution'
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
  

  