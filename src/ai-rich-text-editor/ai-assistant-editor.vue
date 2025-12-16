<template>
    <div class="control-section">
        <ejs-richtexteditor id="editor" ref="editorRef" :toolbarSettings="toolbarSettings"
            :quickToolbarSettings="quickToolbarSettings" :aiAssistantPromptRequest="onAIAssistantPromptRequest">
            <p><b>Editing and Improving</b></p>
            <p>In today's competitive landscape, effective marketing focuses on building lasting customer relationships rather than just selling products. Brands are expected to provide personalized experiences through data analytics and consumer insights. As expectations evolve, marketers must stay agile and proactive in their strategies.</p>
            <p><b>Tone and style</b></p>
            <p>Agile methodologies are essential in modern project management, particularly in software development. They enable teams to adapt quickly and deliver greater customer value through iterative processes and collaboration. Successful Agile implementation requires fostering a culture of adaptability, trust, and shared ownership.</p>
            <p><b>Grammar</b></p>
            <p>Strong leadership is more than directing a team—it's about inspiring people toward a common vision. Effective leaders cultivate transparency, empathy, and accountability within their organizations. They empower others by encouraging autonomy and providing opportunities for growth. In times of uncertainty or rapid change, it's the leaders who stay grounded and lead with clarity who build the most resilient and high-performing teams.</p>
            <p><b>Summarization, simplification, or elaboration</b></p>
            <p>Strong leadership inspires a team toward a shared vision while promoting transparency, empathy, and accountability. Effective leaders empower others through autonomy and growth. In times of uncertainty or change, clear leaders build resilient, high-performing teams.</p>
        </ejs-richtexteditor>
    </div>
    <div id="action-description">
        <p>The AI Assistant feature provides a user interface such as an AssistView inside a popup, nested dropdown with
            predefined prompts, and a toolbar button for interacting with an AI model.</p>
    </div>
    <div id="description">
        <p> The <b>AI Assistant</b> feature provides a predefined user interface for integrating AI capabilities into the Rich Text Editor, enabling users to create, edit, and enhance content more efficiently. </p>
        <ul>
            <li> The AI Assistant can be accessed via the keyboard shortcut (<code>Alt + Enter or ⌥ + Enter</code>) or through the toolbar. </li>
            <li> The <b>AI Commands</b> menu provides a predefined list of prompts useful for performing common content-related actions such as improving, shortening, elaborating, simplifying, summarizing, and checking grammar. </li>
            <li> The <b>AI Query</b> button allows users to open the AI Assistant with the flexibility to enter a custom prompt when processing the content. </li>
        </ul>
        <p>In this sample, the AI Assistant feature is enabled by:</p>
        <ul>
            <li> Registering the <code>AIAssistant</code> service using the Vue plugin installation system, making the service available throughout the component tree via Vue's <code>provide</code>/<code>inject</code> mechanism. </li>
            <li> Adding <code>AICommands</code> and <code>AIQuery</code> to the editor’s <code>toolbarSettings</code> items property. </li>
        </ul>
        <p><b>Processing of the Prompt:</b></p>
        <ul>
            <li> When a prompt is executed, the <code>aiAssistantPromptRequest</code> event is triggered, followed by a request to the backend service to process the query. </li>
            <li> The response from the LLM is streamed back into the editor’s Assistant view using the <code>addAIPromptResponse</code> public method. </li>
            <li> When the Stop Responding button is clicked, the streaming process is cancelled by updating the <code>stopStreaming</code> flag. </li>
        </ul>
        <p><b>Injectable Modules:</b></p>
        <p> The AI Assistant feature is packaged as a modular, tree-shakable Vue plugin that is included only when needed. Once the plugin is registered, the service can be injected into Vue components using Vue’s <code>inject</code> API. <br/> For example, the <code>AIAssistant</code> service becomes available to components when provided through the plugin’s internal <code>provide</code> configuration. </p>
    </div>
</template>



<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import { AIAssistant, AIAssistantPromptRequestArgs, HtmlEditor, Image, Link, PasteCleanup, QuickToolbar,
    QuickToolbarSettingsModel, RichTextEditorComponent, Table, Toolbar, ToolbarSettingsModel , CodeBlock} from '@syncfusion/ej2-vue-richtexteditor';
import { getUserID, AI_SERVICE_URL } from "../common/ai-service";

export default defineComponent({
    name: "RichTextEditoAIAssistant",
    components: {
        ejsRichtexteditor: RichTextEditorComponent,
    },
    setup() {
        const richtexteditor = [AIAssistant, Toolbar, HtmlEditor, QuickToolbar, Image, Table, Link, PasteCleanup, CodeBlock];

        provide("richtexteditor", richtexteditor);

        const editorRef = ref<RichTextEditorComponent | null>(null);

        const toolbarSettings: ToolbarSettingsModel = {
            items: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'Alignments', 'Formats', 'OrderedList',
                'UnorderedList', 'CheckList', 'CodeBlock', 'Blockquote', 'CreateLink', 'Image', 'CreateTable', '|', 'SourceCode', '|', 'Undo', 'Redo']
        };

        const quickToolbarSettings: QuickToolbarSettingsModel = {
            text: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontColor', 'BackgroundColor', '|', 'UnorderedList', 'OrderedList']
        };

        let userID: string;
        let abortController: AbortController;

        async function onAIAssistantPromptRequest(args: AIAssistantPromptRequestArgs): Promise<void> {
            userID = await getUserID();
            try {
                abortController = new AbortController();
                const response: Response = await fetch(AI_SERVICE_URL + '/api/stream', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": userID
                    },
                    body: JSON.stringify({ message: args.prompt + (args.text || '') }),
                    signal: abortController.signal
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `HTTP Error ${response.status}`);
                }

                const stream: ReadableStream<string> = response.body!.pipeThrough(new TextDecoderStream());
                let fullText: string = '';

                for await (const chunk of stream as unknown as AsyncIterable<string>) {
                    fullText += chunk;
                    if (editorRef.value) {
                        editorRef.value.addAIPromptResponse(fullText, false);
                    }
                }
                if (editorRef.value) {
                    editorRef.value.addAIPromptResponse(fullText, true); // Final update
                }
            } catch (error: any) {
                if (error.name === 'AbortError') {
                    console.log('AI Request aborted by user.');
                    return;
                } else if (error.message.includes('token limit')) {
                    if (editorRef.value) {
                        editorRef.value.addAIPromptResponse(error.message, false);
                        editorRef.value.addAIPromptResponse(error.message, true);
                    }
                    const bannerMessage = document.querySelector('.banner-message');
                    if (bannerMessage) bannerMessage.innerHTML = error.message;
                    const sbHeader = document.querySelector('.sb-header1');
                    if (sbHeader) sbHeader.classList.remove('sb-hide');
                } else {
                    console.error('There was a problem with your fetch operation:', error);
                }
            }
        }
        return { editorRef, toolbarSettings, quickToolbarSettings, onAIAssistantPromptRequest };
    }
})
</script>