<template>
<div id="wrapper" class="control-section">
    <div id="sidebarmenu">
        <!-- header-section declaration -->
        <div>
            <ejs-toolbar cssClass="menuToolbar" v-on:clicked="toolbarCliked">
                <e-items>
                    <e-item prefixIcon="e-icon e-menu" tooltipText="Menu"></e-item>
                    <e-item :template="'folderTemplate'"></e-item>
                    <template v-slot:folderTemplate>
                    <div class="e-folder">
                        <div class="e-folder-name">Navigation Pane</div>
                    </div>
                    </template>
                </e-items>
            </ejs-toolbar>
        </div>
        <!-- main content declaration -->
        <div class="main-menu-content" id="maintext">
            <div class="menu-content">
                <div class="sidebar-heading"> Responsive Sidebar with Menu</div>
                <p class="paragraph-content">
                    The Vue Sidebar is an expandable and collapsible component that typically acts as a side
                    container to place primary or secondary content alongside the main content. It provides flexible
                    options that can be shown and hidden based on user interactions. Any type of HTML content or
                    component can be placed in the Vue Sidebar for quick access and easy navigation, like quick
                    references, menus, lists, and tree views.
                </p>
                <div class="sidebar-heading"> HTML side content position</div>
                <p class="paragraph-content">
                    The Vue Sidebar component positions its content to the left or right side of the main content
                    area. This option allows the placement of two sidebars on a page, one on the left and one on the
                    right, to show primary and secondary content simultaneously.
                </p>
                <div class="sidebar-heading"> Responsive sidebar</div>
                <p class="paragraph-content">
                    Auto closing the Vue Sidebar component’s content, makes the main content area more readable.
                </p>
            </div>
        </div>
        <!-- end of main content declaration sidebar element declaration -->
        <ejs-sidebar id="menuSidebar" class="sidebar-menu" ref="sidebarMenuInstance" :enableDock='true' dockSize="50px" width="220px" target=".main-menu-content" :isOpen="true" type="Auto">
            <div class="main-menu">
                <div>
                    <ejs-menu id="dockMenu" :items="menuItems" orientation='Vertical' cssClass='dock-menu'></ejs-menu>
                </div>
            </div>
        </ejs-sidebar>
    </div>
    <div id="action-description">
        <p>
            The <code>Sidebar</code> Menu sample demonstrates customizing the Sidebar with Menu. Click on the hamburger
            menu icon to expand/collapse the sidebar. Hover the Menu item to see the corresponding child menu items.
        </p>
    </div>
    <div id="description">
        <p>
            The <code>Sidebar</code> can allow to render custom components like TreeView, ListView, Menu, etc.
        </p>
        <p>
            In this sample, the Menu component is placed inside the Sidebar. Hover the Menu item to see the
            corresponding child menu items.
        </p>
    </div>
</div>
</template>
<script>
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-vue-navigations';
import { MenuComponent} from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

