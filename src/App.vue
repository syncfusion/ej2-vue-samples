<template>
    <div id="app" ref="homeEle">
        <aside id='left-sidebar'>
            <div class='sb-left-pane e-view'>
                <div class="sb-left-pane-header">
                    <div class="sb-header-top">
                        <div class="sb-ej2">
                            <div class="sb-mobile-logo"></div>
                            <div class="sb-name">Essential JS 2</div>
                        </div>
                    </div>
                </div>
                <div class="sb-home" role="button" tabindex="0" aria-label="Essential JS2 home page"
                    onclick="document.getElementById('sb-home').click()">
                    <div class="sb-home-link sb-icons sb-icon-Home"></div>
                    <div class="sb-home-text">
                        <span>HOME</span>
                    </div>
                    <a id="sb-home" href="https://ej2.syncfusion.com/home/vue.html"
                        aria-label="Essential JS2 home page"></a>
                </div>
                <div class='sb-control-navigation'>
                    <div id="controlTree" class='e-view'></div>
                    <div id="controlSamples">
                        <div id="sb-left-back" class="back" role="button" tabindex="0">
                            <div class="sb-icons sb-icon-Back"></div>
                            <div class='control-name'>All Controls</div>
                        </div>
                        <div id="controlList" class='e-view sb-control-list-top'></div>
                    </div>
                </div>
                <div class='sb-left-footer'>
                    <div class="sb-mobile-header-buttons">
                        <a href='https://www.syncfusion.com/products/essential-js2' target="_blank"
                            aria-label="About Vue component">
                            <div class="sb-mobile-header-about">
                                About</div>
                        </a>
                        <a href='https://www.syncfusion.com/downloads/vue' target="_blank"
                            aria-label="Prcing of Vue component">
                            <div class="sb-mobile-header-price">Pricing</div>
                        </a>
                    </div>
                    <div class='sb-left-footer-links'>
                    </div>
                </div>
            </div>
        </aside>
        <aside id='right-sidebar' class="sb-hide">
            <div class="sb-mobile-right-pane">
                <div class="sb-mobile-preference sb-hide"></div>
                <div class="sb-mobile-prop-pane sb-hide"></div>
                <div class="sb-mobile-right-pane-close sb-icons"></div>
            </div>
        </aside>
        <div class="sample-browser e-view" rol>
            <div class="sb-mobile-overlay sb-hide"></div>
            <div id='sample-header' class="sb-header e-view" role="banner">
                <div class='sb-header-left sb-left sb-table'>
                    <div class='sb-header-item sb-table-cell'>
                        <div id="sb-toggle-left" tabindex="0" class="sb-slide-nav sb-icons toggle-active sb-icon-Hamburger"
                            aria-label="Toggle all controls navigation" aria-controls="left-sidebar"
                            title='toggle left pane' aria-selected="true"></div>
                    </div>
                    <div class='sb-header-item sb-table-cell'>
                        <div id='sb-header-text' class='e-sb-header-text'>
                            <span class='sb-header-text-left'>Essential Studio<sup>®</sup> UI Suite for </span>
                            <span class='sb-header-text-right' role="button" tabindex="0">Vue</span>
                        </div>
                    </div>

                    <div class='sb-header-item sb-table-cell sb-lang-toggler-wrapper'>
                        <span id='sb-switcher' role="button" tabindex="0" class='sb-lang-toggler sb-icons sb-icon-Dropdown'
                            aria-label="change the samplebrowser"></span>
                    </div>
                </div>
                <div class='sb-header-right sb-right sb-table'>
                    <div class="sb-header-item sb-table-cell">
                        <div id="header-theme-switcher" role="button" tabindex="0" class="theme-wrapper"
                            title='Change theme of sample browser'>
                            <div id="sb-theme-text" class="sb-theme-text">
                                <span class="sb-header-text-left">CHOOSE THEME</span>
                            </div>
                            <div class="sb-theme-switcher-wrapper">
                                <span id="sb-theme-switcher" class="sb-theme-switch sb-icons sb-icon-Dropdown"
                                    role="presentation" aria-label="Theme selection"></span>
                            </div>
                        </div>
                    </div>
                    <div class="sb-header-item sb-table-cell">
                        <div id="themeMode-switch-btn">
                            <span class="sb-icons sb-icon-dark-theme" id="icon-dark"></span>
                            <span class="sb-icons sb-icon-light-theme" id="icon-light"></span>
                            <span id="sb-icon-text">DARK</span>
                        </div>
                    </div>
                    <div class="sb-header-splitter sb-search-splitter"></div>
                    <div class='sb-header-item sb-table-cell sb-search-wrapper'>
                        <div class='sb-search-btn' id='sb-trigger-search' role="button" tabindex="0"
                            aria-label="toggle sample search" title="Toggle sample search">
                            <span class='sb-settings sb-icons sb-icon-Search' role="presentation"
                                aria-label="Search sample"></span>
                        </div>
                    </div>
                    <div class='sb-header-item sb-table-cell sb-settings-wrapper'>
                        <div class='sb-setting-btn' role="button" tabindex="0" aria-label="toggle settings menu">
                            <span class='sb-settings sb-icons sb-icon-Settings-Preferences'></span>
                        </div>
                    </div>
                    <div class="sb-header-item sb-table-cell  sb-header-settings sb-icons"></div>
                    <div class="sb-header-splitter sb-download-splitter"></div>
                    <div v-if="showTrialButton" class='sb-header-item sb-table-cell sb-download-wrapper'>
                        <a href='https://www.syncfusion.com/downloads?tag=es-seo-ej2-vue-demo-menu-trail' target="_blank"
                            aria-label="Free Trail (Opens in a new window)">
                            <button id='download-now' type="button" class='sb-download-btn'>
                                <span class='sb-download-text'>FREE TRIAL</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            <div id='sb-popup-section' class='sb-popups'>
                <div id='sb-switcher-popup' role='navigation' class='sb-switch-popup'>
                    <ul id='switch-sb' role="list">
                        <li class='sb-current' role="listiem">Vue</li>
                        <li>
                           <a id='nextjs'>Next.js</a>
                        </li>
                        <li>
                            <a id='angular'>Angular</a>
                        </li>
                        <li role="listiem">
                            <a id='react'>React</a>
                        </li>
                        <li role="listiem">
                            <a id='javascript'>JavaScript (ES5)</a>
                        </li>
                        <li role="listiem">
                            <a id='typescript'>JavaScript</a>
                        </li>
                        <li role="listiem">
                            <a id='aspnetcore'>ASP.NET Core</a>
                        </li>
                        <li role="listiem">
                            <a id='aspnetmvc'>ASP.NET MVC</a>
                        </li>
                        <li role="listiem">
                            <a id='blazor'>Blazor</a>
                        </li>
                    </ul>
                </div>
                <div id='theme-switcher-popup' class='sb-theme-popup'>
                    <ul id="themelist" class="options" role="list">
                        <li class='active' id="material3" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Material 3</span>
                        </li>
                        <li class="e-list" id="bootstrap5" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Bootstrap 5</span>
                        </li>
                        <li class="e-list" id="fluent2" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Fluent 2</span>
                        </li>
                        <li class="e-list" id="tailwind3" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Tailwind CSS</span>
                        </li>
                        <li class="e-list" id="fluent2-highcontrast" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Fluent 2 High Contrast</span>
                        </li>
                        <li class="e-list sb-hide" id="highcontrast" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">High Contrast</span>
                        </li>
                        <li class="e-list sb-hide" id="tailwind" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Tailwind</span>
                        </li>
                        <li class="e-list sb-hide" id="fluent" role="listitem">
                            <span class='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                            <span class="switch-text">Fluent</span>
                        </li>
                    </ul>
                    <div class="sb-theme-studio"><a target="_blank"
                            href="https://ej2.syncfusion.com/themestudio/?theme=fluent2" aria-label="Go to Theme Studio">Go
                            to Theme Studio</a></div>
                </div>
                <div id='settings-popup' class='sb-setting-popup'>
                    <div class='sb-setting-header'>
                        <span> Preferences
                        </span>
                    </div>
                    <div class='sb-setting-content'>
                        <div class='sb-setting-item sb-setting-theme-section'>
                            <div class='setting-label'>
                                <div class='sb-icons sb-setting-icons sb-icon-Palette'></div>
                                <div class='sb-setting-text'>Theme Selection</div>
                            </div>
                            <div class='setting-content  setting-theme-change'>
                                <select id='sb-setting-theme' class='sb-setting-theme-select'>
                                    <option value="material3">Material 3</option>
                                    <option value="bootstrap5">Bootstrap v5</option>
                                    <option value="fluent2">Fluent 2</option>
                                    <option value="tailwind3">Tailwind CSS</option>
                                    <option value="fluent2-highcontrast">Fluent 2 High Contrast</option>
                                    <option value="highcontrast">High Contrast</option>
                                    <option value="tailwind">Tailwind</option>
                                    <option value="fluent">Fluent</option>
                                </select>
                            </div>
                        </div>
                        <div class="sb-setting-item sb-setting-themeModes-section">
                            <div class="setting-label">
                                <div class="sb-icons sb-setting-icons sb-icon-dark-theme" id="sb-icon-mobileDark"></div>
                                <div class="sb-icons sb-setting-icons sb-icon-light-theme" id="sb-icon-mobileLight"></div>
                                <div class="sb-setting-text">Theme Modes</div>
                            </div>
                            <div>
                                <select id="sb-setting-themeMode">
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </div>
                        <div class='sb-setting-item sb-responsive-section'>
                            <div class='setting-label'>
                                <div class='sb-icons sb-setting-icons sb-icon-Responsive'></div>
                                <div class='sb-setting-text'>Mode Selection</div>
                            </div>
                            <div class='setting-content btn-group setting-responsive'>
                                <div id='touch' role="button" tabindex="0"
                                    class="sb-responsive-items set-border-radious-touch"
                                    title="Increased padding for actionable items to accommodate user touches">Touch</div>
                                <div id='mouse' role="button" tabindex="0"
                                    class="sb-responsive-items set-border-radious-mouse"
                                    title="Default control sizes, optimized for use with mouse">Mouse</div>
                            </div>
                        </div>
                        <div class='sb-setting-item sb-setting-culture'>
                            <div class='setting-label'>
                                <div class='sb-icons sb-setting-icons sb-icon-Localization'></div>
                                <div class='sb-setting-text'>Localization</div>
                            </div>
                            <div class='setting-content'>
                                <select id='sb-setting-culture' class='sb-setting-culture-select'>
                                    <option value="en">English*</option>
                                    <option value="de">German - Germany*</option>
                                    <option value="fr-CH">French - Switzerland*</option>
                                    <option value="ar">Arabic*</option>
                                    <option value="zh">Chinese - China*</option>
                                </select>
                            </div>
                            <div class="sb-setting-translate">
                                <span>* Translated by Google Translator</span>
                            </div>
                        </div>
                        <div class='sb-setting-item sb-setting-currency'>
                            <div class='setting-label'>
                                <div class='sb-icons sb-setting-icons sb-icon-Currency'></div>
                                <div class='sb-setting-text'>Currency</div>
                            </div>
                            <div class='setting-content'>
                                <select id='sb-setting-currency' class='sb-setting-currency-content'>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="AED">AED</option>
                                    <option value="CHF">CHF</option>
                                    <option value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sb-content e-view">
                <div class='sb-right-pane e-view' id='right-pane'>
                    <div class="sb-content-overlay">
                        <div class="sb-loading">
                            <svg class="circular" height="40" width="40">
                                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="6"
                                    stroke-miterlimit="10" />
                            </svg>
                        </div>
                    </div>
                    <div class='sb-desktop-wrapper'>
                        <div id='component-name' class='sb-component-name sb-rightpane-padding'>
                            <h1 class='sb-sample-text' aria-level="1" role="heading">Chart</h1>
                        </div>
                        <div id='sample-bread-crumb' class='sb-bread-crumb sb-rightpane-padding'>
                            <div class='sb-bread-crumb-text'>
                                <div class='category-text bread-ctexta'> </div>
                                <div class='category-seperator sb-icons sb-icon-Next seperator'> </div>
                                <div class='component  bread-ctext'></div>
                                <div class="component-seperator sb-icons  sb-icon-Next seperator"> </div>
                                <div class='crumb-sample '></div>
                            </div>

                            <a id="sb-home" href="http://ej2.syncfusion.com/home/vue.html"
                                aria-label="Sample home page"></a>
                        </div>
                        <div class='sb-action-description sb-rightpane-padding'>
                            Componet Action Description
                        </div>
                        <div class='sb-content-tab' id='content-tab'>
                            <div id="sb-content" class='sb-content-section'>
                                <div id='sb-content-header' class="e-tab-header sb-content-tab-header">
                                    <div>
                                        <span class="sb-icons sb-icon-Demo"></span>
                                        <span class="sb-tab-title"> DEMO </span>
                                    </div>
                                    <div>
                                        <span class="sb-icons sb-icon-Code"></span>
                                        <span class="sb-tab-title"> SOURCE </span>
                                    </div>
                                </div>
                                <div class="e-content sb-sample-content-area">
                                    <div>
                                        <div class='sb-demo-section'>
                                            <div class="control-fluid">
                                                <div class="container-fluid">
                                                    <div id="control-content">
                                                        <router-view></router-view>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class='sb-source-section'>
                                            <div id='sb-source-tab' class="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='description-section sb-rightpane-padding'>
                        </div>
                        <div class="banner-wrapper">
                            <div id='ad-image' class="banner-img">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="col-sm-12">
                                            <div id="banner-head" class="banner-header">Transform your Vue web apps today
                                                with Syncfusion<sup>®</sup> Vue components</div>
                                        </div>
                                        <div class="col-sm-12 cnt-area">
                                            <div class="content-area">
                                                <div class="banner-cnt-pt">
                                                    <div class="banner-cnt-icon  click-icon sb-icons sb-icon-icon-selection">
                                                    </div>
                                                    <div class="banner-cnt-text">80+ high-performance and responsive UI
                                                        components</div>
                                                </div>
                                                <div class="banner-cnt-pt">
                                                    <div class="banner-cnt-icon click-icon sb-icons sb-icon-icon-selection">
                                                    </div>
                                                    <div class="banner-cnt-text">Dedicated support</div>
                                                </div>
                                                <div class="banner-cnt-pt">
                                                    <div class="banner-cnt-icon click-icon sb-icons sb-icon-icon-selection">
                                                    </div>
                                                    <div class="banner-cnt-text">Hassle-free licensing</div>
                                                </div>
                                            </div>
                                            <a style="color:#ffff;text-decoration:none;"
                                                href="https://www.syncfusion.com/downloads?tag=es-seo-ej2-vue-demo-ads-trail"
                                                aria-label="TRY IT FOR FREE (Opens in a new window)">
                                                <div class="free-trial">TRY IT FOR FREE</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sb-footer">
                            <div class="sb-footer-left">
                                <div class="sb-footer-links">
                                    <a href="https://ej2.syncfusion.com/vue/documentation/introduction" target="_blank"
                                        aria-label="Documentation (Opens in a new window)">
                                        <div class="sb-footer-link">Documentation</div>
                                    </a>
                                    <a href="https://www.syncfusion.com/forums/vue" target="_blank"
                                        aria-label="Forum (Opens in a new window)">
                                        <div class="sb-footer-link">Forum</div>
                                    </a>
                                    <a href="https://syncfusion.com/blogs" target="_blank"
                                        aria-label="Blog (Opens in a new window)">
                                        <div class="sb-footer-link">Blog</div>
                                    </a>
                                    <a href="https://www.syncfusion.com/kb/" target="_blank"
                                        aria-label="Knowledge base (Opens in a new window)">
                                        <div class="sb-footer-link">Knowledge Base</div>
                                    </a>
                                </div>
                                <div class="sb-footer-copyright"></div>
                            </div>
                            <div class="sb-footer-logo">
                                <a href="https://www.syncfusion.com/" target="_blank" aria-label="Syncfusion logo">
                                    <div class="sb-footer-logo-icon"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="e-search-overlay sb-hide">
                    <div class='sb-search-input' id='search-input-wrapper' data-value=''>
                        <input type='text' aria-required="true" id='search-input' aria-label="search samples">
                        <span class='e-icons sb-reset-icon'></span>
                        <span class='e-icons  sb-search-icon'></span>

                    </div>
                </div>
                <div class="sb-body-overlay e-view">
                    <div class="sb-loading">
                        <svg class="circular" height="40" width="40">
                            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="6"
                                stroke-miterlimit="10" />
                        </svg>
                    </div>
                </div>

                <div class='sb-mobilefooter e-view sample-navigation' id='mobile-footer'>
                    <button id='mobile-prev-sample' class="sb-navigation-prev sb-left" aria-label="previous sample">
                        PREVIOUS
                    </button>
                    <button id='mobile-next-sample' class="sb-navigation-next sb-right" aria-label="next sample">
                        NEXT
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/* Vue imports */
import { ref, Ref, onMounted, onBeforeMount } from 'vue';
import { useRoute, useRouter, Router, RouteLocationNormalized } from "vue-router";

