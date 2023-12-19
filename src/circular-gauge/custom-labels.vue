<template>
 <div>
    <div class="control-section">
        <ejs-circulargauge :load='load' :animationDuration=2000 :background='background' style='display:block' align='center' :axisLabelRender='axisLabelRender' id='gauge' >
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :minimum =0 :maximum=8 :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                    <e-pointers>
                    <e-pointer :value='value' :radius='pointerRadius' :needleStartWidth= 'needleStartWidth' :needleEndWidth ='needleEndWidth' :color='color' :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'  :animation='animation' :linearGradient='pointerLinearGradient' ></e-pointer>
                    </e-pointers>
                    <e-ranges>
                    <e-range :start='start' :end='end' :startWidth='startWidth' :endWidth='endWidth' :color='color1' :linearGradient='rangeLinearGradient'></e-range>
                    <e-range :start='start2' :end='end2' :startWidth='startWidth' :endWidth='endWidth' :color='color2'></e-range>
                    </e-ranges>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
 <div id="action-description">
    <p>
        This example demonstrates how to introduce and position custom labels in a circular gauge. In addition,
        gradient colors are used on the circular gauge elements such as the pointer and range.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure custom labels in the circular gauge. The label text can
        be modified using the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#axislabelrender">axisLabelRender</a>
        event which will be triggered everytime when a label is rendered.
    </p>
    <p>
        More information on the labels can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-axes/#labels">documentation
            section</a>.
    </p>
 </div>
</div>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective , RangesDirective, RangeDirective, Gradient} from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            gaugeRadius: '80%',
            startAngle: 210,
            background:'transparent',
            endAngle: 150,
            majorTicks: {
                width: 0,
                interval: 1
            },
            lineStyle: {width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                 font: {
                    fontFamily: 'inherit',
                },
                offset: 10
            },
            value: 6.2,
            pointerRadius: '85%',
            pointerWidth: 10,
            animation: {enable : false},
            color:'#E63B86',
            cap: {
                   radius: 0,
                   border: { width: 0 }
            },
            needleTail: {
                    length: '0%',
            },
            needleStartWidth: 10,
            needleEndWidth:5,            
            start: 0,  end: 6.2, startWidth: 22, endWidth: 22, color1: '#E63B86',
            start2: 6.2,  end2: 8,color2:'#E0E0E0',
            rangeLinearGradient:
            {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#9e40dc', offset: '0%', opacity: 1 },
                    { color: '#d93c95', offset: '70%', opacity: 1 },
                ]
            },
            pointerLinearGradient :
            {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#9e40dc', offset: '0%', opacity: 0.2 },
                    { color: '#9e40dc', offset: '70%', opacity: 0.5 }]
            }  
    }
   },
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective,
    },
    provide: {
        circulargauge: [Gradient]
    },
   methods: {
    axisLabelRender: function (args) {
        let value = ['0', '2', '5', '10', '20', '50', '100', '150', '200'];
        args.text = value[args.value];
    },
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
