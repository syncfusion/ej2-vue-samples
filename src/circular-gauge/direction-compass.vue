<template>
<main><div>
    <div class="control-section">
        <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :background='background' :load='load' style='display:block' align='center' id='direction-container' :axisLabelRender='axisLabelRender'>
                <e-axes>
                    <e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0 maximum=8 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                        <e-pointers>
                           <e-pointer :value='value1' :radius='pointerRadius1' :linearGradient='linearGradient' :pointerWidth='pointerWidth1' :cap='cap1' :animation='animation1'></e-pointer>
                           <e-pointer :value='value2' :radius='pointerRadius2' :color='color2' :pointerWidth='pointerWidth2' :cap='cap2' :animation='animation2'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</div>
    <section id="action-description" aria-label="Description of Circular Gauge sample">
            <p>
                This sample demonstrates how to create a direction compass by modifying the circular gauge's functionalities to
                meet the needs of the user.
            </p>
        </section>
        <section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
            <p>
                In this example, a direction compass has been depicted by adding a couple of needle pointers in the circular
                gauge and customizing labels to show the direction.
            </p>
            <p>
                More information on the circular gauge can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/">documentation
                    section</a>.
            </p>
        </section>
        </main>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, Gradient, AxisDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
    data: function () {
        return {
            gaugeRadius: '80%',
            background:'transparent',
            lineStyle: {
                width: 20, color:'#E0E0E0'
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                autoAngle: true,
                hiddenLabel: 'Last',
                offset:10
            },
            majorTicks: {
                height: 15,
                interval: 1
            },
            minorTicks: {
                height: 10,
                interval: 0.5
            },
            startAngle: 0,
            endAngle: 360,
            value1: 7,
            pointerRadius1: '50%',            
            pointerWidth1: 30,
            cap1: {
                radius: 15,
                color:'#ffffff',
                border:{
                   width:0
                }
            },
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#ff6b78', offset: '0%', opacity: 0.9 },
                    { color: '#e20a22', offset: '70%', opacity: 0.9 }]
            },
            animation1: {
                enable: false
            },
            value2: 3,
            pointerRadius2: '50%',
            color2: '#f7f7f7',
            pointerWidth2: 30,
            cap2: {
                radius: 15, color: '#ffffff',
                border: {
                    width: 0
                }
            },
            animation2: {
                enable: false
            }
        }
    },
    components: {
       'ejs-circulargauge': CircularGaugeComponent,
       'e-pointer': PointerDirective,
       'e-pointers': PointersDirective,
       'e-axes': AxesDirective,
       'e-axis': AxisDirective,
   },
   provide: {
    circulargauge: [Gradient]
   },
     methods: {
        load: function (args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            /* custom code end */
        },
        axisLabelRender: function (args) {
            let value = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', ''];
            args.text = value[args.value];
        }
    }
}
</script>

<style scoped>
#control-container {
    padding: 0px !important;
}
</style>
