<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :load='load'></ejs-heatmap>
    </div>
</div>
<div style="float: right; margin-right: 10px;">
</div>
<div id="action-description">
    <p>
        This sample visualizes the sales revenue of items sold by the employees in a week, where the revenue for the day is displayed in 1000 USD as cell data.
    </p>
</div>
<div id="description">
     <p>
        In this example, you can see how to render a heat map with the provided data source. The palette color is applied to the items in heat map. The default legend is enabled in this example to represent the items.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module
        using the <code>Heatmap.Inject(Tooltip)</code> method, and use a legend by injecting the <code>Legend</code> module using the 
        <code>Heatmap.Inject(Legend)</code> method.
       </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { defaultData } from './heatmap-data/default-data.json';
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
             labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario']
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        dataSource: defaultData,
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
  }
})
</script>
