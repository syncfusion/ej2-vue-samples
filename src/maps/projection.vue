<template>
<div>
<div class="col-lg-9 control-section">
<ejs-maps ref="maps" id='container' align="center" :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/List_of_members_of_the_United_Nations_Security_Council" target="_blank">en.wikipedia.org</a>
    </div>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tbody><tr style="height: 50px">
            <td style="width: 60%">
                <div>Projection Type</div>
            </td>
            <td style="width: 40%;">
             <ejs-dropdownlist ref="projection" id='projectiontype' :dataSource='projectiondata' index=0  :width='projectionwidth' :change='changeProjectiontype' :placeholder='placeholder'></ejs-dropdownlist>                                 
            </td>
        </tr>
    </tbody></table>
</div>
<div id="action-description">
        <p>
           This sample illustrates the details of permanent and non-permanent countries in the UN security council, in 2017. Projection of the map can be changed by using the <code>Projection type</code> in properties panel.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to render a map with various projections. You can use the <code>ColorMapping</code> property to customize the color of the shapes. 
        </p>
        <p>
          Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
        Maps component features are segregated into individual feature-wise modules. To use a legend, inject the <code>Legend</code> module using the <code>Maps.Inject(Legend)</code> method.
        </p>
       
    </div>
</div>  
</template>
<style>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin, Legend, Zoom, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MapsPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Members of the UN Security Council',
            textStyle: {
                size: '16px'
            },
            subtitleSettings: {
                text: '- In 2017',
                alignment: 'Far'
            }
        },
        legendSettings: {
            visible: true
        },
        zoomSettings: {
            enable: false
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeDataPath: 'Country',
        shapePropertyPath: 'name',
        dataSource: new MapAjax('./src/maps/map-data/projection-datasource.json'),
        tooltipSettings: {
                visible: true,
                valuePath: 'Country',
                },
        shapeSettings: {
                    fill: '#E5E5E5',
        colorMapping: [
                        {
                            value: 'Permanent',
                            color: '#EDB46F'
                        },
                        {
                            color: '#F1931B',
                            value: 'Non-Permanent'
                        }
                    ],
        colorValuePath: 'Membership'
                },
        projectiondata:['Mercator','Equirectangular','Miller','Eckert3','Eckert5','Eckert6','Winkel3','AitOff'],
        projectionwidth:120,
        placeholder:'Select projection type'
    }
},
provide: {
    maps: [Legend, Zoom , MapsTooltip]
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
    changeProjectiontype:function(args){
            this.$refs.maps.ej2Instances.projectionType = this.$refs.projection.ej2Instances.value;
            this.$refs.maps.ej2Instances.refresh();        
    }
}
})
</script>
