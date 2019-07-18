import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
    template: `<div id="app"> 
    <div id="wrapper">
    <title>Essential JS 2 for Angular - Sidebar > API</title>
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
                        <p class="inline-element" style="width:70%"> <b>Toggle</b> - Toggles the sidebar to be open or closed state.
                        </p>
                        <ejs-button id="toggleSidebar"  v-on:click.native="toggleSidebar" class="inline-element right" cssClass="e-info">Toggle</ejs-button>
                    </div>
                    <div id="text">
                        <p class="inline-element" style="width:70%"> <b>Position</b> - Allows to place the sidebar in right or left side of the page.
                        </p>
                        <ejs-button ref="sidebarTypesBtn" id="togglePosition"  isToggle="true" class="inline-element right" cssClass="e-info" v-on:click.native="onTypeChange">Right</ejs-button>
                    </div>
                    <div id="text">
                        <p class="inline-element" style="width:70%"><b>Types </b> - Specifies the act of expanding or collapsing the sidebar with main content.</p>
                        <div class="inline-element right">
                            <ejs-dropdownlist id="types"  :dataSource='dataTypes' :fields='fields' class="e-textbox  right" :placeholder='waterMark' :index='index' :popupHeight='height' cssClass='right' :change='onChange' :width='width'>
                            </ejs-dropdownlist>
                        </div>
                    </div>
                    <div id="text">
                        <p class=" inline-element" style="width:70%"><b>Closing on document click</b> - Allows to collapse / close the sidebar on document click.</p>
                        <ejs-button  id="documentclick" ref="documentClickBtn"  isToggle="true" v-on:click.native="documentClick" class="inline-element right" cssClass="e-info" >True</ejs-button>
                    </div>
                    <p class=" inline-element" style="width:70%"><b>Backdrop</b> - Sets the backdrop over the main content area on open / expanded state.</p>
                    <ejs-button  id="backdrop" ref="backdropBtn" isToggle="true" v-on:click.native="backdrop" class="inline-element right" cssClass="e-info">True</ejs-button>
                </div>
            </div>
        </div>
    </div>
    <!--end of sample level element declaration -->
</div>
</div>
`,

    data () {
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
            closeOnDocumentClick: true,
            height: '220px',
            width:  '75px',
            waterMark: 'Select a Type',
            index: 3,
            type : 'Auto'
      }
  },
  methods: {
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
        this.$refs.documentClickBtn.$el.textContent = 'True';
        //enable the closeOnDocumentClick property
        this.closeOnDocumentClick = false;

    } else {
         this.$refs.documentClickBtn.$el.textContent = 'False';
        //disable the closeOnDocumentClick property
        this.closeOnDocumentClick = true;
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