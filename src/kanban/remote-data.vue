<template>
<div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" keyField="Status" :dataSource="data"
        :cardSettings="cardSettings" :allowDragAndDrop=false :dialogOpen='dialogOpen'>
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
<div id="action-description">
    <p>
        This sample demonstrates the way of data binding to Kanban component using remote service. The data source of
        Kanban is fetched from remote service using DataManager.
    </p>
</div>
<div id="description">
    <p>
        The Kanban supports data binding using the <code>dataSource</code> property that can be assigned with the
        instance of
        DataManager to bind remote data.
    </p>
    <p>
        The DataManager, which acts as an interface between the service endpoint and the Kanban will require the below
        minimal information to interact with service endpoint properly.
    </p>
    <ul>
        <li><code>DataManager</code> -> <code>url</code>: Defines the service endpoint to fetch the data.</li>
        <li><code>DataManager</code> -> <code>adaptor</code>: Defines the adaptor option. By default, ODataAdaptor is
            used for remote binding.</li>
    </ul>
    <p>The adaptor is responsible for processing response and request from/to the service endpoint. @syncfusion/ej2-data
        package provides some predefined adaptors which are designed to interact with particular service endpoints. They
        are:
    </p>
    <ul>
        <li>UrlAdaptor - Use this to interact with any remote services. This is the base adaptor for all remote based
            adaptors.</li>
        <li>ODataAdaptor - Use this to interact with OData endpoints.</li>
        <li>ODataV4Adaptor - Use this to interact with OData V4 endpoints.</li>
        <li>WebApiAdaptor - Use this to interact with Web API created under OData standards.</li>
        <li>WebMethodAdaptor - Use this to interact with web methods.</li>
    </ul>
    <p>
        In this demo, remote data is bound by assigning service data as an instance of DataManager to the
        <code>dataSource</code> property.
    </p>
</div>

</div>
</template>
<script>
import { extend } from "@syncfusion/ej2-base";
import { DataManager } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: function() {
        let SERVICE_URI =
      'https://services.syncfusion.com/vue/production/api/Kanban'
    return {
         data: new DataManager({
        url: SERVICE_URI 
      }),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      
    };
  },
  provide: {
    kanban: []
  },
  methods: {
    dialogOpen: function (args) {
        args.cancel = true;
    },
  }
}
</script>
