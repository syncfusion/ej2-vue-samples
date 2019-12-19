<template>
    <div class="dialogContent">
      <ejs-tab id="tab_default">
            <e-tabitems>
                <e-tabitem :header='headerText0' :content='GridTemplate'></e-tabitem>
                <e-tabitem :header='headerText1' :content='ScheduleTemplate'></e-tabitem>
                <e-tabitem :header='headerText2' :content='ChartTemplate'></e-tabitem>
                <e-tabitem :header='headerText3' :content='RichTextEditorTemplate'></e-tabitem>
                <e-tabitem :header='headerText4' :content='FormsTemplate'></e-tabitem>
            </e-tabitems>
        </ejs-tab>
  </div>
</template>
<style>
    #tab_default .e-content .e-item {
        font-size: 12px;
        padding: 10px;
        text-align: justify;
    }
    #tab_default .e-icons.e-tab-icon {
        position: relative;
        top: 1px;
    }
  
</style>
<script>
import Vue from "vue";
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";
import GridTemplateVue from "./grid-template-vue.vue";
import ScheduleTemplateVue from "./schedule-template-vue.vue";
import ChartTemplateVue from "./chart-template-vue.vue";
import RichTextEditorTemplateVue from "./richtexteditor-template-vue.vue";
import FormsTemplateVue from "./forms-template-vue.vue";
Vue.use(TabPlugin);
 export default {
   data: function(){
        return {
           headerText0: { text: "Grid"},
           headerText1: { text: "Scheduler"}, 
           headerText2: { text: "Chart" },
           headerText3: { text: "Rich Text Editor" },
           headerText4: { text: "Forms" },
           GridTemplate: function () {
        return {
          template: GridTemplateVue
        }
      },
      ScheduleTemplate: function () {
        return {
          template: ScheduleTemplateVue
        }
      },
       ChartTemplate: function () {
        return {
          template: ChartTemplateVue
        }
      },
      RichTextEditorTemplate: function () {
        return {
          template: RichTextEditorTemplateVue
        }
      },
      FormsTemplate: function () {
        return {
          template: FormsTemplateVue
        }
      }
              }
   },
  
}
</script>
