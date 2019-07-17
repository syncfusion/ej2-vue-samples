<template>
<div>
    <div id="multiselect-sample">
        <div class="col-lg-12 content-wrapper control-section">
            <div class="control-styles">
                <h4>Grouping with CheckBox</h4>
                <ejs-multiselect id='multiselect-checkbox' :dataSource='vegetables' :placeholder='checkWaterMark' :fields='checkFields'
                    :mode='multiMode' :popupHeight='popHeight' :showDropDownIcon='showDropDownIcon' :showSelectAll='showSelectAll'
                    :enableSelectionOrder='enableSelectionOrder' :filterBarPlaceholder='filterPlaceholder' :enableGroupCheckBox='enableGroupCheck'></ejs-multiselect>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the grouping functionalities of the MultiSelect in checkbox mode. Clicking the checkbox in group will select all the items grouped under it. Click the MultiSelect element and then type
        the character in the search box. It will display the filtered list items based on the typed characters and then select
        the multiple values through the checkbox.</p>
    </div>
    <div id="description">
        <p>The MultiSelect has built-in support to select the multiple values through the checkbox, when the <code>mode</code> property
        is set to <code>CheckBox</code>. To perform the checkbox feature in MultiSelect, the <code>CheckBoxSelection</code> module
        should be injected in the application end.</p>

    </div>
</div>
</template>
<style>
    .control-styles {
        margin: 0 auto; 
        width:300px; 
        padding-top: 25px
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend ({
    data: function() {
        return {
            checkFields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
            checkWaterMark: 'Select vegetables',
            multiMode: 'CheckBox',
            filterPlaceholder: 'Search vegetables',
            showSelectAll: true,
            showDropDownIcon: true,
            enableSelectionOrder: false,
            vegetables:data['vegetableData'],
            enableGroupCheck: true
        };
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
});
</script>