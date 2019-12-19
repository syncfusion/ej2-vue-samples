<template>
<div>
    <div class="control-section">
        <div>
        <div class="content-wrapper">
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :tooltipSettings='tooltipSettings' :tooltipRender='tooltipRender' :load='load'></ejs-heatmap>
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
        In this example, you can see how to customize the tooltip content in Heatmap. You can customize the tooltip content by using the <code>tooltipRender </code> event.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code> module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a legend by injecting the <code>Legend </code> module using the <code>Heatmap.Inject(Legend) </code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { defaultTableDataSource } from './heatmap-data/default-table-data-source.json';
Vue.use(HeatMapPlugin);
Vue.use(RadioButtonPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Crude Oil Production of Non-OPEC Countries (in Million barrels per day)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['Canada', 'China', 'Egypt', 'Mexico', 'Norway', 'Russia', 'UK', 'USA'],
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
           labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010']
        },
        dataSource: defaultTableDataSource,
        legendSettings: {
            visible: false
        },
        cellSettings: {
            border: {
                width: 0
            },
            format: '{value} M'
        },
         tooltipSettings: {
            fill: '#265259',
            textStyle: {
                color: '#FFFFFF',
                size:'12px'
            },
            border:{
                width:1,
                color:'#98BABF'
            }
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
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    tooltipRender : function(args)
    {
        args.content = ['In ' + args.yLabel + ', the ' + args.xLabel + ' produced ' + args.value + ' million barrels per day'];
    }
  }
})
</script>