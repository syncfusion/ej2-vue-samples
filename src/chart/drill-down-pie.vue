<template>
  <div class="control-section">
    <div>
        <div id="link">
            <a id="category" @click="onClick" style="visibility:hidden; display:inline-block">
					Sales by Category 
		</a>
            <p style="visibility:hidden; display:inline-block" id="symbol">&nbsp;&gt;&gt;&nbsp;</p>
            <p id="text" style="display:inline-block;"></p>
        </div>
        <ejs-accumulationchart ref="pie" :theme="theme" id="container" style='display:block;'  :legendSettings="legendSettings" :enableSmartLabels='enableSmartLabels' :title="title" :subTitle="subTitle" :textRender="onTextRender" :chartMouseClick="onChartMouseClick" :load='load' :enableBorderOnMouseMove='false'>
             <e-accumulation-annotations>
                <e-accumulation-annotation :content= 'initialContent'>
                </e-accumulation-annotation>
            </e-accumulation-annotations>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='data' xName='x' yName='y' name='Automobile Sales' :animation='animation' :borderRadius='borderRadius' :startAngle="startAngle" :endAngle="endAngle" :innerRadius="innerRadius" radius="70%" :border="border" :dataLabel="dataLabel">
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>

<div id="action-description">
    <p>
        This sample demonstrates a drill down chart with a pie for automobiles sales by region. Selecting a category navigates to its sub-categories, where sales are further broken down by country.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to achieve the drilldown concept using a pie chart. Automobile sales are shown in different categories. By clicking each category, you can navigate to the next level, which shows the sales by categories made by each company. <code>Datalabels</code> are used in this sample to show information about the data points.</p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p> Accumulation chart component features are segregated into individual feature-wise modules. To use datalabel, we need to inject <code>AccumulationDataLabelService</code> into the <code>provide</code> option of accumulation. </p>
    More information about the drilldown in accumulation chart can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#multi-level-pie-chart" aria-label="Navigate to the documentation for Multi Level Pie Chart in Vue Accumulation Chart component">documentation section</a>.
</div>
</div>

