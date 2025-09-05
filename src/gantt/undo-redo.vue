<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample showcases the undo-redo functionality in the Gantt Chart, allowing users to revert or reapply their recent actions such as task edits, additions, and deletions.</p>
    </div>
    <div>
      <ejs-gantt
        ref="gantt"
        id="GanttUndoRedo"
        :dataSource="data"
        :height="height"
        :rowHeight="46"
        :taskbarHeight="25"
        :taskFields="taskFields"
        :allowSelection="true"
        :allowFiltering="true"
        :allowSorting="true"
        :allowResizing="true"
        :allowReordering="true"
        :enableContextMenu="true"
        :treeColumnIndex="1"
        :showColumnMenu="true"
        :splitterSettings="splitterSettings"
        :labelSettings="labelSettings"
        :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate"
        :highlightWeekends="true"
        :enableUndoRedo="true"
        :undoRedoActions="undoRedoActions"
        :toolbar="toolbar"
        :editSettings="editSettings"
        :columns="columns"
        :dataBound="dataBound"
        :toolbarClick="toolbarClick"
        :actionComplete="actionComplete"
        :resizeStop="resizeStop"
      ></ejs-gantt>
    </div>
    <div id="description">
      <p>The undo feature lets users reverse the most recent changes made to tasks, dependencies, columns, or timeline settings. The redo feature restores actions that were previously undone. Both can be triggered using keyboard shortcuts (<code>Ctrl + Z</code> for Undo, <code>Ctrl + Y</code> for Redo) or via toolbar buttons.</p>
    <p>
        You can configure which actions are tracked using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#undoredoactions">undoRedoActions</a> property. Supported actions include: 
        <code>Edit</code>, <code>Add</code>, <code>Delete</code>, <code>Sorting</code>, <code>ColumnReorder</code>, <code>ColumnResize</code>, <code>Search</code>, <code>Filtering</code>, <code>ZoomIn</code>, <code>ZoomOut</code>, <code>ZoomToFit</code>, <code>ColumnState</code>, <code>Indent</code>, <code>Outdent</code>, <code>RowDragAndDrop</code>, <code>TaskbarDragAndDrop</code>, <code>PreviousTimeSpan</code>, and <code>NextTimeSpan</code>
    </p>
    <p>The number of undo-redo steps stored can be controlled using the <code>undoRedoStepsCount</code> property, which defaults to 10.</p>
    <p>
        In this demo, the undo-redo feature is enabled by setting <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#enableundoredo">
        enableUndoRedo</a> to <code>true</code>
    </p>
    <br>
    <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/undo-redo">documentation section</a>.</p>
    </div>
  </div>
</template>

