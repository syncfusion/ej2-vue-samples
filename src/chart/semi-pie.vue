<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-accumulationchart ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip' :enableAnimation='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :innerRadius='innerRadius' :startAngle='startAngle' 
                :endAngle='endAngle' xName='x' yName='y' :dataLabel='dataLabel' name='Agricultural' radius='90%' :explode= 'isExplode'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tbody><tr style="height: 50px">
                <td>
                    <div>Start Angle</div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="rangeMin" value="270" min="0" max="360" style="width:90%" @touchmove='rangeMin' @change='rangeMin' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                       <p id="startangle" style="font-weight: normal;padding-top:10px">270</p> 
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>End Angle</div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-max" id="rangeMax" value="90" min="0" max="360" style="width:90%" @touchmove='rangeMax' @pointermove='rangeMax' @change='rangeMax' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                      <p id="endangle" style="font-weight: normal;padding-top:10px">90</p>  
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Inner Radius</div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-max" id="radiusValue" value="40" min="0" max="50" style="width:90%" @touchmove='radiusValue' @pointermove='radiusValue' @change='radiusValue' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <p id="innerradius" style="font-weight: normal;padding-top:10px">0.40</p>   
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
</div>
 <div id="action-description">
    <p>
     This sample illustrates the agriculture land percentages of various countries by using a pie series. It has options to change the angle and radius of the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render semi pie and doughnut chart. Using <code>startAngle</code>, <code>endAngle</code> properties, we can achieve this semi pie chart. Property panel to change the angle is provided with this sample.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.

    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { AccumulationChartPlugin, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
         enableAnimation : false,
      seriesData: [
                 { x: 'Australia', y: 53, text: 'AUS: 14%' },
                    { x: 'China', y: 56, text: 'CHN: 15%' },
                    { x: 'India', y: 61, text: 'IND: 16%' },
                    { x: 'Japan', y: 13, text: 'JPN: 3%' },
                    { x: 'South Africa', y: 79, text: 'ZAF: 21%' },
                    { x: 'United Kingdom', y: 71, text: 'UK: 19%' },
                    { x: 'United States', y: 45, text: 'USA: 12%' }

      ],
     
     
          dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '10%' }, name: 'text',
                    font: { size: '14px' }
                },
               
        legendSettings: {
            visible: false,
        },
        startAngle : 270, endAngle : 90,
          tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },

      innerRadius: '40%',

      isExplode: true,
     
      title: "Agricultural Land Percentage"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
   updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
        this.$refs.pie.ej2Instances.removeSvg();
        this.$refs.pie.ej2Instances.refreshSeries();
        this.$refs.pie.ej2Instances.refreshChart();
      });
    },
  methods: {
    radiusValue : function(e) {
        let value = document.getElementById('radiusValue').value;
        this.innerRadius = value + '%';
        document.getElementById('innerradius').innerHTML = (value / 100).toFixed(2);
    
    },
    rangeMax : function(e) {
           let max = document.getElementById('rangeMax').value;
            this.endAngle = max;
            document.getElementById('endangle').innerHTML = max;
           
    },
     rangeMin : function(e) {
         let min = document.getElementById('rangeMin').value;
            this.startAngle = min;
            document.getElementById('startangle').innerHTML = min;
      

    }
  }
   
});
</script>