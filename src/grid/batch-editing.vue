<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the batch editing capabilities of the Grid, allowing users to perform multiple CRUD operations and save them to the data source in a single action. It showcases efficient data editing with bulk update and undo/redo support.
        </p>
    </div>
    <ejs-grid ref='grid' id='GridBatchEditing' :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :aggregates='aggregates' :selectionSettings='selectionSettings' :clipMode="'EllipsisWithTooltip'" :height="400" :cellEdit="cellEdit" :beforeBatchSave="beforeBatchSave">
        <e-columns>
            <e-column field='ID' headerText='ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='idRules'></e-column>
            <e-column field='Product' headerText='Product Name' width='180' editType='dropdownedit' :template="'categoryDetailTemplate'" :validationRules='productnamerules' :defaultValue="'MacBook Pro'"></e-column>
            <e-column field='VendorA' headerText='Vendor A (units)' width='160' textAlign='Right' editType='numericedit' :edit='editparamsA'></e-column>
            <e-column field='VendorB' headerText='Vendor B (units)' width='160' textAlign='Right' editType='numericedit' :edit='editparamsB'></e-column>
            <e-column field='VendorC' headerText='Vendor C (units)' width='160' textAlign='Right' editType='numericedit' :edit='editparamsC'></e-column>
            <e-column field='VendorD' headerText='Vendor D (units)' width='160' textAlign='Right' editType='numericedit' :edit='editparamsD'></e-column>
            <e-column field='UnitPrice' headerText='Unit Price (units)' width='160' textAlign='Right' format='C2' editType='numericedit' :edit='editparamsPrice' :validationRules='priceRules'></e-column>
        </e-columns>
        <template v-slot:categoryDetailTemplate="{data}">
            <div v-if="data.Product && (data.Category || getCategoryFromProduct(data.Product))">
                <div style="font-weight: 600; font-size: 14px;">{{ data.Product }}</div>
                <span class="e-category-badge" :class="getCategoryClass(data.Category || getCategoryFromProduct(data.Product))">{{ data.Category || getCategoryFromProduct(data.Product) }}</span>
            </div>
        </template>
    </ejs-grid>

     <div id="description">
        <p>
            Batch mode is enabled by setting <code><a target="_blank" class="code"
               href="https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode">editSettings.mode</a></code> to
            <code>Batch</code>. The Grid also supports undo and redo functionality in this mode, enabling users to reverse or reapply changes during an editing session. This feature is enabled by setting
            <code><a target="_blank" class="code"
               href="https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#enableundoredo">editSettings.enableUndoRedo</a></code> to <code>true</code> and include the <code>Undo</code> and
            <code>Redo</code> items in the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#toolbar">toolbar</a></code>.
        </p>
        <p>
            With Batch editing, bulk data changes can be made efficiently. Editing begins by double‑clicking a cell and
            modifying its value. The edited cell is highlighted when moving to another cell, making changes easy to track.
            All modifications remain local until they are explicitly saved.The modified records are saved to the data source
            by clicking the toolbar's "Update" button, which performs a bulk save operation.
        </p>
        <p><strong>Injecting Module:</strong></p>
        <p>
            Features of the Grid component are organized into individual, feature-specific modules. To use the editing and
            toolbar functionality, inject the required modules using <code>Grid.Inject(Edit, Toolbar)</code>.
        </p>
        <p>
            More information on the batch editing can be found in this 
            <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/grid/editing/batch-editing">
            documentation section</a>.
      </p>
      <p>
        Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit our
        <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">
            Vue Data Grid component</a> page.
    </p>
    </div>
</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Toolbar, Edit, Page, Sort, Filter, Aggregate } from "@syncfusion/ej2-vue-grids";
import { inventoryStoreData } from "./data-source";
export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  
  data() {
    return {
      data: inventoryStoreData ,
      filterSettings: { type: 'CheckBox' },
      selectionSettings: { mode: 'Cell', type: 'Multiple' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
      editparamsA: { params: { showSpinButton: false } },
      editparamsB: { params: { showSpinButton: false } },
      editparamsC: { params: { showSpinButton: false } },
      editparamsD: { params: { showSpinButton: false } },
      editparamsPrice: { params: { showSpinButton: false } },
      pageSettings: {pageCount: 5},
      idRules: { required: true },
      productnamerules: { required: true, minLength: 5 },
      priceRules: { required: true, min: 1 },

      aggregates: [
        {
          columns: [
            {
              type: 'Sum',
              field: 'VendorA',
              format: 'N',
              footerTemplate: 'Total: ${Sum}',
            },
            {
              type: 'Sum',
              field: 'VendorB',
              format: 'N',
              footerTemplate: 'Total: ${Sum}',
            },
            {
              type: 'Sum',
              field: 'VendorC',
              format: 'N',
              footerTemplate: 'Total: ${Sum}',
            },
            {
              type: 'Sum',
              field: 'VendorD',
              format: 'N',
              footerTemplate: 'Total: ${Sum}',
            },
          ],
        },
      ]
    };
  },
  provide: {
      grid: [Toolbar, Edit, Page, Sort, Filter, Aggregate]
  },
  methods: {
    getCategoryClass(category: string): string {
      const categoryMap: { [key: string]: string } = {
        'Electronics': 'e-cat-electronics',
        'Computers': 'e-cat-computers',
        'Accessories': 'e-cat-accessories',
        'Displays': 'e-cat-displays',
        'Networking': 'e-cat-networking',
        'Storage': 'e-cat-storage',
        'Peripherals': 'e-cat-peripherals',
        'IT Asset': 'e-cat-it-asset',
        'IT Infrastructure': 'e-cat-it-infrastructure',
        'Admin': 'e-cat-admin',
        'Security': 'e-cat-security',
        'Facilities': 'e-cat-facilities',
        'Finance': 'e-cat-finance',
        'Sales': 'e-cat-sales',
        'Marketing': 'e-cat-marketing',
        'Training': 'e-cat-training',
      };
      return categoryMap[category] || 'e-cat-default';
    },
    getCategoryFromProduct(productName: string): string {
      var item = inventoryStoreData.find((data: any) => data.Product === productName);
      return item ? item.Category : '';
    },
    cellEdit(args: any): void {
      if (args.type === 'edit' && args.columnName === 'Product') {
        args.cancel = true;
      }
    },
    beforeBatchSave(args: any): void {
      const changes = (this as any).$refs.grid.getBatchChanges();
      if (changes.addedRecords) {
        changes.addedRecords.forEach((row: any) => {
          row.Category = this.getCategoryFromProduct(row.Product);
        });
      }
    }
  }
}
</script>

