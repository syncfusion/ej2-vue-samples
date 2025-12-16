<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-autocomplete id='diacritics' :popupHeight='height' :dataSource='data' :ignoreAccent='true' placeholder='e.g. gul'></ejs-autocomplete>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the diacritics filter functionality of the AutoComplete. Type "the characters ‘gul’ in the
            AutoComplete element and it displays the suggestion list ignoring the diacritics lists.</p>
    </div>
    <div id="description">
        <p>The AutoComplete filtering will ignore the <a href="https://en.wikipedia.org/wiki/Diacritic" target="_blank"> diacritics </a> which makes it easier to filter the results in international characters
            lists when the <code>ignoreAccent</code> is enabled.</p>

        <p>This sample illustrates using the international characters data.</p>
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
            data:data['data'],
            height: '200px',
        };
    }
}
</script>