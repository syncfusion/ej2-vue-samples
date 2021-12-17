<template>
<div>
<div class="col-md-8 control-section">
    <div class="content-wrapper">
        <ejs-lineargauge :load='load' ref="lineargauge" :container= 'container' style='display:block' align='center' id='rangeContainer' :orientation='orientation'>
            <e-axes>
                <e-axis :labelStyle='labelStyle' :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :pointers='pointers'>
                    <e-ranges>
                        <e-range :start='start' :end='end' :startWidth='startWidth' :endWidth='endWidth' :color='color' :offset='offset' :linearGradient='rangeLinearGradient'></e-range>
                    </e-ranges>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
</div>
<div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
          <colgroup>
            <col span="1" style="width: 40%;">
            <col span="1" style="width: 60%;">
         </colgroup>
         <tbody>
            <tr style="height: 50px">
                            <td>
                                <div> Gradient Type </div>
                            </td>
                            <td>
                                <div style="margin-left: -20px">
                                      <ejs-dropdownlist ref= "gradientType" id='gradientType' :dataSource='selectGradientType' :width='width' index=0 :change='changeGradientselect'></ejs-dropdownlist> 
                                </div>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td>
                                <div>Elements</div>
                            </td>
                            <td>
                                <div style="margin-left: -20px">
                                    <ejs-dropdownlist  ref= "element" id='element' :dataSource='selectElement'  :width='width' index=0 :change='changeElement'></ejs-dropdownlist> 
                                </div>
                            </td>
                        </tr> 
                        </tbody>
             </table>
    </div>
    <div id="action-description">
        <p>
            This sample shows how linear gradient color and radial gradient color are applied to the linear gauge elements.
        </p>
    </div>
    <div id="description">
        <p>
            The linear gauge supports gradient coloring in a linear or radial manner. The gradient type can be changed using the <b>Gradient Type</b> dropdown list in the properties panel. In the same way, the element for which the gradient color should be applied is decided by the <b>Elements</b> dropdown list.
        </p>
        <br>
        <p style="font-weight: 500"> <b>Injecting Module</b></p>
        <p>
            To apply gradient coloring in the linear gauge, we need to inject the <code>Gradient</code> module using the <code>provide</code> section.
        </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Gradient } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(LinearGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
    data: function () {
        return {
            orientation: 'Horizontal',
            labelStyle: {
                offset: 55,
                font: {
                    fontFamily: 'Segoe UI'
                }
            },
            line: {
                width: 0
            },
             majorTicks: {
                interval: 25, height: 0
            },
            minorTicks: {
                height: 0
            },
            pointers: [{
            value: 80,
            markerType: 'Triangle',
            height: 25,
            width: 35,
            placement: 'Near', 
            offset: -44,
            color: '#f54ea2',
            }],
            pointerLinearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                  { color: "#fef3f9", offset: "0%", opacity: 1 },
                  { color: " #f54ea2", offset: "100%", opacity: 1 }]
           },
            pointerRadialGradient: {
                radius: '60%',
                outerPosition: { x: '50%', y: '50' },
                innerPosition: { x: '50%', y: '50' },
                colorStop: [
                   { color: "#fff5f5", offset: "0%", opacity: 0.9 },
                   { color: "#f54ea2", offset: "100%", opacity: 0.8 }]
           },
            start: 0, 
            end: 80,
            startWidth: 30,
            endWidth: 30,
            color: '#f54ea2', 
            offset: 30,
            rangeLinearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                   { color: "#fef3f9", offset: "0%", opacity: 1 },
                   { color: " #f54ea2", offset: "100%", opacity: 1 }]
            },
            rangeRadialGradient: {
                radius: '65%',
                outerPosition: { x: '50%', y: '70%' },
                innerPosition: { x: '60%', y: '60%' },
                colorStop: [
                    { color: "#fff5f5", offset: "5%", opacity: 0.9 },
                   { color: " #f54ea2", offset: "100%", opacity: 0.9 }]
            },
            container: {
            width: 30,
            offset: 30
            },

            selectGradientType: ["Linear Gradient", "Radial Gradient"],
            selectElement: ["Range", "Pointer"],
            width: '100%',     
        }
    },
    provide: {
        lineargauge: [Gradient]
    },
    methods: {
        /* custom code start */
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        /* custom code end */
    changeGradient: function() {
        if (gradientType.value === "Radial Gradient" && element.value === "Range") {
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].radialGradient = this.rangeRadialGradient;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Linear Gradient" &&  element.value === "Range") {
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].linearGradient = this.rangeLinearGradient;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Radial Gradient" && element.value === "Pointer") {
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].radialGradient = this.pointerRadialGradient;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.refresh();
        }
        if (gradientType.value === "Linear Gradient" && element.value === "Pointer") {
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].linearGradient = this.pointerLinearGradient;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;
            this.$refs.lineargauge.ej2Instances.refresh();
        }        
        },
    changeGradientselect: function(args) {
        this.changeGradient();
    },
    changeElement: function(args) {
        this.changeGradient();
    },   
    }
});
</script>
