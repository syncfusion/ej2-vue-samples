<template>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :load="load" :gridSettings="gridSettings" :width="width" :height="height" :dataBound="dataBound" :allowCalculatedField="allowCalculatedField" :showFieldList="showFieldList" :showGroupingBar="showGroupingBar" :enableRtl="enableRtl">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the right-to-left view of the
        <code>Pivot Table, Grouping Bar</code> and
        <code>Field List</code>
    </p>
</div>
<div id="description">
    <p>
        <code>Pivot Table</code>,
        <code>Grouping Bar</code> and
        <code>Field List</code> support right-to-left direction. It can be enabled by setting the
        <code>enbleRtl</code> property to true. To open the field list, click the icon at the top-left corner of the grouping bar.</p>
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  GroupingBar,
  FieldList,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: "Amount", format: "C0" }],
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }]
      },
      gridSettings: { columnWidth: 140 },
      width: "100%",
      height: 300,
      allowCalculatedField: true,
      showGroupingBar: true,
      showFieldList: true,
      enableRtl: true
    };
  },
  methods: {
    load: function(args: any) {
      let selectedTheme: string = location.hash.split("/")[1] || "material";
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open("GET", "./styles/" + selectedTheme + ".css", false);
      xhr.onload = function() {
        const doc: HTMLFormElement = document.getElementById(
          "themelink"
        ) as HTMLFormElement;
        doc.innerHTML = xhr.responseText;
      };
      xhr.send();
    },
    dataBound: function(args: any) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (pivotObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    }
  },
  provide: {
    pivotview: [GroupingBar, FieldList]
  }
});
</script>

<style>
#PivotView_PivotFieldList {
  width: auto !important;
}

.e-grid.e-rtl .e-frozenheader > .e-table,
.e-grid.e-rtl .e-frozencontent > .e-table {
  border-left-color: gainsboro;
}

@media only screen and (max-width: 400px) {
  .control-section {
    overflow: auto;
  }
}
</style>

<style>
#pivotview {
  width: 100%;
}
</style>