<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :load='load'>
                <e-annotations>
                    <e-annotation :x='annotationX1' y=90 coordinateUnits='Point' :content="'contentTemplate'">
                        <template v-slot:contentTemplate="{}">
                            <div style="color:blue;font-family: bold; font-weight: 600">Christmas Offer<br> Dec 2017
                            </div>
                        </template>
                    </e-annotation>
                    <e-annotation :x='annotationX2' y=90 coordinateUnits='Point' :content="'contentTemplate1'">
                        <template v-slot:contentTemplate1="{}">
                            <div style="color:blue;font-family: bold; font-weight: 600">New Year Offer<br> Jan 2018
                            </div>
                        </template>
                    </e-annotation>
                </e-annotations>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='Period' yName='Sales' name='Product' width=2
                        opacity=1 :marker='marker'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample shows the date-time category axis with sample data about the sales of a product on different business days.
            </p>
        </div>
        <div id="description">
            <p>
                The date-time category axis is used to display date-time values with nonlinear intervals. 
                For example, business days alone can be depicted here in a week. 
                To use a date-time category axis, set the <code>ValueType</code> in axis to <b>DateTimeCategory</b>.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. For datetime category
                axis, you should inject
                <code>DateTimeCategory</code> module by using
                <code>provide: { chart: [ DateTimeCategory] },</code>method.
            </p>
            <p>
                More information on the datetime category axis can be found in this documentation section.
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/date-time-axis/#datetimecategory-axis">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AnnotationDirective, AnnotationsDirective, ColumnSeries, DateTimeCategory, StripLine, ChartAnnotation, DataLabel } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');


export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective,
        'e-annotations': AnnotationsDirective,
        'e-annotation': AnnotationDirective
    },
    data: function () {
        return {
            theme: theme,
            seriesData: [
                { Period: new Date(2017, 11, 20), Sales: 21, DataLabelMappingName: "21M" },
                { Period: new Date(2017, 11, 21), Sales: 24, DataLabelMappingName: "24M" },
                { Period: new Date(2017, 11, 22), Sales: 24, DataLabelMappingName: "24M" },
                { Period: new Date(2017, 11, 26), Sales: 70, DataLabelMappingName: "70M" },
                { Period: new Date(2017, 11, 27), Sales: 75, DataLabelMappingName: "75M" },
                { Period: new Date(2018, 0, 2), Sales: 82, DataLabelMappingName: "82M" },
                { Period: new Date(2018, 0, 3), Sales: 53, DataLabelMappingName: "53M" },
                { Period: new Date(2018, 0, 4), Sales: 54, DataLabelMappingName: "54M" },
                { Period: new Date(2018, 0, 5), Sales: 53, DataLabelMappingName: "53M" },
                { Period: new Date(2018, 0, 8), Sales: 45, DataLabelMappingName: "45M" }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'DateTimeCategory',
                intervalType: 'Days',
                skeleton: 'Ed',
                majorGridLines: { width: 0 },
                stripLines: [
                    { visible: true, start: new Date(2017, 11, 20), end: new Date(2017, 11, 27), color: 'skyblue', opacity: 0.5, },
                    { visible: true, start: new Date(2018, 0, 2), end: new Date(2018, 0, 8), color: 'pink', opacity: 0.5 },
                ],
                title: 'Business Days',
                labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
                labelRotation: Browser.isDevice ? -45 : 0
            },

            //Initializing Primary Y Axis
            primaryYAxis: {
                labelFormat: '{value}M',
                rangePadding: 'None',
                minimum: 0,
                maximum: 100,
                interval: 20,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    enableRotation: Browser.isDevice ? true : false,
                    angle: Browser.isDevice ? -90 : 0,
                    name: 'DataLabelMappingName'
                }

            },

            legendSettings: { visible: false },

            width: Browser.isDevice ? '100%' : '75%',
            annotationX1: new Date(2017, 11, 22),
            annotationX2: new Date(2018, 0, 4),
            title: "Sales Comparison of a Product"
        };
    },
    provide: {
        chart: [ColumnSeries, DateTimeCategory, StripLine, ChartAnnotation, DataLabel]
    },
    methods: {
        load: function (args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
        }
    },

};
</script>