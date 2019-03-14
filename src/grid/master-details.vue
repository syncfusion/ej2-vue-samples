<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the default rendering of the Grid with minimum configuration.</p>
    </div>
    <div>
        <div class='e-mastertext'>Master Grid</div>

    <ejs-grid :dataSource='data' :selectedRowIndex=2 :rowSelected="onRowSelected">
        <e-columns>
            <e-column field='ContactName' headerText='Customer Name' width='150'></e-column>
            <e-column field='CompanyName' headerText='Company Name' width='150'></e-column>
            <e-column field='Address' headerText='Address' width='150'></e-column>
            <e-column field='Country' headerText='Country' width='130'></e-column>
        </e-columns>
    </ejs-grid>

    <div class='e-statustext' v-if="key">Showing orders of Customer: <b>{{key}}</b></div>

    <detailsGrid :selected='key'></detailsGrid>

    </div>

     <div id="description">
        <p>Master-Detail Grid is a use case scenario, in which the details of a Master Grid record, is viewed in
            a separate Grid(Detail Grid) by clicking the particular row.
        </p>
        <p>The steps to achieve this scenario is as follows,</p>
        <ul>
            <li> Get the selected record of Master Grid in the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#rowselected--emittyperowselecteventargs">
        rowSelected
        </a></code> event.</li>
            <li> Filter the data based on the selected record and bind the result to the Detail Grid`s <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#datasource-object---datamanager">
        dataSource
        </a></code> property.</li>  
        </ul>
        <p>The above demo is implemented as follows.</p>
        <ul>
            <li>Created a vue component named <code>DetailComponent(ejs-griddetail)</code> to show details of selected row from Master Grid.</li>
            <li>The <code>DetailComponent</code> has an <code>Input</code> property <code>key</code>, based on which 
            the data will be filtered and set to the Detail Grid. Here the <strong>CustomerID</strong> value is used as key value.</li>
            <li>Created an another vue component named <code>MasterComponent</code> which has Master Grid component with <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#rowselected--emittyperowselecteventargs">
        rowSelected
        </a></code> event bound to it.</li>
            <li>The <code>MasterComponent</code> uses <code>DetailComponent</code> and it updates <code>key</code> property when a row is selected in the Master Grid.</li>
            <li>Now based on the key value, the data is filtered and the Detail Grid is updated with the filtered data.</li>
        </ul>
        <p>Use <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#selectedrowindex-number">
        selectedRowIndex
        </a></code> to select a row at the initial rendering.</p>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To implement this use case,
            the selection feature need to be enabled and also we need to inject
            <code>Selection</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style>
ej-gridmaster,
ej-griddetail {
    display:block;
}

.e-statustext,
.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    opacity: 0.87;
    padding: 1em;
}

</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GridPlugin, RowSelectEventArgs } from "@syncfusion/ej2-vue-grids";
import { customerData, data } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
      var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    return {
      names: names,
      data: customerData.filter((e: any) => names.indexOf(e.CustomerID) !== -1),
      key: null
    };
  },
  methods: {
      onRowSelected: function (args: RowSelectEventArgs): void {
        let record: any = args.data;
        this.key = record.ContactName;
    }
  }
});

Vue.component('detailsGrid', {
  props: ['selected'],
  data: () => {
    return {
    };
  },
  template: `<div>
        <ejs-grid :dataSource='detailData' :allowSelection='false'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='100' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width='100' type='number'></e-column>
                <e-column field='ShipName' headerText="Ship Name" width='200'></e-column>
                <e-column field='ShipCountry' headerText="Ship Country" width='150'></e-column>
                <e-column field='ShipAddress' headerText="Ship Address" width='200'></e-column>
            </e-columns>
        </ejs-grid>
    </div>`,
    computed: {
        detailData: function () : Object[] {
            return data.filter((record: any) => record.CustomerName === this.selected).slice(0, 5);
        }
    }
});

</script>