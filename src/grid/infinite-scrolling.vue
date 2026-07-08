<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample showcases the infinite scrolling capability of the Grid, designed to handle large datasets seamlessly. Click the “Load 100K Data” button to populate the Grid with data, then scroll vertically and horizontally to dynamically load rows and columns, ensuring smooth navigation.</p>
    </div>
    <div>
        <div class='div-button'>
            <ejs-button ref="loadbtn" @click='onClick' cssClass='e-info'>Load 100K Data</ejs-button>
            <span id="popup" :style="displayStyle">
                <span id="gif" class="image"></span>
            </span>
            <span id="performanceTime">{{timeTaken}}</span>
        </div>

        <ejs-grid ref='grid' id='GridInfiniteScroll' :dataSource="salesData" :enableInfiniteScrolling='true' :enableColumnVirtualization='true' :allowFiltering='true' :allowSorting='true' :filterSettings='filterSettings' height=400 :rowHeight='40' :pageSettings='pageSettings' :dataBound='hide' :load='load' :aggregates='aggregates'>
            <e-columns>
              <e-column field='ProductId' headerText='Product ID' width='130' textAlign='Right' :isPrimaryKey='true'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='210'></e-column>
                <e-column field='GrossAmount' headerText='Gross Amount' width='180' textAlign='Right' format='C2'></e-column>
                <e-column field='NetAmount' headerText='Net Amount' width='180' textAlign='Right' format='C2'></e-column>
                <e-column field='ProfitMargin' headerText='Profit (%)' textAlign='Right' width='180'></e-column>
                <e-column field='AchievementPercent' headerText='Achievement (%)' textAlign='Right' width='190'></e-column>
                <e-column field='SalesQty' headerText='Sales Quantity' width='150' textAlign='Right'></e-column>
                <e-column field='UnitPrice' headerText='Unit Price' width='120' textAlign='Right' format='C2'></e-column>
                <e-column field='Month' headerText='Month' width='120'></e-column>
                <e-column field='Category' headerText='Category' width='130'></e-column>
                <e-column field='SubCategory' headerText='Sub Category' width='150' :visible='false'></e-column>
                <e-column field='Brand' headerText='Brand' width='120'></e-column>
                <e-column field='City' headerText='City' width='130'></e-column>
                <e-column field='State' headerText='State' width='120'></e-column>
                <e-column field='Country' headerText='Country' width='160'></e-column>
                <e-column field='Region' headerText='Region' width='130'></e-column>
                <e-column field='Discount' headerText='Discount (%)' width='140' textAlign='Right' format='N0'></e-column>
                <e-column field='Tax' headerText='Tax (%)' width='130' textAlign='Right' format='N2'></e-column>
                <e-column field='ShippingCost' headerText='Shipping Cost' width='160' textAlign='Right' format='C2'></e-column>
                <e-column field='Profit' headerText='Profit' width='160' textAlign='Right' format='C2'></e-column>
                <e-column field='Target' headerText='Target' width='120' textAlign='Right' format='C2'></e-column>
                <e-column field='Forecast' headerText='Forecast' width='150' textAlign='Right' format='C2'></e-column>
                <e-column field='SalesRep' headerText='Sales Reporter' width='150'></e-column>
                <e-column field='Manager' headerText='Manager' width='140'></e-column>
                <e-column field='Channel' headerText='Channel' width='120'></e-column>
                <e-column field='Quarter' headerText='Quarter' width='120' textAlign='Center'></e-column>
                <e-column field='Year' headerText='Year' width='100' textAlign='Right'></e-column>
                <e-column field='ReturnQty' headerText='Return Quantity' width='160' textAlign='Right'></e-column>
                <e-column field='ReturnAmount' headerText='Return Amount' width='160' textAlign='Right' format='C2'></e-column>
                <e-column field='Remarks' headerText='Remarks' width='220'></e-column>
            </e-columns>


        </ejs-grid>
    </div>

     <div id="description">
    <p>
        Infinite scrolling uses a lazy loading mechanism, where data is fetched automatically as the user scrolls to the end of the Grid. This behavior is enabled by setting the
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enableinfinitescrolling">enableInfiniteScrolling</a></code> property to <code>true</code> and defining the
        Grid's <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#height">height</a></code> property.
    </p>
    <p>
        The Grid also supports column virtualization, which renders only the visible columns to improve performance when
        working with a large number of columns. Column virtualization can be enabled by setting the
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enablecolumnvirtualization">enableColumnVirtualization</a></code> property to <code>true</code>.
        Additionally, column virtualization integrates seamlessly with aggregate operations, ensuring that calculations like
        <code>Sum</code>, <code>Average</code>, etc., remain accurate and are displayed correctly during horizontal scrolling.
    </p>
    <p><strong>Injecting Module:</strong></p>
    <p>
        Features of the Grid component are organized into individual, feature-specific modules. To use infinite
        scrolling and column virtualization with aggregates, inject the required modules using
        <code>Grid.Inject(InfiniteScroll, VirtualScroll, Aggregate)</code>.
    </p>
    <p>
        More information on the infinite scrolling can be found in the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/scrolling/infinite-scrolling">
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
import { createApp } from 'vue';
import { GridComponent, ColumnsDirective, ColumnDirective, InfiniteScroll, VirtualScroll, Aggregate, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { LoadEventArgs } from "@syncfusion/ej2-vue-grids";
import { salesDataSource, createSalesDataSource } from './data-source';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
        flag: true,
        date1: 0,
        date2: 0,
        salesData: [],
        pageSettings: { pageSize: 50 },
        filterSettings: { type: 'CheckBox', enableInfiniteScrolling: true },
        timeTaken: 'Time Taken: 0 ms',
        displayStyle: {'display': 'none'},
        aggregates: [
          {
            columns: [
          {
            field: 'SalesQty',
            type: 'Sum',
            format: 'N0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'GrossAmount',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'GrossAmount',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'NetAmount',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'ShippingCost',
            type: 'Sum',
            format: 'C0',
             footerTemplate: '${Sum}',
          },
          {
            field: 'Profit',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'Forecast',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'ReturnQty',
            type: 'Sum',
            format: 'N0',
            footerTemplate: '${Sum}',
          },
          {
            field: 'ReturnAmount',
            type: 'Sum',
            format: 'C0',
            footerTemplate: '${Sum}',
          },
        ],
          }
        ]
    };
  },
  methods: {
    show: function() {
        (this as any).displayStyle = {'display': 'inline-block'};
    },
    hide: function() {
      if ((this as any).flag && (this as any).date1) {
        (this as any).date2 = new Date().getTime();
        (this as any).timeTaken = "Time Taken: " + ((this as any).date2 - (this as any).date1) + "ms";
        (this as any).flag = false;
      }
      (this as any).displayStyle = {'display': 'none'};
    },
    onClick: function (args: any) {
      const loadButton = (((this as any).$refs.loadbtn) as any)?.ej2Instances;           
      loadButton.disabled = true;    
      if (!salesDataSource.length) {
        (this as any).show();      
        createSalesDataSource();
        (this as any).salesData = salesDataSource;
        (this as any).date1 = new Date().getTime();
        (this as any).flag = true;
      }
    },
    load: function (args: LoadEventArgs) {
      if (((this as any).$refs.grid).ej2Instances.enableInfiniteScrolling) {
        args.enableSeamlessScrolling = true;
      }
    }
  },
  provide: {
      grid: [InfiniteScroll, VirtualScroll, Aggregate, Sort, Filter]
  }
};
</script>

<style scoped>
#GridInfiniteScroll .image { position: absolute; background-repeat: no-repeat; 
    background-image: url('./images/spinner.gif'); 
    background-position: center; width: 16px; height: 28px; }

.e-bigger #GridInfiniteScroll .image {
height: 36px;
}

#GridInfiniteScroll #popup {
position: absolute;
background-color: transparent;
display: none;
z-index: 100;
}
#GridInfiniteScroll .div-button {
   margin: 5px 5px 5px 0;
}

#GridInfiniteScroll #performanceTime {
    float: right;
    margin-top: 3px;
}
</style>