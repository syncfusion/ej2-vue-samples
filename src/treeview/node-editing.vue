<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields' :allowEditing='true'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the node editing functionalities of the TreeView. Double click on the node or press F2 key on selected node to edit node's text in input textbox. Press enter key or click outside of the input element to save the node's, or press escape key to cancel the modified text.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component has the built-in option to edit and modify the node text in inline by enabling the <code>allowEditing</code> property.</p>
    <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/node-editing/" target="_blank">Node Editing</a> section from the documentation.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.tree-control-wrapper {
        max-width: 500px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './dataSource/nodeEdit-data.json';

Vue.use(TreeViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: dataSource.nodeData, id: 'id', text: 'name', child: 'child' },
        };
    }
});
</script>