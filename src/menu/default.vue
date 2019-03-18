<template>
<div class="control-section">
    <div class="menu-control">
        <ejs-menu :items="menuItems"></ejs-menu>
    </div>
<div id="action-description">
    <p>This sample demonstrates default functionalities of the <code>menu</code> component. Interact with <code>menu</code> using hover / click action.</p>
</div>
<div id="description">
    <p>
        The menu component is a graphical user interface that serves as navigation header for your application or site. 
        It provides a list of commands that can be carried out using the <code>items</code> property.
    </p>
    <p>
        In this demo, the menu is rendered with default type of <b>Horizontal</b> orientation. Using <code>orientation</code> property, you can change the orientation to <b>Vertical</b>.
    </p>
    <p>
        In mobile mode, the parent menu becomes scrollable if its size exceeds the viewport size.
    </p>
    <p>
        More information about Menu can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu/getting-started">documentation</a> section.
    </p>
</div>
</div>
</template>

<style>
    /**
    * ej2 Menu styles
    */
    @font-face {
        font-family: 'em-icons';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .e-menu-icons { 
        font-family: 'em-icons';
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        line-height: 1;
        text-transform: none;
    }

    .menu-control .e-menu-wrapper .e-file::before {
        content: '\e700';
    }

    .menu-control .e-menu-wrapper .e-edit::before {
        content: '\e701';
    }

    .e-menu-wrapper .e-tool::before {
        content: '\e7cf';
    }

    .e-menu-wrapper .e-cut::before {
        content: '\e704';
    }

    .e-menu-wrapper .e-copy::before {
        content: '\e705';
    }

    .e-menu-wrapper .e-paste::before {
        content: '\e706';
    }

    .e-menu-wrapper .e-open::before {
        content: '\e702';
    }

    .e-menu-wrapper .e-save::before {
        content: '\e703';
    }

    /* custom code start */
    .menu-control {
        margin-top: 45px;
        text-align: center;
    }
    /* custom code end */
</style>

<script>
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);

export default Vue.extend({
  data: function() {
    return {
      menuItems: [
        {
            text: 'File',
            iconCss: 'e-menu-icons e-file',
            items: [
                { text: 'Open', iconCss: 'e-menu-icons e-open' },
                { text: 'Save', iconCss: 'e-menu-icons e-save' },
                { separator: true },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            iconCss: 'e-menu-icons e-edit',
            items: [
                { text: 'Cut', iconCss: 'e-menu-icons e-cut' },
                { text: 'Copy', iconCss: 'e-menu-icons e-copy' },
                { text: 'Paste', iconCss: 'e-menu-icons e-paste' }
            ]
        },
        {
            text: 'View',
            items: [
                {
                    text: 'Toolbars',
                    items: [
                        { text: 'Menu Bar' },
                        { text: 'Bookmarks Toolbar' },
                        { text: 'Customize' },
                    ]
                },
                {
                    text: 'Zoom',
                    items: [
                        { text: 'Zoom In' },
                        { text: 'Zoom Out' },
                        { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { separator: true },
                { text: 'Options' }
            ]
        },
        {
            text: 'Help'
        }
      ]
    };
  }
});
</script>