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
.kanban-card-template .e-card table {
  table-layout: fixed;
}

.kanban-card-template .e-card .e-time {
  display: inline-flex;
}

.kanban-card-template .e-card .e-size {
  color: #b8860b;
}
.kanban-card-template .e-card .e-kanban-date {
  padding-left: 3px;
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
  color: #008000;
}

.kanban-card-template .e-card .e-preparingText {
  color: #9ACD32;
  animation: blinker 1.5s linear infinite;
}

.kanban-card-template .e-card .e-deliveredText {
  color: #ff0000;
}
.e-kanban-dialog .e-kanban-form-wrapper table .e-label, .e-kanban-dialog .e-kanban-form-container table .e-label {
  width: 80px;
}
.kanban-card-template .e-kanban-dialog .e-float-input, .e.kanban .e-float-input.e-control-wrapper
{
  margin-top:0px;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { kanbanPizzaData } from "./datasource";
import cardTemplate from "./card.vue";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DatePickerPlugin);
Vue.use(TextBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(KanbanPlugin);
var ContentTemplate = Vue.component("dialogTemplate", {
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
export default Vue.extend({
  data: function () {
    return {
      kanbanData: extend([], kanbanPizzaData, null, true),
      cardSettings: {
        headerField: "Id",
        template: function () {
          return { template: cardTemplate };
        },
      },
      dialogSettings: {
        template: function () {
          return { template: ContentTemplate };
        },
      },
      dialogClose: function (args) {
        if (args.element.querySelector("#datepicker")) {
          args.data.Date = args.element
            .querySelector("#datepicker")
            .ej2_instances[0].value.toLocaleString("es-PR")
            .split(" ")[0];
        }
      }
    };
  },
  provide: {
    kanban: [],
  },
});
</script>
