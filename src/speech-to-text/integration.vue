<template>
    <div class="control-section integration-control-section">
    <div class='control-wrapper'>
        <div class="integration-speechToText-section">
            <ejs-toast id="stt-toast" ref="toastObj" :target='target' cssClass="e-toast-danger" :position='position'></ejs-toast>
            <ejs-aiassistview
                id="aiAssistView" 
                ref="aiAssistViewObj" 
                bannerTemplate="bannerTemplate" @promptRequest="onPromptRequest" footerTemplate="footerTemplate" :toolbarSettings="assistToolbars">
                    <template v-slot:bannerTemplate="">
                        <div class="banner-info">
                            <div class="e-icons e-listen-icon"></div>    
                            <h3>Speech To Text</h3>
                            <i>Click the below mic-button to convert your voice to text.</i>
                        </div>
                    </template>
                    <template v-slot:footerTemplate="">
                        <div class="e-footer-wrapper">
                            <div id="assistview-footer" ref="assistviewFooter" class="content-editor" @input="toggleButtons" @keydown="handleEvent" contenteditable="true" placeholder="Click to speak or start typing..."></div>
                            <div class="option-container">
                                <ejs-speechtotext id="speechToText" cssClass="e-flat" ref="speechToTextObj" @transcriptChanged="onTranscriptChange" @onStop="onListeningStop" @created="created" @onError="onErrorHandler"></ejs-speechtotext>
                                <ejs-button id="assistview-sendButton" ref="assistviewSendButton" @click="sendIconClicked" class="e-assist-send e-icons" role="button"></ejs-button>
                            </div>
                        </div>
                    </template>
            </ejs-aiassistview>
        </div>
    </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the integration of SpeechToText with the AI AssistView component. It allows users to convert spoken words into text in real time and use the transcribed content as input for AI-based interactions.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, the SpeechToText component captures and transcribes spoken input into text, which is displayed in an editable area. Users can modify the transcribed text or send it directly to the AI AssistView for processing.
        </p>
        <p>
            The AI AssistView responds based on the provided input. A toolbar option is available to clear the conversation history, and a toast notification alerts users to any speech recognition errors.
        </p>
    </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { SpeechToTextComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";

export default {
    data : function(){
        return{
           assistToolbars: {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked:  (args) => { this.toolbarItemClicked(args); }
          },
          position: {
                X: 'Right'
          },
          target: '.integration-control-section',
        };
    },
    components: {
        'ejs-aiassistview': AIAssistViewComponent,
        "ejs-speechtotext": SpeechToTextComponent,
        "ejs-button": ButtonComponent,
        'ejs-toast': ToastComponent
    },
    methods: {
        onPromptRequest: function(args) {
            let aiAssistView = this.$refs.aiAssistViewObj.ej2Instances;
            setTimeout(() => {
                aiAssistView.addPromptResponse('For real-time prompt processing, connect the AIAssistView component to your preferred AI service.');
                this.toggleButtons();
            }, 2000);
        },
        toolbarItemClicked: function(args) {
            let aiAssistView = this.$refs.aiAssistViewObj.ej2Instances;
            if (args.item.iconCss === 'e-icons e-refresh') {
                aiAssistView.prompts = [];
            }
        },
        onTranscriptChange: function(args) {
            var assistviewFooter = document.querySelector("#assistview-footer")
            assistviewFooter.innerText = args.transcript;
        },
        onListeningStop: function() {
            this.toggleButtons();
        },
        created: function() {
            this.toggleButtons();
        },
        handleEvent: function() {
            if (e.key === 'Enter' && !e.shiftKey) {
                    this.sendIconClicked();
                    e.preventDefault();
                }
        },
        toggleButtons: function() {
            var assistviewFooter = document.querySelector("#assistview-footer");
            var sendButton = document.querySelector("#assistview-sendButton");
            var speechButton = document.querySelector("#speechToText");
            var hasText = assistviewFooter.innerText.trim() !== '';
            sendButton.classList.toggle('visible', hasText);
            speechButton.classList.toggle('visible', !hasText);
            if (!hasText && (assistviewFooter.innerHTML === '<br>' || assistviewFooter.innerHTML.trim() === '')) {
                    assistviewFooter.innerHTML = '';
            }
        },
        sendIconClicked: function(args) {
            var assistviewFooter = document.querySelector("#assistview-footer")
            this.$refs.aiAssistViewObj.ej2Instances.executePrompt(assistviewFooter.innerText);
            assistviewFooter.innerText = "";           
        },
        onErrorHandler: function(args) {
            this.$refs.toastObj.ej2Instances.content = args.errorMessage;
            if (args.error === 'unsupported-browser') {
                this.$refs.speechToTextObj.ej2Instances.disabled = true;
                this.$refs.toastObj.ej2Instances.show({ timeOut: 0 });
            } else {
                this.$refs.toastObj.ej2Instances.show({ timeOut: 5000 });
            }
        },
    }
}
</script>

<style scoped>

.integration-speechToText-section {
    height: 550px;
    width: 550px;
    margin: 0 auto;
}

.integration-speechToText-section .banner-info .e-listen-icon:before {
    font-size: 35px;
}

.integration-speechToText-section .banner-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 330px;
    text-align: center;
}

.integration-speechToText-section .e-footer-wrapper #assistview-sendButton {
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
    background: none;
    cursor: pointer;
}

.integration-speechToText-section .e-footer-wrapper #speechToText.visible,
.integration-speechToText-section .e-footer-wrapper #assistview-sendButton.visible {
    display: inline-block;
}

.integration-speechToText-section .e-footer-wrapper #speechToText,
.integration-speechToText-section .e-footer-wrapper #assistview-sendButton {
    display: none;
}

@media only screen and (max-width: 750px) {
    .integration-speechToText-section {
        width: 100%;
    }
}

.integration-speechToText-section .e-footer-wrapper {
    display: flex;
    border: 1px solid #c1c1c1;
    padding: 5px 5px 5px 10px;
    margin: 5px 5px 0 5px;
    border-radius: 30px;
}

.integration-speechToText-section .e-footer-wrapper .content-editor {
    width: 100%;
    overflow-y: auto;
    font-size: 14px;
    min-height: 25px;
    max-height: 200px;
    padding: 10px;
    scrollbar-color: #c1c1c1 transparent;
}

.integration-speechToText-section .e-footer-wrapper .content-editor[contentEditable=true]:empty:before {
    content: attr(placeholder)
}

.integration-speechToText-section .option-container {
    align-self: flex-end;
}

</style>