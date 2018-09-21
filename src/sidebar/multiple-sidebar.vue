<script>
    import Vue from "vue";
    import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
    import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
    Vue.use(ListViewPlugin);
    import { enableRipple } from '@syncfusion/ej2-base';
    Vue.use(SidebarPlugin, ButtonPlugin, DropDownListPlugin);

    export default Vue.extend({
        data: function () {
            return {
                searchType: 'Over',
                rightType: 'Over',
                dataSource: ["Sidebar expansion types", "DatePicker events analysis", "DatePicker methods analysis", "Theme studio testing", "Animation Art"]
            }
        },
        methods: {
            newTabClick: function () {
                document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/multiple-sidebar/index.html');
            },
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
</script>

<template>
    <div class="control-section">
        <!-- sample level element  -->
        <div class="col-lg-12 col-sm-12 col-md-12 center">
            Click the button to view the sample
        </div>
        <div class="col-lg-12 col-sm-12 col-md-12 center">
            <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new tab</a>
        </div>
        <!-- sample level element  -->
        <div id="wrapper">
        <title>Essential JS 2 for Angular - Sidebar > API</title>
        <!-- sample level element declaration -->
        <div class="col-lg-12 col-sm-12 col-md-12">
            <!--docksidebar content declaration-->
            <ejs-sidebar id="docksidebar" ref="docksidebar" width="255px" dockSize="60px" enableDock="true" >
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
        <div id="action-description">
            <p>
                Click the button to view the Sidebar sample in a new tab.
            </p>
        </div>
        <div id="description">
            <p>
                This sample demonstrates the Multiple Sidebar components in a single HTML page.
            </p>
        </div>
    </div>
</template>
<style>
          /* Content area styles */

    .title, .e-main-content {
        text-align: center;
        font-size: 20px;
        padding: 15px;
    }

    .sub-title {
        text-align: center;
        font-size: 16px;
        padding: 10px;
    }

    .column {
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

    @media only screen and (max-height: 500px) {
        #docksidebar {
            min-height: 600px;
        }
    }


    .sb-content-tab .center {
        display: block;
    }

    .sb-content-tab #wrapper {
        display: none;
    }

    /* end of content area styles */

    #container {
        visibility: hidden;
    }

    #loader {
        color: #008cff;
        height: 40px;
        width: 30%;
        position: absolute;
        top: 45%;
        left: 45%;
    }

    /* sample-level styles */

    .texting {
        margin: 25px 15px;
        height: 14px;
        background: #eee;
    }

    .e-main-content #maincontent .fisrtrow {
        width: 50%;
    }

    #sample-list .e-list-item {
        padding-left: 55px;
        height: 50px;
        line-height: 50px;
    }

    .e-main-content #maincontent .secondrow {
        width: 75%;
    }

    .e-main-content .thirdrow,
    #searchsidebar .inputsearch {
        width: 90%;
    }

    .e-main-content #maincontent {
        float: left;
        border: 1px solid #f3e7e7;
        margin: 0 10%;
        margin-top: 120px;
    }

    /* sidebar related styles */

    .e-main-content #maincontent,
    #rightsidebar #rightcontent,
    #searchsidebar #buttonelement,
    #searchsidebar #contentcontainer,
    #docksidebar.e-open .middleelement {
        height: 100%;
    }

    #rightsidebar #rightcontent,
    #sample-list.e-listview .e-list-item {
        background: #27388d;
        width: 100%;
    }

    #rightsidebar #rightcontainer {
        height: 100px;
        font-weight: 450;
    }

    #rightsidebar #rightcontainer {
        background: #12237ccc;
    }

    #rightsidebar .rightspan {
        top: 40px;
    }

    #rightsidebar .rightspan,
    #rightdiv {
        margin: 0 20px;
    }

    #searchsidebar #buttonelement {
        width: 20%;
    }

    #searchsidebar .btncontainer,
    .header-element {
        padding: 10px;
        text-align: center;
    }

    #searchsidebar #contentcontainer,
    #rightdiv {
        float: right;
    }

    #docksidebar,
    #searchsidebar,
    #rightsidebar {
        border: 0;
        overflow: hidden;
        margin-left: 0 !important;
        user-select: none;
    }

    #docksidebar,
    #docksidebar.e-open .middleitem:hover,
    #docksidebar.e-open .middleitem.e-focused,
    #sample-list.e-listview .e-list-item.e-active {
        background: #0747a6;
    }

    #docksidebar .firstlist .listitem .e-icons,
    #docksidebar .middlelist .middleitem .e-icons,
    #docksidebar .lowlist .lastitem .e-icons,
    #rightsidebar #rightcontent .rightspandiv {
        line-height: 1.5;
        vertical-align: middle;
    }

    #docksidebar .firstlist .listitem .e-icons:hover,
    #docksidebar.e-close .middlelist .middleitem .e-icons:hover,
    #docksidebar .lowlist .lastitem .e-icons:hover,
    #docksidebar.e-open .middlelist .middleitem:hover,
    #docksidebar.e-close .middlelist .middleitem.e-focused .e-icons,
    #searchsidebar .sidebar-inner:hover,
    #searchsidebar #buttonelement .btncontainer .e-icons:hover {
        color: #c0c2c5;
        cursor: pointer;
    }

    #docksidebar .firstlist .listitem .e-icons,
    #docksidebar.e-close .middlelist .middleitem .e-icons,
    #docksidebar .lowlist .lastitem .e-icons,
    #docksidebar.e-open .middlelist .middleitem:hover,
    #docksidebar.e-open .middlelist .middleitem.e-focused,
    #rightsidebar #rightcontent #rightcontainer .rightspan,
    #sample-list.e-listview .e-list-item {
        color: white;
    }

    #docksidebar.e-open .middlelist .middleitem,
    #searchsidebar #contentcontainer .inputsearch {
        color: #6c7078;
    }

    .rightspandiv.one {
        margin-right: 10px;
    }

    #docksidebar .middlelist .middleitem .e-text {
        font-size: 14px;
        margin-left: 16px;
    }

    #docksidebar .e-icons,
    #searchsidebar .e-icons,
    .header-element {
        font-size: 20px;
    }

    #rightsidebar #rightcontent #rightcontainer,
    #searchsidebar .labelcontent {
        font-size: 25px;
    }

    #searchsidebar .labelcontent {
        font-weight: 500;
        color: grey;
    }

    #searchsidebar .sidebar-inner:hover,
    #sample-list.e-listview .e-list-item:hover {
        background: #edebeb;
        color: black;
    }

    #searchsidebar .sidebar-inner:hover {
        margin-right: 12px;
    }

    #searchsidebar #contentcontainer #innercontainer,
    #samplelist.e-listview .e-list-item {
        font-size: 16px;
        font-weight: 400;
        line-height: 2;
    }

    #docksidebar .firstlist,
    #docksidebar .middlelist,
    #docksidebar .lowlist,
    #rightsidebar #rightinnercontainer,
    #searchsidebar #contentcontainer #innercontainer {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    #docksidebar .firstlist,
    #docksidebar .middlelist,
    #docksidebar .lowlist,
    #searchsidebar #buttonelement .btncontainer,
    #searchsidebar #contentcontainer .inputsearch,
    #searchsidebar .labelcontent {
        margin-top: 30px;
    }

    #searchsidebar #contentcontainer .inputsearch {
        font-size: 1.4em;
        margin-right: 12px;
        padding: 10px;
        border: none;
        text-indent: 7px;
        background: #f5f5f5;
    }


    #docksidebar.e-close .middlelist {
        margin: 0;
    }

    #docksidebar .dockelement,
    #docksidebar.e-open .middleelement,
    #docksidebar .lastelement,
    #rightsidebar #rightcontent,
    #rightsidebar .rightspandiv,
    #searchsidebar #contentcontainer,
    #searchsidebar #buttonelement, .header-element {
        display: inline-block;
    }

    #docksidebar.e-open .middleelement,
    #docksidebar .lastelement,
    #docksidebar .lastelement,
    #rightsidebar .rightspan {
        position: absolute;
    }

    #docksidebar.e-open .middleelement {
        background: #fafafa;
    }

    #docksidebar.e-open .middleelement,
    .e-main-content #maincontent,
    #searchsidebar #contentcontainer {
        width: 80%;
    }

    #docksidebar .firstlist .listitem,
    #docksidebar.e-close .middlelist .middleitem,
    #docksidebar .lowlist .lastitem,
    #searchsidebar .sidebar-inner {
        padding: 10px 20px;
    }

    #docksidebar.e-sidebar .lastelement {
        bottom: 0;
        left: 0;
    }

    #docksidebar.e-open .middlelist .middleitem {
        padding: 10px 25px 10px 20px;
    }

    #nextrightcont .e-list-item:hover {
        background: #00000024;
        color: white;
    }

    #docksidebar.e-close .e-text {
        display: none;
    }

    /* sidebar related styles */

    /* font icon styles */

    #docksidebar .expand::before {
        content: '\e10d';
    }

    #docksidebar .plus::before {
        content: '\e118';
    }

    #docksidebar .search::before {
        content: '\e117';
    }

    #docksidebar .inputsearch::before {
        content: '\e1ba';
    }

    #docksidebar .dashboard::before {
        content: '\e106';
    }

    #docksidebar .projects::before {
        content: '\e115';
    }

    #docksidebar .issues::before {
        content: '\e10a';
    }

    #docksidebar .tasks::before {
        content: '\e101';
    }

    #docksidebar .question::before {
        content: '\e107';
    }

    #docksidebar .info::before {
        content: '\e11b';
    }

    #docksidebar .settings::before {
        content: '\e10b';
    }

    #searchsidebar .arrowbutton::before {
        content: '\e112';
    }

    #rightsidebar .saves::before {
        content: '\e114';
    }

    #flatbtn .recent::before {
        content: '\e11d';
    }

    /* end of font icon styles */

    #sample-list.e-listview .e-list-item {
        height: 50px;
        line-height: 50px;
        padding-left: 50px;
    }
 </style>