<script>
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin,RadioButtonPlugin} from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin, ButtonPlugin, RadioButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            enableDock:  true,
            dockSize : '72px',
            width : '220px',
            position :'Left'
        }
    },
    methods: {
        newTabClick: function() {
          document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/docking-sidebar/index.html');
        },
        toggleClick: function() {
           this.$refs.dockSidebar.toggle();
        },
        positionChange:function(args) {
          this.position = args.event.target.id == "left" ? "Left" : "Right";
        }
    }
});
</script>

<template>
<div class="control-section">
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        Click the button to view the sample
    </div>
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new tab</a>
    </div>
    <div class="col-lg-12 col-sm-12 col-md-12">
        <div id="wrapper">
            <title>Essential JS 2 for Angular - Sidebar > Dock</title>
            <ejs-sidebar  id="dockSidebar" :enableDock='enableDock' :width='width' :dockSize='dockSize' ref="dockSidebar" :position = "position">
                <div class="dock">
                    <ul>
                        <li class="sidebar-item" id="toggle" v-on:click="toggleClick">
                            <span class="e-icons expand"></span>
                            <span class="e-text" title="menu">Menu</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons home"></span>
                            <span class="e-text" title="home">Home</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons profile"></span>
                            <span class="e-text" title="profile">Profile</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons info"></span>
                            <span class="e-text" title="info">Info</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons settings"></span>
                            <span class="e-text" title="settings">Settings</span>
                        </li>
                    </ul>
                </div>
            </ejs-sidebar>
            <div id="main-content container-fluid col-md-12 ">
                <div class="title">Main content</div>
                <div class="sub-title">Click the radio button to switch the sidebar position
                    <div className="center-align">
                        <div class="column">
                            <ejs-radiobutton id="left" label='Left' name='state' checked='true' :change="positionChange"></ejs-radiobutton>
                        </div>
                        <div class="column">
                            <ejs-radiobutton id="right" label='Right' name='state' :change="positionChange"></ejs-radiobutton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   <div id="action-description">
        Click the button to view the Sidebar sample in new tab.
    </div>
    <div id="description">
        This sample demonstrates the dock state. Here the list item has icon with text representation. On dock state only the icon listed out to interact.
    </div>
</div>
</template>
<style>
  /* Content area styles */

 .title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
}

#wrapper .column {
    display: inline-block;
    padding: 10px;
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

.sb-content-tab .center {
    display: block;
}
/* end of content area styles */
/* Sidebar styles */

.sb-content-tab #wrapper {
    display: none;
}

#dockSidebar.e-sidebar.e-right.e-close {
    visibility: visible;
    transform: translateX(0%);
}

#dockSidebar .e-icons::before {
    font-size: 25px;
}
/* dockbar icon Style */
#dockSidebar .home::before {
    content: '\e102';
}

#dockSidebar .profile::before {
    content: '\e10c';
}

#dockSidebar .info::before {
    content: '\e11b';
}

#dockSidebar .settings::before {
    content: '\e10b';
}

.e-sidebar .expand::before,
.e-sidebar.e-right.e-open .expand::before {
    content: '\e10f';
}

.e-sidebar.e-open .expand::before,
.e-sidebar.e-right .expand::before {
    content: '\e10e';
}
/* end of dockbar icon Style */

#dockSidebar.e-close .sidebar-item {
    padding: 5px 20px;
}

#dockSidebar.e-dock.e-close span.e-text {
    display: none;
}

#dockSidebar.e-dock.e-open span.e-text {
    display: inline-block;
}

#dockSidebar li {
    list-style-type: none;
    cursor: pointer;
}

#dockSidebar ul {
    padding: 0px;
}

#dockSidebar.e-sidebar ul li:hover span {
    color: white
}

#dockSidebar.e-sidebar.e-open .e-text {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 23px;
    font-size: 15px;
}

#dockSidebar.e-sidebar.e-open .e-icons {
    margin-right: 16px;
}

#dockSidebar.e-sidebar span.e-icons {
    color: #c0c2c5;
    line-height: 2
}

#dockSidebar.e-sidebar .e-open .e-icons {
    margin-right: 16px;
}

#dockSidebar.e-sidebar .e-open .e-text {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 23px;
    font-size: 15px;
}

.sidebar-item {
    text-align: center;
    border-bottom: 1px #e5e5e58a solid;
}

#dockSidebar.e-sidebar.e-open .sidebar-item {
    text-align: left;
    padding-left: 15px;
    color: #c0c2c5;
}

#dockSidebar.e-sidebar {
    background: #2d323e;
    overflow: hidden;
}
/* end of sidebar styles */
</style>