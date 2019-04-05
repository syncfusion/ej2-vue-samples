<template>
  <div class="col-lg-10 control-section azure">
    <div class="content-wrapper">
      <div id="pricing-slider" class="pricing-slider">
        <div class="row">
          <div id="cloud-left-pane" class="col-lg-8 col-md-8 col-sm-8">
            <div class="cloud-slider">
              <div id="processor">{{this.computedValues.computedProcessor}}</div>
              <span class="label-text">Processor</span>
              <!-- processor Slider element -->
              <ejs-slider
                ref="processorslider"
                v-model="processorValue"
                :value="processorValue"
                min="1"
                max="16"
                :change="sliderValueChange"
                :created="onCreateProcessor"
              ></ejs-slider>
              <div class="sub-heading">Each core included minimum 2.26 GHz power</div>
            </div>
            <div class="cloud-slider cloud-left-slider">
              <div id="memory">{{this.computedValues.computedMemory}}</div>
              <span class="label-text">Memory</span>
              <!-- memory Slider element -->
              <ejs-slider
                ref="memoryslider"
                v-model="memoryValue"
                :value="memoryValue"
                min="1"
                max="12"
                :change="sliderValueChange"
                :created="onCreateMemory"
              ></ejs-slider>
              <div class="sub-heading">Equal to burstable memory included</div>
            </div>
            <div class="cloud-slider cloud-left-slider">
              <div id="storage">{{this.computedValues.computedStorage}}</div>
              <span class="label-text">Storage</span>
              <!-- storage Slider element -->
              <ejs-slider
                ref="storageslider"
                v-model="storageValue"
                :value="storageValue"
                min="10"
                max="500"
                :change="sliderValueChange"
                :created="onCreateStorage"
              ></ejs-slider>
              <div class="sub-heading">1000 GB bandwidth per month, at 100 Mbit/s uplink port</div>
            </div>
          </div>
          <div id="cloud-right-pane" class="col-lg-4 col-md-4 col-sm-4">
            <div class="cloud-right-content">
              <div class="label-text">Size Range</div>
              <div class="btn-size">
                <!-- Button element -->
                <ejs-button
                  id="xSmallBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click.native="sliderPriceValue"
                >XS</ejs-button>
                <ejs-button
                  id="smallBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click.native="sliderPriceValue"
                >S</ejs-button>
                <ejs-button
                  id="mediumBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click.native="sliderPriceValue"
                >M</ejs-button>

                <ejs-button
                  id="largeBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click.native="sliderPriceValue"
                >L</ejs-button>
                <ejs-button
                  id="xLargeBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click.native="sliderPriceValue"
                >XL</ejs-button>
              </div>
              <div class="label-text right-text">Estimated Price</div>
              <div id="cloud-slider-text">
                <span id="dollar">$</span>
                <span id="pricevalue">{{this.computedValues.computedCloudPrice}}</span>
                <span class="suffix">/month</span>
              </div>
              <div class="discount">
                <div class="cloud-slider-right">
                  <!-- cPanel Check Box element -->
                  <ejs-checkbox
                    ref="cPanel"
                    :change="sliderValueChange"
                    label="Not required cPanel included"
                    checked="false"
                  ></ejs-checkbox>
                </div>
                <div class="cloud-slider-right discount-pay">
                  <!-- discount Check Box element -->
                  <ejs-checkbox
                    ref="discount"
                    :change="sliderValueChange"
                    label="12 Months <span class = 'offer' > Save 25%.</span> Pay Monthly"
                    checked="false"
                  ></ejs-checkbox>
                </div>
              </div>
              <!-- Button element -->
              <div class="slider-button">
                <ejs-button
                  id="btn"
                  class="dlgbtn"
                  isPrimary="true"
                  v-on:click.native="signup"
                >Signup Now</ejs-button>
              </div>
              <div id="dialogWrapper" class="content-wrapper">
                <!-- Initialize alert Dialog -->
                <ejs-dialog
                  ref="alertDialog"
                  id="alertDialog"
                  :buttons="alertDlgButtons"
                  :visible="isvisible"
                  :animationSettings="animationSettings"
                  width="360px"
                  :content="alertContent"
                  :closeOnEscape="isvisible"
                  :showCloseIcon="isvisible"
                  :target="target"
                ></ejs-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the cloud pricing slider used to calculate the cloud costs by considering web hosting, VPS hosting,
        cloud server providers. Drag the thumb over the bar for selecting processor, memory, and storage.
      </p>
    </div>

    <div id="description">
      <p>
        This sample calculates the cloud cost based on number of workloads, complexity of workloads, system, and monitoring requirements
        which is used under cloud operation.
      </p>
      <p>
        In this demo, default rendering of slider is used for selecting processor, memory, and storage. The estimated price for
        the selection will appear on the left pane.
      </p>
      <p>25% offer can be availed for an annual pack. This can be applied by checking the checkbox from the left pane.</p>
      <p>
        By default, cPanel will be included in the monthly pack. If you don't want, check the checkbox from the left pane which
        will reduce $10 from the estimated price.
      </p>
      <p>
        Different range of packs are also selected from the left pane toolbar which will have default configuration based on
        the range size.
      </p>
      <p>After choosing your pack, confirm it by clicking sign up which will show your selected package details in a dialog box.</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { Placement, SliderChangeEventArgs } from "@syncfusion/ej2-inputs";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";

