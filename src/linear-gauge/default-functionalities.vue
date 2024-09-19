<template>
   <main><div class="control-section">
         <div align='center'>
             <ejs-lineargauge :load='load' :background='background' style='display:block' align='center' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex' :content="'indicatorTemplate'">
                        <template v-slot:indicatorTemplate="{}">
                            <div id="pointer" style="width: 70px;margin-left:-25%;margin-top: 42%;font-size: 16px;">10 MPH</div>
                        </template>
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :offset='offset' :markerType='markerType' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
        </div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows the linear gauge's basic rendering, which includes an axis, a pointer, major ticks, minor
        ticks and annotation.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        The linear gauge control shows scale values in either horizontal or vertical orientation. Axis, range, ticks,
        pointer, and container properties can be used to customize the basic appearance of the linear gauge.
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
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-lineargauge";

export default {
    data:function(){
    return{
        background:'transparent',
        orientation:"Horizontal",
        value:10,
        height:15,
        width:15,
        offset:-40,
        markerType:'Triangle',
        placement:'Near',
        majorTicks: { 
            interval: 10,
            height:20,
            color:'#9E9E9E'
        },
        minorTicks:{
            interval: 2,
            height:10,
            color:'#9E9E9E'
        },
        labelStyle:{
            offset: 48,
            font: {
                fontFamily: 'inherit'
            }
        },
        axisIndex: 0,
        axisValue: 10,
        positionX: 10,
        positionY: -70,
        zIndex:'1'
    }
},
components: {
    'ejs-lineargauge': LinearGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective
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