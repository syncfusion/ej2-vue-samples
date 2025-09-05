<template>
    <div id='container' class='e-rte-custom-tbar-section'>
        <ejs-richtexteditor ref="defaultRTE" id='defaultRTE' height='550' :saveInterval='0' :autoSaveOnIdle='true'
            :value="value" :toolbarSettings="toolbarSettings" :toolbarClick="onToolbarClick">
            <template #aiAssist>
                <ejs-dropdownbutton cssClass="menubutton e-tbar-btn e-tbar-btn-text" tabindex="-1"
                    id="ai_assistant_button_tbar" style="width:100%" :select="aiQuerySelectedMenu" :items="[
                        { text: 'Rephrase' },
                        { text: 'Correct Grammar' },
                        { text: 'Summarize' },
                        { text: 'Elaborate' },
                        { text: 'Translate' },
                        { text: 'Sentiment Analysis' }
                    ]">
                    <div class="e-rte-dropdown-btn-text">AI Assistant</div>
                </ejs-dropdownbutton>
            </template>
            <template #rephrase>
                <button class="e-tbar-btn e-btn" tabindex="-1" id="ai_rephrase_button_tbar" style="width:100%">
                    <div class="e-tbar-btn-text">Rephrase</div>
                </button>
            </template>
        </ejs-richtexteditor>
        <ejs-dialog ref="dialog" id="dialog" class="modal" header="AI Aissistant" target="#container"
            :showCloseIcon="true" :isModal="true" height="100%" width="80%" cssClass="e-rte-elements custom-dialog"
            :zIndex="1000" content="dialogTemplate" footerTemplate="footer" :close="closeDialog" :overlayClick="overlayClick" :open="dialogShow">
            <template #dialogTemplate>
                <div id="dialog-content" class="dialog-content" style="height: 100%;">
                    <div class="custom-row-0">
                        <div class="cuscol-0" style="width:100%; align-items: center;justify-content: left;">
                            <div style="width:75%; text-align: left;">
                                <ejs-dropdownlist ref="queryCategory" id="queryCategory" :index="0" :dataSource="queryList"
                                    :fields="{ text: 'Text', value: 'ID' }" cssClass="e-round-corner"
                                    :select="queryCategorySelect">
                                    Rephrase
                                </ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="cuscol-1" style="justify-content: space-between; align-items: center; width: 100%;">
                            <div id="language" style="width: 100%; display: none;">
                                <div style="display: flex; justify-content: right; align-items: center;">
                                    <div style="text-align: end; padding-right: 20px">
                                        <span>Target Language</span>
                                    </div>
                                    <div style="text-align: right;">
                                        <ejs-dropdownlist ref="languageCategory" id="language-Category" :index="0"
                                            :dataSource="languageList" :fields="{ text: 'Text', value: 'ID' }"
                                            cssClass="e-round-corner" :select="languageCategorySelect">
                                        </ejs-dropdownlist>
                                    </div>
                                </div>
                            </div>
                            <ejs-chip ref="chipList" id="chips-container" :chips="['Standard', 'Fluent', 'Professional']"
                                selection="Single"
                                style="justify-content: right; align-items: center; width: 100%; display: none"
                                cssClass="e-outline" :selectedChips="[0]" :click="chipClick">
                            </ejs-chip>
                        </div>
                    </div>
                    <div class="custom-row-1" style="height:74%">
                        <div class="cuscol-0" style="width:100%; height: 100%; align-items: center;justify-content: left;">
                            <div style="text-align: left;">
                                <ejs-richtexteditor ref="leftRte" :height="310" :value="resultData"
                                    :toolbarSettings="toolbarSettings" placeholder="Analysis of AI Support" width="100%"
                                    cssClass="e-outline"></ejs-richtexteditor>
                            </div>
                        </div>
                        <div class="cuscol-1"
                            style="display: flex; justify-content: space-between; width: 100%; height: 100%;">
                            <div style="text-align: left; width: 100%;">
                                <ejs-richtexteditor ref="rightRte" :height="310" :value="resultData"
                                    :toolbarSettings="{ enable: false }" placeholder="Analysis of AI Support" width="100%"
                                    cssClass="e-outline"></ejs-richtexteditor>
                                <div class="no-results-found" id="no-results-found"
                                    style="height: 244px; align-content: center; display: none;">
                                    <img height="50" width="50"
                                        src="https://storage.googleapis.com/cdn-bolddesk/agent-angular-app/images/light/no-records-warning.svg">
                                    <div>No results found</div>
                                </div>
                                <div id='skeletonId' style="display: none;">
                                    <ejs-skeleton id="skeletonId1" shape="Rectangle" height="20px"
                                        width="100%"></ejs-skeleton><br>
                                    <ejs-skeleton id="skeletonId2" shape="Rectangle" height="20px"
                                        width="90%"></ejs-skeleton><br>
                                    <ejs-skeleton id="skeletonId3" shape="Rectangle" height="20px"
                                        width="70%"></ejs-skeleton><br>
                                    <ejs-skeleton id="skeletonId4" shape="Rectangle" height="20px"
                                        width="50%"></ejs-skeleton><br>
                                    <ejs-skeleton id="skeletonId5" shape="Rectangle" height="20px"
                                        width="30%"></ejs-skeleton><br>
                                    <ejs-skeleton id="skeletonId6" shape="Rectangle" height="20px"
                                        width="10%"></ejs-skeleton><br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="custom-row-0">
                    <div class="cuscol-0" style="width:100%; align-items: center;justify-content: left;">
                        <div style="text-align: right;">
                            <ejs-button ref="regenerate" id="regenerate" :isPrimary="true" :disabled="true"
                                @click="updateAISugesstions">Regenerate</ejs-button>
                        </div>
                    </div>
                    <div class="cuscol-1"
                        style="display: flex; flex-direction: column;justify-content: center; align-items: center; width: 100%;">
                        <div style="text-align: right; width: 100%;">
                            <ejs-button ref="sentiment" id="sentiment" :disabled="true" cssClass="sentiment">😊
                                Neutral</ejs-button>
                            <ejs-button ref="copy" id="copy" :disabled="true"
                                @click="() => copyTextToClipboard(AIResult)">Copy</ejs-button>
                            <ejs-button ref="replace" id="replace" :isPrimary="true"
                                :disabled="true">Replace</ejs-button>
                        </div>
                    </div>
                </div>
            </template>
        </ejs-dialog>
        <ejs-toast ref="defaultToast" :showCloseButton="true" :timeOut="2000" :position="{ X: 'Right', Y: 'Top' }">
            Please select the content to perform the AI operation.
        </ejs-toast>
    </div>
