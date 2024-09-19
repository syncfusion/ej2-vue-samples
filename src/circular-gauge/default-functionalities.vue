<template>
    <main><div>
      <div class="control-section">
        <ejs-circulargauge :load='load' :animationDuration=2000 :background='background' style='display:block' align='center' id='gauge'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                    <e-pointers>
                    <e-pointer :value='value' :radius='pointerRadius' :color='color'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
      </div>
    </div>
    <section id="action-description" aria-label="Description of Circular Gauge sample">
            <p>
                This sample shows the circular gauge's basic rendering, which includes an axis and a pointer.
            </p>
    </section>
        <section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
            <p>
                In this example, an axis with a pointer is used, and you can use <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axisModel/">axes</a> and <a
                    target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/">pointers</a> to get
                the circular gauge's basic appearance. The circular gauge component helps in the visualization of numerical
                scale values on a circular scale.
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

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            gaugeRadius: '80%',
            startAngle: 230,
            endAngle: 130,
            background:'transparent',
            majorTicks: {
                offset: 5
            },
            lineStyle: {width: 8, color: '#E0E0E0' },
            minorTicks: {
                offset: 5
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit'
                },
                offset: -1
            },
            value: 60,
            pointerRadius: '60%',
            pointerWidth: 7,
            color:'#c06c84',
            cap: {
                   radius: 8,
                   color: '#c06c84',
                   border: { width: 0 }
            },
            needleTail: {
                    length: '0%',
            }
    }
   },
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective,
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