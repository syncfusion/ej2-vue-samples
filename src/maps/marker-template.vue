<template>
<main><div id="maps-marker-temp-sample">
<div class="control-section">
<ejs-maps id='markertemp' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <template v-slot:templatePerth="{}">
        <div><img class="markerTemplate" alt="Marker weather clear image" src="src/maps/images/weather-clear.png"/><p>Perth:31.6°C</p></div>
    </template>
    <template v-slot:templateAdelaide="{}">
        <div><img class="markerTemplate" alt="Marker weather cloud image" src="src/maps/images/weather-clouds.png"/><p>Adelaide:28.5°C</p></div>
    </template>
    <template v-slot:templateTownsville="{}">
        <div><img class="markerTemplate" alt="Marker weather clear image" src="src/maps/images/weather-clear.png"/><p>Townsville:31.3°C</p></div>
    </template>
    <template v-slot:templateSydney="{}">
        <div><img class="markerTemplate" alt="Marker weather rain image" src="src/maps/images/weather-rain.png"/><p>Sydney:26.4°C</p></div>
    </template>
    <template v-slot:templateAlice="{}">
        <div><img class="markerTemplate" alt="Marker weather clear image" src="src/maps/images/weather-clear.png"/><p>Alice Springs:36.4°C</p></div>
    </template>
    <template v-slot:templateBrisbane="{}">
        <div><img class="markerTemplate" alt="Marker weather cloud image" src="src/maps/images/weather-clouds.png"/><p>Brisbane:29.1°C</p></div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' shapePropertyPath='STATE_NAME' :shapeDataPath='shapeDataPath' :tooltipSettings='tooltipSettings' :shapeSettings='shapeSettings'>
            <e-markerSettings>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourcePerth' :template="'templatePerth'"></e-markerSetting>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourceAdelaide' :template="'templateAdelaide'"></e-markerSetting>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourceTownsville' :template="'templateTownsville'"></e-markerSetting>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourceSydney' :template="'templateSydney'"></e-markerSetting>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourceAliceSprings' :template="'templateAlice'"></e-markerSetting>
                <e-markerSetting height='30' width='30' visible='true' :dataSource='dataSourceBrisbane' :template="'templateBrisbane'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

</div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
        <p>
            This sample indicates the temperature of various cities of Australia in marker templates.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
          In this example, you can see how to place a template as a marker in the map. Any custom HTML elements can be used as a marker. You can use the <code>palette</code> property in the <code>shapeSettings</code> to apply desired fill colors for the shapes.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use a marker template, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
        </p>
       
    </section>
</main>
</template>
<style>
    #maps-marker-temp-sample .markerTemplate {
        height:30px;
        width:30px;
        display:block;
        margin: auto;
        font-size: 14px;
        font-family: 'Segoe UI';
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker } from '@syncfusion/ej2-vue-maps';
import { australia } from '../maps/map-data/australia';

export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'e-markerSettings': MarkersDirective,
    'e-markerSetting': MarkerDirective
},
data:function(){
    return{
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: ' Australia cities weather detail',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        shapeData: australia,
        shapeDataPath: 'STATE_NAME',
        dataSourcePerth: [{ Name: 'Perth', latitude: -31.950527, longitude: 115.860457, Temperature: 31.6 }],
        dataSourceAdelaide: [{ Name: 'Adelaide', latitude: -34.928499, longitude: 138.600746, Temperature: 28.5 }],
        dataSourceTownsville: [{ Name: 'Townsville', latitude: -19.2589635, longitude: 146.8169483, Temperature: 31.3 }],
        dataSourceSydney: [{ Name: 'Sydney', latitude: -33.868820, longitude: 151.209296, Temperature: 26.4 }],
        dataSourceAliceSprings: [{ Name: 'Alice Springs', latitude: -23.698042, longitude: 133.880747, Temperature: 36.4 }],
        dataSourceBrisbane: [{ Name: 'Brisbane', latitude: -27.469771, longitude: 153.025124, Temperature: 29.1 }],
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    } 
}
/* custom code end */
}
</script>

