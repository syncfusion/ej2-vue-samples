<template>
<div class="control-sections" style="overflow:hidden;">
<div class="col-lg-8 control-section inplace-control-section default_layout">
    <div class="control_wrapper">
        <table>
            <tr>
                <td>
                    <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                    TextBox </label>
                </td>
                <td>
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew" submitOnEnter= "true" :model="textModel" :popupSettings= "textPopupSettings">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                    NumericTextBox </label>
                </td>
                <td>
                    <ejs-inplaceeditor ref="numericObj" id="numericTextBoxEle" mode="Inline" type="Numeric" value="$100.00" :model="numericTextBoxModel">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                    MaskedTextBox </label>
                </td>
                <td>
                    <ejs-inplaceeditor ref="maskedObj" id="maskedTextBoxEle" mode="Inline" type="Mask" value="012-345-6789" :model="maskedTextBoxModel" :created='created'>
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="col-lg-4 property-section" id="defaultProperty">
    <table id="property" title="Properties">
        <tr>
            <td>
                <div>Mode</div>
            </td>
            <td>
                <div>
                    <ejs-dropdownlist ref="editorMode" id="editorMode" class="form-control" width='90%' :dataSource='dataPlace' :change='changeEditorMode' :value='dataValue' :fields='placeFields'>
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>Editable On</div>
            </td>
            <td>
                <div>
                    <ejs-dropdownlist ref="editableOn" id="editableon" class="form-control" width='90%' :dataSource='editableData' :change='onEditableOn' :value='editableValue' :fields='editableFields'>
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>Show Buttons</div>
            </td>
            <td>
                <div>
                    <ejs-checkbox ref="checkObj1" id="showbuttons" checked=true :change="onChange" :labelPosition="labelPosition"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>Disable</div>
            </td>
            <td>
                <div>
                    <ejs-checkbox ref="checkObj2" id="editorEnable" :change="onChangeEnable" :labelPosition="labelPosition"></ejs-checkbox>
                </div>
            </td>
        </tr>
    </table>
</div>
<div id="action-description">
    <p>
        This sample demonstrates the default functionalities of the In-place Editor control. Click on the dotted input
        element to
        switch to the editable state and save or cancel it by clicking the actions buttons.
    </p>
</div>
<div id="description">
    <p>
        The <code>In-place Editor</code> component is used to edit values in place and update them to the server.
    </p>
    <p>
        <code>In-place Editor</code> modes can be switched by selecting the appropriate values provided in a drop-down.
        The applicable editor positions are as follows:
    </p>
    <p>
        <ul>
            <li>
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#mode">
                    Inline</a>
            </li>
            <li>
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#mode">
                    Pop-up</a>
            </li>
        </ul>
    </p>
    <p>
        The edit on modes of In-place editor can be switched by selecting the appropriate values provided in a
        drop-down. The applicable modes are as follows:
        <ul>
            <li>Click - Editor opens the edit input with single click of textbox.</li>
            <li>DblClick - Editor opens the edit input with double click of textbox.</li>
            <li>EditIconClick - Edit mode can be open with the use of edit icon only which is visible on hover of textbox.</li>
        </ul>
    </p>
    <p>
        The Save and Cancel buttons of the <code>In-place Editor</code> control can be shown or hidden by switching the Show Button check box
        state. If the
        action buttons are hidden, then you can save the data by clicking outside the target or by pressing the Enter
        key.
        You can cancel the edit request by pressing the Esc key.
    </p>
    <p>
        More information on the <code>In-place Editor</code> instantiation can be found in the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/inplace-editor/getting-started/">
            documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
        textModel: {
            placeholder: 'Enter employee name'
        },
        textPopupSettings: {
            title: 'Enter Employee Name'
        },
        numericTextBoxModel: {
            format: 'c2',
            value: 100,
            placeholder: 'Currency format'
        },
        maskedTextBoxModel: {
            mask: '000-000-0000'
        },
        placeFields: { text: 'mode', value: 'id' },
        dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        dataValue: 'inline',
        editableFields: { text: 'editable', value: 'id' },
        editableData: [{ id: 'Click', editable: 'Click' }, { id: 'DblClick', editable: 'Double Click' }, { id: 'EditIconClick', editable: 'Edit Icon Click' }],
        editableValue: 'Click',
        labelPosition: 'Before'
    };
  },
  mounted: function(){
    this.editObj = this.$refs.editObj.ej2Instances;
    this.numericObj = this.$refs.numericObj.ej2Instances;
    this.maskedObj = this.$refs.maskedObj.ej2Instances;
    this.editorMode = this.$refs.editorMode.ej2Instances;
  },
  methods: {
        changeEditorMode: function(args) {
           var editMode = this.$refs.editorMode.ej2Instances.text;
           this.editObj.mode = this.numericObj.mode = this.maskedObj.mode = editMode;
        },
        onEditableOn: function(args) {
           var editableOn = this.$refs.editableOn.ej2Instances.value;
           this.editObj.editableOn = this.numericObj.editableOn = this.maskedObj.editableOn = editableOn;
        },
        onChange: function(args) {            
            this.$refs.checkObj1.ej2Instances.checked ? this.editObj.showButtons = this.numericObj.showButtons = this.maskedObj.showButtons = true : this.editObj.showButtons = this.numericObj.showButtons = this.maskedObj.showButtons = false;
        },
        onChangeEnable: function(args) {            
            this.$refs.checkObj2.ej2Instances.checked ? this.editObj.disabled = this.numericObj.disabled = this.maskedObj.disabled = true : this.editObj.disabled = this.numericObj.disabled = this.maskedObj.disabled = false;
        },
        created: function() {
            if (document.getElementById("right-pane")) {
                document.getElementById("right-pane").addEventListener("scroll", this.onScroll);
            }
        },
        onScroll: function() {
            if (this.editorMode.text === 'Inline') { return; }
            if (this.$refs.editObj && this.$refs.editObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.editObj.enableEditMode = false;
            }
            if (this.$refs.numericObj && this.$refs.numericObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.numericObj.enableEditMode = false;
            }
            if (this.$refs.maskedObj && this.$refs.maskedObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.maskedObj.enableEditMode = false;
            }
        }
    },
});
</script>
<style>

.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide,
.inplace-control-section.default_layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide {
display: block;
visibility: hidden;
}

/* custom code start */
.inplace-control-section.default_layout .control_wrapper {
    width: 100%;
    max-width: 400px;
    margin: auto;
    border: none;
}

.inplace-control-section.default_layout .control-wrapper {
    width: 100%;
}

.inplace-control-section.default_layout .control_wrapper table td {
    width: 200px;
    height: 100px;
}
/* custom code end */

.inplace-control-section.default_layout .control_wrapper .control-center {
    text-align: center;
}

.inplace-control-section.default_layout .control_wrapper table {
    margin: auto;
}

.inplace-control-section.default_layout .e-inplaceeditor {
    height: auto;
}

#defaultProperty table td {
    width: 50%;
}

@media (max-width: 1200px) {
    .inplace-control-section.default_layout  {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .inplace-control-section .control_wrapper table tr td:nth-child(1) {
        width: 130px;
    }

    .inplace-control-section .control_wrapper table tr td:nth-child(2) {
        width: 200px;
    }
}

#defaultProperty .property-panel-table div {
    padding-left: 10px;
    padding-top: 10px;
}

</style>