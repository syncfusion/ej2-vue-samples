<template>
<div>
    <div class="col-lg-12 control-section">
        <div class="numeric-content-wrapper">
            <div class="numeric-control-label">Numeric TextBox</div>
            <ejs-numerictextbox format="n3" decimals="3" validateDecimalOnType=true value="10"></ejs-numerictextbox>
            <div class="numeric-control-label">Percentage TextBox</div>
            <ejs-numerictextbox value="0.5" format="p3" decimals="3" validateDecimalOnType=true min="0" max="1" step="0.01"></ejs-numerictextbox>
            <div class="numeric-control-label">Currency TextBox</div>
            <ejs-numerictextbox value="100" format="c3" validateDecimalOnType=true decimals="3"></ejs-numerictextbox>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the decimal functionalities of the Numeric TextBox. Type a value in the input element to change dynamically, and it allows maximum of 3 decimal digits.</p>
    </div>

    <div id="description">
        <p>The NumericTextBox provides an option to restrict the number of decimal values, by using the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#decimals" target="_blank"> decimals</a> property. To restrict the number of decimal values on typing, use the decimals and validateDecimalOnType properties.</p>
        <p>
        More information on the restrict decimals configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started/#precision-of-numbers" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>
<style>
.numeric-content-wrapper {
        width: 35%;
        margin: 0 auto;
        min-width: 185px;
    }
    
    .numeric-control-label {
        padding: 24px 0px 10px 0px;
        font-size: 12px;
    }
    
    .e-float-input.e-numeric.e-input-group {
        margin-top: 40px;
    }
</style>
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
export default Vue.extend ({});
</script>