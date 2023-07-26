<template>
    <div class="col-lg-12 control-section color-appbar-section">
        <div class="appbar-sample">
            <div class="color-appbar-container">
                <div v-for="appBarColor in appBarColors" :key="appBarColor.colorMode">
                    <div class="row">
                        <div class="col-md-12">
                            <h5>{{appBarColor.colorMode}}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <ejs-appbar :colorMode=appBarColor.colorMode>
                                <ejs-button cssClass="e-inherit menu" iconCss="e-icons e-menu" :created="onCreate"></ejs-button>
                                <ejs-button cssClass="e-inherit home e-appbar-menu">Home</ejs-button>
                                <ejs-dropdownbutton :cssClass="'e-inherit e-appbar-menu ' + appBarColor.colorClass" :items="productDropDownButtonItems">Products</ejs-dropdownbutton>
                                <ejs-dropdownbutton :cssClass="'e-inherit e-appbar-menu ' + appBarColor.colorClass" :items="companyDropDownButtonItems">Company</ejs-dropdownbutton>
                                <div class="e-appbar-spacer"></div>
                                <div style="width: 200px; margin-right:10px">
                                    <span class="e-input-group e-control-wrapper e-inherit">
                                        <input type="text" class="e-searchinput e-input" placeholder="Search" />
                                        <span class="e-icons e-search e-input-group-icon"></span>
                                    </span>
                                </div>
                                <div class="e-appbar-separator"></div>
                                <ejs-button :isPrimary=appBarColor.isPrimary :cssClass=appBarColor.loginClass>Login</ejs-button>
                                <ejs-menu :cssClass="'e-inherit e-appbar-icon-menu ' + appBarColor.colorClass" :items="verticalMenuItems" :beforeItemRender="beforeItemRender"></ejs-menu>
                            </ejs-appbar>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates the available types of color in the <strong>Vue AppBar</strong>.
                </p>
            </div>
            <div id="description">
                <p>In this demo, the available types of background color for <strong>Vue AppBar</strong> are showcased. The background and font colors can be set using the <strong>ColorMode</strong> property. The different types are <code>light</code>, <code>dark</code>, <code>primary</code>, and <code>inherit</code>.</p>
                <p><code>Light</code> - The AppBar can be displayed with a light background.</p>
                <p><code>Dark</code> - The AppBar can be displayed with a dark background.</p>
                <p><code>Primary</code> - The AppBar can be displayed with primary colors.</p>
                <p><code>Inherit</code> - The AppBar inherits the color from its parent element.</p> <br />
                <p> On <code>mobile devices</code>, media query is used to display the AppBar in adaptive views. You can click the menu to see the hidden AppBar content.</p>
            </div>
        </div>
    </div>
</template>

<style>
    .color-appbar-section .e-dropdown-btn.e-inherit,
    .color-appbar-section .e-btn.e-inherit.home {
        margin: 0 5px;
    }

    .color-appbar-section .e-appbar-icon-menu {
        display: none;
    }

    .color-appbar-section .e-appbar .e-appbar-separator {
        margin: 0 10px;
    }

    @media screen and (max-width: 480px) {

        .color-appbar-section .e-appbar-icon-menu {
            display: block;
        }

        .color-appbar-section .login,
        .color-appbar-section .e-appbar-separator,
        .color-appbar-section .e-dropdown-btn.e-inherit.e-appbar-menu,
        .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-menu,
        .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu .e-menu .e-menu-item .e-caret,
        .color-appbar-section .e-btn.e-inherit.e-appbar-menu {
            display: none;
        }

        .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu ul .e-menu-item.e-menu-caret-icon {
            padding: 0 8px;
        }

        .color-appbar-section .e-menu-wrapper.e-inherit ul .e-menu-item .e-menu-icon {
            margin-right: 0;
        }

        .color-appbar-section .e-menu-wrapper.e-inherit {
            margin: 0 10px;
        }

        .fabric .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical),
        .fabric-dark .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical) {
            padding: 0;
        }

        .color-appbar-section .e-input-group.e-control-wrapper.e-inherit {
            margin-left: 10px;
        }

        .color-appbar-section .menu {
            margin-bottom: 3px;
        }
        .color-appbar-section .color-appbar-container {
            margin: 0 -30px;
        }
    }
</style>

<script>
import Vue from "vue";
import { AppBarPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(AppBarPlugin);

export default Vue.extend({
    data: function () {
        return {
            productDropDownButtonItems: [
                { text: 'Developer' },
                { text: 'Analytics' },
                { text: 'Reporting' },
                { text: 'E-Signature' },
                { text: 'Help Desk' }
            ],
            companyDropDownButtonItems: [
                { text: 'About Us' },
                { text: 'Customers' },
                { text: 'Blog' },
                { text: 'Careers' }
            ],
            appBarColors : [
                { colorMode: 'Light', colorClass: 'e-light', isPrimary: 'true', loginClass: 'login' },
                { colorMode: 'Dark', colorClass: 'e-dark', isPrimary: 'false', loginClass: 'e-inherit login' },
                { colorMode: 'Primary', colorClass: 'e-primary', isPrimary: 'false', loginClass: 'e-inherit login' },
                { colorMode: 'Inherit', colorClass: 'e-inherit', isPrimary: 'true', loginClass: 'login' }
            ],
            verticalMenuItems: [
                {
                    iconCss: 'e-icons e-more-vertical-1',
                    items: [
                        { text: 'Home' },
                        {
                            text: 'Products',
                            items: [
                                { text: 'Developer' },
                                { text: 'Analytics' },
                                { text: 'Reporting' },
                                { text: 'E-Signature' },
                                { text: 'Help Desk' }
                            ]
                        },
                        {
                            text: 'Company',
                            items: [
                                { text: 'About Us' },
                                { text: 'Customers' },
                                { text: 'Blog' },
                                { text: 'Careers' }
                            ]
                        },
                        { text: 'Login' }
                    ]
                }
            ]
        }
    },
    mounted: function() {
        let inputElement = document.querySelectorAll('.color-appbar-section .e-input-group .e-input');

        for(let i = 0; i<inputElement.length; i++) {
            inputElement[i].addEventListener("focus", function () {
            let parentElement = this.parentNode;
            if (parentElement.classList.contains('e-input-in-wrap')) {
                parentElement.parentNode.classList.add('e-input-focus');
            } else {
                this.parentNode.classList.add('e-input-focus');
            }
        });
        inputElement[i].addEventListener("blur", function () {
            let parentElement = this.parentNode;
            if (parentElement.classList.contains('e-input-in-wrap')) {
                parentElement.parentNode.classList.remove('e-input-focus');
            } else {
                this.parentNode.classList.remove('e-input-focus');
            }
        });
        }
    },
    methods: {
        beforeItemRender: function(args) {
            if (args.element.children.length > 0 && args.element.children[0].classList.contains("e-more-vertical-1")) {
                args.element.setAttribute('aria-label', 'more vertical');
            }
        },
        onCreate: function() {
            let menuButtonElement = document.querySelectorAll('.color-appbar-section .e-inherit.menu');
            for (let j = 0; j < menuButtonElement.length; j++) {
                if(!(menuButtonElement[j].hasAttribute("aria-label"))) {
                    menuButtonElement[j].setAttribute('aria-label','menu');
                }
            }
        }
    }
});
</script >
