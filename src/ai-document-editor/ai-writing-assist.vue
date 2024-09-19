<template>
    <div ref="doc_titlebar" class="e-de-ctn-title"></div>
    <ejs-documenteditorcontainer ref="container" id="documentEditor" :enableToolbar='true' height='99%'
        serviceUrl='serviceUrl' :toolbarItems="docToolbarItems" :customContextMenuSelect='customContextMenuSelect'
        :toolbarClick='toolbarClick'>
        <ejs-dialog ref="dialog" header='Generate Content' :showCloseIcon='true' :buttons="dialogButtons"
            :visible='false' width='50%' height='auto' :isModal='true' :close='onclose' target="#documentEditor"
            :beforeOpen='onOpen'>
            <div>
                <div ref="editableDiv" id="e-de-editable-div" contenteditable="true" style="height: 100px;"></div>
                <ejs-toolbar ref='toolbar' :items="toolbarItems" :created='onToolbarCreated'></ejs-toolbar>
            </div>
        </ejs-dialog>
    </ejs-documenteditorcontainer>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { DialogComponent, ButtonPropsModel } from '@syncfusion/ej2-vue-popups';
import { ToolbarComponent } from '@syncfusion/ej2-vue-navigations';
import { ComboBox } from '@syncfusion/ej2-vue-dropdowns';
import { ClickEventArgs, MenuItemModel } from '@syncfusion/ej2-vue-navigations';
import { CustomContentMenuEventArgs, CustomToolbarItemModel } from '@syncfusion/ej2-vue-documenteditor';
import { ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-vue-popups';
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

let toolItem: CustomToolbarItemModel = {
    prefixIcon: "e-icons e-file-new",
    text: "AI Write",
    id: "write"
}

export default {
    components: {
        'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
        'ejs-dialog': DialogComponent,
        'ejs-toolbar': ToolbarComponent
    },
    data() {
        return {
            seviceurl: 'https://services.syncfusion.com/js/production/api/documenteditor/',
            docToolbarItems: ['New', 'Open', 'Separator', toolItem, 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields', 'ContentControl'] as CustomToolbarItemModel[],
            toneValue: 'Professional',
            formatValue: 'Paragraph',
            lengthValue: 'Medium',
            outList: [],
            toneList: ['Professional', 'Friendly', 'Instructional', 'Marketing', 'Academic', 'Legal', 'Technical', 'Narrative', 'Direct'],
            formatValueList: ['Paragraph', 'Blog post', 'Technical Documentation', 'Report', 'Research Papers', 'Tutorial', 'Meeting Notes'],
            lengthList: ['Short', 'Medium', 'Long'],
            dialogButtons: [
                {
                    'click': () => {
                        this.onInsertContent();
                        this.clearContent();
                    },
                    buttonModel: {
                        isPrimary: true,
                        content: 'Insert',
                        cssClass: 'e-dig-insert'
                    },
                },
                {
                    'click': this.dialogButtonClick,
                    buttonModel: {
                        content: 'Cancel',
                        cssClass: 'e-flat'
                    }
                }
            ] as ButtonPropsModel[],
            toolbarItems: [],
        }


    },
    methods: {
        onclose: function (): void {
            this.clearContent();
        },
        onOpen: async function (): Promise<void> {
            await this.onChangeToolbarVisibility(true);
        },
        setPlaceholder: function (): void {
            const editableDiv = this.$refs.editableDiv;
            if (editableDiv?.innerHTML.trim() === "") {
                editableDiv!.innerHTML = "Please provide the topic or idea for content generation...";
                editableDiv!.classList.add("placeholder"); // Add a class for styling
            }
        },
        removePlaceholder: function (): void {
            const editableDiv = this.$refs.editableDiv;
            if (editableDiv!.innerHTML === "Please provide the topic or idea for content generation...") {
                editableDiv!.innerHTML = "";
                editableDiv!.classList.remove("placeholder");
            }
        },
        onInsertContent: function (): void {
            const editableDiv = this.$refs.editableDiv;
            const container = this.$refs.container;
            const dialog = this.$refs.dialog;
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
            const editableDiv = this.$refs.editableDiv;
            editableDiv!.innerHTML = '';
            this.setPlaceholder();
            //onChangeBtnState(true);
            this.onChangeToolbarVisibility(true);
        },
        onChangeToolbarVisibility: async function (showPryItem: boolean) {
            const toolbar = this.$refs.toolbar;
            let isPrimary: boolean = true;
            if (!showPryItem) {
                isPrimary = false;
            }
            for (let i = 0; i < 5; i++) {
                toolbar.items[i].visible = isPrimary;
                toolbar.items[i + 5].visible = !isPrimary;
            }
        },
        updateIndex: function () {
            const editableDiv = this.$refs.editableDiv;
            let element: HTMLInputElement = document.getElementById('numeric')! as HTMLInputElement;
            let text: string = editableDiv!.innerHTML;
            if (this.outList.length > 0 && this.outList.indexOf(text) !== -1) {
                element.value = (this.outList.indexOf(text) + 1).toString();
            } else {
                element.value = '0';
            }
        },
        onToolbarCreated: async function () {
            // this.$refs.dialog.show();
            this.updateIndex();
        },
        dialogButtonClick: function () {
            this.clearContent();
            this.$refs.dialog?.hide();
        },
        onSettingsClick: function () {
            this.onChangeToolbarVisibility(false);
        },
        onCloseSecndaryToolbar: function () {
            this.onChangeToolbarVisibility(true);
        },
        onGenerate: async function (options: AzureAIRequestOptions): Promise<void> {
            const editableDiv = this.$refs.editableDiv;
            this.outList = [];
            for (let i = 0; i < 3; i++) {
                const response = await (this as any).getAzureChatAIRequest(options);
                if (response && this.outList.indexOf(response) === -1) {
                    this.outList.push(response);
                } else {
                    i--;
                }
            }
            if (this.outList.length > 0) {
                editableDiv!.innerHTML = this.outList[0];
            }
        },
        onGenerateClick: async function () {
            const editableDiv = this.$refs.editableDiv;
            const toolbar = this.$refs.toolbar;
            createSpinner({
                target: document.getElementById('dialog') as HTMLElement,
            });
            showSpinner(document.getElementById('dialog') as HTMLElement);
            let text: string = editableDiv!.innerText;
            if (toolbar.items[3].text === 'Generate') {
                const options: AzureAIRequestOptions = {
                    messages: [
                        { role: "system", content: `You are a helpful assistant. Your task is to generate content based on the provided text. Please adjust the text to reflect a tone of '${this.toneValue}', formatted in '${this.formatValue}' style, and maintain a length of '${this.lengthValue}'. Always respond in proper text format not a md format. Always respond in proper HTML format, excluding <html>, <head>, and <body> tags.` },
                        { role: "user", content: text }
                    ],
                    model: "gpt-4",
                };
                await this.onGenerate(options);
                toolbar.items[3].text = 'Rewrite';
            } else {
                const options: AzureAIRequestOptions = {
                    messages: [
                        { role: "system", content: `You are a helpful assistant. Your task is to generate content based on the provided text. Please adjust the text to reflect a tone of '${this.toneValue}', formatted in '${this.formatValue}' style, and maintain a length of '${this.lengthValue}'. Always respond in proper text format not a md format. Always respond in proper HTML format, excluding <html>, <head>, and <body> tags.` },
                        { role: "user", content: text }
                    ],
                    model: "gpt-4",
                };
                await this.onGenerate(options);
            }
            //await onChangeBtnState(false);
            hideSpinner(document.getElementById('dialog') as HTMLElement);
        },
        moveToNext: function () {
            const editableDiv = this.$refs.editableDiv;
            let text: string = editableDiv!.innerHTML;
            let index: number = this.outList.indexOf(text);
            if (index + 1 < this.outList.length) {
                editableDiv!.innerHTML = this.outList[index + 1];
                this.updateIndex();
            }
        },
        moveToPrevious: function () {
            const editableDiv = this.$refs.editableDiv;
            let text: string = editableDiv!.innerHTML;
            let index: number = this.outList.indexOf(text);
            if (index - 1 >= 0) {
                editableDiv!.innerHTML = this.outList[index - 1];
                this.updateIndex();
            }
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
        customContextMenuSelect: function (args: CustomContentMenuEventArgs): void {
            let container = this.$refs.container;
            let dialog = this.$refs.dialog;
            let item: string = args.id;
            let id: string = container.element.id;
            switch (item) {
                case id + '_editorwrite':
                    dialog.show();
                    break;
            }
        },
        toolbarClick: function (args: ClickEventArgs): void {
            let dialog = this.$refs.dialog;
            switch (args.item.id) {
                case 'write':
                    dialog.show();
                    break;
            }
        }
    },
    created() {
        this.toolbarItems = [
            { prefixIcon: 'e-icons e-chevron-left', click: this.moveToPrevious },
            {
                type: 'Input', align: 'Left', cssClass: 'page-count', template: "<div><input type='text' id='numeric' style='width: 20px;padding-left: 10px;'> <span id=total-page> of 3 </span> </input></div>"
            },
            { prefixIcon: 'e-icons e-chevron-right', click: this.moveToNext },
            { text: 'Generate', align: 'Right', click: this.onGenerateClick, disabled: true },
            { prefixIcon: 'e-icons e-settings', click: this.onSettingsClick },

            { prefixIcon: 'e-icons e-close', click: this.onCloseSecndaryToolbar },
            {
                type: 'Input', align: 'Left', template: new ComboBox({ width: '125px', change: this.onToneChange, value: this.toneValue, dataSource: this.toneList, popupWidth: '125px', showClearButton: false, readonly: false })
            },
            {
                type: 'Input', align: 'Left', template: new ComboBox({ width: '200px', change: this.onFormatChange, value: this.formatValue, dataSource: this.formatValueList, popupWidth: '200px', showClearButton: false, readonly: false })
            },
            {
                type: 'Input', align: 'Left', template: new ComboBox({ width: '100px', change: this.onLengthChange, value: this.lengthValue, dataSource: this.lengthList, popupWidth: '100px', showClearButton: false, readonly: false })
            },
            { text: 'Rewrite', click: this.onGenerateClick },
        ];
    },
    mounted() {
        let container = this.$refs.container;

        let titleBar: TitleBar = new TitleBar(this.$refs.doc_titlebar, container.documentEditor, true);
        if (container.documentEditor) {
            container.documentEditor.documentName = 'Getting Started';
            titleBar.updateDocumentTitle();
        }
        let menuItems: MenuItemModel[] = [
            {
                text: 'AI Write',
                id: 'write',
                iconCss: 'e-icons e-file-new'
            }];

        container.documentEditor?.contextMenu.addCustomMenu(menuItems, false);


        const editableDiv = this.$refs.editableDiv;
        function setPlaceholder() {
            if (editableDiv?.innerHTML.trim() === "") {
                editableDiv!.innerHTML = "Please provide the topic or idea for content generation...";
                editableDiv!.classList.add("placeholder"); // Add a class for styling
            }
        }
        function removePlaceholder() {
            if (editableDiv!.innerHTML === "Please provide the topic or idea for content generation...") {
                editableDiv!.innerHTML = "";
                editableDiv!.classList.remove("placeholder");
            }
        }
        setPlaceholder();
        editableDiv?.addEventListener("focus", removePlaceholder);
        editableDiv?.addEventListener("blur", setPlaceholder);

        const toolbar = this.$refs.toolbar;
        editableDiv?.addEventListener('input', function () {
            // if (dialog.buttons[0] && dialog.buttons[0].buttonModel) {
            //     dialog.buttons[0].buttonModel.disabled = false;
            // }
            toolbar.items[3].disabled = false;
        });

        async function onChangeBtnState(isShow: boolean) {
            const toolbar = this.$refs.toolbar;
            toolbar.items[0].disabled = isShow;
            toolbar.items[2].disabled = isShow;
            toolbar.refresh();
            this.updateIndex();
            let element: HTMLElement = document.getElementById('total-page')!;
            if (!isShow) {
                element.innerHTML = ' of ' + this.outList.length;
            } else {
                element.innerHTML = ' of 0';
            }
        }
    },
    provide: {
        DocumentEditorContainer: [Toolbar]
    }
}
</script>