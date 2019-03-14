<template>
<div>
    <div class="col-lg-9 control-section">
        <ejs-treemap ref="treemap" id='container' align="center" :load='load' :titleSettings='titleSettings' :rangeColorValuePath='rangeColorValuePath' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :leafItemSettings='leafItemSettings' :legendSettings='legendSettings' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'></ejs-treemap>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                <td style="width: 50%">
                    <div class="property-text">Color Mapping Type</div>
                </td>
                <td style="width: 50%;">
                    <ejs-dropdownlist id='colorMapping' style="width:110;" :dataSource='labelsdata' :fields='localFields' index=0 :width='labelswidth' :change='changeColor'></ejs-dropdownlist>
                </td>
            </tr>
            <tr id="hideOne">
                <td style="width: 40%">
                    <div class="property-text"> Change Opacity</div>
                </td>
                <td style="width: 40%;">
                    <div>
                    <ejs-checkbox ref="opacity" id="opacity" :change="changeOpcity"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr id="hideTwo">
                <td style="width: 50%">
                    <div class="property-text" style="margin-top:12%">Min Opacity</div>
                </td>
                <td style="width: 50%;">
                    <input type="range" id="minopacity" v-on:pointermove="changeMinOpacity" v-on:touchmove="changeMinOpacity" v-on:change="changeMinOpacity" step="0.1" value="0.5" min="0" max="1" style="width:100%;margin-top: 20%" />
                </td>
            </tr>
            <tr id="hideThree">
                <td style="width: 50%">
                    <div class="property-text" style="margin-top:12%">Max Opacity</div>
                </td>
                <td style="width: 50%;">
                    <input type="range" id="maxopacity" v-on:pointermove="changeMaxOpacity" v-on:touchmove="changeMaxOpacity" v-on:change="changeMaxOpacity" step="0.1" value="1" min="0" max="1" style="width:100%;margin-top: 20%" />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div id="template" style="display:none">
    <div class="toolback">
                <div class="listing2">
                    <center>
                        ${Name}                                            
                    </center>
                </div>
                <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">
                <div>
                    <center>  <span class="listing1">Area : </span><span class="listing2">${Area}</span></center>
                </div> 
                <div>
                    <center>  <span class="listing1">Continent : </span><span style="display:inline-block;" class="listing2">${Location}</span> </center>
                </div>
    </div>
</div>
<div id="action-description">
     <p>
        This sample visualizes the top 10 largest islands in the world based on area. The color mapping is applied to the items to differentiate them from other items.
    </p>
</div>
<div id="description">
   <p>
        In this example, you can see how to render a tree map with color mapping. The range color mapping and desaturation color mapping group the shapes based on the area size, whereas the equal color mapping groups the shapes based on the continent value. The legend is enabled in this example to represent each color mapping.
    </p>
    <p>
        The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
            The TreeMap component features are segregated into individual modules by feature. To use a legend, inject the <code>Legend</code> module using the <code>TreeMap.Inject(TreeMapLegend)</code> method.
    </p>
</div>
</div>
</template>
<style>
        .toolback {
            border-radius: 4px;
            border: 1px #abb9c6;
            opacity: 90%;
            background: rgba(53, 63, 76, 0.90);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);
            padding-bottom: 10px;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            width: 170px;
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
        .property-text {
                font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
                font-size: 13px !important;
                font-weight: 400 !important;
            }
