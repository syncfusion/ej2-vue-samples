<template>
<div>
<div class="col-md-8 control-section">
        <div class="content-wrapper">
        <div style="margin-top: 25px">
<ejs-circulargauge :load='load' ref ="circulargauge" style='display:block' align='center' id='gauge'>
<e-axes>
<e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :minimum =0 :maximum=100 :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
<e-pointers>
<e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :needleStartWidth= 'needleStartWidth' :cap='cap' :color='color'  :needleTail='needleTail' :animation='animation' ></e-pointer>
</e-pointers>
<e-ranges>
<e-range :start='start' :end='end' :startWidth='startWidth' :roundedCornerRadius ='roundedCornerRadius' :endWidth='endWidth' :color='color' :linearGradient='rangeLinearGradient'></e-range>
</e-ranges>
</e-axis>
</e-axes>
</ejs-circulargauge>
</div>
</div>
</div>
 <div class="col-lg-4 property-section">
         <table id="property" title="Properties" style="width: 100%">
                    <tbody>
                        <tr style="height: 50px">
                            <td>
                                <div style="margin-top:30px;margin-left:-15px;width: 120px;"> Gradient Type </div>
                            </td>
                            <td>
                                <div style="margin-top:20px;margin-left:-15px;">
                                    <ejs-dropdownlist ref= "gradientType" id='gradientType' :dataSource='selectGradientType' :width='width' index=0 :change='changeGradientselect'></ejs-dropdownlist> 
                                </div>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td>
                                <div style="margin-top:30px;margin-left:-15px;">Elements</div>
                            </td>
                            <td>
                                <div style="margin-top:30px;margin-left:-15px;">
                                    <ejs-dropdownlist  ref= "element" id='element' :dataSource='selectElement'  :width='width' index=0 :change='changeElement'></ejs-dropdownlist> 
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
 </div>
<div id="action-description">
    <p>
         This sample shows how linear gradient color and radial gradient color are applied to the circular gauge elements.
   </p>
</div>
<div id="description">
    <p>
        The circular gauge supports gradient coloring in a linear or radial manner. The gradient type can be changed using the <b>Gradient Type</b> dropdown list in the properties panel. In the same way, the element for which the gradient color should be applied is decided by the <b>Elements</b> dropdown list.
    </p>
     <br>
    <p style="font-weight: 500"> <b>Injecting Module</b></p>
    <p>To apply gradient coloring in the circular gauge, we need to inject the <code>Gradient</code> module using the <code>provide</code> section.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Gradient } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
   data:function(){
    return{
            gaugeRadius: '80%',
            startAngle: 210,
            endAngle: 150,
            majorTicks: { width: 0, interval: 10 },
            lineStyle: { width: 0 },
            minorTicks: {
                width: 0
            },
            start: 0,  end: 120, startWidth: 18, endWidth: 18, color: '#E63B86',
            roundedCornerRadius: 10,
            rangeLinearGradient:
             {
                startValue: '0%',
                endValue: '100%',
                colorStop: [ 
                   { color: '#9E40DC', offset: '0%', opacity: 0.9 },
                   { color: '#E63B86', offset: '70%', opacity: 0.9 },]
             },
            rangeRadialGradient: {
                radius: '50%',
                innerPosition: { x: '50%', y: '50%' },
                outerPosition: { x: '50%', y: '50%' },
                colorStop: [
                     { color: '#9E40DC', offset: '90%', opacity: 0.9 },
                     { color: '#E63B86', offset: '160%', opacity: 0.9 }]
             },
            labelStyle: { font: { fontFamily: 'Roboto',
            size: '12px',
            fontWeight: 'Regular' }, offset: 10 },
            value: 65,
            color: '#E63B86',
            pointerRadius: '85%',
            pointerWidth: 12,
            cap: { radius: 12 , border: {color: '#E63B86', width: 2.5}, color: 'white' },
            needleTail: { length: '0%'},
            animation: {enable : false},
            needleStartWidth: 2,
            pointerLinearGradient:
            {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                   { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                    { color: '#E63B86', offset: '70%', opacity: 0.9 }]
            },
            pointerRadialGradient:{
                radius: '50%',
                innerPosition: { x: '50%', y: '50%' },
                outerPosition: { x: '50%', y: '50%' },
                colorStop: [ 
                    { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                    { color: '#E63B86', offset: '60%', opacity: 0.9 }]
            },
            selectGradientType: ["Linear Gradient", "Radial Gradient"],
            selectElement: ["Range", "Pointer"],
            width: 145,         
    }
   },
   provide: {
    circulargauge: [Gradient]
   },
   
 
   /* custom code start */
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    changeGradient: function() {
        if (gradientType.value === "Radial Gradient" && element.value === "Range") {
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = this.rangeRadialGradient;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Linear Gradient" &&  element.value === "Range") {
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = this.rangeLinearGradient;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Radial Gradient" && element.value=== "Pointer") {
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = this.pointerRadialGradient;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Linear Gradient" && element.value === "Pointer") {
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = this.pointerLinearGradient;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.circulargauge.ej2Instances.refresh();
        }   
    },
   
    changeGradientselect: function(args) {
        this.changeGradient();
    },
    changeElement: function(args) {
        this.changeGradient();  
    },    
}
/* custom code end */
})
</script>