/* syncfusion imports */
import { Browser, extend, Animation, Ajax, Fetch, closest, createElement, detach, enableRipple, setCurrencyCode } from '@syncfusion/ej2-base';
import { select, selectAll, setCulture, L10n, loadCldr, registerLicense, getComponent } from '@syncfusion/ej2-base';
import { TreeView, Sidebar, Tab, EventArgs } from '@syncfusion/ej2-navigations'
import { Popup, Tooltip } from '@syncfusion/ej2-popups';
import { AutoComplete } from '@syncfusion/ej2-vue-dropdowns'
import { Button } from '@syncfusion/ej2-buttons';
import { Toast } from '@syncfusion/ej2-notifications';
import { Grid } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ImageEditor } from '@syncfusion/ej2-image-editor';

/* Other imports */
import { Locale } from './common/locale-string';
import * as numberingSystems from './common/cldr-data/supplemental/numberingSystems.json';
import * as currencyData from './common/cldr-data/supplemental/currencyData.json';
import * as deCultureData from './common/cldr-data/main/de/all.json';
import * as arCultureData from './common/cldr-data/main/ar/all.json';
import * as swissCultureDate from './common/cldr-data/main/fr-CH/all.json';
import * as enCultureData from './common/cldr-data/main/en/all.json';
import * as chinaCultureData from './common/cldr-data/main/zh/all.json';
import * as samplesJSON from './common/samplelist';
import { ListView, ListBase } from '@syncfusion/ej2-lists';
import * as elasticlunr from 'elasticlunr';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
let searchJson: any = require('./common/search-index.json');
import { Controls, MyWindow, DestroyMethod, Samples } from './model';
// import { setTimeout } from "timers";

loadCldr(numberingSystems["default"], chinaCultureData["default"], enCultureData["default"], swissCultureDate["default"], currencyData["default"], deCultureData["default"], arCultureData["default"]);
L10n.load(Locale);
setCulture('en');
registerLicense((window as any).syncfusion_license);
const urlRegex: RegExp = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
const sampleRegex: RegExp = /#\/(([^\/]+\/)+[^\/\.]+)/;
const sbArray: string[] = ['angular', 'react', 'nextjs', 'javascript', 'aspnetcore', 'aspnetmvc', 'typescript', 'blazor'];
//Regex for removing hidden
const reg: RegExp = /.*custom code start([\S\s]*?)custom code end.*/g;
let skipReload: boolean = false; // Flag to skip reload when switching themes
let isReloadingTheme = false; // Flag to indicate if the theme is being reloaded
let hasHandledInitialTheme = false; // Flag to check if the initial theme has been handled
let selectedTheme: string = location.hash.split('/')[1] || 'tailwind3';
const themeCollection: string[] = ['material3', 'bootstrap5', 'fluent2', 'tailwind3', 'fluent2-highcontrast', 'highcontrast', 'tailwind', 'fluent'];
const themesToRedirect: string[] = ['material', 'material-dark', 'bootstrap4', 'bootstrap', 'bootstrap-dark', 'fabric', 'fabric-dark'];
let resizeManualTrigger: boolean = false;
const matchedCurrency: { [key: string]: string } = {
    'en': 'USD',
    'de': 'EUR',
    'ar': 'AED',
    'zh': 'CNY',
    'fr-CH': 'CHF'
};

