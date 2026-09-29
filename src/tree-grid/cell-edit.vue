<template>
<div class="col-lg-12 control-section">
      <div >
    <ejs-treegrid
        :dataSource="data"
        idMapping="productId"
        parentIdMapping="parentId"
        :treeColumnIndex="1"
        :allowPaging="true"
        :toolbar="toolbar"
        :editSettings="editSettings"
        height="500"
    >
    <e-columns>
      <e-column
        field="productId"
        headerText="Product ID"
        :isPrimaryKey="true"
        textAlign="Right"
        width="100"
        :validationRules="{ required: true }"
      />
      <e-column field="productName" headerText="Product Name" width="150" :validationRules="{ required: true }" />
      <e-column field="supplier" headerText="Supplier" width="180" :validationRules="{ required: true }" />
      <e-column
        field="stockQty"
        headerText="Stock Qty"
        textAlign="Right"
        width="90"
        :validationRules="{ number: true }"
      />
      <e-column
        field="unitPrice"
        headerText="Unit Price (₹)"
        textAlign="Right"
        width="120"
        :validationRules="{ number: true }"
      />
      <e-column
        field="status"
        headerText="Status"
        width="150"
        editType="dropdownedit"
        :validationRules="{ required: true }"
        :template="'statusTemplate'"
      />
    </e-columns>

    <template v-slot:statusTemplate="{ data }">
      <span
        :class="[
          'status-badge',
          data.status === 'Active'
            ? 'status-active'
            : data.status === 'Low Stock'
            ? 'status-low-stock'
            : data.status === 'Pending Restock'
            ? 'status-pending'
            : data.status === 'Out of Stock'
            ? 'status-out-stock'
            : 'status-discontinued',
        ]"
      >
        {{ data.status }}
      </span>
    </template>
  </ejs-treegrid>
      </div>
   <div id="action-description">
      <p>
        This sample demonstrates cell editing in the TreeGrid, allowing users to quickly update individual field values
        directly within the data view.
    </p>
    </div>
    <div id='description'>
          <p>
        Cell editing enables users to modify one cell at a time without opening a separate edit form. This mode is
        enabled by setting
        <code><a target="_blank" class="code"
      href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/editsettings#mode">editSettings.mode</a></code>
        double-clicking it, and changes are saved when the user presses the <strong>Enter</strong> key or shifts focus
        to another cell.
    </p>

    <p>
        This mode provides a streamlined way to update data while working within the TreeGrid. It can be used together
        with features such as validation, custom editors, and formatting to deliver an efficient editing experience.
    </p>

    <p>Injecting Module:</p>
          <p>Tree Grid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
             <code>Edit</code> module into the <code>services</code>.</p>

    <p>
        More information about TreeGrid cell editing can be found in the
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/treegrid/editing/cell-editing">
            documentation section</a>.
    </p>
    <p>
        Looking for the full Vue Tree Grid component overview, features, pricing, and documentation? Visit our 
        <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-tree-grid">Vue Tree Grid component</a> page.
    </p>
</div>
</div>
</template>
<style>
  .status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.status-active {
  background: #dcfce7;
  color: #166534;
}

.status-low-stock {
  background: #fef3c7;
  color: #92400e;
}

.status-pending {
  background: #dbeafe;
  color: #1d4ed8;
}

.status-out-stock {
  background: #fee2e2;
  color: #991b1b;
}

.status-discontinued {
  background: #e5e7eb;
  color: #374151;
}

</style>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { retailInventoryData } from "./data-source";

export default  {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: retailInventoryData,
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Cell' },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel']
  };
  },
   provide : {
      treegrid: [Edit, Page, Toolbar]
    },
     methods:{
    }
}
</script>