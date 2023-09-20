<template>
<div>
<div class="control-section">
<ejs-maps id='maps' align="center" :load='load' :centerPosition='centerPosition' :mapsArea='mapsArea' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <template v-slot:markerTemplate="{}">
        <div id="template">
        <div class="pulse-container">
            <div class="pulse-box">
                <div class="pulse-css"></div>
            </div>                   
        </div>
    </div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' :animationDuration='animationDuration' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataLabelSettings='dataLabelSettings' :shapeSettings='shapeSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' height='100' width='100' animationDuration='0' :dataSource='markerDataSource' :template="'markerTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/2009_Sumatra_earthquakes" target="_blank">en.wikipedia.org</a>
    </div>
</div>
<div id="action-description">
        <p>
            This sample demonstrates the earth quack occurred in Sumatra, Indonesia in the year 2009.
       </p>
    </div>
    <div id="description">
        <p>
           In this example, you can see how to render a custom HTML element as marker and place it on a specific location.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject <code>Marker</code> module using <code>Maps.Inject(Marker)</code> method.
        </p>
        
    </div>
</div>
</template>
<style scoped>
    .pulse-css {
    width: 20px;
    height: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background:#E94430;
    position: relative;
    }
    .pulse-css:before, .pulse-css:after {
    content: '';
    width: 20px;
    height: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #E94430;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: center center;
    animation: pulse-me 3s linear infinite;
    }
    .pulse-css:after {
    animation-delay: 2s;
    }
    @keyframes pulse-me {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    70% {
        opacity: 0.1;
    }
    100% {
        transform: scale(5);
        opacity: 0;
    }
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Zoom, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';

export default {
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'e-markerSettings': MarkersDirective,
    'e-markerSetting': MarkerDirective
  },
  data: function(){
      return{
        centerPosition: {
            latitude: 1.5053645409602877,
            longitude: 105.14038085937499
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 7,
            mouseWheelZoom: false,
            toolbars: []
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: '7.6 Magnitude earthquake strikes Sumatra - 2009',
            textStyle: {
                size: '18px',
                fontFamily: 'Segoe UI'
            }
        },
        animationDuration: 1000,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/asia.json'),
        markerDataSource: [{ latitude: 1.625758360412755, longitude: 98.5693359375 }],
        shapeSettings: {
                    fill: '#FFFDCF',
                    border: {
                        color: '#3497C3 ',
                        width: 0.5
                    }
        },
        dataLabelSettings: {
                    visible: true,
                    labelPath: 'name',
                    smartLabelMode: 'Hide'
        }
      }
  },
provide: {
    maps: [Zoom, Marker]
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
