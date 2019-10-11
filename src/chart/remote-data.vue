<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :crosshair='crosshair' :labelRender='labelRender' :loadedChart='loadedChart' :pointRender='pointRender'
            :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries' name='Story Point' width=2 :marker='marker'> </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
    <div class="col-lg-12 control-section">
    <div id="container" align="center">
        <div id="waitingpopup" class="waitingpopup" style="display:none">
            <span id="gif" class="image"></span>
        </div>
    </div>
     <div id="action-description">
    <p>
       This sample illustrates how to retrieve remote the data for chart.
    </p>
</div>
<div id="description">
    <p>
    The Chart supports data binding. The <code>dataSource</code> property can be assigned with the instance of <code>DataManager</code> to bind remote data.
    </p>
    <br>
    <p>
    The DataManager, which will act as an interface between the service endpoint and the chart, will require the below minimal information to interact with service endpoint properly.
    </p>
     <br>
       <ul>
            <li>
                <code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
            <li>
                <code>DataManager->adaptor</code> - - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for remote binding. .</li>

        </ul>
        <p>
           Adaptor is responsible for processing response and request from/to the service endpoint. <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact with particular service endpoints. They are,
        </p> 
          <ul>
            <li>
                <code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.</li>
            <li>
                <code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>

            <li>
                <code>ODataV4Adaptor</code>- Use this to interact with OData V4 endpoints.</li>
            <li>
                <code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
            <li>
                <code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        <br>
        <p>
            In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code> to the <code>dataSource</code> property.
        </p>
</div>

</div>

</div>
</template>
<style>
 .waitingpopup {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        width: 50px;
        height: 50px;
    }
    
    .image {
        position: absolute;
        background-repeat: no-repeat;
        background-image: url('./images/Medium-36px-spin.gif');
        background-position: center;
        width: 50px;
        height: 50px;
        padding: 6px;
    }
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
import { ChartPlugin, ColumnSeries, Category, Legend, Tooltip, DataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);


let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let dataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders'
});
let query = new Query().take(5).where('Estimate', 'lessThan', 3, false);

let loaded = 1;
let loadedChart = function (args) {
    let div = document.getElementById('waitingpopup');
    div.style.display = 'none';
    if (loaded) {
        args.chart.refresh();
    }
    loaded = 0;
};
let pointRender = function (args)  {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    } else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    } else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    } else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
        seriesData: dataManager,
        queries: query,
        loadedChart: loadedChart,
        pointRender: pointRender,

      //Initializing Primary X Axis
      primaryXAxis: {
            rangePadding: 'Additional',
            valueType: 'Category',
            title: 'Assignee',
            majorGridLines: { width: 0 },
        },

      //Initializing Primary Y Axis
           primaryYAxis:
            {
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                    color: 'transparent'
                }
            },
        chartArea: {
            border: {
                width: 0
            }
        },
          crosshair: {
            enable: true,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },
       width: Browser.isDevice ? '100%' : '60%',
        marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600', color: '#ffffff'
                        }
                    }
                },
        tooltip: {
            enable: true
        },
        legendSettings: { visible: false },
      title: "Sprint Task Analysis"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip, DataLabel]
  },
  methods: {
    load: function(args) {
      let div = document.getElementById('waitingpopup');
            div.style.display = 'block';
            let width = args.chart.element.offsetWidth;
            let height = args.chart.element.offsetHeight;
            div.style.top = (height ? height : 300 / 2 - 25) + 'px';
            div.style.left = (width / 2 - 25) + 'px';
            div.style.display = '';
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
    labelRender: function(args) {
        if (args.axis.orientation === 'Horizontal') {
            args.text = args.text.split(' ')[0];
        }
    }
  },
   
});
</script>