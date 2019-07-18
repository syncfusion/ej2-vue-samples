<template>
<div class="control-section">
    <!-- sample level element  -->
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        Click/Touch the button to view the sample
    </div>
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new tab</a>
    </div>
    <!-- sample level element  -->
    <div id="wrapper">
        <!-- sample level element declaration -->
        <div class="col-lg-12 col-sm-12 col-md-12">
            <!-- sidebar element declaration -->
            <span id="hamburger" class="e-icons menu" v-on:click="openClick"></span>
            <ejs-sidebar id="default-sidebar" ref="sidebarInstance" :position="position" :showBackdrop='showBackdrop' :closeOnDocumentClick='closeOnDocumentClick' :type='type'>
                <div class="title-header">
                    <div style="display:inline-block"> Sidebar </div>
                    <span id="close" class="e-icons" v-on:click="closeClick"></span></div>
                <div class="sub-title">
                    Place your primary content here.
                </div>
            </ejs-sidebar>
            <!-- end of sidebar element -->
            <div class="list-group">
                <div class="list-group-item">
                    <div class="title">
                        <p id="overview">Overview
                            </p>
                    </div>
                    <p id="content">The sidebar component is a collapsible side content that will be displayed along with the primary content area.
                    </p>
                    <h3 class="title">
                        <p id="properties">Options
                            </p>
                    </h3>
                    <div class="inline-element responsive">
                        <div id="text">
                            <p class=" inline-element" style="width:70%"> <b>Toggle</b> - Toggles the sidebar to be open or closed state.
                            </p>
                            <!-- Button element declaration -->
                            <ejs-button id="toggleSidebar"  v-on:click.native="toggleSidebar" class="inline-element right" cssClass="e-info">Toggle</ejs-button>
                        </div>
                        <div id="text">
                            <p class=" inline-element" style="width:70%"> <b>Position</b> - Allows to place the sidebar in right or left side of the page.
                            </p>
                            <!-- Button element declaration -->
                            <ejs-button ref="sidebarTypesBtn" id="togglePosition"  isToggle="true" class="inline-element right" cssClass="e-info" v-on:click.native="onTypeChange">Right</ejs-button>
                        </div>
                        <div id="text">
                            <p class="inline-element" style="width:70%"><b>Types </b> - Specifies the act of expanding or collapsing the sidebar with main content.</p>
                            <div class="inline-element right">
                                <!-- DropDownList element declaration -->
                                <ejs-dropdownlist id="types"  :dataSource='dataTypes' :fields='fields' class="e-textbox  right" :placeholder='waterMark' :index='index' :popupHeight='height' cssClass='right' :change='onChange' :width='width'>
                                </ejs-dropdownlist>
                            </div>
                        </div>
                        <div id="text">
                            <p class=" inline-element" style="width:70%"><b>Closing on document click</b> - Allows to collapse / close the sidebar on document click.</p>
                            <!-- Button element declaration -->
                            <ejs-button  id="documentclick" ref="documentClickBtn"  isToggle="true" v-on:click.native="documentClick" class="inline-element right" cssClass="e-info" >True</ejs-button>
                        </div>
                        <p class=" inline-element" style="width:70%"><b>Backdrop</b> - Sets the backdrop over the main content area on open / expanded state.</p>
                        <!-- Button element declaration -->
                        <ejs-button  id="backdrop" ref="backdropBtn" isToggle="true" v-on:click.native="backdrop" class="inline-element right" cssClass="e-info">True</ejs-button>
                    </div>
                </div>
            </div>
        </div>
        <!--end of sample level element declaration -->
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the Sidebar component with its features. Click/Touch the button to view the Sidebar sample in a new tab.
        </p>
    </div>
    <div id="description">
        <p>
            In this sample allows to configure the <code>type</code>, <code>position</code>, <code>closeOnDocumentClick</code>and
            <code>showBackdrop</code> property.
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin, ButtonPlugin, DropDownListPlugin);

