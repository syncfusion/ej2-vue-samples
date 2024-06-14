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
                        <ejs-button id="apply" ref="apply" v-on:click="btnClick" isPrimary='true'>Apply</ejs-button>
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
    </p><br />
    <p>
        More information on the sorting can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/sorting">
        documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { IDataSet, PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
import {
  CheckBoxComponent,
  ButtonComponent,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListComponent,
  ChangeEventArgs as dropEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
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
    };
  },
  methods: {
    fieldOnChange: function(args: dropEventArgs) {
      let fieldsddl = ((this as any).$refs.fields).ej2Instances;
      let orderddl = ((this as any).$refs.order).ej2Instances;
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
      let fieldsddl = ((this as any).$refs.fields).ej2Instances;
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
      let fieldsddl = ((this as any).$refs.fields).ej2Instances;
      let orderddl = ((this as any).$refs.order).ej2Instances;
      let btn = ((this as any).$refs.apply).ej2Instances;
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let ischecked: boolean = args.checked as boolean;
      fieldsddl.enabled = ischecked;
      orderddl.enabled = ischecked;
      btn.disabled = !ischecked;
      pivotObj.dataSourceSettings.enableSorting = ischecked;
    },
    btnClick: function(args: checkEventArgs) {
      let checkBoxObj = ((this as any).$refs.sorting).ej2Instances;
      let fieldsddl = ((this as any).$refs.fields).ej2Instances;
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
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
}
</script>

<style scoped>
/deep/ .e-pivottable .e-static {
  width: 80% !important;
}

/deep/ .hdrlabel {
  font-size: 13px;
}

/deep/ .e-bigger .hdrlabel {
  font-size: 14px;
}

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