<template>
<div>
    <div class="control-section">
        <div class='content' style="width: 280px;margin: 0 auto; padding-top:40px">
            <ejs-dropdownlist id='country' :dataSource='data' :fields='fields' :filtering='onFiltering' :filterBarPlaceholder="filterPlaceholder"
                :popupHeight='height' :allowFiltering='true' :placeholder='watermark'></ejs-dropdownlist>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the filtering functionalities of the DropDownList. Click the DropDownList element and then type a character in the search box. It will display the
            filtered list items based on the typed characters.</p>
    </div>
    <div id="description">
        <p>The DropDownList has built-in support to filter the data source, when <code>allowFiltering</code> is enabled. It performs
            when characters are typed in the search box. In the <code>filtering</code> event, you can filter down the data source and
            return the resulted data to DropDownList via <code>updateData</code> method to display its list items.</p>
        <p>This sample illustrates that, query the data source and pass the resulted data to DropDownList through the <code>updateData</code> method in <code>filtering</code> event.</p>
        <p>More information on the filtering feature configuration can be found in the
            <a href="http://ej2.syncfusion.com/angular/documentation/drop-down-list/filtering.html" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>
<script>
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';
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
        };
    },
    methods: {
        onFiltering: function(e) {
            var query = new Query();
            //frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
            //pass the filter data source, filter query to updateData method.
            e.updateData(this.data, query);
        }
    }
}
</script>