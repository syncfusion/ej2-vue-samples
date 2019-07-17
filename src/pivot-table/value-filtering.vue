<template>
<div>
    <div class="col-lg-8 control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="PivotView" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :dataBound="ondataBound" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section pivottable-property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr style="height: 50px">
                <td>
                    <div>Fields:
                    </div>
                </td>
                <td style="padding-bottom: 16px">
                    <div>
                        <ejs-dropdownlist id='fields' ref="fields" :dataSource='fields' index=0 width='100%' :change='onFieldChange'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Measures:
                    </div>
                </td>
                <td style="padding-bottom: 16px">
                    <div>
                        <ejs-dropdownlist id='measures' ref="measures" :dataSource='measures' :fields='measureFields' index=0 width='100%' :change='onMeasureChange'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Condition:
                    </div>
                </td>
                <td style="padding-bottom: 16px">
                    <div class="conditionscls">
                        <ejs-dropdownlist id='conditions' ref="conditions" :dataSource='operators' value="DoesNotEquals" width='100%' :change='onOperatorChange'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr class="input1cls" style="height: 50px">
                <td>
                    <div>Value 1:
                    </div>
                </td>
                <td style="padding-bottom: 16px">
                    <div class="value1cls">
                        <ejs-numerictextbox id="value1" ref="value1" :value='input1Value' width='100%' :change="onValue1Change" :placeholder="Input1PlaceHolder"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr class="input2cls" style="height: 50px;display: none">
                <td>
                    <div>Value 2:
                    </div>
                </td>
                <td class="value2cls">
                    <div style="margin-top:-5px">
                        <ejs-numerictextbox id="value2" ref="value2" :value="input2Value" width='100%' :change="onValue2Change" :placeholder="Input2PlaceHolder"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
              <td colspan="2">
                  <div style="float:right;margin-right: 4px">
                      <ejs-button id="clear" ref="clear" v-on:click.native="onClear">Clear</ejs-button>
                  </div>
                  <div style="float:right;margin-right: 4px">
                      <ejs-button id="apply" ref="apply" v-on:click.native="onClick" isPrimary='true'>Apply</ejs-button>
                  </div>
              </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates filtering row and column headers based on a specific measure and the grand total. The different conditions that can be applied to the grand total are equals, less than, greater than, between, etc.</p>
</div>
<div id="description">
    <p>In this sample, any field can be selected from the
        <b> Fields</b> dropdown list along with value field from
        <b> Measures</b> dropdown list to filter. Further, choose an option from the
        <b> Conditions</b> dropdown list, enter the values in
        <b> Value1</b> and
        <b> Value2</b> input textbox and apply the same to view the field headers filtered based on the grand total.
        </p>
    <p>
        Value filtering can be applied either through code-behind or UI. To achieve this in code-behind, use the
        <code> filterSettings</code> object in the pivot table along with the following properties.
    </p>
    <table>
        <tr>
            <td style="vertical-align: top;padding: 10px 0;width: 100px">
                <code>name :</code>
            </td>
            <td>Specifies the normal field.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>type :</code>
            </td>
            <td>Specifies the filter type and it should be "Value" in this scenario.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>measure :</code>
            </td>
            <td>Specifies the value based field.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>condition :</code>
            </td>
            <td>Specifies the operator type like equals, greater than, less than, etc.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>value1 :</code>
            </td>
            <td>Gets the value to view the filter result. For example, select "DoesNotEquals" and enter "9590" to exclude the grand total with this value.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>value2 :</code>
            </td>
            <td>For conditions like "between" and "not between", this option will be enabled. Enter both start and end value to view the filter result. For example, enter "9590" and "17500" to filter the grand totals within this range.</td>
        </tr>
    </table>
    <br />
    <p>
        To achieve value filtering through UI, navigate to
    <b> "User Interaction > Field List"</b> sample and open the filter dialog.
        For API details, refer to the
    <b> "Field List"</b> sample description.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, Operators, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import {
  NumericTextBoxPlugin,
  ChangeEventArgs as NumericEventArgs
} from "@syncfusion/ej2-vue-inputs";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { FilterModel } from "@syncfusion/ej2-pivotview/src/pivotview/model/datasourcesettings-model";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
let fieldCollections: { [key: string]: FilterModel } = {};
let operators: string[] = [
  "Equals",
  "DoesNotEquals",
  "GreaterThan",
  "GreaterThanOrEqualTo",
  "LessThan",
  "LessThanOrEqualTo",
  "Between",
  "NotBetween"
];
let fields: string[] = ["Country", "Products", "Year"];
let measures: { [key: string]: Object }[] = [
  { value: "In_Stock", text: "In Stock" },
  { value: "Sold", text: "Units Sold" },
  { value: "Amount", text: "Sold Amount" }
];
let measureFields: object = { text: "text", value: "value" };

