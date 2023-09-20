<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
            <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :allowExcelExport="allowExcelExport" :allowPdfExport="allowPdfExport" :showFieldList="showFieldList">        
            </ejs-pivotview>
        </div>
    </div>
    
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%;height:100%;">
            <tbody>                
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>Export Type:
                        </div>
                    </td>
                    <td style="width: 60%;">
                        <div style="margin-left: -10px">
                            <ejs-dropdownlist id='mode' ref='typeddl' :dataSource='modeData' index=0 :width='dropdownWidth'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                  <td></td>
                    <td>
                        <div style="float:right">
                            <ejs-button id="export-btn" v-on:click="btnClick" isPrimary='true'>Export</ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
        <p>This sample demonstrates client-side exporting of the pivot table to Excel, CSV and PDF formats.</p>
    </div>
    <div id="description">
        <p>The pivot table supports client-side exporting and exports its data to the Excel, CSV and PDF formats data using
            the
            <code>excelExport</code>,
            <code>csvExport</code> and
            <code>pdfExport</code> methods.
        </p>
        <p>
            Choose the export document type in the dropdown list available inside the property panel and click the export button to export
            the component to the selected document format.
        </p>
    </div>

</div>
</template>

<script lang="ts">
import { PivotViewComponent, FieldList, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListComponent,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        enableSorting: true,
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        dataSource: Pivot_Data,
        expandAll: false
      },
      width: "100%",
      height: 300,
      dropdownWidth: '160px',
      gridSettings: { columnWidth: 140 },
      allowExcelExport: true,
      allowPdfExport: true,
      showFieldList: true,
      modeData: ["Excel", "CSV", "PDF"]
    };
  },
  methods: {
    btnClick: function(args: ChangeEventArgs) {
      let ddlObj = ((this as any).$refs.typeddl).ej2Instances; 
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (ddlObj.value === "Excel") {
        pivotObj.excelExport();
      } else if (ddlObj.value === "CSV") {
        pivotObj.csvExport();
      } else {
        pivotObj.pdfExport();
      }
    }
  },
  provide: {
    pivotview: [FieldList]
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}
/deep/ .e-pivottable .e-static {
  width: 80% !important;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}
/deep/ .control-section {
  min-height: 255px !important;
}
</style>