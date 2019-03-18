<template>
 <div>
<div class="control-section">
<ejs-maps id='navigationLine' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :mapsArea='mapsArea' :centerPosition='centerPosition'>
    <e-layers>
        <e-layer :shapeData='shapeData' :navigationLineSettings='navigationLineSettings' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.lineaships.com/en/linea-peninsular/" target="_blank">www.lineaships.com</a>
    </div>
</div>
<div id="action-description">
        <p>
            This sample illustrates the sea routes between various cities for shipping. 
       </p>
    </div>
<div id="description">
        <p>
          In this example, you can see how to render lines between two points in map. You can use <code>dashArray</code>, <code>width</code> and <code>color</code> properties to customize the appearance of the navigation lines. 
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
          Maps component features are segregated into individual feature-wise modules. To use navigation lines, you need to inject <code>NavigationLine</code> module using <code>Maps.Inject(NavigationLine)</code> method.
        </p>
       
    </div>
</div> 
</template>
// custom code start
<style>
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
import Vue from 'vue';
import { MapsPlugin, Marker, Zoom, NavigationLine, MapAjax } from '@syncfusion/ej2-vue-maps';
import { penisular_location, penisular_marker } from './map-data/map-location';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        titleSettings: {
            text: 'Shipping sea route between various cities',
            textStyle: {
                size: '18px',
                animationDuration: 0,
            }
        },
        zoomSettings: {
            enable: false,
            mouseWheelZoom: false,
            toolbars: [],
            zoomFactor: 13
        },
        mapsArea: {
            background: '#4863A0'
        },
        centerPosition: {
            latitude: 25.54244147012483,
            longitude: -89.62646484375
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: {
                    fill: '#789071',
                },
        navigationLineSettings: penisular_location,
        markerSettings: [
                    {
                        visible: true,
                        shape: 'Circle',
                        fill: 'white',
                        width: 10,
                        height: 10,
                        animationDuration: 0,
                        dataSource: penisular_marker
                    },
                    {
                        visible: true,
                        template: '<div id="marker1" style="font-size: 12px;color:white">ALTAMIRA' +
                            '</div>',
                        dataSource: [
                            { latitude: 22.403410892712124, longitude: -97.8717041015625, }
                        ],
                        animationDuration: 0,
                        offset: {
                            x: -35,
                            y: 0
                        }
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" style="font-size: 12px;color:white">HOUSTON' +
                            '</div>',
                        dataSource: [
                            { latitude: 29.756032197482973, longitude: -95.36270141601562 }
                        ],
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: -15
                        }
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" style="font-size: 12px;color:white">PANAMA CITY' +
                            '</div>',
                        dataSource: [
                            { latitude: 30.180747605060766, longitude: -85.81283569335938 }
                        ],
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: -5
                        }
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" style="font-size: 12px;color:white">TAMPA' +
                            '</div>',
                        dataSource: [
                            { latitude: 27.9337540167772, longitude: -82.49908447265625 }
                        ],
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: -15
                        }
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" style="font-size: 12px;color:white">PROGRESO' +
                            '</div>',
                        dataSource: [
                            { latitude: 21.282336521195344, longitude: -89.6649169921875 }
                        ],
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 15
                        }
                    }
                ]
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
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
}
/* custom code end */
})
</script>
