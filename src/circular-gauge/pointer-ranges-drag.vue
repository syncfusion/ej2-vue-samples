<template>
  <main><div>
    <div class="col-md-8 control-section">
      <div class="content-wrapper">
        <ejs-circulargauge ref="circulargauge" :background='background' :load="load" style="display:block" align="center" id="user-container" :enablePointerDrag="enablePointerDrag" :dragMove="dragMove" :dragEnd="dragEnd" >
          <e-axes>
            <e-axis :radius="gaugeradius" :startAngle="startAngle" minimum="0" maximum="120" :endAngle="endAngle" :majorTicks="majorTicks" :lineStyle="lineStyle" :minorTicks="minorTicks" :labelStyle="labelStyle" :annotations="annotations" :ranges="ranges" >
              <e-pointers>
                  <e-pointer description='Marker pointer value : 70' :value="value" :type="type" :radius="pointerRadius" :color="color" :markerShape="markerShape" :markerHeight="markerHeight" :markerWidth="markerWidth" ></e-pointer>
                  <e-pointer description='Needle pointer value : 70' :value="value2" :cap="cap2" :radius="pointerRadius2" :color="color2" :needleTail="needleTail2" :markerWidth="markerWidth" ></e-pointer>
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
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 30%;">
    </colgroup>
    <tbody>
        <tr style="height: 50px">
          <td>
            <div style="font-size: 14px;">
              Pointer Value
            </div>
          </td>
          <td>
            <div>
              <input type="range" id="value" value="70"  min="0" max="120" v-on:pointermove="pointerValue" v-on:touchmove="pointerValue" v-on:change="pointerValue" style="width: 70%"/>
            </div>
          </td>
          <td style="text-align: center;">
              <span id="pointerValue" style="margin-left: -30px;font-size: 14px;">70</span>
          </td>
        </tr>
        <tr style="height: 50px">
          <td>
            <div id="enablePointer" style="width: 90%;font-size: 14px;">Allow Pointer Drag</div>
          </td>
          <td>
            <div style="margin-left: -10px; margin-top: 0px">
              <ejs-checkbox checked="true" ref="enable" id="enable" :change="enableDrag"></ejs-checkbox>
            </div>
          </td>
        </tr>
        <tr style="height: 50px">
          <td>
            <div id="enablePointer" style="width: 90%;font-size: 14px;">Allow Ranges Drag</div>
          </td>
          <td>
            <div style="margin-left: -10px; margin-top: 0px">
              <ejs-checkbox ref="rangedrag" id="rangedrag" :change="enableRangeDrag"></ejs-checkbox>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample illustrates dragging a pointer and a range in a circular gauge. End-user can drag the pointer and
        the range by enabling the pointer drag and range drag options.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to move the pointer and range in the circular gauge via drag action. The <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge#enablepointerdrag">enablePointerDrag</a>
        property can be used to enable or disable the pointer drag functionality. Similarly, the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge#enablerangedrag">enableRangeDrag</a>
        property can be used to enable or disable the range drag functionality.
    </p>
    <p>
        More information on the pointer drag can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-user-interaction/#pointer-drag">documentation
            section</a>. Likewise, the range drag information can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-ranges/#dragging-range">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<style scoped>
.property-panel-content td {
    padding-top: 0px;
}
</style>
<script>

import { CircularGaugeComponent , getRangeColor , Annotations, PointersDirective, PointerDirective, AxisDirective, AxesDirective } from "@syncfusion/ej2-vue-circulargauge";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
data:function(){
    return{
        enablePointerDrag: true,
        annotations: [{
                content: '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique; font-family: Segoe UI;"><span>' + '70 MPH</span></div>',
                angle: 180, zIndex: '1',
                radius: '45%'
            }],
            endAngle: 140,
            startAngle: 220,
            background:'transparent',
            lineStyle: { width: 0, color: '#9E9E9E' },
            gaugeradius: '80%', 
            majorTicks: { useRangeColor: true },
            minorTicks: { useRangeColor: true },
            labelStyle: { useRangeColor: true,  font: { fontFamily: 'Segoe UI' } },
            ranges: [{
                start: 0,
                end: 40,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#30B32D'
            }, {
                start: 40,
                end: 100,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#E5C31C'
            }, {
                start: 100, end: 120,
                startWidth: 8, endWidth: 8,
                radius: '108%',
                color: '#F03E3E'
            }],   
            type: 'Marker', value: 70,
            markerShape: 'InvertedTriangle',
            pointerRadius: '110%',
            markerHeight: 20,
            color: '#E5C31C',
            markerWidth: 20,
            value2: 70,
            pointerRadius2: '60%',
            cap2: { radius: 10, border: { width: 5, color: '#E5C31C' } },
            needleTail2: { length: '0%', color: '#E5C31C' },
            color2: '#E5C31C',
            markerWidth2: 5  
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
    dragMove: function(args){
            if(isNaN(args.rangeIndex)) {
                let content = '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;"><span>';
                let pointerValue = Math.round(args.currentValue);
                document.getElementById('pointerValue').innerHTML = pointerValue.toString();
                (document.getElementById('value')).value = pointerValue.toString();
                this.$refs.circulargauge.ej2Instances.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');
             }

        },
     dragEnd:function(args){
            let pointerValue = Math.round(args.currentValue);
            if(isNaN(args.rangeIndex)) {
            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);
            }
        },
    pointerValue:function(){   
            let pointerValue = parseInt((document.getElementById('value')).value, 10);
            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);
            document.getElementById('pointerValue').innerHTML = pointerValue.toString();        
    },
    enableDrag:function(args){         
        let value = args.checked;
        this.$refs.circulargauge.ej2Instances.enablePointerDrag = value;        
    },
    enableRangeDrag:function(args){            
        let value = args.checked;
        this.$refs.circulargauge.ej2Instances.enableRangeDrag = value;        
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
}
 function setPointersValue(circulargauge, pointerValue) {                 
        let color = getRangeColor(pointerValue,circulargauge.axes[0].ranges, circulargauge.axes[0].pointers[0].color);
        circulargauge.axes[0].pointers[0].color = color;
        circulargauge.axes[0].pointers[1].color = color;
        circulargauge.axes[0].pointers[0].animation.enable = false;
        circulargauge.axes[0].pointers[1].animation.enable = false;
        circulargauge.axes[0].pointers[0].needleTail.color = color;
        circulargauge.axes[0].pointers[1].needleTail.color = color;
        circulargauge.axes[0].pointers[0].cap.border.color = color;
        circulargauge.axes[0].pointers[1].cap.border.color = color;
        circulargauge.setPointerValue(0, 1, pointerValue);
        circulargauge.setPointerValue(0, 0, pointerValue);
        let content = '<div style="font-size: 14px;color:' + color + ';font-weight: lighter;font-style: oblique;"><span>';
        circulargauge.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');
    }
</script>

