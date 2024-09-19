<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
    <p>
                The Grid utilizes the row template feature to design a custom layout for its rows.
        The <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid#rowtemplate">rowTemplate</a></code> property can accept either a string or the ID of an HTML element, which is used as
        the template for each row.
    </p>
    </div>
    <div>
      <ejs-grid id="rowtempgrid" :dataSource="data" height=335 width='auto' :rowTemplate="'rowTemplate'">
        <e-columns>
          <e-column headerText='PIZZA MENU' field='Title' textAlign='Center' :customAttributes="{ class: 'e-pizza-cell' }"></e-column>
        </e-columns>
        <template v-slot:rowTemplate="{ data }">
          <tr>
            <td class="details">
              <div class="e-pizza-info-container">
                <div class="e-pizza-image-layout">
                  <img class="e-pizza-image" :src="'src/grid/images/pizza/' + data.ImageURL" :alt="data.Title" />
                </div>
                <div class="e-pizza-info-layout">
                  <div class="e-info-text-separator"><span class="e-pizza-title">{{ data.Title }}</span>
                    <span class="e-pizza-size">({{ data.Size }} size)</span>
                  </div>
                  <div class="e-info-text-separator"><span>{{ data.Description }}</span></div>
                  <div class="e-info-text-separator">
                    <ejs-chiplist :chips=data.Tags cssClass="e-outline"></ejs-chiplist>
                  </div>
                  <div class="e-pizza-price-min-layout e-info-text-separator">
                    <span class="e-pizza-price-text">Buy at&nbsp;</span>
                    <span class="e-pizza-price">{{ data.Price }}</span>
                    <span v-if=data.OriginalPrice>(<span class="e-pizza-original-price">{{ data.OriginalPrice }}</span>)</span>
                  </div>
                </div>
                <div class="e-flex-grow"></div>
                <div class="e-pizza-price-layout">
                  <div class="e-info-text-separator"><span class="e-pizza-price-text">Buy at</span></div>
                  <div class="e-info-text-separator"><span class="e-pizza-price">{{ data.Price }}</span></div>
                  <div v-if=data.OriginalPrice class="e-info-text-separator">
                    <span class="e-pizza-original-price">{{ data.OriginalPrice }}</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </template>
      </ejs-grid>
    </div>

    <div id="description">
    <p>
        In this demo, various types of pizza are displayed along with their ingredients, additional toppings,
        prices, and discount offers, all presented within a custom layout in the Grid.
    </p>
    <p>
        For more details on the row template feature, refer to this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/row/row-template">
            documentation section</a>.
    </p>
    </div>

  </div>
</template>
<style scoped>
@import "../../styles/Grid/row-template.css";
</style>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { pizzaData } from "./data-source";
import { ChipListComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-chiplist': ChipListComponent
  },
  data: () => {
    return {
      data: pizzaData,
    };
  }
}
</script>
