<template>
<div>
    <div id="multiselect-sample">
        <div class="col-lg-8 control-section">
            <div class="control-styles">
                <label class="h4">CheckBox</label>
                <ejs-multiselect id='multiselect-checkbox' cssClass="e-specific" :dataSource='countries' :placeholder='checkWaterMark' :fields='checkFields'
                    :mode='multiMode' :popupHeight='popHeight' :showDropDownIcon='showDropDownIcon' :showSelectAll='showSelectAll'
                    :enableSelectionOrder='enableSelectionOrder' :filterBarPlaceholder='filterPlaceholder'></ejs-multiselect>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <table id="property" class="property-panel-table" title="Properties">
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance1" label="Show Select All" :checked="true" :change="onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance2" label="Dropdown Button" :checked="true" :change="onChangeDrop"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance3" label="Selection Reorder" :checked="true" :change="onChangeReorder"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the checkbox functionalities of the MultiSelect. 
            Click the MultiSelect element and then type a character in the search box. It will display the filtered list items 
            based on the typed characters and then select the multiple values through the checkbox.</p>
    </div>
    <div id="description">
        <p>The MultiSelect has built-in support to select the multiple values through checkbox, when the <code>mode</code> property is set as <code>CheckBox</code>. 
            To perform the checkbox feature in MultiSelect,  
            the <code>CheckBoxSelection</code> module have to be injected in the application end.</p>

        <p>In this sample, the local data is bound to a collection of countries data. Also, provided options for the following:</p>
        <p> To enable/disable the <code>Select All</code> feature in the property panel.</p>
        <p> To enable/disable the <code>DropDown Button</code> feature in the property panel.</p>
        <p> To enable/disable the <code>Selection Reorder</code> feature in the property panel.</p>

        <p>The checkbox sample illustrates using the countries data.</p>

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
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent,
        'ejs-checkbox': CheckBoxComponent
    },
    data: function() {
        return {
            checkFields: { text: 'Name', value: 'Code' },
            checkWaterMark: 'Select countries',
            popHeight: '350px',
            multiMode: 'CheckBox',
            filterPlaceholder: 'Search countries',
            showSelectAll: true,
            showDropDownIcon: true,
            enableSelectionOrder: true,
            countries:data['countries']
        };
    },
    methods: {
        onChange: function() {
            var checkboxObj = this.$refs.checkboxInstance1.ej2Instances;
            // enable or disable the select all in Multiselect based on CheckBox checked state
            this.showSelectAll = checkboxObj.checked;
        },
        onChangeDrop: function() {
            var dropdownObj = this.$refs.checkboxInstance2.ej2Instances;
            // enable or disable the dropdown button in Multiselect based on CheckBox checked state
            this.showDropDownIcon = dropdownObj.checked;
        },
        onChangeReorder: function() {
            var reorderObj = this.$refs.checkboxInstance3.ej2Instances;
            // enable or disable the list reorder in Multiselect based on CheckBox checked state
            this.enableSelectionOrder = reorderObj.checked;
        }
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
}
</script>