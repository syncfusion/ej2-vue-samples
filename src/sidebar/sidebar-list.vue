<template>
<div id="wrapper" class="control-section">
    <!-- sample level element  -->
    <div id="sidelistwrapper">
        <!-- main content declaration -->
        <div>
            <ejs-toolbar cssClass="listToolbar" v-on:clicked="toolbarCliked">
                <e-items>
                    <e-item prefixIcon="e-icon e-menu" tooltipText="Menu"></e-item>
                    <e-item :template="'folderTemplate'"></e-item>
                    <template v-slot:folderTemplate>
                    <div class="e-folder">
                        <div class="e-folder-name">Language</div>
                    </div>
                    </template>
                </e-items>
            </ejs-toolbar>
        </div>
        <div class="listmaincontent">
            <div>
                <div id="listContent" class="listcontent">
                    Before getting into any programming language, one should have basic knowledge about HTML, CSS, and JavaScript. These are the basic building blocks of web designing. HTML describes the structure of a web page whereas CSS describes the presentation of the web page.
                </div>
            </div>
        </div>
        <!-- end of main content declaration -->
    </div>
    <ejs-sidebar ref="sidebarInstance" id="listSidebar" class="sidebar-list" width="250px" target=".listmaincontent" type="Auto" :isOpen='true'>
        <ejs-listview id="listSidebarList" :dataSource='ListData' cssClass="e-template-list" :template="listTemplates" :fields='listFields' v-on:select="OnSelect">
        </ejs-listview>
    </ejs-sidebar>
    <div id="action-description">
        <p>
            The <code>Sidebar</code> ListView sample demonstrates customizing the <code>Sidebar</code> with ListView. Click on the hamburger menu icon to expand/collapse the sidebar. Click the ListView item to see the corresponding item details.
        </p>
    </div>
    <div id="description">
        <p>
            The Sidebar can allow to render custom components like TreeView, ListView, Menu, etc.
        </p>
        <p>
            In this sample, the ListView component is placed inside the Sidebar for navigation. Click the ListView item to see the corresponding item details.
        </p>
    </div>
</div>
</template>

<script>
import { createApp } from 'vue';
import { SidebarComponent, ItemsDirective, ToolbarComponent, ItemDirective,} from '@syncfusion/ej2-vue-navigations';
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

var app = createApp();
var listTemplate = app.component("demo", {
    template: "<div class='list-wrapper'>"
                + "<span :class='data.pic' class='e-avatar e-avatar-xsmall e-avatar-circle'></span>"
                + "<span class='text e-text-content'>{{data.text}}</span>"
                + "</div>",
    data() {
        return {
            data: {}
        };
    }
});
var ListData = [
    { id: "1", text: "JavaScript", pic: "javascript", 
            description: "JavaScript (JS) is an interpreted computer programming language. " +
            "It was originally implemented as part of web browsers so that client-side scripts" + 
            "could interact with the user, control the browser, communicate asynchronously, and" +
            "alter the document content that was displayed. However, it has recently" +
            "become common in both game development and the creation of desktop applications." },
        { id: "2", text: "TypeScript", pic: "typescript", 
            description: "It is a typed superset of JavaScript that compiles to plain JavaScript." + 
            "TypeScript is an open-source, object-oriented programing language. It contains all elements of JavaScript" + 
            "It is a language designed for large-scale JavaScript application development, which can be executed on any" + 
            "browser, any Host, and any Operating System. TypeScript is a language as well as a set of tools." +
            " TypeScript is the ES6 version of JavaScript with some additional features." },
        { id: "3", text: "Angular", pic: "angular", 
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript." +
            " Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript" +
            " libraries that you import into your applications." },
        { id: "4", text: "React", pic: "react",
            description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces." +
            " It lets you compose complex UIs from small and isolated pieces of code called “components”." +
            " It can also render on the server using Node." },
        { id: "5", text: "Vue", pic: "vue", 
            description: "A progressive framework for building user interfaces. It is incrementally adoptable." +
            " The core library is focused on the view layer only and is easy to pick up and integrate with other" +
            " libraries or existing projects. On the other hand, Vue is also perfectly capable of powering" +
            " sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries." }
];
export default {
    components: {
    'ejs-sidebar': SidebarComponent,
    'ejs-listview': ListViewComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective,
  },
    data: function() {
        return {
            ListData: ListData,
            listTemplates: function() {
                return {
                    template: listTemplate
                };
            },
            listFields: { id: "id", text: "text" }
        }
    },
    methods: {
        // Listview select event handler
        OnSelect: function(args) {
          document.getElementById('listContent').innerHTML = args.data.description;
        },
        toolbarCliked: function(args) {
            if(args.item.tooltipText == "Menu") {
                this.$refs.sidebarInstance.toggle();
            }
        }
    }
};
</script>


