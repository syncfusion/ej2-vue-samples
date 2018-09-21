<template>
  <div class="col-lg-10 control-section azure">
    <div class="content-wrapper">
        <div id="pricing-slider" class="pricing-slider">
            <div class="row">
                <div id="cloud-left-pane" class="col-lg-8 col-md-8 col-sm-8">
                    <div class="cloud-slider">
                        <div id="processor"></div>
                        <span class="label-text"> Processor </span>
                        <!-- processor Slider element -->
                        <ejs-slider ref='processorslider' :value='processorValue' :min="processorMin" :max="processorMax" :change='onChangeProcessor'
                            :created='onCreateProcessor'></ejs-slider>
                        <div class="sub-heading"> Each core included minimum 2.26 GHz power </div>
                    </div>
                    <div class="cloud-slider cloud-left-slider">
                        <div id="memory"></div>
                        <span class="label-text"> Memory </span>
                        <!-- memory Slider element -->
                        <ejs-slider ref='memoryslider' :value='memoryValue' :min="memoryMin" :max="memoryMax" :change='onChangeMemory' :created='onCreateMemory'></ejs-slider>
                        <div class="sub-heading"> Equal to burstable memory included </div>
                    </div>
                    <div class="cloud-slider cloud-left-slider">
                        <div id="storage"></div>
                        <span class="label-text"> Storage </span>
                        <!-- storage Slider element -->
                        <ejs-slider ref='storageslider' :value='storageValue' :min='storageMin' :max='storageMax' :change='onChangeStorage'
                            :created='onCreateStorage'></ejs-slider>
                        <div class="sub-heading"> 1000 GB bandwidth per month, at 100 Mbit/s uplink port </div>
                    </div>
                </div>
                <div id="cloud-right-pane" class="col-lg-4 col-md-4 col-sm-4">
                    <div class="cloud-right-content">
                        <div class="label-text"> Size Range </div>
                        <div class="btn-size">
                            <!-- Button element -->
                            <ejs-button id="xSmallBtn" cssClass = 'e-info' isPrimary="true" v-on:click.native='xsmallclick'>XS</ejs-button>
                            <ejs-button id="smallBtn" cssClass = 'e-info' isPrimary="true" v-on:click.native='smallclick'>S</ejs-button>
                            <ejs-button id="mediumBtn" cssClass = 'e-info' isPrimary="true" v-on:click.native='mediumclick'>M</ejs-button>

                            <ejs-button id="largeBtn" cssClass = 'e-info' isPrimary="true" v-on:click.native='largeclick'>L</ejs-button>
                            <ejs-button id="xLargeBtn" cssClass = 'e-info' isPrimary="true" v-on:click.native='xlargeclick'>XL</ejs-button>
                        </div>
                        <div class="label-text right-text"> Estimated Price </div>
                        <div id="cloud-slider-text">
                            <span id=dollar>$ </span>
                            <span id="pricevalue"></span>
                            <span class="suffix">/month</span>
                        </div>
                        <div class="discount">
                            <div class="cloud-slider-right">
                                <!-- cPanel Check Box element -->
                                <ejs-checkbox ref="cPanel" :change='sliderValueChange' label="Not required cPanel included" :checked="checkedstate" ></ejs-checkbox>

                            </div>
                            <div class="cloud-slider-right discount-pay">
                                <!-- discount Check Box element -->
                                <ejs-checkbox ref="discount" :change='sliderValueChange' label='12 Months <span class = "offer" > Save 25%.</span> Pay Monthly'
                                    :checked="checkedstate"></ejs-checkbox>
                            </div>
                        </div>
                        <!-- Button element -->
                        <div class="slider-button">
                            <ejs-button id="btn" class="dlgbtn" isPrimary="true" v-on:click.native='signup'>Signup Now</ejs-button>

                        </div>
                        <div id="dialogWrapper" class="content-wrapper">
                            <!-- Initialize alert Dialog -->
                            <ejs-dialog ref="alertDialog" id="alertDialog" :buttons='alertDlgButtons' :visible='isvisible' :animationSettings='animationSettings' :content='alertContent'
                                :width='width' :closeOnEscape='isvisible' :showCloseIcon='isvisible' :target='target'>
                            </ejs-dialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   <div id="action-description">
    <p>This sample demonstrates the cloud pricing slider used to calculate the cloud costs by considering web hosting, VPS hosting,
        cloud server providers. Drag the thumb over the bar for selecting processor, memory, and storage.
    </p>
