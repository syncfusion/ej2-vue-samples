<template>
<div>
    <div class="control-section">
        <ejs-circulargauge style='display:block' :load='load' align='center' id='tooltip-container' :title='title' :titleStyle='titleStyle' :enablePointerDrag='enablePointerDrag' :tooltipRender='tooltipRender' :tooltip='tooltip'>
            <e-axes>
                <e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0 maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                    <e-pointers>
                        <e-pointer :value='value' :cap='cap' :radius='pointerRadius' :color='color' :animation='animation'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
    <div id="action-description">
        <p>
            This sample visualizes the tooltip of pointer value in gauge. To see the tooltip in action, hover pointer or tap the pointer.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to show the tooltip for pointer in gauge, to see the tooltip in action, hover pointer or tap on pointer in touch enabled devices.
        </p>
        <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>Circular gauge component features are segregated into individual feature-wise modules. To use tooltip, we need to inject
            <code>GaugeTooltip</code> module using CircularGauge.Inject(GaugeTooltip) method.
        </p>
        <p>
            More information on the tooltip can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import {CircularGaugePlugin, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
    data: function () {
        return {
            title: 'Tooltip Customization',
            titleStyle: {
                size: '15px',
                color: 'grey'
            },
            gaugeradius: '90%',
            startAngle: 240,
            endAngle: 120,
            lineStyle: {
                width: 0
            },
            majorTicks: {
                color: 'white',
                offset: -5,
                height: 12
            },
            minorTicks: {
                width: 0
            },
            labelStyle: {
                useRangeColor: true,
                font: {
                    color: '#424242',
                    size: '13px',
                    fontFamily: 'Roboto'
                }
            },
            value: 70,
            pointerRadius: '60%',
            color: '#33BCBD',
            cap: {
                radius: 10,
                border: {
                    color: '#33BCBD',
                    width: 5
                }
            },
            animation: {
                enable: true,
                duration: 1500
            },
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 10,
                endWidth: 10,
                radius: '102%',
                color: '#3A5DC8',
            }, {
                start: 50,
                end: 120,
                radius: '102%',
                startWidth: 10,
                endWidth: 10,
                color: '#33BCBD',
            }],
            tooltip: {
                enable: true,
                enableAnimation: false
            },
            enablePointerDrag: true
        }
    },
    provide: {
        circulargauge: [GaugeTooltip]
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
        tooltipRender: function (args) {
            let imageName = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? 'min' : 'max');
            let borderColor = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? '#3A5DC8' : '#33BCBD');
            args.tooltip.template = '<div id="templateWrap" style="border:2px solid ' + borderColor +
                '"><img src="src/circular-gauge/images/' + imageName + '.png"/><div class="des" style="color: ' +
                borderColor + '"><span>${value} MPH</span></div></div>';
        }
    }
})
</script>

<style>
#templateWrap img {
    border-radius: 30px;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

#templateWrap {
    background: #fff;
    padding: 3px;
    border-radius: 2px;
}

#templateWrap .des {
    float: right;
    padding-left: 10px;
    line-height: 30px;
}
</style>
