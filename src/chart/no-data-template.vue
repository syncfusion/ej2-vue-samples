<template>
    <div class="control-section">
        <div align='center' class='chart-container'>
            <ejs-chart style='display:block' ref='chart' :theme='theme' :load='load' :loaded='loaded'
                :noDataTemplate='noDataTemplate' align='center' id='chartcontainer' :title='title' :subTitle='subTitle'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :tooltip='tooltip' :width='width'>
                <e-series-collection>
                    <e-series :dataSource='seriesData'  type='Line' xName='x' yName='y' :marker='marker' :animation='{ enable: true }' width='2'> </e-series>
                </e-series-collection>
            </ejs-chart>
            
            <div v-if="!hasData" class="no-data-button-overlay">
                <ejs-button
                    content="Load Data"
                    iconCss="e-icons e-refresh"
                    cssClass="load-data-btn e-outline"
                    :isPrimary="false"
                    @click="loadData"
                ></ejs-button>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample illustrates handling the empty data chart using no data template. This template is used to
                display a custom message or image when the data is not available in the chart.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, the <code>noDataTemplate</code> property is assigned with an HTML template 
                that includes an image, a message indicating data unavailability, and a button to load new 
                data into the chart. Once data is provided, a line chart is displayed.
            </p>
            <p>
                <b>Tooltip</b> is enabled in the chart. To view a tooltip, hover over a data point or tap on it 
                if you're using a touch-enabled device.
            </p>
        </div>
    </div>

</template>

<style>
#noDataTemplateContainer {
    height: inherit;
    width: inherit;
}

.no-data-button-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 60px; /* Adjust this to position below the no-data message */
    z-index: 10;
}

.load-data-btn {
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-top: 50px;
}

.dark-bg {
    background-color: #000000;
    color: #ffffff;
}

.material3-dark .dark-bg, .fluent2-highcontrast .dark-bg {
    background-color: #1c1b1f;
}

.fluent2-dark .dark-bg {
    background-color: #1f1f1f;
}

.tailwind3-dark .dark-bg {
    background-color: #111827;
}

.bootstrap5_3-dark .dark-bg {
    background-color: #212529;
}

.light-bg {
    background-color: #fafafa;
    color: #000000;
}

.template-align img {
    max-width: 150px;
    /* Adjust size as needed */
    max-height: 150px;
    margin-top: 55px;
}

.template-align {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
<style scoped></style>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Category, Tooltip, DataLabel, Highlight, loaded } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
    components: {
        'ejs-chart': ChartComponent,
        'ejs-button': ButtonComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data() {
        return {
            theme: theme,
            hasData: false,
            seriesData: [
                { x: 'January', y: 19173 },
                { x: 'February', y: 17726 },
                { x: 'March', y: 19874 },
                { x: 'April', y: 19391 },
                { x: 'May', y: 20072 },
                { x: 'June', y: 19233 }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category', 
                majorGridLines: {
                    width: 0
                },
                majorTickLines: {
                    width: 0
                }, 
            },

            chartArea: {
                border: {width: 0}
            },

            primaryYAxis: {
                title: 'Production (in million pounds)',
                titleStyle: {
                    fontWeight: '600'
                },
                majorTickLines: {
                    width: 0
                }, 
                lineStyle: {
                    width: 0
                }
            },

            marker: {
                visible: true,
                width: 7, height: 7
            },

            noDataTemplate: `
                <div id="noDataTemplateContainer" class="light-bg">
                    <div class="template-align">    
                        <img src="src/chart/images/no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
                    </div>
                </div>`,
            width: '100%',
            title: "Milk Production in US - 2025",
            subTitle: "Source: nass.usda.gov",
            tooltip: { enable: true, header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' }
        };
    },
    provide: {
        chart: [LineSeries, Category, DataLabel, Tooltip, Highlight]
    },
    methods: {
        load(args) {
            loadChartTheme(args);
            this.seriesData = this.hasData ? [
                { x: 'January', y: 19173 },
                { x: 'February', y: 17726 },
                { x: 'March', y: 19874 },
                { x: 'April', y: 19391 },
                { x: 'May', y: 20072 },
                { x: 'June', y: 19233 }
            ] : [];
        },
        loaded(args) {
            let selectedTheme = loadChartTheme(args);
            const noDataDiv = document.getElementById("noDataTemplateContainer");
            if (noDataDiv) {
                noDataDiv.className = selectedTheme.indexOf("Dark") > -1 || selectedTheme.indexOf("HighContrast") > -1 ? 'dark-bg' : 'light-bg';
            }
        },
        loadData() {
            this.seriesData = [
                { x: 'January', y: 19173 },
                { x: 'February', y: 17726 },
                { x: 'March', y: 19874 },
                { x: 'April', y: 19391 },
                { x: 'May', y: 20072 },
                { x: 'June', y: 19233 }
            ];
            this.hasData = true;

            const values = this.seriesData.map(d => d.y);
            const min = Math.min(...values);
            const max = Math.max(...values);
            const range = max - min;

            const chart = this.$refs.chart.ej2Instances;
            chart.primaryYAxis.minimum = Math.floor(min - range * 0.1);
            chart.primaryYAxis.maximum = Math.ceil(max + range * 0.1);
            chart.primaryYAxis.interval = Math.ceil(range / 5);
            chart.series[0].animation.enable = true;
            chart.refresh();
        }
    }
};
</script>