</template>
<style scoped>
#control-container {
  padding: 0px !important;
}
.control-section {
    min-height: 450px;
}
#category:hover {
    cursor: pointer;
}
</style>
<script>
import { extend } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { getElement, indexFinder, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme  } from "./theme-color";
let theme = loadAccumulationChartTheme();

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective,
    'e-accumulation-annotations': AccumulationAnnotationsDirective,
    'e-accumulation-annotation': AccumulationAnnotationDirective
  },
  data: function() {
    return {
    theme: theme,
    innerRadius: '0%',
    innerChart: false,
    enableSmartLabels: false,
    initialContent: null,
    data: [
        { x: 'Asia-Pacific', y: 45 }, { x: 'Europe', y: 25 }, { x: 'North America', y: 25 }, {x: 'Latin America', y: 7},
        { x: 'Middle East & Africa', y: 3 }
    ],
    asiaPacific: [{ x: 'China', y: 66.7 }, { x: 'Japan', y: 17.8 }, { x: 'India', y: 11.1 }, { x: 'South Korea', y: 3.3 }, { x: 'Others', y: 1.1 }],

    europe: [{ x: 'Germany', y: 32 }, { x: 'UK', y: 20 }, { x: 'France', y: 16 }, { x: 'Italy', y: 12 }, { x: 'Spain', y: 8 }, { x: 'Others', y: 12 }],

    northAmerica: [{ x: 'USA', y: 75 }, { x: 'Canada', y: 15 }, { x: 'Mexico', y: 10 }],

    latinAmerica: [{ x: 'Brazil', y: 57.1 }, { x: 'Argentina', y: 21.4 }, { x: 'Chile', y: 14.3 }, { x: 'Others', y: 7.1 }],
    middleEastAfrica: [{ x: 'South Africa', y: 33.3 }, { x: 'Egypt', y: 26.7 }, { x: 'UAE', y: 23.3 }, { x: 'Others', y: 16.7 }],

    legendSettings: {
        visible: false,
    },
    dataLabel: {
        visible: true, position: 'Outside',  connectorStyle: { type: 'Curve', length: Browser.isDevice ? '5%' : '10%' }, font: {  fontWeight:'600' , color: 'black', size: Browser.isDevice ? '6px' : '12px' }, enableRotation: false
    },
    startAngle: -30,
    radius: '70%',
    borderRadius: 3,
    animation: {
        enable: true
    },
    border: { width: 1, color: '#ffffff' },
    endAngle: 330,
    title: 'Automobile Sales by Region - 2023',
    subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]
  },
  methods: {
    onTextRender: function (args) {
        args.text = args.point.x + ' ' + args.point.y + '%';
    },
    onChartMouseClick: function (args) {
        let  accChart = document.getElementById("container").ej2_instances;
        let index = indexFinder(args.target);
        this.isExplode = false;
        if (document.getElementById('container_Series_' + index.series + '_Point_' + index.point) && !this.innerChart) {
            this.innerRadius = '40%';
            this.radius = '80%';
            switch (index.point) {
                case 0:
                    this.data = this.asiaPacific;
                    this.title = 'Automobile Sales in the Asia-Pacific region';
                    document.getElementById('text').innerHTML = 'Asia-Pacific';
                    break;
                case 1:
                    this.data = this.europe;
                    this.title = 'Automobile Sales in the Europe region';
                    document.getElementById('text').innerHTML = 'Europe';
                    break;
                case 2:
                    this.data = this.northAmerica;
                    this.title = 'Automobile Sales in the North America region';
                    document.getElementById('text').innerHTML = 'North America';
                    break;
                case 3:
                    this.data = this.latinAmerica;
                    this.title = 'Automobile Sales in the Latin America region';
                    document.getElementById('text').innerHTML = 'Minivan';
                    break;
                case 4:
                    this.data = this.middleEastAfrica;
                    this.title = 'Automobile Sales in the Middle East & Africa region';
                    document.getElementById('text').innerHTML = 'Minivan';
                    break;
            }
            let dataLabel = extend({}, this.dataLabel);
            dataLabel.position = Browser.isDevice ? 'Inside' : 'Outside';
            dataLabel.enableRotation = Browser.isDevice ? true : false;
            dataLabel.connectorStyle.length = Browser.isDevice ? '5%' : '10%';
            dataLabel.font.color = '';
            this.dataLabel = dataLabel;
            this.animation.enable = false;
            let legendSettings = this.legendSettings;
            legendSettings.visible = false;
            this.legendSettings = legendSettings;   
            this.enableSmartLabels = true;
            document.getElementById('category').style.visibility = 'visible';
            document.getElementById('symbol').style.visibility = 'visible';
            document.getElementById('text').style.visibility = 'visible';
            this.innerChart = true;
        }
        if (args.target.indexOf('back') > -1) {
            this.data = [{ x: 'Asia-Pacific', y: 45 }, { x: 'Europe', y: 25 }, { x: 'North America', y: 25 }, {x: 'Latin America', y: 7},
        { x: 'Middle East & Africa', y: 3 }]
            accChart[0].annotations = [{ content: null }];
            this.isExplode = false;
            let dataLabel = extend({}, this.dataLabel);
            dataLabel.position = 'Outside';
            this.animation.enable = false;
            dataLabel.font.color = 'black';
            dataLabel.enableRotation = false;
            this.dataLabel = dataLabel;
            let legendSettings = this.legendSettings;
            legendSettings.visible = false;
            this.legendSettings = legendSettings;
            this.enableSmartLabels = false;
            this.innerRadius = '0%';
            getElement('category').style.visibility = 'hidden';
            document.getElementById('symbol').style.visibility = 'hidden';
            document.getElementById('text').style.visibility = 'hidden';
            this.innerChart = false;
            this.title = 'Automobile Sales by Category';
        }
    },
    onClick: function (e) {
        let  accChart = document.getElementById("container").ej2_instances;
        accChart[0].annotations = [{ content: null }];
        this.isExplode = false;
        this.data = [{ x: 'Asia-Pacific', y: 45 }, { x: 'Europe', y: 25 }, { x: 'North America', y: 25 }, {x: 'Latin America', y: 7},
        { x: 'Middle East & Africa', y: 3 }]
        let dataLabel = extend({}, this.dataLabel);
        dataLabel.position = 'Outside';
        dataLabel.font.color = 'black';
        dataLabel.enableRotation = false;
        this.radius = '70%';
        this.dataLabel = dataLabel;
        let legendSettings = this.legendSettings;
        legendSettings.visible = false;
        this.legendSettings = legendSettings;
        this.enableSmartLabels = false;
        this.annotations = [{ content: null }];
        this.innerRadius = '0%';
        getElement('category').style.visibility = 'hidden';
        document.getElementById('symbol').style.visibility = 'hidden';
        document.getElementById('text').style.visibility = 'hidden';
        e.target.style.visibility = 'hidden';
        document.getElementById('symbol').style.visibility = 'hidden';
        document.getElementById('text').style.visibility = 'hidden';
        this.innerChart = false;
    },
    load: function(args) {
        
        let selectedTheme = loadAccumulationChartTheme(args);
        if (selectedTheme.indexOf('HighContrast') > -1 || args.accumulation.theme.indexOf('Dark') > -1){
             args.accumulation.series[0].dataLabel.font.color="white";
        }

        if (args.accumulation.annotations[0] && this.innerChart) {
            args.accumulation.annotations[0].region = 'Series';
            args.accumulation.annotations[0].x = '50%';
            args.accumulation.annotations[0].y = '50%';
            args.accumulation.annotations[0].content = (selectedTheme.indexOf('HighContrast') > -1) || (args.accumulation.theme.indexOf('Dark') > -1)  ?
                '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="source/chart/images/white.png" id="back" alt="White Icon"/></div>' :
                '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="source/chart/images/back.png" id="back" alt="Back Icon"/></div>';
        }
    }
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
      });
    }
};
</script>