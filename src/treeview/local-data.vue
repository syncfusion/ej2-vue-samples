<template>
<div>
<div class="col-lg-12 control-section tree-local">
    <div class="col-lg-6 nested-data">
            <div class='tree-content'>
                <p class="displayText">Hierarchical Data</p>
                <ejs-treeview id="tree" :fields='fields'></ejs-treeview>
            </div>
        </div>
        <div class='col-lg-6 list-data'>
            <div class='tree-content'>
                <p class="displayText">List Data</p>
                <ejs-treeview id="listtree" :fields='listfields'></ejs-treeview>
            </div>
        </div>
</div>
<div id="action-description">
    <p>This <a href="https://www.syncfusion.com/vue-ui-components/vue-tree-view" target="_blank">Vue TreeView example</a> demonstrates the binding of local data to the TreeView. Click on node to select it, and click on icon or double click on node to expand/collapse it.</p>
</div>

<div id="description">
    <p>The TreeView component loads the data through the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource">dataSource</a> property, where the data can be either local data or remote data. In case of local data, the data structure can be hierarchical data or list data (with self-referential format i.e., mapped with the <b>id</b> and <b>parentID</b> fields).</p>
    <p>In this demo, the first TreeView is bound with the hierarchical data that contains array of nested objects. And the second TreeView is bound with the list type data where the parent-child relation is referred by the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#id">id</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#parentid">parentID</a> mapping fields.</p>
    <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/data-binding/" target="_blank">Data Binding</a> section from the documentation.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.tree-local .nested-data, .tree-local .list-data {
        padding: 15px;
        margin-bottom: 25px;
    }
    .tree-local .tree-content {
        margin: 0 auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    .tree-local .tree-content .displayText {
        padding: 0 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
/* custom code end */
<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './local-data.json';

export default {
    components: {
        'ejs-treeview': TreeViewComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.hierarchicalData, id: 'code', text: 'name', child: 'countries' },
            listfields: { dataSource: dataSource.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        };
    }
}
</script>