Vue.use(SliderPlugin);
Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function() {
    return {
      processorValue: 4,
      memoryValue: 4,
      storageValue: 300,
      isvisible: false,
      finalValue: 0,
      target: "#pricing-slider",
      width: "360px",
      buttonValues: {
        xSmallBtn: {
          processorValue: 1,
          memoryValue: 1,
          storageValue: 10
        },
        smallBtn: {
          processorValue: 1,
          memoryValue: 2,
          storageValue: 10
        },
        mediumBtn: {
          processorValue: 4,
          memoryValue: 4,
          storageValue: 300
        },
        largeBtn: {
          processorValue: 12,
          memoryValue: 6,
          storageValue: 100
        },
        xLargeBtn: {
          processorValue: 8,
          memoryValue: 12,
          storageValue: 300
        }
      },
      animationSettings: { effect: "None" },
      alertContent:
        '<div id = "dialog-content"><div id = "dialog-header">Cloud Price Details</div>' +
        '<div id="processorDialog"><span id="processorPriceName">Processor Price</span><span id="processorPrice"></span></div>' +
        '<div id="MemoryDialog"><span id="memoryPriceName">Memory Price</span><span id="memoryPrice"></span></div>' +
        '<div id="StorageDialog"><span id="storagePriceName">Storage Price</span><span id="storagePrice"></span></div>' +
        '<div id="CloudDialog"><span id="cloudPriceName">Estimated Price</span><span id="cloudPrice"></span></div></div>',
      alertDlgButtons: [
        {
          click: this.alertDlgBtnClick,
          buttonModel: { content: "Close", isPrimary: true }
        }
      ]
    };
  },
  computed: {
    computedValues: function() {
      return {
        computedStorage: `${this.storageValue} GB`,
        computedProcessor: `${this.processorValue} CORE`,
        computedMemory: `${this.memoryValue} GB`,
        computedStoragePrice: this.storageValue,
        computedProcessorPrice: this.processorValue,
        computedMemoryPrice: this.memoryValue,
        computedCloudPrice: this.finalValue
      };
    }
  },
  mounted: function() {
    (this.target = document.getElementById("pricing-slider")),
      this.sliderValueChange();
  },
  methods: {
    //common method for Slider value change
    onChange: function(elem, value, notation) {
      elem.textContent = value + "  " + notation;
      this.sliderValueChange();
    },
    sliderValueChange: function() {
      //formula to calculate cloud price based on slider value
      let finalValue = Number(
        (
          (this.processorValue * this.memoryValue * 1000 +
            this.processorValue * this.memoryValue * this.storageValue +
            this.processorValue * this.memoryValue * 100) /
          12
        ).toFixed(2)
      );
      if (this.$refs.cPanel && this.$refs.cPanel.ej2Instances.checked) {
        finalValue = (finalValue - 10).toFixed(2);
      }
      if (this.$refs.discount && this.$refs.discount.ej2Instances.checked) {
        finalValue = (finalValue - (finalValue * 25) / 100).toFixed(2);
      }
      this.finalValue = finalValue;
    },

    alertDlgBtnClick: function() {
      this.$refs.alertDialog.hide();
    },
    sliderPriceValue(e) {
      this.processorValue = this.buttonValues[e.target.id].processorValue;
      this.memoryValue = this.buttonValues[e.target.id].memoryValue;
      this.storageValue = this.buttonValues[e.target.id].storageValue;
    },
    signup: function() {
      var processorPrice = document.getElementById("processorPrice");
      this.onChange(processorPrice, this.processorValue, "CORE");
      var memoryPrice = document.getElementById("memoryPrice");
      this.onChange(memoryPrice, this.memoryValue, "GB");
      var storagePrice = document.getElementById("storagePrice");
      this.onChange(storagePrice, this.storageValue, "GB");

      var cloudPrice = document.getElementById("cloudPrice");
      cloudPrice.innerText = "$" + this.finalValue;
      this.sliderValueChange();
      this.$refs.alertDialog.show();
    }
  }
});
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

