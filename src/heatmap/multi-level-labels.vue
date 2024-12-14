<template>
<main><div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-heatmap id='container' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :load='load' :cellRender='cellRender' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
</div>
<div style="float: right; margin-right: 10px;">
</div>
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the product wise monthly sales revenue of the items sold by an online retailer in a year. The products are grouped based on the purchase domains and revenue is displayed as cell data.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to group axis labels. 
        You can customize text in each level by using <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelLabelsModel/#alignment" target="_blank">alignment</a>,<a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelLabelsModel/#textstyle" target="_blank">textStyle</a> and <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelLabelsModel/#border" target="_blank">border</a> properties.
    </p>
    <p>Border of the axis labels can be customized by using <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/axisLabelBorderModel/#type" target="_blank">type</a> property.
    </p>
    <ul>
        <li><code>Rectangle</code></li>
        <li><code>Brace</code></li>
        <li><code>WithoutTopBorder</code></li>
        <li><code>WithoutBottomBorder</code></li>
        <li><code>WithoutTopandBottomBorder</code></li>
        <li><code>WithoutBorder</code>.</li>
    </ul>
    <br>
    <p><b>Injecting Module</b></p>
    <p>
      Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip">Tooltip</a> and <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method.
    </p>
</section>
</main>
</template>
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";

export default {
components: {
    'ejs-heatmap': HeatMapComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Product wise Monthly sales revenue for an e-commerce website',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
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
                color: 'black',
                fontFamily: 'inherit'

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
                color: 'black',
                fontFamily: 'inherit'
            },
            isInversed: true,
            multiLevelLabels: [
                {
                    border: { type: 'Brace', color: '#a19d9d' },
                    textStyle: {
                        color: 'black',
                        fontWeight: 'Bold',
                        fontFamily: 'inherit'
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
            },
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
            [52, 65, 67, 45, 37, 52, 32, 76, 60, 64, 82, 91],
            [68, 52, 63, 51, 30, 51, 51, 81, 70, 60, 88, 80],
            [60, 50, 42, 53, 66, 70, 41, 69, 76, 74, 86, 97],
            [66, 64, 46, 40, 47, 41, 45, 76, 83, 69, 92, 84],
            [65, 42, 58, 32, 36, 44, 49, 79, 83, 69, 83, 93],
            [54, 46, 61, 46, 40, 39, 41, 69, 61, 84, 84, 87],
            [48, 46, 61, 47, 49, 41, 41, 67, 78, 83, 98, 87],
            [69, 52, 41, 44, 41, 52, 46, 71, 63, 84, 83, 91],
            [50, 59, 44, 43, 27, 42, 26, 64, 76, 65, 81, 86],
            [47, 49, 66, 53, 50, 34, 31, 79, 78, 79, 89, 95],
            [61, 40, 62, 26, 34, 54, 56, 74, 83, 78, 95, 98]
        ]
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
      selectedTheme = selectedTheme.toLowerCase();
    /* custom code end */
            if (selectedTheme.indexOf('dark') > -1 || selectedTheme.indexOf('highcontrast') > -1)
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
}
</script>
