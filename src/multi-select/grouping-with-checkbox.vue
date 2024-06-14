<template>
<div>
    <div id="multiselect-sample">
        <div class="col-lg-12 control-section">
            <div class="control-styles">
                <label class="h4">Grouping with CheckBox</label>
                <ejs-multiselect id='multiselect-checkbox' cssClass="e-specific" :dataSource='vegetables' :placeholder='checkWaterMark' :fields='checkFields'
                    :mode='multiMode' :popupHeight='popupHeight' :showDropDownIcon='showDropDownIcon' :showSelectAll='showSelectAll'
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
<style scoped>
    .control-styles {
        margin: 0 auto; 
        width:300px; 
        padding-top: 25px
    }
    .control-styles .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
    .e-specific.e-multiselect.e-input-group .e-ddl-icon::before {
        transform: translateY(1px);
    }

   .e-bigger .e-specific.e-multiselect.e-input-group .e-ddl-icon::before {
        transform: translateY(2px);
    }
</style>
<script>
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent,
    },
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
            enableGroupCheck: true,
            popupHeight: '250px'
        };
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
}
</script>