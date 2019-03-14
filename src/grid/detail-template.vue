<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates the Grid component with the detail template feature. Click the expand button
        in each Grid row to show the detailed information about a row.
    </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :detailTemplate ='detailTemplate' >
            <e-columns>
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
            The detail row template provides an additional information about a data row which can show or hide by clicking
            on expand or collapse button. The <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#detailtemplate-string">
        detailTemplate</a></code> property accepts the template for the detail row.
        </p>
        <p>
            In this demo, we have presented Employee Information with image in the detail row.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules. To use detail template feature, we need to inject <code>DetailRow</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<style>
@import "../../styles/Grid/detail-template.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";
import detailTemplate from "./detail-temp.vue";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: employeeData,
      detailTemplate: function () {
          return {template: detailTemplate};
      }
    };
  },
  provide: {
      grid: [DetailRow]
  }
});
</script>