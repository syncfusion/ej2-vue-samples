<template>
    <div class="control-section">
        <div class="col-lg-12 e-img-editor-sample">
            <div class="customToolbar">
                <div class="header">
                    <div class="header-details">
                        <div class="header-name">Image Editor</div>
                    </div>
                </div>
                <div class='image-preview-container' id='imagePreviewContainer'>
                    <img src="src/image-editor/images/bridge.jpg" id="previewImgContainer" class="preview-img-container"
                        alt="previewImage" />
                    <br />
                    <div class='button-container' id="button-container">
                        <ejs-fab id='edit' class='custom-button' iconCss='e-icons e-edit' position='BottomRight'
                            target='.image-preview-container' isPrimary='true' content='Edit Image'
                            v-on:click.native="editClicked">
                        </ejs-fab>
                    </div>
                </div>
                <div class="image-editor-container" id="image-editor-container" style="display: none">
                    <div id="top-toolbarArea">
                        <ejs-toolbar id="top-toolbar" ref="topToolbarInstance" :created='onTopToolbarCreated'
                            :clicked='toolbarclicked'>
                            <e-items>
                                <e-item id="cancel" prefixIcon='e-icons e-close' tooltipText='Cancel'></e-item>
                                <e-item id="undo" prefixIcon='e-icons e-undo' tooltipText='Undo'></e-item>
                                <e-item id="redo" prefixIcon='e-icons e-redo' tooltipText='Redo'></e-item>
                                <e-item id="ok" prefixIcon='e-icons e-save' tooltipText='Save'></e-item>
                            </e-items>
                        </ejs-toolbar>
                    </div>
                    <div id="imageEditor">
                        <ejs-imageeditor :theme="themeValue" id="image-editor" ref="imageEditorObj"
                            :shapeChanging="shapeChanging" :shapeChange="shapeChange" :click="click" :created="onIECreated" :fileOpened="fileOpened" :toolbar="toolbar" :showQuickAccessToolbar="false"></ejs-imageeditor>
                    </div>
                    <div id="bottom-toolbarArea">
                        <ejs-toolbar id="bottom-toolbar" ref="bottomToolbarInstance" :created='onBottomToolbarCreated'
                            :clicked='toolbarclicked'>
                            <e-items>
                                <e-item id="cropAndTransform" prefixIcon='e-icons e-crop'
                                    tooltipText='Crop and Transform'></e-item>
                                <e-item id="back" prefixIcon='e-icons e-arrow-left' tooltipText='Back'
                                    :visible='false'></e-item>
                                <e-item id="rotateLeft" prefixIcon='e-icons e-transform-left' tooltipText='Rotate Left'
                                    :visible='false'></e-item>
                                <e-item id="rotateRight" prefixIcon='e-icons e-transform-right'
                                    tooltipText='Rotate Right' :visible='false'></e-item>
                                <e-item id="addText" prefixIcon='e-icons e-text-annotation' tooltipText='Text'></e-item>
                                <e-item id="fontColor" prefixIcon='top-icon e-text-fontColor' cssClass='top-icon e-text-fontColor' tooltipText='Font Color'
                                    :visible='false' type='Input' :template="'fontColorTemplate'"></e-item>
                                <template v-slot:fontColorTemplate>
                                    <ejs-colorpicker ref="fontColorInstance" id="imageEditor_textFont" value='#fff'
                                        :presetColors="presetColors" cssClass='e-text-font-color' mode="Palette" :columns='PalettesColn'
                                        :modeSwitcher="false" :noColor="false" :inline="false" :showButtons="false"
                                        :beforeTileRender="tileRender" :change="fontColorChanged"></ejs-colorpicker>
                                </template>
                                <e-item id="shapes" prefixIcon='e-icons e-shapes' tooltipText='Annotation'
                                    :template="'annotationTemplate'"></e-item>
                                <template v-slot:annotationTemplate>
                                    <ejs-dropdownbutton ref="annotationInstance" id="imageEditor_annotationButton"
                                        :items='items' iconCss='e-icons e-shapes'
                                        :select="annotationSelect"></ejs-dropdownbutton>
                                </template>
                                <e-item id="fillColor" prefixIcon='e-icons e-copy' cssClass='top-icon e-fill' tooltipText='Fill Color' :visible='false'
                                    type='Input' :template="'fillColorTemplate'"></e-item>
                                <template v-slot:fillColorTemplate>
                                    <ejs-colorpicker ref="fillColorInstance" id="imageEditor_shapeFill" mode='Palette' value='#fff'
                                        :presetColors="presetFillColors" cssClass='e-shape-fill-color' :modeSwitcher="false" :columns='PalettesColn'
                                        :noColor="false" :showButtons="false" :inline="false" :beforeTileRender="tileRender"
                                        :change="fillColorChanged"></ejs-colorpicker>
                                </template>
                                <e-item id="strokeColor" prefixIcon='e-icons e-copy' cssClass='top-icon e-stroke' tooltipText='Stroke Color'
                                    :visible='false' :template="'strokeColorTemplate'"></e-item>
                                <template v-slot:strokeColorTemplate>
                                    <ejs-colorpicker ref="strokeColorInstance" id="imageEditor_shapeFill" value='#fff'
                                        :presetColors="presetColors" cssClass='e-shape-stroke-color' mode="Palette" :columns='PalettesColn'
                                        :modeSwitcher="false" :noColor="false" :inline="false" :showButtons="false"
                                        :beforeTileRender="tileRender" :change="strokeColorChanged"></ejs-colorpicker>
                                </template>
                                <e-item id="penStrokeColor" cssClass='top-icon e-pen-stroke-color'
                                    prefixIcon='e-icons e-copy' tooltipText='Stroke Color' :visible='false' type='Input'
                                    :template="'penColorTemplate'"></e-item>
                                <template v-slot:penColorTemplate>
                                    <ejs-colorpicker ref="penColorInstance" value='#fff' :modeSwitcher="false"
                                        :presetColors="presetColors" mode="Palette" :showButtons="false" :columns='PalettesColn'
                                        cssClass='e-pen-color' :noColor="false" :inline="false"
                                        :beforeTileRender="tileRender" :change="penColorChanged"></ejs-colorpicker>
                                </template>
                                <e-item id="remove" prefixIcon='e-icons e-trash' tooltipText='Remove' :visible='false'
                                    :disabled='false'></e-item>
                                <e-item id="editText" tooltipText='Edit Text' :visible='false'
                                    prefixIcon='e-icons e-annotation-edit'></e-item>
                                <e-item id="addPen" prefixIcon='e-icons e-free-pen' tooltipText='Pen'></e-item>
                                <e-item id="filters" prefixIcon='e-icons e-filters' tooltipText='Filters'></e-item>
                            </e-items>
                        </ejs-toolbar>
                        <ejs-toolbar ref="filterToolbarInstance" id="filter-toolbar" :clicked='filterImage'>
                            <e-items>
                                <e-item id='default' align='Center' text='Default' :template="'defaultCanvasTemplate'"></e-item>
                                <template v-slot:defaultCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_defaultCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Default</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='chrome' align='Center' text='Chrome' :template="'chromeCanvasTemplate'"></e-item>
                                <template v-slot:chromeCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_chromeCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Chrome</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='cold' align='Center' text='Cold' :template="'coldCanvasTemplate'"></e-item>
                                <template v-slot:coldCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_coldCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Cold</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='warm' align='Center' text='Warm' :template="'warmCanvasTemplate'"></e-item>
                                <template v-slot:warmCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_warmCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Warm</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='grayscale' align='Center' text='Grayscale' :template="'grayscaleCanvasTemplate'"></e-item>
                                <template v-slot:grayscaleCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_grayscaleCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Grayscale</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='sepia' align='Center' text='Sepia' :template="'sepiaCanvasTemplate'"></e-item>
                                <template v-slot:sepiaCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_sepiaCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Sepia</span>
                                        </div>
                                    </div>
                                </template>
                                <e-item id='invert' align='Center' text='Invert' :template="'invertCanvasTemplate'"></e-item>
                                <template v-slot:invertCanvasTemplate>
                                    <div class="filter-wrapper" style="box-sizing: content-box;">
                                        <canvas id="imageEditor_invertCanvas"></canvas>
                                        <div style="text-align: center;">
                                            <span>Invert</span>
                                        </div>
                                    </div>
                                </template>
                            </e-items>
                        </ejs-toolbar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