</div>

<div id="description">
    <p>This sample calculates the cloud cost based on number of workloads, complexity of workloads, system, and monitoring requirements
        which is used under cloud operation.
    </p>
    <p>In this demo, default rendering of slider is used for selecting processor, memory, and storage. The estimated price for
        the selection will appear on the left pane.</p>
    <p>25% offer can be availed for an annual pack. This can be applied by checking the checkbox from the left pane.</p>
    <p>By default, cPanel will be included in the monthly pack. If you don't want, check the checkbox from the left pane which
        will reduce $10 from the estimated price.</p>
    <p>Different range of packs are also selected from the left pane toolbar which will have default configuration based on
        the range size.</p>
    <p>After choosing your pack, confirm it by clicking sign up which will show your selected package details in a dialog box.
    </p>

</div>

  </div>
</template>
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
        border: 1px solid #CCCCCC;
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
        color: #4A90E2;
    }

    .cloud-slider {
        display: block;
        position: relative;
    }


    #processor {
        background-color: #A06AFF;
    }

    #memory {
        background-color: #7ED321;
    }

    #storage {
        background-color: #4A90E2;
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
        color: #FFFFFF;
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
        background-color: #FFFFFF;
        border-left: 1px solid #CCCCCC;
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
        background-color: #FAFAFA;
    }

    .discount {
        padding-top: 20px;
        padding-bottom: 35px;
    }

    @media (max-width: 1010px) {
        #cloud-right-pane {
            border-top: 1px solid #d5d7d8 !important;
            border-left: none !important;
            border-width: 1px 0 0!important;
            padding-top: 15px !important;
            padding-left: 0!important;
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
    .highcontrast #StorgeDialog,
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
        background-color: #AE80FF;
    }

    .highcontrast #memory {
        background-color: #7ED321;
    }

    .highcontrast #storage {
        background-color: #61A4EF;
    }

    .highcontrast #cloud-left-pane {
        background-color: #1a1a1a;
    }

    .highcontrast #cloud-right-pane {
        background-color: #000;
    }

    .highcontrast #processorPriceName,
    .highcontrast #memoryPriceName,
    .highcontrast #storgePriceName,
    .highcontrast #cloudPriceName {
        color: white;
        opacity: 1;
    }

    #dialog-header {
        color: #000000;
        opacity: .87;
        font-family: Roboto-Medium;
        font-weight: 600;
        font-size: 20px;
    }

    #CloudDialog {
        color: #000000;
        padding-top: 14px;
        padding-bottom: 24px;
        border-top: 1px solid #CCCCCC;
    }

    #processorPrice,
    #memoryPrice,
    #storgePrice {
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
    #storgePriceName,
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

    #StorgeDialog {
        color: #000000;
        padding-top: 12px;
        padding-bottom: 16px;
    }
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { Placement, SliderChangeEventArgs } from '@syncfusion/ej2-inputs';
import { ButtonPlugin, CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(SliderPlugin);
Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DialogPlugin);
export default Vue.extend({
  data: function() {
    return {
     processorValue: 4,
     processorMin: 1,
     processorMax: 16,
     memoryValue: 4,
     memoryMin: 1,
     memoryMax: 12,
     storageValue: 300,
     storageMin: 10,
     storageMax: 500,
     storageStep: 10,
     isvisible: false,
     finalValue: 0,
     checkedstate: false,
     target: "#pricing-slider",
     width: '360px',
     animationSettings: { effect: 'None' },
     alertContent:  '<div id = "dialog-content"><div id = "dialog-header">Cloud Price Details</div>' +
        '<div id="processorDialog"><span id="processorPriceName">Processor Price</span><span id="processorPrice"></span></div>' +
        '<div id="MemoryDialog"><span id="memoryPriceName">Memory Price</span><span id="memoryPrice"></span></div>' +
        '<div id="StorgeDialog"><span id="storgePriceName">Storge Price</span><span id="storgePrice"></span></div>' +
        '<div id="CloudDialog"><span id="cloudPriceName">Estimated Price</span><span id="cloudPrice"></span></div></div>',
     alertDlgButtons: [{
        click: this.alertDlgBtnClick, buttonModel: { content: 'Close', isPrimary: true }
    }]
    };
  },
  mounted: function (){
    this.target = document.getElementById('pricing-slider'),
    this.sliderValueChange();  
  },
  methods:{      
    //Sets processor value
    onCreateProcessor: function(args) {
        document.getElementById('processor').innerHTML = this.processorValue + '  ' + 'CORE';
    },
    //Sets memory value
    onCreateMemory: function(args) {
        document.getElementById('memory').innerHTML = this.memoryValue + '  ' + 'GB';
    },
    //Sets storage value
    onCreateStorage: function(args) {
        document.getElementById('storage').innerHTML = this.storageValue + '  ' + 'GB';             
    },
    //Processor Slider value change method
    onChangeProcessor: function(args) {        
        this.onChange(document.getElementById('processor'), args.value, 'CORE');
    },

    //Memory Slider value change method
    onChangeMemory(args) {
        this.onChange(document.getElementById('memory'), args.value, 'GB');
    },

    //Storage Slider value change method
    onChangeStorage: function(args) {
        this.onChange(document.getElementById('storage'), args.value, 'GB');
    },
    //common method for Slider value change
    onChange: function(elem, value, notation) {
        elem.innerText = value + '  ' + notation;
        this.sliderValueChange();
    },
    sliderValueChange: function() {       
        var porcessorValue =  this.$refs.processorslider.$el.ej2_instances[0].value;
        var memoryValue = this.$refs.memoryslider.$el.ej2_instances[0].value;
        var storageValue = this.$refs.storageslider.$el.ej2_instances[0].value;
        //formula to calculate cloud price based on slider value
        this.finalValue = ((((porcessorValue * memoryValue) * 1000) + ((porcessorValue * memoryValue) * storageValue)
            + ((porcessorValue * memoryValue) * 100)) / 12).toFixed(2);
        if (this.$refs.cPanel.$el.ej2_instances && this.$refs.cPanel.$el.ej2_instances[0].checked) {
            this.finalValue = (this.finalValue - 10).toFixed(2);
        }
        if (this.$refs.discount.$el.ej2_instances && this.$refs.discount.$el.ej2_instances[0].checked) {
            this.finalValue = (this.finalValue - ((this.finalValue * 25) / 100)).toFixed(2);
        }
        document.getElementById('pricevalue').innerText = this.finalValue.toString();
    },

    alertDlgBtnClick: function() {
        this.$refs.alertDialog.$el.ej2_instances[0].hide();
    },
    xsmallclick: function(){
          this.sliderPriceValue(1, 1, 10);
    },
     smallclick: function(){
           this.sliderPriceValue(1, 2, 10);
    },
    mediumclick: function(){
          this.sliderPriceValue(4, 4, 300);;
    },
    largeclick: function(){
          this.sliderPriceValue(12, 6, 100);
    },
     xlargeclick: function(){
          this.sliderPriceValue(8, 12, 300);
    },
    sliderPriceValue(processor, memory, storage) {
        this.processorValue = processor;
        this.memoryValue = memory;
        this.storageValue = storage;
    },
    signup: function(){
            var processorPrice = document.getElementById('processorPrice');
            this.onChange(processorPrice, this.$refs.processorslider.$el.ej2_instances[0].value, 'CORE');
            var memoryPrice = document.getElementById('memoryPrice');
            this.onChange(memoryPrice, this.$refs.memoryslider.$el.ej2_instances[0].value, 'GB');
            var storgePrice = document.getElementById('storgePrice');
            this.onChange(storgePrice, this.$refs.storageslider.$el.ej2_instances[0].value, 'GB');
            var cloudPrice = document.getElementById('cloudPrice');
            cloudPrice.innerText = '$' + this.finalValue;
            this.sliderValueChange();
            this.$refs.alertDialog.$el.ej2_instances[0].show();
    }
  }
});
</script>