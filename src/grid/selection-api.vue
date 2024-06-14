<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the selection functionality of the Grid, you can select the type and mode from the desired button</p>
    </div>
    <div>
        <div class='e-mastertext'>Selection Type & Selection Mode</div>
            <ejs-toolbar ref="toolbar" class='e-gridlist' :items='items' :clicked="onChange" >                
            </ejs-toolbar>
        <br/>
        <ejs-grid ref="grid" :dataSource="data" allowPaging='true' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :enableHover="false" :allowSelection="true" :selectionSettings="selectOptions" :rowSelecting="selectingEvent" :cellSelecting="selectingEvent">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150' :validationRules='customeridrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Selection provides an interactive support to highlight the row or cell or column that you select. Selection can be done through simple
            Mouse down or Keyboard interaction. To enable selection, set <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#allowselection">
        allowSelection
        </a></code> as true.
        </p>
        <p>Grid component supports two types of selection which can be set using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type">
        selectionSettings->type
        </a></code> property.
            They are,</p>
        <ul>
            <li><code>Single</code> - Enabled by default. Allows the user to select single row/cell/column at a time.</li>
            <li><code>Multiple</code> - Allows the user to select more than one row/cell/column at a time.</li>
        </ul>
        <p>Also, supports three modes of selection which can be set using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode">
        selectionSettings->mode
        </a></code> property. They
            are,
        </p>
        <ul>
            <li><code>Row</code> - Enabled by default. Enables row selection in Grid.</li>
            <li><code>Cell</code> - Enables cell selection in Grid.</li>
            <li><code>Both</code> - Enables both row and cell selection in Grid. Clicking any cell will select both the row and cell
                simultaneously
            </li>
        </ul>
        <p>To perform the column selection, enable the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection">
        selectionSettings->allowColumnSelection
        </a></code> property.</p>
        <p>To perform the multi-selection, hold <strong>CTRL</strong> key and click the desired rows/cells/columns. To select range of rows/cells/columns,
            hold <strong>SHIFT</strong> key and click the rows/cells/columns.</p>
        <p>While using the Grid in a touch device environment, there is an option for multi-selection through a single tap on the
            row and it will show a popup with the multi-selection symbol. Tap the icon to enable multi-selection in a single
            tap.
        </p>
        <p>In this demo, click the toolbar options to toggle between the selection type and selection mode available in Grid.</p>
        <p>
            More information on the selection configuration can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/grid/selection.html#selection">documentation section</a>.
        </p>
    </div>
</div>
</template>
<!-- custom code start -->
<style scoped>
.e-gridlist .e-tbar-btn.e-btn,
.e-gridlist .e-btn  {
    box-shadow: none;
    text-transform: none;
}

.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    font-weight: 300;
    opacity: 0.87;
    padding: 1em;
}
</style>
<!-- custom code end -->
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Sort, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent, ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { orderDetails } from "./data-source";
import { CheckBox } from "@syncfusion/ej2-buttons";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-toolbar': ToolbarComponent
  },
  data: function() {
    return {
      data: orderDetails,
      filterSettings: { type: 'Excel' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true, minLength: 5 },
      freightrules:  { required: true, min: 0 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      selectOptions: { type: 'Multiple', mode: 'Row', allowColumnSelection: false },
      items: [{text: 'Multiple', cssClass: 'e-gtype', id: 'type'}, {text: 'Row', disabled: false, cssClass: 'e-gmode', id: 'mode'},
      {id: 'column', type: 'Input', template: new CheckBox({ label: 'Enable Column Selection', checked: false })}]
    };
  },
  methods: {
      onChange(e: ClickEventArgs): void {
        let option = (this as any).selectOptions;
        let mode: string = option.mode;
        let type: string = option.type;
        let column: boolean = option.allowColumnSelection;
        if (e.item.id === 'mode') {
            mode = e.item.text === 'Row' ? 'Cell' : 'Row';
            (this as any).items = [{text: type, cssClass: 'e-gtype', id: 'type'}, {text: mode, disabled: column,cssClass: 'e-gmode', id: 'mode'},
            {id: 'column', type: 'Input', template: new CheckBox({ label: 'Enable Column Selection', checked: column })}];
        } else if (e.item.id === 'type') {
            type = e.item.text === 'Multiple' ? 'Single' : 'Multiple';
            (this as any).items = [{text: type, cssClass: 'e-gtype', id: 'type'}, {text: mode , disabled: column,cssClass: 'e-gmode', id: 'mode'},
            {id: 'column', type: 'Input', template: new CheckBox({ label: 'Enable Column Selection', checked: column})}];
        } else {
           ((<any>this).$refs.grid.ej2Instances as any).clearSelection();
           column = !column;
           (this as any).items = [{text: type, cssClass: 'e-gtype', id: 'type'}, {text: mode, disabled: column, cssClass: 'e-gmode', id: 'mode'},
           {id: 'column', type: 'Input', template: new CheckBox({ label: 'Enable Column Selection', checked: column })}];
        }
        (this as any).selectOptions = {mode: mode, type: type, allowColumnSelection: column};
    },
    selectingEvent(e: any): void {
      if(((<any>this).$refs.grid.ej2Instances as any).selectionSettings.allowColumnSelection){
         e.cancel = true;
        }
    }
  },
  provide: {
      grid: [Page, Sort, Toolbar, Edit, Filter]
  }
}
</script>