<template>
<div class="control-section">
    <div class="row">
         <div class="col-lg-12 col-md-12">
                <div class="row">
                    <div class="col-lg-9 col-md-9" id="column1" style="margin-left: -5%">
                        <ejs-circulargauge ref="circulargauge" style='display:block' align='center' id='gauge1' :load='load' width ='400px' height ='400px' >
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
                            <e-pointers>
                                 <e-pointer :roundedCornerRadius=25 value=65 radius='90%' color='#E2011A' :type='type' :pointerWidth=40></e-pointer>
                                 <e-pointer :roundedCornerRadius=25 value=43 radius='68%' color='#3FE000' :type='type' :pointerWidth=40></e-pointer>
                                 <e-pointer :roundedCornerRadius=25 value=58 radius='46%' color='#00C9E6' :type='type' :pointerWidth=40></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                    </div>
                    <div class="col-lg-3 col-md-3" style="height:400px;margin-left: -9%">
                    <div>
                     <div class="panel">
                      <div style="float:left;">
                        <ejs-circulargauge ref="circulargauge1" style='display:block:height:250px' align='center' id='gauge2' :load='load1' width ='65px' height ='65px' >
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations_1' :ranges='ranges_1'>
                            <e-pointers>
                                 <e-pointer :roundedCornerRadius=5 value=65 radius='100%' color='#E2011A' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                </div>                
                <div class="subgauge" style="margin-top: 3%"> 
                <span class="firstcontent" style="font-size: 18px;">MOVE</span>
                <span class="firstcontent" style="font-size: 18px;color: #f4104d">65%</span><br/>
                <span class="secondcontent" style="color: #f4104d; font-size: 19px">338/520 CAL</span>                
                </div>
                </div>
                </br>

                <div class="panel">
                      <div style="float:left;">
                         <ejs-circulargauge ref="circulargauge2" style='display:block' align='center' id='gauge3' :load='load2' width ='65px' height ='65px' >
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations_2' :ranges='ranges_2'>
                            <e-pointers>
                                 <e-pointer :roundedCornerRadius=5 value=43 radius='100%' color='#3FE000' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                </div>                
                <div class="subgauge" style="margin-top: 3%"> 
                 <span class="firstcontent" style="font-size: 18px;">EXERCISE</span>
                        <span class="firstcontent" style="font-size: 18px;color: #a6ff00">43%</span><br/>
                        <span class="secondcontent" style="color: #a6ff00; font-size: 19px">13/30 MIN</span>               
                </div>
                </div>
                <br/>

                 <div class="panel">
                      <div style="float:left;">
                         <ejs-circulargauge ref="circulargauge3" style='display:block' align='center' id='gauge4' :load='load3' width ='65px' height ='65px' >
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations_3' :ranges='ranges_3'>
                            <e-pointers>
                                 <e-pointer :roundedCornerRadius=5 value=58 radius='100%' color='#00C9E6' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                </div>                
                <div class="subgauge" style="margin-top: 3%"> 
                 <span class="firstcontent" style="font-size: 18px;">STAND</span>
                        <span class="firstcontent" style="font-size: 18px;color: #29a5a2">58%</span><br/>
                        <span class="secondcontent" style="color: #29a5a2; font-size: 19px">7/12 HR</span>             
                </div>
                </div>

                

                                   
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div id="action-description">
    <p>
        This sample resembles the appearance of Apple watch rings. This functions similar to an activity tracker that denotes the move, exercise, and stand details.
   </p>
</div>
<div id="description">
    <p>
    In this example, you can see how to make the circular gauge look like the Apple watch rings. Ranges are rendered with rounded corners and annotations are placed to denote the move, exercise, and stand values.
    </p>
    <p>
    For more information on ranges, refer to this <a target="_blank" href="https://ej2.syncfusion.com/documentation/circular-gauge/gauge-ranges">documentation section</a>.
    </p>
</div>
        </div>
