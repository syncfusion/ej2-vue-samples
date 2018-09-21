<template>
  <div class="col-lg-12 control-section">
    <div id="colorpicker-control">
        <div class="row">
            <h4>Choose a color</h4>
            <ejs-colorpicker id="color-picker"></ejs-colorpicker>
        </div>
    </div>
   <div id="action-description">
    <p>This sample demonstrates the default functionalities of the color picker/palette with default colors and predefined styles.</p>
</div>
<div id="description">
    <p>
        The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.</p>
    <p>
    In this sample, the ColorPicker popup contains picker area, slider to adjust hue and opacity value, input textarea, and control buttons.
    <ul>
        <li>Drag the handle in the picker area to select your favorite color.</li>
        <li>You can manually set the color by typing the color values in the input text boxes.</li>
        <li>By clicking the format switching icon at the right side of the input text area, switch between palette and picker mode.</li>
        <li>By clicking the mode switching icon at the left bottom of the popup, switch between palette and picker mode.</li>
        <li>Using the
            <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/color-picker/api-colorPickerComponent.html#value-string"><code>value
            </code></a> property, set the color value to picker and palette initially.</li>
    </ul>
    <p>
        More information about ColorPicker can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/colorpicker/getting-started.html"> documentation section</a>.</p>
    </p>
</div>
   </div>
</template>

<style>
#colorpicker-control {
  margin: 30px auto;
  padding-top: 50px;
  text-align: center;
}

#colorpicker-control .row {
  width: 100%;
}

#colorpicker-control h4 {
  color: rgba(0, 0, 0, 0.64);
  margin-bottom: 20px;
}

.highcontrast #colorpicker-control h4 {
  color: #fff;
}

.e-bigger #colorpicker-control h4 {
  font-size: 20px;
}
</style>

<script>
import Vue from "vue";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(ColorPickerPlugin);

export default Vue.extend({});
</script>