</template>

<script>
import { enableRipple } from '@syncfusion/ej2-base';
import { OpenAiModel } from '../common/openai-model';
import { Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, ToolbarClickEventArgs, RichTextEditorComponent } from '@syncfusion/ej2-vue-richtexteditor';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { SkeletonComponent, ToastComponent } from '@syncfusion/ej2-vue-notifications';
import { ButtonComponent, ChipListComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
import { createApp } from 'vue';

enableRipple(true);

export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-toast': ToastComponent,
        'ejs-dialog': DialogComponent,
        'ejs-dropdownbutton': DropDownButtonComponent,
        'ejs-chip': ChipListComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-skeleton': SkeletonComponent,
        'ejs-button': ButtonComponent
    },
    data() {
        return {
            queryList: [
                { ID: "Rephrase", Text: "Rephrase" },
                { ID: "Grammar", Text: "Correct Grammar" },
                { ID: "Summarize", Text: "Summarize" },
                { ID: "Elaborate", Text: "Elaborate" },
                { ID: "Translate", Text: "Translate" },
                { ID: "SentimentAnalysis", Text: "Sentiment Analysis" }
            ],
            languageList: [
                { ID: "EN", Text: "English" },
                { ID: "ZH", Text: "Chinese (Simplified)" },
                { ID: "ZHT", Text: "Chinese (Traditional)" },
                { ID: "ES", Text: "Spanish" },
                { ID: "HI", Text: "Hindi" },
                { ID: "AR", Text: "Arabic" },
                { ID: "BN", Text: "Bengali" },
                { ID: "PT", Text: "Portuguese" },
                { ID: "RU", Text: "Russian" },
                { ID: "JA", Text: "Japanese" },
                { ID: "DE", Text: "German" },
                { ID: "KO", Text: "Korean" },
                { ID: "FR", Text: "French" },
                { ID: "IT", Text: "Italian" },
                { ID: "TR", Text: "Turkish" }
            ],
            subQuery: '',
            promptQuery: '',
            isSentimentCheck: false,
            resultData: '',
            dropValIndex: 0,
            isDialogElementCreated: false,
            chipValue: ['Standard'],
            AIResult: '',
            apiResultData: {},
            translatelanguage: '',
            value: `<h2><span>Integrate AI with the Editor</span></h2><p>Integrate the AI assistant into the rich text editor by capturing the content from the editor, sending it to the AI service, and displaying the results or suggestions back in the editor.</p><h3>Summarize</h3><p>This function condenses the selected content into a brief summary, capturing the main points succinctly.</p><h3>Elaborate</h3><p>This function expands the selected content, adding additional details and context.</p><h3>Rephrase</h3><p>This function rewrites the selected content to convey the same meaning using different words or structures. It also enables rephrase options and disables language selection.</p><h3>Correct Grammar</h3><p>This function reviews and corrects the grammar of the selected content, ensuring it adheres to standard grammatical rules.</p><h3>Translate</h3><p>This function translates the selected content into the specified language, enabling language selection and disabling rephrase options.</p>`,
            toolbarSettings: {
                items: [
                    {
                        tooltipText: 'AI Assistant',
                        template: this.aiAssistTemplate,
                        command: 'Custom'
                    },
                    {
                        tooltipText: 'Rephrase',
                        template: this.rephraseTemplate,
                        command: 'Custom'
                    },
                    'Bold',
                    'Italic',
                    'Underline',
                    '|',
                    'FontName',
                    'FontSize',
                    'FontColor',
                    '|',
                    'BackgroundColor',
                    'Formats',
                    'Alignments',
                    '|',
                    'OrderedList',
                    'BulletFormatList',
                    'CreateLink',
                    'Image',
                    '|',
                    'createTable',
                    'SourceCode',
                    'Undo',
                    'Redo',
                ],
            } as any
        }
    },
    methods: {
        aiQuerySelectedMenu: function (args: any): void {
            this.dialogueOpen(args.item.text);
        },
        onToolbarClick: function (args: ToolbarClickEventArgs): void {
            if (args.item.tooltipText === 'Rephrase') {
                this.dialogueOpen("Rephrase");
            }
        },
        dialogueOpen: function (selectedQuery: string): void {
            const defaultRTE = this.$refs.defaultRTE.ej2Instances;
            const leftRte = this.$refs.leftRte.ej2Instances;
            const dialog = this.$refs.dialog.ej2Instances;
            const defaultToast = this.$refs.defaultToast.ej2Instances;
            const queryCategory = this.$refs.queryCategory.ej2Instances;            
            var selectionText = defaultRTE.getSelectedHtml();
            
            if (selectionText) {
                let range: Range = (defaultRTE as any).formatter.editorManager.nodeSelection?.getRange((defaultRTE as any).contentModule.getDocument());
                (defaultRTE as any).formatter.editorManager.nodeSelection?.save(range, (defaultRTE as any).contentModule.getDocument());
                this.dropValIndex = this.queryList.findIndex(q => q.Text.toLowerCase() === selectedQuery.toLowerCase());
                queryCategory.index = this.dropValIndex;
                leftRte.value = this.promptQuery = selectionText;
                leftRte.refreshUI();
                dialog.show();
                this.updateAISugesstionsData(selectedQuery);
            } else {
                defaultToast.show();
            }
        },
        updateAISugesstionsData: function (selectedQuery: string): void {
            (document.getElementById('language') as HTMLElement).style.display = 'none';
            (document.getElementById('chips-container') as HTMLElement).style.display = 'none';
            this.isSentimentCheck = false;
            switch (selectedQuery) {
                case "Summarize":
                    this.subQuery = "Summarize the upcoming sentence shortly.";
                    break;
                case "Elaborate":
                    this.subQuery = "Elaborate on the upcoming sentence.";
                    break;
                case "Rephrase":
                    (document.getElementById('chips-container') as HTMLElement).style.display = '';
                    this.subQuery = this.chipValue[0] + " rephrase the upcoming sentence.";
                    break;
                case "Correct Grammar":
                    this.subQuery = "Correct the grammar of the upcoming sentence.";
                    break;
                case "Translate":
                    (document.getElementById('language') as HTMLElement).style.display = '';
                    this.subQuery = "Translate the upcoming sentence to " + this.translatelanguage + ".";
                    break;
                case "Sentiment Analysis":
                    this.isSentimentCheck = true;
                    this.subQuery = "Analyze the sentiment and grammar of the following paragraphs and provide the expression score with an emoji followed by the sentiment in the format: \"😊 Neutral\". \n\nNOTE: Avoid any additional text or explanation:";
                    break;
            }
            this.updateAISugesstions();
        },
        updateAISugesstions: function (): void {
            const sentiment = this.$refs.sentiment.ej2Instances;
            const regenerate = this.$refs.regenerate.ej2Instances;
            const copy = this.$refs.copy.ej2Instances;
            const replace = this.$refs.replace.ej2Instances;
            const rightRte = this.$refs.rightRte.ej2Instances;

            try {
                if (this.promptQuery) {
                    (document.getElementById('skeletonId') as HTMLElement).style.display = '';
                    rightRte.element.style.display = 'none';
                    sentiment.element.style.display = 'none';
                    regenerate.disabled = true;
                    copy.disabled = true;
                    replace.disabled = true;
                    this.apiResultData = this.getResponseFromOpenAI(this.subQuery, this.promptQuery);
                    this.apiResultData.then((result: any) => {
                        this.AIResult = this.isSentimentCheck ? this.promptQuery : result;
                        sentiment.content = result.toLowerCase().includes("positive") ? "😊 Positive" : result.toLowerCase().includes("negative") ? "😞 Negative" : "😐 Neutral";
                        sentiment.element.style.display = !this.isSentimentCheck ? 'none' : '';
                        rightRte.value = this.AIResult;
                        var noResultsFound = !(this.AIResult || this.promptQuery);
                        (document.getElementById('no-results-found') as HTMLElement).style.display = noResultsFound ? '' : 'none';
                        regenerate.disabled = noResultsFound;
                        copy.disabled = noResultsFound;
                        replace.disabled = noResultsFound;
                        (document.getElementById('skeletonId') as HTMLElement).style.display = 'none';
                        rightRte.element.style.display = noResultsFound ? 'none' : '';
                    });
                }
            } catch {
                this.$refs.defaultToast.show();
            }
        },
        getResponseFromOpenAI: async function (subQuery: string, promptQuery: string): Promise<string> {
            const content = await OpenAiModel(subQuery, promptQuery);
            return content ? content as string : '';
        },
        chipClick: function (args: any) {
            this.chipValue[0] = args.text;
            this.updateAISugesstionsData("Rephrase");
        },
        languageCategorySelect: function (args) {
            this.translatelanguage = args.itemData.ID;
            this.updateAISugesstionsData("Translate");
        },
        queryCategorySelect: function (args) {
            this.$refs.chipList.ej2Instances.selectedChips = 0;
            this.$refs.languageCategory.ej2Instances.index = 0;
            this.translatelanguage = "EN";
            this.updateAISugesstionsData(args.itemData.Text);
        },
        replaceBtnClick: function () {
            const defaultRTE = this.$refs.defaultRTE.ej2Instances;
            let range: Range = (defaultRTE as any).formatter.editorManager.nodeSelection?.getRange((defaultRTE as any).contentModule.getDocument());
            (defaultRTE as any).formatter.editorManager.nodeSelection?.restore(range);
            (defaultRTE as any).executeCommand('insertHTML', this.AIResult, { undo: true });
            this.closeDialog();
        },
        dialogShow: function (): void {
            this.isDialogElementCreated = true;
        },
        closeDialog: function (): void {
            const dialog = this.$refs.dialog.ej2Instances;
            const rightRte = this.$refs.rightRte.ej2Instances;
            const leftRte = this.$refs.leftRte.ej2Instances;
            const sentiment = this.$refs.sentiment.ej2Instances;

            dialog.hide();
            rightRte.value = '';
            leftRte.value = '';
            this.promptQuery = '';
            this.chipValue[0] = 'Standard';
            this.AIResult = '';
            this.dropValIndex = 0;
            (document.getElementById('chips-container') as HTMLElement).style.display = '';
            (document.getElementById('language') as HTMLElement).style.display = 'none';
            sentiment.content = '😊 Neutral';
        },
        copyTextToClipboard: function (text: string): void {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    console.log('Text copied to clipboard successfully!');
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            } else {
                // Fallback for browsers that do not support the Clipboard API
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    console.log('Text copied to clipboard using execCommand');
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                } finally {
                    document.body.removeChild(textarea);
                }
            }
        },
        overlayClick: function () {
            const dialog = this.$refs.dialog.ej2Instances;
            let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active') as HTMLElement;
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
            this.closeDialog();
        },
        aiAssistTemplate: function () {
            const dialogueOpen = this.dialogueOpen;
            return {
                template: createApp({}).component('aiAssist', {
                    template: `<ejs-dropdownbutton cssClass="menubutton e-tbar-btn e-tbar-btn-text" tabindex="-1"
                    id="ai_assistant_button_tbar" style="width:100%" :select="aiQuerySelectedMenu" :items="[
                        { text: 'Rephrase' },
                        { text: 'Correct Grammar' },
                        { text: 'Summarize' },
                        { text: 'Elaborate' },
                        { text: 'Translate' },
                        { text: 'Sentiment Analysis' }
                    ]">
                    <div class="e-rte-dropdown-btn-text">AI Assistant</div>
                </ejs-dropdownbutton>`,
                    components: {
                        'ejs-dropdownbutton': DropDownButtonComponent,
                    },
                    data() { return {} },
                    methods: {
                        aiQuerySelectedMenu: function (args: any): void {
                            dialogueOpen(args.item.text);
                        }
                    }
                })
            }
        },
        rephraseTemplate: function () {
            return {
                template: createApp({}).component('rephrase', {
                    template: `
                <button class="e-tbar-btn e-btn" tabindex="-1" id="ai_rephrase_button_tbar" style="width:100%">
                    <div class="e-tbar-btn-text">Rephrase</div>
                </button>`,
                    data() { return {} },
                })
            }
        }
    },
    mounted() {
        this.$refs.dialog.hide();
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table]
    }
}

