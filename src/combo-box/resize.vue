<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox id='country' :popupHeight='height' :allowResize='allowResize' :fields='fields' :dataSource='data' :placeholder='waterMark'></ejs-combobox>
        </div>
    </div>
    <div id="action-description">
         <p>This example demonstrates the custom resizing functionality of the ComboBox component. You can adjust the popup size based on your preferences, providing more control over its appearance.</p>
    </div>
    <div id="description">
         <p>Enable the resize feature of the ComboBox popup by setting AllowResize to true. This allows you to drag the resize handle at the bottom-right corner of the popup, adjusting its dimensions to suit your preferences and enhancing its visual management.</p> 

    </div>
</div>
</template>
<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-combobox': ComboBoxComponent
    },
    data: function() {
        return {
            data: data['countries'],
            fields: {text: 'Name', value:'Code'},
            height: '220px',
            waterMark: 'Select a country',
            allowResize: true,
        };
    },
}
</script>
