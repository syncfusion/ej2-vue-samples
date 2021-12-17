<template>
<div>
    <div class="col-lg-9 control-section">
        <ejs-treemap ref="treemap" id='layout-container' :load='load' align="center" :titleSettings='titleSettings' :rangeColorValuePath='rangeColorValuePath' format='n' useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :leafItemSettings='leafItemSettings' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'></ejs-treemap>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://www.reinisfischer.com/top-10-largest-economies-world-gdp-nominal-2015" target="_blank">www.reinisfischer.com</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
         <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
            <tbody>
                <tr style="height: 50px">
                    <td>
                         <div style="padding-top: 0px !important;width: 99%;">Layout Type</div>
                    </td>
                    <td>
                    <ejs-dropdownlist ref="layoutMode" id='layoutMode' :dataSource='layoutModedata' :fields='labelsfields' value='Squarified' index=0  :placeholder='layoutModeplaceholder' :width='layoutModewidth' :change='changeLayoutMode'></ejs-dropdownlist>        
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                         <div style="padding-top: 0px !important">Render Direction</div>
                    </td>
                    <td>
                    <ejs-dropdownlist ref="directionMode" id='directionMode' :dataSource='directionModedata' :fields='directionfields' value='TopLeftBottomRight' index=0  :placeholder='directionModeplaceholder' :width='directionModewidth' :change='changedirectionMode'></ejs-dropdownlist>        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
    <p>This sample illustrates the GDP nominal of top 10 countries in the year 2015. The layout and rendering direction of the TreeMap can be changed by using the <code>Layout Type</code> and <code>Render Direction</code> in the properties panel.
    </p>
  </div>
<div id="description">
    <p>In this example, you can change the layout of the TreeMap as desaturation color mapping has been applied to denote the weightage of the items by varying the fill color. The label's text also has been formatted and placed in multiple lines.
    </p>
    <p>
       The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch-enabled devices.
    </p>
</div>
</div>
</template>
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
            textStyle: {size: '15px', fontFamily: 'Segoe UI'}
        },
        dataSource: econmics,
        weightValuePath: 'GDP',
         // To config tooltip for treemap 
        tooltipSettings: {
            visible: true,
            format: '${State}<br>Rank : ${Rank}',
             textStyle: {
                fontFamily: 'Segoe UI'
            }

        },
        rangeColorValuePath: 'GDP',
        // To config leafitem customization for treemap
        leafItemSettings: {
            labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000',
                fontFamily: 'Segoe UI'
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
        layoutModewidth: '100%',
        directionModedata:[
        { Id:'TopLeftBottomRight', level:'TopLeftBottomRight'},
        { Id:'TopRightBottomLeft', level:'TopRightBottomLeft'},
        { Id:'BottomLeftTopRight', level:'BottomLeftTopRight'},
        { Id:'BottomRightTopLeft', level:'BottomRightTopLeft'}],
        directionfields:{ text: 'level', value: 'Id' },
        directionModeplaceholder: 'Select layoutMode type',
        directionModewidth: '100%'
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
        args.treemap.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
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
