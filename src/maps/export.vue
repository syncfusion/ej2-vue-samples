<template>
<div id="map-export-sample">
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
<ejs-maps ref="maps" :allowPdfExport='allowPdfExport' :allowImageExport='allowImageExport' id='container' :load='load' :titleSettings='titleSettings'>
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
                    <div>Map Type:
                    </div>
                </td>
                <td style="width: 60%;">
                    <div style="margin-left: -10px">
             <ejs-dropdownlist ref="layertype" id='layertype' :change='changeLayerType' :dataSource='layerdata' index=0  :width=90></ejs-dropdownlist>                                 
                    </div>
                </td>
            </tr>
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
            <tr id="button-control" style="height: 50px">
                <td align='center'>
                    <div>
                <ejs-button id='togglebtn' :style='style' :cssClass='cssClass' :iconCss='iconCss' :isPrimary='isPrimary' :content='content' isToggle="true" v-on:click.native='clickExport'></ejs-button>                       
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p> 
        This sample illustrates the exporting feature in Maps. You can modify the map type to geometric or OSM using the Map type dropdown list in this sample. By clicking the Export button, you can export the map in PNG, JPEG, SVG or in PDF formats.
    </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render and configure the export functionality. The rendered map can be exported as either JPEG, PNG, SVG and PDF formats. Also this sample visualizes the locations of the wonders in the world using markers. Export functionality is done by <code>export</code> method when <code>allowImageExport</code> and <code>allowPdfExport</code> is set as true.
    </p>
        <br/>
         <p style="font-weight: 500"> <b>Injecting Module</b></p>
        <p>
       Maps component features are segregated into individual feature-wise modules. To use a marker, inject the <code>Marker</code> module using the <code>provide</code> section. To make use of the export support, we need to inject the <code>ImageExport</code> and <code>PdfExport</code> module using the <code>provide</code> section.
        </p>
         <p>
        More information on export can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/maps/print/#export"
        >documentation section</a>.
      </p> 
</div>
</div>
</template>
<style>
    #map-export-sample #button-control {
        width: 100%;
        text-align: center;
    }

    #map-export-sample #control-container {
        padding: 0px !important;
    }

    #map-export-sample .e-play-icon::before {
        content: "\e728";
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Marker, MapsTooltip, MapAjax, ImageExport, PdfExport } from '@syncfusion/ej2-vue-maps';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MapsPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
export default Vue.extend({
  data:function(){
      return{
        allowImageExport: true,
        allowPdfExport: true,
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
        layerdata:['Geometry', 'OSM'],
        iconCss: 'e-icons e-play-icon',
        cssClass: 'e-flat', isPrimary: true, content:'Export', style: 'text-transform:none !important; margin-left:50%'
      }
  },
provide: {
    maps: [Marker, MapsTooltip, ImageExport, PdfExport]
},
methods:{
    /* custom code start */
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    changeLayerType: function(args){
            // let cotainerObj=document.getElementById('labels-container');
            // let tickPosition=document.getElementById('tickposition');
            let modeData = ['JPEG','PNG','PDF','SVG'];
            if (this.$refs.layertype.ej2Instances.value === 'OSM') {
                if (this.$refs.mode.ej2Instances.value === 'SVG') {
                    this.$refs.mode.ej2Instances.value = modeData[0];
                }
                    this.$refs.mode.ej2Instances.dataSource = modeData.slice(0, 3);
                } else {
                    this.$refs.mode.ej2Instances.dataSource = modeData;
                }
                this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].layerType = this.$refs.layertype.ej2Instances.value;
                this.$refs.maps.ej2Instances.refresh();
    },
    /* custom code end */
    clickExport:function(args){     
           let fileName = ((document.getElementById('fileName'))).value;
           this.$refs.maps.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);
    }

}
})
</script>
