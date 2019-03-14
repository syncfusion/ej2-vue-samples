<template>
<div>
    <div class="col-lg-9 control-section">
              <ejs-smithchart ref="smithchart" id='container' :load='load' :horizontalAxis='horizontalAxis' :radialAxis='radialAxis' radius=1 :legendSettings='legendSettings' :title='title'>
                <e-seriesCollection>
                    <e-series :points='points' :name='name' :width='width' :enableSmartLabels='enableSmartLabels' :fill='fill' :enableAnimation='enableAnimation' :tooltip='tooltip' :marker='marker'></e-series>
                    <e-series :points='points2' :name='name2' :width='width2' :enableSmartLabels='enableSmartLabels2' :fill='fill2' :enableAnimation='enableAnimation2' :tooltip='tooltip2' :marker='marker2'></e-series>
                </e-seriesCollection>
            </ejs-smithchart>
    </div>

    <div class="col-lg-3 property-section">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>
        <table id="property" style="width:100%" title="Properties">
            <tbody>
                <tr style="height: 35px">
                    <td style="width: 70%" id="radius1">
                        Radius<span>&nbsp;&nbsp;&nbsp;10</span>
                    </td>
                    <td style="width: 70%">
                        <div style="width:70%">
                            <ejs-slider id='radius' :value='value' :type='type' :change='changeRadius' max=1 min=0 :step='step'></ejs-slider>
                        </div>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Marker
                    </td>
                    <td style="width: 50%">
                        <ejs-checkbox checked="true" name="marker" id="marker" :change='changeMarker'></ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Data Label
                    </td>
                    <td style="width: 50%">
                        <ejs-checkbox name="datalabel" id="datalabel" :change='changeDatalabel'></ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Animation
                    </td>
                    <td style="width: 50%">
                        <ejs-checkbox  name="high" id="animate" :change='changeAnimate'></ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Tooltip
                    </td>
                    <td style="width: 50%">
                        <ejs-checkbox checked="true" name="high" id="tooltip" :change='changeTooltip'></ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Legend
                    </td>
                    <td style="width: 50%">
                        <ejs-checkbox checked="true" name="high" id="legend" :change='legendChange'></ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 35px">
                    <td style="width: 70%">
                        Legend Position
                    </td>
                    <td style="width: 50%">
                        <ejs-dropdownlist ref="legendPosition" id='legend1' :dataSource='legend1data' :fields='legend1fields' value='top' index=0  :width='legend1width' :change='changeLegend'></ejs-dropdownlist>        
                     </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes two transmissions in a Smith chart. Rendering Smith chart can be changed by using the <code>Render Type</code> in properties panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a Smith chart with multiple series. Legend has been enabled to denote the series in Smith chart.
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>      
        Smith chart component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module using the <code>SmithChart.Inject(TooltipRender)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>SmithChart.Inject(Legend)</code> method
    </p>
</div>
</div>
</template>
<style>
   .smithinput {
        opacity: 1 !important;
        position: relative !important;
        height: 15px !important;
        width: 15px !important;
    }
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
    #radius > * {
        padding: 0px !important;
    }
    label{
        height: 32px !important;
    }
