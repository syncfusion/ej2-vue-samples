<template>
<div class="col-lg-12 control-section">
    <div class="mask-content-wrapper">
        <!-- Initialize MaskedTextBox -->
        <div class="mask-control-label">Time (ex: 10:00 PM, 10:00 AM)</div>
        <ejs-maskedtextbox mask="00:00 >PM" floatLabelType="Never" :customCharacters="customCharacter">
		</ejs-maskedtextbox>
        <!-- Initialize MaskedTextBox -->
        <div class="mask-control-label">IP Address (ex: 212.212.111.222)</div>
        <ejs-maskedtextbox mask="[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]" floatLabelType="Never">
		</ejs-maskedtextbox>
    </div>

<div id="action-description">
    <p>This sample demonstrates that the custom mask functionalities of MaskedTextBox component.
    Enter time value in meridiem format, and enter IP value in numeric format.</p>
</div>

<div id="description">
    <p>The custom mask is achieved by the following ways:</p>
    <p style="font-weight: 500">Custom characters:</p>
    <p>You can form the <b><a href="https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#mask" target="_blank">mask</a></b> with any non-mask elements (literals), and you can configure the behavior of that non-mask element as mask element
    through the <b><a href="https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#customcharacters" target="_blank">customCharacters</a></b> property.</p>
    <p>In this demo, the “Time” mask '99 : 99 >PM' contains the literals P and M, where it is configured to allow the inputs
    as 'P', 'A', 'p', 'a', and 'M', 'm'.</p>
    <p style="font-weight: 500">Regular expression:</p>
    <p>Alternatively, you can use the regular expressions as mask element to validate the input of the particular input place.</p>
    <p>Here, in the “IP Address” example, each character is masked by an regular expression to allow a particular range of
    values.</p>
    <p>For more information, you can refer to the <b><a href="https://ej2.syncfusion.com/vue/documentation/maskedtextbox/mask-configuration/#custom-characters" target="_blank">Custom characters</a></b> and
    <b><a href="https://ej2.syncfusion.com/vue/documentation/maskedtextbox/mask-configuration/#regular-expression" target="_blank">Regular expression</a></b> sections from the documentation.</p>
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
    data: function() {
        return {
            customCharacter: { P:'P,A,p,a', M:'M,m' },
        };
    },
    components: { 'ejs-maskedtextbox': MaskedTextBoxComponent }
};
</script>