.customToolbar .e-image-editor {
  margin: 0 auto;
}

.e-img-editor-sample {
  height: 80vh;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.customToolbar {
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}

.customToolbar .button-container {
  display: flex;
  left: calc(50% - 26px);
  position: absolute;
  bottom: 20px;
}

.customToolbar .image-preview-container {
  height: calc(100% - 40px);
  text-align: center;
  position: relative;
}

.customToolbar .preview-img-container {
  max-width: 100%;
  max-height: 100%;
  padding: 20px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.customToolbar .image-editor-container {
  height: calc(100% - 40px);
  position: relative;
}

.customToolbar .image-editor-container .e-image-editor {
  height: 100% !important;
}

.customToolbar #top-toolbarArea {
  position: absolute;
  top: 20px;
  z-index: 1;
}

.customToolbar #top-toolbar {
  border-radius: 8px;
}

.customToolbar #bottom-toolbarArea {
  position: absolute;
  bottom: 70px;
  z-index: 1;
  width: 100% !important;
}

.customToolbar #top-toolbar,
.customToolbar #bottom-toolbar {
  position: absolute;
  border-radius: 8px;
}

.customToolbar #filter-toolbar {
  height: 130px !important;
  display: none;
  top: 50px;
}

.customToolbar .button-container button:hover,
.customToolbar .message button:hover {
  color: #fff;
  cursor: pointer;
}

.customToolbar .custom-button {
  padding: 8px;
  margin: 10px;
  background: #6750a4 !important;
  color: #fff;
  border: none;
  cursor: pointer;
}

.customToolbar .control-wrapper {
  height: 100%;
}

.customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn .e-caret-hide {
  display: none !important; /* stylelint-disable-line declaration-no-important */
}

.customToolbar .e-dropdown-btn,
.customToolbar .e-dropdown-btn.e-btn {
  box-shadow: none;
  background-color: rgba(184, 184, 184, 0.9584);
  background: inherit;
}

.customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn:hover {
  background: rgba(0, 0, 0, 0.12);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.87);
}
.customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn:focus {
  background: rgba(0, 0, 0, 0.18);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.87);
}
.customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn:active {
  background: rgba(184, 184, 184, 0.9584);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.87);
}
.customToolbar .e-toolbar
  .e-toolbar-items
  .e-colorpicker-wrapper.e-shape-fill-color
  .e-split-btn-wrapper
  .e-split-btn
  .e-selected-color
  .e-split-preview,
.customToolbar .e-image-editor
  .e-toolbar
  .e-toolbar-items
  .e-colorpicker-wrapper.e-shape-stroke-color
  .e-split-btn-wrapper
  .e-split-btn
  .e-selected-color
  .e-split-preview,
.customToolbar .e-image-editor
  .e-toolbar
  .e-toolbar-items
  .e-colorpicker-wrapper.e-text-stroke-color
  .e-split-btn-wrapper
  .e-split-btn
  .e-selected-color
  .e-split-preview,
.customToolbar .e-image-editor
  .e-toolbar
  .e-toolbar-items
  .e-colorpicker-wrapper.e-pen-stroke-color
  .e-split-btn-wrapper
  .e-split-btn
  .e-selected-color
  .e-split-preview {
  display: none;
}

.customToolbar .e-nocolor-item {
  background: transparent
    url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNnB4IiBoZWlnaHQ9IjZweCIgdmlld0JveD0iMCAwIDYgNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTAgKDU0OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTExIiBmaWxsPSIjRTBFMEUwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTEtQ29weS0yIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIzIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTEtQ29weSIgZmlsbD0iI0ZGRkZGRiIgeD0iMyIgeT0iMCIgd2lkdGg9IjMiIGhlaWdodD0iMyI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTExLUNvcHktMyIgZmlsbD0iI0UwRTBFMCIgeD0iMyIgeT0iMyIgd2lkdGg9IjMiIGhlaWdodD0iMyI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') !important; /* stylelint-disable-line declaration-no-important */
  background-size: 8px !important; /* stylelint-disable-line declaration-no-important */
}

.customToolbar .e-bigger .e-toolbar .e-toolbar-items .e-btn-icon.e-dropdownbtn-preview,
.customToolbar .e-bigger .e-toolbar .e-toolbar-items .e-btn-icon.e-dropdownbtn-preview {
  margin-top: -3px !important; /* stylelint-disable-line declaration-no-important */
  margin-left: -1px;
}

.customToolbar .e-toolbar .e-toolbar-items .e-btn-icon.e-dropdownbtn-preview {
  height: 18px;
  width: 18px;
  margin-top: -4px !important; /* stylelint-disable-line declaration-no-important */
  margin-left: -1px;
}

.customToolbar .e-fill.e-template .e-caret::before {
  content: '\e783';
}

.customToolbar .e-stroke.e-template .e-caret::before,
.customToolbar .e-frame-stroke.e-template .e-caret::before,
.customToolbar .e-pen-stroke-color.e-template .e-caret::before {
  content: '\e739';
}

.customToolbar .e-folder-open {
  border: none !important;
  font-size: 18px !important;
}

.customToolbar .e-btn .e-btn-icon.e-icon-left {
  margin-left: 0px !important;
}

.customToolbar .e-dropdown-popup ul #calibri {
  font-family: 'Calibri';
}

.customToolbar #imageEditor {
  width: 100%;
  height: 100%;
}

.customToolbar #edit {
  background-color: #6750a4 !important;
}

.customToolbar .header {
  max-width: 100%;
  background-color: #6750a4;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  word-wrap: break-word;
  align-items: center;
}

.customToolbar .header-name {
  color: #fff;
}

.customToolbar .e-free-pen::before {
    content: "\e7db";
}

.fluent .customToolbar .e-dropdown-btn, .e-dropdown-btn.e-btn,
.fluent .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:hover,
.fluent .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:focus,
.fluent-dark .customToolbar .e-dropdown-btn, .e-dropdown-btn.e-btn,
.fluent-dark .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:hover,
.fluent-dark .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:focus {
    border: none !important;
}
 
.fluent-dark .customToolbar #edit,
.tailwind-dark .customToolbar #edit,
.material-dark .customToolbar #edit,
.material3-dark .customToolbar #edit,
.bootstrap-dark .customToolbar #edit {
    color: #fff;
}
 
.fluent-dark .customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn:focus,
.fluent-dark .customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn:hover,
.fluent-dark .customToolbar .e-toolbar .e-toolbar-items .e-dropdown-btn {
    color: rgb(161, 159, 157);
}
 
.material .customToolbar #edit,
.material-dark .customToolbar #edit {
    text-transform: capitalize;
}
 
.fluent .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:focus,
.fluent-dark .customToolbar .e-toolbar .e-toolbar-item .e-tbar-btn:focus {
    box-shadow: none !important;
}
 
.bootstrap5 .customToolbar .e-toolbar-item.e-template .e-dropdown-btn {
    color: #6c757d !important;
}
 
.bootstrap4 .customToolbar .e-toolbar-item.e-template .e-dropdown-btn {
    color: rgb(73, 80, 87) !important;
}
 
.bootstrap5-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:hover,
.bootstrap5-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:focus,
.material3-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:hover,
.material3-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:focus,
.tailwind-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:hover,
.tailwind-dark .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:focus,
.highcontrast .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:hover,
.highcontrast .customToolbar .e-toolbar-item.e-template .e-dropdown-btn:focus {
    color: #fff !important;
}
 
