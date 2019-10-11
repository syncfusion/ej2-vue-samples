<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates the usage of template columns in TreeGrid. 
       In this sample, we have shown Spark Line control in the TreeGrid columns.
    </p>
</div>
<div id="description">
    <p>
        The TreeGrid provides a way to use a custom layout for each cell using column template feature. 
        The <code>columns->template</code> property accepts either string or HTML element`s ID value, which will be used as the template for the cell.
    </p>
    <p>
        In this demo, using column template, we have presented sparkLine charts for the "Tax per annum", "One day index" and "Year GR" columns. In <code>columns->template</code> we have assigned with the ID of a SCRIPT element whose content is used as the template.
    </p>
    <p>The template expression should be provided inside <code>${...}</code> interpolation syntax</p>
    <p>
        More information about Column Template can be found in this documentation section.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='Children' :treeColumnIndex='0' :height='380' :rowHeight='83' :rowDataBound='rowDataBound'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='100'></e-column>
                <e-column field='Name' headerText='Name' width='100'></e-column>
                <e-column field='DOB' headerText='DOB' width='90' format='yMd' textAlign='Right'></e-column>
                <e-column headerText='Tax Per Annum' width='100' :template='template1' ></e-column>
                <e-column headerText='One Day Index' width='100' :template='template2' ></e-column>
                <e-column headerText='Year GR' width='120' :template='template3' ></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
import { sparkdata, textdata, getSparkData } from "./data-source";
import template1 from "./template1.vue";
import template2 from "./template2.vue";
import template3 from "./template3.vue";
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { Sparkline, ISparklineLoadEventArgs, SparklineTheme } from '@syncfusion/ej2-charts';

Vue.use(TreeGridPlugin);
Vue.use(SparklinePlugin);

let line: Sparkline;
let column: Sparkline;
let winloss: Sparkline;

export default Vue.extend({
  data: () => {
    return {
      data: textdata,
      template1: function() {
          return {
              template:template1
          }
      } ,
      template2: function() {
          return {
              template:template2
          }
      },
      template3: function() {
          return {
              template:template3
          }
      }
    };
  },
   methods:{
    rowDataBound: function(args: RowDataBoundEventArgs) {
            let data: string = getObject('EmployeeID', args.data);
            let spkline = (args.row as Element).querySelector('#spkline' + data);
            let spkarea = (args.row as Element).querySelector('#spkarea' + data);
            let spkwl = (args.row as Element).querySelector('#spkwl' + data);
            line = new Sparkline({
                height: '50px',
                width: '150px',
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: getSparkData('line', +data)
            });
            line.appendTo(spkline as HTMLElement);
            let column: Sparkline = new Sparkline({
                height: '50px',
                width: '150px',
                type: 'Column',
                valueType: 'Numeric',
                fill: '#3C78EF',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            column.appendTo(spkarea as HTMLElement);
            winloss = new Sparkline({
                height: '50px',
                width: '150px',
                type: 'WinLoss',
                valueType: 'Numeric',
                fill: '#3C78EF',
                tiePointColor: 'darkgray',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            winloss.appendTo(spkwl as HTMLElement);
        },    
  }

});
</script>