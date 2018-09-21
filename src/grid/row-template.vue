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
 .rowphoto img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }
    
    @media screen and (max-width: 600px) and (min-width: 320px) {
        .rowphoto img {
            width: 50px;
            height: 50px;
        }
    }
    
    @media screen and (max-width: 800px) and (min-width: 600px) {
        .rowphoto img {
            width: 70px;
            height: 70px;
        }
    }
    
    .rowphoto,
    .details {
        border-color: #e0e0e0;
        border-style: solid;
    }
    
    .rowphoto {
        border-width: 1px 0px 0px 0px;
        text-align: center;
    }
    
    .details {
        border-width: 1px 0px 0px 0px;
        padding-left: 18px;
    }

    .e-bigger .details {
        padding-left: 25px;
    }

    .e-device .details {
        padding-left: 8px;
    }
    
    .details > table {
        width: 100%;
    }
    
    .CardHeader {
        font-weight: bolder;
    }
    
    td {
        padding: 2px 2px 3px 4px;
    }

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