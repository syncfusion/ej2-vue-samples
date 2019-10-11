<template>
<div>
    <div class="control-section">
     <div style="padding:5px;text-align: right;">
         <ejs-button id="add" class="e-btn e-info"  v-on:click.native="addPanel"> Add Panel </ejs-button>
    </div>
    <ejs-dashboardlayout ref="DashbordInstance" :columns="5" id='defaultLayout' :allowResizing="true" :cellSpacing="spacing">
        <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">              
                <div class="text-align">
                        <div>0</div>
                </div>
            </div>
        </div>
        <div id="two" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="2">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">             
                 <div class="text-align">
                   <div>1</div>
                </div>
            </div>
        </div>
        <div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">              
                <div class="text-align">
                   <div>2</div>
                </div>
            </div>
        </div>
        <div id="four" class="e-panel" data-row="2" data-col="1" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">             
                 <div class="text-align">
                   <div>3</div>
                </div>
            </div>
        </div>
        <div id="five" class="e-panel" data-row="2" data-col="2" data-sizeX="2" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">              
                 <div class="text-align">
                   <div>4</div>
                </div>
            </div>
        </div>
        <div id="six" class="e-panel" data-row="0" data-col="3" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">              
                 <div class="text-align">
                  <div>5</div>
                </div>
            </div>
        </div>
        <div id="seven" class="e-panel" data-row="1" data-col="3" data-sizeX="1" data-sizeY="1">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                 <div class="text-align">
                    <div>6</div>
                </div>
            </div>
        </div>
        <div id="eight" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
            <span id="close" class="e-template-icon e-clear-icon"></span>
            <div class="e-panel-container">
                 <div class="text-align">
                   <div>7</div>
                </div>
            </div>
        </div>
    </ejs-dashboardlayout>   
    <div id="content"></div>
</div>
<div id="action-description">
    <p>
        The following sample demonstrates the default functionalities of the DashboardLayout component. Click the <code>Add Panel</code> button to add panels dynamically to the dashboard layout.
    </p>
</div>

<div id="description">
    <p>
        The DashboardLayout component provides the capability to arrange, <a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing" target="_blank">resize</a> and 
        reorder the panels within the dashboard layout.
    </p>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import { ButtonPugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(DashboardLayoutPlugin,ButtonPugin);

export default Vue.extend ({
    data: function() {
        return {
          count: 8,
          spacing: [10,10]
        };
    },
    methods: {
         addPanel: function(args) {
            var panel = [{
                'id': this.count.toString() + '_layout', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
                content: '<span id="close" class="e-template-icon e-clear-icon"></span><div class="text-align">' + this.count.toString() + '</div>'
            }];
            this.$refs.DashbordInstance.addPanel(panel[0]);
            var closeIcon = document.getElementById(this.count.toString() + '_layout').querySelector('.e-clear-icon');
            closeIcon.addEventListener('click', this.onCloseIconHandler);
            this.count = this.count + 1;
        },
        onCloseIconHandler: function(event) {
        if (event.target.offsetParent) {
            this.$refs.DashbordInstance.removePanel(event.target.offsetParent.id);
        }
    }
    },
    mounted(){
        var closeElement = document.querySelectorAll('.e-clear-icon');
        for (var i = 0; i < closeElement.length; i++) {
            closeElement[i].addEventListener('click', this.onCloseIconHandler);
        }
    }
});
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

    #defaultLayout.e-dashboardlayout.e-control .e-panel:hover span {
        display: block;
    }
    
    #defaultLayout .e-panel .e-panel-container .text-align{
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
    }
    
    .e-template-icon {
        padding: 10px;
        float: right;
        display: none;
    }
    
    .e-clear-icon::before {
        content: '\e932';
        font-size: 12px;
        font-family: 'e-icons';
    }
    
    .text-align {
        line-height: 160px;
    }
    
    .e-clear-icon {
        position: absolute;
        right: 0;
        cursor: pointer;
    }
/* high contrast style */
    body.highcontrast #defaultLayout.e-dashboardlayout.e-control .e-panel {
        background: #000;
    }
</style>