<template>
  <div class="col-lg-10 control-section slider-azure">
    <div class="content-wrapper">
      <div id="pricing-slider" class="pricing-slider">
        <div class="row">
          <div id="cloud-left-pane" class="col-lg-8 col-md-8 col-sm-8">
            <div class="cloud-slider">
              <div id="processor">{{computedValues.computedProcessor}}</div>
              <span class="label-text">Processor</span>
              <!-- processor Slider element -->
              <ejs-slider
                ref="processorslider"
                v-model="processorValue"
                :value="processorValue"
                min="1"
                max="16"
                :change="sliderValueChange"
              ></ejs-slider>
              <div class="sub-heading">Each core included minimum 2.26 GHz power</div>
            </div>
            <div class="cloud-slider cloud-left-slider">
              <div id="memory">{{computedValues.computedMemory}}</div>
              <span class="label-text">Memory</span>
              <!-- memory Slider element -->
              <ejs-slider
                ref="memoryslider"
                v-model="memoryValue"
                :value="memoryValue"
                min="1"
                max="12"
                :change="sliderValueChange"
              ></ejs-slider>
              <div class="sub-heading">Equal to burstable memory included</div>
            </div>
            <div class="cloud-slider cloud-left-slider">
              <div id="storage">{{computedValues.computedStorage}}</div>
              <span class="label-text">Storage</span>
              <!-- storage Slider element -->
              <ejs-slider
                ref="storageslider"
                v-model="storageValue"
                :value="storageValue"
                min="10"
                max="500"
                :change="sliderValueChange"
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
                  v-on:click="sliderPriceValue"
                >XS</ejs-button>
                <ejs-button
                  id="smallBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click="sliderPriceValue"
                >S</ejs-button>
                <ejs-button
                  id="mediumBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click="sliderPriceValue"
                >M</ejs-button>

                <ejs-button
                  id="largeBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click="sliderPriceValue"
                >L</ejs-button>
                <ejs-button
                  id="xLargeBtn"
                  cssClass="e-info"
                  isPrimary="true"
                  v-on:click="sliderPriceValue"
                >XL</ejs-button>
              </div>
              <div class="label-text right-text">Estimated Price</div>
              <div id="cloud-slider-text">
                <span id="dollar">$</span>
                <span id="pricevalue">{{computedValues.computedCloudPrice}}</span>
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
                  v-on:click="signup"
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
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";

export default {
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
  components: { 
    'ejs-checkbox': CheckBoxComponent,
    'ejs-slider': SliderComponent,
    'ejs-button': ButtonComponent,
    'ejs-dialog': DialogComponent,
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
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

.slider-azure #pricing-slider #cloud-right-pane .btn-size {
  padding-top: 16px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgrey;
}

.slider-azure #pricing-slider .e-slider-container.e-horizontal {
  height: 56px;
}

.slider-azure #pricing-slider .row {
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 4px;
  opacity: 100;
  border-radius: 4px;
}

.slider-azure .discount .e-label,
.slider-azure .discount .e-label {
  white-space: initial;
}

.slider-azure #pricing-slider .sub-heading {
  margin-top: -8px;
  font-size: 13px;
  color: #636363;
}

.slider-azure #pricing-slider .label-text.right-text {
  padding-top: 16px;
  padding-bottom: 20px;
}

.slider-azure #pricing-slider .label-text {
  color: #000000;
  font-size: 14px;
  font-weight: 500;
}

.slider-azure span.e-label .offer {
  color: #4a90e2;
}

.slider-azure .cloud-slider {
  display: block;
  position: relative;
}

.slider-azure #processor {
  background-color:#6300FF;
}

.slider-azure #memory {
  background-color:#4A850F;
}

.slider-azure #storage {
  background-color:#2476D1;
}

.slider-azure #memory,
.slider-azure #storage,
.slider-azure #processor {
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

.slider-azure #pricevalue {
  color: #000000;
  font-size: 28px;
  font-weight: bold;
}

.slider-azure #suffix {
  color: #000000;
  font-size: 16px;
  font-weight: 500;
}

.slider-azure #cloud-right-pane {
  background-color: #ffffff;
  border-left: 1px solid #cccccc;
  padding: 20px;
  height: 443px;
}