.highcontrast .customToolbar .e-free-pen::before {
    content: "\e739";
}
 
.highcontrast .customToolbar .e-toolbar-item.e-template .e-dropdown-btn.e-btn.e-active {
    color: #fff !important;
}
 
.material .customToolbar .e-free-pen::before,
.material-dark .customToolbar .e-free-pen::before,
.fabric .customToolbar .e-free-pen::before,
.fabric-dark .customToolbar .e-free-pen::before {
    content: "\e737";
}
 
.bootstrap .customToolbar .e-free-pen::before,
.bootstrap-dark .customToolbar .e-free-pen::before {
    content: "\e767";
}
 
.bootstrap4 .customToolbar .e-free-pen::before {
    content: "\e756";
}
 
.bootstrap5 .customToolbar .e-fill.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-fill.e-template .e-caret::before,
.bootstrap5 .customToolbar .e-stroke.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-stroke.e-template .e-caret::before,
.bootstrap5 .customToolbar .e-text-font-color.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-text-font-color.e-template .e-caret::before {
    font-size: 14px;
}
 
.material .customToolbar .e-fill.e-template .e-caret::before,
.material-dark .customToolbar .e-fill.e-template .e-caret::before,
.fabric .customToolbar .e-fill.e-template .e-caret::before,
.fabric-dark .customToolbar .e-fill.e-template .e-caret::before,
.bootstrap .customToolbar .e-fill.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-fill.e-template .e-caret::before,
.highcontrast .customToolbar .e-fill.e-template .e-caret::before {
    content: "\e35c" !important;
    font-size: 14px;
}
 
.material .customToolbar .e-stroke.e-template .e-caret::before,
.material-dark .customToolbar .e-stroke.e-template .e-caret::before,
.material .customToolbar .e-text-font-color.e-template .e-caret::before,
.material-dark .customToolbar .e-text-font-color.e-template .e-caret::before {
    content: "\ec15";
    font-size: 14px;
}
 
.fabric .customToolbar .e-stroke.e-template .e-caret::before,
.fabric-dark .customToolbar .e-stroke.e-template .e-caret::before,
.fabric .customToolbar .e-text-font-color.e-template .e-caret::before,
.fabric-dark .customToolbar .e-text-font-color.e-template .e-caret::before {
    content: "\ebee";
    font-size: 14px;
}
 
.bootstrap .customToolbar .e-stroke.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-stroke.e-template .e-caret::before,
.bootstrap .customToolbar .e-text-font-color.e-template .e-caret::before,
.bootstrap-dark .customToolbar .e-text-font-color.e-template .e-caret::before {
    content: "\ebc6" !important;
    font-size: 14px !important;
}
 
.highcontrast .customToolbar .e-stroke.e-template .e-caret::before,
.highcontrast .customToolbar .e-text-font-color.e-template .e-caret::before {
    content: "\eb6e" !important;
    font-size: 14px !important;
}

.customToolbar .e-image-editor {
    border: none !important;
}
</style>
<!-- custom code end -->

