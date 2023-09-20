<template>
    <div class="control-section e-tbar-section-popup">
        <div class="e-sample-resize-container" style="margin-top: 100px; width: 100%; max-width: 100%;">
        <ejs-toolbar overflowMode='Popup' cssClass='template'>
            <e-items>
            <e-item prefixIcon='e-icons e-folder' tooltipText='Open File' text='Open' showTextOn='Overflow' align="Left"></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-first-page' tooltipText='Show first page' text='First' showTextOn='Overflow' align="Left" disabled="true"></e-item>
            <e-item prefixIcon='e-icons e-chevron-left' tooltipText='Show previous page' text='Previous' showTextOn='Overflow' align="Left" disabled="true"></e-item>
            <e-item prefixIcon='e-icons e-chevron-right' tooltipText='Show next page' text='Next' showTextOn='Overflow' align="Left"></e-item>
            <e-item prefixIcon='e-icons e-last-page' tooltipText='Show last page' text='Last' showTextOn='Overflow' align="Left"></e-item>
            <e-item :template="'numericTemplate'" cssClass="page-count" align="Left" ></e-item>
            <template v-slot:numericTemplate>
                <div><ejs-numerictextbox width="50px" value="0" min="0" max="100" :showSpinButton= false format="###.##"></ejs-numerictextbox><span class="total-page">of 100</span></div>            
            </template>            
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-zoom-out' tooltipText='Zoom-Out' text='Zoom-Out' showTextOn='Overflow' align="Left"></e-item>
            <e-item prefixIcon='e-icons e-zoom-in' tooltipText='Zoom-In' text='Zoom-In' showTextOn='Overflow' align="Left"></e-item>
            <e-item :template="'ComboTemplate'" cssClass="percentage "></e-item>
            <template v-slot:ComboTemplate>
                <ejs-combobox  width="80px" popupWidth="80px" value="100%" :showClearButton=false :dataSource="zoomData"></ejs-combobox >            
            </template>
            <e-item type='Separator'></e-item>            
            <e-item prefixIcon='e-icons e-mouse-pointer' tooltipText='Text selection tool' text='Selection' showTextOn='Overflow' align="Left"></e-item>
            <e-item prefixIcon='e-icons e-pan' tooltipText='Pan mode' text='Pan mode' showTextOn='Overflow' align="Left"></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo' text='Undo' showTextOn='Overflow' align="Left"></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo' text='Redo' showTextOn='Overflow' align="Left"></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-pv-comment-icon' tooltipText='Add Comments' text='Add Comments' showTextOn='Overflow' align="Left"></e-item>
            <e-item type='Separator'></e-item>
            <e-item text='Submit Form' align="Left"></e-item>
            <e-item :template="'searchTemplate'" cssClass="find" align="Right"></e-item>
            <template v-slot:searchTemplate>
                <div class="e-input-group e-float-icon-left">
                    <span class="e-icons e-search e-input-group-icon"></span>
                    <div class="e-input-in-wrap">
                        <input class="e-input" name="input" type="text" placeholder="Find Text" />
                    </div>
                </div>          
            </template>
            <e-item prefixIcon='e-icons e-annotation-edit' tooltipText='Edit Annotations' text='Edit' showTextOn='Overflow' align="Right"></e-item>
            <e-item prefixIcon='e-icons e-print' tooltipText='Print File' text='Print' showTextOn='Overflow' align="Right"></e-item>
            <e-item prefixIcon='e-icons e-download' tooltipText='Download' text='Download' showTextOn='Overflow' align="Right"></e-item>
          </e-items>
        </ejs-toolbar>
        <div id="action-description">
            <p>This sample demonstrates customization of the Vue Toolbar.</p>
        </div>
        <div id="description">
            <p>
                In this demo, the Vue Toolbar showcases customization options for toolbar items using the <code>template</code> property. The Toolbar items are arranged using the <code>align</code> property.
            </p>
            <p>
                To add icons to the toolbar items, the <code>prefixIcon</code> property is used. When the <code>showTextOn</code> property's is set to <code>overflow</code>, the Toolbar items' <code>text</code> that overflows will be visible.
            </p>
            <p>
                In this demo, <code>NumericTextBox</code>, <code>ComboBox</code> and <code>TextBox</code> are used inside the Toolbar .
            </p>
        </div>
    </div>
    </div>
</template>
<style>
.template.e-toolbar .total-page {
    padding-left: 4px;
    cursor: default;
    font-size:14px;
    vertical-align: middle;
}
.template.e-toolbar .e-toolbar-pop .page-count,
.template.e-toolbar .e-toolbar-pop .selection-tool,
.template.e-toolbar .e-toolbar-pop .pan-mode,    
.template.e-toolbar .e-toolbar-pop .percentage,
.template.e-toolbar .e-toolbar-pop .find {
    display: none;
}
.template.e-toolbar .e-toolbar-items .e-toolbar-item:not(.e-separator) {
    padding-left: 2px;
    line-height: 1;
}
</style>
<script>

import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    components: {
        'ejs-toolbar': ToolbarComponent,
        'ejs-combobox': ComboBoxComponent,
        'ejs-textbox': TextBoxComponent,
        'ejs-numerictextbox': NumericTextBoxComponent,
        'e-item': ItemDirective,
        'e-items': ItemsDirective
    },
  data () {
    return {
        zoomData: ["25%", "50%", "75%", "100%"]
    }
  },
  methods: {}
}
</script>