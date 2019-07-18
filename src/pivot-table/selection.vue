<template>
  <div>
    <div class="col-lg-8 control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview_chart"
          ref="pivotview_chart"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :height="height"
          :cellSelected="cellSelected"
        ></ejs-pivotview>
        <br>
        <br>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>Selection Modes:</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist
                  id="modeddl"
                  :change="modeddlOnChange"
                  :dataSource="mode"
                  :width="width"
                  index="0"
                  floatLabelType="Auto"
                  :fields="fields"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Selection Types:</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist
                  id="typeddl"
                  :change="typeddlOnChange"
                  :dataSource="type"
                  index="0"
                  :width="width"
                  floatLabelType="Auto"
                  :fields="fields"
                ></ejs-dropdownlist>
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
              <div class="eventarea" style="height: 230px;overflow: auto">
                <span class="EventLog" id="EventLog" ref="eventlog" style="word-break: normal;"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
    <p>This sample demonstrates different types of grid cell selection options and an event for getting complete information about the selection. The selection of headers, value cells, and summary cells can be done through mouse and keyboard actions.
    </p>
    </div>
<div id="description">
    <p>
        This feature provides interactive support to highlight rows, columns, values, and summary cells that you select.
        Selection can be done through either mouse or keyboard interaction.
        To enable selection, set <code>allowSelection</code>property as true.
    </p>
    <p>The pivot table two types of selection which can be set using
        <code>selectionSettings.type</code> property. They are:</p>
    <ul>
        <li><code>Single</code> - Enabled by default. Allows the user to select single row or column or cell at a time.
        </li>
        <li><code>Multiple</code> - Allows the user to select more than one row or column or cell at the same time.</li>
    </ul>
    <p>Also, there are three modes of selection which can be set using
        <code>selectionSettings.mode</code> property. They are:
    </p>
    <ul>
        <li><code>Row</code> - Enabled by default. Enables the complete row selection in a pivot table.</li>
        <li><code>Column</code> - Enables the complete column selection in a pivot table.</li>
        <li><code>Cell</code> - Enables the cell selection in pivot table.</li>
        <li><code>Both</code> - Enables both the row and column selection in pivot table.</li>
    </ul>
    <p>To perform the multiselection, hold <strong>CTRL</strong> key and click the desired cells.
        To select range of cells, hold <strong>SHIFT</strong> key and click the cells.</p>
    <p>While using the pivot table in a touch device environment, tap over a row, column, or other cells.
        This results in a pop-up with a multiselect icon. Now tap the icon to proceed with multiselection.
    </p>
    <p>In this demo, pick the selection type and selection mode from the properties panel in order to perform the
        desired selection process.
        The selected cell information can be seen in the Event Trace part with the help of the <code>cellSelected</code>
        event.
    </p>
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  IDataSet,
  PivotCellSelectedEventArgs,
  SelectionMode
} from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { SelectionType } from "@syncfusion/ej2-grids";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(DropDownListPlugin);
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
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        valueSortSettings: { headerDelimiter: " - " },
        dataSource: Pivot_Data,
        expandAll: true,
        values: [
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        formatSettings: [{ name: "Amount", format: "C0" }],
        filters: []
      },
      width: 150,
      height: 400,
      gridSettings: {
        columnWidth: 120,
        allowSelection: true,
        selectionSettings: {
          mode: "Cell",
          type: "Multiple",
          cellSelectionMode: "Box"
        }
      },
      fields: { text: "text", value: "value" },
      mode: [
        { text: "Cell", value: "Cell" },
        { text: "Row Only", value: "Row" },
        { text: "Column Only", value: "Column" },
        { text: "Both", value: "Both" }
      ],
      type: [
        { text: "Multiple", value: "Multiple" },
        { text: "Single", value: "Single" }
      ]
    };
  },
  methods: {
    modeddlOnChange: function(args: ChangeEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview_chart).ej2Instances;
      pivotObj.gridSettings.selectionSettings.mode = args.value as SelectionMode;
      pivotObj.renderModule.updateGridSettings();
    },
    typeddlOnChange: function(args: ChangeEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview_chart).ej2Instances;
      pivotObj.gridSettings.selectionSettings.type = args.value as SelectionType;
      pivotObj.renderModule.updateGridSettings();
    },
    cellSelected: function(args: PivotCellSelectedEventArgs) {
      (document.getElementById("EventLog") as HTMLElement).innerHTML = "";
      let pivotObj = (<any>this.$refs.pivotview_chart).ej2Instances;
      if ((args.selectedCellsInfo as any).length > 0) {
        for (let cell of args.selectedCellsInfo as any) {
          let summMeasure = pivotObj.engineModule.fieldList[cell.measure]
            ? pivotObj.engineModule.fieldList[cell.measure].aggregateType +
              " of " +
              pivotObj.engineModule.fieldList[cell.measure].caption
            : "";
          this.appendElement(
            (cell.columnHeaders == ""
              ? ""
              : "Column Headers: " + "<b>" + cell.columnHeaders + "</b></br>") +
              (cell.rowHeaders == ""
                ? ""
                : "Row Headers: " + "<b>" + cell.rowHeaders + "</b></br>") +
              (summMeasure == ""
                ? ""
                : "Measure: " + "<b>" + summMeasure + "</b></br>") +
              "Value: " +
              "<b>" +
              cell.currentCell.formattedText +
              "</b><hr></br>"
          );
        }
      }
    },
    appendElement: function(html: string) {
      let span: HTMLElement = document.createElement("span");
      span.innerHTML = html;
      let log: HTMLElement = document.getElementById("EventLog") as HTMLElement;
      log.appendChild(span);
    }
  }
});
</script>
<style>
.pivottable-property-section hr {
  margin: 1px 10px 0px 0px;
  border-top: 1px solid #eee;
}
</style>