.slider-azure .pricing-slider {
  margin-top: 40px;
  min-height: 20px;
  margin-bottom: 20px;
}

.slider-azure .cloud-slider-right {
  color: #000000;
  font-size: 14px;
}

.slider-azure .cloud-slider-right.discount-pay {
  padding-top: 20px;
}

.slider-azure #cloud-left-pane {
  height: 443px;
  padding: 40px;
  background-color: #fafafa;
}

.slider-azure .discount {
  padding-top: 20px;
  padding-bottom: 35px;
}

@media (max-width: 1010px) {
  .slider-azure #cloud-right-pane {
    border-top: 1px solid #d5d7d8 !important;
    border-left: none !important;
    border-width: 1px 0 0 !important;
    padding-top: 15px !important;
    padding-left: 0 !important;
  }
  .slider-azure .cloud-right-content {
    padding-left: 24px !important;
  }
  .slider-azure #cloud-left-pane {
    width: 100%;
  }
  .slider-azure #cloud-right-pane {
    width: 100%;
  }
}

.slider-azure #cloud-slider-text {
  padding-bottom: 20px;
  border-bottom: 1px solid lightgrey;
}

.slider-azure #dollar {
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  top: -7px;
}

.slider-azure #btn {
  text-transform: uppercase;
  width: -webkit-fill-available;
}

.slider-azure .cloud-left-slider {
  margin-top: 40px;
}

.slider-azure.control-section {
  padding-top: 0px;
  margin-left: 75px;
}

@media screen and (max-width: 1199px) {
  .slider-azure.control-section {
    margin-left: 0px;
  }
}

.slider-azure .cloud-right-content .e-btn.e-info {
  padding: 0px;
  width: 30px;
  height: 30px;
  line-height: inherit;
}

.highcontrast .slider-azure .pricing-slider,
.highcontrast .slider-azure #pricing-slider .label-text,
.highcontrast .slider-azure #pricing-slider .sub-heading,
.material-dark .slider-azure .pricing-slider,
.material-dark .slider-azure #pricing-slider .label-text,
.material-dark .slider-azure #pricing-slider .sub-heading,
.material3-dark .slider-azure .pricing-slider,
.material3-dark .slider-azure #pricing-slider .label-text,
.material3-dark .slider-azure #pricing-slider .sub-heading,
.fabric-dark .slider-azure .pricing-slider,
.fabric-dark .slider-azure #pricing-slider .label-text,
.fabric-dark .slider-azure #pricing-slider .sub-heading,
.fluent2-dark .slider-azure .pricing-slider,
.fluent2-dark .slider-azure #pricing-slider .label-text,
.fluent2-dark .slider-azure #pricing-slider .sub-heading,
.fluent2-highcontrast .slider-azure .pricing-slider,
.fluent2-highcontrast .slider-azure #pricing-slider .label-text,
.fluent2-highcontrast .slider-azure #pricing-slider .sub-heading,
.fluent2-highcontrast .slider-azure .pricing-slider,
.fluent2-highcontrast .slider-azure #pricing-slider .label-text,
.fluent2-highcontrast .slider-azure #pricing-slider .sub-heading,
.tailwind-dark .slider-azure .pricing-slider,
.tailwind-dark .slider-azure #pricing-slider .label-text,
.tailwind-dark .slider-azure #pricing-slider .sub-heading,
.bootstrap5-dark .slider-azure .pricing-slider,
.bootstrap5-dark .slider-azure #pricing-slider .label-text,
.bootstrap5-dark .slider-azure #pricing-slider .sub-heading,
.bootstrap-dark .slider-azure .pricing-slider,
.bootstrap-dark .slider-azure #pricing-slider .label-text,
.bootstrap-dark .slider-azure #pricing-slider .sub-heading {
  color: white;
}

.fabric .slider-azure .cloud-right-content .e-btn.e-info,
.highcontrast .slider-azure .e-btn.e-info {
  line-height: 2px;
}

