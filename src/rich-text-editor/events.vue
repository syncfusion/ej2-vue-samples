<template>
<div class="control-section" style="overflow:hidden;">
  
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
            <ejs-richtexteditor ref="eventObj" :toolbarSettings="toolbarSettings" :created="create" :actionBegin="actionBegin" :actionComplete="actionComplete" :focus="focus" :blur="blur" :change="change" :toolbarClick="toolbarClick"><p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
                Users can format their content using standard toolbar commands.</p>
                <p><b>Key features:</b></p>
                <ul><li><p>Provides IFRAME and DIV modes</p></li>
                <li><p>Capable of handling markdown editing.</p></li>
                <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                <li><p>Provides a fully customizable toolbar.</p></li>
                <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                <li><p>Supports third-party library integration.</p></li>
                <li><p>Allows preview of modified content before saving it.</p></li>
                <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                <li><p>Contains undo/redo manager.</p></li>
                <li><p>Creates bulleted and numbered lists.</p></li>
                </ul></ejs-richtexteditor>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table title="Event Trace" id="property">
            <tbody><tr>
                <td>
                    <div class="eventarea" style="height: 245px;overflow: auto">
                        <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="evtbtn" style="padding-bottom: 10px">
                        <ejs-button id="clear" v-on:click.native="onClick">Clear</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the events that trigger on every action of the rich text editor. The event details are showcased in the event trace panel.</p>
</div>

<div id="description">
    <p>The rich text editor triggers the events based on its actions. 
        The events can be used as an extension point to perform custom operations.</p>
    <ul>
        <li><code>change</code> - Triggers when the editor gets blurred and changes are made to the content.</li>
        <li><code>focus</code> - Triggers when the editor is in focus.</li>
        <li><code>blur</code> - Triggers when focused out of the editor.</li>
        <li><code>actionBegin</code> - Triggers before the execution of command.</li>
        <li><code>actionComplete</code> - Triggers after the execution of command.</li>
        <li><code>created</code> - Triggers when the component is created.</li>
        <li><code>destroyed</code> – Triggers when the component is destroyed.</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style>
    /* custom code start */
        #EventLog b{
            color: #388e3c;
        }
        hr {
            margin: 1px 10px 1px 0px;
            border-top: 1px solid #eee;
        }
        .sb-header {
            z-index: 100;
        }
    /* custom code end */
    .control-wrapper {
        margin: 0 auto;
    }

    .property-section .right-side {
        padding-left: 10px;
    }

    .property-section .left-side {
        padding: 5px;
        width: 25%
    }

    .sb-header {
        z-index: 100;
    }

    .sb-content.e-view.hide-header {
        top: 0 !important;
    }

    .sb-header.e-view.hide-header {
        display: none;
    }
</style>
<script>
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RichTextEditorPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        }
        };
    },
    methods: {
        onClick: function() {
             document.getElementById('EventLog').innerHTML = '';
        },
        create: function() {
        this.appendElement('RichTextEditor <b>create</b> event called<hr>');
        },
        actionBegin: function(e) {
        this.appendElement('<b>'+ e.requestType + '</b> action is called<hr>');
        this.handleFullScreen(e);
        },
        actionComplete: function(e) {
        this.appendElement('<b>'+ e.requestType + '</b> action is completed<hr>');
        this.actionCompleteHandler(e);
        },
        focus: function() {
        this.appendElement('RichTextEditor <b>focus</b> event called<hr>');
        },
        blur: function() {
        this.appendElement('RichTextEditor <b>blur</b> event called<hr>');
        },
        change: function() {
        this.appendElement('RidhTextEditor <b>change</b> event called<hr>');
        },
        toolbarClick: function() {
        this.appendElement('RidhTextEditor <b>toolbar click</b> event called<hr>');
        },
        appendElement: function(html) {
             var span = document.createElement('span');
             span.innerHTML = html
             var log = document.getElementById('EventLog');
             log.insertBefore(span, log.firstChild);

        },
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
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
            transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
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
    actionCompleteHandler: function(e) {
        setTimeout(() => { this.$refs.eventObj.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    }
});
</script>