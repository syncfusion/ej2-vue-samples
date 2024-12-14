<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-autocomplete id='books' :dataSource='booksData' :fields='fields' :allowResize='allowResize' :placeholder='watermark'></ejs-autocomplete>
        </div>
    </div>
    <div id="action-description">
          <p>This example demonstrates the custom resizing functionality of the AutoComplete component. You can adjust the popup size based on your preferences, providing more control over its appearance.</p>
    </div>
    <div id="description">
        <p>Enable the resize feature of the AutoComplete popup by setting AllowResize to true. This allows you to drag the resize handle at the bottom-right corner of the popup, adjusting its dimensions to suit your preferences and enhancing its visual management.</p>
    </div>
</div>
</template>
<script>
import { AutoCompleteComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-autocomplete': AutoCompleteComponent 
    },
    data: function() {
        return {
            fields: { value: 'BookName' },
            watermark: 'Select a BookName',
            booksData: data['booksData'],
            allowResize:true
        };
    },
}
</script>