</script>
<style>
.custom-row-0,
.custom-row-1,
.custom-row-2 {
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    padding: 12px 24px;
}

.cuscol-0,
.cuscol-1,
.cuscol-2 {
    padding: 0.5rem;
}

.no-results-found {
    text-align: center;
}

.no-results-found img {
    display: block;
    margin: 0 auto;
}

.e-custom {
    margin-right: 0.5rem;
    border-radius: 25px !important;
}

.custom-dialog .skeleton-rectangle {
    border-radius: 4px;
}

@media (max-width: 767px) {

    .cuscol-0,
    .cuscol-1,
    .cuscol-2 {
        justify-content: center !important;
    }

    .custom-row-0,
    .custom-row-1,
    .custom-row-2 {
        flex-direction: column !important;
    }

    .cuscol-1 {
        border-right: none !important;
    }

    .cuscol-0 {
        border-right: none !important;
    }

    .custom-dialog .e-dialog .e-dlg-content {
        overflow-y: auto !important;
    }

    .custom-dialog .e-dialog .e-dlg-content .e-richtexteditor {
        height: 100px !important;
    }

    .cuscol-noresult {
        padding-bottom: 20px !important;
    }

    .e-chip-list {
        padding: 5px !important;
    }

    .cuscol {
        padding-right: 0.2rem !important;
        width: auto !important;
    }

    .custom-row-1 {
        height: auto !important;
    }
}

.cuscol-1 {
    display: flex;
    flex-direction: row !important;
}

.cuscol-2 {
    display: flex;
    flex-direction: column !important;
}

.sentiment {
    color: #000 !important;
}

.custom-dialog .e-dialog .e-dlg-content {
    padding: 0px !important;
    overflow-y: hidden;
}

.custom-dialog .e-dialog .e-dlg-header-content {
    padding: 10px !important;
    border-bottom: 1px solid #dee2e6 !important;
}

.custom-dialog .e-dialog .e-footer-content {
    padding: 0px !important;
}

.custom-dialog .e-dialog .e-dlg-content .e-richtexteditor.e-rte-tb-expand .e-rte-content,
.e-richtexteditor.e-rte-tb-expand .e-source-content {
    border: 0;
    border-bottom: 1px solid #dee2e6;
    border-top: 0px solid #dee2e6 !important;
}

.custom-dialog .dialog-content .custom-row-0 {
    border-top: 0px solid #ddd !important;
}

.e-control.e-btn {
    margin: 0 5px;
}
</style>