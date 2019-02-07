<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart ref="chart" style='display:block;' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :load='load'
            :animationComplete='animationComplete' :chartArea='chartArea' :width='width' align='center' :selectionMode='selectionMode'
            :legendSettings='legend' :selectedDataIndexes='selectedDataIndexes' :chartMouseUp='chartMouseUp'
            :loaded='loaded' :theme='theme'>
            <e-annotations>
                <e-annotation :content='annotationtemp' x='20%' y='25%' coordinateUnits='Pixel'
                    region='Series'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='dataSource' type='StackingColumn' xName='x' yName='y0' name='UK'>
                </e-series>
                <e-series :dataSource='dataSource' type='StackingColumn' xName='x' yName='y1' name='Germany'>
                </e-series>
                <e-series :dataSource='dataSource' type='StackingColumn' xName='x' yName='y2' name='France'>
                </e-series>
                <e-series :dataSource='dataSource' type='StackingColumn' xName='x' yName='y3' name='Italy'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates annotation feature in chart. Accumulation chart is placed in cartesian chart by using annotation.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure annotation feature in chart. We have used a pie chart to depict
        the sales for each year using annotation support, while selecting a particular year from the StackedColumn series,
        the respective data's are showed in pie. An annotation can hold any html element as its content, here we have added
        the Pie chart as its content.
    </p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Annotation feature, we need to inject
        <code>ChartAnnotationService</code> into the <code>provide</code> option.
    </p>
</div>

</div>
</template>
<style>
.control-section {
  min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChart, ChartPlugin, StackingColumnSeries, Category, Legend, Selection, ChartAnnotation, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";
import annotationTem from './annotation-template.vue';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         annotationtemp: function () {
                return { template:  annotationTem}
            },
    theme: theme,
    render: false,
    legend: {
        visible: true,
        toggleVisibility: false
    },
    //Initializing dataSource
    dataSource: [
        { x: '2014', y0: 51, y1: 77, y2: 66, y3: 34 }, { x: '2015', y0: 67, y1: 49, y2: 19, y3: 38 },
        { x: '2016', y0: 143, y1: 121, y2: 91, y3: 44 }, { x: '2017', y0: 19, y1: 28, y2: 65, y3: 51 },
        { x: '2018', y0: 30, y1: 66, y2: 32, y3: 61 }, { x: '2019', y0: 189, y1: 128, y2: 122, y3: 76 },
        { x: '2020', y0: 72, y1: 97, y2: 65, y3: 82 }
    ],
    pieDataSource: [
        { x: 'UK', y: 51, text: '22%' }, { x: 'Germany', y: 77, text: '34%' },
        { x: 'France', y: 66, text: '29%' }, { x: 'Italy', y: 34, text: '15%' }
    ],
    //Initializing Primary X Axis
    primaryXAxis: {
        title: 'Years',
        majorGridLines: { width: 0 }, minorGridLines: { width: 1 },
        minorTickLines: { width: 1 }, interval: 1,
        labelIntersectAction: 'Rotate45',
        valueType: 'Category'
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    width: Browser.isDevice ? '100%' : '80%',
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: 'Sales', lineStyle: { width: 0 },
        minimum: 0, maximum: 700, interval: 100,
        majorGridLines: { width: 1 }, minorGridLines: { width: 1 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelFormat: '{value}B',
    },
    title: 'Mobile Game Market by Country',
    selectedDataIndexes: [{ series: 0, point: 0 }],
    selectionMode: 'Cluster'
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, Legend, Selection, ChartAnnotation]
  },
  methods: {
    getValue: function (series, pointIndex, y) {
        let totalValue = 0;
        for (let ser of series) {
            totalValue += ser.points[pointIndex].y;
        }
        return (Math.round((y / totalValue) * 100)) + '%';
    },
    chartMouseUp: function (args) {
        if (args.target.indexOf('Point') > -1) {
            let pointIndex = parseInt(args.target[args.target.length - 1], 10);
            this.pieDataSource = [];
            for (let series of this.$refs.chart.ej2Instances.visibleSeries) {
                let value = series.points[pointIndex].y;
                this.pieDataSource.push({
                    'x': series.name,
                    'y': value,
                    'text': this.getValue(this.$refs.chart.ej2Instances.visibleSeries, pointIndex, value)
                });
            }
            this.pie.series[0].dataSource = this.pieDataSource;
            this.pie.series[0].xName = 'x';
            this.pie.series[0].yName = 'y';
            this.pie.refresh();
        }
    },
    loaded: function (args) {
        if (this.render) {
            this.pie.destroy();
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            this.pie = new AccumulationChart({
                background: 'transparent',
                series: [{
                    radius: '65%', animation: { enable: false },
                    dataSource: this.pieDataSource,
                    xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', font: { color: 'white' }, name: 'text' },
                }],
                theme: theme,
                legendSettings: { visible: false }
            });
            this.pie.appendTo('#chart_annotation');
        }
    },
    animationComplete: function (args) {
        this.render = true;
        AccumulationChart.Inject(AccumulationChart, AccumulationDataLabel);
        this.pie = new AccumulationChart({
            background: 'transparent',
            series: [{
                radius: '65%', animation: { enable: false },
                dataSource: this.pieDataSource,
                xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', name: 'text' },
            }],
            load: function (args) {
                let selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.accumulation.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
            },
            legendSettings: { visible: false },
            resized: function (args) {
                location.reload();
            }
        });
        this.pie.appendTo('#chart_annotation');
    },

   load: function (args) {       
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.chart.ej2Instances.refresh();
      });
    }
});
</script>