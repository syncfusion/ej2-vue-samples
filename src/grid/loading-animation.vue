<template>
<div>
<div class="col-lg-9 control-section">
    <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
            <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
            <e-column field='Designation' headerText='Designation' width='130'></e-column>
            <e-column field='CurrentSalary' headerText='Current Salary' format='C2' textAlign='Right' width='140'></e-column>
        </e-columns>
    </ejs-grid>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 60%;">
          </colgroup>
          <tbody>
        <tr style="height: 50px">
            <td>
                <div style="margin-left: -10px;width: 120%;">Indicator Type</div>
            </td>
            <td>
            <div style="margin-left: -10px;">
              <ejs-dropdownlist ref='dropdown' id='dropdown' :dataSource='indicatortypes' index=0 :fields='fields' :change="indicatorChange"></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
        </tbody>
    </table>
</div>  
    
<div id="action-description">
    <p>This sample shows the loading indicator while grid loading and refreshing when using remote data. In this sample, you can change the loading indicators from the properties panel.
    </p>
</div>

<div id="description">
     <p>
       The grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the grid during initial rendering or refreshing or after performing any grid action like sorting, filtering, grouping, and more.
    </p>
    <p>The Grid supports the following loading indicator types. They are: </p>
        <ul>
            <li><code>Spinner</code></li>
            <li><code>Shimmer</code></li>
        </ul>
    <p>Use the loading indicator by setting the <code>loadingIndicator.indicatorType</code> property as <code>Spinner</code> or <code>Shimmer</code>. The default value of the indicatorType is <code>Spinner</code>.</p>
    <p> In this demo, the <code>Shimmer</code> type is initially enabled. If you want to use the default value of the loading indicator, use the dropdown to change it.
    </p>
</div>
</div>  
</template>

<!-- custom code start -->
<style scoped>
    #control-container {
        padding: 0px !important;
    }
</style>
<!-- custom code end -->

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      data: new DataManager({
        url: 'https://services.syncfusion.com/vue/production/api/UrlDataSource',
        adaptor: new UrlAdaptor()
      }),
      pageSettings: { pageCount: 3 },
      loadingIndicator: { indicatorType: 'Shimmer' },
      fields: { text: 'name', value: 'id' },
      indicatortypes: [
          { id: 'Shimmer', name: 'Shimmer' },
	      { id: 'Spinner', name: 'Spinner' }
	  ]
    };
  },
  methods: {
    indicatorChange: function(e: ChangeEventArgs): void {
        if (((this as any).$refs.dropdown as DropDownListComponent).ej2Instances.value === "Shimmer") {
            ((this as any).$refs.grid as GridComponent).ej2Instances.loadingIndicator.indicatorType = 'Shimmer';
            ((this as any).$refs.grid as GridComponent).ej2Instances.refresh();
        } else {
            ((this as any).$refs.grid as GridComponent).ej2Instances.loadingIndicator.indicatorType = 'Spinner';
            ((this as any).$refs.grid as GridComponent).ej2Instances.refresh();
        }
    }
  },
  provide: {
      grid: [Page, Sort, Filter]
  }
}
</script>