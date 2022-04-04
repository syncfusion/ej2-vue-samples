<template>
<div>
    <div class="col-lg-8 control-section dashboard-predefined" id="predefined-container">
        <div class="content-wrapper" style="max-width:100%">
        <ejs-dashboardlayout ref="dashboard" :columns="6" id="predefined-dashboard" :cellSpacing="spacing">
            <e-panels>
                <e-panel :row="0" :col="0" :sizeX="4" :sizeY="3" header="<div class='e-header-text'>Header Area</div><div class='header-border'></div>" content="<div class='panel-content'>Content Area</div>"></e-panel>
                <e-panel :row="0" :col="4" :sizeX="2" :sizeY="3" header="<div class='e-header-text'>Header Area</div><div class='header-border'></div>" content="<div class='panel-content'>Content Area</div>"></e-panel>
                <e-panel :row="3" :col="0" :sizeX="6" :sizeY="1" header="<div class='e-header-text'>Header Area</div><div class='header-border'></div>" content="<div class='panel-content'>Content Area</div>"></e-panel>
            </e-panels>
        </ejs-dashboardlayout>
        </div>
    </div>
      <div id="propertyWrapper" class="col-lg-4 property-section dashboard-predefined">
            <div class="property-panel-header">
                Properties
            </div>
            <div class="row property-panel-content" id="template">
                <div class="row row-header">
                    Choose dashboard layout
                </div>
            <div class="row" style="padding-top: 3px;">
                <div class="image-pattern-style e-selected-style" id="template1" data-id="1"></div>
                <div class="image-pattern-style" id="template2" data-id="2"></div>
                <div class="image-pattern-style" id="template3" data-id="3"></div>
            </div>
            <div class="row" style="padding-top: 3px">
                <div class="image-pattern-style" id="template4" data-id="4"></div>
                <div class="image-pattern-style" id="template5" data-id="5"></div>
                <div class="image-pattern-style" id="template6" data-id="6"></div>
            </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12" style="padding:10px">
                 <ejs-button id="reset" v-on:click.native="onButtonClick">Reset</ejs-button>
            </div>
      </div>
    <div id="action-description">
        <p>
            This sample demonstrates, the functionality of dynamically updating the panels inside the DashboardLayout by selecting it from the pre-defined values in the properties panel. Go to the properties panel section and select any of the pre-defined layout,
        based on selection the panles are updated in the dashboard layout dynamically inside the DashboardLayout. Click the <code>reset</code> button to reset the panels settings of the layout.
        </p>
    </div>
    <div id="description">
        <p>
            This sample demonstrates how to update the panels dynamically in the dashboard layout component.
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DashboardLayoutPlugin);

