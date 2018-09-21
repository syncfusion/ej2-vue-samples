<script>
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin ,RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin, ButtonPlugin, RadioButtonPlugin );

export default Vue.extend({
    data: function() {
        return {
          position :'Left'
        }
    },
    methods: {
        newTabClick:function(){
         document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/default/index.html');
        },
        positionChange:function(args) { 
            this.position = args.event.target.id == "left" ? "Left" : "Right";
            if(args.event.target.id == "right"){
               document.getElementById("hamburger").className += " e-rtl";
            }
            if(args.event.target.id == "left"){
               document.getElementById("hamburger").classList.remove("e-rtl");
            }
        },
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        },
        closeClick: function() {
         this.$refs.sidebar.hide();
        },
        openClick:function() {
         this.$refs.sidebar.show();
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
        <a class="e-btn" id="newTab" target="_blank" v-on:click="newTabClick">Open in new tab</a>
    </div>
    <!-- sample level element  -->
    <div id="wrapper">
        <title>Essential JS 2 for Angular - Sidebar > Default Functionalities</title>
        <div class="col-lg-12 col-sm-12 col-md-12">
         <span id="hamburger" class="e-icons menu default" v-on:click="openClick()"></span>
            <ejs-sidebar id="default-sidebar" ref="sidebar" :position="position">
                <div class="title-header">
                    <div style="display:inline-block"> Sidebar</div>
                    <span id="close" class="e-icons" v-on:click="closeClick"></span></div>
                <div class="sub-title">
                    Place your primary content here.
                </div>
            </ejs-sidebar>
            <!-- end of sidebar element -->
            <!-- main content declaration -->
            <div>
                <div class="title default">Main content</div>
                <div class="sub-title"> Click the button to open/close the sidebar.
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" v-on:click="toggleClick">Toggle sidebar</button>
                    </div>
                    <p>Click the radio button to switch the sidebar position.</p>
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

    <div id="action-description">
       <p>
        Click the button to view the Sidebar sample in new tab.
       </p>
    </div>
    <div id="description">
           
        <p>
              This sample demonstrates the basic <code>Sidebar</code> component. Click the toggle button to expand or collapse the sidebar.
        </p>
   </div>
</div>
</template>
<style>
  /* sample-level styles */

 .center-align {
    text-align: center;
    padding: 20px;
}

.title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}
.title.default{
	padding: 25px 15px 15px;
}

#hamburger.default{
	padding: 9px 15px 0px;
}

#wrapper .column {
    display: inline-block;
    padding: 10px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
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

.sb-content-tab #wrapper {
    display: none;
}

#default-sidebar {
    background-color: rgb(25, 118, 210);
    color: #ffffff;
}

#default-sidebar .close-btn:hover {
    color: rgba(0, 0, 0, .87);
    background-color: #fafafa;
}
/* sample-level styles */

#hamburger.menu {
    font-size: 25px;
    cursor: pointer;
    float: left;
    line-height: 50px;
    position: absolute;
    z-index: 1000;
}

#hamburger.menu:before {
    content: '\e7f6';
}

#hamburger.menu.e-rtl{
    position:relative;
    float: right;
}

#wrapper #close:before {
    content: "\e945";
}

.e-sidebar .title-header #close {
    color: #fafafa;
    cursor: pointer;
    line-height: 25px;
}

.e-sidebar.e-left .title-header #close {
    float: right;
}

.e-sidebar.e-right .title-header #close {
    float: left;
}

.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px;
}
/* end of sidebar styles */
</style>