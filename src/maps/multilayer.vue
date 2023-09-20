<template>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <template v-slot:texasMarkerTemplate="{}">
        <div id="markercircle">
            <svg width="30" height="30">
                <circle class="svgcircle" cx=15 cy=15 r=6 stroke='rgba(77, 77, 77, 0.8)' fill='rgba(0, 77, 153, 0.8)'/>
            </svg>
        </div>
    </template>
    <template v-slot:texasTextTemplate="{}">
        <div style="color:black; font-family: Segoe UI;">TX</div>
    </template>
    <template v-slot:californiaMarkerTemplate="{}">
        <div id="markercircle">
            <svg width="30" height="30">
                <circle class="svgcircle" cx=15 cy=15 r=6 stroke='rgba(77, 77, 77, 0.8)' fill='rgba(0, 77, 153, 0.8)'/>
            </svg>
        </div>
    </template>
    <template v-slot:californiaTextTemplate="{}">
        <div style="color:black; font-family: Segoe UI;">CA</div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData1' :dataLabelSettings='dataLabelSettings1' :shapeSettings='shapeSettings1'></e-layer>
        <e-layer :shapeData='shapeData2' :type='type2' :shapeSettings='shapeSettings2'>
            <e-markerSettings>
                <e-markerSetting visible='true' width='20' height='20' :dataSource='texasMarkerDataSource' :tooltipSettings='texasMarkerTooltipSettings' :template="'texasMarkerTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='texasTextDataSource' :template="'texasTextTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
        <e-layer :shapeData='shapeData3' :type='type3' :shapeSettings='shapeSettings3'>
            <e-markerSettings>
                <e-markerSetting visible='true' width='20' height='20' :dataSource='californiaMarkerDataSource' :tooltipSettings='californiaMarkerTooltipSettings' :template="'californiaMarkerTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='californiaTextDataSource' :template="'californiaTextTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>
  
<div style="float: right; margin-right: 10px;">Source:
    <a href="http://www.samsung.com/semiconductor/about-us/location/" target="_blank">www.samsung.com</a>
</div>
<div id="action-description">
        <p>
            This sample illustrates the layers along with sublayers. California and Texas map is rendered on the top of US map to depict the office locations of Samsung in USA.
       </p>
    </div>
    <div id="description">
        <p>
        In this example, you can see how to render a sublayer in map. Sublayers are used to render the desired shapes over the existing layers. Any number of sublayers can be added to a map. You can use the <code>fill</code>, <code>width</code>, and <code>color</code> properties in the border to customize the appearance of the shapes. 
    
        </p>
        <p> 
            Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
         </p>
    </div>
</div>
</template>
<style scoped>
    .markerTemplate {
        font-size: 12px;
        color: black;
        font-weight: 500
    }
    @keyframes opac {
        0% {
            stroke-opacity: 0.6;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0.2;
            stroke-width: 8px;
        }
    }	
	.svgcircle{
        -webkit-animation: opac 1.5s ease-out infinite;
        animation: opac 1.5s ease-out infinite;
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, MapsTooltip, DataLabel, Zoom, MapAjax } from '@syncfusion/ej2-vue-maps';

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
            enable: true,
            pinchZooming: true
        },
        titleSettings: {
            text: 'Samsung Semiconductor office locations in USA',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        shapeData1: new MapAjax('./src/maps/map-data/usa.json'),
        shapeSettings1: {
                    fill: '#E5E5E5',
                    border: {
                        color: 'black',
                        width: 0.1
                    }
        },
        dataLabelSettings1: {
                    visible: true,
                    labelPath: 'iso_3166_2',
                    smartLabelMode: 'Hide',
                    textStyle: {
                        fontFamily: 'Segoe UI',
                        color: 'black'
                    }
        },
        shapeData2: new MapAjax('./src/maps/map-data/texas.json'),
        type2: 'SubLayer',
        shapeSettings2: {
                    fill: 'rgba(141, 206, 255, 0.6)',
                    border: {
                        color: '#1a9cff',
                        width: 0.25
                    }
                },
        texasMarkerDataSource: [{ latitude: 30.267153, longitude: -97.7430608, name: 'Austin' }],
        texasMarkerTooltipSettings: {
            visible: true,
            valuePath: 'name',
            format: '<b>${name}</b><br>Manufacturing Center,<br>Research and Development Center',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        texasTextDataSource: [{ latitude: 31.80289258670676, longitude: -98.96484375 }],
        shapeData3: new MapAjax('./src/maps/map-data/california.json'),
        type3: 'SubLayer',
        shapeSettings3: {
                    fill: 'rgba(141, 206, 255, 0.6)',
                    border: {
                        color: '#1a9cff',
                        width: 0.25
                    }
        },
        californiaMarkerDataSource: [{ latitude: 37.3382082, longitude: -121.8863286, name: 'San Jose' }],
        californiaMarkerTooltipSettings: {
            visible: true,
            valuePath: 'name',
            format: '<b>${name}</b><br>Regional Office,<br>Research and Development Center',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        californiaTextDataSource: [{ latitude: 37.09023980307208, longitude: -119.35546875000001 }]
      }
  },
provide: {
    maps: [Marker, MapsTooltip, DataLabel, Zoom]
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