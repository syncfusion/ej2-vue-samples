<template>
<div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" cssClass='kanban-workflow' keyField="Category" :dataSource="kanbanData"
        :cardSettings="cardSettings">
            <e-columns>
                <e-column headerText='Order' keyField='Order' allowDrop=false :transitionColumns='orderColumns' allowToggle=true></e-column>
                <e-column headerText='Ready to Serve' keyField='Ready to Serve' allowToggle=true :transitionColumns='serverColumns'></e-column>
                <e-column headerText='Home Delivery' keyField='Ready to Deliver' allowToggle=true :transitionColumns='deliveryColumns'></e-column>
                <e-column headerText='Delivered' keyField='Delivered, Served' allowToggle=true allowDrag=false></e-column>
            </e-columns>
        </ejs-kanban>
      </div>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates workflow customization in the Kanban component, enabling controlled card transitions between workflow stages based on predefined business rules.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates workflow validation in the Kanban component by restricting card movement between specific columns. Workflow rules help ensure that cards progress through predefined stages and follow the intended business process.
    </p>
    <p>
        The following column properties are used to control card transitions:
    </p>
    <ul>
        <li>
            <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/columnsmodel#transitioncolumns" target="_blank">transitionColumns</a>:
            Specifies the columns to which cards can be moved from the current column.
        </li>
        <li>
            <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/columnsmodel#allowdrag" target="_blank">allowDrag</a>:
            Enables or disables dragging cards from a column.
        </li>
        <li>
            <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/columnsmodel#allowdrop" target="_blank">allowDrop</a>:
            Enables or disables dropping cards into a column.
        </li>
    </ul>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/columnsmodel#transitioncolumns" target="_blank">transition columns</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
  </p>
</div>
</div>
</template>
<style>
    .e-kanban.kanban-workflow .e-card-kanban-image {
        height: 45px;
        width: 45px;
        margin-left: auto;
    }
    .e-kanban.kanban-workflow .e-card-kanban-image img {
        height: inherit;
        width: inherit;
        border-radius: 50%;
    }
    .e-kanban.kanban-workflow .e-card .e-card-tag-field {
        background: #ececec;
        color: #6b6b6b;
        margin-right: 5px;
        line-height: 1.1;
        font-size: 13px;
        border-radius: 3px;
        padding: 4px;
    }
    .e-kanban.kanban-workflow .e-card-custom-footer {
        display: flex;
        padding: 0px 12px 12px;
        line-height: 1;
        height: 35px;
    }
    .e-kanban.kanban-workflow .e-card td {
        background-color: #fff;
    }
    .e-kanban.kanban-workflow .e-card .e-card-content {
        display: flex;
    }
    .e-kanban.kanban-workflow .e-card .e-text {
        width: fit-content;
    }
</style>
<script>
import { createApp } from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanPizzaData } from "./datasource";
import cardTemplate from "./transition-template.vue";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanPizzaData, null, true),
      cardSettings: {
        headerField: "Id",
        contentField: "Description",
        template: function() {
          return { template: createApp({}).component('cardTemplate', cardTemplate) };
        }
      },
      orderColumns: ['Ready to Serve', 'Ready to Deliver'],
      serverColumns: ['Served'],
      deliveryColumns: ['Delivered']
    };
  },
  provide: {
    kanban: []
  }
}
</script>