</style>
<script>
import Vue from 'vue';
import { SmithchartPlugin,SmithchartLegend, TooltipRender } from '@syncfusion/ej2-vue-charts';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(SmithchartPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(SliderPlugin);
export default Vue.extend({
data:function(){
return{  
        horizontalAxis: {
            minorGridLines: {
                visible: true
            }
        },
        radialAxis: {
            minorGridLines: {
                visible: true
            }
        },
        legendSettings: {
            visible: true,
            position: 'Top',
            border: { color: 'transparent' },
            shape: 'Circle'
        },
        title: {
            text: 'Impedance Transmission', enableTrim: true, maximumWidth: 200,
            visible: true, font: { size: '16px' }
        },
        points: [
                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 4 },
                    { resistance: 3.5, reactance: 3 }, { resistance: 2.5, reactance: 2 },
                    { resistance: 2, reactance: 1.5 }, { resistance: 1.5, reactance: 1.25 },
                    { resistance: 1, reactance: 0.9 }, { resistance: 0.5, reactance: 0.6 },
                    { resistance: 0.3, reactance: 0.4 }, { resistance: 0, reactance: 0.15 },
                ],
        name: 'Transmission1',
        enableAnimation: false,
        width: 2,
        tooltip: { visible: true },
        enableSmartLabels: false,
        fill: '#0F94C4',
        marker: {
                    shape: 'rectangle',
                    visible: true,
                    border: {
                        width: 2,
            }
        },
        points2: [
                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.8 },
                    { resistance: 3.5, reactance: -0.8 }, { resistance: 2.5, reactance: -0.4 },
                    { resistance: 2, reactance: -0.2 }, { resistance: 1.5, reactance: 0 },
                    { resistance: 1, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
                    { resistance: 0.3, reactance: 0.15 }, { resistance: 0, reactance: 0.05 },
                ],
        name2: 'Transmission2',
        enableAnimation2: false,
        width2: 2,
        tooltip2: { visible: true },
        enableSmartLabels2: false,
        fill2: '#EE0C88',
        marker2: {
                    shape: 'rectangle',
                    visible: true,
                    border: {
                        width: 2,
            }
        },
        legend1data:[{ Id:'top', level:'Top'},
        { Id:'bottom', level:'Bottom'},
        { Id:'right', level:'Right'},
        { Id:'left', level:'Left'}],
        legend1fields:{text: 'level', value: 'Id'},
        legend1width:120,
        value: 1, type: 'MinRange',
        step: 0.1

}
},
provide:{
    smithchart:[SmithchartLegend, TooltipRender]
},
mounted(){
    document.getElementById('radius1').innerHTML = 'Radius <span> ' + 1;
},
methods:{
    /* custom code start*/
     load:function(args){
            let theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.smithchart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    // Code for Property Panel
    changeLegend:function(args){
        let element = args.value.toString();
        this.$refs.smithchart.ej2Instances.legendSettings.position = element;
        this.$refs.smithchart.ej2Instances.refresh();
    },
    changeRadius:function(e){
            this.$refs.smithchart.ej2Instances.radius = e.value;
            document.getElementById('radius1').innerHTML = 'Radius <span> ' + (e.value);
            this.$refs.smithchart.ej2Instances.refresh();
    },
    changeMarker:function(e){
        let boolean = (event.target).checked;
        if (boolean) {
            this.$refs.smithchart.ej2Instances.series[0].marker.visible = true;
            this.$refs.smithchart.ej2Instances.series[1].marker.visible = true;
        } else {
            this.$refs.smithchart.ej2Instances.series[0].marker.visible = false;
            this.$refs.smithchart.ej2Instances.series[1].marker.visible = false;
        }
        this.$refs.smithchart.ej2Instances.refresh();
    },
    changeDatalabel:function(e){
        let boolean = (event.target).checked;
        if (boolean) {
            this.$refs.smithchart.ej2Instances.series[0].marker.dataLabel.visible = true;
            this.$refs.smithchart.ej2Instances.series[1].marker.dataLabel.visible = true;
        } else {
            this.$refs.smithchart.ej2Instances.series[0].marker.dataLabel.visible = false;
            this.$refs.smithchart.ej2Instances.series[1].marker.dataLabel.visible = false;
        }
        this.$refs.smithchart.ej2Instances.refresh();
    },
    changeAnimate:function(e){
        let boolean = (event.target).checked;
        if (boolean) {
            this.$refs.smithchart.ej2Instances.series[0].enableAnimation = true;
            this.$refs.smithchart.ej2Instances.series[1].enableAnimation = true;
        } else {
            this.$refs.smithchart.ej2Instances.series[0].enableAnimation = false;
            this.$refs.smithchart.ej2Instances.series[1].enableAnimation = false;
        }
        this.$refs.smithchart.ej2Instances.refresh();
    },
    changeTooltip:function(e){
        let boolean = (event.target).checked;
        if (boolean) {
            this.$refs.smithchart.ej2Instances.series[0].tooltip.visible = true;
            this.$refs.smithchart.ej2Instances.series[1].tooltip.visible = true;
        } else {
            this.$refs.smithchart.ej2Instances.series[0].tooltip.visible = false;
            this.$refs.smithchart.ej2Instances.series[1].tooltip.visible = false;
        }
        this.$refs.smithchart.ej2Instances.refresh();
    },
    legendChange:function(e){
        let mode = document.getElementById('legend1');
        let boolean = (event.target).checked;
        if (boolean) {
            this.$refs.smithchart.ej2Instances.legendSettings.visible = true;
            this.$refs.legendPosition.ej2Instances.enabled = true;
        } else {
            this.$refs.smithchart.ej2Instances.legendSettings.visible = false;
            this.$refs.legendPosition.ej2Instances.enabled = false;
        }
        this.$refs.smithchart.ej2Instances.refresh();
    }
}
})
</script>