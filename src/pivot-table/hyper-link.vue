<template>
  <div>
    <div class="col-lg-8 control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="PivotView"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showTooltip="showTooltip"
          :gridSettings="gridSettings"
          :hyperlinkSettings="hyperlinkSettings"
          :hyperlinkCellClick="onCellClick"
          :width="width"
          :height="height"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-4 property-section pivottable-property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>Show Hyperlink:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div>
                <ejs-dropdownlist
                  id="options"
                  ref="options"
                  :dataSource="options"
                  index="3"
                  width="100%"
                  :fields="measureFields"
                  :change="onOptionChange"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr class="text1cls" style="height: 50px; display: none">
            <td colspan="2">
              <div>Condition based settings:</div>
            </td>
          </tr>
          <tr class="measurecls" style="height: 50px; display: none">
            <td>
              <div>Measures:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div>
                <ejs-dropdownlist
                  id="measures"
                  ref="measures"
                  :dataSource="measures"
                  :fields="measureFields"
                  value="In Stock"
                  width="100%"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr class="conditioncls" style="height: 50px; display: none">
            <td>
              <div>Condition:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="conditionscls">
                <ejs-dropdownlist
                  id="conditions"
                  ref="conditions"
                  :dataSource="operators"
                  value="NotEquals"
                  width="100%"
                  :change="onOperatorChange"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr class="input1cls" style="height: 50px; display: none">
            <td>
              <div>Value 1:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="value1cls">
                <ejs-numerictextbox
                  id="value1"
                  ref="value1"
                  :value="input1Value"
                  width="100%"
                  :placeholder="Input1PlaceHolder"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr class="input2cls" style="height: 50px; display: none">
            <td>
              <div>Value 2:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="value2cls">
                <ejs-numerictextbox
                  id="value2"
                  ref="value2"
                  :value="input2Value"
                  width="100%"
                  :placeholder="Input2PlaceHolder"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr class="text2cls" style="height: 50px; display: none">
            <td colspan="2">
              <div>Header based settings:</div>
            </td>
          </tr>
          <tr class="textinputcls" style="height: 50px; display: none">
            <td>
              <div>Header Text:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="textcls">
                <ejs-maskedtextbox
                  id="text"
                  ref="text"
                  :value="value"
                  width="100%"
                  :placeholder="TextPlaceHolder"
                ></ejs-maskedtextbox>
              </div>
            </td>
          </tr>
          <tr class="updatecls" style="height: 50px; display: none">
            <td colspan="2">
              <div style="float:right;margin-right: 4px">
                <ejs-button
                  id="apply"
                  ref="apply"
                  v-on:click.native="onClick"
                  isPrimary="true"
                >Apply</ejs-button>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div>
                <b>
                  <hr>Event Trace:
                </b>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="eventarea" style="height: 160px;overflow: auto">
                <span class="EventLog" id="EventLog" ref="eventlog" style="word-break: normal;"></span>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td></td>
            <td colspan="2">
              <div class="evtbtn" style="float:right;margin-right: 4px;">
                <ejs-button
                  id="clear"
                  ref="clear"
                  v-on:click.native="onClear"
                  cssClass="e-small"
                >Clear</ejs-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample demonstrates showing hyperlink options in row headers, column headers, value cells, and summary cells in the pivot table. Also, hyperlink options can be enabled for specific headers and value cells based on the applied condition.</p>
    </div>
    <div id="description">
      <p>
            In this sample, hyperlinks are enabled in cells based on the options selected from the <b>Show Hyperlink</b> drop-down list.
            The following options are available for setting the hyperlinks:
        </p>
        <table>
            <tr>
                <td style="vertical-align: top;padding: 10px 0;">
                    <code>All cells :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to all cells.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Row headers :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to row headers.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Column headers :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to column headers.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Value cells :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to value cells.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Summary cells :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to summary cells.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Condition based option :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to value and summary cells based on the applied condition like less than, greater than, equals, etc.</td>
            </tr>
            <tr>
                <td style="vertical-align: top;padding: 4px 0;">
                    <code>Header based option :</code>
                </td>
                <td>Allows to set the visibility of hyperlink to specific row/column based on the given header text.</td>
            </tr>
        </table>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  Condition,
  IAxisSet,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import {
  MaskedTextBoxPlugin,
  NumericTextBoxPlugin
} from "@syncfusion/ej2-vue-inputs";