let rootEle: HTMLElement;
let route: RouteLocationNormalized;
let router: Router;
let sb: any = { vars: {} };
let controlSampleData: any = {};
let preventToggle: boolean;
let samplesTreeList: any = [];
let themeSwitcherPopup: Popup;
let cultureDropDown: DropDownList;
let searchInstance: any;
let searchPopup: AutoComplete;
let openedPopup: any;
let prevAction: string;
let samplesAr: string[] = [];
let switcherPopup: Popup;
let themeDropDown: DropDownList;
let themeModeDropDown: DropDownList;
let currencyDropDown: DropDownList;
let settingPopup: Popup;
let sidebar: Sidebar;
let sourceTabItems: object[] = [];
let settingSidebar: Sidebar;
let prev: string = '';
let sbHeader: HTMLElement;
let settingElement: HTMLElement
let resetSearch: Element;
let searchEle: any;
declare let window: MyWindow;
let apiGrid: Grid;
let samplesList: Controls[] | { [key: string]: Object }[];
let isTablet: boolean = window.matchMedia('(min-width:600px) and (max-width: 850px)').matches;
let isMobile: boolean = window.matchMedia('(max-width:550px)').matches;
let isPc: boolean = window.matchMedia('(min-width:850px)').matches;
let leftToggle: HTMLElement;
let searchButton: any;
let themeList: any;
let sbBodyOverlay: HTMLElement;
let contentToolbarTemplate: string;
let tabContentToolbar: Element;
let searchOverlay: Element;
let inputele: any;
let sbContentOverlay: HTMLElement;
let sbRightPane: HTMLElement;
let headerSetting: HTMLElement;
let mobileSetting: HTMLElement;
let copyRight: HTMLElement;
let aiControlRegex: RegExp = /ai-(?!assistview\b)[a-z-]+/;
let hsplitter: string = '<div class="sb-toolbar-splitter sb-custom-item"></div>';
// tslint:disable-next-line:no-multiline-string
let openNewTemplate: string = `<div class="sb-custom-item sb-open-new-wrapper"><a id="openNew" role='tab' target="_blank" aria-label="Open new sample">
        <div class="sb-icons sb-icon-Popout"></div></a></div>`;
let sampleNavigation: string = `<div class="sb-custom-item sample-navigation"><button id='prev-sample' role='tab' class="sb-navigation-prev" 
aria-label="Naviagte to previous sample">
<span class='sb-icons sb-icon-Previous'></span>
</button>
<button  id='next-sample' role='tab' class="sb-navigation-next" aria-label="Navigate to next sample">
<span class='sb-icons sb-icon-Next'></span>
</button>
</div>`;
let stackTemplate: string = '<span class="sb-icons sb-icons-plnkr" role="presentation"></span><span class="sb-plnkr-text">Edit in StackBlitz</span>';
contentToolbarTemplate = '<div class="sb-desktop-setting"><button id="open-plnkr" role="tab" aria-label="Open Edit in StackBlitz" tabindex="0" class="sb-custom-item sb-plnr-section">' +
    stackTemplate + '</button>' + hsplitter + openNewTemplate + hsplitter + sampleNavigation + '<div class="sb-icons sb-mobile-setting sb-hide"></div>'
tabContentToolbar = createElement('div', { className: 'sb-content-toolbar', innerHTML: contentToolbarTemplate });

/* vue instance */
const myJson = searchJson;
const homeEle: Ref<HTMLElement | null> = ref(null);

// Determine if the "FREE TRIAL" button should be shown
const showTrialButton = ref(window.location.hostname !== 'localhost');

onBeforeMount(() => {
    samplesList = getSampleList();
});

const urlChange = async () => {
    
    // Check if this is just a dark/light mode switch
    const currentHash = location.hash;
    const currentParts = currentHash.split('/');
    const prevParts = prev.split('/');
    // If only the theme part changed (index 1) but component and sample are the same, skip urlChange
    const isThemeOnlyChange = prevParts.length >= 3 && currentParts.length >= 3 && 
        currentParts[2] === prevParts[2] && // same component
        currentParts[3] === prevParts[3] && // same sample
        currentParts[1] !== prevParts[1];   // different theme
    if (isThemeOnlyChange) {
        prev = currentHash;
        return;
    }
    await router.isReady();
    sb.vars.contentTab.selectedItem = 0;
    updateBreadCrumb();
    updateDescription();
    updatesourceTab();
}

onMounted(async () => {
    rootEle = homeEle.value as HTMLElement;
    router = useRouter();
    route = useRoute();
    await router.isReady();
    sb.vars.controlTree = select('#controlTree', rootEle);
    sb.vars.breadCrumbObject = {};

    /* breadCrumb updates */
    sb.vars.breadCrumbObject.component = select('.sb-bread-crumb-text>.category-text', rootEle);
    sb.vars.breadCrumbObject.categorySeparator = select('.category-seperator', rootEle);
    sb.vars.breadCrumbObject.subCategory = select('.sb-bread-crumb-text>.component', rootEle);
    sb.vars.breadCrumbObject.sample = select('.sb-bread-crumb-text>.crumb-sample', rootEle);

    sb.vars.content = select('#control-content', rootEle);
    sbHeader = <HTMLElement>select('#sample-header', rootEle);
    leftToggle = <HTMLElement>select('#sb-toggle-left', rootEle);
    sb.vars.sample = select('#sb-switcher-popup', rootEle);
    // searchEle = select('#search-popup', rootEle);
    copyRight = select('.sb-footer-copyright', rootEle);
    copyRight.innerHTML = "Copyright © 2001 - " + new Date().getFullYear() + " Syncfusion<sup>®</sup> Inc.";
    searchButton = select('#sb-trigger-search', rootEle);
    searchOverlay = select('.e-search-overlay', rootEle);
    inputele = select('#search-input', rootEle);
    sb.vars.switch = select('.sb-header-text-right', rootEle);
    sb.vars.setResponsiveElement = select('.setting-responsive', rootEle);
    sb.vars.leftBack = select('#sb-left-back', rootEle);
    sb.vars.headerThemeSwitch = select('#header-theme-switcher', rootEle);
    sb.vars.themePoppup = select('#theme-switcher-popup', rootEle);
    sb.vars.switcher = select('#sb-switcher', rootEle);
    sb.vars.sblink = select('#switch-sb', rootEle);
    resetSearch = select('.sb-reset-icon', rootEle);
    sb.vars.inputWrapper = select('#search-input-wrapper', rootEle);
    themeList = select('#themelist', rootEle);
    sb.vars.codesnippet = select('.ts-source-content', rootEle);
    sb.vars.setting = select('#settings-popup', rootEle);
    settingElement = <HTMLElement>select('.sb-setting-btn', rootEle);
    sbRightPane = <HTMLElement>select('.sb-right-pane', rootEle);
    headerSetting = <HTMLElement>select('.sb-header-settings', rootEle);
    sb.vars.mobilePreference = select('.sb-mobile-preference', rootEle);
    sbContentOverlay = <HTMLElement>select('.sb-content-overlay', rootEle);
    sbBodyOverlay = <HTMLElement>select('.sb-body-overlay', rootEle);
    sb.vars.contentTab = new Tab({ selected: changeTab, selecting: preventTabSwipe }, "#sb-content");
    sb.vars.source = select('.sb-content', rootEle);
    if (Browser.isIE) {
        window.addEventListener('hashchange', () => {
            var currentPath = window.location.hash.slice(1)
            if (route.path !== currentPath) {
                router.push(currentPath);
                window.hashString = location.hash;
                setSelectList();
            }
        }, false)
    }
    if (Browser.isDevice || isMobile) {
        if (sidebar) {
            sidebar.destroy();
        }
        sidebar = new Sidebar({ width: '280px', showBackdrop: true, closeOnDocumentClick: true, enableGestures: false });
        sidebar.appendTo('#left-sidebar');
    } else {
        sidebar = new Sidebar({
            width: '282px', target: <HTMLElement>document.querySelector('.sb-content '),
            showBackdrop: false,
            closeOnDocumentClick: false,
            enableGestures: false,
        });
        sidebar.appendTo('#left-sidebar');
    }
    loadJSON();
    const themeFromHash = location.hash.split("/")[1] || selectedTheme;
    selectedTheme = themeFromHash;
    loadTheme(selectedTheme, false); // full setup on initial load
    hasHandledInitialTheme = true; // prevent hashchange duplication
    router.afterEach(urlChange);
    updateDescription();
});

const preventTabSwipe = (e: any): void => {
    if (e.isSwiped) {
        e.cancel = true;
    }
};

const updateDescription = () => {
    let curUrl: string = location.hash;
    if (prev != curUrl) {
        select('.description-section', rootEle).innerHTML = '';
        if (select('#description')) {
            select('.description-section', rootEle)
                .appendChild(select('#description'));
        }
        select('.sb-action-description', rootEle).innerHTML = '';
        if (select('#action-description') !== null) {
            select('.sb-action-description', rootEle)
                .appendChild(select('#action-description'));
        }
        prev = curUrl;
    }
};

const breadCrumbUpdate = (controlName: string, category: string, sampleName: string) => {
    let ele: Element = rootEle.querySelector('#sample-bread-crumb') as Element;
    sb.vars.breadCrumbObject.component.innerHTML = controlName;
    if (category && controlName.toLowerCase() !== category.toLowerCase()) {
        sb.vars.breadCrumbObject.subCategory.innerHTML = category;
        sb.vars.breadCrumbObject.subCategory.style.display = '';
        sb.vars.breadCrumbObject.categorySeparator.style.display = '';
    } else {
        sb.vars.breadCrumbObject.subCategory.style.display = 'none';
        sb.vars.breadCrumbObject.categorySeparator.style.display = 'none';
    }
    sb.vars.breadCrumbObject.sample.innerHTML = sampleName;
    let title: HTMLElement = <HTMLElement>document.querySelector('title');

    if ((controlName || sampleName) == undefined) {
        title.innerHTML = 'Syncfusion Vue UI Components '
    }
    else
        title.innerHTML = controlName + ' · ' + sampleName + ' · Syncfusion Vue UI Components ';
};

