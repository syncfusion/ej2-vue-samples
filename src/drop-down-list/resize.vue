<template>
<div>
    <div class="control-section">
        <div class='content' style="width: 280px;margin: 0 auto; padding-top:40px">
            <ejs-dropdownlist id='country' :dataSource='data' :fields='fields' 
                :popupHeight='height' :allowResize='allowResize' :placeholder='watermark'></ejs-dropdownlist>
        </div>
    </div>
    <div id="action-description">
          <p>This example demonstrates the custom resizing functionality of the DropDownList component. You can adjust the popup size based on your preferences, providing more control over its appearance.</p>
    </div>
    <div id="description">
        <p>Enable the resize feature of the DropDownList popup by setting AllowResize to true. This allows you to drag the resize handle at the bottom-right corner of the popup, adjusting its dimensions to suit your preferences and enhancing its visual management.</p>
    </div>
</div>
</template>
<script>
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function() {
        return {
            fields: { text: 'Name', value: 'Code' },
            height: '220px',
            watermark: 'Select a country',
            filterPlaceholder: 'Search',
            data: data['countries'],
            allowResize:true
        };
    },
}
</script>