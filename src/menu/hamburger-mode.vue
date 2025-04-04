<template>
<div>
<div class="col-lg-8 control-section">
    <div class="menu-control">
        <div id='layoutcontainer' class="deviceLayout">
            <div class="speaker">
                <div class="camera"></div>
            </div>
            <div class="layout">
                <div id="container">
                    <ejs-menu ref="menu" id="menu" :items="menuItems" :hamburgerMode="hamburgerMode" :showItemOnClick="showItemOnClick" :created="menuCreated"></ejs-menu>
                </div>
            </div>
            <div class="outerButton"> </div>
        </div>
    </div>
</div>
<div class="col-lg-4 menu-section property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tbody>
            <tr>
                <td style="width: 50%;padding-top:10px">
                    <div>View Mode</div>
                </td>
                <td style="width: 50%;padding-top:10px">
                    <div style="max-width: 200px">
                        <ejs-dropdownlist value="Mobile" :dataSource="viewModeData" :change="modeChange">
                        </ejs-dropdownlist>
                    </div>
                </td>
            </tr>           
        </tbody>
    </table>
</div>
<div id="action-description">
    <p>This sample demonstrates the hamburger mode in the <code>menu</code> component.</p>
</div>
<div id="description">
    <p>
        Enabling the <code>hamburgerMode</code> property makes the <code>menu</code> component in adaptive view. By default, its shows header with 
        hamburger icon in <code>Horizontal</code> orientation.
    </p>
    <p>
        The menu shows on clicking hamburger icon. You can use the <code>open</code> and <code>close</code> methods to show / hide the menu programmatically.
    </p>
    <p>
        More information about Menu can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/menu/getting-started">documentation</a> section.
    </p>
</div>
</div>
</template>
<style>
    /**
    * ej2 Menu styles customization
    */
    .deviceLayout #menu {
        -ms-overflow-style: none;
        scrollbar-width: none;
        height: 363px;
    }
    .deviceLayout #menu::-webkit-scrollbar {
        width: 0;
    }
</style>
<!-- custom code start -->
<style>
    /**
    * ej2 Menu styles
    */
    .menu-control {
        text-align: center;
    }

    #layoutcontainer:not(.deviceLayout) {
        margin-top: 45px;
    }
    
    .deviceLayout {
        line-height: initial;
        border: 1px solid black;
        width: 285px;
        height: 505px;
        margin: auto;
        margin-bottom: 15px;
        border-radius: 28px;
        position: relative;
        background-image: linear-gradient(to top, #ffffff, #f5f5f5);
    }

    .fluent-dark .e-menu-wrapper.e-hamburger.e-lib.e-keyboard {
        background-color: black;
    }

    .material3-dark .e-menu-wrapper.e-hamburger.e-lib.e-keyboard {
        background: #1c1b1f;
        border-radius: 0;
    }

    .deviceLayout.tabletview {
        width: 767px;
        z-index: 1;
    }

    .deviceLayout .speaker {
        border: 1px solid black;
        border-radius: 5px;
        width: 20%;
        height: 5px;
        margin: 15px auto 0px auto;
        position: relative;
    }

    .deviceLayout .outerButton {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 50%;
        position: absolute;
        bottom: calc(0% + 10px);
        left: calc(50% - 15px);
    }

    .deviceLayout .camera {
        position: absolute;
        left: calc(-15% - 10px);
        top: -100%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid black;
    }

    .deviceLayout .layout {
        border: 1px solid black;
        margin: 20px 13px 0px 13px;
    }

    .layout #container {
        height: 405px;
        background-color: white;
        overflow: hidden;
    }

    #header {
        width: 100%;
        background-color: #7b8cfb;
    }

    .highcontrast #hamburgerMenu .layout #container,
    .tailwind-dark #hamburgerMenu .layout #container,
    .fluent-dark #hamburgerMenu .layout #container,
    .fabric-dark #hamburgerMenu .layout #container,
    .bootstrap5\.3-dark #hamburgerMenu .layout #container,
    .bootstrap-dark #hamburgerMenu .layout #container,
    .fluent2-dark #hamburgerMenu .layout #container,
    .highcontrast-dark #hamburgerMenu .layout #container,
    .material3-dark #hamburgerMenu .layout #container,
    .material-dark  #hamburgerMenu .layout #container,
    .fluent2-dark #hamburgerMenu .layout #container,
    .fluent2-highcontrast #hamburgerMenu .layout #container {
        background-color: black;
    }

    /**
    * ej2 Menu Tailwind 3 styles
    */
    .tailwind3-dark .layout #container {
        background: #111827;
    }
    .tailwind3-dark .deviceLayout {
        border-color: #374151;
        background-image: none;
    }
    .tailwind3-dark .deviceLayout .layout {
        border-color: #374151;
    }
    .tailwind3-dark .deviceLayout .camera,
    .tailwind3 .deviceLayout .camera {
        display: none;
    }
    .tailwind3-dark .deviceLayout .speaker,
    .tailwind3-dark .deviceLayout .outerButton {
        border-color: #282F3C;
        background: #282F3C;
    }
    .tailwind3 .deviceLayout {
        border-color: #D1D5DB;
        background-image: none;
    }
    .tailwind3 .deviceLayout .layout {
        border-color: #D1D5DB;
    }
    .tailwind3 .deviceLayout .speaker,
    .tailwind3 .deviceLayout .outerButton {
        border-color: #E5E7EB;
        background: #E5E7EB;
    }
</style>
<!-- custom code end -->
<script>
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import * as dataSource from './menu-data.json';
// custom code start
import { Browser, select } from '@syncfusion/ej2-base';
// custom code end

export default {
  components: {
    'ejs-menu': MenuComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
    return {
            hamburgerMode: true,
            showItemOnClick: true,
            menuItems: dataSource.hamburgerData,
            viewModeData: [
                { text: 'Mobile', value: 'Mobile' },
                { text: 'Tablet', value: 'Tablet' },
                { text: 'Desktop', value: 'Desktop' }
            ]
        };
    },
    methods: {
        modeChange: function(args) {
            var container = document.querySelector('#layoutcontainer');
            var menu = document.querySelector('#menu');
            switch (args.value) {
                case 'Mobile':
                case 'Tablet':
                    this.$refs.menu.close();
                    container.classList.add('deviceLayout');
                    container.classList[args.value === 'Mobile' ? 'remove' : 'add']('tabletview');
                    menu.parentElement.classList[args.value === 'Mobile' ? 'remove' : 'add']('e-menu-icon-right');
                    this.hamburgerMode = true;
                    this.showItemOnClick = true;
                break;
                case 'Desktop':
                    container.classList.remove('deviceLayout', 'tabletview');
                    this.hamburgerMode = false;
                    this.showItemOnClick = false;
                break;
            }
        },
        // custom code start
        menuCreated: function() {
            if (Browser.isDevice) {
                select('.property-section').remove();
                select('#layoutcontainer').removeAttribute('class');
                select('#layoutcontainer').removeAttribute('id');
                select('#menu').style.height = '363px';
            }
        },
        // custom code end
    }
}
</script>
