<template>
  <div>
    <div class="control-section">
      <div style="margin-bottom: 10px">
        <strong style="display: inline-block; font-size: 14px padding-left:5px">Feed Delay(ms):</strong>
        <ejs-numerictextbox
          ref="feeddelay"
          :value="value"
          format="N0"
          :min="min"
          :step="step"
          :width="textBoxWidth"
          placeholder="0"
          style="margin-left: 7px"
        ></ejs-numerictextbox>
        <ejs-button
          ref="updatebtn"
          id="update1"
          v-on:click="updateClick"
          class="update-btn"
          >Start Data Update...</ejs-button
        >
        <ejs-button
          ref="clearbtn"
          id="clear"
          v-on:click="clearClick"
          class="update-btn"
          >Stop Data Update...</ejs-button
        >
      </div>
      <div class="content-wrapper">
        <ejs-pivotview
          id="PivotView-Heatmap"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :width="width"
          :height="height"
          :dataBound="dataBound"
          :destroyClear="destroyClear"
          :displayOption ="displayOption"
          :chartSettings= "chartSettings"
          :gridSettings="gridSettings"
          :cellTemplate="'myTemplate'"
        >
          <template v-slot:myTemplate="{ data }">
            <span class="template-wrap" v-html="getCellContent(data)"></span>
          </template>
        </ejs-pivotview>
      </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how frequently the pivot table and the pivot chart are updated with real-time data
          at a given time interval.</p>
    </div>
    <div id="description">
      <p>Both the pivot table and the pivot chart are receiving real-time data and
        periodically updating themselves every 5000 milliseconds. Furthermore, in this demonstration,
      </p>
    <ul>
        <li>
          The <strong>"Feed Delay"</strong> numeric text box can be used to change the time interval.
        </li>
        <li>
          The <strong>"Start Updating..."</strong> button causes the pivot table to automatically update at the interval
          specified in the <strong>"Feed Delay"</strong> numeric text box, which is measured in milliseconds.
        </li>
        <li>
            The pivot table's automatic updating can be stopped by selecting the <strong>"Stop Updating..."</strong> button.
        </li>
        <li>
          Displayed the <strong>"Change(%)"</strong> values in the pivot table as red for negative values and
          green for positive values using the cell template concept.
        </li>
    </ul><br />
    <p>
        More information on the Essential<sup>®</sup> JS2 Pivot Table can be found in these <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/row-and-column#cell-template">Cell Template</a> & <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/pivot-chart">Pivot Chart</a> documentation section.
    </p>
</div>
  </div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataSet } from '@syncfusion/ej2-vue-pivotview';
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { ChartTheme, ILoadedEventArgs } from "@syncfusion/ej2-vue-charts";
enableRipple(false);

/* tslint:disable */
let colourScheme: string[] = ['bg-fade', 'bg-fade1', 'bg-fade2'];
let previousPivotValues: any;
let timerID: any;
let initial: boolean = true;
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
const REGIONS: any = [
  {
    Region: 'North America',
    Countries: ['Canada', 'United States', 'Mexico'],
  },
  {
    Region: 'Middle East',
    Countries: ['Turkey', 'Saudi Arabia'],
  },
  {
    Region: 'Europe',
    Countries: ['Russia', 'Germany', 'France', 'United Kingdom', 'Italy'],
  },
  {
    Region: 'Africa',
    Countries: ['South Africa'],
  },
  {
    Region: 'Asia Pacific',
    Countries: [
      'Australia',
      'China',
      'India',
      'Indonesia',
      'Japan',
      'South Korea',
    ],
  },
  {
    Region: 'South America',
    Countries: ['Brazil'],
  },
];

