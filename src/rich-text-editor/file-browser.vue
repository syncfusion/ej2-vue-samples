<template>
    <div>
        <div class="control-section" style="overflow:hidden;">
            <div class="control-section">
                <div class="control-wrapper">
                    <div class="sample-container">
                        <div class="default-section">
                            <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings" :fileManagerSettings="fileManagerSettings">
                                <p>Rich Text Editor allows inserting images from online sources as well as the local computers where you want to insert the image in your content.</p>
                                <p><b>Get started Quick Toolbar to click on the image</b></p>
                                <p>It is possible to add custom style on the selected image inside the RichTextEditor through the quick toolbar.</p>
                                <img id="rteImageID" style="width:300px; height:300px;transform: rotate(0deg);" alt="Logo" src="./images/RTEImage-Feather.png">
                            </ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the option to insert the image into the RichTextEditor content using FileManager. Click the open folder button from the toolbar item to insert the image.</p>
        </div>

        <div id="description">
            <p>The FileManager feature provides an option to insert the image into the editor and its supports various cloud service.
                It supports all the basic file operations such as create, rename, delete, cut, copy, paste, upload, download and so on.
            </p>

            <p><b>Injecting Module:</b></p>
            <p>RichTextEditor features are segregated into individual feature-wise modules. To use FileManager tool, 
                we need to inject FileManager module into provider section.</p>

            <p><b>Note:</b> File Manager’s upload functionality is restricted in online demo.</p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Image, Link, HtmlEditor, QuickToolbar, FileManager } from "@syncfusion/ej2-vue-richtexteditor";

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    },
    data: function() {
        return {
            toolbarSettings: {
                items: ['FileManager', 'Image']
            },
            fileManagerSettings: {
                enable: true,
                path: '/Pictures/Food',
                ajaxSettings: {
                    url: hostUrl + 'api/FileManager/FileOperations',
                    getImageUrl: hostUrl + 'api/FileManager/GetImage',
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                }
            }
        };
    },
    provide: {
        richtexteditor:[Toolbar, Image,  Link, HtmlEditor, QuickToolbar, FileManager]
    }
}
</script>