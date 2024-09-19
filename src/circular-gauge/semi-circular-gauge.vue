<template>
    <main><div>
      <div class="col-md-8 control-section">
        <div class="content-wrapper" align='center'>
            <ejs-circulargauge ref="circulargauge" :background='background' style='display:block' align='center' :load='load' id='semi-container' :moveToCenter='false' :centerX='centerX' :centerY='centerY'>
                <e-axes>
                    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius1' :hideIntersectingLabel='true' minimum=0 maximum=100 >
                        <e-pointers>
                           <e-pointer :value='value' :radius='pointerRadius' :pointerWidth='pointerWidth' :animation='animation' :cap='cap' :needleTail="needleTail"></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
      </div>
    </div>
    <br>
    <div class="col-md-4 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -20px;">
          <colgroup>
             <col span="1" style="width: 50%;">
             <col span="1" style="width: 30%;">
             <col span="1" style="width: 20%;">
          </colgroup>
          <tbody>
            <tr style="height: 50px">
                <td>
                    <div style="font-size: 14px">Start Angle </div>
                </td>
                <td>
                    <div style="width: 95%;">
                        <input type="range" v-on:pointermove="angleStart" v-on:touchmove="angleStart" v-on:change="angleStart" id="startangle" value="270" min="0" max="360" />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                <div style="width: 25px;">
                    <span id='rangeStart' style="margin-left: -10px;font-size: 14px;">270°</span>
                    </div>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div style="font-size: 14px">End Angle</div>
                </td>
                <td>
                    <div style="width: 95%">
                        <input type="range" v-on:pointermove="angleEnd" v-on:touchmove="angleEnd" v-on:change="angleEnd" id="end" value="90" min="0" max="360"  />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                <div style="width: 25px">
                    <span id='rangeEnd' style="margin-left: -10px;font-size: 14px;">90°</span>
                    </div>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div style="font-size: 14px">Radius</div>
                </td>
                <td>
                    <div style="width: 95%">
                        <input type="range" v-on:pointermove="gaugeRadius" v-on:touchmove="gaugeRadius" v-on:change="gaugeRadius" id="radius" value="100" min="30" max="100"  />
                    </div>
                </td>
                <td style="text-align: center;">
                 <div style="width: 25px">
                    <span id='radius1' style="margin-left: -10px;font-size: 14px;">100%</span>
                    </div>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div style="width: 90%;font-size: 14px;margin-top: -5px;"> Radius based on angle</div>
                </td>
                <td>
                    <div style="padding-top: 6px; margin-left: -10px;">
                        <ejs-checkbox ref="angle" id="angle" :change="onChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
                   <tr style="height: 50px">
                <td>
                    <div style="font-size: 14px">Center X</div>
                </td>
                <td>
                    <div style="width: 95%">
                        <input type="range" id="centerX" v-on:pointermove="gaugeCenterX" v-on:touchmove="gaugeCenterX" v-on:change="gaugeCenterX" value="50" min="0" max="100"  />
                    </div>
                </td>
                <td style="text-align: center;">
                 <div style="width: 25px">
                    <span id='center1' style="margin-left: -10px;font-size: 14px;">50%</span>
                    </div>
                </td>
            </tr>
                <tr style="height: 50px">
                <td>
                    <div style="font-size: 14px">Center Y</div>
                </td>
                <td>
                    <div style="width: 95%">
                        <input type="range" v-on:pointermove="gaugeCenterY" v-on:touchmove="gaugeCenterY" v-on:change="gaugeCenterY" id="centerY" value="50" min="0" max="100"  />
                    </div>
                </td>
                 <td style="text-align: center;">
                  <div style="width: 25px">
                    <span id='center2' style="margin-left: -10px;font-size: 14px;">50%</span>
                    </div>
                </td>
            </tr>
           <tr style="height: 50px">
                <td>
                    <div style="width: 90%;font-size: 14px;margin-top: -5px;"> Hide Intersecting Labels</div>
                </td>
                <td>
                    <div style="padding-top: 6px; margin-left: -10px;">
                        <ejs-checkbox checked="true" ref="Hide" id="label" :change="hideLabel"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample shows how to create semi-circular or quarter-circular gauges by modifying a circular gauge with
        different start and end angles.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, a circular gauge is rendered with different start and end angles to create semi-circular or
        quarter-circular gauges. The radius, start angle, end angle, and center position of the circular gauge can all
        be customized using the options in the properties panel.
    </p>
    <p>
        More information on the semi-circular or quarter-circular gauges can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-appearance#radius-calculation-based-on-angles">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>

