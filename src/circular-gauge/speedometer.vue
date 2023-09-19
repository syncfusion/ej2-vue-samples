<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :background='background' style='display:block' align='center' id='gauge-container' :title='title' centerY='75%' :titleStyle='titleStyle' :load='load'>
                <template v-slot:indicatorTemplate="{}">
                <div id="templateWrap"><div class="des"><div id="pointerannotation" style="width:90px;text-align:center;font-size:20px;font-family:Segoe UI;">{{value}} km/h</div></div></div>
                </template>
                <e-axes>
                    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius' minimum=0 maximum=120 :ranges='ranges'>
                        <e-annotations>
                          <e-annotation angle='0' zIndex='1' radius='30%' :content="'indicatorTemplate'"></e-annotation>
                        </e-annotations>
                        <e-pointers>
                          <e-pointer :value='value' :radius='pointerRadius' :color='color' :pointerWidth='pointerWidth' :animation='animation' :cap='cap' :needleTail="needleTail"></e-pointer>
                        </e-pointers>  
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
<div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -20px;">
        <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
            <tbody>
                    <tr style="height: 40px">
                        <td>
                            <div class="property-text" style="font-size: 14px;"> Combine Ranges</div>
                        </td>
                        <td>
                            <div style="margin-top: -5px; margin-left: 40px">
                            <ejs-checkbox id="combineRange" ref="range" :change="onChangeCombineRange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 40px">
                        <td>
                            <div class="property-text" style="font-size: 14px;"> Gap Between Ranges</div>
                        </td>
                        <td>
                            <div style="margin-top: -5px; margin-left: 40px">
                            <ejs-checkbox id="range" ref="gap" :change="onChangeRange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
            </tbody>
            <br/>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample depicts the appearance of a speedometer rendered using the circular gauge. The pointer value is
        dynamically updated with random values in this case.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to make a circular gauge look like a speedometer. Using the options in the
        properties panel, a gap can be added between ranges or ranges can be combined to form a single range.
    </p>
    <p>
        More information on the circular gauge can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/"> documentation
            section</a>.
    </p>
</div>
<svg style="height:0px;width:0px">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#82b944;stop-opacity:1" />
        <stop offset="50%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%" style="stop-color:red;stop-opacity:1" />
      </linearGradient>
    </defs>   
  </svg>
</div>
</template>
<style scoped>
.property-panel-content td {
    padding-top: 0px;
}
</style>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { isNullOrUndefined } from "@syncfusion/ej2-base";

