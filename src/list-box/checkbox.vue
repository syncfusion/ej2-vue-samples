<template>
    <div class="control-section">
        <div id="listbox-selection">
            <ejs-listbox :dataSource="data" :selectionSettings="selectionSettings"></ejs-listbox>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the checkbox functionalities of the ListBox. Click one or more items from the list of items in the ListBox.</p>
        </div>
        <div id="description">
            <p>The <code>ListBox</code> component has built-in support to select multiple items from the list. The <code>CheckBox</code> selection can be enabled by setting the <code>type</code> as
                <code>CheckBox</code> in the <code>selectionSettings</code> property.</p>
            <p>To perform the checkbox feature in the ListBox, the <code>CheckBoxSelection</code> module has to be injected at the application level.</p>
            <p> More information about checkbox selection in ListBox can be found in the
                <a href="https://ej2.syncfusion.com/vue/documentation/list-box/" target="_blank"> documentation section</a>.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    #listbox-selection {
        width: 25%;
        margin: auto;
    }
    @media screen and (max-width: 590px) {
        #listbox-selection {
            width: 100%;
        }
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { ListBoxPlugin, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './datasource.json';

Vue.use(ListBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            // Set the info to the dataSource property.
            data: data.info,
            // Set the selection settings with showCheckbox as enabled.
            selectionSettings: { showCheckbox: true }
        };
    },
    provide: {
        // Injecting CheckBoxSelection module
        listbox: [CheckBoxSelection]
    }
});
</script>