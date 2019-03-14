<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid header template feature. In this sample, we have shown custom icons in the column headers.</p>
    </div>

    <div>
        <ejs-grid :dataSource="data" >
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' :headerTemplate='employeetemplate'></e-column>
                <e-column field='FirstName' headerText='Name' width='140'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='130' format="yMd" textAlign='Right' :headerTemplate='datetemplate'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
        The Grid provides a way to use a custom element in header element. 
        <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#headertemplate-string">columns->headerTemplate
        </a></code> property accepts a vue component, which will be used 
        as the template for the header cell.
        </p>
        <p>
            In this demo, we have render customized template for Employee ID and Hire Date column headers.
        </p>
    </div>

</div>
</template>
<style>
@import "../../styles/Grid/header-template.css";
</style>
<script lang="ts">
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: employeeData,
      employeetemplate: function() {
        return {
            template: Vue.component('employeetemplate', {
            template: `<div><span class="e-icon-userlogin e-icons employee"></span> {{emp}}</div>`,
            data: function () {return {emp: 'Emp ID'};}
            })
        }
      },
      datetemplate: function() {
        return {
            template : Vue.component('datetemplate', {
            template: `<div><span class="e-icon-calender e-icons headericon"></span> {{ord}}</div>`, 
            data: function () {return {ord: 'Order Date'};}
            })
        }
      }
    };
  }
});
</script>