<template>
<div>
    <div class="control-section">
        <div class="col-lg-12  content-wrapper" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
                <ejs-dropdownlist id='games' :dataSource='sportsData' :popupHeight='height' :placeholder='waterMark'></ejs-dropdownlist>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the DropDownList. Click the DropDownList element and select an item from the <code>options</code> list.
    The selected item's <code>value</code> and <code>text</code> property values will be shown the in property panel.</p>
    </div>
    <div id="description">
        <p>The <code>DropDownList</code> component contains a list of predefined values from that the user can choose a single
        value. </p>
    <p>The default sample illustrates the use of DropDownList that allows the end-users to select an item from the <code>options</code> list. The selected item's <code>value</code> and <code>text</code> property values will be displayed in the property
        panel.
    </p>
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
            waterMark: 'Select a game',
            height: '220px',
            sportsData: data['sportsDataa']
        };
    }
});
</script>