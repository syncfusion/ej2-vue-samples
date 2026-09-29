<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <div class="mail-composer">
                        <div class="mail-actions">
                            <button
                                class="e-btn e-primary"
                                @click="sendMail">
                                Send
                            </button>

                            <button
                                class="e-btn"
                                @click="discardMail">
                                Discard
                            </button>
                        </div>
                        <div class="mail-form-group">
                            <label class="mail-label">
                                To
                            </label>
                            <div class="mail-field">
                                <ejs-multiselect
                                    ref="toRecipient"
                                    :dataSource="emailData"
                                    :fields="fields"
                                    mode="Box"
                                    :allowFiltering="true"
                                    :allowCustomValue="true"
                                    placeholder="Recipients"
                                    :itemTemplate="'itemTemplate'"
                                    :valueTemplate="'valueTemplate'">

                                    <template #itemTemplate="{ data }">
                                        <table class="mail-item">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            class="mail-item-img"
                                                            :src="`src/rich-text-editor-ui/images/${data.Eimg}.png`"
                                                            :alt="data.Name">
                                                    </td>

                                                    <td>
                                                        <span class="mail-item-name">
                                                            {{ data.Name }}
                                                        </span>

                                                        <span class="mail-item-email">
                                                            {{ data.EmailId }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </template>
                                    <template #valueTemplate="{ data }">
                                        <div class="mail-value">
                                            <img
                                                class="mail-value-img"
                                                :src="`src/rich-text-editor-ui/images/${data.Eimg}.png`"
                                                :alt="data.Name">

                                            <span class="mail-value-name">
                                                {{ data.Name }}
                                            </span>
                                        </div>
                                    </template>
                                </ejs-multiselect>
                            </div>
                        </div>
                        <div class="mail-form-group">
                            <label class="mail-label">
                                Cc
                            </label>

                            <div class="mail-field">
                                <ejs-multiselect
                                    ref="ccRecipient"
                                    :dataSource="emailData"
                                    :fields="fields"
                                    mode="Box"
                                    :allowFiltering="true"
                                    :allowCustomValue="true"
                                    placeholder="Cc"
                                    :itemTemplate="'itemTemplate'"
                                    :valueTemplate="'valueTemplate'">

                                    <template #itemTemplate="{ data }">
                                        <table class="mail-item">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            class="mail-item-img"
                                                            :src="`src/rich-text-editor-ui/images/${data.Eimg}.png`"
                                                            :alt="data.Name">
                                                    </td>

                                                    <td>
                                                        <span class="mail-item-name">
                                                            {{ data.Name }}
                                                        </span>

                                                        <span class="mail-item-email">
                                                            {{ data.EmailId }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </template>

                                    <template #valueTemplate="{ data }">
                                        <div class="mail-value">
                                            <img
                                                class="mail-value-img"
                                                :src="`src/rich-text-editor-ui/images/${data.Eimg}.png`"
                                                :alt="data.Name">

                                            <span class="mail-value-name">
                                                {{ data.Name }}
                                            </span>
                                        </div>
                                    </template>

                                </ejs-multiselect>
                            </div>
                        </div>

                        <!-- Subject -->
                        <div class="mail-form-group">
                            <label class="mail-label">
                                Subject
                            </label>

                            <div class="mail-field">
                                <input
                                    v-model="subject"
                                    type="text"
                                    class="e-input"
                                    placeholder="Enter subject">
                            </div>
                        </div>
                        <div class="mail-editor">
                            <ejs-richtexteditor-ui
                                ref="editor"
                                placeholder="Compose your email..."
                                :toolbarSettings="toolbarSettings"
                                :slashCommandSettings="slashCommandSettings">
                            </ejs-richtexteditor-ui>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <ejs-toast
            ref="toast"
            :position="{ X: 'Right', Y: 'Top' }"
            :showProgressBar="false"
            :newestOnTop="true"
            :timeOut="2500"
            :showCloseButton="true">
        </ejs-toast>
    </div>
</template>

<script>
import {
    RichTextEditorUIComponent,
    SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

import { MultiSelectComponent } from '@syncfusion/ej2-vue-dropdowns';

import { ToastComponent } from '@syncfusion/ej2-vue-notifications';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-multiselect': MultiSelectComponent,
        'ejs-toast': ToastComponent
    },

    data() {
        return {
            subject: '',

            fields: {
                text: 'Name',
                value: 'EmailId'
            },

            slashCommandSettings: {
                enable: true
            },

            toolbarSettings: {
                items: ['Undo','Redo','|','Bold','Italic','Underline','Strikethrough','|','FontColor','BackgroundColor','|','Formats','Alignment','|','FontName','FontSize','|','NumberFormatList','BulletFormatList','|','Table','Image','Link','|','Subscript','Superscript'
                ]
            },

            emailData: [
                { Name: 'Selma Rose', Eimg: '2', EmailId: 'selma@gmail.com' },
                { Name: 'Maria', Eimg: '1', EmailId: 'maria@gmail.com' },
                { Name: 'Russo Kay', Eimg: '8', EmailId: 'russo@gmail.com' },
                { Name: 'Robert', Eimg: 'dp', EmailId: 'robert@gmail.com' },
                { Name: 'Camden Kate', Eimg: '9', EmailId: 'camden@gmail.com' },
                { Name: 'Garth', Eimg: '7', EmailId: 'garth@gmail.com' },
                { Name: 'Andrew James', Eimg: 'pic04', EmailId: 'james@gmail.com' },
                { Name: 'Olivia', Eimg: '5', EmailId: 'olivia@gmail.com' },
                { Name: 'Sophia', Eimg: '6', EmailId: 'sophia@gmail.com' },
                { Name: 'Margaret', Eimg: '3', EmailId: 'margaret@gmail.com' },
                { Name: 'Ursula Ann', Eimg: 'dp', EmailId: 'ursula@gmail.com' },
                { Name: 'Laura Grace', Eimg: '4', EmailId: 'laura@gmail.com' },
                { Name: 'Albert', Eimg: 'pic03', EmailId: 'albert@gmail.com' },
                { Name: 'William', Eimg: '10', EmailId: 'william@gmail.com' }
            ]
        };
    },

    provide: {
        'richtexteditor-ui': [SlashCommand]
    },

    methods: {
        clearComposer() {
            const toObj = this.$refs.toRecipient.ej2Instances;
            const ccObj = this.$refs.ccRecipient.ej2Instances;
            const editor = this.$refs.editor.ej2Instances;

            toObj.value = [];
            toObj.dataBind();

            ccObj.value = [];
            ccObj.dataBind();

            this.subject = '';

            editor.value = '';
            editor.dataBind();
        },

        showToast(message) {
            this.$refs.toast.ej2Instances.show({
                title: 'Mail Composer',
                content: message,
                cssClass: 'e-toast-success'
            });
        },

        sendMail() {
            this.clearComposer();
            this.showToast('Mail sent successfully.');
        },

        discardMail() {
            this.clearComposer();
            this.showToast('Mail discarded. Composer cleared.');
        }
    }
};
</script>

<style>
.mail-composer {
    max-width: 1000px;
    margin: 0 auto;
}

/* Send / Discard */
.mail-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
}

