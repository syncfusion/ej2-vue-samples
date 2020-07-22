<template>
<div>
<div class="col-lg-8 control-section dropdowntree-check">
    <div class="control_wrapper">
        <ejs-dropdowntree id='dropdowntree' ref="ddtreeObj" :fields='fields' :showCheckBox='true' mode= 'Delimiter' :placeholder='waterMark' :popupHeight='height'></ejs-dropdowntree>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <table title="Properties" id="property">
            <tbody>
                <tr>
                    <td>
                        <div>
                            <ejs-checkbox id="check" label='Auto Check' ref="checkInstance" :change = "change"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div id="action-description">
    <p>This sample explains you about the CheckBox functionalities of the Dropdown Tree. Click on any parent item's
        CheckBox to check or uncheck the item and its child items. The parent item's checked state will be determined by
        its child item’s checked state.</p>
</div>

<div id="description">
    <p>The <code>Dropdown Tree</code> component can be rendered with the checkbox on the left side of each tree item.
        This allows the user to check more than one item, and this can be enabled by the <code>showCheckBox</code>
        property.</p>
    <p>In this demo, the Dropdown Tree is populated with the checkbox enabled feature.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.dropdowntree-check .control_wrapper {
        margin: 0 auto;
        width:250px; 
        padding-top: 15px
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownTreePlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as dataSource from './checkbox-data.json';

Vue.use(DropDownTreePlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
    data: function() {
        var temp = this;
        return {
            fields: { dataSource: dataSource.checkboxData, value: 'id', text: 'name', parentValue: 'pid', hasChildren: 'hasChild' },
            height: '200px',
            waterMark: 'Select items',
            change: (args) => {
                temp.$refs.ddtreeObj.treeSettings = {autoCheck : args.checked}
            }
        };
    }
});
</script>