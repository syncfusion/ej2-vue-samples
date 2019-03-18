<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the virtual scrolling feature. Click the button at the top of the Grid
        to load data source and scroll the Grid content vertically and horizontally to load rows and columns respectively.
        </p>
    </div>
    <div>
        <div class='div-button'>
            <ejs-button @click.native='onClick' cssClass='e-info'>Load 100K Data</ejs-button>
            <span id="popup" :style="display">
                <span id="gif" class="imagepop"></span>
            </span>
            <span id="performanceTime">{{timeTaken}}</span>
        </div>

        <ejs-grid ref='grid' :dataSource="virtualData" :enableVirtualization='true' :enableColumnVirtualization='true' height=600 :dataBound='hide'>
            <e-columns>
                <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
                <e-column field='FIELD2' headerText='Year' width='100'></e-column>
                <e-column field='FIELD3' headerText='Stint' width='120'></e-column>
                <e-column field='FIELD4' headerText='TMID' width='120'></e-column>
                <e-column field='FIELD5' headerText='LGID' width='120'></e-column>
                <e-column field='FIELD6' headerText='GP' width='120'></e-column>
                <e-column field='FIELD7' headerText='GS' width='120'></e-column>
                <e-column field='FIELD8' headerText='Minutes' width='120'></e-column>
                <e-column field='FIELD9' headerText='Points' width='130'></e-column>
                <e-column field='FIELD10' headerText='OREB' width='130'></e-column>
                <e-column field='FIELD11' headerText='DREB' width='130'></e-column>
                <e-column field='FIELD12' headerText='REB' width='130'></e-column>
                <e-column field='FIELD13' headerText='Assists' width='130'></e-column>
                <e-column field='FIELD14' headerText='Steals' width='120'></e-column>
                <e-column field='FIELD15' headerText='Blocks' width='120'></e-column>
                <e-column field='FIELD16' headerText='Turnovers' width='140'></e-column>
                <e-column field='FIELD17' headerText='PF' width='100'></e-column>
                <e-column field='FIELD18' headerText='FGA' width='150'></e-column>
                <e-column field='FIELD19' headerText='FGM' width='120'></e-column>
                <e-column field='FIELD20' headerText='FTA' width='150'></e-column>
                <e-column field='FIELD21' headerText='FTM' width='120'></e-column>
                <e-column field='FIELD22' headerText='Three Attempted' width='170'></e-column>
                <e-column field='FIELD23' headerText='Three Made' width='140'></e-column>
                <e-column field='FIELD24' headerText='Post GP' width='120'></e-column>
                <e-column field='FIELD25' headerText='Post GS' width='120'></e-column>
                <e-column field='FIELD26' headerText='Post Minutes' width='150'></e-column>
                <e-column field='FIELD27' headerText='Post Points' width='120'></e-column>
                <e-column field='FIELD28' headerText='Post OREB' width='150'></e-column>
                <e-column field='FIELD29' headerText='Post DREB' width='150'></e-column>
                <e-column field='FIELD30' headerText='Post REB' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
        The Grid UI virtualization allows you to render only rows and columns visible within the view-port without buffering the entire datasource.
        Grid supports row and column virtualization. To enable row virtualization, set <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablevirtualization-boolean">
        enableVirtualization </a></code> property as true. For column virtualization, set <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablecolumnvirtualization-boolean">
        enableColumnVirtualization</a></code> property as true.
    </p>
    <p>
        Note: The <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#height-string---number">
        height</a></code> property must be defined when enabling <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablevirtualization-boolean">
        enableVirtualization </a></code>.
    </p>
    <p>
        In this demo, Grid enabled row and column virtualization. Click the Load 100K Data button to bind 100000 rows and 30 columns.
    </p>
    <p style='font-weight: 500'>Injecting Module:</p>
    <p>Grid component features are segregated into individual feature-wise modules. To use Virtual scrolling feature, we need
    to inject <code>VirtualScroll</code> into the <code>provide</code> section.</p>
    </div>
</div>
</template>
<style>
@import "../../styles/Grid/virtual-scrolling.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, VirtualScroll, GridComponent } from "@syncfusion/ej2-vue-grids";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data'; 
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

function generateData(start: number, end: number) {
      let datas: never[] = [];
      let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
      for (let i: number = start; i < (end > 100000 ? 100000 : end); i++) {
          datas.push(<never>{
            FIELD1: names[Math.floor(Math.random() * names.length)],
            FIELD2: 1967 + i % 10,
            FIELD3: Math.floor(Math.random() * 200),
            FIELD4: Math.floor(Math.random() * 100),
            FIELD5: Math.floor(Math.random() * 2000),
            FIELD6: Math.floor(Math.random() * 1000),
            FIELD7: Math.floor(Math.random() * 100),
            FIELD8: Math.floor(Math.random() * 10),
            FIELD9: Math.floor(Math.random() * 10),
            FIELD10: Math.floor(Math.random() * 100),
            FIELD11: Math.floor(Math.random() * 100),
            FIELD12: Math.floor(Math.random() * 1000),
            FIELD13: Math.floor(Math.random() * 10),
            FIELD14: Math.floor(Math.random() * 10),
            FIELD15: Math.floor(Math.random() * 1000),
            FIELD16: Math.floor(Math.random() * 200),
            FIELD17: Math.floor(Math.random() * 300),
            FIELD18: Math.floor(Math.random() * 400),
            FIELD19: Math.floor(Math.random() * 500),
            FIELD20: Math.floor(Math.random() * 700),
            FIELD21: Math.floor(Math.random() * 800),
            FIELD22: Math.floor(Math.random() * 1000),
            FIELD23: Math.floor(Math.random() * 2000),
            FIELD24: Math.floor(Math.random() * 150),
            FIELD25: Math.floor(Math.random() * 1000),
            FIELD26: Math.floor(Math.random() * 100),
            FIELD27: Math.floor(Math.random() * 400),
            FIELD28: Math.floor(Math.random() * 600),
            FIELD29: Math.floor(Math.random() * 500),
            FIELD30: Math.floor(Math.random() * 300)
          });
        }
      return datas;
    }

class VirtualAdaptor extends JsonAdaptor {
  constructor () {
      super();
  }
  onPage(data: Object[], page: {pageIndex: number, pageSize: number}) {
      return generateData(((page.pageIndex - 1) * page.pageSize), page.pageIndex* page.pageSize);
  }

  processResponse (result: {count: number}) {
      result.count = 100000;
      return result;
  }
}

let data: DataManager = new DataManager({json: [], adaptor: new VirtualAdaptor()});

export default Vue.extend({
  data: function() {
    return {
        flag: true, date1: 0, date2: 0, virtualData: null, timeTaken: 'Time Taken: 0 ms',
        display: {'display': 'none'}
    };
  },
  methods: {
    show: function() {
        this.display = {'display': 'inline-block'};
    },
    hide: function() {
      if (this.flag && this.date1) {
        this.date2 = new Date().getTime();
        this.timeTaken = "Time Taken: " + (this.date2 - this.date1) + "ms";
        this.flag = false;
      }
      this.display = {'display': 'none'};
    },
    onClick: function (args: any) {
      if (this.virtualData === null) {
        this.show();      
        this.virtualData = <any>data;
        this.date1 = new Date().getTime();
        this.flag = true;
      }
    }
  },
  provide: {
      grid: [VirtualScroll]
  }
});
</script>