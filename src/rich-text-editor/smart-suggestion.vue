<template>
    <div>
        <div class="control-section">
            <div class="sample-container mention-inline-format-section">
                <ejs-richtexteditor :toolbarSettings="toolbarSettings" id="MentionInlineFormat" ref="formatRTE" placeholder="Type '/' and choose format" :actionBegin="onActionBegin" :created="onCreate">
                </ejs-richtexteditor>
            </div>
        </div>
        <ejs-mention id="mentionEditor" ref="mentionObj" mentionChar='/' target="#MentionInlineFormat_rte-edit-view"  :allowSpaces="true" :dataSource="data" :fields="fieldsData" popupWidth='320px' popupHeight='290px' :itemTemplate="'iTemplate'" :beforeOpen="beforeOpen" :filtering="filtering" :select="applyCommand">
            <template v-slot:iTemplate="{data}">
                <table class="format-table">
                <tr>
                    <td>
                        <span v-bind:class="data.icon" id="iconClass"></span>
                    </td>
                    <td>
                        <span class="font">{{data.formatName}}</span>
                        <span class="description">{{data.description}}</span>
                    </td>
                </tr>
            </table>
            </template>
        </ejs-mention>
        <div id="action-description">
            <p>This example demonstrates how to easily apply formatting or insert media and tables in the Rich Text Editor content using the Mention component. To use it, simply type the slash (/) key in the editor and select the desired format from the suggestion list that appears.</p>
        </div>
        <div id="description">
            <p>The @mention component is integrated into the Rich Text Editor and shows the suggestion list when the slash (/) key is pressed in an editor and applies suggested formats. To achieve this, the sample is customized for the Mention and Rich Text Editor.</p>
            <ul>
                <li> Prevent the @mention default selection action by setting the <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/mention/selectEventArgs/#cancel'>args.cancel</a> as <code>true</code> at the <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/mention/#select'>select</a> event.</li>
                <li> Get the command name from the Mention component, select an event, and pass it to the public method <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor#executecommand">executeCommand</a> to perform the specified formats on the selected text in an editor.</li>
            </ul>
            <p> The following formats are shown in the mention suggestion list; apply them in an editor.</p>
            <ul>
                <li><code>Basic blocks</code> - The Rich Text Editor supports basic text formatting blocks, including <code>paragraph</code>, <code>headings</code>, <code>code</code>,<code>quotation</code>, <code>lists</code>, and <code>table</code> making it easier for users to structure their content. When a user selects a basic block format, it will be applied to the next line or paragraph.</li>
                <li><code>Inline formats</code> - The Rich Text Editor supports inline formatting, allowing you to add <code>emojis</code> to the specific text within the content.</li>
                <li><code>Media formats</code> -  The Rich Text Editor also supports media formats, including <code>image</code>, <code>video</code>, and <code>audio</code>, making it an efficient tool for the content creation.</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, Table, Audio, Video, DialogType, NodeSelection, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import * as data from './data-source.json';

var replaceBlockElement;
var replaceInlineElement;

