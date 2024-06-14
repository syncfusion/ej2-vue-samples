<template>
   <main><div class="control-section">
        <div align='center'>
            <ejs-lineargauge :load='load' :background='background' :axisLabelRender='labelRender' style='display:block' id='defaultContainer'  :orientation='orientation' >
                <e-axes>
                    <e-axis :opposedPosition='opposedPosition' :majorTicks='majorTicks' :line='line' :minorTicks='minorTicks' :labelStyle='labelStyle' :minimum=5 :maximum=20 >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :markerType='markerType' :imageUrl='imageUrl' ></e-pointer>
                            <e-pointer :value='value1' :height='height1' :placement='placement1' :width='width1' :markerType='markerType1' :imageUrl='imageUrl1' ></e-pointer>
                            <e-pointer :value='value2' :height='height2' :placement='placement2' :width='width2' :markerType='markerType2' :imageUrl='imageUrl2' ></e-pointer>
                            <e-pointer :value='value3' :height='height3' :placement='placement3' :width='width3' :markerType='markerType3' :color='pointerColor' :position='position' :offset='pointeroffset'></e-pointer>
                        </e-pointers>
                        <e-ranges>
                            <e-range :start='start1' :end='end1' :startWidth='startWidth' :endWidth='endWidth' :color='color1'></e-range>
                            <e-range :start='start2' :end='end2' :startWidth='startWidth' :endWidth='endWidth' :color='color2'></e-range>
                            <e-range :start='start3' :end='end3' :startWidth='startWidth' :endWidth='endWidth' :color='color3'></e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows a linear gauge that resembles a step progress bar and indicates shipment status.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a new step progress bar using the linear
        gauge. This can be accomplished by combining axis, multiple pointers, and multiple ranges.
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
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations,RangesDirective, RangeDirective, Gradient } from "@syncfusion/ej2-vue-lineargauge";

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
        background:'transparent',
        opposedPosition:true,
        value:5,
        height:25,
        width:25,
        markerType:'Image',
        placement:'Near',
        imageUrl:'src/linear-gauge/images/tick-icon.png',
        value1:10,
        height1:25,
        width1:25,
        markerType1:'Image',
        placement1:'Near',
        imageUrl1:'src/linear-gauge/images/tick-icon.png',
        value2:15,
        height2:25,
        width2:25,
        markerType2:'Image',
        placement2:'Near',
        imageUrl2:'src/linear-gauge/images/tick-icon.png',
        value3:20,
        height3:25,
        width3:15,
        markerType3:'Circle',
        placement3:'Center',
        pointerColor:'#D1D9DD',
        position:'Cross',
        pointeroffset:-2, 
        start1:5, end1:10, startWidth:5, endWidth:5, color1:'#1FAC8A',
        start2: 10, end2: 15, color2: '#1FAC8A',
        start3: 15, end3: 20, color3: '#D1D9DD',
        majorTicks: { 
            height:0,
            interval:5
        },
        line: {
            width: 5
        },
        minorTicks:{
            height:0
        },
        labelStyle:{
            offset: 20,
            font: { size: '16px', fontFamily: 'inherit' }
        }
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
    },
    labelRender: function(args){
    if (args.text == "5")
        args.text = "Ordered";
    else if (args.text == "10")
        args.text = "Packed";
    else if (args.text == "15")
        args.text = "Shipped";
    else if (args.text == "20")
        args.text = "Delivered";
    else
        args.text = " ";
    }
  }
};
</script>