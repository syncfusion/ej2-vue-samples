<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
     <span id="loading">Loading...</span>
            <ejs-treeview id="treeview" :created="show" :dataBound="hide" :fields='fields'></ejs-treeview>
        </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the binding data to the TreeView from remote data source. On expanding the parent node, the spinner icon will be displayed until the child nodes will be loaded into parent node. Click on node to select it, and click on icon or double click on node to expand/collapse it.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component loads the data through the <code>dataSource</code> property, where the data can be either local data or remote data. In case of remote data, the data can be loaded from any remote services though the <code>DataManager</code>.</p>
    <p>The DataManager will act as an interface between the service endpoint and the TreeView, that requires the below minimal information to interact with the service endpoint.</p>
    <ul>
        <li><code>DataManager->url</code> - Defines the service endpoint to fetch data.</li>
        <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, ODataV4Adaptor is used for remote binding.</li>
    </ul>
    <p>In this demo, the TreeView is bound with the dataSource from the Northwind remote service by using the DataManager instance.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.tree-control-wrapper {
        max-width: 500px;
        min-height: 50px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    #loading {
        display: inline-block;
        margin: 10px 41%;
        font-size: 20px;
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";

Vue.use(TreeViewPlugin);

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
            adaptor: new ODataV4Adaptor,
            crossDomain: true,
});
export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: remoteData, query: new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5), id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
            child: { dataSource: remoteData, query: new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5), id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }},
        };
    },
    methods: {
        show: function() {
        var popup = document.getElementById('loading');
        popup.style.display = '';
    },
    // Hide loading message, after tree data has been loaded
        hide: function() {
        var popup = document.getElementById('loading');
        popup.style.display = 'none';
    }
    }
});
</script>