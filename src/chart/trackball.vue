<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :crosshair='crosshair' :tooltip='tooltip' :legendSettings='legendSettings'>
                <e-series-collection>
                    <e-series :dataSource='jData' type='Line' xName='x' yName='y' name='John' :marker='marker' width=2>
                    </e-series>
                    <e-series :dataSource='aData' type='Line' xName='x' yName='y' name='Andrew' :marker='marker'
                        width=2> </e-series>
                    <e-series :dataSource='tData' type='Line' xName='x' yName='y' name='Thomas' :marker='marker'
                        width=2> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample depicts the trackball behavior in the chart. 
                To view the trackball and its tooltip, hover over the chart or tap on it in touch-enabled devices.
            </p>
        </div>
        <div id="description">
            <p>
                The trackball is used to track a data point close to the mouse or touch position. 
                The trackball can be enabled by setting the <code>Enable</code> property of the crosshair to <b>true</b> and the <code>Shared</code> property of the tooltip to <b>true</b> in the chart.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Trackball, we need
                to inject
                <code>Trackball</code> module using <code>provide: { chart: [ Trackball ] },</code> method.
            </p>
            <p>
                More information on the trackball  can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/cross-hair-and-track-ball/" aria-label="Navigate to the documentation for Trackball in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Tooltip, DateTime, Crosshair, LineSeries, Legend, Highlight } from "@syncfusion/ej2-vue-charts";
import { john, andrew, thomas } from './trackball-data';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            jData: john,
            aData: andrew,
            tData: thomas,
            //Initializing Primary X Axis
            primaryXAxis: {
                minimum: new Date(2000, 1, 1),
                maximum: new Date(2006, 2, 11),
                valueType: 'DateTime',
                skeleton: 'y',
                intervalType : 'Years',
                majorGridLines: { width: 0 },
                edgeLabelPlacement: 'Shift'
            },
            //Initializing Primary Y Axis
            primaryYAxis:
            {
                title: 'Revenue  (in Million)',
                labelFormat: '{value}M',
                rangePadding : 'None',
                majorTickLines: { width: 0 },
                minimum: 10, maximum: 80,
                lineStyle: { width: 0 },
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            legendSettings: { visible: true, enableHighlight : true },
            marker: { visible: true, height: 7, width: 7, isFilled: true },
            tooltip: { enable: true, shared: true },
            crosshair: { enable: true, lineType: 'Vertical' },
            width: Browser.isDevice ? '100%' : '75%',
            title: "Average Sales per Person"
        };
    },
    provide: {
        chart: [Tooltip, DateTime, Crosshair, LineSeries, Legend, Highlight]
    },
    methods: {

    },

};
</script>