import { CircularGaugeComponent, Annotations, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
data:function(){
    return{
            centerX:'50%',
            centerY:'50%',
            startAngle: 270,
            background:'transparent',
            endAngle: 90,
            lineStyle: { width: 3},
            labelStyle: {
                 position: 'Outside', autoAngle: true,
                font: { fontWeight: 'normal', fontFamily: 'inherit' },
                format:'{value}%'
            },
            majorTicks: {
                position: 'Inside', width: 2, height: 15, interval: 10
            },
            minorTicks: {
                position: 'Inside', height: 8, width: 1, interval: 2
            },
            radius1: '100%',
            pointerWidth: 7,            
            pointerRadius: '75%',
            value: 30,
            animation: { enable: false },
            cap: { radius: 8, border: { width: 0 } },
            needleTail: { length: '13%'}
    }
},
components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axis': AxisDirective,
    'e-axes': AxesDirective,
    'e-pointer': PointerDirective,
    'e-pointers': PointersDirective,
    'ejs-checkbox': CheckBoxComponent
},
provide: {
    circulargauge: [Annotations]
},
methods: {
    angleStart:function(){
      let min = parseInt(document.getElementById('startangle').value, 10);
      document.getElementById('rangeStart').innerHTML = min + '°';
      this.$refs.circulargauge.ej2Instances.axes[0].startAngle = min;
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    angleEnd:function(){
      let max = parseInt(document.getElementById('end').value, 10);
      document.getElementById('rangeEnd').innerHTML = max + '°';
      this.$refs.circulargauge.ej2Instances.axes[0].endAngle = max;
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    gaugeRadius:function(){
      let max = parseInt(document.getElementById('radius').value, 10);
      document.getElementById('radius1').innerHTML = max + '%';
      this.$refs.circulargauge.ej2Instances.axes[0].radius = '' + max + '%';
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    gaugeCenterX:function(){
      let checkbox = this.$refs.angle.ej2Instances;
      if(!checkbox.checked) {
         let max = parseInt(document.getElementById('centerX').value, 10);
         document.getElementById('center1').innerHTML = max + '%';
         this.$refs.circulargauge.ej2Instances.centerX = '' + max + '%';
         this.$refs.circulargauge.ej2Instances.refresh();
      }      
    },
    gaugeCenterY:function(){
      let checkbox = this.$refs.angle.ej2Instances;
      if(!checkbox.checked) {
            let max = parseInt(document.getElementById('centerY').value, 10);
            document.getElementById('center2').innerHTML = max + '%';
            this.$refs.circulargauge.ej2Instances.centerY = '' + max + '%';
            this.$refs.circulargauge.ej2Instances.refresh();
      }      
    },
    onChange: function(args) {
      let centerX = document.getElementById('centerX');
      let centerY = document.getElementById('centerY');
       if (args.checked) {
            this.$refs.circulargauge.ej2Instances.centerX = null;
            this.$refs.circulargauge.ej2Instances.centerY = null;
            this.$refs.circulargauge.ej2Instances.moveToCenter = true;
            centerX.disabled = true;
            centerY.disabled = true;
        } else {
             this.$refs.circulargauge.ej2Instances.centerX = centerX.value + '%';
             this.$refs.circulargauge.ej2Instances.centerY = centerY.value + '%';
             centerX.disabled = false;
             centerY.disabled = false;
             this.$refs.circulargauge.ej2Instances.moveToCenter = false;
        }
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    hideLabel: function(args) {
        this.$refs.circulargauge.ej2Instances.axes[0].hideIntersectingLabel = args.checked;
        this.$refs.circulargauge.ej2Instances.refresh();
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
}
</script>

