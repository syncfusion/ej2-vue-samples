<template>
<div>
<div>
    <div class="col-lg-9 control-section">
            <ejs-smithchart ref="smithchart" id='container' :title='title' :load='load' :legendSettings='legendSettings'>
                <e-seriesCollection>
                    <e-series :points='points' :name='name' :enableAnimation='enableAnimation' :tooltip='tooltip' :marker='marker'></e-series>
                    <e-series :points='points2' :name='name2' :enableAnimation='enableAnimation2' :tooltip='tooltip2' :marker='marker2'></e-series>
                </e-seriesCollection>
            </ejs-smithchart>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" style="width:100%" title="Properties">
            <tbody>
                <tr style="height: 30px">
                    <td style="width: 50%">
                        Render Type
                    </td>
                    <td style="width: 50%">
                        <ejs-dropdownlist id='rendering' :dataSource='renderingdata' index=0  :width='renderingwidth' :change='changeRendering'></ejs-dropdownlist>        
                    </td>
                </tr>
            </tbody>
        </table>
  <div id="action-description">
    <p>
        This sample visualizes two transmissions in Smith chart. Rendering Smith chart can be changed by using the <code>Render Type</code> in properties panel.
    </p>
</div>
<div id="description">
    <p>
        <p>In this example, you can see how to render a Smith chart with multiple series. Legend has been enabled to denote the series in Smith chart.
    </p>
	<p>
	Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a data point or tap a data point in touch enabled devices
	</p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>      
       Smith chart component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module using the <code>SmithChart.Inject(TooltipRender)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>SmithChart.Inject(Legend)</code> method.
    </p>
</div>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { SmithchartPlugin,SmithchartLegend, TooltipRender } from '@syncfusion/ej2-vue-charts';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(SmithchartPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{  
                 title: {
                    visible: true,
                    text: 'Transmission details'
                },
                points: [
                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                    { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                    { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                    { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                    { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                ],
                name: 'Transmission1',
                enableAnimation: true,
                tooltip: { visible: true },
                marker: {
                    shape: 'Circle',
                    visible: true,
                    border: {
                        width: 2,
                    }
                },
                points2: [
                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                    { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                    { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                    { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                    { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                ],
                name2: 'Transmission2',
                enableAnimation2: true,
                tooltip2: { visible: true },
                marker2: {
                    shape: 'Circle',
                    visible: true,
                    border: {
                        width: 2,
                    }
                },
        legendSettings: {
            visible: true,
            shape: 'Circle'
        },
        renderingdata:['Impedance','Admittance'],
        renderingwidth:120
}
},
provide:{
    smithchart:[SmithchartLegend, TooltipRender]
},
methods:{
    /* custom code start */
     load:function(args){
            let theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.smithchart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    changeRendering:function(args){
        let mode = document.getElementById('rendering');
        let element = args.value;
        this.$refs.smithchart.ej2Instances.renderType = element;
        this.$refs.smithchart.ej2Instances.refresh();
    }
}
})
</script>