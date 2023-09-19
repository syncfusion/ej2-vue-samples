<template>
<div class="control-section" id="wrapper">
    <!-- sample level element  -->
    <div class="apimaincontent">
        <div>
            <div class="list-group">
                <div class="list-group-item">
                    <span id="hamburger" class="e-icons e-menu" v-on:click='toggleSidebar'></span>
                    <div class="title">Overview</div>
                    <br />
                    <p> The Sidebar component is a collapsible side content placed along with the main content either in left or right side of the page. </p>
                    <p> <br /> </p>
                    <div class="title">Options</div>
                    <br />
                    <div class="inline-element responsive">
                        <!-- Open or close the sidebar -->
                        <p class=" inline-element" style="width:70%">
                            <b>Toggle</b> - Toggles the Sidebar to be open or closed state.
                        </p>
                        <ejs-button id="apitogglesidebar" cssClass="e-primary inline-element right" :isToggle='true' v-on:click="toggleSidebar" content="Toggle"></ejs-button>
                        <br />
                        <br />
                         <!-- Sidebar position -->
                        <p class=" inline-element" style="width:70%">
                            <b>Position</b> - Allows to place the sidebar in right or left side of the page.
                        </p>
                        <ejs-button ref="sidebarTypesBtn" id="positionBtn" cssClass="e-primary inline-element right" :isToggle='true' content="Left" v-on:click="onTypeChange"></ejs-button>
                        <br />
                        <br />
                        <!-- Sidebar types -->
                        <p class="inline-element" style="width:70%"><b>Types </b> - Specifies the act of expanding or collapsing the sidebar with main content.</p>
                        <div class="inline-element right" style="width:80px">                            
                            <ejs-dropdownlist popupHeight="220px" cssClass="e-textbox right" index="3" :dataSource="dataTypes" :fields="fields" v-on:change="onChange">
                            </ejs-dropdownlist>
                        </div>
                        <br />
                        <br />
                        <!-- on document click -->
                        <p class=" inline-element" style="width:70%"><b>Closing on document click</b> - Allows to collapse / close the sidebar on document click.</p>
                        <ejs-button ref="documentClickBtn" id="documentElement" cssClass="e-primary inline-element right" content="False" :isToggle='true' v-on:click="documentClick"></ejs-button>
                        <br />
                        <br />
                         <!-- showbackdrop option -->
                        <p class=" inline-element" style="width:70%"><b>Backdrop</b> - Sets the backdrop over the main content area on open / expanded state. </p>
                        <ejs-button ref="backdropBtn" id="backDropElement" cssClass="e-primary inline-element right" :isToggle='true' content="False" v-on:click="backdrop"></ejs-button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ejs-sidebar ref="sidebarInstance" :closeOnDocumentClick="closeOnDocumentClick" :type="type" :position="position" :showBackdrop="showBackdrop" width="220px" target=".apimaincontent" id="apiSidebar" class="default-sidebar">
        <div class="title-header">
            <div style="display:inline-block"> Sidebar </div>
            <span id="close" class="e-icons" v-on:click="sidebarClose"></span>
        </div>
        <div class="sub-title">
            The Vue Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content. It provides flexible options that can be shown and hidden based on user interactions.
        </div>
    </ejs-sidebar>
    <div id="action-description">
        <p>
            The Sidebar API sample demonstrates how to customize the Sidebar component by using its properties from the property pane. Select any combination of properties from the property pane to customize the Sidebar. Click on the hamburger menu icon to expand/collapse the sidebar.
        </p>
    </div>
    <div id="description">
        <p>
            In this demo, the default Sidebar is rendered with minimal configuration. This sample can be customized further with the combination of Sidebar properties. For example,
            <ul>
                <li>The Sidebar can be opened or closed by clicking on the toggle button.</li>
                <li>The Sidebar position can be changed by clicking on the position button.</li>
                <li>The Sidebar types can be changed from the Dropdown List.</li>
                <li>The Sidebar can be collapsed or closed on document click from the provided options.</li>
                <li>The Sidebar overlay can be enabled or disabled by clicking on the Backdrop button.</li>
            </ul>
        </p>
    </div>
</div>
</template>

