<template>
<div>
    <div class="control-section">
        <ejs-circulargauge :load='load' :background='background' style='display:block' align='center' id='gauge'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :direction='direction' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                    <e-pointers>
                       <e-pointer :cap='cap' :radius='pointerRadius' :needleTail='needleTail'></e-pointer>
                    </e-pointers>
                    <e-ranges>
                       <e-range :start=0 :end=35 :startWidth=55 :endWidth=55 :color='color1' :radius='rangeRadius'></e-range>
                       <e-range :start=35 :end=70 :startWidth=55  :endWidth=55 :color='color2' :radius='rangeRadius'></e-range>
                       <e-range :start=70 :end=100 :startWidth=55 :endWidth=55 :color='color3' :radius='rangeRadius'></e-range>
                    </e-ranges>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
<div id="action-description">
    <p>
        This sample shows the basic rendering of the circular gauge, which includes an axis and a range. Here, the
        appropriate range color is applied to its respective axis labels, minor ticks, and major ticks.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range and axis in the circular gauge with the same
        color. To accomplish this, set the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#userangecolor">useRangeColor</a>
        property in <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/">labelStyle</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/">majorTicks</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/">minorTicks</a> to
        <b>true</b>.
    </p>
</div>
</div>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, RangesDirective, RangeDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            gaugeRadius: '100%',
            startAngle: 0,
            endAngle: 0,
            background:'transparent',
            majorTicks: {
                position: 'Outside',
                width: 1,
                height: 25,
                interval: 10,
                useRangeColor: true
            },
            lineStyle: {width: 0 },
            minorTicks: {
                position: 'Outside',
                width: 1,
                height: 8,
                interval: 2,
                useRangeColor: true
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit',
                },
                offset: 2,
                position: 'Outside',
                useRangeColor: true,
                hiddenLabel: 'First'
            },
            pointerRadius: '0%',
            cap: {
                   radius: 0,
            },
            needleTail: {
                    length: '0%',
            },
            direction:'AntiClockWise',
            rangeRadius:'90%',
            color1:'#F8A197',
            color2:'#C45072',
            color3:'#1B679F'            
    }
   },
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective
    },
methods: {
    load: function(args) {
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */
    }
}
}
</script>

