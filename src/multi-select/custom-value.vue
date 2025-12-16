<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='customvalue' class='col-lg-6' style="margin: 0px auto; width:64%; padding-top: 40px;margin-left: 165px;">
                <label class="h4"> Custom Values</label>
                    <ejs-multiselect id='countries' popupHeight="200px" :dataSource='countries' :placeholder='placeholder' :fields='customFields' :allowCustomValue='allowCustomValue' :mode='boxMode'></ejs-multiselect>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the custom value functionalities of the MultiSelect. Type a character(s) in the MultiSelect
        element that are not present in the dataSource, you can select and tag that custom typed characters as new item from
        the suggestion list.</p>
</div>

<div id="description">
    <p>The MultiSelect allows the user to add a non-present option to the component value when the
        <code>allowCustomValue</code> is enabled. While selecting new custom value the
        <code>customValueSelection</code> event will be triggered.</p>
</div>
</div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent
    },
    data: function() {
        return {
            customFields: { text: 'Name', value: 'Code' },
            placeholder: 'Select countries',
            allowCustomValue: true,
            boxMode:'Box',
            countries:data['countries'],
        };
    }
}
</script>

<style>
 .col-lg-6 .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
</style>