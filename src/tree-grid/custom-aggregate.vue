<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates custom aggregates and exporting functionality in the Tree Grid. Aggregate values for the columns are displayed in the column footer, and export options are available via the toolbar buttons.</p>
    </div>
    <div>
        <ejs-treegrid :dataSource="data" ref='treegrid' childMapping='subtasks' gridLines='Both' :treeColumnIndex='1' :allowExcelExport='true' :allowPdfExport='true' :dataBound='dataBound' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' 
        :excelAggregateQueryCellInfo='excelAggregateQueryCellInfo' :pdfAggregateQueryCellInfo='pdfAggregateQueryCellInfo' :height='380' >
            <e-columns>
                <e-column field='ID' headerText='Order ID' width='120' textAlign='Left'></e-column>
                <e-column field='Name' headerText='Shipment Name' width='230' clipMode='EllipsisWithTooltip'></e-column>
                <e-column field='shipmentDate' headerText='Shipment Date' width='150' type='date' format='yMd' textAlign='Right'></e-column>
                <e-column field='category' headerText='Category' width='220' minWidth='220'></e-column>
                <e-column field='units' headerText="Units" width='100' textAlign="Right" type='number'></e-column>
                <e-column field='unitPrice' headerText='Unit Price($)' format='c2' width='100' textAlign='Right' type='number'></e-column>
                <e-column field='price' headerText='Price($)' width='140' format='c' textAlign='Right'></e-column>
            </e-columns>
           <e-aggregates>
                <e-aggregate :showChildSummary='false'>
                    <e-columns>
                        <e-column columnName="category" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
    </div>
    <div id="description">
      <p>The Tree Grid supports displaying aggregates in the footer, which can be configured using the <code>aggregates</code> property. Here, a <code>customAggregate</code> configuration is applied to the <b>Category</b> column to show a dropdown that displays the count of the selected category.</p>
      <p>
          The Tree Grid also supports seamless exports to <b>Excel</b>, <b>PDF</b>, or <b>CSV</b> with a single click. The <code>excelAggregateQueryCellInfo</code> and <code>pdfAggregateQueryCellInfo</code> events ensure that footer aggregate values are accurately preserved in the exported files.
      </p>
      <p>More information about the custom aggregate can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/aggregates/aggregates"> documentation</a> section.</p>
    </div>
</div>
</template>
<!-- custom code start -->
<style>T
  .e-input {
       padding-bottom: 1px !important;
   }
  .e-treegrid .e-summarycell.e-templatecell {
    pointer-events:visible !important;
  }
  .fluent2 input#customers {
      padding-bottom: 8px !important;
  }
  .bootstrap5\.3 input#customers {
      padding-bottom: 7px !important;
  }
  .tailwind3 input#customers {
      padding-bottom: 1px !important;
  }
  .e-treegrid .e-summarycell.e-templatecell .e-input-group {
   input.e-control.e-dropdownlist.e-lib.e-input {
        padding-left: 6px !important;
    }
  };
</style>
<!-- custom code end -->
<script lang="ts">
import { createApp } from "vue";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective, Aggregate, Page,Toolbar, ExcelExport,PdfExport } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./data-source";
import { DropDownList, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let listObj: DropDownList;
let selectedCategory: string = 'Seafood';
let foods = [
    { food : 'Seafood'},
    { food : 'Dairy'},
    { food : 'Edible'},
    { food : 'Crystal'}
];

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-aggregates': AggregatesDirective,
    'e-aggregate': AggregateDirective,
    'ejs-dropdownlist': DropDownListComponent
  },  
  data: () => {
    return {
      data: summaryData,
      selectedCategory: "Seafood",
      toolbarOptions: ['ExcelExport','PdfExport','CsvExport'],
      footerTemp: function () {
        return  { template : createApp({}).component('footerTemplate', {
            template: `<span>Count of <input type="text" id="customers" /> : {{data.Custom}}</span>`,
            data () {return { data: {}};}
            })
          }
      },      
    };
  },
  provide: {
      treegrid: [Aggregate, Page,Toolbar, ExcelExport,PdfExport]
  },
  methods: {
    //Custom aggregate function to calculate the count of items for the selected category.
      customAggregateFn : function (data: any) {
      
      ((this as any).$refs.treegrid).ej2Instances.grid.vueInstance = null;
        let sampleData: any = data.result ? getObject('result', data) : data;
         
        let countLength: number; countLength = 0;
        if(sampleData !== undefined){
        
        sampleData.filter((item: Object) => {
            let data: string = getObject('category', item);
            if (data === selectedCategory) {
                countLength++;
            }
        });
        }
        return countLength;
      },

      //Initializes a DropDownList in the footer for category selection.
      dataBound: function() {
          let treeGridObj = ((this as any).$refs.treegrid);
            if (!isNullOrUndefined(listObj)) {
                listObj.destroy();
            }
            listObj = new DropDownList({
                dataSource: foods,
                fields: { value: 'food' },
                placeholder: 'Select a Category',
                width: '110px',
                value: selectedCategory,
                change:function () {
                    setTimeout(
                        function(){
                            if (listObj.value != null) {
                                selectedCategory = listObj.value.toString();
                                treeGridObj.refresh();
                            }
                        },
                        300
                    );
                }
            });
            listObj.appendTo('#customers');
            },
        toolbarClick: function(args:any) {
            let treeGridObj = ((this as any).$refs.treegrid);
        if (args['item'].text === 'Excel Export') {
          treeGridObj.excelExport();
        }
         if (args['item'].text === 'PDF Export') {
              let exportProperties: any = {
            pageOrientation: 'Landscape',
        };
          treeGridObj.pdfExport(exportProperties);
        }
         if (args['item'].text === 'CSV Export') {
          treeGridObj.csvExport();
        }
        
      },

      //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
    excelAggregateQueryCellInfo(args: any) {
      if (args.cell.column.headerText === "Category") {
        args.style.value = `Count of ${selectedCategory}: ${args.row.data.category.Custom}`;
      }
    },

     //Handles the 'pdfAggregateQueryCellInfo' event to customize aggregate cells during PDF export.
    pdfAggregateQueryCellInfo(args: any) {
      if (args.cell.column.headerText === "Category") {
        args.value = `Count of ${selectedCategory}: ${args.row.data.category.Custom}`;
      }
    }
  }
}
</script>
