<template>
  <div>
    <div class="control-section">
      <div id="dropdown-control" style="margin-bottom:5px;">
        <table style="max-width: 330px;">
          <tbody>
            <tr style="height: 50px">
              <td>
                <div>
                  <b>Content Type:</b>
                </div>
              </td>
              <td>
                <div style="padding-left: 5px;">
                  <ejs-dropdownlist
                    id="contenttype"
                    :change="ddlOnChange"
                    :dataSource="contentTypes"
                    index="0"
                    placeholder="Content Types"
                  ></ejs-dropdownlist>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="jsonReport"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
        ></ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>This sample demonstrates basic rendering of the pivot table bound to JSON or CSV data pulled from a remote server.</p>
    </div>
    <div id="description">
      <p>
        The pivot table supports JSON and CSV data source. The
        <code>dataSourceSettings->dataSource</code> property can be assigned with the result of DataManager to bind remote data.
      </p>The
      <code>DataManager</code>, which will act as an interface between the service endpoint and the pivot table, will require the below minimal
      information to interact with service endpoint properly.
      <ul>
        <li>
          <code>DataManager->url</code> - Defines the service endpoint to fetch data.
        </li>
        <li>
          <code>DataManager->adaptor</code> - Defines the adaptor option. Here,
          <code>WebApiAdaptor</code> is used for remote binding.
        </li>
      </ul>In this demo, with respect to JSON remote data, is bound by assigning service data as an instance of
      <code>DataManager</code> to the
      <code>dataSourceSettings->dataSource</code> property. But for CSV, the service URL is directly set to
      <code>url</code> for remote data consumption.<br />
      <p>
          More information on the Essential<sup>®</sup> JS2 Pivot Table can be found in these <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/pivotview/data-binding#binding-json-data-via-remote">JSON</a> & <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/pivotview/data-binding#binding-csv-data-via-remote">CSV</a> documentation section.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  PivotViewComponent,
  IDataSet,
  IDataOptions
} from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListComponent,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import {
  DataManager,
  Query,
  ReturnOption,
  WebApiAdaptor
} from "@syncfusion/ej2-data";
enableRipple(false);

let remoteData: DataManager = new DataManager({
  url: "https://ej2services.syncfusion.com/vue/development/api/order",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      jsonReport: {
        url: "",
        dataSource: remoteData,
        type: "JSON",
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
      csvReport: {
        url: "https://ej2services.syncfusion.com/vue/development/api/product",
        type: "CSV",
        expandAll: false,
        enableSorting: true,
        formatSettings: [
          { name: "Total Cost", format: "C0" },
          { name: "Total Revenue", format: "C0" },
          { name: "Total Profit", format: "C0" }
        ],
        drilledMembers: [{ name: "Item Type", items: ["Baby Food"] }],
        rows: [{ name: "Region" }, { name: "Country" }],
        columns: [{ name: "Item Type" }, { name: "Sales Channel" }],
        values: [
          { name: "Total Cost" },
          { name: "Total Revenue" },
          { name: "Total Profit" }
        ],
        filters: []
      },
      gridSettings: { columnWidth: 120 },
      height: 300,
      width: "100%",
      contentTypes: ["JSON", "CSV"]
    };
  },
  methods: {
    ddlOnChange: function(args: ChangeEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.value === "JSON") {
        pivotObj.dataSourceSettings = (this as any).jsonReport;
      } else if (args.value === "CSV") {
        pivotObj.dataSourceSettings = (this as any).csvReport;
      }
    }
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}
/deep/ .control-section {
  padding-top: 8px !important;
}
</style>