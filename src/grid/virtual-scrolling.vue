<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample highlights row and column virtualization in the Grid component, allowing efficient rendering and smooth scrolling of large datasets with excellent performance, along with full CRUD support and column templates.
        </p>
    </div>
    <div>
        <div class='div-button'>
            <ejs-button ref="loadbtn" @click='onClick' cssClass='e-info'>Load 100K Data</ejs-button>
            <span id="popup" :style="display">
                <span id="gif" class="imagepop"></span>
            </span>
            <span id="performanceTime">{{timeTaken}}</span>
        </div>
        <ejs-grid id="VirtualScroll" ref='grid' :dataSource="virtualData" :enableVirtualization='true' :enableColumnVirtualization='true' height=400 :rowHeight='50' :dataBound='hide' :load='load' :editSettings='editSettings' :toolbar='toolbar' :clipMode="'EllipsisWithTooltip'">
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='110' :isPrimaryKey='true' :validationRules='validationRule'></e-column>
              <e-column field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='ShipDate' headerText='Ship Date' width='140' format='yMd' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='OrderStatus' headerText='Order Status' width='140' textAlign='Center' editType='dropdownedit' :template="'orderStatusTemplate'" :validationRules='validationRule'></e-column>
              <e-column field='Priority' headerText='Priority' width='120' textAlign='Center' editType='dropdownedit' :template="'priorityTemplate'" :validationRules='validationRule'></e-column>
              <e-column field='CustomerName' headerText='Customer Name' width='190' :validationRules='validationRule'></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width='110' visible='false'></e-column>
              <e-column field='Email' headerText='Email' width='200'></e-column>
              <e-column field='Phone' headerText='Phone Number' width='140' textAlign='Right'></e-column>
              <e-column field='ShipAddress' headerText='Ship Address' width='180'></e-column>
              <e-column field='ShipCity' headerText='Ship City' width='120'></e-column>
              <e-column field='ShipState' headerText='Ship State Code' width='130'></e-column>
              <e-column field='ShipPostalCode' headerText='Ship Postal Code' width='130' textAlign='Right'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
              <e-column field='ProductName' headerText='Product Name' width='250'></e-column>
              <e-column field='ProductID' headerText='Product ID' width='110' visible='false'></e-column>
              <e-column field='Category' headerText='Category' width='120'></e-column>
              <e-column field='Warehouse' headerText='Ware house' width='110' visible='false' editType='dropdownedit'></e-column>
              <e-column field='InventoryCount' headerText='Inventory Count' width='150' textAlign='Right' visible='false'></e-column>
              <e-column field='Quantity' headerText='Quantity' width='100' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='UnitPrice' headerText='Unit Price' width='110' format='C2' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='Discount' headerText='Discount (%)' width='120' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='Tax' headerText='Tax (%)' width='100' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='SubTotal' headerText='Sub Total' width='110' format='C2' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='TaxAmount' headerText='Tax Amount' width='110' format='C2' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='ShipFee' headerText='Ship Fee' width='120' format='C2' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='TotalAmount' headerText='Total Amount' width='120' format='C2' textAlign='Right' editType='numericedit' :editParams='{ showSpinButton: false }'></e-column>
              <e-column field='PaymentMethod' headerText='Payment Method' width='140' editType='dropdownedit' :template="'paymentMethodTemplate'" :validationRules='validationRule'></e-column>
              <e-column field='PaymentStatus' headerText='Payment Status' width='140' textAlign='Center' editType='dropdownedit' :template="'paymentStatusTemplate'" :validationRules='validationRule'></e-column>
              <e-column field='Rating' headerText='Delivery Rating' width='160' textAlign='Center' editType='dropdownedit' :template="'ratingTemplate'" :visible='false'></e-column>
            </e-columns>
            <template v-slot:ratingTemplate="{data}">
              <div>
                <ejs-rating :value="data.Rating" cssClass="custom-rating" readOnly=true></ejs-rating>
              </div>
            </template>
            <template v-slot:paymentMethodTemplate="{data}">
              <div class="e-payment-info">
                <img :src="`src/grid/images/payment/${data.PaymentMethod}.svg`" :alt="data.PaymentMethod"/>
                <span>{{ data.PaymentMethod }}</span>
              </div>
            </template>
            <template v-slot:orderStatusTemplate="{data}">
              <div>
                <div v-if="data.OrderStatus === 'Delivered'" class="virtual-statustemp e-deliveredcolor">
                  <span class="virtual-statustxt e-deliveredcolor">Delivered</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Shipped'" class="virtual-statustemp e-shippedcolor">
                  <span class="virtual-statustxt e-shippedcolor">Shipped</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Packed'" class="virtual-statustemp e-packedcolor">
                  <span class="virtual-statustxt e-packedcolor">Packed</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Processing'" class="virtual-statustemp e-processingcolor">
                  <span class="virtual-statustxt e-processingcolor">Processing</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Canceled'" class="virtual-statustemp e-cancelcolor">
                  <span class="virtual-statustxt e-cancelcolor">Canceled</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Returned'" class="virtual-statustemp e-returnedcolor">
                  <span class="virtual-statustxt e-returnedcolor">Returned</span>
                </div>
                <div v-else-if="data.OrderStatus === 'Ordered'" class="virtual-statustemp e-orderedcolor">
                  <span class="virtual-statustxt e-orderedcolor">Ordered</span>
                </div>
              </div>
            </template>
            <template v-slot:paymentStatusTemplate="{data}">
              <div>
                <div v-if="data.PaymentStatus === 'Paid'" class="virtual-statustemp e-paidcolor">
                  <span class="virtual-statustxt e-paidcolor">Paid</span>
                </div>
                <div v-else-if="data.PaymentStatus === 'Pending'" class="virtual-statustemp e-pendingcolor">
                  <span class="virtual-statustxt e-pendingcolor">Pending</span>
                </div>
                <div v-else-if="data.PaymentStatus === 'Refunded'" class="virtual-statustemp e-refundcolor">
                  <span class="virtual-statustxt e-refundcolor">Refunded</span>
                </div>
                <div v-else-if="data.PaymentStatus === 'Failed'" class="virtual-statustemp e-failedcolor">
                  <span class="virtual-statustxt e-failedcolor">Failed</span>
                </div>
              </div>
            </template>
            <template v-slot:priorityTemplate="{data}">
              <div>
                <div v-if="data.Priority === 'High'" class="virtual-statustemp e-highcolor">
                  <span class="virtual-statustxt e-highcolor">High</span>
                </div>
                <div v-else-if="data.Priority === 'Low'" class="virtual-statustemp e-lowcolor">
                  <span class="virtual-statustxt e-lowcolor">Low</span>
                </div>
                <div v-else-if="data.Priority === 'Medium'" class="virtual-statustemp e-mediumcolor">
                  <span class="virtual-statustxt e-mediumcolor">Medium</span>
                </div>
                <div v-else-if="data.Priority === 'Critical'" class="virtual-statustemp e-criticalcolor">
                  <span class="virtual-statustxt e-criticalcolor">Critical</span>
                </div>
              </div>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
        The virtual scrolling feature in the Grid renders only the rows and columns that are currently visible in the viewport, rather than loading the entire dataset into the DOM. This approach significantly improves performance when working with large data sources by reducing the number of DOM elements.
      </p>
      <p>
        To enable row virtualization, set the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enablevirtualization">
        enableVirtualization </a></code> property to <code>true</code>. For column virtualization, set the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enablecolumnvirtualization">
        enableColumnVirtualization</a></code> property to <code>true</code>. When using virtualization, it is essential to define the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#height">
        height</a></code> property so that the Grid can accurately calculate the number of visible rows. For seamless scrolling, set <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/loadeventargs#enableSeamlessScrolling">args.enableSeamlessScrolling</a></code> as <code>true</code> in the Grid's <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#load">load</a></code> event. This ensures smooth vertical and horizontal transitions, providing a smoother experience during fast scrolling when virtualization is enabled.
    </p>
    <p>
        In this example, click the "Load 100K Data" button to bind a dataset containing 100,000 rows and 30 columns. Then, scroll vertically and horizontally to experience the virtualized rendering in action. Full data editing support is available with the virtualization feature.
    </p>
    <p><strong>Injecting Module:</strong></p>
    <p>Features of the Grid component are organized into individual, feature-specific modules. To use Virtual scrolling functionality,
    inject the <code>VirtualScroll</code> module into the <code>provide</code> section.</p>
    <p>
      For more detailed information about virtual scrolling, refer to this 
      <a target="_blank" 
      href="https://ej2.syncfusion.com/vue/documentation/grid/scrolling/virtual-scrolling">
      documentation</a>.
    </p>
    </div>
