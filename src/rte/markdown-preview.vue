<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
            <div id="defaultRTE"> 
            <ejs-richtexteditor id="preview" ref="rteInstance" :toolbarSettings="toolbarSettings" :created="created" :actionBegin='handleFullScreen' :actionComplete='actionComplete' :editorMode="editorMode" :height="height">
In RichTextEditor , you click the toolbar buttons to format the words and the changes are visible immediately. 
Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
and phrases should look different from each other

RichTextEditor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.

We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content </ejs-richtexteditor>
            </div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates how to preview markdown changes in rich text editor. 
        Type or edit the display text, and apply format to view the preview of markdown. 
        You can preview the markdown changes immediately in the preview area.
    </p>
</div>

<div id="description">
    <p>The rich text editor allows you to preview markdown changes immediately using <code>preview</code>. 
        The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.</p>

    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>

    <p>The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.</p>
</div>
</div>
</template>
    <style>
    .e-richtexteditor .e-rte-content .e-content{
        min-height: 150px;
    }
    .e-richtexteditor .e-rte-content textarea.e-content {
        float: left;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }
    .e-richtexteditor .e-rte-content {
        overflow: hidden;
    }

    .e-md-preview::before {
        content: '\e345';
    }

    .e-rte-content .e-content.e-pre-source {
        width: 100%;
    }
    .sb-header {
        z-index: 100;
    }
    .e-icon-btn.e-active .e-md-preview.e-icons::before {
		content: '\e350';
	}
</style>
<script>
import Vue from "vue";
import { Browser, addClass, removeClass, isNullOrUndefined } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
            textArea: '',
            height: '300px',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|',
                { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>' },
                { tooltipText: 'Split Editor', template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-view-side e-icons"></span></button>' }, 'FullScreen', '|', 'Undo', 'Redo']
        },
        editorMode: 'Markdown',
        };
    },
    methods: {
        created: function() {
            this.textArea = this.$refs.rteInstance.$el.querySelector('.e-content');
            this.textArea.onkeyup = (Event) => {
                this.markDownConversion();
            };
            document.getElementById('preview-code').onclick = () => {
                this.fullPreview({ mode: true, type: 'preview'});
                 if (event.target.parentElement.classList.contains('e-active')) {
                    this.$refs.rteInstance.ej2Instances.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                     'UnorderedList', 'CreateLink', 'Image']);
                     event.target.parentElement.parentElement.nextElementSibling.classList.add('e-overlay');
                } else {
                    this.$refs.rteInstance.ej2Instances.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                     'UnorderedList', 'CreateLink', 'Image']);
                      event.target.parentElement.parentElement.nextElementSibling.classList.remove('e-overlay');
                }
            };
            document.getElementById('MD_Preview').onclick = () => {
                if (this.$refs.rteInstance.$el.classList.contains('e-rte-full-screen')) {
                    this.fullPreview({ mode: true, type: '' });
                }
                document.getElementById('preview-code').classList.remove('e-active');
                if (!this.$refs.rteInstance.$el.classList.contains('e-rte-full-screen')) {
                    this.$refs.rteInstance.ej2Instances.showFullScreen();
                }
            };
        },
        markDownConversion: function(){
        if (document.getElementById('MD_Preview').classList.contains('e-active')) {
            var id = this.$refs.rteInstance.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
            htmlPreview.innerHTML = marked(this.textArea.value);
        }
    },
    actionComplete: function(e) {
        var mdsource = document.getElementById('preview-code');
        var mdSplit = document.getElementById('MD_Preview');
        var id = this.$refs.rteInstance.getID() + 'html-view';
        var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
            if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
                this.fullPreview({ mode: true, type: '' });
            } else if (!mdSplit.parentElement.classList.contains('e-overlay')) {
                if (e.targetItem === 'Minimize') {
                this.textArea.style.display = 'block';
                this.textArea.style.width = '100%';
                if (htmlPreview) { htmlPreview.style.display = 'none'; }
                mdSplit.classList.remove('e-active');
                mdsource.classList.remove('e-active');
                }
            this.markDownConversion();
            }
        },
        fullPreview: function(event){
            var mdsource = document.getElementById('preview-code');
             var mdSplit = document.getElementById('MD_Preview');
            var id = this.$refs.rteInstance.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
        if ((mdsource.classList.contains('e-active') || mdSplit.classList.contains('e-active')) && event.mode) {
            mdsource.classList.remove('e-active');
            mdSplit.classList.remove('e-active');
            this.textArea.style.display = 'block';
            this.textArea.style.width = '100%';
            htmlPreview.style.display = 'none';
        } else {
            mdsource.classList.add('e-active');
             mdSplit.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = document.createElement('div');
                htmlPreview.id = id;
                htmlPreview.setAttribute('class', 'e-content');
                this.textArea.parentNode.appendChild(htmlPreview);
            }
            if (event.type === 'preview') {
                this.textArea.style.display = 'none';
                htmlPreview.classList.add('e-pre-source');
            } else {
                htmlPreview.classList.remove('e-pre-source');
                this.textArea.style.width = '50%';
            }
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(this.$refs.rteInstance.ej2Instances.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    },
    handleFullScreen: function(e){
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
            addClass([leftBar], ['e-close']); removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
            transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) { 
            addClass([leftBar], ['e-open']);
            transformElement.style.marginLeft = leftBar.offsetWidth + 'px'; }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
    }
});
</script>