<template>
<div class="control-section" style="min-height: 290px;">
    <div style="justify-content: center; display: flex; align-items: center;">
        <ejs-lineargauge ref="lineargauge" :background='background' :title='title1' :format='format' :tooltip='tooltip' :dragMove='dragMove' :titleStyle='titleStyle' :load='load' style='display:block' align='center' :height='heightData1' :width='widthData1' id='enableSliderGauge' :orientation='orientation' >
        <e-axes>
            <e-axis :minimum=0 :maximum=100 :line='line1' :majorTicks='majorTicks1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                <e-pointers>
                    <e-pointer :value='value1' :height='height1' :placement='placement1' :width='width1' :color='color1' :offset='offset1' :type='type1' ></e-pointer>
                    <e-pointer :value='value2' :height='height2' :placement='placement2' :width='width2' :color='color2' :offset='offset2' :markerType='markerType2' :enableDrag='enableDrag1' ></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
        </ejs-lineargauge>
    </div> 
    <div style="justify-content: center; display: flex; align-items: center;">
        <ejs-lineargauge  :title='title2' :background='background' :titleStyle='titleStyle' :load='load' style='display:block' align='center' :height='heightData1' :width='widthData1' id='disableSliderGauge' :orientation='orientation'>
            <e-axes>
                <e-axis :minimum=0 :maximum=100 :line='line2' :majorTicks='majorTicks2' :minorTicks='minorTicks2' :labelStyle='labelStyle2' :opposedPosition='opposedPosition'>
                    <e-pointers>
                        <e-pointer :value='value3' :height='height3' :placement='placement3' :width='width3' :color='color3' :offset='offset3' :type='type3' :enableDrag='enableDrag3' ></e-pointer>
                        <e-pointer :value='value4' :height='height4' :placement='placement4' :width='width4' :color='color4' :offset='offset4' :markerType='markerType4' :enableDrag='enableDrag4' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates how to create a slider by utilizing the functionalities available in the
        linear gauge.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a new slider in the linear gauge. This can be
        accomplished by combining axis, range, and pointer. The pointer has been made interactive, so the value changes
        as you drag it.
    </p>
    <p>
        More information on the linear gauge can be found in this
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/">documentation
            section</a>.
    </p>
</div>
</div>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, GaugeTooltip, PointersDirective, PointerDirective} from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
    },
    enableSliderGauge: LinearGaugeComponent,
    data:function(){
    return{
        orientation:"Horizontal",
        opposedPosition:true,
        background:'transparent',
        heightData1:'150px',
        widthData1:'450px',
        format:'N0',
        tooltip: {
        enable: true,
        showAtMousePosition: true,
        textStyle: { fontFamily: 'inherit' }
        },
        value1: 50,
        height1: 5,
        width1: 5,
        placement1: 'Center',
        color1: '#0074E3',
        type1: 'Bar',
        offset1: 12,
        enableDrag1: true,
        value2: 50,
        height2: 15,
        width2: 15,
        placement2: 'Center',
        color2: '#0074E3',
        offset2: -10,
        markerType2: 'Circle',
        line1: {
            width: 5,
            color: '#C2DEF8'
        },
        majorTicks1: { 
            interval: 20,
            height:0
        },
        minorTicks1:{
            interval: 10,
            height:0
        },
        labelStyle1:{
            offset: 10,
            font: { fontFamily: 'inherit' }
        },
        line2: {
            width: 5,
            color: '#E0E0E0'
        },
        value3: 50,
        height3: 5,
        width3: 5,
        placement3: 'Center',
        color3: '#ADADAD',
        type3: 'Bar',
        offset3: 12,
        enableDrag3: false,
        value4: 50,
        height4: 15,
        width4: 15,
        placement4: 'Center',
        color4: '#ADADAD',
        offset4: -10,
        markerType4: 'Circle',
        enableDrag4: false,
        majorTicks2: {
            interval: 20, height: 0
        },
        minorTicks2: {
            interval: 10, height: 0
        },
        labelStyle2: {
            offset: 10,
            font: { fontFamily: 'inherit' }
        },
        title1:'Enabled',
        title2:'Disabled',
        titleStyle:  {
        fontFamily: 'inherit', fontWeight: '499'
        }
      }
    },
    provide: {
        lineargauge: [GaugeTooltip]
    },
    methods: {    
        dragMove: function(args) {
                if (args.pointerIndex == 1) {
                this.$refs.lineargauge.ej2Instances.setPointerValue(0, 0, args.currentValue);
            }
        },
        load: function(args) {
        /* custom code start */
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        /* custom code end */
        }
    }
};
</script>