function setFilters(
  fieldName: string,
  measureName: string,
  condition: Operators,
  operand1: string,
  operand2: string
) {
  fieldCollections[fieldName] = {
    name: fieldName,
    measure: measureName,
    type: "Value",
    condition: condition,
    value1: operand1,
    value2: operand2
  };
}

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        allowValueFilter: true,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        columns: [{ name: "Year" }],
        dataSource: Pivot_Data,
        expandAll: false
      },
      width: "100%",
      height: 300,
      gridSettings: { columnWidth: 140 },
      memberFields: { text: "Member" },
      input1Value: '0',
      input2Value: '0',
      fields: fields,
      measures: measures,
      measureFields: measureFields,
      operators: operators,
      showClearButton: false,
      enableSelectionOrder: false,
      Input1PlaceHolder: '"Example: 9590"',
      Input2PlaceHolder: 'Example: 17500',
    };
  },
  methods: {
    ondataBound: function(args: any) {
      fieldCollections = {};
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let field of pivotObj.dataSourceSettings.filterSettings) {
        fieldCollections[field.name] = field;
      }
    },
    onClick: function() {
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
        var fieldsddl = (<any>this.$refs.fields).ej2Instances;
        var measuresddl = (<any>this.$refs.measures).ej2Instances;
        var operatorddl = (<any>this.$refs.conditions).ej2Instances;
        var valueInput1 = (<any>this.$refs.value1).ej2Instances;
        var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      let filterOptions: FilterModel[] = [];
      filterOptions = [{
          name: fieldsddl.value,
          type: 'Value',
          measure: measuresddl.value,
          condition: operatorddl.value,
          value1: valueInput1.value === null ? 1 : valueInput1.value,
          value2: valueInput2.value === null ? 1 : valueInput2.value
      }];
      pivotObj.dataSourceSettings.filterSettings = filterOptions;
    },
    onClear: function() {
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      pivotObj.dataSourceSettings.filterSettings = [];
      valueInput1.value = '0';
      valueInput2.value = '0';
    },
    onFieldChange: function(args: ChangeEventArgs) {
      var measuresddl = (<any>this.$refs.measures).ej2Instances;
      var operatorddl = (<any>this.$refs.conditions).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      if (fieldCollections[args.value as string]) {
        measuresddl.value = fieldCollections[args.value as string].measure;
        operatorddl.value = fieldCollections[args.value as string].condition;
      } else {
        setFilters(args.value as string, "In_Stock", "DoesNotEquals", "", "");
        operatorddl.value = "DoesNotEquals";
        measuresddl.value = "In_Stock";
      }
    },
    onOperatorChange: function(args: ChangeEventArgs) {
      var measuresddl = (<any>this.$refs.measures).ej2Instances;
      var fieldsddl = (<any>this.$refs.fields).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      if (args.value === "Between" || args.value === "NotBetween") {
        (document.querySelector(".input2cls") as HTMLElement).style.display = "";
      } else {
        (document.querySelector(".input2cls") as HTMLElement).style.display = "none";
      }
      setFilters(
        fieldsddl.value as string,
        measuresddl.value as string,
        args.value as Operators,
        valueInput1.value,
        valueInput2.value
      );
    },
    onValue1Change: function(e: NumericEventArgs) {
      var measuresddl = (<any>this.$refs.measures).ej2Instances;
      var fieldsddl = (<any>this.$refs.fields).ej2Instances;
      var operatorddl = (<any>this.$refs.conditions).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      setFilters(
        fieldsddl.value as string,
        measuresddl.value as string,
        operatorddl.value as Operators,
        (e.value as number).toString(),
        valueInput2.value.toString()
      );
    },
    onValue2Change: function(e: NumericEventArgs) {
      var measuresddl = (<any>this.$refs.measures).ej2Instances;
      var fieldsddl = (<any>this.$refs.fields).ej2Instances;
      var operatorddl = (<any>this.$refs.conditions).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      setFilters(
        fieldsddl.value as string,
        measuresddl.value as string,
        operatorddl.value as Operators,
        valueInput1.value.toString(),
        (e.value as number).toString(),
      );
    }
  }
});
</script>

<style>
.e-pivotview {
  width: 100%;
  height: 100%;
}

.pivottable-property-section table tr td:first-child {
  width: 20%;
}

.pivottable-property-section {
  overflow: auto;
}
</style>