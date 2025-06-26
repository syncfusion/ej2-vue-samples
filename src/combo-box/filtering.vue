<template>
<div>
    <div>
        <div class="col-lg-8  control-section" style="height: 350px">
            <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
                <ejs-combobox id='country' :popupHeight='height' :filtering='onFiltering' :allowFiltering='allowFiltering' :fields='fields' :dataSource='data' :placeholder='waterMark' :debounceDelay="debounceDelay"></ejs-combobox>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <div id="property" class="property-panel-table" title="Properties">
                <label className="example-label">Debounce Delay</label>
                <ejs-numerictextbox value="300" format="n0" :change="onChange" :min="min"></ejs-numerictextbox>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the filtering functionalities of the ComboBox. Type a character in ComboBox element and choose an item from filtered list based on the typed characters.</p>
    </div>
    <div id="description">
        <p>The ComboBox has built-in support to filter the data source when <code>allowFiltering</code> is enabled. It performs
        when characters are typed in the search box. In <code>filtering</code> event, you can filter down the data source and
        return the resulted data to ComboBox via <code>updateData</code> method to display its list items.</p>
        <p>This sample illustrates that, query the data source and pass the resulted data to ComboBox through the <code>updateData</code> method in <code>filtering</code> event. The debounce delay, in milliseconds, for filtering items in the ComboBox component can be set using the <code>DebounceDelay</code> property.</p>
    </div>
</div>
</template>
<style scoped>
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
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { Query } from '@syncfusion/ej2-data';
import data from './dataSource.json';

export default {
    components: {
        'ejs-combobox': ComboBoxComponent,
        'ejs-numerictextbox': NumericTextBoxComponent
    },
    data: function() {
        return {
            data: data['countries'],
            fields: {text: 'Name', value:'Code'},
            height: '220px',
            waterMark: 'Select a country',
            allowFiltering: true,
            query: '',
            debounceDelay: 300,
            min: 1,
            value: '300',
        };
    },
    methods: {
        onFiltering: function(e) {
        this.query = new Query();
        // frame the query based on search string with filter type.
        this.query = (e.text !== '') ? this.query.where('Name', 'startswith', e.text, true) : this.query;
        // pass the filter data source, filter query to updateData method.
        e.updateData(this.data, this.query);
        },
        onChange: function (args) {
          this.debounceDelay = args.value;
        }
    }
}
</script>