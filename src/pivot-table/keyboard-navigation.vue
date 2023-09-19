<template>
  <div>
    <div class="control-section" id="pivot-grid-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :showGroupingBar="showGroupingBar"
          :allowDrillThrough="allowDrillThrough"
          :width="width"
          :height="height"
          :allowExcelExport="allowExcelExport"
          :allowConditionalFormatting="allowConditionalFormatting"
          :allowNumberFormatting="allowNumberFormatting"
          :allowPdfExport="allowPdfExport"
          :showToolbar="showToolbar"
          :allowCalculatedField="allowCalculatedField"
          :showFieldList="showFieldList"
          :toolbar="toolbar"
          :editSettings="editSettings"
          :saveReport="saveReport"
          :loadReport="loadReport"
          :fetchReport="fetchReport"
          :renameReport="renameReport"
          :removeReport="removeReport"
          :newReport="newReport"
          :toolbarRender="beforeToolbarRender"
          :chartSettings="chartSettings"
        ></ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates how to use keyboard shortcuts to interact with
        Pivot Table features such as the pivot table, grouping bar, field list,
        toolbar, calculated field, drill through, and filter dialog.
      </p>
    </div>

    <div id="description">
      <i
        >Below key combinations can be used in pivot table to initiate various
        actions</i
      >
      <ul>
        <li>
          <b>FOCUS</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Alt</kbd> + <kbd>J</kbd></span>
              <span> - Focuses the Pivot Table component.</span>
            </li>
          </ul>
        </li>
        <li>
          <b>PIVOT TABLE</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves the cell focus right side. If no cells are focused, it
                moves to the next active element in the browser page.
              </span>
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves the cell focus left side. If no cells are focused, it
                moves to the previous active element in the browser page.
              </span>
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span> - Moves the cell focus downwards. </span>
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span> - Moves the cell focus upwards. </span>
            </li>
            <li>
              <span class="key-class"><kbd>Left arrow</kbd></span>
              <span> - Moves the cell focus left side. </span>
            </li>
            <li>
              <span class="key-class"><kbd>Right arrow</kbd></span>
              <span> - Moves the cell focus right side.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span> - Goes to the first cell in the current row.</span>
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span> - Goes to the last cell in the current row.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Ctrl</kbd> + <kbd>Home</kbd></span>
              <span> - Goes to the first cell in the table.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Ctrl</kbd> + <kbd>End</kbd></span>
              <span> - Goes to the last cell in the table.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - If the current cell is an expand/collapse cell, it performs
                expand/collapse operation (drill operation). If the current
                row/column header is in value sort state, it performs value
                sorting.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Enter</kbd></span>
              <span>
                - If value sorting is enabled in the pivot table and the current
                cell is a header with respect to its value axis, it performs
                value sorting to either ascending or descending order.</span
              >
            </li>
          </ul>
        </li>
        <li>
          <b>GROUPING BAR</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active element (field’s button) in the
                grouping bar. If no active elements present, it moves to the
                next active element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active element (field’s button) in the
                grouping bar. If no active elements present, it moves to the
                previous active element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>F</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has a filter icon, the filter dialog will be opened to perform
                filtering.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>S</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has a sort icon, the sorting will be performed to the selected
                field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>E</kbd></span>
              <span>
                - If the current active element is a calculated field’s button
                and if it has an edit icon, the calculated field dialog will be
                opened to perform editing the selected calculated field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element. If the current active element is a field’s button and
                it has a dropdown icon, the aggregation menu will open to
                perform calculations using aggregation options to the selected
                value field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Delete</kbd></span>
              <span>
                - If the current active element is a field’s button, the
                selected field will be removed from the current report.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span>
                - If the current active element is a dropdown list, the next
                item will be selected.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span>
                - If the current active element is a dropdown list, the previous
                item will be selected.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span>
                - If the current active element is a dropdown list, the first
                item will be selected.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span>
                - If the current active element is a dropdown list, the last
                item will be selected.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Alt</kbd> + <kbd>Down</kbd></span>
              <span>
                - If the current active element is a dropdown list, the popup
                will be opened.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Alt</kbd> + <kbd>Down</kbd></span>
              <span>
                - If the current active element is a dropdown list, the popup
                will be closed.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Esc or Escape</kbd></span>
              <span> - Closes the dropdown list.</span>
            </li>
          </ul>
        </li>
        <li>
          <b>FIELD LIST</b>
          <ul>
            <li>
              <span class="key-class"
                ><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd></span
              >
              <span>
                - If the popup field list is enabled in either the pivot table
                or the pivot chart, the field list dialog will be opened.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active element in the field list. If no
                active elements present, it moves to the next active element in
                the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active element in the field list. If no
                active elements present, it moves to the previous active element
                in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>F</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has a filter icon, the filter dialog will be opened to perform
                filtering.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>S</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has a sort icon, the sorting will be performed to the selected
                field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>E</kbd></span>
              <span>
                - If the current active element is a calculated field’s button
                and if it has an edit icon, the calculated field dialog will be
                opened to perform editing the selected calculated field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element. If the current active element is a field’s button and
                if it has a dropdown icon, the aggregation menu will be opened
                to perform calculations using aggregation options to the
                selected value field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Delete</kbd></span>
              <span>
                - If the current active element is a field’s button, the
                selected field will be removed from the current report.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                next node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                prevous node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Left arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it collapses the
                current node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Right arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it expands the
                current node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                first node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                last node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Space</kbd></span>
              <span>
                - If the current active element is a tree node or a checkbox
                element, it will be either checked or unchecked.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Esc or Escape</kbd></span>
              <span> - Closes the popup field list dialog.</span>
            </li>
          </ul>
        </li>
        <li>
          <b>TOOLBAR</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active option in the toolbar. If no active
                elements present, it moves to the next active element in the
                browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active option in the toolbar. If no
                active elements present, it moves to the previous active element
                in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element.</span
              >
            </li>
          </ul>
        </li>
        <li>
          <b>CALCULATED FIELD</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>E</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has an edit icon in either the field list or grouping bar UI,
                the calculated field dialog will be opened to perform editing
                the selected calculated field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active element in the calculated field
                dialog. If no active elements present, it moves to the next
                active element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active element in the calculated field
                dialog. If no active elements present, it moves to the previous
                active element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element. If the current active element is a tree node, it copies
                the selected field name/formula to the formula text area to
                perform calculations.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                next node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                prevous node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Left arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it collapses the
                current node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Right arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it expands the
                current node. If the current active element is a tree node and
                has a menu icon, the aggregation menu will be opened to select
                appropriate aggregation type to the selected field.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                first node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                last node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Esc or Escape</kbd></span>
              <span> - the filter dialog.</span>
            </li>
          </ul>
        </li>
        <li>
          <b>DRILL THROUGH</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active element in the drill-through dialog.
                If the current active element is a Grid cell, it moves the cell
                focus to right side. If no active elements present, then it
                moves to the next active element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active element in the drill-through
                dialog. If the current active element is a Grid cell, it moves
                the cell focus to left side, If no active elements present, then
                it moves to the previous active element in the browser
                page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span> - Moves the row/cell focus downwards.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span> - Moves the row/cell focus upwards.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Left arrow</kbd></span>
              <span> - Moves the cell focus left side.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Right arrow</kbd></span>
              <span> - Moves the cell focus left side.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span> - Goes to the first cell in the current row.</span>
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span> - Goes to the last cell in the current row.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Ctrl</kbd> + <kbd>Home</kbd></span>
              <span> - Goes to the first cell in the table.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Ctrl</kbd> + <kbd>End</kbd></span>
              <span> - Goes to the first cell in the table.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Esc or Escape</kbd></span>
              <span>
                - If the cell is in selected state, the it deselects all
                rows/cells. If the row/cell is in edit state, it cancels the
                current entries in the row/cell. If the current active element
                is not a row/cell, it closes the drill-through dialog.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>F2</kbd></span>
              <span>
                - If the cell is in selected state, the it deselects all
                rows/cells. If the row/cell is in edit state, it cancels the
                current entries in the row/cell. If the current active element
                is not a row/cell, it closes the drill-through dialog.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Insert</kbd></span>
              <span> - Adds a new row/cell in the data grid.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Delete</kbd></span>
              <span> - Removes the selected row in the data grid.</span>
            </li>
          </ul>
        </li>
        <li>
          <b>FILTER DIALOG</b>
          <ul>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>F</kbd></span>
              <span>
                - If the current active element is a field’s button and if it
                has a filter icon in either the field list or grouping bar UI,
                the filter dialog will be opened to perform filtering.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Tab</kbd></span>
              <span>
                - Moves to the next active element in the filter dialog. If no
                active elements present, it moves to the next active element in
                the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
              <span>
                - Moves to the previous active element in the filter dialog. If
                no active elements present, it moves to the previous active
                element in the browser page.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Enter</kbd></span>
              <span>
                - Performs the selection operation of the current active
                element. If the current active element is a tab, the current tab
                element will be selected. If the current active element is a
                tree node, the current node will be either checked or unchecked.
                If the current active element is DropDownList, the focus item
                will be selected, and the popup list will close when it is open.
                Otherwise, toggles the popup list.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Down arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                next node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Up arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it moves to the
                prevous node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Left aArrow</kbd></span>
              <span>
                - If the current active element is a tree node, it collapses the
                current node. If the current active element is a tab, it moves
                focus to the previous tab element.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Right arrow</kbd></span>
              <span>
                - If the current active element is a tree node, it expands the
                current node. If the current active element is a tab, it moves
                focus to the next tab element.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Home</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                first node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>End</kbd></span>
              <span>
                - If the current active element is a tree node, it goes to the
                last node.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Space</kbd></span>
              <span>
                - If the current active element is a tree node or a checkbox
                element, it will be either checked or unchecked.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Esc or Escape</kbd></span>
              <span> - Closes the filter dialog.</span>
            </li>
            <li>
              <span class="key-class"><kbd>Alt</kbd> + <kbd>Down</kbd></span>
              <span>
                - If the current active element is a DropDownList or DatePicker
                or DateTimePicker, the popup will be opened.</span
              >
            </li>
            <li>
              <span class="key-class"><kbd>Alt</kbd> + <kbd>Up</kbd></span>
              <span>
                - If the current active element is a DropDownList or DatePicker
                or DateTimePicker, the popup will be closed.</span
              >
            </li>
          </ul>
        </li>
      </ul>
      <p>
        More information can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/pivotview/accessibility"
          >documentation section</a
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ChartTheme, ILoadedEventArgs } from "@syncfusion/ej2-vue-charts";
import {
  PivotViewComponent,
  GroupingBar,
  FieldList,
  IDataSet,
  CalculatedField,
  Toolbar,
  PDFExport,
  DrillThrough,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting,
} from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare let require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" },
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        dataSource: Pivot_Data,
        expandAll: false,
        allowLabelFilter: true,
        allowMemberFilter: true,
        allowValueFilter: true,
        values: [
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" },
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" },
        ],
      },
      width: "100%",
      height: 450,
      gridSettings: { columnWidth: 140 },
      allowExcelExport: true,
      allowConditionalFormatting: true,
      allowNumberFormatting: true,
      allowPdfExport: true,
      showGroupingBar: true,
      allowDrillThrough: true,
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal",
        allowEditOnDblClick: true,
      },
      chartSettings: {
        title: "Sales Analysis",
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)) as ChartTheme;
        },
      },
      showToolbar: true,
      allowCalculatedField: true,
      showFieldList: true,
      toolbar: [
        "New",
        "Save",
        "SaveAs",
        "Rename",
        "Remove",
        "Load",
        "Export",
        "SubTotal",
        "GrandTotal",
        "Formatting",
        "FieldList",
      ],
    };
  },
  methods: {
    saveReport: function (args: any) {
      let reports = [];
      let isSaved = false;
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reports = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.report && args.reportName && args.reportName !== "") {
        reports.map(function (item: any) {
          if (args.reportName === item.reportName) {
            item.report = args.report;
            isSaved = true;
          }
        });
        if (!isSaved) {
          reports.push(args);
        }
        localStorage.pivotviewReports = JSON.stringify(reports);
      }
    },
    fetchReport: function (args: any) {
      let reportCollection = [];
      let reeportList: any = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function (item: any) {
        reeportList.push(item.reportName);
      });
      args.reportName = reeportList;
    },
    loadReport: function (args: any) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function (item: any) {
        if (args.reportName === item.reportName) {
          args.report = item.report;
        }
      });
      if (args.report) {
        pivotObj.dataSourceSettings = JSON.parse(
          args.report
        ).dataSourceSettings;
      }
    },
    removeReport: function (args: any) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      for (let i = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.reportName) {
          reportCollection.splice(i, 1);
        }
      }
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    renameReport: function (args: any) {
      let reportsCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.isReportExists) {
        for (let i = 0; i < reportsCollection.length; i++) {
          if (reportsCollection[i].reportName === args.rename) {
            reportsCollection.splice(i, 1);
          }
        }
      }
      reportsCollection.map(function (item: any) {
        if (args.reportName === item.reportName) {
          item.reportName = args.rename;
        }
      });
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportsCollection);
      }
    },
    newReport: function () {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.setProperties(
        {
          dataSourceSettings: {
            columns: [],
            rows: [],
            values: [],
            filters: [],
          },
        },
        false
      );
    },
    beforeToolbarRender: function (args: any) {
      args.customToolbar.splice(6, 0, {
        type: "Separator",
      });
      args.customToolbar.splice(9, 0, {
        type: "Separator",
      });
    },
  },
  provide: {
    pivotview: [
      FieldList,
      CalculatedField,
      Toolbar,
      PDFExport,
      ExcelExport,
      ConditionalFormatting,
      NumberFormatting,
      GroupingBar,
      DrillThrough,
    ],
  },
}
</script>

<style scoped>
/deep/ #PivotView_PivotFieldList {
  width: auto !important;
}

/deep/ #pivotview {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  #pivot-grid-section {
    overflow: auto;
  }
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}
/deep/ .control-section {
  min-height: 255px !important;
}
/deep/ #pivotviewcontainerwrapper {
  height: auto !important;
}
/deep/ .e-pivotview {
  min-height: 200px;
}
/deep/ .key-class {
  display: inline-block;
  width: 130px;
}
/deep/ .e-bigger button.e-dlg-closeicon-btn.e-control.e-btn.e-lib.e-flat.e-icon-btn {
        padding: 0!important;
        left: -9px !important;
    }
</style>