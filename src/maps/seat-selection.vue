<template>
<div>
<div class="col-lg-9 control-section">
        <div style="width:200px;margin:auto;padding-bottom:20px">
            <img src="src/maps/images/bus-icon.png" alt="Bus icon" style="width:25px;height:25px;float:left">
            <div style="padding-left:30px;font-size:20px;font-weight:400;">Bus seat selection</div>
        </div>        
        <div style="border: 3px solid darkgray;width:200px;display:block;margin:auto;border-radius:5px">
            <img src="src/maps/images/wheel.png" alt="Steering wheel icon" style="width:30px;height:30px;margin-left:18%;margin-top:10px">
<ejs-maps id='maps' :load='load' :projectionType='projectionType' :itemSelection='itemSelection' :height='height' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :geometryType='geometryType' :shapeData='shapeData'  :selectionSettings='selectionSettings' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>           
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <br/>
        <table id="property" title="Seat Selection" style="width: 100%;font-weight:400 !important">
            <br/>
            <tbody>
                <tr style="height: 30px">
                    <td>
                        <div style="height:0;width:15px;padding-bottom:5px;background-color:gray;border-radius:25%"></div>

                        <div id="available" style="margin-top: -25px;margin-left: 15px">Available</div>
                    </td>
                </tr>
                <tr style="height: 30px">
                    <td>
                        <div style="height:0;width:15px;padding-bottom:5px;background-color:Green;border-radius:25%"></div>

                        <div id="selected" style="margin-top: -25px;margin-left: 15px">Selected</div>
                    </td>
                </tr>
                <tr style="height: 30px">
                    <td>
                        <div style="height:0;width:15px;padding-bottom:5px;background-color:Orange;border-radius:25%"></div>

                        <div id="booked" style="margin-top: -25px;margin-left: 15px">Booked</div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div id="seat-parent">
            <span id='clear-btn' v-on:click="clickClear" >Clear Selection</span><br/><br/>
            <div id="selectedseats"></div>
        </div>
<div id="action-description">
                <p>
                    This sample visualizes a seating chart, in which the seats can be selected similarly to bus seat booking. Available, booked, and selected seats will be displayed in different colors.
                </p>	
</div>
<div id="description">
            <p>
              In this example, you can see how to render the normal geometry type shapes on the map. Selection is enabled in this sample. You can use the <code>fill</code>, <code>width</code>, and <code>color</code> properties in the <code>selectionSettings</code> to customize the appearance of the shapes after selection.
            </p>
        <br/>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
             Maps component features are segregated into individual feature-wise modules. To use the selection, inject the <code>Selection</code> module using the <code>Maps.Inject(Selection)</code> method.
            </p>       
        </div>
</div>
</template>
<style>
            #control-container {
                padding: 0px !important;
            }
            #seat-parent {
                text-align: center;
                cursor: pointer
            }
            #selectedseats {
                padding: 10px;                
            }
            #selectedseats, #seat-info {             
                font-size: 14px;
            }
            #clear-btn {
                padding: 10px;
                border: 2px solid rgb(241, 235, 247);
                border-radius: 8px;
                background: rgb(246, 245, 248);
                color: black;
                font-size: 14px;
            }
            .seats {
                padding-top: 15px;
                font-weight: bold;                
            }
            #property div{
                padding-left: 10px;
                padding-top: 10px;
            }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Selection,MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        projectionType: 'Equirectangular',
        height: '400',
        zoomSettings: {
            enable: false
        },
        geometryType: 'Normal',
        shapeData: new MapAjax('./src/maps/map-data/seat.json'),
        shapeSettings: {
                    colorValuePath: 'fill'
        },
        selectionSettings: {
                    enable: true,
                    opacity: 1,
                    enableMultiSelect: true
        }
      }
  },
  provide:{
      maps:[Selection]
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
    itemSelection:function(args){
        let seatInfo = document.getElementById('selectedseats');
          if ((args.shapeData).fill === 'Orange') {
                args.fill = 'Orange !important';
                document.getElementById(args.target).setAttribute('class', 'ShapeselectionMapStyle');
                return;
            }
            args.fill = 'green';
            let seat = (args.shapeData).seatno;
            let connector = ' ';
            if (seatInfo.innerHTML === '') {
                seatInfo.innerHTML = '<span id="seat-info">Seats Selected -</span>';
            } else {
                connector = ', ';
            }
            let seatString = '<span class="seats">' + connector + seat + '</span>';
            let seatString1 = ' ' + seat + '</span><span class="seats">,';
            let lastString = '<span id="seat-info">Seats Selected -</span><span class="seats"> ' + seat + '</span>';
            if (seatInfo.innerHTML.indexOf(seatString) === -1 && seatInfo.innerHTML.indexOf(seatString1) === -1 &&
                seatInfo.innerHTML.indexOf(lastString) === -1) {
                seatInfo.innerHTML += '<span class="seats">' + connector + seat + '</span>';
            } else {
                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString, '');
                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString1, '');
                if (seatInfo.innerHTML === lastString) {
                    seatInfo.innerHTML = '';
                }
            }
    },
    clickClear:function(args){
        let seatInfo = document.getElementById('selectedseats');
        seatInfo.innerHTML = '';
        let selected = document.getElementsByClassName('ShapeselectionMapStyle');
        for (let i = 0, length = selected.length; i < length; i++) {
            selected[0].setAttribute('class', '');
        }
    }
}
})
</script>
