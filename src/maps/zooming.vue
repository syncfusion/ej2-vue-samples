
<template>
<div>
<div class="col-lg-9 control-section">
<ejs-maps ref="maps" id='mapszooming' :zoomSettings='zoomSettings' :load='load'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :animationDuration='animationDuration' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>    
    <div id="height_slider"></div>        
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div>Zooming</div>
                    </td>
                    <td>
                        <input type="checkbox" checked id="zoom" style="margin-top: 15px"  v-on:change='changeZoom' />
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div>Mouse wheel zoom</div>
                    </td>
                    <td>
                        <input type="checkbox" checked id="mousewheel" style="margin-top: 15px" v-on:change='changeMousewheel'/>
                    </td>
                </tr>
                <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Pinch zoom</div>
                        </td>
                        <td>
                            <input type="checkbox" checked id="pinch" style="margin-top: 15px"  v-on:change='changePinch' />
                        </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div>Single click zoom</div>
                    </td>
                    <td>
                        <input type="checkbox" id="singletap" style="margin-top: 15px"  v-on:change='changeSingletap' />
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 50%">
                        <div>Double click zoom</div>
                    </td>
                    <td>
                        <input type="checkbox" id="doubletap" style="margin-top: 15px"  v-on:change='changeDoubletap' />
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td style="width: 50%">
                        <div>Animation duration <br><span id="dur">500 ms</span></div>
                    </td>
                    <td>
                        <ejs-slider id='range' :value='value' min=0 max=1000 :step='step' :change='sliderChange'></ejs-slider>
                    </td>
                </tr>
        </tbody></table>
    </div>
    <div id="action-description">
            <p>
                This sample depicts the zooming and panning options in the maps. You can customize these options by changing the Zooming, Mouse wheel zoom, Pinch zoom, Single-click zoom, and Double-click zoom in the Properties panel.
           </p>
        </div>
        <div id="description">
            <p>
              In this example, you can see how to zoom and pan the map. The support has been provided for zooming with toolbar, rectangle zoom, pinch zoom, mouse wheel zoom, single-click and double-click zoom.
            </p>
        <br/>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
              Maps component features are segregated into individual feature-wise modules. To use the zooming feature, inject the <code>Zoom</code> module using the <code>Maps.Inject(Zoom)</code> method.
            </p>
            
        </div>
</div>
</template>

 <style>
     .slider-content-wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    .slider-userselect {
        -webkit-user-select: none;
        /* Safari 3.1+ */
        -moz-user-select: none;
        /* Firefox 2+ */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Standard syntax */
    }

    .slider-labeltext {
        text-align: -webkit-left;
        font-weight: 500;
        font-size: 13px;
        padding-bottom: 10px;
    }

    .slider_container {
        margin-top: 40px;
    }

    .e-bigger .slider-content-wrapper {
        width: 80%;
    }

    #height_slider .e-tab-handle::after {
        background-color: #f9920b;
    }

    #height_slider.e-control.e-slider .e-slider-track {
        height: 8px;
        top: calc(50% - 4px);
        border-radius: 0;
    }
    .highcontrast #height_slider.e-control.e-slider .e-slider-track {
        height: 10px;
        top: calc(50% - 5px);
        border-radius: 0;
    }
    .fabric .slider_container .e-slider-hover .e-slider-track, .fabric .slider_container .e-slider-container:active .e-slider-track,
    .fabric .slider_container .e-slider-container .e-slider .e-tab-track{
        background-color: #c8c8c8;
    }

    #gradient_slider.e-control.e-slider .e-range {
        height: 6px;
        top: calc(50% - 3px);
        border-radius: 5px;
        background: linear-gradient(to top left, #f9f9f9 25%, #f9920b 90%);
    }

    .fabric .slider_container .e-slider-hover .e-slider-track,
    .fabric .slider_container .e-slider-container:active .e-slider-track,
    .fabric .slider_container .e-slider-container .e-slider .e-tab-track {
        background-color: #c8c8c8;
    }

    #gradient_slider.e-control.e-slider .e-slider-track {
        height: 8px;
        top: calc(50% - 4px);
        border-radius: 5px;
    }
    #control-container {
        padding: 0px !important;
    }
    #range > * {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Zoom, MapAjax} from '@syncfusion/ej2-vue-maps';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(MapsPlugin);
Vue.use(SliderPlugin);
export default Vue.extend({
  data:function(){
      return{
            zoomSettings: {
            enable: true,
            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
            pinchZooming: true
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        animationDuration: 500,
        shapeSettings: {
                    autofill: true,
                    colorValuePath: 'color'
        },
        dataSource: new MapAjax('./src/maps/map-data/zooming-datasource.json'),
        value: 500,
        step: 250
      }
  },
provide: {
    maps: [Zoom]
},
methods:{
    /* custom code start */
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    // Code for Property Panel
    changeZoom:function(args){
        let element = (document.getElementById('zoom'));
        this.$refs.maps.ej2Instances.zoomSettings.enable = element.checked;
        this.$refs.maps.ej2Instances.refresh();
    },
    changeMousewheel:function(args){
        let element = (document.getElementById('mousewheel'));
        this.$refs.maps.ej2Instances.zoomSettings.mouseWheelZoom = element.checked;
        this.$refs.maps.ej2Instances.refresh();
    },
    changePinch:function(args){
        let element = (document.getElementById('pinch'));
        this.$refs.maps.ej2Instances.zoomSettings.pinchZooming = element.checked;
        this.$refs.maps.ej2Instances.refresh();
    },
    changeSingletap:function(args){
        let element = (document.getElementById('singletap'));
        let ele1 = document.getElementById('doubletap');
        this.$refs.maps.ej2Instances.zoomSettings.zoomOnClick = element.checked;
        if (element.checked) {
            ele1.disabled = true;
        } else {
            ele1.disabled = false;
        }
    },
    changeDoubletap:function(args){      
        let element = (document.getElementById('doubletap'));
        this.$refs.maps.ej2Instances.zoomSettings.doubleClickZoom = element.checked;
        let ele1 = document.getElementById('singletap');
        if (element.checked) {
            ele1.disabled = true;
        } else {
            ele1.disabled = false;
        }
    },
    sliderChange:function(args){
        this.$refs.maps.ej2Instances.layers[0].animationDuration = args.value;
        this.$refs.maps.ej2Instances.refresh();
        document.getElementById('dur').innerHTML = args.value.toString() + ' ms';
    }
}
})
</script>
