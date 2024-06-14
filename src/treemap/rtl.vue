<template>
<main><div>
    <div class="control-section">
        <ejs-treemap id='container' align="center" :load='load' :palette='palette' :titleSettings='titleSettings' :enableRtl='enableRtl' :renderDirection='renderDirection' :enableDrillDown='enableDrillDown' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :weightValuePath='weightValuePath' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings' :levels='levels'></ejs-treemap>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_continents_by_population" target="_blank">en.wikipedia.org</a>
    </div>   
</div> 
<section id="action-description" aria-label="Description of TreeMap sample">
    <p>
        This sample orders the countries based on the unemployment rate by rendering TreeMap in the right-to-left (RTL)
        direction.
    </p>
</section>
<section id="description" aria-label="Description of the TreeMap features demonstrated in this sample">
    <p>
        In this example, you can see how to render a TreeMap from the right-to-left direction. The tooltip is enabled in
        this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch-enabled
        devices.
    </p>
</section>
</main>
</template>
<script>
import { TreeMapComponent, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
import { RTLData } from '../treemap/treemap-data/rtl-data';

export default {
components: {
    'ejs-treemap': TreeMapComponent
},
data:function(){
return{
        palette: ['#5B244D', '#6F3953', ' #87525A', '#A26F63', '#BA896B', '#D5A574', '#F1C37D'],
        titleSettings: {
            text: 'List of countries by unemployment rate',
            textStyle: { size: '15px',  fontFamily: 'Segoe UI'}
        },
        enableDrillDown: true,
        useGroupingSeparator: true,
        dataSource: RTLData,
        renderDirection:'TopRightBottomLeft',
        enableRtl:true,
        weightValuePath: 'Size',
        tooltipSettings: {
            visible: true,
            format: '${Size} : ${Name}',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
         leafItemSettings: {
            labelPath: 'Name',
            showLabels: true,
            labelStyle: {
                fontFamily: 'Segoe UI'
            },            
        },
        levels: [
            { groupPath: 'Continent',  border: { color: 'black', width: 0.5 }, headerAlignment:'Far' },
            { groupPath: 'Country', border: { color: 'black', width: 0.5 }, headerAlignment:'Far' }            
        ]
}
},
provide:{
    treemap:[TreeMapTooltip]
},
/* custom code start */
methods:{
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    }
}
/* custom code end */
}
</script>