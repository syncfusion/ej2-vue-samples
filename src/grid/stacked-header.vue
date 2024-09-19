<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the stacked header and resize feature. In this sample, we have shown multiple level of column headers.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :allowResizing='true' :allowSorting='true' :allowMultiSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='130' textAlign="Center" minWidth='10' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column headerText='Order Details' :columns='orderColumns'></e-column>
                <e-column headerText='Ship Details' :columns='shipColumns'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid columns can be stacked/grouped in order to show multiple level of column headers. It can be done by
            setting the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel#columns">
        columns->columns
        </a></code> property.
        </p>
        <p>The Grid columns can be resized by clicking and dragging at the right edge of columns header. To enable column, resize behavior, set <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/api/grid#allowresizing">allowResizing
            </a></code> property as true. You can also prevent the resize of the particular column by setting
            <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/api/grid/column#allowresizing">columns->allowResizing
            </a></code> as false in columns definition.
        </p>
        <p>
            In this demo, the columns <strong>CustomerName, OrderDate</strong> are grouped under <strong>Order Details</strong>,
            the columns <strong>ShippedDate, ShipCountry, Freight</strong> are grouped under <strong>Ship Details</strong>. 
        </p>
        <p>
            More information on the stacked header configuration can be found in this 
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-resizing#resize-stacked-column">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Resize, Sort, Toolbar, Edit, Filter } from '@syncfusion/ej2-vue-grids';
import { orderDetails } from './data-source';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
      return {
        data: orderDetails,
        filterSettings: { type: 'Excel' },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        orderidrules: { required: true, number: true },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        orderColumns: [
            { 
                field: 'CustomerID',
                headerText: 'Customer Name',
                width: 160,
                minWidth:30,
            },
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                textAlign: 'Right',
                width: 140,
                format: 'yMd',
                minWidth: 50,
                editType: 'datepickeredit',
            },
        ],
        shipColumns: [
            {
                field: 'ShippedDate',
                headerText: 'Shipped Date',
                textAlign: 'Right',
                format: 'yMd',
                width: 160,
                minWidth: 40,
                editType: 'datepickeredit',
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 140,
                minWidth: 60,
                editType: 'dropdownedit',
            },
            {
                field: 'Freight',
                headerText: 'Freight Charges($)',
                textAlign: 'Right',
                width: 200,
                format: 'C2',
                minWidth: 40,
                editType: 'numericedit',
                validationRules: { required: true, min: 0 },
            }
        ]
        }
  },
  provide: {
      grid: [Page, Resize, Sort, Toolbar, Edit, Filter]
  }
}
</script>
