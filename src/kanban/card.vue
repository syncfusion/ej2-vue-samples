<template let-data>
  <div class="card-template">
    <div class="card-template-wrap">
      <table class="card-template-wrap">
        <colgroup>
          <col style="width:55px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td class="e-image">
              <img :src="getImage(data.ImageURL)" :alt="data.ImageURL" />
            </td>
            <td class="e-title">
              <div class="e-card-stacked">
                <div class="e-card-header">
                  <div class="e-card-header-caption">
                    <div class="e-card-header-title e-tooltip-text">{{data.Title}}</div>
                  </div>
                </div>
                <div class="e-card-content" style="line-height:2.75em">
                  <table class="card-template-wrap" style="table-layout: auto;">
                    <tbody>
                      <tr>
                        <td colspan="2" v-if="data.Category =='Menu' || data.Category=='Order' || data.Category=='Ready to Serve'">
                          <div class="e-description e-tooltip-text" v-if="data.Category == 'Menu'">{{data.Description}}</div>
                          <div class="e-description e-tooltip-text" v-if="data.Category != 'Menu'">{{data.OrderID}}</div>
                        </td>
                        <td class="card-content" v-if="data.Category == 'Delivered' || data.Category == 'Served'">
                          <div class="e-description e-tooltip-text">{{data.OrderID}}</div>
                          <div class="e-icons e-done"></div>
                        </td>
                      </tr>
                      <tr>
                        <td class="card-content" v-if="data.Category == 'Menu'">
                          <div class="e-size e-tooltip-text">{{data.Size}}</div>
                          <div class="e-price e-tooltip-text">{{data.Price}}</div>
                        </td>
                        <td class="card-content" v-if="data.Category != 'Menu'">
                          <div
                            class="e-preparingText e-tooltip-text" v-if="data.Category == 'Order'">Preparing</div>
                          <div
                            class="e-readyText e-tooltip-text" v-if="data.Category == 'Ready to Serve'">Ready to Serve</div>
                          <div
                            class="e-deliveredText e-tooltip-text" v-if="data.Category == 'Delivered' || data.Category == 'Served'">Delivered</div>
                          <div class="e-time e-tooltip-text" v-if="data.Category == 'Order'">
                            <div class="e-icons e-clock"></div>
                            <div class="e-mins">15 mins</div>
                          </div>
                          <div class="e-time e-tooltip-text" v-if="data.Category == 'Ready to Serve'">
                            <div class="e-icons e-clock"></div>
                            <div class="e-mins">5 mins</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getImage: function(url) {
      return 'source/kanban/images/' + url;
    }
  }
};
</script>