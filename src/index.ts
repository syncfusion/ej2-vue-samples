/* Vue imports */
import Vue from "vue";
import VueRouter from "vue-router";

/* syncfusion imports */
import { Browser, extend, Animation, Ajax, closest, createElement, detach, enableRipple, setCurrencyCode } from '@syncfusion/ej2-base';
import { addClass, select, selectAll, isNullOrUndefined, MouseEventArgs, setCulture, L10n, loadCldr } from '@syncfusion/ej2-base';
import { TreeView, Sidebar, Tab } from '@syncfusion/ej2-navigations'
import { Popup, Tooltip } from '@syncfusion/ej2-popups';
import { AutoComplete } from '@syncfusion/ej2-vue-dropdowns'
import { Button } from '@syncfusion/ej2-buttons';
import { Toast } from '@syncfusion/ej2-notifications';
import { Grid } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query, DataUtil } from '@syncfusion/ej2-data';

/* Other imports */
import { Locale } from './common/locale-string';
import * as numberingSystems from './common/cldr-data/supplemental/numberingSystems.json';
import * as currencyData from './common/cldr-data/supplemental/currencyData.json';
import * as deCultureData from './common/cldr-data/main/de/all.json';
import * as arCultureData from './common/cldr-data/main/ar/all.json';
import * as swissCultureDate from './common/cldr-data/main/fr-CH/all.json';
import * as enCultureData from './common/cldr-data/main/fr-CH/all.json';
import * as chinaCultureData from './common/cldr-data/main/zh/all.json';
import * as samplesJSON from './common/samplelist';
import { ListView, ListBase } from '@syncfusion/ej2-lists';
import * as elasticlunr from './common/lib/elasticlunr';
import * as hljs from './common/lib/highlightjs';
import * as searchJson from './common/search-index.json';
import { Controls, MyWindow, DestroyMethod, Samples } from './model';
import routes from './router.config';
import { setTimeout } from "timers";

loadCldr(numberingSystems, chinaCultureData, enCultureData, swissCultureDate, currencyData, deCultureData, arCultureData);
L10n.load(Locale);
setCulture('en');
const urlRegex: RegExp = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
const sampleRegex: RegExp = /#\/(([^\/]+\/)+[^\/\.]+)/;
const sbArray: string[] = ['angular', 'react', 'javascript', 'aspnetcore', 'aspnetmvc', 'typescript'];
//Regex for removing hidden
const reg: RegExp = /.*custom code start([\S\s]*?)custom code end.*/g;
let selectedTheme: string = location.hash.split('/')[1] || 'material';
const themeCollection: string[] = ['material', 'fabric', 'bootstrap', 'bootstrap4', 'highcontrast'];
let resizeManualTrigger: boolean = false;
const matchedCurrency: { [key: string]: string } = {
    'en': 'USD',
    'de': 'EUR',
    'ar': 'AED',
    'zh': 'CNY',
    'fr-CH': 'CHF'
};

/* Router Plugin */
Vue.use(VueRouter);
const router = new VueRouter({
    routes, // short for `routes: routes`    
})



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
let sampleNavigation: string = `<div class="sb-custom-item sample-navigation"><button id='prev-sample' class="sb-navigation-prev" 
aria-label="previous sample">
<span class='sb-icons sb-icon-Previous'></span>
</button>
<button  id='next-sample' class="sb-navigation-next" aria-label="next sample">
<span class='sb-icons sb-icon-Next'></span>
</button>
</div>`;
contentToolbarTemplate = sampleNavigation + '<div class="sb-icons sb-mobile-setting sb-hide"></div>'
tabContentToolbar = createElement('div', { className: 'sb-content-toolbar', innerHTML: contentToolbarTemplate });

