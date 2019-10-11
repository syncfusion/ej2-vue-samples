<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart style='display:block;' ref="chart" :legendSettings='legend' id='chartcontainer' :primaryXAxis='primaryXAxis' :tooltip='tooltip'
            :primaryYAxis='primaryYAxis' :title='title' :theme='theme'>
            <e-series-collection>
                <e-series :dataSource='data2' name='Linear Interpolation' type='Line' fill='blue' xName='x' yName='y' width=2 enableTooltip=false>
                </e-series>
                <e-series :dataSource='data3' name='Cubic Spline Interpolation' fill='green' type='Spline' xName='x' yName='y' width=2 enableTooltip=false>
                </e-series>
                <e-series :dataSource='data1' name='Data Points' fill='red' type='Scatter' xName='x' yName='y' width=2 :marker='marker'>
                </e-series>                
            </e-series-collection>
        </ejs-chart>
    </div>
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Axis:</div>
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
                            <div>Crosses Value:</div>
                        </td>
                        <td style="width: 40%;">
                            <div style="margin-top: 0px;">
                                <input type="text" id="crossingValue">
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Placing Label Near to Axis Line:</div>
                        </td>
                        <td style="width: 50%;padding-left: 10px; padding-right: 10px">
                            <div>
                                <input type="checkbox" @change='check' id="axisElements" checked=true>
                            </div>
                        </td>
                    </tr>
                </table>
    </div>


    <div id="action-description">
    <p>
        This sample illustrates an interpolation of data points between linear and cubic by using spline and line series.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the axis crossing behavior in chart. Axis can be positioned anywhere in the chart area by using
        the
        <code>crossesAt</code> property of axis. This property specifies where the horizontal axis should intersect or cross the vertical axis
        and vice-versa.
    </p>
    <p>
        Default value of crossesAt property is null. So, you can use
        <code>placeNextToAxisLine</code> property to place the axis labels and ticks next to axis line. When there are multiple axes, you can choose an axis
        to cross by using
        <code>crossesInAxis</code> property. If the axis name is not valid, primaryXAxis or primaryYAxis will be used for crossing, by default.
    </p>

</div>

</div>
</template>
<style>
.control-section {
    min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import { Browser, extend } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-vue-inputs';
import { ChartPlugin, LineSeries, ScatterSeries, SplineSeries, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
    theme: theme,
    data1: [{ x: -6, y: 2 }, { x: -3, y: -4 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 }],
    data2: [
        { x: -6, y: 2 }, { x: -5, y: 0 }, { x: -4.511, y: -0.977 }, { x: -3, y: -4 }, { x: -1.348, y: -1.247 },
        { x: -0.6, y: 0 }, { x: 0, y: 1 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 },
    ],
    data3: [
        { x: -6, y: 2 }, { x: -5.291, y: 0 }, { x: -5, y: -0.774 }, { x: -3, y: -4 }, { x: -0.6, y: -0.965 },
        { x: -0.175, y: 0 }, { x: 0, y: 0.404 }, { x: 1.5, y: 3.5 }, { x: 3.863, y: 5.163 }, { x: 6, y: 4.5 },
    ],
    //Initializing Primary X Axis
    primaryXAxis: {
        minimum: -8, maximum: 8, interval: 2,
        valueType: 'Double',
        lineStyle: {
            width: 2
        },
        minorTickLines: { width: 0 },
        majorTickLines: { width: 0 },
        crossesAt: 0,
        minorTicksPerInterval: 3
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        minimum: -8, maximum: 8, interval: 2,
        lineStyle: {
            width: 2
        },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        crossesAt: 0,
        minorTicksPerInterval: 3,
    },
    marker: {
        visible: false,
        height: 12,
        width: 12,
    },
    //Initializing Tooltip
    tooltip: { enable: true },
    title: 'Spline Interpolation',
    legend: {
        visible: true
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
    chart: [LineSeries, ScatterSeries, SplineSeries, Tooltip, Legend]
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
});
</script>