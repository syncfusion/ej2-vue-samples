<template>
<div class="col-lg-12 control-section">
    <div class="mask-content-wrapper">
        <!-- Initialize MaskedTextBox -->
        <div class="mask-control-label">Mobile Number</div>
        <ejs-maskedtextbox mask="000-000-0000">
		</ejs-maskedtextbox>
        <!-- Initialize MaskedTextBox -->
		<div class="mask-control-label">Country ISO Code</div>
        <ejs-maskedtextbox mask=">LL / LLL">
		</ejs-maskedtextbox>
        <!-- Initialize MaskedTextBox -->
		<div class="mask-control-label">D.O.B</div>
        <ejs-maskedtextbox mask="00/00/0000">
		</ejs-maskedtextbox>
        <!-- Initialize MaskedTextBox -->
		<div class="mask-control-label">Product Key</div>
        <ejs-maskedtextbox mask=">AAAAA-AAAAA-AAAAA-AAAAA">
		</ejs-maskedtextbox>
    </div>

<div id="action-description">
    <p>This sample demonstrates that the default functionalities of MaskedTextBox component.
    Enter numeric value for “Mobile Number” textbox then press tab key and then enter “Country ISO Code” in alphabetic format, then type “D.O.B” in numeric format.
    Finally enter the “Product Key” in alpha numeric format.</p>
</div>

<div id="description">
     <p>The <b>MaskedTextBox</b> is a textbox extended component that allows the user to enter only the valid input based
     on the provided <b><a href="https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#mask" target="_blank">mask</a></b>. It is used to get the input with specific formats like Phone number, Date, Time, IP, Social security number, etc.</p>
     <p>MaskedTextBox supports the list of <b><a href="https://ej2.syncfusion.com/vue/documentation/maskedtextbox/mask-configuration/#standard-mask-elements" target="_blank">mask elements</a></b> based
     on the standard
     <b><a href="https://msdn.microsoft.com/en-us/library/system.windows.forms.maskedtextbox.mask(v=vs.110).aspx" target="_blank"> MSDN</a></b> mask
     elements.</p>
     <p>More information about the MaskedTextBox instantiation can be found in the <b><a href="https://ej2.syncfusion.com/vue/documentation/maskedtextbox/getting-started/" target="_blank">documentation</a></b> section.</p>
</div>
</div>
</template>
<style scoped>
 .mask-content-wrapper {
        width: 30%;
        margin: 0 auto;
        min-width: 185px;
    }
    
    .mask-control-label {
        padding: 24px 0px 10px 0px;
        font-size: 12px;
    }
</style>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    components: { 'ejs-maskedtextbox': MaskedTextBoxComponent }
};
</script>