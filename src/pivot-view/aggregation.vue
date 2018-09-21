<template>
    <div>
        <div class="col-lg-9 control-section">
			<div class="content-wrapper">
                <ejs-pivotview id="pivotview" :dataSource="dataSource" :gridSettings="gridSettings" :width="width" :height="height" :showFieldList="showFieldList">        
                </ejs-pivotview>
			</div>
		</div>

        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-dropdownlist id='costdrpdwn' :change='costChange' :dataSource='costData' index=0 placeholder="Cost" floatLabelType="Auto" ></ejs-dropdownlist>  
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-dropdownlist id='unitdrpdwn' :change='unitChange' :dataSource='unitData' index=0 placeholder="Units" floatLabelType="Auto" ></ejs-dropdownlist>  
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the aggregate types in the pivotgrid widget. In this sample, you can change the aggregate types
                for value fields using a dropdown list separately.</p>
        </div>
        <div id="description">
            <p>The pivotgrid widget supports different types of aggregation for value fields. The aggregate type can be set using the type
                property of the value field. The built-in aggregates are:
            </p>
            <ul>
                <li>
                    <code>Sum</code>
                </li>
                <li>
                    <code>Average</code>
                </li>
                <li>
                    <code>Min</code>
                </li>
                <li>
                    <code>Max</code>
                </li>
                <li>
                    <code>Count</code>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  PivotViewComponent,
  SummaryTypes,
  FieldList
} from "@syncfusion/ej2-vue-pivotview";
import { renewableEnergy } from "./data-source";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(DropDownListPlugin);

function setSummaryType(fieldName: string, summaryType: SummaryTypes): void {
  let pivotGridObj = (<any>document.getElementById("pivotview"))
    .ej2_instances[0];
  let isAvail: boolean = false;
  for (
    let vCnt: number = 0;
    vCnt < pivotGridObj.dataSource.values.length;
    vCnt++
  ) {
    if (pivotGridObj.dataSource.values[vCnt].name === fieldName) {
      pivotGridObj.dataSource.values[vCnt].type = summaryType;
      isAvail = (<any>pivotGridObj.dataSource.values[vCnt]).properties
        ? false
        : true;
    }
  }
  if (isAvail) {
    pivotGridObj.updateDataSource();
  }
}

export default Vue.extend({
  data: () => {
    return {
      dataSource: {
        enableSorting: true,
        formatSettings: [
          { name: "ProCost", format: "C0" },
          { name: "PowUnits", format: "N0" }
        ],
        drilledMembers: [
          { name: "EnerType", items: ["Biomass", "Free Energy"] }
        ],
        columns: [
          { name: "EnerType", caption: "Energy Type" },
          { name: "EneSource", caption: "Energy Source" }
        ],
        data: renewableEnergy,
        expandAll: false,
        rows: [
          { name: "Year", caption: "Production Year" },
          { name: "HalfYear", caption: "Half Year" },
          { name: "Quarter", caption: "Quarter Year" }
        ],
        values: [
          { name: "PowUnits", caption: "Units (GWh)" },
          { name: "ProCost", caption: "Cost (MM)" }
        ],
        filters: []
      },

      showFieldList: true,
      width: "100%",
      height: 300,
      gridSettings: { columnWidth: 140 },
      costData: ["Sum", "Avg", "Min", "Max"],
      unitData: ["Sum", "Avg", "Count", "Min", "Max"]
    };
  },
  methods: {
    costChange: function(args: ChangeEventArgs) {
      setSummaryType("ProCost", args.value as SummaryTypes);
    },
    unitChange: function(args: ChangeEventArgs) {
      setSummaryType("PowUnits", args.value as SummaryTypes);
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