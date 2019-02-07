<template>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" :dataSource="dataSource" :gridSettings="gridSettings" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the basic rendering of the pivotgrid widget with remote data.</p>
</div>
<div id="description">
    <p>The pivotgrid widget supports JSON data source. The
        <code>dataSource->data</code> property can be assigned with the result of DataManager to bind remote data.</p>
    The
    <code>DataManager</code>, which will act as an interface between the service endpoint and the pivotgrid widget, will require the below minimal
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
    <code>dataSource->data</code> property.
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

let remoteData: IDataSet[];
new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
})
  .executeQuery(new Query().take(8))
  .then((e: ReturnOption) => {
    remoteData = e.result as IDataSet[];
  });

export default Vue.extend({
  data: () => {
    return {
      dataSource: {
        data: remoteData as IDataSet[],
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