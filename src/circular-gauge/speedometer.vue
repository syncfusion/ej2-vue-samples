<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge ref="circulargauge" style='display:block' align='center' id='gauge-container' :title='title' centerY='75%' :titleStyle='titleStyle' :load='load'>
<e-axes>
    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' 
    :radius='radius' minimum=0 maximum=120 :annotations='annotations' :ranges='ranges'>
      <e-pointers>
          <e-pointer :value='value' :radius='pointerRadius' :color='color' :pointerWidth='pointerWidth' :animation='animation' :cap='cap' :needleTail="needleTail"></e-pointer>
      </e-pointers>  
    </e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin:10px">
            <tbody>
               <tr>
                        <td style="width: 40%">
                                    <div class="property-text"> Show text labels</div>
                                </td>
                                <td style="width: 40%;">
                                    <div>
                                    <ejs-checkbox ref="text" id="showText" :change="onChangeText"></ejs-checkbox>
                                    </div>
                                </td>
                        </tr>&nbsp;
                        <tr>
                            <td style="width: 40%">
                                <div class="property-text"> Combine ranges</div>
                            </td>
                            <td style="width: 40%;">
                                <div>
                                <ejs-checkbox id="combineRange" ref="range" :change="onChangeCombineRange"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>&nbsp;
                        <tr>
                            <td style="width: 40%">
                                <div class="property-text"> Gap between ranges</div>
                            </td>
                            <td style="width: 40%;">
                                <div>
                                <ejs-checkbox id="range" ref="gap" :change="onChangeRange"></ejs-checkbox>
                                </div>
                            </td>
                    </tr>&nbsp;
            </tbody>
            <br/>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample depicts the appearance of speedometer rendered using the circular gauge. The pointer is changed with random values dynamically.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to make the look of circular gauge like a speedometer. The labels can be changed to text values, gap can be added between the ranges, or the ranges can be combined to form single range using the options in the properties panel.
    </p>
    <p>
        For more information on ranges, refer to this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation</a> section.
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
<style>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(CircularGaugePlugin);
Vue.use(CheckBoxPlugin);

let templateString = '<div id="templateWrap"><div class="des">'+
                '<div id="pointerannotation" style="width:90px;text-align:center;font-size:20px;font-family:Roboto">${pointers[0].value} km/h</div></div></div>';
export default Vue.extend({
data:function(){
    return{
            minimum: 0,
            maximum: 120,
            value: 40,
            radius: '120%',
            pointerRadius: '80%',
            lineStyle: { width: 0 },
            majorTicks: { width: 0, },
            minorTicks: { width: 0 },
            pointerWidth: 7,
            titleStyle: { size: '18px' },
            labelStyle: { useRangeColor: false, position: 'Outside', autoAngle: true,
            font: { size: '13px', fontFamily: 'Roboto' } },
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

            annotations: [
                {
                    content: templateString,
                    angle: 0, zIndex: '1',
                    radius: '30%'
                }
            ],
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
    /* custom code start */
     load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = 
           selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    // Code for Property Panel
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
    onChangeText: function(args) {
      let circulargauge=this.$refs.circulargauge.ej2Instances;
      if (args.checked === true) {
            circulargauge.axes[0].majorTicks.interval = 10;
            circulargauge.axisLabelRender = function(args) {
                let text;
                switch (parseInt(args.text)) {
                    case 10:
                        text = 'Ideal';
                        break;
                    case 30:
                        text = 'Safe';
                        break;
                    case 50:
                        text = 'Good';
                        break;
                    case 70:
                        text = 'Ok';
                        break;
                    case 90:
                        text = 'Risk';
                        break;
                    case 110:
                        text = 'Danger';
                        break;

                    default:
                        text = '';
                        break;
                }
                args.text = text;
            };
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        } else {
            circulargauge.axes[0].majorTicks.interval = 20;
            circulargauge.axes[0].minimum = 0;
            circulargauge.axes[0].maximum = 120;
            circulargauge.axisLabelRender = function(args) {};
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.refresh();
        }
    },
    onChangeCombineRange: function(args) {
        let circulargauge = this.$refs.circulargauge.ej2Instances;
        let rangeCheckbox = this.$refs.gap.ej2Instances;
        if (args.checked === true) {
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
})
</script>

