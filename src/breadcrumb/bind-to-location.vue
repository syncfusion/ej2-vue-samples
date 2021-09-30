<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper breadcrumb-control-wrapper">
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Bind to Location</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation="false"></ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>URL Binding</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation="false" url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"></ejs-breadcrumb>
            </div>
        </div>
    </div>
</div>    
      
<div id="action-description">
    <p> This sample demonstrates the Navigation functionality of the <b>Breadcrumb</b> component.</p>
</div>
<div id="description">
    <p>The <code>Breadcrumb</code> component can be rendered by using the href(url) of the current page or by using <code>url</code> property when the user is not specified the breadcrumb items using <code>e-breadcrumb-item</code> tag.</p>
    <p>More information about <code>Breadcrumb</code> component navigations feature can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.</p>
</div>
</div>
</template>

<style>
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