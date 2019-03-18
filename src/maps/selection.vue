<template>
<div class="control-section">
 <div id="chart"></div>
<ejs-maps id='container' align="center" :load='load' :itemSelection='itemSelection' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' :highlightSettings='highlightSettings' :selectionSettings='selectionSettings'></e-layer>
    </e-layers>
</ejs-maps>    

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/United_States_presidential_election,_2016" target="_blank">en.wikipedia.org</a>
    </div>
 
 <div class="popup" id="closepopup">
	 <span id='closebutton'>x</span>
     <table style="margin-top:5px;width:auto">
         <tr>
             <td align="left" style="padding:0.3px">
                 <label id="winner" style="color:#666666;font-size:12px;font-family:Roboto;font-weight:700;"></label>
             </td>
         </tr>
         <tr style= "border-top:1px solid #CCCCCC">
             <td align="left" style="padding:0.3px;padding-top:0.5em;">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;">State</label>
             </td>
             <td align="left" style="padding:0.3px;padding-top:0.5em;">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px">:</label>
             </td>
             <td align="left" style="padding:0.3px;padding-top:0.5em;">
                 <label id="state" style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px"></label>
             </td>
         </tr>
         <tr>
             <td align="left" style="padding:0.3px">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;white-space:nowrap">Trump</label>
             </td>
             <td align="left" style="padding:0.3px">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px">:</label>
             </td>
             <td align="left" style="padding:0.3px">
                 <label id="trumpvotes" style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px"></label>
             </td>
         </tr>
         <tr>
             <td align="left" style="padding:0.3px">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;white-space:nowrap">Clinton</label>
             </td>
             <td align="left" style="padding:0.3px">
                 <label style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px">:</label>
             </td>
             <td align="left" style="padding:0.3px">
                 <label id="clintonvotes" style="color:#575757;font-size:12px;font-family:Roboto;font-weight:400;margin-left:8px"></label>
             </td>
         </tr>
     </table>
 </div>
<div id="action-description">
        <p>
            This sample visualizes USA president election results in the year 2016. Vote details of a state will be displayed in a popup on clicking a state. Placed interactive legend at the top of the map. </p>
    </div>
<div id="description">
        <p>
           In this example, you can see how to apply various styles for a shape in the map, when it is clicked or mouse hovered. 
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use selection, inject the <code>Selection</code> module using the <code>Maps.Inject(Selection)</code> method, and use highlight by injecting the <code>Highlight</code> module.
        </p>
       
    </div>
</div>
</template>
<style type="text/css">
#container{
margin-top: -10px;

}
 .tip {
     border: 1px solid #4D4D4D;
     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
     border-radius: 7px;
     margin-right: 25px;
     min-width: 110px;
     padding-top: 9px;
     padding-right: 10px;
     padding-left: 10px;
     width: auto;
     height: auto;
     background: #4D4D4D;
 }

#chart{
    display: none!important;
}
 .popup {
     border: 0.5px groove #CCCCCC;
     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
     left: 70%;
     top: 65%;     
     border-radius: 2px;
     display: none;
	 max-width: 220px;
     position: absolute;
     padding: 1em;
     background: #F4F4F4;
 }

 .close-btn {
     border: 2px solid #5B5B5B;
     margin-left: -9px;
     position: absolute;
     opacity: 0.8;
     background-color: #605F61;
     border-radius: 50%/50%;
     width: 20px;
     height: 19px;
     display: none;
     z-index: 1000;
 }

     .close-btn a {
         margin-left: 2px;
         font-weight: bold;
         color: white;
         text-decoration: none;
     }
	 
#closebutton {
    float:right;
	font-size:16px;
    display:inline-block;
    padding:2px 5px;
	cursor:pointer;
    color:black;
}

.firstLine td{
    border-bottom: 2px solid black;
}
</style>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsTooltip, Selection, Highlight, Legend, MapAjax } from '@syncfusion/ej2-vue-maps';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        titleSettings: {
            text: 'USA Election Results - 2016',
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Top',
            width: '80%',
            textStyle: {
                fontWeight: '400',
                size: '14px'
            }
        },
        zoomSettings: {
            enable: false
        },
        shapeData: new MapAjax('./src/maps/map-data/usa.json'),
        shapePropertyPath: 'name',
        shapeDataPath: 'State',
        dataSource: new MapAjax('./src/maps/map-data/selection-datasource.json'),
        tooltipSettings: {
                    visible: true,
                    valuePath: 'State'
        },
        highlightSettings: {
                    enable: true,
                    fill: '#A3B0D0'
        },
        selectionSettings: {
                    enable: true,
                    fill: '#4C515B ',
                    opacity: 1
        },
        shapeSettings: {
        colorValuePath: 'Candidate',
        colorMapping: [
                        {
                            value: 'Trump', color: '#D84444'
                        },
                        {
                            value: 'Clinton', color: '#316DB5'
                        }
                    ]
            }
      }
  },
provide: {
    maps: [MapsTooltip, Selection, Highlight, Legend]
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
         if (args.shapeData !== isNullOrUndefined) {
                let matched = navigator.userAgent;
                let browser = matched.toLowerCase();
                let isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
                if (isIE11) {
                    browser = 'msie';
                }
                let object = args.data;
                let popup = document.getElementById('closepopup');
                let closebutton = document.getElementById('closebutton');
                let winner = document.getElementById('winner');
                let state = document.getElementById('state');
                let trumpvote = document.getElementById('trumpvotes');
                let clintonvote = document.getElementById('clintonvotes');
                popup.style.display = 'block';
                closebutton.style.display = 'block';
                closebutton.onclick = () => {
                    let popup = document.getElementById('closepopup');
                    let closebutton = document.getElementById('closebutton');
                    popup.style.display = 'none';
                    closebutton.style.display = 'none';
                };

                if (browser !== 'mozilla') {
                    state.innerText = (args.data).State;
                    winner.innerText = (args.data).Candidate;
                    trumpvote.innerText = (args.data).Trump + '%';
                    clintonvote.innerText = (args.data).Clinton + '%';
                } else {
                    state.textContent = (args.data).State;
                    winner.textContent = (args.data).Candidate;
                    trumpvote.textContent = (args.data).Trump + '%';
                    clintonvote.textContent = (args.data).Clinton + '%';
                }
            }
    }
}
})
</script>
