<template>
   <main><div class="control-section" id="lineargauge-volume-settings">
        <div style="display: flex; justify-content: center;padding-top: 12px;">
            <div style="padding:6px">
                <ejs-lineargauge :load='loadMusic' :background='background' :container='container' :annotations='annotations1' style='display:block'  :width='widthData' :height='heightData' align='center' id='defaultContainer' :orientation='orientation'>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :line='line' :minorTicks='minorTicks' :labelStyle='labelStyleMusic' >
                        <e-pointers>
                            <e-pointer :value='value' :width='width' :color='pointerColor' :offset='offset' :roundedCornerRadius='roundedCornerRadius' :position='position' :type='type' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
                </ejs-lineargauge>
            </div>
        <div style="padding:6px">
            <ejs-lineargauge :load='loadBell' :background='background' :container='container' :annotations='annotations2' style='display:block'  :width='widthData' :height='heightData' align='center' id='defaultContainer1' :orientation='orientation'>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :line='line' :minorTicks='minorTicks' :labelStyle='labelStyleBell' >
                        <e-pointers>
                            <e-pointer :value=85 :width='width' :color='pointerColor' :offset='offset' :roundedCornerRadius='roundedCornerRadius' :position='position' :type='type' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
        <div style="padding:6px">
            <ejs-lineargauge :load='loadClock' :background='background' :container='container' :annotations='annotations3' style='display:block'  :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :line='line'  :minorTicks='minorTicks' :labelStyle='labelStyleClock' >
                        <e-pointers>
                            <e-pointer :value=65 :width='width' :color='pointerColor' :offset='offset' :roundedCornerRadius='roundedCornerRadius' :position='position' :type='type' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample demonstrates volume adjustments made for music/video and alarm clock applications.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure a linear gauge to look like a sound tracker. This can
        be accomplished by combining axis, pointer and annotation.
    </p>
    <p>
        More information on the linear gauge can be found in this 
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
/* custom code start */
<style>
  #control-container {
        padding: 0px !important;
    }
    .sf-icon-music:before {
        content: "\e701";
    }
    @font-face {
        font-family: 'font-v1';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    #lineargauge-volume-settings .sf-icon-clock:before  {
        content: "\e702";
    }
    #lineargauge-volume-settings .sf-icon-tick:before {
        content: "\e704";
    }
    #lineargauge-volume-settings .sf-icon-bell:before {
        content: "\e706";
    }
   #lineargauge-volume-settings [class^="sf-icon-"],
    #lineargauge-volume-settings [class*=" sf-icon-"] {
        font-family: 'font-v1' !important;
        color: white;
        speak: none;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-left: 40%;
        margin-top: 70%;
    }
</style>
 /* custom code end */
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective, Annotations } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective,
    },
    data:function(){
    return{
        orientation:'Vertical',
        widthData:'60px',
        heightData:'350px',
        line: {
            width: 0
        },
        value: 100,
        background:'transparent',
        width: 30,
        pointerColor: '#0074E3',
        type: 'Bar',
        position: 'Cross',
        roundedCornerRadius: 15,
        offset: -15,
        majorTicks: {
            interval: 20,
            height: 0
        },
        minorTicks: {
            interval: 10, height: 0
        },
        labelStyleMusic: {
            format:'Music {value} %',
            font: { size: '0px' }
        },
        labelStyleBell: {
            format:'Bell {value} %',
            font: { size: '0px' }
        },
        labelStyleClock: {
            format:'Clock {value} %',
            font: { size: '0px' }
        },
        container: {
          width: 30, roundedCornerRadius: 15, type: 'RoundedRectangle', border: { width: 1 }, backgroundColor: 'transparent'
        },
        annotations1:[{
        axisIndex: 0, axisValue: 100, x: 1, y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-music" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }
        ],
        annotations2: [{
        axisIndex: 0, axisValue: 100, x: 1, y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-bell" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }],
        annotations3:[{
        axisIndex: 0, axisValue: 100, x: 0, y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-clock" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }]       
      }
    },
    provide: {
        lineargauge: [Annotations]
    },
    methods: {    
        loadMusic: function(args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
            /* custom code end */
            if(args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ) {
                args.gauge.annotations[0].content ='<div style="width: 70px;font-size: 16px;margin-left:35px;margin-top: -31px;color:#FFFFFF;font-family:inherit"> 100%</div>';
            }
            else {
                args.gauge.annotations[0].content ='<div style="width: 70px;font-size: 16px;margin-left:35px;margin-top: -31px;color:#000000;font-family:inherit"> 100%</div>';
            }
        },
        loadBell: function(args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
            /* custom code end */
            if(args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ) {
                args.gauge.annotations[0].content = '<div style="width: 70px;font-size: 16px;margin-left:38px;margin-top: -31px;color:#FFFFFF;font-family:inherit"> 85%</div>';
            }
            else {
                args.gauge.annotations[0].content = '<div style="width: 70px;font-size: 16px;margin-left:38px;margin-top: -31px;color:#000000;font-family:inherit"> 85%</div>';
            }        
        },
        loadClock: function(args) {
        /* custom code start */
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
        /* custom code end */
        if(args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ) {
            args.gauge.annotations[0].content = '<div style="width: 70px;font-size: 16px;margin-left: 37px;margin-top: -31px;color:#FFFFFF;font-family:inherit">65%</div>';   
        }
        else {
            args.gauge.annotations[0].content = '<div style="width: 70px;font-size: 16px;margin-left: 37px;margin-top: -31px;color:#000000;font-family:inherit">65%</div>';   
        }
      }
    }
};
</script>