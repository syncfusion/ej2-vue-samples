<template>
    <div>
        <div class="col-lg-8 control-section">
            <div class="sample-container">
                <div class="default-section">
                    <div id="formatPainterRTE">
                    <ejs-richtexteditor ref="formatPainterRTE" :toolbarSettings="toolbarSettings">
                        <h3>Format Painter</h3>
                        <p>
                            A Format Painter is a Rich Text Editor feature allowing users to quickly 
                            <span style="background-color: rgb(198, 140, 83);"><strong>copy</strong></span>
                            and 
                            <span style="background-color: rgb(198, 140, 83);"><strong>paste</strong></span>
                            formatting from one text to another. With a rich text editor, utilize the format painter as follows:
                        </p>
                        <ul>
                            <li>
                                Select the text whose format you want to copy.
                            </li>
                            <li>
                                Click on the <strong><em>Format Painter</em></strong> button in the toolbar. It may look like a paintbrush icon.
                            </li>
                            <li>
                                The cursor will change to a <strong>paintbrush</strong> icon. Click and drag the cursor over the text you want to apply the copied format.
                            </li>
                            <li>
                                Release the mouse button to apply the format.
                            </li>
                        </ul>
                        <p>
                            Using the format painter in a rich text editor can save you time when formatting a large document, You can quickly 
                            copy and apply formatting
                            to <span style="background-color: rgb(198, 140, 83);"><strong>multiple sections</strong></span>. 
                            It's a helpful tool for anyone who works with text editing regularly, such as writers, editors, and content creators.
                        </p>
                    </ejs-richtexteditor>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <div title="Properties" id="property">
                <table id="property" title="Properties">
                    <tbody>
                        <tr>
                            <td>
                                <div>Allowed Formats</div>
                                <div>
                                    <ejs-textbox floatLabelType="Never" cssClass="e-outline" placeholder="span; strong; em; sup, sub; code;" :blur="setAllowedFormats">
                                    </ejs-textbox>                                
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Denied Formats</div>
                                <div>
                                    <ejs-textbox floatLabelType="Never" cssClass="e-outline" placeholder="span(important)[title]{background-color,color};" :blur="setdeniedFormats">
                                    </ejs-textbox>                                  
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="action-description">
            <p>This demo demonstrates the Format Painter feature of the Rich Text Editor component. With Format Painter, copy and apply styles from one content to another.</p>
        </div>

        <div id="description">
            <p>The <b>Format Painter</b> feature allows you to copy the formats and apply them to content without formatting thus saving time to reformat the content.</p>
                <ul>
                    <li>
                        Format painter can be accessed via the toolbar or the keyboard shortcuts.
                    </li>
                    <li>
                        The sticky mode can be enabled by double-clicking the toolbar button, and it can be utilized to apply a format to multiple locations.            
                    </li>
                </ul>
            <p><b>Keyboard Shortcut</b></p>
            <ul>
                <li>
                    <kbd>ALT + SHIFT + C</kbd> - Copy the selection format or current range.
                </li>
                <li>
                    <kbd>ALT + SHIFT + V</kbd> - Paint the copied format.
                </li>
                <li>
                    <kbd>ESC</kbd> - Remove the previously copied format and disable the sticky mode.
                </li>
            </ul>
            <p>The following settings are available to customize the format painter in the <code>formatPainterSettings</code> property.</p>
            <ul>
                <li><p>Fill the <code>Allowed Formats</code> input with selectors only whose format styles will be allowed. For example: </p></li>
                    <ul>
                        <li>
                            <code>span; strong; em; </code> as the input allows only the span, strong, and em format styles to be copied.
                        </li>
                    </ul>
                <li><p>Fill the <code>Denied Formats</code> input with selectors only whose format styles will be explicitly prohibited. For example:</p>
                    <ul>
                        <li>
                            <code>span(important)[title]{background-color,color}</code> as the input will remove only the <code>important</code> class, 
                            <code>title</code> attribute, <code>color,</code> and <code>background-color</code>
                            of the span element. All other format styles will be copied. 
                        </li>
                    </ul>
                </li>
            </ul>
            <p><b>Injecting Modules:</b></p>
            <p>The Format Painter feature is segregated as an individual module. To use the format painter you can import and then inject it into the RichTextEditor.</p>
            <p>
                For example, to use the <code>'FormatPainter'</code> feature we need to inject by using <code>HtmlEditor, Toolbar, QuickToolbar, FormatPainter</code> into the <code>provide</code> section..
            </p>
        </div>
    </div>
</template>
<style scoped>
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
    import { RichTextEditorComponent, HtmlEditor, Toolbar, QuickToolbar, FormatPainter ,Table, Link, Image} from "@syncfusion/ej2-vue-richtexteditor";
    import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    import * as data from './data-source.json';

    export default {
        components: {
            'ejs-richtexteditor': RichTextEditorComponent,
            'ejs-textbox': TextBoxComponent
        },
        data: function() {
            return {
                toolbarSettings : {
                  items: ['FormatPainter', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
                'SuperScript', 'SubScript', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', 'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'SourceCode', 'Undo', 'Redo']
                }
            }
        },
        methods : {
            setAllowedFormats: function(e) {
                this.$refs.formatPainterRTE.formatPainterSettings.allowedFormats = e.value;

            },
            setdeniedFormats: function (e) {
                this.$refs.formatPainterRTE.formatPainterSettings.deniedFormats = e.value;

            }
        },
        provide : {
            richtexteditor: [HtmlEditor, Toolbar, QuickToolbar, FormatPainter ,Table, Link, Image]
        }
    }

</script>