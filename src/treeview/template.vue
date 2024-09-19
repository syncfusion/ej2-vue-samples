<template>
<div>
    <div class="col-lg-12 control-section tree-template">
    <div class="tree-template-control-wrapper">
        <ejs-treeview id="template" :fields="fields" cssClass="custom" :nodeTemplate="'myTemplate'">
            <template v-slot:myTemplate="{data}">
                <div>
                    <div class="treeviewdiv">
                        <div class="nodetext">
                            <span class="treeName">{{data.name}}</span>
                        </div>
                        <div v-if="data.count" class="nodebadge">
                            <span class="treeCount e-badge e-badge-primary">{{data.count}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </ejs-treeview>
        </div>
        </div>
    <div id="action-description">
        <p>This <a href="https://www.syncfusion.com/vue-ui-components/vue-tree-view" target="_blank">Vue TreeView example</a> demonstrates the template functionalities of the TreeView. Select the root node by clicking on it, or expand the root node and select the customized child node.</p>
    </div>
    <div id="description">
        <p>The <code>TreeView</code> component has an option to customize the node structure through the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodetemplate">nodeTemplate</a> property, so that the tree node can be formed with any custom structure.</p>
        <p>In this demo, the node is formed as like webmail with folder name and number of unread messages.</p>
        <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/template/" target="_blank">Templates</a> section from the documentation.</p>
    </div>
</div>
</template>
/* custom code start */
<style>
    .tree-template .tree-template-control-wrapper {
		max-width: 320px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    .tree-template .tree-template-control-wrapper .e-treeview .e-list-text {
        width: 100%;
    }
    .tree-template .treeCount.e-badge {
        padding: 0.4em;
        vertical-align: text-bottom;
    }
    .material .tree-template .treeCount.e-badge {
        vertical-align: middle;
    }
    .bootstrap4 .treeviewdiv .treeCount.e-badge,
    .bootstrap5 .treeviewdiv .treeCount.e-badge,
    .bootstrap5-dark .treeviewdiv .treeCount.e-badge,
    .bootstrap .treeviewdiv .treeCount.e-badge,
    .bootstrap-dark .treeviewdiv .treeCount.e-badge,
    .highcontrast .treeviewdiv .treeCount.e-badge {
        background-color: #008800;
    }
    .highcontrast .treeviewdiv .treeCount.e-badge {
        color: white;
    }
    .bootstrap5.e-bigger .tree-template .treeCount.e-badge,
    .tailwind.e-bigger .tree-template .treeCount.e-badge,
    .tailwind-dark.e-bigger .tree-template .treeCount.e-badge,
    .bootstrap5-dark.e-bigger .tree-template .treeCount.e-badge {
        line-height: 11px;
    }
    .tree-template .nodetext {
        float: left;
    }
    .tree-template .e-rtl .nodetext {
        float: right;
    }
    .tree-template .nodebadge {
        float: right;
        margin-right: 5px
    }
    .tree-template .e-rtl .nodebadge {
        float: left;
        margin-left: 5px
    }
    .tree-template .e-treeview.e-interaction.e-fullrow-wrap .e-text-content {
        pointer-events: none;
    }
</style>
/* custom code end */
<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './template-data.json';

export default {
    components: {
        'ejs-treeview': TreeViewComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.templateData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' }
        };
    }
}
</script>