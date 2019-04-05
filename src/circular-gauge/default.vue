<template>
<div>
<div class="control-section">
<ejs-circulargauge :load='load' style='display:block' align='center' id='gauge'>
<e-axes>
<e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
<e-pointers>
<e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
</div>
<div id="action-description">
    <p>
        This sample illustrates the default rendering of circular gauge.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a default circular gauge. The CircularGauge control visualizes the numerical values
        of scales in a circular manner. You can use <code>axes</code>, <code>ranges</code>, <code>pointers</code>        properties to customize the default appearance of the gauge. In this sample, a axis with multiple ranges and a pointer
        has been used.
    </p>
    <p>
        More information on the gauge can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
   data:function(){
    return{
            gaugeRadius: '80%',
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
                width: 0
            },
            lineStyle: { width: 8 },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                font: {
                    fontFamily: 'Roboto',
                    size: '12px',
                    fontWeight: 'Regular'
                },
                offset: -5
            },
            value: 60,
            pointerRadius: '60%',
            pointerWidth: 7,
            cap: {
                    radius: 8,
                    border: { width: 0 }
            },
            needleTail: {
                    length: '25%'
            }  
    }
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

