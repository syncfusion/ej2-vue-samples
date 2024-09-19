<template>
   <main><div class="control-section">
        <div align='center'>
            <ejs-lineargauge :load='load' :animationDuration=2000 :background='background' style='display:block' :container= 'container' align='center' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex' :content="'indicatorTemplate'">
                        <template v-slot:indicatorTemplate="{}">
                            <div id="pointer" style="font-size: 15px;color: white;margin-top: 30px;margin-left:50%">41%</div>
                        </template>
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :minimum=0 :maximum=100 :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :width='width' :color='pointerColor' :type='type' :roundedCornerRadius='roundedCornerRadius' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows a linear gauge that resembles a progress bar and indicates a task completion rate of 41%.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a new progress bar using the linear gauge. This can be accomplished by combining axis, pointer, and annotation.
    </p>
    <p>
        More information on the linear gauge can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/">documentation section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
        'e-annotations': AnnotationsDirective,
        'e-annotation': AnnotationDirective
    },
    data:function(){
    return{
        line: {
         width:0
        },
        orientation:"Horizontal",
        background:'transparent',
        value:41,
        height:30,
        width:30,
        type:'Bar',
        pointerColor:'#2196F3',
        roundedCornerRadius:20,
        majorTicks: { 
            interval: 10, height:0
        },
        minorTicks:{
            interval: 1, height: 0
        },
        labelStyle:{
            font: { size:'0px' }
        },
        axisIndex: 0,
        axisValue: 10,
        positionX: 0,
        positionY: 0,
        zIndex:'1',
        container: {
            width: 30,
            roundedCornerRadius: 20,
            backgroundColor: '#D6D6D6',
            type: 'RoundedRectangle',
            border: { width: 1 }
        },
    }
    },
    provide: {
        lineargauge: [Annotations]
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
};
</script>