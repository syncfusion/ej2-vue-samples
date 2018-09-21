<template>
<div>
<div class="col-lg-12 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the node can be configured by icons/images in TreeView. Click on icon or double click on node to expand/collapse it, and show the icons/images that configured with nodes.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component has the built-in option to customize each node's appearance with the icons and images by mapping the <code>iconCss</code> and <code>imageUrl</code> fields.</p>
    <p>In this demo, the TreeView is showcased like a file system with custom icons and images.</p>
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
    .e-treeview .e-list-img {
        width: 25px;
        height: 25px;
    }
    /* Loading sprite image for TreeView */
    .e-treeview .e-list-icon {
        background-repeat: no-repeat;
        background-image: url(../images/icons/file_icons.png);
        height: 20px;
    }

.e-treeview .e-list-icon.folder { background-position: -10px -552px }
.e-treeview .e-list-icon.docx { background-position: -10px -20px }
.e-treeview .e-list-icon.ppt { background-position: -10px -48px }
.e-treeview .e-list-icon.pdf { background-position: -10px -104px }
.e-treeview .e-list-icon.images { background-position: -10px -132px }
.e-treeview .e-list-icon.zip { background-position: -10px -188px }
.e-treeview .e-list-icon.audio { background-position: -10px -244px }
.e-treeview .e-list-icon.video { background-position: -10px -272px }
.e-treeview .e-list-icon.exe { background-position: -10px -412px }
</style>
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TreeViewPlugin);

var data =  [
        {
            nodeId: '01', nodeText: 'Music', icon: 'folder',
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3', icon: 'audio' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', icon: 'folder',
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4', icon: 'video' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg', icon: 'video' },
            ]
        },
        {
            nodeId: '03', nodeText: 'Documents', icon: 'folder',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
            ]
        },
        {
            nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
            nodeChild: [
                {
                    nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
                    nodeChild: [
                        { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'src/images/employees/9.png' },
                        { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'src/images/employees/3.png' },
                    ]
                },
                { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
                { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
            ]
        },
        {
            nodeId: '05', nodeText: 'Downloads', icon: 'folder',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
                { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
                { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
                { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
            ]
        },
    ];
export default Vue.extend({
    data: function() {
        return {
            fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        };
    }
});
</script>