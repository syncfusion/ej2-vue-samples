<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper" align='center'>
<ejs-circulargauge ref="circulargauge" style='display:block' align='center' :load='load' id='semi-container' :moveToCenter='false'>
<e-axes>
    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius' :hideIntersectingLabel='true' minimum=0 maximum=100 >
      <e-pointers>
          <e-pointer :value='value' :radius='pointerRadius' :color='color' :pointerWidth='pointerWidth' :animation='animation' :cap='cap' :needleTail="needleTail"></e-pointer>
      </e-pointers>
    </e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
          <colgroup>
             <col span="1" style="width: 30%;">
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 30%;">
          </colgroup>
          <tbody>
            <tr style="height: 50px">
                <td>
                    <div>Start Angle </div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="angleStart" v-on:touchmove="angleStart" v-on:change="angleStart" id="startangle" value="270" min="0" max="360" style="width: 65%;" />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                    <span id='rangeStart' style="margin-left: -40px;">270°</span>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div>End Angle</div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="angleEnd" v-on:touchmove="angleEnd" v-on:change="angleEnd" id="end" value="270" min="0" max="360" style="width: 65%;"  />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                    <span id='rangeEnd' style="margin-left: -40px;">90°</span>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div>Radius</div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="gaugeRadius" v-on:touchmove="gaugeRadius" v-on:change="gaugeRadius" id="radius" value="80" min="0" max="100" style="width: 65%;"  />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                    <span id='radius1' style="margin-left: -40px;">80%</span>
                </td>
            </tr>
                 <tr style="height: 50px">
                <td>
                    <div style="width: 90%"> Radius based on angle</div>
                </td>
                <td>
                    <div style="padding-top: 0px; margin-left: -10px;">
                        <ejs-checkbox ref="angle" id="angle" :change="onChange"></ejs-checkbox>
                    </div>
                </td>
        </tr>
                   <tr style="height: 50px">
                <td>
                    <div>Center X</div>
                </td>
                <td>
                    <div>
                        <input type="range" id="centerX" v-on:pointermove="gaugeCenterX" v-on:touchmove="gaugeCenterX" v-on:change="gaugeCenterX" value="50" min="0" max="100" style="width: 65%;"  />
                    </div>
                </td>
                <td style="padding-top: 10px; text-align: center;">
                    <span id='center1' style="margin-left: -40px;">50%</span>
                </td>
            </tr>
                <tr style="height: 50px">
                <td>
                    <div>Center Y</div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="gaugeCenterY" v-on:touchmove="gaugeCenterY" v-on:change="gaugeCenterY" id="centerY" value="50" min="0" max="100" style="width: 65%;"  />
                    </div>
                </td>
                 <td style="padding-top: 10px; text-align: center;">
                    <span id='center2' style="margin-left: -40px;">50%</span>
                </td>
            </tr>
           <tr style="height: 50px">
                <td>
                    <div style="width: 90%"> Hide intersecting labels</div>
                </td>
                <td>
                    <div style="padding-top: 0px; margin-left: -10px;">
                        <ejs-checkbox checked="true" ref="Hide" id="label" :change="hideLabel"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the rendering of circular gauge with modified start and end angles. Radius, start angle, end angle, center X and center Y of the circular gauge can be customized using the options in properties panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render the circular gauge with modified start and end angles to form semi or quarter circular gauges. By enabling the radius based on angle option, circular gauge radius will be calculated based on the start and end angles.
		You can also hide the intersect labels using <code>hideIntersectingLabel</code> property.
    </p>
    <p>
        More information on the ranges can be found in this 
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<style scoped>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CircularGaugePlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
data:function(){
    return{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 0, color: '#0450C2' },
            labelStyle: {
                 position: 'Outside', autoAngle: true,
                font: { fontWeight: 'normal', fontFamily: 'Segoe UI' }
            },
            majorTicks: {
                position: 'Inside', width: 2, height: 12, interval: 4
            },
            minorTicks: {
                position: 'Inside', height: 5, width: 1, interval: 2
            },
            radius: '80%',
            pointerWidth: 10,
            color: '#FF9200',
            pointerRadius: '75%',
            value: 30,
            animation: { enable: false },
            cap: { radius: 8, color: '#565656', border: { width: 0 } },
            needleTail: { length: '13%', color: '#FF9200' }

    }
},
provide: {
    circulargauge: [Annotations]
},
methods: {
    /* custom code start */
     load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = 
           (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        document.getElementById('startangle').value = args.gauge.axes[0].startAngle;
        document.getElementById('end').value = args.gauge.axes[0].endAngle;
    },
    /* custom code end */
    // Code for Property Panel
    angleStart:function(args){
      let min = parseInt(document.getElementById('startangle').value, 10);
      document.getElementById('rangeStart').innerHTML = min + '°';
      this.$refs.circulargauge.ej2Instances.axes[0].startAngle = min;
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    angleEnd:function(args){
      let max = parseInt(document.getElementById('end').value, 10);
      document.getElementById('rangeEnd').innerHTML = max + '°';
      this.$refs.circulargauge.ej2Instances.axes[0].endAngle = max;
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    gaugeRadius:function(args){
      let max = parseInt(document.getElementById('radius').value, 10);
      document.getElementById('radius1').innerHTML = max + '%';
      this.$refs.circulargauge.ej2Instances.axes[0].radius = '' + max + '%';
      this.$refs.circulargauge.ej2Instances.refresh();
    },
    gaugeCenterX:function(args){
      let checkbox = this.$refs.angle.ej2Instances;
      if(!checkbox.checked) {
         let max = parseInt(document.getElementById('centerX').value, 10);
         document.getElementById('center1').innerHTML = max + '%';
         this.$refs.circulargauge.ej2Instances.centerX = '' + max + '%';
         this.$refs.circulargauge.ej2Instances.refresh();
      }      
    },
    gaugeCenterY:function(args){
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
    }
}
})
</script>

