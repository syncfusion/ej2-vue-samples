<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid header template feature. In this sample, we have shown custom icons in the column headers.</p>
    </div>

    <div>
        <ejs-grid :dataSource="data" :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' :headerTemplate="'employeetemplate'" :isPrimaryKey='true' :validationRules='employeeidrules'></e-column>
                <e-column field='FirstName' headerText='Name' width='140' :validationRules='firstnamerules'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='130' format="yMd" textAlign='Right' :headerTemplate="'datetemplate'" editType='datepickeredit'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>
            <template v-slot:employeetemplate="{data}">
              <div><span class="e-icon-userlogin e-icons employee"></span>Emp ID</div>
            </template>
            <template v-slot:datetemplate="{data}">
              <div><span class="e-icon-calender e-icons headericon"></span>Order Date</div>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
        The Grid provides a way to use a custom element in header element. 
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#headertemplate">columns->headerTemplate
        </a></code> property accepts a vue component, which will be used 
        as the template for the header cell.
        </p>
        <p>
            In this demo, we have render customized template for Employee ID and Hire Date column headers.
        </p>
    </div>

</div>
</template>
<style scoped>
@import "../../styles/Grid/header-template.css";
</style>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: employeeData,
      filterSettings: { type: 'Excel' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      employeeidrules: { required: true, number: true },
      firstnamerules: { required: true, minLength: 5 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    };
  },
  provide: {
      grid: [Sort, Toolbar, Edit, Filter]
  }
}
</script>