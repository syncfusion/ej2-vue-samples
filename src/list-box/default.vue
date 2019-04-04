<template>
    <div class="col-lg-12 control-section">
        <div id="listbox-control">
            <h4>Select your favorite car:</h4>
            <ejs-listbox :dataSource="data"></ejs-listbox>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the default functionalities of a ListBox. Click any item to select a single item or ctrl + click to select multiple items.</p>
        </div>
        <div id="description">
            <p>The <code>ListBox</code> is a graphical user interface component used to display a list of items. Users can select one or more items in the list using a checkbox or by keyboard selection.
                It supports sorting, grouping, reordering, and drag and drop of items.</p>
            <p>In this sample, data is bound to the ListBox using the <a target="_blank" href="https://ej2.syncfusion.com/documentation/vue/api/list-box/#datasource"><code>dataSource
                </code></a> property. You can select your favorite cars from the ListBox.</p>
            <p> More information about the ListBox can be found in the
                <a href="https://ej2.syncfusion.com/documentation/vue/list-box/getting-started" target="_blank"> documentation</a> section.
            </p> 
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    #listbox-control {
        width: 350px;
        margin: auto;
    }
    @media screen and (max-width: 590px) {
        #listbox-control {
            width: 100%;
        }
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './datasource.json';

Vue.use(ListBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            // Set the info to the dataSource property.
            data: data.info
        };
    }
});
</script>