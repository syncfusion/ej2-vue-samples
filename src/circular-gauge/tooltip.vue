<template>
 <div>
    <div class="control-section">
        <ejs-circulargauge ref="circulargauge" :background='background' style='display:block' :load='load' align='center' id='tooltip-container' :title='title' :titleStyle='titleStyle' :enablePointerDrag='enablePointerDrag' :tooltipRender='tooltipRender' :dragEnd='dragEnd' :tooltip='tooltip'>
            <e-axes>
                <e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0 maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                    <e-pointers>
                       <e-pointer :value='value' :cap='cap' :radius='pointerRadius' :color='color' :animation='animation'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
<div id="action-description">
    <p>
        This sample helps in visualizing the tooltip of the pointer and the range in a circular gauge.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to display the tooltip for the pointer and the range in a circular gauge. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettings/">tooltip</a> settings is used to enable and customize the tooltip. To see the tooltip in action, hover your mouse over the pointer or the range, or tap them on touch-enabled devices.
    </p>
    <p>
        More information on the tooltip can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-user-interaction/">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>

import {CircularGaugeComponent, GaugeTooltip, PointersDirective, PointerDirective, AxisDirective, AxesDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
    data: function () {
        return {
            gaugeradius: '90%',
            startAngle: 240,
            endAngle: 120,
            background:'transparent',
            lineStyle: {
                width: 0
            },
            majorTicks: {
                color: 'white',
                offset: -5,
                height: 12
            },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                useRangeColor: true,
                font: {
                    color: '#424242',
                    size: '13px',
                    fontFamily: 'Segoe UI'
                }
            },
            value: 70,
            pointerRadius: '60%',
            color: '#33BCBD',
            cap: {
                radius: 10,
                border: {
                    color: '#33BCBD',
                    width: 5
                }
            },
            animation: {
                enable: true,
                duration: 1500
            },
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 10,
                endWidth: 10,
                radius: '102%',
                color: '#3A5DC8',
            }, {
                start: 50,
                end: 120,
                radius: '102%',
                startWidth: 10,
                endWidth: 10,
                color: '#33BCBD',
            }],
            tooltip: {
                enable: true,
                type: ['Range', 'Pointer'],
                        showAtMousePosition: true,
                format: 'Current Value:  {value}',
                enableAnimation: false,
                textStyle: {
                    size: '13px',
                    fontFamily: 'inherit'
                },
                rangeSettings: {
                    showAtMousePosition: true, format: "Start Value: {start} <br/> End Value: {end}", 
                    textStyle: {
                        size: '13px',
                        fontFamily: 'inherit'
                    }
                }
            },
            enablePointerDrag: true
        }
    },
    components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axis': AxisDirective,
    'e-axes': AxesDirective,
    'e-pointer': PointerDirective,
    'e-pointers': PointersDirective,
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },
    methods: {
        load: function (args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            }, 
            /* custom code end */                
        },
        dragEnd: function (args) {
        if (args.currentValue >= 0 && args.currentValue <= 50) {
            args.pointer.color = '#3A5DC8';
            args.pointer.cap.border.color = '#3A5DC8';  
        }
        else {
            args.pointer.color = '#33BCBD';
            args.pointer.cap.border.color = '#33BCBD';
        }
		args.pointer.value = args.currentValue;
        args.pointer.animation.enable = false;
        this.$refs.circulargauge.ej2Instances.refresh();
    }    
}
</script>