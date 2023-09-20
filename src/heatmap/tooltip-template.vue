<template>
<div>
    <div class="control-section">
        <div>
        <div class="content-wrapper">
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :tooltipSettings='tooltipSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the crude oil production of the non-OPEC countries over the years. The data point values displayed are in million barrels per day units.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to customize the tooltip content in the HeatMap. You can customize the tooltip content by using the <a href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip#tooltip-template" target="_blank">template</a> property.
    </p>
    <p>
        The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.
    </p>
    <br>
    <p><b>Injecting Module</b></p>
    <p>
      Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip">Tooltip</a> and <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method.
    </p>
</div>
</div>
</template>
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-radiobutton': RadioButtonComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Crude Oil Production of Non-OPEC Countries (in Million barrels per day)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
         xAxis: {
            labels: ['Canada', 'China', 'Egypt', 'Mexico', 'Norway', 'Russia', 'UK', 'USA'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
           labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
            [0.72, 0.71, 0.71, 0.67, 0.72, 0.53, 0.53, 0.56, 0.58, 0.56],
            [2.28, 2.29, 2.09, 1.84, 1.64, 1.49, 1.49, 1.39, 1.32, 1.23],
            [2.02, 2.17, 2.30, 2.39, 2.36, 2.52, 2.62, 2.57, 2.57, 2.74],
            [3.21, 3.26, 3.45, 3.47, 3.42, 3.34, 3.14, 2.83, 2.64, 2.61],
            [3.22, 3.13, 3.04, 2.95, 2.69, 2.49, 2.27, 2.18, 2.06, 1.87],
            [3.30, 3.39, 3.40, 3.48, 3.60, 3.67, 3.73, 3.79, 3.79, 4.07],
            [5.80, 5.74, 5.64, 5.44, 5.18, 5.08, 5.07, 5.00, 5.35, 5.47],
            [6.91, 7.40, 8.13, 8.80, 9.04, 9.24, 9.43, 9.35, 9.49, 9.69]
        ],
        legendSettings: {
            visible: false
        },
        cellSettings: {
            border: {
                width: 0
            },
            format: '{value} M',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
         tooltipSettings: {
            fill: '#265259',
            textStyle: {
                color: '#FFFFFF',
                size:'12px',
                fontFamily: 'inherit'
            },
            border:{
                width:1,
                color:'#98BABF'
            },
            template: '<div style=" border-radius: 5px;fontFamily: inherit; padding-left: 10px;padding-right: 10px;padding-bottom: 6px;padding-top: 6px;background:#000000; border: 1px #919191;" ><span style="color:white">In ${yLabel}, the ${xLabel} produced ${value} million barrels per day.<span></div>'
         },
        paletteSettings: {
            palette: [{ value: 0, color: '#C2E7EC' },
            { value: 0.6, color: '#AEDFE6' },
            { value: 0.75, color: '#9AD7E0' },
            { value: 1, color: '#86CFDA' },
            { value: 1.5, color: '#72C7D4' },
            { value: 2, color: '#5EBFCE' },
            { value: 2.5, color: '#4AB7C8' },
            { value: 3, color: '#36AFC2' },
            { value: 3.5, color: '#309DAE' },
            { value: 5, color: '#2B8C9B' },
            { value: 5.5, color: '#257A87' },
            { value: 6, color: '#206974' },
            { value: 8, color: '#1B5761' },
            { value: 9, color: '#15464D' },
            { value: 9.5, color: '#000000' },
            ],
            type: 'Fixed'
        }
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
     /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
     /* custom code end */
    }
  }
}
</script>