<style scoped>
  #GridBatchEditing .e-category-badge {
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    min-width: 80px;
    font-size: 11px;
    font-weight: 500;
    color: white;
    margin-top: 6px;
  }

  #GridBatchEditing .e-category-badge.e-cat-it-asset {
    background-color: #4f46e5;
  }

  #GridBatchEditing .e-category-badge.e-cat-it-infrastructure {
    background-color: #10b981;
  }

  #GridBatchEditing .e-category-badge.e-cat-admin {
    background-color: #facc15;
    color: #1f2937;
  }

  #GridBatchEditing .e-category-badge.e-cat-security {
    background-color: #ef4444;
  }

  #GridBatchEditing .e-category-badge.e-cat-facilities {
    background-color: #64748b;
  }

  #GridBatchEditing .e-category-badge.e-cat-finance {
    background-color: #8b5cf6;
  }

  #GridBatchEditing .e-category-badge.e-cat-sales {
    background-color: #ec4899;
  }

  #GridBatchEditing .e-category-badge.e-cat-marketing {
    background-color: #f97316;
  }

  #GridBatchEditing .e-category-badge.e-cat-training {
    background-color: #06b6d4;
  }

  #GridBatchEditing .e-category-badge.e-cat-default {
    background-color: #6b7280;
  }

  #GridBatchEditing .e-category-badge.e-cat-electronics {
    background-color: #f59e0b;
  }

  #GridBatchEditing .e-category-badge.e-cat-computers {
    background-color: #6366f1;
  }

  #GridBatchEditing .e-category-badge.e-cat-accessories {
    background-color: #8b5cf6;
  }

  #GridBatchEditing .e-category-badge.e-cat-displays {
    background-color: #06b6d4;
  }

  #GridBatchEditing .e-category-badge.e-cat-networking {
    background-color: #10b981;
  }

  #GridBatchEditing .e-category-badge.e-cat-storage {
    background-color: #ef4444;
  }

  #GridBatchEditing .e-category-badge.e-cat-peripherals {
    background-color: #ec4899;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-it-asset,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-it-asset {
    background-color: #818cf8;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-it-infrastructure,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-it-infrastructure {
    background-color: #2dd4bf;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-admin,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-admin,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-admin,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-admin,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-admin,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-admin,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-admin {
    background-color: #7c3aed;
    color: #1f2937;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-security,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-security,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-security,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-security,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-security,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-security,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-security {
    background-color: #f87171;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-facilities,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-facilities,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-facilities,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-facilities,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-facilities,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-facilities,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-facilities {
    background-color: #94a3b8;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-finance,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-finance,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-finance,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-finance,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-finance,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-finance,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-finance {
    background-color: #a78bfa;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-sales,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-sales,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-sales,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-sales,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-sales,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-sales,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-sales {
    background-color: #f472b6;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-marketing,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-marketing,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-marketing,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-marketing,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-marketing,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-marketing,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-marketing {
    background-color: #fb923c;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-training,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-training,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-training,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-training,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-training,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-training,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-training {
    background-color: #22d3ee;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-default,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-default,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-default,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-default,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-default,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-default,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-default {
    background-color: #9ca3af;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-electronics,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-electronics,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-electronics,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-electronics,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-electronics,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-electronics,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-electronics {
    background-color: #fbbf24;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-computers,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-computers,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-computers,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-computers,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-computers,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-computers,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-computers {
    background-color: #818cf8;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-accessories,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-accessories,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-accessories,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-accessories,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-accessories,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-accessories,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-accessories {
    background-color: #a78bfa;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-displays,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-displays,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-displays,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-displays,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-displays,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-displays,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-displays {
    background-color: #22d3ee;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-networking,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-networking,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-networking,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-networking,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-networking,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-networking,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-networking {
    background-color: #2dd4bf;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-storage,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-storage,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-storage,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-storage,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-storage,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-storage,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-storage {
    background-color: #f87171;
  }

  .material3-dark #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .bootstrap5_3-dark #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .fluent2-dark #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .tailwind3-dark #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .fluent2-highcontrast #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .fluent-dark #GridBatchEditing .e-category-badge.e-cat-peripherals,
  .highcontrast #GridBatchEditing .e-category-badge.e-cat-peripherals {
    background-color: #f472b6;
  }
</style>