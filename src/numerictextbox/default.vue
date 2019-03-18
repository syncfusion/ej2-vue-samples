<template>
<div class="col-lg-12 control-section">
    <div class="numeric-content-wrapper">
        <div class="numeric-control-label">Numeric TextBox</div>
		<ejs-numerictextbox value="10"></ejs-numerictextbox>
        <div class="numeric-control-label">Percentage TextBox</div>
		<ejs-numerictextbox :value="value" format="p2" :min="min" :max="max" :step="step"></ejs-numerictextbox>
        <div class="numeric-control-label">Currency TextBox</div>
		<ejs-numerictextbox value="100" format="c2"></ejs-numerictextbox>
    </div>

<div id="action-description">
    <p>This sample demonstrates the default functionalities of the Numeric TextBox. Type a value in the input element to change the value dynamically, or press up/down arrow button to increase/decrease the value with a predefined step value.</p>
</div>

<div id="description">
    <p>The NumericTextBox component is used to get the number inputs from the user. The input values can be increased or decreased with a predefined step value.</p>
    <p>In this demo, the default NumericTextBox is rendered with the percent and currency formats as specified in
    <a href="https://msdn.microsoft.com/en-us/library/dwhawy9k.aspx" target="_blank"> MSDN</a>.</p>
    <p>More information on the NumericTextBox instantiation can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started/" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>
<style>
 .numeric-content-wrapper {
        width: 35%;
        margin: 0 auto;
        min-width: 185px;
    }
    
    .e-float-input.e-numeric.e-input-group {
        margin-top: 40px;
    }
    .numeric-control-label {
        padding: 24px 0px 10px 0px;
        font-size: 12px;
    }
</style>
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
export default Vue.extend ({
    data: function() {
        return {
            max: 1,
            min: 0,
            step: 0.01,
            value: '0.5'
        };
    }
});
</script>