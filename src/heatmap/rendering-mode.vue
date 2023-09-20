<template>
<div>
    <div class="control-section col-lg-9">
        <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' renderingMode='SVG' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%;margin-left: -10px;">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div style="padding-left:0px">Rendering Mode:</div>
                    </td>
                    <td style="width: 40%;">
                        <div class="row">
                            <ejs-radiobutton id='svg' ref='svgMode' label="SVG" name="renderingMode" value="SVG" checked="true" :change='renderChange'></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='canvas' ref='canvasMode' label="Canvas" name="renderingMode" value="Canvas" :change='renderChange'></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the net migration rate for the northern European countries over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change the rendering mode between Canvas and SVG means of radio button.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to change the rendering mode between <code>Canvas</code> and <code>SVG</code> types in Heatmap. You can change the rendering mode using the <a href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/rendering-mode" target="_blank">renderingMode</a> property.
    </p>
    <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
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
            text: 'Net Migration Rate of Northern Europe From 1965 to 2015',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
         xAxis: {
            labels: ['Channel Islands', 'Denmark', 'Estonia', 'Finland',
                'Iceland', 'Ireland', 'Latvia', 'Lithuania', 'Norway', 'Sweden', 'UK'],
            labelRotation: -90,
            labelIntersectAction: 'None',
            textStyle: {
                 fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            textStyle: {
                 fontFamily: 'inherit'
            }
        },
        dataSource: [
            [7.6, 5.9, -3.7, 2.2, 8.9, 6.0, 14.2, 6.1, -3.2, 4.2],
            [3.9, 1.9, 2.6, 14.2, 2.3, 3.5, -2.8, 2.7, 4.2, 3.9],
            [9.2, 3.4, 5.2, 14.5, 1.0, -5.9, -0.2, -1.7, -3.3, 4.6],
            [-2.3, 7.2, -3.2, 15.1, 2.7, 2.9, 3.9, -1.2, 8.2, 6.0],
            [-1.8, 5.0, -3.5, 3.2, 2.5, -1.8, 14.7, 3.0, 8.8, -3.3],
            [-2.5, 3.4, 4.2, -1.9, 7.5, 4.6, 2.4, 10.9, 8.0, -3.0],
            [7.1, 2.5, 7.9, 7.4, 15.2, 7.0, 5.8, -2.3, -3.9, -4.1],
            [4.7, 3.3, 14.3, 5.5, 3.0, -3.5, -5.3, -6.8, -2.3, 5.7],
            [2.2, 13.8, 3.0, -2.2, 3.8, 14.2, 3.7, 4.0, -4.9, 7.8],
            [4.3, 15.3, 3.1, 1.7, 4.2, -3.6, 2.3, -3.2, 10.7, 2.3],
            [-2.3, 3.4, 6.1, -1.3, 13.3, 3.7, -1.7, 8.2, 7.6, 4.1]
        ],
        cellSettings: { 
            textStyle: {
                    fontFamily: 'inherit'
            },
            border: { width: 0 },
            showLabel: false 
        },
        legendSettings: {
            position: 'Bottom',
            width: '200px',
            textStyle: {
                 fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        paletteSettings: {
            palette: [{ color: '#C06C84' },
            { color: '#355C7D' }
            ]
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
    },
    renderChange : function()
    {
        this.$refs.heatmap.ej2Instances.renderingMode = this.$refs.svgMode.ej2Instances.checked ? 'SVG' : 'Canvas';
    }
  }
}
</script>