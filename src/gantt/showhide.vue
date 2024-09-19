<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
        <ejs-gantt ref='gantt' id="ShowHide" 
        :dataSource= "data"        
        :height = "height"
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :splitterSettings= "splitterSettings"
        :treeColumnIndex= "1"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 30%; padding-bottom: 10px;">
                <div>Column</div>
            </td>
            <td style="width: 70%;padding-right: 10px; padding-bottom: 10px;">
                <div id='columnddl'>
                    <ejs-dropdownlist width='100px' ref='columns' id='columns' :dataSource='columnNames' value='TaskID' :fields='colfields' :change="onColChange"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                   <ejs-button ref='hide' v-on:click="hide">Hide</ejs-button>
                </div>
            </td>
            <td style="width: 70%">
                <div>
                    <ejs-button ref='show' disabled='true' v-on:click="show">Show</ejs-button>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%; padding-left: 10px;">
                <label for="hiddencolumns"> Hidden Columns</label>
            </td>
            <td style="width: 70%; padding:10px 10px 10px 0px">
                <div>
                    <textarea id="hiddencolumns" style="resize: none;height:65px;background-color: #fff; padding: 6px" 
                    class="form-control"></textarea>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

<div id="action-description">
    <p>This sample demonstrates dynamic show/hide columns feature of Gantt. Select column name from the properties panel, 
        and then click hide/show to toggle visibility.
     </p>
</div>

<div id="description">
     <p>The Gantt column can be shown or hidden dynamically using the <code>showColumn</code> and <code>hideColumn</code> methods of the Gantt.</p>
    <p>In this demo, the columns can be shown and hidden by selecting the column name in dropdown. Click the Show or Hide button to toggle the visibility. 
       The visibility of column is toggled based on the 
       <a target="_blank" href="hhttps://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#headertext">columns -> headerText</a> value.
    </p>
<br/>
<p>The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#visible">columns -> visible</a> property specifies the visibility of a column. 
    To hide a column at the initial rendering, set the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#visible">columns -> visible</a> property to false.
</p>
</div>

  </div>
</template>
<!-- custom code start -->
  <style scoped>
    #columnddl {
        min-width: 120px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import { Column } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent, ClickEventArgs } from '@syncfusion/ej2-vue-buttons';
import { GanttComponent, Selection, Gantt} from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: () => {
    return {
       data: projectNewData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               child: 'subtasks'
            },
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings:{
                columnIndex: 3
            },
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
            columnNames: [
                { id: 'TaskID', name: 'ID' },
                { id: 'StartDate', name: 'Start Date' },
                { id: 'EndDate', name: 'End Date' },
                { id: 'Duration', name: 'Duration' },
                { id: 'Predecessor', name: 'Dependency' },
                { id: 'Progress', name: 'Progress' }
                ],
            colfields: { text: 'name', value: 'id' }
    };
  },
  provide: {
      gantt: [Selection]
    },
    methods: {
        onColChange: function(e: ChangeEventArgs): void {
          let columnName = e.value;
          let column: Column = ((this as any).$refs.gantt).ej2Instances.treeGrid.grid.getColumnByField(columnName) as Column;
          if (column.visible === undefined || column.visible) {
                ((this as any).$refs.show).ej2Instances.disabled = true;
                ((this as any).$refs.hide).ej2Instances.disabled = false;
            } else {
                ((this as any).$refs.hide).ej2Instances.disabled = true;
                ((this as any).$refs.show).ej2Instances.disabled = false;
            }
        },
        hide: function(e: ClickEventArgs) {
             let dropValue = ((this as any).$refs.columns).ej2Instances.value;
             let columnName: string = ((this as any).$refs.gantt).ej2Instances.treeGrid.getColumnByField(dropValue).headerText;
             ((this as any).$refs.hide).ej2Instances.disabled = true;
             ((this as any).$refs.show).ej2Instances.disabled = false;
             let hiddencols: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;
             hiddencols.value = hiddencols.value + columnName + '\n';
             ((this as any).$refs.gantt).hideColumn(columnName);
        },
        show: function(e: ClickEventArgs){
            let dropValue = ((this as any).$refs.columns).ej2Instances.value;
            let columnName: string = ((this as any).$refs.gantt).ej2Instances.treeGrid.getColumnByField(dropValue).headerText;
            ((this as any).$refs.show).ej2Instances.disabled = true;
            ((this as any).$refs.hide).ej2Instances.disabled = false;
            let hiddencols: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;
            let value = hiddencols.value.replace(columnName + '\n','');
            hiddencols.value = value;
            ((this as any).$refs.gantt).showColumn(columnName);
        }
    }
};
</script>
