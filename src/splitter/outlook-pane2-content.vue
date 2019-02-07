<template>
<div>
    <ejs-listview id='listview' :dataSource='outlookdata' :cssClass='cssClass' :template='datatemplate'></ejs-listview>
</div>
</template>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { enableRipple } from "@syncfusion/ej2-base";
import datatempVue from "./data-vue-template.vue";

enableRipple(false);
Vue.use(ListViewPlugin);
export default Vue.extend({
  data: function() {
    return {
      cssClass: "e-list-template",
      outlookdata: [
       { Name: 'Selma Tally', content1: 'Apology marketing email', content2:'Hello Ananya Singleton' },
       { Name: 'Illa Russo', content1: 'Annual conference', content2: 'Hi jeani Moresa' },
       { Name: 'Camden Macmellon', content1: 'Reference request- Camden hester', content2: 'Hello Kerry Best,' },
       { Name: 'Garth Owen', content1: 'Application for job Title', content2: 'Hello Illa Russo' },
       { Name: 'Ursula Patterson', content1: 'Programmaer Position Applicant', content2: 'Hello Kerry best,' }
      ],
      datatemplate: function() {
        return {
          template: datatempVue
        };
      }
    };
  }
});
</script>
