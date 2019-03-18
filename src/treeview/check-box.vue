<template>
<div>
<div class="col-lg-8 control-section">
    <div class="tree-control-wrapper">
        <ejs-treeview id='treeview' ref="treeObj" :fields='fields' :showCheckBox='true'></ejs-treeview>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <table title="Properties" id="property">
            <tbody>
                <tr>
                    <td>
                        <div>
                            <ejs-checkbox id="check" checked="true" label='Auto Check' ref="checkInstance" :change = "change"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the CheckBox functionalities of the TreeView. Click on any parent node's CheckBox to check/uncheck the node and its child nodes. The parent node's checked state will be determined by its child nodes checked state.</p>
</div>

<div id="description">
    <p>The <code>TreeView</code> component can be rendered with checkbox on the left side of each tree node. This allows the user to check more than one nodes, and this can be enabled by the <code>showCheckBox</code> property.</p>
    <p>In this demo, the TreeView is populated with checkbox enabled.</p>
    <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/check-box/" target="_blank">Checkboxes</a> section from the documentation.</p>
</div>
</div>
</template>
/* custom code start */
<style>
.tree-control-wrapper {
        max-width: 500px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import * as dataSource from './dataSource/checkbox-data.json';

Vue.use(TreeViewPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
    data: function() {
        var temp = this;
        return {
            fields: { dataSource: dataSource.checkboxData, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' },
            change: (args) => {
                temp.$refs.treeObj.autoCheck = args.checked;
            }
        };
    }
});
</script>