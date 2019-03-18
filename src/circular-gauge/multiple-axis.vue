<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
<ejs-circulargauge ref="circulargauge" :load='load' style='display:block' align='center' id='axis-container' :title='title' :titleStyle='titleStyle'>
<e-axes>
<e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0  maximum=160 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
<e-pointers>
<e-pointer :value='value' :radius='pointerRadius' :color='color' :markerHeight='markerHeight' :markerWidth='markerWidth' :type='type' :markerShape='markerShape'></e-pointer>
</e-pointers>
</e-axis>
<e-axis :radius='gaugeradius2' :startAngle='startAngle2' minimum=0  maximum=240 :endAngle='endAngle2' :majorTicks='majorTicks2' :lineStyle='lineStyle2' :minorTicks='minorTicks2' :labelStyle='labelStyle2'>
<e-pointers>
<e-pointer :value='value2' :radius='pointerRadius2' :color='color2' :markerHeight='markerHeight2' :markerWidth='markerWidth2' :type='type2' :markerShape='markerShape2'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
        </div>
    </div>

    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr>
                <td>
                    <div> Axis </div>
                </td>
                <td>
                    <div>
             <ejs-dropdownlist id='axisIndex' ref="axis" :dataSource='axisindexdata' :fields='axisindexfields' value='0' index=0  :width='axisindexwidth' :change='changeAxisindex'></ejs-dropdownlist>                                        
                    </div>
                </td>
            </tr>&nbsp;
            <tr>
                <td>
                    <div> Direction </div>
                </td>
                <td>
                    <div>
             <ejs-dropdownlist id='axisDirection' ref="direction" :dataSource='axisdirectiondata' index=0  :width='axisdirectionwidth' :change='changeAxisdirection'></ejs-dropdownlist>                                                          
                    </div>
                </td>
            </tr>&nbsp;
            <tr>
                <td>
                    <div id='start'>Start Angle <span> &nbsp;&nbsp;&nbsp;220</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="start" id="startAngle" value="220" min="0" max="360" v-on:pointermove="startAnglechange" v-on:touchmove="startAnglechange" v-on:change="startAnglechange"  />
                    </div>
                </td>
            </tr>&nbsp;
            <tr>
                <td>
                    <div id='end'>End Angle <span> &nbsp;&nbsp;&nbsp;140</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="end" id="endAngle" value="140" min="0" max="360" v-on:pointermove="endAnglechange" v-on:touchmove="endAnglechange" v-on:change="endAnglechange"  />
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the multiple axes in the gauge and options are available to change the direction, start, and end angle of an axis.
    </p>
</div>

<div id="description">
    <p>
        In this example, you can see how to render and configure multipe axes in gauge. Use <code>axes</code> collection
        to render multiple axis in gauge. Each axis can be customized with its own <code>pointer</code> and <code>scales</code>.
    </p>
    <br>
    <p>
        In this sample, two axes with a pointer has been used.
    </p>
    <p>
        More information on the axis can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin,isCompleteAngle } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
data:function(){
    return{
        title: 'Gauge with Multiple Axes',
        titleStyle: { color: 'gray', size: '16px' },
        lineStyle: { width: 1.5, color: ' #9E9E9E' },
        gaugeradius: '95%',
        labelStyle: {
                position: 'Inside', autoAngle: true,
                hiddenLabel: 'None',
        }, majorTicks: {
                position: 'Inside',
                width: 2, height: 10, color: '#757575'
        }, minorTicks: {
                position: 'Inside', width: 2,
                height: 5, color: '#757575'
        },
        startAngle: 220, endAngle: 140,
        value: 80, pointerRadius: '100%', color: '#333333',
        markerHeight: 15, markerWidth: 15, type: 'Marker',
        markerShape: 'Triangle',
        lineStyle2: { width: 1.5, color: '#E84011' }, gaugeradius2: '95%',
        labelStyle2: {
                position: 'Outside', autoAngle: true,
                hiddenLabel: 'None', font: { color: '#E84011' }
        }, majorTicks2: {
                position: 'Outside', width: 2, height: 10,
                color: '#E84011'
        }, minorTicks2: {
                position: 'Outside', width: 2,
                height: 5, color: '#E84011'
        },
        startAngle2: 220, endAngle2: 140,
        value2: 120, pointerRadius2: '100%', color2: '#C62E0A',
        markerHeight2: 15, markerWidth2: 15, type2: 'Marker',
        markerShape2: 'InvertedTriangle',
        axisindexdata:[
            { Id:'0', level:'Axis 1'},
            { Id:'1', level:'Axis 2'}],
        axisindexfields:{ text: 'level', value: 'Id' },
        axisindexwidth:120,
        axisdirectiondata:['ClockWise','AntiClockWise'],
        axisdirectionwidth:120
    }
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
    changeAxisindex:function(args){
            let axisIndex = 0;
            // let cotainerObj=document.getElementById('axis-container');
            // let direction=document.getElementById('axisDirection');
            // let axis=document.getElementById('axisIndex');
            axisIndex = this.$refs.axis.ej2Instances.value;
            this.$refs.direction.ej2Instances.value = this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction;
            let startAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle;
            let endAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle;
            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + startAngle;
            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + endAngle;
            (document.getElementById('startAngle')).value = startAngle.toString();
            (document.getElementById('endAngle')).value = endAngle.toString();        
    },
    changeAxisdirection: function(args){
            let axisIndex = 0;
            // let cotainerObj=document.getElementById('axis-container');
            // let direction=document.getElementById('axisDirection');
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction = this.$refs.direction.ej2Instances.value.toString();
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.refresh();        
    },
    startAnglechange:function(args){
            let axisIndex = 0;       
            // let cotainerObj=document.getElementById('axis-container');      
            let value = parseInt((document.getElementById('startAngle')).value, 10);
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle = value;
            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + value;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =
                isCompleteAngle(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            this.$refs.circulargauge.ej2Instances.refresh();        
    },
    endAnglechange:function(args){
            let axisIndex = 0;       
            // let cotainerObj=document.getElementById('axis-container');    
            let value = parseInt((document.getElementById('endAngle')).value, 10);
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle = value;
            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + value;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =
                isCompleteAngle(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            this.$refs.circulargauge.ej2Instances.refresh();        
    }
}
})
</script>
