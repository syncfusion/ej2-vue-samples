<template>
<div class="col-lg-12 control-section">
    <div class="numeric-content-wrapper">
        <div class="numeric-control-label">Enter the distance</div>
		<ejs-numerictextbox format="###.### km" value="250" min="0"></ejs-numerictextbox>
        <div class="numeric-control-label">Enter the tax</div>
		<ejs-numerictextbox format="### '%'" value="25" min="0" max="100"></ejs-numerictextbox>
        <div class="numeric-control-label">Enter the amount</div>
		<ejs-numerictextbox format="$ ###.##" min="0" value="1025"></ejs-numerictextbox>
    </div>

<div id="action-description">
    <p>This sample demonstrates the custom format functionalities of the Numeric TextBox. The value of Numeric TextBox will be displayed with defined custom format while type a value or change a value using up/down buttons in the input boxes.</p>
</div>

<div id="description">
    <p>The NumericTextBox provides an option to customize the display format of the numeric value using the
    <a href="https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#format" target="_blank">format</a> property.
    It accepts the standard numeric format string and
    <a href="https://msdn.microsoft.com/en-us/library/0c899ak8.aspx" target="_blank"> custom numeric format string</a> as specified in MSDN. The formatted value displays when the component is not focused.    </p>
    <p>In this demo, NumericTextBox control renders with the custom format ###.## km.</p>
    <p>More information on the format configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started/#formatting-the-value" target="_blank"> documentation section</a>.
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
export default Vue.extend ({});
</script>