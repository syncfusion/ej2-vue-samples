<template>
<main><div>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :centerPosition='centerPosition' :mapsArea='mapsArea'>
    <template v-slot:newDelhiTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">New Delhi</div>
    </template>
    <template v-slot:mumbaiTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Mumbai</div>        
    </template>
    <template v-slot:chennaiTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Chennai</div>
    </template>
    <template v-slot:kolkataTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Kolkata</div>
    </template>
    <template v-slot:kunmingTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Kunming</div>
    </template>
    <template v-slot:beijingTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Beijing</div>
    </template>
    <template v-slot:shanghaiTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Shanghai</div>
    </template>
    <template v-slot:hongKongTextTemplate="{}">
        <div id="marker1" style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Hong Kong</div>
    </template>
    <template v-slot:guangzhouTextTemplate="{}">
        <div style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI;">Guangzhou</div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' :animationDuration='animationDuration' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :navigationLineSettings='navigationLineSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='markerShapeDataSource' shape='Circle' fill='white' :width='markerShapeWidth' :border='markerShapeBorder' :tooltipSettings='markerShapeTooltipSettings'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='newDelhiTextDataSource' :offset='newDelhiTextOffset' :template="'newDelhiTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='mumbaiTextDataSource' :offset='mumbaiTextOffset' :template="'mumbaiTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='chennaiTextDataSource' :offset='chennaiTextOffset' :template="'chennaiTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='kolkataTextDataSource' :offset='kolkataTextOffset' :template="'kolkataTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='kunmingTextDataSource' :offset='kunmingTextOffset' :template="'kunmingTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='beijingTextDataSource' :offset='beijingTextOffset' :template="'beijingTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='shanghaiTextDataSource' :offset='shanghaiTextOffset' :template="'shanghaiTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='hongKongTextDataSource' :offset='hongKongTextOffset' :template="'hongKongTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='guangzhouTextDataSource' :offset='guangzhouTextOffset' :template="'guangzhouTextTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.tibettravel.org/nepal-map/nepal-india-map.html" target="_blank">www.tibettravel.org</a>
    </div>
</div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
        <p>
           This sample demonstrates the flight routes from India to China.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
           In this example, you can see how to render the curved lines between two points in a map. You can use the <code>dashArray</code>, <code>width</code>, and <code>color</code> properties to customize the appearance of the navigation lines.
    
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
          Maps component features are segregated into individual feature-wise modules. To use the navigation lines, inject the <code>NavigationLine</code> module using the <code>Maps.Inject(NavigationLine)</code> method.
        </p>
       
    </section>
</main>
</template>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, MapsTooltip, NavigationLine,Zoom } from '@syncfusion/ej2-vue-maps';
import { markerLocation } from '../maps/map-data/map-location';
import { data } from '../maps/map-data/navigation-data';
import { worldMap } from '../maps/map-data/world-map';

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
        centerPosition: {
            latitude: 30.41078179084589,
            longitude: 90.52734374999999
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 3.5,
            mouseWheelZoom: false
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: 'Flights from India to China',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        animationDuration: 1000,
        shapePropertyPath: 'name',
        shapeData: worldMap,
        shapeDataPath: 'name',
        dataSource: [
                    {
                        name: 'India'
                    },
                    {
                        name: 'China'
                    }
                ],
        shapeSettings: {
                    colorValuePath: 'name',
                    fill: '#fcfbf9',
                    border: {
                        width: 0.1,
                        color: 'black'
                    },
                    colorMapping: [
                        {
                            value: 'China',
                            color: '#f7d083'
                        },
                        {
                            value: 'India',
                            color: '#FFFE99'
                        }
                    ]
                },
        navigationLineSettings: data,
        markerShapeWidth: 4,
        markerShapeDataSource: markerLocation,
        markerShapeBorder: { width: 1, color: 'black' },
        markerShapeTooltipSettings: { visible: true, valuePath: 'title' },
        newDelhiTextDataSource: [{ 'name': 'New Delhi', 'latitude': 28.6139391, 'longitude': 77.2090212 }],
        newDelhiTextOffset: { x: -50, y: 10 },
        mumbaiTextDataSource: [{ 'name': 'Mumbai', 'latitude': 19.0759837, 'longitude': 72.8776559 }],
        mumbaiTextOffset: { x: 0, y: 12 },
        chennaiTextDataSource: [{ 'name': 'Chennai', 'latitude': 13.0826802, 'longitude': 80.2707184 }],
        chennaiTextOffset: { x: 0, y: 12 },
        kolkataTextDataSource: [{ 'name': 'Kolkata', 'latitude': 22.572646, 'longitude': 88.363895 }],
        kolkataTextOffset: { x: 0, y: 12 },
        kunmingTextDataSource: [{ 'name': 'Kunming', 'latitude': 24.880095, 'longitude': 102.832891 }],
        kunmingTextOffset: { x: 0, y: 12 },
        beijingTextDataSource: [{ 'name': 'Beijing', 'latitude': 39.9041999, 'longitude': 116.4073963 }],
        beijingTextOffset: { x: 0, y: 12 },
        shanghaiTextDataSource: [{ 'name': 'Shanghai', 'latitude': 31.2303904, 'longitude': 121.4737021 }],
        shanghaiTextOffset: { x: 0, y: 12 },
        hongKongTextDataSource: [{ 'name': 'Hong Kong', 'latitude': 22.396428, 'longitude': 114.109497 }],
        hongKongTextOffset: { x: 20, y: 20 },
        guangzhouTextDataSource: [{ 'name': 'Guangzhou', 'latitude': 23.12911, 'longitude': 113.264385 }],
        guangzhouTextOffset: { x: 35, y: -10 },
        markerSettings: [
                    {
                        dataSource: markerLocation,
                        visible: true,
                        shape: 'Circle',
                        fill: 'white',
                        border: { width: 1, color: 'black' },
                        width: 4,
                        animationDuration: 0,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'title'
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'New Delhi',
                                'latitude': 28.6139391,
                                'longitude': 77.2090212
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500; font-family: Segoe UI; ">New Delhi' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: -50,
                            y: 10
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Mumbai',
                                'latitude': 19.0759837,
                                'longitude': 72.8776559
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Mumbai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Chennai',
                                'latitude': 13.0826802,
                                'longitude': 80.2707184
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Chennai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Kolkata',
                                'latitude': 22.572646,
                                'longitude': 88.363895
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Kolkata' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Kunming',
                                'latitude': 24.880095,
                                'longitude': 102.832891
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Kunming' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Beijing',
                                'latitude': 39.9041999,
                                'longitude': 116.4073963
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Beijing' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Shanghai',
                                'latitude': 31.2303904,
                                'longitude': 121.4737021
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Shanghai' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 0,
                            y: 12
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Hong Kong',
                                'latitude': 22.396428,
                                'longitude': 114.109497
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Hong Kong' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 20,
                            y: 20
                        }
                    },
                    {
                        dataSource: [
                            {
                                'name': 'Guangzhou',
                                'latitude': 23.12911,
                                'longitude': 113.264385
                            }
                        ],
                        visible: true,
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500"; font-family: Segoe UI;>Guangzhou' +
                            '</div>',
                        animationDuration: 0,
                        offset: {
                            x: 35,
                            y: -10
                        }
                    }
                ]
      }
  },
provide: {
    maps: [Marker, MapsTooltip, NavigationLine, Zoom ]
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
