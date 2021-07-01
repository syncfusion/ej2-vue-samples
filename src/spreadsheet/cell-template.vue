<template>
  <div class="control-section">
    <div id="spreadsheet-cell-template">
      <ejs-spreadsheet ref="spreadsheet" :showRibbon="false" :allowResizing="false" :showFormulaBar="false" :allowOpen="false" :allowSave="false" :scrollSettings="scrollSettings" :created="created" :allowEditing="false" :selectionSettings="selectionSettings">
        <e-sheets>
          <e-sheet name="Registration Form" :rowCount="40" :colCount="30" :showGridLines="false">
            <e-ranges>
              <e-range :template="nameTextbox" address="C2"></e-range>
              <e-range :template="dobTextbox" address="C3"></e-range>
              <e-range :template="genderRadiobutton" address="C4"></e-range>
              <e-range :template="dropdownlist" address="C5"></e-range>
              <e-range :template="multiselect" address="C6"></e-range>
              <e-range :template="mobileTextbox" address="C7"></e-range>
              <e-range :template="emailTextbox" address="C8"></e-range>
              <e-range :template="addressTextbox" address="C9"></e-range>
              <e-range :template="addButton" address="C11"></e-range>
            </e-ranges>
            <e-rows>
              <e-row height=55>
                        <e-cells>
                            <e-cell index=1 value="Interview Registration Form"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=55>
                        <e-cells>
                            <e-cell index=1 value="Name"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Date of Birth:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Gender:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Year of Experience:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Areas of Interest:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Mobile Number:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=45>
                        <e-cells>
                            <e-cell index=1 value="Email:"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row height=82>
                        <e-cells>
                            <e-cell index=1 value="Address:"></e-cell>
                        </e-cells>
                    </e-row>
            </e-rows>
            <e-columns>
                    <e-column index=1 :width="190"></e-column>
                    <e-column :width="350"></e-column>
                </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
    <div id="action-description">
      <p>
        This sample demonstrates cell template feature with interview registration form scenario using input components.
      </p>
    </div>
    <div id="description">
      <p>
        In this demo, cell template is applied to `C2:C9` and instantiated with input components like TextBox, DropDownList,
        Button, RadioButton, MultiSelect etc.
      </p>
      <p>
        More information about cell template feature can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/template">
            documentation</a> section.
      </p>
    </div>
    <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-cell-template {
        height: 550px;
    }

    .e-spreadsheet .e-main-panel .e-main-content {
        margin-left: 0 !important;
    }

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    .ej2-new .sb-header,
    .ej2-new .sb-bread-crumb,
    .ej2-new #action-description,
    .ej2-new #description-section,
    .ej2-new #description {
        display: none
    }

    .ej2-new .container-fluid,
    .ej2-new .container-fluid .control-section,
    #sidebar-section {
        padding: 0px;
    }

    .ej2-new .sample-browser>.content.e-view {
        top: 0px;
        padding: 0px;
        text-align: initial;
        height: 100%;
        overflow: hidden;
    }

    .ej2-new .control-section .control-section {
        height: 100vh;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import nameTextboxTemplate from "./name-textbox.vue";
import dobTextboxTemplate from "./dob-textbox.vue";
import genderRadioTemplate from "./gender-radiobutton.vue";
import dropdownlistTemplate from "./dropdownlist.vue";
import multiselectTemplate from "./multiselect.vue";
import mobileTextboxTemplate  from "./mobile-textbox.vue";
import emailTextboxTemplate  from "./email-textbox.vue";
import addressTextboxTemplate  from "./address-textbox.vue";
import addButtonTemplate  from "./add-button.vue";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
      scrollSettings: { isFinite: true },
      selectionSettings: { mode: 'None' },
      nameTextbox: function() {
        return { template: nameTextboxTemplate }
      },
      dobTextbox: function() {
        return { template: dobTextboxTemplate }
      },
      genderRadiobutton: function() {
        return { template: genderRadioTemplate }
      },
      dropdownlist: function() {
        return { template: dropdownlistTemplate }
      },
      multiselect: function() {
        return { template: multiselectTemplate }
      },
      mobileTextbox: function() {
        return { template: mobileTextboxTemplate }
      },
      emailTextbox: function() {
        return { template: emailTextboxTemplate }
      },
      addressTextbox: function() {
        return { template: addressTextboxTemplate }
      },
      addButton: function() {
        return { template: addButtonTemplate }
      }
    }
  },
  methods: {
    created: function() {
      var spreadsheet = this.$refs.spreadsheet;
      // Applies format to specified range
      spreadsheet.cellFormat({ fontWeight: 'bold' }, 'B2:B9');
      spreadsheet.cellFormat({ fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle', textDecoration: 'underline' }, 'B1');
      // Merges B1 and C1 cells
      spreadsheet.merge('B1:C1');
    }
  }
});
</script>