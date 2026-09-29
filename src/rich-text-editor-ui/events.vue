<template>
    <div>
        <div class="col-lg-9 control-section">
            <div class="content-wrapper">
                <ejs-richtexteditor-ui
                    ref="editor"
                    :toolbarSettings="toolbarSettings"
                    :slashCommandSettings="slashCommandSettings"
                    :created="onCreated"
                    :destroyed="onDestroyed"
                    :focus="onFocus"
                    :blur="onBlur"
                    :change="onChange"
                    :actionBegin="onActionBegin"
                    :actionComplete="onActionComplete"
                    :beforeDialogOpen="onBeforeDialogOpen"
                    :beforeDialogClose="onBeforeDialogClose"
                    :beforeFileUpload="onBeforeFileUpload"
                    :beforeFileDrop="onBeforeFileDrop">
                </ejs-richtexteditor-ui>
            </div>
        </div>

        <div class="col-lg-3 property-section">
            <table id="property" title="Event Trace">
                <tbody>
                    <tr>
                        <td>
                            <div class="eventarea" style="height:245px;overflow:auto">
                                <span
                                    id="EventLog"
                                    v-html="eventLog">
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="evtbtn" style="padding-bottom:10px">
                                <button
                                    class="e-btn e-primary"
                                    @click="clearLog">
                                    Clear
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the events that trigger on every action
                of the Rich Text Editor.
            </p>
        </div>

        <div id="description">
            <p>
                The Rich Text Editor triggers events based on user actions and
                editor interactions.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent,SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
    name: 'Events',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            eventLog: '',

            toolbarSettings: {
                items: ['Bold','Italic','Underline','|','FontColor','BackgroundColor','|','FontName','FontSize','|','Table','Image','Link','|','Formats','Alignment','NumberFormatList','BulletFormatList','|','Undo','Redo'
                ],
                updatedToolbarStatus: this.onUpdatedToolbarStatus,
                itemClicked: this.onItemClick
            },

            slashCommandSettings: {
                enable: true,
                itemSelect: this.onSlashCommandItemSelect
            }
        };
    },

    provide: {
        'richtexteditor-ui': [SlashCommand]
    },

    methods: {
        appendLog(message) {
            this.eventLog = `${message}<hr>${this.eventLog}`;
        },

        clearLog() {
            this.eventLog = '';
        },

        onCreated() {
            this.appendLog(
                'Rich Text Editor UI <b>created</b> event called'
            );
        },

        onDestroyed() {
            this.appendLog(
                'Rich Text Editor UI <b>destroyed</b> event called'
            );
        },

        onFocus() {
            this.appendLog(
                'Rich Text Editor UI <b>focus</b> event called'
            );
        },

        onBlur() {
            this.appendLog(
                'Rich Text Editor UI <b>blur</b> event called'
            );
        },

        onChange() {
            this.appendLog(
                'Rich Text Editor UI <b>change</b> event called'
            );
        },

        onActionBegin(args) {
            this.appendLog(
                `<b>${args.action}</b> action is called`
            );
        },

        onActionComplete(args) {
            this.appendLog(
                `<b>${args.action}</b> action is completed`
            );
        },

        onItemClick(args) {
            this.appendLog(
                `Rich Text Editor UI <b>toolbar click</b> event called`
            );
        },

        onUpdatedToolbarStatus() {
            this.appendLog(
                'Rich Text Editor UI <b>updatedToolbarStatus</b> event called'
            );
        },

        onBeforeDialogOpen() {
            this.appendLog(
                'Rich Text Editor UI <b>beforeDialogOpen</b> event called'
            );
        },

        onBeforeDialogClose() {
            this.appendLog(
                'Rich Text Editor UI <b>beforeDialogClose</b> event called'
            );
        },

        onBeforeFileUpload() {
            this.appendLog(
                'Rich Text Editor UI <b>beforeFileUpload</b> event called'
            );
        },

        onBeforeFileDrop() {
            this.appendLog(
                'Rich Text Editor UI <b>beforeFileDrop</b> event called'
            );
        },

        onSlashCommandItemSelect() {
            this.appendLog(
                'Rich Text Editor UI <b>slashCommanditemSelect</b> event called'
            );
        }
    }
};
</script>

<style>
#EventLog b {
    color: #018607;
}

#EventLog hr {
    margin: 1px 10px 1px 0;
    border-top: 1px solid #eee;
}

.eventarea {
    padding: 8px;
}

.editor-properties div {
    padding-left: 0;
}
</style>