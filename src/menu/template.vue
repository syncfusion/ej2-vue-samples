<template>
    <div class="col-lg-12 control-section">
        <div class="template-menu-control">
            <ejs-menu :items="data" :fields="menuFields" :template="'menuTemplate'" cssClass="e-template-menu">
                <template v-slot:menuTemplate="{data}">
                    <span v-if="data.category">{{data.category}}</span>
                    <div v-else-if="data.value" style="width: 100%;display: flex;justify-content: space-between;">
                        <img v-if="data.url" class="e-avatar e-avatar-small" :src="data.url" />
                            <span style="width:100%;">{{data.value}}</span>
                            <span v-if="data.count" class="e-badge e-badge-success">{{data.count}}</span>
                    </div>
                    <div tabindex="0" class="e-card" v-else>
                        <div class="e-card-header">
                            <div class="e-card-header-caption">
                                <div class="e-card-header-title">About Us</div>
                            </div>
                        </div>
                        <div class="e-card-content">{{data.about.value}}</div>
                        <div class="e-card-actions">
                            <button class="e-btn e-outline" style="pointer-events: auto;">Read More</button>
                        </div>
                    </div>
                </template>
            </ejs-menu>
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
.e-template-menu.e-menu-wrapper .e-ul .e-menu-item{
    height: 36px;
    line-height: 36px;
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

.material3 .e-menu-wrapper ul .e-menu-item .e-avatar,
.material3-dark .e-menu-wrapper ul .e-menu-item .e-avatar,
.e-bigger .material3 .e-menu-wrapper ul .e-menu-item .e-avatar,
.e-bigger .material3-dark .e-menu-wrapper ul .e-menu-item .e-avatar
{
    height: 24px;
}

.material3 .e-menu-wrapper ul.e-ul .e-menu-item .e-card,
.material3-dark .e-menu-wrapper ul.e-ul .e-menu-item .e-card,
.e-bigger .material3 .e-menu-wrapper ul.e-ul .e-menu-item .e-card,
.e-bigger .material3-dark .e-menu-wrapper ul.e-ul .e-menu-item .e-card
{
    border-radius: 0;
}
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import dataSource from './template-data.json';

Vue.use(MenuPlugin);

export default Vue.extend({
  data: function() {
    return {
        data: dataSource.templateData,
        menuFields: {
            text: ['category', 'value'],
            children: ['options']
        }
    };
  },
});
</script>
