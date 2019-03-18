<template>
<div>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :centerPosition='centerPosition' :mapsArea='mapsArea'>
    <e-layers>
        <e-layer :shapeData='shapeData' :animationDuration='animationDuration' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :navigationLineSettings='navigationLineSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.tibettravel.org/nepal-map/nepal-india-map.html" target="_blank">www.tibettravel.org</a>
    </div>
</div>
<div id="action-description">
        <p>
           This sample demonstrates the flight routes from India to China.
       </p>
    </div>
    <div id="description">
        <p>
           In this example, you can see how to render the curved lines between two points in a map. You can use the <code>dashArray</code>, <code>width</code>, and <code>color</code> properties to customize the appearance of the navigation lines.
    
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
          Maps component features are segregated into individual feature-wise modules. To use the navigation lines, inject the <code>NavigationLine</code> module using the <code>Maps.Inject(NavigationLine)</code> method.
        </p>
       
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin, Marker, MapsTooltip, NavigationLine,Zoom , MapAjax} from '@syncfusion/ej2-vue-maps';
import { markerLocation } from './map-data/map-location';
import { data } from './map-data/navigation-data';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        centerPosition: {
            latitude: 30.41078179084589,
            longitude: 90.52734374999999
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 3.5,
            mouseWheelZoom: false,
            toolbars: []
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: 'Flights from India to China',
            textStyle: {
                size: '16px'
            }
        },
        animationDuration: 1000,
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500">New Delhi' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Mumbai' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Chennai' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Kolkata' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Kunming' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Beijing' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Shanghai' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Hong Kong' +
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
                        template: '<div id="marker1" style="font-size:12px;color:black;font-weight: 500";>Guangzhou' +
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
    maps: [Marker, MapsTooltip, NavigationLine,Zoom ]
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
