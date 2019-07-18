<template>
<div>
<div class="col-lg-8 control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr style="height: 50px">
                <td>
                    <div class="row" style="margin-left: -10px">
                        <ejs-checkbox id='sorting' ref="sorting" label="Enable Sorting" labelPosition="After" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Fields:
                    </div>
                </td>
                <td>
                    <div style="margin-left: -20px">
                        <ejs-dropdownlist id='fields' ref='fields' :change="fieldOnChange" enabled="true" :fields="fields" :dataSource='fieldData' index=0></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Order:
                    </div>
                </td>
                <td>
                    <div style="margin-left: -20px">
                        <ejs-dropdownlist id='order' ref='order' enabled="true" :change="orderOnChange" :dataSource='orderData' index=0></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
              <td></td>
                <td>
                    <div style="float: right">
                        <ejs-button id="apply" ref="apply" v-on:click.native="btnClick" :cssClass="cssClass" isPrimary='true'>Apply</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates ordering fields in row and column axes either in ascending or descending order.</p>
</div>
<div id="description">
    <p>In this sample, any field can be selected from the
        <b>Fields</b> dropdown list and its order can be changed to display headers either in ascending or descending order.
        It can be enabled using the
        <code>enableSorting</code> property and it can be configured using the
        <code>name</code> and
        <code>order</code> options inside the
        <code>sortSettings</code> property in the pivot table.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { IDataSet, PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import {
  CheckBoxPlugin,
  ButtonPlugin,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  ChangeEventArgs as dropEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
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
        enableSorting: true
      },
      gridSettings: { columnWidth: 140 },
      width: "100%",
      height: 300,
      fieldData: [
        { Field: "Country", Order: "Country_asc" },
        { Field: "Products", Order: "Products_asc" },
        { Field: "Year", Order: "Year_asc" },
        { Field: "Order Source", Order: "Order Source_asc" }
      ],
      orderData: ["Ascending", "Descending"],
      fields: { text: "Field", value: "Order" },
      cssClass: "e-flat"
    };
  },
  methods: {
    fieldOnChange: function(args: dropEventArgs) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      let orderddl = (<any>this.$refs.order).ej2Instances;
      if (
        fieldsddl.dataSource[fieldsddl.index].Order ===
        fieldsddl.dataSource[fieldsddl.index].Field + "_asc"
      ) {
        orderddl.index = 0;
      } else {
        orderddl.index = 1;
      }
    },
    orderOnChange: function(args: dropEventArgs) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      if (args.value === "Ascending") {
        fieldsddl.dataSource[fieldsddl.index].Order =
          fieldsddl.dataSource[fieldsddl.index].Field + "_asc";
      } else {
        fieldsddl.dataSource[fieldsddl.index].Order =
          fieldsddl.dataSource[fieldsddl.index].Field + "_desc";
      }
      fieldsddl.refresh();
    },
    checkbox_onChange: function(args: checkEventArgs) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      let orderddl = (<any>this.$refs.order).ej2Instances;
      let btn = (<any>this.$refs.apply).ej2Instances;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let ischecked: boolean = args.checked as boolean;
      fieldsddl.enabled = ischecked;
      orderddl.enabled = ischecked;
      btn.disabled = !ischecked;
      pivotObj.dataSourceSettings.enableSorting = ischecked;
    },
    btnClick: function(args: checkEventArgs) {
      let checkBoxObj = (<any>this.$refs.sorting).ej2Instances;
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (checkBoxObj.checked) {
        pivotObj.dataSourceSettings.enableSorting = true;
        pivotObj.dataSourceSettings.sortSettings = [
          {
            name: "Country",
            order:
              fieldsddl.dataSource[0].Order === "Country_asc"
                ? "Ascending"
                : "Descending"
          },
          {
            name: "Products",
            order:
              fieldsddl.dataSource[1].Order === "Products_asc"
                ? "Ascending"
                : "Descending"
          },
          {
            name: "Year",
            order:
              fieldsddl.dataSource[2].Order === "Year_asc"
                ? "Ascending"
                : "Descending"
          },
          {
            name: "Order_Source",
            order:
              fieldsddl.dataSource[3].Order === "Order Source_asc"
                ? "Ascending"
                : "Descending"
          }
        ];
      } else {
        pivotObj.dataSourceSettings.enableSorting = false;
        pivotObj.dataSourceSettings.sortSettings = [];
      }
    }
  }
});
</script>

<style>
.e-pivottable .e-static {
  width: 80% !important;
}

.hdrlabel {
  font-size: 13px;
}

.e-bigger .hdrlabel {
  font-size: 14px;
}

#pivotview {
  width: 100%;
}
</style>