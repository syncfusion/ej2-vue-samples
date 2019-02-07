<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-dropdownlist id='diacritics' :allowFiltering='true' :dataSource='data' :ignoreAccent='true' placeholder='Select a value' filterBarPlaceholder='e.g: gul'></ejs-dropdownlist>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the diacritics filter functionality of the DropDownList. Type the characters ‘gul’ in the DropDownList
        filterbar and it displays the suggestion list ignoring the diacritics lists.</p>
    </div>
    <div id="description">
        <p>The DropDownList filtering will ignore the <a href="https://en.wikipedia.org/wiki/Diacritic" target="_blank"> diacritics </a> which makes it easier to filter the results in international characters
        lists when the <code>ignoreAccent</code> is enabled.</p>

    <p>This sample illustrates using the international characters data.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(DropDownListPlugin);

export default Vue.extend ({
    data: function() {
        return {
            data: data['data']
        };
    }
});
</script>