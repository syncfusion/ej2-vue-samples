<template>
<div>
<div id="dfarcgauge" class="control-section" align="center">
<ejs-circulargauge height="500px" :load='load' title="Female (% usage) on popular social network" :titleStyle='titleStyleOne'>
      <e-axes>
        <e-axis startAngle="0" endAngle="270" minimum=0 maximum=100  :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :labelStyle ='labelStyle' :lineStyle= 'lineStyle' :annotations='annotations' :ranges='ranges'>
          <e-pointers>
          </e-pointers>
        </e-axis>
      </e-axes>
     </ejs-circulargauge>
</div>
<div id="action-description">
    <p>
        This sample shows the arc gauge's default rendering. It also shows the most popular social media platforms and
        the percentage of female users.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a default arc gauge. The arc gauge helps in the visualization of
        numerical values of scales in a semi-circular manner. You can use <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axisModel/">axes</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/">ranges</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotationModel/">annotations</a>
        oriented properties to customize the default appearance of the arc gauge.
    </p>
    <p>
        More information on the arc gauge can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
   data:function(){
    return{
       titleStyleOne:{
          size:'18px',
          fontFamily: 'inherit'
       },
        majorTicks: {
             height: 0,
             width:0
        },
        minorTicks: {
             height: 0,
             width:0
        },
        labelStyle:{
           position: 'Inside',
        font: {
            size: '0px'
        },
        },
        lineStyle:{
          width:0
        },
        ranges: [
        {
          start: 0,
          end: 68,
          color: '#c8eab7',
          radius: '94%',
          startWidth: 22,
          endWidth: 22,
        },
        {
          start: 74,
          end: 100,
          color: '#7a7f82',
          startWidth: 1,
          endWidth: 1,
          radius: '89%',
        },
        {
          start: 0,
          end: 43,
          color: '#82cdbc',
          radius: '80%',
          startWidth: 22,
          endWidth: 22,
        },
        {
          start: 49,
          end: 100,
          color: '#7a7f82',
          startWidth: 1,
          endWidth: 1,
          radius: '75%',
        },
        {
          start: 0,
          end: 21,
          color: '#43b6c4',
          radius: '66%',
          startWidth: 22,
          endWidth: 22,
        },
        {
          start: 28,
          end: 100,
          color: '#7a7f82',
          startWidth: 1,
          endWidth: 1,
          radius: '61%',
        },
        {
          start: 0,
          end: 75,
          color: '#1d91bf',
          radius: '52%',
          startWidth: 22,
          endWidth: 22,
        },
        {
          start: 85,
          end: 100,
          color: '#7a7f82',
          startWidth: 1,
          endWidth: 1,
          radius: '47%',
        },
        {
          start: 0,
          end: 44,
          color: '#205ea8',
          radius: '38%',
          startWidth: 22,
          endWidth: 22,
        },
        {
          start: 55,
          end: 100,
          color: '#7a7f82',
          startWidth: 1,
          endWidth: 1,
          radius: '34%',
        }],
        annotations: [
            {
            content: '<div class="titleText" style="color:#c8eab7;">YouTube</div>',
            angle: 344,
            radius: '94%',
            zIndex: '1',
            },
            {
              content: '<div class="titleText" style="color:#82cdbc;">Instagram</div>',
              angle: 340,
              radius: '81%',
              zIndex: '1',
            },
            {
              content: '<div class="tiktokText" style="color:#43b6c4;">Twitter</div>',
              angle: 340,
              radius: '66%',
              zIndex: '1',
            },
            {
              content: '<div class="titleText" style="color:#1d91bf;">Facebook</div>',
              angle: 332,
              radius: '55%',
              zIndex: '1',
            },
            {
              content: '<div class="tiktokText" style="color:#205ea8;">TikTok</div>',
              angle: 328,
              radius: '40%',
              zIndex: '1',
            },
            {
              content: '<div class="annotation">68%</div>',
              angle: 191,
              radius: '89%',
              zIndex: '1',
            },
            {
              content: '<div class="annotation">43%</div>',
              angle: 125,
              radius: '75%',
              zIndex: '1',
            },
            {
              content: '<div class="annotation">21%</div>',
              angle: 67,
              radius: '62%',
              zIndex: '1',
            },
            {
              content: '<div class="annotation">75%</div>',
              angle: 215,
              radius: '48%',
              zIndex: '1',
            },
            {
              content: '<div class="annotation">44%</div>',
              angle: 133,
              radius: '33%',
              zIndex: '1',
            }], 
        }
    },
    provide: {
        circulargauge: [Annotations]
    },
    methods: {
        load: function(args) {
        /* custom code start */
          let selectedTheme = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.gauge.theme =
            (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (selectedTheme.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
          args.gauge.axes[0].annotations[0].angle = 342;
          args.gauge.axes[0].annotations[0].radius = "92%";
          args.gauge.axes[0].annotations[1].angle = 337;
          args.gauge.axes[0].annotations[1].radius = "80%";
          args.gauge.axes[0].annotations[2].angle = 337;
          args.gauge.axes[0].annotations[2].radius = "65%";
          args.gauge.axes[0].annotations[3].angle = 326;
          args.gauge.axes[0].annotations[3].radius = "55%";
          args.gauge.axes[0].annotations[4].angle = 323;
          args.gauge.axes[0].annotations[4].radius = "39%";
          args.gauge.axes[0].annotations[5].angle = 192;
          args.gauge.axes[0].annotations[5].radius = "91%";
          args.gauge.axes[0].annotations[9].angle = 136;
          args.gauge.axes[0].annotations[9].radius = "34%";
        }
        /* custom code end */
        }
    }
})
</script>
<style>
    #dfarcgauge .titleText {
        font-family:inherit;
        font-size: 22px;
        margin-top: 3px;
        margin-left: -18px;
    }

    .e-view.tailwind div#dfarcgauge .titleText,
    .e-view.tailwind-dark div#dfarcgauge .titleText {
        font-size: 22px;
        margin-top: -5px;
        margin-left: -18px;
    }
    #dfarcgauge .tiktokText {
        font-family:inherit;
        font-size: 22px;
        margin-top: 3px;
        margin-left: -10px;
    }

    .e-view.tailwind div#dfarcgauge .tiktokText,
    .e-view.tailwind-dark div#dfarcgauge .tiktokText {
        font-size: 22px;
        margin-top: -5px;
    }
    #dfarcgauge .annotation {
        font-family:inherit;
        font-size: 18px;
        margin-left: -3px;
    }

    @media screen and (max-width: 420px) {
        #dfarcgauge .tiktokText {
          font-family:inherit;
          font-size: 15px;
          margin-top: 6px;
          margin-left: -7px;
        }
        #dfarcgauge .titleText {
            font-size: 15px;
            margin-top: 7px;
            margin-left:-7px;
        }

        #dfarcgauge .annotation {
            font-size: 13px;
            margin-top: -4px;
            margin-left: 2px;
        }

        .e-view.tailwind div#dfarcgauge .titleText,
        .e-view.tailwind-dark div#dfarcgauge .titleText {
            font-size: 15px;
            margin-top: -3px;
            margin-left:-7px;
        }
        .e-view.tailwind div#dfarcgauge .tiktokText,
        .e-view.tailwind-dark div#dfarcgauge .tiktokText {
            font-size: 15px;
            margin-top: -2px;
            margin-left:-7px;
        }
    }
</style>
