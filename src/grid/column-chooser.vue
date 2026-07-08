<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates how users can dynamically show or hide columns using the Column Chooser feature. It highlights flexible column visibility management through an interactive Grid interface.
        </p>
    </div>
    <div style="padding-bottom: 10px; padding-left: 10px; display: flex; justify-content: flex-end;">
        <ejs-checkbox ref="checkboxInstance" label='Immediate Column Chooser Mode' labelPosition='After' :change='onColumnChooserModeChange' :checked='isImmediateMode'></ejs-checkbox>
    </div>
    <div>
        <ejs-grid ref="gridInstance" id="GridColumnChooser" :dataSource="data" :allowPaging='true' :showColumnChooser='true' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :columnChooserSettings='columnChooserSettings' :pageSettings='pageSettings' :clipMode="'EllipsisWithTooltip'">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :showInColumnChooser='false' :isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150' :showInColumnChooser='false' :validationRules='customerIDRules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit' :validationRules='dateRules'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='140' format="yMd" textAlign='Right' editType='datepickeredit' :validationRules='dateRules'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            The Column Chooser feature enables users to dynamically control the visibility of columns in the Grid. To enable this functionality, set the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnchooser">showColumnChooser</a></code> property to <code>true</code> and include the "ColumnChooser" item in the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#toolbar">toolbar</a></code>. To prevent specific columns from appearing in the Column Chooser, set the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showincolumnchooser">columns.showInColumnChooser</a></code> property to <code>false</code>.
        </p>
        <p>
            Column visibility is managed by selecting or deselecting checkboxes in the Column Chooser dialog:
        </p>
        <ul>
            <li>By default, changes are applied to the Grid only after clicking the "OK" button.</li>
            <li>To apply changes instantly, set the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#type">columnChooserSettings.mode</a></code> property to <code>Immediate</code>.</li>
        </ul>

        <p>
            In this demo, the column chooser mode can be switched using the "Immediate Column Chooser Mode" checkbox. When the column chooser button in the toolbar is clicked, it opens the dialog according to the selected mode, allowing users to show or hide columns by selecting or clearing the corresponding checkboxes.
        </p>
        <p><strong>Injecting Module:</strong></p>
        <p>
            Features of the Grid component are organized into individual, feature-specific modules. To use the column chooser and toolbar functionality, inject the required modules using <code>Grid.Inject(ColumnChooser, Toolbar)</code>.
        </p>
        <p>More information on column chooser configuration can be found in the <a aria-label="API link for documentation" target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-chooser">documentation.</a></p>
        <p>
            Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit our
            <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">
                Vue Data Grid component</a> page.
        </p>
  
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, ColumnChooser, Page, Toolbar, Edit, Filter, Sort } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { ChangeEventArgs } from "@syncfusion/ej2-buttons";
import { OrderedData } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'ejs-checkbox': CheckBoxComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: OrderedData,
      filterSettings: { type: 'CheckBox' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true, minLength: 5 },
      freightRules:  { required: true, min: 0 },
      dateRules: { required: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
      pageSettings: {pageCount: 5},
      columnChooserSettings: { mode: 'Immediate' },
      isImmediateMode: true
    };
  },
  methods: {
    onColumnChooserModeChange(args: ChangeEventArgs) {
      let grid = ((this as any).$refs.gridInstance).$el.ej2_instances[0];
      if (args.checked) {
        grid.columnChooserSettings.mode = 'Immediate';
      } else {
        grid.columnChooserSettings.mode = 'Default';
      }
    }
  },
  provide: {
      grid: [ColumnChooser, Page, Toolbar, Edit, Filter, Sort]
  }
}
</script>