<template>
    <div class="col-lg-12 control-section">
        <div id="label-rating-control">
                <div class="rating-content" >
                    <label>Default</label><br/>
                    <ejs-rating id='rating1' value="3.0" :showLabel='true'/>
                </div>
                <div class="rating-content" >
                    <label>Left</label><br/>
                    <ejs-rating id='rating2' value="3.0" :showLabel='true' labelPosition='Left'/>
                </div>
                <div class="rating-content">
                    <label>Label Template</label><br/>
                    <ejs-rating id='rating3' value="3.0" :showLabel='true' labelTemplate="<span>${value} out of 5</span>"/>
                </div>
                <div class="rating-content">
                    <label>Top</label><br/>
                    <ejs-rating id='rating4' value="3.0" :showLabel='true' labelPosition='Top'/>
                </div>
                <div class="rating-content">
                    <label>Bottom</label><br/>
                    <ejs-rating id='rating5' value="3.0" :showLabel='true' labelPosition='Bottom'/>
                </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates label support, including label positioning and templates, in the Vue Rating component. 
            </p>
        </div>
        <div id="description">
            <p>
                You can show or hide labels by setting the <code>showLabel</code> property. The <code>labelPosition</code> property provides several built-in positions and the appearance of labels can be customized using the <code>labelTemplate</code> property.
            </p>
        </div>
    </div>
  </template>
  <style scoped>
      #label-rating-control .rating-content {
          width: 240px;
          margin: 15px 0;
          min-height: 75px;
          padding:0;
          text-align: center;
      }
      .e-bigger #label-rating-control .rating-content {
          width: 290px;
          margin: 15px 0;
          min-height: 75px;
          padding:0;
          text-align: center;
      }
      #label-rating-control {
          margin: 6% auto;
          max-width: 800px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
      }
  </style>
  <script>
  import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
  
  export default {
      components: { 'ejs-rating': RatingComponent }
  };
  </script>
  