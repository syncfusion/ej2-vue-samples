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
    This example demonstrates the workflow functionalities that defines the flow of transition between the columns. You can drag and drop the cards between Kanban columns to see the workflow restriction.
  </p>
</div>
<div id="description">
  <p>
    In this sample, you can drag the cards from the `Order` column and drop them into `Ready to Serve` and `Home Delivery` columns. Also, you couldn’t drag the cards from the `Delivered` column and drop the cards in the `Order` column.  The action is controlled using the below properties.
  </p>
  <ul>
    <li>The <code>transitionColumns</code> property is used to allow the card transition to specified columns.</li>
    <li>The <code>allowDrag</code> property is used to enable/disable the drag action of columns.</li>
    <li>The <code>allowDrop</code> property is used to enable/disable the drop action of columns.</li>
  </ul>
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
        height: 100%;
        width: 100%;
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
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { kanbanPizzaData } from "./datasource";
import cardTemplate from "./transition-template.vue";

Vue.use(KanbanPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanPizzaData, null, true),
      cardSettings: {
        headerField: "Id",
        contentField: "Description",
        template: function() {
          return { template: cardTemplate };
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
});
</script>