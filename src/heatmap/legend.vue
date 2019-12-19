<template>
<div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :paletteSettings='paletteSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">
</div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div>Position:</div>
                    </td>
                    <td style="width: 40%;">
                    <ejs-dropdownlist id='legendPosition' ref='legendPosition' index=3 :dataSource='legendData' :popupHeight='height' :change='changePosition'></ejs-dropdownlist>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the hourly weather forecast for some major European cities. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change the display position of the Heatmap legend axes by means of dropdown.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to change the display position of the Heatmap legend. You can change the display position of legend to left, right, bottom and top by using the <code>position </code> property in <code>legendSettings</code>.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices. </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code>  module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a legend by injecting the <code>Legend </code>  module using the <code>Heatmap.Inject(Legend) </code>  method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { legendSampleData } from './heatmap-data/legend-sample-data.json';
Vue.use(DropDownListPlugin);
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Hourly Weather Forecast',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['London', 'Berlin', 'Madrid', 'Paris', 'Rome', 'Lisbon', 'Dublin']
        },
        yAxis: {
            labels: ['12AM', '2AM', '4AM', '6AM', '8AM', '10AM', '12PM',
                '2PM', '4PM', '6PM', '8PM', '10PM']
        },
        dataSource: legendSampleData,
        cellSettings: {
           showLabel: false,
            format: '{value} C'
        },
        paletteSettings: {
             palette: [{ value: 0, color: '#6EB5D0' },
            { value: 10, color: '#7EDCA2' },
            { value: 19, color: '#DCD57E' },
            { value: 22, color: '#DCD57E' }
            ]
        },
        legendSettings: {
            position: 'Bottom',
             labelFormat: '{value}\xB0 C',
             title: {
                 text: 'Celsius'
             }
        },
        height:'200px',
        legendData:['Left','Right','Top','Bottom']
      
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    tooltipRender:function(args)
    {
        args.content = [args.xLabel + ' | ' + args.yLabel + ' : ' + args.value + '\xB0 C'];
    },
    changePosition: function() {
        this.$refs.heatmap.ej2Instances.legendSettings.position = this.$refs.legendPosition.ej2Instances.value.toString();
    }
  }
})
</script>