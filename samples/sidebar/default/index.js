import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin ,RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);
new Vue({
	el: '#app',
    template: `<div id="app">
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
</div>
`,

    data () {
        return {
            position :'Left'
          }
      },
      methods: {
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