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
              keyField="Delivered,Served"
            ></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates how to customize the Kanban cards using
        templates. In this demo, the cards are customized with icons, images,
        and tags.
      </p>
    </div>
    <div id="description">
      <p>
        You can customize the default design of the Kanban cards using
        templates. This can be achieved using the
        <code>cardSettings</code> -> <code>template</code> property, which
        accepts the string or HTML element`s ID value.
      </p>
      <p>
        In this demo, all the cards are customized with templating as text,
        images, and tags.
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
    .fluent-dark .e-kanban .e-size, .bootstrap5-dark .e-kanban .e-size, .tailwind-dark .e-kanban .e-sized, .material-dark .e-kanban .e-size, .fabric-dark .e-kanban .e-size, .bootstrap-dark .e-kanban .e-size, .highcontrast .e-kanban .e-size, .material3-dark .e-kanban .e-size {
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
  content: '\e20c';
  color: #ffa500;
  font-size: 10px;
}

.kanban-card-template .e-card .e-done::before {
  content: '\ea84';
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
    .fluent-dark .e-kanban .e-readyText, .bootstrap5-dark .e-kanban .e-readyText, .tailwind-dark .e-kanban .e-readyText, .material-dark .e-kanban .e-readyText, .fabric-dark .e-kanban .e-readyText, .bootstrap-dark .e-kanban .e-readyText, .highcontrast .e-kanban .e-readyText, .material3-dark .e-kanban .e-readyText {
        color:#21A32E;
}

.kanban-card-template .e-card .e-preparingText {
  color: #527708;
  animation: blinker 1.5s linear infinite;
}
.fluent-dark .e-kanban .e-preparingText, .bootstrap5-dark .e-kanban .e-preparingText, .tailwind-dark .e-kanban .e-preparingText, .material-dark .e-kanban .e-preparingText, .fabric-dark .e-kanban .e-preparingText, .bootstrap-dark .e-kanban .e-preparingText, .highcontrast .e-kanban .e-preparingText, .material3-dark .e-kanban .e-preparingText {
        color: #99d126;
    }

.kanban-card-template .e-card .e-deliveredText {
  color: #c80e0e;
}
.fluent-dark .e-kanban .e-deliveredText, .bootstrap5-dark .e-kanban .e-deliveredText, .tailwind-dark .e-kanban .e-deliveredText, .material-dark .e-kanban .e-deliveredText, .fabric-dark .e-kanban .e-deliveredText, .bootstrap-dark .e-kanban .e-deliveredText, .highcontrast .e-kanban .e-deliveredText, .material3-dark .e-kanban .e-deliveredText {
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
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { kanbanPizzaData } from "./datasource";
import cardTemplate from "./card.vue";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";

var ContentTemplate = createApp({}).component("dialogTemplate", {
  template: `<div>
<table>
    <tbody>
        <tr>
            <td class="e-label">ID</td>
            <td>
              <div class="e-float-input e-control-wrapper">
                <input id="Id" name="Id" type="text" class="e-field" v-model='data.Id' disabled />
              </div>
            </td>
        </tr>
        <tr>
            <td class="e-label">Category</td>
            <td>
               <ejs-dropdownlist id="Category" name="Category" class="e-field" v-model='data.Category' :dataSource="dataSource1" placeholder="Category"></ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td class="e-label">Title</td>
            <td>
              <ejs-textbox id="Title" name="Title" v-model='data.Title' class="e-field" placeholder="Title"></ejs-textbox>
            </td>
        </tr>
        <tr>
            <td class="e-label">Size</td>
            <td>
              <ejs-textbox type="Size" name="Size" id="Size" v-model='data.Size' class="e-field" placeholder="Size"></ejs-textbox>
            </td>
        </tr>
        <tr>
            <td class="e-label">Description</td>
            <td>
              <div class="e-float-input e-control-wrapper">
                <textarea type="text" name="Description" id="Description" class="e-field" v-model='data.Description'></textarea>
              </div>
            </td>
        </tr>
         <tr>
            <td class="e-label">Deliver</td>
            <td>
              <ejs-datepicker id="datepicker" v-model='data.Date' format="MM/dd/yyyy"></ejs-datepicker>
            </td>
        </tr>
    </tbody>
</table>
</div>`,
  components: {
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-datepicker': DatePickerComponent
  },
  data() {
    var categoryData = [
      { text: "Menu" },
      { text: "Order" },
      { text: "Ready to Serve" },
      { text: "Delivered" },
      { text: "Served" },
    ];
    return {
      dataSource1: categoryData,
      data: {},
    };
  },
});
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
          return { template: createApp({}).component('sortCardTemplate', ContentTemplate) };
        },
      },
      dialogClose: function (args) {
        if (args.element.querySelector("#datepicker")) {
          args.data.Date = args.element
            .querySelector("#datepicker")
            .ej2_instances[0].value.toLocaleString("es-PR")
            .split(",")[0];
        }
      }
    };
  },
  provide: {
    kanban: [],
  },
};
</script>
