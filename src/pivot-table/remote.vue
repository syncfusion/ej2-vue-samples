<template>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates basic rendering of the pivot table bound to JSON data pulled from a remote server.</p>
</div>

<div id="description">
    <p>The pivot table supports JSON data source. The
        <code>dataSourceSettings->dataSource</code> property can be assigned with the result of DataManager to bind remote data.</p>
    The
    <code>DataManager</code>, which will act as an interface between the service endpoint and the pivot table, will require the below minimal
    information to interact with service endpoint properly.
    <ul>
        <li>
            <code>DataManager->url</code> - Defines the service endpoint to fetch data.</li>
        <li>
            <code>DataManager->adaptor</code> - Defines the adaptor option. Here,
            <code>WebApiAdaptor</code> is used for remote binding.</li>
    </ul>
    In this demo, remote data is bound by assigning service data as an instance of
    <code>DataManager</code> to the
    <code>dataSourceSettings->dataSource</code> property.
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import {
  DataManager,
  Query,
  ReturnOption,
  WebApiAdaptor
} from "@syncfusion/ej2-data";
enableRipple(false);

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        dataSource: remoteData as DataManager,
        expandAll: true,
        filters: [],
        columns: [{ name: "ProductName", caption: "Product Name" }],
        rows: [
          { name: "ShipCountry", caption: "Ship Country" },
          { name: "ShipCity", caption: "Ship City" }
        ],
        formatSettings: [{ name: "UnitPrice", format: "C0" }],
        values: [
          { name: "Quantity" },
          { name: "UnitPrice", caption: "Unit Price" }
        ]
      },
      gridSettings: { columnWidth: 120 },
      height: 300,
      width: "100%"
    };
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>