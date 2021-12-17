<template>
<div>
<div class="control-section">
    <div class="content-wrapper breadcrumb-control-wrapper">
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5 style="display: inline-block">Simple Breadcrumb</h5>
                <ejs-button id='reset' class="reset-btn e-small" v-on:click.native="btnClick"> Reset State</ejs-button>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb id="keyboard-navigation" :enableNavigation="false"></ejs-breadcrumb>
            </div>
        </div>
    </div>
</div>

<div id="action-description">
     <p> This sample demonstrates the keyboard navigation functionalities of the <b>Breadcrumb</b> component.</p>
</div>
<div id="description">
   <p>The <code>Breadcrumb</code> component can be interacted with keyboard navigation. Below key combinations can be used in Breadcrumb to initiate various actions.</p>
   <ul>
        <li><b>Tab</b> to navigate to the next item.</li>
        <li><b>Shift + Tab</b> to navigate to the previous item.</li>
        <li><b>Enter</b> to click the item.</li>
   </ul>
   <p>More information about Breadcrumb component Keyboard navigations can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.</p>
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
    
    .reset-btn {
        float: right;
        margin: 5px 2px 5px 0;
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
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from '@syncfusion/ej2-base';

Vue.use(BreadcrumbPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
  data: function() {
    return {
      
    };
  },
  methods: {
    btnClick: function() {
        var breadcrumb = document.getElementById('keyboard-navigation');
        var breadcrumbInst = getComponent(breadcrumb, 'breadcrumb');
        breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
    }
  }
});
</script>