<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge style='display:block' align='center' id='labels-container'>
<e-axes>
    <e-axis :annotations='annotations' :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius' minimum=0 maximum=180 >
      <e-pointers>
          <e-pointer :type='type' :roundedCornerRadius='roundedCornerRadius' :value='value' :radius='radius' :color='color' :pointerWidth='pointerWidth' :animation='animation'></e-pointer>
      </e-pointers>  
    </e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin:10px">
            <tbody>
                <tr>
                    <td>
                        <div> Ticks </div>
                    </td>
                    <td>
                        <div>
    <ejs-dropdownlist id='Ticks' :dataSource='ticksdata' :fields='ticksfields' value='major' index=0  :width='tickstwidth' :change='changeTicks'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div> Tick Position </div>
                    </td>
                    <td>
                        <div>
    <ejs-dropdownlist id='tickposition' :dataSource='tickpositiondata' index=0  :width='tickpositionwidth' :change='changeTickposition'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div> Label Position </div>
                    </td>
                    <td>
                        <div>
    <ejs-dropdownlist id='labelposition' :dataSource='labelpositiondata' index=0  :width='labelpositionwidth' :change='changeLabelposition'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div id='offset'>Tick Offset <span>&nbsp;&nbsp;&nbsp;0</span> </div>
                    </td>
                    <td>
                        <div>
                            <input type="range" id="tickOffset" v-on:pointermove="tickOffset" v-on:touchmove="tickOffset" v-on:change="tickOffset" value="0" min="0" max="50" style="width:90%" />
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div id='height'>Tick Height <span>&nbsp;&nbsp;&nbsp;10</span> </div>
                    </td>
                    <td>
                        <div>
                            <input type="range" id="tickHeight" v-on:pointermove="tickHeight" v-on:touchmove="tickHeight" v-on:change="tickHeight" value="10" min="1" max="50" style="width:90%" />
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div id='labelOffsetValue'>Label Offset <span>&nbsp;&nbsp;&nbsp;0</span> </div>
                    </td>
                    <td>
                        <div>
                            <input type="range" id="labelOffset" v-on:pointermove="labelOffset" v-on:touchmove="labelOffset" v-on:change="labelOffset" value="0" min="0" max="50" style="width:90%" />
                        </div>
                    </td>
                </tr>&nbsp;
            </tbody>
            <br/>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates how to customize the ticks and labels of an axis. 
        Position, offset, and height of the tick and label can be changed by using the options provided in the property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the ticks and labels of an axis in the circular gauge. Labels are
        units that are used to display the values in the axis. You can customize <code>labels</code> with the properties
        like <code>angle</code>, <code>font</code>,
        <code>position</code>, etc. Ticks are used to mark some values on the axis. You can also customize the ticks using
        <code>majorTicks</code>,
        <code>minorTicks</code> properties.
    </p>
    <p>
        More information on the labels can be found in this
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
            annotations: [{
                content: '<div id="content" style="color:#518C03;font-size:20px;font-family:Segoe UI;font-weight:semibold;">145</div>',
                angle: 0, radius: '0%', zIndex: '1',
            }],
            startAngle: 210,
            endAngle: 150,
            lineStyle: { width: 2, color: '#9E9E9E' },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { size: '10px' }
            },
            majorTicks: {
                position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20
            },
            minorTicks: {
                position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10
            },
            radius: '75%',
            minimum: 0, 
            maximum: 180,
            type: 'RangeBar',
            roundedCornerRadius: 10,
            pointerWidth: 10,
            color: '#8BC34A',
            radius: '60%',
            value: 145,
            animation: { enable: false },
            ticksdata:[ 
            { Id:'major', level:'Major Ticks'},
            { Id:'minor', level:'Minor Ticks'}],
            ticksfields:{ text: 'level', value: 'Id' },
            tickstwidth:120,
            tickpositiondata:['Inside','Outside'],
            tickpositionwidth:120,
            labelpositiondata:['Inside','Outside'],
            labelpositionwidth:120
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
    changeTicks:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let tickPosition=document.getElementById('tickposition');
            let tick; let isMajorTicks = args.value === 'major';
            if (isMajorTicks) {
                tick = cotainerObj.ej2_instances[0].axes[0].majorTicks;
            } else {
                tick = cotainerObj.ej2_instances[0].axes[0].minorTicks;
            }
            tickPosition.ej2_instances[0].value = tick.position;
            (document.getElementById('tickOffset')).value = tick.offset.toString();
            (document.getElementById('tickHeight')).value = tick.height.toString();
            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + tick.offset;
            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + tick.height;  
    },
    changeTickposition:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let tickPosition=document.getElementById('tickposition');
            let tick; let isMajorTicks = args.value === 'major';
            let value = tickPosition.ej2_instances[0].value.toString();
            if (isMajorTicks) {
                cotainerObj.ej2_instances[0].axes[0].majorTicks.position = value;
            } else {
                cotainerObj.ej2_instances[0].axes[0].minorTicks.position = value;
            }
            cotainerObj.ej2_instances[0].refresh();
    },
    changeLabelposition:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let labelPosition=document.getElementById('labelposition');
            cotainerObj.ej2_instances[0].axes[0].labelStyle.position = labelPosition.value.toString();
            cotainerObj.ej2_instances[0].refresh();
    },
    tickOffset:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let isMajorTicks = args.value === 'major';
            let value = parseInt((document.getElementById('tickOffset')).value, 10);
            if (isMajorTicks) {
                cotainerObj.ej2_instances[0].axes[0].majorTicks.offset = value;
            } else {
                cotainerObj.ej2_instances[0].axes[0].minorTicks.offset = value;
            }
            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + value;
            cotainerObj.ej2_instances[0].refresh();
    },
    tickHeight:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let isMajorTicks = args.value === 'major';
            let value = parseInt((document.getElementById('tickHeight')).value, 10);
            if (isMajorTicks) {
                cotainerObj.ej2_instances[0].axes[0].majorTicks.height = value;
            } else {
                cotainerObj.ej2_instances[0].axes[0].minorTicks.height = value;
            }
            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + value;
            cotainerObj.ej2_instances[0].refresh();
    },
    labelOffset:function(args){
            let cotainerObj=document.getElementById('labels-container');
            let value = parseInt((document.getElementById('labelOffset')).value, 10);
            cotainerObj.ej2_instances[0].axes[0].labelStyle.offset = value;
            document.getElementById('labelOffsetValue').innerHTML = 'Label Offset <span>&nbsp;&nbsp;&nbsp;' + value;
            cotainerObj.ej2_instances[0].refresh();
    }
}
})
</script>

