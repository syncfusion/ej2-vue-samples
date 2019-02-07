<template>
  <div>
    <div class="col-lg-8 control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSource="dataSource"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :load="load"
          :dataBound="dataBound"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-4 property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div style="font-weight: 600; font-size: 13px">Hide grand totals</div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-radiobutton label="Row" name="total" value="Row" :change="onChange"></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-radiobutton label="Column" name="total" value="Column" :change="onChange"></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-radiobutton
                  label="Both"
                  name="total"
                  value="Both"
                  :change="onChange"
                  :checked="true"
                ></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div style="font-weight: 600; font-size: 13px">Hide sub-totals</div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-multiselect
                  id="values"
                  :dataSource="field"
                  :showDropDownIcon="showDropDownIcon"
                  :showClearButton="showClearButton"
                  :enableSelectionOrder="enableSelectionOrder"
                  :fields="fields"
                  :mode="mode"
                  :select="onSelect"
                  :remove="onRemove"
                  :open="onOpen"
                  :placeholder="placeholder"
                ></ejs-multiselect>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample demonstrates showing and hiding grand totals and subtotals in rows, columns, or both.</p>
    </div>
    <div id="description">
      <p>
        In this sample, you can hide grand totals in row, column, or both using radio buttons available under the <b>Hide grand totals</b> category. To hide grand totals in both row and column, set the property <code>dataSource->showGrandTotals</code> as false. To hide the row and column grand totals separately, set the property <code>dataSource->showRowGrandTotals</code> and <code>dataSource->showColumnGrandTotals</code>as false.
      </p>
      <p>
        Also, in this sample, you can hide subtotals for specific fields too. It can be achieved by selecting appropriate fields from the drop-down available under the <b>Hide sub-totals</b> category. To hide subtotals for a specific field, set the <code>showSubTotals</code> property as false inside the field definition.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import {
  MultiSelectPlugin,
  SelectEventArgs,
  RemoveEventArgs,
  PopupEventArgs,
  CheckBoxSelection
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);
import { RadioButtonPlugin, ChangeArgs } from "@syncfusion/ej2-vue-buttons";

Vue.use(RadioButtonPlugin);
Vue.use(PivotViewPlugin);
Vue.use(MultiSelectPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
export default Vue.extend({
  data: () => {
    return {
      field: [
        { Name: "Country" },
        { Name: "Year" }
      ],
      mode: "CheckBox",
      showDropDownIcon: true,
      showClearButton: false,
      enableSelectionOrder: false,
      fields: { text: "Name" },
      placeholder: "Select fields to hide its sub-totals",
      dataSource: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        drilledMembers: [{ name: "Country", items: ["France"] }],
        filterSettings: [
          {
            name: "Products",
            items: ["Gloves", "Helmets", "Shorts", "Vests"],
            type: "Include"
          }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        data: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        showGrandTotals: false
      },
      width: "100%",
      height: 400,
      gridSettings: { columnWidth: 140 }
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
        if (doc) {
          doc.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    },
    dataBound: function(args: any) {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      if (pivotGridObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    onSelect: function(args: SelectEventArgs) {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotGridObj.dataSource.columns.length; i++) {
        if (
          (pivotGridObj.dataSource.columns[i].name ||
            pivotGridObj.dataSource.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotGridObj.dataSource.columns[i].showSubTotals = false;
        }
      }
      for (let i: number = 0; i < pivotGridObj.dataSource.rows.length; i++) {
        if (
          (pivotGridObj.dataSource.rows[i].name ||
            pivotGridObj.dataSource.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotGridObj.dataSource.rows[i].showSubTotals = false;
        }
      }
    },
    onRemove: function(args: RemoveEventArgs) {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotGridObj.dataSource.columns.length; i++) {
        if (
          (pivotGridObj.dataSource.columns[i].name ||
            pivotGridObj.dataSource.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotGridObj.dataSource.columns[i].showSubTotals = true;
        }
      }
      for (let i: number = 0; i < pivotGridObj.dataSource.rows.length; i++) {
        if (
          (pivotGridObj.dataSource.rows[i].name ||
            pivotGridObj.dataSource.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotGridObj.dataSource.rows[i].showSubTotals = true;
        }
      }
    },
    onChange: function(args: ChangeArgs) {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotGridObj.setProperties({ dataSource: { showGrandTotals: true } }, true);
      pivotGridObj.setProperties({ dataSource: { showRowGrandTotals: true } }, true);
      pivotGridObj.setProperties({
        dataSource: { showColumnGrandTotals: true }
      }, true);
      if (args.value === "Column") {
        pivotGridObj.dataSource.showColumnGrandTotals = false;
      } else if (args.value === "Row") {
        pivotGridObj.dataSource.showRowGrandTotals = false;
      } else if (args.value === "Both") {
        pivotGridObj.dataSource.showGrandTotals = false;
      }
    },
    onOpen: function(args: PopupEventArgs) {
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display = "none";
    }
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
});
</script>

<style>
#PivotView_PivotFieldList {
  width: auto !important;
}

#pivotview {
  width: 100%;
}
</style>