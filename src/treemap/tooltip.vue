<template>
<div>
    <div class="control-section">
        <ejs-treemap id='container' :load='load' :titleSettings='titleSettings' :legendSettings='legendSettings' align="center" :equalColorValuePath='equalColorValuePath' :leafItemSettings='leafItemSettings' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'></ejs-treemap>
    </div>

    <div id="Tooltip" style="display:none">
        <div id='displayAirports'>
            <div id="airplaneicon" style="float:left;height:32px;width:32px;">
            </div>
            <div id="value" style="float:left;">
                <span id="label" style="margin-left: -5px;">Airports: </span>
                <b style="margin-left: 5px">${Count}</b>
            </div>
        </div>
    </div>

    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_international_airports_by_country" target="_blank">en.wikipedia.org</a>
    </div>
   <div id="action-description">
    <p>
        This sample depicts the number of international airports available in various countries in South America. On hover, the items
        details will be displayed in tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to apply equal color mapping and apply colors to TreeMap items based on certain value.
    </p>
    <p>
        Tooltip template is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in
        touch enabled devices.
    </p>
</div>
</div>
</template>
<style class="cssStyles">
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
</style>
<style scoped>
    #airplaneicon {
        background-image: url("./image/airplane.svg");
        background-repeat: no-repeat;
    }
    #displayAirports {
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 6px;
        padding-top: 6px;
        background: #EFEFEF;
        height: 45px;
        width: 140px;
        border: 1px #919191;
        box-shadow: 0px, 2px;
    }
    #value {
        margin-top: 5px;
        color: #585C60;
        font-family: Roboto-Bold;
        font-size: 16px;
    }
    #label {
        padding-left: 8px;
        color: #5D5D5D;
        font-family: Roboto-Regular;
        font-size: 16px;
    }
</style>
<script>
import Vue from 'vue';
import { TreeMapPlugin,TreeMapTooltip,TreeMapLegend} from "@syncfusion/ej2-vue-treemap";
import { Airport_Count } from '../treemap/treemap-data/airport-count';
Vue.use(TreeMapPlugin);
export default Vue.extend({
data:function(){
return{
        tooltipSettings: {
            visible: true,
            template: '#Tooltip'
        },
        titleSettings: {
            text: 'Country wise International Airport count in South America',
            textStyle: {
                size: '15px'
            }
        },
        dataSource: Airport_Count,
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
      leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                size: '13px'
            },
            fill: '#6699cc',
            border: { width: 1, color: 'white' },
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                }
            ]
        }
}
},
provide:{
    treemap:[TreeMapTooltip,TreeMapLegend]
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
})
</script>