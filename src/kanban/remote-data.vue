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
        This sample demonstrates remote data binding in the Kanban component, enabling data to be retrieved from external services and displayed in an interactive workflow management interface.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates remote data binding in the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/data-binding" target="_blank">dataSource</a>
        property and a
        <a href="https://ej2.syncfusion.com/vue/documentation/data/overview" target="_blank">DataManager</a>
        instance. The DataManager acts as an intermediary between the Kanban board and a remote service, enabling data to be fetched and displayed from external data sources.
    </p>
    <p>
        To connect with a remote service, the DataManager requires a service endpoint URL and an adaptor. The adaptor is responsible for processing requests and responses between the component and the remote data source. The <code>@syncfusion/ej2-data</code> package provides several built-in adaptors, including <code>UrlAdaptor</code>, <code>ODataAdaptor</code>, <code>ODataV4Adaptor</code>, <code>WebApiAdaptor</code>, and <code>WebMethodAdaptor</code>, for working with different service types.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/data-binding#remote-data" target="_blank">remote data</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
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
