<template>
<div>
    <div class="col-lg-9 control-section">
         <ejs-treemap ref="treemap" id='container' :load='load' :titleSettings='titleSettings' :dataSource='dataSource' :weightValuePath='weightValuePath' :tooltipSettings='tooltipSettings' :legendSettings='legendSettings' format='n' :useGroupingSeparator='useGroupingSeparator' :rangeColorValuePath='rangeColorValuePath' :equalColorValuePath='equalColorValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>

        <div style="float: right; margin-right: 10px;">Source:
            <a href=" https://en.wikipedia.org/wiki/United_States_presidential_election,_2016" target="_blank">en.wikipedia.org</a>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div class="property-text" style="padding: 0px;">Legend Type</div>
                    </td>
                    <td style="width: 80%; height:30%">
                        <ejs-dropdownlist ref="mode" id='layoutMode' :dataSource='layoutModedata' index=0 :placeholder='layoutModeplaceholder' :width='layoutModewidth' :change="changeLayoutmode"></ejs-dropdownlist>        
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 40%">
                    <div class="property-text" style="padding: 0px;">Position</div>
                    </td>
                    <td style="width: 80%; height:30%">
                        <ejs-dropdownlist id='layoutPosition' :dataSource='positionData' index=0 :width='layoutModewidth' :change='changePosition'></ejs-dropdownlist>        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
   <div id="action-description">
    <p>
        This sample visualizes the 2016 U.S.A. presidential election results. The type of the legend can be changed by using the
        <code>Legend Type</code> in properties panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see the type of legend available in TreeMap. Equal color mapping has been applied based on certain
        value in this example.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled
        devices
    </p>
    <br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        TreeMap component features are segregated into individual feature-wise modules. To use a legend, inject the
        <code>Legend</code> module using the
        <code>TreeMap.Inject(TreeMapLegend)</code> method.
    </p>
</div>
</div>
</template>
<style>
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
</style>
<script>
import Vue from 'vue';
import { TreeMapPlugin,TreeMapTooltip,TreeMapLegend} from "@syncfusion/ej2-vue-treemap";
import { electionData } from '../treemap/treemap-data/election-data';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(TreeMapPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'US Presidential election result - 2016',
            textStyle: { size: '15px' }
        },
        dataSource: electionData,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: ' <b>${Winner}</b><br>State : ${State}<br>Trump : ${Trump} %<br>Clinton : ${Clinton} %'
        },
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
            height: '10'
        },
        useGroupingSeparator: true,
        rangeColorValuePath: 'WinPercentage',
        equalColorValuePath: 'Winner',
        leafItemSettings: {
            labelPath: 'State',
            fill: '#6699cc',
            border: { color: 'white', width: 0.5 },
            colorMapping: [
                {
                    value: 'Trump', color: '#D84444'
                },
                {
                    value: 'Clinton', color: '#316DB5'
                }
            ]
        },
        layoutModeplaceholder: 'Select legend type',
        layoutModewidth: 120,
        layoutModedata:['Default','Interactive'],
        positionData: ['Top', 'Bottom', 'Left', 'Right', 'Auto']
}
},
provide:{
    treemap:[TreeMapTooltip,TreeMapLegend]
},
methods:{
    /* custom code start */
     load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    	resize: function(args){
		if (args.currentSize.width > args.currentSize.height && this.treemapInstance.legendSettings.position === 'Auto') {
				this.treemapInstance.legendSettings.orientation = 'Vertical';
				if (this.treemapInstance.legendSettings.mode === 'Interactive') {
						this.treemapInstance.legendSettings.height = '70%';
						this.treemapInstance.legendSettings.width = '10';
				} else {
						this.treemapInstance.legendSettings.height = '';
						this.treemapInstance.legendSettings.width = '';
				}
		 } else {
				this.treemapInstance.legendSettings.orientation = 'Horizontal';
				if (this.treemapInstance.legendSettings.mode === 'Interactive') {
					this.treemapInstance.legendSettings.height = '10';
					this.treemapInstance.legendSettings.width = '';
				} else {
					this.treemapInstance.legendSettings.height = '';
					this.treemapInstance.legendSettings.width = '';
				}
			} 
		},
    // Code for Property Panel
    changeLayoutmode:function(args){
        this.$refs.treemap.ej2Instances.legendSettings.mode = this.$refs.mode.ej2Instances.value;
        this.$refs.treemap.ej2Instances.refresh();
    },
    changePosition: function(args){
            let treemap = this.$refs.treemap.ej2Instances;
            treemap.legendSettings.position = args.value;
            if (args.value === 'Left' || args.value === 'Right') {
                treemap.legendSettings.orientation = 'Vertical';
                if (treemap.legendSettings.mode === 'Interactive') {
                    treemap.legendSettings.height = '70%';
                    treemap.legendSettings.width = '10';
                } else {
                    treemap.legendSettings.height = '';
                    treemap.legendSettings.width = '';
                }
            } else if (args.value === 'Auto') {
                if (treemap.availableSize.width > treemap.availableSize.height) {
                        treemap.legendSettings.orientation = 'Vertical';
                        if (treemap.legendSettings.mode === 'Interactive') {
                                treemap.legendSettings.height = '70%';
                                treemap.legendSettings.width = '10';
                        } else {
                                treemap.legendSettings.height = '';
                                treemap.legendSettings.width = '';
                        }
                }
            }
            else {
                treemap.legendSettings.orientation = 'Horizontal';
                if (treemap.legendSettings.mode === 'Interactive') {
                    treemap.legendSettings.height = '10';
                    treemap.legendSettings.width = '';
                }
            }
    treemap.refresh();
    }
  },
})
</script>