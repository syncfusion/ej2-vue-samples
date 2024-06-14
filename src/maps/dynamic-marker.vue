<template>
<main><div>
<div class="col-lg-9 control-section">
<ejs-maps ref="maps" id='container' :load='load' :click='click' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :urlTemplate= 'urlTemplate'></e-layer>
    </e-layers>
</ejs-maps>
<div align="center">
            <p>
                <i>
                    <div align="center">
                        <p id="content" style="font-size: 16px;color:grey">Click on the maps to add marker/navigation line</p>
                    </div>
                </i>
            </p>
        </div>
</div>

<div class="col-lg-3 property-section">
    <table role="none" id="property" title="Properties" style="width: 100%;">
          <colgroup>
            <col span="1" style="width: 60%;">
            <col span="1" style="width: 40%;">
         </colgroup>
         <tbody>
            <tr style="height: 50px">
                <td>
                    <div class="text">Marker</div>
                </td>
                <td>
                <div class="checkbox">
                    <ejs-checkbox ref="marker" id="marker" :checked="markerCheck" v-model="markerCheck" :change='markerChange'></ejs-checkbox>
                </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="text">Line</div>
                </td>
                <td>
                <div class="checkbox">
                    <ejs-checkbox ref="line" id="line" :change='lineChange' :disabled='markerDisabled' v-model="lineCheck"></ejs-checkbox>
                </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="text" style="width: 82%;">Connecting line</div>
                </td>
                <td>
                <div class="checkbox">
                    <ejs-checkbox ref="connect" id="connect" :disabled='ConnectDisabled' v-model="connectCheck" :change='connectChange'></ejs-checkbox>
                </div>    
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="text"> Marker type</div>
                </td>
                <td>
                <div class="text">
                    <ejs-dropdownlist ref="type" id='type' :enabled='dropDisabled' style="width:100;" :dataSource='labelsdata' :fields='localFields' index="0" :width='labelswidth'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="text">Width</div>
                </td>
                <td>
                   <div class="text">
                        <ejs-textbox ref="text" id="width" :enabled='widthDisabled' value="1"  style="width:60px" v-model="textValue" :change='widthChange'></ejs-textbox>
                    </div>
                </td>
            </tr>
             <tr style="height: 50px">
                <td align="center">
                    <div style="margin-left: 50%;">
                        <ejs-button ref="togglebtn" id="togglebtn" :disabled='disabled' style="text-transform:none !important;width: 80px;margin-top: 10px"  v-on:click="btnClick" v-model="togglebtnCheck">Clear</ejs-button>
                    </div>
                </td>
            </tr>
            </tbody>
    </table>
</div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
        <p>
            This sample shows how custom markers and lines can be dynamically added to our maps with UI interaction. Marker or line can be chosen from the properties panel.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
        <p>
          Using UI interaction, the markers or line can be added as follows: You can get the currently clicked geo location by passing "PointerEvent" or "MouseEvent" argument 
          and layer index to the "getGeoLocation" method. Then, use that geo position to place the marker or line in the appropriate position.
        </p>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           The features of maps component are segregated into individual feature-wise modules. To use navigation lines and marker, you need to inject the NavigationLine and Marker module using the Maps.Inject(NavigationLine, Marker) method.
        </p>
    </section>
</main>
</template>
<style scoped>
    #width {
        border-bottom-color: inherit;
        background-image: none;
    }
    div.text {
        padding-left: 0px; padding-top: 0px;
    }
     div.checkbox {
        padding-left: 0px; padding-top: 0px;
        margin-left: -30px;margin-top: 7px;
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, Marker, MapsTooltip, MapAjax, ILoadEventArgs,NavigationLine, MarkerSettingsModel, MarkerSettings, Zoom  } from '@syncfusion/ej2-vue-maps';
import { topPopulation } from '../maps/map-data/marker-location';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent, ButtonComponent, buttonObserver } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';

let latitude = [];
let longitude = [];
let navigationLines = [];


