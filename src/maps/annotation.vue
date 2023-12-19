<template>
<div>
<div class="control-section">
<ejs-maps id='maps' :load='load' :annotations='annotations' :zoomSettings='zoomSettings'>
    <template v-slot:markerTemplate="{}">
        <h3 style="color:white; font-family: Segoe UI;">Africa</h3>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :shapeSettings='shapeSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='markerDataSource' :template="'markerTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/Africa" target="_blank">en.wikipedia.org</a>
    </div>
</div>
<svg height="150" width="400">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#C5494B;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4C134F;stop-opacity:1" />
        </linearGradient>
    </defs>
</svg>
<div id="action-description">
    <p>
        This sample depicts the facts about Africa in an annotation. Africa shape is filled with gradient color.
   </p>
</div>
<div id="description">
        <p>
          In this example, you can see how to place a desired HTML element at desired location in the maps. Any number of annotation can be placed on the maps. In this sample, the gradient fill color has been applied for the shape.
        </p>
	    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
         Maps component features are segregated into individual feature-wise modules. To use an annotation, inject the <code>Annotations</code> module using the <code>Maps.Inject(Annotations)</code> method.
        </p>
</div>
</div>
</template>
<script>
import { createApp } from 'vue';
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Annotations, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';
import Template1 from './annotation-temp1.vue';
import Template2 from './annotation-temp2.vue';

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
        annotations: [
            {
                content: function () { return { template: createApp({}).component('template1',Template1) }; },
                x: '0%', y: '70%'
            }, {
                content: function () { return { template: createApp({}).component('template2',Template2) }; },
                x: '80%', y: '5%'
            }
        ],
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/africa-continent.json'),
        shapeSettings: {
            fill: 'url(#grad1)'
        },
        markerDataSource: [{ name: 'Africa', latitude: 13.97274101999902, longitude: 20.390625 }]
      }
  },
provide: {
    maps: [Annotations, Marker]
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
