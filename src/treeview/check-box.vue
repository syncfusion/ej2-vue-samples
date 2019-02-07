<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields' :showCheckBox='true'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the CheckBox functionalities of the TreeView. Click on any parent node's CheckBox to check/uncheck the node and its child nodes. The parent node's checked state will be determined by its child nodes checked state.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component can be rendered with checkbox on the left side of each tree node. This allows the user to check more than one nodes, and this can be enabled by the <code>showCheckBox</code> property.</p>
    <p>In this demo, the TreeView is populated with checkbox enabled.</p>
    <p>For more information, you can refer to the <a href="http://ej2.syncfusion.com/vue/treeview/check-box.html" target="_blank">Checkboxes</a> section from the documentation.</p>
</div>
</div>
</template>
<style>
.tree-control-wrapper {
        max-width: 500px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
</style>
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './dataSource.json';

Vue.use(TreeViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: dataSource.checkboxData, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' },
        };
    }
});
</script>