<script>
import { ImageEditorComponent } from '@syncfusion/ej2-vue-image-editor';
import { FabComponent } from "@syncfusion/ej2-vue-buttons";
import { Browser, getComponent, isNullOrUndefined } from '@syncfusion/ej2-base';
import {  Toolbar, ToolbarComponent, ItemDirective, ItemsDirective, ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { ColorPickerComponent } from '@syncfusion/ej2-vue-inputs';
import { createElement } from "@syncfusion/ej2-base";


export default {
  components: {
    'ejs-imageeditor': ImageEditorComponent,
    'ejs-fab': FabComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective,
    'ejs-dropdownbutton': DropDownButtonComponent,
    'ejs-colorpicker': ColorPickerComponent
  },
  data: function () {
    return {
      theme: 'Bootstrap5',
      toolbar: [],
      currentToolbar: 'main',
      isTextEditing: false,
      isShapeSelected: false,
      filter: 'default',
      imageData: '',
      isShapeCustomizing: false,
      PalettesColn: 4,
      popupLeft: '',
      tempShapeSettings: '',
      activeObjIndex: '',
      fontitems: [
        { id: 'arial', text: 'Arial' }, 
        { id: 'calibri', text: 'Calibri' }, 
        { id: 'georgia', text: 'Georgia' },
        { id: 'roboto', text: 'Roboto' }, 
        { id: 'tahoma', text: 'Tahoma' }
      ],
      widthItems: [
        { id: '1', text: 'XSmall' },
        { id: '2', text: 'Small' },
        { id: '3', text: 'Medium' },
        { id: '4', text: 'Large' },
        { id: '5', text: 'XLarge' }
      ],
      items: [
            { text: 'Rectangle', id: 'rectangle', iconCss: 'e-icons e-rectangle' },
            { text: 'Ellipse', id: 'ellipse', iconCss: 'e-icons e-circle' },
            { text: 'Line', id: 'line', iconCss: 'e-icons e-line' }
        ],
       presetColors: {
            'custom': ['#ffffff', '#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
            '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
        },
        presetFillColors: {
            'custom': ['', '#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
            '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
        }
    };
  },
  methods: {
    onTopToolbarCreated: function(args) {
        var toolbarArea = document.getElementById('top-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
    },
    onBottomToolbarCreated: function(args) {
        var toolbarArea = document.getElementById('bottom-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
    },
    onScroll: function () {
      if (document.getElementById('imageeditor_sliderWrapper')) {
        var slider = getComponent(
          document.getElementById('imageeditor_sliderWrapper'),
          'slider'
        );
        slider.refreshTooltip(slider.tooltipTarget);
      }
    },
    annotationSelect: function (args) {
        if (this.$refs.imageEditorObj.disabled) {
            return;
        }
        this.refreshToolbar(args.item.id);
    },
    tileRender: function (args) {
        args.element.classList.add("e-circle-palette");
        args.element.appendChild(createElement("span", { className: "e-circle-selection" }));
    },
    strokeColorChanged: function (args) {
        var selElem = this.$refs.strokeColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
        selElem.style.backgroundColor = args.currentValue.rgba;
        this.isShapeCustomizing = true;
        var shapeSetting = this.$refs.imageEditorObj.getShapeSetting(this.activeObjIndex);
        shapeSetting.strokeColor = args.currentValue.rgba;
        this.$refs.imageEditorObj.updateShape(shapeSetting, true);
        this.tempShapeSettings.strokeColor = args.currentValue.rgba;
        this.isShapeSelected = true;
        if (this.isTextEditing) {
            this.$refs.imageEditorObj.enableTextEditing();
        }
        this.isShapeCustomizing = false;
    },
    fillColorChanged: function (args) {
        if (args.currentValue.hex === '#ffffff') {
            return;
        }
        var selElem = this.$refs.fillColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
        if (args.currentValue.rgba === '') {
                selElem.classList.add('e-nocolor-item');
        } else {
            selElem.classList.remove('e-nocolor-item');
            selElem.style.background = args.currentValue.rgba;
        }
        selElem.style.background = args.currentValue.rgba;
        this.isShapeCustomizing = true;
        var shapeSetting = this.$refs.imageEditorObj.getShapeSetting(this.activeObjIndex);
        shapeSetting.fillColor = args.currentValue.rgba;
        this.$refs.imageEditorObj.updateShape(shapeSetting, true);
        this.tempShapeSettings.fillColor = args.currentValue.rgba;
        this.isShapeSelected = true;
        if (this.isTextEditing) {
                this.$refs.imageEditorObj.enableTextEditing();
        }
        this.isShapeCustomizing = false;
    },
    filterImage: function (args) {
        this.$refs.imageEditorObj.ej2Instances.applyImageFilter(args.item.id);
        this.filter = args.item.id;
    },
    toolbarclicked: function (args) {
        var item = args.item.id.toLowerCase();
        var dimension = this.$refs.imageEditorObj.getImageDimension();
        var imageData; var canvas;
        switch (item) {
        case 'back':
            this.apply();
            this.refreshToolbar('main');
            break;
        case 'cancel':
            this.isTextEditing = false;
            if (this.currentToolbar === 'main') {
                document.getElementById('image-editor-container').style.display = 'none';
                (document.getElementById('imagePreviewContainer')).style.display = 'block';
                this.$refs.imageEditorObj.reset();
            } else {
                if ((this.isShapeCustomizing || this.isShapeSelected) && this.tempShapeSettings && this.tempShapeSettings.id) {
                    this.$refs.imageEditorObj.updateShape(this.tempShapeSettings);
                }
                this.$refs.imageEditorObj.clearSelection(true);
                this.refreshToolbar('main');
            }
            break;
        case 'undo':
            if (this.currentToolbar === 'pen') {
                this.$refs.imageEditorObj.ej2Instances.freeHandDraw(false);
            }
            this.isTextEditing = false;
            this.$refs.imageEditorObj.undo();
            this.refreshToolbar('main');
            break;
        case 'redo':
            if (this.currentToolbar === 'pen') {
                this.$refs.imageEditorObj.ej2Instances.freeHandDraw(false);
            }
            this.isTextEditing = false;
            this.$refs.imageEditorObj.redo();
            this.refreshToolbar('main');
            break;
        case 'ok':
            this.isTextEditing = false;
            if (this.currentToolbar === 'main') {
                imageData = this.$refs.imageEditorObj.getImageData();
                canvas = document.createElement('canvas');
                canvas.width = imageData.width; canvas.height = imageData.height;
                canvas.getContext('2d').putImageData(imageData, 0, 0);
                (document.getElementById('previewImgContainer')).src = canvas.toDataURL();
                this.$refs.imageEditorObj.open(imageData);
                document.getElementById('image-editor-container').style.display = 'none';
                (document.getElementById('imagePreviewContainer')).style.display = 'block';
            } else {
                this.apply();
                this.refreshToolbar('main');
            }
            break;
        case 'cropandtransform':
            this.$refs.imageEditorObj.select('custom');
            this.refreshToolbar('crop');
            break;
        case 'rotateleft':
            this.$refs.imageEditorObj.rotate(-90);
            break;
        case 'rotateright':
            this.$refs.imageEditorObj.rotate(90);
            break;
        case 'addtext':
            this.$refs.imageEditorObj.drawText(dimension.x + (dimension.width / 2) - 65, dimension.y + (dimension.height / 2) - 15, 'Add Text',
                                    'Arial', 30, false, false, '#fff', true);
            this.isShapeSelected = true;
            this.refreshToolbar('text');
            break;
        case 'remove':
            if (isNullOrUndefined(this.activeObjIndex) && this.tempShapeSettings && this.tempShapeSettings.id) {
                this.activeObjIndex = this.tempShapeSettings.id;
            }
            if (this.isTextEditing) {
                this.tempShapeSettings = this.$refs.imageEditorObj.getShapeSetting(this.activeObjIndex);
                this.activeObjIndex = this.tempShapeSettings.id;
            }
            this.$refs.imageEditorObj.deleteShape(this.activeObjIndex);
            this.refreshToolbar('main');
            break;
        case 'edittext':
            this.isTextEditing = true;
            this.$refs.imageEditorObj.enableTextEditing();
            this.refreshToolbar('edittext');
            break;
        case 'addpen':
            this.$refs.imageEditorObj.ej2Instances.freeHandDraw(true);
            this.refreshToolbar('pen');
            break;
        case 'filters':
            this.refreshToolbar('filter');
            break;
        }
    },
    refreshToolbar(type, isEvent) {
       var toolbar = this.$refs.bottomToolbarInstance.ej2Instances;
        var items = []; let filterToolbar; var itemModel;
        var dimension = this.$refs.imageEditorObj.getImageDimension();
        var shapeSettings;
        document.getElementById('filter-toolbar').style.display = 'none';
        this.currentToolbar = type;
        switch (type) {
        case 'main':
            items = ['cropAndTransform', 'addText', 'shapes', 'addPen', 'filters'];
            break;
        case 'crop':
            items = ['rotateLeft', 'rotateRight'];
            break;
        case 'text':
        case 'edittext':
            items = ['back', 'fontColor', 'remove', 'editText'];
            break;
        case 'rectangle':
            items = ['back', 'fillColor', 'strokeColor', 'remove'];
            if (!isEvent) {
                this.$refs.imageEditorObj.drawRectangle(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50,
                                            200, 100, 2, '#fff', null, null, true);
                this.isShapeSelected = true;
            }
            break;
        case 'ellipse':
            items = ['back', 'fillColor', 'strokeColor', 'remove'];
            if (!isEvent) {
                this.$refs.imageEditorObj.drawEllipse(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50,
                                        100, 50, 2, '#fff', null, null, true);
                this.isShapeSelected = true;
            }
            break;
        case 'line':
            items = ['back', 'strokeColor', 'remove'];
            if (!isEvent) {
                this.$refs.imageEditorObj.drawLine(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50,
                                        dimension.x + (dimension.width / 2) + 100, dimension.y + (dimension.height / 2) + 50, 2, '#fff', true);
                this.isShapeSelected = true;
            }
            break;
        case 'pen':
        case 'freehanddraw':
            items = ['back', 'penStrokeColor', 'remove'];
            break;
        case 'filter':
            document.getElementById('filter-toolbar').style.display = 'block';
            this.onFilterToolbarCreated();
            items = ['default', 'chrome', 'cold', 'warm', 'grayscale', 'sepia', 'invert'];
            break;
        }
        for (var i = 0; i < toolbar.items.length; i++) {
            if (items.indexOf(toolbar.items[i].id) !== -1) {
                toolbar.items[i].visible = true;
                if (toolbar.items[i].id.toLowerCase() === 'edittext') {
                    if (type === 'edittext') {
                        toolbar.items[i].disabled = true;
                        setTimeout(function() {
                            document.querySelector('.e-textarea').focus();
                        }, 1);
                    } else {
                        toolbar.items[i].disabled = false;
                    }
                }
            } else {
                toolbar.items[i].visible = false;
            }
            if (toolbar.items[i].id === 'remove') {
                if (type === 'pen') {
                    toolbar.items[i].disabled = true;
                } else {
                    toolbar.items[i].disabled = false;
                }
            }
        }
        var enableUndo = this.$refs.imageEditorObj.canUndo();
        var enableRedo = this.$refs.imageEditorObj.canRedo();
        var topToolbar = this.$refs.topToolbarInstance.ej2Instances;
        for (let i = 0; i < topToolbar.items.length; i++) {
            if (topToolbar.items[i].id === 'undo') {
                topToolbar.items[i].disabled = !enableUndo;
            } else if (topToolbar.items[i].id === 'redo') {
                topToolbar.items[i].disabled = !enableRedo;
            } else if (topToolbar.items[i].id === 'ok') {
                if (this.currentToolbar === 'main') {
                    topToolbar.items[i].visible = true;
                    topToolbar.items[i].tooltipText = 'Save';
                    topToolbar.items[i].prefixIcon = 'e-icons e-save';
                } else if (this.currentToolbar === 'crop' || this.currentToolbar === 'filter') {
                    topToolbar.items[i].visible = true;
                    topToolbar.items[i].tooltipText = 'Apply';
                    topToolbar.items[i].prefixIcon = 'e-icons e-check-tick';
                } else {
                    topToolbar.items[i].visible = false;
                }
            
            } else if (topToolbar.items[i].id === 'cancel') {
                if (this.currentToolbar === 'main' || this.currentToolbar === 'crop') {
                    topToolbar.items[i].visible = true;
                } else {
                    topToolbar.items[i].visible = false;
                }
            }
        }
        setTimeout(() => {
            var toolbarArea = document.getElementById('bottom-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
            toolbarArea = document.getElementById('top-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        }, 1);
    },
    onFilterToolbarCreated() {
        var inMemoryCanvas = document.createElement('canvas');
        var inMemoryContext = inMemoryCanvas.getContext('2d');
        inMemoryCanvas.width = this.imageData.width; inMemoryCanvas.height = this.imageData.height;
        inMemoryContext.putImageData(this.imageData, 0, 0);
        this.updateFilterCanvas('_defaultCanvas', 'default', inMemoryCanvas);
        this.updateFilterCanvas('_chromeCanvas', 'chrome', inMemoryCanvas);
        this.updateFilterCanvas('_coldCanvas', 'cold', inMemoryCanvas);
        this.updateFilterCanvas('_warmCanvas', 'warm', inMemoryCanvas);
        this.updateFilterCanvas('_grayscaleCanvas', 'grayscale', inMemoryCanvas);
        this.updateFilterCanvas('_sepiaCanvas', 'sepia', inMemoryCanvas);
        this.updateFilterCanvas('_invertCanvas', 'invert', inMemoryCanvas);
    },
    updateFilterCanvas(selector, type, inMemoryCanvas) {
        var filter = document.querySelector('#imageEditor' + selector);
        if (filter) {
            let ctx = filter.getContext('2d');
            ctx = filter.getContext('2d');
            filter.style.width = '100px'; filter.style.height = '100px';
            ctx.filter = this.$refs.imageEditorObj.getImageFilter(this.toPascalCase(type));
            ctx.drawImage(inMemoryCanvas, 0, 0, 300, 150);
        }
    },
    toPascalCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    },
    fileOpened() {
        this.imageData = this.$refs.imageEditorObj.getImageData();
    },
    onIECreated() {
        var image = document.getElementById('previewImgContainer');
        if (Browser.isDevice && image) {
            image.src = 'src/image-editor/images/flower.png';
        }
        document.addEventListener('keydown', this.keyDownEventHandler.bind(this));
        document.getElementById('image-editor-container').addEventListener('dblclick', this.doubleClickEvent.bind(this));
    },
    shapeChanging: function (args) {
        if (args.action === 'select') {
            this.isShapeSelected = this.isShapeSelected ? false : true;
            this.updateToolbar(args, true);
        } else if (args.action === 'insert') {
            this.activeObjIndex = args.currentShapeSettings.id;
            this.tempShapeSettings = args.currentShapeSettings;
        }
    },
    shapeChange: function (args) {
        if (args.action === 'apply' && !this.isShapeCustomizing) {
            this.isTextEditing = false;
            setTimeout(() => {
                this.refreshToolbar('main');
            }, 1);
        }
    },
    click() {
        if (this.currentToolbar === 'filter') {
            this.refreshToolbar('main');
        }
    },
    updateToolbar(args, isEvent) {
        const type = args.currentShapeSettings.type.toLowerCase();
        this.refreshToolbar(type, isEvent);
        if (isEvent) {
            this.tempShapeSettings = args.currentShapeSettings;
            this.activeObjIndex = this.tempShapeSettings.id;
        }
        setTimeout(() => {
            var selFillElem = this.$refs.fillColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
            var selStrokeElem = this.$refs.strokeColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
            var selTextStrokeElem = this.$refs.fontColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
            var selPenStrokeElem =  this.$refs.penColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
            if (selFillElem && (type === 'rectangle' || type === 'ellipse')) {
                if (args.currentShapeSettings.fillColor === '') {
                    selFillElem.classList.add('e-nocolor-item');
                } else {
                    selFillElem.classList.remove('e-nocolor-item');
                    selFillElem.style.background = args.currentShapeSettings.fillColor;
                }
                if (document.querySelector('#' + 'imageEditor_shapeFill')) {
                    this.$refs.fillColorInstance.ej2Instances.value = args.currentShapeSettings.fillColor;
                }
            }
            if (selStrokeElem && (type === 'rectangle' || type === 'ellipse' || type === 'line')) {
                selStrokeElem.style.backgroundColor = args.currentShapeSettings.strokeColor;
                (selStrokeElem.children[0]).style.backgroundColor = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_shapeStroke')) {
                    this.$refs.strokeColorInstance.ej2Instances.value = args.currentShapeSettings.strokeColor;
                }
            }
            if (selTextStrokeElem && type === 'text') {
                selTextStrokeElem.style.backgroundColor = args.currentShapeSettings.color;
                (selTextStrokeElem.children[0]).style.backgroundColor = args.currentShapeSettings.color;
                if (document.querySelector('#' + 'imageEditor_textFont')) {
                    this.$refs.fontColorInstance.ej2Instances.value = args.currentShapeSettings.color;
                }
            }
            if (selPenStrokeElem && type === 'freehanddraw') {
                selPenStrokeElem.style.backgroundColor = args.currentShapeSettings.strokeColor;
                (selPenStrokeElem.children[0]).style.backgroundColor = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_penStroke')) {
                    penColorInstance.current.value = args.currentShapeSettings.strokeColor;
                }
            }
        }, 10);
    },
    apply() {
        if (this.currentToolbar === 'crop') {
            this.$refs.imageEditorObj.crop();
        } else if (this.currentToolbar === 'pen') {
            if (this.activeObjIndex && this.activeObjIndex.split('_')[0] === 'pen') {
                this.tempShapeSettings = this.$refs.imageEditorObj.ej2Instances.getShapeSetting(this.activeObjIndex);
            } else {
                var shapeSettings = this.$refs.imageEditorObj.ej2Instances.getShapeSettings();
                if (shapeSettings.length > 0) {
                    this.tempShapeSettings = shapeSettings[shapeSettings.length - 1].id.split('_')[0] === 'pen' ? shapeSettings[shapeSettings.length - 1] : null;
                    if (this.tempShapeSettings && this.tempShapeSettings.id) {
                        this.$refs.imageEditorObj.selectShape(this.tempShapeSettings.id);
                    } else {
                        this.$refs.imageEditorObj.ej2Instances.freeHandDraw(false);
                    }
                } else {
                    this.$refs.imageEditorObj.ej2Instances.freeHandDraw(false);
                    return;
                }
            }
            if (this.tempShapeSettings && this.tempShapeSettings.id) {
                this.$refs.imageEditorObj.updateShape(this.tempShapeSettings);
            }
        } else if (this.currentToolbar === 'freehanddraw' && this.tempShapeSettings && this.tempShapeSettings.id) {
            this.$refs.imageEditorObj.ej2Instances.updateShape(this.tempShapeSettings);
        } else if (this.currentToolbar !== 'filter' && this.activeObjIndex) {
            this.tempShapeSettings = this.$refs.imageEditorObj.ej2Instances.getShapeSetting(this.activeObjIndex);
            this.$refs.imageEditorObj.ej2Instances.updateShape(this.tempShapeSettings);
        }
        this.tempShapeSettings = null; this.activeObjIndex = null;
    },
    penColorChanged: function(args) {
       if (this.$refs.imageEditorObj.disabled) {
            return;
        }
        var selElem = this.$refs.penColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
        selElem.style.backgroundColor = args.currentValue.rgba;
        if (this.tempShapeSettings && this.tempShapeSettings.id && this.tempShapeSettings.id.split('_')[0] === 'pen') {
            var shapeSetting = {id: this.tempShapeSettings.id, type: "FreehandDraw",
                startX: this.tempShapeSettings.startX, startY: this.tempShapeSettings.startY,
                strokeColor: args.currentValue.hex, strokeWidth: this.tempShapeSettings.strokeWidth,
                opacity: this.tempShapeSettings.opacity, points: this.tempShapeSettings.points };
            this.$refs.imageEditorObj.updateShape(shapeSetting, true);
            this.tempShapeSettings.strokeColor = args.currentValue.hex;
            this.isShapeSelected = true;
        } else {
            var shapeSetting = {id: null, type: "FreehandDraw", startX: null, startY: null,
                strokeColor: args.currentValue.hex};
            this.$refs.imageEditorObj.updateShape(shapeSetting);
        }
    },
    fontColorChanged: function(args) {
        if (this.$refs.imageEditorObj.disabled) {
                return;
        }
        var selElem = this.$refs.fontColorInstance.ej2Instances.element.nextElementSibling.querySelector('.e-selected-color');
        selElem.style.backgroundColor = args.currentValue.rgba;
        this.isShapeCustomizing = true;
        var shapeSetting = this.$refs.imageEditorObj.getShapeSetting(this.activeObjIndex);
        shapeSetting.color = args.value;
        this.$refs.imageEditorObj.updateShape(shapeSetting, true);
        this.tempShapeSettings.color = args.value;
        this.isShapeSelected = true;
        if (this.isTextEditing) {
            this.$refs.imageEditorObj.enableTextEditing();
        }
    },
    editClicked() {
        document.getElementById('imagePreviewContainer').style.display = 'none';
        document.getElementById('image-editor-container').style.display = 'block';
        this.$refs.imageEditorObj.open((document.getElementById('previewImgContainer')).src);
        var toolbarArea = document.getElementById('top-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        toolbarArea = document.getElementById('bottom-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        this.refreshToolbar('main');
    },
    keyDownEventHandler: function(e) {
        if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
            e.preventDefault();
        }
        switch (e.key) {
        case (e.ctrlKey && 's'):
            this.$refs.imageEditorObj.export();
            break;
        case (e.ctrlKey && 'z'):
            this.isTextEditing = false;
            this.refreshToolbar('main');
            break;
        case (e.ctrlKey && 'y'):
            this.isTextEditing = false;
            this.refreshToolbar('main');
            break;
        case 'Delete':
            if (isNullOrUndefined(this.activeObjIndex) && this.tempShapeSettings && this.tempShapeSettings.id) {
                this.activeObjIndex = this.tempShapeSettings.id;
            }
            if (this.activeObjIndex) {this.$refs.imageEditorObj.deleteShape(this.activeObjIndex); }
            this.refreshToolbar('main');
            break;
        case 'Escape':
            if (this.currentToolbar === 'crop') {
                this.$refs.imageEditorObj.clearSelection(true);
                this.refreshToolbar('main');
            }
            break;
        case 'Enter':
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!(e.target).closest('.e-textarea')) {
                this.apply();
                this.refreshToolbar('main');
            }
            break;
        }
    },
    doubleClickEvent: function(e) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (e.type === 'dblclick' && (e.target).closest('.e-textarea')) {
            this.isTextEditing = true;
        }
    }
  },
  computed: {
    themeValue: {
      get: function () {
        return this.theme;
      },
      set: function (theme) {
        this.theme = theme;
      },
    },
  }
};
</script>