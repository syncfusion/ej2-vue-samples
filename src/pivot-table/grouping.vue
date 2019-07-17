<template>
  <div>
    <div class="col-lg-8 control-section" id="pivot-grid-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :load="onLoad"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :dataBound="dataBound"
          :showGroupingBar="showGroupingBar"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-4 property-section pivot-table-property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>Group Date by:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="datecls">
                <ejs-multiselect
                  id="dategroup"
                  ref="dateGroup"
                  :dataSource="groupData"
                  mode="CheckBox"
                  showDropDownIcon="true"
                  enableSelectionOrder="false"
                  :popupWidth="dGroupWidth"
                  :width="150"
                  :value="dGroupValue"
                  :placeholder="dGroupPlaceholder"
                  :filterBarPlaceholder="dGroupFilterPlaceholder"
                  :select="applyGroupSettings"
                  :removed="applyGroupSettings"
                ></ejs-multiselect>
              </div>
            </td>
          </tr>
          <tr class="input2cls" style="height: 50px;">
            <td>
              <div>Group Product ID by:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="numbercls">
                <ejs-numerictextbox
                  id="numbergroup"
                  ref="numberGroup"
                  :value="nGroupValue"
                  width="150"
                  :placeholder="nGroupPlaceHolder"
                  :format="nGroupFormat"
                  :min="nGroupMinValue"
                  :max="nGroupMaxValue"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td></td>
            <td>
              <div style="float:right;margin-right: 4px">
                <ejs-button
                  id="group-apply"
                  ref="apply"
                  v-on:click.native="onClick"
                  isPrimary="true"
                >Apply</ejs-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample demonstrates grouping dates in year, quarter, month, etc., and number types in ranges like 1–5, 6–10, etc. in row and column headers of the pivot table.</p>
    </div>
    <div id="description">
      <p>
        In this sample, the date type can be separated and showcased individually as year, quarter, month, or day by
        selecting the appropriate option from the
        <b>Group date</b> by drop-down list. Also, numbers can be grouped by
        entering the appropriate value in the
        <b>Group Product ID</b> by giving a range number in the the numeric text
        box.
      </p>
      <p>
        Grouping can be applied through code-behind using the
        <code>groupSettings</code> object in the pivot table
        along with the following properties:
      </p>
      <table>
        <tr>
          <td style="vertical-align: top;padding: 10px 0; width: 130px;">
            <code>name :</code>
          </td>
          <td>Specifies the normal field.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>type :</code>
          </td>
          <td>
            Specifies the field type for applying the group settings. For example, date formatted fields should be
            in Date type and number formatted fields should be in Number type.
          </td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>groupInterval :</code>
          </td>
          <td>Specifies the interval for date fields in years, quarters, months, etc.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>rangeInterval :</code>
          </td>
          <td>Specifies the interval value to group the number field.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  GroupingBar,
  IDataSet,
  DateGroup
} from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-buttons";
import {
  MultiSelectPlugin,
  SelectEventArgs,
  RemoveEventArgs,
  CheckBoxSelection
} from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { GroupSettingsModel } from "@syncfusion/ej2-pivotview/src/pivotview/model/datasourcesettings-model";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(MultiSelectPlugin);
/* tslint:disable */
declare var require: any;
let data: any = require("./gData.json");
let selectedGroups: string[] = ["Years", "Months", "Days"];
let groupData: string[] = ["Years", "Quarters", "Months", "Days"];
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        expandAll: false,
        enableSorting: true,
        formatSettings: [
          { name: "Amount", format: "C0" },
          { name: "Sold", format: "N0" },
          { name: "Date", type: "date", format: "dd/MM/yyyy-hh:mm a" }
        ],
        rows: [{ name: "Date", caption: "Date" }],
        columns: [
          { name: "Product_ID", caption: "Product ID" },
          { name: "Products", caption: "Products" }
        ],
        values: [
          { name: "Sold", caption: "Unit Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [],
        groupSettings: [
          {
            name: "Date",
            type: "Date",
            groupInterval: ["Years", "Months", "Days"]
          },
          { name: "Product_ID", type: "Number", rangeInterval: 4 }
        ]
      },
      width: "100%",
      height: 450,
      showGroupingBar: true,
      gridSettings: {
        columnWidth: 140
      },
      groupData: groupData,
      dGroupWidth: "150",
      dGroupValue: selectedGroups,
      dGroupPlaceholder: "Select group",
      dGroupFilterPlaceholder: "Search group",
      nGroupValue: 4,
      nGroupPlaceHolder: "Example: 4",
      nGroupFormat: "###",
      nGroupMinValue: 1,
      nGroupMaxValue: 10
    };
  },
  methods: {
    onLoad: function(args: any) {
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

      let date: Date;
      let products: string[] = [
        "",
        "Bottles and Cages",
        "Cleaners",
        "Fenders",
        "Mountain Bikes",
        "Road Bikes",
        "Touring Bikes",
        "Gloves",
        "Jerseys",
        "Shorts",
        "Vests"
      ];
      let amount: number[] = [0, 2, 3, 8, 60, 75, 65, 3, 5, 4, 2];
      for (let ln: number = 0, lt: number = data.length; ln < lt; ln++) {
        date = new Date(data[ln].Date.toString());
        data[ln].Date = date.toString();
        data[ln].Products = products[data[ln].Product_ID - 1000];
        data[ln].Sold =
          data[ln].Sold *
          (date.getFullYear() === 2015
            ? 3
            : date.getFullYear() === 2016
            ? 4
            : date.getFullYear() === 2017
            ? 2
            : 5);
        data[ln].Amount =
          ((date.getFullYear() === 2018 ? 2 : 0) + data[ln].Sold) *
          amount[data[ln].Product_ID - 1000];
      }
      args.dataSourceSettings.dataSource = extend([], data, null as any, true) as IDataSet[];
    },
    dataBound: function(args: any) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (pivotObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    applyGroupSettings: function(args: any) {
      if (args.name === "select") {
        if (selectedGroups.indexOf(args.itemData) === -1) {
          selectedGroups.push(args.itemData);
        }
      } else {
        if (selectedGroups.indexOf(args.itemData) > -1) {
          var index = selectedGroups.indexOf(args.itemData);
          selectedGroups.splice(index, 1);
        }
      }
    },
    onClick: function(args: ChangeEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let numberGroup = (<any>this.$refs.numberGroup).ej2Instances;
      let groupSettings: GroupSettingsModel[] = [];
      if (selectedGroups.length > 0) {
        groupSettings.push({
          name: "Date",
          type: "Date",
          groupInterval: selectedGroups as DateGroup[]
        });
      }
      if (numberGroup.value > 1) {
        groupSettings.push({
          name: "Product_ID",
          type: "Number",
          rangeInterval: numberGroup.value
        });
      }
      pivotObj.dataSourceSettings.groupSettings = groupSettings;
    }
  },
  provide: {
    pivotview: [GroupingBar],
    multiselect: [CheckBoxSelection]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  #pivot-grid-section {
    overflow: auto;
  }
}

.pivot-table-property-section {
    overflow: auto;
}

.pivot-table-property-section .e-multiselect {
    padding: 0;
}
</style>