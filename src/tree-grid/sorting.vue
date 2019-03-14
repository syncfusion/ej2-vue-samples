<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' id='treegrid' :dataSource='data' cssClass='sortingenabled' :actionComplete='sort' :allowPaging='true' :allowSorting='true' :sortSettings='sortSettings' childMapping='subtasks' :treeColumnIndex='0' :pageSettings='pageSettings' >
            <e-columns>
                <e-column field='orderName' headerText='Order Name' width='180'></e-column>
                <e-column field='Category' headerText='Category' width='150'></e-column>
                <e-column field='orderDate' headerText='Order Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='units' headerText='Units' width='100' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 70%">
                <div>
                    Order Name
                </div>
            </td>
            <td style="width: 30%;padding:10px 10px 10px 0px">
                <div class="col-md-6">
                    <ejs-checkbox ref='ordername' :checked="true" :change="namecheck"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%">
                <div>
                    Category
                </div>
            </td>
            <td style="width: 30%;padding:10px 10px 10px 0px">
                <div class="col-md-6">
                    <ejs-checkbox ref='category' :checked="true" :change="categorycheck"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%">
                <div>
                    Order Date
                </div>
            </td>
            <td style="width: 30%; padding:10px 10px 10px 0px">
                <div class="col-md-6">
                    <ejs-checkbox ref='orderdate' :change="datecheck"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 70%">
                <div>
                    Units
                </div>
            </td>
            <td style="width: 30%; padding:10px 10px 10px 0px">
                <div class="col-md-6">
                    <ejs-checkbox ref='units' :change="unitscheck"></ejs-checkbox>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the TreeGrid multi sorting feature. To sort two or more columns, hold the CTRL key and click the column header.
    </p>
</div>

<div id="description">
    <p>
        Sorting feature enables us to order the data in a particular direction. It can be enabled by setting the <code>allowSorting</code> as true.
    </p>
    <p class="e-grid" style="border:none">To sort a TreeGrid column by simply click the column header. The icons <span class="e-icons e-icon-ascending"></span>(ascending)
        and <span class="e-icons e-icon-descending"></span>(descending) specifies the sort direction of a column.</p>
    <p>By default, multi-sorting is enabled in TreeGrid, to sort multiple column hold <strong>CTRL</strong> key and click the column
        header. To clear sort for a column, hold <strong>SHIFT</strong> key and click the column header.</p>
    <p>
        While using TreeGrid in a touch device, you have an option for multi sorting in single tap on the treegrid header. By tapping on the treegrid header, it will show the toggle button in small popup with sort icon. 
        Now tap the button to enable the multi-sorting in single tap.
    </p>
    <p>In this demo, </p>
    <ul>
        <li>Simply click the column header to sort a column.</li>
        <li>Check the checkboxes in the properties panel to sort a column and uncheck to remove sort from a column.
        </li>
    </ul>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. To use sorting feature, we need to inject <code>Sort</code> 
        module into the <code>provide</code> section.
    </p>
    <p>
        More information on the sorting feature configuration can be found in this documentation section.
    </p>
</div>
  
  </div>
  
  </template>
<!-- custom code start -->
  <style>
    @media screen and (max-width: 590px) {
        .sortingenabled {
            margin-top: 30px;
        }
    }
</style>
<!-- custom code end -->
  <script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, Sort, TreeGridComponent, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { sortData } from "./data-source";
import { ActionEventArgs, SortEventArgs } from "@syncfusion/ej2-grids";
import { CheckBoxPlugin, CheckBoxComponent, ChangeEventArgs as checkboxchangeargs } from '@syncfusion/ej2-vue-buttons';

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sortData,
      pageSettings: { pageSize: 10 },
      sortSettings: { columns: [{ field: 'Category', direction: 'Ascending' }, { field: 'orderName', direction: 'Ascending' }] }
    };
  },
  provide: {
      treegrid: [ Page, Sort ]
    },
   methods:{
      sort: function(args: SortEventArgs) {
          let columns = (<TreeGridComponent>this.$refs.treegrid).getColumns() as any;
          let sortcolumns = (<TreeGridComponent>this.$refs.treegrid).ej2Instances.sortSettings.columns;
          if (args.requestType === 'sorting') {
            for (let cols of columns) {
                for (let sortcols of sortcolumns) {
                    if (sortcols.field === cols.field) {
                        this.check(sortcols.field, true); break;
                    } else {
                        this.check(cols.field, false);
                    }
                }
            }
        }
      },
      check: function(field: string, state: boolean): void{
          switch (field) {
            case 'orderName':
                (<CheckBoxComponent>this.$refs.ordername).ej2Instances.checked = state; break;
            case 'Category':
                (<CheckBoxComponent>this.$refs.category).ej2Instances.checked = state; break;
            case 'orderDate':
                (<CheckBoxComponent>this.$refs.orderdate).ej2Instances.checked = state; break;
            case 'units':
                (<CheckBoxComponent>this.$refs.units).ej2Instances.checked = state; break;
        }
      },
      namecheck: function(e: checkboxchangeargs){
          if(e.checked){
              (<TreeGridComponent>this.$refs.treegrid).sortByColumn('orderName','Ascending',true);
          } else {
              (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.removeSortColumn('orderName');
          }
      },
      categorycheck: function(e: checkboxchangeargs){
          if(e.checked){
              (<TreeGridComponent>this.$refs.treegrid).sortByColumn('Category','Ascending',true);
          } else {
              (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.removeSortColumn('Category');
          }
      },
      datecheck: function(e: checkboxchangeargs){
          if(e.checked){
              (<TreeGridComponent>this.$refs.treegrid).sortByColumn('orderDate','Ascending',true);
          } else {
              (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.removeSortColumn('orderDate');
          }
      },
      unitscheck: function(e: checkboxchangeargs){
          if(e.checked){
              (<TreeGridComponent>this.$refs.treegrid).sortByColumn('units','Ascending',true);
          } else {
              (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.removeSortColumn('units');
          }
      }
  }

});
</script>