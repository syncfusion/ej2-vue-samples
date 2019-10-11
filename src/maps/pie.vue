<template>
<div>
    <div class="control-section">
        <ejs-maps id='mapContainer' :loaded='loaded' :load='load' :resize='resize' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
            <e-layers>
                <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
            </e-layers>
        </ejs-maps>

        <div style="float: right; margin-right: 10px;">Source:
            <a href="http://www.nationmaster.com/country-info/stats/People/Age-structure/55--64-years" target="_blank">www.nationmaster.com</a>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample visualizes the placing of pie charts on the maps. Pie chart is rendered with the age group detais of top 6 largest countries.
        </p>
    </div>
    <div id="description">
        <p>
            <div id="description">
                <p>
                    In this example, you can see how to render the pie chart as marker in map. Any custom HTML elements can be used as a marker.

                </p>
                <br/>
                <p style="font-weight: 500">Injecting Module</p>
                <p>
                    Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject <code>Marker</code> module using <code>Maps.Inject(Marker)</code> method.
                </p>
            </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Marker, Legend, MapAjax } from '@syncfusion/ej2-vue-maps';
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip,AccumulationChart } from '@syncfusion/ej2-vue-charts';
Vue.use(MapsPlugin);
Vue.use(AccumulationChartPlugin);
AccumulationChart.Inject(AccumulationTooltip);
let chartCollection = [];
let count = 0;
export default Vue.extend({
    data: function () { 
        return {
            titleSettings: {
                text: 'Top 6 largest countries age group details',
                textStyle: {
                    size: '16px'
                }
            },
            legendSettings: {
                visible: true,
                position: 'Bottom'
            },
            zoomSettings: {
                enable: false
            },
            shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
            shapeSettings: {
                fill: '#E5E5E5',
                colorMapping: [{
                        from: 0,
                        to: 4,
                        color: '#634D6F',
                        label: '0-14 years',
                    },
                    {
                        from: 5,
                        to: 14,
                        color: '#B34D6D',
                        label: '15-24 years'
                    },
                    {
                        from: 15,
                        to: 59,
                        color: '#557C5C',
                        label: '25-54 years'
                    },
                    {
                        from: 60,
                        to: 100,
                        color: '#5E55E2',
                        label: '55-64 years'
                    }
                ]
            },
             markerSettings: [
                    {
                        visible: true,
                        template: '<div id="pieChart1" style="height:70px;width:70px;"></div>',
                        dataSource: [
                            { 'latitude': 61.938950426660604, 'longitude': 97.03125 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="pieChart2" style="height:70px;width:70px;">',
                        dataSource: [
                            { 'latitude': 57.70414723434193, 'longitude': -114.08203125 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="pieChart3" style="top:10px;left:10px;height:70px;width:70px;"></div>',
                        dataSource: [
                            { 'latitude': 39.90973623453719, 'longitude': -103.0078125 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="pieChart4" style="height:70px;width:70px;"></div>',
                        dataSource: [
                            { 'latitude': 35.746512259918504, 'longitude': 102.216796875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="pieChart5" style="height:70px;width:70px;"></div>',
                        dataSource: [
                            { 'latitude': -8.667918002363107, 'longitude': -52.55859375 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="pieChart6" style="height:70px;width:70px;"></div>',
                        dataSource: [
                            { 'latitude': -23.725011735951796, 'longitude': 132.978515625 }
                        ],
                        animationDuration: 0
                    }
                ]
        }
    },
    provide: {
        maps: [Legend, Marker],
        accumulation: [PieSeries, AccumulationDataLabel, AccumulationTooltip ]   
  },
    methods: {
        /* custom code start */
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.maps.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        /* custom code end */
    loaded:function(args){
                let markers = document.getElementById(args.maps.element.id + '_LayerIndex_0_Markers_Template_Group');
            if (markers) {
                for (let i = 0; i < markers.childElementCount; i++) {
                    this.AccumulationChartRender((markers.childNodes[i].childNodes[0]).id);
                }
                count = 0;
            }
    },
    resize:function(args){
              for (let i = 0; i < chartCollection.length; i++) {
                chartCollection[i].destroy();
            }
    },
    AccumulationChartRender:function(id){
    let chartData = this.getData();
    let dataSource = chartData['data'];
    let name = chartData['name'];
    let chart = new AccumulationChart({
        background: 'transparent',
        width: '70',
        height: '70',
        tooltip: {
            enable: true,
            format: '${point.x} : ${point.y}%'
        },
        legendSettings: {visible: false},
        series: [
            {
                explode: true,
                explodeIndex: 0,
                explodeOffset: '20%',
                name: name,
                palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                dataSource: dataSource,
                dataLabel: {
                    visible: true
                },
                type: 'Pie',
                xName: 'x',
                yName: 'y'
            }
        ]
    });
    chart.appendTo('#' + id);
    chartCollection.push(chart);
},
 getData:function(){
    let dataSource;
    let dataName;
    if (count === 0) {
        dataSource = [
            { 'x': '0-14 years', y: 16 }, { 'x': '15-24 years', y: 11.5 },
            { 'x': '25-54 years', y: 45.9 }, { 'x': '55-64 years', y: 13.5 },
        ];
        dataName = 'Russia';
    } else if (count === 1) {
        dataSource = [
            { 'x': '0-14 years', y: 15.5 }, { 'x': '15-24 years', y: 12.9 },
            { 'x': '25-54 years', y: 41.4 }, { 'x': '55-64 years', y: 13.3 },
        ];
        dataName = 'Canada';
    } else if (count === 2) {
        dataSource = [
            { 'x': '0-14 years', y: 20 }, { 'x': '15-24 years', y: 13.7 },
            { 'x': '25-54 years', y: 40.2 }, { 'x': '55-64 years', y: 12.3 },
        ];
        dataName = 'USA';
    } else if (count === 3) {
        dataSource = [
            { 'x': '0-14 years', y: 17.2 }, { 'x': '15-24 years', y: 15.4 },
            { 'x': '25-54 years', y: 46.9 }, { 'x': '55-64 years', y: 11.3 },
        ];
        dataName = 'China';
    } else if (count === 4) {
        dataSource = [
            { 'x': '0-14 years', y: 24.2 }, { 'x': '15-24 years', y: 16.7 },
            { 'x': '25-54 years', y: 43.6 }, { 'x': '55-64 years', y: 8.2 },
        ];
        dataName = 'Brazil';
    } else if (count === 5) {
        dataSource = [
            { 'x': '0-14 years', y: 18.1 }, { 'x': '15-24 years', y: 13.4 },
            { 'x': '25-54 years', y: 42 }, { 'x': '55-64 years', y: 11.8 },
        ];
        dataName = 'Australia';
    }
    count++;
    return new Object({ name: dataName, data: dataSource });
}   
    }
})
</script>
