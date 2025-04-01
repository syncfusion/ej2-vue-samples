<template>
    <div>
        <div class="col-md-8 control-section sb-property-border">
            <ejs-chart style='display:block;' ref="chart" :legendSettings='legend' id='chartcontainer'
                :primaryXAxis='primaryXAxis' :tooltip='tooltip' :primaryYAxis='primaryYAxis' :title='title'
                :theme='theme'>
                <e-series-collection>
                    <e-series :dataSource='data2' name='Line Interpolation' type='Line' fill='blue' xName='x' yName='y'
                        width=2 :enableTooltip='enableTooltip' opacity=1>
                    </e-series>
                    <e-series :dataSource='data3' name='Cubic Spline Interpolation' fill='green' type='Spline' xName='x'
                        yName='y' width=2 :enableTooltip='enableTooltip' opacity=1>
                    </e-series>
                    <e-series :dataSource='data1' name='Data Points' fill='red' type='Scatter' xName='x' yName='y'
                        width=2 :marker='marker' opacity=1 >
                    </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div class="col-md-4 property-section">
            <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div style="font-size:14px">Axis:</div>
                    </td>
                    <td style="width: 50%;padding-left: 10px; padding-right: 10px">
                        <div>
                            <select name="selectIndex" id="selectAxis" style="margin-left: -10px">
                                <option value="xaxis">X</option>
                                <option value="yaxis">Y</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div style="font-size:14px" id="crossValue">Crosses Value:</div>
                    </td>
                    <td style="width: 50%;padding-left: 10px; padding-right: 10px">
                        <div style="margin-top: 0px;">
                            <input type="text" id="crossingValue" aria-labelledby="Text">
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div style="font-size:14px" id="axis">Label Near to Axis Line: </div>
                    </td>
                    <td style="width: 50%;padding-left: 10px; padding-right: 10px">
                        <div>
                            <input type="checkbox" @change='check' id="axisElements" checked=true aria-labelledby="Checkbox checked">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates the interpolation of data points between linear and cubic using the spline and line series.
            </p>
        </div>
        <div id="description">
            <p>
                This sample demonstrates the axis-crossing behavior in a chart. 
                The axis can be positioned anywhere in the chart area using the <code>CrossesAt</code> property of the axis, which specifies where the horizontal axis should intersect the vertical axis and vice-versa.
            </p>
            <p>
                You can use the <code>PlaceNextToAxisLine</code> property to place the axis labels and ticks next to the axis line. 
                If there are multiple axes, the cross-axis can be selected using the <code>CrossesInAxis</code> property.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p>
                More information on the axis crossing can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/axis-customization/#axis-crossing" aria-label="Navigate to the documentation for Axis Crossing in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>

    </div>
</template>
<style scoped>
.control-section {
    min-height: 450px;
}
</style>
<script>
import { Browser, extend } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-vue-inputs';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, ScatterSeries, SplineSeries, Tooltip, Legend, Highlight } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            data1: [{ x: -6, y: 2 }, { x: -3, y: -4 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 }],
            data2: [
                { x: -6, y: 2 }, { x: -5, y: 0 }, { x: -4.511, y: -0.977 }, { x: -3, y: -4 }, { x: -1.348, y: -1.247 },
                { x: -0.6, y: 0 }, { x: 0, y: 1 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 },
            ],
            data3: [
                { x: -6, y: 2 }, { x: -5.291, y: 0 }, { x: -5, y: -0.774 }, { x: -3, y: -4 }, { x: -0.6, y: -0.965 },
                { x: -0.175, y: 0.1 }, { x: 0, y: 0.404 }, { x: 1.5, y: 3.5 }, { x: 3.863, y: 5.163 }, { x: 6, y: 4.5 },
            ],
            //Initializing Primary X Axis
            primaryXAxis: {
                minimum: -8, maximum: 8, interval: 2,
                majorGridLines: { width: 0 },
                lineStyle: { width: 2 },
                crossesAt: 0,
                minorTicksPerInterval: 3,
                placeNextToAxisLine: true
            },
            //Initializing Primary Y Axis
            primaryYAxis: {
                minimum: -8, maximum: 8, interval: 2,
                lineStyle: { width: 2 },
                majorTickLines: { width: 0 },
                placeNextToAxisLine: true,
                minorTicksPerInterval: 3,
                crossesAt: 0,
            },
            marker: {
                visible: false,
                height: 7,
                width: 7,
            },
            //Initializing Tooltip
            enableTooltip : false,
            tooltip: { enable: true },
            title: 'Spline Interpolation',
            legend: {
                visible: true,
                enableHighlight: true
            },
            axis: new DropDownList({
                index: 0,
                width: 120,
                change: this.axisChange
            }),
            crossValue: new NumericTextBox({
                value: 0, min: -8,
                max: 8, width: 120,
                step: 2,
                change: this.crossValueChange
            })
        };
    },
    provide: {
        chart: [LineSeries, ScatterSeries, SplineSeries, Tooltip, Legend, Highlight]
    },
    methods: {
        check: function (e) {
            let value = e.target.checked;
            if (this.axis.index === 0) {
                let primaryXAxis = extend({}, this.primaryXAxis);
                primaryXAxis.placeNextToAxisLine = value;
                this.primaryXAxis = primaryXAxis;
            } else {
                let primaryYAxis = extend({}, this.primaryYAxis);
                primaryYAxis.placeNextToAxisLine = value;
                this.primaryYAxis = primaryYAxis;
            }
        },
        axisChange: function () {
            let target = document.getElementById('axisElements');
            if (this.axis.index === 0) {
                target.checked = this.$refs.chart.ej2Instances.primaryXAxis.placeNextToAxisLine;
                this.crossValue.value = +this.$refs.chart.ej2Instances.primaryXAxis.crossesAt;
            } else {
                target.checked = this.$refs.chart.ej2Instances.primaryYAxis.placeNextToAxisLine;
                this.crossValue.value = +this.$refs.chart.ej2Instances.primaryYAxis.crossesAt;
            }
        },
        crossValueChange: function () {
            if (this.axis.index === 0) {
                let primaryXAxis = extend({}, this.primaryXAxis);
                primaryXAxis.crossesAt = this.crossValue.value;
                this.primaryXAxis = primaryXAxis;
            } else {
                let primaryYAxis = extend({}, this.primaryYAxis);
                primaryYAxis.crossesAt = this.crossValue.value;
                this.primaryYAxis = primaryYAxis;
            }
        }
    },
    mounted: function () {
        this.axis.appendTo('#selectAxis');
        this.crossValue.appendTo('#crossingValue');
    }
};
</script>