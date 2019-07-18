<template>
  <div>
    <div class="col-lg-8 control-section" style="width: 64%">
      <div class="content-wrapper" style="width: 100%;height: 590px;">
        <div class="center">
          <div class="centercontrol">
            <ejs-datamatrixgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :displayText="displaytext"
              :height="height"
              :value="value"
              :mode="mode"
            ></ejs-datamatrixgenerator>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-lg-4 property-section"
      style="padding-right: 0px;
padding-left: 18px;"
    >
      <div class="property-panel-header">Appearance</div>
      <div id="propertypanel" class="e-remove-selection"></div>
      <div class="property-section-content">
        <div class="row sb-child-row">
          <div class="col-xs-2 top" style="padding-left: 0px;">Value</div>
          <div class="col-xs-10" style="padding-left: 0px">
            <div id="barcodevaluediv">
              <ejs-textbox id="textbox" value="WWW.Syncfusion.com" :change="textboxchange"></ejs-textbox>
            </div>
          </div>
        </div>
        <div class="row sb-child-row">
          <div>
            <div class="col-xs-2 top" style="padding-left: 0px;padding-right: 20px;">Width</div>
            <div class="col-xs-3" style="width: 33%;padding-left: 0px">
              <ejs-numerictextbox
                ref="widthObj"
                id="width"
                format="###.##"
                :value="200"
                :step="2"
                :min="150"
                :max="250"
                :change="widthchange"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div>
            <div class="rightProperty">Height</div>
            <div class="col-xs-3" style="width: 33%;padding-left: 0px;">
              <ejs-numerictextbox
                ref="heightObj"
                id="height"
                format="###.##"
                value="150"
                :step="2"
                :min="100"
                :max="200"
                :change="heightchange"
              ></ejs-numerictextbox>
            </div>
          </div>
        </div>

        <div class="row sb-child-row" style="margin-top: 20px;">
          <div class="col-xs-6" style="padding-left: 0px;">
            <div class="col-xs-1" style="padding-left: 0px;">
              <ejs-checkbox id="textVisibility" :checked="true" :change="textVisibilitychange"></ejs-checkbox>
            </div>
            <div class="col-xs-10">Text Visibility</div>
          </div>
          <div class="col-xs-4" style="padding-left: 0;margin-left: 13px;">
            <div class="col-xs-1" style="padding-left: 0px;">
              <ejs-checkbox id="svgMode" :checked="true" :change="svgModechange"></ejs-checkbox>
            </div>
            <div class="svgTextClass">SVG Mode</div>
          </div>
        </div>

        <div class="row sb-child-row">
          <div style="margin-top: 15px">
            <div class="col-xs-2" style="margin-top: 5px;padding-left: 0px;">BG Color</div>
            <div class="col-xs-4" style="padding-left: 0px;">
              <ejs-colorpicker
                ref="bgColor"
                id="bgColor"
                :value="fontcolorvalue"
                :change="bgColorchange"
              ></ejs-colorpicker>
            </div>
            <div
              class="col-xs-2"
              style="width: 18%;
                    padding-left: 12px;
                    margin-top: 5px;"
            >Fore Color</div>
            <div class="col-xs-3" style="padding-left: 2px;">
              <ejs-colorpicker
                ref="foreColor"
                id="foreColor"
                :value="fontcolorvalue"
                :change="foreColorchange"
              ></ejs-colorpicker>
            </div>
          </div>
        </div>

        <div class="property-panel-header">Margin</div>
        <div class="row sb-child-row">
          <div class="col-xs-2 top" style="padding-left: 0px;">Left</div>
          <div class="col-xs-3" style="width: 33%;padding-left: 0px;">
            <ejs-numerictextbox
              id="marginLeft"
              format="###.##"
              value="10"
              :step="1"
              :min="-10"
              :max="30"
              :change="MarginLeftchange"
            ></ejs-numerictextbox>
          </div>
          <div class="rightProperty">Right</div>
          <div class="col-xs-3" style="width: 33%;padding-left: 0px;">
            <ejs-numerictextbox
              id="MarginRight"
              format="###.##"
              value="10"
              :step="1"
              :min="-10"
              :max="30"
              :change="MarginRightchange"
            ></ejs-numerictextbox>
          </div>
        </div>
        <div class="row sb-child-row">
          <div class="col-xs-2 top" style="padding-left: 0px;">Top</div>
          <div class="col-xs-3" style="width: 33%;padding-left: 0px;">
            <div style="padding-bottom: 8px">
              <ejs-numerictextbox
                id="marginTop"
                format="###.##"
                value="10"
                :step="1"
                :min="-10"
                :max="30"
                :change="MarginTopchange"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div class="rightProperty">Bottom</div>
          <div class="col-xs-3" style="width: 33%;padding-left: 0px;">
            <ejs-numerictextbox
              id="MarginBottom"
              format="###.##"
              value="10"
              :step="1"
              :min="-10"
              :max="30"
              :change="MarginBottomchange"
            ></ejs-numerictextbox>
          </div>
          </div>
          <div class="row sb-child-row">
          <div class="row sb-child-row">
            <div class="col-xs-2 top" style="padding-left: 0px;">Size</div>
            <div class="col-xs-3">
              <ejs-dropdownlist
                ref="textPosition"
                id="textPosition"
                :dataSource="SizeSrc"
                :fields="fieldValue"
                :popupWidth="150"
                :width="textPositionwidth"
                value="Auto"
                :index="0"
                :change="srcChange"
              />
            </div>
          </div>
          <div class="row sb-child-row">
            <div class="col-xs-2 top" style="padding-left: 0px;">Encoding</div>
            <div class="col-xs-3">
              <ejs-dropdownlist
                ref="textPosition"
                id="textPosition"
                :dataSource="EncodingSrc"
                :fields="fieldValue"
                :popupWidth="150"
                :width="textPositionwidth"
                value="Auto"
                :index="0"
                :change="encodingChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>This sample displays encoded numerals or text as an optical label using solid adjacent borders in an L-shape and two other borders consisting of alternating dark and light cells or modules. Within these borders are rows and columns of cells that encode information.</p>
    </div>
    <div id="description">
      <p>
