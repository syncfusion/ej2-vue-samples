<template>
<main><div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :urlTemplate= 'urlTemplate'></e-layer>
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
</div>
<section id="action-description" aria-label="Description of Maps sample">
        <p>
            This sample visualizes the location of Africa continent in the World map.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
            In this example, you can see how to render the geometric layers as sublayer on the OpenStreetMap. The outline of Africa continent is rendered using GeoJSON data on the top of the OpenStreetMap.
        </p>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use the zooming feature, inject the Zoom module using the <code>Maps.Inject(Zoom)</code> method.
        </p>
       
    </section>
</main>
</template>
<script>
import { MapsComponent, LayersDirective, LayerDirective, Bubble, Zoom, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { africa } from '../maps/map-data/africa';

export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective
},
data:function(){
    return{
        urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png',
        titleSettings: {
            text: 'Location of Africa continent in the World map',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: true
        },
        animationDuration: 0,
        shapeData: africa,
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    }
}
/* custom code end */
}
</script>