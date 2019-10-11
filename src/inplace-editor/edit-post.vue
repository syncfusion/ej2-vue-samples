<template>
<div class="control-sections" style="overflow:hidden;">
    <div class="col-lg-8 control-section inplace-editor-control-section form-layout" id='inplace-editor-control'>
        <div class="content-wrapper" style="margin-bottom: 25px">
            <div id="confirmation">
                <form id="formId" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-6 control-label" style="text-align: left;font-size: 14px;">
                        Title</label>
                        <ejs-inplaceeditor ref="titleObj" id="inplace_title_editor" data-underline='false' mode="Inline" emptyText="Enter your question title" name="Title" value="Succinctly E-Book about TypeScript" :validationRules="textValidationRules" :model="textModel" >
                        </ejs-inplaceeditor>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-6 control-label" style="text-align: left;font-size: 14px;">
                        Comments</label>
                        <ejs-inplaceeditor ref="rteObj" id="inplace_comment_editor" data-underline='false' mode="Inline" editableOn= "EditIconClick" submitOnEnter="false" type="RTE" emptyText="Enter your comment" name="rte" value="The extensive adoption of JavaScript for application development, and the ability to use HTML and JavaScript to create Windows Store apps, has made JavaScript a vital part of the Windows development ecosystem. Microsoft has done extensive work to make JavaScript easier to use." :popupSettings="popupSettings" :validationRules="commentValidationRules" :model="commentModel">
                        </ejs-inplaceeditor>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-6 control-label" style="text-align: left;font-size: 14px;">
                        Tags</label>
                        <ejs-inplaceeditor ref="tagObj" id="inplace_tag_editor" data-underline='false' mode="Inline" type="MultiSelect" emptyText="Enter your tags" name="Tag" :value="multiValue" :validationRules="selectValidationRules" :model="selectModel" :actionSuccess= "actionSuccess" :created='created' :popupSettings="tagPopupSettings">
                        </ejs-inplaceeditor>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-lg-4 property-section" id="editorProperty">
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
            The sample demonstrates In-place Editor component usage with a form element. Edit the values in place to update to the post.
        </p>
    </div>
    <div id="description">
        <p>
            This sample demonstrates the placing of following <code>In-place Editor</code> controls with the default form
        </p>
        <p>
            <ul>
                <li>
                    TextBox
                </li>
                <li>
                    RichTextEditor
                </li>
                <li>
                    MultiSelect
                </li>
            </ul>
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
import { InPlaceEditorPlugin, Rte, MultiSelect, ActionEventArgs } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    let multiData = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    return {
        multiValue: ['TypeScript', 'JavaScript'],
        textValidationRules: {
            Title: { required: [true, 'Enter valid title'] },
        },
        textModel: {
            placeholder: 'Enter your question title'
        },
        commentValidationRules: {
            rte: { required: [true, 'Enter valid comments'] }
        },
        popupSettings: {
          model: { width: 300 }
        },
        tagPopupSettings: {
            model: { width: 'auto' }
        },
        commentModel: {
            toolbarSettings: {
                enableFloating: false,
                 items: ['Bold', 'Italic', 'Underline', 'FontColor', 'BackgroundColor',
                 'LowerCase', 'UpperCase', '|', 'OrderedList', 'UnorderedList']
            }
        },
        selectValidationRules: {
            Tag: { required: [true, 'Enter valid tags'] },
        },
        selectModel: {
            mode: 'Box',
            dataSource: multiData,
            placeholder: 'Enter your tags'
        },
        placeFields: { text: 'mode', value: 'id' },
        dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        dataValue: 'inline',
    };
  },
  mounted: function(){
        this.titleObj = this.$refs.titleObj.ej2Instances;
        this.tagObj = this.$refs.tagObj.ej2Instances;
        this.rteObj = this.$refs.rteObj.ej2Instances;
        this.editorMode = this.$refs.editorMode.ej2Instances;
        this.rteObj.popupSettings.model.width = (document.querySelector('#inplace-editor-control.form-layout')).offsetWidth;
        this.chipOnCreate(this.tagObj.value);
  },
  methods: {
        actionSuccess: function(e){
            e.value = this.chipCreation(e.value.split(','));
        },
        changeEditorMode: function(args) {
           var editMode = this.$refs.editorMode.ej2Instances.text;
           this.titleObj.mode = editMode;
           this.tagObj.mode = editMode;
           this.rteObj.mode = editMode;
        },
        chipOnCreate: function() {
            this.tagObj.element.querySelector('.e-editable-value').innerHTML = this.chipCreation(this.tagObj.value);
        },
        chipCreation: function(data) {
            let value = '<div class="e-chip-list">';
            [].slice.call(data).forEach((val) => {
                value += '<div class="e-chip"> <span class="e-chip-text"> ' + val + '</span></div>';
            });
            value += '</div>';
            return value;
        },
        created: function() {
            if (document.getElementById("right-pane")) {
                document.getElementById("right-pane").addEventListener("scroll", this.onScroll);
            }
        },
        onScroll: function() {
            if (this.editorMode.text === 'Inline') { return; }
            if (this.$refs.titleObj && this.$refs.titleObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.titleObj.enableEditMode = false;
            }
            if (this.$refs.tagObj && this.$refs.tagObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.tagObj.enableEditMode = false;
            }
            if (this.$refs.rteObj && this.$refs.rteObj.$el.querySelectorAll('.e-editable-open').length > 0) {
                this.rteObj.enableEditMode = false;
            }
        }
  },
  provide:{
        "inplaceeditor":[Rte, MultiSelect]
  },
});
</script>
<style>

.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide,
.inplace-control-section.form-layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide {
display: block;
visibility: hidden;
}

/* custom code start */
.inplace-editor-control-section.form-layout #confirmation {
    max-width: 500px;
    margin: auto;
}
/* custom code end */

.inplace-editor-control-section.form-layout #formId {
    padding-top: 20px;
    margin-bottom: 45px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.36);
    border-radius: 5px;
}

.inplace-editor-control-section.form-layout .form-horizontal .form-group {
    margin: 20px 20px;
}

 .inplace-editor-control-section.form-layout .form-horizontal .form-group > * {
        width: 100%;
}

.inplace-editor-control-section.form-layout .form-horizontal .form-group:last-child {
    padding-bottom: 40px;
}

.inplace-editor-control-section.form-layout .form-title {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.70);
}

.inplace-editor-control-section.form-layout .submit {
    margin: auto;
    width: 50%;
    text-align: center;
}

.inplace-editor-control-section.form-layout .form-horizontal .control-label {
    padding: 15px 15px 15px 0;
    font-weight: 600;
    font-size: 14px;
}

@media (max-width: 768px) {
    .inplace-editor-control-section.form-layout .form-horizontal .control-label {
        padding-top: 7px;
        margin-bottom: 0;
    }
}

#editorProperty table td {
    width: 50%;
}

#editorProperty .property-panel-table div {
    padding-left: 10px;
    padding-top: 10px;
}

</style>