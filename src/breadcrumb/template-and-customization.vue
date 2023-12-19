<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper breadcrumb-control-wrapper">
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5 style="display: inline-block">Custom Breadcrumb</h5>
                <ejs-button id='reset' class="reset-btn e-small" v-on:click="btnClick"> Reset State</ejs-button>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb cssClass="e-breadcrumb-chips" :itemTemplate="'chipTemplate'">
                    <template v-slot:chipTemplate="{data}">
                        <ejs-chiplist id="chip-default">
                            <e-chips>
                                <e-chip :text="data.text"></e-chip>
                            </e-chips>
                        </ejs-chiplist>
                    </template>
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Specific Item Template</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb :enableNavigation='false' cssClass="e-specific-item-template" :itemTemplate="'specificItemTemplate'">
                    <template v-slot:specificItemTemplate="{data}">
                        <div>
                            <span v-if="data.text == 'Breadcrumb'" class="e-searchfor-text"><span style="margin-right: 5px">Search for:</span>
                            <a class="e-breadcrumb-text" :href="data.url" onclick="return false">{{data.text}}</a></span>
                            <a v-else class="e-breadcrumb-text" :href="data.url" onclick="return false">{{data.text}}</a>
                        </div>
                    </template>
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text= 'Home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
                        <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
                        <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
                        <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Custom Separator</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 e-bc-separator">
                <ejs-breadcrumb :separatorTemplate= "'separatorTemplate'">
                    <template v-slot:separatorTemplate>
                        <span class="e-icons e-arrow"></span>
                    </template>
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Custom Breadcrumb and Separator</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <ejs-breadcrumb cssClass="e-custom-breadcrumb" :separatorTemplate= "'separatorTemplate2'" :itemTemplate= "'customTemplate'">
                    <template v-slot:separatorTemplate2>
                        <div class="e-custom-separator"></div>
                    </template>
                    <template v-slot:customTemplate="{data}">
                        <div class="e-custom-item">
                            <div class="e-custom-icon">
                                <span class="e-bicons e-frame e-check"></span>
                                <span class="e-label">{{data.text}}</span>
                            </div>
                        </div>
                    </template>
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb> 
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Breadcrumb with Icons</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12  e-breadcrumb-icons">
                <ejs-breadcrumb>
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Program Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Commom Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Services" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Config.json" iconCss="e-bicons e-file"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5>Disabled Breadcrumb</h5>
            </div>
        </div>
        <div class="row material2">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12  e-breadcrumb-icons">
                <ejs-breadcrumb :beforeItemRender="beforeItemRenderHandler">
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Program Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Commom Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Services" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Config.json" iconCss="e-bicons e-file"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
            </div>
        </div>
    </div>
</div>

<div id="action-description">
    <p> This sample demonstrates the template functionalities of the <b>Breadcrumb</b> component. The breadcrumb item
        templates are customized using HTML and CSS.</p>
</div>
<div id="description">
    <p> The <code>Breadcrumb</code> component provides a way to customize the items using <code>itemTemplate</code> and
        the separators using
        <code>separatorTemplate</code> properties.
    </p>
    <p>The icons are used for the visual representation of the breadcrumb items. You can specify the
        <code>iconCss</code> property to display the icon within the corresponding breadcrumb item. By default, the icons are aligned in the left position.</p>
    <p>You can enable or disable the entire Breadcrumb by adding/removing the <b>e-disabled</b> class by using <code>cssClass</code> property.
    </p>
    <p>In this demo, we have used Shopping Cart details as Breadcrumb Items and customized the items using
        <code>itemTemplate</code> and <code>separatorTemplate</code>.</p>
    <p>And, showcased the file path of the config.json file with icons using the <code>iconCss</code> property and
        disabled the specific Breadcrumb items by adding <b>e-disabled</b> class to the item element in <code>beforeItemRender</code> event.</p>
    <p>More information about <code>Breadcrumb</code> component template feature can be found in this <a
            target='_blank'
            href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.
    </p>
</div>
</div>
</template>

