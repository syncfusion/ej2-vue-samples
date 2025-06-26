<template>
 <div v-if="data.id == 'node1Template'">
    <div class="diagram_border_complex diagram_border_cal">
      <ejs-daterangepicker
        :startDate="startVal"
        :endDate="endVal"
        :min="minDate"
        :max="maxDate"
        :placeholder="waterMark" 
        :presets="datePresets"
        :change="datechange"
      ></ejs-daterangepicker>
     </div>
 </div>
   <div  v-else-if="data.id == 'node2Template'" class="diagram_border_complex diagram-template-chart">
      <ejs-chart id="linechart" :chartArea={lchartArea} :titleStyle="title"  :height='lineheight' :primaryXAxis='lprimaryXAxis' :primaryYAxis='lprimaryYAxis' :margin='margin' :useGroupingSeperator='sepert' :annotations='lannotations'  >
        <e-series-collection>
                <e-series  :dataSource="lineChartData" :animation="lanimation" :marker="marker" :border="lBorder" :width="lwidth" type='Area' xName='DateTime' yName='Amount' fill='rgba(4, 112, 216, 0.3)' name='Amount'></e-series>
            </e-series-collection>
       </ejs-chart>
  </div> 
   <div  v-else-if="data.id == 'node3Template'" class="diagram_border_complex diagram-template-chart">
      <ejs-chart id="columnchart" :primaryXAxis='primaryXAxis'  :primaryYAxis='primaryYAxis' :height='lineheight'  :margin='margin' useGroupingSeperator='true' :annotations='annotations' :legendSettings='legendSettings' :titleStyle='titleStyle'>
        <e-series-collection>
                <e-series  :dataSource="colChartIncomeData" :animation="animation" legendShape='Circle' :marker="marker" :border="cBorder" :width="lwidth" type='Column' xName='DateTime' yName='Amount' fill='#A16EE5' name='Income' > </e-series>
            <e-series  :dataSource="colChartExpenseData" :animation="animation" legendShape='Circle' :marker="marker" :border="cBorder" :width="lwidth" type='Column' xName='DateTime' yName='Amount' fill='#4472C4' name='Expense' > </e-series>
            </e-series-collection>
      </ejs-chart>
  </div>
  <div  v-else-if="data.id == 'node4Template'">
      <div id="diagram-complex-template" class="diagram_border_complex">
      <div class="pane col-xs-12 col-sm-12 col-md-12 pie-container">
        <div class="diagram-pieChartHeader">
          <p class="chart-title">Total Expenses</p>
          <p id="rangeDate" class="diagram-chart-value">Jun 1 - Dec 1</p>
        </div>
        <div id="pie" style="height:100%; width:49%; overflow:hidden;float:left;" margin="20px">
          <ejs-accumulationchart id="piechart" style="display:block;" width='100%' height='350px' :legendSettings="acclegendSettings" enableSmartLabels='true' :textRender="onTextRender" :animationComplete="onAnimateCompleted">
        <e-accumulation-series-collection>
          <e-accumulation-series :dataSource="pieRenderingData" xName="text" yName="y" legendShape='Circle' startAngle="0" endAngle="360" innerRadius="50%" radius="83%" :dataLabel="dataLabel" :groupTo="groupValue" :palettes="colorPalettes" :animation="accanimation"  ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
        </div>
        <div id="gri" style="height:100%; width:49%; overflow:hidden;float:left;" >
          <ejs-grid ref='lgrid' id="grid" :dataSource="pieRenderData" width='100%' :rowTemplate='rowTemplates' :load='onGridLoad' :dataBound='onGridDataBound' :loaded='gridloaded'>
        <e-columns>
            <e-column width='10%' textAlign='Center'></e-column>
            <e-column  width='50%'></e-column>
            <e-column width='20%'></e-column>
            <e-column width='20%'></e-column>
        </e-columns>
      </ejs-grid>
        </div>
      </div>
    </div>      
  </div> 
