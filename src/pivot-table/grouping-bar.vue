<template>
<div>
    <div class="col-lg-9 control-section" id="pivot-grid-section">
        <div class="content-wrapper">
            <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :load="load" :dataBound="dataBound" :showGroupingBar="showGroupingBar" :showFieldList="showFieldList">        
            </ejs-pivotview>
            </div>
    </div>
    
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%;height:100%;">
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='filter' label="Show Filter Icon" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='sort' label="Show Sort Icon" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='summary' label="Show Value Type Icon" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>
                            <ejs-checkbox id='remove' label="Show Remove Icon" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
        <p>This sample demonstrates the grouping feature of the pivot table. The pivot fields are automatically populated from the bound data source, and they can be dragged and dropped to alter the report at runtime. The pivot fields can be sorted, filtered, and removed dynamically as well.</p>
    </div>
    <div id="description">
        <p>The pivot table grouping bar option automatically populates fields from the bound data source and allows end users
            to drag fields between different axes such as columns, rows, values, and filters, and create pivot table at runtime.
            To enable grouping bar, set the
            <code>showGroupingBar</code> property as true.</p>
        <p>
            Filter and sort icons allow displaying selective records and ordering them in ascending or descending order. The value type icon
            allows to display values based on selected aggregate type. The remove icon
            allows the user to remove the field from the report.
        </p>
        <p>
            <strong>Injecting Module:</strong>
        </p>
        <p>
            The pivot table features are segregated into individual modules. To take advantage of grouping bar support, we need
            to inject the
            <code>GroupingBar</code> module into the
            <code>provide</code> section.
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  GroupingBar,
  FieldList,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import {
  ChangeEventArgs as checkEventArgs,
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(CheckBoxPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
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
        formatSettings: [{ name: "Amount", format: "C0" }],
        dataSource: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [{ name: "Product_Categories", caption: "Product Categories" }]
      },
      width: "100%",
      height: 450,
      gridSettings: { columnWidth: 140 },
      showGroupingBar: true,
      showFieldList: true
    };
  },
  methods: {
    load: function(args: any) {
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
    },
    dataBound: function(args: any) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (pivotObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    checkbox_onChange: function(args: checkEventArgs) {
      let target = (<any>args.event).target;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (target.id === "filter") {
        pivotObj.groupingBarSettings.showFilterIcon = args.checked;
      } else if (target.id === "sort") {
        pivotObj.groupingBarSettings.showSortIcon = args.checked;
      } else if (target.id === "remove") {
        pivotObj.groupingBarSettings.showRemoveIcon = args.checked;
      } else {
        pivotObj.groupingBarSettings.showValueTypeIcon = args.checked;
      }
    }
  },
  provide: {
    pivotview: [GroupingBar, FieldList]
  }
});
</script>

<style>
#PivotView_PivotFieldList {
  width: auto !important;
}

#pivotview {
  width: 100%;
}

@media only screen and (max-width: 400px) {
    #pivot-grid-section {
        overflow: auto;
    }
}
</style>