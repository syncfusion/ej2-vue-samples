<template>
<div>
<div class="control-section">
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :useGroupingSeparator='useGroupingSeparator' format='n'>
    <e-layers>
        <e-layer :shapeData='shapeData' :dataSource='dataSource' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>    
    <div style="float: right; margin-right: 10px;">Source:
            <a href="http://www.citymayors.com/statistics/largest-cities-population-125.html" target="_blank">www.citymayors.com</a>
         </div>
</div>
<div id="template" style="display:none">
        <div class="toolback">
                    <div class="listing2">
                        <center>
                            ${name}                                            
                        </center>
                    </div>
                    <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">                    
                    <div>
                        <span class="listing1">Country : </span><span class="listing2">${Country}</span>
                    </div>
                    <div>
                        <span class="listing1">Population : </span><span class="listing2">${population}</span>
                    </div> 
        </div>
        
    </div>
<div id="action-description">
        <p>
            This sample visualizes the top 25 populated cities in the world by displaying the markers in their locations.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to render the markers in a map. Markers are used to indicate or mark a particular location on the map with desired symbols. 
    
        </p>
        <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
        </p>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
        Maps component features are segregated into individual feature-wise modules. To use a marker, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
        </p>
       
    </div>

</div>
</template>
<style>
    .toolback {
       border-radius: 4px;
       border: 1px #abb9c6;
       opacity: 90%;
       background: rgba(53, 63, 76, 0.90);
       box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);
       padding-bottom: 10px;
       padding-top: 10px;
       padding-left: 10px;
       padding-right: 10px;
       width: 165px;
   }
   .listing1 {
        font-size:13px;
        color:#cccccc
   }
   .listing2 {
        font-size:13px;
        color:#ffffff;
        font-weight: 500;
   }
    </style>
    <script>
import Vue from 'vue';
import { MapsPlugin, Marker, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { topPopulation } from './map-data/marker-location';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        useGroupingSeparator: true, 
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: 'Top 25 populated cities in the world',
            textStyle: {
                size: '16px'
            }
        },
        shapeData: new MapAjax(location.origin + location.pathname + 'src/maps/map-data/world-map.json'),
        dataSource: topPopulation,
        shapeSettings: {
                    fill: '#C3E6ED'
        },
        markerSettings: [
                    {
                        dataSource: topPopulation,
                        visible: true,
                        animationDuration: 0,
                        shape: 'Circle',
                        fill: 'white',
                        width: 3,
                        border: { width: 2, color: '#285255' },
                        tooltipSettings: {
                            template: '#template',
                            visible: true,
                            valuePath: 'population',
                        }
                    },
        ]
    }
},
provide: {
    maps: [Marker, MapsTooltip]
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
    