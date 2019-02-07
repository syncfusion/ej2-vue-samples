<template>
<div>
    <div class="tree-template-control-wrapper">
        <ejs-treeview id="template" :fields="fields" cssClass="custom" :nodeTemplate="treeTemplate"></ejs-treeview>
    </div>
</div>
</template>
<style>
    .tree-template-control-wrapper .e-treeview .e-list-text {
        width: 100%;
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
        { id: 5, name: 'Andrew Fuller', hasChild: true, expanded: true },
        { id: 6, pid: 5, name: 'Inbox',  selected: true , count: '20'},
        { id: 7, pid: 5,  name: 'Drafts', count: '5'},
        { id: 8, pid: 5,  name: 'Deleted Items'},
        { id: 9, pid: 5, name: 'Sent Items'},
        { id: 10, pid: 5, name: 'Sales Reports' , count: '4'},
        { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
        { id: 12, pid: 5, name: 'Outbox' },
        { id: 13, pid: 5, name: 'Junk Email'},
        { id: 14, pid: 5, name: 'RSS Feed'},
        { id: 15, pid: 5, name: 'Trash' }
];

var treeTemplate = Vue.component("demo", {
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
                    template: treeTemplate
                };
            },
        };
    }
});
</script>