const updateBreadCrumb = () => {
    (rootEle!.querySelector('#component-name .sb-sample-text') as HTMLElement).innerHTML = route!.meta!.eCompName! as string;
    (rootEle!.querySelector('#component-name .sb-sample-text') as HTMLElement).setAttribute('title', route!.meta!.eCompName! as string);
    breadCrumbUpdate(route!.meta!.eCompName! as string, route!.meta!.eCategoryName! as string, route!.meta!.eSampleName! as string);
    const plnkr = select('.sb-plnr-section') as HTMLElement;
    const toolbarSplitter = select('.sb-toolbar-splitter') as HTMLElement;
    const openNew = select('.sb-open-new-wrapper') as HTMLElement;
    const elements = [plnkr, toolbarSplitter, openNew];
    elements.forEach((element) => {
        if (element) {
            element.style.display = aiControlRegex.test(location.hash) ? 'none' : '';
        }
    });
};

const renderLeftPaneComponents = () => {
    samplesTreeList = getTreeviewList(samplesList);
    let sampleTreeView: TreeView = new TreeView(
        {
            fields: {
                dataSource: samplesTreeList, id: 'id', parentID: 'pid',
                text: 'name', hasChildren: 'hasChild', htmlAttributes: 'url'
            },
            nodeClicked: controlSelect,
            nodeTemplate: '<div><span class="tree-text">${name}</span>' +
                '</span>${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">Updated</span>' +
                '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">${type}</span>${/if}${/if}'
        },
        '#controlTree');
    let controlList: ListView = new ListView(
        {
            dataSource: controlSampleData[location.hash.split('/')[2]] || controlSampleData.grid,
            fields: { id: 'uid', text: 'name', groupBy: 'order', htmlAttributes: 'data' },
            select: controlSelect,
            template: '<div class="e-text-content ${if(type)}e-icon-wrapper${/if}"> <span class="e-list-text">${name}' +
                '</span>${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type}">Updated</span>' +
                '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type}">${type}</span>${/if}${/if}' +
                '${if(directory)}<div class="e-icons e-icon-collapsible"></div>${/if}</div>',
            groupTemplate: '${if(items[0]["category"])}<div class="e-text-content">' +
                '<span class="e-list-text">${items[0].category}</span>' +
                '</div>${/if}',
            actionComplete: setSelectList
        },
        '#controlList');
};

const getSampleList = (): Controls[] | { [key: string]: Object }[] => {
    if (Browser.isDevice) {
        let tempList: Controls[] = <Controls[]>extend([], samplesJSON.samplesList);
        let tempLists: any = [];
        for (let temp of tempList) {
            if (temp.hideOnDevice == true) {
                continue;
            }
            let data: DataManager = new DataManager((temp as any).samples);
            temp.samples = <Samples[]>data.executeLocal(new Query().where('hideOnDevice', 'notEqual', true));
            tempLists = tempLists.concat(temp);
        }
        return tempLists;
    }
    return samplesJSON.samplesList;
};

const getTreeviewList = (list: any[]): Controls[] | { [key: string]: Object }[] => {
    let id: number = 0;
    let pid: number = 0;
    let tempList: any[] = [];
    let category: string = '';
    for (let i: number = 0; i < list.length; i++) {
        if (!list[i].samples || list[i].samples.length === 0) continue;
        if (category !== list[i].category) {
            category = list[i].category;
            tempList = tempList.concat({ id: i + 1, name: list[i].category, hasChild: true, expanded: true });
            pid = i + 1;
            id = pid;
        }
        id += 1;
        tempList = tempList.concat(
            {
                id: id,
                pid: pid,
                name: list[i].label ? list[i].label : list[i].name,
                type: list[i].type,
                url: {
                    'data-path': '/' + list[i].directory + '/' + list[i].samples[0].url + '.html',
                    'control-name': list[i].directory,
                }
            });
        controlSampleData[list[i].directory] = getSamples(list[i].samples);
    }
    return tempList;
};

const getSamples = (samples: any): any => {
    let tempSamples: any = [];
    for (let i: number = 0; i < samples.length; i++) {
        tempSamples[i] = samples[i];
        tempSamples[i].data = { 'sample-name': samples[i].url, 'data-path': '/' + samples[i].dir + '/' + samples[i].url + '.html' };
    }
    return tempSamples;
};

const controlSelect = (arg: any): void => {
    sb.vars.contentTab.selectedItem = 0;
    let path: string = (arg.node || arg.item).getAttribute('data-path');
    let curHashCollection: string = '/' + location.hash.split('/').slice(2).join('/');
    if (path) {
        controlListRefresh(arg.node || arg.item);
        if (path !== curHashCollection) {
            sampleOverlay();
            let theme: string = location.hash.split('/')[1] || 'tailwind3';
            if (arg.item && ((isMobile) ||
                ((isTablet || (Browser.isDevice && isPc)) && isLeftPaneOpen()))) {
                toggleLeftPane();
            }
            window.hashString = '#/' + theme + path;
            setTimeout(() => { location.hash = '#/' + theme + path; }, 600);
        }
    }
};

const controlListRefresh = (ele: Element): void => {
    let controlName: string = <string>ele.getAttribute('control-name');
    let samples: any = controlSampleData[controlName];
    if (samples) {
        let listView: ListView = (select('#controlList', rootEle) as any).ej2_instances[0];
        listView.dataSource = samples;
        showHideControlTree();
    }
};

const showHideControlTree = (): void => {
    let controlTree: HTMLElement = select('#controlTree', rootEle) as HTMLElement;
    let controlList: HTMLElement = select('#controlSamples', rootEle) as HTMLElement;
    let reverse: boolean = (select('#controlTree', rootEle) as HTMLElement).style.display === 'none';
    reverse ? viewSwitch(controlList, controlTree, reverse) : viewSwitch(controlTree, controlList, reverse);
};

const viewSwitch = (from: HTMLElement, to: HTMLElement, reverse: boolean): void => {
    let anim: Animation = new Animation({ duration: 500, timingFunction: 'ease' });
    let controlTree: HTMLElement = select('#controlTree', rootEle) as HTMLElement;
    let controlList: Element = select('#controlList', rootEle);
    controlTree.style.overflowY = 'hidden';
    controlList.classList.remove('e-view');
    controlList.classList.remove('sb-control-list-top');
    controlList.classList.add('sb-adjust-juggle');
    to.style.display = '';
    anim.animate(from, {
        name: reverse ? 'SlideRightOut' : 'SlideLeftOut', end: (): void => {
            controlTree.style.overflowY = 'auto';
            from.style.display = 'none';
            controlList.classList.add('e-view');
            controlList.classList.add('sb-control-list-top');
            controlList.classList.remove('sb-adjust-juggle');
        }
    });
    anim.animate(to, { name: reverse ? 'SlideLeftIn' : 'SlideRightIn' });
};

const sampleOverlay = (): void => {
    document.body.setAttribute('aria-busy', 'true');
    sbHeader.classList.add('sb-right-pane-overlay');
    sbRightPane.classList.add('sb-right-pane-overlay');
    mobNavOverlay(true);
    sbContentOverlay.classList.remove('sb-hide');
};

const setSelectList = (): void => {
    const eles = document.querySelectorAll('#controlList .e-list-item.e-level-1');
    for (const ele of eles as any) {
        ele.tabIndex = 0;
    }
    let hString: string = window.hashString || location.hash;
    let hash: string[] = hString.split('/');
    let list: ListView = (select('#controlList', rootEle) as any).ej2_instances[0];
    let control: Element = select('[control-name="' + hash[2] + '"]');
    if (control) {
        let data: any = list.dataSource;
        let samples: any = controlSampleData[<string>control.getAttribute('control-name')];
        if (JSON.stringify(data) !== JSON.stringify(samples)) {
            list.dataSource = samples;
            list.dataBind();
        }
        let selectSample: Element = select('[sample-name="' + hash.slice(-1)[0].split('.html')[0] + '"]');
        if (selectSample) {
            if ((select('#controlTree', rootEle) as HTMLElement).style.display !== 'none') {
                showHideControlTree();
            }
            list.selectItem(selectSample);
            selectSample.scrollIntoView({ block: "nearest" });

        }
        let sampleTreeView: TreeView = (select('#controlTree', rootEle) as any).ej2_instances[0];
        sampleTreeView.selectedNodes = [control.getAttribute('data-uid') ?? ''];
    } else {
        showHideControlTree();
        list.selectItem(select('[sample-name="grid-overview"]'));
    }
};

const toggleLeftPane = (): void => {
    let reverse: boolean = sidebar.isOpen;
    select('#left-sidebar').classList.remove('sb-hide');
    if (!reverse) {
        leftToggle.classList.add('toggle-active');
    } else {
        leftToggle.classList.remove('toggle-active');
    }
    if (sidebar) {
        reverse = sidebar.isOpen;
        if (reverse) {
            sidebar.hide();
            if (!isMobile && !isTablet) {
                resizeManualTrigger = true;
                setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 1500);
            }
        } else {
            sidebar.show();
            resizeManualTrigger = true;
            setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 200);
        }
    }
};

const mobNavOverlay = (isOverlay: boolean): void => {
    if (Browser.isDevice) {
        let mobileFoorter: Element = select('.sb-mobilefooter', rootEle);
        if (isOverlay) {
            mobileFoorter.classList.add('sb-right-pane-overlay');
        } else {
            mobileFoorter.classList.remove('sb-right-pane-overlay');
        }
    }
};

const isLeftPaneOpen = (): boolean => {
    return sidebar.isOpen;
};

const closeRightSidebar = (args: EventArgs): void => {
    let targetEle: HTMLElement | null = args.event ? args.event.target as HTMLElement : null;
    if (targetEle && targetEle.closest('.e-popup')) args.cancel = true;
};