</div>
</template>
<style scoped>
@import "../../styles/Grid/virtual-scrolling.css";
</style>
<script lang="ts">
import { GridComponent, ColumnsDirective, ColumnDirective, VirtualScroll, Edit, Toolbar, LoadEventArgs } from "@syncfusion/ej2-vue-grids";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data'; 
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { RatingComponent } from '@syncfusion/ej2-vue-inputs';
import { virtualOrderData, createVirtualOrderData } from './data-source';
export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-rating': RatingComponent
  },
  data: function() {
    return {
        flag: true, date1: 0, date2: 0, virtualData: [], timeTaken: 'Time Taken: 0 ms',
        display: {'display': 'none'},
        editSettings: { allowEditing: true, allowDeleting: true, newRowPosition: 'Top' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        validationRule: { required: true },
    };
  },
  methods: {
    show: function() {
        (this as any).display = {'display': 'inline-block'};
    },
    hide: function() {
      if ((this as any).flag && (this as any).date1) {
        (this as any).date2 = new Date().getTime();
        (this as any).timeTaken = "Time Taken: " + ((this as any).date2 - (this as any).date1) + "ms";
        ((this as any).$refs.grid).ej2Instances.editSettings.allowAdding= true;
        (this as any).flag = false;
      }
      (this as any).display = {'display': 'none'};
    },
    onClick: function (args: any) {
      const loadButton = (((this as any).$refs.loadbtn) as any)?.ej2Instances;           
      loadButton.disabled = true;    
      if (!virtualOrderData.length) {
        (this as any).show();      
        createVirtualOrderData();
        (this as any).virtualData = virtualOrderData;
        (this as any).date1 = new Date().getTime();
        (this as any).flag = true;
      }
    },
    load: function (args: LoadEventArgs) {
      if (((this as any).$refs.grid).ej2Instances.enableVirtualization) {
        args.enableSeamlessScrolling = true;
      }
    }
  },
  provide: {
      grid: [VirtualScroll, Toolbar, Edit]
  }
};
</script>