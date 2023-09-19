<template>
<div>
<div class="col-lg-12 control-section tree-icon">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This <a href="https://www.syncfusion.com/vue-ui-components/vue-tree-view" target="_blank">Vue TreeView example</a> demonstrates the node can be configured by icons/images in TreeView. Click on icon or double click on node to expand/collapse it, and show the icons/images that configured with nodes.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component has the built-in option to customize each node's appearance with the icons and images by mapping the <code>iconCss</code> and <code>imageUrl</code> fields.</p>
    <p>In this demo, the TreeView is showcased like a file system with custom icons and images.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.tree-icon .tree-control-wrapper {
        max-width: 500px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
    .tree-icon .e-treeview .e-list-img {
        width: 25px;
        height: 25px;
    }
    /* Loading sprite image for TreeView */
    .tree-icon .e-treeview .e-list-icon {
        background-repeat: no-repeat;
        background-image: url(../images/icons/file_icons.png);
        height: 20px;
    }

.tree-icon .e-treeview .e-list-icon.folder { background-position: -10px -552px }
.e-bigger .tree-icon .e-treeview .e-list-icon.folder { background-position: -10px -550px; }
.tree-icon .e-treeview .e-list-icon.docx { background-position: -10px -20px }
.tree-icon .e-treeview .e-list-icon.ppt { background-position: -10px -48px }
.tree-icon .e-treeview .e-list-icon.pdf { background-position: -10px -104px }
.tree-icon .e-treeview .e-list-icon.images { background-position: -10px -132px }
.tree-icon .e-treeview .e-list-icon.zip { background-position: -10px -188px }
.tree-icon .e-treeview .e-list-icon.audio { background-position: -10px -244px }
.tree-icon .e-treeview .e-list-icon.video { background-position: -10px -272px }
.tree-icon .e-treeview .e-list-icon.exe { background-position: -10px -412px }
</style>
/* custom code end */
<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './icons-data.json';

export default {
    components: {
        'ejs-treeview': TreeViewComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.iconData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        };
    }
}
</script>