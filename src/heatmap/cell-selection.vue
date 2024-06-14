<template>
<main><div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%;margin-left: -10px;'>
        <ejs-heatmap style='height:300px' id='container' ref='heatmap' :cellSettings='cellSettings' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :allowSelection='allowSelection' :load='load' :cellSelected='cellSelected'></ejs-heatmap>
         <ejs-chart style='display:block;height:300px' ref='chart' id='chartcontainer' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :tooltip='tooltip' :series='series' :load='chartLoad'>
        </ejs-chart>
    </div>
    </div>
</div>
<div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%;">
                        <ejs-button id='clearSelection' v-on:click="onClick">Clear Selection</ejs-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the revenue from the top exported products between the year 2014 and 2018, valued in USD million.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to selected the cell in heat map and render the column chart based on selected data.
    </p>
    <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
    <br>
    <p><b>Injecting Module</b></p>
    <p>
      Heatmap component features are separated into discrete feature-based modules. To use a tooltip, inject the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip">Tooltip</a> module using the <code>provide:{ heatmap:[Tooltip] }</code> method.
    </p>
</section>
</main>
</template>
<script>
import { HeatMapComponent, Tooltip } from "@syncfusion/ej2-vue-heatmap";
import { ChartComponent, ColumnSeries, Category, DataLabel, Tooltip as chartTooltip, Legend } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import data from './cell-seletion-data.json';

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-button': ButtonComponent,
    'ejs-chart': ChartComponent
},
data:function(){
return{
        titleSettings: {
            text:'Top export products 2014-2018, Value in USD million',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily:'inherit'
            }
        },
         xAxis: {
            labels: ['Cereals', 'Meat', 'Spices', 'Tea', 'Edible Oil', 'Dairy Products', 'Wheat'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels:['2014','2015','2016','2017','2018'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        allowSelection:true,
        dataSource: data.cellSeletionData,
        paletteSettings: {
             palette: [
                {color: '#3C5E62 '},
                {color: '#86C843 '}
            ]
        },
        legendSettings: {
            visible: false
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        cellSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        primaryXAxis: {
        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
    },
    chartArea: { border: { width: 0 } },
    primaryYAxis:
    {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
    },
    series: data.chartData,
    tooltip: {
        enable: true
    }
}
},
provide:{
    heatmap:[Tooltip],
    chart: [ColumnSeries, Legend, DataLabel, Category, chartTooltip]
},
methods: {
    load: function(args) {
      /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
      /* custom code end */
    },
    chartLoad: function(args)
    {
        /* custom code start */    
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
        /* custom code end */
    },
    cellSelected: function(args)
    {
        let data = args.data
            let length = data.length;
            let xAxis = [];
            let flag = [];
            let series = [];
             for (let i= 0; i < length; i++) {
                 if (xAxis.indexOf(data[i].xLabel) === -1) {
                     xAxis.push(data[i].xLabel);
                     flag.push(false);
                 }
             }
             for (var i = 0; i < length; i++) {
                 var index = xAxis.indexOf(data[i].xLabel);
                 if (!flag[index]) {
                     flag[index] = true;
                     var column = {};
                     column.type = 'Column';
                     column.xName = 'x';
                     column.yName = 'y';
                     column.width = 2;
                     column.name = data[i].xLabel;
                     column.marker = { dataLabel: { visible: false } };
                     column.dataSource = [];
                     var columnData = {};
                     columnData.x = data[i].yLabel;
                     columnData.y = data[i].value;
                     column.dataSource.push(columnData);
                     series.push(column);
                 }
                 else {
                     var columnData = {};
                     columnData.x = data[i].yLabel;
                     columnData.y = data[i].value;
                     series[index].dataSource.push(columnData);
                 }
             }
             this.$refs.chart.ej2Instances.series = series;
             this.$refs.chart.ej2Instances.refresh();
    },
    onClick: function(){
        this.$refs.heatmap.ej2Instances.clearSelection();
        this.$refs.chart.ej2Instances.series = data.chartData;
        this.$refs.chart.ej2Instances.refresh();
    }
  }
}
</script>