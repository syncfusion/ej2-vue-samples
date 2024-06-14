<template>
   <main><div class="control-section">
        <div align='center'>
            <ejs-lineargauge :load='load' :animationDuration=3000 :background='background' style='display:block' align='center' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex' :content="'indicatorTemplate'">
                        <template v-slot:indicatorTemplate="{}">
                            <div id="pointer" style="width: 70px;"> <p align="center" style="font-size:10px;margin-left:56px;margin-top:18px;font-weight: 400;color:'#000000';">STEPS</p> <p align="center" style="font-size: 23px;margin-top:-15px;margin-left:46px;color: #0DC9AB;font-weight: 600;">8456</p></div>
                        </template>
                    </e-annotation>
                        <e-annotation :axisIndex='axisIndex2' :axisValue='axisValue2' :x='positionX2' zIndex='1' :y='positionY2' :zIndex='zIndex2' :content="'indicatorTemplate1'">
                        <template v-slot:indicatorTemplate1="{}">
                            <div id="pointer2" style="width: 145px;font-size: 19px;margin-left:110px;color:'#000000';"> Sun, 7 February </div>
                        </template>
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :minimum=0 :maximum=12000 :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' :opposedPosition='opposedPosition' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :offset='offset' :markerType='markerType' :imageUrl='imageUrl' ></e-pointer>
                        </e-pointers>
                    <e-ranges>
                        <e-range :start='start1' :end='end1' :startWidth='startWidth1' :endWidth='endWidth1' :color='color1' :offset='offset1'></e-range>
                    </e-ranges>
                    </e-axis>                    
                </e-axes>
            </ejs-lineargauge>
        </div>
</div>        
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows a linear gauge displaying the number of steps taken by a person in a day.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a linear gauge to look like a steps counter. This can
        be accomplished by combining axis, range, pointer and annotations.
    </p>
    <p>
        More information on the linear gauge can be found in this
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations, RangesDirective, RangeDirective, Gradient } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
        'e-annotations': AnnotationsDirective,
        'e-annotation': AnnotationDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective,
    },
    data:function(){
    return{
        orientation:"Horizontal",
        line: {
        width:30
        },
        opposedPosition:true,
        background:'transparent',
        value:8445,
        height:40,
        width:40,
        offset:-40,
        markerType:'Image',
        placement:'Near',
        imageUrl:'src/linear-gauge/images/step-count.png',
        majorTicks: { 
            interval: 12000,
            height:10,
            width:1
        },
        minorTicks:{
            height:0
        },
        labelStyle:{
            font: { fontFamily: 'inherit' }
        },
        axisIndex: 0, axisValue: 12000, positionX: 10, positionY: 0, zIndex:'1',
        axisIndex2: 0, axisValue2: 0, positionX2: 10, positionY2: -100, zIndex2:'1',
        start1: 0, end1: 8456, startWidth1: 30, endWidth1: 30, color1: '#0DC9AB',
        offset1: 0
      }
    },
    provide: {
        lineargauge: [Annotations, Gradient]
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
};
</script>