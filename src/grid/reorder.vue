<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates reordering of the Grid columns. You can reorder columns by simply drag and drop in the desired
        column position.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowReordering='true'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='140'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hired Date' width='120' format='yMd' textAlign='Right'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>    
        </ejs-grid>
    </div>

     <div id="description">
        <p>Reordering can be enabled by setting <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowreordering-boolean">
        allowReordering
        </a></code> property as true. Reordering can be done by drag
            and drop the column header from one index to another index within the Grid.</p>
        <p>The location in which the column to be placed, will be indicated by two arrows symbols.</p>
        <p>In this demo, you can reorder columns by drag and drop the column to the desired column.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use reordering feature, we need to inject
            <code>Reorder</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: employeeData
    };
  },
  provide: {
      grid: [Reorder]
  }
});
</script>