<template>
  <div class="col-lg-12 control-section">
    <div class="content-wrapper">
      <div id='container' style="height: 100%;width: 100%;">
        <div id="documenteditor_titlebar" class="e-de-ctn-title"></div>
        <ejs-documenteditorcontainer ref='container' id='DocumentEditor' :enableToolbar='true' height="600px"
          width='100%' :customContextMenuSelect="customContextMenuSelect" :created="created"
          serviceUrl='https://services.syncfusion.com/js/production/api/documenteditor/'>
        </ejs-documenteditorcontainer>
        <ejs-dialog ref="dialog" id='dialog' header='AI Rephrase' :showCloseIcon='true' :buttons='docButton'
          :visible='false' target='#DocumentEditor' width='50%' height='auto' :isModal='true' :close='onclose'
          :beforeOpen='onBeforeOpen' :open='onOpen'>
          <div>
            <ejs-splitter id="splitter" height='auto' :paneSettings='paneSettings' orientation='Vertical' width='100%'>
              <div id="e-de-qus-parent">
                <div id="e-de-qus-div"></div>
                <ejs-toolbar :items='toolbarItems'></ejs-toolbar>
              </div>
              <div id="e-de-editable-div" contenteditable="true" style="height: 85px; padding: 5px;">
              </div>
            </ejs-splitter>
            <ejs-toolbar ref='toolbar' :items="toolbarItems1" :created="onToolbarCreated">
              <template #template>
                <ejs-multiselect width='250px' :change='ValueChangeHandler' :dataSource='grammer'
                  :fields="{ text: 'name', value: 'name' }" placeholder="e.g. Spelling Errors" mode='CheckBox'
                  :showSelectAll='true' selectAllText="Select All" :showDropDownIcon='true' :enableSelectionOrder='true'
                  filterBarPlaceholder="Search grammar suggestion"></ejs-multiselect>
              </template>
            </ejs-toolbar>
          </div>
        </ejs-dialog>
      </div>
    </div>
  </div>
</template>

<script>

