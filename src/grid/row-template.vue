<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the row template feature. In this sample, we have rendered each Grid
        row using the template.
    </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" height=335 width='auto' :rowTemplate='rowTemplate' >
            <e-columns>
                <e-column field='Employee Image' headerText='Employee Image' width='150' textAlign='Center'></e-column>
                <e-column field='Employee Details' headerText='Employee Details' width='300' textAlign='Left'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
         <p>
            The Grid provides a way to use a custom layout for its rows using template feature. The
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#rowtemplate-string">rowTemplate
        </a></code> property accepts the template for the row.
        </p>
        <p>
            In this demo, we have presented Employee Information with Employee Photo in the first column and employee
            details like Name, Address etc. in the second column.
        </p>
    </div>

</div>
</template>
<style>
@import "../../styles/Grid/row-template.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";
import rowtemplate from "./row-temp.vue";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: employeeData,
      rowTemplate: function () {
        return { template: rowtemplate}
      }
    };
  }
});
</script>