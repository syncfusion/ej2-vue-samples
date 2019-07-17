<template>
<div class="control-section">
    <!-- sample level element  -->
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        Click/Touch the button to view the sample
    </div>
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new Tab</a>
    </div>
    <!-- sample level element  -->
    <div id="wrapper">
        <div class="col-lg-12 col-sm-12 col-md-12">
            <div class="col-lg-12 col-sm-12 col-md-12">
                <div id="head">
                    <div class="text">Menu</div>
                    <span id="hamburger" class="e-icons menu" v-on:click="openClick"></span>
                    <div class="header">Header Content</div>
                </div>
                <!-- sidebar element declaration-->
                <ejs-sidebar id="sidebar-menu" :type='type' :width='width' ref="sidebarInstance">
                    <!-- normal state element declaration -->
                    <div id="close" class="e-icons" v-on:click="closeClick"></div>
                    <div class="content-area">
                        <!--ListView element declaration-->
                        <ejs-listview id="menulist" :dataSource='dataList' :fields='fields' :select="onSelect"></ejs-listview>
                    </div>
                    <!-- end of normal state element declaration -->
                </ejs-sidebar>
                <!-- end of sidebar element -->
                <!-- main content declaration -->
                <div>
                    <div class="maincontent textArea">Application content</div>
                </div>
                <!--end of main content declaration -->
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            Click/Touch the button to view the Sidebar sample in new tab.
        </p>
    </div>
    <div id="description">
        <p>
            In this sample, the ListView component is placed inside the Sidebar for navigation.
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ListViewPlugin, SelectEventArgs } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin, ListViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            dataList: [
                  { text: 'Home' },
                  { text: 'About' },
                  { text: 'Careers' },
                  { text: 'FAQs' },
                  { text: 'Blog' },
                  { text: 'Uses' },
                  { text: 'Contact' }
            ],
            fields: { tooltip: 'text' },
            type : 'Over',
            width : '250px'
        }
    },
    methods: {
        newTabClick: function() {
           var URL = location.href.replace(location.search, '');
           document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/sidebar/sidebar-list/index.html');
        },
        // Listview select event handler
        onSelect: function(args) {
          this.$refs.sidebarInstance.hide();
          document.getElementsByClassName('textArea')[0].innerHTML =args.text+ " Page Content";
        },

        openClick: function() {
         this.$refs.sidebarInstance.show();
        },
        
        closeClick: function() {
         this.$refs.sidebarInstance.hide();
        }
    }
});
</script>


<style>
   /* main content area styles */

 .maincontent {
    text-align: center;
    font-size: 20px;
    height: 300px;
    line-height: 300px;
    padding: 15px;
}
/* custom code start */
@media(max-width:550px) {
    #head .text {
        display: none;
    }
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}
/* custom code end */
.textArea{
    height: 300px;
    line-height: 300px;
}
/* custom code start */
.sb-content-tab .center {
    display: block;
}

.col-lg-12.col-sm-12.col-md-12,
.control-section {
    padding: 0;
}
/* custom code end */
/* end of main content area styles */
/* Header area styles */

#wrapper #head {
    border: none;
    background: #292961;
    width: 100%;
    height: 50px;
    color: #fff;
    padding: 0 15px;
    position: relative;
}
/* custom code start */
body {
    margin: 0;
}
/* custom code end */
#hamburger.menu {
    font-size: 25px;
    cursor: pointer;
    float: left;
    line-height: 55px;
    position: absolute;
}

#hamburger.menu:before {
    content: '\e10d';
}

#head .text {
    text-align: right;
    position: absolute;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding-left: 40px;
}

#head .header {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    width: 100%
}
/* end of header area styles */
/* sidebar styles */
/* custom code start */
.sb-content-tab #wrapper {
    display: none;
}
/* custom code end */
#sidebar-menu {
    background: #f5f5f5;
    padding: 20px;
}

#wrapper #close:before {
    content: "\e945";
}

#wrapper #close {
    float: right;
    color: rgba(0, 0, 0, 0.61);
    cursor: pointer;
    font-size: 20px;
    line-height: 14px;
}
/* listview style */

#menulist.e-listview .e-list-item,
#menulist.e-listview .e-list-item:last-child {
    height: 51px;
    line-height: 51px;
    text-align: center;
    background: #f5f5f5;
    color: rgba(0, 0, 0, 0.87);
    border-bottom: none;
}

#menulist.e-listview .e-list-item:hover {
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

#menulist {
    width: 200px;
    margin: 0 auto;
    position: relative;
    top: 15vh;
}
/* end of list view styles */

#sidebar-menu.e-sidebar {
    padding: 22px
}

@font-face {
    font-family: 'e-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}
/* end of sidebar styles */
</style>