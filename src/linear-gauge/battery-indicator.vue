<template>
   <div class="control-section">
         <div align='center'>
             <ejs-lineargauge :load='load' :background='background' style='display:block' align='center' :container='container' :width='widthData' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex'>
                    </e-annotation>
                     <e-annotation :axisIndex='axisIndex1' :axisValue='axisValue1' :x='positionX1' zIndex='1' :y='positionY1' :zIndex='zIndex1'>
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :minimum=0 :maximum=60 :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :width='pointerWidth' ></e-pointer>
                        </e-pointers>
                    <e-ranges>
                        <e-range :start='start' :end='end' :startWidth='startWidth' :endWidth='endWidth' :color='color' :offset='offset'></e-range>
                        <e-range :start='start1' :end='end1' :startWidth='startWidth1' :endWidth='endWidth1' :color='color1' :offset='offset1'></e-range>
                        <e-range :start='start2' :end='end2' :startWidth='startWidth2' :endWidth='endWidth2' :color='color2' :offset='offset2'></e-range>
                    </e-ranges>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
         </div>
<div id="action-description">
    <p>
        This sample shows the battery indicator charged up to 75% by utilizing the linear gauge's functionalities.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a linear gauge to look like a battery indicator. This
        can be accomplished by combining axis, pointer, multiple ranges, and multiple annotation.
    </p>
    <p>
        More information on the linear gauge can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/">documentation
            section</a>.
    </p>
</div>
</div>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective, Gradient, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-lineargauge";

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
        'e-range': RangeDirective
    },
    data:function(){
    return{
        orientation:"Horizontal",
        background:'transparent',
        widthData:'200px',
        line : { width: 0 },
        majorTicks: { 
            interval: 15,
            height:0
        },
        minorTicks:{
            interval: 5,
            height:0
        },
        labelStyle:{
            font: { size:'0px' }
        },
        container: {
        width: 58, type: 'RoundedRectangle', border: { width: 5 }
        },
        pointerWidth: 0,
        axisIndex: 0, axisValue: 60, positionX: 0, positionY: 0, zIndex:'1',
        axisIndex1: 0, axisValue1: 0, positionX1: 0, positionY1: 0, zIndex1:'1',
        start: 3, end: 14, startWidth: 45, endWidth: 45, color: '#66BB6A', offset: 52,
        start1: 16,  end1: 29, startWidth1: 45, endWidth1: 45, color1: '#66BB6A', offset1: 52,
        start2: 31, end2: 44, startWidth2: 45, endWidth2: 45, color2: '#66BB6A', offset2: 52
    }
},
 provide: {
    lineargauge: [Annotations, Gradient]
},
methods: {    
    load: function(args) {
      /* custom code start */
      let borderColor = '#E5E7EB';
      let textColor = '#000000';
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        /* custom code end */
        textColor = args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';
        if (args.gauge.theme == 'Bootstrap5Dark' || args.gauge.theme == 'TailwindDark') {
            borderColor = "#4b5563";
        }
        if (args.gauge.theme == 'FabricDark' || args.gauge.theme == 'BootstrapDark' || args.gauge.theme == 'MaterialDark' || args.gauge.theme == 'HighContrast' || args.gauge.theme == 'Material' || args.gauge.theme == 'Fabric' || args.gauge.theme == 'Bootstrap') {
            borderColor = "#bfbfbf";
        }
        if (args.gauge.theme == 'Fluent') {
            borderColor = "#EDEBE9";
        }
        if (args.gauge.theme == 'FluentDark') {
            borderColor = "#292827";
        }
        if (args.gauge.theme == 'Bootstrap5' || args.gauge.theme == 'Tailwind') {
            borderColor = "#E5E7EB";
        }
       args.gauge.annotations[0].content = `<div style="width: 16px;height: 37px;border: 5px solid ${borderColor};margin-left:26px;margin-top:57px;border-radius: 6px;" />`;
       args.gauge.annotations[1].content = `<div style="width: 134px;font-size: 20px;margin-top:-47px;margin-left:140px;color:${textColor};">Charged: 75%</div>`;        
 
    }
}
};
</script>

