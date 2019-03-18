<template>
    <div class="col-lg-12 control-section">
        <div class="template-menu-control">
            <ejs-menu :items="data" :fields="menuFields" :template="menuTemplate" cssClass="e-template-menu"></ejs-menu>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the template functionalities of the <code>menu</code> component. Interact with <code>menu</code> using hover / click to display sub menu pop-up items with its customized templates.
            </p>
        </div>
        <div id="description">
            <p>
                The menu component has an option to customize menu items using the <code>template</code> property, so that the menu items can be rendered according to the requirement.
            </p>
            <p>
                In this demo, the below customization are demonstrated.
            
            </p>
            <ul>
                <li>Header menu items and the Products sub menu items represents the customization of default rendering of li elements i.e. <b>data.category</b> in template.</li>
                <li>Services sub menu item represent the customization of li element with <code>badge</code> component.</li>
                <li>About Us sub menu item showed with <code>card</code> component in a single li.</li>
            </ul>
            <p>
                For more information, you can refer to the 
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu/data-source-binding-and-custom-menu-items/#custom-menu-items">
                templates</a> section from the documentation.
            </p>
        </div>  
    </div>
</template>
<!-- custom code start -->
<style>
/* EJ2 Menu - template sample styles */
.template-menu-control {
    margin-top: 45px;
    text-align: center;
}
/* Common ul & li styles */
.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul,
.e-template-menu.e-menu-wrapper ul.e-ul {
    padding: 0;
}
.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item,
.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item {
    display: flex;
    padding: 0 10px;
    outline-color: transparent;
}

/** Avatar customization */
.e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {
    background-color: inherit;
    font-size: 8px;
    margin-right: 8px;
    align-self: center;
    width: auto;
    overflow: visible;
}
.e-bigger .e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {
    font-size: 10px;
}

/** Badge customization */
.e-template-menu.e-menu-wrapper ul .e-menu-item .e-badge {
    margin-left: 10px;
    align-self: center;
    overflow: visible;
}

/** Card customization */
.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {
    width: 290px;
    font-size: inherit;
    background-color: inherit;
    border-color: transparent;
}
.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {
    width: 320px;
}
.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {
    white-space: normal;
    color: inherit;
    padding-top: 0;
    text-align: justify;
    font-size: inherit;
}
.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about {
    height: auto;
    padding: 0;
}
.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about.e-focused {
    background-color: transparent;
    outline-color: transparent;
    pointer-events: none;
}
</style>
<!-- custom code end -->

<script lang="ts">
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import dataSource from './template-data.json';
import menutemplateVue from "./menu-template.vue";

Vue.use(MenuPlugin);

export default Vue.extend({
  data: function() {
    return {
        data: dataSource.templateData,
        menuFields: {
            text: ['category', 'value'],
            children: ['options']
        },
        menuTemplate: () => {
            return {
                template : menutemplateVue
            }
        }
    };
  }
});
</script>