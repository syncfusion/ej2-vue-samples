<template>
<div>
    <div class="control-section">
      <div>
           <div style="width:100%;height: 30px">
            <ejs-button style="float:right;width:75px;" id="toggleBtn" ref="toggleBtn" iconCss='edit' cssClass="e-outline e-flat e-primary" isToggle=true v-on:click.native='toggleClick'>Edit</ejs-button>
        </div>
        <div style="padding:5px;text-align: end;">
            <div class="add-widget-button e-control e-btn e-lib" id="dialogBtn" v-on:click="dialogButtonClick($event)">
                Add New Widget
            </div>
        </div>
    </div>
    <ejs-dashboardlayout ref="DashbordInstance" :columns="2" id='edit_dashboard' :allowResizing="false" :allowDragging="false" :cellSpacing="spacing" :resizeStop="onPanelResize">
         <e-panels>
                <e-panel :row="0" :col="0" :sizeX="1" :sizeY="1" header="<div>Line Chart</div>" :content="line"></e-panel>
                <e-panel :row="0" :col="1" :sizeX="1" :sizeY="1" header="<div>Pie Chart</div>" :content="pie"></e-panel>
                <e-panel :row="1" :col="0" :sizeX="2" :sizeY="1" header="<div>Spline Chart</div>" :content="spline"></e-panel>
            </e-panels>
    </ejs-dashboardlayout>   
 <ejs-dialog :header='header' ref="dialogObj" :content='contenttemplateVue'  :showCloseIcon='showCloseIcon' :target='target' :width='width' :visible='false' :isModal='true'></ejs-dialog>
</div>
<div id="action-description">
    <p>
        The following sample demonstrates a editable dashboard layout. Initially the DashboardLayout component doesn't
        allow to<a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowdragging" target="_blank">drag</a>, 
        <a href="https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing" target="_blank">resize</a> or reorder the panels. After clicking the edit button, 
        the layout becomes editable which allows to drag and reorder the
        panels as per the requirement and also you can add new panels to the layout with predefined templates by
        clicking the add new button and reorder them by dragging and placing in the required position. Drag and resizing
        of the panles are not applicable in mobile resolution.
    </p>
</div>

<div id="description">
    <p>
        The following sample demonstrates about using the dashboard layout as an editable layout.
    </p>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import lineTemplate from "./linetemplate.vue";
import pieTemplate from "./pietemplate.vue";
import splineTemplate from "./splinetemplate.vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(DialogPlugin);

Vue.use(DashboardLayoutPlugin);

export default Vue.extend ({
    data: function() {
        return {
          spacing: [10,10],
          header:'Add a Content',
          target:'.control-section',
          width:'43%',
          showCloseIcon: true,
          contenttemplateVue:'<div id="dialogcontent"><div><div id="linetemplate"><p class="dialog-text">Linechart (1x1) </p></div><div id="pietemplate"><p class="dialog-text">Piechart (1x1) </p></div><div id="splinetemplate"><p class="dialog-text">Splinechart (2x1) </p></div></div></div><div id="headerTemplate"><span id="close" class="e-template-icon e-clear-icon"></span></div></div>',
          spline: function () {
                return { template : splineTemplate }
            },
          pie: function () {
                return { template : pieTemplate }
            },
          line: function () {
                return { template : lineTemplate }
            },
        };
    },
    methods: {
         toggleClick: function(args) {
              if (this.$refs.toggleBtn.$el.textContent == 'Edit') { 
                    this.$refs.DashbordInstance.allowResizing = true;
                    this.$refs.DashbordInstance.allowDragging = true;
                    this.$refs.toggleBtn.$el.textContent = 'Save';
                    this.$refs.toggleBtn.iconCss = "save";
                    document.getElementById('dialogBtn').style.display = 'block';
            } else {
                this.$refs.DashbordInstance.allowResizing = false;
                this.$refs.DashbordInstance.allowDragging = false;
                this.$refs.toggleBtn.$el.textContent = 'Edit';
                this.$refs.toggleBtn.iconCss = "edit";
                document.getElementById('dialogBtn').style.display = 'none';
            }
        },
        onPanelResize: function(args) {
            var dashboardObject = this.$refs.DashbordInstance;
        if (dashboardObject && args.element && args.element.querySelector('.e-panel-container .e-panel-content div')) {
            var chartObj = (args.element.querySelector('.e-panel-container .e-panel-content div.e-control')).ej2_instances[0];
            chartObj.height = '95%';
            chartObj.width = '100%';
            chartObj.refresh();
        }
        },
        dialogButtonClick: function() {
              this.$refs.dialogObj.show();
              var proxy = this;
              this.$refs.dialogObj.$el.querySelector('#linetemplate').onclick = function (e) {
                   var panel = {
                       sizeX: 1,
                       sizeY: 1,
                       header: '<div>Line Chart</div>',
                       row: 0,
                       col:0,
                       content: proxy.line
                   }
                   proxy.$refs.DashbordInstance.addPanel(panel);
                   proxy.$refs.dialogObj.hide();
               }
               this.$refs.dialogObj.$el.querySelector('#pietemplate').onclick = function (e) {
                   var panel = {
                       sizeX: 1,
                       sizeY: 1,
                       header: '<div>Pie Chart</div>',
                       row: 0,
                       col:0,
                       content: proxy.pie
                   }
                   proxy.$refs.DashbordInstance.addPanel(panel);
                   proxy.$refs.dialogObj.hide();
               }
               this.$refs.dialogObj.$el.querySelector('#splinetemplate').onclick = function (e) {
                   var panel = {
                       sizeX: 2,
                       sizeY: 1,
                       header: '<div>Spline Chart</div>',
                       row: 0,
                       col:0,
                       content: proxy.spline
                   }
                   proxy.$refs.DashbordInstance.addPanel(panel);
                   proxy.$refs.dialogObj.hide();
               }
        } 
    },
});
</script>

