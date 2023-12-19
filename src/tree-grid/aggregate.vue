<template>
<div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource="data" childMapping='children' :treeColumnIndex='0' :height='380' :toolbar='toolbar' :toolbarClick='toolbarClick'
                :allowExcelExport='true' :allowPdfExport='true' >
            <e-columns>
                <e-column field='FreightID' headerText='Freight ID' width='150'></e-column>
                <e-column field='FreightName' headerText='Freight Name' width='200'></e-column>
                <e-column field='UnitWeight' headerText='Weight Per Unit' width='130' textAlign='Right'></e-column>
                <e-column field='TotalUnits' headerText='Total Units' width='140' textAlign='Right'></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Max" field="UnitWeight" columnName='UnitWeight' :footerTemplate="maxTemplate" >
                        </e-column>
                        <e-column type="Min" field="TotalUnits" columnName='TotalUnits' :footerTemplate="minTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 70%;padding-right:10px">
                <div>
                    Show Child Summary
                </div>
            </td>
            <td style="width: 30%;padding-bottom: 10px">
                <div>
                    <ejs-checkbox ref='childsummary' :checked="true" :change="onchange"></ejs-checkbox>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

     <div id="action-description">
    <p>This sample demonstrates aggregate functionality of the Tree Grid. In this sample, the aggregate value for the columns “Total Units”, “Total Cost” and “Unit Weight” is displayed in column footer and provide an option to show child summary. </p>
</div>
<div id="description">
    <p>The Tree Grid supports aggregates which will be displayed at the footer and every hierarchy level.
    The aggregate configurations can be provided by the <code>
        aggregates</code> property.</p>
    <p>The built-in aggregates are,</p>
     <ul>
        <li><code>Sum</code></li>     
        <li><code>Average</code></li>     
        <li><code>Min</code></li>     
        <li><code>Max</code></li>     
        <li><code>Count</code></li>     
        <li><code>TrueCount</code></li>     
        <li><code>FalseCount</code></li>     
        <li><code>Custom</code> - Requires the <code>customAggregate</code> property to perform aggregation.
        The custom aggregate value can be accessed inside template using the key <code>${custom}</code>.</li>     
    </ul>    
    <p>
        In this demo, the <code>footerTemplate</code> property is used to display three different aggregates in the Tree Grid footer. 
        <ul>
            <li>Showing minimum aggregate for “Total Units” column and the footerTemplate using its type name as <code>(${Min})</code>.</li>
            <li>Showing maximum aggregate for “Total Cost” column and the footerTemplate using its type name as <code>(${Max})</code>.</li>
            <li>Showing average aggregate for “Unit weight column” column and the footerTemplate using its type name as <code>(${Average})</code>.</li>
        </ul>
    </p>
    <p>The template expression should be provided inside <code>${...}</code> the interpolation syntax.</p>
    <p>Additionally, the Tree Grid supports client-side exporting to Excel, PDF, and CSV formats. In this demo, for the toolbar items of exporting, actions are defined in the toolbarClick event to export the Tree Grid data using the excelExport, pdfExport, and csvExport methods.</p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. 
        To use aggregate feature, we need to inject
        <code>Aggregate</code>module into the <code>provide</code> section. 
    </p>
    <p>
        More information about aggregate can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/aggregates/aggregates">documentation section</a>.
    </p>
</div>


</div>
</template>
<script lang="ts">
import { createApp } from "vue";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, AggregatesDirective, AggregateDirective, Aggregate, Page, PdfExport, ExcelExport, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { summaryRowData } from "./data-source";
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DialogUtility } from '@syncfusion/ej2-popups';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-aggregates': AggregatesDirective,
    'e-aggregate': AggregateDirective,
    'ejs-checkbox': CheckBoxComponent
  },  
  data: () => {
    return {
      data: summaryRowData,
      toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
      maxTemplate: function() {
        return {
            template: createApp({}).component('maxTemplate', {
            template: `Maximum: {{data.Max}}`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      minTemplate: function() {
        return {
            template : createApp({}).component('minTemplate', {
            template: `Minimum: {{data.Min}}`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  provide: {
      treegrid: [Aggregate, Page, PdfExport, ExcelExport, Toolbar]
  },
  methods: {
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
                      instance.pdfExport();
                }
                break;
            case instance.grid.element.id + '_excelexport':
                instance.excelExport();
                break;
            case instance.grid.element.id + '_csvexport':
                instance.csvExport();
                break;
        }
    },
      onchange: function( args: ChangeEventArgs): void {
        if (args.checked) {
            ((this as any).$refs.treegrid).ej2Instances.aggregates[0].showChildSummary = true;
            ((this as any).$refs.treegrid).refresh();
         } else {
            ((this as any).$refs.treegrid).ej2Instances.aggregates[0].showChildSummary = false;
            ((this as any).$refs.treegrid).refresh();
        }
  }
  }
}
</script>
