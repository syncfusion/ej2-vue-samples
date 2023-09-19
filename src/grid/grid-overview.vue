<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the overview of basic grid features with its performance metrics of large data. To change datasource
                count, select rows and columns count from dropdown.</p>
        </div>
        <div class="content-wrapper">
            <div style="padding-bottom: 18px;">
                <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='ddData' width='220px' :fields='fields' :change='valueChange' :value='ddValue'></ejs-dropdownlist>
                <span id='msg' ref='msgelement' v-html='loadTime'></span>
                <br/>
            </div>
            <ejs-grid ref='overviewgrid' id='overviewgrid' :dataSource="getTradeData" :query="query" :selectionSettings='selectionSettings' :allowFiltering='true' :filterSettings='filterOptions' :allowSelection='true' :allowSorting='true'
                :enableVirtualization='true' height='400' rowHeight=38 :enableHover='false' :enableHeaderFocus='true' :load='load' :loadingIndicator='loadingIndicator'>
                <e-columns>
                    <e-column type='checkbox' :allowFiltering='false' :allowSorting='false' width='60'></e-column>
                    <e-column field='EmployeeID' :visible='false' headerText='Employee ID' :isPrimaryKey='true' width='130'></e-column>
                    <e-column field='Employees' headerText='Employee Name' width='200' clipMode='EllipsisWithTooltip' :template='empTemplate'></e-column>
                    <e-column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Mail' headerText='Mail' width='230'></e-column>
                    <e-column field='Location' headerText='Location' width='140' :template='coltemplate'></e-column>
                    <e-column field='Status' headerText='Status' width='150' :template='statusTemplate'></e-column>
                    <e-column field='Trustworthiness' headerText='Trustworthiness' width='200' :template="trustTemplate"></e-column>
                    <e-column field='Rating' headerText='Rating' width='160' :template='ratingTemplate' :allowFiltering='false'></e-column>
                    <e-column field='Software' :allowFiltering='false' :allowSorting='false' headerText='Software Proficiency' width='180' :template='progessTemplate'></e-column>
                    <e-column field='CurrentSalary' headerText='Current Salary' format='C2' width='160' textAlign='Right'></e-column>
                    <e-column field='Address' headerText='Address' width='240' clipMode='EllipsisWithTooltip'></e-column>
                </e-columns>
                </ejs-grid>
        </div>

        <div id="description">
            <p>
                The Grid is used to display and manipulate tabular data with configuration options to control the way the data is presented
                and manipulated. It will pull the data from a data source, such as an array of JSON objects, OData web services,
                or <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
                DataManager</a></code> binding data fields to columns. Also, displaying a column header to identify the field with
                support for grouped records.
            </p>
            <p>
                In this demo, Grid features such as <code>Virtual Scrolling, Filtering, Sorting, Column Template, filter template </code> etc... are
                used along with large data source.
            </p>
            <p>
                You can follow the guidelines in this documentation to get around the browser height restriction when loading and viewing millions of records. Refer <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/virtual-scroll/#browser-height-limitation-in-virtual-scrolling-and-solution">
                here</a> for more details.
            </p>
            <p>
            <br/> More information on the Grid instantiation can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/getting-started.html#getting-started">documentation section</a>.
            </p>
        </div>

    </div>
</template>
<style scoped>
    @import "../../styles/Grid/style.css";
</style>

