<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="default" ref="defaultRTE" :value="value" :quickToolbarSettings="quickToolbarSettings" :toolbarClick="toolbarClick">
                    </ejs-richtexteditor>
                </div>
                <div>
                <ejs-dialog
                    ref="dialogObj"
                    :buttons="dlgButtons"
                    :beforeOpen="OnBeforeOpen"
                    :open="open"
                    :header="header"
                    :visible="visible"
                    :showCloseIcon="showCloseIcon"
                    width="800px"
                    height="800px"
                    :close="onClose"
                    :isModal="isModal">
                <div>
                    <ejs-imageeditor                
                    ref="imageEditorObj"
                    id="image-editor"
                    height="335px"
                    ></ejs-imageeditor>
                </div>
                </ejs-dialog>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This example demonstrates how to integrate Image Editor into Rich Text Editor component. To use it, simply click on the image to open the quick toolbar and select Image Editor custom quick toolbar. Then, the image will be opened in the Image Editor.</p>
        </div>

        <div id="description">
            <p>The Image Editor component is integrated into the Rich Text Editor and opens the Image Editor within a Dialog when the Image Editor custom quick toolbar is clicked and allows to edit the image. To achieve this, the sample is customized for the Image Editor and Rich Text Editor</p>
            <ul>
                <li>Include the Image Editor custom toolbar item in the <a target='_blank' href='https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#image'>quickToolbarSettings.image</a> property of the Rich Text Editor</li>
                <li>Configure the Image Editor within a Dialog using the <a target='_blank' href='https://helpej2.syncfusion.com/vue/documentation/api/dialog#beforeopen'>beforeOpen</a> event of the Dialog</li>
                <li>Open the Dialog on clicking the Image Editor custom toolbar item</li>
                <li>Insert the edited image into the Rich Text Editor by clicking the Insert button</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Table, NodeSelection, QuickToolbar, PasteCleanup, Video, Audio } from "@syncfusion/ej2-vue-richtexteditor";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import{ getComponent }from'@syncfusion/ej2-base';
import { ImageEditor } from '@syncfusion/ej2-image-editor';

export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-dialog': DialogComponent,
        'ejs-imageeditor': ImageEditorComponent
    },
    data: function() {
        return {
            visible: false,
            showCloseIcon: false,
            isModal: false,
            selection: new NodeSelection(),
            ranges: null,
            saveSelection: null,
            dataURL: null,
            isLoaded: false,
            imageELement: null,
            imageEditorObj:null,
            dlgButtons: [
                {
                buttonModel: { content: "Insert", isPrimary: true },
                click: this.onInsert.bind(this),
                },
                { buttonModel: { content: "Cancel" }, click: this.onCancel },
            ],
            header: "Image Editor",
            value: `<p>
                    An image can be edited within a Rich Text Editor using an Image Editor.
                    <img
                      id="img1"
                      style="height: 350px;"
                      src="https://ej2.syncfusion.com/angular/demos/assets/image-editor/images/default.png"
                      aria-label="Bridge" />
                    </p>
                    <p>
                        It allows users to quickly and easily add an Image Editor to their Rich Text Editor.
                        It provides a variety of features, including image cropping, resizing, rotation, and more.
                        Additionally, it supports a wide range of image formats, including JPEG, PNG, and GIF.
                    </p>`,
            quickToolbarSettings: {
                image: [
                "Replace",
                "Align",
                "Caption",
                "Remove",
                "-",
                "InsertLink",
                "OpenImageLink",
                "EditImageLink",
                "RemoveImageLink",
                "Display",
                "AltText",
                {
                    tooltipText: "Image Editor",
                    template:
                    '<button class="e-tbar-btn e-btn" id="imageEditor"><span class="e-btn-icon e-icons e-rte-image-editor"></span></button>',
                },
                ],
            },
        };
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.tooltipText === "Image Editor") {
                this.range = this.selection.getRange(document);
                this.saveSelection = this.selection.save(this.range, document);
                this.$refs.dialogObj.show();
                this.$refs.defaultRTE.ej2Instances.quickToolbarModule.imageQTBar.hidePopup();
            }
        },
        onInsert: function () {
            if (
                this.$refs.defaultRTE.ej2Instances.formatter.getUndoRedoStack()
                .length === 0
            ) {
                this.$refs.defaultRTE.ej2Instances.formatter.saveData();
            }
            this.saveSelection.restore();
            var canvas = document.createElement("CANVAS");
            var ctx = canvas.getContext("2d");
            const imgData = this.imageEditorObj.getImageData();
            canvas.height = imgData.height;
            canvas.width = imgData.width;
            ctx.putImageData(imgData, 0, 0);
            this.isLoaded = true;
            this.$refs.defaultRTE.executeCommand("editImage", {
                url: canvas.toDataURL(),
                width: { width: canvas.width },
                height: { height: canvas.height },
                selection: this.saveSelection,
                cssClass: this.imageELement.getAttribute('class').replace('e-rte-image', '')
            });
            this.$refs.defaultRTE.ej2Instances.formatter.saveData();            
            this.dispose();
            this.$refs.dialogObj.hide();
        },
        onCancel: function () {
            this.dispose();
            this.$refs.dialogObj.hide();
            this.isLoaded = true;
        },
        onClose: function () {
            this.dispose();
            this.$refs.dialogObj.hide();
            this.isLoaded = true;
        },
        open: function() {
            this.imageEditorObj.update();
            this.imageEditorObj.open(this.dataURL);
        },
        dispose:function () {
            var imageEditorInstance = getComponent(document.getElementById('image-editor'), 'image-editor');
            if (imageEditorInstance !== null && imageEditorInstance !== undefined) {
                imageEditorInstance.destroy();
            }
        },
        OnBeforeOpen: function () {
            this.dispose();
            this.isLoaded = false;
            var selectNodes = this.$refs.defaultRTE.ej2Instances.formatter.editorManager.nodeSelection.getNodeCollection(
                this.range
            );
            if (selectNodes.length == 1 && selectNodes[0].tagName == "IMG") {
                this.imageELement = selectNodes[0];
                this.imageELement.crossOrigin = "anonymous";
                var canvas = document.createElement("CANVAS");
                var ctx = canvas.getContext("2d");
                canvas.height = this.imageELement.offsetHeight;
                canvas.width = this.imageELement.offsetWidth;
                var imageELe = this.imageELement;
              var isLoded = this.isLoaded;
              const onImageLoadEvent = () => {
                ctx.drawImage(imageELe, 0, 0, canvas.width, canvas.height);
                this.dataURL = canvas.toDataURL();
                if (!isLoded) {
                    this.imageEditorObj = new ImageEditor({
                        height: '450px',
                        created: () => {
                            this.imageEditorObj.open(this.dataURL);
                        }
                    });
                    this.imageEditorObj.appendTo('#image-editor');
                    isLoded = true;
                }
                this.imageELement.removeEventListener('load', onImageLoadEvent);
            }
            this.imageELement.addEventListener('load', onImageLoadEvent);
        }
        },
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio]
    }
};
</script>

<style>
.e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {
  content: "\e730";
}

.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.fluent2 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.fluent2-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.fluent2-highcontrast .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.bootstrap5\.3 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.bootstrap5\.3-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.tailwind3 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.tailwind3-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.material3 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.material3-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {
    content: '\e730';
}

.fabric .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.fabric-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,
.highcontrast .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {
    content: '\e97c';
}

.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {
    content: '\e78f';
}
</style>
