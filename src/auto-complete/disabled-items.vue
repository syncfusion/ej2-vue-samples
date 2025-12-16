<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='disabled-status' class='col-lg-6'>
                <div class="content">
                    <label class="h4">Status</label>
                    <ejs-autocomplete id='status' :popupHeight='height' :dataSource='statusData' :placeholder='statusText' :fields='statusFields'></ejs-autocomplete>
                </div>
            </div>
            <div id='disabled-vegetable' class='col-lg-6'>
                <div class="content">
                    <label class="h4">Vegetable</label>
                    <ejs-autocomplete id='vegetable' :popupHeight='height' :dataSource='vegetableData' :placeholder='vegetableText' :fields='vegetableFields'></ejs-autocomplete>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This example showcases the disabled items of AutoComplete. When you type on the AutoComplete the popup will open, and you will notice that the disabled items are greyed out and cannot be selected.</p>
    </div>
    <div id="description">
        <p>The AutoComplete provides options for individual items to be in either an enabled or disabled state for specific scenarios. 
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
    #disabled-status,
    #disabled-vegetable {
        margin: 0 auto;
        padding-top: 15px;
    }
</style>

<script>
import { AutoCompleteComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-autocomplete': AutoCompleteComponent
    },
    data: function() {
        return {
            statusFields: { value: "Status", disabled: "State" },
            statusText: 'Select Status',
            statusData: data['statusData'],
            vegetableFields: { groupBy: 'Category', value: 'Vegetable', disabled: 'State' },
            vegetableText: 'Select Vegetable',
            vegetableData: data['vegetables'],
            height: '200px',
        };
    }
}
</script>