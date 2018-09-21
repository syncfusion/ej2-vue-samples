<template>
<div>
<div class="control-section">
<ejs-maps id='maps' :load='load' :annotations='annotations' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
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
<div id="maps-annotation" style="display: none;">
    <div id="annotation">
        <div>
            <p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p>
        </div>
        <hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD">
        <div>
            <ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400">
                <li>Africa is the second largest and second most populated continent in the world.</li>
                <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.</li>
                <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li>
            </ul>
        </div>
    </div>
</div>
<div id="compass-maps" style="display: none;">
    <img src="src/maps/images/compass.svg" height="75px" width="75px"/>
</div>
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
<style>
    #annotation {
        color: #DDDDDD;
		font-size: 12px;
		font-family: Roboto;
        background: #3E464C;
        margin: 20px;
        padding: 10px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        width: 300px;
        -moz-box-shadow: 0px 2px 5px #666;
        -webkit-box-shadow: 0px 2px 5px #666;
        box-shadow: 0px 2px 5px #666;
    }
    .country-label {
        color: white;
        font-size: 25px;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Annotations, Marker, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        zoomSettings: {
            enable: false
        },
        annotations: [
            {
                content: '#maps-annotation',
                x: '0%', y: '70%'
            }, {
                content: '#compass-maps',
                x: '80%', y: '5%'
            }
        ],
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        shapeData: new MapAjax(location.origin + location.pathname + 'src/maps/map-data/africa-continent.json'),
        shapeSettings: {
                    fill: 'url(#grad1)'
                },
        markerSettings: [
                    {
                        visible: true,
                        template: '<h3 style="color:white">{{:name}}</h3>',
                        animationDuration: 1,
                        dataSource: [{
                            name: 'Africa', latitude: 13.97274101999902, longitude: 20.390625
                }]
            }
        ]
      }
  },
provide: {
    maps: [Annotations, Marker]
},
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
}
})
</script>
