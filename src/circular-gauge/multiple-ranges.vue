<template>
    <main><div>
        <div class="control-section">
            <ejs-circulargauge :load='load' :animationDuration=2000 :background='background' style='display:block' align='center' id='gauge'>
                <e-axes>
                    <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :minimum=-30 :maximum=120 :hideIntersectingLabel='true' :annotations='annotations' :ranges='ranges' :labelStyle='labelStyle'>
                        <e-pointers>
                          <e-pointer :value='value' :radius='pointerRadius' :color='pointerColor'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample shows temperature variations in a circular gauge using multiple ranges. In addition, the needle
        pointer and annotation help in displaying the temperature that has been measured.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure multiple ranges in the circular gauge. The <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/">ranges</a> collection
        can be used to define multiple ranges, each of which points to a different start and end value.
    </p>
    <p>
        More information on the ranges can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-ranges/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, Gradient, PointerDirective, PointersDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            annotations : [{
                content: '<div style="font-size:18px;margin-left: 5px;color:#9DD55A"> 22.5\u00b0C </div>',
                radius: '20%', angle: 180, zIndex:'1'
            }],
            gaugeRadius: '90%',
            background:'transparent',
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
                width: 0,
                interval:10
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                font: {
                    fontFamily: 'Segoe UI',
                },
                offset: 50,
                position:'Inside',
                autoAngle:true
            },
            value: 22.5,
            pointerRadius: '45%',
            pointerWidth: 7,
            pointerColor:'#F7B194',
            cap: {
                    radius: 10,
                    color:'White',
                    border: { width: 4, color:'#F7B194' }
            },
            needleTail: {
                    length: '25%',
                    color:'#F7B194'
            },
            labelStyle:
            {
              font: {
                fontFamily: 'inherit',
                },
                offset: 50,
                position:'Inside',
                autoAngle:true
            },
            ranges: [
            {
            start: -30,
            end: -20,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#58ABD5"
            },
            {
            start: -20,
            end: -10,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#58ABD5"
            },
            {
            start: -10,
            end: 0,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#58ABD5"
            },
            {
            start: 0,
            end: 10,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#58D2D5"
            },
            {
            start: 10,
            end: 20,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#9DD55A"
            },
            {
            start: 20,
            end: 30,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#9DD55A"
            },
            {
            start: 30,
            end: 40,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F1D158"
            },
            {
            start: 40,
            end: 50,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 50,
            end: 60,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 60,
            end: 70,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 70,
            end: 80,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 80,
            end: 90,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 90,
            end: 100,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 100,
            end: 110,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            },
            {
            start: 110,
            end: 120,
            radius: "90%",
            startWidth: 35,
            endWidth: 35,
            color: "#F48C6F"
            }  
        ],
    }
   },
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective,
    },
  provide:{
    circulargauge:[Gradient, Annotations]
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