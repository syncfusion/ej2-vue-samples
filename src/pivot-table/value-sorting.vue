<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :enableValueSorting="enableValueSorting" :showFieldList="showFieldList" :showValuesButton="showValuesButton">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates ordering of column and row header values in ascending or descending order. Here, the
        <b>FY 2022 → In Stock</b> column header and the <b>France</b> row header are both ordered by defining
        sort-related settings in code behind.
    </p>
</div>
<div id="description">
    <p>This sample demonstrates how to enable sorting for column and row values by simply clicking their headers.
        Repeated clicks toggle the sort direction. This functionality is activated by setting the
        <code>enableValueSorting</code> property to <b>true</b>.</p>
    <p>You can also configure value-based sorting programmatically. To sort a column, specify the target header using
        the <code>columnHeaderText</code> property under <code>valueSortSettings</code>, with individual header levels
        separated by a delimiter defined in the <code>headerDelimiter</code> property. Use <code>columnSortOrder</code>
        to set the sort direction.</p>
    <p>Similarly, to sort a row, provide the header in <code>rowHeaderText</code> and specify the direction using
        <code>rowSortOrder</code>.
        This approach allows precise and independent control over sorting behavior for both columns and rows based on
        the provided headers.</p>
    <br />
    <p>
        More information on the value sorting can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/sorting#value-sorting">
        documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import {
  PivotViewComponent,
  IDataSet,
  FieldList
} from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        valueSortSettings: {
          columnHeaderText: 'FY 2022##In Stock',
          headerDelimiter: '##',
          columnSortOrder: 'Descending',
          rowHeaderText: 'France',
          rowSortOrder: 'Ascending'
        },
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        formatSettings: [{ name: "Amount", format: "C0" }],
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        dataSource: Pivot_Data,
        expandAll: false,
        enableSorting: true,
        rows: [{ name: "Country" }, { name: "Products" }],
        filters: [{ name: "Product_Categories", caption: "Product Categories" }]
      },
      gridSettings: { columnWidth: 140 },
      width: "100%",
      enableValueSorting: true,
      height: 300,
      showFieldList: true,
      showValuesButton: true
    };
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

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}
/deep/ .control-section {
  min-height: 255px !important;
}
</style>