const rendersbPopup = (): void => {
    switcherPopup = new Popup(sb.vars.sample, {
        relateTo: sb.vars.switch, position: { X: 'left' },
        collision: { X: 'flip', Y: 'flip' },
        offsetX: 0,
        offsetY: -15,
        zIndex: 1001
    });
    switcherPopup.hide();
    themeSwitcherPopup = new Popup(sb.vars.themePoppup, {
        offsetY: 2,
        zIndex: 10012,
        relateTo: <HTMLElement>select('.theme-wrapper', rootEle), position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    themeSwitcherPopup.hide();
    searchPopup = new AutoComplete(
        {
            dataSource: [],
            filtering: (e: any) => {
                if (e.text && e.text.length < 3) {
                    return;
                }
                let val: any = searchInstance.search(e.text, {
                    fields: {
                        component: { boost: 1 },
                        name: { boost: 2 }
                    },
                    expand: true,
                    boolean: 'AND'
                });
                val.map((item: any) => item['doc'] = searchInstance.documentStore.docs[item.ref]);
                let value: any = [];
                if (Browser.isDevice) {
                    for (let file of val) {
                        if (file.doc.hideOnDevice !== true) {
                            value = value.concat(file);
                        }
                    }
                }
                let query: Query = new Query().take(10).select('doc');
                let fields: any = searchInstance.fields;
                let searchValue: any = Browser.isDevice ? value : val;
                e.updateData(searchValue, query, fields);

            },
            placeholder: 'Search here...',
            noRecordsTemplate: '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
            fields: { groupBy: 'doc.component', value: 'doc.uid', text: 'doc.name' },
            highlight: true,
            select: (e: any) => {
                let data: any = e.itemData.doc;
                let hashval: string = '#/' + location.hash.split('/')[1] + '/' + data.dir + '/' + data.url + '.html';
                searchPopup.hidePopup();
                searchOverlay.classList.add('e-search-hidden');
                if (location.hash !== hashval) {
                    sampleOverlay();
                    window.hashString = hashval;
                    setSelectList();
                }
            }
        }, inputele);
    searchPopup.hidePopup();
    settingPopup = new Popup(sb.vars.setting, {
        offsetX: 5,
        offsetY: 5,
        zIndex: 10012,
        relateTo: <any>settingElement,
        position: { X: 'right', Y: 'bottom' }
        , collision: { X: 'flip', Y: 'flip' }
    });
    settingSidebar = new Sidebar({ position: 'Right', zIndex: '1003', width: '282', closeOnDocumentClick: true, close: closeRightSidebar, showBackdrop: true, type: 'Over' });
    settingSidebar.appendTo('#right-sidebar');
    themeDropDown = new DropDownList({
        index: themeCollection.indexOf(selectedTheme.replace("-dark", "")),
        change: (e: any) => {
            if (!(select("#sb-icon-mobileDark") as HTMLElement).classList.contains("hide") && !e.value.includes("highcontrast")) {
                let currentTheme = e.value + "-dark";
                switchTheme(currentTheme);
            }
            else {
                switchTheme(e.value);
            }
        },
    });
    themeDropDown.appendTo('#sb-setting-theme');
    currencyDropDown = new DropDownList({
        index: 0,
        change: (e: any) => { setCurrencyCode(e.value); }
    });
    themeModeDropDown = new DropDownList({
        index: (selectedTheme.endsWith("-dark") ? 1 : 0),
        change: (e: any) => {
            let themeModeName = e.value;
            if (themeModeName === "dark" && !selectedTheme.endsWith("-dark")) {
                selectedTheme += "-dark";
            }
            else {
                selectedTheme = selectedTheme.replace("-dark", "");
            }
            skipReload = true;
            switchTheme(selectedTheme);
        },
    });
    themeModeDropDown.appendTo("#sb-setting-themeMode");
    cultureDropDown = new DropDownList({
        index: 0,
        change: (e: any) => {
            let value: string = e.value;
            if (value === 'ar') {
                changeRtl(true);
            } else {
                changeRtl(false);
            }
            currencyDropDown.value = matchedCurrency[value];
            setCulture(e.value);
        }
    });
    cultureDropDown.appendTo('#sb-setting-culture');
    currencyDropDown.appendTo('#sb-setting-currency');
    sb.vars.sourceTab = new Tab({
        items: [],
        cssClass: 'sb-source-code-section',
        headerPlacement: 'Bottom',
        selected: dynamicTab,
        selecting: preventTabSwipe,
    }, "#sb-source-tab")
    let tabHeader: HTMLElement = <HTMLElement>document.getElementById('sb-content-header');
    tabHeader.appendChild(tabContentToolbar);
    let previous: Tooltip = new Tooltip({
        content: 'Previous Sample'
    });
    previous.appendTo('#prev-sample');
    let openNew: Tooltip = new Tooltip({
        content: 'Open in New Window'
    });
    openNew.appendTo('#openNew');
    let next: Tooltip = new Tooltip({
        content: 'Next Sample'
    });
    select('#right-pane').addEventListener('scroll', function (event: any) {
        next.close();
        previous.close();
    });

    next.appendTo('#next-sample');
    if (!isMobile) {
        settingPopup.hide();
        settingSidebar.hide();
    } else {
        sb.vars.mobilePreference.appendChild(sb.vars.setting);
    }
    let prevbutton: Button = new Button({ iconCss: 'sb-icons sb-icon-Previous', cssClass: 'e-flat' }, '#mobile-prev-sample');
    let nextbutton: Button = new Button(
        {
            iconCss: 'sb-icons sb-icon-Next',
            cssClass: 'e-flat', iconPosition: 'Right'
        },
        '#mobile-next-sample');
};

const changeTab = (args: any): void => {
    if (args.selectedIndex === 1) {
        sb.vars.sourceTab.items = sourceTabItems;
        sb.vars.sourceTab.refresh();
        rendercopycode();
        dynamicTabCreation(sb.vars.sourceTab);
    }
    if (args.selectedItem && args.selectedItem.innerText === 'DEMO') {
        let demoSection = document.getElementsByClassName('sb-demo-section')[0];
        if (demoSection) {
            let elementList = demoSection.getElementsByClassName('e-control e-lib');
            for (let i = 0; i < elementList.length; i++) {
                let instance = (elementList[i] as any).ej2_instances;
                if (instance && instance[0] && typeof instance[0].refresh === 'function' && ['aiassistview', 'chat-ui'].indexOf(instance[0].getModuleName()) === -1) {
                    instance[0].refresh();
                }
                if (instance && instance[0] && instance[0].getModuleName() !== 'DashboardLayout')
                    break;
            }
        }
    }
};

const rendercopycode = (): void => {
    let ele: HTMLElement = createElement('div', { className: 'copy-tooltip', innerHTML: '<div class="e-icons copycode"></div>' });
    (rootEle.querySelector('#sb-source-tab') as HTMLElement).appendChild(ele);
    let copiedTooltip: Tooltip = new Tooltip({
        content: 'Copied to clipboard ',
        position: 'BottomCenter',
        opensOn: 'Click',
        closeDelay: 500
    });
    copiedTooltip.appendTo(ele);
    select('.copycode').addEventListener('click', copyCode);
};

const dynamicTab = (e: any): void => {
    let blockEle: HTMLElement = <HTMLElement>document.querySelector('#sb-source-tab > .e-content > #e-content-sb-source-tab_' + e.selectedIndex);
    let codeEle: any = blockEle.children[0];
    codeEle.innerHTML = sb.vars.sourceTab.items[e.selectedIndex].data;
    codeEle.innerHTML = codeEle.innerHTML.replace(reg, '');
    codeEle.classList.add('sb-src-code');
    highlightCode(codeEle, sb.vars.sourceTab.items[e.selectedIndex].properties.content.split('.')[1]);
};

const dynamicTabCreation = (obj: any): void => {
    let blockEle: Element = obj.element.querySelector('#e-content' + obj.tabId + '_' + obj.selectedItem).children[0];
    blockEle.innerHTML = obj.items[obj.selectedItem].data;
    blockEle.innerHTML = blockEle.innerHTML.replace(reg, '');
    blockEle.classList.add('sb-src-code');
    highlightCode(blockEle, obj.items[obj.selectedItem].properties.content.split('.')[1]);
};

const highlightCode = (codeEle: Element, fileType: string): void => {
    codeEle.classList.add("sb-src-code");
    const types: { [key: string]: string } = {
        'ts': 'text/typescript',
        'vue': 'text/html',
        'css': 'text/css',
        'json': 'application/json'
    }
    const parentEle: ParentNode = codeEle.parentNode!;
    if (!parentEle.querySelector('.sb-src-code-area')) {
        const textELe: HTMLTextAreaElement = document.createElement('textarea');
        textELe.classList.add("sb-src-code-area");
        textELe.innerHTML = codeEle.innerHTML;
        parentEle.replaceChild(textELe, codeEle);
        CodeMirror.fromTextArea(document.querySelector(`#${(parentEle as HTMLElement).id} .sb-src-code-area`)!, {
            mode: `${types[fileType]}`,
            readOnly: true,
            theme: `${selectedTheme.includes('-dark') || selectedTheme.includes('highcontrast') ? 'mbo' : 'default'}`
        });
    }
};

const eventBinding = (): void => {
    let fn: Function = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        headerAction('changeSampleBrowser');
    }
    sb.vars.switcher.addEventListener('click', fn)
    sb.vars.switch.addEventListener('click', fn)
    sb.vars.headerThemeSwitch.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        headerAction('changeTheme');

    });
    document.addEventListener('click', (headerAction.bind(this, 'closePopup') as any));
    searchButton.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSearchOverlay();
    });
    settingElement.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        headerAction('toggleSettings');
    });
    sb.vars.setting.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('keyup', onsearchInputChange);
    themeList.addEventListener('click', changeTheme);
    sb.vars.setResponsiveElement.addEventListener('click', setMouseOrTouch);
    sb.vars.sblink.addEventListener('click', (e: MouseEvent) => {
        let target: Element = closest(<any>e.target, 'li');
        if (target) {
            let anchor: any = target.querySelector('a');
            if (anchor) {
                anchor.click();
            }
        }
    })

    function onsearchInputChange(e) {
        if (e.key === 'Escape' || e.key === 'Enter') {
            toggleSearchOverlay();
        }
    }
    
    window.addEventListener('resize', processResize);
    sbRightPane.addEventListener('click', () => {
        if (isMobile && isLeftPaneOpen()) {
            toggleLeftPane();
        }
    });
    sb.vars.leftBack.addEventListener('click', showHideControlTree);
    leftToggle.addEventListener('click', toggleLeftPane);
    headerSetting.addEventListener('click', viewMobilePrefPane);
    select('.sb-mobile-setting').addEventListener('click', viewMobilePropPane);
    select('#open-plnkr').addEventListener('click', () => {
        let stackForm: HTMLFormElement = select('#stack-form') as HTMLFormElement;
        if (stackForm) {
            stackForm.submit();
        }
    });
    select('#next-sample').addEventListener('click', onNextButtonClick);

    select('#prev-sample').addEventListener('click', onPrevButtonClick);
    select('#mobile-next-sample').addEventListener('click', onNextButtonClick);
    select('#openNew').addEventListener('click', onOpenNewButtonClick);
    select('#mobile-prev-sample').addEventListener('click', onPrevButtonClick);
    select("#themeMode-switch-btn").addEventListener("click", onSwitchMode);
};
const onSwitchMode = (arg: any): void => {
    selectedTheme = selectedTheme.endsWith("-dark") ? selectedTheme.replace("-dark", "") : selectedTheme + "-dark";
    localStorage.setItem("selectedTheme", selectedTheme);
    skipReload = true; // signal that we're toggling mode, not switching base theme
    switchTheme(selectedTheme);
};
const changeRtl = (args: any): void => {
    let elementlist: HTMLElement[] = selectAll('.e-control', (rootEle.querySelector('#control-content') as HTMLElement));

    for (let control of elementlist) {
        let eleinstance: Object[] = ((<DestroyMethod>control).ej2_instances) ;
        if (control.classList.contains('e-richtexteditor')) {
            eleinstance = (<DestroyMethod>control).getElementsByTagName("textArea")[0].ej2_instances;
        }
        if (eleinstance) {
            for (let instance of eleinstance) {
                (<DestroyMethod>instance).enableRtl = args;
            }
        }
    }
};

