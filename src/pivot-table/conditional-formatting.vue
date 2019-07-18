<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :allowConditionalFormatting="allowConditionalFormatting" :showFieldList="showFieldList">        
        </ejs-pivotview>
        </div>
    </div>
    
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <ejs-button id="conditional-formatting-btn" v-on:click.native="applyFormat" isPrimary='true'>APPLY FORMAT</ejs-button>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <ejs-button id="conditional-formatting-reset-btn" v-on:click.native="resetFormat" isPrimary='true'>RESET ALL</ejs-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
          <p>This sample demonstrates formatting the appearance of pivot table cells with user-defined styles based on applied conditions. The Conditional Formatting dialog is invoked to add conditions and styles for the conditions. The formatting can be added, removed, and reset dynamically as well.</p>
    </div>
    <div id="description">
          <p>Conditional formatting works only for cells with values,
              allowing the users to change its appearance such as background color, font color, font family, and font size based on specific conditions.
              Conditional formatting can be applied either through UI or code behind. To enable this option in UI, set
              <code> allowConditionalFormatting</code> to true and invoke
              <code> showConditionalFormattingDialog</code> method to view the UI.
              To achieve this in code-behind, set
              <code> allowConditionalFormatting</code> to true and use the
              <code> conditionalFormatSettings</code> object in the pivot table along with the following properties.
              Both options are enabled in this sample.</p>
          <table>
              <tr>
                  <td style="vertical-align: top;padding: 4px 0;">
                      <code>measure :</code>
                  </td>
                  <td>Specifies the value field name for which style will be applied.</td>
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
                  <td>Specifies the start value.</td>
              </tr>
              <tr>
                  <td style="vertical-align: top;padding: 4px 0;">
                      <code>value2 :</code>
                  </td>
                  <td>Specifies the end value.</td>
              </tr>
              <tr>
                  <td style="vertical-align: top;padding: 4px 0;">
                      <code>style :</code>
                  </td>
                  <td>Specifies the style for the cell.</td>
              </tr>
          </table>
          <br />
          <p>Also, user can clear the entire style applied for the value cell using reset all option.</p>
          <p>
              <strong>Injecting Module:</strong>
          </p>
          <p>
              The pivot table features are segregated into individual modules.
              To enable conditional formatting, inject
              <code> ConditionalFormatting</code> module using the
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
  ConditionalFormatting,
  FieldList
} from "@syncfusion/ej2-vue-pivotview";
import {
  ButtonPlugin,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
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
        drilledMembers: [{ name: "Country", items: ["France", "Germany"] }],
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        conditionalFormatSettings: [
          {
            measure: "In_Stock",
            value1: 5000,
            conditions: "LessThan",
            style: {
              backgroundColor: "#80cbc4",
              color: "black",
              fontFamily: "Tahoma",
              fontSize: "12px"
            }
          },
          {
            value1: 3400,
            value2: 40000,
            measure: "Sold",
            conditions: "Between",
            style: {
              backgroundColor: "#f48fb1",
              color: "black",
              fontFamily: "Tahoma",
              fontSize: "12px"
            }
          }
        ]
      },
      allowConditionalFormatting: true,
      showFieldList: true,
      gridSettings: { columnWidth: 100 },
      width: "100%",
      height: 300
    };
  },
  methods: {
    applyFormat: function(args: checkEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotObj.conditionalFormattingModule.showConditionalFormattingDialog();
    },
    resetFormat: function(args: checkEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
        if (pivotObj.dataSourceSettings.conditionalFormatSettings.length > 0) {  
            pivotObj.setProperties({ dataSourceSettings: { conditionalFormatSettings: [] } }, true);
            pivotObj.renderPivotGrid();
        }
        pivotObj.conditionalFormattingModule.destroy();
        (<any>document.getElementById('conditional-formatting-reset-btn')).blur();
    }
  },
  provide: {
    pivotview: [ConditionalFormatting, FieldList]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
#conditional-formatting-btn, #conditional-formatting-reset-btn {
    width: 80%;
    margin-left: 20px;
}
</style>