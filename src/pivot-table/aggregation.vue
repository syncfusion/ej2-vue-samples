<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :load="onLoad"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-dropdownlist
                  id="costdrpdwn"
                  :change="costChange"
                  :dataSource="costData"
                  index="0"
                  placeholder="Cost"
                  floatLabelType="Auto"
                  :fields="dataFields"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-dropdownlist
                  id="unitdrpdwn"
                  :change="unitChange"
                  :dataSource="unitData"
                  index="0"
                  placeholder="Units"
                  floatLabelType="Auto"
                  :fields="dataFields"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the aggregate types like sum, average, min, max, count, distinct count, and more in the pivot table for quick business analysis. End users can also change the aggregation type of each field bound to the value axis in the field list at runtime.</p>
    </div>
    <div id="description">
      <p>
        In this sample, you can change the aggregate types for value fields using the dropdown list separately. The aggregate type can be set using the
        <code>type</code> property of the value field. The built-in aggregates are:
      </p>
      <p>
        <code>Sum</code>,
        <code>Average</code>,
        <code>Min</code>,
        <code>Max</code>,
        <code>Count</code>,
        <code>Distinct Count</code>,
        <code>Product</code>,
        <code>Index</code>,
        <code>Population StDev</code>,
        <code>Sample StDev</code>,
        <code>Population Var</code>,
        <code>Sample Var</code>,
        <code>Running Totals</code>,
        <code>Difference From</code>,
        <code>% of Difference From</code>,
        <code>% of Grand Total</code>,
        <code>% of Column Total</code>,
        <code>% of Row Total</code>,
        <code>% of Parent Total</code>,
        <code>% of Parent Column Total</code>,
        <code>% of Parent Row Total.</code>
      </p>
      <p>
        To achieve aggregation through UI, navigate to
        <b>"User Interaction > Field List"</b> sample and click and open the value field settings menu to experience the same.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  PivotViewComponent,
  SummaryTypes,
  FieldList,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(DropDownListPlugin);
/* tslint:disable */
declare var require: any;
let data: IDataSet[] = require("./rData.json");
let qData: { [key: string]: Object }[] = [
  { value: "Sum", text: "Sum" },
  { value: "Avg", text: "Average" },
  { value: "Max", text: "Max" },
  { value: "Min", text: "Min" },
  { value: "Count", text: "Count" },
  { value: "DistinctCount", text: "Distinct Count" },
  { value: "Product", text: "Product" },
  { value: "Index", text: "Index" },
  { value: "PopulationStDev", text: "Population StDev" },
  { value: "SampleStDev", text: "Sample StDev" },
  { value: "RunningTotals", text: "Running Totals" },
  { value: "DifferenceFrom", text: "Difference From" },
  { value: "PercentageOfDifferenceFrom", text: "% of Difference From" },
  { value: "PercentageOfGrandTotal", text: "% of Grand Total" },
  { value: "PercentageOfColumnTotal", text: "% of Column Total" },
  { value: "PercentageOfRowTotal", text: "% of Row Total" },
  { value: "PercentageOfParentTotal", text: "% of Parent Total" },
  { value: "PercentageOfParentColumnTotal", text: "% of Parent Column Total" },
  { value: "PercentageOfParentRowTotal", text: "% of Parent Row Total" }
];

let cData: { [key: string]: Object }[] = [
  { value: "Sum", text: "Sum" },
  { value: "Avg", text: "Average" },
  { value: "Max", text: "Max" },
  { value: "Min", text: "Min" },
  { value: "Product", text: "Product" },
  { value: "Index", text: "Index" },
  { value: "PopulationStDev", text: "Population StDev" },
  { value: "SampleStDev", text: "Sample StDev" },
  { value: "RunningTotals", text: "Running Totals" },
  { value: "DifferenceFrom", text: "Difference From" },
  { value: "PercentageOfDifferenceFrom", text: "% of Difference From" },
  { value: "PercentageOfGrandTotal", text: "% of Grand Total" },
  { value: "PercentageOfColumnTotal", text: "% of Column Total" },
  { value: "PercentageOfRowTotal", text: "% of Row Total" },
  { value: "PercentageOfParentTotal", text: "% of Parent Total" },
  { value: "PercentageOfParentColumnTotal", text: "% of Parent Column Total" },
  { value: "PercentageOfParentRowTotal", text: "% of Parent Row Total" }
];

let dataFields: object = { text: "text", value: "value" };

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        formatSettings: [{ name: "ProCost", format: "C" }],
        drilledMembers: [
          { name: "EnerType", items: ["Biomass", "Free Energy"] }
        ],
        columns: [
          { name: "EnerType", caption: "Energy Type" },
          { name: "EneSource", caption: "Energy Source" }
        ],
        expandAll: false,
        rows: [
          { name: "Year", caption: "Production Year" },
          { name: "HalfYear", caption: "Half Year" },
          { name: "Quarter", caption: "Quarter Year" }
        ],
        values: [
          { name: "PowUnits", caption: "Units (GWh)" },
          { name: "ProCost", caption: "Cost (MM)" }
        ],
        filters: []
      },

      showFieldList: true,
      width: "100%",
      height: 300,
      gridSettings: { columnWidth: 140 },
      costData: cData,
      unitData: qData,
      dataFields: dataFields
    };
  },
  methods: {
    costChange: function(args: ChangeEventArgs) {
      this.setSummaryType("ProCost", args.value as SummaryTypes);
    },
    unitChange: function(args: ChangeEventArgs) {
      this.setSummaryType("PowUnits", args.value as SummaryTypes);
    },
    onLoad(): void {
      if (data[0].Year === undefined) {
        let date: Date;
        for (let ln: number = 0, lt: number = data.length; ln < lt; ln++) {
          date = new Date(data[ln].Date.toString());
          let dtYr: number = date.getFullYear();
          let dtMn: number = date.getMonth();
          let dtdv: number = (dtMn + 1) / 3;
          data[ln].Year = "FY " + dtYr;
          data[ln].Quarter =
            dtdv <= 1
              ? "Q1 " + ("FY " + dtYr)
              : dtdv <= 2
              ? "Q2 " + ("FY " + dtYr)
              : dtdv <= 3
              ? "Q3 " + ("FY " + dtYr)
              : "Q4 " + ("FY " + dtYr);
          data[ln].HalfYear =
            (dtMn + 1) / 6 <= 1
              ? "H1 " + ("FY " + dtYr)
              : "H2" + ("FY " + dtYr);
          delete data[ln].Date;
        }
      }
      (<any>this.$refs.pivotview).ej2Instances.dataSourceSettings.dataSource = data;
    },
    setSummaryType(fieldName: string, summaryType: SummaryTypes): void {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let isAvail: boolean = false;
      for (
        let vCnt: number = 0;
        vCnt < pivotObj.dataSourceSettings.values.length;
        vCnt++
      ) {
        if (pivotObj.dataSourceSettings.values[vCnt].name === fieldName) {
          pivotObj.dataSourceSettings.values[vCnt].type = summaryType;
          isAvail = true;
        }
      }
      if (isAvail) {
        pivotObj.updateDataSource();
      }
    }
  },
  provide: {
    pivotview: [FieldList]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>