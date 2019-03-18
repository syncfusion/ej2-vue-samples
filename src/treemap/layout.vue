<template>
<div>
    <div class="col-lg-9 control-section">
        <ejs-treemap ref="treemap" id='layout-container' :load='load' align="center" :titleSettings='titleSettings' :rangeColorValuePath='rangeColorValuePath' format='n' useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :leafItemSettings='leafItemSettings' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'></ejs-treemap>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://www.reinisfischer.com/top-10-largest-economies-world-gdp-nominal-2015" target="_blank">www.reinisfischer.com</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                         <div class="property-text" style="padding-top: 0px !important">Layout Type</div>
                    </td>
                    <td style="width: 40%;">
                    <ejs-dropdownlist ref="layoutMode" id='layoutMode' :dataSource='layoutModedata' :fields='labelsfields' value='Squarified' index=0  :placeholder='layoutModeplaceholder' :width='layoutModewidth' :change='changeLayoutMode'></ejs-dropdownlist>        
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 60%">
                         <div class="property-text" style="padding-top: 0px !important">Render Direction</div>
                    </td>
                    <td style="width: 40%;">
                    <ejs-dropdownlist ref="directionMode" id='directionMode' :dataSource='directionModedata' :fields='directionfields' value='TopLeftBottomRight' index=0  :placeholder='directionModeplaceholder' :width='directionModewidth' :change='changedirectionMode'></ejs-dropdownlist>        
                    </td>
                </tr>
            </tbody>
        </table>
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
import { TreeMapPlugin,TreeMapTooltip, RenderingMode } from "@syncfusion/ej2-vue-treemap";
import { econmics } from '../treemap/treemap-data/econmics';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{
        // To config title for treemap 
        titleSettings: {
            text: 'Top 10 countries by GDP Nominal - 2015',
            textStyle: {size: '15px'}
        },
        dataSource: econmics,
        weightValuePath: 'GDP',
         // To config tooltip for treemap 
        tooltipSettings: {
            visible: true,
            format: '${State}<br>Rank : ${Rank}'

        },
        rangeColorValuePath: 'GDP',
        // To config leafitem customization for treemap
        leafItemSettings: {
            labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000'
            },
            border: {
                color: '#000000',
                width: 0.5
            },
            colorMapping: [
                {
                    from: 1550,
                    to: 17946,
                    color: '#9cbb59',
                    minOpacity: 0.7,
                    maxOpacity: 1,
                }
            ]
        },
        layoutModedata:[
        { Id:'Squarified', level:'Squarified'},
        { Id:'SliceAndDiceHorizontal', level:'Horizontal'},
        { Id:'SliceAndDiceVertical', level:'Vertical'},
        { Id:'SliceAndDiceAuto', level:'Auto'}],
        labelsfields:{ text: 'level', value: 'Id' },
        layoutModeplaceholder: 'Select layoutMode type',
        layoutModewidth: 120,
        directionModedata:[
        { Id:'TopLeftBottomRight', level:'TopLeftBottomRight'},
        { Id:'TopRightBottomLeft', level:'TopRightBottomLeft'},
        { Id:'BottomLeftTopRight', level:'BottomLeftTopRight'},
        { Id:'BottomRightTopLeft', level:'BottomRightTopLeft'}],
        directionfields:{ text: 'level', value: 'Id' },
        directionModeplaceholder: 'Select layoutMode type',
        directionModewidth: 115
}
},
provide:{
    treemap:[TreeMapTooltip]
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    changeLayoutMode:function(args){
        this.$refs.treemap.ej2Instances.layoutType = this.$refs.layoutMode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    },
    changedirectionMode:function(args){
        this.$refs.treemap.ej2Instances.renderDirection = this.$refs.directionMode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    }
}
})
</script>