<!-- custom code start -->
<style>
    .breadcrumb-control-wrapper {
        width: 90% !important;
        margin: 0 auto;
        min-width: 85px;
    }

    .breadcrumb-control-wrapper div.row {
        padding: 15px 0px;
    }

    .bootstrap .e-breadcrumb-chips,
    .bootstrap .e-custom-breadcrumb,
    .bootstrap4 .e-breadcrumb-chips,
    .bootstrap4 .e-custom-breadcrumb,
    .bootstrap-dark .e-breadcrumb-chips,
    .bootstrap-dark .e-custom-breadcrumb {
        margin-left: -16px;
    }

    .tailwind .e-breadcrumb,
    .tailwind-dark .e-breadcrumb {
        margin-left: -12px;
    }

    .tailwind .e-custom-breadcrumb,
    .tailwind-dark .e-custom-breadcrumb {
        margin-left: 0 !important;
    }

    .material .e-breadcrumb:not(.e-custom-breadcrumb),
    .material-dark .e-breadcrumb:not(.e-custom-breadcrumb) {
        margin-left: -8px
    }

    .fabric .e-breadcrumb:not(.e-custom-breadcrumb),
    .fabric-dark .e-breadcrumb:not(.e-custom-breadcrumb) {
        margin-left: -4px
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
</style>
<!-- custom code end -->
<style>
    @font-face {
    font-family: 'e-breadcrumb-icons';
    src:
    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

.e-breadcrumb-icons .e-bicons {
    font-family: 'e-breadcrumb-icons' !important;
    font-size: 14px;
}

.e-breadcrumb-chips .e-chip-list {
    padding: 0px;
}

.e-breadcrumb-chips .e-chip-list .e-chip {
    margin: 0px !important;
}

.e-breadcrumb-chips .e-breadcrumb-separator {
    font-size: 20px;
}

.e-custom-breadcrumb .e-bicons.e-arrow:before {
    content: "\e706";
    font-weight: 800;
    font-size: 12px;
}

.e-breadcrumb-icons .e-bicons.e-folder:before {
    content: "\e704";
}

.e-breadcrumb-icons .e-bicons.e-file:before {
    content: "\e703";
}

.e-custom-breadcrumb .e-custom-separator {
    width: 5px;
    background-color: #fff;
}

.e-custom-breadcrumb li + li {
    padding-left: 0;
}

.e-custom-breadcrumb .e-custom-item {
    width: auto;
    height: 40px;
    position: relative;
    background: #938bf6;
    padding: 10px 12px 10px 30px;
    color: white;
    cursor: pointer;
}

.e-custom-breadcrumb .e-breadcrumb-item:last-child .e-custom-item {
    cursor: default;
}

.e-custom-breadcrumb .e-custom-item:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

.e-custom-breadcrumb .e-custom-item:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #938bf6;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    z-index: 1;
}

.e-custom-breadcrumb li:first-child .e-custom-item:after {
    border-left: 0;
}

.e-custom-breadcrumb li:first-child .e-custom-item {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 10px 12px;
}

.e-custom-breadcrumb .e-custom-item:hover,
.e-custom-breadcrumb .e-custom-item:active{
    background-color: #7b74ce;
}

.e-custom-breadcrumb .e-custom-item:hover::before,
.e-custom-breadcrumb .e-custom-item:active::before{
    border-left: 20px solid #7b74ce;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

.e-custom-breadcrumb .e-custom-icon .e-frame {
    border-radius: 100%;
    background-color: #7dd284;
    border-color: #7dd284;
    width: 18px;
    height: 18px;
    display: inline-block;
}

.e-custom-breadcrumb .e-custom-item .e-label {
    vertical-align: top;
    padding-left: 10px;
    line-height: 1.5;
}

.e-custom-breadcrumb .e-custom-icon .e-frame::before {
    content: "\e707";
    font-size: 10px;
    vertical-align: text-bottom;
    margin-left: 4px
}

.e-custom-breadcrumb li:last-child .e-custom-icon .e-frame {
    background-color: #c9c5fb;
    border-color: #c9c5fb;
    color: #938bf6;
}

.e-custom-breadcrumb .e-breadcrumb-item,
.e-custom-breadcrumb .e-breadcrumb-separator
 {
    padding-right: 0px !important;
    padding-left: 0px !important;
}

.e-custom-breadcrumb .e-custom-icon {
    display: flex;
    align-items: center;
}

.tailwind .e-custom-breadcrumb .e-custom-icon {
    line-height: 1;
}

.e-searchfor-text {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
}

.e-searchfor-text .e-breadcrumb-text {
    padding-left: 0 !important;
}

.e-bigger .e-searchfor-text {
    font-size: 16px
}

.fabric .e-searchfor-text,
.fabric-dark .e-searchfor-text,
.highcontrast .e-searchfor-text {
    font-size: 18px;
}

.e-bigger.fabric .e-searchfor-text,
.e-bigger.fabric-dark .e-searchfor-text,
.e-bigger.highcontrast .e-searchfor-text {
    font-size: 21px;
}

.e-specific-item-template .e-breadcrumb-item:last-child a:hover {
    text-decoration: underline;
}


.e-custom-breadcrumb .e-bicons {
    font-family: 'e-breadcrumb-icons' !important;
    font-size: 14px;
}

.e-breadcrumb-chips .e-chip-list {
    padding: 0px;
}

.e-breadcrumb-chips .e-chip-list .e-chip {
    margin: 0px !important;
}

.e-breadcrumb-chips .e-breadcrumb-separator {
    font-size: 20px;
}

.e-bc-separator .e-arrow:before {
    font-weight: 800;
    font-size: 12px;
}

.e-bc-separator .e-arrow:before {
    content: "\e85f";
}

.bootstrap4 .e-bc-separator .e-arrow:before {
    content: "\e7ce";
}

.bootstrap5 .e-bc-separator .e-arrow:before,
.bootstrap5-dark .e-bc-separator .e-arrow:before,
.fluent .e-bc-separator .e-arrow:before,
.fluent-dark .e-bc-separator .e-arrow:before,
.tailwind .e-bc-separator .e-arrow:before,
.tailwind-dark .e-bc-separator .e-arrow:before {
    content: "\e7f9";
}

.e-breadcrumb-item .e-folder:before {
    content: "\e704";
}

.e-breadcrumb-item .e-file:before {
    content: "\e703";
}

.e-breadcrumb-chips ol,
.e-custom-breadcrumb ol {
    background-color: transparent !important;
}

.e-breadcrumb-chips .e-breadcrumb-item,
.e-breadcrumb-chips .e-breadcrumb-separator,
.e-custom-breadcrumb .e-breadcrumb-item,
.e-custom-breadcrumb .e-breadcrumb-separator {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}

.e-breadcrumb-chips .e-breadcrumb-item:not(:last-child):not(.e-breadcrumb-separator):active,
.e-breadcrumb-chips .e-breadcrumb-item:not(:last-child):not(.e-breadcrumb-separator):hover,
.e-custom-breadcrumb .e-breadcrumb-item:not(:last-child):not(.e-breadcrumb-separator):active,
.e-custom-breadcrumb .e-breadcrumb-item:not(:last-child):not(.e-breadcrumb-separator):hover {
    background-color: transparent;
}

.e-breadcrumb-chips .e-breadcrumb-item:last-child .e-chip {
    cursor: default;
}

.e-custom-breadcrumb .e-custom-separator {
    width: 5px;
    background-color: #fff;
}

.e-custom-breadcrumb li+li {
    padding-left: 0;
}

.e-custom-breadcrumb .e-custom-item {
    width: auto;
    height: 40px;
    position: relative;
    background: #938bf6;
    padding: 10px 12px 10px 30px;
    color: white;
    cursor: pointer;
}

.e-custom-breadcrumb .e-custom-item:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

.highcontrast .e-custom-breadcrumb .e-custom-item:after,
.material-dark .e-custom-breadcrumb .e-custom-item:after,
.fabric-dark .e-custom-breadcrumb .e-custom-item:after,
.bootstrap-dark .e-custom-breadcrumb .e-custom-item:after,
.tailwind-dark .e-custom-breadcrumb .e-custom-item:after {
    border-left: 20px solid black;
}

.e-custom-breadcrumb .e-custom-item:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #938bf6;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    z-index: 1;
}

.e-custom-breadcrumb li:first-child .e-custom-item:after {
    border-left: 0;
}

.e-custom-breadcrumb li:first-child .e-custom-item {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 10px 12px;
}

.e-custom-breadcrumb .e-custom-item:hover,
.e-custom-breadcrumb .e-custom-item:active {
    background-color: #7b74ce;
}

.e-custom-breadcrumb .e-custom-item:hover::before,
.e-custom-breadcrumb .e-custom-item:active::before {
    border-left: 20px solid #7b74ce;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

.e-custom-breadcrumb .e-custom-icon .e-frame {
    border-radius: 100%;
    background-color: #7dd284;
    border-color: #7dd284;
    width: 18px;
    height: 18px;
    display: inline-block;
}

.e-custom-breadcrumb .e-custom-item .e-bc-label {
    vertical-align: top;
    padding-left: 10px;
    line-height: 1.5;
}

.e-custom-breadcrumb .e-custom-icon .e-frame::before {
    content: "\e707";
    font-size: 10px;
    vertical-align: text-bottom;
    margin-left: 4px
}

.e-custom-breadcrumb li:last-child .e-custom-icon .e-frame {
    background-color: #c9c5fb;
    border-color: #c9c5fb;
    color: #938bf6;
}

.e-custom-breadcrumb .e-breadcrumb-item,
.e-custom-breadcrumb .e-breadcrumb-separator {
    padding-right: 0px !important;
    padding-left: 0px !important;
}

.e-custom-breadcrumb .e-custom-icon {
    display: flex;
    align-items: center;
}

.tailwind .e-custom-breadcrumb .e-custom-icon {
    line-height: 1;
}
</style>

<script>
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ChipListComponent, ChipsDirective, ChipDirective  } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from '@syncfusion/ej2-base';

export default {
  components: {
    'ejs-breadcrumb': BreadcrumbComponent,
    'e-breadcrumb-item': BreadcrumbItemDirective,
    'e-breadcrumb-items': BreadcrumbItemsDirective,
    'ejs-button': ButtonComponent,
    'e-chip': ChipDirective,
    'e-chips': ChipsDirective,
    'ejs-chiplist': ChipListComponent
  },
  data: function() {
    return {}
  },
  methods: {
    beforeItemRenderHandler: function(args) {
        if(args.item.text !== 'Program Files') {
               args.element.classList.add('e-disabled');
        }
    },
    btnClick: function() {
        var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = getComponent(breadcrumb, 'breadcrumb');
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    }
  }
}
</script>