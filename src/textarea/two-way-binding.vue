<template>
<div id="textareaWrapper" class="col-lg-12 control-section">
    <div class="textarea-label"> Two-way binding</div>
    <div class="col-lg-6">
        <div id="wrapper">
            <ejs-textarea floatLabelType="Auto" placeholder="Enter your comments" v-model="value" rows="5" cols="400"></ejs-textarea>
        </div>
    </div> 
    <div class="col-lg-6">
        <div id="wrapper">
            <ejs-textarea floatLabelType="Auto" placeholder="Enter your comments" v-model="value" rows="5" cols="400"></ejs-textarea>
        </div>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates two-way binding support of the TextArea component. Enter a value in any textareas to see an action. 
    </p>
    </div>

    <div id="description">
    <p>In this sample, the two-way binding support is achieved using the v-model directive in Vue. When you change a value in the textarea, another textarea's value updates automatically.</p>
    <p>The v-model directive updates the template every time whenever the model gets updated and vice versa.</p>
    </div>
</div>
</template>

<style>
    #textareaWrapper .e-multi-line-input {
        max-width: 100%;
    }
</style>

<style scoped>
    #wrapper {
    max-width: 246px;
    margin: 30px auto;
    padding-top: 15px;
    }

    #textareaWrapper .textarea-label {
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
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    data: function() {
        return {
            value: null
         }
    },
    components: { 'ejs-textarea': TextAreaComponent }
};

</script>