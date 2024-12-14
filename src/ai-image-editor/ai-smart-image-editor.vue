<template>
    <div id="wrapper-container">
        <ejs-toolbar id="defaultToolbar" :items="toolbarItems" cssClass="defaultToolbar" height="50px"
            @clicked="toolbarClicked"></ejs-toolbar>

        <ejs-sidebar id="defaultSidebar" width="200px" position="Left" type="Push"
            :target="'.maincontent'"></ejs-sidebar>

        <ejs-imageeditor id="imageeditor" ref="imageEditorRef" :created="onImageEditorCreated"
            :fileOpened="onFileOpened"></ejs-imageeditor>

        <ejs-treeview id="defaultTree" :fields="treeFields" @nodeSelected="onSelect"></ejs-treeview>

        <ejs-colorpicker id="color-picker" :change="onColorChange"></ejs-colorpicker>

        <ejs-button id="remove-btn" cssClass="e-small e-round" isPrimary="true" iconCss="e-icons e-close"></ejs-button>
        <ejs-button id="eraseBtn" cssClass="e-primary"></ejs-button>
        <ejs-button id="bgChangeBtn" cssClass="e-primary"></ejs-button>
        <ejs-button id="bg-change-remove-btn" cssClass="e-small e-round" isPrimary="true"
            iconCss="e-icons e-close"></ejs-button>

        <ejs-textbox id="outlined" placeholder="Example: Waterfalls, Mountains, etc.."
            cssClass="e-outline"></ejs-textbox>
    </div>
</template>

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { ToolbarComponent, SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-vue-navigations';
import { ColorPickerComponent, TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { ImageEditorComponent } from '@syncfusion/ej2-vue-image-editor';
import { hideSpinner, showSpinner } from '@syncfusion/ej2-popups';
import { Draggable } from '@syncfusion/ej2-base';
import { StabilityAiModel, StabilityAiModelBGRemover, StabilityAiModelMagicEraser } from '../common/stability-model';

export default {
    name: 'SyncfusionComponent',
    components: {
        'ejs-toolbar': ToolbarComponent,
        'ejs-sidebar': SidebarComponent,
        'ejs-treeview': TreeViewComponent,
        'ejs-colorpicker': ColorPickerComponent,
        'ejs-imageeditor': ImageEditorComponent,
        'ejs-button': ButtonComponent,
        'ejs-textbox': TextBoxComponent
    },
    data() {
        return {
            colorPickerVal: '',
            toolbarItems: [
                { prefixIcon: 'e-tbar-menu-icon tb-icons', tooltipText: 'Menu' },
                { template: '<div class="e-folder"><div class="e-folder-name">AI Image Editor</div></div>', cssClass: 'e-folder' }
            ],
            treeFields: {
                dataSource: [
                    { id: '1', name: 'Magic Eraser', imageUrl: 'images/object-remover.gif' },
                    { id: '2', name: 'Change Background', imageUrl: 'images/change-bg.png' },
                    { id: '2', name: 'Remove Background', imageUrl: 'images/remove-bg.png' }
                ],
                id: 'id',
                text: 'name',
                selected: 'selected',
                parentID: 'pid',
                hasChildren: 'hasChild',
                expanded: 'expanded'
            }
        };
    },
    methods: {
        toolbarClicked(args) {
            if (args.item.tooltipText === 'Menu') {
                this.$refs.sidebar.toggle();
                setTimeout(() => {
                    this.$refs.imageEditorRef.update();
                }, 500);
            }
        },
        onSelect(args) {
            if (args.nodeData.text === 'Magic Eraser') {
                document.querySelector('.bg-changer').style.display = 'none';
                document.querySelector('.magic-eraser').style.display = 'block';
                this.$refs.imageEditorRef.update();
                this.$refs.imageEditorRef.element.setAttribute('data-value', 'mask-drawing');
                this.$refs.imageEditorRef.freehandDraw(true);
                this.$refs.treeview.selectedNodes = [];
            } else if (args.nodeData.text === 'Change Background') {
                document.querySelector('.magic-eraser').style.display = 'none';
                document.querySelector('.bg-changer').style.display = 'block';
                this.$refs.treeview.selectedNodes = [];
                showSpinner(this.$refs.imageEditorRef.element);
                document.getElementById('wrapper-container').style.opacity = '0.5';
                let imageData = this.$refs.imageEditorRef.getImageData(false);
                let url = this.imageDataToBase64(imageData);
                const file = this.base64ToFile(url, 'image.png');
                this.removeBG(file);
            } else if (args.nodeData.text === 'Remove Background') {
                showSpinner(this.$refs.imageEditorRef.element);
                document.getElementById('wrapper-container').style.opacity = '0.5';
                let imageData = this.$refs.imageEditorRef.getImageData(false);
                let url = this.imageDataToBase64(imageData);
                const file = this.base64ToFile(url, 'image.png');
                this.removeBG(file);
            }
        },
        onColorChange(args) {
            this.colorPickerVal = args.currentValue.hex;
            this.$refs.imageEditorRef.open('', false, { backgroundColor: this.colorPickerVal });
        },
        onImageEditorCreated() {
            this.$refs.imageEditorRef.open('images/nature.png');
        },
        onFileOpened() {
            setTimeout(() => {
                this.$refs.imageEditorRef.update();
            }, 200);
        },
        imageDataToBase64(imageData) {
            const canvas = document.createElement('canvas');
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            const ctx = canvas.getContext('2d');
            ctx.putImageData(imageData, 0, 0);
            return canvas.toDataURL();
        },
        base64ToFile(base64String, fileName) {
            const byteString = atob(base64String.split(',')[1]);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const intArray = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                intArray[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([intArray], { type: 'image/png' });
            return new File([blob], fileName, { type: 'image/png' });
        },
        removeBG(file) {
            StabilityAiModelBGRemover(file).then(result => {
                this.$refs.imageEditorRef.open(result, false, { backgroundColor: '' });
                setTimeout(() => {
                    hideSpinner(this.$refs.imageEditorRef.element);
                    document.getElementById('wrapper-container').style.opacity = '1';
                    this.$refs.treeview.selectedNodes = [];
                }, 100);
            });
        }
    }
};
</script>
