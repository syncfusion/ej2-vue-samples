<template>
<div> 
  <div class="m-control-wrapper">
    <div id="multiselect-sample" class="control-section" style="height: 500px">
           <div id='content'>
            <div class="control-styles">
            <h4> Default Mode</h4>
            <ejs-multiselect id='sample-list1' :dataSource='sportsData' :mode='defaultMode' :placeholder='waterMark'></ejs-multiselect>
            </div>
        </div>
        
        <div class="control-styles" style="padding-top: 30px">
            <h4>Box Mode</h4>
            <ejs-multiselect id='sample-list2' :dataSource='sportsData' :mode='boxMode' :placeholder='waterMark'></ejs-multiselect>
        </div>
        
        <div class="control-styles" style="padding-top: 30px">
            <h4>Delimiter Mode</h4>
            <ejs-multiselect id='sample-list3' :dataSource='sportsData' :mode='delimiterMode' :placeholder='waterMark'></ejs-multiselect>
        </div>
        </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the MultiSelect. Type a character in the MultiSelect element or click on this element to choose one or more items from the suggestion list.</p>
    </div>
    <div id="description">
        <p>The <code>MultiSelect</code> component contains a list of predefined values, from that the user can choose a multiple
        values. </p>
    <p>In this sample, the selected items are shown with three different UI modes in three different MultiSelect elements. That three UI modes are listed here below,</p>
    <ul>
        <li><b>Default</b> - on focus-in, the component will act in <code>box mode</code> and on blur, the component will act in <code>delimiter mode</code>.</li> 
        <li><b>Box</b> - selected items will be visualized in chip.</li>
        <li><b>Delimiter</b> - selected items will be visualized in text content.</li>
    </ul>
    </div>
     </div>
</div>
</template>
<style>
    .m-control-wrapper {
        margin: 0 auto;
        width: 64%;
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            waterMark: 'Favorite Sports',
            defaultMode: 'Default',
            boxMode: 'Box',
            delimiterMode: 'Delimiter',
            sportsData: data['sportsData']
        };
    }
});
</script>