<template>
<div>
<div class="control-section">
    <ejs-treemap id='container' :load='load' :tooltipRendering='tooltipRendering' align="center" :loaded='loaded' :resize='resize' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings' :levels='levels'></ejs-treemap>
</div>

<div style="float: right; margin-right: 10px;">Source:
    <a href=" http://en.worldstat.info/Asia/" target="_blank">en.worldstat.info</a>
</div>
<div id="action-description">
    <p>
        This sample visualizes the population level of various continents in 2011 based on the gender and age group.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a pie chart as a template for leaf items in TreeMap. Any custom HTML element can be rendered as label template.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>  
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin,TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
import { Continent_Data } from '../treemap/treemap-data/pie-chart';
import { AccumulationChartPlugin, AccumulationChart,  PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
import Template from './pie-temp.vue';
Vue.use(TreeMapPlugin);
Vue.use(AccumulationChartPlugin);
AccumulationChart.Inject(AccumulationTooltip);
let chartCollection = [];
let count = 0;
export default Vue.extend({
data:function(){
    return{
        tooltipSettings: {
            visible: true,
            format: ' ${Gender} : ${Population}'
        },
        titleSettings: {
            text: 'Population of the continents based on gender and age group - 2011',
            textStyle: { size: '15px' }
        },
        useGroupingSeparator: true,
        dataSource: Continent_Data,
        weightValuePath: 'Population',
        leafItemSettings: {
            labelPath: 'Gender',
            fill: '#A1317D',
            showLabels: false,
            border: { color: 'black', width: 0.5 },
            labelFormat: '${Gender} : ${Population}',
            templatePosition: 'Center',
            labelTemplate: function () { return {template: Template}; },
        },
        levels: [
            {
                groupPath: 'Continent', fill: '#7E2361', border: { color: 'black', width: 1, },
                headerAlignment: 'Center', groupGap: 0, headerStyle: { size: '14px'}
            }
        ]
    }
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    tooltipRendering:function(args){
            if (args.item['groupIndex'] !== 1 ) {
                args.cancel = true;
            }
    },
    loaded: function(args){
        let template = document.getElementById(args.treemap.element.id + '_Label_Template_Group');
        if (template) {
            for (let i = 0; i < template.childElementCount; i++) {
               this.AccumulationChartRender((template.childNodes[i].childNodes[0]).id);
            }
            count = 0;
        }
    },
    resize: function(args){
            for (let i = 0; i < chartCollection.length; i++) {
                chartCollection[i].destroy();
        }
    },
    AccumulationChartRender:function(id) {
    let chartData = this.getData();
    let dataSource = chartData['data'];
    let name = chartData['name'];
    let chart= new AccumulationChart({
        legendSettings: {visible: false},
        series: [
            {
                explode: true,
                explodeIndex: 0,
                explodeOffset: '20%',
                name: name,
                palettes: ['#1E1E1E', '#00BDAE', '#FFFFFF'],
                dataSource: dataSource,
                dataLabel: {
                    visible: true
                },
                type: 'Pie',
                xName: 'x',
                yName: 'y'
            }
        ],
        
        background: 'transparent',
        tooltip: {
            enable: true,
            format: '${point.x} : ${point.y}%'
        }
    });
    chart.appendTo('#' + id);
    chartCollection.push(chart);
},
 getData:function() {
    let dataSource;
    let dataName;
    if (count === 0) {
        dataSource = [
            { 'x': '0-15 years', y: 40.8 }, { 'x': '15-64 years', y: 56.2 },
            { 'x': 'Above 64 years', y: 3.0 }
        ];
        dataName = 'Asia';
    } else if (count === 1) {
        dataSource = [
            { 'x': '0-15 years', y: 15.5 }, { 'x': '15-64 years', y: 12.9 },
            { 'x': 'Above 64 years', y: 41.4 }
        ];
        dataName = 'Asia';
    } else if (count === 2) {
        dataSource = [
            { 'x': '0-15 years', y: 25.1 }, { 'x': '15-64 years', y: 67.8 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Africa';
    } else if (count === 3) {
        dataSource = [
            { 'x': '0-15 years', y: 15.3 }, { 'x': '15-64 years', y: 68.4 },
            { 'x': 'Above 64 years', y: 16.3 }
        ];
        dataName = 'Africa';
    } else if (count === 4) {
        dataSource = [
            { 'x': '0-15 years', y: 22.8 }, { 'x': '15-64 years', y: 65.9 },
            { 'x': 'Above 64 years', y: 11.4 }
        ];
        dataName = 'Europe';
    } else if (count === 5) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Europe';
    } else if (count === 6) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    } else if (count === 7) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    } else if (count === 8) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Oceania';
    } else if (count === 9) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Oceania';
    } else if (count === 10) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'North America';
    } else if (count === 11) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'North America';
    } else if (count === 12) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    }
    count++;
    return new Object({ name: dataName, data: dataSource });
}
},
provide:{
    accumulationchart:[PieSeries, AccumulationDataLabel, AccumulationTooltip],
    treemap:[TreeMapTooltip]
}
})
</script>
