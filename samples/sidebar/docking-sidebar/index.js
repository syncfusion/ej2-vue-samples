import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin,RadioButtonPlugin} from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);

new Vue({
	el: '#app',
    template: `<div id="app"> <div class="col-lg-12 col-sm-12 col-md-12">
    <div id="wrapper">
        <title>Essential JS 2 for Angular - Sidebar > Dock</title>
        <ejs-sidebar  id="dockSidebar" :enableDock='enableDock' :width='width' :dockSize='dockSize' ref="dockSidebar" :position = "position">
            <div class="dock">
                <ul>
                    <li class="sidebar-item" id="toggle" v-on:click="toggleClick">
                        <span class="e-icons expand"></span>
                        <span class="e-text" title="menu">Menu</span>
                    </li>
                    <li class="sidebar-item">
                        <span class="e-icons home"></span>
                        <span class="e-text" title="home">Home</span>
                    </li>
                    <li class="sidebar-item">
                        <span class="e-icons profile"></span>
                        <span class="e-text" title="profile">Profile</span>
                    </li>
                    <li class="sidebar-item">
                        <span class="e-icons info"></span>
                        <span class="e-text" title="info">Info</span>
                    </li>
                    <li class="sidebar-item">
                        <span class="e-icons settings"></span>
                        <span class="e-text" title="settings">Settings</span>
                    </li>
                </ul>
            </div>
        </ejs-sidebar>
        <div id="main-content container-fluid col-md-12 ">
            <div class="title">Main content</div>
            <div class="sub-title">Click the radio button to switch the sidebar position
                <div className="center-align">
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
</div>
`,

    data () {
       return {
            enableDock:  true,
            dockSize : '72px',
            width : '220px',
            position :'Left'
        }
    },
    methods: {
    toggleClick: function() {
       this.$refs.dockSidebar.toggle();
    },
    positionChange:function(args) {
      this.position = args.event.target.id == "left" ? "Left" : "Right";
    }
    }
});