.highcontrast .slider-azure #dollar,
.highcontrast .slider-azure #pricevalue,
.highcontrast .slider-azure #dialog-header,
.highcontrast .slider-azure #StorageDialog,
.highcontrast .slider-azure #CloudDialog,
.highcontrast .slider-azure #processorDialog,
.material-dark .slider-azure #dollar,
.material-dark .slider-azure #pricevalue,
.material-dark .slider-azure #dialog-header,
.material-dark .slider-azure #StorageDialog,
.material-dark .slider-azure #CloudDialog,
.material-dark .slider-azure #processorDialog,
.material3-dark .slider-azure #dollar,
.material3-dark .slider-azure #pricevalue,
.material3-dark .slider-azure #dialog-header,
.material3-dark .slider-azure #StorageDialog,
.material3-dark .slider-azure #CloudDialog,
.material3-dark .slider-azure #processorDialog,
.fabric-dark .slider-azure #dollar,
.fabric-dark .slider-azure #pricevalue,
.fabric-dark .slider-azure #dialog-header,
.fabric-dark .slider-azure #StorageDialog,
.fabric-dark .slider-azure #CloudDialog,
.fabric-dark .slider-azure #processorDialog,
.fluent-dark .slider-azure #dollar,
.fluent-dark .slider-azure #pricevalue,
.fluent-dark .slider-azure #dialog-header,
.fluent-dark .slider-azure #StorageDialog,
.fluent-dark .slider-azure #CloudDialog,
.fluent-dark .slider-azure #processorDialog,
.fluent2-dark .slider-azure #dollar,
.fluent2-dark .slider-azure #pricevalue,
.fluent2-dark .slider-azure #dialog-header,
.fluent2-dark .slider-azure #StorageDialog,
.fluent2-dark .slider-azure #CloudDialog,
.fluent2-dark .slider-azure #processorDialog,
.fluent2-highcontrast .slider-azure #dollar,
.fluent2-highcontrast .slider-azure #pricevalue,
.fluent2-highcontrast .slider-azure #dialog-header,
.fluent2-highcontrast .slider-azure #StorageDialog,
.fluent2-highcontrast .slider-azure #CloudDialog,
.fluent2-highcontrast .slider-azure #processorDialog,
.bootstrap-dark .slider-azure #dollar,
.bootstrap-dark .slider-azure #pricevalue,
.bootstrap-dark .slider-azure #dialog-header,
.bootstrap-dark .slider-azure #StorageDialog,
.bootstrap-dark .slider-azure #CloudDialog,
.bootstrap-dark .slider-azure #processorDialog,
.bootstrap5-dark .slider-azure #dollar,
.bootstrap5-dark .slider-azure #pricevalue,
.bootstrap5-dark .slider-azure #dialog-header,
.bootstrap5-dark .slider-azure #StorageDialog,
.bootstrap5-dark .slider-azure #CloudDialog,
.bootstrap5-dark .slider-azure #processorDialog,
.tailwind-dark .slider-azure #dollar,
.tailwind-dark .slider-azure #pricevalue,
.tailwind-dark .slider-azure #dialog-header,
.tailwind-dark .slider-azure #StorageDialog,
.tailwind-dark .slider-azure #CloudDialog,
.tailwind-dark .slider-azure #processorDialog,
.bootstrap5\.3-dark .slider-azure #dialog-header,
.bootstrap5\.3-dark .slider-azure #StorgeDialog,
.bootstrap5\.3-dark .slider-azure #CloudDialog,
.bootstrap5\.3-dark .slider-azure #processorDialog {
  color: white;
}

.highcontrast .slider-azure #pricing-slider .row,
.tailwind-dark .slider-azure #pricing-slider .row,
.bootstrap-dark .slider-azure #pricing-slider .row,
.bootstrap5-dark .slider-azure #pricing-slider .row,
.fabric-dark .slider-azure #pricing-slider .row,
.fluent-dark .slider-azure #pricing-slider .row,
.fluent2-dark .slider-azure #pricing-slider .row,
.fluent2-highcontrast .slider-azure #pricing-slider .row,
.material-dark .slider-azure #pricing-slider .row,
.material3-dark .slider-azure #pricing-slider .row {
  border: 1px solid #969696;
}

