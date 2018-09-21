<template>
<div>
    <div class="col-lg-9 control-section">
           <ejs-smithchart id='container' :load='load' :horizontalAxis='horizontalAxis' :radialAxis='radialAxis' :legendSettings='legendSettings'>
                <e-seriesCollection>
                    <e-series :points='points' :name='name' :enableAnimation='enableAnimation' :tooltip='tooltip' :marker='marker'></e-series>
                </e-seriesCollection>
            </ejs-smithchart>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>Export Type</div>
                    </td>
                    <td style="width: 60%;">
                        <div style="margin-left: -10px">
                            <ejs-dropdownlist id='mode' :dataSource='modedata' index=0  :width='modewidth'></ejs-dropdownlist>  
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>File Name</div>
                    </td>
                    <td style="width: 60%;">
                        <div class="e-float-input" style="margin-top: 0px;">
                            <input type="text" value="Smith chart" id="fileName" style="margin-left: -10px;width:90px;">
                        </div>
                    </td>
                </tr>
                <tr id="button-control1">
                    <td>
                        <div style="height: 45px">
                            <ejs-button id='togglebtn1' :iconCss='iconCss' :cssClass='cssClass' :isPrimary='isPrimary' :content='content1' isToggle="true" v-on:click.native='clickExport'></ejs-button>
                        </div>
                    </td>
                </tr>
                <tr id="button-control2">
                    <td>
                        <div style="height: 45px">
                            <ejs-button id='togglebtn2' :iconCss='iconCss' :cssClass='cssClass' :isPrimary='isPrimary' :content='content2' isToggle="true" v-on:click.native='clickPrint'></ejs-button>                       
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample explores the exporting and printing functionality in Smith chart.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to export and print the rendered Smith chart. Smith chart can be exported to JPEG, PNG, SVG, and PDF formats.
    </p>
</div>
</div>
</template>
<style>    
    .e-play-icon::before {
        content: '\e728';
    }
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
</style>
<script>
import Vue from 'vue';
import { SmithchartPlugin,SmithchartLegend, TooltipRender } from '@syncfusion/ej2-vue-charts';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(SmithchartPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
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
            shape: 'Circle'
        },
        points: [
                    { resistance: 0.15, reactance: 0 },
                    { resistance: 0.15, reactance: 0.15 },
                    { resistance: 0.18, reactance: 0.3 },
                    { resistance: 0.2, reactance: 0.4 },
                    { resistance: 0.25, reactance: 0.6 },
                    { resistance: 0.38, reactance: 0.95 },
                    { resistance: 0.6, reactance: 1.25 },
                    { resistance: 1, reactance: 1.6 },
                    { resistance: 1.65, reactance: 1.9 },
                    { resistance: 2.75, reactance: 2 },
                    { resistance: 4.5, reactance: 0 },
                    { resistance: 3, reactance: -2 },
                    { resistance: 1.65, reactance: -1.95 },
                    { resistance: 1, reactance: -1.65 },
                    { resistance: 0.6, reactance: -1.25 },
                    { resistance: 0.35, reactance: -0.9 },
                    { resistance: 0.25, reactance: -0.6 },
                    { resistance: 0.25, reactance: -0.4 },
                    { resistance: 0.25, reactance: -0.3 },
                    { resistance: 0.25, reactance: -0.15 },
                    { resistance: 0.25, reactance: 0 },
                ],
            name: 'Transmission',
            enableAnimation: true,
            tooltip: { visible: true },
            marker: {
                    shape: 'Circle',
                    visible: true,
                    border: {
                        width: 2,
                    }
            },
          iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,content1:'Export',content2:'Print',
          modedata:['JPEG','PNG','SVG','PDF'],
          modewidth:90
}
},
provide:{
    smithchart:[SmithchartLegend, TooltipRender]
},
methods:{
     load:function(args){
            let theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.smithchart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    clickExport:function(args){
        let smithchart = document.getElementById('container');
        let mode = document.getElementById('mode');
        let fileName = ((document.getElementById('fileName'))).value;
        smithchart.ej2_instances[0].export(mode.ej2_instances[0].value, fileName);
    },
   clickPrint:function(args){
        let smithchart = document.getElementById('container');
        smithchart.ej2_instances[0].print();
   } 
}
})
</script>