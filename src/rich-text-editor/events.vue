<template>
<div>
  
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
            <ejs-richtexteditor ref="eventObj" :toolbarSettings="toolbarSettings" :created="create" :actionBegin="actionBegin" :actionComplete="actionComplete" :focus="focus" :blur="blur" :change="change" :toolbarClick="toolbarClick"><p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
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
                        <ejs-button id="clear" v-on:click="onClick">Clear</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the events that trigger on every action of the Rich Text Editor. The event details are showcased in the event trace panel.</p>
</div>

<div id="description">
    <p>The Rich Text Editor triggers the events based on its actions. 
        The events can be used as an extension point to perform custom operations.</p>
    <ul>
        <li><code>change</code> - Triggers when the editor gets blurred and changes are made to the content.</li>
        <li><code>focus</code> - Triggers when the editor is in focus.</li>
        <li><code>blur</code> - Triggers when focused out of the editor.</li>
        <li><code>actionBegin</code> - Triggers before the execution of command.</li>
        <li><code>actionComplete</code> - Triggers after the execution of command.</li>
        <li><code>created</code> - Triggers when the component is created.</li>
        <li><code>beforeDialogOpen</code> – Event triggers when the dialog is being opened..</li>
        <li><code>dialogOpen</code> – Event triggers when a dialog is opened.</li>
        <li><code>dialogClose</code> – Event triggers after the dialog has been closed.</li>
        <li><code>beforeQuickToolbarOpen</code> – Event triggers when the quick toolbar is being opened.</li>
        <li><code>quickToolbarOpen</code> – Event triggers when a quick toolbar is opened.</li>
        <li><code>quickToolbarClose</code> – Event triggers after the quick toolbar has been closed.</li>
        <li><code>imageSelected</code> – Event triggers when the image is selected or dragged into the insert image dialog</li>
        <li><code>imageUploading</code> – Event triggers when the selected image begins to upload in the insert image dialog</li>
        <li><code>imageUploadSuccess</code> – Event triggers when the image is successfully uploaded to the server side</li>
        <li><code>imageUploadFailed</code> – Event triggers when there is an error in the image upload</li>
        <li><code>imageRemoving</code> – Event triggers when the selected image is cleared from the insert image dialog</li>
        <li><code>destroyed</code> – Triggers when the component is destroyed.</li>
        <li><code>beforeSanitizeHtml</code> – Event triggers before sanitize the value. It's only applicable to editorMode as `HTML`</li>
        <li><code>resizing</code> – Triggers only when resizing the image</li>
        <li><code>resizeStart</code> –Triggers only when start resize the image</li>
        <li><code>resizeStop</code> – Triggers only when stop resize the image</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style scoped>
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
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, EmojiPicker } from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent,
      'ejs-button': ButtonComponent
    },
    data: function() {
        return {
            toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', 'Print', '|',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        }
        };
    },
    methods: {
        onClick: function() {
             document.getElementById('EventLog').innerHTML = '';
        },
        create: function() {
        this.appendElement('Rich Text Editor <b>create</b> event called<hr>');
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
        this.appendElement('Rich Text Editor <b>focus</b> event called<hr>');
        },
        blur: function() {
        this.appendElement('Rich Text Editor <b>blur</b> event called<hr>');
        },
        change: function() {
        this.appendElement('Rich Text Editor <b>change</b> event called<hr>');
        },
        toolbarClick: function() {
        this.appendElement('Rich Text Editor <b>toolbar click</b> event called<hr>');
        },
        beforeDialogOpen: function() {
         this.appendElement('Rich Text Editor <b>beforeDialogOpen</b> event called<hr>');
        },
        dialogOpen: function() {
             this.appendElement('Rich Text Editor <b>dialogOpen</b> event called<hr>');
        },

        dialogClose: function() {
             this.appendElement('Rich Text Editor <b>dialogClose</b> event called<hr>');
        },

        beforeQuickToolbarOpen: function() {
             this.appendElement('Rich Text Editor <b>beforeQuickToolbarOpen</b> event called<hr>');
        },

        quickToolbarOpen: function() {
         this.appendElement('Rich Text Editor <b>quickToolbarOpen</b> event called<hr>');
        },

        quickToolbarClose: function() {
             this.appendElement('Rich Text Editor <b>quickToolbarClose</b> event called<hr>');
        },

        imageSelected: function() {
             this.appendElement('Rich Text Editor <b>imageSelected</b> event called<hr>');
        },

        imageUploading: function() {
             this.appendElement('Rich Text Editor <b>imageUploading</b> event called<hr>');
        },

        imageUploadSuccess: function() {
             this.appendElement('Rich Text Editor <b>imageUploadSuccess</b> event called<hr>');
        },

        imageUploadFailed: function() {
             this.appendElement('Rich Text Editor <b>imageUploadFailed</b> event called<hr>');
        },

        imageRemoving: function() {
             this.appendElement('Rich Text Editor <b>imageRemoving</b> event called<hr>');
        },

        destroyed: function() {
             this.appendElement('Rich Text Editor <b>destroyed</b> event called<hr>');
        },

        beforeSanitizeHtml: function() {
             this.appendElement('Rich Text Editor <b>beforeSanitizeHtml</b> event called<hr>');
        },

        resizing: function() {
             this.appendElement('Rich Text Editor <b>resizing</b> event called<hr>');
        },

        resizeStart: function() {
             this.appendElement('Rich Text Editor <b>resizeStart</b> event called<hr>');
        },

        resizeStop: function() {
             this.appendElement('Rich Text Editor <b>resizeStop</b> event called<hr>');
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
    actionCompleteHandler: function() {
        setTimeout(() => { this.$refs.eventObj.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, EmojiPicker]
    }
}
</script>