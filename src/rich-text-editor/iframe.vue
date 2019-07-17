<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteInstance" :actionBegin="handleFullScreen" :actionComplete="actionCompleteHandler" :toolbarSettings="toolbarSettings" :iframeSettings="iframeSettings" :height="height"> <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
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
</div>
<div id="action-description">
    <p>This sample demonstrates the default rendering of the rich text editor in <code>iframe mode</code>.</p>
</div>


<div id="description">
   <p>The rich text editor is WYSIWYG ("what you see is what you get") editor that is used to create and edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. The toolbar contains commands to align the text, insert link, insert image, 
       insert list, undo/redo the operation, HTML view, and more.</P>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style>
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

Vue.use(RichTextEditorPlugin);

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
    },
    height: 500,
    iframeSettings: {
        enable: true
    }
        };
    },
    methods: {
        onChange: function(e) {
            switch (this.$refs.dropdownInstance.ej2Instances.value) {
            case 1:
                this.$refs.rteInstance.toolbarSettings.type = ToolbarType.Expand;
                break;
            case 2:
                this.$refs.rteInstance.toolbarSettings.type = ToolbarType.MultiRow;
                break;
            }
        this.$refs.rteInstance.enableFloating = this.$refs.checkInstance.ej2Instances.checked;
        this.$refs.rteInstance.dataBind();
        },
        onFloatChange: function(args) {
            this.$refs.rteInstance.ej2Instances.toolbarSettings.enableFloating = args.checked;
            this.$refs.rteInstance.dataBind();
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
        setTimeout(() => { this.$refs.rteInstance.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    }
});
</script>