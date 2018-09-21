import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ListViewPlugin, SelectEventArgs } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

Vue.use(SidebarPlugin);
Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
    template: `<div id="app"> <div id="wrapper">
    <title>Essential JS 2 for Angular - Sidebar > SideBar with ListView</title>
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
                    <!--List view element declaration-->
                    <ejs-listview id="menulist" :dataSource='dataList' :fields='fields' :select="onSelect"></ejs-listview>
                </div>
                <!-- end of normal state element declaration -->
            </ejs-sidebar>
            <!-- end of sidebar element -->
            <!-- main content declaration -->
            <div>
                <div class="maincontent">Application content</div>
            </div>
            <!--end of main content declaration -->
        </div>
    </div>
</div>
</div>
`,

    data () {
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
        // Listview select event handler
        onSelect: function(args) {
          this.$refs.sidebarInstance.hide();
          document.getElementsByClassName('maincontent')[0].innerHTML =args.text+ " Page Content";
        },

        openClick: function() {
         this.$refs.sidebarInstance.show();
        },
        
        closeClick: function() {
         this.$refs.sidebarInstance.hide();
        }
    }
});