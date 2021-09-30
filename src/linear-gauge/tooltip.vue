<template>
<div>
<div class="control-section">
<ejs-lineargauge ref="lineargauge" style='display:block' align='center' id='tooltipContainer' :orientation='orientation' :container='container' :tooltip='tooltip' :axisLabelRender='labelRender' :tooltipRender='renderTooltip' :load='gaugeLoad' :annotations='annotations'>
<e-axes>
<e-axis :minimum='minimum' :maximum='maximum' :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks'>
<e-pointers>
<e-pointer :type='type' :value='value' :offset='offset' :color='color'></e-pointer>
</e-pointers>
</e-axis>
<e-axis :opposedPosition='opposedPosition' :minimum='minimum2' :maximum='maximum2' :line='line2' :majorTicks='majorTicks2' :minorTicks='minorTicks2'>
<e-pointers>
<e-pointer :type='type2' :value='value2' :offset='offset2' :color='color2'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-lineargauge>
</div>
<div id="action-description">
    <p>
        This sample visualizes the tooltip for pointer in gauge. To see tooltip in action, hover pointer or tap the pointer.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the measuring scale by using the linear gauge. Tooltip is used to track the pointer value closer
        to the current mouse position or touch contact. You can show the tooltip for an individual marker or bar pointer
        by hover or tap on the pointer in touch enabled devices.
        <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Linear gauge component features are segregated into individual feature-wise modules. To use tooltip, we need to inject <code>GaugeTooltip</code>module
            using <code>LinearGauge.Inject(GaugeTooltip)</code> method.
        </p>
        <p>
            More information about tooltip can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
        </p>
</div>
</div>
</template>
<style scoped>
  #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, GaugeTooltip, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default Vue.extend({
 data:function(){
    return{
     container: {
            width: 140,
            border: {
                width: 2,
                color: '#a6a6a6'
            }
        },
        tooltip: {
            enable: true,
        },
        orientation: 'Horizontal',
        minimum: 0,
        maximum: 10,
        line: {
            offset: 140
        },
        majorTicks: {
            interval: 1
        },
        minorTicks: {
            interval: 0.2
        },
        annotations: [ {
                content: '<div id="first"><h1 style="font-size:15px;">Inches</h1></div>',
                axisIndex: 0,
                axisValue: 5.4,
                x: 35,
                y: -58,
                zIndex: '1'
            },
            {
                content: '<div id="second"><h1 style="font-size:15px;">Centimeters</h1></div>',
                axisIndex: 1,
                axisValue: 16.5,
                x: 50,
                y: 52,
                zIndex: '1'
            }],
        type: 'Bar',
        value: 5.4,
        offset: 15,
        color: '#ff66b3',
        opposedPosition: true,
        minimum2: 0,
        maximum2: 25,
        line2: {
            offset: -140,
        },
        majorTicks2: {
            interval: 1
        },
        minorTicks2: {
            interval: 0.2
        },
        type2: 'Bar',
        offset2: -15,
        value2: 16.5,
        color2: '#4d94ff',
    }
 },
 provide: {
    lineargauge: [GaugeTooltip, Annotations]
},
methods: {
    renderTooltip: function(args){
        args.content = (args.axis.visibleRange.max === 25) ? args.content + ' cm' : args.content + ' in';
    },
    labelRender: function(args){
     if (args.axis.visibleRange.min === args.value || args.axis.visibleRange.max === args.value) {
        args.text = '';
    }
    },
    gaugeLoad: function(args){
        /* custom code start */
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */
    }
}
});
</script>