import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(MaskedTextBoxPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
let operators: string[] = [
  "Equals",
  "NotEquals",
  "GreaterThan",
  "GreaterThanOrEqualTo",
  "LessThan",
  "LessThanOrEqualTo",
  "Between",
  "NotBetween"
];
let measures: { [key: string]: Object }[] = [
  { value: "In_Stock", text: "In Stock" },
  { value: "Sold", text: "Units Sold" },
  { value: "Amount", text: "Sold Amount" }
];
let options: { [key: string]: Object }[] = [
  { value: "allcells", text: "All cells" },
  { value: "rowheader", text: "Row headers" },
  { value: "columnheader", text: "Column headers" },
  { value: "valuecells", text: "Value cells" },
  { value: "summarycells", text: "Summary cells" },
  { value: "conditional", text: "Condition based option" },
  { value: "headertext", text: "Header based option" }
];
let measureFields: object = { text: "text", value: "value" };

function appendElement(html: string) {
  var span = document.createElement("span");
  span.innerHTML = html;
  var log = <any>document.getElementById("EventLog");
  log.insertBefore(span, log.firstChild);
}

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        formatSettings: [{ name: "Amount", format: "C0" }],
        drilledMembers: [{ name: "Country", items: ["France", "Germany"] }],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        columns: [{ name: "Year" }],
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        dataSource: Pivot_Data,
        expandAll: true
      },
      width: "100%",
      height: 600,
      gridSettings: { columnWidth: 140 },
      showTooltip: false,
      hyperlinkSettings: {
        showValueCellHyperlink: true,
        cssClass: "e-custom-class"
      },
      input1Value: "0",
      input2Value: "0",
      value: "",
      options: options,
      measures: measures,
      measureFields: measureFields,
      operators: operators,
      showClearButton: false,
      enableSelectionOrder: false,
      Input1PlaceHolder: '"Example: 400"',
      Input2PlaceHolder: "Example: 4000",
      TextPlaceHolder: 'Example: "FY 2015.In Stock"',
      eventWidth: "300px"
    };
  },
  methods: {
    onCellClick: function(args: any) {
      var cell = "";
      if (
        args.currentCell.className.indexOf("e-stot") > -1 ||
        args.currentCell.className.indexOf("e-gtot") > -1 ||
        args.currentCell.className.indexOf("e-summary") > -1
      ) {
        cell += "Summary ";
      }
      if (
        args.currentCell.querySelector(".e-headercelldiv") &&
        !args.data.indexObject
      ) {
        cell += "Value Header ";
      } else if (args.currentCell.className.indexOf("e-rowsheader") > -1) {
        cell += "Row Header ";
      } else if (args.currentCell.className.indexOf("e-columnsheader") > -1) {
        cell += "Column Header ";
      } else if (args.currentCell.className.indexOf("e-valuescontent") > -1) {
        cell += "Value ";
      }
      if (
        args.currentCell.querySelector("a") &&
        (args.currentCell.querySelector("a").innerText === "France" ||
          args.currentCell.querySelector("a").innerText === "Germany")
      ) {
        var country = args.currentCell.querySelector("a").innerText;
        args.currentCell
          .querySelector("a")
          .setAttribute(
            "data-url",
            country === "France"
              ? "https://en.wikipedia.org/wiki/France"
              : "https://en.wikipedia.org/wiki/Germany"
          );
        args.cancel = false;
      } else {
        appendElement("<b>" + cell + "</b>" + " cell click event called<hr>");
      }
    },
    onClear: function() {
      (document.getElementById("EventLog") as HTMLElement).innerHTML = "";
    },
    onClick: function() {
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      var optionsdll = (<any>this.$refs.options).ej2Instances;
      var measuresddl = (<any>this.$refs.measures).ej2Instances;
      var operatorddl = (<any>this.$refs.conditions).ej2Instances;
      var valueInput1 = (<any>this.$refs.value1).ej2Instances;
      var valueInput2 = (<any>this.$refs.value2).ej2Instances;
      var textInput = (<any>this.$refs.text).ej2Instances;
      if (optionsdll.value === "conditional") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: false,
          headerText: undefined,
          conditionalSettings: [
            {
              measure: measuresddl.value as string,
              conditions: operatorddl.value as Condition,
              value1: valueInput1.value,
              value2: valueInput2.value
            }
          ]
        };
      } else if (optionsdll.value === "headertext") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: false,
          headerText: textInput.value,
          conditionalSettings: []
        };
      }
    },
    onOptionChange: function(args: ChangeEventArgs) {
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      var operatorddl = (<any>this.$refs.conditions).ej2Instances;
      (document.querySelector(".text1cls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".text2cls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".measurecls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".conditioncls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".input1cls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".input2cls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".textinputcls") as HTMLElement).style.display =
        "none";
      (document.querySelector(".updatecls") as HTMLElement).style.display =
        "none";
      if (args.value == "allcells") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: true,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: false,
          headerText: undefined,
          conditionalSettings: []
        };
      } else if (args.value == "rowheader") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: true,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: false,
          headerText: undefined,
          conditionalSettings: []
        };
      } else if (args.value == "columnheader") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: true,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: false,
          headerText: undefined,
          conditionalSettings: []
        };
      } else if (args.value == "valuecells") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: true,
          showSummaryCellHyperlink: false,
          headerText: undefined,
          conditionalSettings: []
        };
      } else if (args.value == "summarycells") {
        pivotObj.hyperlinkSettings = {
          showHyperlink: false,
          showRowHeaderHyperlink: false,
          showColumnHeaderHyperlink: false,
          showValueCellHyperlink: false,
          showSummaryCellHyperlink: true,
          headerText: undefined,
          conditionalSettings: []
        };
      } else if (args.value == "conditional") {
        (document.querySelector(".text1cls") as HTMLElement).style.display = "";
        (document.querySelector(".measurecls") as HTMLElement).style.display =
          "";
        (document.querySelector(".conditioncls") as HTMLElement).style.display =
          "";
        (document.querySelector(".input1cls") as HTMLElement).style.display =
          "";
        if (
          operatorddl.value === "Between" ||
          operatorddl.value === "NotBetween"
        ) {
          (document.querySelector(".input2cls") as HTMLElement).style.display =
            "";
        }
        (document.querySelector(".updatecls") as HTMLElement).style.display =
          "";
      } else if (args.value == "headertext") {
        (document.querySelector(".text2cls") as HTMLElement).style.display = "";
        (document.querySelector(".textinputcls") as HTMLElement).style.display =
          "";
        (document.querySelector(".updatecls") as HTMLElement).style.display =
          "";
      }
    },
    onOperatorChange: function(args: ChangeEventArgs) {
      if (args.value === "Between" || args.value === "NotBetween") {
        (document.querySelector(".input2cls") as HTMLElement).style.display =
          "";
      } else {
        (document.querySelector(".input2cls") as HTMLElement).style.display =
          "none";
      }
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
  width: 25%;
}

.pivottable-property-section .text1cls,
.pivottable-property-section .text2cls {
  font-weight: bold;
  margin-top: 20px;
}

.pivottable-property-section {
  overflow: auto;
}

#EventLog b {
  color: #388e3c;
}

.pivottable-property-section hr {
  margin: 1px 10px 10px 0px;
  border-top: 1px solid #eee;
}

#EventLog hr {
  margin-bottom: 1px;
}

.e-custom-class {
  text-decoration: underline;
}

.e-custom-class:hover {
  color: red;
  text-decoration: none;
}
</style>