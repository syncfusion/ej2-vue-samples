<template>
<div>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor ref="rteInstance" :toolbarSettings="toolbarSettings" :insertAudioSettings="insertAudioSettings" :insertVideoSettings="insertVideoSettings" >
                    <p>Rich Text Editor allows inserting video and audio from online sources and the local computers where you want to insert a video and audio into your content.</p>
                    <p><b>Get started with Quick Toolbar to click on a video</b></p>
                    <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
                    <p><video controls>
                    <source controls style="width: 30%;"
                      src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
                          type="video/mp4" />
                      </video></p>  
                    <p><b>Get started with Quick Toolbar to click on an audio</b></p>
                    <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                    <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>
                </ejs-richtexteditor>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the option to insert the media into the Rich Text Editor content. Click the audio and video button from the toolbar item to insert the media, or drag and drop audio and video files directly into the editor.</p>
    </div>

    <div id="description">
        <p>Video tools are used to insert a video into the Rich Text Editor and click on the video to customize the video using a quick toolbar. The quick toolbar has the following items:</p>
        <ul>
            <li><code>Replace</code> – can replace the video with some other video.</li>
            <li><code>Align</code> – Align the video with left, right, and justify.</li>
            <li><code>Delete</code> – delete the video.</li>
            <li><code>LayoutOption</code> - display the video as inline or with a break.</li>
            <li><code>Resize</code> – can resize the video dimension with resize options.</li>
        </ul>
        <p>Audio tools are used to insert audio to the Rich Text Editor and click on the audio to customize the audio using a quick toolbar easily. The quick toolbar has the following items:</p>
        <ul>
            <li><code>Replace</code> – can replace the audio with some other audio.</li>
            <li><code>Delete</code> – delete the audio.</li>
            <li><code>Display</code> - display the audio as inline or with a break.</li>
        </ul>
        <p><b>Injecting Module</b></p>
        <p>Rich Text Editor features are segregated into individual feature-wise modules. To use the audio and video tool, we need to inject the audio and video module using the <code>Audio, Video</code>.</p>
        <p><b>Note:</b> For security reasons, the embed video URL is restricted in this demo. If you want to insert an embed URL video, set the <code>enableHtmlSanitizer</code> to false in your application.</p>
    </div>
</div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor ,Video ,Audio, PasteCleanup, Table, ClipBoardCleanup, AutoFormat } from "@syncfusion/ej2-vue-richtexteditor";

let hostUrl = 'https://services.syncfusion.com/vue/production/';
export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    }, 
    data: function() {
        return {
            toolbarSettings: {
                items:['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'Audio', 'Video', '|', 'SourceCode', 'Undo', 'Redo']
            },
            insertVideoSettings: {
                saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
                removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
                path: hostUrl + 'RichTextEditor/'
            },
            insertAudioSettings: {
                saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
                removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
                path: hostUrl + 'RichTextEditor/'
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor, Video, Audio, PasteCleanup, Table, ClipBoardCleanup, AutoFormat]
    }
}
</script>
