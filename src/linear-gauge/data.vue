<template>
<div class="control-section">
        <div class="row" style="height:300px;">
             <ejs-lineargauge align='center' id='container1' :load='load1' :orientation='orientation1' :container='container1' :annotations='annotations1'>
                 <e-axes>
                     <e-axis :line='line1' :labelStyle='labelStyle1' :ranges='ranges1'>
                        <e-pointers>
                            <e-pointer :value='value1' :height='height1' :placement='placement1' :width='width1' :offset='offset1' :markerType='markerType1'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
             </ejs-lineargauge>
        </div>
    <div class="row" style="height:250px;">
 <ejs-lineargauge align='center' id='container2' :orientation='orientation2' :load='load2' :container='container2' :annotations='annotations2'>
                 <e-axes>
                     <e-axis :line='line2' :labelStyle='labelStyle2' :ranges='ranges2'>
                        <e-pointers>
                            <e-pointer :value='value2' :height='height2' :placement='placement2' :width='width2' :offset='offset2' :markerType='markerType2'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
    </div>
  <div class="row" style="height:250px;">
<ejs-lineargauge  align='center' id='container3' :orientation='orientation3' :load='load3' :container='container3' :annotations='annotations3'>
                 <e-axes>
                     <e-axis :line='line3' :maximum='maximum3' :labelStyle='labelStyle3' :ranges='ranges3'>
                        <e-pointers>
                            <e-pointer :value='value3' :height='height3' :placement='placement3' :width='width3' :offset='offset3' :markerType='markerType3'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
    </div>
<div id="action-description">
    <p>
        This sample illustrates exercise tracking of an athlete by using ranges, pointers, and annotation features available in linear gauge.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the exercise tracking using ranges, pointer and annotation features in linear gauge. We have rendered
        3 linear gauges in this sample for indicating running, cycling and walking.
    </p>
    <br>
    <p>
        More information about thermometer linear gauge can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<style>
 #control-container {
     padding: 0px !important;
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default Vue.extend({
 data:function(){
    return{
        orientation1: 'Horizontal',
        container1: {
            width: 30,
            border: {
                width: 0
            },
            offset: 30
           },
            line1: {
                offset: 30
            },
            labelStyle1: {
                offset: 50
            },
             value1: 10,
             placement1: 'Near',
             offset1: -60,
             height1: 10,
             width1: 10,
             markerType1: 'Triangle',
              ranges1: [
                {
                    start: 0,
                    end: 10,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#30b32d'
                }
            ],
            annotations1: [
            {
                content: '<div id="title" style="width:300px;"> <img style="float:left" src'
                + '="src/linear-gauge/images/exercise-tracking.svg"/><p style="font-size:18px;color:#4285F4;float:left;margin-left:12px;'
                + 'margin-top:4px">Exercise Tracking </p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 0,
                x: 150,
                y: -180
            },
            {
                content: '<div id="running" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/linear-gauge' +
                '/images/running.svg" /></span><p style="float:left;margin-left:10px;">Running</p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 0,
                x: 50,
                y: -130
            },
            {
                content: '<div id="pointerText" style="width:60px;"><p style="font-size:15px;">10 MPH</p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 10,
                y: -65
            }
        ],
        orientation2: 'Horizontal',
        container2: {
            width: 30,
            border: {
                width: 0
            },
            offset: -50
        },
         line2: {
                offset: 30
            },
            labelStyle2: {
                offset: 50
            },
            value2: 28,
            height2: 10,
            width2: 10,
            placement2: 'Near',
            offset2: -60,
            markerType2: 'Triangle',
            ranges2: [
                {
                    start: 0,
                    end: 28,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#30b32d'
                }
            ],
            annotations2: [{
            content: '<div id="cycle" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/linear-gauge'
            + '/images/cycling.svg" /></span><p style="float:left;margin-left:10px;">Cycling</p></div>',
            axisIndex: 0, zIndex: '1',
            axisValue: 0,
            x: 50,
            y: -110
        },
        {
            content: '<div id="pointerText" style="width:60px;"><p style="font-size:15px;">28 MPH</p></div>',
            axisIndex: 0,
            axisValue: 28,
            y: -70
        }],
        orientation3: 'Horizontal',
        container3: {
            width: 30,
            border: {
                width: 0
            },
            offset: -90
        },
         maximum3: 10,
         line3: {
                offset: 30
            },
         labelStyle3: {
                format: '{value}k',
                offset: 50
            },
        value3: 2,
        height3: 10,
        width3: 10,
        placement3: 'Near',
        offset3: -60,
        markerType3: 'Triangle',
        ranges3: [
                {
                    start: 0,
                    end: 2,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#30b32d'
                }
            ],
        annotations3: [{
            content: '<div id="walk" style="width:100px;"><img style="height:25px;width:25px;float:left" src="src/' +
            'linear-gauge/images/walking.svg" /></span><p style="float:left;margin-left:10px;">Walking</p></div>',
            axisIndex: 0,
            axisValue: 0, zIndex: '1',
            x: 50,
            y: -120
        },
        {
            content: '<div id="pointerText" style="width:100px;"><p style="font-size:15px;">2000 Steps</p></div>',
            axisIndex: 0,
            axisValue: 2.2, zIndex: '1',
            y: -65
        }]
        }
    },
provide: {
    lineargauge: [Annotations]
},
  /* custom code start */
methods: {
    load1: function(args1) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args1.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
            if (args1.gauge.theme.toLowerCase().indexOf('dark') > 1 || args1.gauge.theme.toLowerCase() === 'highcontrast') {
                args1.gauge.annotations[1].content = '<div id="running" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/Running1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Running</p></div>';
            }
    },
    load2: function(args2) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args2.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
            if (args2.gauge.theme.toLowerCase().indexOf('dark') > 1 || args2.gauge.theme.toLowerCase() === 'highcontrast') {
                args2.gauge.annotations[0].content = '<div id="cycle" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/Cycling1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Cycling</p></div>';
            }
    },
    load3: function(args3) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args3.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
            if (args3.gauge.theme.toLowerCase().indexOf('dark') > 1 || args3.gauge.theme.toLowerCase() === 'highcontrast') {
                args3.gauge.annotations[0].content = '<div id="walk" style="width:100px;"><img style="height:25px;width:25px;' +
                    'float:left" src="src/linear-gauge/images/Walking1.svg" /></span><p style="float:left;' +
                    'margin-left:10px;">Walking</p></div>';
            }
    }
}
/* custom code end */
})
</script>

