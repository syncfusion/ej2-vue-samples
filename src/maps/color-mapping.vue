<template>
<div>
<div class="col-lg-9 control-section">
    <div class="content-wrapper">
        <div>
        <ejs-maps ref="maps" id='container' :zoomSettings='zoomSettings' :load='load' :titleSettings='titleSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :dataSource='dataSource' :shapeDataPath='shapeDataPath' :shapeData='shapeData' :shapePropertyPath='shapePropertyPath'  :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>
</div>

<div id="template" style="display:none">
    <div class="toolback">
        <div class="listing2">
            <center>
                ${State}                                            
            </center>
        </div>
        <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">
        <div>
            <center>  <span class="listing1">Inches : </span><span class="listing2">${inches}</span></center>
        </div> 
        <div>
            <center>  <span class="listing1">Category : </span><span class="listing2">${value}</span> </center>
        </div>
    </div>
</div>

        <div style="float: right; margin-right: 10px;">Source:
            <a href="https://www.currentresults.com/Weather/US/average-state-precipitation-in-spring.php" target="_blank">www.currentresults.com</a>
        </div>
    </div>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%;">
     <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
        <tbody>
            <tr style="height: 70px">
                <td>
                    <div class="text" style="width: 90%;">Color Mapping Type</div>
                </td>
                <td>
                <div class="text">
                <ejs-dropdownlist id='colorMapping' style="width:110;" :dataSource='labelsdata' :fields='localFields' index=0 :width='labelswidth' :change='changeColor'></ejs-dropdownlist>
                </div>
                </td>
            </tr>
            <tr id="hideOne" style="height: 70px">
                    <td>
                        <div class="text"> Change Opacity</div>
                    </td>
                    <td>
                        <div class="text" style="margin-top: -4px; margin-left: -10px;">
                        <ejs-checkbox ref="opacity" id="opacity" :change="changeOpcity"></ejs-checkbox>
                        </div>
                    </td>
            </tr>
            <tr id="hideTwo" style="height: 70px">
                <td>
                    <div class="text">Min Opacity</div>
                </td>
                <td>
                  <div class="text">
                    <input type="range" id="minopacity" v-on:pointermove="changeMinOpacity" v-on:touchmove="changeMinOpacity" v-on:change="changeMinOpacity" step="0.1" value="0.5" min="0" max="1" style="width: 100%; margin-top: 10%;" />
                 </div>   
                </td>
            </tr>
            <tr id="hideThree" style="height: 70px">
                <td>
                    <div class="text">Max Opacity</div>
                </td>
                <td>
                 <div class="text">
                    <input type="range" id="maxopacity" v-on:pointermove="changeMaxOpacity" v-on:touchmove="changeMaxOpacity" v-on:change="changeMaxOpacity" step="0.1" value="1" min="0" max="1" style="width: 100%; margin-top: 10%;" />
                 </div>   
                </td>
            </tr>            
        </tbody>
    </table>
</div>
<div id="action-description">
    <p>
        This sample shows the average amount of rainfall and snowfall in spring season of all the states in the United States. The color mapping is applied to the shapes to differentiate them from other shapes.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a map with color mapping. The range color mapping and desaturation color mapping group the shapes based on the inches value, whereas the equal color mapping groups the shapes based on the category (low, moderate, or high) values. Legend is enabled in this example to represent each color mapping.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
    </p>
<br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The maps component features are segregated into individual modules by feature. To use a legend, inject the <code>Legend</code> module using the <code>Maps.Inject(Legend)</code> method.
    </p>
</div>
</div>
</template>
<style scoped>
    .toolback {
        border-radius: 4px;
        border: 1px #abb9c6;
        background: rgba(53, 63, 76, 0.90);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        width: 140px;
    }
    .listing1 {
         font-size:13px;
         color:#cccccc
    }
    .listing2 {
         font-size:13px;
         color:#ffffff;
         font-weight: 500;
    }  
    div.text {
        padding-left: 0px; padding-top: 0px;
    }  
    
 </style>
