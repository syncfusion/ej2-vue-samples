<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='resize' class='col-lg-6' style="margin: 0px auto; width:64%; padding-top: 40px;margin-left: 165px;">
                <label class="h4">Resize</label>
                    <ejs-multiselect id='countries' :dataSource='countries' :placeholder='placeholder' :fields='fields' :allowResize='allowResize'></ejs-multiselect>
            </div>
        </div>
    </div>
<div id="action-description">
<p>This example demonstrates the custom resizing functionality of the MultiSelect component. You can adjust the popup size based on your preferences, providing more control over its appearance.</p>
</div>
<div id="description">
     <p>Enable the resize feature of the MultiSelect popup by setting AllowResize to true. This allows you to drag the resize handle at the bottom-right corner of the popup, adjusting its dimensions to suit your preferences and enhancing its visual management.</p>
</div>
</div>
</template>
<style>
.content-wrapper .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
</style>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent
    },
    data: function() {
        return {
            fields: { text: 'Name', value: 'Code' },
            placeholder: 'Select countries',
            allowResize: true,
            countries: data['countries'],
            
        };
    }
}
</script>