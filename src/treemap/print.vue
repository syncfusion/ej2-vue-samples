<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
             <ejs-treemap ref="treemap" id='container' :load='load' :titleSettings='titleSettings' :dataSource='dataSource' :layoutType='layoutType' :weightValuePath='weightValuePath' :rangeColorValuePath='rangeColorValuePath' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings'></ejs-treemap>
        </div>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" http://zeenews.india.com/photos/business/worlds-10-best-selling-smartphone-brands-2033958/samsung-2033959" target="_blank">zeenews.india.com</a>
        </div>
    </div>
   <div id="action-description">
        <p>
            This sample depicts the top 10 best-selling smartphone brands. Print and export options have been enabled in this sample.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to export and print the rendered TreeMap. The TreeMap can be exported to JPEG, PNG, SVG, and PDF formats.
        </p>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                      <div class="property-text">Export Type
                        </div>
                    </td>
                    <td style="width: 60%;">
                        <div style="margin-left: -10px">
                        <ejs-dropdownlist ref="mode" id='mode' :dataSource='modedata' index=0  :width='modewidth'></ejs-dropdownlist>        
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div class="property-text">File Name</div>
                    </td>
                    <td style="width: 40%;">
                        <div class="e-float-input" style='margin-top: 0px;'>
                            <input type="text" value="Treemap" id="fileName" style="margin-left: -10px">
                        </div>
                    </td>
                </tr>
                <tr id="button-control" style="height: 50px" align='center'>
                    <td>
                        <div style="margin-left: 40%;">
                            <ejs-button id='togglebtn1' :style='style' :cssClass='cssClass' :isPrimary='isPrimary' :content='content1' isToggle="true" v-on:click.native='clickExport'></ejs-button>
                        </div>
                    </td>
                </tr>
                <tr id="button-control" style="height: 50px">
                    <td align="center">
                        <div style="margin-left: 40%;">
                            <ejs-button id='togglebtn' :style='style' :cssClass='cssClass' :isPrimary='isPrimary' :content='content2' isToggle="true" v-on:click.native='clickPrint'></ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<style>
    #button-control {
        width: 100%;
        text-align: center;
    }
    
    #control-container {
        padding: 0px !important;
    }
    
    .e-play-icon::before {
        content: '\e813';
    }
    #button-control {
        width: 100%;
        text-align: center;
    }

    #control-container {
        padding: 0px !important;
    }

    .e-play-icon::before {
        content: '\e728';
    }
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
    #togglebtn {
        width: 80px;
    }
    #togglebtn1 {
        width: 80px;
    }
</style>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { ProductSale } from '../treemap/treemap-data/product';
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
export default Vue.extend({
data:function(){
return{
      titleSettings: {
            text: 'Top 10 best selling smartphone brands - 2017',
            textStyle: { size: '15px'}
        },
        dataSource: ProductSale,
        layoutType: 'SliceAndDiceVertical',
        weightValuePath: 'Percentage',
        rangeColorValuePath: 'Percentage',
        tooltipSettings: {
            visible: true,
            format: '${Product} (+${Percentage}) %'
        },
        leafItemSettings: {
            labelPath: 'Product',
            fill: '#6699cc',
            border: { color: 'black', width: 0.5 },
            labelPosition: 'Center',
            interSectAction: 'Hide',
            labelFormat: '${Product} (+${Percentage}) %',
            colorMapping: [
                {
                    from: 1.3,
                    to: 22,
                    color: '#FAB665',
                    minOpacity: 0.5,
                    maxOpacity: 1
                }
            ]
        },
        cssClass: 'e-info', isPrimary: true,content1:'Export',content2:'Print', style: 'text-transform:none !important',
        modewidth: 90,
        modedata:['JPEG','PNG','SVG','PDF']
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
    clickExport:function(args){
        let fileName = ((document.getElementById('fileName'))).value;
        this.$refs.treemap.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);
    },
    clickPrint:function(args){
        this.$refs.treemap.ej2Instances.print();
    }
}
})
</script>