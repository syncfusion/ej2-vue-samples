<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
             <ejs-treemap ref="treemap" id='container' :load='load' :titleSettings='titleSettings' :allowPdfExport='allowPdfExport' :allowPrint='allowPrint' :allowImageExport='allowImageExport' :dataSource='dataSource' :layoutType='layoutType' :weightValuePath='weightValuePath' :rangeColorValuePath='rangeColorValuePath' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings'></ejs-treemap>
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
            In this example, you can see how to export and print the rendered treemap. The TreeMap can
            be exported to JPEG, PNG, SVG, and PDF formats. Print functionality is done by <code>print</code>
            method when <code>allowPrint</code> is set as true. Export functionality is done by
            <code>export</code> method when <code>allowImageExport</code> and
            <code>allowPdfExport</code> is set as true.</p>
             <br>
             <p style="font-weight: 500"> <b>Injecting Module</b></p>
            <p>To make use of the print and export support, we need to inject the <code>Print</code>, <code>ImageExport</code> and <code>PdfExport</code> modules using the <code>provide</code> section. </p>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
            <tbody>
                <tr style="height: 50px">
                    <td>
                      <div>Export Type
                        </div>
                    </td>
                    <td>
                        <div>
                        <ejs-dropdownlist ref="mode" id='mode' :dataSource='modedata' index=0  :width='modewidth'></ejs-dropdownlist>        
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>File Name</div>
                    </td>
                    <td>
                        <div class="e-float-input" style='margin-top: 0px;'>
                            <input type="text" value="Treemap" id="fileName" style="width: 100%">
                        </div>
                    </td>
                </tr>
                <tr id="button-control" style="height: 70px" align='center'>
                    <td align="center">
                        <div>
                            <ejs-button id='togglebtn1' :style='style' :isPrimary='isPrimary' :content='content1' v-on:click='clickExport'></ejs-button>
                        </div>
                    </td>
                    <td align="center">
                        <div>
                            <ejs-button id='togglebtn' :style='style' :isPrimary='isPrimary' :content='content2' v-on:click='clickPrint'></ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<style scoped>
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
    #togglebtn {
        width: 80px;
    }
    #togglebtn1 {
        width: 80px;
    }
</style>
<script>
import { TreeMapComponent, TreeMapTooltip, Print, ImageExport, PdfExport } from "@syncfusion/ej2-vue-treemap";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { ProductSale } from '../treemap/treemap-data/product';

export default {
components: {
    'ejs-treemap': TreeMapComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
},
data:function(){
return{
      allowImageExport: true,
      allowPdfExport: true,
      allowPrint: true,
      titleSettings: {
            text: 'Top 10 best selling smartphone brands - 2017',
            textStyle: { size: '15px', fontFamily: 'Segoe UI'}
        },
        dataSource: ProductSale,
        layoutType: 'SliceAndDiceVertical',
        weightValuePath: 'Percentage',
        rangeColorValuePath: 'Percentage',
        tooltipSettings: {
            visible: true,
            format: '${Product} (+${Percentage}) %',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        leafItemSettings: {
            labelPath: 'Product',
            fill: '#6699cc',
            border: { color: 'black', width: 0.5 },
            labelPosition: 'Center',
            labelStyle: {
                fontFamily: 'Segoe UI'
            },
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
        isPrimary: true,content1:'Export',content2:'Print', style: 'text-transform:none !important',
        modewidth: '100%',
        modedata:['JPEG','PNG','SVG','PDF']
}
},
provide:{
        treemap:[TreeMapTooltip, Print, ImageExport, PdfExport]
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
    clickExport:function(args){
        let fileName = ((document.getElementById('fileName'))).value;
        this.$refs.treemap.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);
    },
    clickPrint:function(args){
        this.$refs.treemap.ej2Instances.print();
    }
}
}
</script>