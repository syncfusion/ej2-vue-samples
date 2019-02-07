<template>
<div>
    <div class="control-section">
        <div class="col-lg-12  content-wrapper" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
                <ejs-combobox id='games' :dataSource='sportsData' :placeholder='waterMark'></ejs-combobox>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the ComboBox. Type a character in the ComboBox element or click the drodown icon to choose an item from the <code>options</code> list.
        The selected item's <code>value</code> and <code>text</code> property values will be shown in the property panel.</p>
    </div>
    <div id="description">
        <p>The <code>ComboBox</code> component allows the user to type a value, or choose an option from the list of predefined options.</p>
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
            waterMark: 'e.g. Basketball',
            sportsData:data['sportsDataa']
        };
    }
});
</script>