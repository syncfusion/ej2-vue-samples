<template>
    <div class="dialogContent">
      <ejs-tab id="tab_default">
            <e-tabitems>
                <e-tabitem :header='headerText0' :content="'GridTemplate'">
                  <template v-slot:GridTemplate>
                    <GridTemplateVue />
                  </template>
                </e-tabitem>
                <e-tabitem :header='headerText1' :content="'ScheduleTemplate'">
                  <template v-slot:ScheduleTemplate>
                    <ScheduleTemplateVue />
                  </template>
                </e-tabitem>
                <e-tabitem :header='headerText2' :content="'ChartTemplate'">
                  <template v-slot:ChartTemplate>
                    <ChartTemplateVue />
                  </template>
                </e-tabitem>
                <e-tabitem :header='headerText3' :content="'RichTextEditorTemplate'">
                  <template v-slot:RichTextEditorTemplate>
                    <RichTextEditorTemplateVue />
                  </template>
                </e-tabitem>
                <e-tabitem :header='headerText4' :content="'FormsTemplate'">
                  <template v-slot:FormsTemplate>
                    <FormsTemplateVue />
                  </template>
                </e-tabitem>
            </e-tabitems>
        </ejs-tab>
  </div>
</template>
<style scoped>
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
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-vue-navigations";
import GridTemplateVue from "./grid-template-vue.vue";
import ScheduleTemplateVue from "./schedule-template-vue.vue";
import ChartTemplateVue from "./chart-template-vue.vue";
import RichTextEditorTemplateVue from "./richtexteditor-template-vue.vue";
import FormsTemplateVue from "./forms-template-vue.vue";

 export default {
   components: {
    'ejs-tab': TabComponent,
    'e-tabitem': TabItemDirective,
    'e-tabitems': TabItemsDirective,
    GridTemplateVue,
    ScheduleTemplateVue,
    ChartTemplateVue,
    RichTextEditorTemplateVue,
    FormsTemplateVue
   },
   data: function(){
    return {
      headerText0: { text: "Grid"},
      headerText1: { text: "Scheduler"}, 
      headerText2: { text: "Chart" },
      headerText3: { text: "Rich Text Editor" },
      headerText4: { text: "Forms" },

    }
  }
  
}
</script>
