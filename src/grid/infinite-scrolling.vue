<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample demonstrates the Grid component with the infinite scrolling feature. You can use the scrollbar or navigation keys or the mouse wheel to perform the infinite scroll action.
    </p>
    </div>
    <div>
        <div class='div-button'>
            <ejs-button @click='onClick' cssClass='e-info'>Load 100K Data</ejs-button>
        </div>

        <ejs-grid ref='grid' :dataSource="virtualData" :enableInfiniteScrolling='true' :enableColumnVirtualization='true' height=400 :pageSettings='pageSettings' :dataBound='hide'>
            <e-columns>
              <e-column field='SNo' headerText='S.No' width='140' :isPrimaryKey='true'></e-column>
                <e-column field='FIELD1' headerText='Player Name' width='140'></e-column>
                <e-column field='FIELD2' headerText='Year' width='100'></e-column>
                <e-column field='FIELD3' headerText='Sports' width='160'></e-column>
                <e-column field='FIELD4' headerText='Country' width='160'></e-column>
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
                <e-column field='FIELD30' headerText='Post REB' width='130'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
      <p>
        The Grid Infinite scrolling feature enables the loading of data using the lazy loading concept, where buffer data is loaded only when the scrollbar reaches the end of the scroller. 
        To enable Infinite scrolling, set the <code><a target="_blank" className="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enableinfinitescrolling">
        enableInfiniteScrolling </a></code> property to true. Additionally, you can efficiently display a multiple columns without performance degradation using the clumn virtualization feature. 
        Enable column virtualization by setting the <code><a target="_blank" className="code"
        href="http://ej2.syncfusion.com/vue/documentation/api/grid/#enablecolumnvirtualization">
        enableColumnVirtualization</a></code> property to true.
      </p>
      <p>
          Note: The <code><a target="_blank" className="code"
          href="https://ej2.syncfusion.com/vue/documentation/api/grid/#height">
          height</a></code> property must be defined when enabling the <code><a target="_blank" className="code"
          href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enableinfinitescrolling">
          enableInfiniteScrolling </a></code>.
      </p>
    <p style='font-weight: 500'>Injecting Module:</p>
    <p>Grid component features are separated into feature-wise modules. 
    To use Infinite scrolling feature, inject the
    <code>InfiniteScroll</code> into the <code>provide</code> section.</p>
    <p>
      To utilize column virtualization, inject the <code>VirtualScroll</code> module,
      and for infinite scrolling,integrate the <code>InfiniteScroll</code> module in the <code>provide</code> section.
    </p>
    <p>
      More information on the infinite scrolling can be found in this
      <a target="_blank" 
      href="https://ej2.syncfusion.com/vue/documentation/grid/scrolling/infinite-scrolling">
      documentation section</a>.
    </p>
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
import { GridComponent, ColumnsDirective, ColumnDirective, InfiniteScroll, VirtualScroll } from "@syncfusion/ej2-vue-grids";
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
      if ((this as any).flag) {
        (this as any).flag = false;
      }
    },
    generateData: function() {
      let datas: any = [];
      let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
      'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
      'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
      'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
      'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
      'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
      'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
      let sport: string[] = ['Cricket', 'Football', 'Tennis', 'Golf', 'Chess', 'Dodgeball', 'Racket', 'Archery', 'Climbing', 'Hunting', 'Carrom', 'Tag', 'Novuss',
        'Subbuteo', 'Baseball', 'Madden NFL', 'Shuffleboard', 'Badminton', 'Hockey', 'Volleyball', 'Table Tennis', 'Golf', 'Cycling', 'Running', 'Walking', 'Wireball',
        'Town ball', 'Tee ball', 'Stool ball', 'Stick ball'];
      let country: string[] = ['India', 'Australia', 'Ballesteros', 'Belgium', 'Brazil', 'England', 'Ethiopia', 'Finland', 'France', 'Germany', 'Britain',
        'Argentina', 'Jamaica', 'Kenya', 'Morocco', 'Ireland', 'Norway', 'Philippines', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Scottish', 'Serbia', 'Spain',
        'Sweden', 'Switzerland', 'Netherlands', 'UK', 'Ukraine', 'US', 'Wales', 'West Indies', 'China', 'Hong Kong', 'Italy', 'Philippines', 'Turkey', 'Botswana',
        'Sri Lanka', 'Algeria', 'Bangladesh', 'Egypt', 'Malaysia'];

      for (let i: number = 0; i < 100000; i++) {
        datas.push({
          SNo: i + 1,
          FIELD1: names[Math.floor(Math.random() * names.length)],
          FIELD2: 1967 + i % 10,
          FIELD3: sport[Math.floor(Math.random() * sport.length)],
          FIELD4: country[Math.floor(Math.random() * country.length)],
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
    },
    onClick: function (args: any) {
      if ((this as any).virtualData === null) {
        (this as any).virtualData = (this as any).generateData();
        (this as any).flag = true;
      }
    }
  },
  provide: {
      grid: [InfiniteScroll, VirtualScroll]
  }
};
</script>
