<template>
<div>
<div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge style='display:block' align='center' id='range-container'>
<e-axes>
<e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0  maximum=120 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
<e-pointers>
<e-pointer :value='value' :radius='pointerRadius' :color='color' :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>
<div class="col-lg-4 property-section">
 <table id="property" title="Properties" style="width: 100%">
     <tbody>
            <tr style="height: 50px">
                <td>
                    <div> Select Range </div>
                </td>
                <td>
                    <div>
             <ejs-dropdownlist id='rangeSelect' :dataSource='rangeselectdata' :fields='rangeselectfields' value='0' index=0  :width='rangeselectwidth' :change='changeRangeselect'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='rangeStart'>Range Start <span> &nbsp;&nbsp;&nbsp;0</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" id="start" v-on:pointermove="rangeStart" v-on:touchmove="rangeStart" v-on:change="rangeStart" value="0" min="0" max="120" style="width:100%" />
                    </div>
                </td>
            </tr>

            <tr style="height: 50px">
                <td>
                    <div id='rangeEnd'>Range End <span> &nbsp;&nbsp;&nbsp;40</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" id="end" v-on:pointermove="rangeEnd" v-on:touchmove="rangeEnd" v-on:change="rangeEnd" value="40" min="0" max="120" style="width:100%" />
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id=''>Range Color</div>
                </td>
                <td>
                    <div>
             <ejs-dropdownlist id='rangeColor' :dataSource='rangecolordata'  index=0  :width='rangecolorwidth' :change='changeRangeColor'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td style="width: 20%">
                    <div id='enablePointer'>Range Font Color</div>
                </td>
                <td style="width: 40%;">
                    <div>
                        <input type="checkbox" id="enable" v-on:change="changeRangefont"/>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='rangeStartWidth'>Start Width <span> &nbsp;&nbsp;&nbsp;10</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" id="startWidth" v-on:pointermove="rangeStartwidth" v-on:touchmove="rangeStartwidth" v-on:change="rangeStartwidth" value="10" min="0" max="30" style="width:100%" />
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='rangeEndWidth'>End Width <span> &nbsp;&nbsp;&nbsp;10</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" id="endWidth" v-on:pointermove="rangeEndwidth" v-on:touchmove="rangeEndwidth" v-on:change="rangeEndwidth" value="10" min="0" max="30" style="width:100%" />
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='roundedRadius'>Corner Radius <span> &nbsp;&nbsp;&nbsp;0</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" id="radius" v-on:pointermove="roundedRadius" v-on:touchmove="roundedRadius" v-on:change="roundedRadius" value="0" min="0" max="30" step="5" style="width:100%" />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
</div>
<div id="action-description">
    <p>
        This sample illustrates how to highlight a region in an axis by using ranges in gauge. Start, end, color, width and corner radius of the range can be changed by using the options provided 
        in the property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to customize the ranges of an axis in the circular gauge. Ranges are used to group the axis
        values, you can use <code>start</code>, <code>end</code>, <code>color</code>, <code>startWidth</code>, <code>endWidth</code>, <code>radius</code> and <code>roundedCornerRadius</code> properties to customize the ranges. In this sample, an axis is shown with one range and options
        to customize the range properties with property panel.
    </p>
    <p>
        More information on the ranges can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<style>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
    return{
            lineStyle: { width: 10, color: 'transparent' },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, offset: 5, color: '#9E9E9E' }, minorTicks: { height: 0 },
            annotations: [{
                content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: '1'
            }, {
                content: '<div><span style="font-size:20px; color:#424242; font-family:Regular">65 MPH</span></div>',
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
            cap: { radius: 7, color: '#757575' },
            needleTail: { length: '18%', color: '#757575' },
            rangeselectdata:[
            { Id:'0', level:'Low'},
            { Id:'1', level:'Medium'},
            { Id:'2', level:'High'}],
            rangeselectfields:{ text: 'level', value: 'Id' },
            rangecolordata:['#30B32D','#FFDD00','#F03E3E'],
            rangeselectwidth:120,
            rangecolorwidth:120
    }
},
provide: {
    circulargauge: [Annotations]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    changeRangeselect: function(args){
            let listObj=document.getElementById('rangeSelect');
            let colortObj=document.getElementById('rangeColor');
            let index = +listObj.ej2_instances[0].value;
            let cotainerObj=document.getElementById('range-container');
            colortObj.value = cotainerObj.ej2_instances[0].axes[0].ranges[index].color;
            (document.getElementById('endWidth')).value = cotainerObj.ej2_instances[0].axes[0].ranges[index].endWidth.toString();
            document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' +
                cotainerObj.ej2_instances[0].axes[0].ranges[index].endWidth;
            (document.getElementById('startWidth')).value = cotainerObj.ej2_instances[0].axes[0].ranges[index].startWidth.toString();
            document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' +
                cotainerObj.ej2_instances[0].axes[0].ranges[index].startWidth;
            (document.getElementById('end')).value = cotainerObj.ej2_instances[0].axes[0].ranges[index].end.toString();
            document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' +
                cotainerObj.ej2_instances[0].axes[0].ranges[index].end;
            (document.getElementById('start')).value = cotainerObj.ej2_instances[0].axes[0].ranges[index].start.toString();
            document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' +
                cotainerObj.ej2_instances[0].axes[0].ranges[index].start;
            (document.getElementById('radius')).value = cotainerObj.ej2_instances[0].axes[0].ranges[index].roundedCornerRadius.toString();
            document.getElementById('roundedRadius').innerHTML = 'Corner Radius <span> &nbsp;&nbsp;&nbsp;' +
                cotainerObj.ej2_instances[0].axes[0].ranges[index].roundedCornerRadius;
    },
    changeRangeColor: function(args){
        let listObj=document.getElementById('rangeSelect');
        let colortObj=document.getElementById('rangeColor');
        let index = +listObj.value;
        let cotainerObj=document.getElementById('range-container');
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].color = colortObj.value.toString();
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false;
        cotainerObj.ej2_instances[0].refresh();
    },
    rangeStart:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');
        let min = parseInt((document.getElementById('start')).value, 10);
        document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' + min;
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].start = min;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false; 
        cotainerObj.ej2_instances[0].refresh();
    },
    rangeEnd:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');
        let max = parseInt((document.getElementById('end')).value, 10);
        document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' + max;
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].end = max;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false; 
        cotainerObj.ej2_instances[0].refresh();
    },
    rangeStartwidth:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');     
        let startWidth = parseInt((document.getElementById('startWidth')).value, 10);
        document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' + startWidth;
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].startWidth = startWidth;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false; 
        cotainerObj.ej2_instances[0].refresh();
    },
    rangeEndwidth:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');     
        let endWidth = parseInt((document.getElementById('endWidth')).value, 10);
        document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' + endWidth;
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].endWidth = endWidth;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false;
        cotainerObj.ej2_instances[0].refresh();
    },
    roundedRadius:function(args){
        let cotainerObj=document.getElementById('range-container');
        let listObj=document.getElementById('rangeSelect');     
        let radius = parseInt((document.getElementById('radius')).value, 10);
        document.getElementById('roundedRadius').innerHTML = 'Corner Radius <span> &nbsp;&nbsp;&nbsp;' + radius;
        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].roundedCornerRadius = radius;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false;
        cotainerObj.ej2_instances[0].refresh();
    },
    changeRangefont:function(args){
        let cotainerObj=document.getElementById('range-container');
        let useRangeColor = (document.getElementById('enable')).checked;
        cotainerObj.ej2_instances[0].axes[0].labelStyle.useRangeColor = useRangeColor;
        cotainerObj.ej2_instances[0].axes[0].majorTicks.useRangeColor = useRangeColor;
        cotainerObj.ej2_instances[0].axes[0].minorTicks.useRangeColor = useRangeColor;
        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false; 
        cotainerObj.ej2_instances[0].refresh();
    }
}
})
</script>

