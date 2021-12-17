<template>
<div id="maps-print-sample">
   <div class="col-lg-9 control-section">
        <div class="content-wrapper">
<ejs-maps ref="maps" id='container' :titleSettings='titleSettings' :load='load' :allowPrint='allowPrint' :tooltipRender='tooltipRender' format='n' :useGroupingSeparator='useGroupingSeparator' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>    

            <div style="float: right; margin-right: 10px;">Source:
                <a href="https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_population" target="_blank">en.wikipedia.org</a>
             </div>
        </div>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">    
            <tbody><tr id="button-control" style="height: 50px">
                <td align="center">
                    <div>
                <ejs-button id='togglebtn' :style='style' :cssClass='cssClass' :iconCss='iconCss' :isPrimary='isPrimary' :content='content' isToggle="true" v-on:click.native='clickToggle'></ejs-button>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates the print feature in Maps. By clicking the Print button, you can print the maps directly from the browser. 
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render and configure the print functionality. The rendered maps can be printed directly from the browser by calling the <code>print</code> method when <code>allowPrint</code> is set as true. Also this sample visualizes the State-wise US population in the year 2010.
        </p>
            <br/>
            <p style="font-weight: 500"> <b>Injecting Module</b></p>
            <p>
          Maps component features are segregated into individual feature-wise modules. To use a legend, inject the <code>Legend</code> module using the <code>provide</code> section. To make use of the print support, we need to inject the <code> Print</code> module using the <code>provide</code> section.
            </p>
             <p>
        More information on print can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/maps/print/#print"
        >documentation section</a>.
      </p> 
    </div>
</div>
</template>
<style>
    #maps-print-sample #button-control {
        width: 100%;
        text-align: center;
    }
    
    #maps-print-sample #control-container {
        padding: 0px !important;
    }
    
    #maps-print-sample .e-play-icon::before {
        content: "\e34b";
    }

   .e-view.fabric #maps-print-sample .e-play-icon::before, .e-view.fabric-dark #maps-print-sample .e-play-icon::before {
        content: "\e7df";
    }

    .e-view.bootstrap #maps-print-sample .e-play-icon::before {
        content: "\ebd2";
    }

    .e-view.bootstrap4 #maps-print-sample .e-play-icon::before {
        content: "\e743";
    }

    .e-view.tailwind #maps-print-sample .e-play-icon::before, .e-view.tailwind-dark #maps-print-sample .e-play-icon::before {
        content: "\e76c";
    }

    .e-view.highcontrast #maps-print-sample .e-play-icon::before {
        content: "\ebf9";
    }

    .e-view.bootstrap5 #maps-print-sample .e-play-icon::before, .e-view.bootstrap5-dark #maps-print-sample .e-play-icon::before {
        content: "\e75d";
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Legend, MapsTooltip, MapAjax, Print } from '@syncfusion/ej2-vue-maps';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(MapsPlugin,ButtonPlugin);
export default Vue.extend({
  data:function(){
      return{
        allowPrint: true,
        useGroupingSeparator: true,
        titleSettings: {
            text: 'State-wise US population - 2010',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            },
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Bottom',
            height: '10',
            width: '350',
            labelDisplayMode: 'Trim',
            alignment: 'Center',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        shapeData: new MapAjax('./src/maps/map-data/usa.json'),
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: new MapAjax('./src/maps/map-data/print-datasource.json'),
        shapeSettings: {
            border: {
                width: 0.5,
                color: 'gray'
                },
        colorValuePath: 'population',
        colorMapping: [
                        {
                            from: 580000, to: 2800000, color: '#dae8f1', label: '<3M'
                        },
                        {
                            from: 2800000, to: 5280000, color: '#b0cde1', label: '3-6M'
                        },
                        {
                            from: 5280000, to: 8260000, color: '#90bad8', label: '6-9M'
                        },
                        {
                            from: 8260000, to: 11660000, color: '#6ea7d2', label: '9-12M'
                        },
                        {
                            from: 11660000, to: 19600000, color: '#4c96cb', label: '12-20M'
                        },
                        {
                            from: 19600000, to: 26500000, color: '#3182bd', label: '20-25M'
                        },
                        {
                            from: 26500000, to: 38400000, color: '#004374', label: '>25M'
                        }
                    ]
            },
        tooltipSettings: {
                    visible: true,
                    valuePath: 'population',
                    format: 'State: ${name} <br> Population: ${population}',
                    textStyle: {
                        fontFamily: 'Segoe UI'
                    }
                },
             iconCss: 'e-icons e-play-icon',
             cssClass: 'e-flat', isPrimary: true, content:'Print', style: 'text-transform:none !important'
          }
  },
provide: {
    maps: [ Legend, MapsTooltip, Print ]
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
    tooltipRender:function(args){
         if (args.options.toString().indexOf('population') > -1) {
                args.cancel = true;
            }
    },
    clickToggle:function(args){
        this.$refs.maps.ej2Instances.print();
    }
}
})
</script>

