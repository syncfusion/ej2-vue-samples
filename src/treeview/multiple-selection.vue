<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields' allowMultiSelection='true'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the multiple node selection functionalities of the TreeView. To select multiple nodes, press the CTRL key and select the desired nodes; or select any node and by pressing SHIFT key select another node, this selects all the nodes in-between the selected nodes.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component allows to select multiple nodes by enabling the <code>allowMultiSelection</code> property.</p>
    <p>In this demo, the TreeView is enabled with multiple selection</p>
    <p>For more information, refer to the <a href="http://ej2.syncfusion.com/vue/treeview/multiple-selection.html" target="_blank">Multi Selection</a> section from the documentation.</p>
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

Vue.use(TreeViewPlugin);

var data =  [
        { id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'New South Wales' },
        { id: 3, pid: 1, name: 'Victoria', isSelected: true },
        { id: 4, pid: 1, name: 'South Australia', isSelected: true },
        { id: 6, pid: 1, name: 'Western Australia' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab' },
    ];
export default Vue.extend({
    data: function() {
            return {
                fields: { dataSource: data, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
            };
    }
});
</script>