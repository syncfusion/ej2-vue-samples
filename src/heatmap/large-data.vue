<template>
<main><div>
<div class="control-section">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' renderingMode='Canvas' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
</div>
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the annual traffic report of an airport with the number of flight arrivals in a year.The data label is disabled in this sample, the tooltip displays the data point values.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to switch the Heatmap to canvas rendering mode.The rendering performance will be better in <code>Canvas</code> rendering mode, while loading large datasets. You can switch the rendering mode for Heatmap between <code>SVG</code> and <code>Canvas</code> using the <a href="https://ej2.syncfusion.com/documentation/heatmap-chart/rendering-mode" target="_blank">renderingMode</a> property. When the <code>renderingMode</code> property is set to <code>Auto</code>, the rendering mode will be switched automatically based of the size of data source to improve the rendering performance.
    </p>
    <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
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
import data from './large-data.json';

export default {
components: {
    'ejs-heatmap': HeatMapComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Annual Flight Traffic Report',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily:'inherit'
            }
        },
         xAxis: {
            minimum: new Date(2017, 0, 1),
            maximum: new Date(2017, 11, 31),
            intervalType: 'Days',
            valueType: 'DateTime',
            labelFormat: 'MMM',
            showLabelOn: 'Months',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
                '22:00', '23:00', '24:00'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: data.largeData,
        paletteSettings: {
           palette: [
                { value: 150, color: '#A6DC7E' },
                { value: 250, color: '#DCD57E' },
                { value: 300, color: '#DC8D7E' },
            ],
            type: 'Gradient'
        },
        cellSettings: {
            border: {
                width: 0
            },
            showLabel:false,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
           visible:false
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
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
     /* custom code end */
    },
    tooltipRender: function(args)
    {
        let intl = args.heatmap.intl;
        let format =  intl.getDateFormat({ format: "MMM dd, yyyy" });
        let value = format(args.xValue);
         args.content = [value + ' ' + args.yLabel + ' : ' + args.value + ' flight arrivals' ];
    }
  }
}
</script>