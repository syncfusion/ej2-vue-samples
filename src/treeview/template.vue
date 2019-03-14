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
        <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/template/" target="_blank">Templates</a> section from the documentation.</p>
    </div>
</div>
</template>
/* custom code start */
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
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import treeTemplateVue from "./tree-template.vue";
import * as dataSource from './dataSource/template-data.json';

Vue.use(TreeViewPlugin);


export default Vue.extend ({
    data: function() {
        return {
            fields: { dataSource: dataSource.templateData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
            treeTemplate: function(e) {
                return {
                    template: treeTemplateVue
                };
            },
        };
    }
});
</script>