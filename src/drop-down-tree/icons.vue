<template>
<div>
<div class="col-lg-12 control-section dropdowntree-icon">
    <div class="control_wrapper">
        <ejs-dropdowntree id='treeview' :fields='fields' :placeholder='waterMark' :popupHeight='height' cssClass="dropdowntree-icons"></ejs-dropdowntree>
    </div>
</div>

<div id="action-description">
    <p>This sample explains you about the Dropdown Tree item that can be configured by the icons or images. Click on the
        icon or double click on it to expand or collapse and to show the icons or images that are configured with the
        items.</p>
</div>

<div id="description">
    <p>The <code>Dropdown Tree</code> component has the built-in option to customize each item's appearance with the
        icons and images by mapping the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/fields/#iconcss">iconCss</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/fields/#imageurl">imageUrl</a> fields.</p>
    <p>In this demo, the Dropdown Tree is showcased like a file system with custom icons and images.</p>
</div>
</div>
</template>
/* custom code start */
<style>
    .dropdowntree-icon .control_wrapper {
        margin: 0 auto;
        max-width:380px; 
        padding-top: 15px
    }
    .dropdowntree-icons .e-treeview .e-list-img {
        width: 25px;
        height: 25px;
    }
    /* Loading sprite image for TreeView */
    .dropdowntree-icons .e-treeview .e-list-icon {
        background-repeat: no-repeat;
        background-image: url('./images/file_icons.png');
        height: 20px;
    }

    .dropdowntree-icons .e-treeview .e-list-icon.folder { background-position: -10px -552px }
    .e-bigger .dropdowntree-icons .e-treeview .e-list-icon.folder { background-position: -10px -550px; }
    .dropdowntree-icons .e-treeview .e-list-icon.docx { background-position: -10px -20px }
    .dropdowntree-icons .e-treeview .e-list-icon.ppt { background-position: -10px -48px }
    .dropdowntree-icons .e-treeview .e-list-icon.pdf { background-position: -10px -104px }
    .dropdowntree-icons .e-treeview .e-list-icon.images { background-position: -10px -132px }
    .dropdowntree-icons .e-treeview .e-list-icon.zip { background-position: -10px -188px }
    .dropdowntree-icons .e-treeview .e-list-icon.audio { background-position: -10px -244px }
    .dropdowntree-icons .e-treeview .e-list-icon.video { background-position: -10px -272px }
    .dropdowntree-icons .e-treeview .e-list-icon.exe { background-position: -10px -412px }
</style>
/* custom code end */
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './icons-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.iconData, value: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
            height: '220px',
            waterMark: 'Select a folder or file',
        };
    }
}
</script>