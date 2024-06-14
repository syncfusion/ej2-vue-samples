<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates usage of template columns in Grid. In this sample, we have shown custom images in the Employee
        Image column.
    </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" height=350 :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings'>
            <e-columns>
                <e-column headerText='Employee Image' width='150' textAlign='Center' :template="'cTemplate'"></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>
            <template v-slot:cTemplate="{data}">
                <div class="image">
                      <img :src="'source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
                </div>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            The Grid provides a way to use a custom layout for each cell using column template feature. The
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#template">columns->template
        </a></code> property accepts the template for the cell.
        </p>
        <p>
            In this demo, using column template, we have presented <strong>Employee Image</strong> column as template column.
        </p>
    </div>

</div>
</template>

<style scoped>
.image img {
        height: 55px;
        width: 55px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }
</style>

<script>
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Filter } from "@syncfusion/ej2-vue-grids";
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
    };
  },
  provide: {
      grid: [Sort, Filter]
  }
}
</script>