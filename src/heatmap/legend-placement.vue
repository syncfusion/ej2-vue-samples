<template>
<div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :paletteSettings='paletteSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">
</div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%;margin-left: -10px;">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div style="padding-left:0px">Position:</div>
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
        In this example, you can see how to change the display position of the Heatmap legend. You can change the display position
        of legend to left, right, bottom and top by using the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettingsModel/#position" target="_blank">position</a> property in
        <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettingsModel/" target="_blank">legendSettings</a>.
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
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-dropdownlist': DropDownListComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Hourly Weather Forecast',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily:'inherit'
            }
        },
         xAxis: {
            labels: ['London', 'Berlin', 'Madrid', 'Paris', 'Rome', 'Lisbon', 'Dublin'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['12AM', '2AM', '4AM', '6AM', '8AM', '10AM', '12PM',
                '2PM', '4PM', '6PM', '8PM', '10PM'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
            [10, 8, 7, 7, 10, 14, 17, 18, 18, 17, 16, 15],
            [10, 8, 7, 6, 8, 13, 15, 17, 17, 17, 15, 12],
            [12, 10, 8, 7, 7, 10, 15, 18, 20, 21, 20, 17],
            [11, 9, 8, 7, 7, 12, 16, 18, 19, 19, 17, 15],
            [15, 15, 15, 15, 16, 20, 22, 21, 21, 21, 19, 18],
            [13, 13, 12, 12, 12, 15, 18, 21, 22, 21, 19, 16],
            [11, 10, 9, 9, 10, 12, 14, 16, 17, 17, 16, 14]
        ],
        cellSettings: {
            showLabel: false,
            format: '{value} C',
            textStyle: {
                fontFamily: 'inherit'
            }
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
                 text: 'Celsius',
                textStyle: {
                    size: '15px',
                    fontWeight: '500',
                    fontStyle: 'Normal',
                    fontFamily:'inherit'
                }
             },
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
        legendData:['Left','Right','Top','Bottom']
      
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
    },
    tooltipRender:function(args)
    {
        args.content = [args.xLabel + ' | ' + args.yLabel + ' : ' + args.value + '\xB0 C'];
    },
    changePosition: function() {
        this.$refs.heatmap.ej2Instances.legendSettings.position = this.$refs.legendPosition.ej2Instances.value.toString();
    }
  }
}
</script>