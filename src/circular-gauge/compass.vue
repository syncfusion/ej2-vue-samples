<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :load='load' style='display:block' align='center' id='direction-container' :axisLabelRender='axisLabelRender'>
                <e-axes>
                    <e-axis :radius='radius' :startAngle='startAngle' minimum=0 maximum=8 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                        <e-pointers>
                            <e-pointer :value='value1' :radius='pointerRadius1' :color='color1' :pointerWidth='pointerWidth1' :cap='cap1' :animation='animation1'></e-pointer>
                            <e-pointer :value='value2' :radius='pointerRadius2' :color='color2' :pointerWidth='pointerWidth2' :cap='cap2' :animation='animation2'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>

    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr style="height: 50px">
                <td>
                    <div id=''>Pointer Color</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist ref="pointer" id='poiterColor' :dataSource='poiterColordata' index=0 :width='poiterColorwidth' :placeholder='poiterColorplaceholder' :change='changePoitercolor'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id=''>Label Color</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist ref="label" id='labelColor' :dataSource='labelColordata' index=0 :width='labelColorwidth' :placeholder='labelColorplaceholder' :change='changeLabelcolor'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates how to make a direction compass by using the features in gauge. Color of the needle and direction labels can be customized by using options.
        </p>
    </div>

    <div id="description">
        <p>
            Circular gauge can be customized as per a user requirement. In this example, a direction compass has been depicted by adding <code>needles</code> and by customizing the <code>labels</code> to show the direction.
        </p>
        <p>
            More information on the needle and labels can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation"> documentation section</a>.
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import {  CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
    data: function () {
        return {
            radius: '70%',
            lineStyle: {
                width: 10
            },
            labelStyle: {
                font: {
                    size: '12px',
                    fontFamily: 'Roboto'
                },
                autoAngle: true,
                hiddenLabel: 'Last'
            },
            majorTicks: {
                height: 15,
                interval: 1
            },
            minorTicks: {
                height: 10,
                interval: 0.5
            },
            startAngle: 0,
            endAngle: 360,
            ranges: [{
                start: 7,
                end: 7
            }],
            value1: 7,
            pointerRadius1: '50%',
            color1: '#f03e3e',
            pointerWidth1: 20,
            cap1: {
                radius: 0
            },
            animation1: {
                enable: false
            },
            value2: 3,
            pointerRadius2: '50%',
            color2: '#9E9E9E',
            pointerWidth2: 20,
            cap2: {
                radius: 0
            },
            animation2: {
                enable: false
            },
            poiterColordata: ['#f03e3e', '#4472c4', '#ed7d31'],
            poiterColorwidth: 120,
            poiterColorplaceholder: 'Select Range Bar Color',
            labelColordata: ['#f03e3e', '#4472c4', '#ed7d31'],
            labelColorwidth: 120,
            labelColorplaceholder: 'Select Range Bar Color'
        }
    },
    methods: {
        /* custom code start */
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        /* custom code end */
// Code for Property Panel
        changePoitercolor: function (args) {
            // let cotainerObj = document.getElementById('direction-container');
            // let pointerColor = document.getElementById('poiterColor');
            let rangeColor = this.$refs.pointer.ej2Instances.value.toString();
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].color = rangeColor;
            this.$refs.circulargauge.ej2Instances.setPointerValue(0, 0, this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].value);
        },
        changeLabelcolor: function (args) {
            // let cotainerObj = document.getElementById('direction-container');
            // let labelColor = document.getElementById('labelColor');
            let rangeColor = this.$refs.label.ej2Instances.value.toString();
            this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.font.color = rangeColor;
            this.$refs.circulargauge.ej2Instances.refresh();
        },
        axisLabelRender: function (args) {
            let value = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', ''];
            args.text = value[args.value];
        }
    }
})
</script>

<style>
#control-container {
    padding: 0px !important;
}
</style>
