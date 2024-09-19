<template>
<main>
<div>
<div class="control-section">
<ejs-maps id='navigationLine' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :mapsArea='mapsArea' :centerPosition='centerPosition'>
    <template v-slot:altamiraTemplate="{}">
        <div id="marker1" style="font-size: 12px;color:white; font-family:Segoe UI; ">ALTAMIRA</div>
    </template>
    <template v-slot:houstonTemplate="{}">
        <div id="marker2" style="font-size: 12px;color:white; font-family:Segoe UI;">HOUSTON</div>
    </template>
    <template v-slot:panamaTemplate="{}">
        <div id="marker3" style="font-size: 12px;color:white; font-family:Segoe UI;">PANAMA CITY</div>
    </template>
    <template v-slot:tampaTemplate="{}">
        <div id="marker4" style="font-size: 12px;color:white; font-family:Segoe UI;">TAMPA</div>
    </template>
    <template v-slot:progresoTemplate="{}">
        <div id="marker5" style="font-size: 12px;color:white; font-family:Segoe UI;">PROGRESO</div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' :navigationLineSettings='navigationLineSettings' :shapeSettings='shapeSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' shape='Circle' fill='white' :width='markerSize' :height='markerSize' animationDuration='0' :dataSource='markerDataSource'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='altamiraDataSource' :template="'altamiraTemplate'" :offset='altamiraOffset'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='houstonDataSource' :template="'houstonTemplate'" :offset='houstonOffset'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='panamaDataSource' :template="'panamaTemplate'" :offset='panamaOffset'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='tampaDataSource' :template="'tampaTemplate'" :offset='tampaOffset'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='progresoDataSource' :template="'progresoTemplate'" :offset='progresoOffset'></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.lineaships.com/en/linea-peninsular/" target="_blank">www.lineaships.com</a>
    </div>
</div>
</div> 
<section id="action-description" aria-label="Description of Maps sample">
        <p>
            This sample illustrates the sea routes between various cities for shipping. 
       </p>
    </section>
<section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
          In this example, you can see how to render lines between two points in map. You can use <code>dashArray</code>, <code>width</code> and <code>color</code> properties to customize the appearance of the navigation lines. 
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
          Maps component features are segregated into individual feature-wise modules. To use navigation lines, you need to inject <code>NavigationLine</code> module using <code>Maps.Inject(NavigationLine)</code> method.
        </p>
       
    </section>
    </main>
</template>
// custom code start
<style scoped>
    #navigationLine_layerIndex_0_line_Group{
        stroke-dasharray: 10px 10px;
        stroke-linejoin: round; stroke-linecap: round;
        -webkit-animation: dash 15s linear infinite;
        animation: dash 15s linear infinite;
    }
    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
</style>
// custom code end
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Zoom, NavigationLine } from '@syncfusion/ej2-vue-maps';
import { penisular_location, penisular_marker } from '../maps/map-data/map-location';
import { worldMap } from '../maps/map-data/world-map';

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
        titleSettings: {
            text: 'Shipping sea route between various cities',
            textStyle: {
                size: '18px',
                animationDuration: 0,
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: false,
            mouseWheelZoom: false,
            zoomFactor: 13
        },
        mapsArea: {
            background: '#4863A0'
        },
        centerPosition: {
            latitude: 25.54244147012483,
            longitude: -89.62646484375
        },
        shapeData: worldMap,
        shapeSettings: {
                    fill: '#789071',
                },
        navigationLineSettings: penisular_location,
        markerDataSource: penisular_marker,
        markerSize: 10,
        altamiraDataSource: [{ latitude: 22.403410892712124, longitude: -97.8717041015625 }],
        altamiraOffset: { x: -35, y: 0 },
        houstonDataSource: [{ latitude: 29.756032197482973, longitude: -95.36270141601562 }],
        houstonOffset: { x: 0, y: -15 },
        panamaDataSource: [{ latitude: 30.180747605060766, longitude: -85.81283569335938 }],
        panamaOffset: { x: 0, y: -15 },
        tampaDataSource: [{ latitude: 27.9337540167772, longitude: -82.49908447265625 }],
        tampaOffset: { x: 0, y: -15 },
        progresoDataSource: [{ latitude: 21.282336521195344, longitude: -89.6649169921875 }],
        progresoOffset: { x: 0, y: 15 }
      }
  },
provide: {
    maps: [Zoom, NavigationLine,Marker]
},
/* custom code start */
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    }
}
/* custom code end */
}
</script>