</template>
<style scoped>
#diagram-complex-template .chart-title {
  font-size: 16px;
}

#diagram-complex-template .chart-title,
#diagram-complex-template .chart-subtitle {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 16px;
  color: #797979 !important;
}

.diagram-chart-value {
  color: #9d9d9d;
}

#diagram-complex-template {
  background-color: white;
  height: 450px;
  width: auto;
}

#diagram-complex-template .e-grid,
#diagram-complex-template .e-grid .e-gridheader {
  border: none;
}

#custom-diagram .e-grid .e-gridheader {
    border: none;
}

.diagram-pieChartHeader {
  margin-left: 20px;
  margin-top: 20px;
}

.diagram_border_complex {
  border: 1px solid transparent;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.diagram-template-chart {
  padding-left: 15px;
  padding-right: 15px;
}

#element_calander .e-input-group:not(.e-success):not(.e-warning):not(.e-error):not(.e-float-icon-left),
.e-input-group.e-float-icon-left:not(.e-success):not(.e-warning):not(.e-error) .e-input-in-wrap,
.e-input-group.e-control-wrapper:not(.e-success):not(.e-warning):not(.e-error):not(.e-float-icon-left) {
  border: none;
}

.diagram_border_cal {
  height: 30px;
  padding-left: 12px;
}

#custom-diagram .e-diagram-resize-handle.e-disabled {
  fill: #ced4da;
  opacity: 1;
  stroke: #fff;
  visibility: hidden;
}

</style>
<script>
import { createApp } from "vue";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,LineSeries,AreaSeries, Category, ChartAnnotation, Legend, Tooltip, DataLabel, RangeAreaSeries,DateTime,ColumnSeries   } from '@syncfusion/ej2-vue-charts';
import { DateRangePickerComponent,RangeEventArgs } from "@syncfusion/ej2-vue-calendars"; 
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { extend } from '@syncfusion/ej2-base';
import {AccumulationChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective,AccumulationLegend,PieSeries,AccumulationDataLabel,AccumulationTooltip,AccumulationSelection,Selection} from "@syncfusion/ej2-vue-charts";
import { startDate1,endDate1,expenseData, MyWindow } from "./diagram-data";
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Page,Aggregate, Sort,ColumnMenu,DetailRow,RowDD, Group} from "@syncfusion/ej2-vue-grids";

var linechartinstance;
var columnchartinstance;
var piechartinstance;
var gridinstance;
var expTotal;
let linechart;
var category;
let pieRenderData= [];
let columnchart;
var piechart;
var styles;
var grid;
var piedata;
var dataSource = new DataManager(expenseData);
var tempData = dataSource.dataSource.json;
let groupValue;
var legendData;
 var colExpenseDS;
 var pieRenderingData = [];
 var pieLegendData = [];
 var columnIncomeDS = [];
 var columnExpenseDS = [];
 var lineDS = [];
 var tempChartIncomeDS = {};
 var tempChartExpenseDS = {};
 var tempChartLineDS = {};
 var curDateTime;
 var lineD = [];
 var start;
 var  end;
 var  expenseDS ;
 var  predicateStart;
 var  predicateEnd;
 var  predicate;
 var  dataSource;
 var tempLineDS;
 var colIncomeDS = [];
  var tempIncomeDS = [];
  var tempExpenseDS ;
  var colChartIncomeData ;
  var colChartExpenseData;
  var lineChartData;
  var showWaitingPopup;
  var grids;
