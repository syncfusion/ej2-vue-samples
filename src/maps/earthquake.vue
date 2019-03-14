<template>
<div>
<div class="control-section">
<ejs-maps id='maps' align="center" :load='load' :centerPosition='centerPosition' :mapsArea='mapsArea' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :animationDuration='animationDuration' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataLabelSettings='dataLabelSettings' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
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
<script>
import Vue from 'vue';
import { MapsPlugin,Zoom, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';
import Template from './earthquake-temp.vue';
Vue.use(MapsPlugin);
export default Vue.extend({
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
                size: '18px'
            }
        },
        animationDuration: 1000,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/asia.json'),
        markerSettings: [{
                    visible: true,
                    height: 100,
                    width: 100,
                    template: function () { return {template: Template}; },
                    animationDuration: 0,
                    dataSource: [{
                        latitude: 1.625758360412755, longitude: 98.5693359375
                    }]
        }],
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
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }  
}
/* custom code end */
})
</script>
