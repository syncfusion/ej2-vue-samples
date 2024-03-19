<template>
  <div>
     <div class="control-section">
        <ejs-circulargauge :load='load' :background='background' style='display:block' align='center' id='gauge' :axisLabelRender='axisLabelRender'>
            <e-axes>
                <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :minimum=0 :maximum=12 :labelStyle='labelStyle' :annotations="annotations" :ranges='ranges'>
                    <e-pointers>
                    <e-pointer :value='value1' :radius='pointerRadius1' :type='type' :markerShape='markerShape' :markerWidth='markerWidth' :markerHeight='markerHeight' :imageUrl='image1' :animation='animation'></e-pointer>
                    <e-pointer :value='value2' :radius='pointerRadius2' :type='type' :markerShape='markerShape' :markerWidth='markerWidth' :markerHeight='markerHeight' :imageUrl='image2' :animation='animation' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
      </div>
<div id="action-description">
    <p>
        This sample represents the number of hours slept by a person using a sleep tracker. The sleep tracker also
        displays the start and end time of each sleep cycle.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to make the circular gauge look like a sleep tracker. Additionally, the date,
        start and end time, and duration of sleep are all displayed.
    </p>
    <p>
        More information on the circular gauge can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/">documentation
            section</a>.
    </p>
</div>
</div>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { Browser } from "@syncfusion/ej2-base";

export default {
   data:function(){
    return{
            gaugeRadius: '70%',
            startAngle: 0,
            background:'transparent',
            endAngle: 0,
            majorTicks: {
                width: 2,
                height: 12,
                interval: 1,
                offset: 4
            },
            lineStyle: { width: 0 },
            minorTicks: {
                 width: 1,
                 height: 7,
                 interval: 0.2,
                 offset: 4
            },
            labelStyle: {
                hiddenLabel: 'First',
                font: {
                    fontFamily: 'inherit'
                }
            },
            type:'Marker',
            value1: 4.7,
            value2:9,
            markerShape:'Image',
            pointerRadius1: '97%',
            pointerRadius2:'98%',
            markerHeight:28,
            markerWidth:28,           
            image1:'src/circular-gauge/images/sun-icon.png',
            image2:'src/circular-gauge/images/moon-icon.png',
            animation :
            {
             enable:false
            },
            ranges: [
                { start: 0, end: 4.7, color:'#6453D0' , startWidth:4 , endWidth:4},
                { start: 12, end: 9, color:'#6453D0',  startWidth:4 , endWidth:4 },
                { start: 4.7, end: 9, color:'#d7d3ed',  startWidth:4 , endWidth:4 }
                ],
            annotations: [
            {
                   content:'<div style="font-size:15px;border-radius: 20px;border: 2px solid gray;padding: 5px 4px 5px;width: 93%;text-align: center;margin-left: 67px;">Mon, 5 Apr</div>',
                   angle:342, radius:'129%', zIndex:'1'
            },
            {
                content:'<div style="color:#6453D0;font-size:15px;margin-top: 54px;margin-left:28px"><p style="text-align: center;">4 Apr</p><p style="margin-top: -10px;">9:00 PM</p></div>',
                angle:285, radius:'60%', zIndex:'1'
            },
             {
                content:'<div style="font-size:15px;margin-left:25px">07 hrs 43 mins</div>' , angle:185,
                radius:'120%', zIndex:'1'
            },
            {
                content:'<div style="font-size:15px;margin-left: 34px;">Sleep Time</div>', angle:185,
                radius:'140%', zIndex:'1'
            },
            {
                content:'<div style="color:#6453D0;margin-top: -8px;"> - </div>',
                angle:0, radius:'0%', zIndex:'1'
            },
            {
                content:'<div style="color:#6453D0;font-size:15px;margin-left: -15px;margin-top: 56px;"><p style="text-align: center;">5 Apr </p><p style="margin-top: -10px;">4:43 AM</p></div>',
                angle:70, radius:'50%', zIndex:'1'
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
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */
    },
    axisLabelRender: function (args) {
        if (args.value == 3 || args.value == 6 || args.value == 9 || args.value == 12) {
                args.text = args.value.toString();
        }
        else {
                args.text = "";
        }
    }
  }
}
</script>