#pricing-slider #cloud-right-pane .btn-size {
  padding-top: 16px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgrey;
}

#pricing-slider .e-slider-container.e-horizontal {
  height: 56px;
}

#pricing-slider .row {
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 4px;
  opacity: 100;

  border-radius: 4px;
}

.discount .e-label,
.discount .e-label {
  white-space: initial;
}

#pricing-slider .sub-heading {
  margin-top: -8px;
  font-size: 13px;
  font-family: Roboto-Regular;
  color: #808080;
}

#pricing-slider .label-text.right-text {
  padding-top: 16px;
  padding-bottom: 20px;
}

#pricing-slider .label-text {
  color: #000000;
  font-size: 14px;
  font-weight: 500;
}

span.e-label .offer {
  color: #4a90e2;
}

.cloud-slider {
  display: block;
  position: relative;
}

#processor {
  background-color: #a06aff;
}

#memory {
  background-color: #7ed321;
}

#storage {
  background-color: #4a90e2;
}

#memory,
#storage,
#processor {
  font-family: Roboto-Medium;
  font-size: 14px;
  height: 24px;
  width: 70px;
  text-align: center;
  line-height: 24px;
  float: right;
  color: #ffffff;
  font-weight: 500;
  border-radius: 18px;
}

#cPanel,
#discount {
  height: 30px;
  margin-top: -10px;
  width: 20px;
}

#pricevalue {
  color: #000000;
  font-family: Roboto-Bold;
  font-size: 28px;
  font-weight: bold;
}

#suffix {
  color: #000000;
  font-family: Roboto-Regular;
  font-size: 16px;
  font-weight: 500;
}

.text {
  font-size: 13px;
  padding-top: 26px;
  width: 190px;
}

#cloud-right-pane {
  background-color: #ffffff;
  border-left: 1px solid #cccccc;
  padding: 20px;
  height: 443px;
}

.pricing-slider {
  margin-top: 40px;
  min-height: 20px;
  margin-bottom: 20px;
}

.cloud-slider-right {
  color: #000000;
  font-size: 14px;
}

.cloud-slider-right.discount-pay {
  padding-top: 20px;
}

#cloud-left-pane {
  height: 443px;
  padding: 40px;
  background-color: #fafafa;
}