const headerAction = (action: string, preventSearch?: boolean): void => {
    if (openedPopup) {
        openedPopup.hide(new Animation({ name: 'FadeOut', duration: 80, delay: 0 }));
    }
    let curPopup: any;
    switch (action) {
        case 'changeSampleBrowser':
            curPopup = switcherPopup;
            break;
        case 'changeTheme':
            sb.vars.headerThemeSwitch.classList.toggle('active');
            setPressedAttribute(sb.vars.headerThemeSwitch);
            curPopup = themeSwitcherPopup;
            break;
        case 'toggleSettings':
            settingElement.classList.toggle('active');
            setPressedAttribute(settingElement);
            themeDropDown.index = themeCollection.indexOf(selectedTheme);
            curPopup = settingPopup;
            break;
    }

    if (action === 'closePopup') {
        sb.vars.headerThemeSwitch.classList.remove('active');
        sb.vars.switcher.classList.remove('active');
        settingElement.classList.remove('active');
        setPressedAttribute(sb.vars.headerThemeSwitch);
        setPressedAttribute(settingElement);
    }

    if (preventSearch !== true && !searchOverlay.classList.contains('sb-hide')) {
        searchOverlay.classList.add('sb-hide');
        searchButton.classList.remove('active');
        setPressedAttribute(<HTMLElement>searchButton);
    }

    if (curPopup && (curPopup !== openedPopup)) {
        curPopup.show(new Animation({ name: 'FadeIn', duration: 400, delay: 0 }));

        openedPopup = curPopup;
    }
    else {
        openedPopup = null;
    }
    prevAction = action;
};

const setPressedAttribute = (ele: HTMLElement): void => {
    let status: boolean = ele.classList.contains('active');
    ele.setAttribute('aria-pressed', status ? 'true' : 'false');
};

const toggleSearchOverlay = (): void => {
    headerAction('closePopup', true);
    inputele.value = '';
    searchPopup.hidePopup();
    searchButton.classList.toggle('active');
    setPressedAttribute(<HTMLElement>searchButton);
    searchOverlay.classList.toggle('sb-hide');
    if (!searchOverlay.classList.contains('sb-hide')) {
        inputele.focus();
    }
};

const highlight = (searchString: string, listElement: any): void => {
    let regex: RegExp = new RegExp(searchString.split(' ').join('|'), 'gi');
    let contentElements: any[] = selectAll('.e-list-item .e-text-content .e-list-text', listElement);
    for (let i: number = 0; i < contentElements.length; i++) {
        let spanText: any = select('.sb-highlight');
        if (spanText) {
            contentElements[i].innerHTML = contentElements[i].text;
        }
        contentElements[i].innerHTML = contentElements[i].innerHTML.replace(regex, (matched: string) => {
            return '<span class="sb-highlight">' + matched + '</span>';
        });
    }
};

const SbLink = (): void => {
    let href: any = location.href;
    let link: string[] = href.match(urlRegex);
    let sample: string = href.match(sampleRegex)[1];
    for (let sb of sbArray) {
        let ele: HTMLFormElement = <HTMLFormElement>select('#' + sb);
        if (sb === 'aspnetcore' || sb === 'aspnetmvc') {
            ele.href = sb === 'aspnetcore' ? 'https://ej2.syncfusion.com/aspnetcore/' : 'https://ej2.syncfusion.com/aspnetmvc/';
        } else if (sb === 'nextjs') {
            const defaultSamplePath = location.href.includes('grid/grid-overview') ? sample.split('/')[0] + '/grid/overview' : sample;
            ele.href = 'https://ej2.syncfusion.com/nextjs/demos/' + defaultSamplePath;
        } 
        else if (sb === 'blazor') {
            ele.href = 'https://blazor.syncfusion.com/demos/';
        }
        else if (sb === 'react' && location.href.includes('grid/grid-overview.html')) {
             ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) : ('https://ej2.syncfusion.com/')) + 'react/demos/#/' + selectedTheme + '/grid/overview';
        } 
        else {
            ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) : ('https://ej2.syncfusion.com/')) +
                (sb === 'typescript' ? '' : (sb + '/')) + 'demos/#/' + sample + (sb === ('javascript' || 'typescript') ? '.html' : ''); 
        }
    }
};

const changeTheme = (e: MouseEvent): void => {
    let target: Element = <HTMLElement>e.target;
    target = closest(target, 'li');
    let themeName: string = target.id;
    if ((select("#sb-icon-text") as HTMLElement).textContent === "LIGHT" && !['highcontrast', 'fluent2-highcontrast'].includes(themeName)) {
        themeName += "-dark";
    }
    skipReload = false; // Force full reload for dropdown
    isReloadingTheme = true;     // flag reload to skip hashchange theme apply
    switchTheme(themeName);
    let imageEditorElem = document.querySelector(".e-image-editor") as HTMLElement;
    if (imageEditorElem != null) {
        let imageEditor = getComponent(document.getElementById(imageEditorElem.id) as HTMLElement, 'image-editor') as ImageEditor;
        (imageEditor as ImageEditor).theme = themeName;
    }
};

const switchTheme = (themeName: string): void => {
    themeName = themeName.includes("_") ? themeName.replace("_", ".") : themeName;
    const hashParts = location.hash.split("/");
    hashParts[1] = themeName;
    location.hash = hashParts.join("/");
    if (skipReload) {
        loadTheme(themeName, true); // soft switch for toggle
        skipReload = false; // Reset the flag after soft switch
    } else {
        localStorage.setItem("selectedTheme", themeName); // ensures theme survives reload
        location.reload(); // hard reload for dropdown
    }
};

const setThemeModesButton = (): void => {
    let themeModeText = select("#sb-icon-text") as HTMLElement;
    let darkThemeIcon = select("#icon-dark") as HTMLElement;
    let lightThemeIcon = select("#icon-light") as HTMLElement;
    let mobileLightThemeIcon = select("#sb-icon-mobileLight") as HTMLElement;
    let mobileDarkThemeIcon = select("#sb-icon-mobileDark") as HTMLElement;
    if (selectedTheme.endsWith("-dark")) {
        darkThemeIcon.classList.add("hide");
        lightThemeIcon.classList.remove("hide");
        themeModeText.textContent = "LIGHT";
        mobileLightThemeIcon.classList.add("hide");
        mobileDarkThemeIcon.classList.remove("hide");
    } else {
        darkThemeIcon.classList.remove("hide");
        lightThemeIcon.classList.add("hide");
        themeModeText.textContent = "DARK";
        mobileLightThemeIcon.classList.remove("hide");
        mobileDarkThemeIcon.classList.add("hide");
    }
};
const loadTheme = (theme: string, softSwitch = false): void => {
  selectedTheme = theme;
  theme = themesToRedirect.includes(theme) ? "tailwind3" : theme;
  // Theme class resolution
  const resolvedClass = theme.includes("bootstrap5")
    ? theme.replace("bootstrap5", "bootstrap5_3")
    : theme;
  const themeFile = theme.includes("bootstrap5")
    ? theme.replace("bootstrap5", "bootstrap5.3")
    : theme;
  const body = document.body;
  const themePrefixes = ["tailwind3", "fluent2", "bootstrap5_3", "material3", "highcontrast"];
  // Remove previous theme classes
  body.className = body.className
    .split(" ")
    .filter(cls => !themePrefixes.some(prefix =>
      cls.startsWith(prefix) || cls.startsWith(prefix + "-dark")))
    .join(" ");
  body.classList.add(resolvedClass);
  // Update dynamic theme stylesheet
  const cssLink = document.getElementById("dynamic-theme") as HTMLLinkElement;
  if (cssLink) {
    cssLink.href = `./styles/${themeFile}.css`;
  }
  // Highlight selected theme in UI
  themeList?.querySelector(".active")?.classList.remove("active");
  const normalized = theme.endsWith("-dark") ? theme.replace("-dark", "") : theme;
  themeList?.querySelector(`#${normalized}`)?.classList.add("active");
  // Handle unsupported toggle modes
  const unsupported = ["highcontrast", "fluent2-highcontrast"];
  const toggleBtn = select("#themeMode-switch-btn");
  const modeSection = select(".sb-setting-themeModes-section");
  if (unsupported.includes(selectedTheme)) {
    toggleBtn?.classList.add("hide");
    modeSection?.classList.add("hide");
  } else {
    toggleBtn?.classList.remove("hide");
    modeSection?.classList.remove("hide");
  }
  // Ripple effect and toggle button visuals
  enableRipple(selectedTheme.indexOf("material") !== -1 || !selectedTheme);
  setThemeModesButton();
  // Re-bind UI components only on full load
  if (!softSwitch) {
    renderLeftPaneComponents();       // Sidebar and left pane
    rendersbPopup();                  // Settings and popups
    eventBinding();                   // Interaction and event listeners
    refreshDynamicContent(); // Update content and search
  }else {
    // Soft switch: only update theme and refresh samples
    refreshDynamicContent();
    refreshSamples();
  } 
  // UI layout cleanup
  setTimeout(() => {
    select(".sb-loading-overlay")?.classList.add("hide");
    window.dispatchEvent(new Event("resize"));
  }, 500);
};

