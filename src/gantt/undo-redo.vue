<template>
<div class="col-lg-12 control-section">
<div id="action-description">
<p>This example showcases the undo-redo functionality within the Gantt Chart, offering users the flexibility to revert or reapply their latest actions on the Gantt Chart.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="ColumnMenu" 
        :dataSource= "data"        
        :height = "height"
        :showColumnMenu= 'true'
        :allowFiltering= 'true'
        :allowSorting= 'true'     
        :allowResizing= 'true'
        :allowReordering= 'true'
        :enableUndoRedo= 'true'
        :undoRedoActions= 'undoRedoActions'
        :enableContextMenu= 'true'
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :columns= "columns"
        :toolbar= "toolbar"
        :editSettings= "editSettings"
        :labelSettings= "labelSettings"
        :splitterSettings= "splitterSettings"
        :treeColumnIndex= "1"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        Undo feature enables users to revert the most recent action performed in the Gantt Chart. It helps in undo the changes made to tasks, dependencies, or other elements within the Gantt Chart.
    </p>
    <p>
        Redo feature can reapply an action that was previously undone using the Undo feature. This allows users to revert their decision to undo an action.
    </p>
    <p>
        To undo a recent action, you can either press the Undo keyboard shortcut(Ctrl + Z) or click on the Undo toolbar option. To reapply an action that was undone, you can use the Redo keyboard shortcut(Ctrl + Y) or click on the Redo toolbar option.
    </p>
    <p>
        You can specify the actions to be restored using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#undoredoactions">
            undoRedoActions</a> property, such as <code>Edit</code>, <code>Add</code>, <code>Delete</code>, <code>Sorting</code>, <code>ColumnReorder</code>, <code>ColumnResize</code>, <code>Search</code>, <code>Filtering</code>, <code>ZoomIn</code>, <code>ZoomOut</code>, <code>ZoomToFit</code>, <code>ColumnState</code>, <code>Indent</code>, <code>Outdent</code>, <code>RowDragAndDrop</code>, <code>TaskbarDragAndDrop</code>, <code>PreviousTimeSpan</code>, <code>NextTimeSpan</code>.
    </p>
    <p>
        Additionally, you can also define number of undo/redo actions that should be stored. This setting can be adjusted using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#undoredostepscount">
            undoRedoStepsCount</a> property. By default <code>undoRedoStepsCount</code> value is 10.
    </p>
    <p>
        In this demo, the undo-redo feature is enabled by setting <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#enableundoredo">
            enableUndoRedo</a> to true.
    </p>
    <p>
        Gantt control features are segregated into individual feature-wise modules.To use a UndoRedo, inject the
        <code>UndoRedo</code> module using the <code>Gantt.Inject(UndoRedo)</code> method.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, Filter, Sort, ColumnMenu, Resize,Edit,Reorder,UndoRedo,ContextMenu,Toolbar,DayMarkers} from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
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
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search', 
        'Undo', 'Redo'],
            columns: [
               { field: 'TaskID', headerText: 'ID', width: 110 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency' }
            ],
            undoRedoActions:['Sorting','Add','ColumnReorder','ColumnResize','ColumnState','Delete','Edit','Filtering','Indent','Outdent','NextTimeSpan','PreviousTimeSpan','RowDragAndDrop','Search'],
             editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings:{
                columnIndex: 4
            },
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
           
      };
  },
  provide: {
      gantt: [Selection, Filter, Sort, ColumnMenu, Resize,Edit,Reorder,UndoRedo,ContextMenu,Toolbar,DayMarkers]
  }
}
</script>
