<template>
<div>
    <div class="control-section">
        <div class="col-lg-12" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
                <ejs-autocomplete id='games' :dataSource='sportsData' :placeholder='waterMark'></ejs-autocomplete>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the AutoComplete. Type a character in the AutoComplete element and choose an item from the suggestion list.</p>
    </div>
    <div id="description">
        <p>The <code>AutoComplete</code> component provides the matched suggestion list when a character is typed in the input, from that the
            user can select one.</p> By default, the filter type value is <code>contains</code>.
        <p>The default sample illustrates the use of AutoComplete that allows the end-users to select an item from the suggestion list.
        </p>
        <p> More information on the AutoComplete instantiation can be found in the
            <a href="https://ej2.syncfusion.com/vue/documentation/auto-complete/getting-started" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>

<script>
import { AutoCompleteComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-autocomplete': AutoCompleteComponent
    },
    data: function() {
        return {
            waterMark: 'e.g. Basketball',
            sportsData: data['sportsData']
        };
    }
}
</script>
