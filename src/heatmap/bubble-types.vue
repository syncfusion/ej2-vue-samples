<template>
<main><div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :paletteSettings='paletteSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
      <a href="https://data.worldbank.org" target='_blank'>https://data.worldbank.org/</a>
</div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" role="none" title="Properties" style="width: 100%;margin-left: -10px;">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div style="padding-left:0px">Bubble Type:</div>
                    </td>
                    <td style="width: 60%;">
                    <ejs-dropdownlist id='bubbleType' ref='bubbleType' index=0 :dataSource='bubbleData' :popupHeight='height' :change='changeType'></ejs-dropdownlist>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description"aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the female participation rate of the total female population in the country’s work force. In Bubble Heatmap, the data points can be visualized using bubble size, bubble shade and sector view types. In property panel, the options are available to change the view of the data points in the bubble Heatmap by means of dropdown.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to display the data points in bubble heatmap using multiple views such as bubble size, bubble shade and the sector. You can change the cell type to bubble by using the <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettingsModel/#tiletype">tileType</a> property in <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettingsModel/">cellSettings</a> , and you can change the view of the bubble heatmap by using the <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettingsModel/#bubbletype">bubbleType</a> property in <code>cellSettings</code>.
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
</section>
</main>
</template>
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import data from './table-bubble-data.json';

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-dropdownlist': DropDownListComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Female Participation Rate in Labor Force for the Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
         xAxis: {
            labels: ['Singapore', 'Spain', 'Australia', 'Germany', 'Belgium', 'USA', 'France', 'UK'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1995', '2000', '2005', '2010', '2015'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: data.tableBubbleData,
        cellSettings: {
           border: {
                width: 1
            },
            showLabel: false,
            tileType: 'Bubble',
            bubbleType: 'Size',
            textStyle: {
                fontFamily: 'inherit'
            }
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
            visible: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
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
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    /* custom code end */
    },
    tooltipRender:function(args)
    {
        args.content = [args.xLabel + ' | ' + args.yLabel + ' : ' + args.value + ' %'];
    },
    changeType: function() {
        this.$refs.heatmap.ej2Instances.cellSettings.bubbleType = this.$refs.bubbleType.ej2Instances.value.toString();
    }
  }
}
</script>