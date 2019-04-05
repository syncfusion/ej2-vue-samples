<template>
<div class="control-section">
    <div class="toolbar-menu-control">
        <ejs-toolbar ref="toolbar" :created="onCreated">
            <e-items>
                <e-item :template='menuTemplate'></e-item>
                <e-item :template='searchTemplate' align='Right' ></e-item>
                <e-item :template='ddbTemplate' align='Right' ></e-item>
                <e-item prefixIcon='em-icons e-shopping-cart' align='Right' ></e-item>
            </e-items>
        </ejs-toolbar>
    </div>
<div id="action-description">
    <p>This sample demonstrates the real use case of <code>menu</code> component in web application.</p>
</div>
<div id="description">
    <p>
        Menu utilizes the <code>items</code> property to represent the menu bar in web application. In this demo, the menu component is integrated with toolbar along with customized 
        search input box, dropdownbutton component and added shopping cart item using toolbar default option.
    </p>
    <p>
        More information about menu can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu/use-case-scenarios/#menu-in-toolbar">
        documentation</a> section.
    </p>
</div>
</div>
</template>

<style>
/**
 * ej2 Menu - toolbar integration styles
 */
@font-face {
    font-family: 'e-menu';
    src:
    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

.em-icons {
    font-family: 'e-menu';
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 1;
}
/* custom code start */
.toolbar-menu-control {
    margin: 45px auto 0;
    max-width: 950px;
}
/* custom code end */

/* Search and Shopping cart icons */
.toolbar-menu-control .e-search::before {
    content: '\e5b9';
}

.toolbar-menu-control .e-shopping-cart::before {
    content: '\e7e8';
}

/* Shopping cart icon size and customization */
.toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-shopping-cart {
    font-size: 20px;
    margin: 4px 1px 0 0;
}

.e-bigger .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-shopping-cart {
    font-size: 30px;
    margin-top: 7px; 
}

.e-bigger.material .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn {
    margin-top: 3.5px;
}

/* Overall UI customization */
.toolbar-menu-control .e-menu-wrapper {
    margin-right: 160px;
    border: none;
    vertical-align: middle;
}

.toolbar-menu-control .e-toolbar .e-toolbar-left .e-toolbar-item.e-template {
    padding: 0;
}


.material .toolbar-menu-control .e-toolbar .e-input-group .e-input {
    padding-bottom: 4px;
}

.material .toolbar-menu-control .e-toolbar .e-input-group .e-search {
    margin-bottom: 0;
}

.toolbar-menu-control .e-toolbar .e-hscroll-bar {
    overflow-y: hidden;
}

.toolbar-menu-control .e-toolbar .e-toolbar-items .e-toolbar-item #ddb {
    text-overflow: initial;
}

.fabric .toolbar-menu-control .e-toolbar-items .e-toolbar-left .e-menu-wrapper,
.fabric .toolbar-menu-control .e-toolbar-items .e-dropdown-btn {
    background-color: transparent;
}
.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn,
.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:hover,
.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:focus, 
.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:active {
	background-color: transparent;
	border-color: transparent;
	color: #6c757d;
	box-shadow: none;
}

/* custom code start */

@media only screen and (max-width: 1300px) {
    .toolbar-menu-control {
        width: auto;
    }
}
/* custom code end */

</style>

<script>
import Vue from "vue";
import { enableRipple, removeClass } from "@syncfusion/ej2-base";
import { MenuPlugin, ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import * as dataSource from './menu-data.json';

Vue.use(MenuPlugin);
Vue.use(ToolbarPlugin);
Vue.use(DropDownButtonPlugin);
enableRipple(false);

var menutemplateVue = Vue.component("demo1", {
  template: '<ejs-menu :items="menuItems"></ejs-menu>',
  data() {
    return {
      data: {},
      menuItems: dataSource.toolbarIntegrationData
    };
  }
});

var ddbtemplateVue = Vue.component("demo2", {
  template: '<ejs-dropdownbutton id="ddb" :items="items" content="Andrew"></ejs-dropdownbutton>',
  data() {
    return {
        data: {},
        items: dataSource.userData
    };
  }
});

export default Vue.extend({
  data: function() {
    return {
        menuTemplate: function() {
            return {
                template: menutemplateVue
            }
        },
        searchTemplate: '<div class="e-input-group"><input class="e-input" type="text" placeholder="Search" /><span class="e-input-group-icon em-icons e-search"></span></div>',
        ddbTemplate: function() {
            return {
                template: ddbtemplateVue
            }
        }
    };
  },
  methods: {
      onCreated: function() {
          this.$refs.toolbar.$el.ej2_instances[0].refreshOverflow();
          removeClass([this.$refs.toolbar.$el.querySelector('.e-shopping-cart')], 'e-icons');
        }
  }
});
</script>