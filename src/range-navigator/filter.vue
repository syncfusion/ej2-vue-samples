<template>
<div>
<div class="control-section">
   <h4 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">Filter From Hire Date</h4>
    <div align="center">
        <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerFilter' :value='value' height='75'
         labelPosition ='Outside' valueType='DateTime' allowSnapping =true intervalType='Quarter' enableGrouping= true,
            groupBy= 'Years' enableDeferredUpdate=true :dataSource='dataSource' xName='HireDate' yName='yValue' :width='width'
            :changed='changed' :theme='theme' animationDuration=500>
        </ejs-rangenavigator>
    </div>
    <br/>
    <div align="center">
        <ejs-grid id='grid' ref='gridref' :dataSource="gridData" height='350' :width='width'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Center'></e-column>
                <e-column field='FirstName' headerText='Name'  textAlign='Center'></e-column>
                <e-column field='Title' headerText='Title' format="yMd" textAlign='Center'></e-column>
                <e-column field='HireDate' headerText='Hire Date' :format="format" textAlign='Center'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</div>
<div id="action-description">
    <p>
        This sample filters the data by hire date using date-time axis.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to bind the value of the range navigator to the grid control using the <code>changed</code> event.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the <code>DateTime</code> module in the <code>provide</code> section.
    </p>
</div>
</div>
</template>
<style>
#control-containerFilter {
  padding: 0px !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { RangeNavigatorPlugin, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { employeeData } from "./data-source";

Vue.use(RangeNavigatorPlugin);
Vue.use(GridPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";

export default Vue.extend({
  data: function() {
    let gridDataSource;
    return {
      //Grid Properties
      format: { skeleton: "yMd", type: "date" },
      //Range Navigator Properties
      value: [new Date(1992, 5, 1), new Date(1993, 4, 1)],
      dataSource: employeeData,
      width: Browser.isDevice ? "100%" : "80%",
      gridData: employeeData,
      theme: selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    };
  },
  provide: {
    rangeNavigator: [DateTime]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.gridref.ej2Instances.refresh();
      });
    },
  methods: {
  
    changed: function(args) {
        this.$refs.gridref.ej2Instances.dataSource = employeeData.filter(function(data) {
          return (
            data.HireDate >= new Date(+args.start) &&
            data.HireDate <= new Date(+args.end)
          );
        });
    }
  }
});
</script>