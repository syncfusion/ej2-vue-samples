<template>
<div class="control-section">
    <div class="scrollable-menu-control">
        <ejs-menu :items="menuItems" cssClass="e-custom-scroll" :enableScrolling="true" :animationSettings="animation" :beforeOpen="onBeforeOpen"></ejs-menu>
    </div>
<div id="action-description">
    <p>This sample demonstrates the <code>Scrollable</code> option in the Menu component. Click the scroll arrows to view the hidden menu items.</p>
</div>
<div id="description">
    <p>
        The menu component supports horizontal and vertical scrolling to render large menus and submenus in an adaptive way. This can be achieved by enabling the <code>enableScrolling</code> property and by restricting the corresponding menu/submenu size.
    </p>
    <p>
        In this demo, the parent menu is horizontally scrollable while the submenu and nested submenu are vertically scrollable.
    </p>
    <p>
        More information about Menu can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu">documentation</a> section.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
    /**
    * ej2 Menu styles
    */
    .scrollable-menu-control {
        margin-top: 45px;
        text-align: center;
    }

    /**
     * Restricting the parent menu wrapper size
     */
    .scrollable-menu-control .e-menu-wrapper.e-custom-scroll {
        width: 492px;
    }

    .e-bigger .scrollable-menu-control .e-menu-wrapper.e-custom-scroll {
        width: 565px;
    }

    @media only screen and (max-width: 500px) {
        .e-bigger .scrollable-menu-control .e-menu-wrapper.e-custom-scroll {
            width: 290px;
        }
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { closest } from '@syncfusion/ej2-base';
import * as dataSource from './menu-data.json';

Vue.use(MenuPlugin);

export default Vue.extend({
  data: function() {
    return {
      menuItems: dataSource.scrollableData,
      // Setting animation duration.
      animation: { duration: 800 }
    };
  },
  methods: {
      onBeforeOpen: function(args) {
        // Restricting sub menu wrapper height
        if (args.parentItem.text === 'Appliances') {
            closest(args.element, '.e-menu-wrapper').style.height = '320px';
        }
        if (args.parentItem.text === 'Mobile') {
            closest(args.element, '.e-menu-wrapper').style.height = '260px';
        }
      }
  }
});
</script>