export default Vue.extend({
    data: function() {
        return {
              dataTypes: [
              { Id: '1', Type: 'Over', value: 'Over' },
              { Id: '2', Type: 'Push', value: 'Push' },
              { Id: '3', Type: 'Slide', value: 'Slide' },
              { Id: '4', Type: 'Auto', value: 'Auto' }
              ],  
              fields:  { id: 'Id', text: 'Type', value: 'value' },
              position :'Left',
              showBackdrop: false,
              closeOnDocumentClick: false,
              height: '220px',
              width:  '75px',
              waterMark: 'Select a Type',
              index: 3,
              type : 'Auto'
        }
    },
    methods: {
        newTabClick : function(){
             var URL = location.href.replace(location.search, '');
             document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/sidebar/api/index.html');
        },

        //Toggle button click event handler
        toggleSidebar: function(){
          this.$refs.sidebarInstance.toggle();
        },
        closeClick : function(){
          this.$refs.sidebarInstance.hide();
        },
        openClick: function() { 
         this.$refs.sidebarInstance.show();
        },
    documentClick:function() {

        if (this.$refs.documentClickBtn.$el.classList.contains('e-active')) {
            this.$refs.documentClickBtn.$el.textContent = 'False';
            //enable the closeOnDocumentClick property
            this.closeOnDocumentClick = true;

        } else {
            this.$refs.documentClickBtn.$el.textContent = 'True';
            //disable the closeOnDocumentClick property
            this.closeOnDocumentClick = false;
        }
    },
    onTypeChange:function() {
        if (this.$refs.sidebarTypesBtn.$el.classList.contains('e-active')) {
            this.$refs.sidebarTypesBtn.$el.textContent = 'Left';
            this.position = 'Right';
            document.getElementById("hamburger").className += " e-rtl";
        } else {
            this.$refs.sidebarTypesBtn.$el.textContent = 'Right';
            this.position = 'Left';
             document.getElementById("hamburger").classList.remove("e-rtl");
        }
    },
    backdrop: function() { 
        if (this.$refs.backdropBtn.$el.classList.contains('e-active')) {
            this.$refs.backdropBtn.$el.textContent = 'True';
            //enable the backdrop property
            this.showBackdrop = false;

        } else {
            this.$refs.backdropBtn.$el.textContent = 'False';
            //disable the backdrop property
            this.showBackdrop = true;
        }
    },
    onChange:function(args) {
        this.type = args.value;
    }
}
});
</script>

<style>
    /* content area styles */
/* custom code start */
  .responsive {
    width: 80%;
}

@media(max-width:550px) {
    .responsive {
        width: 100%;
    }
}

#overview,
#properties,
#content{
    padding:0 0 22px
}

#text{
    padding:0 0 17px;
}
.center-align {
    text-align: center;
    padding: 20px;
}
/* custom code end */
.title {
    color: #000000;
    font-weight: 500;
    line-height: 24px;
    font-size: 18px;
    margin: 0px;
}
/* custom code start */
body {
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif";
    margin: 0px;
    font-size: 14px;
}
/* custom code end */
/* End of content area styles */
/* property content styles */

#types {
    background-color: #ffffff;
    border: none;
    border-radius: 2px;
}

.inline-element.right.e-btn {
    color: white;
    border: none;
    width: 75px;
}
/* custom code start */
.inline-element {
    display: inline-block;
}

.right {
    float: right;
}
/* custom code end */
.list-group-item {
    border: none;
    padding: 60px 10px 10px 45px;
    font-size: 14px;
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
/* end of property content styles */
/* sidebar styles */

.sb-content-tab #wrapper {
    display: none;
}
/* custom code end */
.content {
    margin-bottom: 20px;
    overflow-y: auto;
}

#wrapper #close:before {
    content: "\e945";
}

.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
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

#default-sidebar {
    background: #2196f3;
    color: #ffffff;
}

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

.e-sidebar.e-left .title-header #close {
    float: right;
}

.e-sidebar.e-right .title-header #close {
    float: left;
}

@font-face {
    font-family: 'e-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* end of sidebar styles */
</style>