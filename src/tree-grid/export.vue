<template>
<div class="control-section">
    <div class="col-md-9 control-section">
        <ejs-treegrid ref='treegrid' :treeColumnIndex='1' :dataSource="data" childMapping='subtasks' :height='350' :allowPaging='true' :pageSettings='pageSettings' :toolbar='toolbar' :toolbarClick='toolbarClick'
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

     <div>
        <div class="col-md-3 property-section">
        <table id="property" title="Export Customization" style="width: 100%">
        <tr>
            <td style="width: 70%;">
              <div style="padding-left: 0px;">
                <ejs-checkbox ref='checkbox' :checked="true" labelPosition='Before' label='Persist collapsed state' :change="collapsestate"></ejs-checkbox>
              </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the client-side exporting of the Tree Grid, which allows you to export its data to the Excel, Pdf and CSV formats. Use the toolbar buttons to export Tree Grid data to desired format.</p>
    <p>By using the Persist collapsed state checkbox we can persist the Expand/Collpase state of Tree Grid in exported document</p>
</div>
<div id="description">

    <p>Tree Grid supports client-side exporting which allows you to export its data to the Excel, Pdf and CSV formats.</p>
    <p>In this demo, for the toolbar items of exporting, we have defined actions in <code>toolbarClick</code> event to export the Tree Grid data using the <code>excelExport</code>, <code>pdfExport</code> and <code>csvExport</code> methods.</p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>Tree Grid features are segregated into individual feature-wise modules. To use exporting feature, we need to inject <code>ExcelExport</code> and <code>PdfExport</code> module into the <code>provide</code> section.</p>
    <p>More information on the Exporting can be found in the  documentation section.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, TreeGridExcelExportProperties, TreeGridPdfExportProperties, PdfExport, ExcelExport, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { sampleData } from "./data-source";
import { DialogUtility } from '@syncfusion/ej2-popups';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

let persistCollapseState: boolean = true;

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-checkbox': CheckBoxComponent
  },
  data: () => {
    return {
      data: sampleData,
      toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
      pageSettings: { pageCount: 5, pageSize: 10 }
    };
  },
  methods:{
    toolbarClick: function (args: ClickEventArgs) {
        let instance :any = ((this as any).$refs.treegrid).ej2Instances;
        switch (args.item.id) {
            case instance.grid.element.id + '_pdfexport':
            if (instance.enableRtl === true && (instance.locale === 'ar')) {
                let innercontent: any = 'You need custom fonts to export Arabic characters, refer this'
                     + '<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/pdf-export/#add-custom-font-for-pdf-exporting">'
                     + 'documentation section</a>';
                    DialogUtility.alert({content: innercontent});
              }
              else {
                let pdfProperties: TreeGridPdfExportProperties = {
                  isCollapsedStatePersist: persistCollapseState
                };
                instance.pdfExport(pdfProperties);
              }
                break;
            case instance.grid.element.id + '_excelexport':
                let excelProperties: TreeGridExcelExportProperties = {
                  isCollapsedStatePersist: persistCollapseState
                };
                instance.excelExport(excelProperties);
                break;
            case instance.grid.element.id + '_csvexport':
                instance.csvExport();
                break;
        }
    },
    collapsestate: function () {
      let instance :any = ((this as any).$refs.checkbox).ej2Instances;
      if (instance.checked) {
        persistCollapseState = true;
      } else{
        persistCollapseState = false;
      }
    }
  },
  provide: {
      treegrid: [PdfExport, ExcelExport, Page, Toolbar]
  }
}
</script>