// data visualization components
const doControls: string[] = [
  "chart", "three-dimension-chart", "circular-3d-chart", "stock-chart", "arc-gauge", "circular-gauge",
  "diagram", "heatmap", "linear-gauge", "maps", "range-navigator", "smith-chart",
  "barcode", "sparkline", "treemap", "bullet-chart","kanban"
];

// components rerendering for every dark/light toggle
const refreshSamples = () => {
  const currentControl = location.hash.split('/')[2];
  if (doControls.includes(currentControl)) {
    const demo = document.querySelector('.sb-demo-section');
    if (demo) {
      const controls = demo.getElementsByClassName('e-control e-lib');
      for (let i = 0; i < controls.length; i++) {
        const instance = (controls[i] as any).ej2_instances;
        if (instance?.[0]?.refresh instanceof Function) {
          instance[0].refresh();
        }
      }
    }
  }
};

const refreshDynamicContent = () => {
  updateBreadCrumb();
  sampleArray();
  updatesourceTab();
  searchInstance = (elasticlunr as any).Index.load(searchJson);
  (elasticlunr as any).clearStopWords();
};

window.addEventListener("hashchange", () => {
  if (isReloadingTheme || !hasHandledInitialTheme) return;

  const hashTheme = location.hash.split("/")[1];
  if (hashTheme && hashTheme !== selectedTheme) {
    selectedTheme = hashTheme;
    localStorage.setItem("selectedTheme", selectedTheme);
    loadTheme(selectedTheme, true); // soft switch
  }
});

const setMouseOrTouch = (e: MouseEvent): void => {
    let ele: HTMLElement = <any>closest(<any>e.target, '.sb-responsive-items');
    let switchType: string = ele.id;
    changeMouseOrTouch(switchType);
    headerAction('closePopup');
    localStorage.setItem('ej2-switch', switchType);
    location.reload();
};

const changeMouseOrTouch = (str: string): void => {
    let activeEle: Element = sb.vars.setResponsiveElement.querySelector('.active');
    if (activeEle) {
        activeEle.classList.remove('active');
    }
    if (str === 'mouse') {
        document.body.classList.remove('e-bigger');
    } else {
        document.body.classList.add('e-bigger');
    }
    sb.vars.setResponsiveElement.querySelector('#' + str).classList.add('active');
};

const viewMobilePrefPane = (): void => {
    select('.sb-mobile-prop-pane').classList.add('sb-hide');
    sb.vars.mobilePreference.classList.remove('sb-hide');
    toggleRightPane();
};

const viewMobilePropPane = (): void => {
    sb.vars.mobilePreference.classList.add('sb-hide');
    select('.sb-mobile-prop-pane').classList.remove('sb-hide');
    toggleRightPane();
};

const toggleRightPane = (): void => {
    select('#right-sidebar').classList.remove('sb-hide');
    themeDropDown.index = themeCollection.indexOf(selectedTheme);
    if (isMobile) {
        settingSidebar.toggle();
    }
};

const resetInput = (arg: any): void => {
    arg.preventDefault();
    arg.stopPropagation();
    (<HTMLInputElement>document.getElementById('search-input')).value = '';
    sb.vars.inputWrapper.setAttribute('data-value', '');
    searchPopup.hidePopup();
};

const stackEditor = (results?: any) => {
    let stackFile: any = results;
    let prevForm: Element = select('#stack-form');
    if (prevForm) {
        detach(prevForm);
    }
    let form: HTMLFormElement = createElement('form') as HTMLFormElement;
    let res: string = 'https://stackblitz.com/run';
    form.setAttribute('action', res);
    form.setAttribute('method', 'post');
    form.setAttribute('target', '_blank');
    form.id = 'stack-form';
    form.style.display = 'none';
    document.body.appendChild(form);
    let stacks: string[] = Object.keys(stackFile);
    for (let x: number = 0; x < stacks.length; x++) {
        createStackInput((stacks[x] === 'dependencies' ? 'project[dependencies]' : 'project[files][' + stacks[x] + ']'),
            stackFile[stacks[x]] as string, form);
    }
    createStackInput('project[template]', 'vue', form);
    createStackInput('project[tag][0]', 'vue', form);
    createStackInput('project[description]', 'Essential JS 2 Sample', form);
    createStackInput('project[settings]', '{"compile":{"clearConsole":true}}', form);
}

const createStackInput = (name: string, value: string, form: HTMLFormElement) => {
    let input: HTMLElement = createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('value', value.replace(/{{theme}}/g, selectedTheme).replace(/{{ripple}}/,
        (selectedTheme === 'material') ? 'import { enableRipple } from \'@syncfusion/ej2-base\';\nenableRipple(true);\n' : ''));
    input.setAttribute('name', name);
    form.appendChild(input);
}

const updateStackBlitz = () => {
    let hash: string[] = location.hash.split('/').slice(1);
    let path: string = hash.slice(1).join('/').replace('.html', '');
    if (!(aiControlRegex).test(path)) {
        let fileName: string = 'src/' + path + '-stack.json';
        let stack: Fetch = new Fetch(fileName, 'GET');
        stack.send().then((result: Object) => {
            if (select('#open-plnkr') as any) {
                (select('#open-plnkr') as any).disabled = false;
            }
            stackEditor(result as any);
        });
    }
}

