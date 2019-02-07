<template>
  <div>
    <div>
      <div class="control-section">
        <div class="content-wrapper">
          <ejs-pivotview
            id="pivotview_flist"
            ref="pivotview"
            :allowDeferLayoutUpdate="allowDeferLayoutUpdate"
            :gridSettings="gridSettings"
            :enginePopulated="enginePopulated"
            :width="width"
            :height="height"
          ></ejs-pivotview>
          <ejs-pivotfieldlist
            id="pivotfieldlist1"
            ref="pivotfieldlist"
            :allowDeferLayoutUpdate="allowDeferLayoutUpdate"
            :dataSource="dataSource"
            :enginePopulated="fieldEnginePopulated"
            :load="load"
            :dataBound="dataBound"
            :allowCalculatedField="allowCalculatedField"
            :renderMode="renderMode"
          ></ejs-pivotfieldlist>
        </div>
      </div>
    </div>

    <div id="action-description">
      <p>This sample demonstrates the defer layout update feature of the pivot grid widget.</p>
    </div>
    <div id="description">
      <p>Deferring a layout update can be useful when you need to remove or add multiple fields in a report and you don't want to update the pivot table after each change. Now, you can update a pivot table after performing all changes at the report level in the field list resulting in better performance.</p>
      <p>
        In this sample, the
        <b>Defer Layout Update</b> option can be enabled or disabled via field list UI.
      </p>
      <p>
        In general, this feature can be enabled by setting
        <code>allowDeferLayoutUpdate</code> as true.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotFieldListPlugin,
  FieldList,
  CalculatedField,
  IDataSet
} from "@syncfusion/ej2-vue-pivotview";
import {
  extend,
  setStyleAttribute,
  prepend,
  Browser,
  enableRipple
} from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(PivotFieldListPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
export default Vue.extend({
  data: function() {
    return {
      dataSource: {
        data: Pivot_Data,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        drilledMembers: [
          { name: "Country", items: ["France", "Germany", "United States"] }
        ],
        filterSettings: [
          {
            name: "Products",
            items: ["Gloves", "Helmets", "Shorts", "Vests"],
            type: "Include"
          }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        formatSettings: [{ name: "Amount", format: "C0" }],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        enableSorting: true
      },
      allowDeferLayoutUpdate: true,
      gridSettings: { columnWidth: 140 },
      allowCalculatedField: true,
      renderMode: "Fixed",
      width: "99%",
      height: 620
    };
  },
  methods: {
    enginePopulated: function() {
      if (!Browser.isDevice) {
        let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
        let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
        if (fieldListObj && pivotGridObj) {
          fieldListObj.update(pivotGridObj);
        }
      }
    },
    load: function() {
      if (Browser.isDevice) {
        let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
        fieldListObj.renderMode = "Popup";
        fieldListObj.target = ".control-section";
        setStyleAttribute(<any>document.getElementById("pivotfieldlist1"), {
          width: 0,
          height: 0,
          float: "left",
          display: "none"
        });
      }
    },
    dataBound: function() {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
      if (Browser.isDevice) {
        pivotGridObj.element.style.width = "100%";
        pivotGridObj.allowCalculatedField = true;
        pivotGridObj.showFieldList = true;
      }
      pivotGridObj.tooltip.destroy();
      pivotGridObj.refresh();
    },
    fieldEnginePopulated: function() {
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
      if (fieldListObj.isRequiredUpdate) {
        fieldListObj.updateView(pivotGridObj);
      }
      pivotGridObj.notify("ui-update", pivotGridObj);
      if (!Browser.isDevice) {
        fieldListObj.notify("tree-view-update", fieldListObj);
      }
    }
  },
  provide: {
    pivotview: [CalculatedField, FieldList]
  }
});
</script>

<style>
#pivotview_flist {
  float: left;
  width: 58%;
}

#pivotfieldlist1 {
  float: right;
  width: 42%;
}

.e-pivotfieldlist .e-static {
  width: 100% !important;
}
</style>