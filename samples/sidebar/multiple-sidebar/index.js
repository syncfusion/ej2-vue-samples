import Vue from "vue"; import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(ListViewPlugin); Vue.use(SidebarPlugin); Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
new Vue({ 
    el: '#app',
    template: `
<div id="app">
    <div id="wrapper">
        <title>Essential JS 2 for Angular - Sidebar > API</title>
        <!-- sample level element declaration -->
        <div class="col-lg-12 col-sm-12 col-md-12">
            <!--docksidebar content declaration-->
            <ejs-sidebar id="docksidebar" ref="docksidebar" width="255px" dockSize="60px" enableDock="true" :type='docktype'>
                <!--collapsed state sidebar inner content-->
                <div class="dockelement">
                    <ul class="firstlist">
                        <li class="listitem" id="toggle" title="toggle" v-on:click='toggleDockSidebar()'>
                            <span class="e-icons expand"></span>
                        </li>
                        <li class="listitem">
                            <span class="e-icons plus" id="search" title="search" v-on:click='togglePopupSidebar()'></span>
                        </li>
                        <li class="listitem">
                            <span class="e-icons search" id="plus" title="add task" v-on:click="searchAlert()"></span>
                        </li>
                    </ul>
                </div>
                <!-- expanded state sidebar inner content -->
                <div class="middleelement" tabindex="0">
                    <ul class="middlelist" tabindex="0">
                        <li class="middleitem" tabindex="0">
                            <span class="e-icons dashboard" id="dashboard" title="dashboard" tabindex="0" v-on:click="dashboardAlert()"></span>
                            <span class="e-text">Dashboards</span>
                        </li>
                        <li class="middleitem" tabindex="0">
                            <span class="e-icons projects" id="projects" title="projects" tabindex="0" v-on:click="projectsAlert()"></span>
                            <span class="e-text">Projects</span>
                        </li>
                        <li class="middleitem" tabindex="0">
                            <span class="e-icons issues" id="issues" title="filters" tabindex="0" v-on:click="filterAlert()"></span>
                            <span class="e-text">Issues and filters</span>
                        </li>
                        <li class="middleitem" tabindex="0">
                            <span class="e-icons tasks" id="tasks" title="tasks" tabindex="0" v-on:click="taskAlert()"></span>
                            <span class="e-text">Task items</span>
                        </li>
                    </ul>
                </div>
                <div class="lastelement">
                    <ul class="lowlist">
                        <li class="lastitem">
                            <span class="e-icons question" title="queries" id="question" v-on:click="queriesAlert()"></span>
                        </li>
                        <li class="lastitem">
                            <span class="e-icons info" title="info" id="infos" v-on:click="infoAlert()"></span>
                        </li>
                        <li class="lastitem">
                            <span class="e-icons settings" title="settings" id="settings" v-on:click="settingsAlert()"></span>
                        </li>
                    </ul>
                </div>
            </ejs-sidebar>
            <!--end of docksidebar content declaration-->
            <!-- search state sidebar declaration -->
            <ejs-sidebar id="searchsidebar" ref="searchsidebar" width="400px" :type='searchType' closeOnDocumentClick="true" showBackDrop="true" >
                <div id="buttonelement">
                    <div class='btncontainer'>
                        <span class="e-icons arrowbutton" id="arrowButton" v-on:click='togglePopupSidebar'></span>
                    </div>
                </div>
                <div id="contentcontainer">
                    <input class="inputsearch" placeholder="Search" spellcheck="false" type="text">
                    <div class="labelcontent">
                        <span> Projects</span>
                    </div>
                    <ul id="innercontainer">
                        <li class="sidebar-inner">
                            <span>Angular</span>
                        </li>
                        <li class="sidebar-inner">
                            <span>ASP.NET MVC</span>
                        </li>
                        <li class="sidebar-inner">
                            <span>ASP.NET Core</span>
                        </li>
                        <li class="sidebar-inner">
                            <span>JavaScript</span>
                        </li>
                    </ul>
                </div>
            </ejs-sidebar>
            <!-- end of search state sidebar -->
            <!-- right side sidebar declaration-->
            <ejs-sidebar id="rightsidebar" ref="rightsidebar" width="300px" :type='rightType' closeOnDocumentClick="true"
                showBackDrop="true" zIndex="2000" position="Right">
                <!--right side sidebar inner content -->
                <div id="rightcontent">
                    <div id="rightcontainer">
                        <div class="rightspan">
                            <div class="rightspandiv one e-icons saves">
                            </div>
                            <div class="rightspandiv">Recent Issues</div>
                        </div>
                    </div>
                    <div id="nextrightcont">
                        <ejs-listview id="sample-list" height="250px" :dataSource="dataSource" :select="SelectEvent"></ejs-listview>
                    </div>
                </div>
            </ejs-sidebar>
            <!-- end of right side sidebar -->
            <!--main content declaration -->
            <div class="e-main-content container-fluid">
                <div class="header-element">
                    <span>Multiple Sidebar with dock mode enabled</span>
                </div>
                <div id="rightdiv">
                    <ejs-button id="flatbtn" cssClass="e-btn e-medium e-round e-info e-icon-btn" v-on:click.native="toggleRightSidebar" iconCss="e-icons recent"></ejs-button>
                </div>
                <div id="maincontent">
                    <div class="texting fisrtrow"></div>
                    <div class="texting fisrtrow"></div>
                    <div class="texting secondrow"></div>
                    <div class="texting secondrow"></div>
                    <div class="texting thirdrow"></div>
                    <div class="texting thirdrow"></div>
                    <div class="texting thirdrow"></div>
                    <div class="texting thirdrow"></div>
                </div>
            </div>
        </div>
        <!--end of sample level element declaration -->
    </div>
</div>
`,

    data: function () {
        return {
            docktype: 'Auto',
            searchType: 'Over',
            rightType: 'Over',
            dataSource: ["Sidebar expansion types", "DatePicker events analysis", "DatePicker methods analysis", "Theme studio testing", "Animation Art"]
        }
    },
    methods: {
        toggleDockSidebar() {
            this.$refs.docksidebar.toggle();
        },
        togglePopupSidebar() {
            this.$refs.searchsidebar.toggle();
        },
        toggleRightSidebar() {
            this.$refs.rightsidebar.toggle();
        }, searchAlert() {
            alert('Create a new task !');
        },
        dashboardAlert() {
            alert("Dashboard items?");
        },
        projectsAlert() {
            alert("Search projects");
        },
        filterAlert() {
            alert("Filter items");
        },
        taskAlert() {
            alert("find new tasks");
        },
        queriesAlert() {
            alert("Please Submit your queries on: https://www.syncfusion.com/forums ");
        },
        settingsAlert() {
            alert("Reset previous settings?");
        },
        infoAlert() {
            alert("To know more about our controls:http://help.syncfusion.com ");
        },
        SelectEvent() {
            this.$refs.rightsidebar.hide();
        }
    }
});