export default Vue.extend({
  data: function() {
    return {
        headerCount: 0,
        spacing: [10,10]
    };
  },
  methods:{
      onButtonClick: function(args){
        var selectedElement = document.getElementsByClassName('e-selected-style');
        this.$refs.dashboard.$el.ej2_instances[0].removeAll();
        this.initializeTemplate(selectedElement[0]);
      },
      initializeTemplate: function(element){
          var panels = [
    {
        'panel1': { 'sizeX': 4, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel3': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel3': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 2 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel3': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 3 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 2 },
        'panel4': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 },
        'panel5': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel4': { 'sizeX': 6, 'sizeY': 2, 'row': 3, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }
    }
]
          var updatedPanels = [];
          var index = parseInt(element.getAttribute('data-id'), 10) - 1;
          var panel = Object.keys(panels[index]).map(function (panelIndex){
            return panels[index][panelIndex];
         });
        for (var i = 0; i < panel.length; i++) {
            var panelModelValue = {
                id: i.toString(),
                row: panel[i].row,
                col: panel[i].col,
                sizeX: panel[i].sizeX,
                sizeY: panel[i].sizeY,
                header: "<div class='e-header-text'>Header Area</div><div class='header-border'></div>",
                content: "<div class='panel-content'>Content Area</div>"
            };
            updatedPanels.push(panelModelValue);           
        }
         this.$refs.dashboard.$el.ej2_instances[0].panels = updatedPanels;
      }
  },
  mounted(){
      var proxy = this;
      document.getElementById('template').onclick = function (args) {
        var target = args.target;
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            proxy.$refs.dashboard.$el.ej2_instances[0].removeAll();
            proxy.initializeTemplate(args.target);
        }
        target.classList.add('e-selected-style');
    };
  }
});
</script>
<style>
    .dashboard-predefined .row .e-btn {
        display: inline;
    }

    .dashboard-predefined #predefined-dashboard {
        padding: 10px;
        width: 100%;
    }
    .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {
        font-size: 14px;
        font-weight: 500;
        height: 37px;
        padding: 0 12px;
        vertical-align: middle;
        text-align: left;
        border-bottom: 0.5px solid #e3e3e3;
    } 
    .bootstrap5.e-bigger .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header,
	.bootstrap5-dark.e-bigger .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header	{
        font-size: 18px;
        font-weight: 600; 
        height: 68px;
        padding: 20px 0 20px 20px;
	}
    
    .dashboard-predefined #predefined-dashboard .panel-content {
        vertical-align: middle;
        font-size: 15px;
        font-size: 15px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.61);
        text-align: center;
    }
    .dashboard-predefined .e-panel .e-header-text {
        padding: 12px 0 12px 0;
    }

    .dashboard-predefined #predefined-dashboard .e-panel-content {
        height: calc(100% - 28px);
        width: 100%;
        display: block;
    }
    
    .dashboard-predefined #predefined-dashboard .e-panel .e-header-text {
        padding: 12px 0 12px 0;
    }
    
    .dashboard-predefined .row {
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .dashboard-predefined .row-header {
        font-size: 13px;
        font-weight: 500;
    }
    
    .dashboard-predefined #predefined-dashboard .e-panel-content {
        padding: 15px;
    }

    body.material-dark #predefined-dashboard .e-panel .panel-content,
    body.fabric-dark #predefined-dashboard .e-panel .panel-content,
    body.bootstrap-dark #predefined-dashboard .e-panel .panel-content,
    body.tailwind-dark #predefined-dashboard .e-panel .panel-content,
    body.highcontrast #predefined-dashboard .e-panel .panel-content,
    body.bootstrap5-dark #predefined-dashboard .e-panel .panel-content,
    body.fluent-dark #predefined-dashboard .e-panel .panel-content {
        color: #ffffff;
    }
    
    .dashboard-predefined #reset {
        display: block;
        margin: 0 auto;
        width: 90px;
    }
    
    @font-face {
        font-family: 'e-image-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    .dashboard-predefined .image-pattern-style {
        font-family: 'e-image-icons';
        speak: none;
        font-size: 80px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: transparent;
        background-size: contain;
        background-repeat: no-repeat;
        height: 80px;
        width: calc((100% - 12px) / 3);
        cursor: pointer;
        border: 1px solid #D5D5D5;
        background-position: center;
        float: left;
        margin-right: 3px;
        line-height: 77px;
        text-align: center;
    }
    
    .dashboard-predefined .e-selected-style {
        border-color: #006CE6;
        border-width: 2px;
    }
    
    .dashboard-predefined .image-pattern-style#template1::before {
        content: "\e700";
    }
    
    .dashboard-predefined .image-pattern-style#template2::before {
        content: "\e701";
    }
    
    .dashboard-predefined .image-pattern-style#template3::before {
        content: "\e702";
    }
    
    .dashboard-predefined .image-pattern-style#template4::before {
        content: "\e703";
    }
    
    .dashboard-predefined .image-pattern-style#template5::before {
        content: "\e704";
    }
    
    .dashboard-predefined .image-pattern-style#template6::before {
        content: "\e705";
    }
    
    .dashboard-predefined .image-pattern-style#template7::before {
        content: "\e703";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .dashboard-predefined .image-pattern-style#template8::before {
        content: "\e702";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .dashboard-predefined .image-pattern-style#template9::before {
        content: "\e701";
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .dashboard-predefined .header-border {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        border-top: 5px solid #2684ff
    }
    
    
    .dashboard-predefined.sb-property-border {
        border: 1px solid lightgray;
    }
/* highcontrast theme style */

body.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel {
    background: #000;
}

body.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
    color: rgba(255, 255, 255, 0.54);
}
body.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .panel-content {
    color: rgba(255, 255, 255, 0.54);
}
</style>
