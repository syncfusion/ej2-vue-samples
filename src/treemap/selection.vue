<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
             <ejs-treemap ref="treemap" id='import-container' :load='load' :titleSettings='titleSettings' :selectionSettings='selectionSettings' :highlightSettings='highlightSettings' :leafItemSettings='leafItemSettings' :dataSource='dataSource' :weightValuePath='weightValuePath' :levels='levels' ></ejs-treemap>
        </div>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://www.indexmundi.com/trade/imports/?country=jp" target="_blank">www.indexmundi.com</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                         <div class="property-text"><b>Highlight</b></div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 60%">
                       <div class="property-text"> Enable</div>
                    </td>
                    <td style="width: 40%;">
                        <div>
                            <ejs-checkbox ref="highlightEnable" id="highlightEnable"  checked="true" :change="changeHighlight"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 60%">
                        <div class="property-text">Mode</div>
                    </td>
                    <td style="width: 40%;">
                        <div>
                        <ejs-dropdownlist ref="highlightMode" id='highlightMode' :dataSource='highlightModedata' index=0 :placeholder='highlightModeplaceholder' :width='highlightModewidth' :change='changeHighlightmode'></ejs-dropdownlist>        
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 80%">
                         <div class="property-text"><b>Selection</b></div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 60%">
                       <div class="property-text">Enable</div>
                    </td>
                    <td style="width: 40%;">
                        <div>
                            <ejs-checkbox ref="selectionEnable" checked="true" id="SelectionEnable" :change="changeSelection"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 60%">
                        <div class="property-text"> Mode</div>
                    </td>
                    <td style="width: 40%;">
                        <div>
                        <ejs-dropdownlist ref="selectionMode" id='selectionMode' :dataSource='selectionModedata' index=0 :placeholder='selectionModeplaceholder' :width='selectionModewidth' :change='changeSelectionmode'></ejs-dropdownlist>       
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>
            This sample depicts the details of goods imported by Japan. Selection and highlight options have been enabled in this sample.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see the modes available for performing highlight and selection in TreeMap. It can be either enabled or disabled.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            TreeMap component features are segregated into individual feature-wise modules. To use highlight and selection, inject the <code>Selection</code> module using the <code>TreeMap.Inject(TreeMapSelection)</code>inject the <code>Highlight</code> module using the <code>TreeMap.Inject(TreeMapHighlight)</code> method.
        </p>
    </div>
</div>
</template>
 <style>
        .property-text {
            font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
            font-size: 13px !important;
            font-weight: 400 !important;
        }
         .check{
        opacity: 1 !important;
        position: relative !important;
        width: 15px !important;
        height: 15px !important;
    }
    label{
        height: 32px !important;
    }
</style>
<script>
import Vue from 'vue';
import { TreeMapPlugin,TreeMapHighlight, TreeMapSelection} from "@syncfusion/ej2-vue-treemap";
import { importData } from '../treemap/treemap-data/import';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Import and Export details of US'
        },
        selectionSettings: {
            enable: true,
            fill: '#58a0d3',
            border: { width: 0.3, color: 'black' },
            opacity: '1'
        },
        highlightSettings: {
            enable: true,
            fill: '#71b0dd',
            border: { width: 0.3, color: 'black' },
            opacity: '1'
        },
        leafItemSettings: {
            labelPath: 'type',
            fill: '#8ebfe2',
            labelPosition: 'Center',
            gap: 10
        },
        dataSource: importData,
        weightValuePath: 'sales',
        levels: [
            { groupPath: 'dataType', fill: '#c5e2f7', headerStyle: { size: '16px' }, headerAlignment: 'Center', groupGap: 5 },
            { groupPath: 'product', fill: '#a4d1f2', headerAlignment: 'Center' , groupGap: 2 }
        ],
        highlightModedata:['Item','Child','Parent','All'],
        highlightModeplaceholder: 'Select highlight type',
        highlightModewidth: 120,
        selectionModeplaceholder: 'Selection selection type',
        selectionModewidth: 120,
        selectionModedata:['Item','Child','Parent','All']
}
},
provide:{
    treemap:[TreeMapHighlight, TreeMapSelection]
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    // Code for Property Panel
    changeHighlightmode:function(args){
        this.$refs.treemap.ej2Instances.highlightSettings.mode = this.$refs.highlightMode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    },
    changeSelectionmode:function(args){
        this.$refs.treemap.ej2Instances.selectionSettings.mode = this.$refs.selectionMode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    },
    changeHighlight:function(args){
        this.$refs.treemap.ej2Instances.highlightSettings.enable = this.$refs.highlightEnable.ej2Instances.checked;
        this.$refs.treemap.ej2Instances.refresh();
    },
    changeSelection:function(args){
        this.$refs.treemap.ej2Instances.selectionSettings.enable = this.$refs.selectionEnable.ej2Instances.checked;
        this.$refs.treemap.ej2Instances.refresh();   
    }
}
})
</script>