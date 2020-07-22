<template let-data>
  <div class="card-template">
    <div class="e-card-header">
      <div class="e-card-header-caption">
        <div class="e-card-header-title e-tooltip-text">{{data.Id}}</div>
      </div>
    </div>
    <div class="e-card-content e-tooltip-text">
      <div class="e-text">{{data.Summary}}</div>
    </div>
    <div class="e-card-footer">
      <div :class="['e-card-footer-css e-' + data.Priority]"></div>
      <div class="e-rank">Rank #{{data.RankId}}</div>
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
  }
};
</script>