<style>

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

.template{
    height: 100%;
    width: 100%;
}

#dialogBtn {
    display: none;
}

.dialog-text {
    height: 35px;
    border: 1px solid #80808029;
    vertical-align: middle;
    line-height: 35px;
    border-radius: 4px;
    padding-left: 12px;
    margin-bottom: 5%;
    cursor: pointer;
}

@media (max-width: 650px) {
    #togglebtn{
        display: none;
    }
}

.add-widget-button {
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 15px;
}

#edit_dashboard.e-dashboardlayout.e-control .e-panel:hover span {
    display: block;
}

#edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
    padding: 10px;
    border-bottom: 2px solid #e6e9ed !important;
    height: 35px;
    margin: 0 15px 0 15px;
}


#edit_dashboard .e-panel-content {
    height: calc(100% - 35px) !important;
    overflow: hidden;
    width:100%;
}

#edit_dashboard.e-dashboardlayout.e-control .e-panel,
#edit_dashboard.e-dashboardlayout.e-control .e-panel:hover,
#edit_dashboard.e-dashboardlayout.e-control .e-panel:active {
    border: 1px solid #bbb;
}

.e-dialog .e-dlg-header-content {
    border-bottom: none;
    padding: 18px 18px 18px 20px;
}

.edit::before {
        content: '\e501';
        font-family: 'e-sb-icons';
        /* color: #e3165b; */
        margin-left: -7px;
        vertical-align: middle;
    }

    .save::before {
        content: '\e500';
        font-family: 'e-sb-icons';
        /* color: #e3165b; */
        margin-left: -7px;
        vertical-align: middle;
    }


    /* custom code start*/
    @font-face {
        font-family: 'e-sb-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjttR/MAAAEoAAAAVmNtYXDlEOVaAAABjAAAADhnbHlmAM1kuQAAAcwAAAD8aGVhZBRipc8AAADQAAAANmhoZWEIUQQEAAAArAAAACRobXR4DAAAAAAAAYAAAAAMbG9jYQA6AH4AAAHEAAAACG1heHABEQA4AAABCAAAACBuYW1lWD3y/QAAAsgAAAIlcG9zdNvk7cwAAATwAAAANQABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAApr5cCV8PPPUACwQAAAAAANioMG8AAAAA2KgwbwAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAADACwABAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5QDlAQQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOUB//8AAOUA//8AAAABAAQAAAABAAIAAAAAADoAfgAEAAAAAAP0A/MAAwALABkAIwAAAREhEQEVMzUzFSE1IxEhETMVMxEjESERIxEjERUhESM1IzUhAx79xAEeR0j+m0gB9I9HR/02SEcD6EdI/KcBcf7iAR4CPI+P19f+4gEeSPzuAWb+mgNa/KZHA1lIRwAAAAMAAAAAA/QD9AADAAgAKwAACQEnCQEDJQEnNwcXPwc1Lw8PBgLH/ko2Abb9uT4BGQJC2m0/2z8HBgUFAwMCAQIEBQcICQoLDA0NDw8PEA0NDQwLCwsCkf5KNgG2/l7+5z4CQ9puP9s/CgsLCwwNDQ0QDw8PDQ0MCwoJCAcFBAIBAQEDAwUFBgAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAcAAQABAAAAAAACAAcACAABAAAAAAADAAcADwABAAAAAAAEAAcAFgABAAAAAAAFAAsAHQABAAAAAAAGAAcAKAABAAAAAAAKACwALwABAAAAAAALABIAWwADAAEECQAAAAIAbQADAAEECQABAA4AbwADAAEECQACAA4AfQADAAEECQADAA4AiwADAAEECQAEAA4AmQADAAEECQAFABYApwADAAEECQAGAA4AvQADAAEECQAKAFgAywADAAEECQALACQBIyBlai1pY29uUmVndWxhcmVqLWljb25lai1pY29uVmVyc2lvbiAxLjBlai1pY29uRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAGoALQBpAGMAbwBuAFIAZQBnAHUAbABhAHIAZQBqAC0AaQBjAG8AbgBlAGoALQBpAGMAbwBuAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAGoALQBpAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHNhdmUEZWRpdAAAAAAA) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

[class^="sf-icon-"],
[class*=" sf-icon-"] {
    font-family: 'e-sb-icons' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#edit_dashboard{
    display: block;
}
/* highcontrast style */

body.highcontrast #edit_dashboard.e-dashboardlayout.e-control .e-panel {
    background: #000;
}

body.highcontrast #edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {
    color: rgba(255, 255, 255, 0.54);
}

</style>