export default {
components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-mention': MentionComponent,
    'ejs-dialog': DialogComponent
},    
data: function() {
    return {
      data: data.formatList,
      fieldsData: { text: 'formatName', groupBy:'formatType' },
      selection: new NodeSelection(),
      saveSelection : null,
      visible: false,
      modal: true,
      toolbarSettings: {
           items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', '|',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        }
    };
},
provide:{
    richtexteditor:[Toolbar, Link, Image, Audio, Table, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter]
},

methods: {
   onActionBegin: function(args) {
        if (args.requestType === 'EnterAction') {
            if(this.$refs.mentionObj.ej2Instances.element.classList.contains('e-popup-open')){
                args.cancel = true;
            }   
        }
    },
    beforeOpen: function(){
      this.saveSelection = this.selection.save(this.selection.getRange(document), document);
    },
    filtering: function(){
      this.saveSelection = this.selection.save(this.selection.getRange(document), document);
    },
    beforeApplyFormat: function(){
        var currentRange = this.$refs.formatRTE.ej2Instances.getRange();
        var node = this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.getNodeCollection(currentRange)[0];         
        var startPoint = currentRange.startOffset;
        while(this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.getRange(document).toString().indexOf("/") ==-1 ){
            this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.setSelectionText(document, node, node, startPoint, currentRange.endOffset);
            startPoint--;
        }
        var slashRange = this.$refs.formatRTE.ej2Instances.getRange();
        var slashNode = this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeCutter.GetSpliceNode(slashRange, node);
        var previouNode = slashNode.previousSibling;
        if (slashNode.parentElement.innerHTML.length === 1) {
            slashNode.parentElement.appendChild(document.createElement('br'));
        }
        slashNode.parentNode.removeChild(slashNode);
        if(previouNode) {
            this.selection.setCursorPoint(document, previouNode, previouNode.textContent.length);
        }
    },

    applyCommand: function(args){
          args.cancel = true;
          this.$refs.formatRTE.ej2Instances.focusIn();
          this.saveSelection.restore();
          if (!(args.itemData.formatType == 'Inline')) {
            this.beforeApplyFormat();
          }
          switch (args.itemData.command) {
            case 'OL':
                this.$refs.formatRTE.ej2Instances.executeCommand('insertOrderedList');
                break;
            case 'UL':
                this.$refs.formatRTE.ej2Instances.executeCommand('insertUnorderedList');
                break;
            case 'CreateTable':
            case 'Image':
            case 'Audio':
            case 'Video':
                this.$refs.mentionObj.ej2Instances.hidePopup();
                setTimeout(() => {
                this.$refs.formatRTE.ej2Instances.showDialog(
                    args.itemData.command === 'CreateTable' ? DialogType.InsertTable :
                    args.itemData.command === 'Image' ? DialogType.InsertImage :
                    args.itemData.command === 'Audio' ? DialogType.InsertAudio : DialogType.InsertVideo
                ); }, 150);
                break;
            case 'EmojiPicker':
                this.beforeApplyFormat();
                this.$refs.mentionObj.ej2Instances.hidePopup();
                setTimeout(() => { this.$refs.formatRTE.ej2Instances.showEmojiPicker(); }, 150);
                break;
            default:
                this.$refs.formatRTE.ej2Instances.executeCommand('formatBlock', args.itemData.command);
                break;
        }
    }
}
}
</script>

<style scoped>

    .format-table #iconClass{
      padding: 15px 15px;
      display: inline-block;
      width: 55px;
      font-size:20px;
      line-height:0px;
    }
    .e-icons.block-view:before{
        content: open-quote;
        font-size: 30px;
        line-height: 20px;
    }
    .e-icons.h1-view:before{
        content: 'H1';
    }
    .e-icons.h2-view:before{
        content: 'H2';
    }
    .e-icons.h3-view:before{
        content: 'H3';
    }
    .e-icons.h4-view:before{
        content: 'H4';
    }
    .e-icons.e-text:before{
        content: 'T';
    }

    .format-table .e-icons.emoji {
        padding: 15px 12px !important;
    }

    .format-table #icons.e-icons.e-image, .format-table #icons.e-icons.e-audio, .format-table #icons.e-icons.e-table, 
    .format-table #icons.e-icons.e-video, .format-table #icons.e-list-unordered, .format-table #icons.e-list-ordered{
        line-height: 10px !important;
    }

    .format-table .description {
        display: block;
        line-height: 20px;
        font-size: 12px;
        padding: 1px 0px 5px 0px;
    }
    .format-table .font {
        font-size: 16px;
        display: block;
        line-height: 20px;
        padding: 5px 0px 1px 0px;
    }

    #MentionInlineFormat .e-mention-chip{
        cursor: pointer;
    }
    
    .fabric.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text,
    .highcontrast.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text {
        padding-right: 10px;
    }

    .bootstrap.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text,
    .bootstrap .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text {
        padding-right: 6px;
    }

    .fabric .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text,
    .highcontrast .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text {
        padding-right: 8px;
    }

    /* custom code start */
    #mention-inline-format-section {
        height: 500px;
    }
    /* custom code end */
</style>
