<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates the Grid component with the detail template feature. Click the expand button
        in each Grid row to show the detailed information about a row.
    </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :detailTemplate ="'detailTemplate'" :allowSorting='true'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>
             <template v-slot:detailTemplate="{data}">
                <table class="detailtable" width="100%">
                    <colgroup>
                        <col width="35%">
                        <col width="35%">
                        <col width="30%">
                    </colgroup>
                    <tbody>
                        <tr>
                            <td rowspan="4" style="text-align: center;">
                                <img class='photo' :src="'source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID" />
                            </td>
                            <td>
                                <span style="font-weight: 500;">First Name: </span> {{data.FirstName}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">Postal Code: </span> {{data.PostalCode}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Last Name: </span> {{data.LastName}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">City: </span> {{data.City}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Title: </span> {{data.Title}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">Phone: </span> {{data.HomePhone}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Address: </span> {{data.Address}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">HireDate: </span> {{format(data.HireDate)}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
          <p>
            The detail row template provides an additional information about a data row which can show or hide by clicking
            on expand or collapse button. The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate">
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
<style scoped>
@import "../../styles/Grid/detail-template.css";
</style>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, DetailRow, Sort } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./data-source";
import detailTemplate from "./detail-temp.vue";
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
    format: function(value: any){
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  },
  provide: {
      grid: [DetailRow, Sort]
  }
}
</script>