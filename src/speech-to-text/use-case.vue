<template>
    <div class="control-section">
        <div class="usecase-speechToText-section e-message">
            <div class="stt-container">
                <!-- Microphone button for Speech-to-Text -->
                <ejs-speechtotext id="speechToText" ref="speechToTextObj" cssClass="usecase-stt-btn" :buttonSettings='buttonSettings' @transcriptChanged="onTranscriptChange" @onStart="onListeningStart" @onStop="onListeningStop" @onError="onErrorHandler" ></ejs-speechtotext>
                <span class="speech-recognition-status">Click the mic button to start speaking...</span>
            </div>
            <div class="transcript-container">
                <!-- Transcription output -->
                <ejs-chatui id="transcript-content" ref="chatUIObj" :showHeader="showHeader" :showFooter="showFooter" :timeStampFormat="timeStampFormat" :autoScrollToBottom="autoScrollToBottom" emptyChatTemplate="emptyChatTemplate" typingUsersTemplate="typingIndicatorTemplate">
                    <template v-slot:emptyChatTemplate="">
                        <div class="empty-chat">
                            <span class="e-icons e-multiple-comment"></span>
                            No transcript available. Start speaking to generate a transcript.
                        </div>
                    </template>
                    <template v-slot:typingIndicatorTemplate="">
                        <div class="e-typing-indicator ">
                            <span class="e-user-text">Transcripting</span> 
                            <div class="e-indicator-wrapper">
                                <span class="e-indicator"></span>
                                <span class="e-indicator">
                                </span><span class="e-indicator">
                                </span>
                            </div>
                        </div>
                    </template>
                </ejs-chatui>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates a live transcription feature that converts spoken words into text in real-time. Click the microphone button to start speaking, and the transcribed text will appear in the ChatUI component as a conversation with timestamps.
        </p>
    </div>

    <div id="description">
        <p>
            The Speech-to-Text component captures audio input and transcribes it dynamically, updating the transcript in the <code>ChatUI</code> component. Each spoken segment is displayed as an individual message with a timestamp, ensuring a structured conversation format.
        </p>
        <p>
            The integration with <code>ChatUI</code> allows real-time updates, maintaining the natural flow of conversation. This setup enhances readability and interaction, making it easier to follow and review the transcription.
        </p>
    </div>
</template>

<script>
import { SpeechToTextComponent } from "@syncfusion/ej2-vue-inputs";
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';

export default {
    data : function(){
        return{
            buttonSettings: {
                stopIconCss: 'e-icons e-listen-icon'
            },
            user: { id: 'testing-user', user: 'Testing User' },
            msgIdx: -1,
            isIndicatorVisible: false,
            showHeader: false,
            showFooter: false,
            timeStampFormat: 'MMM d, h:mm a',
            autoScrollToBottom: true
        };
    },
    components: {
        "ejs-speechtotext": SpeechToTextComponent,
        "ejs-chatui": ChatUIComponent
    },
    methods: {
        onTranscriptChange: function(args) {
            var chatObj = this.$refs.chatUIObj.ej2Instances;
            var existingMsg  =  chatObj.messages[this.msgIdx];
            if(existingMsg ) {
                chatObj.updateMessage({ text: args.transcript }, existingMsg.id);
                chatObj.scrollToBottom();
            } else {
                var newMsg  = { id: 'msg-' + (this.msgIdx + 1), text: args.transcript, author: this.user };
                chatObj.addMessage(newMsg);
            }
        
            if (!this.isIndicatorVisible) {
                chatObj.typingUsers = [this.user];
                this.isIndicatorVisible = true;
            }
        
            // Final transcript
            if (!args.isInterimResult) {
                this.msgIdx++;
                this.$refs.speechToTextObj.ej2Instances.transcript = '';
                chatObj.typingUsers = [];
                this.isIndicatorVisible = false;
            }
        },
        onListeningStart: function(){
            var sttElement = document.querySelector('#speechToText');
            this.msgIdx = this.$refs.chatUIObj.ej2Instances.messages.length;
            sttElement.classList.add('stt-listening-state');
            this.updateStatus('Listening... Speak now...');
        },
        onListeningStop: function(args) {
            var sttElement = document.querySelector('#speechToText');
            sttElement.classList.remove('stt-listening-state');
            this.$refs.chatUIObj.ej2Instances.typingUsers = [];
            if (args.isInteracted)
                this.updateStatus('Click the mic button to start speaking...');
        },
        onErrorHandler: function(args) {
            this.updateStatus(args.errorMessage);
            if (args.error === 'unsupported-browser') {
                this.$refs.speechToTextObj.ej2Instances.disabled = true;
            }
        },
        updateStatus: function(status) {
            document.querySelector('.speech-recognition-status').innerText = status;
        }
    }
}
</script>

<style>
    .usecase-speechToText-section,
    .e-bigger .usecase-speechToText-section {
        width: 90%;
        height: 55vh;
        margin: 0 auto;
        padding: 0;
        display: flex;
    }

    .usecase-speechToText-section #transcript-content {
        border: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .usecase-speechToText-section .stt-container {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .usecase-speechToText-section #speechToText.usecase-stt-btn {
        width: 100px;
        height: 100px;
        position: relative;
    }

    .usecase-speechToText-section .usecase-stt-btn .e-btn-icon,
    .e-bigger .usecase-speechToText-section .usecase-stt-btn .e-btn-icon {
        font-size: 50px;
    }

    .usecase-speechToText-section .transcript-container {
        width: 30%;
        height: 100%;
    }

    /* Create wave effect using pseudo-elements */
    .usecase-stt-btn::before,
    .usecase-stt-btn::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #9b9b9b;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        pointer-events: none;
    }

    .usecase-speechToText-section .stt-listening-state::before {
        animation: stt-wave-ring 1.5s infinite ease-out;
    }

    .usecase-speechToText-section .stt-listening-state::after {
        animation: stt-wave-ring 1.5s 0.75s infinite ease-out; /* Slight delay for second wave */
    }

    @keyframes stt-wave-ring {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }

    .usecase-speechToText-section .empty-chat {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        margin: auto;
    }

    .usecase-speechToText-section .empty-chat .e-multiple-comment {
        font-size: 50px;
    }

    .usecase-speechToText-section #transcript-content.e-chat-ui .e-message-group {
        max-width: 95%;
    }

    @media only screen and (max-width: 850px) {
        .usecase-speechToText-section, 
        .e-bigger .usecase-speechToText-section {
            flex-direction: column;
            height: 70vh;
        }
        .usecase-speechToText-section .transcript-container {
            width: 100%;
            height: 70vh;
            overflow: scroll;
        }
        .usecase-speechToText-section .stt-container {
            width: 100%;
            height: 55%;
        }
    }
</style>