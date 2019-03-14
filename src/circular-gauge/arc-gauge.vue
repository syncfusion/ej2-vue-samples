<template>
<div>
<div class="control-section">
    <ejs-circulargauge ref="circulargauge" :load='load' style='display:block' align='center' id='range-container' :loaded='loaded' :title='title' :titleStyle='titleStyle'>
        <e-axes>
            <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
                <e-pointers>
                    <e-pointer :roundedCornerRadius=20 :value='value' :radius='pointerRadius' :color='color' :type='type' :animation='animation' :border='border' :pointerWidth=30></e-pointer>
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
       This sample visualizes the progress of a work in the circular gauge using the range bar pointer with rounded corners.
   </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render the ranges and range bar pointer with rounded corners. The EJ2 Slider control is placed at the bottom of the gauge using annotation to change the range bar pointer value. Based on the value, color of the pointer can also be changed.
    </p>
    <p>
        For more information on ranges, refer to this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
 <style>    
        .sliderwrap {
            margin-top: 0px;
            width: 300px;            
            align-self: center;
        }  
        #slider.e-control.e-slider .e-handle {
            background-color: #4B4B4B ;
        }
        #range-container_Axis_0_Annotation_1 .e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
            background: -webkit-linear-gradient(left, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);
            background: linear-gradient(left, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);
            background: -moz-linear-gradient(left, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%); 
        }
        .e-limit-bar.e-limits {
            background-color: transparent !important;
        }
        .e-control-wrapper.e-slider-container.e-horizontal .e-range {
            height: 0px !important;
        }
        #slider.e-control.e-slider .e-slider-track {
            height: 8px;
            top: calc(50% - 4px);
            border-radius: 5px;
        }
</style>
<script id='pointerValue' type="text/x-template">
    <div id='sliderwrap'>
        <div class='des'>
            <div id='default'></div>
        </div>
    </div>
</script>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { SliderPlugin,SliderChangeEventArgs, Slider } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
Vue.use(CircularGaugePlugin);

let sliderValue = 60;
let annotationTemplate = '<div id="pointervalue" style="font-size:35px;width:120px;text-align:center">' + sliderValue.toString() + '/100</div>';

export default Vue.extend({
   data:function(){
    return{
            gaugeRadius: '90%',
            startAngle: 200,
            endAngle: 160,
            majorTicks: {
                width: 0
            },
            title: 'Progress Tracker',
            lineStyle:  { width: 0 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                 position: 'Inside', useRangeColor: true,
                 font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
            value: 60,
            pointerRadius: '90%',
            color:  '#e5ce20',
            sliderValue: 10,
            annotations: [{
                            content: annotationTemplate,
                            angle: 0,
                            zIndex: '1',
                            radius: '0%'
                        },
                        {
                            content: '<div id="slider" style="height:70px;width:250px;"></div>',
                            angle: 0,
                            zIndex: '1',
                            radius: '-100%'
                        },
            ],
            titleStyle: { size: '18px', },
            ranges: [
                    {
                        start: 0, end: 100,
                        radius: '90%',
                        startWidth: 30, endWidth: 30,
                        color: '#E0E0E0',
                        roundedCornerRadius: 20
                    },
            ],
            type: 'RangeBar',
            border: {
                        color: 'grey',
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
    /* custom code start */
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    loaded: function(args) {
        let annotation = document.getElementById(args.gauge.element.id + '_Annotations_0');
        if (annotation) {
            this.annotationRender('slider', args.gauge.axes[0].pointers[0].value);
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
    }
}
})
</script>

