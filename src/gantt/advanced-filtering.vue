<template>
  <div>
    <div class="control-section" style="padding-top: 0px;">
      <div class="content-wrapper">
        <div id="ganttsidebar-parent" style="overflow: hidden;">
          <ejs-button id="ganttfilter-btn" @click="toggleSidebar">
            <span class="e-gantt-quickfilter" style="padding: 3px;"></span>
            Advanced Filters
          </ejs-button>
          <ejs-gantt ref="gantt" id="AdvancedFiltering" :dataSource="dataSource" :taskFields="taskFields"
            :columns="columns" :treeColumnIndex="0" :allowFiltering="true" :includeWeekend="true" :height="height"
            :rowHeight="46" :taskbarHeight="25" :splitterSettings="splitterSettings" :labelSettings="labelSettings"
            :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
            :rowSelected="rowSelected"></ejs-gantt>
        </div>
      </div>
    </div>

    <div v-if="isSideBar">
      <ejs-sidebar id="ganttSidebar" ref="sidebar" :width="width" :type="type" :isOpen="sidebarToggle" :target="target"
        :position="position">

        <div class="ganttsidebar-header">
          <div class="ganttsidebar-title">Advanced Filters</div>
          <ejs-button id="ganttsidebar-close" class="e-close" @click="closeSidebar"></ejs-button>
        </div>
        <ejs-querybuilder ref="queryBuilder" id="ganttquerybuilder" :dataSource="dataSource"
          :allowValidation="allowValidation" :columns="queryBuilderColumns" @ruleChange="updateRule"
          @created="created"></ejs-querybuilder>

        <div class="gantt-btn-container">
          <ejs-button type="button" id="apply" :isPrimary="true" class="e-control e-btn apply-btn"
            @click="applyFilter">Apply</ejs-button>
          <ejs-button type="button" id="clear" class="e-control e-btn clear-btn" @click="clearFilter">Clear</ejs-button>
        </div>

      </ejs-sidebar>
    </div>

    <div id="action-description">
      <p>This sample demonstrates the integration of the QueryBuilder component for complex filtering in the Gantt
        Chart.</p>
    </div>

    <div id="description">
      <p>
        In this example, the process involves retrieving the complex query from the <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started">QueryBuilder</a> component
        and subsequently integrating it into the Gantt Chart by updating its <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#query">Query</a> Property. The QueryBuilder
        component tool is located in a <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/sidebar/getting-started">SideBar</a> component that appears
        when you click on the toolbar.
      </p>
      <br>
      <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/filtering/filtering">documentation section</a>.</p>
    </div>
  </div>
</template>

<script>
import { GanttComponent, Filter, Selection } from "@syncfusion/ej2-vue-gantt";
import { QueryBuilderComponent } from "@syncfusion/ej2-vue-querybuilder";
import { SidebarComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Query } from "@syncfusion/ej2-data";
import { projectNewData } from "./data-source";
export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-querybuilder': QueryBuilderComponent,
    'ejs-sidebar': SidebarComponent,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      dataSource: projectNewData,
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
      },
      columns: [
        { field: 'TaskID', width: 120 },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'EndDate' },
        { field: 'Progress' },
        { field: 'Predecessor', type: 'string', width: 190 }
      ],
      height: "650px",
      splitterSettings: {
        columnIndex: 2
      },
      labelSettings: {
        rightLabel: "TaskName"
      },
      projectStartDate: new Date('03/30/2025'),
      projectEndDate: new Date('07/20/2025'),
      sidebarToggle: false,
      isSideBar: false,
      predicatevalue: null,
      querybuilderevent: false,
      searchQuery: new Query(),
      target: '#ganttsidebar-parent',
      position: 'Right',
      width: "65%",
      isOpen: false,
      type: "Over",
      allowValidation: true,
      queryBuilderColumns: [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'TaskName', label: 'Task Name', type: 'string' },
        { field: 'StartDate', label: 'Start Date', type: 'date', format: 'MM/dd/yyyy' },
        { field: 'Duration', label: 'Duration', type: 'number' },
        { field: 'EndDate', label: 'End Date', type: 'date', format: 'MM/dd/yyyy' },
        { field: 'Progress', label: 'Progress', type: 'number' },
        { field: 'Predecessor', label: 'Predecessor', type: 'string' }
      ]
    };
  },
  methods: {
    rowSelected() {
      this.sidebarToggle = false;
    },
    toggleSidebar() {
      this.sidebarToggle = !this.sidebarToggle;
      this.isSideBar = true;
    },
    closeSidebar() {
      this.sidebarToggle = false;
      this.createQueryFromRules();
    },
    applyFilter() {
      if (this.predicatevalue != null) {
        this.searchQuery = new Query().where(this.predicatevalue);
      } else {
        this.searchQuery = new Query().select(['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress', 'Predecessor']);
      }
      this.$refs.gantt.ej2Instances.query = this.searchQuery;
      this.$refs.gantt.ej2Instances.refresh();
    },
    clearFilter() {
      this.$refs.queryBuilder.reset();
      this.predicatevalue = null;
      this.searchQuery = new Query();
      this.$refs.gantt.ej2Instances.query = this.searchQuery;
      this.$refs.gantt.ej2Instances.refresh();
    },
    updateRule(args) {
      this.predicatevalue = this.$refs.queryBuilder.getPredicate(args.rule);
      if (args.Type === "DeleteRule" && this.predicatevalue != null) {
        this.searchQuery = new Query().where(this.predicatevalue);
      } else if (this.predicatevalue == null && args.Type === "DeleteRule") {
        this.searchQuery = new Query().select(['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress', 'Predecessor']);
      }
    },
    created() {
      this.querybuilderevent = true;
      this.createQueryFromRules();
    },
    createQueryFromRules() {
      if (this.querybuilderevent) {
        let create = this.$refs.queryBuilder.getSqlFromRules();
        if (create && create !== "") {
          this.$refs.queryBuilder.setRulesFromSql(create);
        }
      }
    }
  },
  provide: {
    gantt: [Filter, Selection]
  }
}
</script>

<style>
#ganttfilter-btn {
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

#ganttSidebar {
  height: 452px !important;
  border: 1px solid rgb(204, 202, 200) !important;
}

#ganttquerybuilder {
  margin: 12px;
}

.ganttsidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.e-bigger {
  .e-gantt {
    .e-sidebar {
      width: 100% !important;
    }
  }
}

.ganttsidebar-title {
  font-size: 18px;
  font-weight: 500;
}

.gantt-btn-container {
  padding: 10px;
  float: right;
}

.gantt-btn-container {
  .apply-btn {
    margin: 6px;
  }
}

.ganttsidebar-header {
  #ganttsidebar-close {
    background: transparent;
    border: none;
    cursor: pointer;
  }
}

.ganttsidebar-header {
  .e-close::before {
    font-family: 'e-icons' !important;
    content: '\e7e7';
    font-size: 15px;
  }
}

.ganttsidebar-header {
  .highcontrast .e-close::before {
    content: '\e7fc';
    font-family: 'e-icons';
    font-size: 15px;
  }
}

.e-gantt-quickfilter::before {
  font-family: 'e-icons' !important;
  content: '\e7f7';
  font-size: 15px;
}

.highcontrast .e-gantt-quickfilter::before {
  content: '\e21c';
  font-family: 'e-icons';
}
</style>