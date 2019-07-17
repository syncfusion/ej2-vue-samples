<template>
<div class="control-section" style="overflow:hidden;">
<div class="col-lg-8 control-section">
    <div class="control-wrapper">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor ref="rteInstance" :pasteCleanupSettings="pasteCleanupSettings">
                    <p>RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
                    <p><b>Paste cleanup properties:</b></p>
                    <ul>
                        <li>
                            <p>prompt - specifies whether to enable the prompt when pasting in RichTextEditor.</p>
                        </li>
                        <li>
                            <p>plainText - specifies whether to paste as plain text or not in RichTextEditor.</p>
                        </li>
                        <li>
                            <p>keepFormat- specifies whether to keep or remove the format when pasting in RichTextEditor.</p>
                        </li>
                        <li>
                            <p>deniedTags - specifies the tags to restrict when pasting in RichTextEditor.</p>
                        </li>
                        <li>
                            <p>deniedAttributes - specifies the attributes to restrict when pasting in RichTextEditor.</p>
                        </li>
                        <li>
                            <p>allowedStyleProperties - specifies the allowed style properties when pasting in RichTextEditor.</p>
                        </li>
                    </ul>
                </ejs-richtexteditor>
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
                        <div>Format Option </div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist ref="formatOptionInstance" :dataSource="formatData"  :fields='fields' :popupHeight="height" :change="formatChange" :value='value'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Denied Tags </div>
                    </td>
                    <td>
                        <div>
                            <ejs-textbox ref="deniedTagsInstance" type="text" class="e-input" placeholder="'img[!href]', 'h1'" :blur="deniedTagChange"></ejs-textbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Denied Attributes </div>
                    </td>
                    <td>
                        <div>
                            <ejs-textbox ref="deniedAttributesInstance" type="text" class="e-input" placeholder="'id', 'title'" :blur="deniedAttrsChange"></ejs-textbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>Allowed Style Properties </div>
                    </td>
                    <td>
                        <div>
                            <ejs-textbox ref="allowedStylePropertiesInstance" type="text" class="e-input" placeholder="'href', 'style'" :blur="allowStyleChange"></ejs-textbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div id="action-description">
    <p>This example demonstrates the paste cleanup feature of the Rich Text Editor control. Copy your content from MS Word or other website, and paste it within the editor to cleanup.</p>
</div>

<div id="description">
    <p>The Rich Text Editor allows to paste the HTML content from MS Word or other websites. The editor cleanup the pasted HTML content by considering the following items.</p>
    <ul>
        <li>The unformatted HTML element (MOS XML format) content to standard HTML elements.</li>
        <li>The MS Office prefixed style properties is converted to proper CSS style properties.</li>
        <li>The unwanted tags, CSS styles, and comments are removed from the copied content.</li>
    </ul>
    <p>The following settings are available to cleanup the content in pasteCleanup settings property:</p>
    <ul>
        <li>Select any option in <code>Format Option</code> drop down list for the paste content.
            <ul>
                <li>Select the <code>Prompt</code> option to invoke prompt dialog with paste options on pasting the content in editor.</li>
                <li>Select the <code>Plain Text</code> option to paste the content as plain text.</li>
                <li>Select the <code>Keep Format</code> option to keep the same format in the copied content.</li>
                <li>Select the <code>Clean Format</code> option to remove the style format in the copied content.</li>
            </ul>
        </li>
        <li>Fill the <code>denied tags</code> text box to ignore the tags when pasting HTML content. For example:
            <ul>
                <li><code>['a[!href]']</code> - paste the content by filtering anchor tags that don’t have the 'href' attribute.</li>
                <li><code>['a[href, target]']</code> - paste the content by filtering anchor tags that have the 'href' and 'target' attributes.</li>
            </ul>
        </li>
        <br/>
        <li>Fill the <code>denied attributes</code> to paste the content by filtering out these attributes from the content. For example:
            <ul>
                <code>['id', 'title']</code> - This will remove the attributes 'id' and 'title' from all tags.
            </ul>
        </li>
        <br/>
        <li>Fill the <code>allowed style properties</code> to paste the content by accepting these style attributes and removing other attributes. For example:
            <ul>
                <code>['color', 'margin']</code> - This will allow only the style properties 'color' and 'margin' in each pasted element.
            </ul>
        </li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The previous features were built as modules to be included in your application. For example, inject the <code>'PasteCleanup'</code> module using <code>RichTextEditor.Inject (Toolbar, Link, Image, Count, HtmlEditor, PasteCleanup)</code> to use the paste cleanup feature.</p>
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
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { RadioButtonPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './data-source.json';

Vue.use(DropDownListPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(RadioButtonPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            pasteCleanupSettings: {
                prompt: true,
                plainText: false,
                keepFormat: false
            },
            height: '200px',
            formatData: data['formatData'],
            fields: { text: 'format', value: 'Id' }, 
            value: 'prompt'
        };
    },
    methods: {
        formatChange: function() {
            if (this.$refs.formatOptionInstance.ej2Instances.value === 'prompt') {
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = true;
            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'plainTextFormatting') {
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = true;
            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'keepFormating') {
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = false;
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.keepFormat = true;
            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'cleanFormatting') {
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = false;
                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.keepFormat = false;
            }
        },
        deniedTagChange: function() {
            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.deniedTags = (eval)('[' + this.$refs.deniedTagsInstance.ej2Instances.value + ']');
            this.$refs.rteInstance.ej2Instances.dataBind();
        },
        deniedAttrsChange: function() {
            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.deniedAttrs = (eval)('[' + this.$refs.deniedAttributesInstance.ej2Instances.value + ']');
            this.$refs.rteInstance.ej2Instances.dataBind();
        },
        allowStyleChange: function() {
            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.allowedStyleProps = (eval)('[' + this.$refs.allowedStylePropertiesInstance.ej2Instances.value + ']');
            this.$refs.rteInstance.ej2Instances.dataBind();
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, PasteCleanup]
    }
});
</script>
