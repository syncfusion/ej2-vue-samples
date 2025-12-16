<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='tag' class='col-lg-6'>
                <div class="content">
                    <label class="h4">Tags</label>
                    <ejs-multiselect id='tag' popupHeight="200px" :dataSource='tagData' :placeholder='tagText' :fields='tagFields' :allowFiltering='true' :showDropDownIcon='true'></ejs-multiselect>
                </div>
            </div>
            <div id='#disabled-vegetable' class='col-lg-6'>
                <div class="content">
                    <label class="h4">Vegetables</label>
                    <ejs-multiselect id='vegetable' popupHeight="200px" :dataSource='vegetableData' :placeholder='vegetableText' :fields='vegetableFields' :mode='multiMode' :showDropDownIcon='true'></ejs-multiselect>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This example showcases the disabled items of MultiSelect. When you click on the MultiSelect the popup will open, and you will notice that the disabled items are greyed out and cannot be selected.</p>
    </div>
    <div id="description">
        <p>The MultiSelect provides options for individual items to be in either an enabled or disabled state for specific scenarios. 
        Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the <code>fields.disabled</code> property.</p>
    </div>
</div>
</template>

<style>
    .content {
        width: 250px;
        margin: 0 auto;
    }

    .content .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
    
    #tag,
    #disabled-vegetable {
        margin: 0 auto;
        padding-top: 15px;
    }    
</style>

<script>
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent
    },
    data: function() {
        return {
            tagFields: { value: "ID", text: "Text", disabled: "State" },
            tagText: 'Select Tags',
            tagData: data['tagData'],
            vegetableFields: { groupBy: 'Category', text: 'Vegetable', value: 'Id', disabled: 'State' },
            vegetableText: 'Select Vegetables',
            vegetableData: data['vegetables'],
            multiMode: 'CheckBox',
        };
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
}
</script>