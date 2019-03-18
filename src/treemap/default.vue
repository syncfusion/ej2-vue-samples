<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-treemap id='default-container' :load='load' :itemMove='itemMove' :itemClick='itemMove' :leafItemSettings='leafItemSettings' :titleSettings='titleSettings' :rangeColorValuePath='rangeColorValuePath' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :legendSettings='legendSettings' :palette='palette' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath' :levels='levels'></ejs-treemap>
    </div>
</div>

<div style="float: right; margin-right: 10px;">Source:
    <a href=" https://www.factorywarrantylist.com/car-sales-by-country.html/" target="_blank"> www.factorywarrantylist.com</a>
</div>
<div id="action-description">
    <p>
        This sample visualizes the sales of cars across various countries in 2017 by rendering the countries at the top level and car manufacturing companies as leaf items.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a TreeMap with the provided data source. The palette color is applied to the items in TreeMap. The default legend is enabled in this example to represent the items at the top level.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        TreeMap component features are segregated into individual feature-wise modules. To use a tooltip, inject the 
        <code>Tooltip</code> module using the <code>TreeMap.Inject(TreeMapTooltip)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>TreeMap.Inject(TreeMapLegend)</code> method.
    </p>
</div>
</div>  
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
import { CarSales } from '../treemap/treemap-data/car-sale';
Vue.use(TreeMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Car Sales by Country - 2017',
            textStyle: { size: '15px' }
        },
        rangeColorValuePath: 'Sales',
        useGroupingSeparator: true,
        dataSource: CarSales,
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
        },
        palette: ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
        tooltipSettings: {
            visible: true
        },
        leafItemSettings: {
            labelPath: 'Company',
            border: { color: 'white', width: 0.5 }
        },
        weightValuePath: 'Sales',
       levels: [
            {
                groupPath: 'Continent', border: { color: 'white', width: 0.5 },
            }
        ]
}
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    itemMove:function(args){
        args.item['data'].Sales = args.item['weight'];
        args.treemap.tooltipSettings.format = args.item['groupIndex'] === 0 ? 'Country: ${Continent}<br>Sales: ${Sales}' :
                'Country: ${Continent}<br>Company: ${Company}<br>Sales: ${Sales}';
    }
},
provide:{
    treemap:[TreeMapTooltip, TreeMapLegend]
}
})
</script>
