<template>
<div>
    <div class="control-section col-lg-9">
        <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' renderingMode='SVG' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div>Rendering Mode:</div>
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
        In this example, you can see how to change the rendering mode between <code>Canvas </code> and <code>SVG </code> types in Heatmap. You can change the rendering mode using the <code>renderingMode </code> property.
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
import { renderModeData } from './heatmap-data/render-mode-data.json';
Vue.use(HeatMapPlugin);
Vue.use(RadioButtonPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Net Migration Rate of Northern Europe From 1965 to 2015',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['Channel Islands', 'Denmark', 'Estonia', 'Finland',
                'Iceland', 'Ireland', 'Latvia', 'Lithuania', 'Norway', 'Sweden', 'UK'],
            labelRotation: -90,
            labelIntersectAction: 'None'
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015']
        },
        dataSource: renderModeData,
        cellSettings: { border: { width: 0 }, showLabel: false },
        legendSettings: {
            position: 'Bottom',
            width: '200px'
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
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    renderChange : function()
    {
        this.$refs.heatmap.ej2Instances.renderingMode = this.$refs.svgMode.ej2Instances.checked ? 'SVG' : 'Canvas';
    }
  }
})
</script>