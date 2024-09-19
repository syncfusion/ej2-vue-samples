<template>
<div>
<div class="control-section">
  <div class="performance-time-container" style="margin-bottom: 15px;">
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='ddData' width='240' :fields='fields' :change='valueChange' :value='ddValue'></ejs-dropdownlist>
      <span id="performanceTime">Time Taken: 0 sec</span>
    </div>
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :enableVirtualization="enableVirtualization" :dataBound="dataBound" :load="load">        
        </ejs-pivotview>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates how the pivot table loads a large amount of data with ease using virtual scrolling.</p>
</div>
<div id="description">
    <p>This sample demonstrates how the pivot table performs when bound with a million rows in a highly optimized manner by
        only displaying rows and columns to the current view port using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/#enablevirtualization">
            enableVirtualization</a> property. By choosing from the dropdown list options, a different number of rows
        can be loaded into the pivot table.
    </p>
    <br />
    <p>
        <strong>Injecting Module:</strong>
    </p>
    <p>
        The pivot table features are segregated into individual modules. To use the virtual scrolling option, inject
        <code> VirtualScroll</code> module using the
        <code>provide</code> section.
    </p>
    <br />
    <p>
        More information on the virtual scrolling can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/virtual-scrolling">
            documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataSet, VirtualScroll, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple, Browser } from '@syncfusion/ej2-base';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
enableRipple(false);

/* tslint:disable */
let customername: string[] = [
  "TOM",
  "Hawk",
  "Jon",
  "Chandler",
  "Monica",
  "Rachel",
  "Phoebe",
  "Gunther",
  "Ross",
  "Geller",
  "Joey",
  "Bing",
  "Tribbiani",
  "Janice",
  "Bong",
  "Perk",
  "Green",
  "Ken",
  "Adams"
];
let city: string[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "Austin",
  "San Francisco",
  "Columbus",
  "Washington",
  "Portland",
  "Oklahoma",
  "Las Vegas",
  "Virginia",
  "St. Louis",
  "Birmingham"
];
let date1: number;
let date2: number;
let isInit: boolean = true;
let dt: number = 0;
function data(count: number) {
  let result: Object[] = [];
  for (let i: number = 1; i < count + 1; i++) {
    dt++;
    let round: string;
    let toString: string = i.toString();
    if (toString.length === 1) {
      round = "0000" + i;
    } else if (toString.length === 2) {
      round = "000" + i;
    } else if (toString.length === 3) {
      round = "00" + i;
    } else if (toString.length === 4) {
      round = "0" + i;
    } else {
      round = toString;
    }
    result.push({
      ProductID: "PRO-" + round,
      City: city[Math.round(Math.random() * city.length)] || city[0],
      Year: "FY " + (dt + 2013),
      CustomerName:
        customername[Math.round(Math.random() * customername.length)] ||
        customername[0],
      Price: Math.round(Math.random() * 5000) + 5000,
      Sold: Math.round(Math.random() * 80) + 10
    });
    if (dt / 4 == 1) {
        dt = 0;
    }
  }
  return result;
}


export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-dropdownlist': DropDownListComponent,
  },
  methods: {
    valueChange: function (args: any) {
      var pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      ((this as any).$refs.dropdown).$el.ej2_instances[0].closePopup();
      isInit = true;
      pivotObj.dataSourceSettings.dataSource = data(args.value);
      date1 = new Date().getTime();
    },
    dataBound: function(args: any) {
	    var pivotObj = ((this as any).$refs.pivotview).ej2Instances;
	    if((pivotObj.dataSourceSettings.dataSource as IDataSet[]).length > 0) {
		  if (date1 && isInit) {
          date2 = new Date().getTime();
          (<any>document.getElementById('performanceTime')).innerHTML = 'Time Taken: ' + (date2 - date1) / 1000 + ' sec';
		  }
		  isInit = false;
	    }
      if (Browser.isDevice && pivotObj && pivotObj.enableRtl && document.querySelector('.control-section')) {
          (<any>document.querySelector('.control-section')).classList.add('e-rtl');
      }
    },
    load: function() {
        if (isInit) {
            date1 = new Date().getTime();
        }
    }
  },
  data: () => {
    return {
      ddData: [
        { value: 10000, text: '10,000 Rows and 10 Columns' }, 
        { value: 100000, text: '1,00,000 Rows and 10 Columns' },
        { value: 1000000, text: '1,000,000 Rows and 10 Columns' }
        ],
      fields: { text: 'text', value: 'value' },
      ddValue: 10000,
      dataSourceSettings: {
            dataSource: data(10000),
            enableSorting: false,
            expandAll: true,
            formatSettings: [{ name: 'Price', format: 'C0' }],
            rows: [{ name: 'ProductID' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
      },
      enableVirtualization: true,
      width: "100%",
      gridSettings: { columnWidth: 120 },
      height: 300
    };
  },
  provide: {
    pivotview: [VirtualScroll]
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

/deep/ #performanceTime {
  float: right;
  margin-top: 3px;
  margin-right: 27px;
}

/deep/ .e-bigger #performanceTime{
  margin-top: 8px;
}

@media only screen and (max-width: 440px) {
  .control-section .performance-time-container {
    margin-bottom: 30px !important;

    #performanceTime {
      float: left;
    }
  }
}
</style>