/* Form rows */
.mail-form-group {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
}

.mail-label {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    padding-right: 12px;
    box-sizing: border-box;
}

.mail-field {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
    box-sizing: border-box;
}

/* Make controls full width */
.mail-field .e-multi-select,
.mail-field .e-input-group,
.mail-field .e-input {
    width: 100%;
}

/* Editor */
.mail-editor {
    margin-bottom: 0;
}

/* Recipient popup */
.mail-item {
    border-collapse: collapse;
}

.mail-item td {
    vertical-align: middle;
    padding: 4px 6px;
}

.mail-item td:first-child {
    width: 44px;
}

.mail-item-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

.mail-item-name {
    display: block;
    font-weight: 600;
    font-size: 13px;
    line-height: 1.2;
}

.mail-item-email {
    display: block;
    font-size: 11px;
    opacity: 0.7;
}

/* Selected recipient */
.mail-value {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 200px;
    line-height: 1.1;
}

.mail-value-img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    object-fit: cover;
    flex: 0 0 auto;
}

.mail-value-name {
    font-weight: 500;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 767px) {
    .mail-form-group {
        display: block;
    }

    .mail-label {
        display: block;
        max-width: 100%;
        margin-bottom: 4px;
    }

    .mail-field {
        max-width: 100%;
    }
}
</style>