const DATA: IDataSet[] = [
  {
    Category: 'Agriculture',
    Type: 'Corn',
    Spread: 0.01,
    'Open Price': 379.5,
    Price: 379.8026,
    Buy: 379.7976,
    Sell: 379.8076,
    Change: 0.3026,
    'Change(%)': 0.0797,
    Volume: 11266,
  },
  {
    Category: 'Agriculture',
    Type: 'Rice',
    Spread: 0.01,
    'Open Price': 11.245,
    Price: 10.4154,
    Buy: 10.4104,
    Sell: 10.4204,
    Change: -0.8296,
    'Change(%)': -7.3779,
    Volume: 220,
  },
  {
    Category: 'Agriculture',
    Type: 'Wheat',
    Spread: 0.01,
    'Open Price': 465.5,
    Price: 465.52,
    Buy: 465.5,
    Sell: 465.5,
    Change: 0.02,
    'Change(%)': 0.0043,
    Volume: 4318,
  },
  {
    Category: 'Agriculture',
    Type: 'Soybean',
    Spread: 0.01,
    'Open Price': 1038.0,
    Price: 1038.6171,
    Buy: 1038.6121,
    Sell: 1038.6221,
    Change: 0.6171,
    'Change(%)': 0.0595,
    Volume: 20356,
  },
  {
    Category: 'Agriculture',
    Type: 'Coffee',
    Spread: 0.01,
    'Open Price': 125.7,
    Price: 125.69,
    Buy: 125.7,
    Sell: 125.7,
    Change: -0.01,
    'Change(%)': -0.008,
    Volume: 1654,
  },
  {
    Category: 'Agriculture',
    Type: 'Cocoa',
    Spread: 0.01,
    'Open Price': 307.0,
    Price: 307.03,
    Buy: 307.0,
    Sell: 307.0,
    Change: 0.03,
    'Change(%)': 0.001,
    Volume: 978,
  },
];

function generateData(): any {
  const count: number = 1000;
  const currData: Object[] = [];
  let j: number = 0;
  for (let i: number = 0; i < count; i++) {
    const rand: number = Math.floor(Math.random() * Math.floor(DATA.length));
    const region = REGIONS[j];
    for (let k = 0; k < region.Countries.length; k++) {
      const data = Object.assign({}, DATA[rand]);
      const dataObj = {
        ...data,
        Region: region.Region,
        Country: region.Countries[k],
      };
      randomizeObjectData(dataObj);
      currData.push(dataObj);
    }
    j++;
    j = j > 5 ? 0 : j;
  }
  return currData;
}

function randomizeObjectData(dataObj: any): any {
  const changeP = 'Change(%)';
  const res: any = generateNewPrice(dataObj.Price, dataObj.Volume);
  dataObj.Change = res.Price - dataObj.Price;
  dataObj.Price = res.Price;
  dataObj[changeP] = res.ChangePercent;
  dataObj.Volume = res.Volume;
}

function generateNewPrice(oldPrice: any, oldVolume: any): any {
  let rnd: number = Math.random();
  rnd = Math.round(rnd * 100) / 100;
  const volatility: number = 15;
  let newPrice: number = 0;
  let newVolume: number = 0;
  let changePercent: number = 2 * volatility * rnd;
  if (changePercent > volatility) {
    changePercent -= 2 * volatility;
  }
  let changeVolumnPercent: number = 2 * (volatility - 5) * rnd;
  if (changeVolumnPercent > volatility - 5) {
    changeVolumnPercent -= 2 * (volatility - 5);
  }
  let changeAmount: number = oldPrice * (changePercent / 100);
  newPrice = oldPrice + changeAmount;
  let changeVolume: number = oldVolume * (changeVolumnPercent / 100);
  newVolume = oldVolume + changeVolume;
  newPrice = Math.round(newPrice * 100) / 100;
  newVolume = Math.round((newVolume * 100) / 100);
  const result = { Price: 0, ChangePercent: 0, Volume: 0 };
  changePercent = Math.round(changePercent * 100) / 100;
  result.Price = newPrice;
  result.ChangePercent = changePercent;
  result.Volume = newVolume;
  return result;
}

