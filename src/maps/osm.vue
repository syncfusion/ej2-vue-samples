<template>
<main><div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :centerPosition='centerPosition'>
    <template v-slot:markerTemplate="{}">
        <div><img alt="Balloon image" src="src/maps/images/ballon.png" style="height:30px;width:20px;"/></div>
    </template>
    <e-layers>
        <e-layer :urlTemplate= 'urlTemplate' :animationDuration='animationDuration'>
            <e-markerSettings>
                <e-markerSetting visible='true' :dataSource='markerDataSource' :tooltipSettings='markerTooltipSettings' :template="'markerTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
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
</div>
<section id="action-description" aria-label="Description of Maps sample">
        <p>
            This sample visualizes the location of United Nations Headquarters in the OpenStreetMap with marker.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
            In this example, you can see how to render the OpenStreetMap. The location of United Nations Headquarters is denoted using marker. The EJ2 Dialog is displayed on the top of the marker and the zooming feature is enabled to zoom and pan the map for detailed analysis.
        </p>
       
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use a marker, inject the Marker module using the <code>Maps.Inject(Marker)</code> method and inject the zoom module using the <code>maps.Inject(Zoom)</code> method.
        </p>
       
    </section>
</main>
</template>
<style scoped>
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
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Bubble, Zoom, MapsTooltip, Marker, NavigationLine } from '@syncfusion/ej2-vue-maps';

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
            text: 'Headquarters of the United Nations',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        centerPosition: {
            latitude: 40.7209,
            longitude: -73.9680
        },
        urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png',
        zoomSettings: {
            zoomFactor: 10,
            enable: false
        },
        animationDuration: 0,
        markerDataSource: [{
            name: 'Manhattan, New York, USA',
            latitude: 40.7488758,
            longitude: -73.9730091
        }],
        markerTooltipSettings: {
            visible: true,
            valuePath: 'name',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        }
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    }
}
/* custom code end */
}
</script>
