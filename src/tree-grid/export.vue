<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid ref='treegrid' :treeColumnIndex='1' :dataSource="data" childMapping='subtasks' :allowPaging='true' :pageSettings='pageSettings' :toolbar='toolbar' :toolbarClick='toolbarClick'
                :allowExcelExport='true' :allowPdfExport='true'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the client-side exporting of the TreeGrid, which allows you to export its data to the Excel, Pdf and CSV formats. Use the toolbar buttons to export TreeGrid data to desired format. </p>
</div>
<div id="description">

    <p>TreeGrid supports client-side exporting which allows you to export its data to the Excel, Pdf and CSV formats.</p>
    <p>In this demo, for the toolbar items of exporting, we have defined actions in <code>toolbarClick</code> event to export the TreeGrid data using the <code>excelExport</code>, <code>pdfExport</code> and <code>csvExport</code> methods.</p>
    
    <p style="font-weight: 500">Injecting Module:</p>
    <p>TreeGrid features are segregated into individual feature-wise modules. To use exporting feature, we need to inject <code>ExcelExport</code> and <code>PdfExport</code> module into the <code>provide</code> section.</p>
    <p>More information on the Exporting can be found in the  documentation section.
    </p>
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, TreeGridComponent, PdfExport, ExcelExport, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
      pageSettings: { pageCount: 5, pageSize: 10 }
    };
  },
  methods:{
    toolbarClick: function (args: ClickEventArgs) {
        switch (args.item.text) {
            case 'PDF Export':
                (<any>this.$refs.treegrid).pdfExport();
                break;
            case 'Excel Export':
                (<any>this.$refs.treegrid).excelExport();
                break;
            case 'CSV Export':
                (<any>this.$refs.treegrid).csvExport();
                break;
        }
    }
  },
  provide: {
      treegrid: [PdfExport, ExcelExport, Page, Toolbar]
  }
});
</script>