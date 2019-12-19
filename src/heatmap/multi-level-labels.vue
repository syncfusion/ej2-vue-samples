<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :load='load' :cellRender='cellRender' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
</div>
<div style="float: right; margin-right: 10px;">
</div>
<div id="action-description">
    <p>
        This sample visualizes the product wise monthly sales revenue of the items sold by an online retailer in a year. The products are grouped based on the purchase domains and revenue is displayed as cell data.
    </p>
</div>
<div id="description">
   <p>
        In this example, you can see how to group axis labels. 
        You can customize text in each level by using <code>alignment</code>, <code>textSytle</code> and <code>border</code> properties.
    </p>
    <p>Border of the axis labels can be customized by using <code>type</code> property.
    </p>
    <ul>
        <li><code>Rectangle</code></li>
        <li><code>Brace</code></li>
        <li><code>WithoutTopBorder</code></li>
        <li><code>WithoutBottomBorder</code></li>
        <li><code>WithoutTopandBottomBorder</code></li>
        <li><code>withoutBorder</code>.</li>
    </ul>
    <br>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module
        using the <code>Heatmap.Inject(Tooltip)</code> method.
       </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { multiLevelLabelData } from './heatmap-data/multi-level-label-data.json';
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Product wise Monthly sales revenue for an e-commerce website',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Laptop', 'Mobile', 'Gaming', 'Cosmetics', 'Fragrance', 'Watches', 'Handbags', 'Apparel',
                'Kitchenware', 'Furniture', 'Home Decor'],
            border: {
                width: 1,
                type: 'Rectangle',
                color: '#a19d9d'
            },
            textStyle: {
                color: 'black'

            },
            multiLevelLabels: [
                {
                    border: { type: 'Rectangle', color: '#a19d9d' },
                    textStyle: {
                        color: 'black',
                        fontWeight: 'Bold'
                    },
                    categories: [
                        { start: 0, end: 2, text: 'Electronics' },
                        { start: 3, end: 4, text: 'Beauty and personal care' },
                        { start: 5, end: 7, text: 'Fashion' },
                        { start: 8, end: 10, text: 'Household' }
                    ]
                },
            ]
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            border: {
                width: 0
            },
            textStyle: {
                color: 'black'
            },
            isInversed: true,
            multiLevelLabels: [
                {
                    border: { type: 'Brace', color: '#a19d9d' },
                    textStyle: {
                        color: 'black',
                        fontWeight: 'Bold'
                    },
                    categories: [
                        { start: 0, end: 2, text: 'Q1' },
                        { start: 3, end: 5, text: 'Q2' },
                        { start: 6, end: 8, text: 'Q3' },
                        { start: 9, end: 11, text: 'Q4' }
                    ]
                }
            ]
        },
        paletteSettings: {
            palette: [{ color: '#F0ADCE' },
            { color: '#19307B' }
            ]
        },
        legendSettings: {
            visible: false
        },
        cellSettings: {
            border: {
                width: 0
            }
        },
        dataSource: multiLevelLabelData
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
      selectedTheme = selectedTheme.toLowerCase();
       if(selectedTheme === 'highcontrast')
            {
                args.heatmap.xAxis.textStyle.color = 'White';
                args.heatmap.yAxis.textStyle.color = 'White';
                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'White';
                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'White';
            }
            else
            {
                args.heatmap.xAxis.textStyle.color = 'Black';
                args.heatmap.yAxis.textStyle.color = 'Black';
                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'Black';
                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'Black';
            }
    },
    cellRender: function(args) {
            args.displayText = '$ ' + (args.value / 10) + 'K';
        },
    tooltipRender: function(args) {
            args.content = [args.xLabel + ' | ' + args.yLabel + ' : $ ' + (args.value / 10) + 'K'];
    },
  }
})
</script>
