<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the overview of basic grid features with its performance metrics of large data. To change datasource
                count, select rows and columns count from dropdown.</p>
        </div>
        <div class="content-wrapper">
            <div>
                <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='ddData' width='220px' :fields='fields' :change='valueChange' :value='ddValue'></ejs-dropdownlist>
                <span id='msg' ref='msgelement' v-html='loadTime'></span>
                <br/>
            </div>
            <ejs-grid ref='overviewgrid' id='overviewgrid' :dataSource="getTradeData" :selectionSettings='selectionSettings' :allowFiltering='true' :filterSettings='filterOptions' :allowSelection='true' :allowSorting='true'
                :enableVirtualization='true' height='600' rowHeight=38 :enableHover='false' :load='load'>
                <e-columns>
                    <e-column type='checkbox' :allowFiltering='false' :allowSorting='false' width='60'></e-column>
                    <e-column field='EmployeeID' :visible='false' headerText='Employee ID' :isPrimaryKey='true' width='130'></e-column>
                    <e-column field='Employees' headerText='Employee Name' width='200' :filter='filter' clipMode='EllipsisWithTooltip' :template='empTemplate'></e-column>
                    <e-column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Mail' headerText='Mail' width='230' :filter='filter'></e-column>
                    <e-column field='Location' headerText='Location' width='140' :filter='filter' :template='coltemplate'></e-column>
                    <e-column field='Status' headerText='Status' width='150' :filter='filter' :template='statusTemplate'></e-column>
                    <e-column field='Trustworthiness' headerText='Trustworthiness' width='200' :filter='filter' :template="trustTemplate"></e-column>
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
            <br/> More information on the Grid instantiation can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/getting-started.html#create-a-simple-grid">documentation section</a>.
            </p>
        </div>

    </div>
</template>
<style>
    @import "../../styles/Grid/style.css";   
</style>

