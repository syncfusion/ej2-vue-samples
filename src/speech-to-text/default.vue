<template>
    <div class="col-lg-8 control-section">
        <div class="default-speechToText-section">
            <div class="speechToText-container">
                <ejs-speechtotext id="speech-to-text" ref="speechToTextInstance" @transcriptChanged="onTranscriptChange" @onStart="onListeningStart" @onStop="onListeningStop" @onError="onErrorHandler" ></ejs-speechtotext>
                <mark class="speech-recognition-status">Click the mic button to start speaking...</mark>
            </div>
            <div class="output-container">
                <h4>Live Speech Transcription</h4>
                <ejs-textarea id="textareaInst" ref="textareaObj" cssClass="e-outline" resizeMode="None" rows=10 placeholder="Transcribed text will appear here..." @input="handleInputEvent" ></ejs-textarea>
                <div class="output-options">
                    <ejs-button id="transcript-copy-button" class="e-btn" @click="handleCopyButton" disabled="true">Copy</ejs-button>
                    <ejs-button id="transcript-clear-button"  class="e-btn" @click="handleClearButton" >Clear</ejs-button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 default-speechToText property-section">
    <div class="property-panel-header"> Properties </div>
    <div class="property-panel-content">
        <table>
            <tbody>
                <tr>
                    <td> Styling </td>
                    <td>
                        <ejs-dropdownlist id="stt-styling-ddl" @change="handleMiColor" :fields="micColorFields" :dataSource="miColor" :index="0" />
                    </td>
                </tr>
                <tr>
                    <td> Language </td>
                    <td>
                        <ejs-dropdownlist id="stt-lang-ddl" @change="handleLanguageType" :fields="languageFields" :dataSource="languageTypes" :index="0" :enabled="languageDropdownEnable" />
                    </td>
                </tr>
                <tr>
                    <td>Interim results</td>
                    <td> <ejs-switch id="interim-switch" type="checkbox" checked="true" @change= "handleAllowInterimResults" :disabled="interimSwithDisable" /> </td>
                </tr>
                <tr>
                    <td>Show tooltip</td>
                    <td> <ejs-switch id="tooltip-switch" type="checkbox" checked="true" @change= "handleShowTooltip" /> </td>
                </tr>
                <tr>
                    <td>Show icon with text</td>
                    <td> <ejs-switch id="icon-with-text-switch" type="checkbox" v-model:checked="iconWithText" @change= "handleIconWithText" /> </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div id="action-description">
     <p>
        This sample showcases the functionality of the SpeechToText component, which converts spoken words into text using your device’s microphone. It utilizes the built-in JavaScript SpeechRecognition API for speech processing. Speak into the microphone to see the transcribed text appear in the text area.
    </p>
</div>

<div id="description">
    <p>
        The SpeechToText component enables real-time speech-to-text conversion using the JavaScript <code>SpeechRecognition</code> API. This demo explores its key features and customization options:
    </p>
    <ul>
        <li><code>cssClass</code>: Modify the microphone button’s appearance with predefined styles such as Success, Warning, or Danger.</li>
        <li><code>lang</code>: Select a preferred language for speech recognition.</li>
        <li><code>allowInterimResults</code>: Choose whether to display words as you speak or only after completing a phrase.</li>
        <li><code>showTooltip</code>: Enable or disable tooltips for additional guidance.</li>
        <li><code>buttonSettings</code>: Configure the button to display text alongside the microphone icon.</li>
    </ul>
    <p>
        These options allow you to configure the SpeechToText component to suit your needs. Try different settings in the property panel to see how they affect the component’s appearance and functionality.
    </p>
</div>
</template>

