<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section" id="rteSection">
        <ejs-richtexteditor ref="customObj" :toolbarSettings="toolbarSettings" :created="onCreate">
        <p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p></ejs-richtexteditor>
        <ejs-dialog id='rteDialog' :buttons='dlgButtons' :header='header' ref="dialogObj" :overlayClick='dialogOverlay' :visible='visible' height='340px' width='395px' :showCloseIcon='showCloseIcon' :isModal='modal'  :target='target' :open='onOpen' :created="dialogCreate">
        </ejs-dialog>
        </div>
    </div>
          <ejs-tab id="tab_default" style="display: none">
            <e-tabitems>
                <e-tabitem :header='headerText0' content="#rteEmoticons-smiley"></e-tabitem>
                <e-tabitem :header='headerText1' content='#rteEmoticons-animal'></e-tabitem>
            </e-tabitems>
        </ejs-tab>
        <div id="icon-group">
            <div id="rteEmoticons-smiley">
                <div class="char_block" title="Grinning face">&#128512;</div>
                <div   class="char_block" title="Grinning face with smiling eyes">&#128513;</div>
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
                <div class="char_block" title="Disappointed face">&#128542;</div>
                <div class="char_block" title="Worried face">&#128543;</div>
                <div class="char_block" title="Angry face">&#128544;</div>
                <div class="char_block" title="Pouting face">&#128545;</div>
                <div class="char_block" title="Crying face">&#128546;</div>
                <div class="char_block" title="Persevering face">&#128547;</div>
                <div class="char_block" title="Face with look    of triumph">&#128548;</div>
                <div class="char_block" title="Disappointed but relieved face">&#128549;</div>
                <div class="char_block" title="Frowning face with open mouth">&#128550;</div>
                <div class="char_block" title="Anguished face   ">&#128551;</div>
                <div class="char_block" title="Fearful face">&#128552;</div>
                <div class="char_block" title="Weary face">&#128553;</div>
                <div class="char_block" title="Sleepy face">&#128554;</div>
                <div class="char_block" title="Tired face">&#128555;</div>
                <div class="char_block" title="Grimacing face">&#128556;</div>
                <div class="char_block" title="Loudly crying face">&#128557;</div>
                <div class="char_block" title="Face with open mouth">&#128558;</div>
                <div class="char_block" title="Hushed face">&#128559;</div>
                <div class="char_block" title="Face with open mouth and cold sweat">&#128560;</div>
                <div class="char_block" title="Face screaming in fear">&#128561;</div>
                <div class="char_block" title="Astonished face">&#128562;</div>
                <div class="char_block" title="Flushed face">&#128563;</div>
                <div class="char_block" title="Sleeping face">&#128564;</div>
                <div class="char_block" title="Dizzy face">&#128565;</div>
            </div>
            <div id="rteEmoticons-animal" style="display: none" >
                <div class="char_block" title="Monkey Face">&#128053;</div>
                <div class="char_block" title="Monkey">&#128018;</div>
                <div class="char_block" title="Gorilla">&#129421;</div>
                <div class="char_block" title="Dog Face">&#128054;</div>
                <div class="char_block" title="Dog">&#128021;</div>
                <div class="char_block" title="Poodle">&#128041;</div>
                <div class="char_block" title="Wolf Face">&#128058;</div>
                <div class="char_block" title="Fox Face">&#129418;</div>
                <div class="char_block" title="Cat Face">&#128049;</div>
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
                <div class="char_block" title="Camel">&#128042;</div>
                <div class="char_block" title="Two-Hump Camel">&#128043;</div>
                <div class="char_block" title="Elephant">&#128024;</div>
                <div class="char_block" title="Rhinoceros">&#129423;</div>
                <div class="char_block" title="Mouse Face">&#128045;</div>
                <div class="char_block" title="Mouse">&#128001;</div>
                <div class="char_block" title="Rat">&#128000;</div>
                <div class="char_block" title="Hamster Face">&#128057;</div>
                <div class="char_block" title="Rabbit Face">&#128048;</div>
                <div class="char_block" title="Rabbit">&#128007;</div>
                <div class="char_block" title="Chipmunk">&#128063;</div>
                <div class="char_block" title="Bat">&#129415;</div>
                <div class="char_block" title="Bear Face">&#128059;</div>
                <div class="char_block" title="Koala">&#128040;</div>
                <div class="char_block" title="Panda Face">&#128060;</div>
                <div class="char_block" title="Paw Prints">&#128062;</div>
                <div class="char_block" title="Frog Face">&#128056;</div>
                <div class="char_block" title="Crocodile">&#128010;</div>
                <div class="char_block" title="Turtle">&#128034;</div>
                <div class="char_block" title="Lizard">&#129422;</div>
                <div class="char_block" title="Snake">&#128013;</div>
                <div class="char_block" title="Dragon Face">&#128050;</div>
                <div class="char_block" title="Dragon">&#128009;</div>
                <div class="char_block" title="Sauropod">&#129429;</div>
                <div class="char_block" title="T-Rex">&#129430;</div>
            </div>
        </div>
</div>
<div id="action-description">
    <p>
        This sample shows how to add your own emoticons to toolbar of the rich text editor. 
        The <code>“&#128578;” </code>  emoticon is added to insert custom emoticons in the editor. 
        Click the “&#128578;” command to show the custom emoticons list, and then choose the emoticon to be inserted in the editor.
    </p>
