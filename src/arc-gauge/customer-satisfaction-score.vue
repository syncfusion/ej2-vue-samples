<template>
<main><div>
<div class="control-section" align="center">
    <ejs-circulargauge :load='load' height="400px" :allowMargin='allowmargin' title='Customer Satisfaction Score' :titleStyle='titleStyle' :tooltip='tooltip' :legendSettings='legendSettings'>
      <e-axes>
        <e-axis startAngle="270" endAngle="90" minimum=0 maximum=10 radius='100%' :majorTicks= 'majorTicksOne' :minorTicks= 'minorTicks' :labelStyle ='labelStyleOne' :lineStyle= 'lineStyle' :annotations='annotationsOne' :ranges='rangesOne' :pointers='pointers'>
        </e-axis>
      </e-axes>
    </ejs-circulargauge>
</div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample shows an arc gauge with a real-time scenario of a customer satisfaction score ranging from 0 to 10.
   </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render an arc gauge showing customer satisfaction score. You can use <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axisModel/">axes</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/">ranges</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotationModel/">annotations</a>,
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/legendSettingsModel/">legend</a>
        and <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettingsModel/">tooltip</a>
        oriented properties to customize the appearance of the arc gauge, in order to achieve the desired outcome.
    </p>
    <p>
        More information on the arc gauge can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/">documentation section</a>.
    </p>
</section>
</main>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, Annotations, GaugeTooltip, Legend } from "@syncfusion/ej2-vue-circulargauge";

export default {
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective
   },
   data:function(){
    return{
        allowmargin: false,
        minorTicks: {
             height: 0,
             width:0
        },
        lineStyle:{
          width:0
        },
        majorTicksOne:{
          height: 12,
          width: 1.5,
          interval: 2.0,
          offset: 35,
        },
        labelStyleOne:{
           font: {
            size: '12px',
            fontFamily: 'inherit'
        },
        position: 'Outside',
        offset: -40,
        },
        pointers: [
            {
                radius: '70%',
                needleEndWidth: 2,
                pointerWidth: 5,
                value: 7.5,
                cap: {
                    radius: 8,
                    border: { width: 2 },
                },
            },
            {
                type: 'Marker',
                markerShape: 'Rectangle',
                markerWidth: 40,
                markerHeight: 0.5,
                animation:{
                    enable:false
                },
                radius: '68%',
                value: 6.5,
                color: '#0477c2',
            },
            {
                type: 'Marker',
                markerShape: 'Rectangle',
                markerWidth: 40,
                markerHeight: 0.5,
                animation:{
                    enable:false
                },
                radius: '68%',
                value: 9.5,
                color: '#0477c2',
            },
        ],
        rangesOne: [
            {
                start: 0,
                end: 2,
                startWidth: 40,
                endWidth: 40,
                color: '#F03E3E',
                radius: '80%',
                legendText:'Poor'
            },
            {
                start: 6.5,
                end: 9.5,
                startWidth: 120,
                endWidth: 120,
                color: '#0477c2',
                radius: '110%',
                legendText:'Average Score'
            },
            {
                start: 2,
                end: 5,
                startWidth: 40,
                endWidth: 40,
                color: '#f6961e',
                radius: '80%',
                legendText:'Satisfied'
            },
            {
                start: 5,
                end: 8,
                startWidth: 40,
                endWidth: 40,
                color: '#FFDD00',
                radius: '80%',
                legendText:'Good'
            },
            {
                start: 8,
                end: 10,
                startWidth: 40,
                endWidth: 40,
                color: '#30B32D',
                radius: '80%',
                legendText:'Excellent'
            },
        ],
        annotationsOne: [
        {
            content:
                '<div style="font-size:16px;margin-top: 15px;font-family: inherit;">7.5</div>',
            angle: 0,
            zIndex: '1',
            radius: '-10%',
        }],
        titleStyle: {
            fontFamily: 'inherit',
            size: '18px'
        },
        tooltip: {
            enable: true,
            template:
                '<div style="font-size:18px;background:white;width:180px;color:#595959;border:1px solid #e8e8e8">Current Score: ${value} </div>',
        },
        legendSettings: {
            visible: true,
            position: 'Bottom',
            width: '55%',
            textStyle: {
                fontFamily: 'inherit',
                size: '12px'
            }
        },
      }
    },
    provide: {
        circulargauge: [Annotations, GaugeTooltip, Legend]
    },
    methods: {
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
}
</script>

