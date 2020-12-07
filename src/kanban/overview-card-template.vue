<template let-data>
  <div class="card-template">
    <div class="e-card-header">
      <div class="e-card-header-caption">
        <div class="e-card-header-title e-tooltip-text">{{ data.Title }}</div>
      </div>
    </div>
    <div class="e-card-content e-tooltip-text">
      <div class="e-text">{{ data.Summary }}</div>
    </div>
    <div class="e-card-custom-footer" v-html="getCardFooter(data)"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getString: function (name) {
      return name.match(/\b(\w)/g).join("").toUpperCase();
    },
    getCardFooter: function (data) {
      let tagDiv = "";
      let tags = data.Tags.split(",");
      for (let tag of tags) {
        tagDiv += "<div class='e-card-tag-field e-tooltip-text'>" + tag + "</div>";
      }
      tagDiv += "<div class='e-card-avatar'>" + this.getString(data.Assignee) + "</div>";
      return tagDiv;
    },
  },
};
</script>
