<template>
    <div id="container">
         <ejs-accumulationchart class="chart" :theme='theme' ref="pieInstance1" style='display:block;height:100% !important,width:100% !important;' :legendSettings="legendSettings" :tooltip="tooltip"> 
            <e-accumulation-series-collection>
                <e-accumulation-series :palettes='palettes' :dataSource='seriesData' xName='Device' yName='Amount' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
export default {
  data() {
    return {
      theme: theme,
      seriesData:  [
    {
        'UniqueId': 'T100003',
        'DateTime': new Date(1488359820000),
        'Category': 'Food',
        'PaymentMode': 'Cash',
        'TransactionType': 'Expense',
        'Description': 'Confederate cush',
        'Amount': '900',
        'MonthShort': 'Mar',
        'MonthFull': 'March, 2017',
        'FormattedDate': '03/01/2017 08:53 PM',
        'Device': 'Tablet'
    }, {
        'UniqueId': 'T100004',
        'DateTime': new Date(1491038220000),
        'Category': 'Transportation',
        'PaymentMode': 'Credit Card',
        'TransactionType': 'Expense',
        'Description': 'Public and other transportation',
        'Amount': '1200',
        'MonthShort': 'Apr',
        'MonthFull': 'April, 2017',
        'FormattedDate': '04/01/2017 10:44 AM',
        'Device': 'Desktop'
    }, {
        'UniqueId': 'T100005',
        'DateTime': new Date(1493630220000),
        'Category': 'Transportation',
        'PaymentMode': 'Cash',
        'TransactionType': 'Expense',
        'Description': 'Public and other transportation',
        'Amount': '600',
        'MonthShort': 'May',
        'MonthFull': 'May, 2017',
        'FormattedDate': '05/01/2017 03:25 PM',
        'Device': 'Mobile'
    },
],
     legendSettings: { visible: false },
     dataLabel: { visible: true, position: 'Inside', name: 'value'},
     tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
     },
     palettes: ['#00bdae', '#357cd2', '#e56691'],
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  mounted(){
    this.$refs.pieInstance1.height ="100%";
    this.$refs.pieInstance1.width ="100%";
  }
};
</script>
<style>
 .chart-content, #container, .chart.e-control.e-accumulationchart{
    height: 100%;
    width:100%;
  }
</style>