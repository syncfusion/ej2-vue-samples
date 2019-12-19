<template>
<div>
    <div class="control-section">
        <div style="width:300px;margin:0 auto;padding-bottom:10px">
            <img src="src/maps/images/atm.png" alt="ATM indication" style="width:25px;height:25px;float:left">
            <div style="padding-left:30px;font-size:18px;font-weight:400;">ATM locations in Oklahoma, USA</div>
        </div>
        <ejs-maps id='container' :load='load' :centerPosition='centerPosition' :zoomSettings='zoomSettings'>
            <e-layers>
                <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :animationDuration='animationDuration' :markerSettings='markerSettings'></e-layer>
            </e-layers>
        </ejs-maps>

        <div style="float: right; margin-right: 10px;">Source:
            <a href="https://www.google.co.in/maps/search/atm+in+oklahoma/@35.3864432,-98.2888719,8z/data=!3m1!4b1" target="_blank">www.google.co.in/maps</a>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample depicts the ATM populated areas in Oklahoma by highlighting the regions.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to highlight some specific region by rendering circles. Any custom HTML element can be used as a marker.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject <code>Marker</code> module using <code>Maps.Inject(Marker)</code> method.
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Marker, Zoom, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { highlight, highlight1 } from './map-data/highlighted';
import Template from './earthquake-temp.vue';
Vue.use(MapsPlugin);
export default Vue.extend({
    data: function () {
        return {
            centerPosition: {
                latitude: 35.65,
                longitude: -97.3
            },
            zoomSettings: {
                enable: false,
                toolbars: [],
                mouseWheelZoom: false,
                zoomFactor: 1.75
            },
            animationDuration: 1000,
            shapeData: new MapAjax('./src/maps/map-data/oklahoma.json'),
            shapeSettings: {
                fill: '#F5F5F5',
                border: {
                    color: '#EEDA97',
                    width: 1
                }
            },
            markerSettings: [{
                    width: 20,
                    height: 20,
                    animationDuration: 0,
                    visible: true,
                    shape: 'Image',
                    imageUrl: 'src/maps/images/ballon.png',
                    fill: '#000080',
                    border: {
                        color: 'transparent'
                    },
                    dataSource: highlight
                },
                {
                    animationDuration: 0,
                    visible: true,
                    shape: 'Circle',
                    width: 130,
                    height: 130,
                    fill: 'rgba(70,130,180,0.3)',
                    dataSource: [{
                        latitude: 35.5112516,
                        longitude: -97.5843,
                        text: '10/18 ATMs'
                    }],
                    border: {
                        color: 'transparent'
                    },
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'text'
                    }
                },
                {
                    animationDuration: 0,
                    visible: true,
                    shape: 'Circle',
                    width: 100,
                    height: 100,
                    fill: 'rgba(70,130,180,0.3)',
                    dataSource: [{
                        latitude: 36.0808845,
                        longitude: -96.0205078,
                        text: '5/18 ATMs'
                    }],
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'text'
                    },
                    border: {
                        color: 'transparent'
                    }
                },
                {
                    visible: true,
                    template: '<div style="color: black;">{{:name}}</div>',
                    dataSource: highlight1
                }
            ]
        }
    },
    provide: {
        maps: [Zoom, Marker, MapsTooltip]
    },
    /* custom code start */
    methods: {
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.maps.theme =
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        }
    }
    /* custom code end */
})
</script>
