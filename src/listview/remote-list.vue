<template>
  <div class="control-section remote-data">
    <!-- ListView element -->
    <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle' showHeader='true'></ejs-listview>
    <div id="action-description">
        <p>This sample demonstrates the Remote-data functionalities of the ListView. Click any list item to select and highlight an item.</p>
</div>

<div id="description">
    <p>ListView supports <b>data binding</b> and the <code>dataSource</code> property can be assigned with the instance of <code>DataManager</code> to bind remote the data.</p>

    <p>The <code>DataManager</code> that act as an interface between the service endpoint, and ListView will require the following minimal information to interact with the service endpoint properly.</p>

    <p>DataManager->url - Defines the service endpoint to fetch data.</p>

    <p>DataManager->adaptor - Defines the adaptor option. By default, ODataAdaptor is used for remote binding.</p>

    <p>Adaptor is responsible for processing response and request from/to the service endpoint. <code>@syncfusion/ej2-data</code> package provides some predefined adaptors that are designed to interact with the particular service endpoints. They are,</p>

    <ul>
        <li>UrlAdaptor - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.</li>
        <li>ODataAdaptor - Use this to interact with OData endpoints.</li>
        <li>ODataV4Adaptor - Use this to interact with OData V4 endpoints.</li>
        <li>WebApiAdaptor - Use this to interact with Web API created under OData standards.</li>
        <li>WebMethodAdaptor - Use this to interact with web methods.</li>
    </ul>

    <p>In this sample, the remote data is bound to be a collection of <b>Products</b> data as an instance of <code>DataManager</code>.</p>
</div>
</div>
</template>
<style>
#sample-list {
    max-width: 500px;
}
#sample-list,#sample-list-flat,#sample-list-group {
    border: 1px solid #dddddd;
    border-radius: 3px;
    margin: auto;    
}
.remote-data.control-section {
    overflow: auto;
    padding-bottom: 10px;
}
#flat-list, #group-list {
    width: 50%;
    padding: 10px;
    margin: auto;
}
#flat-list {
    float: left;
}
#group-list {
    float: right;
}
#flat-list h4, #group-list h4 {
    padding-left: 15px;
}
.e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}
#listview {
    max-width: 500px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
@media (max-width: 590px) {
    #flat-list, #group-list {
        width: 100%;
    }
}
</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
import { DataManager, Query } from '@syncfusion/ej2-data';

export default Vue.extend({
  data: function() {
    return {
      data: new DataManager({
        url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
      }),
      query: new Query().from('Products').select('ProductID,ProductName').take(10),
      fields:  { id: 'ProductID', text: 'ProductName' },
      headerTitle: 'Products',
    };
  }
});
</script>