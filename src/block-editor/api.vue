<template>
    <div class="col-lg-8 control-section">
        <div class="control-wrapper">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-blockeditor id='api-blockeditor' :blocks="blocks" ref="apiBlockEditor" :focus="onFocus"></ejs-blockeditor>
                </div>
            </div>
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
                        <td></td>
                        <td>
                            <div>
                                <button id="getJson" class="btn btn-default">Get JSON Data</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <button id="getHtml" class="btn btn-default">Get HTML Data</button>
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
                                <button id="focusIn" class="btn btn-default">Focus In</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <button id="focusOut" class="btn btn-default">Focus Out</button>
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
        <p>This sample demonstrates the usage of API in Block Editor. Use the properties panel to change read-only mode, enable/disable drag and drop, enable HTML encode, get JSON data, get block count, select all blocks, and control focus.</p>
    </div>
    <div id="description">
        <p>In this demo, you can explore the API behaviors by:</p>
        <ul>
            <li>Click the <code>readOnly</code> checkbox to enable/disable editable and non-editable mode of the Block Editor.</li>
            <li>Click the <code>enableDragDrop</code> checkbox to enable/disable drag and drop functionality.</li>
            <li>Click the <code>getJsonData</code> button to display the focused block JSON data in an alert window.</li>
            <li>Click the <code>getHtmlData</code> button to display the editor content as HTML in an alert window.</li>
            <li>Click the <code>getBlockCount</code> button to display the total number of blocks in an alert window.</li>
            <li>Click the <code>selectAllBlocks</code> button to select all content in the editor.</li>
            <li>Click the <code>focusIn</code> button to focus the editor.</li>
            <li>Click the <code>focusOut</code> button to remove focus from the editor.</li>
            <li>Click the <code>print</code> button to preview the content before printing from the editor.</li>
        </ul>
    </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import * as data from './blockData.json';

let focusedBlock;
export default {
    components: {
        "ejs-blockeditor": BlockEditorComponent,
        'ejs-checkbox': CheckBoxComponent
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
            focusedBlock = args.blockId;
        },

    },
    mounted() {
        const editor = this.$refs.apiBlockEditor.ej2Instances;
        document.getElementById('getJson').onclick = function () {
            const jsonData = editor.getDataAsJson(focusedBlock);
            alert(JSON.stringify(jsonData, null, 2));
        };

        document.getElementById('getHtml').onclick = function () {
            alert(editor.getDataAsHtml());
        };

        document.getElementById('getBlockCount').onclick = function () {
            alert('Total blocks: ' + editor.getBlockCount());
        };

        document.getElementById('selectall').onclick = function () {
            editor.selectAllBlocks();
        };

        document.getElementById('focusIn').onclick = function () {
            editor.focusIn();
        };

        document.getElementById('focusOut').onclick = function () {
            editor.focusOut();
        };

        document.getElementById('print').onclick = function () {
            editor.print();
        }; 
    }
}
</script>

<style>
    .blockeditor-api {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

    .block-editor-table div {
        padding:10px 0px 0px 10px !important;
    }

    @media only screen and (max-width: 750px) {
        .blockeditor-api {
            width: 100%;
        }
    }
</style>