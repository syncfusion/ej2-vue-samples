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
        <div class="col-lg-12 col-sm-12 col-md-12">
         <span id="hamburger" class="e-icons menu default" v-on:click="openClick()"></span>
            <!-- Sidebar element declaration -->
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
                        <!-- Button element declaration -->
                        <button ejs-button id="toggle" class="e-btn e-info" v-on:click="toggleClick">Toggle sidebar</button>
                    </div>
                    <p>Click the radio button to switch the sidebar position.</p>
                    <div class="column">
                            <!-- RadioButton element declaration -->
                            <ejs-radiobutton id="left" label='Left' name='state' checked='true' :change="positionChange"></ejs-radiobutton>
                    </div>
                    <div class="column">
                            <!-- RadioButton element declaration -->
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
         var URL = location.href.replace(location.search, '');
         document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/sidebar/default/index.html');
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


<style>
  /* sample-level styles */
/* custom code start */
 .center-align {
    text-align: center;
    padding: 20px;
}
/* custom code end */
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
/* custom code start */
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
/* custom code end */
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
    content: '\e10d';
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
/* custom code start */
.e-sidebar.e-left .title-header #close {
    float: right;
}

.e-sidebar.e-right .title-header #close {
    float: left;
}
/* custom code end */
.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px;
}

@font-face {
    font-family: 'e-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}
/* end of sidebar styles */
</style>