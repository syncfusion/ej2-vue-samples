<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge ref="circulargauge" :load='load' style='display:block' align='center' id='legend-container' :legendSettings='legendSettings' :title='title'>
<e-axes>
    <e-axis :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle' :labelStyle='labelStyle'  :ranges='ranges' :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius' minimum=0 maximum=120 >
      <e-pointers>
          <e-pointer :value='value' :radius='radius' :color='color' :pointerWidth='pointerWidth' :animation='animation'></e-pointer>
      </e-pointers>
    </e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%;">
            <tbody>
                   <tr>
                    <td>
                        <div> Show legend </div>
                    </td>
                    <td>
                        <div style="padding-top: 0px">
                        <ejs-checkbox  id="enable" ref="enable"  :change='changeEnableLegend' checked=true></ejs-checkbox>
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div> Show range when the legend item is toggled </div>
                    </td>
                    <td>
                        <div style="padding-top: 0px">
                        <ejs-checkbox  id="enabletoggle" ref="enabletoggle" :change='changeEnableToggle' checked=true></ejs-checkbox>
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div> Position </div>
                    </td>
                    <td>
                        <div>
                        <ejs-dropdownlist id='position' ref="legendPos" :dataSource='positiondata' :fields='positionfields' index=0  :width='positionwidth' :change='changePosition'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
                <tr>
                    <td>
                        <div> Alignment </div>
                    </td>
                    <td>
                        <div>
                        <ejs-dropdownlist id='alignment' ref="legendAlignment" :dataSource='alignmentdata' :fields='aligmentfields' index=0  :width='alignmentwidth' :change='changeAlignment'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
               <tr>
                    <td>
                        <div> Shape </div>
                    </td>
                    <td>
                        <div>
                        <ejs-dropdownlist id='shape' ref="legendShape" :dataSource='shapedata' :fields='shapefields' index=0  :width='shapewidth' :change='changeShape'></ejs-dropdownlist>                      
                        </div>
                    </td>
                </tr>&nbsp;
            </tbody>
            <br/>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes moving air types in the legend based on their speed. The visibility, shape, alignment and position of the legend can be changed using the properties panel options.
    </p>
</div>
<div id="description">
    <p>
		In this example, you can see how to render a legend in circular gauge. A legend item denotes the axis ranges. Any number of legend items can be added to a legend. You can bind the desired colors  and Legend text to the corresponding ranges. 
    </p>
	<p style="font-weight: 500">Injecting Module</p>
        <p>The circular gauge component features are segregated into individual modules by feature. To use a legend, inject the Legend module using the <code>CircularGauge.Inject(Legend)</code>  method.
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
import { CircularGaugePlugin, Annotations, Legend } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
    return{
            title: 'Measure of wind speed in Km/h',
            legendSettings: { 
                visible: true,
                position: 'Bottom'
            },
            startAngle: 210,
            endAngle: 150,
            lineStyle: { width: 2 },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', color: '#424242', fontFamily: 'Roboto', fontStyle: 'Regular' }
            },
            majorTicks: {
                height: 16, color: '#9E9E9E', interval: 20
            },
            minorTicks: {
                height: 8, interval: 10
            },
            radius: '80%',
            minimum: 0,
            maximum: 120,
            pointerWidth: 8,
            color: '#757575',
            radius: '60%',
            value: 70,
            animation: { enable: true },
            ranges: [
                { start: 0, end: 5, color:'#ccffff', radius: '110%', legendText: 'Light air'},
                { start: 5, end: 11, color:'#99ffff', radius: '110%', legendText: 'Light breeze' },
                { start: 11, end: 19, color:'#99ff99', radius: '110%', legendText: 'Gentle breeze' },
                { start: 19, end: 28, color:'#79ff4d', radius: '110%', legendText: 'Moderate breeze' },
                { start: 28, end: 49, color:'#c6ff1a', radius: '110%', legendText: 'Strong breeze' },
                { start: 49, end: 74, color:'#e6ac00', radius: '110%', legendText: 'Gale' },
                { start: 74, end: 102, color:'#ff6600', radius: '110%', legendText: 'Storm' },
                { start: 102, end: 120, color:'#ff0000', radius: '110%', legendText: 'Hurricane force' },
                ],
            positiondata:['Auto', 'Top', 'Bottom', 'Left', 'Right'],
            positionwidth:120,
            alignmentdata:['Far', 'Center', 'Near'],
            alignmentwidth:120,
            shapedata:[
            { Id:'Circle', level:'Circle'},
            { Id:'Rectangle', level:'Rectangle'},
            { Id:'Triangle', level:'Triangle'},
            { Id:'Diamond', level:'Diamond'},
            { Id:'InvertedTriangle', level:'Inverted triangle'}
            ],
            shapefields:{ text: 'level', value: 'Id' },
            shapewidth:120
    }
},
provide: {
    circulargauge: [Legend]
},
methods: {
    // Code for Property Panel
      load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    // Code for Property Panel
    changePosition:function(args){
            this.$refs.circulargauge.ej2Instances.legendSettings.position = this.$refs.legendPos.ej2Instances.value;
    },
    changeAlignment:function(args){
             this.$refs.circulargauge.ej2Instances.legendSettings.alignment = this.$refs.legendAlignment.ej2Instances.value;
    },
    changeShape:function(args){
            this.$refs.circulargauge.ej2Instances.legendSettings.shape = this.$refs.legendShape.ej2Instances.value;
    },
    changeEnableLegend:function(e){
        this.$refs.circulargauge.ej2Instances.legendSettings.visible = e.checked;
        this.$refs.circulargauge.ej2Instances.refresh();
    },
    changeEnableToggle:function(e){
        this.$refs.circulargauge.ej2Instances.legendSettings.toggleVisibility = e.checked;
    }
}
})
</script>

