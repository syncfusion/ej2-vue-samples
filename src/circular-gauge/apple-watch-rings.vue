<template>
<main><div class="control-section">
    <div class="row">
         <div class="col-lg-12 col-md-12">
                <div class="row">
                    <div class="col-lg-9 col-md-9" id="column1" style="margin-left: -5%">
                        <ejs-circulargauge ref="circulargauge" :background='background' style='display:block' align='center' id='gauge1' :load='load' width ='400px' height ='400px' >
                            <template v-slot:mainOneTemplate="{}">
                                <div class="annotation1"><img style="width:22px;height:22px;" alt="Red arrow" src="./images/image1.svg" /></div>
                            </template>
                            <template v-slot:mainTwoTemplate="{}">
                                <div class="annotation2"><img style="width:20px;height:20px;" alt="Green arrow" src="./images/image2.svg" /></div>
                            </template>
                            <template v-slot:mainThreeTemplate="{}">
                                <div class="annotation3"><img style="width:22px;height:22px;" alt="Blue arrow" src="./images/image3.svg" /></div>
                            </template>
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :ranges='ranges'>
                            <e-annotations>
                                <e-annotation description='The Gauge is indicated with a red arrow' angle='8' radius='80%' zIndex='1' :content="'mainOneTemplate'"></e-annotation>
                                <e-annotation description='The Gauge is indicated with a green arrow' angle='11' radius='58%' zIndex='1' :content="'mainTwoTemplate'"></e-annotation>
                                <e-annotation description='The Gauge is indicated with a blue arrow' angle='16' radius='36%' zIndex='1' :content="'mainThreeTemplate'"></e-annotation>
                            </e-annotations>
                            <e-pointers>
                                 <e-pointer description='RangeBar pointer value :65' :roundedCornerRadius=25 value=65 radius='90%' color='#fa114f' :type='type' :pointerWidth=40></e-pointer>
                                 <e-pointer description='RangeBar pointer value :43' :roundedCornerRadius=25 value=43 radius='68%' color='#99ff01' :type='type' :pointerWidth=40></e-pointer>
                                 <e-pointer description='RangeBar pointer value :58' :roundedCornerRadius=25 value=58 radius='46%' color='#00d8fe' :type='type' :pointerWidth=40></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                    </div>
                    <div class="col-lg-3 col-md-3" style="height:400px;margin-left: -9%;margin-top: 2%;">
                    <div>
                     <div class="panel">
                      <div style="float:left;">
                        <ejs-circulargauge ref="circulargauge1" :background='background' style='display:block:height:250px; margin-top: 5px' align='center' id='gauge2' :load='load1' width ='65px' height ='65px' >
                        <template v-slot:oneTemplate="{}">
                            <div class="annotation4"><img alt="Arrow placed within the small red gauge" style="width:17px;height:17px;" src="./images/image1.svg" /></div>
                        </template>
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyleSmallRed' :ranges='ranges_1'>
                            <e-annotations>
                                <e-annotation description='The small gauge is indicated with a green arrow' angle='0' radius='0%' zIndex='1' :content="'oneTemplate'"></e-annotation>
                            </e-annotations>
                            <e-pointers>
                                 <e-pointer description='RangeBar pointer value: 65' :roundedCornerRadius=5 value=65 radius='100%' color='#fa114f' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                </div>                
                <div class="subgauge" style="margin-top: 10px"> 
                <span class="firstcontent" style="font-size: 18px;">MOVE</span>
                <span class="firstcontent" style="font-size: 18px;color: #fa114f;"> 65%</span><br/>
                <span class="secondcontent" style="color: #fa114f; font-size: 19px">338/520 CAL</span>                
                </div>
                </div>
                <br>                
                <div class="panel">
                      <div style="float:left;">
                         <ejs-circulargauge ref="circulargauge2" style='display:block; margin-top: 5px;' align='center' id='gauge3' :load='load2' width ='65px' height ='65px' >
                         <template v-slot:twoTemplate="{}">
                             <div class="annotation5"><img alt="Arrow placed within the small green gauge" style="width:15px;height:15px;" src="./images/image2.svg" /></div>
                         </template>
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyleSmallGreen' :ranges='ranges_2'>
                            <e-annotations>
                                <e-annotation description='The small gauge is indicated with a blue arrow' angle='0' radius='0%' zIndex='1' :content="'twoTemplate'"></e-annotation>
                            </e-annotations>
                            <e-pointers>
                                 <e-pointer description='RangeBar pointer value:43' :roundedCornerRadius=5 value=43 radius='100%' color='#99ff01' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                </div>                
                <div class="subgauge" style="margin-top: 10px"> 
                 <span class="firstcontent" style="font-size: 18px;">EXERCISE</span>
                        <span class="firstcontent" style="font-size: 18px;color: #99ff01"> 43%</span><br/>
                        <span class="secondcontent" style="color: #99ff01; font-size: 19px">13/30 MIN</span>               
                </div>
                </div>
                <br/>
                 <div class="panel">
                      <div style="float:left;">
                         <ejs-circulargauge ref="circulargauge3" style='display:block; margin-top: 5px;' align='center' id='gauge4' :load='load3' width ='65px' height ='65px' >
                        <template v-slot:threeTemplate={}>
                            <div class="annotation6"><img alt="Arrow placed within the small blue gauge" style="width:17px;height:17px;" src="./images/image3.svg" /></div>
                        </template>
                    <e-axes>
                        <e-axis :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyleSmallBlue' :ranges='ranges_3'>
                            <e-annotations>
                                <e-annotation angle='0' radius='0%' zIndex='1' :content="'threeTemplate'"></e-annotation>
                            </e-annotations>
                            <e-pointers>
                                 <e-pointer description='RangeBar pointer value:58' :roundedCornerRadius=5 value=58 radius='100%' color='#00d8fe' :type='type' :pointerWidth= 8></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-circulargauge>
                     </div>                
                        <div class="subgauge" style="margin-top: 10px"> 
                            <span class="firstcontent" style="font-size: 18px;">STAND</span>
                            <span class="firstcontent" style="font-size: 18px;color: #00d8fe"> 58%</span><br/>
                            <span class="secondcontent" style="color: #00d8fe; font-size: 19px">7/12 HR</span>             
                        </div>
                        </div>           
                     </div>
                </div>    
             </div>
           </div>
        </div>
    </div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample resembles the appearance of Apple watch rings. This is similar to an activity tracker, which records
        the specifics of each move, exercise, and stand.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to make the circular gauge look like the Apple watch rings. Ranges have rounded
        corners and annotations are used to indicate the move, exercise, and stand values.
    </p>
    <p>
        More information on the annotations can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-annotations/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
 <style scoped>    
   .panel {
        width: 190px !important;
        height: 70px !important;
        margin-left: 5% !important;
        margin-top: 10% !important;
        border-color: lightgray;
        float: left;
        background-color: transparent;
    }

    .content {
        float: left !important;
        margin-left: 62px !important;
        margin-top: 10px !important;
        text-align: left !important;
        position: absolute;
        width: 120px;
    }

    @media screen and (max-width: 1160px) {
        .panel {
            width: 165px !important;
        }

        .firstcontent {
            font-size: 13px !important;
        }

        .secondcontent {
            font-size: 15px !important;
        }
        .content {
            margin-top: 15px !important;
        }

        .divide {
            margin-left: 0%;
        }
    }

    @media screen and (max-width: 990px) {
        .panel {
            width: 40% !important;
            height: 80px !important;
            margin-left: 27% !important;
            margin-top: 0% !important;  
        }

        .subgauge {
            margin-left: 8% !important;
            margin-top: 5% !important;
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

    @media screen and (max-width: 700px) {
        .subgauge {
            margin-left: 8% !important;
            margin-top: 6% !important;
        }
    }   
    @media screen and (max-width: 600px) {
        .subgauge {
            margin-left: 8% !important;
            margin-top: 6% !important;
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
            width: 52% !important;
        }

        .content {
            margin-top: 3% !important;
        }
    }
</style>
<style>
 .e-view.tailwind div.annotation4, .e-view.tailwind-dark div.annotation4 {
     margin-top: -3px; margin-left: 2px
 }
 .e-view.fabric div.annotation4, .e-view.fabric-dark div.annotation4 {
    margin-top: -4px;
    margin-left: 2px 
 }
  .e-view.tailwind div.annotation5, .e-view.tailwind-dark div.annotation5, .e-view.fabric div.annotation5, .e-view.fabric-dark div.annotation5  {
     margin-top: -4px; margin-left: 1px;
 }
 .e-view.tailwind div.annotation6, .e-view.tailwind-dark div.annotation6, .e-view.fabric div.annotation6, .e-view.fabric-dark div.annotation6 {
     margin-top: -6px;
 }
 .e-view.bootstrap5 div.annotation4, .e-view.bootstrap5-dark div.annotation4 {
     margin-left: 2px
 }
 .e-view.bootstrap5 div.annotation5, .e-view.bootstrap5-dark div.annotation5 {
     margin-left: 1px
 }
 .e-view.bootstrap5 div.annotation6, .e-view.bootstrap5-dark div.annotation6 {
     margin-top: -1px; margin-left: 1px;
 }

 .e-view.material div.annotation4, .e-view.material-dark div.annotation4, .e-view.bootstrap div.annotation4, .e-view.bootstrap-dark div.annotation4,
  .e-view.bootstrap4 div.annotation4{
      margin-left: 2px; margin-top: 2px;
 }

 .e-view.highcontrast div.annotation4  {
     margin-left: 2px; margin-top: 1px;
 }
 
 .e-view.material div.annotation5, .e-view.material-dark div.annotation5, .e-view.bootstrap div.annotation5, .e-view.bootstrap-dark div.annotation5,
  .e-view.bootstrap4 div.annotation5, .e-view.highcontrast div.annotation5 {
      margin-top: 2px;
      margin-left: 1px;
 }

</style>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { SliderComponent,SliderChangeEventArgs, Slider } from "@syncfusion/ej2-vue-inputs";

let annotationTemplate_7 = '<div class="annotation4"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image4.svg" /></div>';
let annotationTemplate_8 = '<div class="annotation5"><img style="width:15px;height:15px;" src="src/circular-gauge/images/image5.svg" /></div>';
let annotationTemplate_9 = '<div class="annotation6"><img style="width:17px;height:17px;" src="src/circular-gauge/images/image6.svg" /></div>';

export default {
   data:function(){
    return{
            startAngle: 0,
            background:'transparent',
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
			labelStyleSmallRed: {
			    format: 'Red {value}',
                position: 'Inside', useRangeColor: true,
                font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
			labelStyleSmallGreen: {
			    format: 'Green {value}',
                position: 'Inside', useRangeColor: true,
                font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
			labelStyleSmallBlue: {
			    format: 'Blue {value}',
                position: 'Inside', useRangeColor: true,
                font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
            color:  '#e5ce20',
            ranges_1: [
                    {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#fa114f', opacity: 0.2
            }],
            ranges_2: [
                   {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#99ff01', opacity: 0.2
            }],
            ranges_3: [
                   {
                start: 0, end: 100,
                radius: '100%',
                startWidth: 8, endWidth: 8,
                color: '#00d8fe', opacity: 0.2
            }],
            titleStyle: { size: '18px', },
            ranges: [
                    {
                start: 0, end: 100,
                radius: '90%',
                startWidth: 40, endWidth: 40,
                color: '#fa114f', opacity: 0.2
            },
            {
                start: 0, end: 100,
                radius: '68%',
                startWidth: 40, endWidth: 40,
                color: '#99ff01', opacity: 0.2
            },
            {
                start: 0, end: 100,
                radius: '46%',
                startWidth: 40, endWidth: 40,
                color: '#00d8fe', opacity: 0.2
            }
            ],
            type: 'RangeBar'
    }
   },
   provide:{
    circulargauge: [Annotations]
},
    components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective,
    'ejs-slider': SliderComponent
   },
methods: {
    load: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
      /*custom code end */
    },
    load1: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
       (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
         if (selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1) {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_7;
        }
      /*custom code end */
    },
    load2: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
        if (selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1) {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_8;
        }
      /*custom code end */
    },
    load3: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
        if (selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1) {
            args.gauge.axes[0].annotations[0].content = annotationTemplate_9;
        }
      /*custom code end */
    }
}
}
</script>

