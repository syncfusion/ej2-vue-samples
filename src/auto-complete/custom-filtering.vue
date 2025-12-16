<template>
<div>
    <div>
        <div class="col-lg-8  control-section" style="height: 350px">
            <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
                <ejs-autocomplete id='books' :dataSource='booksData' :popupHeight='height' :fields='fields' :filtering='onFiltering' :placeholder='watermark' :debounceDelay='debounceDelay'></ejs-autocomplete>
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
        <p>This sample demonstrates the custom filtering functionalities of the AutoComplete. You can choose
            an item from the suggestion list that filtered items based on approximate string matching technique.</p>
    </div>
    <div id="description">
        <p> The AutoComplete can be customized to showcase the suggestion list by using
            <code>filtering</code> event. In that, you can use your own libraries to filter the data and update it to AutoComplete suggestion list
            via
            <code>updateData</code> method. The debounce delay, in milliseconds, for filtering items in the AutoComplete component can be set using the <code>DebounceDelay</code> property.
        </p>

        <p>In this sample, used Fuse.js library for custom filtering of books data.</p>
        <p>
            For more information about Fuse.js can be found in this
            <a href="http://fusejs.io/" target="_blank"> reference link</a>.
        </p>
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
import { AutoCompleteComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import Fuse from 'fuse.js';
import data from './dataSource.json';

export default {
    components: {
        'ejs-autocomplete': AutoCompleteComponent,
        'ejs-numerictextbox': NumericTextBoxComponent 
    },
    data: function() {
        return {
            fields: { value: 'BookName' },
            watermark: 'e.g. Node.js Succinctly',
            booksData: data['booksData'],
            debounceDelay: 300,
            height: '200px',
            min: 1,
            value: '300'
        };
    },
    methods: {
        onFiltering: function(e) {
            var options = {
                keys: ['BookName'],
                includeMatches: true,
                findAllMatches: true
            };
            // create object from Fuse constructor
            var fuse = new Fuse(this.booksData, options);
            // store the search result data based on typed characters
            var result = fuse.search(e.text);
            var data = [];
            for (var i = 0; i < result.length; i++) {
                data.push(result[i].item);
            }
            // pass the filter data source to updateData method.
            e.updateData(data, null);
            var popupElement = document.getElementById('books_popup');
            if (popupElement)
            {
                var lists = popupElement.querySelectorAll('.e-list-item');
                // For highlight the typed characters, pass the result data and list items to highlightSearch method.
                this.highlightSearch(lists, result);
            }
        },
        highlightSearch: function(listItems, result) {
            if (result.length > 0) {
                for (var i = 0; i < listItems.length; i++) {
                    var innerHTML = listItems[i].innerHTML;
                    for (var j = result[i].matches[0].indices.length - 1; j >= 0; j--) {
                        var indexes = result[i].matches[0].indices[j];
                        innerHTML = innerHTML.substring(0, indexes[0]) + '<span class="e-highlight">' +
                            innerHTML.substring(indexes[0], (indexes[1] + 1)) + '</span>' + innerHTML.substring(indexes[1] + 1);
                        listItems[i].innerHTML = innerHTML;
                    }
                }
            }
        },
        onChange: function(args) {
            this.debounceDelay = args.value;
        }
    }
}
</script>
