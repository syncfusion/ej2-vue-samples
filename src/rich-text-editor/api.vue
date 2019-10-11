<template>
<div class="control-section" style="overflow:hidden;">
<div class="col-lg-8 control-section">
    <div class="control-wrapper">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor ref="rteInstance" :enabled="enabled" :enableHtmlEncode="enableHtmlEncode" :readonly="readOnly" :showCharCount="showCharCount" :maxLength="maxLength"><p>RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
                    <p><b>API’s:</b></p>
                    <ul><li><p>maxLength - allows to restrict the maximum length to be entered.</p></li>
                    <li><p>readOnly - allows to change it as non-editable state.</p></li>
                    <li><p>enabled - enable or disable the RTE component.</p></li>
                    <li><p>enableHtmlEncode - Get the encoded string value through value property and source code panel</p></li>
                    <li><p>getValue - get the value of RTE.</p></li>
                    <li><p>getSelection - get the selected text of RTE.</p></li>
                    <li><p>selectAll - select all content in RTE.</p></li>
                    </ul></ejs-richtexteditor>
            </div>
        </div>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <table title="Properties" id="property">
            <tbody>
                <tr>
                    <td>
                        <div>Maximum Length</div>
                    </td>
                    <td>
                        <div>
                            <ejs-numerictextbox ref="numericInstance" :change="onChange" :format='format' :min='min' :max='max' class="form-control" id="maxlength" value="1000"></ejs-numerictextbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>ReadOnly </div>
                    </td>
                    <td>
                        <div>
                            <ejs-checkbox ref="checkInstance1" :change="changeCheck" id="readonly" :checked=checked></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Enabled </div>
                    </td>
                    <td>
                        <div>
                            <ejs-checkbox ref="checkInstance2" :change="changeState" id="enable" checked=true></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Enable Html Encode </div>
                    </td>
                    <td>
                        <div>
                            <ejs-checkbox ref="checkInstance3" :change="changeHtml" id="enablehtml" :checked=checked></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native="getValue" class="btn btn-default" id="getVal">Get Value</ejs-button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native="getSelection" class="btn btn-default" id="selectHtml">Get Selection</ejs-button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native="selectAll" class="btn btn-default" id="selectall">Select All </ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div id="action-description">
       <p>This sample demonstrate the usage of API in RichTextEditor, use the properties panel to change the maximum length, read
        only mode, disable status, to get value, enable HTML encode, select all content and get selected HTML from the RichTextEditor.</p>
</div>

<div id="description">
  <p>In this demos, Ensuring the API'S behavious by doing</p>
    <ul>
        <li>Change the value of <code>maxLength</code> textbox to change maximum Length of character.</li>
        <li>Click the <code>readOnly</code> check box to enable/disable editable and non-editable mode of the RTE.</li>
        <li>Click the <code>enabled</code> check box to enable/disable the RTE component.</li>
        <li>Click the <code>enableHtmlEncode</code> check box to enableHtmlEncode/disableHtmlEncode the RTE component.</li>
        <li>Click the <code>getValue</code> button which shows the RTE values in the alert window.</li>
        <li>Click the <code>getSelection</code> button which shows the selectedText in the alert window.</li>
        <li>Click the <code>selectAll</code> button selecting all text content in the RTE.</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, Count, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style>
.control_wrapper {
    max-width: 500px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

.control-section {
    overflow: auto;
    padding-bottom: 10px;
    position: relative;
}
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";


Vue.use(RichTextEditorPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            showCharCount: true,
            maxLength: 1000,
            enabled: true,
            readOnly: false,
            checked: false,
            enableHtmlEncode: false,
            format: 'n0',
            min: 500,
            max: 2000
        };
    },
    methods: {
        onChange: function() {
            this.maxLength = this.$refs.numericInstance.$el.value;
        },
        changeCheck: function() {
            this.readOnly = this.$refs.checkInstance1.$el.checked;
        },
        changeState: function() {
            this.enabled = this.$refs.checkInstance2.$el.checked;
        },
        changeHtml: function() {
            this.enableHtmlEncode = this.$refs.checkInstance3.$el.checked;
        },
        getValue: function() {
            alert(this.$refs.rteInstance.$el.value);
        },
        getSelection: function() {
            alert(this.$refs.rteInstance.getSelection());
        },
        selectAll: function() {
            this.$refs.rteInstance.selectAll();
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    }
});
</script>