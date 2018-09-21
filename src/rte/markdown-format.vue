<template>
<div>
<div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <div id="defaultRTE"> 
                    <ejs-richtexteditor ref="rteInstance" :formatter="formatter" :toolbarSettings="toolbarSettings" :created="created" :editorMode="editorMode">The sample is configured with customized markdown syntax using the __formatter__ property. Type the content and click the toolbar item to view customized markdown syntax. For unordered list, you need to add a plus sign before the word (e.g., + list1). Or To make a phrase bold, you need to add two underscores before and after the phrase (e.g., __this text is bold__).</ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
<div id="action-description">
    <p> This sample demonstrates how to customize tags of markdown formatting. 
                Type or edit the text and apply the format to view customized markdown syntax.
                    For example, apply “+” to Unordered list. </p>
</div>

<div id="description">
    The rich text editor allows you to customize the markdown syntax by overriding its default syntax. Configure the customized
    markdown syntax using the <code>formatter</code>property
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
                .e-rte-content .e-content {
                float: right;
                width: 50%;
                overflow: auto;
                height: inherit;
                padding: 8px;
            }
            .e-rte-content .e-content.e-pre-source{
                width: 100%;
            }
            .e-icon-btn.e-active .e-md-preview.e-icons::before {
		        content: '\e350';
	        }
        
        </style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownFormatter, MarkdownEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', '|',
                {
                    tooltipText: 'Preview',
                    template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
                }, 'Undo', 'Redo']
        },
        formatter: new MarkdownFormatter({
            listTags: { 'OL': '2. ', 'UL': '+ ' },
            formatTags: {
                'Blockquote': '> '
            },
            selectionTags: {'Bold': ' __ ',  'Italic': ' _ '}
        }),
        editorMode: 'Markdown',
        };
    },
    methods: {
        created: function() {
            this.$refs.rteInstance.$el.querySelector('.e-content').onkeyup = (Event) => {
                this.markDownConversion();
            };
            document.getElementById('preview-code').onclick = () => {
                this.fullPreview();
            };
        },
        markDownConversion: function(){
        if (document.getElementById('preview-code').classList.contains('e-active')) {
            var textArea = this.$refs.rteInstance.$el.querySelector('.e-content');
            var id = this.$refs.rteInstance.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
            htmlPreview.innerHTML = marked(textArea.value);
        }
    },
        fullPreview: function(){
            var mdsource = document.getElementById('preview-code');
             var textArea = this.$refs.rteInstance.$el.querySelector('.e-content');
            var id = this.$refs.rteInstance.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            this.$refs.rteInstance.enableToolbarItem(this.toolbarSettings.items);
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
        } else {
            mdsource.classList.add('e-active');
            this.$refs.rteInstance.disableToolbarItem(this.toolbarSettings.items);
            if (!htmlPreview) {
                htmlPreview = document.createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
            }
            textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(textArea.value);
        }
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
    }
});
</script>