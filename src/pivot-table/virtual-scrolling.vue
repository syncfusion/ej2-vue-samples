<template>
<div>
<div class="control-section" style="overflow: auto">
   <div style="margin-bottom: 5px">
        <ejs-button id="load-btn" ref="loadbtn" class="e-info" :isPrimary="true" v-on:click.native="btnClick">Load 100K Data</ejs-button>
        <span id="popup">
            <span id="gif" className="image"></span>
        </span>
        <span id="performanceTime">Time Taken: 0 sec</span>
    </div>
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :enableVirtualization="enableVirtualization" :gridSettings="gridSettings" :dataBound="dataBound" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the virtual scrolling option available for vertically and horizontally loading records and showing a large number of records with ease.</p>
</div>
<div id="description">
    <p>The pivot table provides an optimized way to render rows and columns inside the view-port alone without calculating the value of the entire pivot.
        To enable virtual scrolling, set <code> enableVirtualization</code> property to true.
    </p>
    <p>
        <strong>NOTE:</strong> The <code> height</code> and <code> width</code> properties must be defined when enabling virtual
        scrolling option.
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
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, IDataSet, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

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
let isInit: boolean;
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

function show() {
    (<any>document.getElementById('popup')).style.display = 'inline-block';
}

export default Vue.extend({
  methods: {
    dataBound: function(args: any) {
      var button = (<any>this.$refs.loadbtn).ej2Instances;
	  var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
	  if((pivotObj.dataSourceSettings.dataSource as IDataSet[]).length > 0) {
		if (date1 && isInit) {
          date2 = new Date().getTime();
          (<any>document.getElementById('performanceTime')).innerHTML = 'Time Taken: ' + (date2 - date1) / 1000 + ' sec';
		}
		isInit = false;
		button.disabled = true;
		(<any>document.getElementById('popup')).style.display = 'none';
	  }
    },
    btnClick: function() {
      var pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      show();
      isInit = true;
      pivotObj.dataSourceSettings.dataSource = data(100000) as IDataSet[];
      date1 = new Date().getTime();
    }
  },
  data: () => {
    return {
      dataSourceSettings: {
        dataSource: [],
        enableSorting: false,
        expandAll: true,
        formatSettings: [{ name: "Price", format: "C0" }],
        rows: [{ name: "ProductID" }],
        columns: [{ name: "Year" }],
        values: [
          { name: "Price", caption: "Unit Price" },
          { name: "Sold", caption: "Unit Sold" }
        ]
      },
      width: 860,
      height: 300,
      enableVirtualization: true,
      gridSettings: { columnWidth: 140 }
    };
  },
  provide: {
    pivotview: [VirtualScroll]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
.image {
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 28px;
}

.e-bigger .image {
  height: 36px;
}

#popup {
  position: absolute;
  background-color: transparent;
  display: none;
  z-index: 100;
}
.div-button{
  margin: 5px 5px 5px 0;
}
#performanceTime {
  float: right;
  margin-top: 3px;
  margin-right: 27px;
}

.e-bigger #performanceTime{
  margin-top: 8px;
}
</style>