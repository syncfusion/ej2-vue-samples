<template>
   <div class="control-section">
         <div align='center'>
             <ejs-lineargauge :load='load' style='display:block' align='center' id='defaultContainer' :orientation='orientation' :annotations='annotations'>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :offset='offset' :markerType='markerType' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
         </div>
 <div id="action-description">
      <p>
        This sample illustrates the default rendering of linear gauge.
   </p>
    </div>
    <div id="description">
           <p>
        This sample demonstrates the default linear gauge. The linear gauge control indicates the values of scales in horizontal
        or vertical sliding meter. You can use <code>axes</code>,
        <code>ranges</code>, <code>pointers</code> and <code>container</code> properties to customize the appearance of the
        gauge. an axis, annotation and a pointer has been used.
    </p>
    <br>
    <p>
        More information about linear gauge can be found in this
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
        orientation:"Horizontal",
        value:10,
        height:15,
        width:15,
        offset:-50,
        markerType:'Triangle',
        placement:'Near',
        majorTicks: { 
            interval: 10
        },
        minorTicks:{
            interval: 2
        },
        labelStyle:{
            offset: 48
        },
        annotations:[{
        content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;">10 MPH</h1></div>',
        axisIndex: 0,
        axisValue: 10,
        x: 10,
        zIndex: '1',
        y: -70
        }]
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
});
</script>

