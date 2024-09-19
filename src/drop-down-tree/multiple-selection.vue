<template>
<div>
<div class="col-lg-12 control-section dropdowntree-multi">
    <div class="control_wrapper">
        <ejs-dropdowntree id='dropdowntree' :fields='fields' :allowMultiSelection='true' :placeholder='waterMark' :popupHeight='height'></ejs-dropdowntree>
    </div>
</div>

<div id="action-description">
  <p>This sample explains you about the multiple item selection functionalities of the Dropdown Tree. To select multiple
    items, you may press and hold the CTRL key and then select the desired items; or select any item by selecting it and
    then press and hold the SHIFT key to select a range of items continuously.</p>
</div>

<div id="description">
  <p>The <code>Dropdown Tree</code> component allows you to select multiple items by enabling the
    <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#allowmultiselection">allowMultiSelection</a> property.</p>
  <p>In this demo, the Dropdown Tree is enabled with multiple selection.</p>
</div>
</div>
</template>
/* custom code start */
<style>
 .dropdowntree-multi .control_wrapper {
        margin: 0 auto;
        width:250px; 
        padding-top: 15px
    }
</style>
/* custom code end */
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './multiSelect-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.multiSelectData, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild'},
            height: '200px',
            waterMark: 'Select items',
        };
    }
}
</script>