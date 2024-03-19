<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates dynamic show hide columns feature of Grid. Click column name from the toolbar to toggle visibility.
        </p>
    </div>
    <div>
        <div class='e-mastertext'>Select column name to toggle visibility</div>
        <ejs-toolbar ref='toolbar' class='e-gridlist' :clicked="onClicked">
            <e-items>
                <e-item text='Order ID'></e-item>
                <e-item text='Customer Name'></e-item>
                <e-item text='Order Date'></e-item>
                <e-item text='Freight'></e-item>
                <e-item text='Shipped Date'></e-item>
                <e-item text='Ship Country'></e-item>
            </e-items>
        </ejs-toolbar>
        <br/>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :dataBound="dataBound" :allowSorting='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid column can be showed/hidden dynamically using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumns">showColumns
        </a></code> and <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#hidecolumns">hideColumns
        </a></code> method of the Grid.</p>
        <p>In this demo, the columns can be showed and hidden by clicking the column name in the toolbar. And the column`s visibility is toggled based on the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext">columns->headerText
        </a></code> value.</p>
        <br>
        <p>The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#visible">columns->visible
        </a></code> property specifies the visibility of a column. To hide a column at the initial rendering, set the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#visible">columns->visible
        </a></code> property to false.</p>
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

.e-ghidden {
    opacity: 0.35;
}

.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    opacity: 0.87;
    padding: 1em;
}

</style>
<!-- custom code end -->
<script lang="ts">
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Sort } from '@syncfusion/ej2-vue-grids';
import { ToolbarComponent, ItemDirective, ItemsDirective, ClickEventArgs} from '@syncfusion/ej2-vue-navigations';
import { orderDetails } from './data-source';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective
  },
  data: () => {
      return {
        data: orderDetails,
        flag: false
        }
  },
  methods: {
      onClicked: function(e: ClickEventArgs) {
        if (!(this as any).flag) { return; }

        let element: HTMLElement = <HTMLInputElement>e.originalEvent.target;

        if (!element.classList.contains('e-tbar-btn-text') && !element.classList.contains('e-tbar-btn')) {
            return;
        }

        element = <HTMLElement>(element.tagName === 'BUTTON' ? element.firstElementChild : element);
        (this as any).flag = false;
        let hidden: boolean = element.classList.contains('e-ghidden');
        let classFn: Function = hidden ? removeClass : addClass;
        const visibleColumns: HTMLElement[] = Array.from(((this as any).$refs.toolbar as any).$el.getElementsByClassName('e-tbar-btn-text'))
        .filter((item) => !((item as HTMLElement).classList.contains('e-ghidden'))) as HTMLElement[];
        const isLastVisibleColumn = visibleColumns.length === 1 && visibleColumns[0].parentElement === element.parentElement;   

        if (hidden) {
          classFn([element], 'e-ghidden');
          ((this as any).$refs.grid as any).showColumns(element.innerHTML);
        } else {
          if (isLastVisibleColumn) {
            alert("At least one column should be visible.");
            (this as any).flag = true;
            return;
          }
          classFn([element], 'e-ghidden');
          ((this as any).$refs.grid as any).hideColumns(element.innerHTML);
        }
        (this as any).flag = true;
    },
    dataBound: function() {
        (this as any).flag = true;
    }
  },
  provide: {
      grid: [Page, Sort]
  }
}
</script>