<template>
    <div>
        <div class="col-lg-12 control-section adornment-numeric">
            <div class="content-wrapper">
                <div class="row custom-margin e-icontemplate">
                    <ejs-numerictextbox id="prepend" value="1" floatLabelType="Auto" cssClass="e-prepend-numeric" placeholder="Enter the price" :prependTemplate="'prependTemplate'" :change="onPriceChange">
                        <template v-slot:prependTemplate>
                            <span class="e-icons e-menu" title="Menu"></span>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-search" title="Search"></span>
                            <span class="e-input-separator"></span>
                        </template>
                    </ejs-numerictextbox>
                </div>
                <div class="row custom-margin">
                    <ejs-numerictextbox id="append" value="5" floatLabelType="Auto" placeholder="Enter the kg" :appendTemplate="'appendTemplate'" :change="onKgChange">
                        <template v-slot:appendTemplate>
                            <span>kg</span>
                        </template>
                    </ejs-numerictextbox>
                </div>
                <div class="row custom-margin custom-margin-row e-icontemplate">
                    <ejs-numerictextbox id="iconTemplate" value="10" floatLabelType="Auto" placeholder="Enter the Number" :showSpinButton="showSpinButtons" :prependTemplate="'prependIconTemplate'" :appendTemplate="'appendIconTemplate'">
                        <template v-slot:prependIconTemplate>
                            <span id="reset" class="e-icons e-reset" title="Reset"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendIconTemplate>
                            <span class="e-input-separator"></span>
                            <span id="subract" class="e-icons e-horizontal-line"></span>
                            <span class="e-input-separator"></span>
                            <span id="plus" class="e-icons e-plus"></span>
                        </template>
                    </ejs-numerictextbox>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This example highlights adornment support in the Syncfusion Numeric TextBox. Adornments let you place custom elements before or after the input by using the <code>prependTemplate</code> and <code>appendTemplate</code> properties of Numeric Textbox such as currency symbols, unit labels or action icons to provide context, trigger actions, and improve input clarity and efficiency.</p>
        </div>

        <div id="description">
            <p>
                This sample demonstrates adornment support in the Syncfusion Numeric TextBox by adding custom elements or icons before and after the input. It includes prepended menu and search icons for price, an appended “kg” label, and icon actions to reset, decrement, or increment values, with the first two fields synchronized.
            </p>
        </div>
    </div>
</template>

<style>
    .adornment-numeric .content-wrapper {
        width: 35% !important;
        margin: 0 auto;
        min-width: 250px;
    }
    .adornment-numeric .custom-margin {
        margin: 25px 0;
    }
    .adornment-numeric .e-icons.e-search {
        background-color: rgba(0, 0, 0, 0) !important;
    }
    .adornment-numeric .e-numeric.e-control-wrapper.e-input-group .e-input-group-icon {
        background-color: rgba(0,0,0,0) !important;
    }
    .bootstrap5_3 .e-icontemplate .e-numerictextbox,
    .bootstrap5_3 .e-prependtemplate .e-numerictextbox,
    .bootstrap5_3-dark .e-icontemplate .e-numerictextbox,
    .bootstrap5_3-dark .e-prependtemplate .e-numerictextbox,
    .tailwind3 .e-icontemplate .e-numerictextbox,
    .tailwind3 .e-prependtemplate .e-numerictextbox,
    .tailwind3-dark .e-icontemplate .e-numerictextbox,
    .tailwind3-dark .e-prependtemplate .e-numerictextbox {
        padding-left: 0 !important;
    }
    .bootstrap5_3 .adornment-numeric .e-prepend-template,
    .bootstrap5_3-dark .adornment-numeric .e-prepend-template {
        padding-right: 0 !important;
    }
    .fluent2 .adornment-numeric .e-prepend-template,
    .fluent2-dark .adornment-numeric .e-prepend-template,
    .fluent2-highcontrast .adornment-numeric .e-prepend-template {
        padding-left: 8px !important;
    }
    .material3 .adornment-numeric .e-prepend-template,
    .material3-dark .adornment-numeric .e-prepend-template {
        padding-left: 0 !important;
    }
    .e-icontemplate .e-icons.e-reset,
    .e-icontemplate .e-icons.e-horizontal-line,
    .e-icontemplate .e-icons.e-plus {
        cursor: pointer;
    }
</style>

<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return { 
            showSpinButtons: false
        }
    },
    components: { 
        'ejs-numerictextbox': NumericTextBoxComponent
    },
    mounted: function() {
        var resetSpan = document.querySelector('#reset');
        if (resetSpan) {
            resetSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = null;
                iconNumeric.dataBind();
            });
        }
        var subractSpan = document.querySelector('#subract');
        if (subractSpan) {
            subractSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = iconNumeric.value - 1;
                iconNumeric.dataBind();
            });
        }
        var plusSpan = document.querySelector('#plus');
        if (plusSpan) {
            plusSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = iconNumeric.value + 1;
                iconNumeric.dataBind();
            });
        }
    },
    methods: {
        onPriceChange: function() {
            var prependNumericObj = getComponent(document.getElementById('prepend'), 'numerictextbox');
            var appendNumericObj = getComponent(document.getElementById('append'), 'numerictextbox');
            appendNumericObj.value = prependNumericObj.value * 5;
            appendNumericObj.dataBind();
        },
        onKgChange: function() {
            var prependNumericObj = getComponent(document.getElementById('prepend'), 'numerictextbox');
            var appendNumericObj = getComponent(document.getElementById('append'), 'numerictextbox');
            prependNumericObj.value = appendNumericObj.value / 5;
            prependNumericObj.dataBind();
        }
	}
};

</script>
