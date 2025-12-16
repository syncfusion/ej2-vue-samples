<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the conditional row selection of the Data Grid using checkbox selection.
            It allows end-users to select only specific rows based on certain conditions.</p>
    </div>
    <div>
        <ejs-grid id="ConditionalSelection" :dataSource="data" :height="400" :enableVirtualization="true" :isRowSelectable='isRowSelectable' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :allowSelection="true" :selectionSettings="selectOptions" :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column type='checkbox' width='50' :allowEditing='false'></e-column>
                <e-column field='OrderID' isPrimaryKey='true' headerText='Order ID' width='110' :allowEditing='false'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='170' :allowEditing='false'></e-column>
                <e-column field='Product' headerText='Product' width='130' :template="'productTemplate'" :allowEditing='false'></e-column>
                <e-column field='Amount' headerText='Amount' width='110' format='C2' textAlign='Right' :allowEditing='false'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right' :allowEditing='false'></e-column>
                <e-column field='Status' headerText='Status' width='130' :template="'statusTemplate'" editType='dropdownedit'></e-column>
            </e-columns>
            <template v-slot:productTemplate="{ data }">
                <div class="e-product-info">
                    <img :src="'src/grid/images/product/' + data.Product + '.png'" :alt="data.Product" />
                    <span>{{ data.Product }}</span>
                </div>
            </template>
            <template v-slot:statusTemplate="{ data }">
                <div class="e-status-info">
                    <img :src="'src/grid/images/status/' + data.Status + '.svg'" :alt="data.Status" />
                    <span>{{ data.Status }}</span>
                </div>
            </template>
        </ejs-grid>
    </div>

    <div id="description">
        <p>In this demo, conditional row selection is implemented using the
            <code><a target="_blank" className="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/#isrowselectable">isRowSelectable</a></code> callback function.
            This callback function executes before the grid loads data, evaluates each row, and returns <strong>false</strong> for orders
            with <strong>Delivered</strong> or <strong>Canceled</strong> status.</p>

        <p>Selection is persisted by enabling <code><a target="_blank" className="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#persistselection">
                selectionSettings -> persistSelection</a></code>. With this setting, selected rows remain checked across all operations. Persist selection
            requires at least one column to be defined as a primary key using the <code><a target="_blank" className="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#isprimarykey">
                columns -> isPrimaryKey</a></code> property.</p>
        <p>
            More information on the conditional row selection can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/selection/row-selection"> documentation section</a>.
        </p>
    </div>

</div>
</template>
<style scoped>
    #ConditionalSelection .e-gridcontent .e-product-info,
    #ConditionalSelection .e-gridcontent .e-status-info {
        display: flex;
        align-items: center;
    }

    #ConditionalSelection .e-gridcontent .e-product-info img,
    #ConditionalSelection .e-gridcontent .e-status-info img {
        margin-right: 5px;
    }

    #ConditionalSelection .e-gridcontent .e-product-info img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .material3-dark #ConditionalSelection .e-gridcontent .e-status-info img,
    .bootstrap5\.3-dark #ConditionalSelection .e-gridcontent .e-status-info img,
    .fluent2-dark #ConditionalSelection .e-gridcontent .e-status-info img,
    .tailwind3-dark #ConditionalSelection .e-gridcontent .e-status-info img,
    .fluent2-highcontrast #ConditionalSelection .e-gridcontent .e-status-info img,
    .fluent-dark #ConditionalSelection .e-gridcontent .e-status-info img,
    .highcontrast #ConditionalSelection .e-gridcontent .e-status-info img {
       filter: brightness(0) invert(1);
    }

    .fluent2-highcontrast #ConditionalSelection .e-gridcontent .e-row:hover .e-status-info img,
    .fluent2-highcontrast #ConditionalSelection .e-gridcontent .e-rowcell.e-selectionbackground .e-status-info img {
        filter: none;
    }
</style>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, VirtualScroll, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { ordersTrackData } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  }, 
  data: () => {
    return {
      data: ordersTrackData,
      filterSettings: { type: 'Excel' },
      selectOptions: { persistSelection: true, checkboxOnly: true },
      toolbar: ['Edit', 'Update', 'Cancel'],
      editSettings: { allowEditing: true},
    };
  },
  methods: {
        isRowSelectable: function (data: Object): boolean {
            if ((<{ Status?: string }>data).Status === "Canceled" || (<{ Status?: string }>data).Status === "Delivered") {
                return false;
            }
            return true;
        }
  },
  provide: {
      grid: [VirtualScroll, Edit, Toolbar, Sort, Filter]
  }
}
</script>