<script>
import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    components: {
      'ejs-button': ButtonComponent,
      'ejs-dropdownlist': DropDownListComponent,
      'ejs-sidebar': SidebarComponent
    },
    data: function() {
        return {
              dataTypes: [
                { Id: '1', Type: 'Over', value: 'Over' },
                { Id: '2', Type: 'Push', value: 'Push' },
                { Id: '3', Type: 'Slide', value: 'Slide' },
                { Id: '4', Type: 'Auto', value: 'Auto' }
              ],  
              fields:  { id: 'Id', text: 'Type', value: 'value' },
              position:'Left',
              showBackdrop: false,
              closeOnDocumentClick: false,
              type: 'Auto'
        }
    },
    methods: {
        //Toggle button click event handler
        toggleSidebar: function(){
          this.$refs.sidebarInstance.toggle();
          if(this.$refs.backdropBtn.$el.textContent == 'True') {
            this.$refs.sidebarInstance.$el.showBackdrop = true;
          }
        },
        sidebarClose : function() {
          this.$refs.sidebarInstance.hide();
          if (this.$refs.sidebarInstance.$el.showBackdrop == true){
            this.$refs.sidebarInstance.$el.showBackdrop = false;
        }          
        },
        documentClick:function() {
            if (this.$refs.documentClickBtn.$el.classList.contains('e-active')) {
                this.$refs.documentClickBtn.$el.textContent = 'False';
                //enable the closeOnDocumentClick property
                this.closeOnDocumentClick = false;

            } else {
                this.$refs.documentClickBtn.$el.textContent = 'True';
                //disable the closeOnDocumentClick property
                this.closeOnDocumentClick = true;
            }
        },
        onTypeChange:function() {
            if (this.$refs.sidebarTypesBtn.$el.textContent == 'Right') {
                this.$refs.sidebarTypesBtn.$el.textContent = 'Left';
                this.position = 'Left';
            } else {
                this.$refs.sidebarTypesBtn.$el.textContent = 'Right';
                this.position = 'Right';
            }
        },
        backdrop: function() { 
            if (this.$refs.backdropBtn.$el.classList.contains('e-active')) {
                this.$refs.backdropBtn.$el.textContent = 'True';
                //enable the backdrop property
                this.showBackdrop = true;

            } else {
                this.$refs.backdropBtn.$el.textContent = 'False';
                //disable the backdrop property
                this.showBackdrop = false;
            }
        },
        onChange:function(args) {
            this.type = args.value;
        }
    }
}
</script>

<style>
 /* Specifies sample level styles for the Sidebar */
   .inline-element {
        display: inline-block;
    }
    .center-align {
        text-align: center;
        padding: 20px;
    }
    #wrapper.control-section {
        padding: 15px 0px;
    }
    .title {
        font-weight: 500;
        line-height: 24px;
        font-size: 18px;
        margin-top: 0;
    }
    .inline-element.right.e-btn {
        border: none;
        width: 80px;
    }
    .right {
        float: right;
    }
    #wrapper .list-group-item {
        border: none;
        padding: 15px;
        font-size: 14px;
        background: transparent;
    }
    .title-header {
        font-size: 18px;
        padding-bottom: 15px;
    }
    .sub-title {
        font-size: 16px;
    }
    .e-sidebar .title-header #close {
        cursor: pointer;
        line-height: 25px;
        font-size: 14px;
        float: right;
    }
    #wrapper .default-sidebar {
        padding: 15px;
        z-index: 20 !important;
    }
   .apimaincontent.e-sidebar-context #hamburger {
        font-size: 24px;
        cursor: pointer;
        float: left;
        margin-right: 10px
    }
    #wrapper #close:before {
        content: "\e109";
    }
    .inline-element.right {
        width: 80px;
    }
    .e-bigger .inline-element.right {
        width: 85px;
    }
    .e-content-animation .inline-element .e-input-group.e-control-wrapper.e-ddl .e-dropdownlist.e-input[readonly] {
        padding-left: 12px;
    }
   
    /* Specifies the border right color for the sidebar in light theme*/
    .material .default-sidebar,
    .fabric .default-sidebar,
    .tailwind .default-sidebar,
    .highcontrast .default-sidebar,
    .bootstrap5 .default-sidebar {
        border-right: 1px solid #eaeaeae0;
    }

    .material .apimaincontent,
    .fabric .apimaincontent,
    .tailwind .apimaincontent,
    .fluent .apimaincontent,
    .bootstrap5 .apimaincontent {
        border: 1px solid #d7d7d7;
    }

    /* Specifies the border right color for the sidebar in dark theme*/
    .material-dark .default-sidebar,
    .fabric-dark .default-sidebar,
    .tailwind-dark .default-sidebar,
    .bootstrap5-dark .default-sidebar {
        border-right: 1px solid #eaeaea63;
    }

    .material-dark .apimaincontent,
    .fabric-dark .apimaincontent,
    .tailwind-dark .apimaincontent,
    .highcontrast .apimaincontent,
    .fluent-dark .apimaincontent,
    .bootstrap5-dark .apimaincontent {
        border: 1px solid #ffffff;
    }
</style>
