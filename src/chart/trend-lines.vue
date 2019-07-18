<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
         <ejs-chart ref='chart' id='chartcontainer' :theme='theme' style='display:block; width: 92%' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea' :title='title' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Rupees' :marker='marker1'>
                    <e-trendlines>
                        <e-trendline :type='type' :forwardForecast='forwardForecast' :polynomialOrder='polynomialOrder' :period='period' :backwardForecast='backwardForecast' :width='3' :marker='marker' :name='name' fill='#C64A75'>
                        </e-trendline>
                    </e-trendlines>
                </e-series>
            </e-series-collection>
        </ejs-chart>

    </div>
    <div>
    
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>TrendLine Type:</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='trendline' :change='onType' :dataSource='trenddata' value="Linear" :width='120' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
             <tr style="height: 50px">
                <td>
                    <div>Forward Forecast:</div>
                </td>
                <td>
                    <div>
                         <ejs-numerictextbox ref='fntx' id="forwardForecast" :enabled='forwardEnabled' :value='fValue' :min='1' :max='20' :step='1' :width='120' :change='onForward'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Backward Forecast:</div>
                </td>
                <td>
                    <div>
                         <ejs-numerictextbox id="backwardForecast" :enabled='backwardEnabled' :value='1' :min='1' :max='20' :step='1' :width='120' :change='onBackward'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Polynomial Order:</div>
                </td>
                <td>
                    <div>
                          <ejs-numerictextbox id="polynomialOrder" :enabled='polynomialEnabled' :value='1' :min='0' :max='20' :step='1' :width='120' :change='onPolynomial' :disabled='true'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Period:</div>
                </td>
                <td>
                    <div>
                     <ejs-numerictextbox id="period" :enabled='periodEnabled' :value='1' :min='0' :max='20' :step='1' :width='120' :change='onPeriod' :disabled='true'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div id="action-description">
    <p>
        This sample visualizes the trend of Indian rupees and US dollar variation with trendline in the chart. The type of trend line can be changed by using <code>TrendLine Type</code>, forward and backward forecasting of trendlines can be changed by <code>Forward Forecasting</code> and <code>Backward Forecast</code> respectively. Polynomial and period for a trendlines can be changed by using <code>Polynomial order</code> and <code>Period</code>.
    </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render and configure the Trend Lines. You can use <code>border</code>, <code>fill</code> properties to customize the area.
    </p>
    <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Trend lines, we need to Inject <code>Treandlines</code> module using <code> provide: { chart: [Trendlines] },</code> method.
    </p>
    <p>
        More information on the error bar can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>
   .control-section {
        min-height: 450px;
    }
    
    #chartcontainer_Series_0_TrendLine_0 {
        stroke-dasharray: 10;
        -webkit-animation: dash 1s linear infinite;
        animation: dash 1s linear infinite;
    }
    
    @keyframes dash {
        to {
            stroke-dashoffset: -20;
        }
    }
</style>
<script>
import Vue from "vue";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { EmitType, extend } from '@syncfusion/ej2-base';
import { ChartPlugin, ScatterSeries, Category, Tooltip, Trendlines, SplineSeries, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(NumericTextBoxPlugin);

   
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");   

let series1 = [];
let yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point1; let i; let j = 0;
for (i = 1973; i <= 2013; i++) {
    point1 = { x: i, y: yValue[j] };
    series1.push(point1); j++;
}
let powerData = [
    { x: 1, y: 10 }, { x: 2, y: 50 }, { x: 3, y: 80 }, { x: 4, y: 110 },
    { x: 5, y: 180 }, { x: 6, y: 220 }, { x: 7, y: 300 }, { x: 8, y: 370 }, { x: 9, y: 490 }, { x: 10, y: 500 }
];
export default Vue.extend({
  data: function() {
    return {
         theme: theme,
        seriesData: series1,
        forwardForecast: 0,
        backwardForecast: 0,
        polynomialOrder: 2,
        period: 2,

        forwardEnabled: true,
        backwardEnabled: true,
        polynomialEnabled: false,
        periodEnabled: false,

        type: 'Linear',
        name: 'Linear',
        fValue: 1,
           //Initializing Primary X Axis
    primaryXAxis: {
        majorGridLines: { width : 0}, edgeLabelPlacement: 'Shift'
    },
    //Initializing Primary Y Axis
    primaryYAxis:  {
       title: 'Rupees against Dollars',
       interval: 10, lineStyle: {width: 0}, majorTickLines: { width: 0 }
    },
    chartArea :  {
      border: { width : 0}
    },
    tooltip:  {
        enable: true
    },
    marker: {
        visible: false
    },
    marker1: {
        visible :true
    },
    legendSettings : { visible: false },

    title: 'Historical Indian Rupee Rate (INR USD)',

       trenddata : [ 'Linear', 'Exponential', 'Power', 'Logarithmic', 'Polynomial', 'MovingAverage' ]
      
   };
  },
  provide: {
    chart: [Category, Tooltip, ScatterSeries, SplineSeries, LineSeries, Trendlines]
  },
   updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: { 
    
       onType:function(e){
             let trend = document.getElementById('trendline').value
            
            this.seriesData = [];

            this.type = trend;
            this.name = trend;

            let forwardForecast; let backwardForecast; let polynomialOrder; let period;
            if (trend !== 'Power') {
                this.seriesData = series1; 

                  let primaryXAxis = extend({}, this.primaryXAxis);
            primaryXAxis.title = '';
            this.primaryXAxis = primaryXAxis;

             let primaryYAxis = extend({}, this.primaryYAxis);
            primaryYAxis.interval = 10;
            primaryYAxis.title= 'Rupees against Dollars';
            this.primaryYAxis = primaryYAxis;

            this.title = 'Historical Indian Rupee Rate (INR USD)';

                if (trend === 'MovingAverage') {

            let marker = extend({}, this.marker);
            marker.visible = false;
            this.marker = marker;
            
                }
            } else {
                this.seriesData = powerData;
                this.name = 'Power';

                  let primaryXAxis = extend({}, this.primaryXAxis);
            primaryXAxis.title = 'Seconds';
            this.primaryXAxis = primaryXAxis;

             let primaryYAxis = extend({}, this.primaryYAxis);
             primaryYAxis.title= 'Meters';
              primaryYAxis.interval = 100;
            this.primaryYAxis = primaryYAxis;

               this.title = "Distance Measurement";
               
            }
              if (trend !== 'Polynomial' && trend !== 'MovingAverage') {
                    period = polynomialOrder = false;
                    forwardForecast = backwardForecast = true;
                } else if (trend === 'MovingAverage') {
                    period = true;
                    forwardForecast = backwardForecast = polynomialOrder = false;
                } else {
                    forwardForecast = backwardForecast = polynomialOrder = true;
                    period = false;
                }
            this.forwardEnabled = forwardForecast;
            this.backwardEnabled = backwardForecast;
            this.polynomialEnabled = polynomialOrder;
            this.periodEnabled = period;


    },
    
     onForward: function(e) {
         this.forwardForecast = e.value ;
    },
    onBackward: function(e) {
         this.backwardForecast = e.value ;
    
    },
     onPolynomial: function(e) {
          this.polynomialOrder = e.value ;
    },
    onPeriod: function(e) {
         this.period = e.value ;
    }
  },

  
});
</script>