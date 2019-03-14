<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
<ejs-maps ref="maps" id='container' :load='load' :titleSettings='titleSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>
             
            <div style="float: right; margin-right: 10px;">Source:
                <a href="http://www.emapsworld.com/world-seven-wonder-map.html" target="_blank">en.wikipedia.org</a>
             </div>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">   
            <tr style="height: 50px">
                <td style="width: 40%">
                    <div>Export Type:
                    </div>
                </td>
                <td style="width: 60%;">
                    <div style="margin-left: -10px">
             <ejs-dropdownlist ref="mode" id='mode' :dataSource='modedata' index=0  :width=90></ejs-dropdownlist>                                 
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td style="width: 40%">
                    <div>File Name:</div>
                </td>
                <td style="width: 40%;">
                    <div class="e-float-input" style='margin-top: 0px;'>
                        <input type="text" value="Maps" id="fileName" style="margin-left: -10px">
                    </div>
                </td>
            </tr>
            <tr id="button-control" style="height: 50px" align='center'>
                <td>
                    <div>
                <ejs-button id='togglebtn' :style='style' :cssClass='cssClass' :isPrimary='isPrimary' :content='content' isToggle="true" v-on:click.native='clickExport'></ejs-button>                       
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates the exporting feature in Maps. By clicking the Export button, you can export the map in PNG, JPEG, SVG or in PDF formats. 
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the export. The rendered map can be exported as either JPEG, PNG, SVG and PDF formats. It can be achieved using Blob and it is supported only in modern browsers. Also this sample visualizes the locations of the wonders in the world using markers.
    </p>
    <p>
            Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
        Maps component features are segregated into individual feature-wise modules. To use a marker, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
        </p>
</div>
</div>
</template>
<style>
    #button-control {
        width: 100%;
        text-align: center;
    }

    #control-container {
        padding: 0px !important;
    }

    .e-play-icon::before {
        content: '\e728';
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Marker, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MapsPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
export default Vue.extend({
  data:function(){
      return{
        titleSettings: {
            text: 'Location of the Wonders in the World',
            textStyle: {
                size: '16px'
            }
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: { fill: 'lightgrey', border: { color: 'black', width: 0.1 } },
        markerSettings: [
                    {
                animationDuration: 0,
                visible: true,
                dataSource: [
                            { longitude: 116.5703749, latitude: 40.4319077, name: 'The Great Wall of China, China' },
                            { longitude: 35.4443622, latitude: 30.3284544, name: 'Petra, Jorden' },
                            { longitude: 78.0421552, latitude: 27.1750151, name: 'Taj Mahal, Agra, India' },
                            { longitude: 12.4922309, latitude: 41.8902102, name: 'The Roman Colosseum, Rome, Italy' },
                            { longitude: -88.5677826, latitude: 20.6842849, name: 'The Chichen Itza, Mexico' },
                            { longitude: -72.5449629, latitude: -13.1631412, name: 'Machu Picchu, Peru' },
                            { longitude: -43.2104872, latitude: -22.951916, name: 'Christ Redeemer, Rio de janeiro, Brazil' },
                        ],
        shape: 'Balloon',
        fill: '#E13E40',
        height: 20,
        width: 15,
        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        },
                    }
                ],
        modedata:['JPEG','PNG','SVG','PDF'],
        cssClass: 'e-info', isPrimary: true, content:'Export', style: 'text-transform:none !important'
      }
  },
provide: {
    maps: [Marker, MapsTooltip]
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
    clickExport:function(args){     
           let fileName = ((document.getElementById('fileName'))).value;
           this.$refs.maps.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);

    }
}
})
</script>
