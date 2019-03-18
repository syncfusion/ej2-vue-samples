<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
        <div class="mask-format">
            <div class="mask-format-control-label">Formats</div>
            <!-- Initialize Masked Textbox -->
            <ejs-maskedtextbox id="mask" ref="mask_instance" :value="value" :mask="dynamicMask" :promptChar="dynamicPrompt" floatLabelType="Never" :change="change">
            </ejs-maskedtextbox>
        </div>
        </div>
        </div>
        <div class="col-lg-4 property-section">
             <table id="property" title="Properties">
                <tbody>
                    <tr>
                        <td style="width: 50%;padding-left: 10px;padding-top: 10px">
                            <div>Mask</div>
                        </td>
                        <td style="width: 50%;padding-top: 10px">
                            <div style="max-width: 200px">
                                <!-- Input to customize mask format -->
                                <div class="e-input-group">
                                <input id="input1" class="e-input" value="(999)-999-9999" type="text" v-on:keyup="onKeyUp"/>
                                <span class="e-float-line"></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 50%;padding-left: 10px;padding-top: 10px">
                            <div>Prompt Character</div>
                        </td>
                        <td style="width: 50%;padding-top: 10px">
                            <div style="max-width: 200px">
                                <ejs-dropdownlist id="dropdown" :dataSource="items" :value="dynamicPrompt" :fields="fields" :change="changeDrop">
                                </ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 50%;padding-left: 10px;padding-top: 10px">
                            <div>Value</div>
                        </td>
                        <td style="width: 50%;padding-top: 10px">
                            <!-- Display un-masked value -->
                            <div id="val1" type="text"></div>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 50%;padding-left: 10px;padding-top: 10px">
                            <div>Masked Value</div>
                        </td>
                        <td style="width: 50%;padding-top: 10px">
                            <!-- Display masked value -->
                            <div id="val2" type="text"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    <div id="action-description">
        <p>This sample demonstrates that the different formats can be applied to MaskedTextBox component.
        You can customize the mask and prompt character values in the property panel.</p>
    </div>

    <div id="description">
        <p>Here, the "Value" and "Masked Value" labels from the properties panel returns the raw value (unmasked value) and masked value of the MaskedTextBox component.
        You can also get these raw value and masked value anytime through the <b><a href="https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#value" target="_blank">value</a></b> property and <b><a href="https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#getmaskedvalue" target="_blank">getMaskedValue</a></b> method.</p>
    </div>
</div>
</template>
<style>

    .mask-format {
        width: 45%;
        margin: 0 auto;
        min-width: 185px;
        max-width: 350px;
    }
    
    .mask-format-control-label {
        padding: 24px 0px 10px 0px;
        font-size: 12px;
    }

    .property-panel-content {
        padding: 0 10px 10px 0;
        overflow: auto;
    }

    #mask-property .e-input-group {
    padding-left: 0px;
    padding-top: 0px;
}

</style>
<script>
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MaskedTextBoxPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend ({
    data: function () {
        return {
            dynamicMask: '(999)-999-9999',
            dynamicPrompt: '_',
            maskedValue: '',
            value: '',
            items: [
                { prompt: '_' },
                { prompt: '#' },
                { prompt: '@' },
                { prompt: '*' },
            ],
            fields: { text: 'prompt', value: 'prompt' },
        };
    },
    mounted: function() {
        this.dynamicMask = document.getElementById("input1").value;
        var mask = this.$refs.mask_instance;
            setTimeout(function(){
                document.getElementById('val2').innerHTML = mask.getMaskedValue();
            }, 100);
        let input = document.getElementById("input1");
        let localObj = this;
        //Focus Event binding for input component
            input.addEventListener('focus', function() {
               localObj.getParentNode(input).classList.add('e-input-focus');
            });
            //Blur Event binding for input component
            input.addEventListener('blur', function() {
                localObj.getParentNode(input).classList.remove('e-input-focus');
            });
        },
    methods: {
        getParentNode: function(element) {
            let parentNode = element.parentNode;
            if (parentNode.classList.contains('e-input-in-wrap')) {
                return parentNode.parentNode;
            }
            return parentNode;
        },
        onKeyUp: function() {
            this.dynamicMask = document.getElementById("input1").value;
            var mask = this.$refs.mask_instance;
            setTimeout(function(){
                document.getElementById('val2').innerHTML = mask.getMaskedValue();
            }, 100);
        },
        change: function(args) {
            document.getElementById('val1').innerHTML= args.value;
            document.getElementById('val2').innerHTML=args.maskedValue;
        },
        changeDrop: function(args) {
            this.dynamicPrompt = document.getElementById("dropdown").value;
            var mask = this.$refs.mask_instance;
            setTimeout(function(){
                document.getElementById('val2').innerHTML = mask.getMaskedValue();
            }, 100);
        }
    },
});
</script>