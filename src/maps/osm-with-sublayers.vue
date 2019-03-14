<template>
<div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :annotations='annotations'>
    <e-layers>
        <e-layer layerType='OSM'></e-layer>
        <e-layer type='Sublayer' :animationDuration='animationDuration' :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>
</div>
    <div style="float: right"> 
        <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
    </div>
    <br/>

    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://www.whatarethe7continents.com/biggest-largest-smallest-continents/" target="_blank">Seven Continents</a>
    </div>
</div>
<div id="action-description">
        <p>
            This sample visualizes the location of Africa continent in the World map.
       </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render the geometric layers as sublayer on the OpenStreetMap. The outline of Africa continent is rendered using GeoJSON data on the top of the OpenStreetMap.
       
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use the zooming feature, inject the Zoom module using the <code>Maps.Inject(Zoom)</code> method.
        </p>
       
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin,Bubble, Zoom, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Location of Africa continent in the World map',
            textStyle: {
                size: '16px'
            }
        },
        zoomSettings: {
            enable: true
        },
        annotations: [{
            content: '<div style="height:18px;width:170px;background:white;text-align:center">' +
                '<a href="https://www.openstreetmap.org/copyright"  target = "_blank" > © OpenStreetMap contributors </a></div > ',
            verticalAlignment: 'Far',
            zIndex: '1',
            x: '-40',
            y: '-20',
            horizontalAlignment: 'Far'
        }],
        animationDuration: 0,
        shapeData: new MapAjax('./src/maps/map-data/africa.json'),
        shapeSettings: {
                fill: '#5100a3',
                opacity: 0.4
        }
    }
},
provide: {
    maps: [Zoom, Bubble, MapsTooltip]
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