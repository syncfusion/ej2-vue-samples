<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the row template feature. In this sample, we have rendered each Grid
        row using the template.
    </p>
    </div>
    <div>
        <ejs-grid id="rowtempgrid" :dataSource="data" height=335 width='auto' :rowTemplate="'rowTemplate'" >
            <e-columns>
                <e-column field='Employee Image' headerText='Employee Image' width='150' textAlign='Center'></e-column>
                <e-column field='Employee Details' headerText='Employee Details' width='300' textAlign='Left'></e-column>
            </e-columns>
            <template v-slot:rowTemplate="{data}">
                  <tr>
                    <td class="rowphoto">
                      <img :src="'source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID" />
                    </td>
                    <td class="details">
                      <table class="CardTable" cellpadding="3" cellspacing="2">
                        <colgroup>
                          <col width="50%">
                          <col width="50%">
                        </colgroup>
                        <tbody>
                          <tr>
                            <td class="CardHeader">First Name </td>
                            <td>{{data.FirstName}} </td>
                          </tr>
                          <tr>
                            <td class="CardHeader">Last Name</td>
                            <td>{{data.LastName}} </td>
                          </tr>
                          <tr>
                            <td class="CardHeader">Title</td>

                            <td>{{data.Title}} </td>
                          </tr>
                          <tr>
                            <td class="CardHeader">Birth Date</td>
                            <td>{{format(data.BirthDate)}} </td>
                          </tr>
                          <tr>
                            <td class="CardHeader">Hire Date</td>
                            <td>{{format(data.HireDate)}} </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
         <p>
            The Grid provides a way to use a custom layout for its rows using template feature. The
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate">rowTemplate
        </a></code> property accepts the template for the row.
        </p>
        <p>
            In this demo, we have presented Employee Information with Employee Photo in the first column and employee
            details like Name, Address etc. in the second column.
        </p>
    </div>

</div>
</template>
<style scoped>
@import "../../styles/Grid/row-template.css";
</style>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";
import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: employeeData,
    };
  },
  methods: {
    format: function(value: any) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  }
}
</script>