<template>
<div>
  <div class="col-lg-8 control-section api" >
      <div class="content-wrapper" id="all-option-sample">
        <div class="sliderwrap">
     <ejs-slider id="apislider" ref="slider" :value="value" :min="min" :max="max" :type="type" :tooltip="tooltip" :ticks="ticks"
     :step="step" :showButtons="shwbuttons" :orientation="orientation" :enabled="isenable" :readonly="readonly" :change="onChange">

        </ejs-slider>
        </div>
      </div>
    </div>
<div class="col-lg-4 property-section" id="all-option-table">
    <table id="property" title="Properties">
        <tbody>
            <tr>
                <td style="width: 50%">
                    <div class="userselect">Value</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-numerictextbox format="n0" :value="numericvalue" :change="valueChange"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                    <div class="userselect">Min</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-numerictextbox id='min'  format="n0" value="0" :change="minvalueChange"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                    <div class="userselect">Max</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-numerictextbox id='max'  format="n0" value="100" :change="maxvalueChange"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                    <div class="userselect">Step</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-numerictextbox id='step' value="1" format="n0" :change="stepvalueChange"></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr id="desktop-checkbox-row-1">
                <td style="width: 50%">
                    <div class="userselect" style="padding-left: 0">
                        <ejs-checkbox id='button' :checked="checked" label="Show Buttons" :change="showButton"></ejs-checkbox>
                    </div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div style="padding-left: 0;padding-top: 0">
                        <ejs-checkbox id='disabled' :checked="checked" label="Disabled" :change="sliderDisabled"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="desktop-checkbox-row-2">
                <td style="width: 50%;padding-right: 10px">
                    <div style="padding-left: 0;padding-top: 0">
                        <ejs-checkbox id='readOnly' :checked="checked" label="Readonly" :change="readonlyChange"></ejs-checkbox>
                    </div>
                </td>
                <td style="width: 50%">
                    <div class="userselect" style="padding-left: 0">
                        <ejs-checkbox id='orientation' :checked="checked" label="Vertical Orientation" :change="orientationChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="mobie-checkbox-row-1">
                <td style="width: 50%">
                    <div class="userselect">Show Buttons</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-checkbox id='mb-button' :checked="checked" :change="showButton"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="mobile-checkbox-row-2">
                <td style="width: 50%">
                    <div class="userselect">Disabled</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-checkbox id='mb-disabled' :checked="checked" :change="sliderDisabled"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="mobile-checkbox-row-3">
                <td style="width: 50%">
                    <div class="userselect">Vertical Orientation</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-checkbox id='mb-orientation' :checked="checked" :change="orientationChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="mobile-checkbox-row-4">
                <td style="width: 50%">
                    <div class="userselect">Readonly</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div>
                        <ejs-checkbox id='mb-readOnly' :checked="checked" :change="readonlyChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    <div id="action-description">
    <p>This sample demonstrates the customization of Slider component by using its properties from property pane. Select any
        combination of properties from property pane to customize Slider component.</p>
</div>

<div id="description">
    <p>In this demo, default slider is rendered with minimal configuration.</p>
    <p>This sample can be customized further with the combination of Slider properties from the property pane. For example,</p>
    <ul>
        <li>Min, max, value and Steps can be changed from the property pane.</li>
        <li>Ticks can be enabled by selecting the ticks placement from the property pane.</li>
        <li>Tooltip can be enabled by checking Show tooltip checkbox from property pane.</li>
        <li>Vertical orientation can be enabled by checking vertical orientation from property pane and so on.</li>
    </ul>
</div>
    </div>


</template>

<style>
    .sb-mobile-prop-pane #all-option-table #desktop-checkbox-row-1,
    .sb-mobile-prop-pane #all-option-table #desktop-checkbox-row-2 {
        display: none;

    }

    .sb-mobile-prop-pane #all-option-table #mobie-checkbox-row-1,
    .sb-mobile-prop-pane #all-option-table #mobile-checkbox-row-2,
    .sb-mobile-prop-pane #all-option-table #mobile-checkbox-row-3,
    .sb-mobile-prop-pane #all-option-table #mobile-checkbox-row-4 {
        display: table-row;

    }

    #all-option-table #mobie-checkbox-row-1,
    #all-option-table #mobile-checkbox-row-2,
    #all-option-table #mobile-checkbox-row-3,
    #all-option-table #mobile-checkbox-row-4 {
        display: none;

    }

    #all-option-table .property-panel-section .property-panel-content table#property tr {
        height: 50px;
    }

    #all-option-sample .e-slider-container.e-vertical {
        margin-left: 40%;
    }

    #all-option-sample.content-wrapper {
        width: 50%;
        margin: 0 auto;
        min-width: 185px;
    }

    .api .sliderwrap{
        height: 340px;
    }

    .api .content-wrapper {
        width: 50%;
    }

    .sliderwrap label {
        padding-bottom: 26px;
        font-size: 13px;
        font-weight: 500;
        margin-top: 15px;
        text-align: left;
        width: 100%;
    }
    .api #all-option-sample .e-slider-container.e-horizontal {
        margin-top: 160px;
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
    .table{
        margin-top: 40px !important;
    }
</style>

<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(CheckBoxPlugin);
Vue.use(SliderPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
     tooltip:  { isVisible: true, placement: 'Before', showOn: 'Hover' },
     value: 30,
     min: 0,
     max: 100,
     shwbuttons: false,
     step: 1,
     checked: false,
     isenable: true,
     readonly: false,
     orientation: "Horizontal",
     ticks: { placement: 'After', largeStep: 20 },
      type: 'MinRange',
      numericvalue : 30
    };
  },
  methods: {
    onChange: function(args) {
      this.numericvalue = args.value;
    },
    valueChange: function(args) {
      this.value = args.value;
    },
    minvalueChange: function(args) {
      this.min = args.value;
    },
    maxvalueChange: function(args) {
      this.max = args.value;
    },
    stepvalueChange: function(args) {
      this.step = args.value;
    },
    //checkbox events
    showButton: function(args) {
      this.shwbuttons = args.checked;
    },
    sliderDisabled: function(args) {
      this.isenable = !args.checked ;
    },
    orientationChange: function(args) {
      args.checked ? this.orientation = 'Vertical' : this.orientation = 'Horizontal';
    },
    readonlyChange: function(args) {
      this.readonly = args.checked;
    },
    onScroll: function() {
         if(!isNullOrUndefined(document.getElementById('apislider') && this.$refs.slider)){
            this.$refs.slider.ej2Instances.refreshTooltip(this.$refs.slider.ej2Instances.tooltipTarget);
         }
    }
  },
 mounted: function(){
    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', this.onScroll.bind(this));
    }
 }
});
</script>
