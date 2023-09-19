<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <ejs-circulargauge :load='load' :background='background' ref="circulargauge" style='display:block' align='center' id='range-container'>
                <e-axes>
                   <e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0  maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
                       <e-pointers>
                           <e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                       </e-pointers>
                   </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
<br>
<div class="col-md-4 property-section">
 <table id="property" title="Properties" style="width: 100%; margin-left: -20px;">
    <colgroup>
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 30%;">
    </colgroup>
    <tbody>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px"> Select Range </div>
                </td>
                <td style="height: 50px">
                    <div style="height: 100%">
                       <ejs-dropdownlist ref="selectRange" id='rangeSelect' :dataSource='rangeselectdata' :fields='rangeselectfields' value='0' index=0  :width='rangeselectwidth' :change='changeRangeselect'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px">Range Start  </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="rangeStart" id="start" v-on:pointermove="rangeStart" v-on:touchmove="rangeStart" v-on:change="rangeStart" value="0" min="0" max="40" style="width: 70%" />
                    </div>
                </td>
                 <td style="text-align: center;">
               <span id='rangeStart' style="margin-left: -30px;font-size: 14px">0</span>
                </td>
            </tr>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px">Range End </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="rangeEnd" id="end" v-on:pointermove="rangeEnd" v-on:touchmove="rangeEnd" v-on:change="rangeEnd" value="40" min="0" max="40" style="width: 70%" />
                    </div>
                </td>
                <td style="text-align: center;">
                  <span id='rangeEnd' style="margin-left: -30px;font-size: 14px">40</span>
                </td>
            </tr>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px">Start Width </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="startWidth" id="startWidth" v-on:pointermove="rangeStartwidth" v-on:touchmove="rangeStartwidth" v-on:change="rangeStartwidth" value="10" min="0" max="30" style="width: 70%" />
                    </div>
                </td>
                <td style="text-align: center;">
                     <span id='rangeStartWidth' style="margin-left: -30px;font-size: 14px">10</span>
                </td>
            </tr>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px">End Width </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="endWidth" id="endWidth" v-on:pointermove="rangeEndwidth" v-on:touchmove="rangeEndwidth" v-on:change="rangeEndwidth" value="10" min="0" max="30" style="width: 70%" />
                    </div>
                </td>
                <td style="text-align: center;">
                <span id='rangeEndWidth' style="margin-left: -30px;font-size: 14px">10</span>
                </td>
            </tr>
            <tr style="height: 40px">
                <td>
                    <div style="font-size:14px">Corner Radius </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="cornerRadius" id="radius" v-on:pointermove="roundedRadius" v-on:touchmove="roundedRadius" v-on:change="roundedRadius" value="0" min="0" max="12" style="width: 70%" />
                    </div>
                </td>
                <td style="text-align: center;">
                 <span id='roundedRadius' style="margin-left: -30px;font-size: 14px">0</span>
                </td>
            </tr>
            </tbody>
        </table>
</div>

<div id="action-description">
    <p>
        This sample demonstrates how to highlight a region in an axis using ranges in the circular gauge. The width,
        corner radius, and start and end range of a range can all be customized.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the ranges in the circular gauge. Ranges are used to
        group the axis values, and you can use <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#start">start</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#end">end</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#color">color</a>, <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#startwidth">startWidth</a>,
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#endwidth">endWidth</a>,
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#radius">radius</a> and
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/rangeModel/#roundedcornerradius">roundedCornerRadius</a>
        properties to customize them. In addition, an axis with multiple ranges is shown in the circular gauge
        component, as well as options to customize the range properties via the property panel.
    </p>
    <p>
        More information on the ranges can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-ranges/">documentation
            section</a>.
    </p>
</div>
</div>
</template>
<style scoped>
.property-panel-content td {
    padding-top: 0px;
}
</style>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
   },
