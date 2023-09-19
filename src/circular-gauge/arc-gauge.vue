<template>
 <div id="arc-gauge">
    <div class="control-section">
        <ejs-circulargauge ref="circulargauge" :background='background' :load='load' style='display:block' align='center' id='range-container' :loaded='loaded' :title='title' :titleStyle='titleStyle'>
            <template v-slot:indicatorTemplate="{}">
                <div id="pointervalue" style="font-size:35px;width:120px;text-align:center">{{sliderValue}}/100</div>
            </template>
            <template v-slot:sliderTemplate="{}">
                <div id="slider" style="height:70px;width:250px;"></div>
            </template>
            <e-axes>
                <e-axis :radius='gaugeRadius' :minimum=0 :maximum=100 :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                    <e-annotations>
                    <e-annotation :content="'indicatorTemplate'" angle='0' zIndex='1' radius='0%'></e-annotation>
                    <e-annotation :content="'sliderTemplate'" angle='0' zIndex='1' radius='-100%'></e-annotation>
                    </e-annotations>
                    <e-pointers>
                    <e-pointer :roundedCornerRadius=20 :value='value' :radius='pointerRadius' :color='color' :type='type' :animation='animation' :border='border' :pointerWidth=30  :cap='cap' :needleTail='needleTail'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
 <div id='template'>
<div class='sliderwrap'>
<div id='default' ></div>
</div>
</div>
<div id="action-description">
    <p>
        This sample shows the work progress using a circular gauge and a range bar pointer with rounded corners.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render the range and range bar pointer with rounded corners. A slider is
        placed at the bottom of the circular gauge using annotation to change the range bar pointer value. Based on the
        value, the color of the pointer can also be changed.
    </p>
    <p>
        More information on the ranges can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-ranges/">documentation
            section</a>.
    </p>
</div>
</div>
</template>
 <style>    
        #arc-gauge .sliderwrap {
            margin-top: 0px;
            width: 300px;            
            align-self: center;
        }  
        #slider.e-control.e-slider .e-handle {
            background-color: #fff;
            border: 2px solid #666;
            width:13px;
            height:13px;
            margin-top: 1px;
        }
        #range-container_Axis_0_Annotation_1 .e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
            background: linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);
            background: -moz-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%); 
            background: -webkit-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);
        }
        #arc-gauge .e-limit-bar.e-limits {
            background-color: transparent !important;
        }
        #arc-gauge .e-control-wrapper.e-slider-container.e-horizontal .e-range {
            height: 0px !important;
        }
        #slider.e-control.e-slider .e-slider-track {
            height: 8px;
            top: calc(50% - 4px);
            border-radius: 5px;
        }
        .material3 #slider.e-control.e-slider .e-handle, .material3-dark #slider.e-control.e-slider .e-handle {
            margin-top: 6px;
        }
        .bootstrap5 #slider.e-control.e-slider .e-handle, .bootstrap5-dark #slider.e-control.e-slider .e-handle {
            margin-top: 0px;
        }
        .material #slider.e-control.e-slider .e-handle, .material-dark #slider.e-control.e-slider .e-handle {
            margin-top: 0px;
        }
        .fabric #slider.e-control.e-slider .e-handle {
            margin-top: 2px;
        }
</style>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { SliderComponent, SliderChangeEventArgs, Slider } from "@syncfusion/ej2-vue-inputs";

let sliderValue = 60;
let annotationTemplate = '';
export default {
   components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective,
    'ejs-slider': SliderComponent
   },
   data:function(){
    return{
            gaugeRadius: '80%',
            background:'transparent',
            startAngle: 200,
            endAngle: 160,
            majorTicks: {
                width: 0
            },
            title: 'Progress Tracker',
            titleStyle: {
                fontFamily: 'inherit'
            },
            lineStyle:  { width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                 position: 'Inside', useRangeColor: true,
                 font: { size: '0px', fontFamily: 'inherit'}
            },
            value: 60,
            pointerRadius: '90%',
            color:  '#e5ce20',
            sliderValue: 60,
            titleStyle: { size: '16px', fontFamily: 'inherit' },
            ranges: [
                    {
                        start: 0, end: 100,
                        radius: '90%',
                        startWidth: 30, endWidth: 30,
                        color: '#E0E0E0',
                        roundedCornerRadius: 20
                    },
            ],
            cap: {
                   radius: 10,
                   color:'#757575'
            },
            needleTail: {
                    length: '18%',
                    color:'#757575'
            },
            type: 'RangeBar',
            border: {                       
                    width: 0
            },
            animation: {
                    enable: false
            }
    }
   },
   provide:{
    circulargauge: [Annotations]
},
methods: {
    loaded: function(args) {
        let annotation = document.getElementById(args.gauge.element.id + '_Annotations_0');
        if (annotation) {
            this.annotationRender('slider', args.gauge.axes[0].pointers[0].value);
            if (document.getElementById('pointervalue')) {
                document.getElementById('pointervalue').innerHTML = args.gauge.axes[0].pointers[0].value.toString() + '/100';
            }
        }
    },
    annotationRender: function(id, sliderValue) {
        let circulargauge = this.$refs.circulargauge.ej2Instances;
        let first = new Slider({
            // Set the value for slider
            min: 0, max: 100,
            type: 'MinRange',
            limits: { enabled: true, minStart: 0, minEnd: 100 },
            value: sliderValue,
            change: function(args) {
                sliderValue = args.value;
                if (!isNaN(sliderValue)) {
                    circulargauge['isProtectedOnChange'] = true;
                    if (sliderValue >= 0 && sliderValue < 20) {
                        circulargauge.axes[0].pointers[0].color = '#ea501a';
                    } else if (sliderValue >= 20 && sliderValue < 40) {
                        circulargauge.axes[0].pointers[0].color = '#f79c02';
                    } else if (sliderValue >= 40 && sliderValue < 60) {
                        circulargauge.axes[0].pointers[0].color = '#e5ce20';
                    } else if (sliderValue >= 60 && sliderValue < 80) {
                        circulargauge.axes[0].pointers[0].color = '#a1cb43';
                    } else if (sliderValue >= 80 && sliderValue < 100) {
                        circulargauge.axes[0].pointers[0].color = '#82b944';
                    }
                    circulargauge.setPointerValue(0, 0, sliderValue);
                    if (document.getElementById('pointervalue')) {
                        document.getElementById('pointervalue').innerHTML = circulargauge.axes[0].pointers[0].value.toString() + '/100';
                    }
                }
            }
        });
        first.appendTo('#' + id);
    },
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

