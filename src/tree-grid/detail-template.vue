<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the TreeGrid component with the detail template feature.
    </p>
    </div>
    <div>
        <ejs-treegrid :dataSource="data" childMapping='Children' height=335 width='auto' :treeColumnIndex='0' :detailTemplate='detailTemplate'>
            <e-columns>
                <e-column field='Name' headerText='First Name' width='160'></e-column>
                <e-column field='DOB' headerText = 'DOB' width='85' type='date' format='yMd' textAlign='Right' ></e-column>
                <e-column field='Designation' headerText = 'Designation' width='147'></e-column>
                <e-column field='EmpID' headerText='Employee ID' width='125'></e-column>
                <e-column field='Country' headerText = 'Country' width='148'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
    <div id="description">
    <p>
        The detail row template provides an additional information about a data row. The detailTemplate property accepts either string or HTML element`s ID value, which will be used as the template for the detail row.  
    </p>
    <p>
        In this demo, we have presented Employee Information with image in the detail row.
    </p>
    <p>The template expression should be provided inside ${...} interpolation syntax.</p>
    <p>Injecting Module: TreeGrid features are segregated into individual feature-wise modules. To use detail template feature, we need to inject DetailRow using the TreeGrid.Inject(DetailRow) section.</p>
</div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, DetailRow } from "@syncfusion/ej2-vue-treegrid";
import { textdata } from "./data-source";
import detailTemplate from "./detail-temp.vue";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: textdata,
      detailTemplate: function () {
          return {template: detailTemplate};
      }
    };
  },
  provide: {
      treegrid: [DetailRow]
  }
});
</script>
