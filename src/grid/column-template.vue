<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates usage of template columns in Grid. In this sample, we have shown custom images in the Employee
        Image column.
    </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" height=350>
            <e-columns>
                <e-column headerText='Employee Image' width='150' textAlign='Center' :template='cTemplate'></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            The Grid provides a way to use a custom layout for each cell using column template feature. The
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#template-string">columns->template
        </a></code> property accepts the template for the cell.
        </p>
        <p>
            In this demo, using column template, we have presented <strong>Employee Image</strong> column as template column.
        </p>
    </div>

</div>
</template>

<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";
import columntempVue from "./column-temp.vue";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: employeeData,
      cTemplate: function () {
          return { template : columntempVue}
      }
    };
  }
});
</script>