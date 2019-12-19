<template>
<div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :paletteSettings='paletteSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
      <a href="https://data.worldbank.org" target='_blank'>https://data.worldbank.org/</a>
</div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>Bubble Type:</div>
                    </td>
                    <td style="width: 60%;">
                    <ejs-dropdownlist id='bubbleType' ref='bubbleType' index=0 :dataSource='bubbleData' :popupHeight='height' :change='changeType'></ejs-dropdownlist>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the female participation rate of the total female population in the country’s work force. In Bubble Heatmap, the data points can be visualized using bubble size, bubble shade and sector view types. In property panel, the options are available to change the view of the data points in the bubble Heatmap by means of dropdown.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to display the data points in bubble heatmap using multiple views such as bubble size, bubble shade and the sector. You can change the cell type to bubble by using the <code>tileType</code> property in <code>cellSettings</code>, and you can change the view of the bubble heatmap by using the bubbleType property in cellSettings.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip,
        inject the <code>Tooltip </code>  module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a
        legend by injecting the <code>Legend </code>  module using the <code>Heatmap.Inject(Legend) </code>  method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { tableBubbleData } from './heatmap-data/table-bubble-data.json';
Vue.use(DropDownListPlugin);
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Female Participation Rate in Labor Force for the Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
         xAxis: {
            labels: ['Singapore', 'Spain', 'Australia', 'Germany', 'Belgium', 'USA', 'France', 'UK'],
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
            labels: ['1995', '2000', '2005', '2010', '2015']
        },
        dataSource: tableBubbleData,
        cellSettings: {
           border: {
                width: 1
            },
            showLabel: false,
            tileType: 'Bubble',
            bubbleType: 'Size'
        },
        paletteSettings: {
             palette: [{ value: 35, color: '#50A3B1' },
            { value: 45, color: '#78D1BD' },
            { value: 55, color: '#CAE8B4' },
            { value: 65, color: '#EDF8B6' },
            { value: 78, color: '#FFFFDA' }
            ]
        },
        legendSettings: {
            visible: true
        },
        height:'200px',
        bubbleData:['Size','Color','Sector']
      
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
        args.content = [args.xLabel + ' | ' + args.yLabel + ' : ' + args.value + ' %'];
    },
    changeType: function() {
        this.$refs.heatmap.ej2Instances.cellSettings.bubbleType = this.$refs.bubbleType.ej2Instances.value.toString();
    }
  }
})
</script>