var menuItems= [
    {
        text: 'Overview',
        iconCss: 'icon-user icon',
        items: [
            { text: 'All Data' },
            { text: 'Category2' },
            { text: 'Category3' }
        ]
    },
    {
        text: 'Notification',
        iconCss: 'icon-bell-alt icon',
        items: [
            { text: 'Change Profile' },
            { text: 'Add Name' },
            { text: 'Add Details' }
        ]
    },
    {
        text: 'Info',
        iconCss: 'icon-tag icon',
        items: [
            { text: 'Message' },
            { text: 'Facebook' },
            { text: 'Twitter' }
        ]
    },
    {
        text: 'Comments',
        iconCss: 'icon-comment-inv-alt2 icon',
        items: [
            { text: 'Category1' },
            { text: 'Category2' },
            { text: 'Category3' }
        ]
    },
    {
        text: 'Bookmarks',
        iconCss: 'icon-bookmark icon',
        items: [
            { text: 'All Comments' },
            { text: 'Add Comments' },
            { text: 'Delete Comments' }
        ]
    },
    {
        text: 'Images',
        iconCss: 'icon-picture icon',
        items: [
            { text: 'Add Name' },
            { text: 'Add Mobile Number' }
        ]
    },
    {
        text: 'Users ',
        iconCss: 'icon-user icon',
        items: [
            { text: 'Mobile User' },
            { text: 'Laptop User' },
            { text: 'Desktop User' }
        ]
    },
    {
        text: 'Settings',
        iconCss: 'icon-eye icon',
        items: [
            { text: 'Change Profile' },
            { text: 'Add Name' },
            { text: 'Add Details' }
        ]
    }
];
export default {
    components: {
        'ejs-toolbar': ToolbarComponent,
        'e-items': ItemsDirective,
        'e-item': ItemDirective,
        'ejs-sidebar': SidebarComponent,
        'ejs-menu': MenuComponent
    },
    data: function() {
        return {
            menuItems: menuItems
        };
    },
    methods: {        
        toolbarCliked: function(args) {
            if(args.item.tooltipText == "Menu") {
                this.$refs.sidebarMenuInstance.toggle();
            }
        }
    }
};
</script>
<style>
    /* Specifies the sample level styles for the sidebar*/
    #wrapper .e-icon.e-menu {
        font-size: 24px;
    }

    #wrapper.control-section {
        padding: 15px 0px;
    }

    @media(max-width:500px) {
        #wrapper #maintext.main-menu-content {
            height: 800px;
        }
    }

    #wrapper .sidebar-menu {
        z-index: 20 !important;
    }

    #wrapper .dock-menu.e-menu-wrapper {
        border: 0px;
    }

    #maintext.main-menu-content {
        height: 500px;
    }

    #wrapper .sidebar-menu .e-menu-wrapper {
        border: 0px;
        height: 500px;
    }

    #maintext .menu-content {
        padding: 15px;
    }

    #maintext .paragraph-content {
        padding: 15px 0;
        font-weight: normal;
        font-size: 14px;
        text-align: initial;
    }

    .e-bigger #maintext .paragraph-content {
        font-size: 16px;
    }

    #maintext .sidebar-heading {
        font-size: 16px;
        font-weight: 500;
    }

    .e-bigger #maintext .sidebar-heading {
        font-size: 18px;
    }

    /* vertical-menu styles */
    .sidebar-menu .e-menu-wrapper ul .e-menu-item.e-menu-caret-icon {
        width: 220px;
    }

    .e-close .e-menu-wrapper ul .e-menu-item {
        width: 50px;
    }

    .e-close ul .e-menu-item.e-menu-caret-icon {
        padding-right: 12px;
    }

    .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item .e-caret {
        display: none;
    }

    .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item.e-menu-caret-icon,
    .sidebar-menu.e-dock.e-close .e-menu-wrapper ul.e-vertical {
        min-width: 0;
        width: 50px !important;
    }

    .sidebar-menu.e-dock.e-close .e-menu-wrapper ul.e-menu {
        font-size: 0;
    }

    .sidebar-menu.e-dock.e-close .e-menu-item .e-menu-icon {
        font-size: 20px;
        padding: 0;
    }

    .sidebar-menu,
    .sidebar-menu .e-menu-wrapper,
    .sidebar-menu .e-menu-wrapper ul {
        overflow: hidden;
    }

    /*Specifies the sample level font family for sidebar menu */
    @font-face {
        font-family: 'fontello';
        src: url('data:application/octet-stream;base64,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')
            format('truetype');
    }
    .sidebar-menu .icon {
        font-family: 'fontello';
    }

    .sidebar-menu .icon-up-hand:before {
        content: '\e801';
    }

    .sidebar-menu .icon-bell-alt:before {
        content: '\e802';
    }

    .sidebar-menu .icon-user:before {
        content: '\e803';
    }

    .sidebar-menu .icon-picture:before {
        content: '\e804';
    }

    .sidebar-menu .icon-comment-alt:before {
        content: '\e805';
    }

    .sidebar-menu .icon-tag:before {
        content: '\e806';
    }

    .sidebar-menu .icon-comment-inv-alt2:before {
        content: '\e807';
    }

    .sidebar-menu .icon-eye:before {
        content: '\e808';
    }

    .sidebar-menu .icon-globe:before {
        content: '\e809';
    }

    .sidebar-menu .icon-bookmark-empty:before {
        content: '\e810';
    }

    .sidebar-menu .icon-bookmark:before {
        content: '\e811';
    }

    /*Specifies the sample level styles for sidebar for dock & closed state */
    .bootstrap5 #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .bootstrap5-dark #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .tailwind #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .tailwind-dark #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 9px;
    }

    .bootstrap5.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .bootstrap5-dark.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .tailwind.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .tailwind-dark.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 15px;
    }

    .material #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 12px;
    }

    .material.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 16px;
    }

    .bootstrap #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .bootstrap-dark #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 13px;
    }

    .bootstrap4 #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 9px;
    }

    .bootstrap4.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 13px;
    }

    .fabric #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .fabric-dark #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 7px;
    }

    .fabric.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item,
    .fabric-dark.e-bigger #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 5px;
    }

    .highcontrast #wrapper .sidebar-menu.e-dock.e-close .e-menu-wrapper ul .e-menu-item {
        padding: 0 4px;
    }

    /*Specifies the sample level styles for sidebar for dock & opened state */
    .bootstrap5 #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .bootstrap5-dark #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .tailwind #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .tailwind-dark #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 15px 0 7px;
    }

    .material #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 8px 0 2px;
    }

    .bootstrap4 #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 16px 0 5px;
    }

    .bootstrap4.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 16px 0 2px;
    }

    .highcontrast #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 16px 0 10px;
    }

    .bootstrap #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .bootstrap-dark #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 14px 0 4px;
    }

    .fabric #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .fabric-dark #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 16px 0 9px;
    }

    .bootstrap5.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .bootstrap5-dark.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .tailwind.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .tailwind-dark.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 20px 0 -2px;
    }

    .material.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 20px 0 -2px;
    }

    .bootstrap.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .bootstrap-dark.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 24px 0 3px;
    }

    .fabric.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon,
    .fabric-dark.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 22px 0 9px;
    }

    .highcontrast.e-bigger #wrapper .sidebar-menu .e-menu-wrapper ul .e-menu-item .e-menu-icon {
        margin: 0 20px 0 8px;
    }

    /* Specifies the border bottom styles for toolbar in light theme*/
    .material #wrapper .e-toolbar,
    .tailwind #wrapper .e-toolbar,
    .bootstrap5 #wrapper .e-toolbar {
        border-bottom: 1px solid #eaeaeae0;
    }

    /* Specifies the border bottom styles for toolbar in dark theme*/
    .bootstrap5-dark #wrapper .e-toolbar,
    .tailwind-dark #wrapper .e-toolbar,
    .material-dark #wrapper .e-toolbar {
        border-bottom: 1px solid #eaeaea63;
    }

    /* Specifies the border right color for the sidebar in light theme*/
    .material .sidebar-menu,
    .fabric .sidebar-menu,
    .tailwind .sidebar-menu,
    .highcontrast .sidebar-menu,
    .bootstrap5 .sidebar-menu {
        border-right: 1px solid #eaeaeae0;
    }

    /* Specifies the border right color for the sidebar in dark theme*/
    .material-dark .sidebar-menu,
    .fabric-dark .sidebar-menu,
    .tailwind-dark .sidebar-menu,
    .bootstrap5-dark .sidebar-menu {
        border-right: 1px solid #eaeaea63;
    }

    /* Specifies the sample level styles for toolbar*/
    .material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 10px;
    }

    .bootstrap4 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 4px;
    }

    .bootstrap5.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap5-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .highcontrast.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: -2px;
    }

    .material.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .material-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 5px;
    }

    .bootstrap4.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 3px;
    }

    .bootstrap #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 6px;
    }

    .bootstrap.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .fabric.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .fabric-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 0px;
    }

    .tailwind.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .tailwind-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: -2px;
    }

    .e-bigger .e-folder {
        font-size: 18px;
    }

    .e-folder {
        text-align: center;
        font-weight: 500;
        font-size: 16px
    }

    .bootstrap5 .e-folder-name,
    .bootstrap5-dark .e-folder-name {
        margin-top: -2px;
    }

    .tailwind .e-folder-name,
    .tailwind-dark .e-folder-name,
    .bootstrap4 .e-folder-name,
    .bootstrap .e-folder-name,
    .bootstrap-dark .e-folder-name {
        margin-top: 3px;
    }

    .material .e-folder-name,
    .material-dark .e-folder-name {
        margin-top: 1px;
    }

    .material #sidebarmenu,
    .fabric #sidebarmenu,
    .tailwind #sidebarmenu,
    .fluent #sidebarmenu,
    .bootstrap5 #sidebarmenu {
        border: 1px solid #d7d7d7;
    }

    .material-dark #sidebarmenu,
    .fabric-dark #sidebarmenu,
    .tailwind-dark #sidebarmenu,
    .highcontrast #sidebarmenu,
    .fluent-dark #sidebarmenu,
    .bootstrap5-dark #sidebarmenu {
        border: 1px solid #ffffff;
    }
</style>