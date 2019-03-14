<template>
<div>
    <div class="control-section">
        <ejs-treemap id='container' :load='load' :titleSettings='titleSettings' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings' :dataSource='dataSource' :weightValuePath='weightValuePath'></ejs-treemap>
    </div>

    <div style="float: right; margin-right: 10px;">Source:
        <a href=" https://en.wikipedia.org/wiki/United_States_at_the_2016_Summer_Olympics" target="_blank"> en.wikipedia.org</a>
    </div>
<div id="action-description">
    <p>
        This sample depicts the gold medal categories of the 2016 U.S. Summer Olympics. Each category is denoted with label template.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to place custom HTML templates in the TreeMap items. The default text of the labels also have been formatted.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        TreeMap component features are segregated into individual feature-wise modules. To use a tooltip, inject the 
        <code>Tooltip</code> module using the <code>TreeMap.Inject(TreeMapTooltip)</code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin,TreeMapTooltip} from "@syncfusion/ej2-vue-treemap";
import { Browser } from '@syncfusion/ej2-base';
import { Metals } from '../treemap/treemap-data/metals';
import Template from './customization-temp.vue';
Vue.use(TreeMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'US Gold medal categories in Summer Olympics - 2016',
            textStyle: {size: '15px'}
        },
        dataSource: Metals,
        weightValuePath: 'Gold',
         // To config tooltip for treemap 
        tooltipSettings: {
            visible: true,
            format: '${Sport} : ${Gold}'
        },
        // To config leaf items for treemap
        leafItemSettings: {
            showLabels: !Browser.isDevice,
           // showLabels: true,
            labelPath: 'Sport',
            fill: '#993399',
            templatePosition: 'Center',
            border: { color: 'black', width: 0.5 },
            labelFormat: ' ${Sport} - ${Gold}',
            labelTemplate: function () { return {template: Template}; },
        }
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
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}
/* custom code end */
})
</script>
