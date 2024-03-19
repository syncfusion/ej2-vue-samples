
<template>
<div id="maps-zoom-sample">
<div class="col-lg-8 control-section">
<ejs-maps ref="maps" id='mapszooming' :zoomSettings='zoomSettings' :load='load'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :animationDuration='animationDuration' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>    
    <div id="height_slider"></div>        
    </div>

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%;">
        <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
       </colgroup>
       <tbody>
                <tr style="height: 50px">
                    <td>
                        <div  class="text">Zooming</div>
                    </td>
                    <td>
                    <div  class="text" style="margin-top: 3px;  margin-left: 10px;">
                        <input type="checkbox" checked id="zoom"  v-on:change='changeZoom' />
                   </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div  class="text">Panning</div>
                    </td>
                    <td>
                   <div  class="text" style="margin-top: 3px;  margin-left: 10px;">
                        <input type="checkbox" checked id="panning"  v-on:change='changePan' />
                   </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div style="width: 93%;"  class="text">Mouse wheel zoom</div>
                    </td>
                    <td>
                    <div  class="text" style="margin-top: 3px;  margin-left: 10px;">
                        <input type="checkbox" checked id="mousewheel" v-on:change='changeMousewheel'/>
                    </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                        <td>
                            <div  class="text">Pinch zoom</div>
                        </td>
                        <td>
                        <div  class="text" style="margin-top: 3px;  margin-left: 10px;">
                            <input type="checkbox" checked id="pinch"  v-on:change='changePinch' />
                         </div>
                        </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div  class="text" style="width: 89%;">Single click zoom</div>
                    </td>
                    <td>
                     <div  class="text" style="margin-top: 3px;  margin-left: 10px;" >
                        <input type="checkbox" id="singletap" v-on:change='changeSingletap' />
                      </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div  class="text" style="width: 93%;">Double click zoom</div>
                    </td>
                    <td>
                    <div  class="text" style="margin-top: 3px;  margin-left: 10px;">
                        <input type="checkbox" id="doubletap" v-on:change='changeDoubletap' />
                     </div>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td>
                        <div  id="animation" style="width: 94%; padding-left: 0px;">Animation duration</div>
                    </td>
                    <td>
                    <div style="padding-top: 5px; margin-left: -10px;">
                        <ejs-slider id='range' :value='value' min=0 max=1000 :step='step' :change='sliderChange' class="slider" style="width: 50%;"></ejs-slider>
                        </div>
                    </td>
                    <td align="center" class="duration" style="width: 10%; text-align: center; padding-top: 10px;">
                        <span id="dur" style="margin-left: -55px;">500ms</span>
                    </td>
                </tr>
                </tbody>
        </table>
    </div>
    <div id="action-description">
            <p>
                This sample depicts the zooming and panning options in the maps. You can customize these options by changing the Zooming, Panning, Mouse wheel zoom, Pinch zoom, Single-click zoom, and Double-click zoom in the Properties panel.
           </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to zoom and pan the map. The support has been provided for zooming with the toolbar, rectangle zoom, pinch zoom, mouse wheel zoom, single-click, and double-click zoom.Panning can be enabled or disabled using
                the Panning option. When it is disabled, the map will switch to zooming mode.
            </p>
        <br/>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
              Maps component features are segregated into individual feature-wise modules. To use the zooming feature, inject the <code>Zoom</code> module using the <code>Maps.Inject(Zoom)</code> method.
            </p>
            
        </div>
</div>
</template>

 <style scoped>
     #maps-zoom-sample .slider-content-wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    #maps-zoom-sample .slider-userselect {
        -webkit-user-select: none;
        /* Safari 3.1+ */
        -moz-user-select: none;
        /* Firefox 2+ */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Standard syntax */
    }

    #maps-zoom-sample .slider-labeltext {
        text-align: -webkit-left;
        font-weight: 500;
        font-size: 13px;
        padding-bottom: 10px;
    }

    #maps-zoom-sample .slider_container {
        margin-top: 40px;
    }

    #maps-zoom-sample .e-bigger .slider-content-wrapper {
        width: 80%;
    }

    #maps-zoom-sample #height_slider .e-tab-handle::after {
        background-color: #f9920b;
    }

    #maps-zoom-sample #height_slider.e-control.e-slider .e-slider-track {
        height: 8px;
        top: calc(50% - 4px);
        border-radius: 0;
    }
    #maps-zoom-sample .highcontrast #height_slider.e-control.e-slider .e-slider-track {
        height: 10px;
        top: calc(50% - 5px);
        border-radius: 0;
    }
    #maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track, #maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,
    #maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track{
        background-color: #c8c8c8;
    }

    #maps-zoom-sample #gradient_slider.e-control.e-slider .e-range {
        height: 6px;
        top: calc(50% - 3px);
        border-radius: 5px;
        background: linear-gradient(to top left, #f9f9f9 25%, #f9920b 90%);
    }

    #maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track,
    #maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,
    #maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track {
        background-color: #c8c8c8;
    }

    #maps-zoom-sample #gradient_slider.e-control.e-slider .e-slider-track {
        height: 8px;
        top: calc(50% - 4px);
        border-radius: 5px;
    }
    #maps-zoom-sample #control-container {
        padding: 0px !important;
    }
    #maps-zoom-sample #range > * {
        padding: 0px !important;
    }
    div.text {
        padding-left: 0px; padding-top: 0px;
    }
</style>
<style>
.slider .e-slider-track{
    padding-top: 0px;
}
</style>
<script>
import Vue from 'vue';
import { MapsComponent, LayersDirective, LayerDirective, Zoom} from '@syncfusion/ej2-vue-maps';
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { worldMap } from '../maps/map-data/world-map';
import { zoomData } from '../maps/map-data/zooming-datasource';

export default {
    components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-slider': SliderComponent
  },
  data:function(){
      return{
            zoomSettings: {
            enable: true,
            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
            pinchZooming: true
        },
        shapeData: worldMap,
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        animationDuration: 500,
        shapeSettings: {
                    autofill: true,
                    colorValuePath: 'color'
        },
        dataSource: zoomData,
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    /* custom code end */
    // Code for Property Panel
    changeZoom:function(args){
        let element = (document.getElementById('zoom'));
        this.$refs.maps.ej2Instances.zoomSettings.enable = element.checked;
        this.$refs.maps.ej2Instances.refresh();
    },
    changePan:function(args){
        let element = (document.getElementById('panning'));
        this.$refs.maps.ej2Instances.zoomSettings.enablePanning = element.checked;
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
        document.getElementById('dur').innerHTML = args.value.toString() + 'ms';
    }
}
}
</script>
