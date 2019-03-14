<template>
    <div id="maskWrapper" class="col-lg-12 control-section">
        <!-- Initialize the first  MaskedTextBox -->
        <div class="control-label"> Two-Way Binding</div>
        <div class="col-lg-6 ">
            <div id="mask-wrapper">
                <div id="twoWayWrapper">
                    <ejs-maskedtextbox id="first_mask" :placeholder="mask" mask="999-999-9999" v-model="value"></ejs-maskedtextbox>
                </div>
            </div>
        </div>
        <!--Initialize second MaskedTextBox -->
        <div class="col-lg-6 ">
            <div id="mask-wrapper">
                <div id="twoWayWrapper">
                    <ejs-maskedtextbox id="second_mask" :placeholder="mask" mask="999-999-9999" v-model="value"></ejs-maskedtextbox>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the MaskedTextBox component with Two-way binding. It keeps the data in sync with your
                DOM without doing anything.</p>
        </div>

        <div id="description">
            <p>Model binding sample illustrates the two-way binding. when you change the value in one MaskedTextBox component,
                it will update in the other MaskedTextBox by using value property.</p>
            <p>More information about the MaskedTextBox instantiation can be found in the <b><a href="https://ej2.syncfusion.com/vue/documentation/maskedtextbox/getting-started/#model-binding" target="_blank">documentation</a></b>                section.</p>
        </div>
    </div>
</template>
<style>
    #mask-wrapper {
        width: 65%;
        margin: 30px auto;
        padding-top: 15px;
        min-width: 185px;
    }
    
    #maskWrapper .control-label {
        width: 200px;
        margin: 0 auto;
        font-size: 14px;
        user-select: none;
        font-weight: 500;
    }
</style>
<script>
    import Vue from "vue";
    import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
    Vue.use(TextBoxPlugin);

    import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
    Vue.use(MaskedTextBoxPlugin);
    export default Vue.extend({
        data: function () {
            return {
                mask: "Enter a value",
                value: null
            };
        }
    });

</script>