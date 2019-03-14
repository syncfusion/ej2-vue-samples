<template>
<div>

<div class="control-section">
<ejs-maps id='container' :load='load' :loaded='loaded' :titleSettings='titleSettings' :zoomSettings='zoomSettings' >
    <e-layers>
        <e-layer :shapeData='shapeData' :navigationLineSettings= 'navigationLineSettings' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>    
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://craft.co/youtube/locations" target="_blank">craft.co/youtube/locations</a>
     </div>
</div>
<div id="action-description">
    <p>
        This sample depicts a cyberattack map, which displays the cyberattacks and threats from various countries to the
        USA.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to dynamically display a navigation line with linear animation. Marker
        templates are added to denote the source and destination locations. Any custom HTML element can be used as a
        marker.
    </p>
    <br />
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The maps component features are segregated into individual modules by feature. To use marker template, inject
        the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method, and use the navigation lines
        by injecting the <code>NavigationLine</code> module.
    </p>
</div>
</div>
</template>
<style>
    .name {
        margin-top: -6px;
        margin-left: -6px;
        font-size: 12px;
        color: black;
        text-shadow: 0px 1px 1px lightgray;
        font-weight: 500
    }

    @keyframes dash {
        from {
            stroke-dashoffset: 1000;
            stroke-width: 1px;
            stroke: #D2691E;
        }

        to {
            stroke-dashoffset: 0;
            stroke-width: 1px;
        }

        40% {
            opacity: 0.7;
        }

        50%,
        100% {
            opacity: 0;
        }
    }

    .pulse-css {
        width: 12px;
        height: 12px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #D2691E;
        position: relative;
        animation-delay: 5s;
    }

    .pulse-css:before,
    .pulse-css:after {
        content: '';
        width: 9px;
        height: 9px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background-color: #D2691E;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transform: scale(0.5);
        animation: pulse-css1 2s linear infinite;
    }

    .parent_css {
        width: 13px;
        height: 13px;
        background: #D2691E;
        position: relative;
        animation-delay: 5s;
    }

    .parent_css:before,
    .parent_css:after {
        content: '';
        width: 9px;
        height: 9px;
        background-color: #D2691E;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transform: scale(0.5);
        animation: pulse-css1 3s linear infinite;
    }

    @keyframes pulse-css1 {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }

        50% {
            opacity: 0.2;
        }

        90%,
        100% {
            transform: scale(5);
            opacity: 0;
        }
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, Marker, NavigationLine, MapsTooltip, MapAjax, ILoadedEventArgs, NavigationLineSettingsModel} from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Cyber Attack Map of United States',
        textStyle: { size: '16px' }
        },
        zoomSettings: {
            enable: false
        },
        shapeData:new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: {
            border: { color: '#D2691E', width: 0.5 },
            fill: '#FFFFE0'
        },
        navigationLineSettings: [
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.3, color: '#ffffb3',
                        latitude: [15.758401, 39.864171],
                        longitude: [101.155642, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: 0.4, color: '#ffffb3',
                        latitude: [57.725612, 39.864171],
                        longitude: [-101.802160, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [29.930938, 39.864171],
                        longitude: [69.358894, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.1, color: '#ffffb3',
                        latitude: [22.860388, 39.864171],
                        longitude: [79.739066, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.1, color: '#ffffb3',
                        latitude: [-24.763753, 39.864171],
                        longitude: [134.852191, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.4, color: '#ffffb3',
                        latitude: [34.611098, 39.864171],
                        longitude: [104.189872, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.8, color: '#ffffb3',
                        latitude: [-12.354844, 39.864171],
                        longitude: [-49.017709, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.4, color: '#ffffb3',
                        latitude: [3.450682, 39.864171],
                        longitude: [-72.943141, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.7, color: '#ffffb3',
                        latitude: [62.448268, 39.864171],
                        longitude: [97.251835, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.3, color: '#ffffb3',
                        latitude: [65.931163, 39.864171],
                        longitude: [-45.812820, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [-21.206222, 39.864171],
                        longitude: [17.122018, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [35.839969, 39.864171],
                        longitude: [137.904641, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [46.582184, 39.864171],
                        longitude: [2.232903, -100.854833],
                    },
                    {
                        dashArray: '5,1', visible: true,
                        angle: -0.2, color: '#ffffb3',
                        latitude: [0.390617, 39.864171],
                        longitude: [37.893734, -100.854833],
                    }
                ],
        markerSettings: [
                    {
                        visible: true, height: 15, width: 15,
                        template: '<div id="template"><div class="pulse-css"><br /><div class="name">{{:name}}</div></div></div>',
                        animationDuration: 0,
                        dataSource: [
                            { latitude: 15.758401, longitude: 101.155642, name: 'Thailand' },
                            { latitude: 57.725612, longitude: -101.802160, name: 'Canada' },
                            { latitude: 39.634177, longitude: 42.410740, name: 'Turkey' },
                            { latitude: 22.860388, longitude: 79.739066, name: 'India' },
                            { latitude: -24.763753, longitude: 134.852191, name: 'Australia' },
                            { latitude: 34.611098, longitude: 104.189872, name: 'China' },
                            { latitude: -12.354844, longitude: -49.017709, name: 'Brazil' },
                            { latitude: 3.450682, longitude: -72.943141, name: 'Colombia' },
                            { latitude: 62.448268, longitude: 97.251835, name: 'Russia' },
                            { latitude: 65.931163, longitude: -45.812820, name: 'Greenland' },
                            { latitude: -21.206222, longitude: 17.122018, name: 'Namibia' },
                            { latitude: 35.839969, longitude: 137.904641, name: 'Japan' },
                            { latitude: 46.582184, longitude: 2.232903, name: 'France' },
                            { latitude: 0.390617, longitude: 37.893734, name: 'Kenya' }
                        ]
                    },
                    {
                        visible: true, height: 15, width: 15,
                        template: '<div id="parent_template" ><div class="parent_css"><br/><div class="name" style="margin-left: -10px;margin-top: -2px">United States</div></div></div>',
                        animationDuration: 0,
                        dataSource: [{
                            latitude: 39.864171,
                            longitude: -100.854833
                        }]
                    },
                ]
    }
},
provide: {
    maps: [Marker, NavigationLine, MapsTooltip]
},
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    loaded: function(args) {
        let lines = args.maps.layers[0].navigationLineSettings;
            for (let i = 0; i < lines.length; i++) {
                let line = document.getElementById('container_LayerIndex_0_NavigationIndex_' + i + '_Line0');
                let marker = document.getElementById('container_LayerIndex_0_MarkerIndex_0_dataIndex_' + i)
                line.style.strokeDasharray = '1000';
                line.style.strokeDashoffset = '1000';
                if (i < 4) {
                    line.style.animation = marker.style.animation = 'dash 5s linear 0s infinite';
                    marker.style.visibility = 'hidden';
                    setTimeout(() => {
                        marker.style.visibility = 'visible';
                    }, 0);
                } else if (i < 8) {
                    line.style.animation = marker.style.animation = 'dash 6s linear 2s infinite';
                    marker.style.visibility = 'hidden';
                    setTimeout(() => {
                        marker.style.visibility = 'visible';
                    }, 2000);
                } else if (i < 12) {
                    line.style.animation = marker.style.animation = 'dash 6s linear 4.5s infinite';
                    marker.style.visibility = 'hidden';
                    setTimeout(() => {
                        marker.style.visibility = 'visible';
                    }, 4500);
                } else {
                    line.style.animation = marker.style.animation = 'dash 5s linear 7s infinite';
                    marker.style.visibility = 'hidden';
                    setTimeout(() => {
                        marker.style.visibility = 'visible';
                    }, 7000);
                }
            }
    }
}
})
</script>

