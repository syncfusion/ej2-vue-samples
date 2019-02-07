<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='filtering' class='col-lg-6' style="margin: 0px auto; width:64%; padding-top: 40px;margin-left: 165px;">
                    <h4>Filtering</h4>
                    <ejs-multiselect id='countries' :dataSource='countries' :placeholder='placeholder' :fields='filterFields' :allowFiltering='allowFiltering'></ejs-multiselect>
            </div>
        </div>
    </div>
<div id="description">
    <p>The MultiSelect has built-in support to filter the data source when
        <code>allowFiltering</code> is enabled. It performs when characters are typed in the component. In
        <code>filtering</code> event, you can filter down the data source and return the resulted data to MultiSelect via
        <code>updateData</code> method to display its list items.</p>
    <p>This sample illustrates that, query the data source and pass the resulted data to MultiSelect through the
        <code>updateData</code> method in
        <code>filtering</code> event.</p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            filterFields: { text: 'Name', value: 'Code' },
            placeholder: 'Select countries',
            allowFiltering: true,
            filtering: function(e) {
             query: Query = new Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(countries, query);
        },
            countries: data['countries'],
        };
    }
});
</script>