<style>
    #listSidebarList {
        border: 0px;
    }

    /* Specifies sample level styles for Sidebar */
    #wrapper .listcontent {
        font-size: 14px;
        padding: 15px;
    }

    #wrapper.control-section {
        padding: 15px 0px;
    }

    #wrapper .listmaincontent {
        height: 380px;
    }

    #wrapper #left {
        float: left;
        width: 30px;
        height: 47px;
    }

    #wrapper .sidebar-list {
        z-index: 20 !important;
    }

    /*Specifies sample level style for Toolbar*/
    #wrapper .e-toolbar .e-icons {
        font-size: 20px;
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

    .material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .material-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap4.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .tailwind.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .tailwind-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 12px;
    }

    .e-bigger.material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 16px;
    }

    .bootstrap4 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap5.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap5-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 8px;
    }

    .bootstrap5 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap5-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 5px;
    }

    .bootstrap.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,
    .bootstrap-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {
        margin-left: 10px;
    }

    .e-folder {
        text-align: center;
        font-weight: 500;
        font-size: 16px
    }

    .e-bigger .e-folder {
        font-size: 18px;
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
        margin-left: 7px;
    }

    .material .e-folder-name,
    .material-dark .e-folder-name {
        margin-top: 1px;
        margin-left: 9px;
    }

    /*Specifies sample level style for ListView*/
    .bootstrap5 .e-template-list,
    .bootstrap5-dark .e-template-list,
    .tailwind .e-template-list,
    .tailwind-dark .e-template-list,
    .material3 .e-template-list,
    .material3-dark .e-template-list,
    .bootstrap4 .e-template-list {
        border: 0;
        border-radius: 0;
    }

    .e-template-list .e-list-item {
        line-height: 1.5;
        padding: 0 16px;
    }

    .list-wrapper {
        display: inline-flex;
        width: 100%;
    }

    .e-bigger .list-wrapper {
        padding-left: 8px;
    }

    .list-wrapper .text {
        padding-left: 14px;
    }

    .e-bigger .list-wrapper .text {
        padding-left: 20px;
    }

    .e-listbox-wrapper .list-wrapper .text {
        font-weight: bold;
        font-size: 13px;
    }

    .list-wrapper .e-avatar {
        background-color: transparent;
        float: left;
    }

    /* Specifies the background color of listview in dark theme*/
     .material-dark #wrapper .e-list-item,
    .bootstrap-dark #wrapper .e-list-item {
        background-color: transparent;
    }

    .material .list-wrapper .e-avatar,
    .material-dark .list-wrapper .e-avatar,
    .highcontrast .list-wrapper .e-avatar {
        margin-top: 3px;
    }

    .fabric .list-wrapper .e-avatar,
    .fabric-dark .list-wrapper .e-avatar {
        margin-top: 6px;
    }

    .material.e-bigger .list-wrapper .e-avatar,
    .material-dark.e-bigger .list-wrapper .e-avatar,
    .highcontrast.e-bigger .list-wrapper .e-avatar {
        margin-top: 7px;
    }

    .fabric-dark.e-bigger .list-wrapper .e-avatar,
    .fabric.e-bigger .list-wrapper .e-avatar,
    .bootstrap-dark.e-bigger .list-wrapper .e-avatar,
    .bootstrap.e-bigger .list-wrapper .e-avatar {
        margin-top: 10px;
    }

    .bootstrap .list-wrapper .e-avatar,
    .bootstrap-dark .list-wrapper .e-avatar {
        margin-top: 5px;
    }

    .bootstrap5 .list-wrapper .e-avatar,
    .bootstrap5-dark .list-wrapper .e-avatar {
        margin-top: -3px;
    }

    .tailwind .list-wrapper .e-avatar,
    .tailwind-dark .list-wrapper .e-avatar {
        margin-top: -1px;
    }

    .bootstrap5.e-bigger .list-wrapper .e-avatar,
    .bootstrap5-dark.e-bigger .list-wrapper .e-avatar {
        margin-top: 0px;
    }

    .e-bigger.bootstrap5 .sidebar-list .e-listview:not(.e-list-template) .e-list-item,
    .e-bigger.bootstrap5-dark .sidebar-list .e-listview:not(.e-list-template) .e-list-item {
        height: 43px;
    }

    .bootstrap4.e-bigger .sidebar-list .e-listview:not(.e-list-template) .e-list-item {
        padding: 12px 14px;
    }

    /*Specifies the icon styles for the ListView*/
    #listSidebarList .javascript {
        background-image: url('./images/javascript.svg');
    }

    .typescript {
        background-image: url('./images/typescript.svg')
    }

    .angular {
        background-image: url('./images/angular.svg');
    }

    .vue {
        background-image: url('./images/vue.svg');
    }

    .react {
        background-image: url('./images/react.svg');
     } 

    .material-dark #wrapper .listcontent {
        color: white;
    }

    /* Specifies the border right color for the sidebar in light theme*/
    .material .sidebar-list,
    .fabric .sidebar-list,
    .tailwind .sidebar-list,
    .highcontrast .sidebar-list,
    .bootstrap5 .sidebar-list {
        border-right: 1px solid #eaeaeae0;
    }

    /* Specifies the border right color for the sidebar in dark theme*/
    .material-dark .sidebar-list,
    .fabric-dark .sidebar-list,
    .tailwind-dark .sidebar-list,
    .bootstrap5-dark .sidebar-list {
        border-right: 1px solid #eaeaea63;
    }

    .material #sidelistwrapper,
    .fabric #sidelistwrapper,
    .tailwind #sidelistwrapper,
    .fluent #sidelistwrapper,
    .bootstrap5 #sidelistwrapper {
        border: 1px solid #d7d7d7;
    }

    .material-dark #sidelistwrapper,
    .fabric-dark #sidelistwrapper,
    .tailwind-dark #sidelistwrapper,
    .highcontrast #sidelistwrapper,
    .fluent-dark #sidelistwrapper,
    .bootstrap5-dark #sidelistwrapper {
        border: 1px solid #ffffff;
    }
</style>
