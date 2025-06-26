<template>
<div class="col-lg-12 control-section">
   <div id="action-description">
    <p>This sample demonstrates the way of binding remote services to Tree Grid component. Here, the DataManager is used to bind the remote data with Tree Grid.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' idMapping='TaskID' :height='350' parentIdMapping='parentItem' hasChildMapping='isParent' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='100' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='200'></e-column>
                <e-column field='StartDate' headerText='Start Date' width='140' format="yMd" textAlign='Right'></e-column>
                <e-column field='EndDate' headerText='End Date' width='140' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width='120' textAlign='Right'></e-column>
                <e-column field='Progress' headerText='Progress' width='110'></e-column>
                </e-columns>
        </ejs-treegrid>
    </div>

      <div id="description">
        <p>Tree Grid can be bound to remote services by assigning the <code>dataSource</code> property with the instance of <code>
                DataManager</code>.</p>

        <p>The DataManager, which will act as an interface between the service endpoint and the Tree Grid, will require the below minimal information to interact with service endpoint properly.
        </p>
        <ul>
            <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
            <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used
                for remote binding.</li>
        </ul>
        <p>Adaptor is responsible for processing response and request from/to the service endpoint.
            <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact with
            particular service endpoints. They are,</p>
        <ul>
            <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote based
                adaptors.</li>
            <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
            <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
            <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
            <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        <p>In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code> to the <code>dataSource
        </code> property.</p>
        <p>
            More information on the remote data binding can be found in this
            <a target="_blank" 
                href="https://ej2.syncfusion.com/vue/documentation/treegrid/data-binding/remote-data/">
               documentation section</a>.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
      let SERVICE_URI: string =
      "https://services.syncfusion.com/vue/production/api/SelfReferenceData";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new WebApiAdaptor()
      }),
      pageSettings: { pageCount: 4 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
      
  }

}
</script>
