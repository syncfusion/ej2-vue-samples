<template>
  <div>
    <div class="col-lg-8 control-section dashboard-api" id="dashboard-control-section">
        <div class="content-wrapper" style="max-width:100%">
        <ejs-dashboardlayout ref="dashboard" id="api_dashboard" :columns="6" :allowResizing="true" :cellSpacing="spacing">
          <e-panels>
            <e-panel :row="0" :col="0" :sizeX="2" :sizeY="2" header="<div>Panel 1</div>"></e-panel>
            <e-panel :row="0" :col="2" :sizeX="2" :sizeY="2" header="<div>Panel 2</div>"></e-panel>
            <e-panel :row="0" :col="4" :sizeX="2" :sizeY="2" header="<div>Panel 3</div>"></e-panel>
            <e-panel :row="2" :col="0" :sizeX="4" :sizeY="2" header="<div>Panel 4</div>"></e-panel>
            <e-panel :row="2" :col="4" :sizeX="2" :sizeY="2" header="<div>Panel 5</div>"></e-panel>
          </e-panels>
        </ejs-dashboardlayout>
        </div>
        <div id="content"></div>
    </div>
      <div id="propertyWrapper" class="col-lg-4 property-section dashboard-api">
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
                    <ejs-button id="remove" cssClass="e-danger" v-on:click.native="removePanel" style="margin-left: 3px">Remove panel</ejs-button>
                </div>
            </div>
        </div>
    </div>
</div>
    <div id="action-description">
        <p>
            This sample demonstrates the properties of DashboardLayout component from the property pane. Select any combination of properties from the property pane to customize the DashboardLayout.
        </p>
    </div>
    <div id="description">
        <p>
            This sample allows to configure the <code><a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellspacing" target="_blank">cellSpacing</a></code>, 
    <code><a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowfloating" target="_blank">allowFloating</a></code> and
    <code><a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing" target="_blank">allowResizing</a></code> properties of the dashboard layout component.</p>
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
        count: 5,
        value: 10,
        spacing: [10,10]
    };
  },
  methods:{
      addPanel: function(args){
          this.count = this.count + 1;
          var ele = document.createElement('div');
          ele.id = this.count.toString();
          document.getElementById('content').appendChild(ele);
        var panel = [{
            'id': ele.id + '_layout', 'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,
            header: "<div>Panel "+ this.count +"</div>"
        }];
        this.$refs.dashboard.$el.ej2_instances[0].addPanel(panel[0]);
      },
      removePanel: function (args) {
        if (this.$refs.dashboard.$el.ej2_instances[0].panels.length > 0) {
            for (var i = this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1; i < this.$refs.dashboard.$el.ej2_instances[0].panels.length; i++) {
                this.$refs.dashboard.$el.ej2_instances[0].removePanel(this.$refs.dashboard.$el.ej2_instances[0].panels[this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1 - i].id);
            }
        }
      },
    onChange: function(args) {
        if (args.event.target.previousElementSibling.id === "floating") {
            this.$refs.dashboard.$el.ej2_instances[0].allowFloating = args.checked;
        }
        if (args.event.target.previousElementSibling.id === "resizing") {
            this.$refs.dashboard.$el.ej2_instances[0].allowResizing = args.checked;
        }
    },
    valueChange: function(args) {
        this.$refs.dashboard.$el.ej2_instances[0].cellSpacing = [parseInt(args.value, 10), parseInt(args.value, 10)];
    }
  }
});
</script>

<style>

    .dashboard-api .form-label {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 1.5;
        font-size: 13px;
        font-weight: 500;
    }

    .dashboard-api .row .e-btn {
        display: inline;
    }

    .dashboard-api #api_dashboard {
        padding: 10px;
        width: 100%;
    }

    .dashboard-api #api_dashboard.e-dashboardlayout .e-panel .panel-content {
        vertical-align: middle;        
        font-size: 15px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.61);
        text-align: center;
    }

    .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
        margin-bottom: 0;
        background-color: rgba(0, 0, 0, .03);
    }

    .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {
        height: calc(100% - 28px);
        width: 100%;
        display: block;
    }
    
    .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header .e-header-text {
        padding: 12px 0 12px 0;
    }
    
    .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {
        font-size: 15px;
        font-weight: 500;
        height: 37px;
        padding: 10px;
        vertical-align: middle;
        text-align: left;
        border-bottom: 0.5px solid #e3e3e3;
    }
    
    .dashboard-api .row {
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .dashboard-api .row-header {
        font-size: 13px;
        font-weight: 500;
    }
    
    .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {
        padding: 15px;
    }
    
    .dashboard-api.sb-property-border {
        border: 1px solid lightgray;
    }

/* highcontrast style */
body.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel {
    background: #000;
}

body.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
    color: rgba(255, 255, 255, 0.54);
}

body.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-resize.e-double {
    color: #fff;
    font-size: 8px;
    height: 16px;
    width: 16px;
}

 .property-section.dashboard .e-input-group.e-control-wrapper {
        width:122px;
    }

</style>
