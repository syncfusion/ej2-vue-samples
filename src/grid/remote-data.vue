<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the way of data binding Grid component with remote service. The Grid data source is bound to
        remote data using DataManager.
        </p>
    </div>
    <div>
      <div id="export-cache-container">
        <label id="grid-remote1" for="checked">
          Enable Cache
        </label>
        <div>
          <ejs-switch id="checked" v-on:change="onChange"></ejs-switch>
        </div>
      </div>
        <ejs-grid :dataSource="data" :allowPaging='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' width='150' ></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid supports data binding. The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource">
        dataSource
        </a></code> property can be assigned with the instance of <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code> to bind remote data.</p>
        
        <p>The DataManager, which will act as an 
            interface between the service endpoint and the Grid, will require the below minimal information to interact with service endpoint properly.
        </p>
        <ul>
            <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
            <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for remote binding.</li>
        </ul>
        <p>Adaptor is responsible for processing response and request from/to the service endpoint. <code>@syncfusion/ej2-data</code> package provides
        some predefined adaptors which are designed to interact with particular service endpoints. They are,</p>
        <ul>
            <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.</li>
            <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
            <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
            <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
            <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        <p>In this demo, remote data is bound by assigning service data as an instance of <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code> to the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource">
        dataSource
        </a></code> property.</p>
        <p>The <code>DataManager</code> provides an option to avoid sending requests for previously visited pages by enabling the <code>enableCache</code> property.
            When this property is enabled, the DataManager does not send a request to the server when revisiting a page. 
            However, the cache will be reset if any data action, such as sorting or filtering, is performed.
        </p>
        <p>
            More information on the data binding can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/data-binding/remote-data">documentation section</a>.
        </p>
    </div>

</div>

</template>
<script lang="ts">
import { GridComponent, ColumnDirective,ColumnsDirective, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    "ejs-switch": SwitchComponent
  },
  data: () => {
    let SERVICE_URI: string =
      "https://services.syncfusion.com/vue/production/";
    return {
      data: new DataManager({
        url: SERVICE_URI + 'api/Orders',
        adaptor: new WebApiAdaptor()
      })
    };
  },
  methods: {
    onChange: function(args: any): void {
      let grid = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
      let SERVICE_URI: string = "https://services.syncfusion.com/vue/production/";
      grid.dataSource = new DataManager({
        url: SERVICE_URI + 'api/Orders',
        adaptor: new WebApiAdaptor(),
        enableCache: args.checked
      });
    }
  },
  provide: {
      grid: [Page]
  }
}
</script>
<style>
    #export-cache-container {
        display: flex;
        margin-bottom: 7px;
    }

    #export-cache-container label {
        font-size: 15px;
        margin-right: 8px;
    }

    .material3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .material3-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .tailwind3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .tailwind3-dark #export-cache-container .e-switch-wrapper.e-wrapper {
        margin: -1.25px 0px 0px 0px;
    }

    .bootstrap5_3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .bootstrap5_3-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .fluent2 #export-cache-container .e-switch-wrapper.e-wrapper,
    .fluent2-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .fluent2-highcontrast #export-cache-container .e-switch-wrapper.e-wrapper {
        margin: 1.5px 0px 0px 0px;
    }

    .e-bigger.material3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.material3-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.tailwind3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.tailwind3-dark #export-cache-container .e-switch-wrapper.e-wrapper {
        margin: -5.5px 0px 0px 0px;
    }

    .e-bigger.bootstrap5_3 #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.bootstrap5_3-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.fluent2 #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.fluent2-dark #export-cache-container .e-switch-wrapper.e-wrapper,
    .e-bigger.fluent2-highcontrast #export-cache-container .e-switch-wrapper.e-wrapper {
        margin: -0.5px 0px 0px 0px;
    }
</style>
