<template>
    <div class='control-section'>
        <div class="overview-blockeditor">
          <ejs-blockeditor id='block-editor' :blocks="blocks" :users="users" :inlineToolbarSettings="inlineToolbarSettings"></ejs-blockeditor>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the features of the <code>Block Editor</code> control. 
                It showcases various block types, content formatting options, and interactive editing capabilities.
            </p>
        </div>
        <div id="description">
            <p>
                The <code>Block Editor</code> is a modern, block-based content editing solution. It offers a powerful and intuitive interface for creating structured documents using discrete, interactive content blocks.
            </p>
            <p>Key features demonstrated in this sample:</p>
              <ul>
                <li>Multiple block types including <code>Heading1-4</code>, <code>Paragraph</code>, <code>Table</code>, <code>BulletList</code>, <code>NumberedList</code>, <code>Checklist</code>, <code>Quote</code>, <code>Callout</code>, <code>Divider</code>, <code>Code</code>, <code>ToggleParagraph</code>, and more.</li>
                <li>Rich text formatting with styles like <code>Bold</code>, <code>Italic</code>, <code>Underline</code>, <code>Strikethrough</code>, <code>Uppercase</code>, and more.</li>
                <li>Interactive <code>Slash ("/") commands</code> for quick block insertion and transformation.</li>
                <li>Hierarchical organization with expandable <code>Toggle Blocks</code>.</li>
                <li>Support for inline special content such as <code>Links</code>, <code>Code</code>, <code>Mentions</code> and <code>Labels</code>.</li>
                <li>Interactive <code>mention ("&#64;") options</code> for quickly tagging users</li>
                <li>Interactive <code>label ("$") options</code> for quick insertion of the labels.</li>
                <li>Block manipulation with <code>Action menu</code>, allowing move, delete, and duplicate operations.</li>
                <li>Keyboard shortcuts for fast, accessible editing workflows.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import * as data from './blockData.json';

export default {
    components: {
        "ejs-blockeditor": BlockEditorComponent
    },
    data: function() {
        return {
            blocks: data['blockDataOverview'],
            users: data['users'],
            inlineToolbarSettings: {
                items: [ 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Uppercase', 'Lowercase', 'Subscript', 'Superscript', 'Color', 'Backgroundcolor' ]
            }
        }
    }
}
</script>

<style>
    .overview-blockeditor {
        width: 100%;
        margin: 0 auto;
    }

</style>