</template>
 <style>    
   .panel {
        width: 105% !important;
        height: 80px !important;
        margin-left: 5% !important;
        margin-top: 15% !important;
        border-color: lightgray;
        float: left;
        background-color: transparent;
    }

    .content {
        float: left !important;
        margin-left: 62px !important;
        margin-top: 6% !important;
        text-align: left !important;
        position: absolute;
    }

    @media screen and (max-width: 1160px) {
        .panel {
            width: 115% !important;
        }

        .firstcontent {
            font-size: 13px !important;
        }

        .secondcontent {
            font-size: 15px !important;
        }
    }

    @media screen and (max-width: 990px) {
        .panel {
            width: 50% !important;
            height: 80px !important;
            margin-left: 27% !important;
            margin-top: 0% !important;
        }

        .subgauge {
            margin-left: 8% !important;
            margin-top: 1% !important;
        }

        .content {
            margin-left: 18% !important;
            margin-top: 2% !important;
        }

        .firstcontent {
            font-size: 16px !important;
        }

        .secondcontent {
            font-size: 18px !important;
        }
    }    

    @media screen and (max-width: 410px) {
        #column1 {
            margin-left: -9% !important;
        }

        .subgauge {
            margin-left: 3% !important;
        }

        .panel {
            width: 55% !important;
        }

        .content {
            margin-top: 3% !important;
        }
    }
</style>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { SliderPlugin,SliderChangeEventArgs, Slider } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
Vue.use(CircularGaugePlugin);

let annotationTemplate_1 = '<div id="annotation1"><img style="width:22px;height:22px;" src="src/circular-gauge/images/image1.svg" /></div>';
let annotationTemplate_2 = '<div id="annotation2"><img style="width:20px;height:20px;" src="src/circular-gauge/images/image2.svg" /></div>';
let annotationTemplate_3 = '<div id="annotation3"><img style="width:22px;height:22px;" src="src/circular-gauge/images/image3.svg" /></div>';
let annotationTemplate_4 = '<div id="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image1.svg" /></div>';
let annotationTemplate_5 = '<div id="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image2.svg" /></div>';
let annotationTemplate_6 = '<div id="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image3.svg" /></div>';

let annotationTemplate_7 = '<div id="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image4.svg" /></div>';
let annotationTemplate_8 = '<div id="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image5.svg" /></div>';
let annotationTemplate_9 = '<div id="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image6.svg" /></div>';

export default Vue.extend({
   data:function(){
    return{
            startAngle: 0,
            endAngle: 360,
            majorTicks: {
                width: 0
            },
            lineStyle:  { width: 0 },
            minorTicks: {
                width: 0
            },
             labelStyle: {
                position: 'Inside', useRangeColor: true,
                font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
            color:  '#e5ce20',
            annotations_1: [{
                angle: 0, radius: '0%', zIndex: '1',
                content: annotationTemplate_4
            }],
            annotations_2: [{
                angle: 0, radius: '0%', zIndex: '1',
                content: annotationTemplate_5
            }],
            annotations_3: [{
                angle: 0, radius: '0%', zIndex: '1',
                content: annotationTemplate_6
            }],
            ranges_1: [
                    {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#E30219', opacity: 0.2
            }],
            ranges_2: [
                   {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#3EDE00', opacity: 0.2
            }],
            ranges_3: [
                   {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#18F8F6', opacity: 0.2
            }],
            annotations: [{
                  angle: 8, radius: '80%', zIndex: '1',
                content: annotationTemplate_1
            },{
                  angle: 11, radius: '58%', zIndex: '1',
                content: annotationTemplate_2
            },{
                 angle: 16, radius: '36%', zIndex: '1',
                content: annotationTemplate_3
            }
            ],
            titleStyle: { size: '18px', },
            ranges: [
                    {
                start: 0, end: 100,
                radius: '90%',
                startWidth: 40, endWidth: 40,
                color: '#E30219', opacity: 0.2
            },
            {
                start: 0, end: 100,
                radius: '68%',
                startWidth: 40, endWidth: 40,
                color: '#3EDE00', opacity: 0.2
            },
            {
                start: 0, end: 100,
                radius: '46%',
                startWidth: 40, endWidth: 40,
                color: '#18F8F6', opacity: 0.2
            }
            ],
            type: 'RangeBar'
    }
   },
   provide:{
    circulargauge: [Annotations]
},
methods: {
    /* custom code start */
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /*custom code end */
    load1: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
         if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_7;
        }
    },
    load2: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_8;
        }
    },
    load3: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_9;
        }
    }
}
})
</script>

