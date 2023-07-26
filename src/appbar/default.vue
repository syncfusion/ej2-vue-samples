<template>
    <div class="col-lg-12 control-section default-appbar-section">
        <div class="appbar-sample">
            <div class="default-appbar-container">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Simple AppBar</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <ejs-appbar colorMode="Primary">
                            <ejs-button id='regularButtonMenu' cssClass="e-inherit menu" iconCss="e-icons e-menu"></ejs-button>
                            <span class="regular">Vue AppBar</span>
                            <div class="e-appbar-spacer"></div>
                            <ejs-button cssClass="e-inherit login">FREE TRIAL</ejs-button>
                        </ejs-appbar>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h5>Prominent</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <ejs-appbar cssClass="prominent-appbar" mode="Prominent" colorMode="Primary">
                            <ejs-button id='prominentButtonMenu' cssClass="e-inherit menu" iconCss="e-icons e-menu"></ejs-button>
                            <span class="prominent">Vue AppBar Component with Prominent mode</span>
                            <div class="e-appbar-spacer"></div>
                            <ejs-button cssClass="e-inherit login">FREE TRIAL</ejs-button>
                        </ejs-appbar>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h5>Dense</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <ejs-appbar mode="Dense" colorMode="Primary">
                            <ejs-button id='denseButtonMenu' cssClass="e-inherit menu" iconCss="e-icons e-menu"></ejs-button>
                            <span class="dense">Vue AppBar</span>
                            <div class="e-appbar-spacer"></div>
                            <ejs-button cssClass="e-inherit login">FREE TRIAL</ejs-button>
                        </ejs-appbar>
                    </div>
                </div>
                <br />
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates the default functionalities of the <strong>Vue AppBar</strong>.
                </p>
            </div>
            <div id="description">
                <p>The <strong>>Vue AppBar</strong> is a navigation component that displays information and actions related to the current view horizontally. </p> <br />
                <p>In this demo, the available types of Vue AppBar are showcased. They are <code>regular</code>, <code>prominent</code>, and <code>dense</code>, and can be set using the <strong>Mode</strong> property. </p>
                <p><code>Regular</code> - The AppBar is displayed with the default height.</p>
                <p><code>Prominent</code> - Prominent top app bars are longer than regular, and can be used for larger titles, images, or texts.</p>
                <p><code>Dense</code> - The AppBar's layout is denser to accommodate all the AppBar content.</p>
                <p>In this demo, <strong>Button</strong> component's styles are inherited from the <strong>AppBar</strong> component using the <code>e-inherit</code> CSS class. </p>
            </div>
        </div>
    </div>
</template>

<style>
    .default-appbar-section .regular,
    .default-appbar-section .prominent,
    .default-appbar-section .dense {
        margin: 0 5px;
    }
    .default-appbar-section .prominent {
        align-self: center;
        white-space: break-spaces;
        text-align: inherit;
        font-size: 35px;
        line-height: 50px;
    }
    .default-appbar-section .e-appbar.prominent-appbar {
        background-image: url(./images/prominent.png);
        background-size: 100% 400px;
        color: #ffffff;
        background-repeat: no-repeat;
        height: 400px;
    }
    .default-appbar-section .prominent-appbar .e-inherit.e-btn {
        background: transparent;
    }
    .default-appbar-section .prominent-appbar .e-inherit.e-btn:hover,
    .default-appbar-section .prominent-appbar .e-inherit.e-btn:focus,
    .default-appbar-section .prominent-appbar .e-inherit.e-btn:active,
    .default-appbar-section .prominent-appbar .e-inherit.e-btn.e-active,
    .default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:hover,
    .default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:focus
    .default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:active
    .default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn.e-active {
        background: rgba(255, 255, 255, .08);
    }
    @media only screen and (max-width: 480px) {
      .default-appbar-section .prominent {
        font-size: 20px;
        line-height: 28px;
      }
      .default-appbar-section .e-appbar.prominent-appbar {
        background-size: 100% 250px;
        height: 250px;
      }
      .e-bigger .default-appbar-section .e-inherit.e-btn.login,
      .e-bigger.tailwind-dark .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu,
      .e-bigger.tailwind .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu {
        padding-left: 7px;
        padding-right: 7px;
      }
      .default-appbar-section .default-appbar-container {
        margin: 0 -15px;
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
        }
    },
    mounted: function () {
        document.getElementById('regularButtonMenu').setAttribute('aria-label', 'menu');
        document.getElementById('prominentButtonMenu').setAttribute('aria-label', 'menu');
        document.getElementById('denseButtonMenu').setAttribute('aria-label', 'menu');
    },
    methods: {}
});
</script>
