<template>
    <main><div>
        <div class="col-md-8 control-section">
          <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :background='background' :load='load' style='display:block' align='center' id='labels-container'>
                <e-axes>
                    <e-axis :annotations='annotations' :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius1' minimum=0 maximum=170 >
                        <e-pointers>
                        <e-pointer :type='type' :roundedCornerRadius='roundedCornerRadius' :value='value' :radius='radius' :color='color' :pointerWidth='pointerWidth' :animation='animation'></e-pointer>
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
             <col span="1" style="width: 30%;">
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 30%;">
          </colgroup>
          <tbody>
                 <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Ticks </div>
                    </td>
                    <td style="height: 50px">
                        <div style="height: 100%">
                           <ejs-dropdownlist ref="tick" id='Ticks' :dataSource='ticksdata' :fields='ticksfields' value='major' index=0  :width='tickstwidth' :change='changeTicks'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Tick Position </div>
                    </td>
                    <td style="height: 50px">
                        <div style="height: 100%">
                           <ejs-dropdownlist id='tickposition' ref="tickPos" :dataSource='tickpositiondata' index=0  :width='tickpositionwidth' :change='changeTickposition'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Label Position </div>
                    </td>
                    <td style="height: 50px">
                        <div style="height: 50px">
                           <ejs-dropdownlist id='labelposition' ref="labelPos" :dataSource='labelpositiondata' index=0  :width='labelpositionwidth' :change='changeLabelposition'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Tick Offset</div>
                    </td>
                    <td>
                        <div>
                            <input type="range" ref="tickOff" id="tickOffset" v-on:pointermove="tickOffset" v-on:touchmove="tickOffset" v-on:change="tickOffset" value="0" min="0" max="50" style="width:70%" />
                        </div>
                    </td>
                    <td style="text-align: center;">
                        <span id='offset' style="margin-left: -30px;">0</span>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Tick Height</div>
                    </td>
                    <td>
                        <div>
                            <input type="range" ref="tickHeight" id="tickHeight" v-on:pointermove="tickHeight" v-on:touchmove="tickHeight" v-on:change="tickHeight" value="10" min="1" max="50" style="width:70%" />
                        </div>
                    </td>
                    <td style="text-align: center;">
                        <span id='height' style="margin-left: -30px;">10</span>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div style="font-size:14px"> Label Offset</div>
                    </td>
                    <td>
                        <div>
                            <input type="range" ref="labelOff" id="labelOffset" v-on:pointermove="labelOffset" v-on:touchmove="labelOffset" v-on:change="labelOffset" value="0" min="0" max="50" style="width:70%" />
                        </div>
                    </td>
                    <td style="text-align: center;">
                        <span id='labelOffsetValue' style="margin-left: -30px;">0</span>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div id='height' style="font-size:14px"> Show Last Label </div>
                    </td>
                <td>
                <div style="margin-top: -4px; margin-left: -10px;">
                    <ejs-checkbox  id="enable" ref="enable" name="enable" :change='changeEnablePointer'></ejs-checkbox>
                </div>    
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample demonstrates how to customize the ticks and labels on an axis. The position, offset, and height of
        the ticks and labels can be changed.
    </p>
</section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure the ticks and labels of an axis in the circular gauge.
        Labels are units that are used to display the values on the axis. Labels can be customized using <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/">labelStyle</a>. Ticks
        are used to represent values on the axis. Ticks can be customized using <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/">majorTicks</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/">minorTicks</a>.
    </p>
    <p>
        More information on the ticks and labels can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-axes/">documentation
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

import { CircularGaugeComponent, Annotations, PointersDirective, PointerDirective, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
data:function(){
    return{
            annotations: [{
                content: '<div id="content" style="color:#518C03;font-size:20px;font-family:inherit;font-weight:semibold;">145</div>',
                angle: 0, radius: '0%', zIndex: '1',
            }],
            background:'transparent',
            startAngle: 210,
            endAngle: 150,
            lineStyle: { width: 2, color: '#9E9E9E' },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { size: '10px', fontFamily: 'inherit' }
            },
            majorTicks: {
                position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20
            },
            minorTicks: {
                position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10
            },
            radius1: '83%',
            minimum: 0, 
            maximum: 170,
            type: 'RangeBar',
            roundedCornerRadius: 10,
            pointerWidth: 7,
            color: '#8BC34A',
            radius: '60%',
            value: 145,
            animation: { enable: false },
            ticksdata:[ 
            { Id:'major', level:'Major Ticks'},
            { Id:'minor', level:'Minor Ticks'}],
            ticksfields:{ text: 'level', value: 'Id' },
            tickstwidth: '115%',
            tickpositiondata:['Inside','Cross','Outside'],
            tickpositionwidth:'115%',
            labelpositiondata:['Outside','Cross','Inside'],
            labelpositionwidth:'115%'
    }
},
components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axis': AxisDirective,
    'e-axes': AxesDirective,
    'e-pointer': PointerDirective,
    'e-pointers': PointersDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
},
provide: {
    circulargauge: [Annotations]
},
methods: {
    changeTicks:function(args){
            let tick;
            if (args.value === "major") {
                tick = this.$refs.circulargauge.ej2Instances.axes[0].majorTicks;
            } else {
                tick = this.$refs.circulargauge.ej2Instances.axes[0].minorTicks;
            }
            this.$refs.tickPos.ej2Instances.value = tick.position;
            this.$refs.tickOff.value = tick.offset.toString();
            this.$refs.tickHeight.value = tick.height.toString();
            document.getElementById('offset').innerHTML = tick.offset.toString();
            document.getElementById('height').innerHTML = tick.height.toString();  
    },
    changeTickposition:function(){
            let value = this.$refs.tickPos.ej2Instances.value;
            if (this.$refs.tick.ej2Instances.value === "major") {
                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.position = value;
            } else {
                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.position = value;
            }
            this.$refs.circulargauge.ej2Instances.refresh();
    },
    changeLabelposition:function(){
            this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.position = this.$refs.labelPos.ej2Instances.value;
            this.$refs.circulargauge.ej2Instances.refresh();
    },
    tickOffset:function(args){
            let value = parseInt(this.$refs.tickOff.value, 10);
            if (this.$refs.tick.ej2Instances.value === "major") {
                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.offset = value;
            } else {
                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.offset = value;
            }
            document.getElementById('offset').innerHTML = value.toString();
            this.$refs.circulargauge.ej2Instances.refresh();
    },
    tickHeight:function(args){
            let value = parseInt(this.$refs.tickHeight.value, 10);
            if (this.$refs.tick.ej2Instances.value === "major") {
                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.height = value;
            } else {
                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.height = value;
            }
            document.getElementById('height').innerHTML = value.toString();
            this.$refs.circulargauge.ej2Instances.refresh();
    },
    labelOffset:function(args){
            let value = parseInt(this.$refs.labelOff.value, 10);
            this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.offset = value;
            document.getElementById('labelOffsetValue').innerHTML = value.toString();
            this.$refs.circulargauge.ej2Instances.refresh();
    },
    changeEnablePointer:function(args) {
        this.$refs.circulargauge.ej2Instances.axes[0].showLastLabel = args.checked;
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