<template>
<div>
<div id="button" style="font-size:14px;margin-left: 10px;margin-top: 20px;display:none;left:50px;top:50px;">
    <a id="category" style="visibility:hidden; display:inline-block" v-on:click="clickCategory">
        World Map
    </a>
    <p style="visibility:hidden; display:inline-block" id="symbol">&nbsp;&gt;&gt;&nbsp;</p>
    <p id="text" style="display:inline-block;"></p>
</div>
<div class="control-section">
<ejs-maps ref="maps" id='mapdrilldown' :shapeSelected='shapeSelected' :loaded='loaded' :load='load' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :layerType='layerType' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :markerSettings='markerSettings' :tooltipSettings='tooltipSettings'></e-layer>
        <e-layer :shapeData='shapeData1' :layerType='layerType1' :highlightSettings='highlightSettings1' :shapeSettings='shapeSettings1' :tooltipSettings='tooltipSettings1'></e-layer>
        <e-layer :shapeData='shapeData2' :layerType='layerType2' :highlightSettings='highlightSettings2' :shapeSettings='shapeSettings2' :tooltipSettings='tooltipSettings2'></e-layer>
        <e-layer :shapeData='shapeData3' :layerType='layerType3' :highlightSettings='highlightSettings3' :shapeSettings='shapeSettings3' :tooltipSettings='tooltipSettings3'></e-layer>
        <e-layer :shapeData='shapeData4' :layerType='layerType4' :highlightSettings='highlightSettings4' :shapeSettings='shapeSettings4' :tooltipSettings='tooltipSettings4'></e-layer>
        <e-layer :shapeData='shapeData5' :layerType='layerType5' :highlightSettings='highlightSettings5' :shapeSettings='shapeSettings5' :tooltipSettings='tooltipSettings5'></e-layer>
        <e-layer :shapeData='shapeData6' :layerType='layerType6' :highlightSettings='highlightSettings6' :shapeSettings='shapeSettings6' :tooltipSettings='tooltipSettings6'></e-layer>
    </e-layers>
</ejs-maps>    
    <div align="center">
        <p>
            <i>
                <div align="center">
                    <p id="content" style="font-size: 16px;color:grey">Click on a shape to drill</p>
                </div>
            </i>
        </p>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates drill down with all the continents in the initial view. By clicking a continent, you can view all
        the countries available in that continent.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to display an another layer by clicking a shape in previous layer.
    </p>
