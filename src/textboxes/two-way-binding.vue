<template>
<div id="textboxWrapper" class="col-lg-12 control-section">
    <div class="textbox-label"> Two-way binding</div>
    <div class="col-lg-6">
        <div id="wrapper">
            <ejs-textbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-textbox>
        </div>
    </div> 
    <div class="col-lg-6">
        <div id="wrapper">
            <ejs-textbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-textbox>
        </div>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates two-way binding support of the Textbox component. Enter a value in any textboxes to see an action. 
    </p>
    </div>

    <div id="description">
    <p>In this sample, the two-way binding support is achieved using the v-model directive in Vue. When you change a value in the textbox, another textbox's value updates automatically.</p>
    <p>The v-model directive updates the template every time whenever the model gets updated and vice versa.</p>
    </div>
</div>
</template>

<style>
    #wrapper {
    max-width: 246px;
    margin: 30px auto;
    padding-top: 15px;
    }

    #textboxWrapper .textbox-label {
    text-align: center;
    width: 200px;
    margin: 0 auto;
    font-size: 14px;
    user-select: none;
    font-weight: 500;
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif",
        "-apple-system", "BlinkMacSystemFont";
    }
</style>


<script>
import Vue from "vue";
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            value: null
         }
    }
});

</script>