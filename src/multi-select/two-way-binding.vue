<template>
<div class="control section">
  <div id="multiselectwrapper" class="col-lg-12 control-section">
    <div class="control-section">
      <div class="col-lg-12  content-wrapper" style="height: 350px">
        <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
          <ejs-multiselect id='first' :dataSource='sportsData' :mode='boxMode' :placeholder='waterMark' :value='val' v-model="game"></ejs-multiselect>
        </div>
        <div id='content' style="margin: 0 auto; width:250px; padding-top: 100px; padding-left:20px">
          <p id= 'display'><span class = 'selected'>Selected Value: </span><span class = 'display-value'>{{game}}</span></p>
        </div>
      </div>
    </div>
  </div> 

   <div id="action-description">
    <p>
      This sample demonstrates two-way binding support of the MultiSelect component. Enter value in the MultiSelect  components to see the action.
   </p>
 </div>
 <div id="description">
    <p>
        In this sample, two-way binding support is achieved using the v-model directive in Vue. When you change a value in the MultiSelect, the changed value gets updated automatically and can be displayed in the 'selected' label.
    </p>
    <p>
      The v-model directive updates the template every time whenever the model gets updated and vice versa.
    </p>
    <p>More information on the Multi Select instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/multi-select/getting-started.html" target="_blank"> documentation section</a>.</p>
   </div>
</div>

</template>

<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';
Vue.use(MultiSelectPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Favourite Sports",
      boxMode: "Box",
      sportsData: data['sportsData'],
      game: null
    };
  }
});
</script>


<style>

#multiselectwrapper #content #display .selected,.display-value{
  font-weight: 100;
  font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif",
    "-apple-system", "BlinkMacSystemFont";
    font-size: 14px;
}
#multiselectwrapper #content #display .selected{
  font-weight: 500;
}
</style>
