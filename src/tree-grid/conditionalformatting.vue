<template>
<div class="col-lg-12 control-section">
    <div>
         <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :queryCellInfo='queryCellInfo'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>This samples demonstrates the way of customizing the cells by adding icons for Priority column and highlighted the cells of Progress column based on certain condition using <code>queryCellInfo</code> event.
    </p>
</div>

<div id="description">
    <p>
        The appearance of cells can be customized by using the <code>queryCellInfo</code> event. The <code>queryCellInfo</code> event triggers for every cell. In that event handler, you can get QueryCellInfoEventArgs 
            that contains the details of the cell.
    </p> 
    <p>
        In this demo, we have customized the column values by adding icons for Priority column and highlighted the cells of Progress column based on certain condition using queryCellInfo event.
    </p>  
</div>



</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-grids';
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageSize: 10, pageCount: 4 }
    };
  },
  provide: {
      treegrid: [Page]
  },
   methods:{
       queryCellInfo:function (args: QueryCellInfoEventArgs) {
           (<TreeGridComponent>this.$refs.treegrid);
           if ((args.cell as HTMLElement).innerHTML === 'High') {
             let x: HTMLElement = document.createElement('IMG');
             x.setAttribute('src', 'src/tree-grid/images/high.png');
             x.setAttribute('height', '15px');
             let span: HTMLElement = document.createElement('span');
             span.innerHTML = (args.cell as HTMLElement).innerHTML;
             span.setAttribute('style', 'padding-left:7px;');
             (args.cell as HTMLElement).innerHTML = '';
             (args.cell as HTMLElement).appendChild(x);
             (args.cell as HTMLElement).appendChild(span);
           } else if ((args.cell as HTMLElement).innerHTML === 'Critical') {
             let y: HTMLElement = document.createElement('IMG');
             y.setAttribute('src', 'src/tree-grid/images/critical.png');
             y.setAttribute('height', '15px');
             let span: HTMLElement = document.createElement('span');
             span.innerHTML = (args.cell as HTMLElement).innerHTML;
             span.setAttribute('style', 'padding-left:7px;');
             (args.cell as HTMLElement).innerHTML = '';
             (args.cell as HTMLElement).appendChild(y);
             (args.cell as HTMLElement).appendChild(span);
           } else if ((args.cell as HTMLElement).innerHTML === 'Low') {
             let z: HTMLElement = document.createElement('IMG');
             z.setAttribute('src', 'src/tree-grid/images/low.png');
             z.setAttribute('height', '15px');
             let span: HTMLElement = document.createElement('span');
             span.innerHTML = (args.cell as HTMLElement).innerHTML;
             span.setAttribute('style', 'padding-left:7px;');
             (args.cell as HTMLElement).innerHTML = '';
             (args.cell as HTMLElement).appendChild(z);
             (args.cell as HTMLElement).appendChild(span);
           } else if ((args.cell as HTMLElement).innerHTML === 'Normal') {
             let a: HTMLElement = document.createElement('IMG');
             a.setAttribute('src', 'src/tree-grid/images/normal.png');
             a.setAttribute('height', '15px');
             let span: HTMLElement = document.createElement('span');
             span.innerHTML = (args.cell as HTMLElement).innerHTML;
             span.setAttribute('style', 'padding-left:7px;');
             (args.cell as HTMLElement).innerHTML = '';
             (args.cell as HTMLElement).appendChild(a);
             (args.cell as HTMLElement).appendChild(span);
           } else if (+(args.cell as HTMLElement).innerHTML > 90 && +(args.cell as HTMLElement).innerHTML <= 100 && (args.column as Column).field === 'progress') {
              (args.cell as HTMLElement).setAttribute('style', 'background-color:#336c12;color:white;');
           } else if (+(args.cell as HTMLElement).innerHTML > 20 && (args.column as Column).field === 'progress') {
                (args.cell as HTMLElement).setAttribute('style', 'background-color:#7b2b1d;color:white;');
           }
        }
  }
});
</script>