<template>
<div>
<div class="control-section enter-key-sample">
    <div class="sample-container">
        <div class="default-section">
            <table class="api">
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <ejs-dropdownlist ref="enterOptionInstance" :dataSource="enterData" :fields='fields' :popupHeight="height" :change="enterChange" :value='enterValue' :placeholder='enterPlaceHolder' :floatLabelType='floatLabelType'></ejs-dropdownlist>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ejs-dropdownlist ref="shiftEnterOptionInstance" :dataSource="shiftEnterData" :fields='fields' :popupHeight="height" :change="shiftEnterChange" :value='shiftEnterValue' :placeholder='shiftEnterPlaceHolder' :floatLabelType='floatLabelType'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <ejs-richtexteditor ref="rteInstance" :saveInterval="saveInterval" :height="height" :change="onChange" :created="onCreate">
                <p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>
            </ejs-richtexteditor>
            <br/>
            <label>Code View </label>
            <div id="codeView" class="codeView"></div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the API usage to customize the enter key and shift + enter key actions in the Rich Text Editor content. Code view represents the current rich text editor value when pressing typing any content or pressing enter key or shift + enter keys.</p>
</div>

<div id="description">
   <p>In this demo, ensure the API's behaviors by</p>
    <ul>
        <li>Changing the value of <code>enterKey</code> dropdown to customize the enter key action when it is pressed.</li>
        <li>Changing the value of <code>shiftEnterKey</code> dropdown to customize the shift + enter key action when it is pressed.</li>
    </ul>
</div>
</div>
</template>
<style>
    .api {
        width: 75%;
    }
    .api td {
        padding-right: 100px;
        margin-top: 3px;
    }
    @media only screen and (max-width: 600px) {
        .api {
            width: 100%;
        }
        .api td {
            display: block;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .api {
            width: 100%;
        }
    }
    .default-section {
        padding-left: 20px;
        padding-right: 20px;
    }
    .codeView {
        border: 1px solid rgba(0,0,0,0.12);
        height: 200px;
        width: 100%;
    }
    .enter-key-sample .CodeMirror {
        height: 190px;
    }
    .codeViewContent {
        padding-left: 16px;
    }
	.control-section.enter-key-sample .e-popup.e-popup-open.e-dialog {
        height: 387px !important;
    }
    .control-section.enter-key-sample .e-dialog .e-dlg-content {
        overflow: inherit;
        overflow-x: inherit;
    }
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './data-source.json';
import * as CodeMirror from 'codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

Vue.use(DropDownListPlugin);
Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
            saveInterval: 1,
            height: 220,
            enterPlaceHolder: 'When pressing the enter key',
            shiftEnterPlaceHolder: 'When pressing the shift + enter key',
            floatLabelType: 'Always',
            enterData: data['enterData'],
            shiftEnterData: data['shiftEnterData'],
            fields: { text: 'text', value: 'value' }, 
            enterValue: 'P',
            shiftEnterValue: 'BR'
        };
    },
    methods: {
        onCreate: function() {
            this.onChange();
        },
        enterChange: function() {
            if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'P';
                 this.$refs.rteInstance.ej2Instances.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'DIV';
                this.$refs.rteInstance.ej2Instances.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'BR';
                this.$refs.rteInstance.ej2Instances.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            }
            this.onChange();
        },
        shiftEnterChange: function() {
            if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'BR';
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'DIV';
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'P';
            }
        },
        onChange: function() {
            var id = this.$refs.rteInstance.ej2Instances.getID() + 'mirror-view';
            var codeView = document.getElementById('codeView');
            var mirrorView;
            if (document.getElementById(id)) {
                mirrorView = document.getElementById(id);
                mirrorView.innerHTML = '';
            } else {
                mirrorView = document.createElement('div', { className: 'e-content codeViewContent' });
                mirrorView.id = id;
                codeView.appendChild(mirrorView);
            }
            mirrorView.style.display = 'block';
            if (this.$refs.rteInstance.ej2Instances.value !== null) {
                CodeMirror(mirrorView, {
                    value: this.$refs.rteInstance.ej2Instances.value,
                    mode: 'text/html',
                    lineWrapping: true,
                    readOnly: true
                });
            }
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    }
});
</script>