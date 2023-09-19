<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowSorting='true' height='380'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText='Start Date' width='100' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 30%">
                <div>Column</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div id='columnddl'>
                     <ejs-dropdownlist ref='columns' width='110px' id='columns' :dataSource='columnsName' value='taskID' :fields='ddlfields'></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>Direction</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                    <ejs-dropdownlist ref='direction' width='110px' id='direction' :dataSource='direction' value='Ascending' :fields='ddlfields'></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                    <ejs-button ref='sort' v-on:click="sort">Sort</ejs-button>
                </div>

            </td>
            <td style="width: 70%; padding:10px 10px 10px 0px">
                <div>
                    <ejs-button ref='clear' v-on:click="clear">Clear</ejs-button>
                </div>
            </td>
        </tr>
    </table>
            
        </div>
    </div>

<div id="action-description">
    <p>
        Sorting feature enables us to order the data in a particular direction. It can be enabled 
        by setting the allowSorting as true.
    </p>
</div>

<div id="description">
    <p>
        Sorting feature enables us to order the data in a particular direction. It can be enabled by setting the <code>allowSorting</code> as true.
    </p>
    <p class="e-treegrid" style="border:none">To sort a Tree Grid column simply click the column header. The icons <span class="e-icons e-icon-ascending"></span>(ascending)
        and <span class="e-icons e-icon-descending"></span>(descending) specifies the sort direction of a column.</p>
    <p>By default, multi-sorting is enabled in Tree Grid, to sort multiple column hold <strong>CTRL</strong> key and click the column
        header. To clear sort for a column, hold <strong>SHIFT</strong> key and click the column header.</p>
    <p>
        While using Tree Grid in a touch device, you have an option for multi sorting in single tap on the Tree Grid header. By tapping on
        the Tree Grid header, it will show the toggle button in small popup with sort icon. Now tap the button to enable the multi-sorting
        in single tap.
    </p>
    <p>In this demo, select the column and direction from the properties panel then click the Sort button. Use the Clear button
        to remove sort for the selected column.
    </p>

    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use sorting feature, we need to inject <code>Sort</code>
        module into the <code>provide</code> section.
    </p>
    <p>
        More information on the sorting feature configuration can be found in this documentation section.
    </p>
</div>

  </div>
  </template>
  <script lang="ts">
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Sort, Column } from "@syncfusion/ej2-vue-treegrid";
import { SortDirection } from "@syncfusion/ej2-vue-grids";
import { ChangeEventArgs, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";
import { ButtonComponent, ClickEventArgs } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data: () => {
    return {
      data: sampleData,
      columnsName: [
        { id: 'taskID', name: 'Task ID' },
        { id: 'taskName', name: 'Task Name' },
        { id: 'startDate', name: 'Start Date' },
        { id: 'duration', name: 'Duration' }
    ],
      direction: [
        { id: 'Ascending', name: 'Ascending' },
        { id: 'Descending', name: 'Descending' }
    ],
    ddlfields: {text: 'name', value: 'id'}
    };
  },
  provide: {
      treegrid: [ Sort ]
    },
   methods:{
       sort: function(e: ClickEventArgs): void {
        let columnName = ((this as DropDownListComponent).$refs.columns).ej2Instances.value;
        let sortType = ((this as DropDownListComponent).$refs.direction).ej2Instances.value;
        ((this as TreeGridComponent).$refs.treegrid).sortByColumn(columnName, <SortDirection>sortType, false);
    },
       clear: function(e: ChangeEventArgs): void {       
        ((this as TreeGridComponent).$refs.treegrid).clearSorting();
    }
  }
};
</script>