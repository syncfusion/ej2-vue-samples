<template>
<div>
    <div class="col-lg-9 control-section">
        <ejs-treemap ref="treemap" id='container' align="center" :load='load' :titleSettings='titleSettings' :rangeColorValuePath='rangeColorValuePath' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :leafItemSettings='leafItemSettings' :legendSettings='legendSettings' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'></ejs-treemap>
        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://www.populationpyramid.net/population-size-per-country/2017" target="_blank"> www.populationpyramid.net</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div class="property-text">Label Intersect Action</div>
                    </td>
                    <td style="width: 40%;">
                    <ejs-dropdownlist ref="labelMode" id='labels' style="width:100%;" :dataSource='labelsdata' index=0 :placeholder='labelsplaceholder' :width='labelswidth' :change='changeLabels'></ejs-dropdownlist>        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates the population level of various countries in 2017. The leaf item’s labels intersect action can be changed by using the <code>Label Intersect Action</code> in properties panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see the various label intersect actions available in TreeMap. Range color mapping has been specified, and the default legend has been enabled in this example.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        TreeMap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module using the <code>TreeMap.Inject(TreeMapTooltip)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>TreeMap.Inject(TreeMapLegend)</code> method.
    </p>
</div>
</div>
</template>
// custom code start
<style>
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
</style>
// custom code end
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Country_Population } from '../treemap/treemap-data/country-population';
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Countries ordered based on Population - 2017',
            textStyle: { size: '15px' }
        },
        dataSource: Country_Population,
        tooltipSettings: {
            visible: true,
            format: '${Country} : ${Population}'
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            width: '300px',
            height: '10',
            position: 'Top'
        },
        useGroupingSeparator: true,
        rangeColorValuePath: 'Population',
        weightValuePath: 'Population',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'Country',
            fill: 'red',
            colorMapping: [
                {
                    to: 10000000000,
                    from: 100000000,
                    label: '200M - 1.3M',
                    color: '#4B134F'
                }, { to: 100000000, from: 20000000, label: '20M - 200M', color: '#8C304D' },
                { to: 20000000, from: 100000, label: '0.1M - 20M', color: '#C84B4B' }
            ]
        },
        labelsplaceholder: 'Select Label Action',
        labelswidth: 120,
        labelsdata:['Trim','Hide','Wrap','WrapByWord']
}
},
provide:{
    treemap:[TreeMapTooltip, TreeMapLegend]
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    changeLabels:function(args){
        this.$refs.treemap.ej2Instances.leafItemSettings.interSectAction = this.$refs.labelMode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    }
}
})
</script>
