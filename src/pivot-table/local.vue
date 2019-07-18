<template>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :load="onLoad" :gridSettings="gridSettings" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates basic rendering of the pivot table bound to JSON data extracted from a local file.</p>
</div>
<div id="description">
    <p>The pivot table supports JSON data source. The
        <code>dataSourceSettings->dataSource</code> property can be assigned with the JSON data to populate the component.</p>
    <p>In this demo, the JSON data is assigned from an external file.</p>

</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
/* tslint:disable */
declare var require: any;
let data: IDataSet[] = require('./rData.json');
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        expandAll: false,
        enableSorting: true,
        formatSettings: [
          { name: "ProCost", format: "C0" },
          { name: "PowUnits", format: "N0" }
        ],
        drilledMembers: [
          { name: "EnerType", items: ["Biomass", "Free Energy"] }
        ],
        rows: [
          { name: "Year", caption: "Production Year" },
          { name: "HalfYear", caption: "Half Year" },
          { name: "Quarter", caption: "Quarter" }
        ],
        columns: [
          { name: "EnerType", caption: "Energy Type" },
          { name: "EneSource", caption: "Energy Source" }
        ],
        values: [
          { name: "PowUnits", caption: "Units (GWh)" },
          { name: "ProCost", caption: "Cost (MM)" }
        ],
        filters: []
      },
      gridSettings: { columnWidth: 120 },
      height: 300,
      width: "100%"
    };
  },
  methods: {
    onLoad(): void {
        let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
        if (data[0].Year === undefined) {
            let date: Date;
            for (let ln: number = 0, lt: number = data.length; ln < lt; ln++) {
                date = new Date(data[ln].Date.toString());
                let dtYr: number = date.getFullYear();
                let dtMn: number = date.getMonth();
                let dtdv: number = (dtMn + 1) / 3;
                data[ln].Year = 'FY ' + dtYr;
                data[ln].Quarter = dtdv <= 1 ? 'Q1 ' + ('FY ' + dtYr) : dtdv <= 2 ? 'Q2 ' + ('FY ' + dtYr) :
                    dtdv <= 3 ? 'Q3 ' + ('FY ' + dtYr) : 'Q4 ' + ('FY ' + dtYr);
                data[ln].HalfYear = (dtMn + 1) / 6 <= 1 ? 'H1 ' + ('FY ' + dtYr) : 'H2' + ('FY ' + dtYr);
                delete (data[ln].Date);
            }
        }
        pivotObj.dataSourceSettings.dataSource = data;
    }
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>