<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
                :width='width' :pointRender='pointRender' :legendSettings='legendSettings' :axisLabelRender='axisLabelRender' :tooltipRender='tooltipRender'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries'
                        name='Story Point' width=2 :marker='marker'> </e-series>

                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample shows the way in which the Charts component can be bound to a remote service. 
                The data source of the chart is bound to remote data using the DataManager component.
            </p>
        </div>
        <div id="description">
            <p>
                The Charts component supports data binding. The DataManager component can be used to configure the Charts component to bind remote data.
            </p>
            <p>
                The DataManager, which will act as an interface between the service endpoint and the chart, will require
                the below minimal information to interact with service endpoint properly.
            </p>
            <ul>
                <li>
                    <code>DataManager->url</code> - Defines the service endpoint to fetch data
                </li>
                <li>
                    <code>DataManager->adaptor</code> - - Defines the adaptor option. By default,
                    <code>ODataAdaptor</code> is used for remote binding. .
                </li>

            </ul>
            <p>
                Adaptor is responsible for processing response and request from/to the service endpoint.
                <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to
                interact with particular service endpoints. They are,
            </p>
            <ul>
                <li>
                    <code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all
                    remote based adaptors.
                </li>
                <li>
                    <code>ODataAdaptor</code> - Use this to interact with OData endpoints.
                </li>

                <li>
                    <code>ODataV4Adaptor</code>- Use this to interact with OData V4 endpoints.
                </li>
                <li>
                    <code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.
                </li>
                <li>
                    <code>WebMethodAdaptor</code> - Use this to interact with web methods.
                </li>
            </ul>
            <p>
                In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code>
                to the <code>dataSource</code> property.
            </p>
            <p>
                More information on the remote data binding can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/working-with-data/#remote-data" aria-label="Navigate to the documentation for Remote Data binding in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, pointFluent2Colors, pointFluent2HighContrastColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Legend, Tooltip, DataLabel } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

let dataManager = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/orders'
});
let query = new Query().take(5);

let pointRender = function (args) {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme === 'material-dark') {
        args.fill = pointMaterialDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = pointMaterialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
        args.fill = pointFabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = pointBootstrap5DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5') {
        args.fill = pointBootstrap5Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent-dark') {
        args.fill = pointFluentDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = pointFluentColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
        args.fill = pointBootstrapColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = pointHighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = pointFluent2Colors[args.point.index % 10];
    } 
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = pointFluent2HighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
    } 
    else if (selectedTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
    }
    else {
        args.fill = pointBootstrapColors[args.point.index % 10];
    }
};

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            seriesData: dataManager,
            queries: query,
            pointRender: pointRender,

            //Initializing Primary X Axis
            primaryXAxis: {
                rangePadding: 'Additional',
                labelRotation: Browser.isDevice ? -45 : 0,
                labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                majorGridLines: { width: 1 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                title: 'Freight rate in U.S dollars',
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            width: Browser.isDevice ? '100%' : '75%',
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    format: '{value}K',
                    font: {
                        fontWeight: '600', color: '#ffffff'
                    }
                }
            },
            tooltip: {
            enable: true,
            header: 'Freight rate'
        },
            legendSettings: { visible: false },
            title: "Container freight rate"
        };
    },
    provide: {
        chart: [ColumnSeries, Category, Legend, Tooltip, DataLabel]
    },
    methods: {
        tooltipRender: function (args) {
            args.text =args.data.pointX + '<b>' + ': ' + '$' + args.data.pointY * 1000 + '</b>';
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
            args.text =  ''+args.value * 1000;
            }
        }

    },

};
</script>