</div>
<div id="description">
    <p>The rich text editor allows you to configure your own commands to its toolbar using <code>toolbarSettings</code> property. 
        The command can be plain text, icon, or HTML template. 
        You can also define the order and group where the command should be included. 
        Bind the action to the command by getting its instance. </p>
</div>
</div>
</template>
<style>
    #tab_default .char_block {
        display: inline-block;
    }

    #emot_tbar,
    #emot_tbar div{
        cursor: pointer;
        font-size: 16px;
    }

    .e-bigger #emot_tbar div {
        font-size: 18px;
    }

    #rteEmoticons-smiley , #rteEmoticons-animal {
        padding: 15px 0 15px 15px;
    }

    .material #tab_default .char_block.e-active {
        outline: 1px solid #e3165b;
        border-color: #e3165b;
    }

    .fabric #tab_default .char_block.e-active {
        outline: 1px solid #0078d6;
        border-color: #0078d6;
    }

    .bootstrap #tab_default .char_block.e-active {
        outline: 1px solid #317ab9;
        border-color: #317ab9;
    }

    .highcontrast #tab_default .char_block.e-active {
        outline: 1px solid #ffd939;
        border-color: #ffd939;
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

    #tab_default .char_block {
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
    #rteSection {
        height: 500px;
    }
    /* custom code end */

    @media (min-width: 320px) and (max-width: 480px) {
        .fabric.e-bigger #rteDialog {
            min-width: 281px;
        }

        .fabric #rteDialog {
            min-width: 241px;
        }

        .bootstrap.e-bigger #rteDialog,
        .bootstrap #rteDialog {
            min-width: 223px;
        }

        .highcontrast.e-bigger #rteDialog {
            min-width: 283px;
        }
        .highcontrast #rteDialog {
            min-width: 243px;
        }
        .material #rteDialog {
            min-width: 224px;
        }
        .material.e-bigger #rteDialog {
            min-width: 236px;
        }
        #rteEmoticons-smiley  , #rteEmoticons-animal{
        padding: 15px 0 15px 0px;
        }
    }
</style>
<script>
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, NodeSelection, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import * as CodeMirror from 'codemirror';
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

Vue.use(RichTextEditorPlugin);
Vue.use(DialogPlugin);
Vue.use(TabPlugin);

export default Vue.extend({
    data: function() {
        return {
           headerText0: { text: "&#128578;"},
           headerText1: { text: "&#128053;"}, 
            selection: new NodeSelection(),
            ranges: null,
            saveSelection : null,
            target: document.getElementById('rteSection'),
            header: 'Custom Emoticons',
            visible: false,
            modal: true,
            showCloseIcon: false,
            dlgButtons: [{ click: this.onInsert.bind(this), buttonModel: { isPrimary:'true', content: 'Insert' } }, { buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }],
            toolbarSettings: {
                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
                {
                    tooltipText: 'Insert Emoticon',
                    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="emot_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#128578;</div></button>'
                }, '|', 'Undo', 'Redo']
            },
        };
    },
    methods: {
        onCreate: function(e) {
            var customBtn = document.getElementById('emot_tbar');
         this.$refs.dialogObj.ej2Instances.target = document.getElementById('rteSection');
         var proxy = this;
        customBtn.onclick = function (e) {
            proxy.$refs.customObj.ej2Instances.focusIn();
            proxy.ranges = proxy.selection.getRange(document);
            proxy.saveSelection = proxy.selection.save(proxy.ranges, document);
            proxy.$refs.dialogObj.ej2Instances.width = proxy.$refs.customObj.ej2Instances.element.offsetWidth * 0.5;
            proxy.$refs.dialogObj.ej2Instances.content = document.getElementById('tab_default');
            document.getElementById("tab_default").style.display='block';
            proxy.$refs.dialogObj.ej2Instances.dataBind();
            proxy.$refs.dialogObj.ej2Instances.show();
        };
        },
        dialogCreate: function() {
            var dialogCtn = document.getElementById('tab_default');
            var proxy = this;
            dialogCtn.onclick = function (e) {
            var target = e.target;
            var activeEle = proxy.$refs.dialogObj.ej2Instances.element.querySelector('.char_block.e-active');
            if (target.classList.contains('char_block')) {
                target.classList.add('e-active');
                if (activeEle) {
                    activeEle.classList.remove('e-active');
                }
            }
        };
        }, 
        onInsert: function() {
            var activeEle = this.$refs.dialogObj.ej2Instances.element.querySelector('.char_block.e-active');
            if (activeEle) {
                if (this.$refs.customObj.ej2Instances.formatter.getUndoRedoStack().length === 0) {
                    this.$refs.customObj.ej2Instances.formatter.saveData();
                }
                this.saveSelection.restore();
                this.$refs.customObj.ej2Instances.executeCommand('insertText', activeEle.textContent);
                this.$refs.customObj.ej2Instances.formatter.saveData();
                this.$refs.customObj.ej2Instances.formatter.enableUndo(this.$refs.customObj.ej2Instances);
            }
            this.dialogOverlay();
        },
        onOpen: function() {
            document.getElementById("tab_default").ej2_instances[0].refresh();
        },
        dialogOverlay: function() {
             var activeEle = this.$refs.dialogObj.ej2Instances.element.querySelector('.char_block.e-active');
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
            this.$refs.dialogObj.ej2Instances.hide();
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    }
});
</script>