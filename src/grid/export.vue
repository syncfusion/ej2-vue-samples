<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the client-side exporting of the Grid, which allows you to export its data to the Excel, Pdf and CSV formats.
            Use the toolbar buttons to export Grid data to desired format.
        </p>
    </div>
    <div>
        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :toolbar='toolbar' :toolbarClick='toolbarClick'
                :allowExcelExport='true' :allowPdfExport='true' :allowGrouping="true" :groupSettings="groupOptions">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
                <e-column field='Freight' headerText='Freight' allowGrouping="false"  width='120' format='C2' textAlign='Right'></e-column>            
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>Grid supports client-side exporting which allows you to export its data to the Excel, Pdf and CSV formats.</p>
        <p>In this demo, Grouping is applied for <strong><i>ShipCountry</i></strong> column and excelexport, pdfexport and csvexport items are defined in the toolbar. For these toolbar items, we have
            defined actions in toolbarClick event to export the Grid data using the
            <code><a target="_blank" class="code"            
                    href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#excelexport">excelExport</a></code>,
            <code><a target="_blank" class="code"
                    href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#pdfexport">pdfExport</a></code>and
            <code><a target="_blank" class="code"
                    href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#csvexport">csvExport</a></code>            methods.</p>
        <br/>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>Grid features are segregated into individual feature-wise modules. To use exporting feature, we need to inject
            <code>ExcelExport</code> and <code>PdfExport</code> into the <code>provide</code> section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, GridComponent, PdfExport, ExcelExport, Page, Group, Toolbar } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      groupOptions: { showDropArea: false, columns: ['ShipCountry'] },
      toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
      pageSettings: { pageCount: 5 }
    };
  },
  methods:{
    toolbarClick: function (args: ClickEventArgs) {
        switch (args.item.text) {
            case 'PDF Export':
                (<any>this.$refs.grid).pdfExport();
                break;
            case 'Excel Export':
                (<any>this.$refs.grid).excelExport();
                break;
            case 'CSV Export':
                (<any>this.$refs.grid).csvExport();
                break;
        }
    }
  },
  provide: {
      grid: [PdfExport, ExcelExport, Page, Group, Toolbar]
  }
});
</script>