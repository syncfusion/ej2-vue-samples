<template>
<main><div>
    <div class="control-section">
        <ejs-circulargauge :load='load' ref="circulargauge" :background='background'  style='display:block' align='center' id='gauge' :enablePointerDrag= 'enablePointerDrag' :dragMove='dragMove'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges' :annotations='annotations'>
                    <e-pointers>
                       <e-pointer :value='value' :type='type' :markerShape='markerShape'  :radius='pointerRadius' :color='pointerColor' :markerWidth=25 :markerHeight=25 :animation='animation'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample demonstrates how to create a range slider component by utilizing the functions available in the circular
        gauge.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a new range slider in the circular gauge. It is
        possible to achieve this by combining ranges and a marker pointer. The marker pointer has been made interactive,
        so the value changes as you drag it.
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

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            gaugeRadius: '80%',
            startAngle: 0,
            endAngle: 0,
            majorTicks: {
                width: 0
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                font: {
                    size: '0px',
                },
                offset: -1
            },
            value: 30,
            pointerRadius: '97%',
            background:'transparent',
            pointerColor:'#2C75DC',
            markerShape:'Circle',
            type:'Marker',
            enablePointerDrag:true,
            ranges: [{
                    start: 0, end: 30, radius: '100%',
                    color: '#2C75DC', startWidth: 12, endWidth: 12
                }, {
                    start: 30, end: 100, radius: '100%',
                    color: '#BFD6F5', startWidth: 12, endWidth: 12
                }],
            annotations: [{
                content: '<div style="font-style: oblique; margin-left: 8px;font-size: 20px;"><span>30%</span></div>', radius: '0%', angle: 180, zIndex: '1', 
            }],
            animation:
            {
              enable:false
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
    provide:{
    circulargauge: [Annotations]
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
     },   
     dragMove: function(args) {        
        let circulargauge = this.$refs.circulargauge.ej2Instances;
        let pointerValue = args.currentValue;
        if (pointerValue != null) {
            circulargauge.setPointerValue(0, 0, pointerValue);
            circulargauge.setRangeValue(0, 0, 0, pointerValue);
            circulargauge.setRangeValue(0, 1, pointerValue, 100);
            circulargauge.setAnnotationValue(0, 0, '<div style="font-style: oblique; margin-left: 8px;font-size: 20px;"><span>' + Math.ceil(pointerValue) + '%</span></div>');
        }
    }
  }
}
</script>