function cellColour(value: any): string {
    let colorIndex: number = value < 0 ? 0 : value > 0 ? 1 : 2;
    return colourScheme[colorIndex];
}

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-button': ButtonComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
  },
  methods: {
    dataBound: function () {
      let updateButton = ((this as any).$refs.updatebtn).ej2Instances;
      let feedDelayInput = ((this as any).$refs.feeddelay).ej2Instances;
      if (initial) {
        updateButton.element.click();
        initial = false;
        feedDelayInput.element.addEventListener('keypress', (e: any) => {
          if (
            e && e.key === 'Enter' &&
            feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
            feedDelayInput.value = parseInt(feedDelayInput.element.value);
            feedDelayInput.focusOut();
            updateButton.element.click();
          }
        });
      }
    },
    destroyClear: function () {
      if (timerID) {
        clearInterval(timerID);
        timerID = undefined;
      }
    },
    updateClick: function () {
      let clearButton = ((this as any).$refs.clearbtn).ej2Instances;
      let updateButton = ((this as any).$refs.updatebtn).ej2Instances;
      let feedDelayInput = ((this as any).$refs.feeddelay).ej2Instances;
      if (!timerID) {
        updateButton.disabled = true;
        feedDelayInput.enabled = false;
        clearButton.disabled = false;
        timerID = setInterval(this.updateCellValues, feedDelayInput.value);
      }
    },
    clearClick: function () {
      let clearButton = ((this as any).$refs.clearbtn).ej2Instances;
      let updateButton = ((this as any).$refs.updatebtn).ej2Instances;
      let feedDelayInput = ((this as any).$refs.feeddelay).ej2Instances;
      if (timerID) {
        updateButton.disabled = false;
        feedDelayInput.enabled = true;
        clearButton.disabled = true;
        clearInterval(timerID);
        timerID = undefined;
      }
    },
    updateCellValues: function () {
      if (!isNullOrUndefined(((this as any).$refs.pivotview))) {
        let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
        if (!isNullOrUndefined(pivotObj)) {
          if (pivotObj.pivotValues.length > 0) {
            if (!previousPivotValues) {
              previousPivotValues = pivotObj.pivotValues;
            }
            previousPivotValues = pivotObj.pivotValues;
          }
          pivotObj.dataSourceSettings.dataSource = generateData();
        }
      }
    },
    getCellContent: function (args: any) {
      if (args != null && args.cellInfo && args.cellInfo.axis === 'value') {
        if (!args.cellInfo.isGrandSum && args.cellInfo.actualText === 'Change') {
          args.targetCell.classList.add(cellColour(args.cellInfo.value));
        }
      }
    }
  },
  data: () => {
    return {
      min: 5000,
      step: 1000,
      value: 5000,
      textBoxWidth: '150px',
      dataSourceSettings: {
        dataSource: generateData(),
        enableSorting: true,
        columns: [{ name: 'Type' }],
        values: [
          { name: 'Volume', caption: 'Volume' },
          { name: 'Price', caption: 'Price' },
          { name: 'Change', type: 'Avg', caption: 'Change(%)' },
        ],
        rows: [{ name: 'Country' }],
        filters: [{ name: 'Category' }],
        formatSettings: [
          { name: 'Price', format: 'C2' },
          { name: 'Open Price', format: 'C2' },
          { name: 'Change', format: "###.##'%'" },
          { name: 'Volume', format: 'N0' },
        ],
        expandAll: false,
        showSubTotals: false,
        showGrandTotals: false,
        emptyCellsTextContent: 'Revising',
        sortSettings: [
          {
            name: 'Type',
            order: 'Ascending',
            membersOrder: [
              'Corn',
              'Rice',
              'Wheat',
              'Soybean',
              'Coffee',
              'Cocoa',
            ],
          },
        ],
      },
      gridSettings: {
        columnWidth: 100
      },
      displayOption: { view: "Both" },
      chartSettings: {
        theme: theme,
        value: "Price",
        legendSettings: { visible: false },
        chartSeries: { type: "Column" },
        zoomSettings: {
            enableScrollbar: false,
            toolbarItems: [],
            enableSelectionZooming: false,
        },
        load: (args: ILoadedEventArgs) => {
          let selectedTheme = location.hash.split('/')[1];
          selectedTheme = selectedTheme ? selectedTheme : 'Material';
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
        }
      },
      width: '100%',
      height: 350,
    };
  },
};
</script>

<style scoped>
/deep/ #PivotView-LiveData_chart {
  margin-top: 15px;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

/deep/ .bg-fade {
  background-color: #FFEBE9 !important;
  color: #FF3740 !important;
}

/deep/ .bg-fade1 {
  background-color: #DFFFE2 !important;
  color: #00A653 !important;
}

/deep/ .bg-fade2 {
  color: rgba(0, 0, 0, 0.87);
}

/deep/ .update-btn {
    margin-left: 10px;
}

/* Mobile mode */
@media only screen and (max-width: 688px) {
    .update-btn {
        margin: 10px 10px 0 0;
    }
}
</style>
