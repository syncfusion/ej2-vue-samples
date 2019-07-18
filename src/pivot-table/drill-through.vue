<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :allowDrillThrough="allowDrillThrough"
          :showTooltip="showTooltip"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>This sample demonstrates how to obtain a list of raw items for a particular cell using the drill-through option on double-clicking.</p>
    </div>
    <div id="description">
    <p>In this sample, you can view the raw items of any pivot table cell by double-clicking the cell. The
        drill-through dialog holds the row headers, column headers, and values information of the clicked cell.
        Initially drill-through information is displayed for bound fields and you can include the remaining raw items
        details using the <code>column chooser</code> option in the dialog.
    </p>
      <p>
        This feature can be enabled by setting the
        <code>allowDrillThrough</code> as true.
      </p>
      <p>
        <strong>Injecting Module:</strong>
      </p>
      <p>
        The pivot table features are segregated into individual modules.
        To enable drill-through, inject the
        <code>DrillThrough</code> module using the
        <code>provide</code> section.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  IDataSet,
  FieldList,
  DrillThrough
} from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
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
        rows: [{ name: "Country" }, { name: "Products" }],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        expandAll: false,
        enableSorting: true
      },
      showTooltip: false,
      gridSettings: { columnWidth: 140 },
      width: "100%",
      height: 300,
      showFieldList: true,
      allowDrillThrough: true
    };
  },
  provide: {
    pivotview: [FieldList, DrillThrough]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>