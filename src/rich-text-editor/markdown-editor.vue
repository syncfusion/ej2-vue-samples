<template>
<div>
<div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <div id="defaultRTE"> 
                   <ejs-richtexteditor id="MDdefault" ref="rteInstance" :toolbarSettings="toolbarSettings" :created="created" :editorMode="editorMode" :height="height">
The sample is added to showcase **markdown editing**. Type or edit the content and apply formatting to view markdown formatted content.
We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content</ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
<div id="action-description">
        <p>
            This sample demonstrates markdown editing in the rich text editor with complete features.
        </p>
</div>

<div id="description">
        <p>The rich text editor supports markdown editing when the <code>editorMode</code> is set to mode property of the RichTextEditor</p>
        <p>The editor’s toolbar contains commands to format the markdown content. The toolbar consists of:</p>
        <ul>
            <li><code>Lists</code> - Ordered and unordered list types.</li>
            <li><code>Links</code> - A hyperlink can be inserted into the editor for quick access to related information.</li>
            <li><code>Image</code> - Inserts and manages images.</li>
            <li><code>Alignment</code> - Aligns the content with left, center, and right margins.</li>
            <li><code>Format</code> – Formats the sentence in different ways such as heading level, quotation, and code snippet</li>
            <li><code>Styles</code> – Allows you to apply inline styles to the selected content like bold, italic, and more.</li>
            <li><code>Tables</code> – Allows you to insert a table with header.</li>
        </ul>
        <p><b>Injecting Module</b></p>
        <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>

        <p>The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.</p>
    </div>

</div>
</template>
    <style>
        .e-richtexteditor textarea.e-content {
            float: left;
        }
        .e-richtexteditor .e-rte-content {
            overflow: hidden;
        }
        .e-md-preview::before {
          content: '\e345';
        }
        .e-icon-btn.e-active .e-md-preview.e-icons::before {
		  content: '\e350';
	    }
	    
        .bootstrap4 .e-icon-btn.e-active .e-md-preview::before {
         content: '\e790';
        }

        .bootstrap4 .e-icon-btn .e-md-preview::before {
         content: '\e787';
        }
    </style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
            height: '180px',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', 'CreateTable', '|',
                {
                    tooltipText: 'Preview',
                    template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
                }, '|', 'Undo', 'Redo']
        },
        editorMode: 'Markdown',
        };
    },
    methods: {
        created: function() {
            this.$refs.rteInstance.$el.parentNode.querySelector('.e-content').onkeyup = (Event) => {
                this.MarkDownConversion();
            };
            document.getElementById('preview-code').onclick = () => {
                this.fullPreview();
                 if (event.target.parentElement.classList.contains('e-active')) {
                    this.$refs.rteInstance.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough','Formats','OrderedList',
                     'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
                } else {
                    this.$refs.rteInstance.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough','Formats','OrderedList',
                     'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
                }
            };
        },
        MarkDownConversion: function(){
        if (document.getElementById('preview-code').classList.contains('e-active')) {
            var textArea = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
            var id = this.$refs.rteInstance.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
            htmlPreview.innerHTML = marked(textArea.value);
        }
    },
    fullPreview: function(){
        var mdsource = document.getElementById('preview-code');
        var textArea = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
        var id = this.$refs.rteInstance.getID() + 'html-view';
        var htmlPreview = this.$refs.rteInstance.$el.parentNode.querySelector('#' + id);
        var previewTextArea = this.$refs.rteInstance.$el.parentNode.querySelector('.e-rte-content');
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
            previewTextArea.style.overflow = 'hidden';
        } else {
            mdsource.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = document.createElement('div');
                htmlPreview.setAttribute('class', 'e-content e-pre-source' );
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
                previewTextArea.style.overflow = 'auto';
            }
            if(previewTextArea.style.overflow === 'hidden') {
                previewTextArea.style.overflow = 'auto';
            }
            textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(textArea.value);
        }
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor, Table]
    }
});
</script>