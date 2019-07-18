<template>
<div>
<div class="control-section">
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :useGroupingSeparator='useGroupingSeparator' format='n'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerClusterSettings='markerClusterSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>
   
    <div style="float: right; margin-right: 10px;">Source:
           <a href="http://www.citymayors.com/statistics/largest-cities-area-125.html"
            target="_blank">www.citymayors.com</a>

         </div>
</div>
<div id="template" style="display:none">
    <div class="toolback">
                <div class="listing2">
                    <center>
                        ${city}                                            
                    </center>
                </div>
                <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">                    
                <div>
                    <span class="listing1">Rank : </span><span class="listing2">${Rank}</span>
                </div>
                <div>
                    <span class="listing1">Area : </span><span class="listing2">${area} sq kms</span>
                </div> 
    </div>
</div>
<div id="action-description">
        <p>
            This sample illustrates the world's top 50 cities by showing the markers in their locations and clustering the markers to avoid intersecting.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to display multiple markers in the same region without intersecting each other. If a marker intersects, 
          it will be clustered and the total number of markers will be displayed over the cluster. 
          When zooming in, the number of clusters will be decreased, and the individual marker will be displayed. 
          When zooming out, markers that intersect will again be clustered. You can use the "clusterSettings" property 
          in "layer" to enable marker clustering.
    
        </p>
        <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
        </p>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
        Maps component features are segregated into individual feature-wise modules. To use a marker and cluster, inject the Marker module using the Maps.Inject(Marker) method.
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
       width: 140px;
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
import { MapsPlugin, Marker, MapsTooltip, MapAjax, ILoadEventArgs, MapsTheme, Zoom } from '@syncfusion/ej2-vue-maps';
import { topPopulation } from './map-data/marker-location';
import { cluster } from './map-data/marker-cluster';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true
        },
        titleSettings: {
            text: 'Top 50 largest cities in the World',
            textStyle: {
                size: '16px'
            }
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: {
                    fill: '#C1DFF5'
        },
        markerClusterSettings: {
             allowClustering: true,
             shape: 'Image',
             height: 40,
             width: 40,
             labelStyle : { color: 'white'},
             imageUrl: 'src/maps/images/cluster.svg'
        },
        markerSettings: [
                    {
                        dataSource: cluster,
                        visible: true,
                        shape: 'Image',
                        imageUrl: 'src/maps/images/ballon.png',
                        height:20,
                        width:20,
                        animationDuration:0,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'area',
                            template:'#template'
                        }
                    },
        ]
    }
},
provide: {
    maps: [Marker, MapsTooltip, Zoom]
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
    