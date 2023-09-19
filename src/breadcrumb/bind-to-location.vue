<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper breadcrumb-control-wrapper">
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5 style="display: inline-block">Bind to Location</h5>
                <ejs-button id='reset' class="reset-btn e-small" v-on:click="btnClick"> Reset State</ejs-button>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation="false"></ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>URL Binding and Navigation</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :beforeItemRender="beforeItemRenderHandler" url="https://ej2.syncfusion.com/vue/demos/#/bootstrap5/breadcrumb/bind-to-location.html"></ejs-breadcrumb>
            </div>
        </div>
    </div>
</div>    
      
<div id="action-description">
    <p> This sample demonstrates the navigation functionality of the <b>Breadcrumb</b> component.</p>
</div>
<div id="description">
    <p>The <code>Breadcrumb</code> component can be rendered by using the href(URL) of the current page or by using <code>url</code> property when the user is not specified the breadcrumb items using <code>items</code> property.
    In this demonstration, URL navigation is enabled <b>URL Binding and Navigation</b> and <code>beforeItemRender</code> event is used to customize rendering Breadcrumb item.</p>
    <p>More information about Breadcrumb component navigations feature can be found in this <a target='_blank' href="https://ej2.syncfusion.com/documentation/breadcrumb/data-binding/#items-based-on-current-url">documentation section</a>.</p>
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

<script>
import { BreadcrumbComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from '@syncfusion/ej2-base';

export default {
  components: {
    'ejs-breadcrumb': BreadcrumbComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
        themeName : 'https://ej2.syncfusion.com/vue/demos/#/bootstrap5/breadcrumb/bind-to-location.html'.split('/')[6],
    };
  },
  methods: {
    btnClick: function() {
      var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
      for (var i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = getComponent(breadcrumb, 'breadcrumb');
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    },
    beforeItemRenderHandler: function(args) {
      if (args.item.text == 'demos') {
        args.item.url = args.item.url + '/#/' + this.themeName;
      }
      else if (args.item.text == 'breadcrumb') {
        args.item.url = 'https://ej2.syncfusion.com/vue/demos/#/bootstrap5/breadcrumb/default.html';
      }
      else if (args.item.text == '#' || args.item.text == this.themeName || args.item.text == 'vue') {
        args.cancel = true;
    }
  }
  }
}
</script>