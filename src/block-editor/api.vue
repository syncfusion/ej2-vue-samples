<template>
    <div class="col-lg-8 control-section">
        <div class="blockeditor-api">
            <ejs-blockeditor id='api-blockeditor' height= "600px" :blocks="blocks" ref="apiBlockEditor" :focus="onFocus"></ejs-blockeditor>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div id="property" title="Properties" class="block-editor-table">
            <table id="property" title="Properties">
                <tbody>
                    <tr>
                        <td>
                            <div>ReadOnly </div>
                        </td>
                        <td>
                            <div style="padding-top: 0; padding-left: 0;">
                              <ejs-checkbox id="readonly" aria-label="Readonly" :checked="false" :change="readOnlyChange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Enable Drag and Drop </div>
                        </td>
                        <td>
                            <div style="padding-top: 0; padding-left: 0;">
                               <ejs-checkbox id="enableDragDrop" aria-label="Enable Drag and Drop" :checked="true" :change="enableDragDropChange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Get Data</div>
                        </td>
                        <td>
                            <div class='e-btn-group' style="padding: 0; margin: 10px 0 0 10px;">
                                <ejs-button  cssClass="e-btn" id="getJson">JSON</ejs-button>
                                <ejs-button  cssClass="e-btn" id="getHtml">HTML</ejs-button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <button id="getBlockCount" class="btn btn-default">Get Block Count</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <button id="selectall" class="btn btn-default">Select All Blocks</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <button id="print" class="btn btn-default">Print</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the usage of API in Block Editor. Use the properties panel to change read-only mode, enable/disable drag and drop, get JSON data, get HTML data, get block count and select all blocks</p>
    </div>
    <div id="description">
        <p>In this demo, you can explore the API behaviors by:</p>
        <ul>
            <li>Click the <code>readOnly</code> checkbox to enable/disable editable and non-editable mode of the Block Editor.</li>
            <li>Click the <code>enableDragDrop</code> checkbox to enable/disable drag and drop functionality.</li>
            <li>Use the grouped buttons:
            <ul>
                <li><code>JSON</code>: Shows the editor’s data as JSON in a predefined dialog.</li>
                <li><code>HTML</code>: Shows the editor’s HTML output as text in a predefined dialog.</li>
            </ul>
            </li>
            <li>Click the <code>getBlockCount</code> button to display the total number of blocks in an predefined dialog.</li>
            <li>Click the <code>selectAllBlocks</code> button to select all content in the editor.</li>
            <li>Click the <code>print</code> button to preview the content before printing from the editor.</li>
        </ul>
    </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import {DialogUtility} from '@syncfusion/ej2-vue-popups';
import * as data from './blockData.json';

let id;
export default {
    components: {
        "ejs-blockeditor": BlockEditorComponent,
        'ejs-checkbox': CheckBoxComponent,
        "ejs-button": ButtonComponent
    },
    data: function() {
        return {
            blocks: data['blockDataAPI']            
        }
    },
    methods: {
        readOnlyChange: function(args) {
            this.$refs.apiBlockEditor.ej2Instances.readOnly = args.checked;
        },
        enableDragDropChange: function(args) {
            this.$refs.apiBlockEditor.ej2Instances.enableDragAndDrop = args.checked;
        },
        onFocus: function (args) {
            id = args.blockId;
        },

    },
    mounted() {
        const editor = this.$refs.apiBlockEditor.ej2Instances;
        // Helper: escape HTML to display raw content safely inside dialog
        const escapeHtml = function(html) {
            return html
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        };

        // Reusable predefined dialog helper (single place to show alerts)
        const openDialog = function(title, content, isHtml) {
            let updatedContent = isHtml ? escapeHtml(content) : content;
            let dlg = DialogUtility.alert({
                title: title,
                content: `<pre style="white-space: pre-wrap;">${updatedContent}</pre>`,
                okButton: { text: 'OK', click: function() { dlg.close(); } },
                isModal: true,
                position: { X: 'center', Y: 'center' },
                height: "400px",
                width: "500px",
                closeOnEscape: true
            });
        };

        document.getElementById('getJson').onclick = function () {
            const jsonData = editor.getDataAsJson();
            openDialog('JSON Data', JSON.stringify(jsonData, null, 2));
        };

        document.getElementById('getHtml').onclick = function () {
            const htmlData = editor.getDataAsHtml();
            openDialog('Editor HTML', htmlData, true);
        };

        document.getElementById('getBlockCount').onclick = function () {
            let dialog = DialogUtility.alert({
                title: "Block Count",
                content: '<div>Total blocks: <b>' + editor.getBlockCount() + '</b></div>',
                okButton: { text: 'OK', click: function() { dialog.close(); } },
                isModal: true,
                position: { X: 'center', Y: 'center' },
                width: "250px",
                closeOnEscape: true
            });
        };

        document.getElementById('selectall').onclick = function () {
            editor.selectAllBlocks();
        };

        document.getElementById('print').onclick = function () {
            editor.print();
        }; 
    }
}
</script>

<style>
    .blockeditor-api {
        width: 100%;
        margin: 0 auto;
    }
    .block-editor-table .e-btn 
    {
        background-color: white;
        color: black;
    }
    .block-editor-table div {
        padding:10px 0px 0px 10px;
    }
</style>