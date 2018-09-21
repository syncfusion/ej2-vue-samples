<template>
<div>
    <div class="col-lg-12 control-section">
    <div class="tree-template-control-wrapper">
            <ejs-treeview id="template" :fields="fields" cssClass="custom" :nodeTemplate="treeTemplate"></ejs-treeview>
        </div>
        </div>
    <div id="action-description">
        <p>This sample demonstrates the template functionalities of the TreeView. Select the root node by clicking on it, or expand the root node and select the customized child node.</p>
    </div>
    <div id="description">
        <p>The <code>TreeView</code> component has an option to customize the node structure through the <code>nodeTemplate</code> property, so that the tree node can be formed with any custom structure.</p>
        <p>In this demo, the node is formed as like webmail with folder name and number of unread messages.</p>
        <p>For more information, you can refer to the <a href="http://ej2.syncfusion.com/vue/treeview/template.html" target="_blank">Templates</a> section from the documentation.</p>
    </div>
</div>
</template>
<style>
    .tree-template-control-wrapper {
		max-width: 320px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    .tree-template-control-wrapper .e-treeview .e-list-text {
        width: 100%;
    }
    .treeCount.e-badge {
        padding: 0.4em;
        vertical-align: text-bottom;
    }
    .material .treeCount.e-badge {
        vertical-align: middle;
    }
</style>
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TreeViewPlugin);

var mailBox = [
        { id: 1, name: 'Favorites', hasChild: true},
        { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
        { id: 3, pid: 1, name: 'Sent Items'},
        { id: 4, pid: 1, name: 'Marketing Reports ', count: '6'},
        { id: 5, name: 'My Folder', hasChild: true, expanded: true },
        { id: 6, pid: 5, name: 'Inbox',  selected: true , count: '20'},
        { id: 7, pid: 5,  name: 'Drafts', count: '5'},
        { id: 8, pid: 5,  name: 'Deleted Items'},
        { id: 9, pid: 5, name: 'Sent Items'},
        { id: 10, pid: 5, name: 'Sales Reports' , count: '4'},
        { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
        { id: 12, pid: 5, name: 'Outbox' },
];

var tTemplate = Vue.component("demo", {
  template: '<div><div class="treeviewdiv"><div style="float:left"><span class="treeName">{{data.name}}</span></div>' +
        '<div v-if="data.count" style="margin-right: 5px; float:right"><span class="treeCount e-badge e-badge-primary">{{data.count}}</span></div></div></div>',
  data() {
    return {
      data: {}
    };
  }
});

export default Vue.extend ({
    data: function() {
        return {
            fields: { dataSource: mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
            treeTemplate: function(e) {
                return {
                    template: tTemplate
                };
            },
        };
    }
});
</script>