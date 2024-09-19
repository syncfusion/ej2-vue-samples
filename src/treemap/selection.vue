<template>
<main><div id="tree_selection">
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
             <ejs-treemap ref="treemap" id='import-container' :load='load' :titleSettings='titleSettings' :selectionSettings='selectionSettings' :highlightSettings='highlightSettings' :leafItemSettings='leafItemSettings' :dataSource='dataSource' :weightValuePath='weightValuePath' :levels='levels' ></ejs-treemap>
        </div>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://www.indexmundi.com/trade/imports/?country=jp" target="_blank">www.indexmundi.com</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
        </colgroup>
          <tbody>
                <tr style="height: 50px">
                    <td>
                         <div><b>Highlight</b></div>
                    </td>
                </tr>
                <tr style="height: 50px;">
                    <td>
                       <div> Enable</div>
                    </td>
                    <td>
                        <div class="property-checkbox" style="margin-top: -10px; margin-left: -10px;">
                            <ejs-checkbox ref="highlightEnable" id="highlightEnable"  checked="true" :change="changeHighlight"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr  style="height: 50px;">
                    <td>
                        <div>Mode</div>
                    </td>
                    <td>
                        <div style="margin-top: -4px;">
                        <ejs-dropdownlist ref="highlightMode" id='highlightMode' :dataSource='highlightModedata' index=0 :placeholder='highlightModeplaceholder' :width='highlightModewidth' :change='changeHighlightmode'></ejs-dropdownlist>        
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                         <div><b>Selection</b></div>
                    </td>
                </tr>
                <tr style="height: 50px;">
                    <td>
                       <div>Enable</div>
                    </td>
                    <td>
                        <div class="property-checkbox" style="margin-left: -10px; margin-top: -10px;">
                            <ejs-checkbox ref="selectionEnable" checked="true" id="SelectionEnable" :change="changeSelection"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px;">
                    <td>
                        <div> Mode</div>
                    </td>
                    <td>
                        <div>
                        <ejs-dropdownlist ref="selectionMode" id='selectionMode' :dataSource='selectionModedata' index=0 :placeholder='selectionModeplaceholder' :width='selectionModewidth' :change='changeSelectionmode'></ejs-dropdownlist>       
                        </div>
                    </td>
                </tr>
                  </tbody>
        </table>
    </div>
</div>
    <section id="action-description" aria-label="Description of TreeMap sample">
        <p>
            This sample depicts the details of goods imported by Japan. Selection and highlight options have been enabled in this sample.
        </p>
    </section>
    <section id="description" aria-label="Description of the TreeMap features demonstrated in this sample">
        <p>
            In this example, you can see the modes available for performing highlight and selection in TreeMap. It can be either enabled or disabled.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            TreeMap component features are segregated into individual feature-wise modules. To use highlight and selection, inject the <code>Selection</code> module using the <code>TreeMap.Inject(TreeMapSelection)</code>inject the <code>Highlight</code> module using the <code>TreeMap.Inject(TreeMapHighlight)</code> method.
        </p>
    </section>
</main>
</template>
 <style scoped>
         .check{
        opacity: 1 !important;
        position: relative !important;
        width: 15px !important;
        height: 15px !important;
    }
    label{
        height: 32px !important;
    }

    .e-view.fluent2 #tree_selection #property.property-panel-table div.property-checkbox, .e-view.fluent2-dark #tree_selection #property.property-panel-table div.property-checkbox, .e-view.fluent2-higtcontrast #tree_selection #property.property-panel-table div.property-checkbox {
            padding-left: 0px;
    }
</style>
<script>
import { TreeMapComponent,TreeMapHighlight, TreeMapSelection} from "@syncfusion/ej2-vue-treemap";
import { importData } from '../treemap/treemap-data/import';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
components: {
    'ejs-treemap': TreeMapComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Import and Export details of US',
            textStyle: { fontFamily: 'Segoe UI' }
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
            gap: 10,
            labelStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        dataSource: importData,
        weightValuePath: 'sales',
        levels: [
            { groupPath: 'dataType', fill: '#c5e2f7', headerStyle: { size: '16px' }, headerAlignment: 'Center', groupGap: 5 },
            { groupPath: 'product', fill: '#a4d1f2', headerAlignment: 'Center' , groupGap: 2 }
        ],
        highlightModedata:['Item','Child','Parent','All'],
        highlightModeplaceholder: 'Select highlight type',
        highlightModewidth: '100%',
        selectionModeplaceholder: 'Selection selection type',
        selectionModewidth: '100%',
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
        args.treemap.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
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
}
</script>