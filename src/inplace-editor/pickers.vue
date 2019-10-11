<template>
<div class="control-sections" style="overflow:hidden;">
    <div class="col-lg-8 control-section inplace-control-section pickers-layout">
        <div class="control_wrapper form-horizontal">
            <table>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400"> DatePicker
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="dateObj" id="datePickerEle" mode="Inline" type="Date" :value="datePickerValue" :model="datePickerModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400"> TimePicker
                        </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="timeObj" id="timePickerEle" mode="Inline" type="Time" :value="timePickerValue" :model="timePickerModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                        DateTimePicker </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="dateTimeObj" id="dateTimePickerEle" mode="Inline" type="DateTime" :value="dateTimePickerValue" :model="dateTimePickerModel">
                        </ejs-inplaceeditor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="control-label" style="text-align: left;font-size: 14px;font-weight: 400">
                        DateRangePicker </label>
                    </td>
                    <td>
                        <ejs-inplaceeditor ref="dateRangeObj" id="dateRangePickerEle" mode="Inline" type="DateRange" :value="dateRangePickerValue" :model="dateRangePickerModel" :created='created'>
                        </ejs-inplaceeditor>
                        <div id='dateRangePickerEle'></div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-lg-4 property-section" id="pickerProperty">
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
            This sample demonstrates the usage of picker components such as Date, Time, DateTime, and DateRange.
            Click on the dotted input element to switch to the editable state of the corresponding integrated component.
        </p>
    </div>
    <div id="description">
        <p>
            This sample illustrates the way to integrate picker components with the <code>In-place Editor</code> control. The
            applicable types of 
            components are:
        </p>
        <p>
            <ul>
                <li>
                    <code>DatePicker</code>
                </li>
                <li>
                    <code>TimePicker</code>
                </li>
                <li>
                    <code>DateTimePicker</code>
                </li>
                <li>
                    <code>DateRangePicker</code>
                </li>
            </ul>
        </p>
        <p>
            The above components and their features are editable in place and can be customized with the model
            properties
            of the specific component.
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
import { InPlaceEditorPlugin, TimePicker, DateRangePicker } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
        datePickerValue: new Date('5/23/2017'),
        datePickerModel: {
            placeholder: 'Select a date'
        },
        timePickerValue: new Date('5/23/2017 12:00 PM'),
        timePickerModel: {
            placeholder: 'Select a time',
            value: new Date()
        },
        dateTimePickerValue: new Date('5/23/2017 12:00 PM'),
        dateTimePickerModel: {
            placeholder: 'Select a date and time'
        },
        dateRangePickerValue: [new Date('5/23/2017'), new Date('7/5/2017')],
        dateRangePickerModel: {
            placeholder: 'Select a date range',
        },
        placeFields: { text: 'mode', value: 'id' },
        dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        dataValue: 'inline'
    };
  },
  mounted: function(){
      this.dateObj = this.$refs.dateObj.ej2Instances;
      this.timeObj = this.$refs.timeObj.ej2Instances;
      this.dateTimeObj = this.$refs.dateTimeObj.ej2Instances;
      this.dateRangeObj = this.$refs.dateRangeObj.ej2Instances;
      this.editorMode = this.$refs.editorMode.ej2Instances;
  },
  methods: {
        changeEditorMode: function(args) {
           var editMode = this.$refs.editorMode.ej2Instances.text;
           this.dateObj.mode = editMode;
           this.timeObj.mode = editMode;
           this.dateTimeObj.mode = editMode;
           this.dateRangeObj.mode = editMode;
        },
        created: function() {
            if (document.getElementById("right-pane")) {
                document.getElementById("right-pane").addEventListener("scroll", this.onScroll);
            }
        },
        onScroll: function() {
            if (this.editorMode.text === 'Inline') { return; }
            if (this.$refs.dateObj && this.$refs.dateObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.dateObj.enableEditMode = false;
            }
            if (this.$refs.timeObj && this.$refs.timeObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.timeObj.enableEditMode = false;
            }
            if (this.$refs.dateTimeObj && this.$refs.dateTimeObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.dateTimeObj.enableEditMode = false;
            }
            if (this.$refs.dateRangeObj && this.$refs.dateRangeObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.dateRangeObj.enableEditMode = false;
            }
        }
  },
  provide:{
        "inplaceeditor":[TimePicker, DateRangePicker]
  }
});
</script>
<style>

.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide,
.inplace-control-section.pickers-layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide {
display: block;
visibility: hidden;
}

/* custom code start */
.inplace-control-section.pickers-layout .control_wrapper {
    margin: auto;
    max-width: 400px;
    border: none;
}

.inplace-control-section.pickers-layout .control_wrapper table {
    margin: auto;
}

.inplace-control-section.pickers-layout .control_wrapper table td {
    width: 200px;
    height: 100px;
}

.inplace-control-section.pickers-layout .control_wrapper table td .control-label {
    margin-bottom: 0px;
}
/* custom code end */

#pickerProperty table td {
    width: 50%;
}

#pickerProperty .property-panel-table div {
    padding-left: 10px;
    padding-top: 10px;
}

@media (max-width: 768px) {
    .inplace-control-section.pickers-layout {
        padding-left: 0;
        padding-right: 0;
    }

    .inplace-control-section .control_wrapper table tr td:nth-child(1) {
        width: 130px;
    }

    .inplace-control-section .control_wrapper table tr td:nth-child(2) {
        width: 200px;
    }
}
</style>