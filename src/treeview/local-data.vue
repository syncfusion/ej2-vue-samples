<template>
<div>
<div class="col-lg-12 control-section">
    <div class="col-lg-6 nested-data">
            <div class='tree-content'>
                <h4>Hierarchical Data</h4>
                <ejs-treeview id="tree" :fields='fields'></ejs-treeview>
            </div>
        </div>
        <div class='col-lg-6 list-data'>
            <div class='tree-content'>
                <h4>List Data</h4>
                <ejs-treeview id="listtree" :fields='listfields'></ejs-treeview>
            </div>
        </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the binding of local data to the TreeView. Click on node to select it, and click on icon or double click on node to expand/collapse it.</p>
</div>

<div id="description">
    <p>The TreeView component loads the data through the <code>dataSource</code> property, where the data can be either local data or remote data. In case of local data, the data structure can be hierarchical data or list data (with self-referential format i.e., mapped with the <b>id</b> and <b>parentID</b> fields).</p>
    <p>In this demo, the first TreeView is bound with the hierarchical data that contains array of nested objects. And the second TreeView is bound with the list type data where the parent-child relation is referred by the <b>id</b> and <b>parentID</b> mapping fields.</p>
    <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/data-binding/" target="_blank">Data Binding</a> section from the documentation.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.nested-data, .list-data {
        padding: 15px;
        margin-bottom: 25px;
    }
    .tree-content {
        margin: 0 auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    .tree-content h4 {
        padding: 0 10px;
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './dataSource/local-data.json';

Vue.use(TreeViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: dataSource.hierarchicalData, id: 'code', text: 'name', child: 'countries' },
            listfields: { dataSource: dataSource.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        };
    }
});
</script>