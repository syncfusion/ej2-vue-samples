<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteInstance" :actionBegin="actionBeginHandler" :actionComplete="actionCompleteHandler" :toolbarSettings="toolbarSettings" :iframeSettings="iframeSettings" :height="height" :fileManagerSettings="fileManagerSettings" :quickToolbarSettings='quickToolbarSettings' :exportWord="exportWord" :exportPdf="exportPdf" :importWord="importWord">
            <p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
            Users can format their content using standard toolbar commands.</p>
            <p><b>Key features:</b></p>
            <ul><li><p>Provides IFRAME and DIV modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
            <li><p>Supports third-party library integration.</p></li>
            <li><p>Allows a preview of modified content before saving it.</p></li>
            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
            <li><p>Contains undo/redo manager.</p></li>
            <li><p>Creates bulleted and numbered lists.</p></li>
            </ul>
            <h3>Auto Formatting – Write Faster, Format Smarter</h3>            
            <p>
                Boost your productivity with Auto Formatting, a powerful feature
                that lets you style content instantly using simple, familiar
                Markdown-style shortcuts. No need to reach for the toolbar —
                just type and watch your content transform in real time.
            </p>
                        
            <h4>Effortless Formatting Shortcuts</h4>
                        
            <table>
            <thead>
            <tr>
                <th>Action</th>
                <th>Shortcut</th>
            </tr>
            </thead>
            <tbody>
                                <tr>
                                    <td>Bulleted List</td>
                                    <td>
                                        Start a line with <code>*</code> or
                                        <code>-</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Numbered List</td>
                                    <td>
                                        Start a line with <code>1.</code> or
                                        <code>i.</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Checklist / To-do</td>
                                    <td>
                                        Start a line with <code>[ ]</code> or
                                        <code>[x]</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Headings (H1 to H6)</td>
                                    <td>
                                        Use <code>#</code>, <code>##</code>, <code>###</code>,
                                        <code>####</code>, <code>#####</code>, or
                                        <code>######</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Block Quote</td>
                                    <td>
                                        Start a line with <code>&gt;</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Code Block</td>
                                    <td>
                                        Start a line with <code>```</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Horizontal Line</td>
                                    <td>
                                        Start a line with <code>---</code> followed by a space
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bold Text</td>
                                    <td>Type <code>**text**</code> or <code>__text__</code></td>
                                </tr>
                                <tr>
                                    <td>Italic Text</td>
                                    <td>Type <code>*text*</code> or <code>_text_</code></td>
                                </tr>
                                <tr>
                                    <td>Inline Code</td>
                                    <td>Type <code>`text`</code></td>
                                </tr>
                                <tr>
                                    <td>Strikethrough</td>
                                    <td>Type <code>~~text~~</code></td>
                                </tr>
                            </tbody>
                        </table>
            </ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the default rendering of the Rich Text Editor in <code>iframe mode</code>.</p>
</div>


<div id="description">
   <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor that is used to create and edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. The toolbar contains commands to align the text, insert link, insert image, 
       insert list, undo/redo the operation, HTML view, and more.</P>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Table, Link, Image, QuickToolbar, HtmlEditor, FileManager, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style scoped>
.sb-header {
    z-index: 100 !important;
}
.sb-content.e-view.hide-header {
    top: 0 !important;
}
.sb-header.e-view.hide-header {
    display: none;
}
</style>
<script>
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Table, Link, Image, QuickToolbar, HtmlEditor, FileManager, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock, ImportExport, ClipBoardCleanup, AutoFormat } from "@syncfusion/ej2-vue-richtexteditor";

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    },
    data: function() {
        return {
            toolbarSettings: {
         items: ['Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
                'HorizontalLine', 'Blockquote', '|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|',
                'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
                'EmojiPicker', 'FileManager', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
                '|', 'Print', 'FullScreen', '|', 'SourceCode']
    },
    importWord: {
                serviceUrl: 'https://services.syncfusion.com/vue/production/api/RichTextEditor/ImportFromWord',
            },
    exportWord: {
          serviceUrl: 'https://services.syncfusion.com/vue/production/api/RichTextEditor/ExportToDocx',
          fileName: 'RichTextEditor.docx',
          stylesheet: `
          .e-rte-content {
              font-size: 1em;
              font-weight: 400;
              margin: 0;
          }
      `
        },

        exportPdf: {
          serviceUrl: 'https://services.syncfusion.com/vue/production/api/RichTextEditor/ExportToPdf',
          fileName: 'RichTextEditor.pdf',
          stylesheet: `
          .e-rte-content{
              font-size: 1em;
              font-weight: 400;
              margin: 0;
          }
          `
        },
        quickToolbarSettings: {
            table: ['Tableheader', 'TableRemove', '|', 'TableRows', 'TableColumns', 'TableCell', '|' , 'TableEditProperties', 'Styles', 'BackgroundColor', 'Alignments', 'TableCellVerticalAlign'],
            text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|' , 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
            showOnRightClick: true,
        },
    height: 500,
    fileManagerSettings: {
        enable: true,
        path: '/Pictures/Food',
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }
    },
    iframeSettings: {
        enable: true
    }
        };
    },
    methods: {
        handleFullScreen: function(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        } else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize' && sbCntEle != null && sbHdrEle != null) {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
            transformElement.style.transform = 'inherit';
            sbHdrEle.style.cssText = 'z-index: 100 !important;';
        } else if (e.targetItem === 'Minimize' && sbCntEle != null && sbHdrEle != null) {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
            addClass([leftBar], ['e-open']);
            transformElement.style.marginLeft = leftBar.offsetWidth + 'px'; }
            transformElement.style.transform = 'translateX(0px)';
        }
    },
    actionBeginHandler: function(e) {
        if (e.requestType === 'Maximize' || e.requestType === 'Minimize') {
            this.handleFullScreen(e);
        }
    },
    actionCompleteHandler: function() {
        setTimeout(() => { this.$refs.rteInstance.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Table, Image, QuickToolbar, HtmlEditor, FileManager,Audio, Video, EmojiPicker, PasteCleanup, CodeBlock, ImportExport, ClipBoardCleanup, AutoFormat]
    }
}
</script>