function objectAssign(e) {
   let result = [];
   let obj;
   obj = extend(obj, e.result, {}, true);
   for (let data = 0; data < Object.keys(e.result).length; data++) {
     result.push(obj[data]);
   }
   return result;
 }
 function getColumnChartIncomeDS(e) {
   colIncomeDS = [];
   tempIncomeDS = [];
   let result = objectAssign(e);
for (let i = 0; i < result.length; i++) {
     let cur = result[i];
     if (cur.DateTime.getMonth() in tempIncomeDS) {
       curDateTime = tempIncomeDS[cur.DateTime.getMonth()];
       tempIncomeDS[cur.DateTime.getMonth()].Amount = parseInt(curDateTime.Amount, 0) + parseInt(cur.Amount, 0);
     } else {
       tempIncomeDS[cur.DateTime.getMonth()] = cur;
       tempIncomeDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempIncomeDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
     }
   }
   for (let data in tempIncomeDS) {
     colIncomeDS.push(tempIncomeDS[data]);
   }
   return colIncomeDS;
 }

 function getColumnChartExpenseDS(e) {
   colExpenseDS = [];
   tempExpenseDS = [];
   let result = objectAssign(e);
   for (let i = 0; i < result.length; i++) {
     let cur = result[i];
     if (cur.DateTime.getMonth() in tempExpenseDS) {
       curDateTime = tempExpenseDS[cur.DateTime.getMonth()];
       tempExpenseDS[cur.DateTime.getMonth()].Amount = parseInt(curDateTime.Amount, 0) + parseInt(cur.Amount, 0);
     } else {
       tempExpenseDS[cur.DateTime.getMonth()] = cur;
       tempExpenseDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempExpenseDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
     }
   }
   for (let data in tempExpenseDS) {
     colExpenseDS.push(tempExpenseDS[data]);
   }
   return colExpenseDS;
 }

 function getLineChartDS() {
   lineD = [];
   lineDS = [];
   tempLineDS = [];
   let result = [];
   let obj;
   obj = extend(obj, (colIncomeDS.concat(colExpenseDS)), {}, true);
   for (var data = 0; data < Object.keys((colIncomeDS.concat(colExpenseDS))).length; data++) {
     result.push(obj[data]);
   }
   tempLineDS = result;
   for (let i = 0; i < tempLineDS.length; i++) {
     let cur = tempLineDS[i];
     if (cur.DateTime.getMonth() in lineD) {
       curDateTime = lineD[cur.DateTime.getMonth()];
       lineD[cur.DateTime.getMonth()].Amount = Math.abs((parseInt(curDateTime.Amount, 0) - parseInt(cur.Amount, 0)));
     } else {
       lineD[cur.DateTime.getMonth()] = cur;
     }
   }
   for (let data = 0; data <= lineD.length; data++) {
     if (lineD[data]) {
       lineDS.push(lineD[data]);
     }
   }
   return lineDS;
 }
 function updateChartData() {
   new DataManager(dataSource).executeQuery(new Query()
     .where(predicate.and('TransactionType', 'equal', 'Expense')))
     .then((e) => {
       colChartExpenseData = getColumnChartExpenseDS(e);
     });
   new DataManager(dataSource).executeQuery(new Query()
     .where(predicate.and('TransactionType', 'equal', 'Income')))
     .then((e) => {
       colChartIncomeData = getColumnChartIncomeDS(e);
       lineChartData = getLineChartDS();
       linechartinstance.series[0].dataSource = lineChartData;
       columnchartinstance.series[0].dataSource = colChartIncomeData;
       columnchartinstance.series[1].dataSource = colChartExpenseData;
       linechartinstance.refresh();
       columnchartinstance.refresh(); 
     });
 }
 function refreshPieChart() {
  getTotalExpense();
  createLegendData('pieUpdate');
  piechartinstance.series[0].dataSource = pieRenderingData;
}
function getTotalExpense() {
  expTotal = 0;
    category = [];
    legendData = [];
    var renderingData = [];
    tempData.forEach(function (item) {
        if (item.TransactionType === 'Expense' && start.valueOf() <= item.DateTime.valueOf() && end.valueOf() >= item.DateTime.valueOf()) {
            expTotal += Number(item.Amount);
            legendData.push(item);
            if (category.indexOf(item.Category) < 0) {
                category.push(item.Category);
            }
        }
    });
    category.forEach(function (str) {
        var total = 0;
        legendData.forEach(function (item) {
            if (str === item.Category) {
                total += Number(item.Amount);
            }
        });
        var percent = ((total / expTotal) * 100).toFixed(2) + '%';
        renderingData.push({ x: str, y: total, text: percent });
    });
    pieRenderingData = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new Query().sortByDesc('y')));
    if (pieRenderingData.length > 10) {
        var temp = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new Query().sortByDesc('y').range(0, 9)))[8];
        groupValue = temp.y - 1;
        var hiGridData = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new Query().sortByDesc('y').skip(9)));
    }
  
}
function createLegendData(initiate) {
  if (pieRenderingData.length > 10) {
    piechartinstance.series[0].groupTo = groupValue.toString();
    piechartinstance.dataBind();
  }
  if (piechartinstance && (initiate === 'pieUpdate' || pieLegendData.length === 0)) {
    pieLegendData = [];
    pieLegendData = piechartinstance.visibleSeries[0].points;
  }
  pieRenderData = [];
  for (let i = 0; i < pieLegendData.length; i++) {
    let rowdata = pieLegendData[i];
    if (rowdata.text.indexOf('Others') > -1) {
      rowdata.x = ((rowdata.y / expTotal) * 100).toFixed(2).toString() + '%';
    }
    pieRenderData.push(rowdata);
  }
  if (pieLegendData.length > 0) {
    gridinstance.dataSource = pieLegendData;
  }
}
function onGridDataBound(){
  showWaitingPopup = false;
}
 function initialRender() {
   start = startDate1;
   end = endDate1;
   expenseDS = expenseData;
   predicateStart = new Predicate('DateTime', 'greaterthanorequal', start);
   predicateEnd = new Predicate('DateTime', 'lessthanorequal', end);
   predicate = predicateStart.and(predicateEnd);
   dataSource = expenseData;
   updateChartData();
   refreshPieChart();
}
function onGridLoad() {
  createLegendData('pie');
  showWaitingPopup = true;
}
function getFontSize(width){
  if (width > 300) {
    return '13px';
  } else if (width > 250) {
    return '8px';
  } else {
    return '6px';
  }
}

