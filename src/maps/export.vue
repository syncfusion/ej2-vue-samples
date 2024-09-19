<template>
<main><div id="map-export-sample">
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
        <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
            <col span="1" style="width: 40%;">
            <col span="1" style="width: 60%;">
         </colgroup>
         <tbody>
              <tr style="height: 50px">
                <td>
                    <div>Map Type
                    </div>
                </td>
                <td>
                    <div style="padding-left: 0px;">
             <ejs-dropdownlist ref="layertype" id='layertype' :change='changeLayerType' :dataSource='layerdata' index=0  :width='exportWidth'></ejs-dropdownlist>                                 
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Export Type
                    </div>
                </td>
                <td>
                    <div style="padding-left: 0px;">
             <ejs-dropdownlist ref="mode" id='mode' :dataSource='modedata' index=0  :width='exportWidth'></ejs-dropdownlist>                                 
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>File Name</div>
                </td>
                <td>
                    <div style="margin-top: 0px; padding-left: 0px;">
                        <ejs-textbox type="text" value="Maps" id="fileName" style="width:100%"></ejs-textbox>
                    </div>
                </td>
            </tr>
            <tr id="button-control" style="height: 70px">
                <td align='center'>
                    <div style="margin-left: 50%;">
                <ejs-button id='togglebtn' :style='style' :isPrimary='isPrimary' :content='content' v-on:click='clickExport'></ejs-button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
    <p> 
        This sample illustrates the exporting feature in Maps. You can modify the map type to geometric or OSM using the Map type dropdown list in this sample. By clicking the Export button, you can export the map in PNG, JPEG, SVG or in PDF formats.
    </p>
</section>
<section id="description" aria-label="Description of the Maps features demonstrated in this sample">
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
</section>
</main>
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

    .e-view.fluent  #map-export-sample .e-play-icon::before, .e-view.fluent-dark #map-export-sample .e-play-icon::before {
        content: "\e72e";
    }

    .e-view.fabric  #map-export-sample .e-play-icon::before, .e-view.fabric-dark #map-export-sample .e-play-icon::before {
        content: "\e710";
    }

    .e-view.bootstrap4 #map-export-sample .e-play-icon::before {
        content: "\e780";
    }

    .e-view.tailwind-dark #map-export-sample .e-play-icon::before, .e-view.tailwind #map-export-sample .e-play-icon::before {
        content: "\e7bf";
    }

    .e-view.highcontrast #map-export-sample  .e-play-icon::before {
        content: "\e710";
    }

    .e-view.bootstrap5 #map-export-sample .e-play-icon::before, .e-view.bootstrap5-dark #map-export-sample .e-play-icon::before {
        content: "\e72e";
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, MapsTooltip, ImageExport, PdfExport } from '@syncfusion/ej2-vue-maps';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { worldMap } from '../maps/map-data/world-map';

export default {
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textbox': TextBoxComponent
  },
  data:function(){
      return{
        allowImageExport: true,
        allowPdfExport: true,
        titleSettings: {
            text: 'Location of the Wonders in the World',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        shapeData: worldMap,
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
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segoe UI'
                            }
                        },
                    }
                ],
        modedata:['JPEG','PNG','SVG','PDF'],
        layerdata:['Geometry', 'OSM'],
        isPrimary: true, content:'Export', style: 'text-transform:none !important;',
        exportWidth: '100%'
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    },
    changeLayerType: function(args){
            // let cotainerObj=document.getElementById('labels-container');
            // let tickPosition=document.getElementById('tickposition');
            let modeData = ['JPEG','PNG','PDF','SVG'];
            if (this.$refs.layertype.ej2Instances.value === 'OSM') {
                this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
                this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].shapeData = null;
                if (this.$refs.mode.ej2Instances.value === 'SVG') {
                    this.$refs.mode.ej2Instances.value = modeData[0];
                }
                    this.$refs.mode.ej2Instances.dataSource = modeData.slice(0, 3);
                } else {
                    this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].shapeData = worldMap;
                    this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].urlTemplate = '';
                    this.$refs.mode.ej2Instances.dataSource = modeData;
                }
                this.$refs.maps.ej2Instances.refresh();
    },
    /* custom code end */
    clickExport:function(args){     
           let fileName = document.getElementById('fileName').value;
           this.$refs.maps.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);
    }

}
}
</script>
