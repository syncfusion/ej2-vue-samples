<template>
<div>
<div class="col-md-8 control-section">
        <div class="content-wrapper">
     <ejs-lineargauge :load='load' ref="lineargauge" style='display:block' align='center' id='axisContainer' :orientation='orientation' :annotations='annotations'>
        <e-axes>
            <e-axis :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                <e-pointers>
                    <e-pointer :value='value' :height='height' :width='width' :color='color' :offset='offset'></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
     </ejs-lineargauge>
        </div>
    </div>

 <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%;">
            <tr>
                <td>
                    <div id='minValue'>Axis Minimum
                        <span>&nbsp;&nbsp;&nbsp;0</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="axisMin" v-on:touchmove="axisMin" v-on:change="axisMin" step='5' id="min" value="0" min="0" max="100" style="width:100%;"/>
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div id='maxValue'>Axis Maximum
                        <span>&nbsp;&nbsp;&nbsp;100</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" v-on:pointermove="axisMax" v-on:touchmove="axisMax" v-on:change="axisMax" step='5' id="max" value="100" min="0" max="100" style="width:100%;" />
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div>Axis Inversed</div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id='axisInversed' v-on:change="axisInverse"/>
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div>Axis Opposed</div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id='opposed' v-on:change="axisOpposed"/>
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div>Label Format</div>
                </td>
                <td>
                    <div class="e-float-input" style='margin-top: 0px;'>
                        <input type="text" value="{value}" v-on:change="changeFormat" id='format' class="form-control" style="width:100%" />
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div>Pointer type</div>
                </td>
                <td>
                    <div>
     <ejs-dropdownlist id='pointerType' :dataSource='pointertypedata' index=0 :placeholder='pointertypeplaceholder' :width='pointertypewidth' :change='changePointertype'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div>Marker Placement</div>
                </td>
                <td>
                    <div>
    <ejs-dropdownlist id='pointerPlace' :dataSource='pointerplacedata'  index=0 :placeholder='pointerplaceholder' :width='pointerplacewidth' :change='changePointerplace'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates the axis and pointers feature in the linear gauge. Axis and pointers can be customized by using options available in the panel.
     </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to customize the axes and pointers. Use
        <code>format</code> of labelStyle property to customize the axis labels and use
        <code>type</code>,
        <code>markerType</code> and
        <code>placement</code> properties to customize the pointers in linear gauge.
    </p>
    <br>
    <p>
        More information about axes can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
{/* custom code start */}
<style>
    #control-container {
        padding: 0px !important;
    }

    .property-panel-section {
        height: 380px;
    }
</style>
{/* custom code end */}
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(LinearGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
    return{
    orientation: 'Horizontal',
    line: {
        color: '#9E9E9E'
    },
    value: 10,
    height: 15,
    width: 15,
    color: '#757575',
    offset: 30,
    majorTicks: {
     color: '#9E9E9E',
     interval: 10
    },
    minorTicks: {
     color: '#9E9E9E',
     interval: 2
    },
    labelStyle: {
     offset: 48
    },
     annotations: [{
            content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;">' +
            '${axes[0].pointers[0].currentValue} MPH</h1></div>',
            axisIndex: 0,
            axisValue: 10,
            x: 10,
            y: 60,
            zIndex: '1'
        }],
    pointertypedata:['Marker','Bar'],
    pointertypewidth:120,
    pointertypeplaceholder:'Select Range Bar Color',
    pointerplacedata:['Far','Near','Center'],
    pointerplaceholder:'Select Range Bar Color',
    pointerplacewidth:120
    }
},
provide: {
    lineargauge: [Annotations]
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
  changePointertype: function(args){
    this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].type = pointerType.value;
    pointerPlace.enabled = (pointerType.value === 'Marker');
    this.$refs.lineargauge.ej2Instances.refresh();
  },
  changePointerplace:function(args){
       this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = pointerPlace.value;
       this.$refs.lineargauge.ej2Instances.refresh();
  },
  // Code for Property Panel
axisMin: function(args){
    let min = document.getElementById('min');
    let max = document.getElementById('max');
    this.$refs.lineargauge.ej2Instances.axes[0].minimum = parseInt(min.value, 10);
    this.$refs.lineargauge.ej2Instances.axes[0].maximum = parseInt(max.value, 10);
    document.getElementById('minValue').innerHTML = 'Axis Minimum <span>&nbsp;&nbsp;&nbsp;' + min.value;
    this.$refs.lineargauge.ej2Instances.refresh();
    this.$refs.lineargauge.ej2Instances.annotations[0].axisValue = (this.$refs.lineargauge.ej2Instances.axes[0].pointers[0]).currentValue;
    this.$refs.lineargauge.ej2Instances.refresh();
},
axisMax:function(args){
    let min = document.getElementById('min');
    let max = document.getElementById('max');
    this.$refs.lineargauge.ej2Instances.axes[0].maximum = parseInt(max.value, 10);
    this.$refs.lineargauge.ej2Instances.axes[0].minimum = parseInt(min.value, 10);
    document.getElementById('maxValue').innerHTML = 'Axis Maximum <span>&nbsp;&nbsp;&nbsp;' + max.value;
    this.$refs.lineargauge.ej2Instances.refresh();
    this.$refs.lineargauge.ej2Instances.annotations[0].axisValue = (this.$refs.lineargauge.ej2Instances.axes[0].pointers[0]).currentValue;
    this.$refs.lineargauge.ej2Instances.refresh();
},
axisInverse:function(args){
    let ele = document.getElementById('axisInversed');
    this.$refs.lineargauge.ej2Instances.axes[0].isInversed = ele.checked;
    this.$refs.lineargauge.ej2Instances.refresh();
},
axisOpposed:function(args){
        let ele = document.getElementById('opposed');
        this.$refs.lineargauge.ej2Instances.axes[0].opposedPosition = ele.checked;
        if (ele.checked) {
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = 'Near';
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].markerType = 'Triangle';
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = -20;
            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.offset = 0;
            this.$refs.lineargauge.ej2Instances.annotations[0].x = 10;
            this.$refs.lineargauge.ej2Instances.annotations[0].y = -60;
        } else {
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = 'Far';
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = 0;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = 30;
            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].markerType = 'InvertedTriangle';
            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.offset = 38;
            this.$refs.lineargauge.ej2Instances.annotations[0].x = 10;
            this.$refs.lineargauge.ej2Instances.annotations[0].y = 60;
        }
        this.$refs.lineargauge.ej2Instances.refresh();
},
changeFormat:function(args){
        let ele = document.getElementById('format');
        this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.format = ele.value.indexOf('{value}') > -1 ? ele.value : this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.format;
        this.$refs.lineargauge.ej2Instances.refresh();
}
}
})
</script>

