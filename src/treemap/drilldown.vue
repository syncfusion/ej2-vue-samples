<template>
<div>
    <div class="control-section">
        <ejs-treemap id='container' align="center" :load='load' :drillStart='drillStart' :tooltipRendering='tooltipRendering' :palette='palette' :titleSettings='titleSettings' :enableDrillDown='enableDrillDown' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :weightValuePath='weightValuePath' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings' :levels='levels'></ejs-treemap>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_continents_by_population" target="_blank">en.wikipedia.org</a>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates drill-down with the continents at the top level followed by regions and countries. By clicking a continent, you can view all the countries available in that continent clearly.
    </p>
</div>
<div id="description">
    <p>
        In this example you can see how to render a TreeMap with multiple items and drill it further. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
import { DrillDown } from '../treemap/treemap-data/drilldown-sample';
Vue.use(TreeMapPlugin);
export default Vue.extend({
data:function(){
return{
        palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
        titleSettings: {
            text: 'List of countries by population',
            textStyle: { size: '15px'}
        },
        enableDrillDown: true,
        useGroupingSeparator: true,
        dataSource: DrillDown,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: '${Name} : ${Population}'
        },
         leafItemSettings: {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 }
        },
        levels: [
            { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'Region', showHeader: false, fill: '#336699', border: { color: 'black', width: 0.5 } },
        ]   
}
},
provide:{
    treemap:[TreeMapTooltip]
},
methods:{
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    drillStart:function(args){
        if (args.item[Object.keys(args.item)[0]].length === 1) {
                args.treemap.levels[2].showHeader = true;
            } else {
                args.treemap.levels[2].showHeader = false;
        }
    },
    tooltipRendering:function(args){
         if (args.item['groupIndex'] !== 2 ) {
                args.cancel = true;
        }
    }    
}
})
</script>