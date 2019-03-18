<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields' :allowMultiSelection='true'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the multiple node selection functionalities of the TreeView. To select multiple nodes, press the CTRL key and select the desired nodes; or select any node and by pressing SHIFT key select another node, this selects all the nodes in-between the selected nodes.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component allows to select multiple nodes by enabling the <code>allowMultiSelection</code> property.</p>
    <p>In this demo, the TreeView is enabled with multiple selection</p>
    <p>For more information, refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/multiple-selection/" target="_blank">Multi Selection</a> section from the documentation.</p>
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
import * as dataSource from './dataSource/multiSelect-data.json';

Vue.use(TreeViewPlugin);

export default Vue.extend({
    data: function() {
            return {
                fields: { dataSource: dataSource.multiSelectData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
            };
    }
});
</script>