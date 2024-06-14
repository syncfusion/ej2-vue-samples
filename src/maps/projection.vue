<template>
<main><div>
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
    <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 60%;">
          </colgroup>
          <tbody>
        <tr style="height: 50px">
            <td>
                <div style="width: 80%">Projection Type</div>
            </td>
            <td>
            <div style="margin-left: -10px">
             <ejs-dropdownlist ref="projection" id='projectiontype' :dataSource='projectiondata' index=0  :width='projectionwidth' :change='changeProjectiontype' :placeholder='placeholder'></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
        </tbody>
    </table>
</div>
</div>  
<section id="action-description" aria-label="Description of Maps sample">
        <p>
           This sample illustrates the details of permanent and non-permanent countries in the UN security council, in 2017. Projection of the map can be changed by using the <code>Projection type</code> in properties panel.
       </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
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
       
    </section>
    </main>
</template>
<style scoped>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import { MapsComponent, LayersDirective, LayerDirective, Legend, Zoom, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { worldMap } from '../maps/map-data/world-map';
import { projectionData } from '../maps/map-data/projection-datasource';

export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-dropdownlist': DropDownListComponent
},
data:function(){
    return{
        titleSettings: {
            text: 'Members of the UN Security Council',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            },
            subtitleSettings: {
                text: '- In 2017',
                alignment: 'Far',
                textStyle: {
                    fontFamily: 'Segoe UI'
                },
            }
        },
        legendSettings: {
            visible: true,
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: false
        },
        shapeData: worldMap,
        shapeDataPath: 'Country',
        shapePropertyPath: 'name',
        dataSource: projectionData,
        tooltipSettings: {
                visible: true,
                valuePath: 'Country',
                textStyle: {
                    fontFamily: 'Segoe UI'
                }
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
        projectionwidth: '105%',
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    /* custom code end */
    changeProjectiontype:function(args){
            this.$refs.maps.ej2Instances.projectionType = this.$refs.projection.ej2Instances.value;
            this.$refs.maps.ej2Instances.refresh();        
    }
}
}
</script>
