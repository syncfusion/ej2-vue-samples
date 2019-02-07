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

    @font-face {
font-family: 'e-grid-headertemplate';
src:
url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
font-weight: normal;
font-style: normal;
}
  .e-grid .e-icon-userlogin::before{
      font-family: 'e-grid-headertemplate';
       width:15px !important;
       content:'\e7d4';
    }
   .e-grid .e-icon-calender::before{
       font-family: 'e-grid-headertemplate';
        width:15px !important;
        content:'\e7b5';
    }
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