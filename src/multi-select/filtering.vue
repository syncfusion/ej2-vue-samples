<template>
<div>
    <div>
        <div class="col-lg-8  control-section" style="height: 350px">
            <div id='filtering' class='col-lg-6' style="margin: 0px auto; width:64%; padding-top: 40px;margin-left: 165px;">
                <label class="h4">Filtering</label>
                <ejs-multiselect id='countries' popupHeight="200px" :dataSource='countries' :placeholder='placeholder' :fields='filterFields' :allowFiltering='allowFiltering' :debounceDelay="debounceDelay"></ejs-multiselect>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <div id="property" class="property-panel-table" title="Properties">
                <label className="example-label">Debounce Delay</label>
                <ejs-numerictextbox value="300" format="n0" :change="onChange" :min="min"></ejs-numerictextbox>
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
        <code>filtering</code> event. The debounce delay, in milliseconds, for filtering items in the MultiSelect component can be set using the <code>DebounceDelay</code> property.</p>
</div>
</div>
</template>
<style>
.content-wrapper .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
.property-panel-content {
        padding: 0 10px 10px 0;
    }

.content {
        width: 43%;
        margin: 0 auto;
        min-width: 185px;
        padding: 25px 0px;
    }
.control-label {
        padding: 24px 0px 0px 0px;
        font-size: 12px;
        opacity: 0.54;
    }
</style>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent,
        'ejs-numerictextbox': NumericTextBoxComponent
    },
    data: function() {
        return {
            filterFields: { text: 'Name', value: 'Code' },
            placeholder: 'Select countries',
            allowFiltering: true,
            debounceDelay: 300,
            min: 1,
            value: '300',
            filtering: function(e) {
             query: Query = new Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(countries, query);
        },
            countries: data['countries'],
        };
    },
    methods: {
        onChange: function (args) {
            this.debounceDelay = args.value;
          }
    }
}
</script>