<template>
  <main><div>
    <div class="control-section">    
        <ejs-lineargauge :load='load' ref="lineargauge" :background='background' :annotations='annotations' style='display:block' align='center' id='boxContainer' :container='container' >                  
            <e-axes>
                <e-axis minimum=-20 maximum=50 :line='line'  :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                    <e-pointers>
                        <e-pointer value=35 :height='height' :width='width' :markerType='markerType' :color='color1' :offset='offset' :placement='placement'></e-pointer>
                    </e-pointers>
                </e-axis>
                <e-axis minimum=0 maximum=120 :line='line2'  :minorTicks='minorTicks2'  :majorTicks='majorTicks2' :labelStyle='labelStyle' :opposedPosition='opposedPosition'>
                    <e-pointers>
                        <e-pointer value=94 :type='type2' :color='color2' :height='height2' :width='width2'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>     
    </div>
<br>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows a thermometer that displays temperature in both degrees and fahrenheit.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a linear gauge to look like a thermometer. More
        information about containers can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/linear-gauge-appearance#customizing-the-linear-gauge-container">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, Annotations } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
        'ejs-dropdownlist': DropDownListComponent,
    },
    data: function () {
        return {
            container: {
                width: 13,
                roundedCornerRadius: 5,
                type: 'Thermometer',
                border: { width: 1 }
            },
            background:'transparent',
            line: {
                width: 0
            },
            labelStyle:{
                font: { fontFamily: 'inherit' }
            },
            majorTicks: {
                interval: 10, height: 7
            },
            minorTicks: {
                height: 0, interval: 5
            },
            height: 12,
            width: 12, 
            color1: '#0074E3',
            placement: 'Center',
            offset: 3,
            markerType: 'Triangle',
            type2: 'Bar',
            color2:'#0074E3',
            height2:13,
            line2: {
                width: 0
            },
            majorTicks2: {
                interval: 20, height: 7
            },
            minorTicks2: {
                height: 0, interval: 5
            },
            opposedPosition: true,
            width2: 13,
            annotations: [
            {
                content: '<div style="font-size:13px;margin-left: -30px;margin-top: -30px;"> \u00b0C </div>',
                axisIndex: 0,
                axisValue: 50,
                x: 0,
                y: 0, zIndex: '1'
            },
            {
                content: '<div style="font-size:13px;margin-left: 15px;margin-top: -30px;"> \u00b0F </div>',
                axisIndex: 1,
                axisValue: 120,
                x: 12,
                y: 0, zIndex: '1'
            }
        ]
        }
    },
    provide: {
    lineargauge: [Annotations]
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
};
</script> 