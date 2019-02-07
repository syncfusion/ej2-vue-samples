<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox id='country' :popupHeight='height' :filtering='onFiltering' :allowFiltering='allowFiltering' :fields='fields' :dataSource='data' :placeholder='waterMark'></ejs-combobox>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the filtering functionalities of the ComboBox. Type a character in ComboBox element and choose an item from filtered list based on the typed characters.</p>
    </div>
    <div id="description">
        <p>The ComboBox has built-in support to filter the data source when <code>allowFiltering</code> is enabled. It performs
        when characters are typed in the search box. In <code>filtering</code> event, you can filter down the data source and
        return the resulted data to ComboBox via <code>updateData</code> method to display its list items.</p>
        <p>This sample illustrates that, query the data source and pass the resulted data to ComboBox through the <code>updateData</code> method in <code>filtering</code> event.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';
import * as data from './dataSource.json';

Vue.use(ComboBoxPlugin);

export default Vue.extend ({
    data: function() {
        return {
            data: data['countries'],
            fields: {text: 'Name', value:'Code'},
            height: '220px',
            waterMark: 'Select a country',
            allowFiltering: true,
            query: ''
        };
    },
    methods: {
        onFiltering: function(e) {
        this.query = new Query();
        // frame the query based on search string with filter type.
        this.query = (e.text !== '') ? this.query.where('Name', 'startswith', e.text, true) : this.query;
        // pass the filter data source, filter query to updateData method.
        e.updateData(this.data, this.query);
        }
    }
});
</script>