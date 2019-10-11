<template>
  <div class="control-section">
    <div id="spreadsheet-remote-data">
        <ejs-spreadsheet ref="spreadsheet" :sheets="sheets" :openUrl ="openUrl" :saveUrl="saveUrl" :dataBound="dataBound">
            <e-sheets>
                <e-sheet name="Shipment Details" :columns="columns">
                    <e-rangesettings>
                        <e-rangesetting :dataSource="dataSource" :query="query" :showFieldAsHeader="false" startCell="A2"></e-rangesetting>
                    </e-rangesettings>
                    <e-rows>
                        <e-row :index="rowIndex">
                            <e-cells>
                                <e-cell value="Order ID"></e-cell>
                                <e-cell value="Customer Name"></e-cell>
                                <e-cell value="Freight"></e-cell>
                                <e-cell value="Ship Name"></e-cell>
                                <e-cell value="Ship City"></e-cell>
                                <e-cell value="Ship Country"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <div id="action-description">
     <p>
        This sample demonstrates data binding to the <code>Spreadsheet</code> component with remote service using
        DataManager.
    </p>       
    </div>
    <div id="description">
        <p>
            The <code>Spreadsheet</code> supports data binding. The <code>dataSource</code> property can be assigned with
            the instance of <code>DataManager</code> to bind remote data.
        </p>
        <p>
            DataManager, which will act as an interface between the service endpoint and the Spreadsheet, requires the
            following minimum configuration to interact with the service endpoint properly:
            <ul>
            <li><code>DataManager > url</code> : Defines the service endpoint to fetch data.</li>
            <li><code>DataManager > adaptor</code> : Defines the adaptor option. By default, <code>ODataAdaptor</code>
                is used for remote binding.</li>
            </ul>
        </p>
        <p>
            Adaptor is responsible for processing the response from the service endpoint and the request to it. The
            <code>@syncfusion/ej2-data</code> package provides some predefined adaptors that are designed to interact
            with service endpoints. They are:
            <ul>
            <li><code>UrlAdaptor</code> : Use this to interact with any remote services. This is the base adaptor for
                all remote-based adaptors. </li>
            <li><code>ODataAdaptor</code> : Use this to interact with OData endpoints.</li>
            <li><code>ODataV4Adaptor</code> : Use this to interact with OData V4 endpoints.</li>
            <li><code>WebApiAdaptor</code> : Use this to interact with Web API created under OData standards.</li>
            <li><code>WebMethodAdaptor</code> : Use this to interact with web methods.</li>
            </ul>
        </p>
        <p>
            In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code> to the
            <code>dataSource</code> property under the rangeSettings of sheet.
        </p>
        <p>
            More information about remote data binding can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/getting-started">
                documentation</a> section.
        </p>
    </div>
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-remote-data {
        height: 550px;
    }
    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, Query } from "@syncfusion/ej2-data";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
        dataSource: new DataManager({
                    // Remote service url
                    url: 'https://js.syncfusion.com/demos/ejServices//wcf/Northwind.svc/Orders',
                    crossDomain: true
                }),
        query: new Query().select(['OrderID', 'CustomerID', 'Freight', 'ShipName', 'ShipCity', 'ShipCountry']).take(200),
        columns: [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }],
        openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
        saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save',
    }
  },
  methods: {
    dataBound: function() {
        var spreadsheet = this.$refs.spreadsheet;
        if (!spreadsheet.ej2Instances.isOpen && spreadsheet.ej2Instances.sheets[spreadsheet.ej2Instances.activeSheetTab - 1].name === 'Shipment Details') {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
        }
    }
  }
});
</script>