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
                    <ejs-breadcrumb :enableNavigation='false'>
                        <e-breadcrumb-items>
                            <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
                        </e-breadcrumb-items>
                    </ejs-breadcrumb>
                </div>
            </div>
            <div class="row material2">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                    <h5>Breadcrumb with Overflow</h5>
                </div>
            </div>
            <div class="row material2">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12  e-bc-overflow">
                    <ejs-breadcrumb maxItems='3' :enableNavigation='false' :separatorTemplate="separatorTemplate">
                         <e-breadcrumb-items>
                            <e-breadcrumb-item text= 'Breadcrumb' url= './breadcrumb'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Default' url= './breadcrumb/default'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Icons' url= './breadcrumb/icons'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Navigations' url= './breadcrumb/navigations'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Overflow' url= './breadcrumb/overflow'></e-breadcrumb-item>
                        </e-breadcrumb-items>
                    </ejs-breadcrumb>
                </div>
            </div>
            <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Active Last Breadcrumb</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation='false' enableActiveItemNavigation='false'>
                        <e-breadcrumb-items>
                            <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'All Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
                            <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
                        </e-breadcrumb-items>
                    </ejs-breadcrumb>
            </div>
        </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the basic rendering, overflow feature and navigable active item of the <b>Breadcrumb</b> component with icon support.</p>
    </div>
    <div id="description">
        <p>The <code>Breadcrumb</code> component is used as a navigational aid to identify the current page location within the navigational hierarchy structure of websites. It has list of items that can be populated using the <code>e-breadcrumb-item</code> tag.</p>
    <p><b>Simple Breadcrumb</b></p>
    <p>In this sample, the <code>Breadcrumb</code> is populated with Text, Icon, and Url.</p>
    <p><b>Breadcrumb with Overflow</b></p>
    <p>In the <code>Breadcrumb</code> component, <code>maxItems</code> and <code>overflowMode</code> properties were used to limit the number of breadcrumb items to be displayed.</p>
    <p>The following overflow mode's were available in the <code>Breadcrumb</code> component.</p>
    <ul>
        <li><code>Default</code> - Specified maxItems count will be visible and the remaining items will be hidden. While clicking on the previous item, the hidden item will become visible.</li>
        <li><code>Collapsed</code> - Only the first and last items will be visible, and the remaining items will be hidden in the collapsed icon. When the collapsed icon is clicked, all items become visible.</li>
    </ul>   
    <p>In this sample, the maxItems is set as 3 with overflowMode as Default. To prevent breadcrumb item navigation we have set <code>false</code> in <code>enableNavigation</code> property of <code>Breadcrumb</code> component.</p>
    <p><b>Active Last Breadcrumb</b></p>
    <p>In this sample, navigation for the last item is enabled by using <code>enableActiveItemNavigation</code> property.</p>
    <p>More information about <code>Breadcrumb</code> component can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.</p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);

export default Vue.extend({
  data: function() {
    return {
        separatorTemplate: '<span class="e-bicons e-arrow"></span>',
    };
  }
});
</script>

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

@font-face {
    font-family: 'e-breadcrumb-overflow-icons';
    src:
    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
    }

    .e-bc-overflow .e-bicons {
        font-family: 'e-breadcrumb-overflow-icons' !important;
        font-size: 14px;
    }

    .e-breadcrumb .e-breadcrumb-separator + .e-breadcrumb-separator {
        padding-left: 0;
        margin-left: -8px;
    }
   
    .e-bc-overflow .e-bicons.e-arrow {
        margin-top: -2px;
    }

    .bootstrap .e-bc-overflow .e-bicons.e-arrow,
    .bootstrap4 .e-bc-overflow .e-bicons.e-arrow,
    .bootstrap-dark .e-bc-overflow .e-bicons.e-arrow {
        margin-top: -3px;
    }

    .tailwind .e-bc-overflow .e-bicons.e-arrow,
    .tailwind-dark .e-bc-overflow .e-bicons.e-arrow {
        margin-top: -4px;
    }

    .e-bc-overflow .e-bicons.e-arrow:before {
        content: "\e706";
        font-weight: 800;
        font-size: 9px;
    }
</style>
