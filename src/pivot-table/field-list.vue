<template>
<div>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview_flist" ref="pivotview" :gridSettings="gridSettings" :enginePopulated="enginePopulated" :width="width" :height="height"></ejs-pivotview>        
        <ejs-pivotfieldlist id="pivotfieldlist1" ref="pivotfieldlist" :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated" :load="load" :dataBound="dataBound" :allowCalculatedField="allowCalculatedField" :renderMode="renderMode"></ejs-pivotfieldlist>
        </div>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the Excel-like field list feature of the pivot table. The pivot fields are automatically populated from the bound data source, and they can be dragged and dropped to create and alter the report at runtime.</p>
</div>
<div id="description">
    <p>The pivot table provides a built-in field list very similar to Microsoft Excel. The top section of the field list
        allows the user to add and remove fields. The bottom section of the field list allows the user to rearrange the fields
        between different axes, including column, row, value, and filter along with filter and sort options.
        <br>
        <br> To show the field list independently, create as separate component namely
        <code>PivotFieldList</code> and assign JSON data source to its
        <code>dataSourceSettings->dataSource</code> property. Simultaneously pivot table will be populated by passing its instance in the updateView method, inside the
        <code>enginePopulated</code> event of field list.
        <br />
        <br />
        Additionally, user interface for calculated field, label filter, and value filter features have been enabled in this demo by setting the properties
        <code> allowCalculatedField</code>,
        <code> dataSourceSettings->allowLabelFilter</code> and <code> dataSourceSettings->allowValueFilter</code> to true.
    </p>
    <p>
        <strong>NOTE:</strong> To enable calculated field, inject
        <code> CalculatedField</code>
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
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
export default Vue.extend({
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
      gridSettings: { columnWidth: 140 },
      allowCalculatedField: true,
      renderMode: "Fixed",
      width: "99%",
      height: 530
    };
  },
  methods: {
    enginePopulated: function() {
      if (!Browser.isDevice) {
          let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
          let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
          if (fieldListObj && pivotObj) {
            fieldListObj.update(pivotObj);
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
          "display": "none"
        });
      }
    },
    dataBound: function() {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      if (Browser.isDevice) {
          pivotObj.element.style.width = "100%";
          pivotObj.allowCalculatedField = true;
          pivotObj.showFieldList = true;
      }
      pivotObj.tooltip.destroy();
      pivotObj.refresh();
    },
    fieldEnginePopulated: function() {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let fieldListObj = (<any>this.$refs.pivotfieldlist).ej2Instances;
      fieldListObj.updateView(pivotObj);
    }
  },
  provide: {
    pivotview: [CalculatedField,FieldList]
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