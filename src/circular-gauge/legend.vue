<template>
    <div>
        <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :background='background' :load='load' style='display:block' align='center' id='legend-container' :legendSettings='legendSettings' :title='title' :titleStyle='titleStyle'>
                <e-axes>
                    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle'  :ranges='ranges' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius1' minimum=0 maximum=120 >
                        <e-pointers>
                            <e-pointer :value='value' :radius='radius' :pointerWidth='pointerWidth' :needleTail='needleTail' :animation='animation'></e-pointer>
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
                        <col span="1" style="width: 50%;">
                        <col span="1" style="width: 50%;">
                    </colgroup>
                    <tbody>
                            <tr style="height: 50px">
                                <td>
                                    <div style="font-size:14px;margin-top: -2px"> Show legend </div>
                                </td>
                                <td style="width: 30%;">
                                    <div style="padding-top: 7px;padding-left: 0px;">
                                    <ejs-checkbox  id="enable" ref="enable"  :change='changeEnableLegend' checked=true></ejs-checkbox>
                                    </div>
                                </td>
                            </tr>
                            <tr style="height: 50px">
                                <td>
                                    <div style="width: 90%;font-size: 14px"> Show range when the legend item is toggled </div>
                                </td>
                                <td style="width: 30%;">
                                    <div style="padding-top: 0px;padding-left: 0px;margin-top: 10px">
                                    <ejs-checkbox  id="enabletoggle" ref="enabletoggle" :change='changeEnableToggle' checked=true></ejs-checkbox>
                                    </div>
                                </td>
                            </tr>
                            <tr style="height: 50px">
                                <td>
                                    <div style="font-size:14px"> Position </div>
                                </td>
                                <td>
                                    <div>
                                    <ejs-dropdownlist id='position' ref="legendPos" :dataSource='positiondata' index=0  :width='positionwidth' :change='changePosition'></ejs-dropdownlist>                      
                                    </div>
                                </td>
                            </tr>
                            <tr style="height: 50px">
                                <td>
                                    <div style="font-size:14px"> Alignment </div>
                                </td>
                                <td>
                                    <div>
                                    <ejs-dropdownlist id='alignment' ref="legendAlignment" :dataSource='alignmentdata' index=0  :width='alignmentwidth' :change='changeAlignment'></ejs-dropdownlist>                      
                                    </div>
                                </td>
                            </tr>
                        <tr style="height: 50px">
                                <td>
                                    <div style="font-size:14px"> Shape </div>
                                </td>
                                <td>
                                    <div>
                                    <ejs-dropdownlist id='shape' ref="legendShape" :dataSource='shapedata' :fields='shapefields' index=0  :width='shapewidth' :change='changeShape'></ejs-dropdownlist>                      
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
    </div>
<div id="action-description">
    <p>
        This sample directs the visualization of moving wind types based on their speed via the legend of the circular
        gauge component. The visibility, shape, alignment, and position of the legend can all be customized.
    </p>
</div>
        <div id="description">
            <p>
                The legend provides useful information for interpreting what the circular gauge's axis range displays,
                and it can be represented in a variety of colors, shapes, and other identifiers depending on the data.
                To do so, use the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/legendSettingsModel/">legendSettings</a>
                and its properties.
            </p>
            <p>
                More information on the legend can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-legend/">documentation
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

import { CircularGaugeComponent, Legend, AxisDirective, AxesDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
data:function(){
    return{
            title: 'Measure of wind speed in Km/h',
            background:'transparent',
            titleStyle: {                
                fontFamily: 'inherit'       
            },
            legendSettings: { 
                visible: true,
                position: 'Bottom',
                textStyle: {
                    fontFamily: 'inherit',
                    size: '12px'
                }
            },
            startAngle: 210,
            endAngle: 150,
            lineStyle: { width: 2 },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { fontFamily: 'inherit' }
            },
            majorTicks: {
                height: 16, color: '#9E9E9E', interval: 20
            },
            minorTicks: {
                height: 8, interval: 10
            },
            radius1: '80%',
            minimum: 0,
            maximum: 120,
            pointerWidth: 8,
            radius: '60%',
            value: 70,
            animation: { enable: true },
            needleTail:  { length: '18%' },
            ranges: [
                { start: 0, end: 5, color:'#ccffff', radius: '110%', legendText: 'Light Air'},
                { start: 5, end: 11, color:'#99ffff', radius: '110%', legendText: 'Light Breeze' },
                { start: 11, end: 19, color:'#99ff99', radius: '110%', legendText: 'Gentle Breeze' },
                { start: 19, end: 28, color:'#79ff4d', radius: '110%', legendText: 'Moderate Breeze' },
                { start: 28, end: 49, color:'#c6ff1a', radius: '110%', legendText: 'Strong Breeze' },
                { start: 49, end: 74, color:'#e6ac00', radius: '110%', legendText: 'Gale' },
                { start: 74, end: 102, color:'#ff6600', radius: '110%', legendText: 'Storm' },
                { start: 102, end: 120, color:'#ff0000', radius: '110%', legendText: 'Hurricane Force' },
                ],
            positiondata:['Bottom', 'Top', 'Left', 'Right', 'Auto'],
            positionwidth: '100%',
            alignmentdata:['Center', 'Far', 'Near'],
            alignmentwidth:'100%',
            shapedata:[
            { Id:'Circle', level:'Circle'},
            { Id:'Rectangle', level:'Rectangle'},
            { Id:'Triangle', level:'Triangle'},
            { Id:'Diamond', level:'Diamond'},
            { Id:'InvertedTriangle', level:'Inverted triangle'}
            ],
            shapefields:{ text: 'level', value: 'Id' },
            shapewidth:'100%'
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
    circulargauge: [Legend]
},
methods: {
    changePosition:function(){
            this.$refs.circulargauge.ej2Instances.legendSettings.position = this.$refs.legendPos.ej2Instances.value;
    },
    changeAlignment:function(){
             this.$refs.circulargauge.ej2Instances.legendSettings.alignment = this.$refs.legendAlignment.ej2Instances.value;
    },
    changeShape:function(){
            this.$refs.circulargauge.ej2Instances.legendSettings.shape = this.$refs.legendShape.ej2Instances.value;
    },
    changeEnableLegend:function(e){
        this.$refs.circulargauge.ej2Instances.legendSettings.visible = e.checked;
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    changeEnableToggle:function(e){
        this.$refs.circulargauge.ej2Instances.legendSettings.toggleVisibility = e.checked;
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
</script>