</div>
</div>
</template>
<style>
    .backLabel:hover {
        cursor: pointer;
    }

    .markerTemplate {
        height: 30px;
        width: 30px;
        display: block;
        margin: auto;
    }

    #category:hover {
        cursor: pointer;
    }

    .markerTemplate {
        font-size: 12px;
        color: white;
        text-shadow: 0px 1px 1px black;
        font-weight: 500
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Highlight, MapsTooltip, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';
import { MouseEventArgs } from '@syncfusion/ej2-base';
Vue.use(MapsPlugin);
let touchmove = false;
export default Vue.extend({
data:function(){
    return{
        zoomSettings: {
            enable: false
        },
        layerType: 'Geometry',
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource: new MapAjax('./src/maps/map-data/default-datasource.json'),
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: {
                    colorValuePath: 'drillColor'
        },
        tooltipSettings: {
                    visible: true,
                    valuePath: 'continent'
        },
        markerSettings: [
                    {
                        visible: true,
                        tooltipSettings: {
                            visible: true
                        },
                        template: '<div id="marker1" class="markerTemplate">Asia' +
                            '</div>',
                        dataSource: [
                            { latitude: 50.32087157990324, longitude: 90.015625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" class="markerTemplate">Australia' +
                            '</div>',
                        dataSource: [
                            { latitude: -28.88583769986199, longitude: 130.296875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" class="markerTemplate">Africa' +
                            '</div>',
                        dataSource: [
                            { latitude: 10.97274101999902, longitude: 16.390625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" class="markerTemplate">Europe' +
                            '</div>',
                        dataSource: [
                            { latitude: 47.95121990866204, longitude: 18.468749999999998 }
                        ],
                        animationDuration: 0,
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" class="markerTemplate" style="width:50px">North America' +
                            '</div>',
                        dataSource: [
                            { latitude: 59.88893689676585, longitude: -109.3359375 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker6" class="markerTemplate" style="width:50px">South America' +
                            '</div>',
                        dataSource: [
                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                        ],
                        animationDuration: 0
                    },
            ],
            layerType1: 'Geometry',
            shapeData1: new MapAjax('./src/maps/map-data/africa.json'),
            shapeSettings1: {
                    fill: '#80306A'
            },
            highlightSettings1: {
                    enable: true,
                    fill: '#80306A'
            },
            tooltipSettings1: {
                    visible: true,
                    valuePath: 'name'
            },
            layerType2: 'Geometry',
            shapeData2: new MapAjax('./src/maps/map-data/europe.json'),
            shapeSettings2: {
                    fill: '#622D6C'
            },
            highlightSettings2: {
                    enable: true,
                    fill: '#622D6C'
            },
            tooltipSettings2: {
                    visible: true,
                    valuePath: 'name'
            },
            layerType3: 'Geometry',
            shapeData3: new MapAjax('./src/maps/map-data/asia.json'),
            shapeSettings3: {
                    fill: '#462A6D'
            },
            highlightSettings3: {
                    enable: true,
                    fill: '#462A6D'
            },
            tooltipSettings3: {
                    visible: true,
                    valuePath: 'name'
            },
            layerType4: 'Geometry',
            shapeData4: new MapAjax('./src/maps/map-data/north-america.json'),
            shapeSettings4: {
                    fill: '#C13664'
            },
            highlightSettings4: {
                    enable: true,
                    fill: '#C13664'
            },
            tooltipSettings4: {
                    visible: true,
                    valuePath: 'name'
            },
            layerType5: 'Geometry',
            shapeData5: new MapAjax('./src/maps/map-data/south-america.json'),
            shapeSettings5: {
                    fill: '#9C3367'
            },
            highlightSettings5: {
                    enable: true,
                    fill: '#9C3367'
            },
            tooltipSettings5: {
                    visible: true,
                    valuePath: 'name'
            },
            layerType6: 'Geometry',
            shapeData6: new MapAjax('./src/maps/map-data/oceania.json'),
            shapeSettings6: {
                    fill: '#2A2870'
                },
            highlightSettings6: {
                    enable: true,
                    fill: '#2A2870'
                },
            tooltipSettings6: {
                    visible: true,
                    valuePath: 'name'
            }
    }
},
provide: {
    maps: [Highlight, MapsTooltip, Marker]
},
methods:{
    /* custom code start */
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    loaded: function (args) {
        let mapsSVG = document.getElementById('mapdrilldown_svg');
        mapsSVG.addEventListener('touchmove', (e) => {
            touchmove = true; }, false);
    },
    shapeSelected:function(args){   
            let shape = (args.shapeData).continent;
            if (this.$refs.maps.ej2Instances.baseLayerIndex === 0 && !touchmove) {
                if (shape === 'Africa') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 1;
                    this.$refs.maps.ej2Instances.refresh();
                } else if (shape === 'Europe') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 2;
                    this.$refs.maps.ej2Instances.refresh();
                } else if (shape === 'Asia') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 3;
                    this.$refs.maps.ej2Instances.refresh();
                } else if (shape === 'North America') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 4;
                    this.$refs.maps.ej2Instances.refresh();
                } else if (shape === 'South America') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 5;
                    this.$refs.maps.ej2Instances.refresh();
                } else if (shape === 'Australia') {
                    this.$refs.maps.ej2Instances.baseLayerIndex = 6;
                    this.$refs.maps.ej2Instances.refresh();
                }
                let button = document.getElementById('button');
                button.style.display = 'block';
                document.getElementById('content').innerHTML = '';
                (document.getElementById('category')).style.visibility = 'visible';
                (document.getElementById('text')).innerHTML = shape;
                (document.getElementById('symbol')).style.visibility = 'visible';
            }
            touchmove = false;
    },
    clickCategory:function(args){      
        this.$refs.maps.ej2Instances.baseLayerIndex = 0;
        this.$refs.maps.ej2Instances.refresh();
        let button = document.getElementById('button');
        button.style.display = 'none';
        document.getElementById('content').innerHTML = 'Click on a shape to drill';
        (document.getElementById('category')).style.visibility = 'hidden';
        (document.getElementById('text')).innerHTML = '';
        (document.getElementById('symbol')).style.visibility = 'hidden';
    }
}
})
</script>
