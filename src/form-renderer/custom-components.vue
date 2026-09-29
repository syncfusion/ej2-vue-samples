<template>
    <div>
        <div class="col-lg-12 control-section">
            <div id="form-control control-wrapper" :style="{ paddingLeft: '100px', paddingRight: '100px' }">
                <ejs-formrenderer ref="formRenderer" :schema="contactForm">
                    <e-customwidgetsettings>
                        <e-customwidgetsetting :template-id="'textboxTemplate'" :template="'textboxTemplate'" />
                        <e-customwidgetsetting :template-id="'emailTemplate'" :template="'emailTemplate'" />
                        <e-customwidgetsetting :type="'dropdown'" :template="'dropdownTemplate'" />
                        <e-customwidgetsetting :type="'textarea'" :template="'textareaTemplate'" />
                        <e-customwidgetsetting :type="'checkbox'" :template="'checkboxTemplate'" />
                        <e-customwidgetsetting :type="'button'" :template="'submitButtonTemplate'" />
                    </e-customwidgetsettings>

                    <template v-slot:textboxTemplate="{ data }">
                        <input :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                            :name="data.fieldData.name" type="text" :placeholder="data.fieldData.placeholder"
                            :minlength="data.fieldData.minLength" :maxlength="data.fieldData.maxLength"
                            @change="setFieldValue(data, $event)" @blur="setFieldValue(data, $event)" />
                    </template>

                    <template v-slot:emailTemplate="{ data }">
                        <input :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                            :name="data.fieldData.name" :type="data.fieldData.textboxType || 'email'"
                            :placeholder="data.fieldData.placeholder" @change="setFieldValue(data, $event)"
                            @blur="setFieldValue(data, $event)" />
                    </template>

                    <template v-slot:dropdownTemplate="{ data }">
                        <select :id="`form-renderer-control-${data.fieldData.id}`" class="fr-dropdown"
                            :name="data.fieldData.name" @change="setFieldValue(data, $event)">
                            <option value="" disabled>{{ data.fieldData.placeholder }}</option>
                            <option v-for="option in data.fieldData.options" :key="option.value" :value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </template>

                    <template v-slot:textareaTemplate="{ data }">
                        <textarea :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                            :name="data.fieldData.name" :minlength="data.fieldData.minLength"
                            :maxlength="data.fieldData.maxLength" :rows="data.fieldData.rows"
                            :placeholder="data.fieldData.placeholder" @change="setFieldValue(data, $event)"
                            @blur="setFieldValue(data, $event)" />
                    </template>

                    <template v-slot:checkboxTemplate="{ data }">
                        <label :for="`form-renderer-control-${data.fieldData.id}`" class="custom-checkbox">
                            <input :id="`form-renderer-control-${data.fieldData.id}`" :name="data.fieldData.name"
                                type="checkbox" @change="setFieldValue(data, $event, true)" />
                            {{ data.fieldData.label }}
                        </label>
                    </template>

                    <template v-slot:submitButtonTemplate="{ data }">
                        <button :id="`form-renderer-control-${data.fieldData.id}`" class="e-btn e-primary"
                            :name="data.fieldData.name" :type="data.fieldData.buttonType || 'submit'">
                            {{ data.fieldData.label }}
                        </button>
                    </template>
                </ejs-formrenderer>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates how to render custom components for individual form field
            components in the Form
            Renderer control.
            Templates allow you to replace the built-in form components with custom or third-party UI
            components, enabling
            greater flexibility and customization.
        </p>
    </div>
    <div id="description">
        <p>
            In this sample, a "Contact Us" form is rendered using the Form Renderer control. The text
            box, text area,
            drop-down list, checkbox, and button fields are customized using HTML templates.
        </p>
        <p>
            Users can interactively fill out the form, benefit from built-in validation, and submit
            their responses for data
            collection.
        </p>
        <p>
            Design custom forms visually and export their schema in seconds with our interactive
            <a href="https://ej2.syncfusion.com/vue/demos/#/tailwind3/form-builder/default.html">Form Builder</a> — a
            powerful no-code tool for
            building responsive forms through an intuitive drag-and-drop interface.
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    FormRendererComponent as EjsFormrenderer,
    CustomWidgetSettingsDirective as ECustomwidgetsettings,
    CustomWidgetSettingDirective as ECustomwidgetsetting
} from '@syncfusion/ej2-vue-form-renderer';
import { contactForm } from './datasource';

const formRenderer = ref<InstanceType<typeof EjsFormrenderer> | null>(null);

function setFieldValue(data: any, event: Event, isCheckbox = false) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const value = isCheckbox && target instanceof HTMLInputElement ? target.checked : target.value;
    formRenderer.value?.setFieldValue(data.fieldData.id, value);
}

</script>

<style scoped>
.fr-dropdown {
    width: 100%;
    height: 32px;
    border-radius: 5px;
    background-color: inherit;
    color: inherit;
}

.bootstrap5\.3 .fr-dropdown,
.bootstrap5\.3-dark .fr-dropdown,
.fluent2 .fr-dropdown,
.fluent2-dark .fr-dropdown,
.fluent2-highcontrast .fr-dropdown,
.tailwind3 .fr-dropdown,
.tailwind3-dark .fr-dropdown {
    border-color: var(--color-sf-border);
}

.material3 .fr-dropdown,
.material3-dark .fr-dropdown {
    border-color: rgba(var(--color-sf-outline));
}

.bootstrap5\.3 .fr-dropdown option,
.bootstrap5\.3-dark .fr-dropdown option,
.fluent2 .fr-dropdown option,
.fluent2-dark .fr-dropdown option,
.fluent2-highcontrast .fr-dropdown option {
    background-color: var(--color-sf-flyout-bg-color);
    color: var(--color-sf-content-text-color);
}

.material3 .fr-dropdown option {
    background-color: linear-gradient(0deg, rgba(var(--color-sf-surface), 1), rgba(var(--color-sf-surface), 1)), rgba(var(--color-sf-surface));
    color: rgba(var(--color-sf-on-surface));
}

.material3-dark .fr-dropdown option {
    background-color: #000;
    color: #fff;
}

.tailwind3 .fr-dropdown option,
.tailwind3-dark .fr-dropdown option {
    background-color: var(--color-sf-flyout-bg-color);
    color: var(--color-sf-flyout-text-color);
}

.fluent2 #form-renderer-control-message,
.fluent2-dark #form-renderer-control-message,
.fluent2-highcontrast #form-renderer-control-message {
    height: auto;
}

#form-renderer-control .form-group {
    margin-bottom: 0px;
}
</style>
