<template>
<div class="control-section">
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the ColumnMenu. Click the icon of each column to open the column menu.
        </p>
    </div>
    <div class="col-lg-9 control-section">
        <ejs-grid :dataSource="data" id="gridcomp" ref='grid' :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true' :selectionSettings='selectionSettings'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :columnMenuClick='columnMenuClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' :showInColumnChooser='false' width='200' :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='140' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='ShipName' headerText='ShipName' width='160' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='180' editType='dropdownedit'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
    <div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 40%">
                <div style="padding-top: 7px">Column menu</div>
            </td>
            <td style="width: 60%;padding-right: 10px">
                <div id='typeddl'>
                <ejs-dropdownlist ref='directions' id='direction' width='120' :dataSource='columnMenuOptions' value='Default' :fields='fields' :change="change"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
    </table>
    </div>

     <div id="description">
        <p>
            The grid provides an option to display a column menu when the user clicks the icon on each column. This menu includes integrated features like sorting, 
            grouping, filtering, column chooser, and auto-fitting. These features can be enabled by setting the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid#showcolumnmenu">showColumnMenu
            </a></code> property to `true`. The default menu items include:
        <br/>
        </p>
        <ul>
            <li><code>SortAscending</code>: Sort the current column in ascending order.</li>
            <li><code>SortDescending</code>: Sort the current column in descending order.</li>
            <li><code>Group</code>: Group the current column.</li>
            <li><code>Ungroup</code>: Ungroup the current column.</li>
            <li><code>AutoFit</code>: Auto-fit current column.</li>
            <li><code>AutoFitAll</code>: Auto-fit all columns.</li>
            <li><code>ColumnChooser</code>:  Toggle column visibility.</li>
            <li><code>Filter</code>: Display the filter option as specified in the <code>filterSetting-&gt;type</code>.</li>
        </ul>
        
        <br/>
        <p>
            The default column menu items are enabled based on the corresponding feature settings. Additionally, the column menu allows users to include  
            custom menu items with the default ones, or the replacement of the default items entirely with custom options.
        </p>
        <p>
            In this demo, the Column Menu feature is initially enabled by setting <code><a target="_blank" class="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid#showcolumnmenu">showColumnMenu
                </a></code> to `true`, with sorting, grouping, filtering, column chooser, 
            and auto-fit options. Users also have the option to toggle custom column menu items through using the dropdown list in the property panel. In the custom menu, sorting, grouping, 
            and filtering are enabled, and custom options like column selection and clear selection have been added.
            
        </p>

        <p style="font-weight: 500">Injecting Module</p>

        <p>
            Features of the Grid component are segregated into individual feature-wise modules. To use the Column Menu feature, inject the
            <code>ColumnMenu</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the column menu can be found in this
            <a target="_blank" 
            href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-menu">
            documentation section</a>.
        </p>
    </div>

</div>
</template>
<!-- custom code start-->
<style scoped>
    #typeddl {
        min-width: 100px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Group, Sort, Resize, ColumnMenu, Page, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { orderDetails } from "./data-source";
export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data: () => {
    return {
      data: orderDetails,
      groupOptions: { showGroupedColumn: true },
      filterSettings: { type: "CheckBox" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      selectionSettings: { allowColumnSelection: true },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true, minLength: 5 },
      freightrules:  { required: true, min: 0 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      columnMenuOptions: [
      { id: 'Default', text: 'Default' },
      { id: 'Custom', text: 'Custom' }
      ],
      fields: { text: 'text', value: 'id' }
    };
  },
  methods: {
    columnMenuClick: function(args: any) {
        if (args.item.id === 'select_column') {
            ((this as any).$refs.grid.ej2Instances).selectionModule.selectColumn(args.column.index);
        } else if (args.item.id === 'clear_column') {
            ((this as any).$refs.grid.ej2Instances).selectionModule.clearColumnSelection();
        }
    },
    change: function(e: any){
        let gridMenuOption: string = <string>e.value;
        if (gridMenuOption == 'Custom') {
            let columnMenuItems: any = [
                'SortAscending',
                'SortDescending',
                'Group',
                'Ungroup',
                'Filter',
                { text: 'Select Column', id: 'select_column' },
                { text: 'Clear column selection', id: 'clear_column' },
            ];
            ((this as any).$refs.grid.ej2Instances).columnMenuItems = columnMenuItems;
        } else {
            ((this as any).$refs.grid.ej2Instances).columnMenuClick = undefined;
            ((this as any).$refs.grid.ej2Instances).columnMenuItems = undefined;
        }
    }
  },
  provide: {
      grid: [Group, Sort, Resize, ColumnMenu, Page, Toolbar, Edit, Filter]
  }
}
</script>