This example shows how to display encoded text or numerical values as the label using the Barcode component. The `type` property can be used to set the barcode type as data matrix. The data matrix encoding type can be set using the `encoding` property of the Barcode component and the data matrix size can be defined using the `size` property of the component. 

      </p>

      <br>
    </div>
  </div>
</template>
<style>
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.top {
  margin-top: 10px;
}
.column-style {
  display: table;
  height: 35px;
  padding-right: 4px;
  padding-left: 0px;
  width: calc((100% - 12px) / 3);
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 15px;
  font-weight: 500;
}

.labelstyle {
  padding-top: 10px;
  float: left;
  padding-right: 10px;
}

.propertystyle {
  padding-top: 22px;
  font-weight: 600;
  font-size: 15px;
}

.sb-child-row {
  margin-top: 8px;
}

/* .center {
  margin-left: 14px;
  margin-right: 17px;
  margin-top: 14px;
  min-width: 280px;
  width: auto;
  border: 2px solid lightgray;
  min-height: 40%;
  padding-top: 35px;
  padding-left: 25%;
  padding-bottom: 3%;
} */
.center {
  margin-left: 14px;
  margin-right: 17px;
  margin-top: 14px;
  min-width: 280px;
  width: auto;
  border: 2px solid lightgray;
  min-height: 40%;
  padding-top: 35px;
}

.col-lg-4-property-section {
  width: 36%;
}

