<template>
    <div>
        <div class="col-lg-12 control-section adornment-mask">
            <div class="content-wrapper">
                <div class="mask-row">
                    <ejs-maskedtextbox id="maskTextbox" mask="0000-000-000" promptChar="#" floatLabelType="Auto" cssClass="e-prepend-mask" placeholder="Enter phone number" :prependTemplate="'prependTemplate'" :appendTemplate="'appendTemplate'">
                        <template v-slot:prependTemplate>
                            <span id="user" class="e-icons e-user" title="User"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span id="sendIcon" class="e-icons e-send"></span>
                        </template>
                    </ejs-maskedtextbox>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This example highlights adornment support in the Syncfusion MaskedTextBox. Adornments let you place custom elements before or after the masked input by using the <code>prependTemplate</code> and <code>appendTemplate</code> properties such as prefixes, suffix labels, or action icons to provide context, guide entry, and offer quick actions, while preserving mask validation and float label behavior.
            </p>
        </div>
        <div id="description">
            <p>
               This sample illustrates adornment integration in the Syncfusion MaskedTextBox via a prepended user icon and a appended send icon.
            </p>
        </div>
    </div>
</template>

<style>
    .adornment-mask .content-wrapper div.mask-row {
        max-width: 250px;
        margin: 0 auto;
        padding: 40px 0px 0px;
    }
    .adornment-mask .multiline-property td {
        padding: 10px 0px;
        width: 50%;
    }
    .mask-row label.e-float-text, .e-float-input:not(.e-error):not(.e-input-focus) input:not(:focus):valid~label.e-float-text.e-label-bottom, .e-float-input.e-control-wrapper:not(.e-error):not(.e-input-focus) input:not(:focus):valid~label.e-float-text.e-label-bottom {
        margin-top: -2px;
    }
    .bootstrap5\.3 .mask-row .e-float-text,
    .bootstrap5\.3-dark .mask-row .e-float-text,
    .tailwind3 .mask-row .e-float-text,
    .tailwind3-dark .mask-row .e-float-text {
        padding-left: 0 !important;
    }
    .fluent2 .mask-row .e-label-bottom,
    .fluent2-dark .mask-row .e-label-bottom,
    .fluent2-highcontrast .mask-row .e-label-bottom {
        top: -8px !important;
    }
    .bootstrap5_3 .adornment-mask .e-prepend-template,
    .bootstrap5_3-dark .adornment-mask .e-prepend-template {
        padding-right: 0 !important;
    }
    .e-bigger.material3 .adornment-mask label.e-float-text.e-label-bottom,
    .e-bigger.material3-dark .adornment-mask label.e-float-text.e-label-bottom {
        top: -4px !important;
    }
    .e-bigger.bootstrap5_3 .adornment-mask label.e-float-text.e-label-bottom,
    .e-bigger.bootstrap5_3-dark .adornment-mask label.e-float-text.e-label-bottom {
        top: 20px !important;
    }
</style>


<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return {};
    },
    components: { 
        'ejs-maskedtextbox': MaskedTextBoxComponent
    },
};

</script>
