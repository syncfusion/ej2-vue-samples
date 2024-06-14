<template>
<main><div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-heatmap id='container' :tooltipSettings='tooltipSettings' :legendSettings='legendSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :dataSourceSettings='dataSourceSettings' :paletteSettings='paletteSettings' :cellSettings='cellSettings' :load='load'></ejs-heatmap>
    </div>
</div>
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
       This sample illustrates a comprehensive view of the likelihood and impact of an organization’s risks. Risks that fall into the HeatMap's green zones require no action. Action is required in the yellow areas. Risks that fall into the red zone require immediate action.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>In this example, you can see how to use the <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettingsModel/#labeltemplate">labelTemplate</a> to display images in the HeatMap cells. The <code>labelTemplate</code> can be used to add any HTML elements into the HeatMap cells, such as images, text, and so on.</p>
    <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
    <br>
    <p><b>Injecting Module</b></p>
    <p>
      HeatMap component features are separated into discrete feature-based modules. To use a tooltip and data adaptor, inject the <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip">Tooltip</a> and 
      <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/adaptorType/" target='_blank'>Adaptor</a> modules using the <code>provide:{ heatmap:[Tooltip, Adaptor] }</code> method.
    </p>
    <p>More information about label template can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/appearance#template">documentation section</a>.</p>   
</section>
</main>
</template>
<script>
import { HeatMapComponent, Tooltip, Adaptor } from "@syncfusion/ej2-vue-heatmap";

export default {
components: {
    'ejs-heatmap': HeatMapComponent
},
data:function(){
return{
         xAxis: {
            title: {
                text: 'LIKELIHOOD',
                textStyle: {
                    fontFamily: 'inherit'
                }
            },
            labels: ["Improbable", "Remote", "Occasional", "Probable", "Frequent"],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            title: {
                text: 'IMPACT',
                textStyle: {
                    fontFamily: 'inherit'
                }
            },
            labels: ["Negligible", "Low", "Moderate", "Significant", "Catastrophic"],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
        { 'rowId': 'Improbable', 'columnId': 'Negligible', 'value': '2', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Low', 'value': '4', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Moderate', 'value': '6', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Significant', 'value': '8', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Catastrophic', 'value': '10', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Negligible', 'value': '4', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Low', 'value': '16', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Moderate', 'value': '24', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Remote', 'columnId': 'Significant', 'value': '32', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Remote', 'columnId': 'Catastrophic', 'value': '40', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Negligible', 'value': '6', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Occasional', 'columnId': 'Low', 'value': '24', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Moderate', 'value': '36', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Significant', 'value': '48', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Catastrophic', 'value': '60', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Negligible', 'value': '8', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Probable', 'columnId': 'Low', 'value': '32', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Moderate', 'value': '48', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Significant', 'value': '64', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Catastrophic', 'value': '80', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Negligible', 'value': '10', 'image': './src/heatmap/images/green-cross.png' },
        { 'rowId': 'Frequent', 'columnId': 'Low', 'value': '40', 'image': './src/heatmap/images/orange-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Moderate', 'value': '60', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Significant', 'value': '80', 'image': './src/heatmap/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Catastrophic', 'value': '100', 'image': './src/heatmap/images/red-tick.png' }
        ],
        dataSourceSettings:  {
            isJsonData: true,
            adaptorType: 'Cell',
            xDataMapping: 'rowId',
            yDataMapping: 'columnId',
            valueMapping: 'value'
        },
        paletteSettings: {
            type: 'Fixed',
            palette: [{ value: "2", color: "#61c961" },
                { value: "24", color: "#fcc81c" },
                { value: "48", color: "#ff6354" }
            ],
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            visible: false
        },
        cellSettings: {
            labelTemplate: '<div><img alt="Description of the label template" src="${image}" style="width: 35px; height: 35px;"/></div>',
            textStyle: {
                fontFamily: 'inherit'
            }
        },     
}
},
provide:{
    heatmap:[Tooltip, Adaptor]
},
methods: {
    load: function(args) {
     /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
     /* custom code end */
    }
  }
}
</script>
