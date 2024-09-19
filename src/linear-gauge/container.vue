<template>
<main><div>
<div class="col-md-8 control-section">
    <div class="content-wrapper">
            <div align='center'>
                <ejs-lineargauge :load='load' :background='background' ref="lineargauge" style='display:block' align='center' id='boxContainer' :title='title' :container='container' :titleStyle='titleStyle'>
                    <e-axes>
                        <e-axis minimum=0 maximum=180 :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                            <e-pointers>
                                <e-pointer value=90 :height='height' :roundedCornerRadius='roundedCornerRadius' :width='width' :type='type' :color='color'></e-pointer>
                            </e-pointers>
                        </e-axis>
                        <e-axis minimum=0 maximum=180 :line='line2' :majorTicks='majorTicks2' :minorTicks='minorTicks2' :opposedPosition='opposedPosition'>
                            <e-pointers>
                                <e-pointer :width='width2'></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-lineargauge>
            </div>
        </div>
    </div>
<br>
<div class="col-md-4 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
            <col span="1" style="width: 30%;">
            <col span="1" style="width: 70%;">
         </colgroup>
            <tbody>
                <tr style="height: 40px">
                    <td>
                        <div style="font-size:14px" >Orientation</div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist id='orientationMode' :dataSource='orientationdata' index=0 :placeholder='orientationplaceholder' :width='orientationwidth' :change='changeOrientation'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr style="height: 40px">
                    <td>
                        <div style="font-size:14px">Container Type</div>
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
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows the different types of containers, such as normal, thermometer, and rounded rectangle. The
        linear gauge's orientation can also be changed from vertical to horizontal.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        The linear gauge can be rendered vertically or horizontally depending on the option selected in the
        <b>Orientation</b> drop-down list. You can also select the container type from the <b>Container Type</b>
        drop-down list.
    </p>
    <p>
        More information on the containers can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/linear-gauge-appearance#customizing-the-linear-gauge-container">documentation
            section</a>. Likewise, information about orientation can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/axis/#orientation">documentation
            section</a>.
    </p>
    <br>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    data: function () {
        return {
            title: 'Temperature Measure',
            background:'transparent',
            titleStyle: {
                fontFamily: 'inherit'
            },
            container: {
                width: 13,
                roundedCornerRadius: 5,
                type: 'Thermometer',
            },
            line: {
                width: 0
            },
            labelStyle:{
                font: {
                    fontFamily: 'inherit'
                }
            },
            majorTicks: {
                interval: 20, height: 20, color: '#9e9e9e'
            },
            minorTicks: {
                height: 10, interval: 10, color: '#9e9e9e'
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
                interval: 20, height: 20, color: '#9e9e9e'
            },
            minorTicks2: {
                height: 10, interval: 10, color: '#9e9e9e'
            },
            opposedPosition: true,
            width2: 0,
            orientationdata: ['Vertical', 'Horizontal'],
            orientationplaceholder: 'Select Range Bar Color',
            orientationwidth: '100%',
            containerdata: ['Thermometer', 'Normal', 'RoundedRectangle'],
            containerplaceholder: 'Select Range Bar Color',
            containerwidth: '100%',
        }
    },
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
        'ejs-dropdownlist': DropDownListComponent
    },
    methods: {
        changeContainer: function (args) {
            this.$refs.lineargauge.ej2Instances.container.type = containerMode.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        changeOrientation: function (args) {
            this.$refs.lineargauge.ej2Instances.orientation = orientationMode.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        load: function(args) {
        /* custom code start */
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
        /* custom code end */
        }
    }
};
</script>