export default {
components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective,
    'ejs-checkbox': CheckBoxComponent
},
data:function(){
    return{
            minimum: 0,
            maximum: 120,
            background:'transparent',
            value: 40,
            radius: '120%',
            pointerRadius: '80%',
            lineStyle: { width: 0 },
            majorTicks: { width: 0, },
            minorTicks: { width: 0 },
            pointerWidth: 7,
            titleStyle: { size: '18px', fontFamily: 'inherit' },
            labelStyle: { useRangeColor: false, position: 'Outside', autoAngle: true,
            font: { size: '13px', fontFamily: 'inherit' } },
            startAngle: 270, 
            endAngle: 90,
            color: '#757575',
            title: 'Speedometer',
            animation: { enable: true, duration: 900 },
            cap: {
                    radius: 8,
                    color: '#757575',
                    border: { width: 0 }
                },
            needleTail: {
                    color: '#757575',
                    length: '15%'
            },
            ranges: [
                {
                    start: 0,
                    end: 20,
                    startWidth: 5, endWidth: 10,
                    radius: '102%',
                    color: '#82b944',
                },
                {
                    start: 20,
                    end: 40,
                    startWidth: 10, endWidth: 15,
                    radius: '102%',
                    color: '#a1cb43',
                }, {
                    start: 40,
                    end: 60,
                    startWidth: 15, endWidth: 20,
                    radius: '102%',
                    color: '#ddec12',
                },
                {
                    start: 60,
                    end: 80,
                    startWidth: 20, endWidth: 25,
                    radius: '102%',
                    color: '#ffbc00',
                },
                {
                    start: 80,
                    end: 100,
                    startWidth: 25, endWidth: 30,
                    radius: '102%',
                    color: '#ff6000',
                },
                {
                    start: 100,
                    end: 120,
                    startWidth: 30, endWidth: 35,
                    radius: '102%',
                    color: 'red',
                }
            ]
    }
},
provide: {
    circulargauge: [Annotations]
},
mounted : function(){
   this.setIntervalStart();       
},
beforeDestroy () {
       clearInterval(this.intervalid1)
},
methods: {
    load: function (args) {
        /* custom code start */
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        /* custom code end */
    },
    setIntervalStart : function(){       
        let gauge = this.$refs.circulargauge.ej2Instances;   
            this.intervalid1 = setInterval(function(){   
                let newVal = gauge.axes[0].pointers[0].value + (Math.floor(Math.random() * (10 - (-10))) - 10);
            if (newVal <= 0) {
                newVal = 5;
            }
            if (!isNullOrUndefined(document.getElementById('gauge-container'))) {
                gauge.axes[0].pointers[0].animation.enable = true;
                gauge.setPointerValue(0, 0, newVal);
                if (!isNullOrUndefined(document.getElementById('pointerannotation'))) {
                    document.getElementById('pointerannotation').innerHTML = newVal.toString() + ' km/h';
                }
            } else {
                clearInterval(this.pointerInterval1);
            }
            }, 1000);
    },
    onChangeRange: function(args) {
        let circulargauge=this.$refs.circulargauge.ej2Instances;
        if (args.checked) {
            circulargauge.axes[0].rangeGap = 5;
        } else {
            circulargauge.axes[0].rangeGap = null;
        }
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.refresh();
    },
    onChangeCombineRange: function(args) {
        let circulargauge = this.$refs.circulargauge.ej2Instances;
        let rangeCheckbox = this.$refs.gap.ej2Instances;
        if (args.checked) {
            rangeCheckbox.disabled = true;
            circulargauge.axes[0].ranges[0].start = 0;
            circulargauge.axes[0].ranges[0].end = 120;
            circulargauge.axes[0].ranges[0].startWidth = 5;
            circulargauge.axes[0].ranges[0].endWidth = 35;
            circulargauge.axes[0].ranges[0].color = 'url(#grad1)';
            circulargauge.axes[0].ranges[1].start = null;
            circulargauge.axes[0].ranges[1].end = null;
            circulargauge.axes[0].ranges[1].startWidth = '';
            circulargauge.axes[0].ranges[1].endWidth = '';
            circulargauge.axes[0].ranges[1].color = '';
            circulargauge.axes[0].ranges[2].start = null;
            circulargauge.axes[0].ranges[2].end = null;
            circulargauge.axes[0].ranges[2].startWidth = '';
            circulargauge.axes[0].ranges[2].endWidth = '';
            circulargauge.axes[0].ranges[2].color = '';
            circulargauge.axes[0].ranges[3].start = null;
            circulargauge.axes[0].ranges[3].end = null;
            circulargauge.axes[0].ranges[3].startWidth = '';
            circulargauge.axes[0].ranges[3].endWidth = '';
            circulargauge.axes[0].ranges[3].color = '';
            circulargauge.axes[0].ranges[4].start = null;
            circulargauge.axes[0].ranges[4].end = null;
            circulargauge.axes[0].ranges[4].startWidth = '';
            circulargauge.axes[0].ranges[4].endWidth = '';
            circulargauge.axes[0].ranges[4].color = '';
            circulargauge.axes[0].ranges[5].start = null;
            circulargauge.axes[0].ranges[5].end = null;
            circulargauge.axes[0].ranges[5].startWidth = '';
            circulargauge.axes[0].ranges[5].endWidth = '';
            circulargauge.axes[0].ranges[5].color = '';
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        } else {
            rangeCheckbox.disabled = false;
            circulargauge.axes[0].ranges[0].start = 0;
            circulargauge.axes[0].ranges[0].end = 20;
            circulargauge.axes[0].ranges[0].startWidth = 5;
            circulargauge.axes[0].ranges[0].endWidth = 10;
            circulargauge.axes[0].ranges[0].color = '#82b944';
            circulargauge.axes[0].ranges[1].start = 20;
            circulargauge.axes[0].ranges[1].end = 40;
            circulargauge.axes[0].ranges[1].startWidth = 10;
            circulargauge.axes[0].ranges[1].endWidth = 15;
            circulargauge.axes[0].ranges[1].color = '#a1cb43';
            circulargauge.axes[0].ranges[2].start = 40;
            circulargauge.axes[0].ranges[2].end = 60;
            circulargauge.axes[0].ranges[2].startWidth = 15;
            circulargauge.axes[0].ranges[2].endWidth = 20;
            circulargauge.axes[0].ranges[2].color = '#ddec12';
            circulargauge.axes[0].ranges[3].start = 60;
            circulargauge.axes[0].ranges[3].end = 80;
            circulargauge.axes[0].ranges[3].startWidth = 20;
            circulargauge.axes[0].ranges[3].endWidth = 25;
            circulargauge.axes[0].ranges[3].color = '#ffbc00';
            circulargauge.axes[0].ranges[4].start = 80;
            circulargauge.axes[0].ranges[4].end = 100;
            circulargauge.axes[0].ranges[4].startWidth = 25;
            circulargauge.axes[0].ranges[4].endWidth = 30;
            circulargauge.axes[0].ranges[4].color = '#ff6000';
            circulargauge.axes[0].ranges[5].start = 100;
            circulargauge.axes[0].ranges[5].end = 120;
            circulargauge.axes[0].ranges[5].startWidth = 30;
            circulargauge.axes[0].ranges[5].endWidth = 35;
            circulargauge.axes[0].ranges[5].color = 'red';
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
        rangeCheckbox.dataBind();
    }
}
}
</script>