.discount {
  padding-top: 20px;
  padding-bottom: 35px;
}

@media (max-width: 1010px) {
  #cloud-right-pane {
    border-top: 1px solid #d5d7d8 !important;
    border-left: none !important;
    border-width: 1px 0 0 !important;
    padding-top: 15px !important;
    padding-left: 0 !important;
  }
  .cloud-right-content {
    padding-left: 24px !important;
  }
  #cloud-left-pane {
    width: 100%;
  }
  #cloud-right-pane {
    width: 100%;
  }
}

#cloud-slider-text {
  padding-bottom: 20px;
  border-bottom: 1px solid lightgrey;
}

#dollar {
  color: #000000;
  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  top: -7px;
}

#btn {
  text-transform: uppercase;
  width: -webkit-fill-available;
}

.cloud-left-slider {
  margin-top: 40px;
}

.azure.control-section {
  padding-top: 0px;
  margin-left: 75px;
}

@media screen and (max-width: 1199px) {
  .azure.control-section {
    margin-left: 0px;
  }
}

.cloud-right-content .e-btn.e-info {
  padding: 0px;
  width: 30px;
  height: 30px;
  line-height: inherit;
}

.highcontrast .pricing-slider,
.highcontrast #pricing-slider .label-text,
.highcontrast #pricing-slider .sub-heading {
  color: white;
}

.fabric .cloud-right-content .e-btn.e-info,
.highcontrast .e-btn.e-info {
  line-height: 2px;
}

.highcontrast #dollar,
.highcontrast #pricevalue,
.highcontrast #dialog-header,
.highcontrast #StorageDialog,
.highcontrast #CloudDialog,
.highcontrast #processorDialog {
  color: white;
}

.highcontrast #pricing-slider .row {
  border: 1px solid #969696;
}

.highcontrast #cloud-right-pane {
  border-left: 1px solid #969696;
}

.highcontrast #cloud-slider-text,
.highcontrast #pricing-slider #cloud-right-pane .btn-size {
  border-bottom: 1px solid #969696;
}

.highcontrast #processor {
  background-color: #ae80ff;
}

.highcontrast #memory {
  background-color: #7ed321;
}

.highcontrast #storage {
  background-color: #61a4ef;
}

.highcontrast #cloud-left-pane {
  background-color: #1a1a1a;
}

.highcontrast #cloud-right-pane {
  background-color: #000;
}

.highcontrast #processorPriceName,
.highcontrast #memoryPriceName,
.highcontrast #storagePriceName,
.highcontrast #cloudPriceName {
  color: white;
  opacity: 1;
}

#dialog-header {
  color: #000000;
  opacity: 0.87;
  font-family: Roboto-Medium;
  font-weight: 600;
  font-size: 20px;
}

#CloudDialog {
  color: #000000;
  padding-top: 14px;
  padding-bottom: 24px;
  border-top: 1px solid #cccccc;
}

#processorPrice,
#memoryPrice,
#storagePrice {
  opacity: 0.9;
  font-family: Roboto-Bold;
  font-weight: 600;
  font-size: 16px;
  float: right;
}

#alertDialog .e-footer-content {
  padding-top: 0;
}

#processorPriceName,
#memoryPriceName,
#storagePriceName,
#cloudPriceName {
  opacity: 0.9;
  color: #000000;
  font-family: Roboto-Regular;
  font-size: 16px;
}

#cloudPrice {
  opacity: 0.9;
  font-family: Roboto-Bold;
  font-weight: 600;
  font-size: 26px;
  float: right;
}

#processorDialog {
  color: #000000;
  padding-top: 12px;
  padding-bottom: 12px;
}

#StorageDialog {
  color: #000000;
  padding-top: 12px;
  padding-bottom: 16px;
}

.bootstrap4 #pricing-slider .row {
	box-shadow: none;
}

</style>
