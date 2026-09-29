<template>
    <div class="control-section">
        <div class="sample-container">
        <div class="editor-sample">
            <button
                id="dialogBtn"
                class="e-btn e-primary"
                @click="openDialog">
                Open Editor
            </button>
            <div id="editorDialog"></div>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates how to render the Rich Text Editor UI
            component inside a Dialog component for composing messages or
            content.
        </p>
    </div>

    <div id="description">
        <p>
            The Rich Text Editor UI is integrated with the Syncfusion Dialog
            component to create a message composer. Click the "Open Editor"
            button to launch the dialog with the RTE. Users can compose
            formatted content using the toolbar and send or cancel their
            message. The editor automatically initializes when the dialog
            opens and clears when closed.
        </p>
    </div>
</template>

<script>
import {
    Dialog
} from '@syncfusion/ej2-popups';

import {
    RichTextEditorUI
} from '@syncfusion/ej2-richtexteditor-ui';

export default {
    name: 'DialogEditor',

    data() {
        return {
            dialogObj: null,
            editorObj: null
        };
    },

    mounted() {
        this.createDialog();
    },

    beforeUnmount() {
        if (this.editorObj) {
            this.editorObj.destroy();
            this.editorObj = null;
        }

        if (this.dialogObj) {
            this.dialogObj.destroy();
            this.dialogObj = null;
        }
    },

    methods: {
        createDialog() {
            this.dialogObj = new Dialog({
                header: 'Compose Message',
                target: document.querySelector(
                    '.editor-sample'
                ),
                animationSettings: {
                    effect: 'None'
                },
                showCloseIcon: true,
                width: '600px',
                height: '300px',

                buttons: [
                    {
                        click: this.dlgButtonClick,
                        buttonModel: {
                            content: 'Send',
                            isPrimary: true
                        }
                    },
                    {
                        click: this.dlgCancel,
                        buttonModel: {
                            content: 'Cancel'
                        }
                    }
                ],

                open: this.dialogOpen,
                close: this.dialogClose
            });

            this.dialogObj.appendTo('#editorDialog');
        },

        initializeEditor() {
            if (this.editorObj) {
                return;
            }

            const dialogContent =
                document.querySelector(
                    '#editorDialog .e-dlg-content'
                );

            if (!dialogContent) {
                return;
            }

            const contentDiv =
                document.createElement('div');

            contentDiv.id = 'dialogEditorContent';

            dialogContent.appendChild(contentDiv);

            this.editorObj = new RichTextEditorUI({
                placeholder: 'Write your message...',

                toolbarSettings: {
                    items: ['Bold','Italic','Underline','|','Formats','BulletFormatList','NumberFormatList','|','Link','Undo','Redo'
                    ]
                }
            });

            this.editorObj.appendTo('#dialogEditorContent');
        },

        openDialog() {
            if (this.dialogObj) {
                this.dialogObj.show();
            }
        },

        dlgButtonClick() {
            if (!this.editorObj) {
                return;
            }

            const content =
                this.editorObj.getHtml();

            const plainText =
                content
                    .replace(/<[^>]*>/g, '')
                    .trim();

            if (!plainText) {
                return;
            }

            window.alert(
                'Message sent:\n\n' +
                plainText
            );

            this.editorObj.value = '';
            this.editorObj.dataBind();

            this.dialogObj.hide();
        },

        dlgCancel() {
            if (this.editorObj) {
                this.editorObj.value = '';
                this.editorObj.dataBind();
            }

            if (this.dialogObj) {
                this.dialogObj.hide();
            }
        },

        dialogOpen() {
            const button =
                document.getElementById('dialogBtn');

            if (button) {
                button.style.display = 'none';
            }

            /*
             * The Dialog content is created by EJ2 before
             * the open event is raised, so initialize the
             * RTE here.
             */
            this.initializeEditor();

            if (this.editorObj) {
                this.editorObj.focusIn();
            }

            this.updateDialogIds();
        },

        dialogClose() {
            const button =
                document.getElementById('dialogBtn');

            if (button) {
                button.style.display = 'block';
            }
        },

        updateDialogIds() {
            const dialogElement =
                document.querySelector(
                    '#editorDialog .e-dialog'
                );

            if (dialogElement && !dialogElement.id) {
                dialogElement.id = 'mainDialog';
            }

            const dialogHeader =
                document.querySelector(
                    '#editorDialog .e-dlg-header'
                );

            if (dialogHeader && !dialogHeader.id) {
                dialogHeader.id = 'dialogHeader';
            }

            const dialogContent =
                document.querySelector(
                    '#editorDialog .e-dlg-content'
                );

            if (dialogContent && !dialogContent.id) {
                dialogContent.id = 'dialogContent';
            }

            const dialogFooter =
                document.querySelector(
                    '#editorDialog .e-footer-content'
                );

            if (dialogFooter && !dialogFooter.id) {
                dialogFooter.id = 'dialogFooter';
            }
        }
    }
};
</script>

<style>

.editor-sample {
    position: relative;
    min-height: 400px;
    border: 1px solid #e2e4e8;
    border-radius: 8px;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
}

#dialogBtn {
    padding: 10px 20px;
    font-size: 14px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
}

#editorDialog {
    position: absolute;
}

#mainDialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 300px;
    z-index: 10000;
}

#dialogHeader {
    padding: 16px;
}

#dialogContent {
    padding: 16px;
}

#dialogFooter {
    padding: 12px 16px;
}

#dialogEditorContent {
    min-height: 200px;
}
</style>