const onNextButtonClick = (arg: any): void => {
    sb.vars.contentTab.selectedItem = 0;
    sampleOverlay();
    let curSampleUrl: string = location.hash;
    let inx: number = samplesAr.indexOf(curSampleUrl);
    if (inx !== -1) {
        let prevhref: string = samplesAr[inx];
        let curhref: string = samplesAr[inx + 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
};

const onPrevButtonClick = (arg: any): void => {
    sampleOverlay();
    let curSampleUrl: string = location.hash;
    let inx: number = samplesAr.indexOf(curSampleUrl);
    if (inx !== -1) {
        let prevhref: string = samplesAr[inx];
        let curhref: string = samplesAr[inx - 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
};

const onOpenNewButtonClick = (arg: any): void => {
    let samplePath = location.href.split('#')[1].split('/');
    (select('#openNew') as HTMLFormElement).href =
        location.href.split('#')[0] + samplePath[2] + '/' + samplePath[3].replace('.html', '/');
};

const setLeftPaneHeight = (): void => {
    let leftPane: HTMLElement = select('.sb-left-pane', rootEle) as HTMLElement;
    leftPane.style.height = isMobile ? (document.body.offsetHeight + 'px') : '';
};

const processResize = (e: any): void => {
    let toggle: boolean = sidebar.isOpen;
    isMobile = window.matchMedia('(max-width:550px)').matches;
    isTablet = window.matchMedia('(min-width:550px) and (max-width: 850px)').matches;
    isPc = window.matchMedia('(min-width:850px)').matches;
    if (isTablet) {
        resizeManualTrigger = false;
    }
    if (resizeManualTrigger || (isMobile && select('#right-sidebar').classList.contains('sb-hide'))) {
        return;
    }
    setLeftPaneHeight();
    let leftPane: Element = select('.sb-left-pane');
    let rightPane: Element = select('.sb-right-pane');
    let footer: Element = select('.sb-footer-left');
    let pref: any = select('#settings-popup');
    if (toggle && !isPc && !isTablet) {
        toggleLeftPane();
    }
    if (isMobile) {
        sidebar.closeOnDocumentClick = true;
        select('.sb-left-footer-links').appendChild(footer);
        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }
        if (!pref.parentElement.classList.contains('sb-mobile-preference')) {
            sb.vars.mobilePreference.appendChild(pref);
            settingPopup.show();
        }
        let propPanel: Element = select('#control-content .property-section');
        if (propPanel) {
            select('.sb-mobile-prop-pane').appendChild(propPanel);
            select('.sb-mobile-setting').classList.remove('sb-hide');
        }
        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }
    }
    if (isPc || isTablet) {
        if (isTablet) {
            select('.sb-footer').appendChild(footer);
        }
        sidebar.target = sb.vars.source;
        sidebar.showBackdrop = false;
        sidebar.closeOnDocumentClick = false;


        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }
        if (isPc && !Browser.isDevice && isVisible('.sb-left-pane')) {
            rightPane.classList.remove('control-fullview');
        }
        if (pref.parentElement.classList.contains('sb-mobile-preference')) {
            select('#sb-popup-section').appendChild(pref);
            settingSidebar.hide();
            settingPopup.hide();
        }
        let mobilePropPane: Element = select('.sb-mobile-prop-pane .property-section');
        if (mobilePropPane) {
            select('.sb-mobile-setting').classList.add('sb-hide');
            select('#right-sidebar').classList.add('sb-hide');
            select('#control-content', rootEle).appendChild(mobilePropPane);
        }
        if (!select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
            toggleRightPane();
        }
    }
    if (switcherPopup) {
        switcherPopup.refreshPosition();
    }
};

const processDeviceDependables = (): void => {
    if (Browser.isDevice) {
        select('.sb-desktop-setting').classList.add('sb-hide');
    } else {
        select('.sb-desktop-setting').classList.remove('sb-hide');
    }
};

const overlay = (): void => {
    sbHeader.classList.add('sb-right-pane-overlay');
    sbBodyOverlay.classList.remove('sb-hide');
};

const isVisible = (elem: string): boolean => {
    return !select(elem).classList.contains('sb-hide');
};

const removeMobileOverlay = (): void => {
    select('.sb-mobile-overlay').classList.add('sb-hide');
};

const renderPropertyPane = (ele: string): void => {
    let controlSection: Element = <HTMLElement>document.getElementById('control-content');
    let elem: Element = <HTMLElement>controlSection.querySelector(ele);
    let title: any;
    if (!elem) { return; }
    let parentEle: HTMLElement = <HTMLElement>elem.parentElement;
    elem = detach(elem);
    title = elem.getAttribute('title');
    elem.classList.add('property-panel-table');
    let parentPane: Element = createElement('div', {
        className: 'property-panel-section',
        innerHTML: `<div class="property-panel-header">${title}</div><div class="property-panel-content"></div>`
    });
    parentPane.children[1].appendChild(elem);
    parentEle.appendChild(parentPane);
};

const setPropertySectionHeight = (): void => {
    let propertypane: HTMLElement = <any>select('.property-section');
    let ele: HTMLElement = <any>document.querySelector('.control-section');

    if (ele && propertypane) {
        ele.classList.add('sb-property-border');
    } else {
        ele.classList.remove('sb-property-border');
    }
};

const toggleButtonState = (id: string, state: boolean): void => {
    let ele: HTMLButtonElement = <HTMLButtonElement>document.getElementById(id);
    let mobileEle: HTMLButtonElement = <HTMLButtonElement>document.getElementById('mobile-' + id);
    ele.disabled = state;
    mobileEle.disabled = state;
    if (state) {
        mobileEle.classList.add('e-disabled');
        ele.classList.add('e-disabled');
    } else {
        mobileEle.classList.remove('e-disabled');
        ele.classList.remove('e-disabled');
    }
};

const copyCode = (): void => {
    let copyElem: HTMLElement = select('#sb-source-tab .e-item.e-active') as HTMLElement;
    let copiedTextArea: HTMLTextAreaElement = copyElem.querySelector('textarea') as HTMLTextAreaElement;
    let textArea: HTMLTextAreaElement = createElement('textArea') as HTMLTextAreaElement;
    textArea.textContent = copiedTextArea.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    detach(textArea);
    (select('.copy-tooltip') as any).ej2_instances[0].close();
};

const sampleArray = (): void => {
    for (let node of <Controls[]>samplesList) {
        let dataManager: DataManager = new DataManager((node as any).samples);
        let samples: Samples[] & { [key: string]: Object }[] = <Samples[] & { [key: string]: Object }[]>
            dataManager.executeLocal(new Query().sortBy('order', 'ascending'));
        for (let sample of samples) {
            let selectedTheme: string = location.hash.split('/')[1] ? location.hash.split('/')[1] : 'tailwind3';
            let control: string = node.directory;
            let sampleUrl: string = sample.url;
            let loc: string = '/' + selectedTheme + '/' + control + '/' + sampleUrl + '.html';
            samplesAr.push('#' + loc);
        }
    }
};

const getStringWithOutDescription = (code: string, descRegex: RegExp): string => {
    let lines: string[] = code.split('\n');
    let desStartLine: any = null;
    let desEndLine: any = null;
    let desInsideDivCnt: number = 0;
    for (let i: number = 0; i < lines.length; i++) {
        let curLine: string = lines[i];
        if (desStartLine) {
            if (/<div/g.test(curLine)) {
                desInsideDivCnt = desInsideDivCnt + 1;
            }
            if (desInsideDivCnt && /<\/div>/g.test(curLine)) {
                desInsideDivCnt = desInsideDivCnt - 1;
            } else if (!desEndLine && /<\/div>/g.test(curLine)) {
                desEndLine = i + 1;
            }
        }
        if (descRegex.test(curLine)) {
            desStartLine = i;
        }
    }
    if (desEndLine && desStartLine) {
        lines.splice(desStartLine, desEndLine - desStartLine);
    }
    return lines.join('\n');
};

const sourceFileList = (node: any): void => {
    for (let samples of node.curViewDS) {
        if (samples.url == location.hash.split('/')[3].replace('.html', '')) {
            return samples.sourceFiles;
        }
    }
};

const generatepath = (path: any): void => {
    let splitPath: string = path.split('/')[1];
    let filePath: any = [{ path: `src/${path}.vue`, displayName: `${splitPath}.vue` }]
    return filePath;
};

const updatesourceTab = (): void => {
    let curDir: any = location.hash.split('/').slice(2).join('/').replace('.html', '');
    let curSample: any = location.hash.split('/')[3].replace('.html', '');
    let sourcePromise: Array<Promise<Ajax>> = [];
    let ajaxvue: any = new Ajax('src/' + curDir + '.vue', 'GET', false);
    let sObj: any = [];
    SbLink();
    sb.vars.contentTab.selectedItem = 0;
    sb.vars.sourceTab.selectedItem = 0;
    let sampleListFile: ListView = (select('#controlList', rootEle) as any).ej2_instances[0];
    let sourceFiles: any = sourceFileList(sampleListFile) as any || generatepath(curDir);
    if (sourceFiles) {
        for (let i: number = 0; i < sourceFiles.length; i++) {
            sourcePromise.push((new Ajax(sourceFiles[i].path, 'GET', false)).send());
            sObj.push({
                header: { text: sourceFiles[i].displayName },
                data: '',
                content: sourceFiles[i].displayName
            });
            updateStackBlitz();
        }
    }
    Promise.all(sourcePromise).then((results: Object[]): void => {
        results.forEach((value, index) => {
            let sampleContent: string = value.toString();
            sampleContent = getStringWithOutDescription(sampleContent, /(\'|\")description/g);
            sampleContent = getStringWithOutDescription(sampleContent, /(\'|\")action-description/g)
            sampleContent = sampleContent.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
            sObj[index].data = sampleContent;
        })
        sourceTabItems = sObj;
    })

    ajaxvue.send().then((value: Object): void => {
        let controlSec: Element = <HTMLElement>document.getElementById('control-content');
        let comp: Element = <HTMLElement>controlSec.querySelector('.property-panel-section');
        if (comp) {
            document.querySelectorAll('#control-content .property-section')[1].classList.add('sb-hide')
        }
        renderPropertyPane('#property');
        select('.sb-mobile-prop-pane', rootEle).innerHTML = '';
        setPropertySectionHeight();
        removeOverlay();
        let propPanel: Element = select('#control-content .property-section');
        if (isMobile) {
            if (propPanel) {
                select('#right-sidebar').style.display = 'none';
                viewMobilePropPane();
                settingSidebar.toggle();
                select('#right-sidebar').style.display = '';
                select('.sb-mobile-setting').classList.remove('sb-hide');
                select('.sb-mobile-prop-pane').appendChild(propPanel);
            } else {
                select('.sb-mobile-setting').classList.add('sb-hide');
            }
        }
        if (Browser.isDevice) {
            if (location.hash && samplesAr.indexOf(location.hash) == -1) {
                let toastObj: Toast = new Toast({
                    position: {
                        X: 'Right'
                    }
                });
                let hideLocation: string = location.hash.split('/')[2];
                toastObj.appendTo('#sb-home');
                setTimeout(
                    () => {
                        toastObj.show({
                            content: `${hideLocation} component not supported in mobile device`
                        });
                    }, 200);
                window.location.hash = "#/tailwind3/grid/grid-overview.html"
            }
        }
        let curIndex: number = samplesAr.indexOf(location.hash);
        let samLength: number = samplesAr.length - 1;
        if (curIndex === samLength) {
            toggleButtonState('next-sample', true);
        } else {
            toggleButtonState('next-sample', false);
        }
        if (curIndex === 0) {
            toggleButtonState('prev-sample', true);
        } else {
            toggleButtonState('prev-sample', false);
        }
    })
        .catch((reason: any): void => {
            //errorHandler(reason.message);
        });
};

const destroyControls = (): void => {
    let elementlist: HTMLElement[] = selectAll('.e-control', sb.vars.content);
    for (let control of elementlist) {
        let eleinstance: Object[] = (<DestroyMethod>control).ej2_instances;
        if (eleinstance) {
            for (let instance of eleinstance) {
                (<DestroyMethod>instance).destroy();
            }
        }
    }
};

const removeOverlay = (): void => {
    document.body.setAttribute('aria-busy', 'false');
    sbContentOverlay.classList.add('sb-hide');
    sbRightPane.classList.remove('sb-right-pane-overlay');
    sbHeader.classList.remove('sb-right-pane-overlay');
    mobNavOverlay(false);
    if (!sbBodyOverlay.classList.contains('sb-hide')) {
        sbBodyOverlay.classList.add('sb-hide');
    }
    if (!isMobile) {
        sbRightPane.scrollTop = 0;
    } else {
        sbRightPane.scrollTop = 74;
    }
    if (cultureDropDown.value === 'ar') {
        changeRtl(true);
    }
};

const loadJSON = (): void => {
    let switchText: string = localStorage.getItem('ej2-switch') || 'mouse';
    if (Browser.isDevice || window.screen.width <= 850) {
        switchText = 'touch';
    }
    setLeftPaneHeight();
    if (isMobile) {
        select('#left-sidebar').classList.add('sb-hide');
        select('.sb-left-footer-links').appendChild(select('.sb-footer-left'));
        leftToggle.classList.remove('toggle-active');
    }

    if (isTablet || (Browser.isDevice && isPc)) {
        leftToggle.classList.remove('toggle-active');
        sbRightPane.classList.add('control-fullview');
    }
    overlay();
    changeMouseOrTouch(switchText);
    //localStorage.removeItem('ej2-switch');
    enableRipple(selectedTheme.indexOf('material') !== -1 || !selectedTheme);
};

</script>
