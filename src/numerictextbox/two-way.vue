<template>
    <div id="numericWrapper" class="col-lg-12 control-section">
        <!-- Initialize the first NumericTextBox -->
        <div class="control-label"> Two-Way Binding</div>
        <div class="col-lg-6 ">
            <div id="num-wrapper">
                <div id="twoWayWrapper">
                    <ejs-numerictextbox id="first_numeric" :placeholder="numeric" v-model="value"></ejs-numerictextbox>
                </div>
            </div>
        </div>
        <!-- Initialize second NumericTextBox -->
        <div class="col-lg-6 ">
            <div id="num-wrapper">
                <div id="twoWayWrapper">
                    <ejs-numerictextbox id="second_numeric" :placeholder="numeric" v-model="value"></ejs-numerictextbox>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the NumericTextBox component with Two-way binding. It keeps the data in sync with your
                DOM without doing anything.</p>
        </div>

        <div id="description">
            <p>Model binding sample illustrates the two-way binding. when you change the value in one NumericTextBox component,
                it will update in the other NumericTextBox by using value property.</p>
            <p>More information about the NumericTextBox instantiation can be found in the <b><a href="https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started/#model-binding" target="_blank">documentation</a></b>                section.</p>
        </div>
    </div>
</template>
<style>
    #num-wrapper {
        width: 65%;
        margin: 30px auto;
        padding-top: 15px;
        min-width: 185px;
    }
    
    #numericWrapper .control-label {
        width: 200px;
        margin: 0 auto;
        font-size: 14px;
        user-select: none;
        font-weight: 500;
    }
</style>
<script>
    import Vue from "vue";
    import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
    Vue.use(NumericTextBoxPlugin);
    export default Vue.extend({
        data: function () {
            return {
                numeric: "Enter a value",
                value: null
            };
        }
    });

</script>