<script>
import { SpeechToTextComponent } from "@syncfusion/ej2-vue-inputs";
import { TextAreaComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { SwitchComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    data: function(){
        return{
            languageDropdownEnable: true,
            interimSwithDisable: false,
            micColorFields: { text: 'text', value: 'value' },
            languageFields: { text: 'text', value: 'value' },
        miColor: [
            { text: "Normal", value:"" },
            { text: "Primary", value:"e-primary" },
            { text: "Success", value: "e-success" },
            { text: "Warning", value: "e-warning" },
            { text: "Danger", value: "e-danger" },
            { text: "Flat", value: "e-flat" },
            { text: "Info", value: "e-info" }
        ],
        languageTypes: [
            { text: "English, US", value:"en-US" },
            { text: "German, DE", value: "de-DE" },
            { text: "Chinese, CN", value: "zh-CN" },
            { text: "French, FR", value: "fr-FR" },
            { text: "Arabic, SA", value: "ar-SA" }
        ],
        iconWithText: false,
        isSupportedBrowser: true
        };
    },
    components: {
        "ejs-speechtotext": SpeechToTextComponent,
        'ejs-textarea': TextAreaComponent,
        'ejs-button': ButtonComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-switch': SwitchComponent
    },
    methods: {
        onTranscriptChange: function(args) {
            if (!args.isInterimResult)
            args.transcript += ' ';

            this.$refs.textareaObj.ej2Instances.value = args.transcript;
            this.toggleCopyButtonState();
        },
        onListeningStart: function() {
            if (this.isSupportedBrowser) {
                if (this.$refs.textareaObj.ej2Instances.value)
                    this.$refs.speechToTextInstance.ej2Instances.transcript = this.$refs.textareaObj.ej2Instances.value + '\n';

                this.updateStatus('Listening... Speak now...');
            } else {
                this.updateStatus('For unsupported browsers, use event callbacks to handle Speech-to-Text actions.');
            }
            this.languageDropdownEnable = false;
            this.interimSwithDisable = true;
        },
        onListeningStop: function(args) {
             if (this.isSupportedBrowser) {
                if (args.isInteracted)
                    this.updateStatus('Click the mic button to start speaking...');
            } else {
                this.updateStatus('For unsupported browsers, use event callbacks to handle Speech-to-Text actions.');
            }
            this.languageDropdownEnable = true;
            this.interimSwithDisable = false;
        },
        onErrorHandler: function(args) {
            this.updateStatus(args.errorMessage);
             if (args.error === 'unsupported-browser')
                this.isSupportedBrowser = false;
        },
        updateStatus: function(status) {
            document.querySelector('.speech-recognition-status').innerText = status;
        },
        toggleCopyButtonState: function() {
            var copyButton = document.getElementById('transcript-copy-button');
            var hasText = this.$refs.textareaObj.ej2Instances.element.value.trim() !== '';
            copyButton.disabled = hasText ? false : true;
        },
        handleCopyButton: function() {
            const copyText = this.$refs.textareaObj.ej2Instances.value;
            const copyBtnElem = document.querySelector('#transcript-copy-button');

            if (copyText && navigator.clipboard) {
                navigator.clipboard.writeText(copyText).then(function() {
                    copyBtnElem.innerText = 'Copied!';
                    setTimeout(function () {
                        copyBtnElem.innerText = 'Copy';
                    }, 1000);
                }).catch(function(err) {
                    console.error('Clipboard write failed', err);
                });
            }
        },
        handleInputEvent: function() {
            this.toggleCopyButtonState();
        },
        handleClearButton: function() {
            this.$refs.textareaObj.ej2Instances.value = this.$refs.textareaObj.ej2Instances.element.value = this.$refs.speechToTextInstance.ej2Instances.transcript = '';
            this.toggleCopyButtonState();
        },
        handleMiColor: function(args) {
            this.$refs.speechToTextInstance.ej2Instances.cssClass = args.value;
        },
        handleLanguageType: function(args) {
            this.$refs.speechToTextInstance.ej2Instances.lang = args.value;
        },
        handleAllowInterimResults: function(args) {
            this.$refs.speechToTextInstance.ej2Instances.allowInterimResults = args.checked;
        },
        handleShowTooltip: function(args) {
            this.$refs.speechToTextInstance.ej2Instances.showTooltip = args.checked;
        },
        handleIconWithText: function(args) {
            this.$refs.speechToTextInstance.ej2Instances.buttonSettings = {
                content: args.checked ? 'Start Listening' : '',
                stopContent: args.checked ? 'Stop Listening' : ''
            };
        }
    }
};
</script>

<style scoped>
    .default-speechToText-section,
    .default-speechToText-section .output-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .default-speechToText-section {
        gap: 50px;
        margin: 50px auto;
    }

    .default-speechToText-section .output-container {
        width: 75%;
        gap: 10px; 
    }

    .default-speechToText-section .output-container h4 {
        margin: 0;
        align-self: baseline;
    }

    .default-speechToText-section .speech-recognition-status{
        font-size: 12px;
    }

    .default-speechToText .property-panel-content td {
        padding: 10px 0px;
        width: 50%;
    }

    .default-speechToText-section .output-options {
        display: flex;
        gap: 5px;
    }

    .default-speechToText-section .speechToText-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    @media only screen and (max-width: 750px) {
        .default-speechToText-section .output-container {
            width: 100%;
        }

        .default-speechToText-section .output-options {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

</style>