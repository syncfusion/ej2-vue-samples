<template>
<main>
<div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings' useGroupingSeparator='true'
            format='n'>
    <e-layers>
        <e-layer :urlTemplate= 'urlTemplate'>
            <e-markerSettings>
                <e-markerSetting visible='true' legendText='name' colorValuePath='color' shape='Circle' height='15' width='15' :dataSource='markerShapeDataSource' :tooltipSettings='markerTooltipSettings' />
            </e-markerSettings> 
        </e-layer>
    </e-layers>
</ejs-maps>
</div>    
</div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
       <p>
           This sample illustrates the world's top 10 most populated cities by displaying markers in their locations and legend with the city names.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
            In this example, you can see how to display markers and a legend on the OpenStreetMap. To enable the legend, set the <code>visible</code> property in <code>legendSettings</code> to <b>true</b>, and then use properties like <code>title</code>, <code>position</code>, <code>type</code>, <code>height</code>, <code>width</code>, and so on to customize the legend.
        </p>       
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use markers and a legend, we need to inject the <code>Marker</code> and <code>Legend</code> module using the provide section.
        </p>
       
    </section>
    </main>
</template>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Zoom, MapsTooltip, Legend } from '@syncfusion/ej2-vue-maps';

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
        urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png',
        titleSettings: {
            text: 'Top 10 populated cities in the World',
            textStyle: {
                size: '16px',
                fontFamily: 'inherit'
            }
        },
        markerShapeDataSource: [
            { name: 'Tokyo', latitude: 35.6805245924747, longitude: 139.76770396213337, population: 37435191, color:'#2EB6C8'},
            { name: 'Delhi', latitude: 28.644800, longitude: 77.216721, population: 29399141, color:'#4A97F4'},
            { name: 'Shanghai', latitude: 31.224361, longitude: 121.469170, population: 26317104, color:'#498082'},
            { name: 'Sao Paulo', latitude: -23.550424484747914, longitude: -46.646471636488315, population: 21846507, color:'#FB9E67'},
            { name: 'Mexico City', latitude: 19.427402397418774, longitude: -99.131123716666, population: 21671908, color:'#8F9DE3'},
            { name: 'Cairo ', latitude: 30.033333, longitude: 31.233334, population: 20484965, color:'#7B9FB0'},
            { name: 'Dhaka', latitude: 23.777176, longitude: 90.399452, population: 20283552, color:'#4DB647'},
            { name: 'Mumbai', latitude: 19.08492049646163, longitude: 72.87449446319248, population: 20185064, color:'#30BEFF'},
            { name: 'Beijing', latitude: 39.90395970055848, longitude: 116.38831272088059, population: 20035455, color:'#Ac72AD'},
            { name: 'Osaka', latitude: 34.69024500601642, longitude: 135.50746225677142, population: 19222665, color:'#EFE23E'}
        ],
        markerTooltipSettings: {
            visible: true,
            valuePath: 'population',
            format: 'City Name: ${name} <br> Population: ${population} million',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            visible: true,
            position: 'Float',
            location: {
                x: 10,
                y: 262
            },
            height:'170px',
            type: 'Markers',
            background: '#E6E6E6',
            textStyle: {
                color: '#000000',
                fontFamily: 'inherit'
            },
        },
        zoomSettings: {
            enable: true,
            zoomFactor: 2
        },
        animationDuration: 0,        
    }
},
provide: {
    maps: [Zoom, Marker, Legend, MapsTooltip]
},

methods:{
   load: function(args) {
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */
    }
}

}
</script>