.highcontrast .slider-azure #cloud-right-pane,
.tailwind-dark .slider-azure #cloud-right-pane,
.bootstrap-dark .slider-azure #cloud-right-pane,
.bootstrap5-dark .slider-azure #cloud-right-pane,
.fabric-dark .slider-azure #cloud-right-pane,
.fluent-dark .slider-azure #cloud-right-pane,
.fluent2-dark .slider-azure #cloud-right-pane,
.fluent2-highcontrast .slider-azure #cloud-right-pane,
.material-dark .slider-azure #cloud-right-pane,
.material3-dark .slider-azure #cloud-right-pane {
  border-left: 1px solid #969696;
}

.highcontrast .slider-azure #cloud-slider-text,
.highcontrast .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.material-dark .slider-azure #cloud-slider-text,
.material-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.material3-dark .slider-azure #cloud-slider-text,
.material3-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.fabric-dark .slider-azure #cloud-slider-text,
.fabric-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.fluent-dark .slider-azure #cloud-slider-text,
.fluent-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.fluent2-dark .slider-azure #cloud-slider-text,
.fluent2-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.fluent2-highcontrast .slider-azure #cloud-slider-text,
.fluent2-highcontrast .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.bootstrap-dark .slider-azure #cloud-slider-text,
.bootstrap-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.bootstrap5-dark .slider-azure #cloud-slider-text,
.bootstrap5-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size,
.tailwind-dark .slider-azure #cloud-slider-text,
.tailwind-dark .slider-azure #pricing-slider #cloud-right-pane .btn-size {
  border-bottom: 1px solid #969696;
}

.highcontrast .slider-azure #processor,
.material-dark .slider-azure #processor,
.material3-dark .slider-azure #processor,
.bootstrap-dark .slider-azure #processor,
.bootstrap5-dark .slider-azure #processor,
.fabric-dark .slider-azure #processor,
.fluent-dark .slider-azure #processor,
.fluent2-dark .slider-azure #processor,
.fluent2-highcontrast .slider-azure #processor,
.tailwind-dark .slider-azure #processor {
  background-color: #ae80ff;
}

.highcontrast .slider-azure #memory,
.material-dark .slider-azure #memory,
.material3-dark #memory,
.fabric-dark .slider-azure #memory,
.fluent-dark .slider-azure #memory,
.fluent2-dark .slider-azure #memory,
.fluent2-highcontrast .slider-azure #memory,
.tailwind-dark .slider-azure #memory,
.bootstrap5-dark .slider-azure #memory,
.bootstrap-dark .slider-azure #memory {
  background-color: #7ed321;
}

.highcontrast .slider-azure #storage,
.material-dark .slider-azure #storage,
.material3-dark #storage,
.fabric-dark .slider-azure #storage,
.fluent-dark .slider-azure #storage,
.fluent2-dark .slider-azure #storage,
.fluent2-highcontrast .slider-azure #storage,
.tailwind-dark .slider-azure #storage,
.bootstrap5-dark .slider-azure #storage,
.bootstrap-dark .slider-azure #storage {
  background-color: #61a4ef;
}

.highcontrast .slider-azure #cloud-left-pane,
.material-dark .slider-azure #cloud-left-pane,
.material3-dark #cloud-left-pane,
.fabric-dark .slider-azure #cloud-left-pane,
.fluent-dark .slider-azure #cloud-left-pane,
.fluent2-dark .slider-azure #cloud-left-pane,
.fluent2-highcontrast .slider-azure #cloud-left-pane,
.tailwind-dark .slider-azure #cloud-left-pane,
.bootstrap5-dark .slider-azure #cloud-left-pane,
.bootstrap-dark .slider-azure #cloud-left-pane {
  background-color: #1a1a1a;
}

.highcontrast .slider-azure #cloud-right-pane,
.material-dark .slider-azure #cloud-right-pane,
.material3-dark .slider-azure #cloud-right-pane,
.fabric-dark .slider-azure #cloud-right-pane,
.fluent-dark .slider-azure #cloud-right-pane,
.fluent2-dark .slider-azure #cloud-right-pane,
.fluent2-highcontrast .slider-azure #cloud-right-pane,
.tailwind-dark .slider-azure #cloud-right-pane,
.bootstrap5-dark .slider-azure #cloud-right-pane,
.bootstrap-dark .slider-azure #cloud-right-pane {
  background-color: #000;
}

