<template>
<div>
  <div class="col-lg-8 control-section">
    <div id="colorpicker-control">
      <h4>Choose a color</h4>
      <ejs-colorpicker id="color-picker" ref="colorPicker" value="#0db1e7" :change="change"></ejs-colorpicker>
    </div>
    </div>
    <div class="col-lg-4 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr>
                        <td style="width: 50%">
                            <div>Value</div>
                        </td>
                        <td style="width: 50%">
                            <div style="max-width: 200px">
                                <input ref="inputValue" class="e-input" :maxlength="9" value="#0db1e7" type="text" v-on:input="onChange"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 50%;padding-top:10px">
                            <div>Mode</div>
                        </td>
                        <td style="width: 50%;padding-top:10px">
                            <div style="max-width: 200px">
                                <ejs-dropdownlist :dataSource="items" value="Picker" :fields="fields" :change="modeChange">
                                </ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                <tr>
                    <td style="width: 50%;padding-top:15px">
                      <div>Disable</div>
                    </td>
                    <td style="width: 50%;padding-top:15px">
                      <ejs-checkbox :change="disabled_onChange"></ejs-checkbox>
                    </td>
                </tr>
                <tr>
                  <td style="width: 50%;padding-top:15px">
                    <div>Show Buttons</div>
                  </td>
                  <td style="width: 50%;padding-top:15px">
                    <ejs-checkbox :checked="true" :change="button_onChange"></ejs-checkbox>
                  </td>
                </tr>
                <tr>
                    <td style="width: 50%;padding-top:15px">
                        <div>Mode Switcher</div>
                    </td>
                    <td style="width: 50%;padding-top:15px">
                      <ejs-checkbox :checked="true" :change="mode_onChange"></ejs-checkbox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
    <p>This sample demonstrates customization of the ColorPicker component by using its properties from the property pane. Select
        any combination of properties from the property pane to customize the ColorPicker component.</p>
</div>
<div id="description">
    <p>
        The ColorPicker is a user interface to select and adjust color values. This supports various color specifications like RGB
        (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.
    </p>
    <p>In this sample, ColorPicker is rendered with default configuration.</p>
    <p>This sample can be customized further with the combination of ColorPicker properties from the property pane. For example,</p>
    <ul>
        <li>Control (apply/cancel) buttons can be enabled or disabled using
            <i>Show Buttons</i> checkbox from the property pane.</li>
        <li>You can select the color by entering the color value in the property pane
            <i>Value</i> textbox.</li>
        <li>You can switch to 'Picker' and 'Palette' modes by clicking and selecting the mode from
            <i>Select Mode</i> dropdownlist.</li>
        <li>you can enable or disable the ColorPicker using
            <i>Disabled</i> checkbox from property pane.</li>
        <li>you can enable or disable the mode switcher using
            <i>Mode Switcher</i> checkbox from property pane.</li>
    </ul>
    <p>
        More information about ColorPicker can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/color-picker">
            documentation section</a>.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
    .property-panel-content {
        padding: 0 10px 10px 0;
        overflow: auto;
    }
    #colorpicker-control {
        margin: 30px auto;
        padding-top: 50px;
        text-align: center;
    }
    #colorpicker-control h4 {
        margin-bottom: 20px;
    }

    .e-bigger #colorpicker-control h4 {
        font-size: 20px;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ColorPickerPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
   data: function () {
    return {
      items: [
        { mode: 'Picker' },
        { mode: 'Palette' }
      ],
      fields: { text: 'mode', value: 'mode' },
    };
  },
  methods: {
    onChange: function(args) {
      const val = args.target.value;
      // Sets to color picker default color value if user enters the invalid hex code
      this.$refs.colorPicker.value = val && val.length > 2 ? (val[0] !== '#' ? `#${val}` : val) : '#008000';
    },
    change: function(args) {
      this.$refs.inputValue.value = args.currentValue.hex;
    },
    modeChange: function(args) {
        this.$refs.colorPicker.mode = args.value;
    },
    button_onChange: function(args) {
        this.$refs.colorPicker.showButtons = args.checked;
    },
    mode_onChange: function(args) {
       this.$refs.colorPicker.modeSwitcher = args.checked;
    },
    disabled_onChange: function(args) {
        this.$refs.colorPicker.disabled = args.checked;
    }
  }
});
</script>