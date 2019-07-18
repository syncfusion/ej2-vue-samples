<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the TreeGrid component with the row template feature. In this sample, we have rendered each TreeGrid
        row using the template.
    </p>
    </div>
    <div>
        <ejs-treegrid :dataSource="data" childMapping='Children' height=335 :rowHeight = '83' width='auto' :treeColumnIndex='0' :rowTemplate='rowTemplate'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='180'></e-column>
                <e-column field='Name' headerText='Employee Name'></e-column>
                <e-column field='Address' headerText = 'Employee Details' width='350'></e-column>
                <e-column field='DOB' headerText = 'DOB'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
    <div id="description">
    <p>
        The TreeGrid provides a way to use a custom layout for its rows using template feature. The 
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/treegrid/row/#row-template">rowTemplate
        </a></code> property accepts either string or HTML element`s ID value, which will be used 
        as the template for the row.  
    </p>
    <p>
        In this demo, we have presented Employee Information with Employee Photo and employee details like Name, Address etc.
    </p>
    <p>The template expression should be provided inside <code>${...}</code> interpolation syntax.</p>
</div>

</div>
</template>
<!-- custom code start -->
<style>
    .border {
        border-color: #e0e0e0;
        border: 1px solid #e0e0e0;
        border-width: 1px 0px 0px 0px;
    }

    img {
        width: 60px;
        height: 60px;
        vertical-align: baseline;
        border-radius: 50px;
        margin-left: 20px;
        background-repeat: no-repeat;
    
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { textdata } from "./data-source";
import rowtemplate from "./row-temp.vue";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: textdata,
      rowTemplate: function () {
        return { template: rowtemplate}
      }
    };
  }
});
</script>