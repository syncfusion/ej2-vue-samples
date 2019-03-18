<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the default functionalities of the TreeView. Click on node to select it, and click on icon or double click on node to expand/collapse it. The child nodes will be loaded on expand the parent node.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component is used to display the data in a hierarchical structure with the configuration options to control the way of data is presented and manipulated. It will pull the data from a data source, such as an array of JSON objects, OData web services, or DataManager binding data fields to the <code>fields</code> property.</p>
    <p>In this demo, the TreeView is populated with its minimum default settings.</p>
    <p>More information on the TreeView instantiation can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/getting-started/" target="_blank">documentation section</a>.</p>
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
import * as dataSource from './dataSource/default-data.json';

Vue.use(TreeViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: dataSource.defaultData , id: 'id', text: 'name', child: 'subChild' },
        };
    }
});
</script>