<script>
    import { createApp } from "vue";
    import { GridComponent, ColumnsDirective, ColumnDirective, VirtualScroll, Sort, Filter, Selection } from "@syncfusion/ej2-vue-grids";
    import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
    import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
    import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

    export default {
        components: {
            'ejs-grid': GridComponent,
            'e-columns': ColumnsDirective,
            'e-column': ColumnDirective,
            'ejs-dropdownlist': DropDownListComponent,
            'ejs-rating': RatingComponent
        },
        data: () => {
            return {
                ddData: [{ value: 1000, text: '1,000 Rows and 11 Columns' }, { value: 10000, text: '10,000 Rows and 11 Columns' }],
                ddValue: 1000,
                stTime: null,
                loadTime: null,
                dReady: false,
                isDataChanged: true,
                loadingIndicator: { indicatorType: 'Shimmer' },
                fields: { text: 'text', value: 'value' },
                empTemplate: function () {
                    return {
                        template: createApp({}).component('empTemplate', {
                            template: `<div>
                            <div class="e-grid-empimg">
                                <span :class="{'e-userimg': true, 'sf-grid-icon-Male': data.EmployeeImg == usermale, 'sf-grid-icon-FeMale': data.EmployeeImg == userfemale}"></span>
                            </div>
                            <span id="Emptext">{{data.Employees}}</span>                            
                        </div>`,
                            data: function () { return { data: {}, usermale: 'usermale', userfemale: 'userfemale' }; }
                        })
                    }
                },
                coltemplate: function () {
                    return {
                        template: createApp({}).component('coltemplate', {
                            template: '<div><img src="src/grid/images/Map.png" class="e-image" :alt="data.Location"/> &nbsp<span id="locationtext">{{data.Location}}</span></div>',
                            data: function () { return { data: {} }; }
                        })
                    }
                },

                statusTemplate: function () {
                    return {
                        template: createApp({}).component('statusTemplate', {
                            template: `<div id="status" :class="{'statustemp': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">\
             <span :class="{'statustxt': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">{{data.Status}}</span></div>`,
                            data: function () { return { data: {}, active: 'Active', inactive: 'Inactive' }; }
                        })
                    }
                },
                trustTemplate: function () {
                    return {
                        template: createApp({}).component('trustTemplate', {
                            template: '<div><img style="width: 31px; height: 24px" :src="image" :alt="data.Trustworthiness" /><span id="Trusttext">{{data.Trustworthiness}}</span></div>',
                            data: function () { return { data: {}, Perfect: 'Perfect', Sufficient: 'Sufficient', Insufficient: 'Insufficient' }; },
                            computed: {
                                image: function () {
                                    return 'src/grid/images/' + this.data.Trustworthiness + '.png';
                                }
                            }
                        })
                    }
                },
                ratingTemplate: function () {
                    return {
                        template: createApp({}).component('ratingTemplate', {
                            template: '<div id="status" class="rating">\
                        <ejs-rating :readOnly="true" :value="value" cssClass="custom-rating"></ejs-rating>\
                      </div>',
                            data: function () { return { data: {} }; },
                            components: { 'ejs-rating': RatingComponent },
                            computed: {
                                value: function () {
                                    return this.data.Rating;
                                }
                            }
                        })
                    }
                },

                progessTemplate: function () {
                    return {
                        template: createApp({}).component('progessTemplate', {
                            template: `<div id="myProgress" class="pbar">
                          <div id="myBar" :class="{'bar': true, 'progressdisable': data.Status == inactive}" :style="{'width': width}">
                            <div id="pbarlabel" class="barlabel" v-html=width ></div>
                          </div>
                        </div>`,
                            data: function () { return { data: {}, inactive: 'Inactive' }; },
                            computed: {
                                width: function () {
                                    if (this.data.Software <= 20) {
                                        this.data.Software += 20;
                                    }
                                    return this.data.Software + '%';
                                }
                            }
                        })
                    }
                },
                filterOptions: {
                    type: 'Menu'
                },
                selectionSettings: { persistSelection: true, type: 'Multiple', checkboxOnly: true }
            };
        },
        methods: {
            valueChange: function (args) {
                this.$refs.dropdown.$el.ej2_instances[0].closePopup();
                this.isDataChanged = true;
                this.stTime = null;
                let contentElement = this.$refs.overviewgrid.ej2Instances.contentModule.content;
                contentElement.scrollLeft = 0;
                contentElement.scrollTop = 0;
                this.$refs.overviewgrid.ej2Instances.pageSettings.currentPage = 1;
                this.stTime = performance.now();
                this.ddValue = args.value;
                this.$refs.overviewgrid.hideSpinner();
            },
            load: function() {
                let proxy = this;
                this.$refs.overviewgrid.$el.ej2_instances[0].on('data-ready', function () {
                    proxy.dReady =  true;
                 })
                this.$refs.overviewgrid.$el.addEventListener('DOMSubtreeModified', function () {
                    if (proxy.dReady && proxy.stTime && proxy.isDataChanged) {
                        let e = performance.now() - proxy.stTime;
                        proxy.loadTime = "Load Time: <b>" + e.toFixed(0) + "</b><b>ms</b>";
                        proxy.stTime = null;
                        proxy.dReady = false;
                        proxy.isDataChanged = false;
                        proxy.$refs.msgelement.classList.remove('e-hide');
                    }
                })
            }
        },
        computed: {
            getTradeData: function () {
                let SERVICE_URI = "https://services.syncfusion.com/vue/production/";
                let getTradeData = new DataManager({
                    url: SERVICE_URI + 'api/UrlDataSource',
                    adaptor: new UrlAdaptor()
                });
                this.stTime = performance.now();
                return getTradeData;
            },
            query: function () {
                let query = new Query().addParams('dataCount', this.ddValue + '');
                return query;
            }
        },
        provide: {
            grid: [Filter, Selection, Sort, VirtualScroll]
        }

    };

</script>
