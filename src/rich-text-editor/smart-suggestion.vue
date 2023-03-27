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
        <ejs-dialog id='emojiDialog' :buttons='dialogButtons' :header='header' ref="dialogObj" :overlayClick='dialogOverlay' :visible='visible' width='33%' :isModal='modal' :open="dialogOpen" :created="dialogCreate">
        <div id="icon-group">
            <div id="rteEmoticons-smiley">
                <div class="char_block" title="Grinning face">&#128512;</div>
                <div class="char_block" title="Grinning face with smiling eyes">&#128513;</div>
                <div class="char_block" title="Face with tears of joy">&#128514;</div>
                <div class="char_block" title="Smiling face with open mouth">&#128515;</div>
                <div class="char_block" title="Smiling face with open mouth and smiling eyes">&#128516;</div>
                <div class="char_block" title="Smiling face with open mouth and cold sweat">&#128517;</div>
                <div class="char_block" title="Smiling face with open mouth and tightly-closed eyes">&#128518;</div>
                <div class="char_block" title="Smiling face with halo">&#128519;</div>
                <div class="char_block" title="Smiling face with horns">&#128520;</div>
                <div class="char_block" title="Winking face">&#128521;</div>
                <div class="char_block" title="Smiling face with smiling eyes">&#128522;</div>
                <div class="char_block" title="Face savouring delicious food">&#128523;</div>
                <div class="char_block" title="Relieved face">&#128524;</div>
                <div class="char_block" title="Smiling face with heart-shaped eyes">&#128525;</div>
                <div class="char_block" title="Smiling face with sunglasses">&#128526;</div>
                <div class="char_block" title="Smirking face">&#128527;</div>
                <div class="char_block" title="Neutral face">&#128528;</div>
                <div class="char_block" title="Expressionless face">&#128529;</div>
                <div class="char_block" title="Unamused face">&#128530;</div>
                <div class="char_block" title="Face with cold sweat">&#128531;</div>
                <div class="char_block" title="Pensive face">&#128532;</div>
                <div class="char_block" title="Confused face">&#128533;</div>
                <div class="char_block" title="Confounded face">&#128534;</div>
                <div class="char_block" title="Kissing face">&#128535;</div>
                <div class="char_block" title="Face throwing a kiss">&#128536;</div>
                <div class="char_block" title="Kissing face with smiling eyes">&#128537;</div>
                <div class="char_block" title="Kissing face with closed eyes">&#128538;</div>
                <div class="char_block" title="Face with stuck-out tongue">&#128539;</div>
                <div class="char_block" title="Face with stuck-out tongue and winking eye">&#128540;</div>
                <div class="char_block" title="Face with stuck-out tongue and tightly-closed eyes">&#128541;</div>
                <div class="char_block" title="Monkey Face">&#128053;</div>
                <div class="char_block" title="Monkey">&#128018;</div>
                <div class="char_block" title="Gorilla">&#129421;</div>
                <div class="char_block" title="Dog Face">&#128054;</div>
                <div class="char_block" title="Dog">&#128021;</div>
                <div class="char_block" title="Poodle">&#128041;</div>
                <div class="char_block" title="Wolf Face">&#128058;</div>
                <div class="char_block" title="Fox Face">&#129418;</div>
                <div class="char_block" title="Cat Face">&#128049;</div>
                <div class="char_block" title="Camel">&#128042;</div>
                <div class="char_block" title="Cat">&#128008;</div>
                <div class="char_block" title="Lion Face">&#129409;</div>
                <div class="char_block" title="Tiger Face">&#128047;</div>
                <div class="char_block" title="Tiger">&#128005;</div>
                <div class="char_block" title="Leopard">&#128006;</div>
                <div class="char_block" title="Horse Face">&#128052;</div>
                <div class="char_block" title="Horse">&#128014;</div>
                <div class="char_block" title="Unicorn Face">&#129412;</div>
                <div class="char_block" title="Deer">&#129420;</div>
                <div class="char_block" title="Cow Face">&#128046;</div>
                <div class="char_block" title="Ox">&#128002;</div>
                <div class="char_block" title="Water Buffalo">&#128003;</div>
                <div class="char_block" title="Cow">&#128004;</div>
                <div class="char_block" title="Pig Face">&#128055;</div>
                <div class="char_block" title="Pig">&#128022;</div>
                <div class="char_block" title="Boar">&#128023;</div>
                <div class="char_block" title="Pig Nose">&#128061;</div>
                <div class="char_block" title="Ram">&#128015;</div>
                <div class="char_block" title="Ewe">&#128017;</div>
                <div class="char_block" title="Goat">&#128016;</div>
            </div>
        </div>
        </ejs-dialog>
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
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, Table, Audio, Video, DialogType, NodeSelection, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import * as data from './data-source.json';

