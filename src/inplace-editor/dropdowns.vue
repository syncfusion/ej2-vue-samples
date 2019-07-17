<template>
<div class="control-sections" style="overflow:hidden;">
    <div class="col-lg-8 control-section inplace-control-section drop-down-layout">
        <div class="control_wrapper">
            <table>
                <tr>
                    <td>
                        <label class="control-label">
                        DropDownList </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" value="Canada" :model="dropdownModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label">
                        AutoComplete </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="autoObj" id="autoCompleteEle" mode="Inline" type="AutoComplete" value="Australia" :model="autoCompleteModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label"> ComboBox
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="comboObbj" id="comboBoxEle" mode="Inline" type="ComboBox" value="Finland" :model="comboBoxModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label"> MultiSelect
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="multiObj" id="multiSelectEle" mode="Inline" type="MultiSelect" :value="multiValue" :model="multiSelectModel" :popupSettings="popupSettings" :created='created'>
                        </ejs-inplaceeditor>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-lg-4 property-section" id="dropdownProperty">
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
            This sample demonstrates the usage of drop-down components such as AutoComplete, ComboBox, DropDownList, and MultiSelect. Click on the dotted input element to switch to the
            editable state of the corresponding integrated component.
        </p>
    </div>
    <div id="description">
       <p>
            This sample illustrates the way to integrate drop-down components with <code>In-place Editor</code>. The
            applicable types of components are:
        </p>
        <p>
            <ul>
                <li>
                    <code>DropDownList</code>
                </li>
                <li>
                    <code>AutoComplete</code>
                </li>
                <li>
                    <code>ComboBox</code>
                </li>
                <li>
                    <code>MultiSelect</code>
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
import { InPlaceEditorPlugin, AutoComplete, MultiSelect, ComboBox } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    let dropdownData = ['Australia', 'Bermuda', 'Canada', 'Cameroon', 'Denmark', 'Finland', 'Greenland', 'Poland'];
    return {
        multiValue: ['Canada', 'Bermuda'],
        dropdownModel: {
            dataSource: dropdownData,
            placeholder: 'Find a country'
        },
        autoCompleteModel: {
            dataSource: dropdownData,
            placeholder: ' Type to search country'
        },
        comboBoxModel: {
            dataSource: dropdownData,
            placeholder: 'Find a country'
        },
        multiSelectModel: {
            dataSource: dropdownData,
            placeholder: 'Choose the countries',
            mode: 'Box'
        },
        popupSettings: {
            model: { width: 'auto' }
        },
        placeFields: { text: 'mode', value: 'id' },
        dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        dataValue: 'inline'
    };
  },
  mounted: function(){
      this.dropObj = this.$refs.dropObj.ej2Instances;
      this.autoObj = this.$refs.autoObj.ej2Instances;
      this.comboObbj = this.$refs.comboObbj.ej2Instances;
      this.multiObj = this.$refs.multiObj.ej2Instances;
      this.editorMode = this.$refs.editorMode.ej2Instances;
  },
  methods: {
        changeEditorMode: function(args) {
           var editMode = this.$refs.editorMode.ej2Instances.text;
           this.dropObj.mode = editMode;
           this.autoObj.mode = editMode;
           this.comboObbj.mode = editMode;
           this.multiObj.mode = editMode;
           this.dropObj.dataBind();
           this.autoObj.dataBind();
           this.comboObbj.dataBind();
           this.multiObj.dataBind();
        },
        created: function() {
            if (document.getElementById("right-pane")) {
                document.getElementById("right-pane").addEventListener("scroll", this.onScroll);
            }
        },
        onScroll: function() {
            if (this.editorMode.text === 'Inline') { return; }
            if (this.dropObj && this.dropObj.element.querySelectorAll('.e-editable-open').length > 0) {
                this.dropObj.enableEditMode = false;
            }
            if (this.autoObj && this.autoObj.element.querySelectorAll('.e-editable-open').length > 0) {
                this.autoObj.enableEditMode = false;
            }
            if (this.comboObbj && this.comboObbj.element.querySelectorAll('.e-editable-open').length > 0) {
                this.comboObbj.enableEditMode = false;
            }
            if (this.multiObj && this.multiObj.element.querySelectorAll('.e-editable-open').length > 0) {
                this.multiObj.enableEditMode = false;
            }
        }
  },
  provide:{
        "inplaceeditor":[AutoComplete, MultiSelect, ComboBox]
  }
});
</script>
<style>

.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide,
.inplace-control-section.drop-down-layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide {
display: block;
visibility: hidden;
}

/* custom code start */
.inplace-control-section.drop-down-layout .control_wrapper  label {
    padding: 15px;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0px;
}

.inplace-control-section.drop-down-layout .control_wrapper {
    margin: auto;
    max-width: 400px;
}

.inplace-control-section.drop-down-layout .control_wrapper table {
    margin: auto;
}

.inplace-control-section.drop-down-layout .control_wrapper table td {
    width: 200px;
    height: 100px;
}
/* custom code end */

#dropdownProperty table td {
    width: 50%;
}

#dropdownProperty .property-panel-table div {
    padding-left: 10px;
    padding-top: 10px;
}
</style>