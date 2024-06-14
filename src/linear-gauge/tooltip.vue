<template>
<main><div>
<div class="control-section">
    <ejs-lineargauge ref="lineargauge1" :background='background' style='display:block' align='center' id='tooltipContainer' :loaded='loaded' :orientation='orientation' :container='container' :tooltip='tooltip' :axisLabelRender='labelRender' :tooltipRender='renderTooltip' :load='load' :annotations='annotations'>
        <e-axes>
            <e-axis :minimum='minimum' :maximum='maximum' :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                <e-pointers>
                    <e-pointer :type='type' :value='value' :offset='offset' :color='color'></e-pointer>
                </e-pointers>
            </e-axis>
            <e-axis :opposedPosition='opposedPosition' :minimum='minimum2' :maximum='maximum2' :line='line2' :majorTicks='majorTicks2' :minorTicks='minorTicks2' :labelStyle='labelStyle'>
                <e-pointers>
                    <e-pointer :type='type2' :value='value2' :offset='offset2' :color='color2'></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample depicts the linear gauge as a measuring scale and shows the tooltip in the linear gauge.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        The tooltip is used to track the current value that is closest to the mouse position or touch contact. When
        using a touch-enabled device, the tooltip is displayed by hovering or tapping.
    </p>
    <p>
        More information about tooltip can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/user-interaction/#tooltip">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, GaugeTooltip, Annotations } from "@syncfusion/ej2-vue-lineargauge";

export default {
 components: {
    'ejs-lineargauge': LinearGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective
 },
 data:function(){
    return{
     container: {
            width: 140,
            border: {
                width: 2,
                color: '#a6a6a6'
            }
        },
        background:'transparent',
        tooltip: {
        enable: true,
        showAtMousePosition: true,
        textStyle: { fontFamily: 'inherit' }
        },
        orientation: 'Horizontal',
        minimum: 0,
        maximum: 10,
        line: {
            offset: 140,
            color:'#a6a6a6'
        },
        majorTicks: {
            interval: 1, height: 20, color: '#9E9E9E'
        },
        minorTicks: {
            interval: 0.2, height: 10, color: '#9E9E9E'
        },
        labelStyle: {
            font: {
                fontFamily: 'inherit'
            }
        },
        annotations: [ {
                content: '<div id="first"><h1 style="font-size:15px;color:#686868;">Inches</h1></div>',
                axisIndex: 0,
                axisValue: 5.4,
                x: 35,
                y: -58,
                zIndex: '1'
            },
            {
                content: '<div id="second"><h1 style="font-size:15px;color:#686868;">Centimeters</h1></div>',
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
            color:'#a6a6a6'
        },
        majorTicks2: {
            interval: 1, height: 20, color: '#9E9E9E'
        },
        minorTicks2: {
            interval: 0.2, height: 10, color: '#9E9E9E'
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
    loaded:  function(args) {
        if(parseInt(args.gauge.element.offsetWidth) < 500)
        {
            this.$refs.lineargauge1.ej2Instances.axes[1].majorTicks.interval = 2;
            this.$refs.lineargauge1.ej2Instances.axes[1].minorTicks.interval = 1;
            this.$refs.lineargauge1.ej2Instances.orientation = 'Vertical';
            this.$refs.lineargauge1.ej2Instances.annotations[0].x = -57;
            this.$refs.lineargauge1.ej2Instances.annotations[0].y = -30;
            this.$refs.lineargauge1.ej2Instances.annotations[1].x = 50;
            this.$refs.lineargauge1.ej2Instances.annotations[1].y = -45;
        }
        else {
            this.$refs.lineargauge1.ej2Instances.axes[1].majorTicks.interval = 1;
            this.$refs.lineargauge1.ej2Instances.axes[1].minorTicks.interval = 0.2;
            this.$refs.lineargauge1.ej2Instances.orientation = 'Horizontal';
            this.$refs.lineargauge1.ej2Instances.annotations[0].x = 35;
            this.$refs.lineargauge1.ej2Instances.annotations[0].y = -58;
            this.$refs.lineargauge1.ej2Instances.annotations[1].x = 50;
            this.$refs.lineargauge1.ej2Instances.annotations[1].y = 52;
        }

        if(parseInt(args.gauge.element.offsetWidth) < 500)
        {
          document.getElementById('tooltipContainer_Annotation_0')['style']['transform'] = 'rotate(270deg)';
          document.getElementById('tooltipContainer_Annotation_1')['style']['transform'] = 'rotate(270deg)';
        }
        else
        {
          document.getElementById('tooltipContainer_Annotation_0')['style']['transform'] = '';
          document.getElementById('tooltipContainer_Annotation_1')['style']['transform'] = '';
        }
    },
    load: function(args){
    /* custom code start */
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */

    if (args.gauge.theme.toLowerCase().indexOf('dark') > 1 || args.gauge.theme.toLowerCase() === 'highcontrast') {
        this.$refs.lineargauge1.ej2Instances.annotations[0].content = '<div id="first"><h1 style="font-size:15px; color: #DADADA">Inches</h1></div>';
        this.$refs.lineargauge1.ej2Instances.annotations[1].content = '<div id="second"><h1 style="font-size:15px; color: #DADADA">Centimeters</h1></div>';
    }
  }
}
};
</script>


