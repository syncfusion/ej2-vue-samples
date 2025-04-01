<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="PivotView-Heatmap"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :enginePopulated="enginePopulated"
          :aggregateCellInfo="aggregateCellInfo"
          :cellTemplate="'myTemplate'"
        >
          <template v-slot:myTemplate="{ data }">
            <span class="template-wrap" v-html="getCellContent(data)"></span>
          </template>
        </ejs-pivotview>
      </div>
    </div>
    <div id="action-description">
      <p>In this sample, we show you how to visualize the bound data by making the pivot table cells look like a heatmap.
      </p>
    </div>
    <div id="description">
      <p>The Pivot Table provides custom styles for each cell's display using the cell template. Using the <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/#celltemplate">
              cellTemplate</a> property in this sample, 
          we are representing the product-specific monthly sales revenue of the goods sold
          by an online retailer in a year in the form of a heatmap-like appearance. Each pivot table cell was customized
          by calculating the lowest and highest values via the <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/#enginepopulated">
              enginePopulated</a> event and applying a color scheme based on their range.
      </p>
      <br />
      <p>More information on the cell template can be found in this <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/pivotview/row-and-column#cell-template">
              documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataSet } from '@syncfusion/ej2-vue-pivotview';
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { productData } from './data-source';
enableRipple(false);

/* tslint:disable */
let colourScheme: string[] = [
  'range1',
  'range2',
  'range3',
  'range4',
  'range5',
  'range6',
  'range7',
  'range8',
  'range9',
  'range10',
  'range11',
  'range12',
  'range13',
  'range14',
];
let minValue: number = 0;
let maxValue: number = 0;
function cellColour(value: any): string {
  let percentage: number = (maxValue - minValue) / colourScheme.length;
  let colourIndex: number = Math.round((value - minValue) / percentage);
  return colourScheme[colourIndex];
}
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
  },
  methods: {
    aggregateCellInfo: function (args: any) {
      if (
        args.rowCellType !== 'grandTotal' &&
        args.columnCellType !== 'grandTotal'
      ) {
        minValue =
          minValue < args.value && minValue !== 0 ? minValue : args.value;
        maxValue = maxValue > args.value ? maxValue : args.value;
      }
    },
    enginePopulated: function (): any {
      minValue = minValue - 1000;
      maxValue = maxValue + 1000;
    },
    getCellContent: function (args: any) {
      if (args != null && args.cellInfo) {
        if (args.cellInfo.axis === 'value') {
          if (args.cellInfo.axis === 'value' && !args.cellInfo.isGrandSum) {
            args.targetCell.classList.add(cellColour(args.cellInfo.value));
          }
          args.targetCell.querySelector('.e-cellvalue').innerText = '$' + (args.cellInfo.value / 1000).toFixed(1) + 'K';
        }
      }
    }
  },
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: false,
        columns: [{ name: 'ProductType' }, { name: 'Product' }],
        valueSortSettings: { headerDelimiter: ' - ' },
        values: [{ name: 'SoldAmount', caption: 'Sold Amount' }],
        dataSource: productData,
        rows: [{ name: 'Year' }],
        formatSettings: [{ name: 'SoldAmount', format: 'C0' }],
        groupSettings: [
          {
            name: 'Year',
            type: 'Number',
            rangeInterval: 2,
          },
        ],
        expandAll: true,
        filters: [],
        showColumnSubTotals: false,
      },
      width: '100%',
      height: 500,
      gridSettings: {
        rowHeight: 35,
        columnWidth: 120
      },
    };
  },
};
</script>

<style scoped>
/deep/ .e-pivotview {
  width: 100%;
  height: 100%;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

/deep/ #PivotView-Heatmap .e-collapse {
  display: none;
}

/deep/ .range1 {
  background-color: #fb6262 !important;
  border-color: #f26666 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range2 {
  background-color: #ff6c6c !important;
  border-color: #ff6c6c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range3 {
  background-color: #ff8474 !important;
  border-color: #ff8474 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range4 {
  background-color: #ffa474 !important;
  border-color: #ffa474 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range5 {
  background-color: #ffac7c !important;
  border-color: #ffac7c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range6 {
  background-color: #ffcc7c !important;
  border-color: #ffcc7c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range7 {
  background-color: #ffe484 !important;
  border-color: #ffe484 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range8 {
  background-color: #f8e484 !important;
  border-color: #f8e484 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range9 {
  background-color: #e0dc84 !important;
  border-color: #e0dc84 !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range10 {
  background-color: #b8d47c !important;
  border-color: #b8d47c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range11 {
  background-color: #a8d47c !important;
  border-color: #a8d47c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range12 {
  background-color: #8bc97d !important;
  border-color: #8bc97d !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range13 {
  background-color: #68bc7c !important;
  border-color: #68bc7c !important;
  font-weight: 500;
  color: black !important;
  text-shadow: 0px 0px black;
}

/deep/ .range14 {
  background-color: #66bb71 !important;
  color: black !important;
  font-weight: 500;
  border-color: #66bb71 !important;
  text-shadow: 0px 0px black;
}
</style>
