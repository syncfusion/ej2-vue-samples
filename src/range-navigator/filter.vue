<template>
<div>
<div class="control-section">
   <h1 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px; margin-top: 10px;">Filter From Hire Date</h1>
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
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the <code>DateTime</code> module using <code>provide: { rangeNavigator: [DateTime] }</code> method.
    </p>
</div>
</div>
</template>
<style scoped>
#control-containerFilter {
  padding: 0px !important;
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { RangeNavigatorComponent, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { employeeData } from "./data-source";

import {  loadRangeNavigatorTheme } from "./theme-color";

let theme = loadRangeNavigatorTheme();

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-rangenavigator': RangeNavigatorComponent
  },
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
      theme: theme
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
};
</script>