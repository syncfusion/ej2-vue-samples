<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-autocomplete id='books' :dataSource='booksData' :fields='fields' :filtering='onFiltering' :placeholder='watermark'></ejs-autocomplete>
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
            <code>updateData</code> method.
        </p>

        <p>In this sample, used Fuse.js library for custom filtering of books data.</p>
        <p>
            For more information about Fuse.js can be found in this
            <a href="http://fusejs.io/" target="_blank"> reference link</a>.
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
            fields: { value: 'BookName' },
            watermark: 'e.g. Node.js Succinctly',
            booksData: data['booksData']
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
            var lists = popupElement.querySelectorAll('.e-list-item');
            // For highlight the typed characters, pass the result data and list items to highlightSearch method.
            this.highlightSearch(lists, result);
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
        }
    }
});
</script>
