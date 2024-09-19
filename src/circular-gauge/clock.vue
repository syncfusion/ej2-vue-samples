<template>
 <main><div>
    <div class="control-section">
        <ejs-circulargauge :load='load' :background='background' :resized='resized' ref="gauge" :loaded='loaded' style='display:block' align='center' id='clock'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :minimum=0 :maximum=12 :annotations='annotations' :labelStyle='labelStyle'>
                    <e-pointers>
                    <e-pointer :value='value1' :radius='pointerRadius1'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail' :needleStartWidth='needleStartWidth1' :animation='animation'></e-pointer>
                    <e-pointer :value='value2' :radius='pointerRadius2'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail' :needleStartWidth='needleStartWidth' :animation='animation'></e-pointer>
                    <e-pointer :value='value3' :radius='pointerRadius3'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail1' :color='pointerColor' :animation='animation' :needleStartWidth='needleStartWidth'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
 <section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample demonstrates how to create an analog clock that displays the time.
    </p>
  </section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, a clock has been created by adding axis, minor ticks, major ticks, and needles in a circular
        gauge and customizing it accordingly. In addition, the clock ticks, displaying the time in a lively manner.
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

import { CircularGaugeComponent, AxesDirective, CircularGauge, AxisDirective, Annotations, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";
export default {
   data:function(){
    return{
            annotationGaugeOne: CircularGaugeComponent,
            annotationGaugeTwo: CircularGaugeComponent,
            gaugeRadius: '90%',
            background:'transparent',
            startAngle: 0,
            endAngle: 0,
            majorTicks: {
                width: 2,
                height:15,
                interval:1,
                offset:5
            },
            lineStyle: { width: 2 },
            minorTicks: {
                width: 1,
                height:10,
                interval:0.2,
                offset:5
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit',
                },
                offset: 10,
                hiddenLabel:'First'
            },
            value1: 10.2,
            value2:2,
            value3:12,
            pointerRadius1: '70%',
            pointerRadius2: '100%',
            pointerRadius3: '90%',
            pointerWidth: 3,
            pointerColor:'#00A8B5',
            needleStartWidth:1,
            needleStartWidth1:2,
            cap: {
                    radius: 5,
                    color:'white',
                    border: { width: 1, color:'#00A8B5' }
            },
            needleTail: {
                    length: '0%'
            },
            needleTail1: {
                length: '25%',
                color:'#00A8B5'
            },
            animation: { enable: false },
            annotations: [{
                content: '<div id="subGaugeOne" style="margin-left: -100%"></div>',
                description:'Sub gauge one', radius: '0%', angle: 290, zIndex: '1'
            }, {
                content: '<div id="subGaugeTwo" style="margin-left: -218%;margin-top: -50%;"></div>',
                description:'Sub gauge two', radius: '0%', angle: 90, zIndex: '1'
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
    provide: {
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
    resized : function(args)
    { 
       window.location.reload();
    },
    loaded: function(args) {
    let annotationGaugeOne = new CircularGauge({
        width: '150px',
        height: '150px',
        background: 'transparent',
        axes: [{
            labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', size: '7px' }, offset: -5 },
            majorTicks: { interval: 2, offset: 2 },
            minorTicks: { interval: 0.4, offset: 2 }, minimum: 0, maximum: 12,
            pointers: [{
                value: 5,
                radius: '50%', pointerWidth: 2, color: '#00A8B5',
                animation: { enable: false }, cap: { radius: 0 }, needleTail: { length: '0%' }
            }],
            startAngle: 0, endAngle: 0, radius: '70%', lineStyle: { width: 2 }
        }],
        load: function(args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";      
            args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
            /* custom code end */
        },
    });
    annotationGaugeOne.appendTo('#subGaugeOne');

    let annotationGaugeTwo = new CircularGauge({
    width: '150px',
    height: '150px',
    background: 'transparent',
    axes: [{
        labelStyle: { hiddenLabel: 'First', font: { fontFamily: 'inherit', size: '7px' }, offset: -5 },
        majorTicks: { offset: 2, interval: 2 },
        minorTicks: { offset: 2, interval: 0.4 }, minimum: 0, maximum: 12,
        pointers: [{
            value: 8,
            radius: '50%', pointerWidth: 2, color: '#00A8B5',
            animation: { enable: false }, cap: { radius: 0 }, needleTail: { length: '0%' }
        }], startAngle: 0, endAngle: 0, radius: '70%', lineStyle: { width: 2 }
    }],
    load: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";      
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
      /* custom code end */
    } 
});
annotationGaugeTwo.appendTo('#subGaugeTwo');

let needlePointer = 0.2;
let gaugeData = this.$refs.gauge.ej2Instances;
let pointerInterval = setInterval(() => {
        if (document.getElementById('clock')) {
            if (needlePointer <= 12) {
                gaugeData.setPointerValue(0, 2, needlePointer);
                needlePointer += 0.2;
            } else {
                needlePointer = 0.2;
            }
        } else {
            clearInterval(+pointerInterval);
        }
    }, 1000)
  },
 }
}
</script>