/* vue instance */
let sampleBrowser: Vue = new Vue({
    el: "#app",
    data: {
    },
    router,
    created: function () {
        samplesList = this.getSampleList();
    },

    updated: function () {
        sb.vars.contentTab.selectedItem = 0;
        this.updateBreadCrumb();
        this.updateDescription();
        this.updatesourceTab();
    },

    mounted: function () {
        sb.vars.controlTree = select('#controlTree', this.$el);
        sb.vars.breadCrumbObject = {};

        /* breadCrumb updates */
        sb.vars.breadCrumbObject.component = select('.sb-bread-crumb-text>.category-text', this.$el);
        sb.vars.breadCrumbObject.categorySeparator = select('.category-seperator', this.$el);
        sb.vars.breadCrumbObject.subCategory = select('.sb-bread-crumb-text>.component', this.$el);
        sb.vars.breadCrumbObject.sample = select('.sb-bread-crumb-text>.crumb-sample', this.$el);

        sb.vars.content = select('#control-content', this.$el);
        sbHeader = <HTMLElement>select('#sample-header', this.$el);
        leftToggle = <HTMLElement>select('#sb-toggle-left', this.$el);
        sb.vars.sample = select('#sb-switcher-popup', this.$el);
        // searchEle = select('#search-popup', this.$el);
        searchButton = select('#sb-trigger-search', this.$el);
        searchOverlay = select('.e-search-overlay', this.$el);
        inputele = select('#search-input', this.$el);
        sb.vars.switch = select('.sb-header-text-right', this.$el);
        sb.vars.setResponsiveElement = select('.setting-responsive', this.$el);
        sb.vars.leftBack = select('#sb-left-back', this.$el);
        sb.vars.headerThemeSwitch = select('#header-theme-switcher', this.$el);
        sb.vars.themePoppup = select('#theme-switcher-popup', this.$el);
        sb.vars.switcher = select('#sb-switcher', this.$el);
        sb.vars.sblink = select('#switch-sb', this.$el);
        resetSearch = select('.sb-reset-icon', this.$el);
        sb.vars.inputWrapper = select('#search-input-wrapper', this.$el);
        themeList = select('#themelist', this.$el);
        sb.vars.codesnippet = select('.ts-source-content', this.$el);
        sb.vars.setting = select('#settings-popup', this.$el);
        settingElement = <HTMLElement>select('.sb-setting-btn', this.$el);
        sbRightPane = <HTMLElement>select('.sb-right-pane', this.$el);
        headerSetting = <HTMLElement>select('.sb-header-settings', this.$el);
        sb.vars.mobilePreference = select('.sb-mobile-preference', this.$el);
        sbContentOverlay = <HTMLElement>select('.sb-content-overlay', this.$el);
        sbBodyOverlay = <HTMLElement>select('.sb-body-overlay', this.$el);
        sb.vars.contentTab = new Tab({ selected: this.changeTab, selecting: this.preventTabSwipe }, "#sb-content");
        sb.vars.source = select('.sb-content', this.$el);
        if (Browser.isIE) {
            window.addEventListener('hashchange', () => {
                var currentPath = window.location.hash.slice(1)
                if (this.$route.path !== currentPath) {
                    this.$router.push(currentPath);
                    window.hashString = location.hash;
                    this.setSelectList();
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
        this.loadJSON();
        this.$router.afterEach(this.urlChange);
        this.updateBreadCrumb();
        this.updateDescription();
    },

    methods: {
        urlChange: function () {
        },
        preventTabSwipe: function (e: any): void {
            if (e.isSwiped) {
                e.cancel = true;
            }
        },

        updateDescription: function () {
            let curUrl: string = location.hash;
            if(prev != curUrl) {
                select('.description-section', this.$el).innerHTML = '';
                if (select('#description')) {
                    select('.description-section', this.$el)
                        .appendChild(select('#description'));
                }
                select('.sb-action-description', this.$el).innerHTML = '';
                if (select('#action-description') !== null) {
                    select('.sb-action-description', this.$el)
                        .appendChild(select('#action-description'));
                }
                prev = curUrl;
            }
        },

        breadCrumbUpdate(controlName: string, category: string, sampleName: string) {
            let ele: Element = this.$el.querySelector('#sample-bread-crumb');
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
        },

        updateBreadCrumb: function () {
            this.$el.querySelector('#component-name .sb-sample-text').innerHTML = this.$router.currentRoute.meta.eCompName;
            this.breadCrumbUpdate(this.$router.currentRoute.meta.eCompName, this.$router.currentRoute.meta.eCategoryName, this.$router.currentRoute.meta.eSampleName);
        },

        renderLeftPaneComponents: function () {
            samplesTreeList = this.getTreeviewList(samplesList);
            let sampleTreeView: TreeView = new TreeView(
                {
                    fields: {
                        dataSource: samplesTreeList, id: 'id', parentID: 'pid',
                        text: 'name', hasChildren: 'hasChild', htmlAttributes: 'url'
                    },
                    nodeClicked: this.controlSelect,
                    nodeTemplate:  '<div><span class="tree-text">${name}</span>' +
                        '</span>${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">Updated</span>' +
                        '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">${type}</span>${/if}${/if}'
                },
                '#controlTree');
            let controlList: ListView = new ListView(
                {
                    dataSource: controlSampleData[location.hash.split('/')[2]] || controlSampleData.grid,
                    fields: { id: 'uid', text: 'name', groupBy: 'order', htmlAttributes: 'data' },
                    select: this.controlSelect,
                    template: '<div class="e-text-content ${if(type)}e-icon-wrapper${/if}"> <span class="e-list-text" role="listitem">${name}' +
                        '</span>${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type}">Updated</span>' +
                        '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type}">${type}</span>${/if}${/if}' +
                        '${if(directory)}<div class="e-icons e-icon-collapsible"></div>${/if}</div>',
                    groupTemplate: '${if(items[0]["category"])}<div class="e-text-content">' +
                        '<span class="e-list-text">${items[0].category}</span>' +
                        '</div>${/if}',
                    actionComplete: this.setSelectList
                },
                '#controlList');
        },

        getSampleList: function (): Controls[] | { [key: string]: Object }[] {
            if (Browser.isDevice) {
                let tempList: Controls[] = <Controls[]>extend([], samplesJSON.samplesList);
                let tempLists: any = [];
                for (let temp of tempList) {
                    if(temp.hideOnDevice == true)
                    {
                        continue;
                    }
                    let data: DataManager = new DataManager((temp as any).samples);
                    temp.samples = <Samples[]>data.executeLocal(new Query());
                    tempLists = tempLists.concat(temp);
                }
                return tempLists;
            }
            return samplesJSON.samplesList;
        },

        getTreeviewList: function (list: any[]): Controls[] | { [key: string]: Object }[] {
            let id: number = 0;
            let pid: number = 0;
            let tempList: any[] = [];
            let category: string = '';
            for (let i: number = 0; i < list.length; i++) {
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
                        name: list[i].name,
                        type: list[i].type,
                        url: {
                            'data-path': '/' + list[i].directory + '/' + list[i].samples[0].url + '.html',
                            'control-name': list[i].directory,
                        }
                    });
                controlSampleData[list[i].directory] = this.getSamples(list[i].samples);
            }
            return tempList;
        },

        getSamples: function (samples: any): any {
            let tempSamples: any = [];
            for (let i: number = 0; i < samples.length; i++) {
                tempSamples[i] = samples[i];
                tempSamples[i].data = { 'sample-name': samples[i].url, 'data-path': '/' + samples[i].dir + '/' + samples[i].url + '.html' };
            }
            return tempSamples;
        },

        controlSelect: function (arg: any): void {
            sb.vars.contentTab.selectedItem = 0;
            let path: string = (arg.node || arg.item).getAttribute('data-path');
            let curHashCollection: string = '/' + location.hash.split('/').slice(2).join('/');
            if (path) {
                this.controlListRefresh(arg.node || arg.item);
                if (path !== curHashCollection) {
                    this.sampleOverlay();
                    let theme: string = location.hash.split('/')[1] || 'material';
                    if (arg.item && ((isMobile) ||
                        ((isTablet || (Browser.isDevice && isPc)) && this.isLeftPaneOpen()))) {
                        this.toggleLeftPane();
                    }
                    window.hashString = '#/' + theme + path;
                    setTimeout(() => { location.hash = '#/' + theme + path; }, 600);
                }
            }
        },

        controlListRefresh: function (ele: Element): void {
            let controlName: string = <string>ele.getAttribute('control-name');
            let samples: any = controlSampleData[controlName];
            if (samples) {
                let listView: ListView = (select('#controlList', this.$el) as any).ej2_instances[0];
                listView.dataSource = samples;
                this.showHideControlTree();
            }
        },

        showHideControlTree: function (): void {
            let controlTree: HTMLElement = select('#controlTree', this.$el) as HTMLElement;
            let controlList: HTMLElement = select('#controlSamples', this.$el) as HTMLElement;
            let reverse: boolean = (select('#controlTree', this.$el) as HTMLElement).style.display === 'none';
            reverse ? this.viewSwitch(controlList, controlTree, reverse) : this.viewSwitch(controlTree, controlList, reverse);
        },

        viewSwitch: function (from: HTMLElement, to: HTMLElement, reverse: boolean): void {
            let anim: Animation = new Animation({ duration: 500, timingFunction: 'ease' });
            let controlTree: HTMLElement = select('#controlTree', this.$el) as HTMLElement;
            let controlList: Element = select('#controlList', this.$el);
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
        },

        sampleOverlay: function (): void {
            document.body.setAttribute('aria-busy', 'true');
            sbHeader.classList.add('sb-right-pane-overlay');
            sbRightPane.classList.add('sb-right-pane-overlay');
            this.mobNavOverlay(true);
            sbContentOverlay.classList.remove('sb-hide');
        },

        setSelectList: function (): void {
            let hString: string = window.hashString || location.hash;
            let hash: string[] = hString.split('/');
            let list: ListView = (select('#controlList', this.$el) as any).ej2_instances[0];
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
                    if ((select('#controlTree', this.$el) as HTMLElement).style.display !== 'none') {
                        this.showHideControlTree();
                    }
                    list.selectItem(selectSample);
                }
            } else {
                this.showHideControlTree();
                list.selectItem(select('[sample-name="grid-overview"]'));
            }
        },

        toggleLeftPane: function (): void {
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
        },

        mobNavOverlay: function (isOverlay: boolean): void {
            if (Browser.isDevice) {
                let mobileFoorter: Element = select('.sb-mobilefooter', this.$el);
                if (isOverlay) {
                    mobileFoorter.classList.add('sb-right-pane-overlay');
                } else {
                    mobileFoorter.classList.remove('sb-right-pane-overlay');
                }
            }
        },

        isLeftPaneOpen: function (): boolean {
            return sidebar.isOpen;
        },

        rendersbPopup: function (): void {
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
                relateTo: <HTMLElement>select('.theme-wrapper', this.$el), position: { X: 'left', Y: 'bottom' },
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
                        let value:any = [];
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
                    fields: { groupBy: 'doc.component', value: 'doc.name', text: 'doc.name' },
                    popupHeight: 'auto',
                    suggestionCount: 10,
                    highlight: true,
                    select: (e: any) => {
                        let data: any = e.itemData.doc;
                        let hashval: string = '#/' + location.hash.split('/')[1] + '/' + data.dir + '/' + data.url + '.html';
                        searchPopup.hidePopup();
                        searchOverlay.classList.add('e-search-hidden');
                        if (location.hash !== hashval) {
                            this.sampleOverlay();
                            window.hashString = hashval;
                            this.setSelectList();
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
            settingSidebar = new Sidebar({ position: 'Right', zIndex: '1003', width: '282', closeOnDocumentClick: true, showBackdrop: true, type: 'Over' });
            settingSidebar.appendTo('#right-sidebar');
            themeDropDown = new DropDownList({
                index: 0,
                change: (e: any) => { this.switchTheme(e.value); }
            });
            themeDropDown.appendTo('#sb-setting-theme');
            currencyDropDown = new DropDownList({
                index: 0,
                change: (e: any) => { setCurrencyCode(e.value); }
            });

            cultureDropDown = new DropDownList({
                index: 0,
                change: (e: any) => {
                    let value: string = e.value;
                    if (value === 'ar') {
                        this.changeRtl(true);
                    } else {
                        this.changeRtl(false);
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
                selected: this.dynamicTab,
                selecting: this.preventTabSwipe,
            }, "#sb-source-tab")
            let tabHeader: HTMLElement = <HTMLElement>document.getElementById('sb-content-header');
            tabHeader.appendChild(tabContentToolbar);
            let previous: Tooltip = new Tooltip({
                content: 'Previous Sample'
            });
            previous.appendTo('#prev-sample');
            let next: Tooltip = new Tooltip({
                content: 'Next Sample'
            });
            select('#right-pane').addEventListener('scroll', function (event) {
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
        },

        changeTab: function (args: any): void {
            if (args.selectedIndex === 1) {
                sb.vars.sourceTab.items = sourceTabItems;
                sb.vars.sourceTab.refresh();
                this.rendercopycode();
                this.dynamicTabCreation(sb.vars.sourceTab);
            }
        },

        rendercopycode: function (): void {
            let ele: HTMLElement = createElement('div', { className: 'copy-tooltip', innerHTML: '<div class="e-icons copycode"></div>' });
            this.$el.querySelector('#sb-source-tab').appendChild(ele);
            let copiedTooltip: Tooltip = new Tooltip({
                content: 'Copied to clipboard ',
                position: 'BottomCenter',
                opensOn: 'Click',
                closeDelay: 500
            });
            copiedTooltip.appendTo(ele);
            select('.copycode').addEventListener('click', this.copyCode);
        },

        dynamicTab: function (e: any): void {
            let blockEle: HTMLElement = <HTMLElement>document.querySelector('#sb-source-tab > .e-content > #e-content_' + e.selectedIndex);
            let codeEle: any = blockEle.children[0];
            codeEle.innerHTML = sb.vars.sourceTab.items[e.selectedIndex].data;
            codeEle.innerHTML = codeEle.innerHTML.replace(reg,'');
            codeEle.classList.add('sb-src-code');
            this.highlightCode(codeEle);
        },

        dynamicTabCreation: function (obj: any): void {
            let blockEle: Element = obj.element.querySelector('#e-content_' + obj.selectedItem).children[0];
            blockEle.innerHTML = obj.items[obj.selectedItem].data;
            blockEle.innerHTML = blockEle.innerHTML.replace(reg,'');
            blockEle.classList.add('sb-src-code');
           this.highlightCode(blockEle);
         
        },

        highlightCode: function(codeEle: Element): void {
            codeEle.classList.add("sb-src-code");
            hljs.highlightBlock(codeEle);
          },

        eventBinding: function (): void {
            let fn: Function = (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this.headerAction('changeSampleBrowser');
            }
            sb.vars.switcher.addEventListener('click', fn)
            sb.vars.switch.addEventListener('click', fn)
            sb.vars.headerThemeSwitch.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this.headerAction('changeTheme');

            });
            // document.addEventListener('click', this.headerAction.bind(this, 'closePopup'));
            searchButton.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleSearchOverlay();
            });
            settingElement.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                this.headerAction('toggleSettings');
            });
            sb.vars.setting.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
            });
            inputele.addEventListener('click', (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
            });
            themeList.addEventListener('click', this.changeTheme);
            sb.vars.setResponsiveElement.addEventListener('click', this.setMouseOrTouch);
            sb.vars.sblink.addEventListener('click', (e: MouseEvent) => {
                let target: Element = closest(<any>e.target, 'li');
                if (target) {
                    let anchor: any = target.querySelector('a');
                    if (anchor) {
                        anchor.click();
                    }
                }
            })

            window.addEventListener('resize', this.processResize);
            sbRightPane.addEventListener('click', () => {
                if (isMobile && this.isLeftPaneOpen()) {
                    this.toggleLeftPane();
                }
            });
            sb.vars.leftBack.addEventListener('click', this.showHideControlTree);
            leftToggle.addEventListener('click', this.toggleLeftPane);
            headerSetting.addEventListener('click', this.viewMobilePrefPane);
            select('.sb-mobile-setting').addEventListener('click', this.viewMobilePropPane);
            select('#next-sample').addEventListener('click', this.onNextButtonClick);

            select('#prev-sample').addEventListener('click', this.onPrevButtonClick);
            select('#mobile-next-sample').addEventListener('click', this.onNextButtonClick);

            select('#mobile-prev-sample').addEventListener('click', this.onPrevButtonClick);
        },

        changeRtl(args: any): void {
            let elementlist: HTMLElement[] = selectAll('.e-control', this.$el.querySelector('#control-content'));

            for (let control of elementlist) {
                let eleinstance: Object[] = (<DestroyMethod>control).ej2_instances;
                if (eleinstance) {
                    for (let instance of eleinstance) {
                        (<DestroyMethod>instance).enableRtl = args;
                    }
                }
            }
        },

        headerAction: function (action: string, preventSearch?: boolean): void {
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
                    this.setPressedAttribute(sb.vars.headerThemeSwitch);
                    curPopup = themeSwitcherPopup;
                    break;
                case 'toggleSettings':
                    settingElement.classList.toggle('active');
                    this.setPressedAttribute(settingElement);
                    themeDropDown.index = themeCollection.indexOf(selectedTheme);
                    curPopup = settingPopup;
                    break;
            }

            if (action === 'closePopup') {
                sb.vars.headerThemeSwitch.classList.remove('active');
                sb.vars.switcher.classList.remove('active');
                settingElement.classList.remove('active');
                this.setPressedAttribute(sb.vars.headerThemeSwitch);
                this.setPressedAttribute(settingElement);
            }

            if (preventSearch !== true && !searchOverlay.classList.contains('sb-hide')) {
                searchOverlay.classList.add('sb-hide');
                searchButton.classList.remove('active');
                this.setPressedAttribute(<HTMLElement>searchButton);
            }

            if (curPopup && (curPopup !== openedPopup)) {
                curPopup.show(new Animation({ name: 'FadeIn', duration: 400, delay: 0 }));

                openedPopup = curPopup;
            }
            else {
                openedPopup = null;
            }
            prevAction = action;
        },

        setPressedAttribute: function (ele: HTMLElement): void {
            let status: boolean = ele.classList.contains('active');
            ele.setAttribute('aria-pressed', status ? 'true' : 'false');
        },

        toggleSearchOverlay: function (): void {
            this.headerAction('closePopup', true);
            inputele.value = '';
            searchPopup.hidePopup();
            searchButton.classList.toggle('active');
            this.setPressedAttribute(<HTMLElement>searchButton);
            searchOverlay.classList.toggle('sb-hide');
            if (!searchOverlay.classList.contains('sb-hide')) {
                inputele.focus();
            }
        },

        highlight: function (searchString: string, listElement: any): void {
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
        },

        SbLink: function (): void {
            let href: any = location.href;
            let link: string[] = href.match(urlRegex);
            let sample: string = href.match(sampleRegex)[1];
            for (let sb of sbArray) {
                let ele: HTMLFormElement = <HTMLFormElement>select('#' + sb);
                if (sb === 'aspnetcore' || sb === 'aspnetmvc') {
                    ele.href = sb === 'aspnetcore' ? 'https://ej2.syncfusion.com/aspnetcore/' : 'https://ej2.syncfusion.com/aspnetmvc/';
                } else {
                    ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) : ('https://ej2.syncfusion.com/')) +
                        (sb === 'typescript' ? '' : (sb + '/')) + 'demos/#/' + sample + (sb === ('javascript' || 'typescript') ? '.html' : '');
                }
            }
        },

        changeTheme: function (e: MouseEvent): void {
            let target: Element = <HTMLElement>e.target;
            target = closest(target, 'li');
            let themeName: string = target.id;
            this.switchTheme(themeName);
        },

        switchTheme: function (str: string): void {
            let hash: string[] = location.hash.split('/');
            if (hash[1] !== str) {
                hash[1] = str;
                location.hash = hash.join('/');
                location.reload();
            }
        },

        loadTheme: function (theme: string): void {
            let body: HTMLElement = document.body;
            if (body.classList.length > 0) {
                for (let themeItem of themeCollection) {
                    body.classList.remove(themeItem);
                }
            }
            body.classList.add(theme);
            themeList.querySelector('.active').classList.remove('active');
            themeList.querySelector('#' + theme).classList.add('active');
            selectedTheme = theme;
            this.renderLeftPaneComponents();
            this.rendersbPopup();
            this.eventBinding();
            this.sampleArray();
            this.updatesourceTab();
            (elasticlunr as any).clearStopWords();
            searchInstance = (elasticlunr as any).Index.load(searchJson);
            setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 500);
        },

        setMouseOrTouch: function (e: MouseEvent): void {
            let ele: HTMLElement = <any>closest(<any>e.target, '.sb-responsive-items');
            let switchType: string = ele.id;
            this.changeMouseOrTouch(switchType);
            this.changeMouseOrTouch(switchType);
            this.headerAction('closePopup');
            localStorage.setItem('ej2-switch', switchType);
            location.reload();
        },

        changeMouseOrTouch: function (str: string): void {
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
        },

        viewMobilePrefPane: function (): void {
            select('.sb-mobile-prop-pane').classList.add('sb-hide');
            sb.vars.mobilePreference.classList.remove('sb-hide');
            this.toggleRightPane();
        },

        viewMobilePropPane: function (): void {
            sb.vars.mobilePreference.classList.add('sb-hide');
            select('.sb-mobile-prop-pane').classList.remove('sb-hide');
            this.toggleRightPane();
        },

        toggleRightPane: function (): void {
            select('#right-sidebar').classList.remove('sb-hide');
            themeDropDown.index = themeCollection.indexOf(selectedTheme);
            if (isMobile) {
                settingSidebar.toggle();
            }
        },
        resetInput: function (arg: any): void {
            arg.preventDefault();
            arg.stopPropagation();
            (<HTMLInputElement>document.getElementById('search-input')).value = '';
            sb.vars.inputWrapper.setAttribute('data-value', '');
            searchPopup.hidePopup();
        },

        onNextButtonClick: function (arg: any): void {
            sb.vars.contentTab.selectedItem = 0;
            this.sampleOverlay();
            let curSampleUrl: string = location.hash;
            let inx: number = samplesAr.indexOf(curSampleUrl);
            if (inx !== -1) {
                let prevhref: string = samplesAr[inx];
                let curhref: string = samplesAr[inx + 1];
                location.href = curhref;
            }
            window.hashString = location.hash;
            this.setSelectList();
        },
        onPrevButtonClick: function (arg: any): void {
            this.sampleOverlay();
            let curSampleUrl: string = location.hash;
            let inx: number = samplesAr.indexOf(curSampleUrl);
            if (inx !== -1) {
                let prevhref: string = samplesAr[inx];
                let curhref: string = samplesAr[inx - 1];
                location.href = curhref;
            }
            window.hashString = location.hash;
            this.setSelectList();
        },

        setLeftPaneHeight: function (): void {
            let leftPane: HTMLElement = select('.sb-left-pane', this.$el) as HTMLElement;
            leftPane.style.height = isMobile ? (document.body.offsetHeight + 'px') : '';
        },

        processResize: function (e: any): void {
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
            this.setLeftPaneHeight();
            let leftPane: Element = select('.sb-left-pane');
            let rightPane: Element = select('.sb-right-pane');
            let footer: Element = select('.sb-footer-left');
            let pref: any = select('#settings-popup');
            if (isTablet || isMobile) {
                sb.vars.contentTab.hideTab(1);
            } else {
                sb.vars.contentTab.hideTab(1, false);
            }
            if (toggle && !isPc) {
                this.toggleLeftPane();
            }
            if (isMobile || isTablet) {
                sidebar.closeOnDocumentClick = true;
                select('.sb-left-footer-links').appendChild(footer);
                if (isTablet) {
                    select('.sb-footer').appendChild(footer);
                }
                if (this.isVisible('.sb-mobile-overlay')) {
                    this.removeMobileOverlay();
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
                if (this.isVisible('.sb-mobile-overlay')) {
                    this.removeMobileOverlay();
                }
            }
            if (isPc) {
                sidebar.target = sb.vars.source;
                sidebar.showBackdrop = false;
                sidebar.closeOnDocumentClick = false;

                sidebar.show();

                if (this.isVisible('.sb-mobile-overlay')) {
                    this.removeMobileOverlay();
                }
                if (isPc && !Browser.isDevice && this.isVisible('.sb-left-pane')) {
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
                    select('#control-content', this.$el).appendChild(mobilePropPane);
                }
                if (!select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
                    this.toggleRightPane();
                }
            }
            if (switcherPopup) {
                switcherPopup.refresh();
            }
        },

        processDeviceDependables: function (): void {
            if (Browser.isDevice) {
                select('.sb-desktop-setting').classList.add('sb-hide');
            } else {
                select('.sb-desktop-setting').classList.remove('sb-hide');
            }
        },

        overlay: function (): void {
            sbHeader.classList.add('sb-right-pane-overlay');
            sbBodyOverlay.classList.remove('sb-hide');
        },

        isVisible: function (elem: string): boolean {
            return !select(elem).classList.contains('sb-hide');
        },

        removeMobileOverlay: function (): void {
            select('.sb-mobile-overlay').classList.add('sb-hide');
        },

        renderPropertyPane: function (ele: string): void {
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
        },

        setPropertySectionHeight: function (): void {
            let propertypane: HTMLElement = <any>select('.property-section');
            let ele: HTMLElement = <any>document.querySelector('.control-section');

            if (ele && propertypane) {
                ele.classList.add('sb-property-border');
            } else {
                ele.classList.remove('sb-property-border');
            }
        },

        toggleButtonState: function (id: string, state: boolean): void {
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
        },
        copyCode: function (): void {
            let copyElem: HTMLElement = select('#sb-source-tab .e-item.e-active') as HTMLElement;
            let textArea: HTMLTextAreaElement = createElement('textArea') as HTMLTextAreaElement;
            textArea.textContent = copyElem.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            detach(textArea);
            (select('.copy-tooltip') as any).ej2_instances[0].close();
        },

        sampleArray: function (): void {
            for (let node of <Controls[]>samplesList) {
                let dataManager: DataManager = new DataManager((node as any).samples);
                let samples: Samples[] & { [key: string]: Object }[] = <Samples[] & { [key: string]: Object }[]>
                    dataManager.executeLocal(new Query().sortBy('order', 'ascending'));
                for (let sample of samples) {
                    let selectedTheme: string = location.hash.split('/')[1] ? location.hash.split('/')[1] : 'material';
                    let control: string = node.directory;
                    let sampleUrl: string = sample.url;
                    let loc: string = '/' + selectedTheme + '/' + control + '/' + sampleUrl + '.html';
                    samplesAr.push('#' + loc);
                }
            }
        },

        getStringWithOutDescription: function (code: string, descRegex: RegExp): string {
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
        },

        sourceFileList: function (node: any): void {
            for (let samples of node.curViewDS) {
                if (samples.url == location.hash.split('/')[3].replace('.html', '')) {
                    return samples.sourceFiles;
                }
            }
        },
        generatepath: function(path:any): void{
            let splitPath: string = path.split('/')[1];
            let filePath:any = [{path:`src/${path}.vue`,displayName:`${splitPath}.vue`}]
            return filePath;
        },

        updatesourceTab: function (): void {
            let curDir: any = location.hash.split('/').slice(2).join('/').replace('.html','');
            let curSample: any = location.hash.split('/')[3].replace('.html', '');
            let sourcePromise: Array<Promise<Ajax>> = [];
            let ajaxvue: any = new Ajax('src/' + curDir + '.vue', 'GET', false);
            let sObj: any = [];
            this.SbLink();
            sb.vars.contentTab.selectedItem = 0;
            sb.vars.sourceTab.selectedItem = 0;
            let sampleListFile: ListView = (select('#controlList', this.$el) as any).ej2_instances[0];
            let sourceFiles: any = this.sourceFileList(sampleListFile) as any || this.generatepath(curDir);
            if (sourceFiles) {
                for (let i: number = 0; i < sourceFiles.length; i++) {
                    sourcePromise.push((new Ajax(sourceFiles[i].path, 'GET', false)).send());
                    sObj.push({
                        header: { text: sourceFiles[i].displayName },
                        data: '',
                        content: sourceFiles[i].displayName
                    });
                }
            }
            Promise.all(sourcePromise).then((results: Object[]): void => {
                results.forEach((value, index) => {
                    let sampleContent: string = value.toString();
                    sampleContent = this.getStringWithOutDescription(sampleContent, /(\'|\")description/g);
                    sampleContent = this.getStringWithOutDescription(sampleContent, /(\'|\")action-description/g)
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
                this.renderPropertyPane('#property');
                select('.sb-mobile-prop-pane', this.$el).innerHTML = '';
                this.setPropertySectionHeight();
                this.removeOverlay();
                let propPanel: Element = select('#control-content .property-section');
                if (isMobile) {
                    if (propPanel) {
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
                        window.location.hash = "#/material/grid/grid-overview.html"
                    }
                }
                let curIndex: number = samplesAr.indexOf(location.hash);
                let samLength: number = samplesAr.length - 1;
                if (curIndex === samLength) {
                    this.toggleButtonState('next-sample', true);
                } else {
                    this.toggleButtonState('next-sample', false);
                }
                if (curIndex === 0) {
                    this.toggleButtonState('prev-sample', true);
                } else {
                    this.toggleButtonState('prev-sample', false);
                }
            })
                .catch((reason: any): void => {
                    //errorHandler(reason.message);
                });
        },

        destroyControls(): void {
            let elementlist: HTMLElement[] = selectAll('.e-control', sb.vars.content);
            for (let control of elementlist) {
                let eleinstance: Object[] = (<DestroyMethod>control).ej2_instances;
                if (eleinstance) {
                    for (let instance of eleinstance) {
                        (<DestroyMethod>instance).destroy();
                    }
                }
            }
        },

        removeOverlay: function (): void {
            document.body.setAttribute('aria-busy', 'false');
            sbContentOverlay.classList.add('sb-hide');
            sbRightPane.classList.remove('sb-right-pane-overlay');
            sbHeader.classList.remove('sb-right-pane-overlay');
            this.mobNavOverlay(false);
            if (!sbBodyOverlay.classList.contains('sb-hide')) {
                sbBodyOverlay.classList.add('sb-hide');
            }
            if (!isMobile) {
                sbRightPane.scrollTop = 0;
            } else {
                sbRightPane.scrollTop = 74;
            }
        },

        loadJSON: function (): void {
            let switchText: string = localStorage.getItem('ej2-switch') ||
                (window.screen.width > 1366 ? 'touch' : 'mouse');
            if (Browser.isDevice || window.screen.width <= 850) {
                switchText = 'touch';
            }
            this.setLeftPaneHeight();
            if (isMobile) {
                select('#left-sidebar').classList.add('sb-hide');
                select('.sb-left-footer-links').appendChild(select('.sb-footer-left'));
                sidebar.toggle();
                leftToggle.classList.remove('toggle-active');
            }

            if (isTablet || (Browser.isDevice && isPc)) {
                leftToggle.classList.remove('toggle-active');
                sbRightPane.classList.add('control-fullview');
            }
            this.overlay();
            this.changeMouseOrTouch(switchText);
            localStorage.removeItem('ej2-switch');
            enableRipple(selectedTheme === 'material' || !selectedTheme);
            this.loadTheme(selectedTheme);
        }
    }
}
);

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/src/service-worker.js');
    }
