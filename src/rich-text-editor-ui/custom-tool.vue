<template>
    <div>
        <div class="control-section e-rte-custom-tbar-section">
            <div class="sample-container">
                <div class="default-section" id="rteSection">

                    <ejs-richtexteditor-ui
                        ref="rteObj"
                        :value="value"
                        valueFormat="html"
                        :toolbarSettings="toolbarSettings"
                        :created="onCreate"
                        :actionComplete="actionComplete">
                    </ejs-richtexteditor-ui>

                    <ejs-dialog
                        id="customTbarDialog"
                        ref="dialogObj"
                        :buttons="dlgButtons"
                        :header="header"
                        :overlayClick="dialogOverlay"
                        :visible="visible"
                        :showCloseIcon="showCloseIcon"
                        :isModal="modal"
                        :target="target"
                        width="45%"
                        :created="dialogCreate">
                    </ejs-dialog>

                    <div id="dialogContent" style="display:none">
                        <div id="rteSpecial_char" ref="rteSpecialCharEle">
                            <div class="char_block" title="^">^</div>
                            <div class="char_block" title="_">_</div>
                            <div class="char_block" title="`">`</div>
                            <div class="char_block" title="{">{</div>
                            <div class="char_block" title="|">|</div>
                            <div class="char_block" title="}">}</div>
                            <div class="char_block" title="~">~</div>
                            <div class="char_block" title="¡">¡</div>
                            <div class="char_block" title="¢">¢</div>
                            <div class="char_block" title="£">£</div>
                            <div class="char_block" title="¤">¤</div>
                            <div class="char_block" title="¥">¥</div>
                            <div class="char_block" title="₹">₹</div>
                            <div class="char_block" title="¦">¦</div>
                            <div class="char_block" title="§">§</div>
                            <div class="char_block" title="¨">¨</div>
                            <div class="char_block" title="©">©</div>
                            <div class="char_block" title="ª">ª</div>
                            <div class="char_block" title="«">«</div>
                            <div class="char_block" title="¬">¬</div>
                            <div class="char_block" title="®">®</div>
                            <div class="char_block" title="¯">¯</div>
                            <div class="char_block" title="°">°</div>
                            <div class="char_block" title="±">±</div>
                            <div class="char_block" title="²">²</div>
                            <div class="char_block" title="³">³</div>
                            <div class="char_block" title="´">´</div>
                            <div class="char_block" title="µ">µ</div>
                            <div class="char_block" title="¶">¶</div>
                            <div class="char_block" title="·">·</div>
                            <div class="char_block" title="¸">¸</div>
                            <div class="char_block" title="¹">¹</div>
                            <div class="char_block" title="º">º</div>
                            <div class="char_block" title="»">»</div>
                            <div class="char_block" title="¼">¼</div>
                            <div class="char_block" title="½">½</div>
                            <div class="char_block" title="¾">¾</div>
                            <div class="char_block" title="¿">¿</div>
                            <div class="char_block" title="À">À</div>
                            <div class="char_block" title="Á">Á</div>
                            <div class="char_block" title="Â">Â</div>
                            <div class="char_block" title="Ã">Ã</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample shows how to add your own commands to toolbar of the
                Rich Text Editor UI.
            </p>
        </div>

        <div id="description">
            <p>
                Click the Ω toolbar item and select a symbol to insert it into
                the editor.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-dialog': DialogComponent
    },

    data() {
        return {
            range: null,
            saveSelection: null,
            customBtn: null,

            target: '#rteSection',

            header: 'Special Characters',
            visible: false,
            modal: true,
            showCloseIcon: false,

            value:
                '<p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p>',

            dlgButtons: [
                {
                    click: () => this.onInsert(),
                    buttonModel: {
                        content: 'Insert',
                        isPrimary: true
                    }
                },
                {
                    click: () => this.dialogOverlay(),
                    buttonModel: {
                        content: 'Cancel'
                    }
                }
            ],

            toolbarSettings: {
                items: ['Bold','Italic','Underline','|','Formats','Alignment','NumberFormatList','BulletFormatList','|','Link','Image','|',{
                        id: 'custom_tbar',
                        tooltipText: 'Insert Symbol',
                        actionId: 'insertSymbol',
                        template:
                            '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%">' +
                            '<div class="e-tbar-btn-text" style="font-weight:400">Ω</div>' +
                            '</button>'
                    },'|','Undo','Redo'
                ]
            }
        };
    },

    methods: {
        onCreate() {
            this.customBtn = document.getElementById('custom_tbar');

            const proxy = this;

            this.customBtn.onclick = function () {
                const editor = proxy.$refs.rteObj.ej2Instances;

                editor.focus();

                const selection = window.getSelection();

                if (selection && selection.rangeCount > 0) {
                    proxy.range = selection.getRangeAt(0);
                    proxy.saveSelection = proxy.range.cloneRange();
                }

                proxy.$refs.dialogObj.ej2Instances.content =
                    proxy.$refs.rteSpecialCharEle;

                proxy.$refs.dialogObj.ej2Instances.dataBind();

                proxy.$refs.dialogObj.show();
            };
        },

        actionComplete(args) {
            const editor = this.$refs.rteObj.ej2Instances;

            const customButton =
                editor.toolbarModule.element
                    .querySelector('#custom_tbar')
                    .parentElement;

            if (args.requestType === 'SourceCode') {
                customButton.classList.add('e-overlay');
            } else if (args.requestType === 'Preview') {
                customButton.classList.remove('e-overlay');
            }
        },

        dialogCreate() {
            const dialogCtn = this.$refs.rteSpecialCharEle;
            const proxy = this;

            dialogCtn.onclick = function (e) {
                const target = e.target;

                const activeEle =
                    proxy.$refs.dialogObj.$el.querySelector(
                        '.char_block.e-active'
                    );

                if (target.classList.contains('char_block')) {
                    target.classList.add('e-active');

                    if (activeEle) {
                        activeEle.classList.remove('e-active');
                    }
                }
            };
        },

        onInsert() {
            const activeEle =
                this.$refs.dialogObj.$el.querySelector(
                    '.char_block.e-active'
                );

            if (activeEle && this.saveSelection) {
                const editor =
                    this.$refs.rteObj.ej2Instances;

                editor.focus();

                const selection = window.getSelection();

                selection.removeAllRanges();
                selection.addRange(this.saveSelection);

                editor.commands.insertText(
                    activeEle.textContent
                );
            }

            this.dialogOverlay();
        },

        dialogOverlay() {
            const activeEle =
                this.$refs.dialogObj.$el.querySelector(
                    '.char_block.e-active'
                );

            if (activeEle) {
                activeEle.classList.remove('e-active');
            }

            this.$refs.dialogObj.hide();
        }
    }
};
</script>

<style>
#rteSection {
    height: 500px;
}

#rteSpecial_char {
    padding: 15px 0;
}

#custom_tbar,
#custom_tbar div {
    cursor: pointer;
}

#custom_tbar div {
    font-size: 16px;
}

.char_block {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 5px 5px 0;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ddd;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    display: inline-block;
}

.char_block.e-active {
    outline: 1px solid #0d6efd;
    border-color: #0d6efd;
}
</style>