<template>
<main><div>
    <div class="control-section">
        <ejs-circulargauge :load='load' style='display:block' :background='background' :centerY='centerY' align='center' id='gauge'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :minimum=0 :maximum=120 :rangeGap=3 :labelStyle='labelStyle'>
                    <e-pointers>
                        <e-pointer :value='value1' :radius='pointerRadius1' :needleStartWidth= 'needleStartWidth' :needleEndWidth ='needleEndWidth'  :pointerWidth='pointerWidth' :cap='cap' :textStyle='textStyle' ></e-pointer>
                        <e-pointer :value='value2' :radius='pointerRadius2' :pointerWidth='pointerWidth' :textStyle='textStyle' :markerShape='markerShape' :text='text1' :type='type' :animation='animation' ></e-pointer>
                        <e-pointer :value='value3' :radius='pointerRadius3' :pointerWidth='pointerWidth' :textStyle='textStyle' :markerShape='markerShape' :text='text2' :type='type' :animation='animation'></e-pointer>
                        <e-pointer :value='value4' :radius='pointerRadius4' :pointerWidth='pointerWidth' :textStyle='textStyle' :markerShape='markerShape' :text='text3' :type='type' :animation='animation'></e-pointer>
                    </e-pointers>
                    <e-ranges>
                        <e-range :start='start1' :end='end1' :startWidth='startWidth' :endWidth='endWidth' :color='color1' :radius='rangeRadius'></e-range>
                        <e-range :start='start2' :end='end2' :startWidth='startWidth' :endWidth='endWidth' :color='color2' :radius='rangeRadius'></e-range>
                        <e-range :start='start3' :end='end3' :startWidth='startWidth' :endWidth='endWidth' :color='color3' :radius='rangeRadius'></e-range>
                        <e-range :start='start4' :end='end4' :startWidth='startWidth' :endWidth='endWidth' :color='color4' :radius='rangeRadius'></e-range>
                        <e-range :start='start5' :end='end5' :startWidth='startWidth' :endWidth='endWidth' :color='color5' :radius='rangeRadius'></e-range>
                        <e-range :start='start6' :end='end6' :startWidth='startWidth' :endWidth='endWidth' :color='color6' :radius='rangeRadius'></e-range>
                    </e-ranges>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample visualizes the performance outcome of a work using the text pointer in the circular gauge.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to use a text to customize the pointer in the circular gauge. The text can be
        added to the circular gauge's pointer primarily through the use of the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#type">type</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#markershape">markerShape</a>
        and <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#text">text</a>
        properties in the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/">e-pointer</a> tag.
    </p>
    <p>
        More information on the pointers can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-pointers/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, RangesDirective, RangeDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            gaugeRadius: '120%',
            startAngle: 270,
            endAngle: 90,
            centerY:'75%',            
            background:'transparent',
            majorTicks: {
                width:0
            },
            value1:82, value2:20, value3:60, value4:100,
            needleStartWidth:1, needleEndWidth:1,
            pointerRadius1:'60%', pointerRadius2:'85%', pointerRadius3:'85%', pointerRadius4:'85%',
            pointerWidth:10,
            text1:'Poor', text2:'Average', text3:'Good', markerShape:'Text',
            type:'Marker',
            animation:{
            enable:false
            },
            lineStyle: {width: 0},
            minorTicks: {
                width:0
            },
            labelStyle: {
                font: {
                    size:'0px'
                },
                offset: -5
            },
            cap:{
             radius: 0
            },
            start1:0, start2:20.5, start3:40.5, start4:60.5,  start5:80.5, start6:100.5,
            end1:20, end2:40, end3:60, end4:80, end5:100, end6:120,
            rangeRadius:'80%',
            startWidth:85,
            endWidth:85,
            color1:'#dd3800', color2:'#ff4100', color3:'#ffba00', color4:'#ffdf10', color5:'#8be724', color6:'#64be00',
            textStyle:
            {
               size: '18px', fontFamily: 'inherit'
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
   methods: {
     load: function(args) {
     /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
     /* custom code end */
     }
   }
}
</script>