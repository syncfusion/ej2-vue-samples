<template>
    <div class="col-lg-12 control-section">
        <div id="precision-rating-control">
                <div class="rating-content" >
                    <label>Full</label><br/>
                    <ejs-rating id='rating1' value='3.0'/>
                </div>
                <div class="rating-content">
                    <label>Half</label><br/>
                    <ejs-rating id='rating2' precision='Half' value='2.5'/>
                </div>
                <div class="rating-content">
                    <label>Quarter</label><br/>
                    <ejs-rating id='rating3' precision='Quarter' value='2.75'/>
                </div>
                <div class="rating-content">
                    <label>Exact</label><br/>
                    <ejs-rating id='rating4' precision='Exact' value='2.3'/>
                </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the different precision types supported in the Vue Rating component.
            </p>
        </div>
        <div id="description">
            <p>
                The <code>precision</code> property used to change the type of precision to <code>Quarter</code>, <code>Half</code>, <code>Full</code> and <code>Exact</code>.
            </p>
        </div>
    </div>
  </template>
  <style scoped>
      #precision-rating-control .rating-content {
          width: 240px;
          margin: 15px 0;
          min-height: 75px;
          padding:0;
          text-align: center;
      }
      .e-bigger #precision-rating-control .rating-content {
          width: 330px;
          margin: 15px 0;
          min-height: 75px;
          padding:0;
          text-align: center;
      }
      #precision-rating-control {
          margin: 6% auto;
          max-width: 800px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
      }
  </style>
  <script>
  import Vue from "vue";
  import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
  
  Vue.use(RatingPlugin);
  
  export default Vue.extend({});
  </script>
  