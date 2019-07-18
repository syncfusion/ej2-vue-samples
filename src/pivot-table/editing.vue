<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showTooltip="showTooltip"
          :gridSettings="gridSettings"
          :editSettings="editSettings"
          :width="width"
          :height="height"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
          <tr>
            <td>
              <div>
                <ejs-radiobutton
                  id="inline"
                  label="Inline Editing"
                  name="EditOperation"
                  :change="onRadioChange"
                  checked="true"
                ></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ejs-radiobutton
                  id="batch"
                  label="Batch Editing"
                  name="EditOperation"
                  :change="onRadioChange"
                ></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ejs-radiobutton
                  id="dialog"
                  label="Dialog Editing"
                  name="EditOperation"
                  :change="onRadioChange"
                ></ejs-radiobutton>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ejs-radiobutton
                  id="cc"
                  label="Command Columns"
                  name="EditOperation"
                  :change="onRadioChange"
                ></ejs-radiobutton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample demonstrates CRUD operations performed over the raw items of any value cell in a pivot table. Different types of cell editing options are provided to make editing simpler.</p>
    </div>
    <div id="description">
      <p>
        In the sample, the raw items of any value cell can be viewed in a drill-through dialog by double-clicking the
        cell. CRUD operations can be performed by double-clicking the cells or using toolbar options. The following
        CRUD operations can be performed through toolbar operations for normal and batch edits:
      </p>
      <ul>
        <li><code>Add</code> - To add new record, click <code>Add</code> in the toolbar.</li>
        <li><code>Edit</code> - To edit record, double click a cell.</li>
        <li><code>Delete</code> - To delete a record, click <code>Delete</code> in the toolbar after selected a row.</li>
        <li><code>Update</code>,<code>Cancel</code> - You can save or discard changes by clicking <code>Update</code>
            or <code>Cancel</code> in
            the toolbar, respectively.</li>
    </ul>
    <p>This CRUD operations can be configured in a pivot table using <code>editSettings</code> in code behind. There are also
        different modes to manipulate the data source.</p>
      <p>The available modes are:</p>
      <ul>
        <li>
          <code>Normal</code> - Editing by row.
        </li>
        <li>
          <code>Batch</code> - Editing individual cells and bulk updating.
        </li>
        <li>
          <code>Dialog</code> - Editing by row with a dialog option.
        </li>
        <li>
          <code>Command Columns</code> - An additional column appends to the grid with icons to perform CRUD
          operations. Editing using cell double-click is restricted here.
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(RadioButtonPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Quarter" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [
          { name: "Country" },
          { name: "Product_Categories", caption: "Product Categories" },
          { name: "Products" }
        ],
        formatSettings: [{ name: "Amount", format: "C0" }],
        dataSource: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: []
      },
      showTooltip: false,
      gridSettings: { columnWidth: 140 },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal"
      },
      width: "100%",
      height: 300
    };
  },
  methods: {
    onRadioChange: function(args: any) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let id: string = (args.event.target as HTMLElement).id;
      if (id === "inline") {
        pivotObj.editSettings.allowEditOnDblClick = true;
        pivotObj.editSettings.allowCommandColumns = false;
        pivotObj.editSettings.mode = "Normal";
      } else if (id === "batch") {
        pivotObj.editSettings.allowEditOnDblClick = true;
        pivotObj.editSettings.allowCommandColumns = false;
        pivotObj.editSettings.mode = "Batch";
      } else if (id === "dialog") {
        pivotObj.editSettings.allowEditOnDblClick = true;
        pivotObj.editSettings.allowCommandColumns = false;
        pivotObj.editSettings.mode = "Dialog";
      } else {
        pivotObj.editSettings.allowCommandColumns = true;
      }
    }
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>