</style>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip, TreeMapLegend, TreeMapAjax } from "@syncfusion/ej2-vue-treemap";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Top 10 largest islands in the World',
            textStyle: { size: '15px' }
        },
        dataSource: new TreeMapAjax('./src/treemap/treemap-data/color.json'),
        tooltipSettings: {
            visible: true,
            format: 'Name: ${Name}<br>Area: ${Area} per square kms<br>Continent: ${Location}',
            opacity: 0.8
        },
        legendSettings: {
            visible: true,
            position: 'Bottom',
            mode: 'Interactive',
            height: '10',
            title: {
                text: 'Area'
            },
        },
        useGroupingSeparator: true,
        rangeColorValuePath: 'Area',
        weightValuePath: 'Area',
        leafItemSettings: {
            labelPath: 'Name',
            border: { color: 'white', width: 0.5 },
            colorMapping: [
                { from: 100000, to: 250000, label: '0.1M - 0.25M', color: '#547C84' },
                { from: 250000, to: 550000, label: '0.25M - 0.55M', color: '#37AFAB' },
                { from: 550000, to: 750000, label: '0.55M - 0.75M', color: '#A4D6AD' },
                { from: 750000, to: 2250000, label: '0.75M - 2M', color: '#DEEBAE' },
                { to: null, from: null,  color: 'null' },
                { to: null, from: null,  color: 'null' },
            ]
        },
        labelswidth: 120,
        localFields: { text: 'text', value: 'value' },
        labelsdata:[
            {value: 'RangeColorMapping', text: 'Range'},
            {value: 'EqualColorMapping', text: 'Equal'},
            {value: 'DesaturationColorMapping', text: 'Desaturation'},
        ]
}
},
provide:{
    treemap:[TreeMapTooltip, TreeMapLegend]
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
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
        let treemap = this.$refs.treemap.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        let sampleValue = args.value;
        let element = sampleValue.toString();
            if (element === 'RangeColorMapping') {                
                treemap.rangeColorValuePath = 'Area';
				treemap.leafItemSettings.colorMapping[2].minOpacity = null;
                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].minOpacity = null;
                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[4].minOpacity = null;
                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[3].minOpacity = null;
                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[5].minOpacity = null;
                treemap.leafItemSettings.colorMapping[5].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[0].from = 100000;
                treemap.leafItemSettings.colorMapping[0].to = 250000;
                treemap.leafItemSettings.colorMapping[0].value = null;
                treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].value = null;
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 0.25M';
                treemap.leafItemSettings.colorMapping[0].color = '#547C84';
                treemap.leafItemSettings.colorMapping[1].from = 250000;
                treemap.leafItemSettings.colorMapping[1].to = 500000;
                treemap.leafItemSettings.colorMapping[1].label = '0.25M - 0.50M';
                treemap.leafItemSettings.colorMapping[1].color = '#37AFAB';
                treemap.leafItemSettings.colorMapping[2].from = 500000;
                treemap.leafItemSettings.colorMapping[2].to = 750000;
                treemap.leafItemSettings.colorMapping[2].label = '0.5M - 0.75M';
                treemap.leafItemSettings.colorMapping[2].color = '#A4D6AD';
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[3].from = 750000;
                treemap.leafItemSettings.colorMapping[3].to = 2200000;
                treemap.leafItemSettings.colorMapping[3].label = '0.75M - 2M';
                treemap.leafItemSettings.colorMapping[3].color = '#DEEBAE';
                treemap.leafItemSettings.colorMapping[4].from = null;
                treemap.leafItemSettings.colorMapping[3].value = null;
                treemap.leafItemSettings.colorMapping[4].to = null;
                treemap.leafItemSettings.colorMapping[4].label = null;
                treemap.leafItemSettings.colorMapping[4].value = null;
                treemap.leafItemSettings.colorMapping[4].color = null;
                treemap.leafItemSettings.colorMapping[5].to = null;
                treemap.leafItemSettings.colorMapping[5].label = null;
                treemap.leafItemSettings.colorMapping[5].value = null;
                treemap.leafItemSettings.colorMapping[5].color = null;
                treemap.leafItemSettings.colorMapping[5].from = null;
                treemap.legendSettings.title.text = 'Area';
                treemap.refresh();
            } else if (element === 'EqualColorMapping') {                
                treemap.rangeColorValuePath = null;
                treemap.leafItemSettings.colorMapping[0].from = null;
                treemap.leafItemSettings.colorMapping[0].to = null;
                treemap.leafItemSettings.colorMapping[0].label = null;
                treemap.leafItemSettings.colorMapping[1].label = null;
                treemap.leafItemSettings.colorMapping[2].label = null;
                treemap.leafItemSettings.colorMapping[3].label = null;
                treemap.leafItemSettings.colorMapping[4].label = null;
                treemap.leafItemSettings.colorMapping[0].value = 'North America';
                treemap.leafItemSettings.colorMapping[0].color = '#DEEBAE';
                treemap.leafItemSettings.colorMapping[1].from = null;
                treemap.leafItemSettings.colorMapping[1].to = null;
                treemap.leafItemSettings.colorMapping[1].value = 'Oceania';
                treemap.leafItemSettings.colorMapping[1].color = '#A4D6AD';
                treemap.leafItemSettings.colorMapping[2].from = null;
                treemap.leafItemSettings.colorMapping[2].to = null;
                treemap.leafItemSettings.colorMapping[2].value = 'Asia';
                treemap.leafItemSettings.colorMapping[2].color = '#37AFAB';
                treemap.leafItemSettings.colorMapping[3].from = null;
                treemap.leafItemSettings.colorMapping[3].to = null;
                treemap.leafItemSettings.colorMapping[3].value = 'Africa';
                treemap.leafItemSettings.colorMapping[3].color = '#547C84';
                treemap.leafItemSettings.colorMapping[4].from = null;
                treemap.leafItemSettings.colorMapping[4].to = null;
                treemap.leafItemSettings.colorMapping[4].value = 'Europe';
                treemap.leafItemSettings.colorMapping[4].color = '#CEBF93';
                treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].minOpacity = null;
                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[2].minOpacity = null;
                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[3].minOpacity = null;
                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[4].minOpacity = null;
                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;
                treemap.equalColorValuePath = 'Location';
                treemap.legendSettings.title.text = 'Continent';
                treemap.refresh();
            }else if (element === 'DesaturationColorMapping') {                
                treemap.rangeColorValuePath = 'Area';
                treemap.equalColorValuePath = null;
                let minOpacity = document.getElementById('minopacity');
                let maxOpacity = document.getElementById('maxopacity');
                treemap.leafItemSettings.colorMapping[2].from = null;
                treemap.leafItemSettings.colorMapping[2].to = null;
                treemap.leafItemSettings.colorMapping[1].from = null;
                treemap.leafItemSettings.colorMapping[1].to = null;
                treemap.leafItemSettings.colorMapping[1].label = null;
                treemap.leafItemSettings.colorMapping[3].from = null;
                treemap.leafItemSettings.colorMapping[3].to = null;
                treemap.leafItemSettings.colorMapping[0].from = 100000;
                treemap.leafItemSettings.colorMapping[0].to = 2230800;
                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 2M';
                treemap.leafItemSettings.colorMapping[0].value = null;
                treemap.leafItemSettings.colorMapping[1].value = null;
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[3].value = null;
                treemap.leafItemSettings.colorMapping[2].color = null;
                treemap.leafItemSettings.colorMapping[1].color = null;
                treemap.leafItemSettings.colorMapping[3].color = null;
                treemap.leafItemSettings.colorMapping[0].color = ['#F0D6AD', '#19547B'];
                if (opacity.checked) {
                    treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
                    treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
                } else {
                    treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                    treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                }
                treemap.legendSettings.title.text = 'Area';
                treemap.refresh();
            }
            opacity.dataBind();
    },
    changeOpcity: function(args) {
        let treemap = this.$refs.treemap.ej2Instances;
        let minOpacity = document.getElementById('minopacity');
        let maxOpacity = document.getElementById('maxopacity');
        if (args.checked) {
            treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
            treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
            treemap.leafItemSettings.colorMapping[1].minOpacity = parseFloat(minOpacity.value);
            treemap.leafItemSettings.colorMapping[1].maxOpacity = parseFloat(maxOpacity.value);           
        } else {
            treemap.leafItemSettings.colorMapping[0].minOpacity = null;
            treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
            treemap.leafItemSettings.colorMapping[1].minOpacity = null;
            treemap.leafItemSettings.colorMapping[1].maxOpacity = null;           
        }
        treemap.refresh();
    },
    changeMaxOpacity: function() {
        let treemap = this.$refs.treemap.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        if (opacity.checked) {
            let slider = document.getElementById('maxopacity');
            let maxOpacity = parseFloat(slider.value);
            treemap.leafItemSettings.colorMapping[0].maxOpacity = maxOpacity;
            treemap.leafItemSettings.colorMapping[1].maxOpacity = maxOpacity;
            treemap.refresh();
        }
    },
    changeMinOpacity: function() {
        let treemap = this.$refs.treemap.ej2Instances;
        let opacity = this.$refs.opacity.ej2Instances;
        if (opacity.checked) {
            let slider = document.getElementById('minopacity');
            let minOpacity = parseFloat(slider.value);
            treemap.leafItemSettings.colorMapping[0].minOpacity = minOpacity;
            treemap.leafItemSettings.colorMapping[1].minOpacity = minOpacity;
            treemap.refresh();
        }
    }
}
})
</script>