.highcontrast .slider-azure #processorPriceName,
.highcontrast .slider-azure #memoryPriceName,
.highcontrast .slider-azure #storagePriceName,
.highcontrast .slider-azure #cloudPriceName,
.tailwind-dark .slider-azure #processorPriceName,
.tailwind-dark .slider-azure #memoryPriceName,
.tailwind-dark .slider-azure #storagePriceName,
.tailwind-dark .slider-azure #cloudPriceName,
.bootstrap-dark .slider-azure #processorPriceName,
.bootstrap-dark .slider-azure #memoryPriceName,
.bootstrap-dark .slider-azure #storagePriceName,
.bootstrap-dark .slider-azure #cloudPriceName,
.bootstrap5-dark .slider-azure #processorPriceName,
.bootstrap5-dark .slider-azure #memoryPriceName,
.bootstrap5-dark .slider-azure #storagePriceName,
.bootstrap5-dark .slider-azure #cloudPriceName,
.fabric-dark .slider-azure #processorPriceName,
.fabric-dark .slider-azure #memoryPriceName,
.fabric-dark .slider-azure #storagePriceName,
.fabric-dark .slider-azure #cloudPriceName,
.fluent-dark .slider-azure #processorPriceName,
.fluent-dark .slider-azure #memoryPriceName,
.fluent-dark .slider-azure #storagePriceName,
.fluent-dark .slider-azure #cloudPriceName,
.fluent2-dark .slider-azure #processorPriceName,
.fluent2-dark .slider-azure #memoryPriceName,
.fluent2-dark .slider-azure #storagePriceName,
.fluent2-dark .slider-azure #cloudPriceName,
.fluent2-highcontrast .slider-azure #processorPriceName,
.fluent2-highcontrast .slider-azure #memoryPriceName,
.fluent2-highcontrast .slider-azure #storagePriceName,
.fluent2-highcontrast .slider-azure #cloudPriceName,
.material-dark .slider-azure #processorPriceName,
.material-dark .slider-azure #memoryPriceName,
.material-dark .slider-azure #storagePriceName,
.material-dark .slider-azure #cloudPriceName,
.material3-dark .slider-azure #processorPriceName,
.material3-dark .slider-azure #memoryPriceName,
.material3-dark .slider-azure #storagePriceName,
.material3-dark .slider-azure #cloudPriceName,
.bootstrap5\.3-dark .slider-azure #processorPriceName,
.bootstrap5\.3-dark .slider-azure #memoryPriceName,
.bootstrap5\.3-dark .slider-azure #storgePriceName,
.bootstrap5\.3-dark .slider-azure #cloudPriceName {
  color: white;
  opacity: 1;
}
	
.bootstrap5\.3-dark .discount .e-label, .bootstrap5\.3-dark #cloud-slider-text .suffix,
.tailwind3-dark .discount .e-label, .tailwind3-dark #cloud-slider-text .suffix {
	color: black;
}

.slider-azure #dialog-header {
  color: #000000;
  opacity: 0.87;
  font-weight: 600;
  font-size: 20px;
}

.slider-azure #CloudDialog {
  color: #000000;
  padding-top: 14px;
  padding-bottom: 24px;
  border-top: 1px solid #cccccc;
}

.slider-azure #processorPrice,
.slider-azure #memoryPrice,
.slider-azure #storagePrice {
  opacity: 0.9;
  font-weight: 600;
  font-size: 16px;
  float: right;
}

.slider-azure #alertDialog .e-footer-content {
  padding-top: 0;
}

.slider-azure #processorPriceName,
.slider-azure #memoryPriceName,
.slider-azure #storagePriceName,
.slider-azure #cloudPriceName {
  opacity: 0.9;
  color: #000000;
  font-size: 16px;
}

.slider-azure #cloudPrice {
  opacity: 0.9;
  font-weight: 600;
  font-size: 26px;
  float: right;
}

.slider-azure #processorDialog {
  color: #000000;
  padding-top: 12px;
  padding-bottom: 12px;
}

.slider-azure #StorageDialog {
  color: #000000;
  padding-top: 12px;
  padding-bottom: 16px;
}

.bootstrap4 .slider-azure #pricing-slider .row {
	box-shadow: none;
}

</style>