Vue.use(MentionPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(DialogPlugin);

var replaceBlockElement;
var replaceInlineElement;

export default Vue.extend({
data: function() {
    return {
      data: data.formatList,
      fieldsData: { text: 'formatName', groupBy:'formatType' },
      selection: new NodeSelection(),
      saveSelection : null,
      dialogButtons: [{ click: this.onInsert.bind(this), buttonModel: { isPrimary:'true', content: 'Insert' } }, { buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }],
      header: 'Custom Emoticons',
      visible: false,
      modal: true,
      toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', 'SuperScript', 'SubScript' , '|',
            'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
            'Outdent', 'Indent', '|',
            'CreateTable', 'CreateLink', 'Image', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        }
    };
},
provide:{
    richtexteditor:[Toolbar, Link, Image, Audio, Table, Video, QuickToolbar, HtmlEditor]
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
    onCreate: function(e) {
      this.$refs.dialogObj.ej2Instances.target = document.getElementById('mention-inline-format-section');
    },
    onInsert: function() {
      var startOffset;
      var activeElement = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');
      if (activeElement) {
          if (this.$refs.formatRTE.ej2Instances.formatter.getUndoRedoStack().length === 0) {
              this.$refs.formatRTE.ej2Instances.formatter.saveData();
          }
          this.beforeApplyFormat(false);
          var range = this.$refs.formatRTE.ej2Instances.getRange();
          this.selection.setCursorPoint(document, range.startContainer, range.startOffset);
          this.$refs.formatRTE.ej2Instances.executeCommand('insertText', activeElement.textContent);
          this.$refs.formatRTE.ej2Instances.formatter.saveData();
          this.$refs.formatRTE.ej2Instances.formatter.enableUndo(this.$refs.formatRTE.ej2Instances);
      }
      this.dialogOverlay();
    },
    dialogOverlay: function() {
          var activeElement = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');
        if (activeElement) {
            activeElement.classList.remove('e-active');
        }
        this.$refs.dialogObj.hide();
    },
    dialogCreate: function() {
      var dialogContent = document.getElementById("emojiDialog");
      var proxy = this;
      dialogContent.onclick = function (e) {
          var target = e.target;
          var activeElement = proxy.$refs.dialogObj.$el.querySelector(".char_block.e-active");
          if (target.classList.contains('char_block')) {
              target.classList.add('e-active');
              if (activeElement) {
                  activeElement.classList.remove('e-active');
              }
          }
      };
    },
    dialogOpen: function(){
        var emojiElement= document.getElementById("rteEmoticons-smiley");
        if(!emojiElement.children[0].classList.contains('e-active')){
            emojiElement.children[0].classList.add('e-active');
        }
    },
    beforeApplyFormat: function(isBlockFormat){
        var range1 = this.$refs.formatRTE.ej2Instances.getRange();
        var node = this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.getNodeCollection(range1)[0];
        var blockNewLine = !(node.parentElement.innerHTML.replace(/&nbsp;|<br>/g, '').trim() == '/' || node.textContent.trim().indexOf('/')==0);
        var blockNode;
        var startNode =node;
        if (blockNewLine && isBlockFormat) {
            while (startNode != this.$refs.formatRTE.ej2Instances.inputElement) {
                blockNode = startNode;
                startNode = startNode.parentElement;
            }
        }            
        var startPoint = range1.startOffset;
        while(this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.getRange(document).toString().indexOf("/") ==-1 ){
            this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeSelection.setSelectionText(document, node, node, startPoint, range1.endOffset);
            startPoint--;
        }
        var range2 = this.$refs.formatRTE.ej2Instances.getRange();
        var node2 = this.$refs.formatRTE.ej2Instances.formatter.editorManager.nodeCutter.GetSpliceNode(range2, node);
        var previouNode = node2.previousSibling;
        node2.parentNode.removeChild(node2);
        if(blockNewLine && isBlockFormat){
            var defaultTag = document.createElement('p');
            defaultTag.innerHTML = '</br>';
            blockNode.parentNode.insertBefore(defaultTag, blockNode.nextSibling);
           this.selection.setCursorPoint(document, blockNode.nextSibling, 0);
        } else if(previouNode) {
            this.selection.setCursorPoint(document, previouNode, previouNode.textContent.length);
        }
    },

    applyCommand: function(args){
          args.cancel = true;
          this.$refs.formatRTE.ej2Instances.focusIn();
          this.saveSelection.restore();
          if (!(args.itemData.formatType == 'Inline')) {
            this.beforeApplyFormat(true);
          }
          if (args.itemData.command == 'OL')  {
              this.$refs.formatRTE.ej2Instances.executeCommand('insertOrderedList');
          } 
          else if(args.itemData.command == 'UL'){
            this.$refs.formatRTE.ej2Instances.executeCommand('insertUnorderedList');
          } 
          else if (args.itemData.command == 'CreateTable') {
              this.$refs.mentionObj.ej2Instances.hidePopup();
              this.$refs.formatRTE.ej2Instances.showDialog(DialogType.InsertTable);
          } 
          else if (args.itemData.command == 'Image') {
             this.$refs.mentionObj.ej2Instances.hidePopup();
              this.$refs.formatRTE.ej2Instances.showDialog(DialogType.InsertImage);
          } 
          else if (args.itemData.command == 'Audio') {
             this.$refs.mentionObj.ej2Instances.hidePopup();
              this.$refs.formatRTE.ej2Instances.showDialog(DialogType.InsertAudio);
          } 
          else if (args.itemData.command == 'Video') {
             this.$refs.mentionObj.ej2Instances.hidePopup();
              this.$refs.formatRTE.ej2Instances.showDialog(DialogType.InsertVideo);
          } 
          else if (args.itemData.command == 'Emoji') {
             this.$refs.mentionObj.ej2Instances.hidePopup();
              this.$refs.dialogObj.show();
          }
          else {
              this.$refs.formatRTE.ej2Instances.executeCommand('formatBlock', args.itemData.command);
          }
    }
}
});
</script>

