<template>
<main><div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
            <ejs-circulargauge ref="circulargauge" :load='load' :background='background' style='display:block' align='center' id='axis-container'>
                <e-axes>
                    <e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0  maximum=160 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                        <e-pointers>
                           <e-pointer :value='value' :radius='pointerRadius'  :markerHeight='markerHeight' :markerWidth='markerWidth' :type='type' :markerShape='markerShape'></e-pointer>
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
    <br>
    <div class="col-md-4 property-section">
        <table id="property" role="none" title="Properties" style="width: 100%; margin-left: -20px;">
        <colgroup>
             <col span="1" style="width: 30%;">
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 30%;">
          </colgroup>
          <tbody>
            <tr style="height: 50px">
                <td>
                    <div style="font-size:14px"> Axis </div>
                </td>
                <td style="height: 50px">
                    <div style="height: 100%">
                       <ejs-dropdownlist id='axisIndex' ref="axis" :dataSource='axisindexdata' :fields='axisindexfields' value='0' index=0  :width='axisindexwidth' :change='changeAxisindex'></ejs-dropdownlist>                                        
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div style="font-size:14px"> Direction </div>
                </td>
                <td style="height: 50px">
                    <div style="height: 100%">
                       <ejs-dropdownlist id='axisDirection' ref="direction" :dataSource='axisdirectiondata' index=0  :width='axisdirectionwidth' :change='changeAxisdirection'></ejs-dropdownlist>                                                          
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div style="font-size:14px"> Start Angle</div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="start" id="startAngle" value="220" min="0" max="360" v-on:change="startAnglechange" style="width: 70%;" />
                    </div>
                </td>
                <td style="text-align: center;">
                    <span  id='start' style="margin-left: -30px;font-size: 14px;">220</span> 
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div style="font-size:14px"> End Angle</div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="end" id="endAngle" value="140" min="0" max="360" v-on:change="endAnglechange" style="width: 70%;"  />
                    </div>
                </td>
                <td style="text-align: center;">
                    <span  id='end' style="margin-left: -30px;font-size: 14px;">140</span> 
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of Circular Gauge sample">
    <p>
        This sample illustrates the multiple axes in the circular gauge as well as the options for changing the
        direction, start, and end angle of an axis.
    </p>
</section>

<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure multiple axes in the circular gauge. To render multiple
        axes in the circular gauge, use the axes collection, and each axis can be customized with pointers and ticks.
    </p>
    <p>
        More information on the multiple axes can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-axes/#multiple-axes">documentation
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

import { CircularGaugeComponent, isCompleteAngle, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
data:function(){
    return{
        lineStyle: { width: 1.5 },
        background:'transparent',
        gaugeradius: '93%',
        labelStyle: {
                position: 'Inside', autoAngle: true,
                hiddenLabel: 'None', 
                font: { fontFamily: 'inherit' }
        }, majorTicks: {
                position: 'Inside',
                width: 2, height: 10
        }, minorTicks: {
                position: 'Inside', width: 2,
                height: 5
        },
        startAngle: 220, endAngle: 140,
        value: 80, pointerRadius: '100%',
        markerHeight: 15, markerWidth: 15, type: 'Marker',
        markerShape: 'Triangle',
        lineStyle2: { width: 1.5, color: '#E84011' }, gaugeradius2: '93%',
        labelStyle2: {
                position: 'Outside', autoAngle: true,
                hiddenLabel: 'None', font: { fontFamily: 'inherit' }
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
        axisindexwidth:'115%',
        axisdirectiondata:['Clockwise','Anti-clockwise'],
        axisdirectionwidth:'115%'
       }
    },
    components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axis': AxisDirective,
    'e-axes': AxesDirective,
    'e-pointer': PointerDirective,
    'e-pointers': PointersDirective,
    'ejs-dropdownlist': DropDownListComponent,
   },
   methods: { 
    changeAxisindex:function(){
            let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);
            axisIndex = this.$refs.axis.ej2Instances.value;
            this.$refs.direction.ej2Instances.value = this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction == "ClockWise" ? "Clockwise" : "Anti-clockwise";
            let startAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle;
            let endAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle;
            document.getElementById('start').innerHTML = startAngle.toString();;
            document.getElementById('end').innerHTML = endAngle.toString();;
            (document.getElementById('startAngle')).value = startAngle.toString();
            (document.getElementById('endAngle')).value = endAngle.toString();        
    },
    changeAxisdirection: function(){
             let axisIndex = parseInt(this.$refs.axis.ej2Instances.value); 
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction = this.$refs.direction.ej2Instances.value.toString() == "Clockwise" ? "ClockWise" : "AntiClockWise" ;
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.refresh();        
    },
    startAnglechange:function(){
            let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);           
            let value = parseInt((document.getElementById('startAngle')).value, 10);
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle = value;
            document.getElementById('start').innerHTML = value.toString();;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =
                isCompleteAngle(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            this.$refs.circulargauge.ej2Instances.refresh();        
    },
    endAnglechange:function(){
            let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);       
            let value = parseInt((document.getElementById('endAngle')).value, 10);
            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle = value;
            document.getElementById('end').innerHTML =value.toString();;
            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =
                isCompleteAngle(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?
                    'First' : 'None';
            this.$refs.circulargauge.ej2Instances.refresh();        
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