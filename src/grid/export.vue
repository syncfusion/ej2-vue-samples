<template>
<div>
<div class="col-lg-9 control-section">
    <div id="action-description">
        <p>This sample demonstrates the client-side exporting of the Grid, which allows you to export its data to the Excel, Pdf and CSV formats.
            Use the toolbar buttons to export Grid data to desired format.
        </p>
    </div>
    <div>
        <ejs-grid id='DefaultExport' ref='grid' :dataSource="data" :toolbar='toolbar' :toolbarClick='toolbarClick' height=350
                :allowExcelExport='true' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :allowPdfExport='true' :allowGrouping="true" :excelQueryCellInfo='exportQueryCellInfo' :pdfQueryCellInfo='exportQueryCellInfo'
                :dataBound="dataBound">
            <e-columns>
                <e-column headerText='Employee Image' width='150' textAlign='Center' :template='imageTemplate'></e-column>
                <e-column field='FirstName' headerText='Name' width='130'></e-column>
                <e-column field='Title' headerText='Designation' width='180'></e-column>
                <e-column headerText='Email ID' width='180' :template='urlTemplate'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='135' format="yMd" textAlign='Right'></e-column>
                <e-column field='Address' width='180' :allowGrouping='false'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
    
     <div id="description">
        <p>Grid supports client-side exporting which allows you to export its data to the Excel, Pdf and CSV formats.</p>
        <p>In this demo, while exporting, we have included images and hyperlinks from the template columns i.e <strong><i>Image</i></strong> and <strong><i>URL</i></strong>
         using <code><a target="_blank" className="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#excelquerycellinfo">
            excelQueryCellInfo</a></code> and <code><a target="_blank" className="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfquerycellinfo">
                pdfQueryCellInfo</a></code> events.
                The ExcelExport, PdfExport, and CsvExport items are defined in the toolbar, for which we have defined actions in toolbarClick event to export the Grid data using the 
            <code><a target="_blank" class="code"            
                    href="https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport">excelExport</a></code>,
            <code><a target="_blank" class="code"
                    href="https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexport">pdfExport</a></code>and
            <code><a target="_blank" class="code"
                    href="https://ej2.syncfusion.com/vue/documentation/api/grid/#csvexport">csvExport</a></code>            methods.</p>
        <br/>
        <p>
                        Note: Since CSV format is supported only plain text, images and hyperlinks will not be exported on this.</p>
              <br/>          
        <p style="font-weight: 500">Injecting Module:</p>
        <p>Grid features are segregated into individual feature-wise modules. To use exporting feature, we need to inject
            <code>ExcelExport</code> and <code>PdfExport</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the exporting can be found in these
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/excel-export">Excel Export</a> &
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/pdf-export">PDF Export</a>
            documentation section.
        </p>
    </div>
</div>
<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr>
            <div class="checkbox-control" style="padding-left: 0px">
                <div class="row" style="padding-left: 5px">
                    <ejs-checkbox label='Export template column' :checked='true' labelPosition='Before' :change="onClick"></ejs-checkbox>
                 </div>
            </div>
        </tr>
    </table>
</div>
</div>
</template>
<script lang="ts">
import { createApp } from "vue";
import { GridComponent, ColumnDirective, ColumnsDirective, PdfExport, ExcelExport, Group, Toolbar, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { employeeDetails } from "./data-source";
import columntempVue from "./column-temp.vue";
import urltempVue from "./url-temp.vue";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-checkbox': CheckBoxComponent
  },
  data: () => {
    return {
      data: employeeDetails,
      filterSettings: { type: 'Excel' },
      flag: false,
      toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
       imageTemplate: function () {
          return { template : createApp({}).component('columnTemplate', columntempVue) }
      },
       urlTemplate: function () {
          return { template : createApp({}).component('urlTemplate', urltempVue) }
      }
    };
  },
  methods:{
    toolbarClick: function (args: ClickEventArgs) {
        switch (args.item.id) {
            case 'DefaultExport_pdfexport':
                ((this as any).$refs.grid).pdfExport();
                break;
            case 'DefaultExport_excelexport':
                ((this as any).$refs.grid).excelExport();
                break;
            case 'DefaultExport_csvexport':
                ((this as any).$refs.grid).csvExport();
                break;
        }
    },
    exportQueryCellInfo: function(args: any) {
        if (args.column.headerText === 'Employee Image') {
          if ((args as any).name === "excelQueryCellInfo") {
          args.image = { height: 75, base64: args.data["EmployeeImage"], width: 75 };
        } else {
          args.image = { base64: args.data["EmployeeImage"] };
        }
        }
        if (args.column.headerText === 'Email ID') {
                args.hyperLink = {
                         target: 'mailto:' + args.data["EmailID"],
                         displayText: args.data["EmailID"]
        };
        }
    },
    onClick: function(args: any): void {
        let grid = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
        let fields: string[] = ["Employee Image", "Email ID"];
            if (args.checked) {
                ((this as any).$refs.grid).showColumns(fields, "headerText");
                ((this as any).$refs.grid).ej2Instances.toolbarModule.toolbar.hideItem(2, true);
            } else {
                ((this as any).$refs.grid).hideColumns(fields, "headerText");
                ((this as any).$refs.grid).ej2Instances.toolbarModule.toolbar.hideItem(2, false);
      }
    },
    dataBound: function() {
      if (!(this as any).flag) {
        ((this as any).$refs.grid).ej2Instances.toolbarModule.toolbar.hideItem(2, true);
        (this as any).flag = true;
      }
  }
  },
  provide: {
      grid: [PdfExport, ExcelExport, Group, Toolbar, Sort, Filter]
  }
}
</script>