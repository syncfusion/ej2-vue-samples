<template>
  <div class="control-section">
    <div id="inline-control">
        <div class="row">
            <div id="preview"></div>
        </div>
        <div id="inline-content" class="row">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                <h4>Inline Palette</h4>
                <ejs-colorpicker id="inline-color-palette" mode="Palette" :modeSwitcher="false" :inline="true" :showButtons="false" :change="onChange"></ejs-colorpicker>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                <h4>Inline Picker</h4>
                <ejs-colorpicker id="inline-color-picker" mode="Picker" :modeSwitcher="false"  :inline="true" :showButtons="false" :change="onChange"></ejs-colorpicker>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the inline (flat) mode ColorPicker with different modes and predefined styles.</p>
</div>
<div id="description">
    <p>
        The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications
        like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.</p>
    <p>
        In this sample,</p>
    <ul>
        <li>Color picker/palette is rendered inline by using the inline
            <code>
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/color-picker/#inline">inline</a>
            </code> property set to <i>true</i>.</li>
        <li>Using the
            <code>
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/color-picker/#mode">mode</a>
              </code> property, you can specify the mode <i>(Picker/ Palette)</i> of the ColorPicker.</li>
        <li>Using the
            <code>
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/color-picker/#showbuttons">showButtons</a>
              </code> property, you can enable or disable the control <i>(apply/cancel)</i> buttons.</li>
        <li>To render the 'Palette' / 'Picker' alone you can hide the mode switcher using <code>
                <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/api/color-picker/#modeswitcher">modeSwitcher</a>
              </code> property</li>
    </ul>
    <p>
        More information about ColorPicker can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/color-picker/getting-started/#inline-type">
         documentation section</a>.</p>
</div>

</div>
</template>
<!-- custom code start -->
<style>
/* Common sample level styles */
#inline-control {
    width: 100%;
    text-align: center;
}
#inline-control .col-xs-12 {
    margin: 10px 0;
}
#inline-control h4 {
    margin-bottom: 20px;
}
.e-bigger #inline-control h4 {
    font-size: 20px;
}

#inline-control #preview {
    background: transparent url('images/pen.png') no-repeat;
    display: inline-block;
    height: 80px;
    margin: 10px 0;
    width: 600px;
    background-color: #008000;
}

/* Preview area styles */
#inline-control.e-mobile-control #preview {
    background: transparent url('images/pen_mobile.png') no-repeat;
    background-color: #008000;
    height: 35px;
    width: 300px;
}
.highcontrast #inline-control #preview {
    background: transparent url('images/pen_highcontrast.png') no-repeat;
    background-color: #008000;
}
.highcontrast #inline-control.e-mobile-control #preview {
    background: transparent url('images/pen_mobile_highcontrast.png') no-repeat;
    background-color: #008000;
}

/* Common sample level styles for mobile */
#inline-control.e-mobile-control h4 {
    margin-bottom: 15px;
}
#inline-control.e-mobile-control #inline-content {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
#inline-control.e-mobile-control #inline-content .col-xs-12 {
    flex: 0 0 auto;
    margin-top: 5px;
}
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(ColorPickerPlugin);

export default Vue.extend({
  methods: {
    onChange: function(args) {
      document.getElementById("preview").style.backgroundColor =
        args.currentValue.hex;
    }
  },
  mounted: function() {
    this.$nextTick(function () {
        if (window.browserDetails.isDevice) {
            document.getElementById("inline-control").classList.add("e-mobile-control");
        }
    });
  }
});
</script>