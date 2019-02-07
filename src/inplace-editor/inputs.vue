<template>
<div class="control-sections" style="overflow:hidden;">
    <div class="col-lg-8 control-section inplace-control-section input-layout">
        <div class="control_wrapper">
            <table>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                        NumericTextBox </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor id="numericTextBoxEle" mode="Inline" type="Numeric" value="$100.00" :model="numericTextBoxModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                        MaskedTextBox </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor id="maskedTextBoxEle" mode="Inline" type="Mask" value="012-345-6789" :model="maskedTextBoxModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400"> ColorPicker
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor id="colorPickerEle" mode="Inline" type="Color" value="#008000ff" actionOnBlur="Submit">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400"> Slider
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor id="sliderEle" mode="Inline" type="Slider" value="200" :model="sliderModel" :popupSettings="popupSettings">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-lg-4 property-section" id="inputProperty">
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
        </table>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the usage of input controls such as Numeric, MaskEdit, ColorPicker, and Slider. Click on the dotted input element to switch to the
            editable state of the corresponding integrated component.
        </p>
    </div>
    <div id="description">
        <p>
            This sample illustrates the way to integrate input components with the <code>In-place Editor</code> control. The
            applicable types of components are:
        </p>
        <p>
            <ul>
                <li>
                    <code>Numeric</code>
                </li>
                <li>
                    <code>MaskEdit</code>
                </li>
                <li>
                    <code>ColorPicker</code>
                </li>
                <li>
                    <code>Slider</code>
                </li>
            </ul>
        </p>
        <p>
            The above components and their features are editable in place and can be customized with the model
            properties of the specific component.
        </p>
        <p>
            More information on the <code>In-place Editor</code> instantiation can be found in the <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/inplace-editor/getting-started/">
                documentation section</a>.
        </p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { InPlaceEditorPlugin, ColorPicker, Slider } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
        numericTextBoxModel: {
            format: 'c2',
            value: 100,
            placeholder: 'Currency format'
        },
        maskedTextBoxModel: {
            mask: '000-000-0000'
        },
        sliderModel: {
            width: 150,
            min: 100,
            max: 1000,
            value: 200,
            cssClass: 'e-slide-custom',
            step: 100,
            ticks: { placement: 'Before', largeStep: 200, smallStep: 100, showSmallTicks: true  },
        },
        popupSettings: {
            width: 200
        },
        placeFields: { text: 'mode', value: 'id' },
        dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        dataValue: 'inline'
    };
  },
  mounted: function(){
        this.numericObj = document.getElementById('numericTextBoxEle').ej2_instances[0];
        this.maskedObj = document.getElementById('maskedTextBoxEle').ej2_instances[0];
        this.colorPickerObj = document.getElementById('colorPickerEle').ej2_instances[0];
        this.sliderObj = document.getElementById('sliderEle').ej2_instances[0];
  },
  methods: {
        changeEditorMode: function(args) {
           var editMode = this.$refs.editorMode.ej2Instances.value;
           this.numericObj.mode = editMode;
           this.maskedObj.mode = editMode;
           this.colorPickerObj.mode = editMode;
           this.sliderObj.mode = editMode;
           this.numericObj.dataBind();
           this.maskedObj.dataBind();
           this.colorPickerObj.dataBind();
           this.sliderObj.dataBind();
        }
  },
  provide:{
        "inplaceeditor":[ColorPicker, Slider]
  }
});
</script>
<style>

.inplace-control-section.input-layout .control_wrapper .e-inplace-editor:not(#colorPickerEle) {
    width: inherit;
}

.inplace-control-section.input-layout .control_wrapper .e-inplace-editor {
    min-width: 150px;
}

.inplace-control-section.input-layout .control_wrapper {
    margin: auto;
    max-width: 400px;
}

.inplace-control-section.input-layout .control_wrapper table td {
    width: 200px;
    height: 100px;
}

.inplace-control-section.input-layout .control_wrapper table td .control-label {
    margin-bottom: 0px;
}

@media (max-width: 768px) {
    .inplace-control-section.input-layout .control_wrapper table td {
        width: 50%;
        padding-right: 30px;
    }
}

.e-inplace-editor-tip .e-editable-component {
    width: 150px;
}

.inplace-control-section.input-layout  {
    width: 70%;
    float: left;
}

#inputProperty {
    width: 30%;
    float: left;
}

#inputProperty table td {
    width: 50%;
}

#inputProperty .property-panel-table div {
    padding-left: 10px;
    padding-top: 10px;
}

</style>