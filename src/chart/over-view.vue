<template>
    <div>
        <div class="control-section dashboard-dynamic">
        <ejs-dashboardlayout  ref="DashbordInstance" :columns="8"  :cellSpacing="spacing" :cellAspectRatio='cellAspectRatio'  :resizeStop="onPanelResize">
             <e-panels>
                <e-panel style="height:100%; width:100%" :row="0" :col="0" :sizeX="columnSizeX" :sizeY="columnSizeY" header="<div class='charttitle' id='header1' >Sales - Yearly Performance</div>" :content="column"></e-panel>
                    <e-panel style="height:100%; width:100%" :row="0" :col="pieColumn" :sizeX="pieSizeX" :sizeY="pieSizeY" header="<div class='charttitle' id='header2' >Product Wise Sales - 2021</div>" :content="pie"></e-panel>
                    <e-panel style="height:100%; width:100%" :row="splineRow" :col="0" :sizeX="splineSizeX" :sizeY="splineSizeY" header="<div class='charttitle' id='header3' >Monthly Sales for 2021</div>" :content="spline"></e-panel>
             </e-panels>
        </ejs-dashboardlayout>   
        </div>
        <div id="action-description">
        <p>
            This sample shows an overview of <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-charts" >Vue Charts</a> that allows users to visualize data easily and take decisions based on it. There are different types of charts to create feature rich apps.
        </p>
        </div>
        <div id="description">
            <p>
                The Vue Chart is a well-crafted charting component to visualize data.
                In this example, you will see how to render and configure line, column, and pie charts with different features such as highlight, legend, tooltip, and annotation. The Chart uses <code>SfDataManager</code>, which supports both RESTful JSON data services binding and IEnumerable binding. 
            </p>
            <p>
                More information about the Vue Chart can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/getting-started/">documentation</a> section.
            </p>
        </div>
    </div>
</template>
    
<script>
import Vue from "vue";
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import overviewcolumntemplate from "./over-view-columntemplate.vue";
import overviewpietemplate from "./over-view-pietemplate.vue";
import overviewsplinetemplate from "./over-view-splinetemplate.vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
Vue.use(DashboardLayoutPlugin);

export default Vue.extend ({
    data: function() {
        return {
            spacing: [15, 15],
            cellAspectRatio: Browser.isDevice ? 1 : 0.8,
            columns: Browser.isDevice ? 2 : 8,
            columnSizeX: Browser.isDevice ? 1 : 5,
            columnSizeY: Browser.isDevice ? 1 : 2,
            pieColumn: Browser.isDevice ? 1 : 5,
            pieSizeX: Browser.isDevice ? 1 : 3,
            pieSizeY: Browser.isDevice ? 1 : 2,
            splineRow: Browser.isDevice ? 1 : 4,
            splineSizeX: Browser.isDevice ? 2 : 8,
          splineSizeY: Browser.isDevice ? 1 : 3,
          spline: function () {
                return { template : overviewsplinetemplate }
            },
          pie: function () {
                return { template : overviewpietemplate }
            },
          column: function () {
                return { template : overviewcolumntemplate }
            },
        };
    },
    methods: {
onPanelResize: function(args) {
        var dashboardObject = this.$refs.DashbordInstance;
    if (dashboardObject && args.element && args.element.querySelector('.e-panel-container .e-panel-content div')) {
        var chartObj = (args.element.querySelector('.e-panel-container .e-panel-content div.e-control')).ej2_instances[0];
        chartObj.height = '95%';
        chartObj.width = '100%';
        chartObj.refresh();
    }
    },
  },
});
</script>

<style>
        .e-dashboardlayout {
        padding: 20px;
        z-index: 0;
        }
        .e-panel {
        cursor: auto !important;
        }
        .e-panel-header{
        border: none !important;
        height: 50px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .charttitle {
        font-size: 15px !important;
        font-weight: bold !important;
        color: #737373;
        }
        .dashboard-dynamic .e-panel-content {
        height: calc(100% - 37px) !important;
        overflow: hidden;
        width:100%;
        }
    </style>