<template>
<div>
    <div class="col-lg-9 control-section" style="overflow: auto">
        <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :width="width" :height="height" :gridSettings="gridSettings" :showFieldList="showFieldList">           
        </ejs-pivotview>
        </div>
    </div>
    
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%;height:100%;">
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='reorder' label="Allow Reordering" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='resize' label="Allow Resizing" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>
                          <ejs-checkbox id='autowrap' label="Allow Text Wrap" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 70%;padding-right: 10px">
                        <div id="linesddl">
                            <ejs-dropdownlist id='gridlines' :change='ddl_onChange' :dataSource='ddlData' :fields='fields' index=0 placeholder='Grid Lines' floatLabelType='Auto' value='Both'></ejs-dropdownlist>  
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
        <p>This sample demonstrates the visibility of gridlines and text wrap along with user interactions like reordering and resizing
            columns. You can change the visibility and user interaction settings through the options available in the properties
            panel.
        </p>
    </div>
    <div id="description">
        <p>The
            <code>gridLines</code> property is used to control the line visibility that separates the rows and columns. The grid control allows us
            to display the following grid lines:
        </p>
        <ul>
            <li>
                <code>Default</code> - Shows the Horizontal line.
                <br>
            </li>
            <li>
                <code>None</code> - Shows no line.
                <br>
            </li>
            <li>
                <code>Both</code> - Shows both Horizontal and Vertical lines.
                <br>
            </li>
            <li>
                <code>Horizontal</code> - Shows the Horizontal line.
                <br>
            </li>
            <li>
                <code>Vertical</code> - Shows the Vertical line.
                <br>
                <br>
            </li>
        </ul>
    
        <p>
            <strong>Auto wrap</strong> cell content can be enabled using the
            <code>allowTextWrap</code>property of the grid. Setting this property will wrap cell text on multiple lines. This feature is useful to view
            the cell content when it exceeds the cell width. Also this property will wrap the text in both content cell and
            header cells.
        </p>
        <p>
            <strong>Reordering</strong> can be enabled by setting the
            <code>allowReordering</code> property as true. Reordering can be done by dragging and dropping the column header from one index to another index
            within the Grid. The location in which the column is to be placed will be indicated by two arrow symbols.
        </p>
        <p>
            <strong>Resizing:</strong> A grid column can be resized by clicking and dragging at the right edge of the column’s header.
            To enable column resize behavior, set the
            <code>allowResizing</code> property as true.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, FieldList, IDataSet } from "@syncfusion/ej2-vue-pivotview";
// import { defaultData } from "./data-source";
import {
  CheckBoxPlugin,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  ChangeEventArgs as dropEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { GridLine } from "@syncfusion/ej2-vue-grids";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(CheckBoxPlugin);
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
        enableSorting: true,
        columns: [{ name: "Year" }, { name: "Quarter" }],
        valueSortSettings: { headerDelimiter: " - " },
        values: [
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        // dataSource: defaultData,
        expandAll: false,
        filters: []
      },
      width: "100%",
      height: 300,
      showFieldList: true,
      gridSettings: {
        allowReordering: true,
        allowResizing: true,
        columnWidth: 140
      },
      ddlData: [
        { id: "Default", type: "Default" },
        { id: "Both", type: "Both" },
        { id: "None", type: "None" },
        { id: "Horizontal", type: "Horizontal" },
        { id: "Vertical", type: "Vertical" }
      ],
      fields: { text: "type", value: "id" }
    };
  },
  methods: {
    ddl_onChange: function(args: dropEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotObj.gridSettings.gridLines = <GridLine>args.value;
    },
    checkbox_onChange: function(args: checkEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let target = (<any>args.event).target;
      if (target.id === "reorder") {
        pivotObj.gridSettings.allowReordering = args.checked;
      } else if (target.id === "resize") {
        pivotObj.gridSettings.allowResizing = args.checked;
      } else {
        pivotObj.gridSettings.allowTextWrap = args.checked;
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