export default {
  components: {
    'ejs-daterangepicker': DateRangePickerComponent,
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective,
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      startVal: startDate1,
      endVal: endDate1,
      waterMark: "Select a Range",
      minDate: new Date(2017, 5, 1),
      maxDate: new Date(2017, 10, 30),
      datePresets: [
  { label: 'Last Month', start: new Date('10/1/2017'), end: new Date('10/31/2017') },
  { label: 'Last 3 Months', start: new Date('9/1/2017'), end: new Date('11/30/2017') },
  { label: 'All Time', start: new Date('6/1/2017'), end: new Date('11/30/2017') }
],
lineChartData:lineChartData,
 lwidth : '2',
 lineheight: "400px",
 lanimation:{ enable: false },
 lBorder:{ width: '0.5', color: '#A16EE5' },
 lchartArea: {
  border: { width: 0 }
},lprimaryXAxis: {
  valueType: 'DateTime',
  labelFormat: 'MMM',
  majorGridLines: { width: 0 },
  intervalType: 'Months'
},lprimaryYAxis: {
  maximum: 1800,
  interval: 300,
  labelFormat: 'c0'
},
title: {
                    textAlignment: 'Near', fontWeight: '500', size: '16', color: '#000'
                },
 lannotations:[{
        content: '<p style="font-family:Roboto;font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: #797979 !important;">Account - Balance</p>',
        region: 'Chart',
        coordinateUnits: 'Pixel',
        x: '75px',
        y: '9%'
       }],
       annotations:[{
        content: '<p style="font-family:Roboto;font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: #797979 !important;">Income - Expense</p>',
        region: 'Chart',
        coordinateUnits: 'Pixel',
        x: '75px',
        y: '9%'
       }],primaryXAxis:{
  labelFormat: 'MMM',
  valueType: 'DateTime',
  intervalType: 'Months',
  edgeLabelPlacement: 'Shift'
},primaryYAxis: {
  minimum: 3000,
  maximum: 9000,
  labelFormat: 'c0'
},margin: { left: 10, right: 10, top: 90, bottom:10 },
tooltip : {
  fill: '#707070',
  enable: true,
  shared: true,
  format: '${series.name} : ${point.y}',
  header: 'Month - ${point.x} '
},
sepert : true,
marker : { visible: true, height: 10, width: 10 },
cBorder : { width: 0.5, color: '#A16EE5' },
animation : { enable: false },
titleStyle :{ textAlignment: 'Near', fontWeight: '500', size: '16', color: '#000' },
legendSettings : { visible: true },
colChartExpenseData :colChartExpenseData,
colChartIncomeData : colChartIncomeData,
acclegendSettings:{ visible: false },
accanimation: { enable: false },
  colorPalettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2', '#8854D9', '#3D4EB8','#00BCD7'],
  groupValue: groupValue,
  dataLabel:{
  name: 'x', visible: true,
  position: 'Outside', connectorStyle: { length: '10%' },
  font: { color: 'Black', size: '14px', fontFamily: 'Roboto' }
  },
  pieRenderingData:pieRenderingData,
  rowTemplates: function () {
        return { template : createApp({}).component('rowTemplate',{
        template: `
        <tr style="height: 30px;">
        <td>
            <div  :style="style"></div>
        </td>
        <td> {{data.text}} </td>
        <td> {{(data.y)}} </td>
        <td style="text-align:right;"> {{data.x}} </td>
    </tr>`,
          data: function() {
            return {
              data: { 
                 
              }     
            }
          }, computed: {
            style: function(){
              return "width: 16px; height: 16px; margin-left: 1px; border-radius: 16px; background-color: " + this.data.color 
             
            }
          }
        })}
  },
  pieRenderData:pieRenderData,
onGridLoad:onGridLoad(),
onGridDataBound:onGridDataBound,
gridloaded:created()

}},
 methods: {
        datechange: function(args) {
             start = args.startDate;
  end = args.endDate;
  predicateStart = new Predicate('DateTime', 'greaterthanorequal', args.startDate);
  predicateEnd = new Predicate('DateTime', 'lessthanorequal', args.endDate);
  predicate = predicateStart.and(predicateEnd);
  dataSource = expenseData;
  updateChartData();
  refreshPieChart();
  createLegendData('pieUpdate');
},
        onTextRender: function(args) { 
      args.series.dataLabel.font.size = getFontSize(piechartinstance.initialClipRect.width);
  piechartinstance.animateSeries = true;
  if (args.text.indexOf('Others') > -1) {
    args.text = 'Others';
  }
        },
        onAnimateCompleted: function(args) { 
           let element = document.getElementById('total-expense_datalabel_Series_0');
  if (!isNOU(element)) { element.style.visibility = 'visible'; }
        }
    },
  provide: {
    chart: [LineSeries,AreaSeries,DataLabel, ChartAnnotation ,Tooltip,Legend, RangeAreaSeries, Category,DateTime,ColumnSeries ],
     accumulationchart: [AccumulationLegend,PieSeries,AccumulationDataLabel,AccumulationTooltip,AccumulationSelection,Selection],
      grid: [Toolbar, Page, Aggregate, Sort, ColumnMenu , DetailRow, RowDD, Group]
  },
  mounted: function(args) {
    created();
  }

};

function created() { 
 setTimeout(() => {
     
     linechart = document.getElementById("linechart");
        linechartinstance = linechart.ej2_instances[0];
     columnchart = document.getElementById("columnchart");
        columnchartinstance = columnchart.ej2_instances[0];
         piechart = document.getElementById("piechart");
        piechartinstance = piechart.ej2_instances[0];
        grid = document.getElementById("grid");
        gridinstance = grid.ej2_instances[0];
        initialRender();
        }, 0);
}
</script>
<style scoped>
.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
</style>

