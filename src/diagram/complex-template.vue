<template>
<div  >
<ejs-circulargauge :load='load' ref="circulargauge" style='display:block;height:300px; width:300px; overflow:hidden;'  id='range-container'>
<e-axes>
<e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0  maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
<e-pointers>
<e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
</div>
</template>

<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
    return{
            lineStyle: { width: 10, color: 'transparent' },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, offset: 5 }, minorTicks: { height: 0 },
            annotations: [{
                content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: '1'
            }, {
                content: '<div><span style="font-size:20px; color:#424242; font-family:Regular">65 MPH</span></div>',
                radius: '40%', angle: 180, zIndex: '1'
            }],
            startAngle: 210,
            endAngle: 150,
            gaugeRadius: '80%',
            ranges: [{ start: 0, end: 40, color: '#30B32D' }, { start: 40, end: 80, color: '#FFDD00' },
            { start: 80, end: 120, color: '#F03E3E' }],
            value: 65, 
            pointerRadius: '60%', 
            color: '#757575', 
            pointerWidth: 8,
            cap: { radius: 7 },
            needleTail: { length: '18%'},
            rangeselectdata:[
            { Id:'0', level:'Low'},
            { Id:'1', level:'Medium'},
            { Id:'2', level:'High'}],
            rangeselectfields:{ text: 'level', value: 'Id' },
            rangecolordata:['#30B32D','#FFDD00','#F03E3E'],
            rangeselectwidth:120,
            rangecolorwidth:120
    }
},
provide: {
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
  
}
})
</script>


