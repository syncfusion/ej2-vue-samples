import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

Vue.use(SidebarPlugin);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
    template: `<div id="app">    
     <div id="wrapper">
    <title>Essential JS 2 for Angular - Sidebar > SideBar with Menu</title>
    <div class="col-lg-12 col-sm-12 col-md-12">
        <div class="col-lg-12 col-sm-12 col-md-12">
<div class="header-section dock-menu" id="header">
        <ul class="header-list">
            <li id="hamburger" class="icon-menu icon list"  v-on:click="toggleClick"></li>
            <input type="text" placeholder="Search..." class="search-icon list">
            <li class="right-header list">
                <div class="horizontal-menu">
                <ejs-menu id="horizontal-menubar" :items='accountMenuItem'></ejs-menu>
                </div>
            </li>
            <li class="right-header list support">Support</li>
            <li class="right-header list tour">Tour</li>
        </ul>
    </div>
                <!-- sidebar element declaration-->
            <ejs-sidebar id="sidebar-menu" :width='width' :mediaQuery='mediaQuery' :target='target' :dockSize='dockSize' :enableDock='enableDock' class="dock-menu" ref="sidebarInstance">
                <div class="main-menu">
            <p class="main-menu-header">MAIN</p>
            <div>
                <ejs-menu id="main-menubar" :items='menuItems' orientation ="Vertical"></ejs-menu>
            </div>
        </div>
        
        <div class="action">
            <p class="main-menu-header">ACTION</p>
            <button class="e-btn action-btn" id="action-button">+ Button</button>
        </div>
            </ejs-sidebar>
            <!-- end of sidebar element -->
            <!-- main content declaration -->
           <div class="main-content" id="maintext">
        <div class="content">
            <div> Responsive Sidebar with Menu</div>
        </div>
    </div>
            <!--end of main content declaration -->
        </div>
</div>
`,

    data () {
        return {
            width:"220px",
            mediaQuery:'(min-width: 600px)',
           target: '.main-content',
           dockSize: '52px',
           enableDock: true,
         menuItems: [
           {
               text: 'Overview',
               iconCss: 'icon-globe icon',
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
                   { text: 'Add Mobil Number' },
                   { text: 'Add Imaage' },
               ]
           },
           {
               text: 'Users ',
               iconCss: 'icon-user icon',
               items: [
                   { text: 'Mobile1' },
                   { text: 'Mobile2' },
                   { text: 'Telephone' }
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
           },
           {
               text: 'Info',
               iconCss: 'icon-tag icon',
               items: [
                   { text: 'Facebook' },
                   { text: 'Mobile' },
               ]
           },
       ],
       accountMenuItem : [
           {
               text: 'Account',
               items: [
                   { text: 'Profile' },
                   { text: 'Sign out' },
               ]
           },
       ]
        }
    },
    methods: {
        newTabClick: function() {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/sidebar-menu/index.html');
         },
         
         toggleClick: function() {
            this.$refs.sidebarInstance.toggle();
         }
    }
});