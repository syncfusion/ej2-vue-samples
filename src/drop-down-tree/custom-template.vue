<template>
<div>
<div class="col-lg-12 control-section dropdowntree-custom">
    <div class="control_wrapper">
        <ejs-dropdowntree id='dropdowntree' ref="ddtreeObj" :fields='fields' :customTemplate='customTemplate' :showCheckBox='true' :treeSettings='treeSettings' mode= 'Custom' :placeholder='waterMark' :popupHeight='height'></ejs-dropdowntree>
    </div>
</div>

<div id="action-description">
    <p>This sample explains you about the custom template support of the Dropdown Tree. When you click the checkbox, the selected items will be visualized based on the given custom template.
    </p>
</div>

<div id="description">
    <p>The <code>Dropdown Tree</code> component allows the user to select more than one value while enabling the checkbox or multi selection support.</p>
    <p>The user can visualize the custom template instead of the selected item texts in the Dropdown Tree by enabling the <code>mode</code> type as <code>Custom</code>. User can also customize the given template by using the <code>customTemplate</code> property.
    </p>
    <p>In this demo, the Dropdown Tree is populated with the checkbox and custom template feature.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.dropdowntree-custom .control_wrapper {
        margin: 0 auto;
        width:250px; 
        padding-top: 15px
    }
</style>
/* custom code end */
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './customTemplate-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.checkboxData, value: 'id', text: 'name', parentValue: 'pid', hasChildren: 'hasChild' },
            height: '200px',
            waterMark: 'Select items',
            treeSettings: { autoCheck: true },
            customTemplate: '${value.length} item(s) selected'
        };
    }
}
</script>