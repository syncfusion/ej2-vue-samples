<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :load="load"
          :dataBound="dataBound"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-3 property-section pivot-table-property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr>
                <td>
              		<div style="font-weight: 600; font-size: 13px; white-space: nowrap">Grand totals position</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                		<ejs-radiobutton label="Top" name="position" value="Top" :change="onChange1"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                		<ejs-radiobutton label="Bottom" name="position" value="Bottom" :change="onChange1" :checked="true"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <div style="font-weight: 600; font-size: 13px; white-space: nowrap">Hide grand totals</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                		<ejs-radiobutton label="Row" name="total" value="Row" :change="onChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                		<ejs-radiobutton label="Column" name="total" value="Column" :change="onChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
		                <ejs-radiobutton
		                  label="Both"
		                  name="total"
		                  value="Both"
		                  :change="onChange"
		                ></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                		<ejs-radiobutton label="None" name="total" value="None" :change="onChange" :checked="true"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <div style="font-weight: 600; font-size: 13px; white-space: nowrap">Hide sub-totals</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
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
		                  :removed="onRemove"
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
      <p>This sample demonstrates showing and hiding grand totals and subtotals in rows, columns, or both at runtime. Also, end users can specify and hide subtotals of specific fields.</p>
    </div>
    <div id="description">
      <p>
        In this sample, you can hide grand totals in row, column, or both using radio buttons available under the <b>Hide grand totals</b> category. To hide grand totals in both row and column, set the property <code>dataSourceSettings->showGrandTotals</code> as <b>false</b>. To hide the row and column grand totals separately, set the property <code>dataSourceSettings->showRowGrandTotals</code> and <code>dataSourceSettings->showColumnGrandTotals</code>as <b>false</b>.
      </p>
      <p>
        You can also, display the grand totals either at the top or bottom of the row and column axes using radio buttons available under the <b>Grand totals position</b> category. To display the grand totals at top, set the property <code>dataSourceSettings->grandTotalsPosition</code> as <b>Top</b>. And, to display the grand totals at botton, set the property <code>dataSourceSettings->grandTotalsPosition</code> as <b>Bottom</b>.
      </p>
      <p>
        Also, in this sample, you can hide subtotals for specific fields too. It can be achieved by selecting appropriate fields from the drop-down available under the <b>Hide sub-totals</b> category. To hide subtotals for a specific field, set the <code>showSubTotals</code> property as <b>false</b> inside the field definition.
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
import { Pivot_Data } from "./data-source";

Vue.use(RadioButtonPlugin);
Vue.use(PivotViewPlugin);
Vue.use(MultiSelectPlugin);
/* tslint:disable */
declare var require: any;
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
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        drilledMembers: [{ name: "Country", items: ["France", "Germany"] }],
        filterSettings: [
          {
            name: "Products",
            items: ["Gloves", "Helmets", "Shorts", "Vests"],
            type: "Include"
          }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        dataSource: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        showGrandTotals: true,
        grandTotalsPosition: 'Bottom'
      },
      width: "100%",
      height: 500,
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
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (pivotObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    onSelect: function(args: SelectEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
        if (
          (pivotObj.dataSourceSettings.columns[i].name ||
            pivotObj.dataSourceSettings.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.columns[i].showSubTotals = false;
        }
      }
      for (let i: number = 0; i < pivotObj.dataSourceSettings.rows.length; i++) {
        if (
          (pivotObj.dataSourceSettings.rows[i].name ||
            pivotObj.dataSourceSettings.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.rows[i].showSubTotals = false;
        }
      }
    },
    onRemove: function(args: RemoveEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
        if (
          (pivotObj.dataSourceSettings.columns[i].name ||
            pivotObj.dataSourceSettings.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.columns[i].showSubTotals = true;
        }
      }
      for (let i: number = 0; i < pivotObj.dataSourceSettings.rows.length; i++) {
        if (
          (pivotObj.dataSourceSettings.rows[i].name ||
            pivotObj.dataSourceSettings.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.rows[i].showSubTotals = true;
        }
      }
    },
    onChange: function(args: ChangeArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (args.value === "None") {
        pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: false } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showColumnGrandTotals: true } }, true);
        pivotObj.dataSourceSettings.showGrandTotals = true;
      }
      else {
        pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
        pivotObj.setProperties({
          dataSourceSettings: { showColumnGrandTotals: true }
        }, true);
        if (args.value === "Column") {
          pivotObj.dataSourceSettings.showColumnGrandTotals = false;
        } else if (args.value === "Row") {
          pivotObj.dataSourceSettings.showRowGrandTotals = false;
        } else if (args.value === "Both") {
          pivotObj.dataSourceSettings.showGrandTotals = false;
        }
      }
    },
    onChange1: function(args: ChangeArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (args.value === 'Top') {
        pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Bottom' } }, true);
        pivotObj.dataSourceSettings.grandTotalsPosition = 'Top';
      }
      else if(args.value === 'Bottom') {
        pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Top' } }, true);
        pivotObj.dataSourceSettings.grandTotalsPosition = 'Bottom';
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

<style scoped>
/deep/ #PivotView_PivotFieldList {
  width: auto !important;
}

/deep/ #pivotview {
  width: 100%;
}

/deep/ .pivot-table-property-section {
    overflow: auto;
}

/deep/ .pivot-table-property-section .e-multiselect {
    padding: 0;
}

/deep/ .pivot-table-property-section .property-panel-header {
    padding-bottom: 10px;
}

/deep/ .pivot-table-property-section  .property-panel-table td {
    width: auto;
}

/deep/ .pivot-table-property-section  .property-panel-table div {
    padding-left: unset;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}
/deep/ .control-section {
  min-height: 255px !important;
}
</style>