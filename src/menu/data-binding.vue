<template>
<div class="control-section">
    <div class="binding-menu-control">
        <ejs-menu :items="menuItems"></ejs-menu>
    </div>
<div id="action-description">
    <p>This sample demonstrates the way of data binding in <code>menu</code> component with JavaScript object array (local data source). Interact with <code>menu</code> using hover / click action.</p>
</div>
<div id="description">
    <p>
        The menu component loads the data through the <code>items</code> property, where the data can either be structured as hierarchical or self-referential data, i.e. mapped with id and parentId fields.
    </p>
    <p>    
        In this demo, the component is bound with the list type data where the parent-child relation is referred by id and parentId mapping fields.
    </p>
    <p>
        More information about Menu can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu/data-source-binding-and-custom-menu-items/#data-binding">data binding</a> section.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
    /**
    * ej2 Menu styles
    */
    .binding-menu-control {
        margin-top: 45px;
        text-align: center;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import * as dataSource from './menu-data.json';

Vue.use(MenuPlugin);

export default Vue.extend({
  data: function() {
    return {
      menuItems: dataSource.dataBinding
    };
  }
});
</script>