<template>
<main><div id="kpiarcgauge">
<div class="control-section" >
    <ejs-circulargauge id="keyperform" :load='load'>
       <e-axes>
         <e-axis startAngle="220" endAngle="140" radius='90%'  :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :labelStyle ='labelStyle' :lineStyle= 'lineStyle' :annotations='annotationsThree' :ranges='rangesThree' :pointers='pointersThree'>
         </e-axis>
       </e-axes>
    </ejs-circulargauge>
</div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample shows an arc gauge with a key performance indicator (KPI), which is a measurable value that shows
        how an organization meets key business objectives.
   </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render an arc gauge showing key performance indicator (KPI). You can use <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axisModel/">axes</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/">ranges</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/">pointers</a> and
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotationModel/">annotations</a>
        oriented properties to customize the appearance of the arc gauge, in order to achieve the desired outcome.
    </p>
    <p>
        More information on the arc gauge can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/">documentation section</a>.
    </p>
</section>
</main>
</template>
<style>
    #keyperform_Annotations_0 {
            line-height: 0.5;
    }
    #kpiarcgauge .triangle-up {
        width: 20;
        height: 20;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #84cbb5;
        margin-top: -28px;
        margin-left: -10px;
    }

    #kpiarcgauge .text {
        font-family:inherit;
        font-size: 30px;
        text-align: center;
        margin-left: -25px;
        margin-top: -10px;
    }

    #kpiarcgauge .percentage {
        font-family:inherit;
        font-size: 44px;
        text-align: center;
        margin-left: -46px;
        margin-top: -22px;
    }
    .e-view.tailwind div#kpiarcgauge .triangle-up, .e-view.tailwind-dark div#kpiarcgauge .triangle-up {
      margin-top: -6px;
    }
    .e-view.tailwind div#kpiarcgauge .text, .e-view.tailwind-dark div#kpiarcgauge .text {
       margin-top: 0px;
    }
    .e-view.material div#kpiarcgauge .triangle-up, .e-view.material-dark div#kpiarcgauge .triangle-up,
    .e-view.bootstrap-dark div#kpiarcgauge .triangle-up,
    .e-view.bootstrap div#kpiarcgauge .triangle-up,
    .e-view.bootstrap4 div#kpiarcgauge .triangle-up {
        width: 20;
        height: 20;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #84cbb5;
        margin-top: -31px;
    }

    @media screen and (max-width: 420px) {
        #kpiarcgauge .text {
            font-size: 20px;
            text-align: center;
            margin-left: -6px;
        }

        #kpiarcgauge .percentage {
            font-size: 25px;
            text-align: center;
            margin-left: -25px;
        }

        #kpiarcgauge .triangle-up {
            width: 20;
            height: 20;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 20px solid #84cbb5;
            margin-top: -30px;
        }

        .e-view.tailwind div#kpiarcgauge .text, .e-view.tailwind-dark div#kpiarcgauge .text {
          margin-top: 0px;
          margin-left: -6px;
        }

        .e-view.tailwind div#kpiarcgauge .percentage, .e-view.tailwind-dark div#kpiarcgauge .percentage {
          margin-left: -25px;
          margin-top: -22px;
        }

        .e-view.tailwind div#kpiarcgauge .triangle-up, .e-view.tailwind-dark div#kpiarcgauge .triangle-up {
          margin-top: -15px;
        }
       
        .e-view.material div#kpiarcgauge .percentage,
        .e-view.material-dark div#kpiarcgauge .percentage,
        .e-view.bootstrap-dark div#kpiarcgauge .percentage,
        .e-view.bootstrap div#kpiarcgauge .percentage,
        .e-view.bootstrap4 div#kpiarcgauge.percentage {
            margin-left: -25px;
            margin-top: -22px;
        }

        .e-view.material div#kpiarcgauge .triangle-up,
        .e-view.material-dark div#kpiarcgauge .triangle-up,
        .e-view.bootstrap-dark div#kpiarcgauge .triangle-up,
        .e-view.bootstrap div#kpiarcgauge .triangle-up,
        .e-view.bootstrap4 div#kpiarcgauge.triangle-up {
            width: 20;
            height: 20;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 20px solid #84cbb5;
            margin-top: -33px;
        }
    }
</style>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, Annotations, Gradient } from "@syncfusion/ej2-vue-circulargauge";

export default {
   components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective
   },
   data:function(){
    return{
        majorTicks: {
             height: 0,
             width:0
        },
        minorTicks: {
             height: 0,
             width:0
        },
        labelStyle:{
           format:'{value} %',
           position: 'Inside',
        font: {
            size: '0px'
        },
        },
        lineStyle:{
          width:0
        },
        annotationsThree: [
        {
            description:'Triangle',
            content: '<div class="triangle-up"></div>',
            angle: 259,
            zIndex: '1',
            radius: '36%',
        },
        {
          description:'Current',
          content:
            '<div class="text" style="color:#84cbb5;">Current</div>',
          angle: 0,
          zIndex: '1',
          radius: '25%',
        },
        {
          description:'76.6%',
          content:
            '<div class="percentage" style="color:#84cbb5;">76.6%</div>',
          angle: 125,
          zIndex: '1',
          radius: '12%',
        },
        {
          description:'0',
          content:
            '<div style="font-size:22px;font-family:inherit;">0</div>',
          angle: 213,
          zIndex: '1',
          radius: '83%',
        },
        {
          description:'100',
          content:
            '<div style="font-size:22px;font-family:inherit;">100</div>',
          angle: 150,
          zIndex: '1',
          radius: '83%',
        },
      ],
      pointersThree: [
        {
            type: 'Marker',
            markerShape: 'Circle',
            markerWidth: 30,
            markerHeight: 30,
            animation:{
              enable:false
            },
            radius: '82%',
            color: '#bdbdbf',
            value: 30,
            },
            {
              type: 'Marker',
              markerShape: 'Circle',
              markerWidth: 30,
              markerHeight: 30,
              animation:{
                enable:false
              },
              radius: '82%',
              color: '#626866',
              value: 50,
            },
            {
              type: 'Marker',
              markerShape: 'InvertedTriangle',
              markerWidth: 30,
              markerHeight: 30,
              radius: '92%',
              color: '#b6b6b6',
              value: 76.6,
            },
      ],
      rangesThree: [
        {
            start: 0,
            end: 100,
            startWidth: 30,
            endWidth: 30,
            roundedCornerRadius:20,
            color: '#e3e3e3',
            radius: '90%',
            },
            {
              start: 30,
              end: 50,
              startWidth: 30,
              endWidth: 30,
              linearGradient: {
                startValue: '0%',
                endValue: '60%',
                colorStop: [
                  { color: 'white', offset: '10%', opacity: 0.9 },
                  { color: '#84cbb5', offset: '90%', opacity: 0.9 },
                ],
              },
              radius: '90%',
            },
        ], 
    }
   },
   provide: {
        circulargauge: [Annotations, Gradient]
   },
   methods: {
        load: function(args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
            if (selectedTheme.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
              args.gauge.axes[0].annotations[0].angle = 92;
              args.gauge.axes[0].annotations[0].radius = "-40%";
              args.gauge.axes[0].annotations[1].angle = 170;
              args.gauge.axes[0].annotations[1].radius = "-29%";
              args.gauge.axes[0].annotations[2].angle = 148;
              args.gauge.axes[0].annotations[2].radius = "12%";
            }
            /* custom code end */
        }
    }
}
</script>

