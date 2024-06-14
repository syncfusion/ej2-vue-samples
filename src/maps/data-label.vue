<template>
<main><div>
<div class="col-lg-9 control-section">
<ejs-maps ref="maps" id='datalabel' :zoomSettings='zoomSettings' :load='load'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
    </e-layers>
</ejs-maps>    
</div>

<div class="col-lg-3 property-section">
    <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -10px;">
    <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
        <tbody>
            <tr style="height: 50px">
                <td>
                    <div>Show Labels</div>
                </td>
                <td>
                <div style="margin-top: 1px;">
                    <input type="checkbox" checked id="select"  v-on:change="showLabel">
                </div>
                </td>
            </tr>            
        <tr style="height: 50px">
            <td>
                <div>Smart label mode</div>
            </td>
            <td style="width: 40%">
             <div>
             <ejs-dropdownlist ref="labelMode" id='smartlabelmode' :dataSource='smartlabeldata' index=0  :width='smartlabelwidth' :change='changeSmartlabelmode' :placeholder='smartlabelplaceholder'></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
        <tr style="height: 50px">
            <td>
                <div>Intersect action</div>
            </td>
            <td>
            <div>
             <ejs-dropdownlist ref="intersect" id='intersectaction' :dataSource='intersectactiondata' index=0  :width='intersectactionwidth' :change='changeIntersectaction' :placeholder='intersectactionplaceholder'></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
    </tbody></table>
</div>
</div>
<section id="action-description" aria-label="Description of Maps sample">
            <p>
               This sample visualizes the names of all the states in USA in data labels. Options have been provided to change the intersect action and smart labels mode of the data labels.
           </p>
        </section>
        <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
            <p>
               In this example, you can see how to render the data labels for each shape in a map. Data labels are used to display the values of the shapes. You can use the <code>autoFill</code> property in the <code>shapeSettings</code> to apply the default palette colors to the shapes.
        
            </p>
            <p>
            Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices.
            </p>
        <br/>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
             Maps component features are segregated into individual feature-wise modules. To use a data label, inject the <code>DataLabel</code> module using the <code>Maps.Inject(DataLabel)</code> method.
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
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { usa } from '../maps/map-data/usa';

export default {
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data:function(){
      return{
        zoomSettings: {
            enable: false
        },
        dataLabelSettings: {
                    visible: true,
                    labelPath: 'name',
                    smartLabelMode: 'Trim',
                    textStyle: {
                        fontFamily: 'Segoe UI'
                    }
                },
        shapeData: usa,
        shapePropertyPath:'iso_3166_2',
        shapeSettings: {
                    autofill: true
        },
        tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
        },
        smartlabeldata:['Trim','None','Hide'],
        smartlabelplaceholder:'Select smartlabel mode',
        smartlabelwidth: '100%',
        intersectactiondata:['None','Trim','Hide'],
        intersectactionplaceholder:'Select intersect action',
        intersectactionwidth: '100%'
      }
  },
  provide: {
    maps: [DataLabel , MapsTooltip]
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
// Code for Property Panel 
changeSmartlabelmode:function(args){   
        this.$refs.maps.ej2Instances.layers[0].dataLabelSettings.smartLabelMode = this.$refs.labelMode.ej2Instances.value;
        this.$refs.maps.ej2Instances.refresh();
  },
changeIntersectaction:function(args){
            this.$refs.maps.ej2Instances.layers[0].dataLabelSettings.intersectionAction = this.$refs.intersect.ej2Instances.value;
            this.$refs.maps.ej2Instances.refresh();
},
showLabel:function(args){
        let element = (document.getElementById('select'));
        this.$refs.maps.ej2Instances.layers[0].dataLabelSettings.visible = element.checked;
        this.$refs.maps.ej2Instances.refresh();
}
}
}
</script>

 