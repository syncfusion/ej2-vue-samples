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
            :dataSourceSettings="dataSourceSettings"
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
      <p>This sample demonstrates the defer layout update feature of the pivot table. The defer layout update allows users to refresh the pivot table on-demand instead of during every UI interaction.</p>
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
      </p><br />
      <p>
          More information on the defer layout update can be found in this <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/pivotview/defer-update">
          documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  PivotViewComponent,
  PivotFieldListComponent,
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
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-pivotfieldlist': PivotFieldListComponent
  },
  data: function() {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
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
        let fieldListObj = ((this as any).$refs.pivotfieldlist).ej2Instances;
        let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
        if (fieldListObj && pivotObj) {
          fieldListObj.update(pivotObj);
        }
      }
    },
    load: function() {
      if (Browser.isDevice) {
        let fieldListObj = ((this as any).$refs.pivotfieldlist).ej2Instances;
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
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let fieldListObj = ((this as any).$refs.pivotfieldlist).ej2Instances;
      if (Browser.isDevice) {
        pivotObj.element.style.width = "100%";
        pivotObj.allowCalculatedField = true;
        pivotObj.showFieldList = true;
      }
      pivotObj.tooltip.destroy();
      pivotObj.refresh();
    },
    fieldEnginePopulated: function() {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let fieldListObj = ((this as any).$refs.pivotfieldlist).ej2Instances;
      if (fieldListObj.isRequiredUpdate) {
        fieldListObj.updateView(pivotObj);
      }
      pivotObj.notify("ui-update", pivotObj);
      if (!Browser.isDevice) {
        fieldListObj.notify("tree-view-update", fieldListObj);
      }
    }
  },
  provide: {
    pivotview: [CalculatedField, FieldList]
  }
}
</script>

<style scoped>
/deep/ #pivotview_flist {
  float: left;
  width: 58%;
}

/deep/ #pivotfieldlist1 {
  float: right;
  width: 42%;
}

/deep/ .e-pivotfieldlist .e-static {
  width: 100% !important;
}
</style>