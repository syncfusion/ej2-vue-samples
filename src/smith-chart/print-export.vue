<template>
<div>
    <div class="col-lg-9 control-section">
           <ejs-smithchart ref="smithchart" id='container' :load='load' :horizontalAxis='horizontalAxis' :radialAxis='radialAxis' :legendSettings='legendSettings'>
                <e-seriesCollection>
                    <e-series :points='points' :name='name' :enableAnimation='enableAnimation' :tooltip='tooltip' :marker='marker'></e-series>
                </e-seriesCollection>
            </ejs-smithchart>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>Export Type</div>
                    </td>
                    <td style="width: 60%;">
                        <div style="margin-left: -10px">
                            <ejs-dropdownlist ref="dropdown" id='mode' :dataSource='modedata' index=0  :width='modewidth'></ejs-dropdownlist>  
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div id="filename">File Name</div>
                    </td>
                    <td style="width: 60%;">
                        <div class="e-float-input" style="margin-top: 0px;">
                            <input type="text" ref="name" value="Smith chart" id="fileName" style="margin-left: -10px;width: 100px" aria-labelledby="Smith Chart">
                        </div>
                    </td>
                </tr>
                <tr id="button-control1">
                    <td>
                        <div style="height: 45px; margin-left: 50%;">
                            <ejs-button  cssClass="e-flat" iconCss='e-icons e-export-icon' :isPrimary='isPrimary' :content='content1' isToggle="true" v-on:click='clickExport'></ejs-button>
                        </div>
                    </td>
                </tr>
                <tr id="button-control2">
                    <td>
                        <div style="height: 45px; margin-left: 50%;">
                            <ejs-button  cssClass="e-flat" iconCss='e-icons e-print-icon' :isPrimary='isPrimary' :content='content2' isToggle="true" v-on:click='clickPrint'></ejs-button>                       
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample explores the exporting and printing functionality in Smith chart.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to export and print the rendered Smith chart. Smith chart can be exported to JPEG, PNG, SVG, and PDF formats.
    </p>
</div>
</div>
</template>
<style scoped>
    .e-play-icon::before {
        content: '\e728';
    }
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
    
    .e-print-icon::before {
        content: '\e34b';
    }
 
    .e-view.fabric .e-print-icon::before, .e-view.fabric-dark .e-print-icon::before {
        content: '\e7df';
    }
 
    .e-view.bootstrap .e-print-icon::before {
        content: '\ebd2';
    }
 
   .e-view.bootstrap4 .e-print-icon::before {
        content: '\e743';
    }
 
    .e-view.tailwind .e-print-icon::before, .e-view.tailwind-dark .e-print-icon::before {
        content: '\e76c';
    }
 
    .e-view.highcontrast .e-print-icon::before {
        content: '\ebf9';
    }
 
    .e-view.bootstrap5\.3 .e-print-icon::before, .e-view.bootstrap5\.3-dark .e-print-icon::before {
        content: '\e75d';
    }
 
    .e-view.fluent .e-print-icon::before, .e-view.fluent-dark .e-print-icon::before {
        content: '\e75d';
    }
    .e-view.fluent2 .e-print-icon::before, .e-view.fluent2-dark .e-print-icon::before, .e-view.fluent2-highcontrast .e-print-icon::before {
        content: '\e75d';
    }
    .e-view.material3 .e-print-icon::before, .e-view.material3-dark .e-print-icon::before {
        content: '\e75d';
    }
    .e-export-icon::before {
        content: '\e728';
    }
 
    .e-view.fabric .e-export-icon::before, .e-view.fabric-dark .e-export-icon::before {
        content: '\e710';
    }
 
    .e-view.bootstrap4 .e-icons.e-export::before {
        content: '\e7bf';
    }
 
    .e-view.tailwind-dark .e-export-icon::before, .e-view.tailwind .e-export-icon::before {
        content: '\e7bf';
    }
 
    .e-view.highcontrast .e-export-icon::before {
        content: '\e710';
    }
 
    .e-view.bootstrap5\.3 .e-export-icon::before, .e-view.bootstrap5\.3-dark .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.fluent .e-export-icon::before, .e-view.fluent-dark .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.fluent2 .e-export-icon::before, .e-view.fluent2-dark .e-export-icon::before, .e-view.fluent2-highcontrast .e-export-icon::before {
        content: '\e72e';
    }
    .e-view.material3 .e-export-icon::before, .e-view.material3-dark .e-export-icon::before {
        content: '\e72e';
    }
</style>
<script>
import { SmithchartComponent, SeriesCollectionDirective, SeriesDirective, SmithchartLegend, TooltipRender } from '@syncfusion/ej2-vue-charts';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
components: {
    'ejs-smithchart': SmithchartComponent,
    'e-seriesCollection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent
},
data:function(){
return{  
        horizontalAxis: {
            minorGridLines: {
                visible: true
            }
        },
        radialAxis: {
            minorGridLines: {
                visible: true
            }
        },
        legendSettings: {
            visible: true,
            shape: 'Circle'
        },
        points: [
                    { resistance: 0.15, reactance: 0 },
                    { resistance: 0.15, reactance: 0.15 },
                    { resistance: 0.18, reactance: 0.3 },
                    { resistance: 0.2, reactance: 0.4 },
                    { resistance: 0.25, reactance: 0.6 },
                    { resistance: 0.38, reactance: 0.95 },
                    { resistance: 0.6, reactance: 1.25 },
                    { resistance: 1, reactance: 1.6 },
                    { resistance: 1.65, reactance: 1.9 },
                    { resistance: 2.75, reactance: 2 },
                    { resistance: 4.5, reactance: 0 },
                    { resistance: 3, reactance: -2 },
                    { resistance: 1.65, reactance: -1.95 },
                    { resistance: 1, reactance: -1.65 },
                    { resistance: 0.6, reactance: -1.25 },
                    { resistance: 0.35, reactance: -0.9 },
                    { resistance: 0.25, reactance: -0.6 },
                    { resistance: 0.25, reactance: -0.4 },
                    { resistance: 0.25, reactance: -0.3 },
                    { resistance: 0.25, reactance: -0.15 },
                    { resistance: 0.25, reactance: 0 },
                ],
            name: 'Transmission',
            enableAnimation: false,
            tooltip: { visible: true },
            marker: {
                    shape: 'Circle',
                    visible: true,
                    border: {
                        width: 2,
                    }
            },
          cssClass: 'e-info', isPrimary: true,content1:'Export',content2:'Print', style: 'text-transform:none !important',
          modedata:['JPEG','PNG','SVG','PDF'],
          modewidth:100
}
},
provide:{
    smithchart:[SmithchartLegend, TooltipRender]
},
methods:{
    /* custom code start */
     load:function(args){
            let theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Fluent2';
            args.smithchart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    },
    /* custom code end */
    clickExport:function(args){
        let fileName = this.$refs.name.value;
        this.$refs.smithchart.ej2Instances.export(this.$refs.dropdown.ej2Instances.value, fileName);
    },
   clickPrint:function(args){
        this.$refs.smithchart.ej2Instances.print();
   } 
}
}
</script>