<style scoped>

    #emojiDialog{
        max-height: 450px !important;
    }

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
    .e-icons.emoji:before{
        content: '🙂';
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

    
    #emojiDialog .char_block {
        display: inline-block;
    }

    #rteEmoticons-smiley {
        padding: 15px 0 15px 15px;
    }

    .material #emojiDialog .char_block.e-active {
        outline: 1px solid #e3165b;
        border-color: #e3165b;
    }

    .material-dark .mention-inline-format-section .char_block.e-active {
        outline: 1px solid #56a4fd;
        border-color: #56a4fd;
    }

    .fabric .mention-inline-format-section .char_block.e-active,
    .fabric-dark #emojiDialog .char_block.e-active {
        outline: 1px solid #0078d6;
        border-color: #0078d6;
    }

    .bootstrap4 #emojiDialog .char_block.e-active {
        outline: 1px solid #007bff;
        border-color: #007bff;
    }

    .bootstrap #emojiDialog .char_block.e-active,
    .bootstrap-dark #emojiDialog .char_block.e-active {
        outline: 1px solid #317ab9;
        border-color: #317ab9;
    }

    .highcontrast #emojiDialog .char_block.e-active {
        outline: 1px solid #ffd939;
        border-color: #ffd939;
    }

    .tailwind #emojiDialog .char_block.e-active {
        outline: 1px solid #3730a3;
        border-color: #3730a3;
    }

    .tailwind-dark #emojiDialog .char_block.e-active {
        outline: 1px solid #22d3ee;
        border-color: #22d3ee;
    }

    .bootstrap5 #emojiDialog .char_block.e-active,
    .bootstrap5-dark #emojiDialog .char_block.e-active {
        outline: 1px solid #0D6EFD;
        border-color: #0D6EFD;
    }

    .fluent #emojiDialog .char_block.e-active,
    .fluent-dark #emojiDialog .char_block.e-active {
        outline: 1px solid #0078DE;
        border-color: #0078DE;
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

    #emojiDialog .char_block {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 0 5px 5px 0;
        text-align: center;
        vertical-align: middle;
        border: 1px solid #DDDDDD;
        font-size: 20px;
        cursor: pointer;
        user-select: none;
    }

    /* custom code start */
    #mention-inline-format-section {
        height: 500px;
    }
    /* custom code end */

    @media (min-width: 320px) and (max-width: 480px) {
        .fabric.e-bigger #emojiDialog {
            min-width: 281px;
        }

        .fabric #emojiDialog {
            min-width: 241px;
        }

        .bootstrap.e-bigger #emojiDialog,
        .bootstrap #emojiDialog {
            min-width: 223px;
        }

        .highcontrast.e-bigger #emojiDialog {
            min-width: 283px;
        }
        .highcontrast #emojiDialog {
            min-width: 243px;
        }
        .material #emojiDialog {
            min-width: 224px;
        }
        .material.e-bigger #emojiDialog {
            min-width: 236px;
        }
        #rteEmoticons-smiley {
        padding: 15px 0 15px 0px;
        }
    }
</style>
