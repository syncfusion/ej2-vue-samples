<template>
 <main><div>
    <div class="control-section">
        <ejs-circulargauge  ref="circulargauge" :background='background' :load='load' :resized='resized' :loaded='loaded' style='display:block' align='center' :centerY='centerY' id='gauge'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :annotations='annotations' :labelStyle='labelStyle'>
                    <e-pointers>
                    <e-pointer :radius='pointerRadius' :cap='cap' :needleTail='needleTail'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
   <section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample demonstrates a circular gauge with an axis and a background image set for the axis.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure the axis in the circular gauge with a background image.
        To accomplish this, the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotationModel/">annotations</a>
        is used and an image is set as the background content.
    </p>
    <p>
        More information on the annotations can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-annotations/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>

import { CircularGaugeComponent, CircularGauge, AxesDirective, AxisDirective, PointerDirective, PointersDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";

export default {
   data:function(){
    return{
            annotationGauge: CircularGaugeComponent,
            gaugeRadius: '80%',
            background:'transparent',
            startAngle: 0,
            endAngle: 0,
            majorTicks: {
                width:0
            },
            lineStyle: { width: 0 },
            minorTicks: {
                width:0
            },
            labelStyle: {
			    format:'{value} %',
                font: {
                    size: '0px'
                }
            },            
            pointerRadius: '0%',
            centerY:'65%',
            cap: {
                radius: 8,
                border: { width: 0 }
            },            
            needleTail: {
                    length: '25%',
            },
            annotations: [{
                content: '<div style="margin-top: -45%;"><img alt="Axis background image" src="src/circular-gauge/images/axis-background.png" height="400" width="400" /></div>',
                description:'Sub gauge', radius: '0%', angle: 0, zIndex: '1'
            }, {
                content: '<div id="subGauge" ref="subGaugeRef" style="margin-left: -100%; margin-top: -52%"></div>',
                description:'Annotation value : 90', radius: '0%', angle: 0, zIndex: '1'
            }, {
                content: '<div style="color:orange;margin-top: -84px;margin-left: -2px;font-size: 18px;">90</div>',
                description:'Marker pointer value : 90', radius: '10%', angle: 0, zIndex: '1'
            }
            ],
    }
   },
    provide: {
    circulargauge: [Annotations]
   },
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective,
    },
methods: {
    loaded : function(args)
    {
        let annotationGauge = new CircularGauge({
        width: '600px',
        height: '450px',
        background: 'transparent',
        axes: [{
            labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', color: 'White' } },
            majorTicks: { height: 15, interval: 30 },
            minorTicks: { height: 10, interval: 6 }, minimum: 0, maximum: 360,
            pointers: [{
                value: 90,
                radius: '45%', markerWidth: 12, markerHeight: 12,
                type: 'Marker', markerShape: 'Triangle', color: 'Orange',
                animation: { enable: true, duration:500 }
            }], startAngle: 0, endAngle: 0, radius: '60%', lineStyle: { width: 0 }
        }]
        });
        annotationGauge.appendTo('#subGauge');
    },
    load: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      /* custom code end */
    },
    resized : function(args)
    { 
        window.location.reload();
    }
  }
}
</script>