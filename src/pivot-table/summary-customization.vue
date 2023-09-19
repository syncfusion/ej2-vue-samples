<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings" :width="width" :height="height" :load="load" :dataBound="dataBound">
        </ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-3 property-section pivot-table-property-section">
      <div id="property" title="Properties" style="width: 100%;height:100%;">
        <div>
          <table class="property-panel-table">
            <tbody>
              <tr style="height: 50px">
                <td style="width: auto">
                  <div class="total-options" style="padding-left: 0; margin-right: 10px;">Totals:</div>
                </td>
                <td style="width: auto">
                  <div style="padding-left: 0;">
                    <ejs-dropdownlist id='options' ref='options' type="text" tabindex="1" :change="onChange0"
                      enabled="true" :fields="optionData" :dataSource='options' index=0 value='grandTotals'>
                    </ejs-dropdownlist>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="grandsum">
          <table class="property-panel-table">
            <tbody>
              <tr>
                <td>
                  <div style="font-weight: 600; font-size: 13px; white-space: nowrap">Grand totals position</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Top" name="position" value="Top" :change="onChange1"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Bottom" name="position" value="Bottom" :change="onChange1" :checked="true">
                    </ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div style="font-weight: 600; font-size: 13px; white-space: nowrap; padding-left: 0px;">Hide grand
                      totals</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Row" name="total" value="Row" :change="onChange"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Column" name="total" value="Column" :change="onChange"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Both" name="total" value="Both" :change="onChange"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="None" name="total" value="None" :change="onChange" :checked="true">
                    </ejs-radiobutton>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="subsum" style="display: none;">
          <table class="property-panel-table">
            <tbody>
              <tr>
                <td>
                  <div style="font-weight: 600; font-size: 13px; white-space: nowrap">Sub-totals position</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Top" name="position1" value="Top" :change="onChange3"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Bottom" name="position1" value="Bottom" :change="onChange3">
                    </ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Auto" name="position1" value="Auto" :change="onChange3" :checked="true">
                    </ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div style="font-weight: 600; font-size: 13px; white-space: nowrap; padding-left: 0px;">Hide
                      sub-totals
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Row" name="total1" value="Row" :change="onChange2"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Column" name="total1" value="Column" :change="onChange2"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="Both" name="total1" value="Both" :change="onChange2"></ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="padding-left: 0">
                    <ejs-radiobutton label="None" name="total1" value="None" :change="onChange2" :checked="true">
                    </ejs-radiobutton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div style="font-weight: 600; font-size: 13px; white-space: nowrap; padding-left: 0px;">Hide
                      specific
                      sub-totals</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div>
                    <ejs-multiselect id="values" :dataSource="field" :showDropDownIcon="showDropDownIcon"
                      :showClearButton="showClearButton" :enableSelectionOrder="enableSelectionOrder" :fields="fields"
                      :mode="mode" :select="onSelect" :removed="onRemove" :open="onOpen" :placeholder="placeholder">
                    </ejs-multiselect>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="action-description">
      <p>This sample demonstrates showing and hiding grand totals and sub-totals, as well as change their position in
        rows, columns, or both at runtime. Also, end users can specify and hide sub-totals of specific fields.</p>
    </div>
    <div id="description">
      <p>
        In this sample, you can control the position and visibility of the grand totals and sub-totals by selecting
        options from the Totals drop-down list. The following options will be displayed based on the drop-down
        selection:
      </p>
      <table>
        <tbody>
          <tr>
            <td style="vertical-align: top;padding: 4px 0;width:180px"><code>Grand totals position</code></td>
            <td style="padding: 4px 0;">: Allows to display the grand totals either at top or bottom of the row and
              column axes by selecting the appropriate radio button options.
              To display the grand totals at top, set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#grandtotalsposition">
                grandTotalsPosition</a> as <b>Top</b>. And, to display the grand
              totals at bottom, set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#grandtotalsposition">
                grandTotalsPosition</a> as <b>Bottom</b>.</td>
          </tr>
          <tr>
            <td style="vertical-align: top;padding: 4px 0;"><code>Hide grand totals</code></td>
            <td style="padding: 4px 0;">: Allows to hide grand totals in row, column, or both by selecting the
              appropriate radio button options. To hide grand totals in both row and column, set the property<a
                target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showgrandtotals">
                showGrandTotals</a> as <b>false</b>. To hide the row and column
              grand totals separately,
              set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showrowgrandtotals">
                showRowGrandTotals</a> and <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showcolumngrandtotals">
                showColumnGrandTotals</a> as <b>false</b>.</td>
          </tr>
          <tr>
            <td style="vertical-align: top;padding: 4px 0;"><code>Sub-totals position</code></td>
            <td style="padding: 4px 0;">: Allows to display the sub-totals at top, bottom, or default position of
              the row and column axes by selecting the appropriate radio button options.
              To display the sub-totals at top, set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#subtotalsposition">
                subTotalsPosition</a> as <b>Top</b>. And, to display the
              sub-totals at bottom, set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#subtotalsposition">
                subTotalsPosition</a> as <b>Bottom</b>.</td>
          </tr>
          <tr>
            <td style="vertical-align: top;padding: 4px 0;"><code>Hide sub-totals</code></td>
            <td style="padding: 4px 0;">: Allows to hide sub-totals in row, column, or both by selecting the
              appropriate radio button options. To hide sub-totals in both row and column, set the property<a
                target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showsubtotals">
                showSubTotals</a> as <b>false</b>. To hide the row and column
              sub-totals separately,
              set the property <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showrowsubtotals">
                showRowSubTotals</a> and <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettingsModel/#showcolumnsubtotals">
                showColumnSubTotals</a> as <b>false</b>.</td>
          </tr>
          <tr>
            <td style="vertical-align: top;padding: 4px 0;"><code>Hide sub-totals for specific field(s)</code></td>
            <td style="padding: 4px 0;">: Allows to hide sub-totals for specific fields in row and column by
              selecting appropriate fields from the multi-select drop-down.
              To hide sub-totals for a specific field, set the <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/fieldOptionsModel/#showsubtotals">
                showSubTotals</a> property as <b>false</b> inside the field definition.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {
  PivotViewComponent,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListComponent,
  MultiSelectComponent,
  SelectEventArgs,
  RemoveEventArgs,
  PopupEventArgs,
  CheckBoxSelection
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);
import { RadioButtonComponent, ChangeArgs } from "@syncfusion/ej2-vue-buttons";
import { Pivot_Data } from "./data-source";

declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-radiobutton': RadioButtonComponent,
    'ejs-multiselect': MultiSelectComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      field: [
        { Name: "Country" },
        { Name: "Year" }
      ],
      mode: "CheckBox",
      showDropDownIcon: true,
      showClearButton: false,
      enableSelectionOrder: false,
      fields: { text: "Name" },
      placeholder: "Select fields to hide its sub-totals",
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        drilledMembers: [{ name: "Country", items: ["France", "Germany"] }],
        filterSettings: [
          {
            name: "Products",
            items: ["Gloves", "Helmets", "Shorts", "Vests"],
            type: "Include"
          }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
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
        showGrandTotals: true,
        grandTotalsPosition: 'Bottom'
      },
      width: "100%",
      height: 500,
      gridSettings: { columnWidth: 140 },
      optionData: { value: 'value', text: 'text' },
      options: [
        { value: 'grandTotals', text: 'Grand Totals' },
        { value: 'subTotals', text: 'Sub-totals' }
      ]
    };
  },
  methods: {
    load: function (args: any) {
      let selectedTheme: string = location.hash.split("/")[1] || "material";
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open("GET", "./styles/" + selectedTheme + ".css", false);
      xhr.onload = function () {
        const doc: HTMLFormElement = document.getElementById(
          "themelink"
        ) as HTMLFormElement;
        if (doc) {
          doc.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    },
    dataBound: function (args: any) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (pivotObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    onSelect: function (args: SelectEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
        if (
          (pivotObj.dataSourceSettings.columns[i].name ||
            pivotObj.dataSourceSettings.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.columns[i].showSubTotals = false;
        }
      }
      for (let i: number = 0; i < pivotObj.dataSourceSettings.rows.length; i++) {
        if (
          (pivotObj.dataSourceSettings.rows[i].name ||
            pivotObj.dataSourceSettings.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.rows[i].showSubTotals = false;
        }
      }
      pivotObj.refreshData();
    },
    onRemove: function (args: RemoveEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      for (let i: number = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
        if (
          (pivotObj.dataSourceSettings.columns[i].name ||
            pivotObj.dataSourceSettings.columns[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.columns[i].showSubTotals = true;
        }
      }
      for (let i: number = 0; i < pivotObj.dataSourceSettings.rows.length; i++) {
        if (
          (pivotObj.dataSourceSettings.rows[i].name ||
            pivotObj.dataSourceSettings.rows[i].caption) ===
          (args.itemData as any).Name
        ) {
          pivotObj.dataSourceSettings.rows[i].showSubTotals = true;
        }
      }
      pivotObj.refreshData();
    },
    onChange: function (args: ChangeArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.value === "None") {
        pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: false } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showColumnGrandTotals: true } }, true);
        pivotObj.dataSourceSettings.showGrandTotals = true;
      }
      else {
        pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
        pivotObj.setProperties({
          dataSourceSettings: { showColumnGrandTotals: true }
        }, true);
        if (args.value === "Column") {
          pivotObj.dataSourceSettings.showColumnGrandTotals = false;
        } else if (args.value === "Row") {
          pivotObj.dataSourceSettings.showRowGrandTotals = false;
        } else if (args.value === "Both") {
          pivotObj.dataSourceSettings.showGrandTotals = false;
        }
      }
      pivotObj.refreshData();
    },
    onChange0: function (args: ChangeArgs) {
      (document.getElementById('grandsum') as HTMLElement).style.display = 'none';
      (document.getElementById('subsum') as HTMLElement).style.display = 'none';
      if (args.value == 'grandTotals') {
        (document.getElementById('grandsum') as HTMLElement).style.display = '';
      } else if (args.value == 'subTotals') {
        (document.getElementById('subsum') as HTMLElement).style.display = '';
      }
    },
    onChange1: function (args: ChangeArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.value === 'Top') {
        pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Bottom' } }, true);
        pivotObj.dataSourceSettings.grandTotalsPosition = 'Top';
      }
      else if (args.value === 'Bottom') {
        pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Top' } }, true);
        pivotObj.dataSourceSettings.grandTotalsPosition = 'Bottom';
      }
      pivotObj.refreshData();
    },
    onChange2: function (args: ChangeArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.value === 'None') {
        pivotObj.setProperties({ dataSourceSettings: { showSubTotals: false } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowSubTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showColumnSubTotals: true } }, true);
        pivotObj.dataSourceSettings.showSubTotals = true;
      }
      else {
        pivotObj.setProperties({ dataSourceSettings: { showSubTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showRowSubTotals: true } }, true);
        pivotObj.setProperties({ dataSourceSettings: { showColumnSubTotals: true } }, true);
        if (args.value === 'Column') {
          pivotObj.dataSourceSettings.showColumnSubTotals = false;
        } else if (args.value === 'Row') {
          pivotObj.dataSourceSettings.showRowSubTotals = false;
        } else if (args.value === 'Both') {
          pivotObj.dataSourceSettings.showSubTotals = false;
        }
      }
      pivotObj.refreshData();
    },
    onChange3: function (args: ChangeArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.value === 'Top') {
        pivotObj.setProperties({ dataSourceSettings: { subTotalsPosition: 'Top' } }, true);
      }
      else if (args.value === 'Bottom') {
        pivotObj.setProperties({ dataSourceSettings: { subTotalsPosition: 'Bottom' } }, true);
      }
      else if (args.value === 'Auto') {
        pivotObj.setProperties({ dataSourceSettings: { subTotalsPosition: 'Auto' } }, true);
      }
      pivotObj.refreshData();
    },
    onOpen: function (args: PopupEventArgs) {
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display = "none";
    }
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
}
</script>

<style scoped>
/deep/ #PivotView_PivotFieldList {
  width: auto !important;
}

/deep/ #pivotview {
  width: 100%;
}

/deep/ .pivot-table-property-section {
  overflow: auto;
}

/deep/ .pivot-table-property-section .e-multiselect {
  padding: 0;
}

/deep/ .pivot-table-property-section .property-panel-header {
  padding-bottom: 10px;
}

/deep/ .pivot-table-property-section .property-panel-table td {
  width: auto;
  padding: 0 !important;
}

/deep/ .pivot-table-property-section .property-panel-table div {
  padding-left: unset;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

/deep/ .property-panel-table div {
  padding: 0 0 10px 10px;
}

/deep/ .e-multiselect.e-input-group {
  padding: 0;
}
</style>