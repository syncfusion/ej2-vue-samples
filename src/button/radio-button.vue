<template>
<div class="control-section">
    <div class="radio-control">
       <h4 class="row">Select a payment method</h4>
        <div class="row">
            <ejs-radiobutton label="Credit/Debit Card" name="payment" value="credit/debit" :checked="true"></ejs-radiobutton>
        </div>
        <div class="row">
            <ejs-radiobutton label="Net Banking" name="payment" value="netbanking"></ejs-radiobutton>
        </div>
        <div class="row">
            <ejs-radiobutton label="Cash on Delivery" name="payment" value="cashondelivery"></ejs-radiobutton>
        </div>
        <div class="row">
            <ejs-radiobutton label="Other Wallets" name="payment" value="others"></ejs-radiobutton>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the default functionalities of the RadioButton. Select the payment mode by clicking the desired RadioButton element.</p>
</div>
<div id="description">
    <p>
        RadioButton is a graphical user interface element that allows to select one option from the choices. It contains checked and unchecked state.
    </p>
    <p>
        In this sample, Credit/Debit Card option is checked by default, and it can be achieved by using the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/radio-button/#checked">checked
        </a></code> property.
    </p>
     <p>
        More information about RadioButton can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/radio-button/getting-started">
        documentation section</a>.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
/* RadioButton Styles */
.radio-control {
  margin: 5% 0 5% 40%;
}

@media only screen and (max-width: 700px) {
  .radio-control {
    margin-left: 35%;
    margin-top: 8%;
  }

  .control-section {
    min-height: 200px;
  }
}

@media only screen and (max-width: 500px) {
  .radio-control {
    margin-top: 20%;
    margin-left: 21%;
    margin-bottom: 27%;
  }
}

.control-section .row {
  margin: 20px 0;
}

.e-bigger .radio-control h4 {
  font-size: 20px;
}
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RadioButtonPlugin);

export default Vue.extend({});
</script>