data:function(){
    return{
            lineStyle: { width: 10, color: 'transparent' },
            background:'transparent',
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'inherit', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, offset: 5 }, minorTicks: { height: 0 },
            annotations: [{
                content: '<div><span style="font-size:14px; font-family:inherit">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: '1'
            }, {
                content: '<div><span style="font-size:20px; font-family:inherit">65 MPH</span></div>',
                radius: '40%', angle: 180, zIndex: '1'
            }],
            startAngle: 210,
            endAngle: 150,
            gaugeRadius: '80%',
            ranges: [{ start: 0, end: 40, color: '#30B32D' }, { start: 40, end: 80, color: '#FFDD00' },
            { start: 80, end: 120, color: '#F03E3E' }],
            value: 65, 
            pointerRadius: '60%', 
            color: '#757575', 
            pointerWidth: 8,
            cap: { radius: 7 },
            needleTail: { length: '18%'},
            rangeselectdata:[
            { Id:'0', level:'Low'},
            { Id:'1', level:'Medium'},
            { Id:'2', level:'High'}],
            rangeselectfields:{ text: 'level', value: 'Id' },
            rangecolordata:['#30B32D','#FFDD00','#F03E3E'],
            rangeselectwidth:'115%',
            rangecolorwidth:'100%'
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
        /* custom code end */
    },
    changeRangeselect: function(args){
            let index = args.value;
            let container = this.$refs.circulargauge.ej2Instances;            
            (document.getElementById('endWidth')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].endWidth.toString();
            document.getElementById('rangeEndWidth').innerHTML = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].endWidth;
            (document.getElementById('startWidth')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].startWidth.toString();
            document.getElementById('rangeStartWidth').innerHTML = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].startWidth;
            (document.getElementById('end')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].end.toString();
            document.getElementById('rangeEnd').innerHTML = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].end;
            if (index == 0) {
                (document.getElementById('start')).min = "0";
                (document.getElementById('start')).max = "40";
                (document.getElementById('end')).min = "0";
                (document.getElementById('end')).max = "40";
            } else if (index == 1) {
                (document.getElementById('start')).min = "40";
                (document.getElementById('start')).max = "80";
                (document.getElementById('end')).min = "40";
                (document.getElementById('end')).max = "80";
            } else {
                (document.getElementById('start')).min = "80";
                (document.getElementById('start')).max = "120";
                (document.getElementById('end')).min = "80";
                (document.getElementById('end')).max = "120";
            }
            (document.getElementById('start')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].start.toString();
            document.getElementById('rangeStart').innerHTML = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].start;
            (document.getElementById('radius')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].roundedCornerRadius.toString();
            document.getElementById('roundedRadius').innerHTML = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].roundedCornerRadius;
    },
    changeRangeColor: function(args){
        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].color = this.$refs.rangeColor.ej2Instances.value.toString();
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    rangeStart:function(args){
        let min = this.$refs.rangeStart.value;
        document.getElementById('rangeStart').innerHTML = min.toString();
        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = min;
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; 
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    rangeEnd:function(args){
        let max = this.$refs.rangeEnd.value;
        document.getElementById('rangeEnd').innerHTML = max.toString();
        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = max;
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; 
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    rangeStartwidth:function(args){
        let startWidth = this.$refs.startWidth.value;
        document.getElementById('rangeStartWidth').innerHTML = startWidth.toString();
        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].startWidth = startWidth;
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; 
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    rangeEndwidth:function(args){
        let endWidth = this.$refs.endWidth.value;
        document.getElementById('rangeEndWidth').innerHTML = endWidth.toString();
        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].endWidth = endWidth;
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    roundedRadius:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');     
        let radius = parseInt((document.getElementById('radius')).value, 10);
        document.getElementById('roundedRadius').innerHTML = radius.toString();
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].roundedCornerRadius = radius;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false;
        cotainerObj.ej2_instances[0].refresh();
    },
    changeRangefont:function(args){
        let useRangeColor = args.checked;
        this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.useRangeColor = useRangeColor;
        this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.useRangeColor = useRangeColor;
        this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.useRangeColor = useRangeColor;
        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; 
        this.$refs.circulargauge.ej2Instances.refresh();
    }
  }
}
</script>