export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-button': ButtonComponent,
    'ejs-textbox': TextBoxComponent
},
data:function(){
    return{
        urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png',
        zoomSettings: {
            enable: true
        },
        labelswidth: '100%',
        localFields: { text: 'text', value: 'value' },
        labelsdata:[
            {value: 'Image', text: 'Image'},
            {value: 'Circle', text: 'Circle'},
            {value: 'Diamond', text: 'Diamond'},
            {value: 'Star', text: 'Star'},
            {value: 'Triangle', text: 'Triangle'},
        ],
        markerDisabled:false,
        disabled:true,
        markerCheck:true,
        lineCheck:false,
        connectCheck:false,
        togglebtnCheck:false,
        ConnectDisabled: true,
        textValue: 1,
        widthDisabled: false,
        dropDisabled: true
    }
},
provide: {
    maps: [Marker, MapsTooltip, NavigationLine, Zoom]
},
/* custom code start */
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },

    markerChange: function(args){
        this.markerCheck = args.checked;
        if(args.checked){
           this.dropDisabled = true; 
        } else {
            this.dropDisabled = false; 
        }
    },

    connectChange : function(args){
        this.connectCheck = args.checked;
        if(!args.checked){
            this.emptySavedLinePositions();
        }
    },
    
    widthChange : function(args){
        this.textValue = args.value;
    },
    
    click: function(args){
        let maps = this.$refs.maps.ej2Instances;
        if(this.markerCheck){
           this.addMarker(args); 
        }
        if(this.lineCheck && !this.connectCheck) {
            this.addLine(args, this.textValue);
        }
        if (this.connectCheck && !this.ConnectDisabled) {
            this.addLine(args, this.textValue, true);
        }
        if (this.markerCheck || this.lineCheck || this.connectCheck) {
            maps.refresh();
            if (this.disabled && (maps.layers[0].markerSettings.length ||
                    maps.layers[0].navigationLineSettings.length)) {
                this.disabled = false;
            }
        }
    },
    btnClick: function(args){
        let maps = this.$refs.maps.ej2Instances;
        maps.layers[0].markerSettings = [];
        maps.layers[0].navigationLineSettings = [];
        navigationLines = [];
        this.emptySavedLinePositions();
        this.disabled = true;
    },
    lineChange: function(args) {
       this.lineCheck = args.checked;
       if(args.checked){
           this.ConnectDisabled= false;
           this.widthDisabled = true;
       } else {
           this.emptySavedLinePositions();
           this.ConnectDisabled= true;
           this.widthDisabled = false;
       } 
    },
    emptySavedLinePositions: function() {
        latitude = [];
        longitude = [];
    },
    
    addMarker: function(args){
        let marker; 
        let markerShape = this.$refs.type.ej2Instances;
        if (args["latitude"] !== null && args["longitude"] !== null) {
            let layerIndex = (args.target.indexOf('_LayerIndex_') !== -1) ?
                parseFloat(args.target.split('_LayerIndex_')[1].split('_')[0]) : 0;
            let maps = this.$refs.maps.ej2Instances;
            let dynamicMarker = maps.layersCollection[layerIndex].markerSettings;
            dynamicMarker.push(new MarkerSettings(maps, 'markerSettings', marker));
            let markerIndex = dynamicMarker.length - 1;
            dynamicMarker[markerIndex].visible = true;
            dynamicMarker[markerIndex].dataSource = [
                { latitude: args["latitude"], longitude: args["longitude"], name: 'dynamicmarker' }
            ];
            dynamicMarker[markerIndex].animationDuration = 0;
            dynamicMarker[markerIndex].fill = '#DB4537';
            dynamicMarker[markerIndex].height = (markerShape.value !== 'Image') ? 12 : 20;
            dynamicMarker[markerIndex].width = (markerShape.value !== 'Image') ? 12 : 20;
            dynamicMarker[markerIndex].imageUrl = (markerShape.value !== 'Image') ? '' : 'src/maps/images/ballon.png';
            dynamicMarker[markerIndex].shape = (markerShape.value !== 'Image') ? markerShape.value : 'Image';
        }
    },
    addLine : function(lineArgs, lineWidth, connectiveLine){
        let maps = this.$refs.maps.ej2Instances; 
        if (lineArgs.latitude != null && lineArgs.longitude != null) {
            latitude.push(lineArgs.latitude);
            longitude.push(lineArgs.longitude);
        } 
        if(latitude.length>=2){
            navigationLines.push({
            "visible": true,
            "latitude": [latitude[(latitude.length - 2)], latitude[(latitude.length - 1)]],
            "longitude":[longitude[(longitude.length - 2)], longitude[(longitude.length - 1)]],
            "angle": 0,
            "width": (lineWidth > 5) ? 5 : (((5 >= lineWidth) && (lineWidth >= 1)) ? lineWidth : 1),
            "color": "blue"
        });
        maps.layers[0].navigationLineSettings = navigationLines;
        if (!connectiveLine) {
            this.emptySavedLinePositions();
        }
        }
    },
}
/* custom code end */
}
</script>
    