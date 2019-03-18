<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge ref="circulargauge" :load='load' style='display:block' align='center' id='user-container' :enablePointerDrag='enablePointerDrag' :dragMove='dragMove' :dragEnd='dragEnd'>
<e-axes>
<e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0  maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
<e-pointers>
<e-pointer :value='value' :type='type' :radius='pointerRadius' :color='color' :markerShape='markerShape' :markerHeight='markerHeight' :markerWidth='markerWidth'></e-pointer>
<e-pointer :value='value2' :cap='cap2' :radius='pointerRadius2' :color='color2' :needleTail='needleTail2' :markerWidth='markerWidth'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
            
        </div>
    </div>

    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr style="height: 50px">
                <td style="width: 30%">
                    <div id='pointerValue'>Pointer Value <span> &nbsp;&nbsp;&nbsp;70</span> </div>
                </td>
                <td style="width: 40%;">
                    <div>
                        <input type="range" id="value" value="70" min="0" max="120" v-on:pointermove="pointerValue" v-on:touchmove="pointerValue" v-on:change="pointerValue" />
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td style="width: 20%">
                    <div id='enablePointer'>Enable Drag</div>
                </td>
                <td style="width: 40%;">
                    <div>
                        <input type="checkbox" id="enable" checked="true" v-on:change="enableDrag" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes pointer drag in circular gauge. Position of pointer value can be changed by using <code>Pointer Value</code> and we can drag the pointer by enabling drag option.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to move pointers in gauge using drag and drop. Use <code>enablePointerDrag</code>        property, to achieve this behavior.
    </p>
    <br>
    <p>In this sample, you can drag the pointer using mouse or touch, the pointer value will be updated in an annotation placed
        in the gauge.
    </p>
    <p>
        More information on the gauge can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin , getRangeColor , Annotations, Range} from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
data:function(){
    return{
        enablePointerDrag: true,
        annotations: [{
                content: '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;"><span>' + '70 MPH</span></div>',
                angle: 180, zIndex: '1',
                radius: '45%'
            }],
            endAngle: 140,
            startAngle: 220,
            lineStyle: { width: 0, color: '#9E9E9E' },
            gaugeradius: '80%', 
            majorTicks: { useRangeColor: true },
            minorTicks: { useRangeColor: true },
            labelStyle: { useRangeColor: true },
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
provide: {
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
    /* custom code end */
    // Code for Property Panel
    dragMove: function(args){
            let content = '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;"><span>';
            // let cotainerObj=document.getElementById('user-container');
            let pointerValue = Math.round(args.currentValue);
            document.getElementById('pointerValue').innerHTML = 'Pointer Value <span> &nbsp;&nbsp;&nbsp;' + pointerValue;
            (document.getElementById('value')).value = pointerValue.toString();
            this.$refs.circulargauge.ej2Instances.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');
        },
     dragEnd:function(args){
            // let cotainerObj=document.getElementById('user-container');
            let pointerValue = Math.round(args.currentValue);
            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);
        },
    pointerValue:function(args){
            // let cotainerObj=document.getElementById('user-container');      
            let pointerValue = parseInt((document.getElementById('value')).value, 10);
            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);
            document.getElementById('pointerValue').innerHTML = 'Pointer Value <span> &nbsp;&nbsp;&nbsp;' + pointerValue;        
    },
    enableDrag:function(args){
        // let cotainerObj=document.getElementById('user-container');             
        let value = (document.getElementById('enable')).checked;
        this.$refs.circulargauge.ej2Instances.enablePointerDrag = value;        
    }
}
})
 function setPointersValue(circulargauge, pointerValue) {
        // let cotainerObj=document.getElementById('user-container');                    
        let color = getRangeColor(pointerValue,circulargauge.axes[0].ranges, circulargauge.axes[0].pointers[0].color);
        circulargauge.axes[0].pointers[0].color = color;
        circulargauge.axes[0].pointers[1].color = color;
        circulargauge.axes[0].pointers[0].animation.enable = true;
        circulargauge.axes[0].pointers[1].animation.enable = true;
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

