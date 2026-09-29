<template>
  <div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban
          id="kanban"
          cssClass="kanban-card-template"
          keyField="Category"
          :dataSource="kanbanData"
          :cardSettings="cardSettings"
          :dialogSettings="dialogSettings"
          :dialogClose="dialogClose"
        >
          <e-columns>
            <e-column headerText="Menu" keyField="Menu"></e-column>
            <e-column headerText="Order" keyField="Order"></e-column>
            <e-column
              headerText="Ready to Serve"
              keyField="Ready to Serve"
            ></e-column>
            <e-column
              headerText="Delivered"
              keyField="Delivered"
            ></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates how to customize the appearance and editing experience of Kanban cards using card and dialog templates.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates how to customize the appearance of Kanban cards and dialogs using templates. The
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/cards#template" target="_blank">cardSettings.template</a>
        property allows you to define a custom card layout using a string template or an HTML element. In this sample, the card template displays order details such as the pizza image, title, description, status indicators, and tags.
    </p>
    <p>
        The editing dialog is customized using the <a href="https://ej2.syncfusion.com/vue/documentation/kanban/dialog" target="_blank">dialogSettings.template</a> property. The
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#dialogopen" target="_blank">dialogOpen</a> and 
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#dialogclose" target="_blank">dialogClose</a>
        events are used to initialize and update the dialog fields during the editing process.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/cards#template" target="_blank">card template </a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>
  </div>
</template>
<style>
#kanbanEditForm .e-float-input {
    margin-top: 0px;
}
.kanban-card-template .e-card table {
  table-layout: fixed;
}

.kanban-card-template .e-card .e-time {
  display: inline-flex;
}

.kanban-card-template .e-card .e-size {
  color: #795704;
    }
    .fluent-dark .e-kanban .e-size, .bootstrap5-dark .e-kanban .e-size,.bootstrap5\.3-dark .e-kanban .e-size, .tailwind-dark .e-kanban .e-sized, .tailwind3-dark .e-kanban .e-sized, .material-dark .e-kanban .e-size, .fabric-dark .e-kanban .e-size, .bootstrap-dark .e-kanban .e-size, .highcontrast .e-kanban .e-size, .material3-dark .e-kanban .e-size {
        color: #b8860b;
}
.kanban-card-template .e-card .e-kanban-date {
  padding-right: 3px;
}
.kanban-card-template .e-card .e-date {
  display: contents;
}
.kanban-card-template .e-card .e-mins {
  padding-left: 3px;
}

.kanban-card-template .e-card .e-clock {
  padding-top: 2px;
}

.kanban-card-template .e-card .e-clock::before {
  color: #ffa500;
  font-size: 10px;
}

.kanban-card-template .e-card .e-done::before {
  color: #008000;
  font-size: 16px;
}

.fabric .kanban-card-template .e-card .e-clock::before {
  content: '\e97f';
}

.bootstrap .kanban-card-template .e-card .e-clock::before {
  content: '\e93e';
}

.bootstrap4 .kanban-card-template .e-card .e-clock::before {
  content: '\e7c7';
}

.bootstrap4 .kanban-card-template .e-card .e-done::before {
  content: '\e7d9';
}

.highcontrast .kanban-card-template .e-card .e-clock::before {
  content: '\e97f';
}

.kanban-card-template .e-card .card-template-wrap {
  line-height: normal;
  font-size: 12px;
  width: 100%;
}

.kanban-card-template .e-card .card-template-wrap td {
  background: none !important;
  border: none !important;
  height: auto !important;
  line-height: 1.6;
}

.kanban-card-template .e-card .e-image img {
  background: #ececec;
  border-radius: 50%;
  width: 45px;
  height: 45px;
}

.kanban-card-template .e-card .e-image {
  padding-right: 5px;
  padding-left: 10px;
}

.kanban-card-template .e-card .card-header {
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
}

.kanban-card-template .e-card .card-content {
  display: flex;
  justify-content: space-between;
}

.kanban-card-template .e-card .e-description {
  padding-top: 5px;
  padding-bottom: 10px;
}

.kanban-card-template .e-card .e-done {
  padding-top: 5px;
  padding-bottom: 10px;
  position: absolute;
  right: 15px;
}

.kanban-card-template .e-card .e-readyText {
  color: #018607;
    }
    .fluent-dark .e-kanban .e-readyText, .bootstrap5-dark .e-kanban .e-readyText,.bootstrap5\.3-dark .e-kanban .e-readyText, .tailwind-dark .e-kanban .e-readyText, .tailwind3-dark .e-kanban .e-readyText, .material-dark .e-kanban .e-readyText, .fabric-dark .e-kanban .e-readyText, .bootstrap-dark .e-kanban .e-readyText, .highcontrast .e-kanban .e-readyText, .material3-dark .e-kanban .e-readyText {
        color:#21A32E;
}

.kanban-card-template .e-card .e-preparingText {
  color: #527708;
  animation: blinker 1.5s linear infinite;
}
.fluent-dark .e-kanban .e-preparingText, .bootstrap5-dark .e-kanban .e-preparingText,.bootstrap5\.3-dark .e-kanban .e-preparingText, .tailwind-dark .e-kanban .e-preparingText, .tailwind3-dark .e-kanban .e-preparingText, .material-dark .e-kanban .e-preparingText, .fabric-dark .e-kanban .e-preparingText, .bootstrap-dark .e-kanban .e-preparingText, .highcontrast .e-kanban .e-preparingText, .material3-dark .e-kanban .e-preparingText {
        color: #99d126;
    }

.kanban-card-template .e-card .e-deliveredText {
  color: #c80e0e;
}
.fluent-dark .e-kanban .e-deliveredText, .bootstrap5-dark .e-kanban .e-deliveredText,.bootstrap5\.3-dark .e-kanban .e-deliveredText, .tailwind-dark .e-kanban .e-deliveredText, .tailwind3-dark .e-kanban .e-deliveredText, .material-dark .e-kanban .e-deliveredText, .fabric-dark .e-kanban .e-deliveredText, .bootstrap-dark .e-kanban .e-deliveredText, .highcontrast .e-kanban .e-deliveredText, .material3-dark .e-kanban .e-deliveredText {
        color:#dc7c7c;
    }
.e-kanban-dialog .e-kanban-form-wrapper table .e-label, .e-kanban-dialog .e-kanban-form-container table .e-label {
  width: 80px;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
</style>
<script>
import { createApp } from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanPizzaData } from "./datasource";
import cardTemplate from "./card.vue";
import ContentTemplate from "./card-addedit-content.vue";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data: function () {
    return {
      kanbanData: extend([], kanbanPizzaData, null, true),
      cardSettings: {
        headerField: "Id",
        template: function () {
          return { template: createApp({}).component('sortCardTemplate', cardTemplate) };
        },
      },
      dialogSettings: {
        template: function () {
          return { template: createApp({}).component('contentTemplate', ContentTemplate) };
        },
      },
      dialogClose: function (args) {
        const datePicker = args.element.querySelector('#datepicker');
        if (datePicker) {
          const selectedDate = datePicker.ej2_instances[0].value;
          if (selectedDate instanceof Date) {
            args.data.Date = selectedDate.toLocaleDateString('es-PR');
          } else {
            args.data.Date = null;
          }
        }
      }
    };
  },
  provide: {
    kanban: [],
  },
};
</script>
