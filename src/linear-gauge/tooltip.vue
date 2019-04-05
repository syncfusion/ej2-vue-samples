<template>
<div>
<div class="control-section">
<ejs-lineargauge ref="lineargauge" style='display:block' align='center' id='tooltipContainer' :orientation='orientation' :container='container' :tooltip='tooltip' :annotations='annotations' :axisLabelRender='labelRender' :tooltipRender='renderTooltip' :load='gaugeLoad' :loaded='gaugeLoaded' :resized='gaugeResized'>
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
<style>
  #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations, GaugeTooltip } from "@syncfusion/ej2-vue-lineargauge";
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
        annotations: [
            {
                content: '<div id="first"><h1 style="font-size:15px;color: #686868"">Inches</h1></div>',
                axisIndex: 0,
                axisValue: 5.4,
                x: 35,
                y: -58,
                zIndex: '1'
            },
            {
                content: '<div id="second"><h1 style="font-size:15px;color: #686868"">Centimeters</h1></div>',
                axisIndex: 1,
                axisValue: 16.5,
                x: 50,
                y: 52,
                zIndex: '1'
            }
        ]
    }
 },
 provide: {
    lineargauge: [Annotations, GaugeTooltip]
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
    gaugeResized: function(args){
        // let cotainerObj=document.getElementById('tooltipContainer');
        if (args.currentSize.width < 500) {
        this.$refs.lineargauge.ej2Instances.axes[1].majorTicks.interval = 2;
        this.$refs.lineargauge.ej2Instances.axes[1].minorTicks.interval = 1;
        this.$refs.lineargauge.ej2Instances.orientation = 'Vertical';
        this.$refs.lineargauge.ej2Instances.annotations[0].x = -57;
        this.$refs.lineargauge.ej2Instances.annotations[0].y = -30;
        this.$refs.lineargauge.ej2Instances.annotations[1].x = 50;
        this.$refs.lineargauge.ej2Instances.annotations[1].y = -45;
    } else {
        this.$refs.lineargauge.ej2Instances.axes[1].majorTicks.interval = 1;
        this.$refs.lineargauge.ej2Instances.axes[1].minorTicks.interval = 0.5;
        this.$refs.lineargauge.ej2Instances.orientation = 'Horizontal';
        this.$refs.lineargauge.ej2Instances.annotations[0].x = 35;
        this.$refs.lineargauge.ej2Instances.annotations[0].y = -58;
        this.$refs.lineargauge.ej2Instances.annotations[1].x = 50;
        this.$refs.lineargauge.ej2Instances.annotations[1].y = 52;
    }
    },
    gaugeLoad: function(args){
        /* custom code start */
    // let cotainerObj=document.getElementById('tooltipContainer');
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    if (args.gauge.theme.toLowerCase().indexOf('dark') > 1 || args.gauge.theme.toLowerCase() === 'highcontrast') {
        args.gauge.annotations[0].content = '<div id="first"><h1 style="font-size:15px; color: #DADADA">Inches</h1></div>';
        args.gauge.annotations[1].content = '<div id="second"><h1 style="font-size:15px; color: #DADADA">Centimeters</h1></div>';
    }
    /* custom code end */
    let width = parseInt(((this.$refs.lineargauge.ej2Instances.width, this.$refs.lineargauge.ej2Instances.element.offsetWidth) || this.$refs.lineargauge.ej2Instances.element.offsetWidth || 600), 10);
    if (width < 500) {
        this.$refs.lineargauge.ej2Instances.axes[1].majorTicks.interval = 2;
        this.$refs.lineargauge.ej2Instances.axes[1].minorTicks.interval = 1;
        this.$refs.lineargauge.ej2Instances.orientation = 'Vertical';
        this.$refs.lineargauge.ej2Instances.annotations[0].x = -57;
        this.$refs.lineargauge.ej2Instances.annotations[0].y = -30;
        this.$refs.lineargauge.ej2Instances.annotations[1].x = 50;
        this.$refs.lineargauge.ej2Instances.annotations[1].y = -45;
    } else {
        this.$refs.lineargauge.ej2Instances.axes[1].majorTicks.interval = 1;
        this.$refs.lineargauge.ej2Instances.axes[1].minorTicks.interval = 0.5;
        this.$refs.lineargauge.ej2Instances.orientation = 'Horizontal';
        this.$refs.lineargauge.ej2Instances.annotations[0].x = 35;
        this.$refs.lineargauge.ej2Instances.annotations[0].y = -58;
        this.$refs.lineargauge.ej2Instances.annotations[1].x = 50;
        this.$refs.lineargauge.ej2Instances.annotations[1].y = 52;
    }
    },
    gaugeLoaded: function(args){
        // let cotainerObj=document.getElementById('tooltipContainer');
        if (document.getElementById('tooltipContainer')) {
        if (this.$refs.lineargauge.ej2Instances.availableSize.width < 500) {
            document.getElementById('tooltipContainer_Annotation_0').style.transform = 'rotate(270deg)';
            document.getElementById('tooltipContainer_Annotation_1').style.transform = 'rotate(270deg)';
        } else {
            document.getElementById('tooltipContainer_Annotation_0').style.transform = '';
            document.getElementById('tooltipContainer_Annotation_1').style.transform = '';
        }
    }
    }
}
});
</script>