import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { ButtonPropsModel, DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ToolbarComponent } from '@syncfusion/ej2-vue-navigations';
import { ComboBox, MultiSelectComponent, CheckBoxSelection } from '@syncfusion/ej2-vue-dropdowns';
import { BeforeOpenCloseCustomContentMenuEventArgs, CustomContentMenuEventArgs } from '@syncfusion/ej2-vue-documenteditor';
import { SplitterComponent } from '@syncfusion/ej2-vue-layouts';
import { OpenEventArgs } from '@syncfusion/ej2-vue-popups';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-vue-popups';
import { ChangeEventArgs, MultiSelectChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { getAzureChatAIRequest } from '../common/openai';
import { TitleBar } from './title-bar';

//azure part

interface Message {
  role: string;
  content: string;
}

interface AzureAIRequestOptions {
  messages: Message[];
  model: string;
}

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
    'ejs-dialog': DialogComponent,
    'ejs-splitter': SplitterComponent,
    'ejs-toolbar': ToolbarComponent,
    'ejs-multiselect': MultiSelectComponent
  },
  data() {
    return {
      menuItems: [
        {
          text: 'Rewrite',
          id: 'rewrite',
          iconCss: 'e-icons e-edit'
        },
        {
          text: 'Translate',
          id: 'translate',
          iconCss: 'e-icons e-transform-right'
        },
        {
          text: 'Grammar',
          id: 'grammer',
          iconCss: 'e-icons e-redaction'
        },
      ],
      docButton: [
        {
          click: () => {
            this.onInsertContent();
          },
          buttonModel: {
            isPrimary: true,
            content: 'Replace'
          }
        },
        {
          click: function () {
            this.clearContent();
            this.$refs.dialog.hide();
          },
          buttonModel: {
            content: 'Cancel',
            cssClass: 'e-flat'
          }
        }
      ] as ButtonPropsModel[],
      paneSettings: [
        { size: 'auto', collapsible: true },
        { size: 'auto', collapsible: true }
      ],
      toolbarItems: [
        { prefixIcon: 'e-icons e-chevron-left', align: 'Center', click: this.moveToPreviousPara },
        { prefixIcon: 'e-icons e-chevron-right', align: 'Center', click: this.moveToNextPara },
      ] as any,
      toolbarItems1: [
        //1st
        { prefixIcon: 'e-icons e-chevron-left', click: this.moveToPrevious },
        {
          type: 'Input', align: 'Left', cssClass: 'page-count', template: "<div><input type='text' id='numeric' style='width: 20px;padding-left: 10px;'> <span class=total-page> of 3 </span> </input></div>"
        },
        { prefixIcon: 'e-icons e-chevron-right', click: this.moveToNext },
        { text: 'Rewrite', align: 'Right', click: this.onRewriteClick },
        { prefixIcon: 'e-icons e-settings', click: this.onSettingsClick },

        //2nd
        { prefixIcon: 'e-icons e-close', click: this.onCloseSecndaryToolbar },
        {
          type: 'Input', align: 'Left', template: new ComboBox({ width: '125px', change: this.onToneChange as any, value: this.toneValue, dataSource: this.toneList as any, popupWidth: '125px', showClearButton: false, readonly: false })
        },
        {
          type: 'Input', align: 'Left', template: new ComboBox({ width: '200px', change: this.onFormatChange as any, value: this.formatValue, dataSource: this.formatValueList as any, popupWidth: '200px', showClearButton: false, readonly: false })
        },
        {
          type: 'Input', align: 'Left', template: new ComboBox({ width: '100px', change: this.onLengthChange as any, value: this.lengthValue, dataSource: this.lengthList as any, popupWidth: '100px', showClearButton: false, readonly: false })
        },
        { text: 'Rewrite', click: this.onRewriteClick },

        //3rd
        {
          type: 'Input', align: 'Left', template: new ComboBox({ width: '160px', change: this.onLanguageChange as any, value: 'French', dataSource: this.languageList as any, popupWidth: '160px', showClearButton: false, readonly: false })
        },
        { text: 'Translate', click: this.onTranslateClick },

        //4th
        {
          type: 'Input', align: 'Left', template: 'template'
        },
        { text: 'Rewrite', align: 'Right', click: this.onGrammerCheckClick },
      ] as any,
      toneValue: 'Professional',
      formatValue: 'Paragraph',
      lengthValue: 'Medium',
      outList: [],
      translateValue: 'French',
      grammerList: [],
      toneList: ['Professional', 'Friendly', 'Instructional', 'Marketing', 'Academic', 'Legal', 'Technical', 'Narrative', 'Direct'],
      formatValueList: ['Paragraph', 'Blog post', 'Technical Documentation', 'Report', 'Research Papers', 'Tutorial', 'Meeting Notes'],
      lengthList: ['Short', 'Medium', 'Long'],
      languageList: ['Simplified Chinese', 'Spanish', 'French', 'Arabic', 'Portuguese', 'Russian', 'Urdu', 'Indonesian', 'German', 'Japanese'],
      grammer: [
        { id: 'SVA', name: 'Subject-Verb Agreement' },
        { id: 'TC', name: 'Tense Consistency' },
        { id: 'PA', name: 'Pronoun Agreement' },
        { id: 'CU', name: 'Comma Usage' },
        { id: 'PS', name: 'Parallel Structure' },
        { id: 'MM', name: 'Misplaced Modifiers' },
        { id: 'DM', name: 'Dangling Modifiers' },
        { id: 'WC', name: 'Word Choice' },
        { id: 'R', name: 'Redundancy' },
        { id: 'UA', name: 'Use of Articles' },
        { id: 'PM', name: 'Punctuation Marks' },
        { id: 'APC', name: 'Apostrophes for Possessives and Contractions' },
        { id: 'SE', name: 'Spelling Errors' }
      ]
    }
  },
  methods: {
    created: function () {
      let sfdt: string = '{\"sfdt\":\"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\"}';
      this.$refs.container.ej2Instances.documentEditor.open(sfdt);
    },
    customContextMenuSelect: function (args: CustomContentMenuEventArgs): void {
      console.log('custom');

      const container = this.$refs.container.ej2Instances;
      let item: string = args.id;
      let id: string = container.element.id;
      switch (item) {
        case id + '_editorrewrite':
          this.onRewrite();
          break;
        case id + '_editortranslate':
          this.onTranslate();
          break;
        case id + '_editorgrammer':
          this.onGrammerCheck();
          break;
      }
    },
    onBeforeOpen: function (): void {
      this.onChangeToolbarVisibility(true, false, false);
    },
    onclose: function (): void {
      this.clearContent();
    },
    onOpen: function (args: OpenEventArgs): void {
      args.preventFocus = true;
    },
    onRewrite: function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      dialog.header = 'AI Rephrase';
      dialog.show();
      questionDiv!.innerText = container.documentEditor.selection.text;
      this.onChangeToolbarVisibility(true, false, false);
      this.onRewriteClick();
    },
    onTranslate: function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      dialog.header = 'AI Translate';
      dialog.show();
      questionDiv!.innerText = container.documentEditor.selection.text;
      this.onChangeToolbarVisibility(false, true, false);
      this.onTranslateClick();
    },
    onGrammerCheck: function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      dialog.header = 'Grammer';
      dialog.show();
      questionDiv!.innerText = container.documentEditor.selection.text;
      this.onChangeToolbarVisibility(false, false, true);
      this.onGrammerCheckClick();
    },
    onToolbarCreated: async function () {
      this.updateIndex();
    },
    onSettingsClick: function () {
      this.onChangeToolbarVisibility(false, false, false);
    },
    onCloseSecndaryToolbar: function () {
      this.onChangeToolbarVisibility(true, false, false);
    },
    onToneChange: function (args: ChangeEventArgs): void {
      this.toneValue = args.value as string;
    },
    onFormatChange: function (args: ChangeEventArgs): void {
      this.formatValue = args.value as string;
    },
    onLengthChange: function (args: ChangeEventArgs): void {
      this.lengthValue = args.value as string;
    },
    onLanguageChange: function (args: ChangeEventArgs): void {
      this.translateValue = args.value as string;
    },
    ValueChangeHandler: function (args: MultiSelectChangeEventArgs): void {
      this.grammerList = args.value as string[];
    },
    onChangeToolbarVisibility: function (showPryItem: boolean, showTranslateItem: boolean, showGrammerItem: boolean) {
      const toolbar = this.$refs.toolbar.ej2Instances;
      let isPrimary: boolean = false;
      let isSecondary: boolean = true;
      let isTranslate: boolean = false;
      let isGrammer: boolean = false;
      if (showPryItem) {
        isPrimary = true;
        isSecondary = false;
        isTranslate = false;
        isGrammer = false;
      }
      if (showTranslateItem) {
        isPrimary = false;
        isSecondary = false;
        isTranslate = true;
        isGrammer = false;
      }
      if (showGrammerItem) {
        isPrimary = false;
        isSecondary = false;
        isTranslate = false;
        isGrammer = true;
      }
      for (let i = 0; i < 5; i++) {
        toolbar.items[i].visible = isPrimary;
        toolbar.items[i + 5].visible = isSecondary;
      }
      toolbar.items[10].visible = isTranslate;
      toolbar.items[11].visible = isTranslate;
      toolbar.items[12].visible = isGrammer;
      toolbar.items[13].visible = isGrammer;
    },
    onRewriteClick: async function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      showSpinner(document.getElementById('dialog') as HTMLElement);
      let text: string = questionDiv!.innerText;
      const options: AzureAIRequestOptions = {
        messages: [
          { role: "system", content: `You are a helpful assistant. Your task is to analyze the provided text and rephrase it. Please adjust the text to reflect a tone of '${this.toneValue}', formatted in '${this.formatValue}' style, and maintain a length of '${this.lengthValue}'. Always respond in proper HTML format, excluding <html>, <head>, and <body> tags.` },
          { role: "user", content: text }
        ],
        model: "gpt-4",
      };
      await this.onGenerate(options);
      hideSpinner(document.getElementById('dialog') as HTMLElement);
    },
    onTranslateClick: async function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      showSpinner(document.getElementById('dialog') as HTMLElement);
      let text: string = questionDiv!.innerText;
      const options: AzureAIRequestOptions = {
        messages: [
          { role: "system", content: `You are a helpful assistant. Your task is to translate the provided text into '${this.translateValue}'. Always respond in proper HTML format, excluding <html> and <head> tags.` },
          { role: "user", content: text }
        ],
        model: "gpt-4",
      };
      await this.reframeContent(options);
      hideSpinner(document.getElementById('dialog') as HTMLElement);
    },
    onGrammerCheckClick: async function () {
      const questionDiv = document.getElementById("e-de-qus-div");
      showSpinner(document.getElementById('dialog') as HTMLElement);
      let value: string = '';
      let systemPrompt: string = '';
      if (this.grammerList.length > 0) {
        this.grammerList.forEach((item) => {
          value += item + ', ';
        });
        systemPrompt = `You are a helpful assistant. Your task is to analyze the provided text and perform the following grammar checks: ${value}. Please ensure that the revised text reflects these corrections. Always respond in proper HTML format, but do not include <html>, <head>, or <body> tags.`;
      } else {
        systemPrompt = "You are a helpful assistant. Your task is to analyze the provided text, check for and correct any grammatical errors, and rephrase it. Always respond in proper HTML format, but do not include <html>, <head>, or <body> tags.";
      }
      let text: string = questionDiv!.innerText;
      const options: AzureAIRequestOptions = {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text }
        ],
        model: "gpt-4",
      };
      await this.reframeContent(options);
      hideSpinner(document.getElementById('dialog') as HTMLElement);
    },
    onGenerate: async function (options: AzureAIRequestOptions): Promise<void> {
      const editableDiv = document.getElementById("e-de-editable-div");
      this.outList = [];
      for (let i = 0; i < 3; i++) {
        const response = await getAzureChatAIRequest(options);
        if (response && this.outList.indexOf(response) === -1) {
          this.outList.push(response);
        } else {
          i--;
        }
      }
      if (this.outList.length > 0) {
        editableDiv!.innerHTML = this.outList[0];
        this.updateIndex();
      }
    },
    reframeContent: async function (options: AzureAIRequestOptions): Promise<void> {
      const editableDiv = document.getElementById("e-de-editable-div");
      const response = await getAzureChatAIRequest(options);
      if (response) {
        editableDiv!.innerHTML = response;
      }
    },
    moveToNext: function () {
      const editableDiv = document.getElementById("e-de-editable-div");
      let text: string = editableDiv!.innerHTML;
      let index: number = this.outList.indexOf(text);
      if (index + 1 < this.outList.length) {
        editableDiv!.innerHTML = this.outList[index + 1];
        this.updateIndex();
      }
    },
    moveToPrevious: function () {
      const editableDiv = document.getElementById("e-de-editable-div");
      let text: string = editableDiv!.innerHTML;
      let index: number = this.outList.indexOf(text);
      if (index - 1 >= 0) {
        editableDiv!.innerHTML = this.outList[index - 1];
        this.updateIndex();
      }
    },
    moveToNextPara: function () {
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      const questionDiv = document.getElementById("e-de-qus-div");
      const editableDiv = document.getElementById("e-de-editable-div");
      editableDiv!.innerHTML = '';
      container.documentEditor.selection.moveToParagraphEnd();
      container.documentEditor.selection.moveToNextLine();
      container.documentEditor.selection.selectParagraph();
      questionDiv!.innerText = container.documentEditor.selection.text;
      if (dialog.header === 'AI Translate') {
        this.onTranslateClick();
      } else if (dialog.header === 'AI Rephrase') {
        this.onRewriteClick();
      } else {
        this.onGrammerCheckClick();
      }
    },
    moveToPreviousPara: function () {
      const editableDiv = document.getElementById("e-de-editable-div");
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      const questionDiv = document.getElementById("e-de-qus-div");
      editableDiv!.innerHTML = '';
      container.documentEditor.selection.moveToParagraphEnd();
      container.documentEditor.selection.moveToNextLine();
      container.documentEditor.selection.selectParagraph();
      questionDiv!.innerText = container.documentEditor.selection.text;
      if (dialog.header === 'AI Translate') {
        this.onTranslateClick();
      } else if (dialog.header === 'AI Rephrase') {
        this.onRewriteClick();
      } else {
        this.onGrammerCheckClick();
      }
    },
    updateIndex: function () {
      const editableDiv = document.getElementById("e-de-editable-div");
      let element: HTMLInputElement = document.getElementById('numeric')! as HTMLInputElement;
      let text: string = editableDiv!.innerHTML;
      if (this.outList.length > 0 && this.outList.indexOf(text) !== -1) {
        element.value = (this.outList.indexOf(text) + 1).toString();
      } else {
        element.value = '0';
      }
    },
    onInsertContent: async function (): Promise<void> {
      const editableDiv = document.getElementById("e-de-editable-div");
      const dialog = this.$refs.dialog.ej2Instances;
      const container = this.$refs.container.ej2Instances;
      let response: string = editableDiv!.innerHTML;
      let http = new XMLHttpRequest();
      let url: string = container.serviceUrl + 'SystemClipboard';
      http.open('POST', url, true);
      http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      http.onreadystatechange = () => {
        if (http.readyState === 4) {
          if (http.status === 200 || http.status === 304) {
            container.documentEditor.editor.paste(http.responseText);
            container.documentEditor.editor.onEnter();
            this.clearContent();
            dialog.hide();
          }
        }
      };
      let sfdt: any = {
        content: response,
        type: '.Html',
      };
      http.send(JSON.stringify(sfdt));
    },
    clearContent: function (): void {
      const editableDiv = document.getElementById("e-de-editable-div");
      const questionDiv = document.getElementById("e-de-qus-div");
      editableDiv!.innerHTML = '';
      questionDiv!.innerText = '';
    }
  },
  mounted() {
    const container = this.$refs.container.ej2Instances;
    let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar')!, container.documentEditor, true);
    if (container.documentEditor) {
      container.documentEditor.documentName = 'Getting Started';
    }
    titleBar.updateDocumentTitle();
    container.documentEditor.contextMenu.addCustomMenu(this.menuItems, false);

    if (container.documentEditor) {
      container.documentEditor.customContextMenuBeforeOpen = (args: BeforeOpenCloseCustomContentMenuEventArgs): void => {
        let isEmpty: boolean = container.documentEditor.selection.isEmpty;
        for (let i: number = 0; i < args.ids.length; i++) {
          let element: HTMLElement = document.getElementById(args.ids[i])!;
          if (!isEmpty) {
            element.style.display = 'block';
          } else {
            element.style.display = 'none';
          }
        }
      };
    }
    createSpinner({
      target: document.getElementById('dialog') as HTMLElement,
    });
  },
  provide: {
    DocumentEditorContainer: [Toolbar],
    multiselect: [CheckBoxSelection]
  }
}

</script>