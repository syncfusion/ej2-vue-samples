<template>
  <div>
    <div class="col-lg-8 control-section" id="dashboard-control-section">
        <ejs-dashboardlayout ref="dashboard" id="api_dashboard" :columns="6" :allowResizing="true" :cellSpacing="spacing">
          <e-panels>
            <e-panel :row="0" :col="0" :sizeX="2" :sizeY="2" header="<div>Panel 1</div>"></e-panel>
            <e-panel :row="0" :col="2" :sizeX="2" :sizeY="2" header="<div>Panel 2</div>"></e-panel>
            <e-panel :row="0" :col="4" :sizeX="2" :sizeY="2" header="<div>Panel 3</div>"></e-panel>
            <e-panel :row="2" :col="0" :sizeX="4" :sizeY="2" header="<div>Panel 4</div>"></e-panel>
            <e-panel :row="2" :col="4" :sizeX="2" :sizeY="2" header="<div>Panel 5</div>"></e-panel>
          </e-panels>
        </ejs-dashboardlayout>
        <div id="content"></div>
    </div>
      <div id="propertyWrapper" class="col-lg-4 property-section">
    <div class="property-panel-header">
        Properties
    </div>
    <div class="row property-panel-content">
        <div class="card-body">
            <div class="form-group row">
                <label for="settings-margin-input" class="col-sm-4 col-form-label form-label">CellSpacing</label>
                <div class="col-sm-8">
                    <ejs-numerictextbox placeholder="Ex: 10" :min="1" :max="20" :floatLabelType="Never" :change="valueChange" :value="value" id="cellspacing"></ejs-numerictextbox>
                </div>
            </div>
            <div class="form-group row">
                <label for="settings-bubble-up-input" class="col-sm-4 col-form-label form-label">AllowFloating</label>
                <div class="col-sm-8">
                    <ejs-checkbox :checked="true" :change="onChange" id="floating"></ejs-checkbox>
                </div>
            </div>
            <div class="form-group row">
                <label for="settings-bubble-up-input" class="col-sm-4 col-form-label form-label">AllowResizing</label>
                <div class="col-sm-8">
                    <ejs-checkbox :checked="true" :change="onChange" id="resizing"></ejs-checkbox>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                    <ejs-button id="add" cssClass="e-primary" v-on:click.native="addPanel">Add panel</ejs-button>
                    <ejs-button id="remove" cssClass="e-danger" v-on:click.native="removePanel">Remove panel</ejs-button>
                </div>
            </div>
        </div>
    </div>
</div>
    <div id="action-description">
        <p>
            This sample demonstrates the properties of DashboardLayout component from the property pane.
        Select any combination of properties from the property pane to customize the Dashboardlayout.
        </p>
    </div>
    <div id="description">
        <p>
            This sample allows to configure the <code>cellSize</code>, <code>cellSpacing</code>, <code>allowFloating</code> and
    <code>allowPushing</code> properties of the
    dashboardlayout component.
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(NumericTextBoxPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(DashboardLayoutPlugin);

export default Vue.extend({
  data: function() {
    return {
        count: 4,
        value: 10,
        spacing: [10,10]
    };
  },
  methods:{
      addPanel: function(args){
          var ele = document.createElement('div');
          ele.id = this.count.toString();
          document.getElementById('content').appendChild(ele);
        var panel = [{
            'id': ele.id + '_layout', 'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,
            header: "<div>Panel"+ this.count +"</div>"
        }];
        this.count = this.count + 1;
        this.$refs.dashboard.$el.ej2_instances[0].addPanel(panel[0]);
      },
      removePanel: function (args) {
        for (var i = this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1; i < this.$refs.dashboard.$el.ej2_instances[0].panels.length; i++) {
            this.$refs.dashboard.$el.ej2_instances[0].removePanel(this.$refs.dashboard.$el.ej2_instances[0].panels[this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1 - i].id);
        }
      },
    onChange: function(args) {
        if (args.event.currentTarget.id === "floating") {
            if (args.checked) {
                this.$refs.dashboard.$el.ej2_instances[0].allowFloating = true;
            } else {
                this.$refs.dashboard.$el.ej2_instances[0].allowFloating = false;
            }
        }
        if (args.event.currentTarget.id === "resizing") {
            if (args.checked) {
                this.$refs.dashboard.$el.ej2_instances[0].allowResizing = true;
            } else {

                this.$refs.dashboard.$el.ej2_instances[0].allowResizing = false;
            }
        }
    },
    valueChange: function(args) {
        this.$refs.dashboard.$el.ej2_instances[0].cellSpacing = [parseInt(args.value, 10), parseInt(args.value, 10)];
    }
  }
});
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

    #sizeX,
    #sizeY,
    #cellspacing {
        height: 18px !important;
    }
    
    .form-label {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 1.5;
        font-size: 13px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.61);
    }

    .row .e-btn {
        display: inline;
    }

    #api_dashboard {
        padding: 10px;
        width: 100%;
    }

    #api_dashboard.e-dashboardlayout .e-panel .panel-content {
        vertical-align: middle;        
        font-size: 15px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.61);
        text-align: center;
    }

    #dashboard-control-section{
        padding-left: 0px;
    }

    #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
        margin-bottom: 0;
        color: rgba(0, 0, 0, 0.54);
        background-color: rgba(0, 0, 0, .03);
    }

    #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {
        height: calc(100% - 28px);
        width: 100%;
        display: block;
    }
    
    #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header .e-header-text {
        padding: 12px 0 12px 0;
    }
    
    
    #api_dashboard.e-dashboardlayout.e-control .e-panel:hover {
        border: 0px;
    }
    
    #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {
            font-size: 15px;
        font-weight: 500;
        height: 37px;
        padding: 10px;
        vertical-align: middle;
        text-align: left;
        border-bottom: 0.5px solid rgba(0, 0, 0, .125);
    }
    
    .row {
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .row-header {
        font-size: 13px;
        font-weight: 500;
    }
    
    #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {
        padding: 15px;
    }
    
    #api_dashboard #reset {
        display: block;
        margin: 0 auto;
        width: 90px;
    }
    
    @font-face {
        font-family: 'e-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'e-image-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    .image-pattern-style {
        font-family: 'e-image-icons';
        speak: none;
        font-size: 80px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .image-pattern-style#template1::before {
        content: "\e700";
    }
    
    .image-pattern-style#template2::before {
        content: "\e701";
    }
    
    .image-pattern-style#template3::before {
        content: "\e702";
    }
    
    .image-pattern-style#template4::before {
        content: "\e703";
    }
    
    .image-pattern-style#template5::before {
        content: "\e704";
    }
    
    .image-pattern-style#template6::before {
        content: "\e705";
    }
    
    .image-pattern-style#template7::before {
        content: "\e703";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .image-pattern-style#template8::before {
        content: "\e702";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .image-pattern-style#template9::before {
        content: "\e701";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    
    div#control,
    .sb-property-border {
        border: 1px solid lightgray;
    }

    #api_dashboard.e-dashboardlayout.e-control .e-panel,
    #api_dashboard.e-dashboardlayout.e-control .e-panel:hover,
    #api_dashboard.e-dashboardlayout.e-control .e-panel:active {
        border: 1px solid rgba(0, 0, 0, .125);
    }


</style>