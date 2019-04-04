<template>
<div>
<div class="col-md-8 control-section">
    <div class="content-wrapper">
            <div align='center'>
                <ejs-lineargauge :load='load' ref="lineargauge" style='display:block' align='center' id='boxContainer' :title='title' :container='container'>
                    <e-axes>
                        <e-axis minimum=0 maximum=180 :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks'>
                            <e-pointers>
                                <e-pointer value=90 :height='height' :roundedCornerRadius='roundedCornerRadius' :width='width' :type='type' :color='color'></e-pointer>
                            </e-pointers>
                        </e-axis>
                        <e-axis minimum=0 maximum=180 :line='line2' :majorTicks='majorTicks2' :opposedPosition='opposedPosition'>
                            <e-pointers>
                                <e-pointer :width='width2'></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-lineargauge>
            </div>
        </div>
    </div>

<div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%;">
            <tbody>
                <tr>
                    <td>
                        <div>Orientation</div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='orientationMode' :dataSource='orientationdata' index=0 :placeholder='orientationplaceholder' :width='orientationwidth' :change='changeOrientation'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <div>Container Type</div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='containerMode' :dataSource='containerdata' index=0 :placeholder='containerplaceholder' :width='containerwidth' :change='changeContainer'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates the default rendering of linear gauge.
        </p>
    </div>
    <div id="description">
        <p>
            This sample demonstrates the orientation and container customization in linear gauge. The gauge can be rendered either in vertical or horizontal orientation. And you can use <code>type</code> property in container to change the type of the
            container.
        </p>
        <br>
        <p>
            More information about container can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
        </p>
    </div>
</div>
</template>
<style>
    #control-container {
        padding: 0px !important;
    }

    .property-panel-section {
        height: 380px;
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(LinearGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
    data: function () {
        return {
            title: 'Temperature Measure',
            container: {
                width: 13,
                roundedCornerRadius: 5,
                type: 'Thermometer',
            },
            line: {
                width: 0
            },
            majorTicks: {
                interval: 20,
                color: '#9e9e9e'
            },
            minorTicks: {
                color: '#9e9e9e'
            },
            roundedCornerRadius: 5,
            height: 13,
            width: 13,
            type: 'Bar',
            color: '#f02828',
            line2: {
                width: 0
            },
            majorTicks2: {
                interval: 20
            },
            opposedPosition: true,
            width2: 0,
            orientationdata: ['Vertical', 'Horizontal'],
            orientationplaceholder: 'Select Range Bar Color',
            orientationwidth: 120,
            containerdata: ['Thermometer', 'Normal', 'RoundedRectangle'],
            containerplaceholder: 'Select Range Bar Color',
            containerwidth: 120,
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
        changeContainer: function (args) {
            this.$refs.lineargauge.ej2Instances.container.type = containerMode.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        changeOrientation: function (args) {
            this.$refs.lineargauge.ej2Instances.orientation = orientationMode.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        }
    }
});
</script>

<style>
#control-container {
    padding: 0px !important;
}
</style>

