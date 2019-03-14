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
        <button type="button" id="back" style="visibility: hidden;" @click="onClick">Back</button>
        <ejs-accumulationchart ref="pie" :theme="theme" id="container" style='display:block;' :legendSettings="legendSettings" :enableSmartLabels='enableSmartLabels' :title="title" :textRender="onTextRender" :chartMouseClick="onChartMouseClick" :load='load'>
             <e-annotations>
                <e-annotation :content="initialContent">
                </e-annotation>
            </e-annotations>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='data' xName='x' yName='y' :startAngle="startAngle" :endAngle="endAngle" :innerRadius="innerRadius" radius="70%" :dataLabel="dataLabel" :explode="isExplode" explodeOffset='10%' :explodeIndex='explodeIndex'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>

<div id="action-description">
    <p>
        This sample demonstrates drill down sample with pie chart for a automobiles sales by category. By clicking one category, you can navigate to other sub-category by which companies are differentiated.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to achieve <code>drilldown</code> concept using pie control. An automobile sales has been shown by different category, on clicking each category, you can navigate to next level, which shows the sales of those category
        in terms of company.</p>
    <p> Datalabel is used in this sample.</p>
    <p style="font-weight: 500">Injecting Module</p>
    <p> Accumulation chart component features are segregated into individual feature-wise modules. To use datalabel, we need to inject <code>AccumulationDataLabelService</code> into the <code>provide</code> option of accumulation. </p>
</div>
</div>

</template>
<style>
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
import Vue from "vue";
import { extend } from '@syncfusion/ej2-base';
import { getElement, indexFinder, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation, AccumulationChartPlugin } from "@syncfusion/ej2-vue-charts";
import {Template1} from "./drill-down-temp1.vue";
import {Template2} from "./drill-down-temp2.vue";

Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let tempContent1 = function() {
  return { template: Template1 };
}; 

let tempContent2 = function() {
  return { template: Template2 };
};

export default Vue.extend({
  data: function() {
    return {
    theme: theme,
    innerRadius: '0%',
    innerChart: false,
    enableSmartLabels: false,
    initialContent: null,
    data: [
        { x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 },
        { x: 'Minivan', y: 23 }
    ],
    suvs: [{ x: 'Toyota', y: 8 }, { x: 'Ford', y: 12 }, { x: 'GM', y: 17 }, { x: 'Renault', y: 6 }, { x: 'Fiat', y: 3 },
    { x: 'Hyundai', y: 16 }, { x: 'Honda', y: 8 }, { x: 'Maruthi', y: 10 }, { x: 'BMW', y: 20 }],

    cars: [{ x: 'Toyota', y: 7 }, { x: 'Chrysler', y: 12 }, { x: 'Nissan', y: 9 }, { x: 'Ford', y: 15 },
    { x: 'Tata', y: 10 },
    { x: 'Mahindra', y: 7 }, { x: 'Renault', y: 8 }, { x: 'Skoda', y: 5 }, { x: 'Volkswagen', y: 15 }, { x: 'Fiat', y: 3 }],

    pickups: [{ x: 'Nissan', y: 9 }, { x: 'Chrysler', y: 4 }, { x: 'Ford', y: 7 }, { x: 'Toyota', y: 20 },
    { x: 'Suzuki', y: 13 }, { x: 'Lada', y: 12 }, { x: 'Bentley', y: 6 }, { x: 'Volvo', y: 10 }, { x: 'Audi', y: 19 }],

    minivans: [{ x: 'Hummer', y: 11 }, { x: 'Ford', y: 5 }, { x: 'GM', y: 12 }, { x: 'Chrysler', y: 3 },
    { x: 'Jaguar', y: 9 },
    { x: 'Fiat', y: 8 }, { x: 'Honda', y: 15 }, { x: 'Hyundai', y: 4 }, { x: 'Scion', y: 11 }, { x: 'Toyota', y: 17 }],

    //Initializing Legend
    legendSettings: {
        visible: false,
    },
    
    //Initializing Datalabel
    dataLabel: {
        visible: true, position: 'Inside', connectorStyle: { type: 'Curve', length: '5%' }, font: { size: '14px', color: 'white' }
    },
    startAngle: 0,
    explodeIndex: 2,
    isExplode: false,
    endAngle: 360,
    title: 'Automobile Sales by Category'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]
  },
  methods: {
    onTextRender: function (args) {
        args.text = args.point.x + ' ' + args.point.y + ' %';
    },
    onChartMouseClick: function (args) {
        let  accChart = document.getElementById("container").ej2_instances;
        let index = indexFinder(args.target);
        let lightThemeContent = tempContent1;
        let darkThemeContent = tempContent2;
        this.isExplode = false;
        if (document.getElementById('container_Series_' + index.series + '_Point_' + index.point) && !this.innerChart) {
            accChart[0].annotations = [{
                content: accChart[0].theme === 'Highcontrast' ? darkThemeContent : lightThemeContent, region: 'Chart', x: '50%', y: '50%'
            }];
            this.innerRadius = '30%';
            switch (index.point) {
                case 0:
                    this.data = this.suvs;
                    this.title = 'Automobile Sales in the SUV Segment';
                    document.getElementById('text').innerHTML = 'SUV';
                    break;
                case 1:
                    this.data = this.cars;
                    this.title = 'Automobile Sales in the Car Segment';
                    document.getElementById('text').innerHTML = 'Car';
                    break;
                case 2:
                    this.data = this.pickups;
                    this.title = 'Automobile Sales in the Pickup Segment';
                    document.getElementById('text').innerHTML = 'Pickup';
                    break;
                case 3:
                    this.data = this.minivans;
                    this.title = 'Automobile Sales in the Minivan Segment';
                    document.getElementById('text').innerHTML = 'Minivan';
                    break;
            }
            let dataLabel = extend({}, this.dataLabel);
            dataLabel.position = 'Outside';
            dataLabel.font.color = 'black';
            this.dataLabel = dataLabel;
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
            this.data = [{ x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }]
            accChart[0].annotations = [{ content: null }];
            this.isExplode = false;
            let dataLabel = extend({}, this.dataLabel);
            dataLabel.position = 'Inside';
            dataLabel.font.color = 'white';
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
        }
    },
    onClick: function (e) {
        let  accChart = document.getElementById("container").ej2_instances;
        accChart[0].annotations = [{ content: null }];
        this.isExplode = false;
        this.data = [{ x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }]
        let dataLabel = extend({}, this.dataLabel);
        dataLabel.position = 'Inside';
        dataLabel.font.color = 'white';
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
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme === 'highcontrast'){
             args.accumulation.series[0].dataLabel.font.color="white";
        }
    }
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
      });
    }
});
</script>