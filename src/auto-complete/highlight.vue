<template>
<div>
    <div>
        <div class="col-lg-8  content-wrapper control-section" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
                <ejs-autocomplete id='sample-list' :dataSource='countriesData' :filterType='filterType' :highlight='true' :fields='fields' placeholder='e.g. Australia'></ejs-autocomplete>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <table id="property" title="Properties" style="width: 100%;">
                <tr>
                    <td style="width:50%">FilterType :</td>
                    <td style="padding-top: 10px">
                        <ejs-dropdownlist id='filter' :dataSource='filterData' :change='onChange' :width='width' text='Contains' placeholder='Find a type'></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">    
        <p>This sample demonstrates the highlight functionalities of the AutoComplete. Type a character(s) in the AutoComplete element and the typed characters are highlighted in the suggestion list.
        By default, <code>Contains</code> filter type is set in this sample and provided with the options to choose different filter type in the property panel.</p>    
    </div>
    <div id="description">
        <p>The AutoComplete has built-in support to highlight the searched characters on the suggested list items when <code>highlight</code> is enabled.</p>

        <p>This sample illustrates that, the searched characters on the country suggestion list items are highlighted.</p>
        <p> More information on the highlight search feature configuration can be found in the
            <a href="http://ej2.syncfusion.com/angular/documentation/auto-complete/how-to.html#custom-highlight-search" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(AutoCompletePlugin);

export default Vue.extend ({
    data: function() {
        return {
            fields: { value: 'Name' },
            filterType: 'Contains',
            countriesData: data['countries'],
            width: '150px',
            filterData: ['Contains', 'StartsWith', 'EndsWith']
        };
    },
    methods: {
        onChange: function(e) {
            this.filterType = e.itemData.value;
        }
    }
});
</script>