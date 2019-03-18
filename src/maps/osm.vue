<template>
<div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :centerPosition='centerPosition'>
    <e-layers>
        <e-layer :layerType='layerType' :animationDuration='animationDuration' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>
</div>
   <div style="float: right"> 
        <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
    </div>
    <br/>

    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/Headquarters_of_the_United_Nations" target="_blank">en.wikipedia.org</a>
    </div>   
</div>
<div id="action-description">
        <p>
            This sample visualizes the location of United Nations Headquarters in the OpenStreetMap with marker.
       </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render the OpenStreetMap. The location of United Nations Headquarters is denoted using marker. The EJ2 Dialog is displayed on the top of the marker and the zooming feature is enabled to zoom and pan the map for detailed analysis.
        </p>
       
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use a marker, inject the Marker module using the <code>Maps.Inject(Marker)</code> method and inject the zoom module using the <code>maps.Inject(Zoom)</code> method.
        </p>
       
    </div>
</div>
</template>
<style>
        #popuposm_dialog-content {
          display: none !important
        }
        #popuposm_title {
          font-size: 14px !important
        }
        .osmpopup {
          position:relative;
          background-color:white;
        }        
        .osmpopup:after {
            content:'';
            position: absolute;
            top: 170%;
            left: 50%;
            width: 0;
            height: 0;
            margin-left: -35px;
            border-top: solid 20px white;
            border-left: solid 20px transparent;
            border-right: solid 20px transparent;
        }
        #osmdialog .e-popup{
            min-width: 100px !important
        }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Bubble, Zoom, MapsTooltip, Marker, NavigationLine } from '@syncfusion/ej2-vue-maps';
import Template from './osm-temp.vue';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Headquarters of the United Nations',
            textStyle: {
                size: '16px'
            }
        },
        centerPosition: {
            latitude: 40.7209,
            longitude: -73.9680
        },
        layerType: 'OSM',
        zoomSettings: {
            zoomFactor: 10,
            enable: false
        },
        animationDuration: 0,
        markerSettings: [
                {
                    visible: true,
                    template: function () { return {template: Template}; },
                    dataSource: [{
                        name: 'Manhattan, New York, USA',
                        latitude: 40.7488758,
                        longitude: -73.9730091
                    }],
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name'
                    }
                }
        ]
    }
},
provide: {
    maps: [Zoom, Bubble, MapsTooltip, Marker, NavigationLine]
},
/*  custom code start */
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