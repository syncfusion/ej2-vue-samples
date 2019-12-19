<template>
<div>
<div class="control-section">
<ejs-maps id='markertemp' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapeDataPath='shapeDataPath' :tooltipSettings='tooltipSettings' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>
      
    <div style="float: right; margin-right: 10px;">Source:
        <a href="http://www.bom.gov.au/calendar/annual/climate.shtml" target="_blank">www.bom.gov.au</a>
     </div>
</div>
<div id="action-description">
        <p>
            This sample indicates the temperature of various cities of Australia in marker templates.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to place a template as a marker in the map. Any custom HTML elements can be used as a marker. You can use the <code>palette</code> property in the <code>shapeSettings</code> to apply desired fill colors for the shapes.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use a marker template, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
        </p>
       
    </div>
</div>
</template>
<style>
    .markerTemplate {
        height:30px;
        width:30px;
        display:block;
        margin: auto;
        font-size: 14px;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: ' Australia cities weather detail',
            textStyle: {
                size: '16px'
            }
        },
        shapeData: new MapAjax('./src/maps/map-data/australia.json'),
        shapeDataPath: 'STATE_NAME',
        markerSettings: [
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Weather clear" src="src/maps/images/weather-clear.png"/>' +
                            '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Perth', latitude: -31.950527, longitude: 115.860457, Temperature: 31.6 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Weather cloud" src="src/maps/images/weather-clouds.png"/>' +
                            '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Adelaide', latitude: -34.928499, longitude: 138.600746, Temperature: 28.5 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Weather clear" src="src/maps/images/weather-clear.png"/>' +
                            '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Townsville', latitude: -19.2589635, longitude: 146.8169483, Temperature: 31.3 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Weather rain" src="src/maps/images/weather-rain.png"/>' +
                            '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Sydney', latitude: -33.868820, longitude: 151.209296, Temperature: 26.4 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Weather clear" src="src/maps/images/weather-clear.png"/>' +
                            '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Alice Springs', latitude: -23.698042, longitude: 133.880747, Temperature: 36.4 },
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div id="marker1"><img class="markerTemplate" alt="Wether cloud" src="src/maps/images/weather-clouds.png"/>'
                            + '<p>{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Brisbane', latitude: -27.469771, longitude: 153.025124, Temperature: 29.1 }
                        ]
                    }
            ],
            tooltipSettings: {
                    visible: false
            },
            shapeSettings: {
                    autofill: true,
                    palette: ['#E2B247', '#88DB46', '#42C4E2', '#C08AF8', '#52BACC', '#F4CE2F', '#6986ED'],
                    border: {
                        width: 0.5,
                        color: 'white'
                    },
            }
    }
},
provide: {
    maps: [Marker]
},
/* custom code start */
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    } 
}
/* custom code end */
})
</script>