<script>
    import Vue from "vue";
    import { GridPlugin, VirtualScroll, Sort, Filter, Selection, GridComponent } from "@syncfusion/ej2-vue-grids";
    import { DropDownList, DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';

    Vue.use(GridPlugin);
    Vue.use(DropDownListPlugin);

    export default Vue.extend({
        data: () => {
            return {
                ddData: [{ value: 1000, text: '1,000 Rows and 11 Columns' }, { value: 10000, text: '10,000 Rows and 11 Columns' }],
                ddValue: 1000,
                stTime: null,
                loadTime: null,
                dReady: false,
                isDataChanged: true,
                fields: { text: 'text', value: 'value' },
                empTemplate: function () {
                    return {
                        template: Vue.component('empTemplate', {
                            template: `<div>
                            <div class="empimg">
                                <span :class="{'e-userimg': true, 'sf-icon-Male': data.EmployeeImg == usermale, 'sf-icon-FeMale': data.EmployeeImg == userfemale}"></span>
                                </span>
                            </div>
                            <span id="Emptext">{{data.Employees}}</span>                            
                        </div>`,
                            data: function () { return { data: {}, usermale: 'usermale', userfemale: 'userfemale' }; }
                        })
                    }
                },
                coltemplate: function () {
                    return {
                        template: Vue.component('coltemplate', {
                            template: '<div><img src="src/grid/images/Map.png" class="e-image" :alt="data.Location"/> &nbsp<span id="locationtext">{{data.Location}}</span></div>',
                            data: function () { return { data: {} }; }
                        })
                    }
                },

                statusTemplate: function () {
                    return {
                        template: Vue.component('statusTemplate', {
                            template: `<div id="status" :class="{'statustemp': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">\
             <span :class="{'statustxt': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">{{data.Status}}</span></div>`,
                            data: function () { return { data: {}, active: 'Active', inactive: 'Inactive' }; }
                        })
                    }
                },
                trustTemplate: function () {
                    return {
                        template: Vue.component('trustTemplate', {
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
                        template: Vue.component('ratingTemplate', {
                            template: '<div id="status" class="rating">\
                        <span v-for="i in item" :class="{checked: i <= data.Rating, star: true}"></span>\
                      </div>',
                            data: function () { return { data: {}, item: [1, 2, 3, 4, 5] }; }
                        })
                    }
                },

                progessTemplate: function () {
                    return {
                        template: Vue.component('progessTemplate', {
                            template: `<div id="myProgress" class="pbar">
                          <div id="myBar" :class="{'bar': true, 'progressdisable': data.Status == inactive}" :style="{'width': width}">
                            <div id="label" class="barlabel" v-html=width ></div>
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
                filter: {
                    type: 'CheckBox'
                },
                selectionSettings: { persistSelection: true, type: 'Multiple', checkboxOnly: true }
            };
        },
        methods: {
            valueChange: function (args) {
                this.$refs.dropdown.$el.ej2_instances[0].closePopup();
                this.$refs.overviewgrid.showSpinner();
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
                let dataCount = this.ddValue;
                let employees = [
                    'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
                    'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
                    'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];
                let designation = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];
                let mail = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
                let location = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
                let status = ['Active', 'Inactive'];
                let trustworthiness = ['Perfect', 'Sufficient', 'Insufficient'];
                let tradeData = [];
                let address = ['59 rue de lAbbaye', 'Luisenstr. 48', 'Rua do Paço, 67', '2, rue du Commerce', 'Boulevard Tirou, 255',
                    'Rua do mailPaço, 67', 'Hauptstr. 31', 'Starenweg 5', 'Rua do Mercado, 12',
                    'Carrera 22 con Ave. Carlos Soublette #8-35', 'Kirchgasse 6',
                    'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Kirchgasse 6',
                    'Åkergatan 24', '24, place Kléber', 'Torikatu 38', 'Berliner Platz 43', '5ª Ave. Los Palos Grandes', '1029 - 12th Ave. S.',
                    'Torikatu 38', 'P.O. Box 555', '2817 Milton Dr.', 'Taucherstraße 10', '59 rue de lAbbaye', 'Via Ludovico il Moro 22',
                    'Avda. Azteca 123', 'Heerstr. 22', 'Berguvsvägen  8', 'Magazinweg 7', 'Berguvsvägen  8', 'Gran Vía, 1', 'Gran Vía, 1',
                    'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Magazinweg 7', 'Taucherstraße 10', 'Taucherstraße 10',
                    'Av. Copacabana, 267', 'Strada Provinciale 124', 'Fauntleroy Circus', 'Av. dos Lusíadas, 23',
                    'Rua da Panificadora, 12', 'Av. Inês de Castro, 414', 'Avda. Azteca 123', '2817 Milton Dr.'];
                let employeeimg = ['usermale', 'userfemale'];
                if (typeof dataCount === 'string') {
                    dataCount = parseInt(dataCount, 10);
                }
                for (let i = 1; i <= dataCount; i++) {
                    let code = 10000;
                    tradeData.push({
                        'EmployeeID': code + i,
                        'Employees':
                        employees[Math.floor(Math.random() * employees.length)] + ' ' + employees[Math.floor(Math.random() * employees.length)],
                        'Designation': designation[Math.floor(Math.random() * designation.length)],
                        'Location': location[Math.floor(Math.random() * location.length)],
                        'Status': status[Math.floor(Math.random() * status.length)],
                        'Trustworthiness': trustworthiness[Math.floor(Math.random() * trustworthiness.length)],
                        'Rating': Math.floor(Math.random() * 5),
                        'Software': Math.floor(Math.random() * 100),
                        'EmployeeImg': employeeimg[Math.floor(Math.random() * employeeimg.length)],
                        'CurrentSalary': Math.floor((Math.random() * 100000)),
                        'Address': address[Math.floor(Math.random() * address.length)],
                    });
                    let employee = 'Employees';
                    let emp = tradeData[i - 1][employee];
                    let sName = emp.substr(0, emp.indexOf(' ')).toLowerCase();
                    let empmail = 'Mail';
                    tradeData[i - 1][empmail] = sName + (Math.floor(Math.random() * 100) + 10) + '@' + mail[Math.floor(Math.random() * mail.length)];
                }
                this.stTime = performance.now();
                return tradeData;
            }
        },
        provide: {
            grid: [Filter, Selection, Sort, VirtualScroll]
        }

    });

</script>