<template>
<div>
<div class="control-section">
    <div class="content-wrapper breadcrumb-control-wrapper">
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Simple Breadcrumb</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation="false"></ejs-breadcrumb>
            </div>
        </div>
    </div>
</div>

<div id="action-description">
     <p> This sample demonstrates the Keyboard Navigation functionalities of the <b>Breadcrumb</b> component.</p>
</div>
<div id="description">
   <p>The <code>Breadcrumb</code> component can be interacted with keyboard navigation. Below key combinations can be used in Breadcrumb to initiate various actions.</p>
   <ul>
        <li><b>Tab</b> to navigate to the next item.</li>
        <li><b>Shift + Tab</b> to navigate to the previous item.</li>
        <li><b>Enter</b> to click the item.</li>
   </ul>
   <p>More information about <code>Breadcrumb</code> component Keyboard navigations can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.</p>
</div>
</div>
</template>

<!-- custom code start -->
<style scoped>
    .breadcrumb-control-wrapper {
           width: 90% !important;
           margin: 0 auto;
           min-width: 85px;
       }
       
       .breadcrumb-control-wrapper div.row {
           padding: 15px 0px;
       }
   
       @media only screen and (max-width: 480px) {
           .breadcrumb-control-wrapper {
               width: 92%;
           }
   
           .col-xs-12,
           .col-xs-4,
           .col-xs-12 {
               padding: 10px 5px;
               width: 100%;
           }
   
           .breadcrumb-control-wrapper div.row {
               padding: 0px;
           }
       }

    .tailwind .e-breadcrumb,
    .tailwind-dark .e-breadcrumb {
        margin-left: -12px;
    }

    .material .e-breadcrumb,
    .material-dark .e-breadcrumb {
        margin-left: -8px;
    }

    .fabric .e-breadcrumb,
    .fabric-dark .e-breadcrumb,
    .highcontrast .e-breadcrumb {
        margin-left: -4px;
    }
   </style>
   <!-- custom code end -->

<script>
import Vue from "vue";
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);

export default Vue.extend({
  data: function() {
    return {
      
    };
  }
});
</script>