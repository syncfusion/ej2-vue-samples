<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the infinite scrolling feature. You can use the scrollbar or navigation keys or the mouse wheel to perform the infinite scroll action.</p>
    </div>
    <div>
        <div class='div-button'>
            <ejs-button @click='onClick' cssClass='e-info'>Load 100K Data</ejs-button>
        </div>

        <ejs-grid ref='grid' :dataSource="virtualData" :enableInfiniteScrolling='true' height=400 :pageSettings='pageSettings' :dataBound='hide'>
            <e-columns>
                <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
                <e-column field='FIELD2' headerText='Year' width='100'></e-column>
                <e-column field='FIELD3' headerText='Stint' width='120'></e-column>
                <e-column field='FIELD4' headerText='TMID' width='120'></e-column>
                <e-column field='FIELD5' headerText='LGID' width='120'></e-column>
                <e-column field='FIELD6' headerText='GP' width='120'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
        The Grid Infinite scrolling, allows to load data in lazy loading concept, which means the buffer 
        data is loaded only when the scrollbar reaches the end of the scroller. To enable Infinite 
        scrolling, set <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/api/grid/#enableinfinitescrolling">enableInfiniteScrolling</a></code> property as <code>true</code>.
    </p>
    <p>
    Note: The height property must be defined when enabling <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/api/grid/#enableinfinitescrolling">enableInfiniteScrolling</a></code>.
    </p>
    <p style='font-weight: 500'>Injecting Module:</p>
    <p>Grid component features are segregated into individual feature-wise modules. 
    To use Infinite scrolling feature, we need to inject 
    <code>InfiniteScroll</code> into the <code>provide</code> section.</p>
    </div>
</div>
</template>
<style scoped>
.image { position: absolute; background-repeat: no-repeat; 
    background-image: url('./images/spinner.gif'); 
    background-position: center; width: 16px; height: 28px; }

.e-bigger .image {
height: 36px;
}

#popup {
position: absolute;
background-color: transparent;
display: none;
z-index: 100;
}
.div-button {
   margin: 5px 5px 5px 0;
}
</style>

<script lang="ts">
import { GridComponent, ColumnsDirective, ColumnDirective, InfiniteScroll } from "@syncfusion/ej2-vue-grids";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data'; 
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
        flag: true, 
        virtualData: null,
        pageSettings: { pageSize: 50 }
    };
  },
  methods: {
    hide: function() {
      if ((this as GridComponent).flag) {
        (this as GridComponent).flag = false;
      }
    },
    generateData: function() {
      let datas: never[] = [];
      let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
      for (let i: number = 0; i < 100000; i++) {
          datas.push(<never>{
            FIELD1: names[Math.floor(Math.random() * names.length)],
            FIELD2: 1967 + i % 10,
            FIELD3: Math.floor(Math.random() * 200),
            FIELD4: Math.floor(Math.random() * 100),
            FIELD5: Math.floor(Math.random() * 2000),
            FIELD6: Math.floor(Math.random() * 1000)
          });
        }
      return datas;
    },
    onClick: function (args: any) {
      if ((this as GridComponent).virtualData === null) {
        (this as GridComponent).virtualData = (this as GridComponent).generateData();
        (this as GridComponent).flag = true;
      }
    }
  },
  provide: {
      grid: [InfiniteScroll]
  }
};
</script>