<script>
import { GanttComponent, Selection, Filter, Sort, ColumnMenu, Resize, Edit, Reorder, UndoRedo, ContextMenu, Toolbar, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { undoRedoData } from "./data-source";

export default {
  components: {
    "ejs-gantt": GanttComponent
  },
  data: function() {
    return {
      data: undoRedoData,
      height: "650px",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        child: 'subtasks'
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      undoRedoActions: [
        "Sorting",
        "Add",
        "ColumnReorder",
        "ColumnResize",
        "ColumnState",
        "Delete",
        "Edit",
        "Filtering",
        "Indent",
        "Outdent",
        "NextTimeSpan",
        "PreviousTimeSpan",
        "RowDragAndDrop",
        "Search"
      ],
      toolbar: [
        "Add",
        "Edit",
        "Update",
        "Delete",
        "Cancel",
        { text: "Undo", tooltipText: "Undo", id: "Undo" },
        { text: "Redo", tooltipText: "Redo", id: "Redo" }
      ],
      columns: [
        { field: "TaskID", headerText: "ID", width: 100 },
        { field: "TaskName", headerText: "Name", width: 250 },
        { field: "StartDate" },
        { field: "EndDate" },
        { field: "Duration" },
        { field: "Progress" },
        { field: "Predecessor", headerText: "Dependency" }
      ],
      splitterSettings: {
        columnIndex: 2
      },
      labelSettings: {
        rightLabel: "TaskName"
      },
      projectStartDate: new Date("06/27/2025"),
      projectEndDate: new Date("08/30/2025")
    };
  },
  provide: {
    gantt: [Selection, Filter, Sort, ColumnMenu, Resize, Edit, Reorder, UndoRedo, ContextMenu, Toolbar, DayMarkers]
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === "Undo") {
        this.$refs.gantt.undo();
      } else if (args.item.id === "Redo") {
        this.$refs.gantt.redo();
      }
      this.updateBadges();
    },
    actionComplete() {
      this.updateBadges();
    },
    resizeStop() {
      this.updateBadges();
    },
    dataBound() {
      this.updateBadges();
    },
    updateBadges() {
      const undoBtn = document.querySelector('[aria-label="Undo"]');
      const redoBtn = document.querySelector('[aria-label="Redo"]');
      
      if (undoBtn) {
        undoBtn.style.position = "relative";
        undoBtn.style.overflow = "visible";
        undoBtn.classList.add("e-overlay");
      }
      if (redoBtn) {
        redoBtn.style.position = "relative";
        redoBtn.style.overflow = "visible";
        redoBtn.classList.add("e-overlay");
      }

      const undoCount = this.$refs.gantt.getUndoActions().length;
      const redoCount = this.$refs.gantt.getRedoActions().length;

      this.setBadge(undoBtn, undoCount, "Undo");
      this.setBadge(redoBtn, redoCount, "Redo");
    },
    setBadge(button, count, type) {
      if (!button) return;
      let badge = button.querySelector(".e-badge.e-badge-danger.e-badge-notification.e-badge-overlap.e-badge-circle");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle";
        button.appendChild(badge);
      }
      
      const tailwind3 = document.body.classList.contains("tailwind3") || document.body.classList.contains("tailwind3-dark");
      const bootstrap5 = document.body.classList.contains("bootstrap5.3") || document.body.classList.contains("bootstrap5.3-dark");
      const material3 = document.body.classList.contains("material3") || document.body.classList.contains("material3-dark");
      const fluent = document.body.classList.contains("fluent") || document.body.classList.contains("fluent-dark");
      const fluent2 = document.body.classList.contains("fluent2") || document.body.classList.contains("fluent2-dark");

      if (tailwind3) {
        badge.style.backgroundColor = "#c2410c";
        badge.style.color = "#fff";
        badge.style.marginTop = "3px";
        badge.style.paddingTop = "2px";
      } else if (bootstrap5) {
        badge.style.backgroundColor = "#ffc107";
        badge.style.color = "#000";
        badge.style.paddingTop = "3px";
        badge.style.marginTop = "6px";
      } else if (fluent2) {
        badge.style.backgroundColor = "#fde300";
        badge.style.color = "#000";
        badge.style.paddingTop = "4px";
        badge.style.marginTop = "6px";
      } else if (fluent) {
        badge.style.backgroundColor = "#fde300";
        badge.style.color = "#000";
        badge.style.paddingTop = "2px";
        badge.style.marginTop = "8px";
      } else if (material3) {
        badge.style.backgroundColor = "#b3261e";
        badge.style.color = "#fff";
        badge.style.paddingTop = "3px";
      }

      badge.textContent = count.toString();
      badge.style.display = count > 0 ? "inline-block" : "none";

      if (count === 0) {
        button.classList.add("e-overlay");
        button.style.cursor = "default";
        button.style.pointerEvents = "none";
        button.style.boxShadow = "0 0 0 transparent";
      } else {
        button.classList.remove("e-overlay");
        button.style.cursor = "pointer";
        button.style.pointerEvents = "auto";
        button.style.boxShadow = "";
      }
    }
  }
};
</script>

<style>
#Undo, #Redo {
  position: relative;
  overflow: visible;
  cursor: default;
}

#GanttUndoRedo_Toolbar {
  overflow: visible;
}

.e-badge.e-badge-danger.e-badge-notification.e-badge-overlap.e-badge-circle {
  margin-top: 8px;
  z-index: 4;
}
</style>