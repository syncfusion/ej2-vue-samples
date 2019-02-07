<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox id='diacritics' :allowFiltering='true' :dataSource='data' :ignoreAccent='true' placeholder='e.g. gul'></ejs-combobox>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the diacritics filter functionality of the ComboBox. Type the characters ‘gul’ in the ComboBox
        element and it displays the suggestion list ignoring the diacritics lists.</p>
    </div>
    <div id="description">
        <p>The ComboBox filtering will ignore the <a href="https://en.wikipedia.org/wiki/Diacritic" target="_blank"> diacritics </a> which makes it easier to filter the results in international characters
        lists when the <code>ignoreAccent</code> is enabled.</p>

        <p>This sample illustrates the international characters data.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(ComboBoxPlugin);

export default Vue.extend ({
    data: function() {
        return {
            data:data['data']
        };
    }
});
</script>