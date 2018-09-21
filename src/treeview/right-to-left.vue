<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields' enableRtl='true'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the RTL mode of the TreeView. The node displays its content from right-to-left direction. Click on node to select it, and click on icon or double click on node to expand/collapse it.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component supports the <b>right-to-left</b> (RTL) direction of nodes, and this is enabled by the <code>enableRtl</code> property.</p>
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
           {
            id: 1, name: 'Web Controls', expanded: true,
            child: [
                {
                    id: 2, pid: 1, name: 'Calendar', child: [
                        { id: 7, pid: 2, name: 'Constructors' },
                        { id: 8, pid: 2, name: 'Properties' },
                        { id: 9, pid: 2, name: 'Methods' },
                        { id: 10, pid: 2, name: 'Events' }
                    ]
                },
                {
                    id: 3, pid: 1, name: 'Data Grid', child: [
                        { id: 11, pid: 3, name: 'Constructors' },
                        { id: 12, pid: 3, name: 'Fields' },
                        { id: 13, pid: 3, name: 'Properties' },
                        { id: 14, pid: 3, name: 'Methods' },
                        { id: 15, pid: 3, name: 'Events' }
                    ]
                },
                {
                    id: 4, pid: 1, name: 'DropDownList', child: [
                        { id: 16, pid: 4, name: 'Constructors' },
                        { id: 17, pid: 4, name: 'Properties' },
                        { id: 18, pid: 4, name: 'Methods' }
                    ]
                },
                {
                    id: 5, pid: 1, name: 'Menu', child: [
                        { id: 19, pid: 5, name: 'Constructors' },
                        { id: 20, pid: 5, name: 'Fields' },
                        { id: 21, pid: 5, name: 'Properties' },
                        { id: 22, pid: 5, name: 'Methods' },
                        { id: 23, pid: 5, name: 'Events' }
                    ]
                },
                {
                    id: 6, pid: 1, name: 'TextBox', child: [
                        { id: 20, pid: 6, name: 'Constructors' },
                        { id: 21, pid: 6, name: 'Properties' },
                        { id: 22, pid: 6, name: 'Methods' },
                        { id: 23, pid: 6, name: 'Events' }
                    ]
                }
            ]
        },
    ];
export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: data, id: 'id', text: 'name', child: 'child' },
        };
    }
});
</script>