.rightProperty {
  margin-top: 10px;
  width: 16.66666667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.textProperty {
  width: 81%;
  padding-left: 0px;
  padding-right: 0;
  float: left;
  position: relative;
  min-height: 1px;
}

.sb-mobile-prop-pane .svgTextClass {
  width: 40px;
  padding-left: 24px;
}

.svgTextClass {
  width: 100px;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.sb-mobile-prop-pane .rightProperty {
  padding-left: 2px;
}

.sb-mobile-prop-pane .textPropertyClass {
  padding-left: 30px;
}

.sb-mobile-prop-pane .textProperty {
  padding-left: 30px;
  width: 77%;
}

.textPropertyClass {
  width: 83.33333333%;
  float: left;
  padding-left: 0px;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
}

.allowedText {
  margin-left: 14px;
  margin-right: 17px;
  margin-top: 14px;
  width: auto;
  height: auto;
}

.errorMessage {
  margin-left: 14px;
  margin-right: 17px;
  margin-top: 14px;
  width: auto;
  height: auto;
}

.errorMessage {
  margin-left: 14px;
  margin-right: 17px;
  margin-top: 14px;
  width: auto;
  height: auto;
}

.top {
  margin-top: 10px;
}

.centercontrol {
  margin: auto;
  height: 150px;
  width: 200px;
}

#password-info {
  position: absolute;
  margin-top: 38px;
}
</style>


<script>
import Vue from "vue";
import {
  Button,
  ButtonPlugin,
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";
import { DataMatrixGeneratorPlugin } from "@syncfusion/ej2-vue-barcode-generator";
import {
  NumericTextBox,
  ColorPicker,
  NumericTextBoxPlugin,
  TextBoxPlugin,
  ColorPickerPlugin,
  ColorPickerEventArgs
} from "@syncfusion/ej2-vue-inputs";
Vue.use(NumericTextBoxPlugin);
Vue.use(DataMatrixGeneratorPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ColorPickerPlugin);
Vue.use(TextBoxPlugin);
let barCodeInstance;
let textPositiondataSourceValue = [
  { type: "Bottom", text: "Bottom" },
  { type: "Top", text: "Top" }
];

let matrixSize = [
  { value: "0", text: "Auto" },
  { value: "6", text: "Size10x10" },
  { value: "12", text: "Size12x12" },
  { value: "20", text: "Size14x14" },
  { value: "23", text: "Size16x16" },
  { value: "24", text: "Size18x18" },
  { value: "24", text: "Size20x20" },
  { value: "24", text: "Size22x22" },
  { value: "24", text: "Size24x24" },
  { value: "24", text: "Size26x26" },
  { value: "24", text: "Size32x32" },
  { value: "24", text: "Size36x36" },
  { value: "24", text: "Size40x40" },
  { value: "24", text: "Size44x44" },
  { value: "24", text: "Size48x48" },
  { value: "24", text: "Size52x52" },
  { value: "24", text: "Size64x64" },

  { value: "24", text: "Size72x72" },
  { value: "24", text: "Size80x80" },
  { value: "24", text: "Size88x88" },
  { value: "24", text: "Size96x96" },
  { value: "24", text: "Size104x104" },
  { value: "24", text: "Size120x120" },
  { value: "24", text: "Size132x132" },
  { value: "24", text: "Size144x144" },
  { value: "24", text: "Size8x18" },
  { value: "24", text: "Size8x32" },
  { value: "24", text: "Size12x26" },
  { value: "24", text: "Size12x36" },
  { value: "24", text: "Size16x36" },
  { value: "24", text: "Size16x48" }
];
//FontType Collection
    let pdfDataMatrixEncodingValue = [
        { value: 'Auto', text: 'Auto' },
        { value: 'ASCII', text: 'ASCII' },
        { value: 'ASCIINumeric', text: 'ASCIINumeric' },
        { value: 'Base256', text: 'Base256' },
    ];

export default Vue.extend({
  data: function() {
    return {
      width: "200px",
      height: "150px",
      mode: "SVG",
      displaytext: { visibility: false },
      type: "DataMatrix",
      value: "WWW.Syncfusion.com",
      fontcolorvalue: "#000",
      textPositionwidth: "100%",
      ftextPositionfields: { value: "type", text: "text" },
      SizeSrc: matrixSize,
      EncodingSrc:pdfDataMatrixEncodingValue,
      //textAlignmentdataSource: textAlignmentdataSourceValue,
      textboxchange: arg => {
        barCodeInstance.value = arg.value;
      },
      widthchange: arg => {
        barCodeInstance.width = arg.value;
      },
      heightchange: arg => {
        barCodeInstance.height = arg.value;
      },
      textVisibilitychange: arg => {
        barCodeInstance.displayText.visibility = arg.checked;
      },
      svgModechange: arg => {
        barCodeInstance.mode = arg.checked ? "SVG" : "Canvas";
      },
      bgColorchange: arg => {
        barCodeInstance.backgroundColor = arg.currentValue.hex;
      },
      foreColorchange: arg => {
        barCodeInstance.foreColor = arg.currentValue.hex;
      },
      MarginLeftchange: arg => {
        barCodeInstance.margin.left = arg.value;
      },
      MarginRightchange: arg => {
        barCodeInstance.margin.right = arg.value;
      },
      MarginTopchange: arg => {
        barCodeInstance.margin.top = arg.value;
      },
      MarginBottomchange: arg => {
        barCodeInstance.margin.bottom = arg.value;
      },
      srcChange: arg => {
        barCodeInstance.size = Number(arg.itemData.value);
      },
      encodingChange: arg => {
        barCodeInstance.encoding = (arg.itemData.value.toString());
      },
      TextMarginTopchange: arg => {
        barCodeInstance.displayText.margin.top = arg.value;
      },
      TextMarginBottomchange: arg => {
        barCodeInstance.displayText.margin.bottom = arg.value;
      },
      textPositionchange: arg => {
        barCodeInstance.displayText.position = arg.value;
      },
      textAlignmentchange: arg => {
        barCodeInstance.displayText.alignment = arg.value;
      },
      displayTextchange: arg => {
        barCodeInstance.displayText.text = arg.value.toString();
      },
      created: args => {
        addEvents();
      }
    };
  },
  mounted: function() {
    barCodeInstance = this.$refs.barcodeControl.ej2Instances;
  }
});
</script>