<template>
<div class="control-section">
 <div class="row">
<ejs-lineargauge :load='load' id='container1' :orientation='orientation1' style="height:100px;">
                 <e-axes>
                     <e-axis :line='line1' :majorTicks='majorTicks1' :minorTicks='minorTicks1'>
                        <e-pointers>
                            <e-pointer :value='value1' :height='height1' :width='width1' :offset='offset1'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
    </div>
    <div class="row">
<ejs-lineargauge :load='load' id='container2' :orientation='orientation2' :container='container2' style="height:100px;">
                 <e-axes>
                     <e-axis :line='line2' :labelStyle='labelStyle2' :ranges='ranges2' :majorTicks='majorTicks2'>
                          <e-pointers>
                            <e-pointer :value='value2' :height='height2' :width='width2' :offset='offset2' :placement='placement2' :markerType='markerType2'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
    </div>
    <div class="row">
<ejs-lineargauge :load='load' id='container3' :orientation='orientation3' style="height:130px;">
                 <e-axes>
                     <e-axis :line='line3' :majorTicks='majorTicks3' :minorTicks='minorTicks3'>
                          <e-pointers>
                            <e-pointer :value='value3' :height='height3' :width='width3' :offset='offset3'></e-pointer>
                            <e-pointer :value='value4' :height='height4' :type='type4' :color='color4'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
    </div>
    <div class="row">
<ejs-lineargauge :load='load' id='container4' :orientation='orientation4' :container='container4' style="height:100px;">
                 <e-axes>
                     <e-axis :line='line4' :labelStyle='labelStyle4' :majorTicks='majorTicks4' :minorTicks='minorTicks4'>
                          <e-pointers>
                            <e-pointer :value='value5' :height='height5' :width='width5' :offset='offset5' :placement='placement5' :markerType='markerType5'></e-pointer>
                            <e-pointer :value='value6' :height='height6' :type='type6' :color='color6'></e-pointer>
                        </e-pointers>
                     </e-axis>
                 </e-axes>
</ejs-lineargauge>
</div>
<div id="action-description">
    <p>
        This sample visualizes the available customizing options in linear gauge.
    </p>
</div>
<div id="description">
    <p>
        In this sample, we have indicated a value in various styles using bar and marker pointers. You can display any number of
        pointers in an axis.
        <br>
        <p>
            More information about visual editing can be found in this
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
        line1: {
                color: '#9E9E9E'
            },
        value1: 80,
        offset1: 10,
        height1: 13,
        width1: 13,
        majorTicks1: {
                interval: 10,
                color: '#9E9E9E',
            },
        minorTicks1: {
                color: '#9E9E9E'
            },
        orientation2: 'Horizontal',
        container2: {
            width: 30,
            backgroundColor: '#e0e0e0',
            border: {
                width: 0
            },
            offset: -20
        },
        line2: {
                offset: 30
            },
        majorTicks2: {
                interval: 10,
            },
        labelStyle2: {
                offset: 50
            },
        value2: 10,
        placement2: 'Near',
        offset2: -50,
        height2: 15,
        width2: 15,
        markerType2: 'Triangle',
        ranges2: [
                {
                    start: 0,
                    end: 10,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#30b32d'
                }
            ],
        orientation3: 'Horizontal',
        line3: {
                offset: -20,
                color: '#9E9E9E'
            },
        value3: 70,
        offset3: 20,
        height3: 13,
        width3: 13,
        value4: 70,
        type4: 'Bar',
        height4: 10,
        color4: 'red',
        majorTicks3: {
                interval: 10,
                color: '#9E9E9E'
            },
        minorTicks3: {
                color: '#9E9E9E'
            },
        orientation4: 'Horizontal',
        container4: {
            width: 30,
            offset: 0,
            backgroundColor: '#e0e0e0'
        },
         line4: {
                width: 0
            },
        majorTicks4: {
                interval: 10,
                height: 0
            },
        minorTicks4: {
                height: 0
            },
        labelStyle4: {
                offset: 55
            },
        value5: 60,
        height5: 15,
        width5: 15,
        placement5: 'Near',
        offset5: -50,
        markerType5: 'Triangle',
        type6: 'Bar',
        color6: '#ff9200',
        value6: 60,
        height6: 30
    }
},
provide: {
    lineargauge: [Annotations]
},
/* custom code start */
methods: { 
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
}
/* custom code end */
})
</script>

