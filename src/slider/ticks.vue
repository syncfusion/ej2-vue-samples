<template>
  <div>
    <div class="col-lg-8 control-section ticks">
      <div class="content-wrapper">
        <div class="sliderwrap">
          <label style="padding-bottom: 50px">Default Slider</label>
          <ejs-slider
            id="default"
            ref="defaultSlider"
            v-model="value"
            :enabled="enabled"
            :min="min"
            :max="max"
            :step="step"
            :ticks="ticks"
          ></ejs-slider>
        </div>
        <div class="sliderwrap ticks">
          <label style="padding-bottom: 50px">Range Slider</label>
          <ejs-slider
            id="range"
            ref="rangeSlider"
            v-model="rangevalue"
            :type="rangetype"
            :enabled="enabled"
            :min="min"
            :max="max"
            :step="step"
            :ticks="rangeticks"
          ></ejs-slider>
        </div>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties">
        <tbody>
          <tr>
            <td style="width: 50%;padding-left: 10px;padding-top: 10px">
              <div>Placement</div>
            </td>
            <td style="width: 50%;padding-right: 10px;padding-top: 10px">
              <div>
                <ejs-dropdownlist
                  id="filter-type"
                  dropdownlist
                  :dataSource="datasource"
                  :fields="fields"
                  index="0"
                  :change="onChange"
                  placeholder="Select a Placement"
                  popupHeight="200px"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%;padding-left: 10px;padding-top: 10px;">
              <div class="userselect">Disabled</div>
            </td>
            <td style="width: 50%;padding-right: 10px;padding-top: 10px;">
              <div style="padding-left: 0;padding-top: 0">
                <ejs-checkbox id="disabled" :checked="check" :change="checkbox_onChange"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the default functionalities of the ListView. Click any list item to select and highlight an item.</p>
    </div>
    <div id="description">
      <p>ListView component represent data in interactive hierarchical structure interface across different layouts or views, that also has the features of data-binding, template rendering, and grouping.</p>
      <p>The group list allows to group the relevant items under a logical category by mapping the groupBy field.</p>
      <p>In this sample, Cars are grouped based on their category.</p>
    </div>
  </div>
</template>
<style>
.ticks .content-wrapper {
  width: 52%;
  margin: 0 auto;
  min-width: 185px;
}

.ticks .sliderwrap {
  margin-top: 45px;
}

.e-bigger .content-wrapper {
  width: 80%;
}

.sliderwrap label {
  padding-bottom: 50px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
}

.userselect {
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-buttons";
Vue.use(SliderPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
  data: function() {
    return {
      enabled:true,
      value: 30,
      min: 10,
      max: 90,
      step: 5,
      rangevalue: [30, 70],
      rangetype: "Range",
      check: false,
      ticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      rangeticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      datasource: [
        { value: "Before", text: "Before" },
        { value: "After", text: "After" },
        { value: "Both", text: "Both" },
        { value: "None", text: "None" }
      ],
      fields: { text: "text", value: "value" }
    };
  },
  methods: {
    onChange: function(e) {
      this.$refs.defaultSlider.ticks = { placement: e.value };
      this.$refs.rangeSlider.ticks = { placement: e.value };
    },
    checkbox_onChange: function(args) {
      this.$refs.defaultSlider.enabled = !args.checked;
      this.$refs.rangeSlider.enabled = !args.checked;
    }
  }
});
</script>
