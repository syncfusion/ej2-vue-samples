<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' :height='350' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='orderID' headerText='Order ID' width='70' textAlign='Right'></e-column>
                <e-column field='orderName' headerText='Order Name' width='150'></e-column>
                <e-column field='orderDate' headerText='Order Date' width='140' :format="format" textAlign='Right'></e-column>
                <e-column field='price' headerText='Price' width='100' format='c2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 30%">
                        <div>Column</div>
                    </td>
                    <td style="width: 70%; padding-left: 10px; padding-right:10px;">
                        <ejs-dropdownlist width='110px' ref='columns' id='columns' :dataSource='columnNames' value='price' :fields='colfields' :change="onColChange"></ejs-dropdownlist>                      
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 30%">
                        <div> Format</div>
                    </td>
                    <td style="width: 70%; padding-left: 10px; padding-right:10px;">
                        <ejs-dropdownlist ref='format' width='110px' id='format' :dataSource='priceFormat' value='c2' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the way of displaying the content of Tree Grid columns based on the specified format. In this sample, format of columns can be changed dynamically through property panel.
    </p>
</div>
<div id="description">
    <p>Format is the process of customizing the particular column data/values based on specific culture. The Tree Grid uses Internalization library to format number and date values. 
            The format can be specified by using <code>
            format</code> property of columns.</p>
            <p>In this demo, select the column and format from the property panel to format the corresponding column values.</p>
            <p>
                More information about Column Formatting can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/columns#format">documentation section</a>.
            </p>
</div>
</div>
</template>

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Filter, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData, formatData } from "./data-source";
import { DateFormatOptions } from "@syncfusion/ej2-base";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent
  },  
  data: () => {
    return {
      data: formatData,
      pageSettings: { pageSize: 10 },
      format: { format: 'M/d/yyyy', type: 'date'},
      columnNames: [
        { id: 'price', name: 'Price' },
        { id: 'orderDate', name: 'Order Date' }
    ],
      priceFormat: [
        { id: 'n2', name: 'n2' },
        { id: 'n3', name: 'n3' },
        { id: 'c2', name: 'c2' },
        { id: 'c3', name: 'c3' },
        { id: 'p2', name: 'p2' },
        { id: 'p3', name: 'p3' }
    ],
      dateFormat: [
        { id: 'M/d/yyyy', name: 'Short Date' },
        { id: 'dddd, MMMM dd, yyyy', name: 'Long Date' },
        { id: 'MMMM, yyyy', name: 'Month/Year' },
        { id: 'MMMM, dd', name: 'Month/Day' }
    ],
    colfields: {text: 'name', value: 'id'},
    ddlfields: {text: 'name', value: 'id'}
    };
  },
  provide: {
      treegrid: [ Page, Filter ]
    },
   methods:{
       onColChange: function(e: ChangeEventArgs): void {
         let columnName = e.value;
            let format;
            if (columnName === 'price') {
                ((this as any).$refs.format).ej2Instances.dataSource = (this as any).priceFormat;
                format = (((this as any).$refs.treegrid).getColumnByField(columnName) as Column).format;
                ((this as any).$refs.format).ej2Instances.value = format;
            }
            if (columnName === 'orderDate') {
               ((this as any).$refs.format).ej2Instances.dataSource = (this as any).dateFormat;
                format = ((((this as any).$refs.treegrid).getColumnByField(columnName) as Column).format as DateFormatOptions).format;
                ((this as any).$refs.format).ej2Instances.value = format;
            }
    },
    onChange: function(e: ChangeEventArgs): void {
            let formatval: string = <string>e.value;
            let columnName = ((this as any).$refs.columns).ej2Instances.value;
            if (columnName === 'price') {
                (((this as any).$refs.treegrid).getColumnByField(columnName) as Column).format = formatval;
            }
            if (columnName === 'orderDate') {
                (((this as any).$refs.treegrid).getColumnByField(columnName) as Column).format = { format: formatval, type: 'date' };
            }
            ((this as any).$refs.treegrid).ej2Instances.refreshColumns();
    }
  }

}
</script>