<script>
import Vue from 'vue';
import { MapsPlugin, Legend, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);
Vue.use(MapsPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
  data:function(){
      return{
        titleSettings: {
            text: 'Spring Precipitation Averages of US States',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: true,
            position: 'Bottom',
            height: '10',
            width: '80%',
            mode: 'Interactive',
            textStyle: {
                fontFamily: 'Segoe UI'
            },
            titleStyle: {
                size: '18px',
                fontFamily: 'Segoe UI'
            },
            title: {
                text: 'Inches'
            },
        },
        dataSource : new MapAjax('./src/maps/map-data/color-mapping.json'),
        shapeDataPath: 'State',
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/usa.json'),
        shapeSettings: {
                    colorValuePath: 'inches',
                    fill: '#E5E5E5',
                    border: {
                        color: 'black',
                        width: 0.2
                    },
                    colorMapping: [
                        {
                            from: 0.1, to: 1, color: '#DEEBAE', label: '0 - 1'
                        },
                        {
                            from: 1, to: 2, color: '#A4D6AD', label: '1 - 2'
                        },
                        {
                             from: 2, to: 3, color: '#37AFAB', label: '2 - 3'
                        },
                        {
                            from: 3, to: 4, color: '#547C84', label: '3 - 4'
                        },
                        {
                            from: 4, to: 5, color: '#CEBF93', label: '4 - 5'
                        },
                        {
                            from: 5, to: 6, color: '#a69d70', label: '5 - 6'
                        },
                    ],
        },
        tooltipSettings: {
                    visible: true,
                    valuePath: 'State',
                    template: '#template'
        },
        labelswidth: '100%',
        localFields: { text: 'text', value: 'value' },
        labelsdata:[
            {value: 'RangeColorMapping', text: 'Range'},
            {value: 'EqualColorMapping', text: 'Equal'},
            {value: 'DesaturationColorMapping', text: 'Desaturation'},
        ]
      }
  },
  provide: {
    maps: [Legend , MapsTooltip]
},
methods:{
    /* custom code start */
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        let dropDownElement = document.getElementById('colorMapping');
        let opacityCheck = document.getElementById('opacity');
        if(dropDownElement.value === 'Desaturation'){
            document.getElementById('hideOne').style.visibility = "visible"; 
            if(opacityCheck.checked){
                document.getElementById('hideTwo').style.visibility = "visible"; 
                document.getElementById('hideThree').style.visibility = "visible"; 
            } else{
                document.getElementById('hideTwo').style.visibility = "hidden"; 
                document.getElementById('hideThree').style.visibility = "hidden"; 
            }            
        } else{
             document.getElementById('hideOne').style.visibility = "hidden";                 
             document.getElementById('hideTwo').style.visibility = "hidden"; 
             document.getElementById('hideThree').style.visibility = "hidden"; 
        }     
    },
    /* custom code end */
    // Code for Property Panel
    changeColor:function(args){
        let maps = this.$refs.maps.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        let sampleValue = args.value;
        let element = sampleValue.toString();
            if (element === 'RangeColorMapping') {                
                maps.layers[0].shapeSettings.colorValuePath = 'inches';
                maps.layers[0].shapeSettings.colorMapping[0].from = 0.1;
                maps.layers[0].shapeSettings.colorMapping[0].to = 1;
                maps.layers[0].shapeSettings.colorMapping[0].color = '#DEEBAE';
                maps.layers[0].shapeSettings.colorMapping[0].label = '0 - 1';
                maps.layers[0].shapeSettings.colorMapping[0].value = null;
                maps.layers[0].shapeSettings.colorMapping[1].from = 1;
                maps.layers[0].shapeSettings.colorMapping[1].to = 2;
                maps.layers[0].shapeSettings.colorMapping[1].color = '#A4D6AD';
                maps.layers[0].shapeSettings.colorMapping[1].label = '1 - 2';
                maps.layers[0].shapeSettings.colorMapping[1].value = null;
                maps.layers[0].shapeSettings.colorMapping[2].from = 2;
                maps.layers[0].shapeSettings.colorMapping[2].to = 3;
                maps.layers[0].shapeSettings.colorMapping[2].color = '#37AFAB';
                maps.layers[0].shapeSettings.colorMapping[2].label = '2 - 3';
                maps.layers[0].shapeSettings.colorMapping[2].value = null;
                maps.layers[0].shapeSettings.colorMapping[3].from = 3;
                maps.layers[0].shapeSettings.colorMapping[3].to = 4;
                maps.layers[0].shapeSettings.colorMapping[3].color = '#547C84';
                maps.layers[0].shapeSettings.colorMapping[3].label = '3 - 4';
                maps.layers[0].shapeSettings.colorMapping[3].value = null;
                maps.layers[0].shapeSettings.colorMapping[4].from = 4;
                maps.layers[0].shapeSettings.colorMapping[4].to = 5;
                maps.layers[0].shapeSettings.colorMapping[4].color = '#CEBF93';
                maps.layers[0].shapeSettings.colorMapping[4].label = '4 - 5';
                maps.layers[0].shapeSettings.colorMapping[4].value = null;
                maps.layers[0].shapeSettings.colorMapping[5].from = 5;
                maps.layers[0].shapeSettings.colorMapping[5].to = 6;
                maps.layers[0].shapeSettings.colorMapping[5].color = '#a69d70';
                maps.layers[0].shapeSettings.colorMapping[5].label = '5 - 6';
                maps.layers[0].shapeSettings.colorMapping[5].value = null;
                maps.legendSettings.title.text = 'Inches';
                maps.refresh();
            } else if (element === 'EqualColorMapping') {                
                maps.layers[0].shapeSettings.colorValuePath = 'value';
                maps.layers[0].shapeSettings.colorMapping[0].from = null;
                maps.layers[0].shapeSettings.colorMapping[0].to = null;
                maps.layers[0].shapeSettings.colorMapping[0].color = '#DEEBAE';
                maps.layers[0].shapeSettings.colorMapping[0].label = null;
                maps.layers[0].shapeSettings.colorMapping[0].value = 'Low';
                maps.layers[0].shapeSettings.colorMapping[1].from = null;
                maps.layers[0].shapeSettings.colorMapping[1].to = null;
                maps.layers[0].shapeSettings.colorMapping[1].value = 'Moderate';
                maps.layers[0].shapeSettings.colorMapping[1].color = '#A4D6AD';
                maps.layers[0].shapeSettings.colorMapping[1].label = null;
                maps.layers[0].shapeSettings.colorMapping[5].label = null;
                maps.layers[0].shapeSettings.colorMapping[2].to = null;
                maps.layers[0].shapeSettings.colorMapping[2].from = null;
                maps.layers[0].shapeSettings.colorMapping[2].color = '#37AFAB';
                maps.layers[0].shapeSettings.colorMapping[2].value = 'High';
                maps.layers[0].shapeSettings.colorMapping[2].label = null;
                maps.layers[0].shapeSettings.colorMapping[3].to = null;
                maps.layers[0].shapeSettings.colorMapping[5].color = null;
                maps.layers[0].shapeSettings.colorMapping[3].color = null;
                maps.layers[0].shapeSettings.colorMapping[3].from = null;
                maps.layers[0].shapeSettings.colorMapping[4].value = null;
                maps.layers[0].shapeSettings.colorMapping[5].from = null;
                maps.layers[0].shapeSettings.colorMapping[3].label = null;
                maps.layers[0].shapeSettings.colorMapping[4].from = null;
                maps.layers[0].shapeSettings.colorMapping[4].to = null;
                maps.layers[0].shapeSettings.colorMapping[3].value = null;
                maps.layers[0].shapeSettings.colorMapping[4].color = null;
                maps.layers[0].shapeSettings.colorMapping[4].label = null;
                maps.layers[0].shapeSettings.colorMapping[5].to = null;
                maps.layers[0].shapeSettings.colorMapping[5].value = null;
                maps.legendSettings.title.text = 'Category';
                maps.refresh();
            }else if (element === 'DesaturationColorMapping') {                
                let minOpacity = document.getElementById('minopacity');
                let maxOpacity = document.getElementById('maxopacity');
                if (opacity.checked) {
                    maps.layers[0].shapeSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
                    maps.layers[0].shapeSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
                } else {
                    maps.layers[0].shapeSettings.colorMapping[0].minOpacity = null;
                    maps.layers[0].shapeSettings.colorMapping[0].maxOpacity = null;
                }                
                maps.layers[0].shapeSettings.colorValuePath = 'inches';
                maps.layers[0].shapeSettings.colorMapping[0].from =  0.1;
                maps.layers[0].shapeSettings.colorMapping[0].to = 6;
                maps.layers[0].shapeSettings.colorMapping[0].color = ['#F0D6AD', '#19547B'];
                maps.layers[0].shapeSettings.colorMapping[0].value = null;
                maps.layers[0].shapeSettings.colorMapping[0].label = '0 - 6';
                maps.layers[0].shapeSettings.colorMapping[1].from = null;
                maps.layers[0].shapeSettings.colorMapping[1].to = null;
                maps.layers[0].shapeSettings.colorMapping[1].color = null;
                maps.layers[0].shapeSettings.colorMapping[1].value = null;
                maps.layers[0].shapeSettings.colorMapping[1].label = null;
                maps.layers[0].shapeSettings.colorMapping[2].from = null;
                maps.layers[0].shapeSettings.colorMapping[2].to = null;
                maps.layers[0].shapeSettings.colorMapping[2].color = null;
                maps.layers[0].shapeSettings.colorMapping[2].value = null;
                maps.layers[0].shapeSettings.colorMapping[2].label = null;
                maps.layers[0].shapeSettings.colorMapping[3].from = null;
                maps.layers[0].shapeSettings.colorMapping[3].to = null;
                maps.layers[0].shapeSettings.colorMapping[3].color = null;
                maps.layers[0].shapeSettings.colorMapping[3].label = null;
                maps.layers[0].shapeSettings.colorMapping[3].value = null;
                maps.layers[0].shapeSettings.colorMapping[4].from = null;
                maps.layers[0].shapeSettings.colorMapping[4].to = null;
                maps.layers[0].shapeSettings.colorMapping[4].color = null;
                maps.layers[0].shapeSettings.colorMapping[4].label = null;
                maps.layers[0].shapeSettings.colorMapping[4].value = null;
                maps.layers[0].shapeSettings.colorMapping[5].from = null;
                maps.layers[0].shapeSettings.colorMapping[5].to = null;
                maps.layers[0].shapeSettings.colorMapping[5].color = null;
                maps.layers[0].shapeSettings.colorMapping[5].label = null;
                maps.layers[0].shapeSettings.colorMapping[5].value = null;
                maps.legendSettings.title.text = 'Inches';
                maps.refresh();
            }
            opacity.dataBind();
    },
    changeOpcity: function(args) {
        let maps = this.$refs.maps.ej2Instances;
        let minOpacity = document.getElementById('minopacity');
        let maxOpacity = document.getElementById('maxopacity');
        if (args.checked) {
            maps.layers[0].shapeSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
            maps.layers[0].shapeSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
            maps.layers[0].shapeSettings.colorMapping[1].minOpacity = parseFloat(minOpacity.value);
            maps.layers[0].shapeSettings.colorMapping[1].maxOpacity = parseFloat(maxOpacity.value);           
        } else {
            maps.layers[0].shapeSettings.colorMapping[0].minOpacity = null;
            maps.layers[0].shapeSettings.colorMapping[0].maxOpacity = null;
            maps.layers[0].shapeSettings.colorMapping[1].minOpacity = null;
            maps.layers[0].shapeSettings.colorMapping[1].maxOpacity = null;           
        }
        maps.refresh();
    },
    changeMinOpacity: function() {
        let maps = this.$refs.maps.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        if (opacity.checked) {
            let slider = document.getElementById('minopacity');
            let minOpacity = parseFloat(slider.value);
            maps.layers[0].shapeSettings.colorMapping[0].minOpacity = minOpacity;
            maps.layers[0].shapeSettings.colorMapping[1].minOpacity = minOpacity;
            maps.refresh();
        }
    },
    changeMaxOpacity: function() {
        let maps = this.$refs.maps.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        if (opacity.checked) {
            let slider = document.getElementById('maxopacity');
            let maxOpacity = parseFloat(slider.value);
            maps.layers[0].shapeSettings.colorMapping[0].maxOpacity = maxOpacity;
            maps.layers[0].shapeSettings.colorMapping[1].maxOpacity = maxOpacity;
            maps.refresh();
        }
    }
}
})
</script>